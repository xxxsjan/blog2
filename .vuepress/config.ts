import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { navbar, series } from "./navbar";

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
  theme: recoTheme({
    logo: "/code.png",
    author: "xxxsjan",
    authorAvatar: "https://avatars.githubusercontent.com/u/60548971?v=4",
    docsRepo: "https://github.com/xxxsjan/blog2",
    docsBranch: "main",
    docsDir: "example",
    selectLanguageName: "简体中文",
    lastUpdatedText: "最后更新时间",
    catalogTitle: "页面导航",
    tip: "提示",
    info: "信息",
    warning: "警告",
    danger: "危险",
    details: "详情",
    editLinkText: "编辑当前页面",
    notFound: "哇哦，没有发现这个页面！",
    backToHome: "返回首页",
    // series 为原 sidebar
    series: {
      // "/docs/theme-reco/": [
      //   {
      //     text: "module one",
      //     children: ["home", "theme"],
      //   },
      // ],
      ...series,
    },
    navbar: [
      { text: "首页", link: "/" },
      // { text: "分类", link: "/categories/reco/1.html" },
      // { text: "标签", link: "/tags/tag1/1.html" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
      ...navbar,
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
    // algolia搜索 https://dashboard.algolia.com/
    algolia: {
      indexName: "blog2",
      appId: "YBYUHFPZ1C",
      apiKey: "d4076b979399477f79c55eec660730ec",
      placeholder: "请输入关键词进行搜索",
      // inputSelector: "### REPLACE ME ####",
      // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: true,
    },
    // socialLinks: [
    //   {
    //     icon: "IconReco",
    //     link: "https://recoluan.com/",
    //   },
    //   {
    //     icon: "IconRevili",
    //     link: "https://revili.recoluan.com",
    //   },
    // ],
  }),
  // debug: true,
});
