document.addEventListener('DOMContentLoaded', () => {
   const contador = document.getElementById('contador');

   // Fecha objetivo: 28 de junio de 2025 a las 14:00 hrs
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

   // Mostrar loader
   window.addEventListener('load', () => {
      document.body.classList.add('loaded');
   });

   // Control manual de música
   const audio = document.getElementById('audio');
   const audioBtn = document.getElementById('audio-control');

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

   prevBtn?.addEventListener('click', () => {
      slider.scrollBy({left: -300, behavior: 'smooth'});
   });

   nextBtn?.addEventListener('click', () => {
      slider.scrollBy({left: 300, behavior: 'smooth'});
   });

   // Activar audio con primer toque
   const mensajeMusica = document.getElementById('mensaje-musica');

   const activarAudio = () => {
      audio
         .play()
         .then(() => {
            mensajeMusica.style.opacity = '1';
            setTimeout(() => {
               mensajeMusica.style.opacity = '0';
            }, 2500);
         })
         .catch((e) => {
            console.warn('Autoplay bloqueado por el navegador:', e);
         });

      document.removeEventListener('touchstart', activarAudio);
      document.removeEventListener('click', activarAudio);
   };

   document.addEventListener('touchstart', activarAudio);
   document.addEventListener('click', activarAudio);
});

// Activar música desde el botón "Iniciar experiencia"
document.addEventListener('DOMContentLoaded', function () {
   const overlay = document.getElementById('inicio-overlay');
   const iniciarBtn = document.getElementById('iniciar-btn');
   const audio = document.getElementById('audio');
   const mensajeMusica = document.getElementById('mensaje-musica');

   iniciarBtn.addEventListener('click', function () {
      audio
         .play()
         .then(() => {
            mensajeMusica.style.opacity = '1';
            setTimeout(() => {
               mensajeMusica.style.opacity = '0';
            }, 2500);
         })
         .catch((err) => {
            console.warn('Error al reproducir audio:', err);
         });

      overlay.style.display = 'none'; // Oculta el overlay
   });
});
