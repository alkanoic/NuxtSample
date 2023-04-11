// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  srcDir: "src", // componentsやpagesなどのディレクトリを置く場所を指定
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
        configPath: "tailwind.config", // 拡張子は不要
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
    },
  },
});
