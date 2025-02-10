<template>
  <div class="carousel-container">
    <!-- Contenedor de las barras de sonido arriba -->
    <div class="sound-wave-container top">
      <div class="sound-wave-bar" v-for="i in 10" :key="'top-' + i"></div>
    </div>
    
    <SongCarousel />
    
    <!-- Contenedor de las barras de sonido abajo -->
    <div class="sound-wave-container bottom">
      <div class="sound-wave-bar" v-for="i in 10" :key="'bottom-' + i"></div>
    </div>
  </div>
</template>

<script setup>
import SongCarousel from "@/components/SongCarousel.vue";
</script>

<style scoped>
/* Contenedor principal del carrusel */
.carousel-container {
  width: 100%;
  height: 100vh; /* Ocupa todo el alto disponible */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Necesario para que el contenido esté por encima */
  overflow: hidden; /* Evitar scroll innecesario */
  background-color: #1c1c1c; /* Fondo oscuro */
  background-image: url('your-image-url.jpg'); /* Aquí va la URL de la imagen de fondo */
  background-size: cover; /* La imagen de fondo ocupa todo el espacio */
  background-position: center; /* Asegura que la imagen se centre */
  filter: brightness(0.9); /* Hace que la imagen de fondo se vea más tenue */
  border: 6px solid transparent; /* Contorno transparente inicialmente */
  animation: borderPulse 1s ease-in-out infinite; /* Pulso del borde cada 2 segundos */

}

/* Animación del pulso del borde */
@keyframes borderPulse {
  0% {
    border-color: rgba(255, 255, 255, 0); /* Sin borde */
  }
  50% {
    border-color: rgba(237, 13, 245, 0.959); /* Borde brillante */
  }
  100% {
    border-color: rgba(124, 17, 138, 0.822); /* Sin borde */
  }
}

/* Contenedor de las barras de sonido arriba y abajo */
.sound-wave-container {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  z-index: 0; /* Las barras estarán por debajo del contenido */
  pointer-events: none; /* No afecta la interacción del usuario */
  animation: pulse 1s infinite alternate; /* Hacer que las barras suban rápidamente */
}

.sound-wave-container.top {
  top: 0; /* Las barras de arriba están en la parte superior */
  align-items: flex-start;
}

.sound-wave-container.bottom {
  bottom: 0; /* Las barras de abajo están en la parte inferior */
  align-items: flex-end;
}
/* Rotación solo en las barras de arriba para cambiar la dirección de los bordes */
.sound-wave-container.top .sound-wave-bar {
  transform: rotate(180deg); /* Rota las barras 180 grados */
}

/* Estilo para cada barra de sonido */
.sound-wave-bar {
  width: 12px; /* Ancho más estrecho de las barras */
  height: 120px; /* Inicialmente las barras son más grandes */
  background: linear-gradient(to bottom, #9b4d96, #6a0dad, #9b4d96); /* Gradiente morado electrónico */
  border-radius: 50% 50% 0 0; /* Bordes puntiagudos */
  animation: wave 0.20s ease-in-out infinite alternate; /* Animación más rápida */
}

/* Animación de las barras (suben y bajan) */
@keyframes wave {
  0% {
    height: 40px; /* Cuando las barras están más bajas */
  }
  100% {
    height: 140px; /* Cuando las barras suben */
  }
}

/* Barras de sonido con variación en las animaciones */
.sound-wave-bar:nth-child(odd) {
  animation-duration: 0.3s; /* Barras con animación más rápida */
}

.sound-wave-bar:nth-child(even) {
  animation-duration: 0.25s; /* Barras con animación aún más rápida */
}

/* Capa para mejorar la visibilidad del contenido sobre las barras */
.carousel-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); /* Filtro oscuro para mejorar la visibilidad */
  z-index: 1; /* Asegura que el filtro no tape el contenido */
}

/* Contenido del carrusel */
.song-carousel {
  position: relative;
  z-index: 2; /* El contenido está por encima de las barras */
  width: 100%;
  height: 100%;
}
</style>
