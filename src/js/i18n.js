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
