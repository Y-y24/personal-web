# 个人学术主页实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个面向研究生导师的中英双语个人学术主页，使用 Vite + 原生 HTML/CSS/JS，部署到 GitHub Pages。

**Architecture:** Vite 构建原生静态页面。所有文本内容存放于 `data/` 目录的 JSON 文件中，由 `i18n.js` 模块管理语言切换，`render.js` 模块负责将数据渲染为 DOM，`main.js` 作为入口协调初始化。导航栏固定顶部，锚点平滑滚动到各区域。

**Tech Stack:** Vite、原生 HTML、原生 CSS (CSS Variables)、原生 JS、GitHub Pages (GitHub Actions)

---

### 文件清单

| 操作 | 文件路径 | 职责 |
|------|---------|------|
| Create | `package.json` | 项目配置、脚本 |
| Create | `vite.config.js` | Vite 构建配置 |
| Create | `data/zh.json` | 中文全部文本数据 |
| Create | `data/en.json` | 英文全部文本数据 |
| Create | `src/js/i18n.js` | 语言状态管理、文本获取 |
| Create | `src/js/render.js` | 根据数据渲染所有页面区域 |
| Create | `src/js/main.js` | 入口：初始化 i18n、触发渲染、导航事件 |
| Create | `index.html` | 页面骨架，语义化区域标记 |
| Create | `src/css/style.css` | 全局样式：CSS 变量、排版、布局、响应式 |
| Create | `.github/workflows/deploy.yml` | 自动构建并部署到 gh-pages |

---

### Task 1: 项目脚手架

**Files:**
- Create: `package.json`
- Create: `vite.config.js`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "personal-homepage",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^6.3.0"
  }
}
```

- [ ] **Step 2: 创建 vite.config.js**

```js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

- [ ] **Step 3: 安装依赖**

```bash
cd "C:/Users/31650/Desktop/personal web" && npm install
```

- [ ] **Step 4: 提交**

```bash
git add package.json package-lock.json vite.config.js
git commit -m "chore: init Vite project scaffold"
```

---

### Task 2: 双语数据文件

**Files:**
- Create: `data/zh.json`
- Create: `data/en.json`

- [ ] **Step 1: 创建中文数据文件 `data/zh.json`**

