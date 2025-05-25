module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "market-assets.strapi.io", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "market-assets.strapi.io", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "http://localhost:3001",'https://nextjs-frontend-delta-eight.vercel.app', "https://localhost:3000"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "Cache-Control",
        "Pragma",
        "Expires",
        "X-Requested-With",
      ],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // Increase form limit
      jsonLimit: "256mb", // Increase JSON limit
      textLimit: "256mb", // Increase text limit
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 200MB file size limit
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
]
