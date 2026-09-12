---
version: alpha
name: Swiss Brutal Diary
description: 瑞士平面设计的网格理性 × 新粗野主义的结构野性。秩序是骨架，大声是性格。
colors:
  primary: "#101010"
  secondary: "#5C5A54"
  tertiary: "#E63312"
  neutral: "#F4F1EA"
  surface: "#FFFFFF"
  on-surface: "#101010"
  highlight: "#FFE800"
typography:
  headline-display:
    fontFamily: Archivo
    fontSize: 64px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: Archivo
    fontSize: 40px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline-md:
    fontFamily: Archivo
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.15
  headline-sm:
    fontFamily: Archivo
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: Archivo
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Archivo
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "IBM Plex Mono"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.12em
  label-md:
    fontFamily: Archivo
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.02em
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: 0px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  "2xl": 48px
  "3xl": 64px
  "4xl": 96px
  gutter: 24px
  margin: 32px
  grid-columns: 12
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 14px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 24px
  list-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 6px 12px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 14px 16px
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 10px 16px
---

# Swiss Brutal Diary — 设计系统

## Overview

**一句话定位：瑞士平面设计的网格纪律，装着新粗野主义的结构野性。**

这个系统刻意约束新粗野主义最容易失控的部分——颜色数量、装饰密度、随机旋转——同时完整保留它的结构签名：粗黑边框、零圆角、无模糊的硬偏移阴影。情绪上是「大声但有条理」：像一张瑞士海报被钉在粗野的混凝土墙上。

性格关键词：**理性、坦率、结构感、克制的大胆**。

核心原则：
1. **网格高于一切**——任何元素都必须落在 12 列网格和 8px 间距节奏上；对齐是强制的。
2. **结构即装饰**——层级由边框、色块、字号对比表达，不依赖渐变、投影模糊。
3. **排版是主角**——巨大的 grotesque 标题（900 字重）承载视觉冲击；正文安静、灰阶、行距宽松。
4. **一个强调色**——浅色信号红、深色工业蓝，链接与强调角色分离。
5. **双主题性格**——浅色暖纸与信号红，深色冷石板与工业蓝；深色卡片独立浮层（#22252E）。

## Colors

调色板遵循双主题性格：**浅色暖纸与信号红，深色冷石板与工业蓝**。

- **Primary / Ink（浅色 #101010 / 深色 #E0E0E0）：** 墨色，承担标题、主要正文、主边框。
- **Surface（浅色 #FFFFFF / 深色 #22252E）：** 卡片表面色。深色采用 #22252E 从底板中浮现，拉开底板与卡片层级，避免形成大灰板。
- **Background（浅色 #FCF9F2 / 深色 #1A1C23）：** 底色。分别配合纸纤维与水泥质感纹理。
- **Accent（浅色 #E63312 信号红 / 深色 #4A69BD 工业蓝）：** 块面强调色与标识。
- **Link（浅色 #E63312 / 深色 #8FA9ED 链接蓝）：** 链接专用角色，深色在底板与卡片上均保证 5:1 以上高对比度。
- **Meta & Meta-Dim（浅色 #444748, #888888 / 深色 #A0A4B0, #757985）：** 区分主要等宽元数据与次要注记。
- **Shadow（浅色 #101010 / 深色 #A5A5A7）：** 零模糊硬阴影，深色采用七成墨色保持图形化厚度。

## Typography

**单一字体家族的重量对比**——Archivo 是一款 grotesque（瑞士血统），从 400 到 900 全重量覆盖：用 900 的巨大标题拿到新粗野主义的冲击力，用 400 的正文保持瑞士式的安静可读。

中文场景配对 **Noto Sans SC**，按 `Archivo, "Noto Sans SC", sans-serif` 栈回退。

- **Headlines：** Archivo 800–900，紧凑行高（英文海报 0.95–1.1，中文文章标题 1.15–1.2），负字距。
- **Body：** Archivo 400，16–17px，行高 1.9，阅读限宽约 40–42em，代码与公式占满卡片全宽。
- **Labels & Code：** IBM Plex Mono，宽字距（0.12em）。承担编号、日期、标签与代码。

