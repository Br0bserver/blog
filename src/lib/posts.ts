import { getCollection, type CollectionEntry } from 'astro:content';
import { countContentCharacters, readingMinutes } from './postMetrics';

/** 列表页每页篇数 */
export const PAGE_SIZE = 10;

export type Post = CollectionEntry<'blog'>;

/** 按发布日期倒序的全量文章 */
export async function sortedPosts(): Promise<Post[]> {
  return (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** 正文字符数，与列表页“字数”展示使用同一口径 */
export function wordCount(post: Post): number {
  return countContentCharacters(post.body ?? '');
}

/** 估算阅读时长（分钟）：中文按 ~400 字/分钟 */
export function readMinutes(post: Post): number {
  return readingMinutes(post.body ?? '');
}
