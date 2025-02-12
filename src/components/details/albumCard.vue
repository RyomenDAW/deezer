<script setup>
import { computed } from "vue";

const props = defineProps({ item: Object });

// 🔥 Asegurar que `album` tenga valores por defecto si es `undefined`
const album = computed(() => props.item || { 
  title: "Cargando...", 
  cover_big: "https://via.placeholder.com/150", 
  artist: { name: "Desconocido" } 
});
</script>

<template>
  <div v-if="album" class="card-container">
    <img 
      :src="album.cover_big || 'https://via.placeholder.com/150'" 
      :alt="`Cover of ${album.title}`"
      class="album-cover"
    />

    <h3 class="album-title">{{ album.title || "Álbum Desconocido" }}</h3>
    <p class="info-text"><strong>🎤 Artista:</strong> {{ album.artist?.name || "Desconocido" }}</p>
  </div>

  <p v-else class="loading-text">Cargando álbum...</p>
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

.album-title {
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

.loading-text {
  font-size: 1.5rem;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
</style>