## Layout & Grid

**共用 12 列网格（桌面 max 1240px），移动端自适应。** 
- 背景虚线列与正文 1240px 容器严格共用最大宽度、边距与沟槽，确保对齐一致。
- 标尺采用固定的 `COL_00` 至 `COL_12` 刻度指示。
- 文章内页降低背景巨字与列线干扰。

## Elevation & Depth

**硬偏移阴影，零模糊。** 阴影代表物理厚度，交互统一采用下压模型：

- **主厚度（说明卡、文章外框、主按钮）：** $e = 8\text{px}$（移动端 6px）；
- **条目厚度（文章行）：** $e = 6\text{px}$（移动端 4px）；
- **次级控件与标签：** $e = 2–4\text{px}$；
- **按压模型：** 
  - 静止：位移 0，阴影 $e$；
  - 悬停（`@media (hover: hover)`）：向右下位移 2px，阴影 $e - 2\text{px}$（160ms 平滑过渡）；
  - 按下（`:active`）：向右下位移 $e$，阴影归零（80ms）；
  - 键盘焦点：保留清晰虚线框，不依赖位移。
- **卡纸落定：** 首次进入视口时自上方 6px 错峰（40ms 步进）平落定格，`prefers-reduced-motion` 下禁用。

## Shapes

**所有圆角为 0。** 这是新粗野主义的底线，也是与瑞士理性最一致的点——矩形就是矩形。

- 容器边界：4px 实线边框；
- 次级控件与引用框：2px 实线边框；
- 辅助与内部细线：1–2px 细线或虚线。

## Components

组件遵循「白卡纸 + 墨边框 + 硬阴影」的统一构造，变体只换背景色，不改结构。

- **Buttons：** 主按钮 = 墨底纸字（对比度 15:1）；hover 整体变信号红。次按钮 = 白底墨字 + 3px 墨边框 + 硬阴影。按钮文字一律 label-md（13px/700），大写，不做图标堆叠。
- **Cards：** 白卡纸、3px 墨边、`4px 4px 0` 硬阴影、内边距 24px。卡片是网格中的矩形公民——不旋转、不悬浮错位。可点击卡片 hover 抬升（位移 + 阴影增大）。
- **List rows（文章列表）：** 编辑感的行式条目而非彩色卡片墙：编号（label-caps 灰）+ 标题（headline-sm 墨）+ 日期标签，行间 2px 分隔线；hover 时整行背景变纸色、右侧箭头平移进入。
- **Chips：** 纸色底 + 2px 墨边 + label-caps 全大写。标签永远是中性色，**不给标签上色**。
- **Inputs：** 白底、3px 墨边、零圆角，聚焦时边框变信号红 + 2px 偏移外描边。
- **Nav：** 顶部通栏，logo 与导航左对齐，主题切换按钮居右；链接用 label-caps，当前页带 3px 墨色下边框。

## Do's and Don'ts

- **Do** 每屏至多一处大面信号红，用在唯一最重要的动作上
- **Do** 把所有间距和字号锁定在 token 值上；需要层级时先调字重和留白
- **Do** 保持 WCAG AA（正文 4.5:1）；石墨灰只用于 ≥12px 的文字
- **Do** 暗色模式按「反相规则」系统性替换，不新增颜色
- **Don't** 使用任何圆角、模糊阴影、渐变、毛玻璃、投影纹理
- **Don't** 让元素随机旋转或脱离网格——野性来自颜色和字重，不来自错位
- **Don't** 同一屏使用两种以上强调色（荧光黄只做文字标记，不与红色大面色块同屏）
- **Don't** 引入第三个字体家族；等宽字只承担 label 和 code 角色
- **Don't** 用表情符号、贴纸、吉祥物插画充当设计元素；几何符号（■ ★ →）可以用，但要网格对齐且每屏不超过一处
