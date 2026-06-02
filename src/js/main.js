import { initI18n, toggleLang, getLang } from './i18n.js';
import { renderAll, updateStaticText } from './render.js';

async function boot() {
  // 1. 初始化 i18n（加载数据、读取语言偏好）
  const result = await initI18n('zh');
  if (!result.ok) {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.disabled = true;
    return;
  }

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
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        let current = '';
        sections.forEach(section => {
          if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

// 启动
boot();
