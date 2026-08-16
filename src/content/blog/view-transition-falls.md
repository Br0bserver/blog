---
title: View Transition 的三种死法 — 与它们的兜底
description: Illegal invocation、ready 永不结算、过渡层挡住整页。实战踩坑记录。
pubDate: 2026-05-19
tags: ['CSS', '工程']
---

> 占位文章：正文待补。

## 永远要有 skipTransition 的退路

```js
// 必须绑定在 document 上调用，解绑调用会抛 Illegal invocation
const vt = document.startViewTransition(apply);
vt.finished.catch(() => {}).finally(cleanup);
```
