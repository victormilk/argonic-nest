# ---- Base Node ----
FROM node:alpine as base
WORKDIR /app
COPY package.json yarn.lock ./

# ---- Dependencies ----
FROM base AS dependencies
RUN yarn install --frozen-lockfile

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /app
COPY . .
RUN yarn build

# --- Release with Alpine ----
FROM node:alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
COPY --from=dependencies /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["yarn", "start:prod"]
