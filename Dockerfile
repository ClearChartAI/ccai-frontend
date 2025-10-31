# syntax=docker/dockerfile:1

# Build stage: install deps and generate static assets
FROM node:20.19.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage: serve the prebuilt assets
FROM node:20.19.0-alpine AS runtime
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 8000
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080} --single"]