```json
{
  "lang": "zh",
  "nav": {
    "about": "关于",
    "projects": "项目",
    "research": "研究",
    "awards": "获奖",
    "skills": "技能",
    "experience": "经历",
    "contact": "联系"
  },
  "hero": {
    "name": "张三",
    "major": "信息工程",
    "tagline": "热爱信号处理与嵌入式系统，期望在智能感知方向深入探索。",
    "resumeBtn": "下载简历",
    "contactBtn": "联系我"
  },
  "about": {
    "title": "关于我",
    "paragraphs": [
      "我是 XX 大学信息工程专业的大三学生，主修信号与系统、数字电路、通信原理等课程。对嵌入式系统与智能感知方向有浓厚兴趣，正在积极寻找相关领域的研究生机会。",
      "本科期间参与了多个与嵌入式系统和信号处理相关的项目，积累了一定的硬件调试和软件开发经验。目前在 XX 实验室跟随 XX 教授进行无线传感网络方向的研究。",
      "未来希望能在智能感知、物联网或通信系统方向继续深造，将理论知识与工程实践相结合，做出有价值的成果。"
    ]
  },
  "projects": {
    "title": "项目经历",
    "items": [
      {
        "title": "基于 STM32 的智能环境监测系统",
        "description": "使用 STM32F407 采集温湿度、PM2.5 等环境数据，通过 ESP8266 上传至云端，支持手机 APP 实时查看。负责主控程序开发和传感器驱动编写。",
        "techs": ["STM32", "C", "ESP8266", "MQTT"],
        "image": "",
        "link": "https://github.com/username/environment-monitor"
      },
      {
        "title": "FPGA 数字信号处理实验平台",
        "description": "基于 Xilinx FPGA 搭建的数字信号处理实验平台，实现 FIR 滤波器、FFT 变换等常用算法模块。用于课程实验与教学演示。",
        "techs": ["Verilog", "FPGA", "MATLAB", "Signal Processing"],
        "image": "",
        "link": "https://github.com/username/fpga-dsp-platform"
      }
    ]
  },
  "research": {
    "title": "研究成果",
    "items": [
      {
        "title": "基于深度学习的无线传感器网络异常检测方法",
        "venue": "IEEE Sensors Journal (在投)",
        "abstract": "提出了一种轻量级的 CNN-LSTM 混合模型，在资源受限的传感器节点上实现高效的异常数据检测，在公开数据集上达到 96.3% 的准确率。",
        "link": ""
      }
    ]
  },
  "awards": {
    "title": "竞赛奖项",
    "items": [
      {
        "date": "2025-08",
        "name": "全国大学生电子设计竞赛",
        "level": "省级一等奖",
        "description": "设计并实现了基于 FPGA 的实时图像边缘检测系统"
      },
      {
        "date": "2025-05",
        "name": "蓝桥杯全国软件和信息技术专业人才大赛",
        "level": "省级二等奖",
        "description": "嵌入式设计与开发组"
      }
    ]
  },
  "skills": {
    "title": "专业技能",
    "categories": [
      {
        "name": "编程语言",
        "items": ["C/C++", "Python", "MATLAB", "Verilog", "JavaScript"]
      },
      {
        "name": "嵌入式",
        "items": ["STM32", "FPGA", "ARM", "RTOS", "Keil MDK"]
      },
      {
        "name": "工具与平台",
        "items": ["Git", "Linux", "Multisim", "Proteus", "VS Code"]
      },
      {
        "name": "领域知识",
        "items": ["信号处理", "通信原理", "数字电路", "传感器技术"]
      }
    ]
  },
  "experience": {
    "title": "教育 & 经历",
    "items": [
      {
        "date": "2023-09 ~ 至今",
        "title": "XX 大学 · 信息工程 · 本科",
        "description": "GPA 3.8/4.0，主修信号与系统、数字信号处理、通信原理、微机原理等课程"
      },
      {
        "date": "2024-09 ~ 至今",
        "title": "XX 实验室 · 研究助理",
        "description": "在 XX 教授指导下参与无线传感器网络相关课题，负责数据采集系统开发和算法仿真"
      }
    ]
  },
  "contact": {
    "title": "联系方式",
    "email": "zhangsan@example.com",
    "github": "https://github.com/username",
    "items": [
      { "label": "Email", "value": "zhangsan@example.com", "link": "mailto:zhangsan@example.com" },
      { "label": "GitHub", "value": "github.com/username", "link": "https://github.com/username" }
    ]
  }
}
```

- [ ] **Step 2: 创建英文数据文件 `data/en.json`**

