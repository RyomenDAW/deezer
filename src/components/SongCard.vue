<template>
    <div class="song-card">
      <img 
        :src="song.album?.cover_big || 'https://via.placeholder.com/150'" 
        :alt="`Cover of ${song.album?.title || 'Unknown Album'}`" 
        class="album-cover"
      />
      <h3>{{ song.title }}</h3>
      <p>{{ song.artist.name }}</p>
      <button @click="toggleFavorite(song)">
        <i :class="isFavorite(song.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useFavoritesStore } from "../stores/favorites.js";
  
  const favoritesStore = useFavoritesStore();
  
  // Recibe la canción como prop
  defineProps({
    song: Object,
  });
  
  // Agregar o eliminar de favoritos
  const toggleFavorite = (song) => {
    if (isFavorite(song.id)) {
      favoritesStore.removeSong(song.id);
    } else {
      favoritesStore.addSong(song);
    }
  };
  
  // Verifica si una canción está en favoritos
  const isFavorite = (songId) => {
    return favoritesStore.isFavorite(songId);
  };
  </script>
  
  <style scoped>
  .song-card {
    background: #222;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 0 10px rgba(128, 0, 255, 0.4);
    transition: transform 0.2s ease-in-out;
  }
  
  .song-card:hover {
    transform: scale(1.05);
  }
  
  .album-cover {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  </style>
  