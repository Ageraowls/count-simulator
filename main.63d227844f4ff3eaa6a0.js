(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var s=e.getElementsByTagName("script");s.length&&(n=s[s.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})();const n=t.p+"1bbaaf531840fd8a4e00.svg",e={plus:"+",minus:"-",division:"/",multi:"x"},{version:s}={version:"0.01"};function i(t){const n=[...document.querySelectorAll(".calculator__numbers-item")],e=document.querySelector(".calculator__numbers");n.forEach((t=>{t.classList.remove("active-num")})),t.target===e?t.target.classList.remove("active-num"):t.target.classList.add("active-num")}const a=()=>`\n    \n  <header class="header">\n    <a href="./index.html"><img src=${n} class="header__logo" alt="favicon"></a>\n    <nav class="navigation">\n      <ul class="navigation__list">\n        <li class="navigation__list-item">Как играть</li>\n        <li class="navigation__list-item">Контакты</li>\n      </ul>\n    </nav>\n    \n  <div class="burger-menu">\n    <span class="burger-menu__line line-top"></span>\n    <span class="burger-menu__line line-middle"></span>\n    <span class="burger-menu__line line-bottom"></span>\n  </div>\n  \n  </header>\n  \n    \n    <main class="main">\n      <section class="game">\n        <div class="game__inner">\n          <div class="operations">\n            <p class="operations-choose">Выберите оператор</p>\n            \n    <ul class="math-operators-list">\n      <li class="math-operators-item plus">\n        <svg class="plus">\n          <use xlink:href="./assets/images/icons/sprite.svg#plus"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item minus">\n        <svg class="minus">\n          <use xlink:href="./assets/images/icons/sprite.svg#minus"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item multi">\n        <svg class="multi">\n          <use xlink:href="./assets/images/icons/sprite.svg#multi"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item division">\n        <svg class="division">\n          <use xlink:href="./assets/images/icons/sprite.svg#division"></use>\n        </svg>\n      </li>\n    </ul>\n  \n          </div>\n          \n    <div class="calculator">\n      <div class="calculator__window">\n        <div class="calculator__item first-number"></div>\n        <div class="calculator__item operator">+</div>\n        <div class="calculator__item second-number"></div>\n        <div class="calculator__item equals">=</div>\n        <div class="calculator__item answer">?</div>\n      </div>\n      <div class="calculator__numbers">\n        ${function(){const t=new Array(9).fill(0).map(((t,n)=>n+1)),n=[];return t.forEach((t=>{n.push(`<button class="calculator__numbers-item" data-matrix-id=${t}>${t}</button>`)})),n.join("")}()}\n        <button class="calculator__numbers-item" data-matrix-id=->-</button>\n        <button class="calculator__numbers-item" data-matrix-id=0>0</button>\n        <button class="calculator__numbers-item" data-matrix-id=.>.</button>\n      </div>\n    </div>\n    \n        </div>\n      </section>\n    </main>\n  \n    \n    <footer class="footer">\n      <a href="https://github.com/ageraowls" class="footer__link" target="_blank">\n        <svg class="link__github">\n          <use xlink:href="./assets/images/icons/sprite.svg#github"></use>\n        </svg>\n      </a>\n      <span class="version">version: ${s}</span>\n    </footer>\n  \n  `;document.addEventListener("DOMContentLoaded",(()=>{document.body.insertAdjacentHTML("afterbegin",a());const t=document.querySelector(".burger-menu");t.addEventListener("click",(()=>{t.classList.toggle("active"),function(t){const n=document.querySelector(".navigation");t.classList.contains("active")?n.style.transform="translateX(0)":n.removeAttribute("style")}(t)}));const n=[...document.querySelectorAll(".math-operators-item")];function s(t){document.querySelector(".operator").innerHTML=t}const r=()=>Math.floor(10*Math.random())+1;function c(){const t=document.querySelector(".first-number"),n=document.querySelector(".second-number");t.textContent=r(),n.textContent=r()}c();const o=document.querySelector(".answer");let l="";const{plus:u,minus:m,division:d,multi:v}=e;n.forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("plus")?(l=u,s(l)):t.classList.contains("minus")?(l=m,s(l)):t.classList.contains("division")?(l=d,s(l)):t.classList.contains("multi")&&(l=v,s(l))}))}));function g(){const t=[...document.querySelectorAll("[data-matrix-id]")];let n="";t.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.dataset.matrixId;n+=e,o.textContent=n,n.length>=3&&(o.textContent=n,n=n.slice(1,n.length))}))}))}function p(){g(),o.textContent="?"}function _(){return+document.querySelector(".answer").textContent===function(){const t=document.querySelector(".first-number").textContent,n=document.querySelector(".second-number").textContent;return function(t,n,e){switch(n){case"-":return t-e;case"x":return t*e;case"/":return+(t/e).toFixed(1);default:return+t+ +e}}(t,document.querySelector(".operator").textContent,n)}()&&(c(),[...document.querySelectorAll(".calculator__numbers-item")].forEach((t=>{t.classList.remove("active-num")})),p()),!1}o.addEventListener("click",p),g(),setInterval((()=>_()),1e3),document.querySelector(".calculator__numbers").addEventListener("click",i)}))})();