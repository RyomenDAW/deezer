<script setup>
import { computed } from "vue";

const props = defineProps({ item: Object });

// 🔥 Evitar errores si `artist` es `undefined`
const artist = computed(() => props.item || { 
  name: "Desconocido",
  picture_big: "https://via.placeholder.com/150",
  nb_fan: 0,
  nb_album: 0,
  nb_track: 0
});
</script>

<template>
  <div v-if="artist" class="card-container">
    <!-- 📸 Imagen del artista -->
    <img 
      :src="artist.picture_big || 'https://via.placeholder.com/150'" 
      :alt="`Imagen de ${artist.name}`"
      class="artist-picture"
    />

    <!-- 🎤 Nombre del artista -->
    <h3 class="artist-name">{{ artist.name || "Artista Desconocido" }}</h3>

    <!-- 🎶 Más información -->
    <div class="artist-info">
      <p><strong>👥 Fans:</strong> {{ artist.nb_fan.toLocaleString() }}</p>
      <p><strong>📀 Álbumes:</strong> {{ artist.nb_album }}</p>
    </div>
  </div>

  <p v-else class="loading-text">Cargando artista...</p>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

* {
  font-family: "Orbitron", sans-serif;
}

.card-container {
  background: linear-gradient(135deg, #29063b, #3d0970, #5a00a3); /* 🎨 MÁS PROFUNDO Y ELECTRIFICANTE */
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 25px rgba(150, 0, 255, 0.6);
  transition: transform 0.2s ease-in-out;
  width: 50%;
  margin: 0 auto;
  margin-top: 8%;
}

.card-container:hover {
  transform: scale(1.05);
}

.artist-picture {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.artist-name {
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 15px;
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.9);
}

.artist-info {
  font-size: 1.3rem;
  color: #ddd;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.4);
}

.artist-info p {
  margin: 5px 0;
}

.loading-text {
  font-size: 1.5rem;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
</style>
