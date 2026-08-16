---
title: 弃用 scroll timeline — rAF 视差的回归
description: CSS 滚动时间线在部分 WebView 会冻结整页滚动，一段 rAF 解决所有。
pubDate: 2026-05-10
tags: ['工程', '动效']
---

> 占位文章：正文待补。

## will-change 与被动监听

滚动量为 $s$ 时，巨字层的补偿量是 $y = \mathrm{RATE} \times s$：

$$
v_{\text{word}} = (1 - \mathrm{RATE}) \cdot v_{\text{scroll}}, \quad \mathrm{RATE} = 0.35 \Rightarrow v_{\text{word}} = 0.65\,v_{\text{scroll}}
$$
