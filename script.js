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
});

window.addEventListener('load', () => {
   document.body.classList.add('loaded');
});

const audio = document.querySelector('audio');
const audioBtn = document.getElementById('audio-control');

audioBtn.addEventListener('click', () => {
   if (audio.paused) {
      audio.play();
      audioBtn.textContent = '⏸️'; // Mostrar pausa
   } else {
      audio.pause();
      audioBtn.textContent = '▶️'; // Mostrar play
   }
});
