# Build stage
FROM node:12-alpine as BUILDER
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV PORT=3000
EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]


# For production, build a multi-stage image so the image
# includes only runtime dependencies

# FROM node:12-alpine
# WORKDIR /app
# COPY --from=BUILDER /app/package.json ./package.json
# COPY --from=BUILDER /app/package-lock.json ./package-lock.json
# COPY --from=BUILDER /app/dist ./dist
# CMD [ "npm", "run", "start"]