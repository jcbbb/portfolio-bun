FROM oven/bun:1 as base

USER bun

ARG PORT=6990

ENV PORT=$PORT

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --production

USER bun

COPY --chown=bun:bun . .

EXPOSE $PORT/tcp

ENTRYPOINT ["bun", "run", "index.js"]
