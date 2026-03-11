# ─────────────────────────────────────────────────────────────
# Dockerfile for hermes-client (PromptStrike Frontend)
# ─────────────────────────────────────────────────────────────
# This is a STUB — do not use in production yet.
# Outlined below is the recommended multi-stage build approach.
#
# Stage 1: Build
# ─────────────────────────────────────────────
# FROM node:20-slim AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build
#
# Stage 2: Production
# ─────────────────────────────────────────────
# FROM node:20-slim
# WORKDIR /app
# COPY --from=builder /app/build ./build
# COPY --from=builder /app/package*.json ./
# RUN npm ci --omit=dev
# EXPOSE 3000
# ENV NODE_ENV=production
# CMD ["node", "build"]
#
# Notes:
# - adapter-node outputs to build/ by default.
# - The server listens on port 3000 by default.
# - Pass PUBLIC_API_URL as a build arg or runtime env var
#   to configure the ares-api backend URL.
# - Target OS is Kali Linux — test the image on Kali before
#   deploying to production.
# ─────────────────────────────────────────────────────────────
