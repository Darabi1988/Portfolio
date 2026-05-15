/* nav.js — shared navigation logic */

/* Mark active page */
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if(href === path) a.classList.add('active');
  });
})();

/* Scroll fade-up */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('on'); obs.unobserve(e.target); }});
}, { threshold:0.08 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* CV button */
document.querySelectorAll('.cv-btn').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    alert('Upload your CV PDF and replace this link with the direct file URL.');
  });
});
