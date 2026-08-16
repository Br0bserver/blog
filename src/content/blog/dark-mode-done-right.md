---
title: 暗色主题的正确打开方式 — CSS 变量 + 一行前置脚本
description: 不写两套样式，不用框架：暗色模式既跟随系统又能手动切换，还不闪屏。
pubDate: 2026-07-21
tags: ['CSS', '教程']
---

## 变的是令牌，不是组件

错误做法是给每个组件写 `.dark` 后缀的重复样式，三个月后两套样式必然漂移。正确思路一句话：**组件只引用变量，变量按主题取值**。

```css
:root {
  --bg: #fcf9f2;
  --ink: #101010;
  --surface: #ffffff;
}

[data-theme='dark'] {
  --bg: #131313;
  --ink: #e0e0e0;
  --surface: #131313;
}
```

## 切换：一个 dataset 就够

```js
const root = document.documentElement;
const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
root.dataset.theme = next;
localStorage.setItem('theme', next);
```

## 防闪屏：内联脚本放在 head 里

暗色模式最恼人的 bug 是首屏闪白。解法是 `<head>` 里一段阻塞式内联脚本，抢在首次绘制之前：

```html
<script is:inline>
  (() => {
    const saved = localStorage.getItem('theme');
    document.documentElement.dataset.theme =
      saved ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  })();
</script>
```

优先级：**用户手动选择 > 系统偏好 > 默认浅色**。

## 反相不是重设计

深色模式只做系统性替换：纸墨互换、次级灰降档、背景巨字换色。**不新增任何颜色**——信号红在两个主题里是同一个值，它在深底上反而更亮。

本站右上角的方块就是切换开关，点一下试试。
