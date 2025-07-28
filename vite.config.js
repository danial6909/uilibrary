// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "DanielReactUiKit",
      fileName: (format) => `daniel-react-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // این بخش `assetFileNames` را برای CSS حذف یا اصلاح کنید
        // اگر می‌خواهید همه CSS درون JS تزریق شود، می‌توانید این شرط را حذف کنید
        // یا مطمئن شوید که CSS از اینجا خارج نمی‌شود.
        // مثلاً برای تصاویر نگه دارید:
        assetFileNames: (assetInfo) => {
          if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(assetInfo.name)) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    cssCodeSplit: false, // این باید CSS را درون JS تزریق کند
  },
});
