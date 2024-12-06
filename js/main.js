import { loadLanguage, setupLanguageToggle } from './languageManager.js';

// Initialize the site
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage('en');
  setupLanguageToggle();
});

function P() {
  const r = {
    '/': h,
    '/about': L,
    '/privacy': R,
    '/contact': K,
    '/download': Q,
  };
  const a = window.location.pathname,
    s = r[a] || h,
    e = document.getElementById('main-content');
  e.innerHTML = s();
}

function h() {
  return document.getElementById('home-template').innerHTML;
}

function L() {
  return `<div class="py-20 max-w-7xl mx-auto sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="terms-title"> </h3>
  <pre class="text-gray-400" data-lang="terms-info"> </pre>
  <p class="text-gray-400 py-10">
            &copy; 2024 <i data-lang="brand">Shap10r</i>. All rights reserved.
          </p>
  </div >`;
}

function R() {
  return `<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
<h3 class="text-xl font-bold mb-4" data-lang="privacy-title"> </h3>
<pre class="text-gray-400" data-lang="privacy-info"> </pre>
</div >`;
}

function K() {
  return `<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="contact-support"> </h3>
  <pre class="text-gray-400" data-lang="contact-info"> </pre>
  </div >`;
}

function Q() {
  return `<div class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" > 
  <h3 class="text-xl font-bold mb-4" data-lang="terms-title"> </h3>
  <pre class="text-gray-400" data-lang="terms-info"> </pre>
  </div >`;
}

P();
