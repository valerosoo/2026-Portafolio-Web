document.addEventListener('DOMContentLoaded', () => {
    const aparecen = document.querySelectorAll('.aparece');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    aparecen.forEach(el => observer.observe(el));

    const secciones = document.querySelectorAll('section[id]');
    const linksMenu = document.querySelectorAll('.menu a');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          linksMenu.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.style.color = 'var(--dorado)';
            }
          });
        }
      });
    }, { threshold: 0.4 });

    secciones.forEach(s => sectionObserver.observe(s));
});
