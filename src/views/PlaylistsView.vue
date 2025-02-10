<template>
  <div class="playlist-container">
    <h1 class="playlist-title">🎧 Playlists</h1>
    <p class="playlist-subtitle">Gestiona tus playlists aquí.</p>
    <PiniaComponent />
  </div>
</template>

<script setup>
import PiniaComponent from '../components/pinia.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.playlist-container {
  text-align: center;
  padding: 40px 0;
}

.playlist-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  letter-spacing: 10px;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.8);
  background: linear-gradient(to right, #552586, #7341b7); /* Menos saturado */
  padding: 15px;
  border-radius: 10px;
  display: inline-block;
}

.playlist-subtitle {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: #ddd;
  margin-top: 10px;
}
</style>
