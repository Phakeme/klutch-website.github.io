module.exports = {
    env: {
        PROJECT_ID: process.env.PROJECT_ID,
        DATASET: process.env.DATASET,
        API_VERSION: process.env.API_VERSION,
        TOKEN: process.env.TOKEN,
        USE_CDN: process.env.USE_CDN,
    },
     async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://klutch-website-github-io-phakeme.vercel.app/" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
