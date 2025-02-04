
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

    <!-- Menu -->
    <div class="row">
      <div class="col-2"><Menu /></div>
      <div class="col-10"><router-view />
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
  height: 100vh;
  /* Full height of the viewport */
}

/* Aplicamos la fuente "Bebas Neue" al h1 */
.spotify-font {
  font-family: 'Bebas Neue', sans-serif;  /* Fuente de estilo musical */
  font-weight: normal;  /* Ajustar el peso para que no esté tan grueso */
  letter-spacing: 6px;   /* Aumentar el espaciado entre letras */
  
  /* Texto blanco por defecto */
  color: #fff;

  /* Sombra de texto para darle un efecto de borde luminoso */
  text-shadow: 
    0px 0px 2px rgba(0, 188, 212, 0.7),  /* Sombra fina en los bordes */
    0px 0px 5px rgba(0, 188, 212, 0.7),  /* Bordes brillantes */
    0px 0px 8px rgba(0, 188, 212, 0.9),  /* Aumenta la intensidad de los bordes */
    0px 0px 15px rgba(0, 188, 212, 1);   /* Resplandor fuerte y definido */

  /* Animación suave para el hover */
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}

.spotify-font:hover {
  /* Efecto de resplandor y animación */
  transform: scale(1.1); /* Aumenta un poco el tamaño al hacer hover */
  color: #ffffff; /* Color azul electrificante */

  /* Efecto de resplandor más fuerte en los bordes */
  text-shadow: 
    0px 0px 5px rgba(0, 188, 212, 1),  /* Bordes más definidos */
    0px 0px 10px rgba(0, 188, 212, 0.9), /* Resplandor brillante */
    0px 0px 20px rgba(0, 188, 212, 0.8),  /* Aumenta la intensidad del brillo */
    0px 0px 30px rgba(0, 188, 212, 1);   /* Resplandor máximo y más brillante */
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
}

nav {
  // border: 1px solid gray;
}

$hover-bg-color: #3f6574;
$hover-text-color: #ffffff;

li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: $hover-bg-color;
    color: $hover-text-color;
    font-weight: bold;
  }
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>