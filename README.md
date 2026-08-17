# blog

Br0b 的个人博客，记录代码、设计与尚未完成的想法，基于 [Astro](https://astro.build) 静态构建。

运行环境：Node.js 22.12 或更高版本。

## 命令

| 命令                   | 说明                              |
| ---------------------- | --------------------------------- |
| `npm run dev`          | 本地开发服务器（localhost:4321）  |
| `npm run build`        | 产出静态站点到 `dist/`            |
| `npm run check`        | 执行 Astro 与 TypeScript 静态检查 |
| `npm test`             | 运行核心逻辑测试                  |
| `npm run format:check` | 检查代码格式                      |
| `npm run preview`      | 预览 `dist/` 构建结果             |

## 结构

```
src/
├── components/     # 页面组件及其局部样式和交互
├── content/blog/   # Markdown 文章（content collection）
├── layouts/        # 基础布局（字体、主题反 FOUC）
├── lib/            # 文章查询、统计与纯函数测试
├── pages/          # 首页、文章列表、分页与详情路由
├── scripts/        # 可独立维护的客户端控制逻辑
└── styles/         # 全局设计令牌与跨页面基础样式
```
