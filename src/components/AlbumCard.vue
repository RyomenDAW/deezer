<template>
    <div class="cards-container">
      <h2 class="page-title">🎵 SONG & ALBUM CARDS</h2>
      <div class="grid">
        <SongCard v-for="song in favorites" :key="song.id" :song="song" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useFavoritesStore } from "../stores/favorites.js";
  import SongCard from "../components/SongCard.vue";
  
  const favoritesStore = useFavoritesStore();
  const favorites = computed(() => favoritesStore.playlist);
  </script>
  
  <style scoped>
  .cards-container {
    text-align: center;
    padding: 30px;
  }
  
  .page-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.8);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-content: center;
  }
  </style>
  