<template>
    <div id="song-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Recorremos las canciones destacadas para mostrarlas en el carrusel -->
        <div
          v-for="(song, index) in songs"
          :key="song.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="song.album.cover_medium" class="d-block w-100" :alt="song.title" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ song.title }}</h5>
            <p>{{ song.artist.name }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#song-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#song-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>
  // Aquí usamos fetch en lugar de Axios para obtener los datos de Deezer
  import { ref, onMounted } from 'vue';
  
  const songs = ref([]); // Lista de canciones destacadas
  
  onMounted(async () => {
    try {
      const response = await fetch('https://api.deezer.com/chart'); // URL de la API
      const data = await response.json();
      songs.value = data.tracks.data; // Accedemos a las canciones del top charts
    } catch (error) {
      console.error('Error al obtener las canciones:', error);
    }
  });
  </script>
  
  <style scoped>
  .carousel-inner img {
    object-fit: cover;
    height: 400px; /* Ajuste de altura del carrusel */
  }
  </style>
  