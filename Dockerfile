FROM node:20.14.0-alpine as builder

WORKDIR /tmp

COPY . .

RUN ["yarn", "--frozen-lockfile"]

RUN ["yarn", "build"]

FROM node:20.14.0-alpine as production

WORKDIR /app

COPY --from=builder /tmp/package.json .

RUN ["yarn", "--production", "--frozen-lockfile"]

COPY --from=builder /tmp/dist .

ENTRYPOINT ["node"]

CMD ["dist/index.js"]
