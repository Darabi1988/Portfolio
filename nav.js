/* nav.js — shared navigation logic */

/* Mark active page on load */
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a').forEach(a => {
    const href = a.getAttribute('href');
    if(href && href.split('/').pop() === path) a.classList.add('active');
  });
})();

/* Scroll animations (Fade-up) */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if(e.isIntersecting){ 
      e.target.classList.add('on'); 
      obs.unobserve(e.target); 
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* CV button logic - لینک مستقیم به فایل رزومه شما */
document.querySelectorAll('.cv-btn').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.open('Lebenslauf_Ali_Cheloee-Darabi.pdf', '_blank');
  });
});