```json
{
  "lang": "en",
  "nav": {
    "about": "About",
    "projects": "Projects",
    "research": "Research",
    "awards": "Awards",
    "skills": "Skills",
    "experience": "Experience",
    "contact": "Contact"
  },
  "hero": {
    "name": "San Zhang",
    "major": "Information Engineering",
    "tagline": "Passionate about signal processing and embedded systems, seeking to explore intelligent sensing.",
    "resumeBtn": "Resume",
    "contactBtn": "Contact Me"
  },
  "about": {
    "title": "About Me",
    "paragraphs": [
      "I am a junior majoring in Information Engineering at XX University, with coursework in signals and systems, digital circuits, and communication principles. I have a strong interest in embedded systems and intelligent sensing, and I am actively seeking graduate research opportunities in related fields.",
      "During my undergraduate studies, I have participated in multiple projects related to embedded systems and signal processing, gaining hands-on experience in hardware debugging and software development. I am currently working on wireless sensor network research at XX Lab under the guidance of Prof. XX.",
      "I aspire to pursue further studies in intelligent sensing, IoT, or communication systems, combining theoretical knowledge with engineering practice to produce impactful results."
    ]
  },
  "projects": {
    "title": "Projects",
    "items": [
      {
        "title": "STM32-Based Smart Environment Monitoring System",
        "description": "An environment monitoring system using STM32F407 to collect temperature, humidity, and PM2.5 data, uploaded to the cloud via ESP8266 with real-time mobile app viewing. Responsible for MCU firmware and sensor driver development.",
        "techs": ["STM32", "C", "ESP8266", "MQTT"],
        "image": "",
        "link": "https://github.com/username/environment-monitor"
      },
      {
        "title": "FPGA Digital Signal Processing Experiment Platform",
        "description": "A DSP experiment platform built on Xilinx FPGA, implementing FIR filters, FFT transforms, and other common algorithm modules for course experiments and teaching demonstrations.",
        "techs": ["Verilog", "FPGA", "MATLAB", "Signal Processing"],
        "image": "",
        "link": "https://github.com/username/fpga-dsp-platform"
      }
    ]
  },
  "research": {
    "title": "Research",
    "items": [
      {
        "title": "Deep Learning-Based Anomaly Detection for Wireless Sensor Networks",
        "venue": "IEEE Sensors Journal (Under Review)",
        "abstract": "Proposed a lightweight CNN-LSTM hybrid model for efficient anomaly detection on resource-constrained sensor nodes, achieving 96.3% accuracy on public benchmark datasets.",
        "link": ""
      }
    ]
  },
  "awards": {
    "title": "Awards",
    "items": [
      {
        "date": "2025-08",
        "name": "National Undergraduate Electronic Design Contest",
        "level": "Provincial First Prize",
        "description": "Designed and implemented an FPGA-based real-time image edge detection system"
      },
      {
        "date": "2025-05",
        "name": "Lanqiao Cup National IT Talent Competition",
        "level": "Provincial Second Prize",
        "description": "Embedded Design and Development Category"
      }
    ]
  },
  "skills": {
    "title": "Skills",
    "categories": [
      {
        "name": "Programming Languages",
        "items": ["C/C++", "Python", "MATLAB", "Verilog", "JavaScript"]
      },
      {
        "name": "Embedded Systems",
        "items": ["STM32", "FPGA", "ARM", "RTOS", "Keil MDK"]
      },
      {
        "name": "Tools & Platforms",
        "items": ["Git", "Linux", "Multisim", "Proteus", "VS Code"]
      },
      {
        "name": "Domain Knowledge",
        "items": ["Signal Processing", "Communication", "Digital Circuits", "Sensor Technology"]
      }
    ]
  },
  "experience": {
    "title": "Education & Experience",
    "items": [
      {
        "date": "2023-09 ~ Present",
        "title": "XX University · Information Engineering · B.E.",
        "description": "GPA 3.8/4.0, coursework in signals & systems, DSP, communication principles, microprocessor systems"
      },
      {
        "date": "2024-09 ~ Present",
        "title": "XX Lab · Research Assistant",
        "description": "Conducting wireless sensor network research under Prof. XX, responsible for data acquisition system development and algorithm simulation"
      }
    ]
  },
  "contact": {
    "title": "Contact",
    "email": "zhangsan@example.com",
    "github": "https://github.com/username",
    "items": [
      { "label": "Email", "value": "zhangsan@example.com", "link": "mailto:zhangsan@example.com" },
      { "label": "GitHub", "value": "github.com/username", "link": "https://github.com/username" }
    ]
  }
}
```

- [ ] **Step 3: 提交**

```bash
git add data/zh.json data/en.json
git commit -m "feat: add bilingual data files with placeholder content"
```

---

### Task 3: i18n 语言模块

**Files:**
- Create: `src/js/i18n.js`

- [ ] **Step 1: 创建 `src/js/i18n.js`**

```js
// i18n — 轻量级国际化模块
const DATA = {};
let currentLang = 'zh';

export async function initI18n(defaultLang = 'zh') {
  // 读取 localStorage 或使用默认语言
  currentLang = localStorage.getItem('lang') || defaultLang;

  // 并行加载双语数据
  const [zh, en] = await Promise.all([
    fetch('/data/zh.json').then(r => r.json()),
    fetch('/data/en.json').then(r => r.json()),
  ]);

  DATA.zh = zh;
  DATA.en = en;

  return currentLang;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

export function toggleLang() {
  const next = currentLang === 'zh' ? 'en' : 'zh';
  setLang(next);
  return next;
}

export function t(path) {
  // 按点分隔路径取值，如 t('nav.about') → "关于"
  const keys = path.split('.');
  let value = DATA[currentLang];
  for (const key of keys) {
    if (value == null) return path; // fallback: 返回路径本身
    value = value[key];
  }
  return value ?? path;
}

export function getData() {
  return DATA[currentLang];
}
```

- [ ] **Step 2: 测试 — 确认模块可导入（构建阶段验证）**

```bash
cd "C:/Users/31650/Desktop/personal web" && npx vite build --mode development 2>&1 || echo "Expected: will fully pass after all modules created"
```

