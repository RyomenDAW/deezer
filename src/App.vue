<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "./components/menu.vue";
import Player from "./components/reproductor.vue"
import SongCarousel from "./components/SongCarousel.vue";
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-dark bg-color text-white py-3">
      <div class="container text-center">
        <h1>Deezer 2º DAW Israel Hernandez</h1>
      </div>
    </header>

    <!-- Menu -->
    <Menu />

    <!-- Main Content -->
    <main class="container my-4">
      <router-view />
      <section>

      </section>
    </main>    





    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 2º DAW Deezer Music Client. All Rights Deserved, Copyright..</p>
    </footer>
  </div>
</template>

<script setup>

</script>


<style lang="scss">
nav {
  border: 1px solid gray;
}

$hover-bg-color: #113506;
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
