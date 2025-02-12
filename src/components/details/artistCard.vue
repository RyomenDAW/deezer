<script setup>
import { computed } from "vue";

const props = defineProps({ item: Object });

// 🔥 Evitar errores si `artist` es `undefined`
const artist = computed(() => props.item || { 
  name: "Desconocido",
  picture_big: "https://via.placeholder.com/150"
});
</script>

<template>
  <div v-if="artist" class="card-container">
    <img 
      :src="artist.picture_big || 'https://via.placeholder.com/150'" 
      :alt="`Imagen de ${artist.name}`"
      class="artist-picture"
    />

    <h3 class="artist-name">{{ artist.name || "Artista Desconocido" }}</h3>
  </div>

  <p v-else class="loading-text">Cargando artista...</p>
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

.artist-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.artist-name {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
}

.loading-text {
  font-size: 1.5rem;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
</style>
