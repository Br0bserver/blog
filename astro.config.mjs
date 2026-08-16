// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // site 待域名确定后再填，目前无消费者（无 sitemap/canonical）
  markdown: {
    // shiki 双主题：亮/暗变量随 html[data-theme] 切换（见详情页样式）
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
