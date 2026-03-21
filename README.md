# 嗑点 · 静态原型

纯 **HTML + CSS + JavaScript**，无 React / Vite / 构建步骤。

## 使用方式

1. 用浏览器直接打开项目根目录下的 **`index.html`**（双击或「文件 → 打开」）。
2. 若浏览器限制 `file://` 下的部分能力，可用任意静态服务器，例如：
   - VS Code / Cursor 的 **Live Server** 插件  
   - 或：`python3 -m http.server 8080` 后在同目录访问 `http://localhost:8080`

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 结构：顶栏、卡片列表容器、底栏、`+` 按钮、编辑抽屉、设置抽屉 |
| `styles.css` | 布局、配色、抽屉动画、卡片与表单样式 |
| `app.js` | 文案切换、列表渲染、`#标签#` 高亮、完成时插入新卡片 |

图标为内联 **SVG**，无图标库依赖；正文字体通过 Google Fonts 加载 **Noto Sans SC**（仅外链，无框架）。
