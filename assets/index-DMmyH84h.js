(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();const l={};let a="zh";async function p(e="zh"){a=localStorage.getItem("lang")||e;try{const n=await Promise.all([fetch("/data/zh.json"),fetch("/data/en.json")]);for(const o of n)if(!o.ok)throw new Error(`Failed to load i18n data: ${o.url} returned ${o.status}`);const[r,t]=await Promise.all(n.map(o=>o.json()));return l.zh=r,l.en=t,{ok:!0}}catch(n){return console.error("i18n initialization failed:",n),{ok:!1,error:n}}}function g(){return a}function m(e){return e!=="zh"&&e!=="en"?(console.warn(`setLang: invalid language "${e}"`),!1):(a=e,localStorage.setItem("lang",e),document.documentElement.lang=e,!0)}function h(){const e=a==="zh"?"en":"zh";return m(e),e}function _(e){const n=e.split(".");let r=l[a];for(const t of n){if(r==null)return e;r=r[t]}return r??e}function s(){return l[a]}function u(){s()&&(y(),$(),L(),E(),b(),j(),k())}function v(){document.querySelectorAll("[data-i18n]").forEach(n=>{const r=n.getAttribute("data-i18n");r&&(n.textContent=_(r))});const e=s();e&&(document.documentElement.lang=e.lang)}function y(){var r;const e=(r=s())==null?void 0:r.about,n=document.getElementById("aboutContent");!e||!n||(n.innerHTML=e.paragraphs.map(t=>`<p>${i(t)}</p>`).join(""))}function $(){var r;const e=(r=s())==null?void 0:r.projects,n=document.getElementById("projectsGrid");!e||!n||(n.innerHTML=e.items.map(t=>`
    <div class="project-card">
      <h3 class="project-card__title">${i(t.title)}</h3>
      <p class="project-card__desc">${i(t.description)}</p>
      <div class="project-card__techs">
        ${t.techs.map(o=>`<span class="tag">${i(o)}</span>`).join("")}
      </div>
      ${t.link?`<a class="project-card__link" href="${i(t.link)}" target="_blank" rel="noopener">GitHub →</a>`:""}
    </div>
  `).join(""))}function L(){var r;const e=(r=s())==null?void 0:r.research,n=document.getElementById("researchList");!e||!n||(n.innerHTML=e.items.map(t=>`
    <div class="research__item">
      <h3>${i(t.title)}</h3>
      <p class="research__venue">${i(t.venue)}</p>
      <p class="research__abstract">${i(t.abstract)}</p>
      ${t.link?`<a href="${i(t.link)}" target="_blank" rel="noopener">View Paper →</a>`:""}
    </div>
  `).join(""))}function E(){var r;const e=(r=s())==null?void 0:r.awards,n=document.getElementById("awardsTimeline");!e||!n||(n.innerHTML=e.items.map(t=>`
    <div class="timeline__item">
      <p class="timeline__date">${i(t.date)}</p>
      <p class="timeline__title">${i(t.name)} — <strong>${i(t.level)}</strong></p>
      <p class="timeline__desc">${i(t.description)}</p>
    </div>
  `).join(""))}function b(){var r;const e=(r=s())==null?void 0:r.skills,n=document.getElementById("skillsGrid");!e||!n||(n.innerHTML=e.categories.map(t=>`
    <div class="skills__category">
      <h3>${i(t.name)}</h3>
      <div class="skills__tags">
        ${t.items.map(o=>`<span class="tag">${i(o)}</span>`).join("")}
      </div>
    </div>
  `).join(""))}function j(){var r;const e=(r=s())==null?void 0:r.experience,n=document.getElementById("experienceTimeline");!e||!n||(n.innerHTML=e.items.map(t=>`
    <div class="timeline__item">
      <p class="timeline__date">${i(t.date)}</p>
      <p class="timeline__title">${i(t.title)}</p>
      <p class="timeline__desc">${i(t.description)}</p>
    </div>
  `).join(""))}function k(){var r;const e=(r=s())==null?void 0:r.contact,n=document.getElementById("contactList");!e||!n||(n.innerHTML=e.items.map(t=>`
    <div class="contact__item">
      <span class="contact__label">${i(t.label)}</span>
      <a href="${i(t.link)}">${i(t.value)}</a>
    </div>
  `).join(""))}function i(e){if(e==null)return"";const n=document.createElement("div");return n.textContent=e,n.innerHTML}async function I(){if(!(await p("zh")).ok){const r=document.getElementById("langToggle");r&&(r.disabled=!0);const t=document.querySelector(".hero__tagline");t&&(t.textContent="Sorry, the page content could not be loaded. Please refresh or try again later.",t.style.color="#dc3545");return}u();const n=document.getElementById("langToggle");n&&(f(),n.addEventListener("click",()=>{h(),f(),u(),v()})),document.querySelectorAll(".navbar__links a").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const o=r.getAttribute("href").slice(1),c=document.getElementById(o);c&&c.scrollIntoView({behavior:"smooth"})})}),T()}function f(){const e=document.getElementById("langToggle");e&&(e.textContent=g()==="zh"?"EN":"中文")}function T(){const e=document.querySelectorAll("section[id]"),n=document.querySelectorAll(".navbar__links a");let r=!1;window.addEventListener("scroll",()=>{r||(requestAnimationFrame(()=>{let t="";e.forEach(o=>{window.scrollY>=o.offsetTop-100&&(t=o.getAttribute("id"))}),n.forEach(o=>{o.classList.toggle("active",o.getAttribute("href")===`#${t}`)}),r=!1}),r=!0)})}I();
