(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var s=n.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1bbaaf531840fd8a4e00.svg",n={plus:"+",minus:"-",division:"/",multi:"x"},s=()=>{switch(document.querySelector(".operator").textContent){case"-":return"minus";case"x":return"multi";case"/":return"division";default:return"plus"}},a=e=>`\n    <svg class="plus">\n      <use xlink:href="./assets/images/icons/sprite.svg#${e}"></use>\n    </svg>\n  `,{version:i}={version:"0.01"};function r(e){const t=[...document.querySelectorAll(".calculator__numbers-item")],n=document.querySelector(".calculator__numbers");t.forEach((e=>{e.classList.remove("active-num")})),e.target===n?e.target.classList.remove("active-num"):e.target.classList.add("active-num")}function c(){const e=[...document.querySelectorAll(".calculator__numbers-item")],t=document.querySelector(".answer");e.forEach((e=>{e.classList.remove("active-num")})),t.classList.remove("false-answer")}const o=()=>`\n    \n  <header class="header">\n    <a href="./index.html"><img src=${t} class="header__logo" alt="favicon"></a>\n    <nav class="navigation">\n      <ul class="navigation__list">\n        <li class="navigation__list-item">Как играть</li>\n        <li class="navigation__list-item">Контакты</li>\n      </ul>\n    </nav>\n    \n  <div class="burger-menu">\n    <span class="burger-menu__line line-top"></span>\n    <span class="burger-menu__line line-middle"></span>\n    <span class="burger-menu__line line-bottom"></span>\n  </div>\n  \n  </header>\n  \n    \n    <main class="main">\n      <section class="game">\n        <div class="game__inner">\n        <div class="operator-choose">\n            <p class="operator-desc">Текущий оператор: \n              <svg class="svg-item">\n                <use xlink:href="./assets/images/icons/sprite.svg#plus"></use>\n              </svg>\n            </p>\n            <button class="operator-change">Изменить</button>\n          </div>\n          <div class="operations">\n            <p class="operations-choose">Выберите оператор</p>\n            \n    <ul class="math-operators-list">\n      <li class="math-operators-item plus">\n        <svg class="plus">\n          <use xlink:href="./assets/images/icons/sprite.svg#plus"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item minus">\n        <svg class="minus">\n          <use xlink:href="./assets/images/icons/sprite.svg#minus"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item multi">\n        <svg class="multi">\n          <use xlink:href="./assets/images/icons/sprite.svg#multi"></use>\n        </svg>\n      </li>\n      <li class="math-operators-item division">\n        <svg class="division">\n          <use xlink:href="./assets/images/icons/sprite.svg#division"></use>\n        </svg>\n      </li>\n    </ul>\n  \n          </div>\n          \n    <div class="calculator">\n      <div class="calculator__window">\n        <div class="calculator__item first-number"></div>\n        <div class="calculator__item operator">+</div>\n        <div class="calculator__item second-number"></div>\n        <div class="calculator__item equals">=</div>\n        <div class="calculator__item answer">?</div>\n      </div>\n      <div class="calculator__numbers">\n        ${function(){const e=new Array(9).fill(0).map(((e,t)=>t+1)),t=[];return e.forEach((e=>{t.push(`<button class="calculator__numbers-item" data-matrix-id=${e}>${e}</button>`)})),t.join("")}()}\n        <button class="calculator__numbers-item" data-matrix-id=->-</button>\n        <button class="calculator__numbers-item" data-matrix-id=0>0</button>\n        <button class="calculator__numbers-item" data-matrix-id=.>.</button>\n      </div>\n    </div>\n    \n        </div>\n      </section>\n    </main>\n  \n    \n    <footer class="footer">\n      <a href="https://github.com/ageraowls" class="footer__link" target="_blank">\n        <svg class="link__github">\n          <use xlink:href="./assets/images/icons/sprite.svg#github"></use>\n        </svg>\n      </a>\n      <span class="version">version: ${i}</span>\n    </footer>\n  \n  `;document.addEventListener("DOMContentLoaded",(()=>{document.body.insertAdjacentHTML("afterbegin",o());const e=document.querySelector(".burger-menu");e.addEventListener("click",(()=>{e.classList.toggle("active"),function(e){const t=document.querySelector(".navigation");e.classList.contains("active")?t.style.transform="translateX(0)":t.removeAttribute("style")}(e)}));const t=[...document.querySelectorAll(".math-operators-item")];function i(e){document.querySelector(".operator").innerHTML=e}const l=()=>Math.floor(10*Math.random())+1;function u(){const e=document.querySelector(".first-number"),t=document.querySelector(".second-number");e.textContent=l(),t.textContent=l()}u();const m=document.querySelector(".answer"),d=document.querySelector(".svg-item"),v=document.querySelector(".operations"),g=document.querySelector(".operator-choose"),p=document.querySelector(".operator-change");function h(){v.classList.add("hidden"),g.classList.add("show"),v.classList.contains("show-menu")&&v.classList.remove("show-menu")}p.addEventListener("click",(()=>{v.classList.toggle("show-menu"),v.classList.contains("show-menu")||(p.textContent="Изменить")}));let f="";const{plus:_,minus:b,division:L,multi:y}=n;t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("plus")?(f=_,i(f),d.innerHTML=a(s()),h()):e.classList.contains("minus")?(f=b,i(f),d.innerHTML=a(s()),h()):e.classList.contains("division")?(f=L,i(f),d.innerHTML=a(s()),h()):e.classList.contains("multi")&&(f=y,i(f),d.innerHTML=a(s()),h())}))}));const w=document.querySelector(".answer");function x(){const e=[...document.querySelectorAll("[data-matrix-id]")];let t="";e.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.dataset.matrixId;w.classList.add("false-answer"),t+=n,m.textContent=t,t.length>=3&&(m.textContent=t,t=t.slice(1,t.length))}))}))}function S(){x(),m.textContent="?"}function q(){return+document.querySelector(".answer").textContent===function(){const e=document.querySelector(".first-number").textContent,t=document.querySelector(".second-number").textContent;return function(e,t,n){switch(t){case"-":return e-n;case"x":return e*n;case"/":return+(e/n).toFixed(1);default:return+e+ +n}}(e,document.querySelector(".operator").textContent,t)}()&&(w.classList.remove("false-answer"),w.classList.add("true-answer"),setTimeout((()=>w.classList.remove("true-answer")),400),setTimeout((()=>u()),400),c(),setTimeout((()=>S()),400)),!1}m.addEventListener("click",S),m.addEventListener("click",c),x(),setInterval((()=>q()),1e3),document.querySelector(".calculator__numbers").addEventListener("click",r)}))})();