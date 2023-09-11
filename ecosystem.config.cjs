module.exports = {
  apps: [
    {
      name: "portfolio-bun",
      script: "bun",
      args: "run ./index.js",
      env: {
        PORT: 6990
      }
    },
  ],
};
