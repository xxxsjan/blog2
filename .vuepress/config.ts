import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { themeConfig } from "./themeConfig";
// 其他主题 https://github.com/vuepress-theme-hope/vuepress-theme-hope
// https://github.com/vuepress-reco/vuepress-theme-reco

export default defineUserConfig({
  title: "xxxsjan的知识库",
  description: "前端技术知识库",
  head: [
    ["meta", { name: "keywords", content: "前端技术,知识库" }],
    ["meta", { name: "description", content: "前端技术知识库" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme(themeConfig),
  // debug: true,
});
