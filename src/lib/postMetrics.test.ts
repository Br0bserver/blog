import { describe, expect, it } from 'vitest';
import { countContentCharacters, readingMinutes } from './postMetrics';

describe('post metrics', () => {
  it('counts non-whitespace characters with one shared rule', () => {
    expect(countContentCharacters(' 网格 is\n soul ')).toBe(8);
  });

  it('uses a minimum reading time of one minute', () => {
    expect(readingMinutes('')).toBe(1);
    expect(readingMinutes('字'.repeat(400))).toBe(1);
    expect(readingMinutes('字'.repeat(401))).toBe(2);
  });
});