- [ ] **Step 3: 提交**

```bash
git add src/js/i18n.js
git commit -m "feat: add i18n module for bilingual support"
```

---

### Task 4: HTML 页面骨架

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建 `index.html`**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Personal academic homepage — Information Engineering" />
  <title>张三 | 信息工程</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/css/style.css" />
</head>
<body>
  <!-- 导航栏 -->
  <header class="navbar" id="navbar">
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" data-i18n="hero.name">张三</a>
      <nav class="navbar__links">
        <a href="#about" data-i18n="nav.about">关于</a>
        <a href="#projects" data-i18n="nav.projects">项目</a>
        <a href="#research" data-i18n="nav.research">研究</a>
        <a href="#awards" data-i18n="nav.awards">获奖</a>
        <a href="#skills" data-i18n="nav.skills">技能</a>
        <a href="#experience" data-i18n="nav.experience">经历</a>
        <a href="#contact" data-i18n="nav.contact">联系</a>
      </nav>
      <button class="lang-toggle" id="langToggle" aria-label="Switch language">EN</button>
    </div>
  </header>

  <!-- 首屏 -->
  <section class="hero" id="hero">
    <div class="container hero__inner">
      <div class="hero__avatar">
        <img src="/src/assets/avatar.jpg" alt="Avatar" width="160" height="160" />
      </div>
      <div class="hero__info">
        <h1 class="hero__name" data-i18n="hero.name">张三</h1>
        <p class="hero__major" data-i18n="hero.major">信息工程</p>
        <p class="hero__tagline" data-i18n="hero.tagline"></p>
        <div class="hero__actions">
          <a href="/resume.pdf" class="btn btn--primary" data-i18n="hero.resumeBtn" download>下载简历</a>
          <a href="#contact" class="btn btn--outline" data-i18n="hero.contactBtn">联系我</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 关于 -->
  <section class="section" id="about">
    <div class="container">
      <h2 class="section__title" data-i18n="about.title">关于我</h2>
      <div class="about__content" id="aboutContent"></div>
    </div>
  </section>

  <!-- 项目 -->
  <section class="section section--alt" id="projects">
    <div class="container">
      <h2 class="section__title" data-i18n="projects.title">项目经历</h2>
      <div class="projects__grid" id="projectsGrid"></div>
    </div>
  </section>

  <!-- 研究 -->
  <section class="section" id="research">
    <div class="container">
      <h2 class="section__title" data-i18n="research.title">研究成果</h2>
      <div class="research__list" id="researchList"></div>
    </div>
  </section>

  <!-- 获奖 -->
  <section class="section section--alt" id="awards">
    <div class="container">
      <h2 class="section__title" data-i18n="awards.title">竞赛奖项</h2>
      <div class="timeline" id="awardsTimeline"></div>
    </div>
  </section>

  <!-- 技能 -->
  <section class="section" id="skills">
    <div class="container">
      <h2 class="section__title" data-i18n="skills.title">专业技能</h2>
      <div class="skills__grid" id="skillsGrid"></div>
    </div>
  </section>

  <!-- 经历 -->
  <section class="section section--alt" id="experience">
    <div class="container">
      <h2 class="section__title" data-i18n="experience.title">教育 & 经历</h2>
      <div class="timeline" id="experienceTimeline"></div>
    </div>
  </section>

  <!-- 联系 -->
  <section class="section" id="contact">
    <div class="container">
      <h2 class="section__title" data-i18n="contact.title">联系方式</h2>
      <div class="contact__list" id="contactList"></div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 <span data-i18n="hero.name">张三</span></p>
    </div>
  </footer>

  <script type="module" src="/src/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 创建占位头像**

```bash
# 用 Vite public 目录的方式，src/assets 下放一个 placeholder
mkdir -p "C:/Users/31650/Desktop/personal web/src/assets"
```

创建一个简单的 SVG 占位头像（后面可替换为真实照片）：

- [ ] **Step 3: 创建一个简单的占位头像 SVG**

```bash
# 创建一个简单的 placeholder，后续替换为真实照片
echo '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><rect fill="#e9ecef" width="320" height="320"/><circle cx="160" cy="120" r="50" fill="#adb5bd"/><ellipse cx="160" cy="260" rx="80" ry="60" fill="#adb5bd"/></svg>' > "C:/Users/31650/Desktop/personal web/src/assets/avatar.svg"
```

