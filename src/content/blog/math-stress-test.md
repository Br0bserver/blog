---
title: 数学渲染压力测试 — 从基元公式到广义相对论与量子场论
description: 覆盖极简单行公式、分式嵌套、大矩阵、方程组与高维路径积分的 KaTeX 排版渲染测试。
pubDate: 2026-08-16
tags: ['测试', 'KaTeX', '数学']
---

> 本文用于验证博客在遇到不同复杂度数学公式时的渲染鲁棒性、溢出横向滚动机制及排版节奏。

## 01 / 基础公式 (Basic Equations)

行内公式测试：勾股定理 $a^2 + b^2 = c^2$，欧拉恒等式 $e^{i\pi} + 1 = 0$，以及质能方程 $E = mc^2$。

一元二次方程求根公式：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

高斯积分 (Gaussian Integral)：

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

## 02 / 中等复杂度分析与变换 (Analysis & Transforms)

连续函数的傅里叶变换 (Fourier Transform) 及其逆变换：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx, \quad f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i x \xi} \, d\xi
$$

多维矩阵表达 (Matrix Representation)：

$$
\mathbf{A} = \begin{pmatrix} 
a_{11} & a_{12} & \dots & a_{1n} \\ 
a_{21} & a_{22} & \dots & a_{2n} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{m1} & a_{m2} & \dots & a_{mn} 
\end{pmatrix}, \quad 
\det(\mathbf{A}) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \prod_{i=1}^n a_{i, \sigma(i)}
$$

黎曼 Zeta 函数的解析延拓方程：

$$
\zeta(s) = 2^s \pi^{s-1} \sin\left(\frac{\pi s}{2}\right) \Gamma(1-s) \zeta(1-s) = \frac{1}{\Gamma(s)} \int_0^\infty \frac{x^{s-1}}{e^x - 1} \, dx
$$

## 03 / 分式嵌套与连分数 (Nested Fractions)

高阶连分数 (Continued Fractions) 嵌套测试：

$$
x = a_0 + \cfrac{b_1}{a_1 + \cfrac{b_2}{a_2 + \cfrac{b_3}{a_3 + \cfrac{b_4}{a_4 + \cfrac{b_5}{a_5 + \dots}}}}}
$$

黄金分割比的连分数展开：

$$
\phi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \dots}}}}
$$

## 04 / 经典物理与场论方程组 (Physics & Field Equations)

麦克斯韦方程组 (Maxwell's Equations) 的微分形式与积分形式对照：

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} & \oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} &= \frac{Q_{\text{enc}}}{\varepsilon_0} \\[8pt]
\nabla \cdot \mathbf{B} &= 0 & \oint_{\partial V} \mathbf{B} \cdot d\mathbf{A} &= 0 \\[8pt]
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} & \oint_{\partial C} \mathbf{E} \cdot d\mathbf{l} &= -\frac{d\Phi_B}{dt} \\[8pt]
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad & \oint_{\partial C} \mathbf{B} \cdot d\mathbf{l} &= \mu_0 I_{\text{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{aligned}
$$

流体力学可压缩纳维-斯托克斯方程 (Compressible Navier-Stokes Equations)：

$$
\frac{\partial}{\partial t} \left( \rho \mathbf{u} \right) + \nabla \cdot \left( \rho \mathbf{u} \otimes \mathbf{u} \right) = -\nabla p + \nabla \cdot \left[ \mu \left( \nabla \mathbf{u} + (\nabla \mathbf{u})^T - \frac{2}{3} (\nabla \cdot \mathbf{u}) \mathbf{I} \right) \right] + \rho \mathbf{g}
$$

## 05 / 极限复杂：相对论、量子场论与分段大公式 (Extreme Complex Formulas)

爱因斯坦场方程 (Einstein Field Equations) 及其克里斯托费尔联络 (Christoffel Symbols) 张量展开：

$$
R_{\mu\nu} - \frac{1}{2}R g_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}
$$

$$
\Gamma^\sigma_{\mu\nu} = \frac{1}{2} g^{\sigma\rho} \left( \frac{\partial g_{\rho\nu}}{\partial x^\mu} + \frac{\partial g_{\mu\rho}}{\partial x^\nu} - \frac{\partial g_{\mu\nu}}{\partial x^\rho} \right)
$$

量子场论标量场路径积分生成 functional (Path Integral Generating Functional in QFT)：

$$
\mathcal{Z}[J] = \int \mathcal{D}\phi \, \exp\left\{ \frac{i}{\hbar} \int d^4 x \left[ \frac{1}{2} \eta^{\mu\nu} \partial_\mu \phi \partial_\nu \phi - \frac{1}{2} m^2 \phi^2 - \frac{\lambda}{4!} \phi^4 + J(x)\phi(x) \right] \right\}
$$

复杂条件分段分布概率函数 (Piecewise Probability Density Function)：

$$
P(x, y) = \begin{cases} 
\cfrac{\exp\left( -\dfrac{1}{2(1-\rho^2)} \left[ \dfrac{(x-\mu_x)^2}{\sigma_x^2} - \dfrac{2\rho(x-\mu_x)(y-\mu_y)}{\sigma_x \sigma_y} + \dfrac{(y-\mu_y)^2}{\sigma_y^2} \right] \right)}{2\pi \sigma_x \sigma_y \sqrt{1-\rho^2}} & \text{if } x^2 + y^2 \le R^2 \\[16pt]
\displaystyle\sum_{k=1}^{\infty} \frac{\lambda^k e^{-\lambda}}{k!} \cdot \frac{1}{\sqrt{2\pi k \sigma^2}} \exp\left(-\frac{(x - k\mu)^2}{2k\sigma^2}\right) & \text{if } x^2 + y^2 > R^2
\end{cases}
$$

## 06 / 混合代码与公式测试

结合代码块与公式的复合呈现：

```python
import numpy as np

def gaussian_integral_approximation(n_samples=1_000_000):
    # \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
    x = np.random.uniform(-10, 10, n_samples)
    y = np.exp(-x**2)
    integral = np.mean(y) * 20
    return integral, np.sqrt(np.pi)

print(gaussian_integral_approximation())
```
