DISPLAY_NAME=productsm3-site
DESCRIPTION=Site Next.js do productsm3
MAIN=package.json
MEMORY=1536
VERSION=recommended
START=cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/ && NODE_OPTIONS=--max-old-space-size=800 node .next/standalone/server.js
SUBDOMAIN=productsm3-site
AUTORESTART=true
