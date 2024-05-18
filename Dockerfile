FROM oven/bun:1 as base

ARG PORT=6990

ENV PORT=$PORT

LABEL traefik.enable="true"
LABEL traefik.http.routers.homeless-portfolio.tls="true"
LABEL traefik.http.routers.homeless-portfolio.certresolver="zerossl"
LABEL traefik.http.routers.homeless-portfolio.rule="Host(`portfolio.homeless.dev`)"
LABEL traefik.http.routers.homeless-portfolio.loadbalancer.server="$PORT"

WORKDIR /app

FROM base as install
RUN mkdir -p /temp/dev 
COPY package.json bun.lockb /temp/dev
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base as prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun test

FROM base as release

COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app .

USER bun
EXPOSE $PORT/tcp

ENTRYPOINT ["bun", "run", "index.js"]