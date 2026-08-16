# blog

瑞士平面 × 新粗野主义（Swiss Brutalism）风格的个人博客，基于 [Astro](https://astro.build) 静态构建。

## 命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 本地开发服务器（localhost:4321） |
| `npm run build` | 产出静态站点到 `dist/` |
| `npm run preview` | 预览 `dist/` 构建结果 |

## 结构

```
src/
├── components/     # 顶栏、页脚、背景层、文章行
├── content/blog/   # Markdown 文章（content collection）
├── layouts/        # 基础布局（字体、主题反 FOUC）
├── lib/            # 工具函数
├── pages/          # 路由（目前仅首页）
└── styles/         # 全局设计系统（双主题 CSS 变量）
```

- 主题：浅色 / 暗色，首访跟随系统，手动切换后持久化（localStorage）
- `DESIGN.md`：设计系统描述（Google Stitch 格式），用于向 Stitch 传递风格，不是前端实现文档
- 页面按设计稿逐个补充，未实现的链接暂时 404 属预期
