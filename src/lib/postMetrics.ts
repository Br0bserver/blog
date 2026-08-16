const READING_CHARS_PER_MINUTE = 400;

/**
 * 博客当前以中文为主，展示的“字数”沿用原阅读时长算法：忽略空白后按字符计数。
 * 将算法保持为纯函数，避免列表、详情页各自维护一套统计口径。
 */
export function countContentCharacters(body: string): number {
  return body.replace(/\s/g, '').length;
}

export function readingMinutes(body: string): number {
  return Math.max(1, Math.ceil(countContentCharacters(body) / READING_CHARS_PER_MINUTE));
}
