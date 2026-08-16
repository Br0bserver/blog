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

性格关键词：**理性、坦率、结构感、克制的大胆**。受众是欣赏排版和网格、反感过度装饰的设计与开发人群。

核心原则（当具体规则未覆盖时按此决策）：

1. **网格高于一切**——任何元素都必须落在 12 列网格和 8px 间距节奏上；对齐是强制的，不做随机旋转。
2. **结构即装饰**——层级由边框、色块、字号对比表达，不依赖渐变、投影模糊、纹理或插画。一个视口内装饰元素不超过一处。
3. **排版是主角**——巨大的 grotesque 标题（900 字重）承载视觉冲击；正文安静、灰阶、行距宽松。
4. **一个强调色**——信号红只用于交互与关键强调，每屏最多一处大面红色。
5. **暗色模式 = 反相，不是重设计**——纸与墨互换，红色和黄色不变，硬阴影颜色跟随墨色翻转（详见 Colors）。

## Colors

调色板是瑞士海报式的：**高对比中性色 + 唯一的信号红**。颜色打架是新粗野主义的常见病，此处用色数量硬性封顶。

- **Primary（#101010，墨）：** 近黑的暖灰墨色，承担标题、正文、所有边框和阴影。不是纯黑——纯黑在米白纸上太尖锐。
- **Secondary（#5C5A54，石墨）：** 元数据、日期、编号、辅助说明。它足够深，在纸色背景上仍满足 AA 对比度。
- **Tertiary（#E63312，信号红）：** 借自瑞士国旗红与火车站指示系统。**唯一的交互色**：文字链接的下划线、主按钮 hover、焦点环、选中态、「最新」标记。每屏大面红不超过一处。
- **Neutral（#F4F1EA，纸）：** 页面底色，带一点暖度的灰白，像未涂装的纸箱。比纯白柔和，让黑边框显得更黑。
- **Surface（#FFFFFF，卡纸）:纯白。** 只用于卡片和输入控件，制造「纸上贴卡纸」的物层关系。
- **Highlight（#FFE800，荧光黄）：** 只做一件事——标题中至多一个词的荧光笔下划标记。绝不做背景、绝不做大面积色块。

**暗色模式（反相规则）：** 底色 #101010，卡纸 #1A1A18，墨/文本/边框/阴影全部翻转为 #F4F1EA，石墨变 #A8A59C；信号红与荧光黄保持不变（它们在深底上反而更亮）。反相是系统性替换，不新增任何颜色。

## Typography

**单一字体家族的重量对比**——Archivo 是一款 grotesque（瑞士血统），从 400 到 900 全重量覆盖：用 900 的巨大标题拿到新粗野主义的冲击力，用 400 的正文保持瑞士式的安静可读。**不引入第二家族做展示字**，混搭是上一版失控的根源。

中文场景配对 **Noto Sans SC**（同为 grotesque 血统的黑体，覆盖 400/500/700/900），按 `Archivo, "Noto Sans SC", sans-serif` 栈回退；中英混排时行高与字重遵循同一 token。

- **Headlines：** Archivo 800–900，紧凑行高（1.05–1.15），负字距。标题即海报，允许占据 8 列以上的宽度，左对齐，绝不居中。
- **Body：** Archivo 400，16–18px，行高 1.7，灰阶阅读。正文永远不与标题抢注意力。
- **Labels：** IBM Plex Mono，全大写，宽字距（0.12em）。承担「系统层」角色——编号（01/02/03）、日期、标签、面包屑。等宽字体是这套系统的理性信号。
- **Code：** IBM Plex Mono 400。

字阶共 10 级，详见 front matter。**禁止使用超出 token 的中间字号**；需要更强层级时，加大字重或加大留白，不是加字号档位。

## Layout

**固定最大宽度的 12 列网格（桌面 max 1200px），移动端折叠为单列流。** 这是瑞士部分的核心：所有版面决策都是网格决策。

- 内容区左右留白不小于 `{spacing.margin}`（32px）；桌面端推荐 64–96px，**留白是奢侈品，要舍得给**。
- 版面偏好**不对称**：标题靠左、图示靠右、正文限宽 34em。居中布局只允许出现在 404 页和引言块。
- **8px 间距节奏**（4px 半步只用于微调）：元素间距只能取 token 值，杜绝「差不多」的任意间距。
- **编号系统**：每个内容区块以 label-caps 的两位数编号开头（`01 / 文章`），编号右对齐于区块标题基线。这是导航，也是节奏。
- 分区之间用 2px 实线墨色分隔，不用留白硬分——线是这套系统的结构件。

## Elevation & Depth

**深度来自硬偏移阴影，永远零模糊。** 阴影不是光效，是「物体厚度」的声明：

- 卡片/容器：`4px 4px 0` 墨色；
- 交互元素（按钮、可点击卡片）：静态 `4px 4px 0`，hover 时元素向左上位移 2px 且阴影增至 `6px 6px 0`，active 时元素压入阴影（位移 3px、阴影归零）——完整的「物理按压」模型；
- 阴影颜色永远等于当前主题的墨色（暗色模式下为 #F4F1EA）。

**禁止：** 任何 blur > 0 的阴影、多层柔和阴影、内阴影渐变、玻璃拟态。层级次要表达：2px 细线（分隔）、3px 粗线（容器边界）、色块填充（强调）。

## Shapes

**所有圆角为 0。** 这是新粗野主义的底线，也是与瑞士理性最一致的点——矩形就是矩形。

- 容器边界：3px 实线墨色边框；
- 分隔线与内部分割：2px；
- 无圆角意味着**尖角是构图元素**：并置元素时让角与边严格对齐，形成连续的网格线。

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
