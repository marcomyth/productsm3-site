/**
 * Leitor mínimo de dimensões de imagem (PNG/GIF/WEBP/JPEG/SVG) direto dos
 * bytes do header — sem depender de uma lib nativa (sharp) pra isso.
 * Formato não reconhecido → {} (width/height ficam null no banco, não
 * quebra o upload).
 */
export function getImageSize(bytes: Uint8Array): { width?: number; height?: number } {
  return readPng(bytes) ?? readGif(bytes) ?? readWebp(bytes) ?? readJpeg(bytes) ?? readSvg(bytes) ?? {};
}

function view(b: Uint8Array): DataView {
  return new DataView(b.buffer, b.byteOffset, b.byteLength);
}

function readPng(b: Uint8Array) {
  if (b.length < 24) return null;
  const isPng =
    b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 &&
    b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a;
  if (!isPng) return null;
  const v = view(b);
  return { width: v.getUint32(16), height: v.getUint32(20) };
}

function readGif(b: Uint8Array) {
  if (b.length < 10) return null;
  if (String.fromCharCode(b[0], b[1], b[2]) !== "GIF") return null;
  const v = view(b);
  return { width: v.getUint16(6, true), height: v.getUint16(8, true) };
}

function readWebp(b: Uint8Array) {
  if (b.length < 30) return null;
  const isRiff = b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46;
  const isWebp = b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50;
  if (!isRiff || !isWebp) return null;
  const v = view(b);
  const chunk = String.fromCharCode(b[12], b[13], b[14], b[15]);

  if (chunk === "VP8X") {
    const width = 1 + (b[24] | (b[25] << 8) | (b[26] << 16));
    const height = 1 + (b[27] | (b[28] << 8) | (b[29] << 16));
    return { width, height };
  }
  if (chunk === "VP8 ") {
    const width = v.getUint16(26, true) & 0x3fff;
    const height = v.getUint16(28, true) & 0x3fff;
    return { width, height };
  }
  if (chunk === "VP8L") {
    const bits = v.getUint32(21, true);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function readJpeg(b: Uint8Array) {
  if (b.length < 4 || b[0] !== 0xff || b[1] !== 0xd8) return null;
  const v = view(b);
  let offset = 2;
  while (offset < b.length - 9) {
    if (b[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = b[offset + 1];
    const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    const segmentLength = v.getUint16(offset + 2);
    if (isSof) {
      return { height: v.getUint16(offset + 5), width: v.getUint16(offset + 7) };
    }
    offset += 2 + segmentLength;
  }
  return null;
}

function readSvg(b: Uint8Array) {
  const head = new TextDecoder().decode(b.subarray(0, 2000));
  if (!/<svg[\s>]/i.test(head)) return null;
  const width = head.match(/\swidth=["']?([\d.]+)/i)?.[1];
  const height = head.match(/\sheight=["']?([\d.]+)/i)?.[1];
  if (width && height) return { width: Math.round(Number(width)), height: Math.round(Number(height)) };
  const viewBox = head.match(/viewBox=["']?\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/i);
  if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
  return null;
}
