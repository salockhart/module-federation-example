# Install dependencies only when needed
FROM node:hydrogen-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci


# Rebuild the source code only when needed
FROM node:hydrogen-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# Production image, copy all the files and run http server 
FROM pierrezemb/gostatic as runner
COPY --from=builder /app/build /srv/http/
ENTRYPOINT ["/goStatic", "-enable-logging", "-fallback", "/index.html"]
