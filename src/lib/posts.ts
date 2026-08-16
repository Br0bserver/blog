import { getCollection, type CollectionEntry } from 'astro:content';

/** 列表页每页篇数 */
export const PAGE_SIZE = 10;

export type Post = CollectionEntry<'blog'>;

/** 按发布日期倒序的全量文章 */
export async function sortedPosts(): Promise<Post[]> {
  return (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

// 字数占位：接入真实统计前先固定演示值
export const wordsPlaceholder: Record<string, number> = {
  'grid-is-the-soul': 1204,
  'hard-shadow-geometry': 892,
  'dark-mode-done-right': 2150,
  'typography-as-infrastructure': 1020,
  'border-as-structure': 760,
  'mono-font-discipline': 645,
  'red-is-the-only-accent': 930,
  'paper-texture-notes': 510,
  'view-transition-falls': 1480,
  'raf-parallax-lesson': 875,
  'sticker-grammar': 690,
  'static-first': 1120,
};

/** 估算阅读时长（分钟）：中文按 ~400 字/分钟 */
export function readMinutes(post: Post): number {
  const chars = post.body.replace(/\s/g, '').length;
  return Math.max(1, Math.ceil(chars / 400));
}
