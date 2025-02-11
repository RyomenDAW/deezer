<template>
  <div class="card-container">
    <img 
      :src="song.album?.cover_big || 'https://via.placeholder.com/150'"
      :alt="`Cover of ${song.album?.title || 'Unknown Album'}`"
      class="album-cover"
    />
    <h3 class="song-title">{{ song.title || "Canción Desconocida" }}</h3>
    <p class="artist-name">{{ song.artist?.name || "Artista Desconocido" }}</p>

    <!-- Botón de favoritos -->
    <button class="favorite-btn" @click="toggleFavorite(song)">
      <i :class="isFavorite(song.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/favorites.js";

const favoritesStore = useFavoritesStore();
const props = defineProps({ song: Object });

// 🔥 **Solución: Evitar valores undefined en `song`, `artist` y `album`**
const song = computed(() => props.song || { 
title: "Cargando...", 
artist: { name: "Desconocido" }, 
album: { cover_big: "https://via.placeholder.com/150", title: "Unknown Album" } 
});

// Función para añadir o quitar favoritos
const toggleFavorite = () => {
if (!song.value.id) return; // Si la canción aún no carga, no hacer nada
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

<style scoped>
.card-container {
background: linear-gradient(to right, #222, #333);
padding: 20px;
border-radius: 10px;
text-align: center;
box-shadow: 0 0 15px rgba(128, 0, 255, 0.4);
transition: transform 0.2s ease-in-out;
font-family: 'Orbitron', sans-serif;
letter-spacing: 1.5px;
}

.card-container:hover {
transform: scale(1.05);
}

.album-cover {
width: 120px;
height: 120px;
border-radius: 8px;
object-fit: cover;
}

.song-title {
font-size: 1.4rem;
font-weight: bold;
color: white;
margin-top: 10px;
}

.artist-name {
font-size: 1rem;
color: #bbb;
}

.favorite-btn {
background: none;
border: none;
color: white;
font-size: 1.5rem;
cursor: pointer;
margin-top: 10px;
transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

.favorite-btn:hover {
transform: scale(1.1);
color: #ff4081;
}

.bi-heart-fill {
color: red;
}
</style>
