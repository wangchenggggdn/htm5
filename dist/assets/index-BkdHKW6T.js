(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();let s="en";function i(n){fetch(`/locales/${n}.json`).then(t=>t.json()).then(t=>{document.querySelectorAll("[data-lang]").forEach(o=>{const r=o.getAttribute("data-lang");t[r]&&(o.textContent=t[r])}),s=n})}function d(){window.toggleLanguage=()=>{const n=["en","zh","ko"],o=n.indexOf(s)%n.length;i(n[o])},document.getElementById("language-select").addEventListener("change",n=>{s=n.target.value,toggleLanguage()})}document.addEventListener("DOMContentLoaded",()=>{i("en"),d()});function u(){const n={"/":c,"/about":g,"/privacy":p,"/contact":f,"/download":m},t=window.location.pathname,o=n[t]||c,r=document.getElementById("main-content");r.innerHTML=o()}function c(){return document.getElementById("home-template").innerHTML}function g(){return`<div class="py-20 max-w-7xl mx-auto sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="terms-title"> </h3>
  <pre class="text-gray-400" data-lang="terms-info"> </pre>
  <p class="text-gray-400 py-10">
            &copy; 2024 <i data-lang="brand">Shap10r</i>. All rights reserved.
          </p>
  </div >`}function p(){return`<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
<h3 class="text-xl font-bold mb-4" data-lang="privacy-title"> </h3>
<pre class="text-gray-400" data-lang="privacy-info"> </pre>
</div >`}function f(){return`<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="contact-support"> </h3>
  <pre class="text-gray-400" data-lang="contact-info"> </pre>
  </div >`}function m(){return`<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="terms-title"> </h3>
  <pre class="text-gray-400" data-lang="terms-info"> </pre>
  </div >`}u();
