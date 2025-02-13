<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "./components/menu.vue";
import Player from "./components/MusicPlayer.vue"
import SongCarousel from "./components/SongCarousel.vue";
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="text-white py-3"
      style="border-bottom: 2px solid rgb(117, 111, 111); background: linear-gradient(to bottom, #1d1b1b, #181818);">
      <div class="container text-center">
        <h1 class="spotify-font">DeezerX Cloud</h1>
      </div>
    </header>


    <!-- Layout Principal -->
    <div class="main-layout">
      <!-- Barra Lateral -->
      <Menu />

      <!-- Contenido Principal Centrado -->
      <div class="main-content">
        <router-view />
      </div>
    </div>

    <!-- <Menu /> -->

    <!-- Main Content -->

    <!-- Reproductor de Música (Colocado antes del footer) -->
    <Player />
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2024-2025 DeezerX Cloud. All Rights Reserved, Copyright.</p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Full height of the viewport */
  background: linear-gradient(to right, #1d1b1b, rgb(66, 16, 68)) !important;

}

.spotify-font {
  font-family: 'Orbitron', sans-serif; /* Fuente futurista */
  font-weight: 900; /* Peso grueso para impacto */
  letter-spacing: 12px; /* Aumento del espaciado para más impacto */
  text-transform: uppercase; /* Letras en mayúsculas para mayor presencia */

  /* Texto blanco por defecto */
  color: #fff;

  /* Sombra de texto mejorada para un resplandor más futurista */
  text-shadow:
    0px 0px 3px rgba(155, 77, 150, 0.8),  /* Sombra fina */
    0px 0px 7px rgba(155, 77, 150, 0.9),  /* Bordes brillantes */
    0px 0px 12px rgba(155, 77, 150, 1),   /* Mayor intensidad */
    0px 0px 20px rgba(155, 77, 150, 1);   /* Efecto de neón fuerte */

  /* Animación suave para efectos al pasar el mouse */
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}


@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.spotify-font:hover {
  /* Efecto de resplandor y animación */
  transform: scale(1.1);
  /* Aumenta un poco el tamaño al hacer hover */
  color: #ffffff;
  /* Texto blanco */

  /* Efecto de resplandor más fuerte en los bordes */
  text-shadow:
    0px 0px 5px rgba(155, 77, 150, 1),
    /* Bordes más definidos */
    0px 0px 10px rgba(155, 77, 150, 0.9),
    /* Resplandor brillante */
    0px 0px 20px rgba(155, 77, 150, 0.8),
    /* Aumenta la intensidad del brillo */
    0px 0px 30px rgba(155, 77, 150, 1);
  /* Resplandor máximo y más brillante */
}


main {
  flex: 1;
  /* Allows the main content to grow and take up available space */
  margin-bottom: 50px;
  /* Optional: space at the bottom of main content */
}

/* Importamos la fuente futurista */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

footer {
  margin-top: auto;
  /* Push the footer to la parte inferior de la página */
  background: linear-gradient(to right, #1d1b1b, #181818);
  /* El mismo gradiente horizontal */
  color: white;
  /* Asegura que el texto sea visible sobre el fondo oscuro */
  padding: 20px 0;
  /* Ajusta el padding para que tenga un buen espacio */
  text-align: center;
  /* Centra el contenido */
  font-family: "Orbitron", sans-serif;
  /* Aplica la fuente futurista */
  letter-spacing: 2px;
  /* Aumenta el espaciado entre letras */
  text-transform: uppercase;
  /* Hace que el texto se vea más futurista en mayúsculas */
  text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.6);
  /* Efecto de brillo para más impacto visual */
  border: 1px solid  rgb(117, 111, 111);
}



$hover-bg-color: #9f1fbe;
$hover-text-color: #ffffff;
$hover-border-radius: 10px;

li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: $hover-bg-color;
    color: $hover-text-color;
    font-weight: bold;
    border-radius: $hover-border-radius;
    /* Usamos la variable para redondear el borde */
  }
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}


.main-layout {
  display: flex;
  /* Flexbox para alinear horizontalmente */
  flex: 1;
  /* Ocupar el espacio disponible */
  min-height: calc(100vh - 60px);
  /* Altura completa menos el header/footer */
}

.main-content {
  flex: 1;
  /* El contenido ocupa el resto del espacio */
  display: flex;
  justify-content: center;
  /* Centra horizontalmente */
  align-items: center;
  /* Centra verticalmente */
  padding: 1px;
  overflow-y: auto;
  /* Scroll si hay mucho contenido */
  background: none; /* Evitar que sobreescriba el gradiente del body */

}



</style>
