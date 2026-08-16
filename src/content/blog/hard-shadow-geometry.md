---
title: 硬阴影的几何学 — box-shadow 完全指南
description: 0 模糊、纯位移、实心色块——硬阴影的灵魂就藏在这一个 CSS 属性里。
pubDate: 2026-08-05
tags: ['CSS', '教程']
---

## 一行 CSS 的灵魂

结论先拍在桌上：

```css
.brutal-shadow {
  box-shadow: 8px 8px 0 0 var(--shadow-c);
}
```

四个关键点，一个不能少：

| 参数 | 值 | 作用 |
| ---- | ---- | ---- |
| x 位移 | 8px | 阴影永远在右下 |
| y 位移 | 8px | 与 x 相等，45° 投射 |
| 模糊 | **0** | 灵魂所在，实心色块 |
| 颜色 | 纯色 | 跟随墨色令牌 |

## 交互：让阴影「受力」

悬停时元素向右下位移、阴影同步变小——像手指把方块压进桌面：

```css
.press {
  box-shadow: 8px 8px 0 0 var(--shadow-c);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.press:hover {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0 0 var(--red);
}
```

## 深色模式：阴影跟随墨色

黑影落在黑底上会消失。解法是让阴影颜色引用墨色令牌——浅色是黑影，深色自动翻转为白影，视觉重量完全对称：

```css
:root { --ink: #101010; --shadow-c: var(--ink); }
[data-theme='dark'] { --ink: #e0e0e0; }
```

## 尺寸备忘

- 小按钮：`4px 4px 0`
- 卡片：`8px 8px 0`
- 大区块：可以到 `12px 12px 0`

唯一的禁区：**永远不要加模糊半径**。哪怕 1px 都会让整个风格漏气。
