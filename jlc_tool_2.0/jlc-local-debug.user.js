// ==UserScript==
// @name         JLC_CART_TOOL_2.0-本地调试
// @namespace    http://tampermonkey.net/
// @version      4.2.13
// @description  购物车助手2.0
// @author       Lx
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM.setClipboard
// @grant        GM_openInTab
// @grant        unsafeWindow
// @connect      szlcsc.com
// @connect      gitee.com
// @connect      raw.giteeusercontent.com
// @connect      scriptcat.org
// @match        https://cart.szlcsc.com/cart/display.html**
// @match        https://list.szlcsc.com/brand/*.html**
// @require      https://raw.giteeusercontent.com/mlx6_admin/public_resource_lc/raw/master/public/jquery-351.js
// @require      https://raw.giteeusercontent.com/mlx6_admin/public_resource_lc/raw/master/public/vue.js
// @require      https://raw.giteeusercontent.com/mlx6_admin/public_resource_lc/raw/master/public/Axios.js
// @require      https://raw.giteeusercontent.com/mlx6_admin/public_resource_lc/raw/master/public/ajaxHookerLatest.js
// @require      https://raw.giteeusercontent.com/mlx6_admin/public_resource_lc/raw/master/public/lccouponcss.js
// @license      MIT

// 本文件由 `npm run build` 自动生成（scripts/build.js），不要手工修改。
// @require 指向本机 dist 下的构建产物绝对路径，`@version` 与 package.json 保持一致。
// 油猴【管理扩展程序】里必须勾选【允许访问文件网址】，否则这一行会加载失败。
//
// 重要：油猴会缓存 @require 的内容，只在"脚本本身被更新"时才会重新拉取。
// 所以 dist 重新构建后，需要在油猴里重新导入本文件（导入后版本号变化即会触发刷新）。
// @require      file:///home/runner/work/jlc_tool_2.0/jlc_tool_2.0/dist/tampermonkey-vue.user.js

// ==/UserScript==
