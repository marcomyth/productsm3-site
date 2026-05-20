DISPLAY_NAME=productsm3-site
DESCRIPTION=Site Next.js do productsm3
MAIN=package.json
MEMORY=1536
VERSION=recommended
START=NODE_OPTIONS=--max-old-space-size=1100 npm run build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/ && node .next/standalone/server.js
SUBDOMAIN=productsm3-site
AUTORESTART=true
