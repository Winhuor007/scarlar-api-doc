import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  plugins: [react(), tailwindcss(),],

  server: {
    port: 5173,

    proxy: {
      "/api/deeplink": {
        target: "https://stage-partner.wingbank.com:6067",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/deeplink/, ""),
      },

      "/api/sdk": {
        target: "https://stage-pm2.wingbank.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/sdk/, ""),
      },
    },
  },
});
