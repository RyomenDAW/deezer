<template>
  <div id="carouselExampleIndicators" class="carousel slide d-block w-50 mx-auto" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Iteramos las canciones para mostrarlas en el carrusel -->
      <div v-for="(cancion, index) in canciones" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <!-- Imagen del álbum -->
        <img :src="cancion.album.cover_big" class="d-block w-100" :alt="cancion.title" />
        <!-- Información de la canción -->
        <div class="carousel-caption d-none d-md-block">
          <h5>Canción: {{ cancion.title }}</h5>
          <p>Artista: {{ cancion.artist.name }}</p>
        </div>
      </div>
    </div>
    <!-- Controles del carrusel -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canciones = ref([]);

// Función para obtener datos de Deezer
const fetchDeezerChart = async () => {
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart');
    const data = await response.json();
    canciones.value = data.tracks.data; // Guardamos las canciones
  } catch (error) {
    console.error('Error al obtener datos de Deezer:', error);
  }
};

// Cargar datos al montar el componente
onMounted(fetchDeezerChart);
</script>

<style scoped>
.carousel-inner img {
  object-fit: cover;
  height: 400px; /* Ajusta la altura del carrusel */
}
.carousel {
  margin-top: 20px; /* Añade margen superior */
}
</style>
