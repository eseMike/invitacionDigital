document.addEventListener('DOMContentLoaded', () => {
   // Contador regresivo
   const contador = document.getElementById('contador');
   const fechaBoda = new Date('2025-06-28T14:00:00').getTime();

   const actualizarContador = () => {
      const ahora = new Date().getTime();
      const diferencia = fechaBoda - ahora;

      if (diferencia <= 0) {
         contador.innerHTML = '¡Es hoy! 💍';
         return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      contador.innerHTML = `${dias} días, ${horas} hrs, ${minutos} min, ${segundos} seg`;
   };

   actualizarContador();
   setInterval(actualizarContador, 1000);

   // Mostrar loader y eliminarlo del DOM
   window.addEventListener('load', () => {
      setTimeout(() => {
         document.body.classList.add('loaded');
         const loader = document.getElementById('loader');
         if (loader) loader.remove();
      }, 1500);
   });

   // Audio y mensaje
   const audio = document.getElementById('audio');
   const audioBtn = document.getElementById('audio-control');
   const mensajeMusica = document.getElementById('mensaje-musica');

   audioBtn.addEventListener('click', () => {
      if (audio.paused) {
         audio.play();
         audioBtn.textContent = '⏸️';
      } else {
         audio.pause();
         audioBtn.textContent = '▶️';
      }
   });

   // Slider galería
   const prevBtn = document.querySelector('.slider-btn.prev');
   const nextBtn = document.querySelector('.slider-btn.next');
   const slider = document.querySelector('.slider-fotos');

   if (prevBtn && nextBtn && slider) {
      prevBtn.addEventListener('click', () => {
         slider.scrollBy({left: -300, behavior: 'smooth'});
      });

      nextBtn.addEventListener('click', () => {
         slider.scrollBy({left: 300, behavior: 'smooth'});
      });
   }

   // Iniciar experiencia
   const overlay = document.getElementById('inicio-overlay');
   const iniciarBtn = document.getElementById('iniciar-btn');

   iniciarBtn.addEventListener('click', () => {
      overlay.style.transition = 'opacity 0.8s ease';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';

      // Intentar reproducir el audio tras interacción
      audio
         .play()
         .then(() => {
            audioBtn.textContent = '⏸️';
            mensajeMusica.style.opacity = '1';
            setTimeout(() => {
               mensajeMusica.style.opacity = '0';
            }, 2500);
         })
         .catch((e) => {
            console.warn('Autoplay bloqueado por el navegador:', e);
         });

      setTimeout(() => {
         overlay.style.display = 'none';

         // Reforzar visibilidad y animaciones
         document.body.style.overflow = '';
         document.documentElement.style.overflow = '';

         document.querySelectorAll('section').forEach((sec) => {
            sec.style.visibility = 'visible';
            sec.style.opacity = '1';
         });

         if (typeof AOS !== 'undefined') {
            AOS.init({duration: 1000, once: true});
            AOS.refreshHard();
         }
      }, 800);
   });
});
