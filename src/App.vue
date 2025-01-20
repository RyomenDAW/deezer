<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "./components/menu.vue";
import Player from "./components/reproductor.vue"
</script>

<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-primary text-white py-3">
      <div class="container text-center">
        <h1>Deezer 2º DAW Israel Hernandez</h1>
      </div>
    </header>

    <!-- Menu -->
    <Menu />

    <!-- Main Content -->
    <main class="container my-4">
      <router-view />
    </main>

     <!-- Menu -->
     <Menu />



    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2025 2º DAW Deezer Music Client. All Rights Deserved, Copyright..</p>
    </footer>
  </div>
</template>

<script setup>

</script>


<style lang="scss">
nav{
  border: 1px solid gray;
}
$hover-bg-color: #007bff;
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
