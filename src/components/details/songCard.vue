<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/favorites.js";

const favoritesStore = useFavoritesStore();
const props = defineProps({ item: Object });

// 🔥 Evitar errores si no hay datos aún
const song = computed(() => props.item || { 
  title: "Cargando...", 
  artist: { name: "Desconocido" }, 
  album: { cover_big: "https://via.placeholder.com/150", title: "Unknown Album" } 
});

// Función para añadir o quitar favoritos
const toggleFavorite = () => {
  if (!song.value.id) return;
  if (isFavorite(song.value.id)) {
    favoritesStore.removeSong(song.value.id);
  } else {
    favoritesStore.addSong(song.value);
  }
};

// Verifica si una canción está en favoritos
const isFavorite = (songId) => {
  return favoritesStore.isFavorite(songId);
};
</script>

<template>
  <div v-if="song" class="card-container">
    <img 
      :src="song.album?.cover_big || 'https://via.placeholder.com/150'"
      :alt="`Cover of ${song.album?.title || 'Unknown Album'}`"
      class="album-cover"
    />

    <h3 class="song-title">{{ song.title || "Canción Desconocida" }}</h3>

    <p class="info-text"><strong>🎤 Artista:</strong> {{ song.artist?.name || "Desconocido" }}</p>
    <p class="info-text"><strong>💿 Álbum:</strong> {{ song.album?.title || "Unknown Album" }}</p>

    <button class="favorite-btn" @click="toggleFavorite(song)">
      <i :class="isFavorite(song.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
    </button>
  </div>
  <p v-else class="loading-text">Cargando canción...</p>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

* {
  font-family: "Orbitron", sans-serif;
}

.card-container {
  background: linear-gradient(to right, #2a0730, #3a0d40);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(128, 0, 255, 0.5);
  transition: transform 0.2s ease-in-out;
  width: 40%;
  margin: 0 auto;
  margin-top: 10%;
}

.card-container:hover {
  transform: scale(1.05);
}

.album-cover {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
}

.song-title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
}

.info-text {
  font-size: 1.2rem;
  color: #ddd;
  margin: 5px 0;
}

.favorite-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 15px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

.favorite-btn:hover {
  transform: scale(1.1);
  color: #ff4081;
}

.bi-heart-fill {
  color: red;
}

.loading-text {
  font-size: 1.5rem;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
</style>
