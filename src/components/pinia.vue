<template>
  <div class="favorites-container">
    <h2 class="favorites-title">🎵 FAVORITES SONGS</h2>

    <!-- Mostrar canciones favoritas -->
    <ul v-if="favorites.length" class="favorites-list">
      <li v-for="song in favorites" :key="song.id" class="favorite-item">
        <span class="song-title">{{ song.title }} - {{ song.artist.name }}</span>
        <button class="remove-btn" @click="removeFavorite(song.id)">❌</button>
      </li>
    </ul>
    
    <p v-else class="no-favorites">No tienes canciones favoritas.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFavoritesStore } from '../stores/favorites.js';

// Accede a la store de favoritos
const favoritesStore = useFavoritesStore();

// Accede a las canciones favoritas guardadas en localStorage
const favorites = computed(() => favoritesStore.playlist);

// Función para eliminar una canción de favoritos
const removeFavorite = (songId) => {
  favoritesStore.removeSong(songId);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.favorites-container {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  padding: 30px;
}

.favorites-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 3px;
  color: #e0e0e0; /* Blanco suave */
  text-transform: uppercase;
  text-shadow: 0px 0px 5px rgba(160, 77, 220, 0.6); /* Menos brillante */
  background: linear-gradient(to right, #552586, #7341b7); /* Menos saturado */
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
}

.favorites-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.favorite-item {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  letter-spacing: 1.5px;
  color: #ddd; /* Gris claro para suavizar */
  background: #2c2c2c; /* Menos contraste */
  padding: 12px;
  margin: 5px auto;
  width: 60%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease-in-out;
}

.favorite-item:hover {
  background: #3a3a3a; /* Cambio de color sutil al pasar el mouse */
}

.song-title {
  flex-grow: 1;
  text-align: left;
}

.remove-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  color: rgba(255, 100, 100, 0.8); /* Rojo más tenue */
}

.remove-btn:hover {
  transform: scale(1.1);
  color: rgba(255, 100, 100, 1); /* Un poco más brillante pero no exagerado */
}

.no-favorites {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 2px;
  color: #bbb; /* Suavizar el color */
  margin-top: 10px;
}
</style>