- [ ] **Step 4: 更新 HTML 中头像路径为 placeholder**

```html
<img src="/src/assets/avatar.svg" alt="Avatar" width="160" height="160" />
```

注：后续替换为真实 jpg 照片时改回即可。

- [ ] **Step 5: 提交**

```bash
git add index.html src/assets/avatar.svg
git commit -m "feat: add HTML page skeleton with all sections"
```

---

### Task 5: CSS 基础 & 排版

**Files:**
- Create: `src/css/style.css`

- [ ] **Step 1: 创建 `src/css/style.css` — CSS Reset + Variables + Typography**

```css
/* === CSS Variables === */
:root {
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
  --color-text: #212529;
  --color-text-muted: #6c757d;
  --color-accent: #2563eb;
  --color-accent-hover: #1d4ed8;
  --color-tag-bg: #e9ecef;
  --color-border: #dee2e6;
  --color-navbar-bg: rgba(255, 255, 255, 0.95);

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', 'PingFang SC', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --max-width: 960px;
  --navbar-height: 64px;
  --radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* === CSS Reset === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--navbar-height);
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-accent-hover);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* === Typography === */
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h2 { font-size: 1.75rem; font-weight: 600; line-height: 1.3; }
h3 { font-size: 1.25rem; font-weight: 600; line-height: 1.4; }

p + p {
  margin-top: 1em;
}

/* === Container === */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* === Buttons === */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: var(--radius);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: var(--color-accent);
  color: #fff;
}

.btn--primary:hover {
  background-color: var(--color-accent-hover);
  color: #fff;
}

.btn--outline {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn--outline:hover {
  background-color: var(--color-accent);
  color: #fff;
}

/* === Footer === */
.footer {
  text-align: center;
  padding: 32px 0;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
```

- [ ] **Step 2: 提交**

```bash
git add src/css/style.css
git commit -m "feat: add CSS base — reset, variables, typography, buttons"
```

---

### Task 6: CSS 布局 & 区域样式 & 响应式

**Files:**
- Modify: `src/css/style.css`（追加）

- [ ] **Step 1: 追加导航栏样式**

```css
/* === Navbar === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  background: var(--color-navbar-bg);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__logo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  flex-shrink: 0;
}

.navbar__logo:hover {
  color: var(--color-accent);
}

.navbar__links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.navbar__links a {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-weight: 500;
  transition: color 0.2s;
}

.navbar__links a:hover,
.navbar__links a.active {
  color: var(--color-accent);
}

.lang-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text-muted);
  transition: all 0.2s;
  flex-shrink: 0;
}

.lang-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

- [ ] **Step 2: 追加首屏 Hero 样式**

```css
/* === Hero === */
.hero {
  padding: calc(var(--navbar-height) + 80px) 0 80px;
  background-color: var(--color-bg);
}

.hero__inner {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero__avatar img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

.hero__name {
  margin-bottom: 4px;
}

.hero__major {
  font-size: 1.15rem;
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: 12px;
}

.hero__tagline {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 480px;
  margin-bottom: 28px;
}

.hero__actions {
  display: flex;
  gap: 12px;
}
```

- [ ] **Step 3: 追加区域标题和段落样式**

```css
/* === Sections === */
.section {
  padding: 80px 0;
}

.section--alt {
  background-color: var(--color-bg-alt);
}

.section__title {
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 12px;
}

.section__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 48px;
  height: 3px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

/* === About === */
.about__content p {
  font-size: 1.05rem;
  color: var(--color-text);
  max-width: 720px;
}
```

- [ ] **Step 4: 追加项目卡片网格样式**

```css
/* === Projects Grid === */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 28px;
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: var(--shadow-md);
}

.project-card__title {
  margin-bottom: 8px;
}

.project-card__desc {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.project-card__techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  display: inline-block;
  padding: 4px 10px;
  background-color: var(--color-tag-bg);
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--color-text);
}

.project-card__link {
  font-size: 0.9rem;
  font-weight: 500;
}
```

- [ ] **Step 5: 追加研究列表样式**

```css
/* === Research === */
.research__item {
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border);
}

.research__item:last-child {
  border-bottom: none;
}

.research__item h3 {
  margin-bottom: 6px;
}

.research__venue {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: 8px;
}

