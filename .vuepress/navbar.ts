import fg from "fast-glob";
import path from "path";

const docsPath = process.cwd();

function getPath(p) {
  return path.join(docsPath, ".", p);
}
function getDirs(p) {
  return fg.sync("**", {
    onlyFiles: false,
    cwd: getPath(p),
    deep: 1,
    ignore: ["*.md"],
  });
}

function getMdFiles(p) {
  return fg.sync("**", {
    onlyFiles: true,
    cwd: getPath(p),
    deep: 1,
    ignore: ["index.md"],
  });
}

function createNav(dirName) {
  const dirs = getDirs(`${dirName}`);
  const mdFiles = getMdFiles(`${dirName}`);
  const res = {
    text: dirName,
    link: `/${dirName}`,
    children: [
      // 递归处理子目录
      ...dirs.map((dir) => createNav(`${dirName}/${dir}`)),
      // 添加当前目录的md文件
      ...mdFiles.map((file) => ({
        text: file.replace(".md", ""),
        link: `/${dirName}/${file.replace(".md", "")}`,
        // type: "file",
      })),
    ],
    // type: "directory",
  };
  return res;
}
/**
 * sideBar 转 nav
 * @param {*} sideBar
 * @param {*} dirName
 * @returns
 */
function toNav(sideBar, dirName) {
  return sideBar.map((item) => {
    return {
      text: item.text,
      link: item.items
        ? `/${dirName}/${item.text}/${item.items[0].text}`
        : `/${dirName}/${item.text}`,
    };
  });
}

function createSideNavData() {
  const navList: any = [];
  const sideBarObj = {};
  const arr = [
    { text: "笔记", docDirName: "webnote" },
    //   { text: "源码分析", docDirName: "source-code" },
    //   { text: "js相关", docDirName: "doc-js" },
    //   { text: "读书笔记", docDirName: "doc-reading-notes" },
    //   { text: "环境安装", docDirName: "doc-env-install" },
    //   { text: "docker", docDirName: "doc-docker" },
    //   { text: "life", docDirName: "doc-life" },
  ];
  const series = {
    // "/webnote/ai/": [  { text: "module one", children: ["home", "theme"],  },  ],
  };
  for (let item of arr) {
    const _nav = createNav(item.docDirName);
    navList.push({
      ..._nav,
      text: item.text,
      children: _nav.children.map((m) => {
        const key = `/${m.text}/`;
        const filename = m.text.split("/")[m.text.split("/").length - 1];
        series[key] = series[key] || [];
        series[key].push({
          text: filename,
          children: m.children.map((m) => m.text),
        });
        return {
          text: filename,
          link: m.children ? m.children[0].link : m.link,
        };
      }),
    });
    // sideBarObj[`/${item.docDirName}/`] = [{ text: item.text, items: data[0] }];
  }
  console.log(JSON.stringify(series, null, 2));
  return {
    navList,
    sideBarObj,
    series,
  };
}

const { navList, sideBarObj, series } = createSideNavData();
// console.log("navList: ", JSON.stringify(navList, null, 2));

export { navList, sideBarObj, series };
