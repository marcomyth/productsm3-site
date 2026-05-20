export function readEnv(name: string): string | undefined {
  const value = process.env?.[name];
  return value && value.length > 0 ? value : undefined;
}