.research__abstract {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
```

- [ ] **Step 6: 追加时间线样式（获奖 & 经历）**

```css
/* === Timeline === */
.timeline {
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background-color: var(--color-border);
}

.timeline__item {
  position: relative;
  padding-bottom: 32px;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 6px;
  width: 10px;
  height: 10px;
  background-color: var(--color-accent);
  border-radius: 50%;
  border: 2px solid var(--color-bg);
}

.section--alt .timeline__item::before {
  border-color: var(--color-bg-alt);
}

.timeline__date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  margin-bottom: 4px;
}

.timeline__title {
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline__desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
```

- [ ] **Step 7: 追加技能网格和联系方式样式**

```css
/* === Skills === */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.skills__category h3 {
  margin-bottom: 12px;
  font-size: 1.05rem;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* === Contact === */
.contact__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact__label {
  font-weight: 600;
  min-width: 80px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
```

- [ ] **Step 8: 追加响应式样式**

```css
/* === Responsive === */
@media (max-width: 768px) {
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.4rem; }
  h3 { font-size: 1.1rem; }

  .navbar__links {
    display: none; /* 移动端简化：仅显示语言切换 */
  }

  .hero__inner {
    flex-direction: column;
    text-align: center;
    gap: 28px;
  }

  .hero__tagline {
    max-width: 100%;
  }

  .hero__actions {
    justify-content: center;
  }

  .section {
    padding: 56px 0;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }

  .skills__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
}
```

- [ ] **Step 9: 提交**

```bash
git add src/css/style.css
git commit -m "feat: add layout, section, and responsive styles"
```

---

### Task 7: 渲染模块

**Files:**
- Create: `src/js/render.js`

- [ ] **Step 1: 创建 `src/js/render.js`**

```js
import { getData, t } from './i18n.js';

/**
 * 渲染所有动态内容区域
 */
export function renderAll() {
  renderAbout();
  renderProjects();
  renderResearch();
  renderAwards();
  renderSkills();
  renderExperience();
  renderContact();
}

/** 更新所有带 data-i18n 属性的静态文本 */
export function updateStaticText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
  // 更新 HTML lang 属性
  document.documentElement.lang = getData().lang;
}

function renderAbout() {
  const data = getData().about;
  const container = document.getElementById('aboutContent');
  if (!container) return;
  container.innerHTML = data.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
}

function renderProjects() {
  const data = getData().projects;
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = data.items.map(item => `
    <div class="project-card">
      <h3 class="project-card__title">${escapeHtml(item.title)}</h3>
      <p class="project-card__desc">${escapeHtml(item.description)}</p>
      <div class="project-card__techs">
        ${item.techs.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
      </div>
      ${item.link ? `<a class="project-card__link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">GitHub →</a>` : ''}
    </div>
  `).join('');
}

function renderResearch() {
  const data = getData().research;
  const list = document.getElementById('researchList');
  if (!list) return;
  list.innerHTML = data.items.map(item => `
    <div class="research__item">
      <h3>${escapeHtml(item.title)}</h3>
      <p class="research__venue">${escapeHtml(item.venue)}</p>
      <p class="research__abstract">${escapeHtml(item.abstract)}</p>
      ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener">View Paper →</a>` : ''}
    </div>
  `).join('');
}

function renderAwards() {
  const data = getData().awards;
  const container = document.getElementById('awardsTimeline');
  if (!container) return;
  container.innerHTML = data.items.map(item => `
    <div class="timeline__item">
      <p class="timeline__date">${escapeHtml(item.date)}</p>
      <p class="timeline__title">${escapeHtml(item.name)} — <strong>${escapeHtml(item.level)}</strong></p>
      <p class="timeline__desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

function renderSkills() {
  const data = getData().skills;
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = data.categories.map(cat => `
    <div class="skills__category">
      <h3>${escapeHtml(cat.name)}</h3>
      <div class="skills__tags">
        ${cat.items.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const data = getData().experience;
  const container = document.getElementById('experienceTimeline');
  if (!container) return;
  container.innerHTML = data.items.map(item => `
    <div class="timeline__item">
      <p class="timeline__date">${escapeHtml(item.date)}</p>
      <p class="timeline__title">${escapeHtml(item.title)}</p>
      <p class="timeline__desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

function renderContact() {
  const data = getData().contact;
  const container = document.getElementById('contactList');
  if (!container) return;
  container.innerHTML = data.items.map(item => `
    <div class="contact__item">
      <span class="contact__label">${escapeHtml(item.label)}</span>
      <a href="${escapeHtml(item.link)}">${escapeHtml(item.value)}</a>
    </div>
  `).join('');
}

/** 基本的 HTML 转义，防 XSS */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
```

- [ ] **Step 2: 提交**

```bash
git add src/js/render.js
git commit -m "feat: add render module for all page sections"
```

---

### Task 8: 入口文件 & 导航逻辑

**Files:**
- Create: `src/js/main.js`

- [ ] **Step 1: 创建 `src/js/main.js`**

```js
import { initI18n, toggleLang, getLang } from './i18n.js';
import { renderAll, updateStaticText } from './render.js';

async function boot() {
  // 1. 初始化 i18n（加载数据、读取语言偏好）
  await initI18n('zh');

  // 2. 首次渲染
  renderAll();

  // 3. 设置语言切换按钮
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    updateLangBtnText();
    langBtn.addEventListener('click', () => {
      toggleLang();
      updateLangBtnText();
      renderAll();
      updateStaticText();
    });
  }

  // 4. 平滑滚动导航（点击锚点链接）
  document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. 滚动高亮当前导航项
  highlightNavOnScroll();
}

function updateLangBtnText() {
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = getLang() === 'zh' ? 'EN' : '中文';
  }
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

// 启动
boot();
```

- [ ] **Step 2: 提交**

```bash
git add src/js/main.js
git commit -m "feat: add entry module with navigation and language toggle"
```

---

### Task 9: GitHub Actions 部署工作流

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: 提交**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow for GitHub Pages"
```

---

### Task 10: 构建验证

- [ ] **Step 1: 本地构建验证**

```bash
cd "C:/Users/31650/Desktop/personal web" && npm run build
```

Expected: 构建成功，`dist/` 目录生成包含 `index.html`、`assets/` 等文件。

- [ ] **Step 2: 检查 dist 输出**

```bash
ls -la "C:/Users/31650/Desktop/personal web/dist/"
```

Expected: 包含 `index.html`、`assets/` 目录、以及 `data/` 中的 json 文件。

- [ ] **Step 3: 预览构建产物（可选）**

```bash
cd "C:/Users/31650/Desktop/personal web" && npx vite preview --port 4173
```

打开 `http://localhost:4173` 验证页面显示正常。

- [ ] **Step 4: 提交（如有残余变更）**

```bash
git add -A
git commit -m "chore: verify build output"
```

---

## 自检

### 1. Spec 覆盖

| 规格要求 | 对应任务 |
|---------|---------|
| Vite 构建 | Task 1: package.json, vite.config.js |
| 双语数据文件 | Task 2: zh.json, en.json |
| i18n 语言模块 | Task 3: i18n.js |
| HTML 页面结构 (8区域) | Task 4: index.html |
| CSS 变量 + 排版 | Task 5: CSS base |
| 导航栏、Hero、卡片、时间线、响应式 | Task 6: CSS layout |
| JS 渲染所有区域 | Task 7: render.js |
| 入口 + 语言切换 + 导航滚动 | Task 8: main.js |
| GitHub Pages 自动部署 | Task 9: deploy.yml |
| 构建验证 | Task 10 |

### 2. 占位符扫描

- ✅ 无 TBD / TODO
- ✅ 数据文件使用现实占位符（张三、XX大学），用户替换即可
- ✅ 所有代码步骤包含完整代码

### 3. 类型/接口一致性

- ✅ `getData()` 返回结构在 render.js 各函数中使用一致
- ✅ JSON 数据结构与 render.js 访问路径匹配：
  - `about.paragraphs` 数组 → `renderAbout` 使用 `map`
  - `projects.items[].title/description/techs/link` → `renderProjects` 对应
  - `research.items[].title/venue/abstract/link` → `renderResearch` 对应
  - `awards.items[].date/name/level/description` → `renderAwards` 对应
  - `skills.categories[].name/items` → `renderSkills` 对应
  - `experience.items[].date/title/description` → `renderExperience` 对应
  - `contact.items[].label/value/link` → `renderContact` 对应
- ✅ `i18n.js` 导出 `initI18n`, `getLang`, `setLang`, `toggleLang`, `t`, `getData` — main.js 和 render.js 导入一致
