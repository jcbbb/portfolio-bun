FROM oven/bun:1 as base

USER bun

ARG PORT=6990

ENV PORT=$PORT

LABEL traefik.enable="true"
LABEL traefik.http.routers.homeless-portfolio.tls="true"
LABEL traefik.http.routers.homeless-portfolio.certresolver="zerossl"
LABEL traefik.http.routers.homeless-portfolio.rule="Host(`portfolio.homeless.dev`)"
LABEL traefik.http.routers.homeless-portfolio.loadbalancer.server="$PORT"

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --production

USER bun

COPY --chown=bun:bun . .

EXPOSE $PORT/tcp

ENTRYPOINT ["bun", "run", "index.js"]
