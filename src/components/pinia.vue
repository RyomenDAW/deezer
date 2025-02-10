<template>
  <div>
    <!-- <h1>🍍 Gestión de estados con Pinia</h1>
    
     Input para el email 
    <input v-model="email" type="email" placeholder="Introduce tu email" />
    <p>Tu email es: {{ email }}</p>
    <p>Dominio: {{ emailDomain }}</p>
    <button @click="clearEmail">Limpiar Email</button>

    <hr /> -->

    <!-- Mostrar favoritos -->
    <h2>🎵 Canciones Favoritas</h2>
    <ul v-if="favorites.length">
      <li v-for="song in favorites" :key="song.id">
        {{ song.title }} - {{ song.artist.name }}
        <button @click="removeFavorite(song.id)">❌</button>
      </li>
    </ul>
    <p v-else>No tienes canciones favoritas.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/email';
import { useFavoritesStore } from '../stores/favorites.js';

// Accede a la store de usuario
const userStore = useUserStore();

// Accede a la store de favoritos
const favoritesStore = useFavoritesStore();

// Vínculo con el estado de email
const email = computed({
  get: () => userStore.email,
  set: (value) => userStore.setEmail(value),
});
const emailDomain = computed(() => userStore.emailDomain);
const clearEmail = userStore.clearEmail;

// Accede a las canciones favoritas guardadas en localStorage
const favorites = computed(() => favoritesStore.playlist);

// Función para eliminar una canción de favoritos
const removeFavorite = (songId) => {
  favoritesStore.removeSong(songId);
};
</script>
