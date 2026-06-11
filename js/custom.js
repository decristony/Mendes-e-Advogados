document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });

  var counters = document.querySelectorAll('.counter-value');
  if (counters.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target')) || 0;
          var duration = 2000;
          var step = Math.ceil(target / (duration / 16));
          var current = 0;
          var timer = setInterval(function () {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current + (el.getAttribute('data-suffix') || '');
          }, 16);
          observer.unobserve(el);
        }
      });
    });
    counters.forEach(function (c) { observer.observe(c); });
  }

  var mobileToggle = document.querySelector('.mobile-menu-toggle');
  var navMenu = document.querySelector('.nav-menu-flex');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
