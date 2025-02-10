<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "./components/menu.vue";
import Player from "./components/reproductor.vue"
import SongCarousel from "./components/SongCarousel.vue";
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-dark bg-color text-white py-3" style="border-bottom: 2px solid black;">
      <div class="container text-center">
        <h1 class="spotify-font">DeezerX Cloud </h1>
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


    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025-2025 DeezerX Cloud. All Rights Reserved, Copyright.</p>
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
}

/* Aplicamos la fuente "Bebas Neue" al h1 */
.spotify-font {
  font-family: 'Bebas Neue', sans-serif;
  /* Fuente de estilo musical */
  font-weight: 900;
  /* Ajustar el peso para que no esté tan grueso */
  letter-spacing: 10px;
  /* Aumentar el espaciado entre letras */

  /* Texto blanco por defecto */
  color: #fff;
  
/* Sombra de texto para darle un efecto de borde luminoso */
text-shadow:
  0px 0px 2px rgba(155, 77, 150, 0.7), /* Sombra fina en los bordes */
  0px 0px 5px rgba(155, 77, 150, 0.7), /* Bordes brillantes */
  0px 0px 8px rgba(155, 77, 150, 0.9), /* Aumenta la intensidad de los bordes */
  0px 0px 15px rgba(155, 77, 150, 1);  /* Resplandor fuerte y definido */

/* Animación suave para el hover */
transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}

.spotify-font:hover {
  /* Efecto de resplandor y animación */
  transform: scale(1.1); /* Aumenta un poco el tamaño al hacer hover */
  color: #ffffff; /* Texto blanco */

  /* Efecto de resplandor más fuerte en los bordes */
  text-shadow:
    0px 0px 5px rgba(155, 77, 150, 1),  /* Bordes más definidos */
    0px 0px 10px rgba(155, 77, 150, 0.9), /* Resplandor brillante */
    0px 0px 20px rgba(155, 77, 150, 0.8), /* Aumenta la intensidad del brillo */
    0px 0px 30px rgba(155, 77, 150, 1);  /* Resplandor máximo y más brillante */
}


main {
  flex: 1;
  /* Allows the main content to grow and take up available space */
  margin-bottom: 50px;
  /* Optional: space at the bottom of main content */
}

footer {
  margin-top: auto;
  /* Push the footer to the bottom of the page */
  background: linear-gradient(to right, #1d1b1b, #181818); /* El mismo gradiente horizontal */
  color: white; /* Asegura que el texto sea visible sobre el fondo oscuro */
  padding: 20px 0; /* Ajusta el padding para que tenga un buen espacio */
  text-align: center; /* Centra el contenido */
}

nav {
  // border: 1px solid gray;
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
    border-radius: $hover-border-radius; /* Usamos la variable para redondear el borde */
  }
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}


.main-layout {
  display: flex;          /* Flexbox para alinear horizontalmente */
  flex: 1;                /* Ocupar el espacio disponible */
  min-height: calc(100vh - 60px); /* Altura completa menos el header/footer */
}

.main-content {
  flex: 1;                /* El contenido ocupa el resto del espacio */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;     /* Centra verticalmente */
  padding: 1px;
  overflow-y: auto;        /* Scroll si hay mucho contenido */
  background-color: rgb(255, 255, 255);
}

</style>

