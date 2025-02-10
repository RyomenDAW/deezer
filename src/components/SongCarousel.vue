<!-- Aqui el main-content se hereda de App.vue -->
<template>
  <div id="carouselExampleIndicators" class="carousel slide d-block w-100 shadow-lg rounded overflow-hidden" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Iteramos las canciones para mostrarlas en el carrusel -->
      <div v-for="(cancion, index) in canciones" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <!-- Imagen del álbum -->
        <img 
          :src="cancion.album.cover_big" 
          class="d-block" 
          :alt="cancion.title" 
          style="object-fit: cover; width: 100%; height: 60vh; filter: brightness(70%);"
        />
        <!-- Información de la canción -->
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h5 class="bg-dark bg-opacity-75 px-4 py-3 rounded text-white">{{ cancion.title }}</h5>
          <p class="bg-secondary bg-opacity-50 px-3 py-2 rounded text-white">Artista: {{ cancion.artist.name }}</p>
        </div>
      </div>
    </div>
    <!-- Controles del carrusel -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canciones = ref([]);

// Función para obtener datos de Deezer
const fetchDeezerChart = async () => {
  try {
    const response = await fetch('http://localhost:8080/https://api.deezer.com/chart');
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


.body{
  background-color: rebeccapurple;
}

.carousel {
  border-radius: 15px; /* Bordes redondeados */
  width: 100%; /* Asegura que el carrusel ocupe todo el ancho disponible */
  overflow: hidden; /* Evita el desbordamiento horizontal */
}

.carousel-inner img {
  border-radius: 15px; /* Bordes redondeados de las imágenes */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra */
  opacity: 0.99; /* O reduce más si quieres que el fondo se note */
}

.carousel-caption h5 {
  font-size: 2rem; /* Tamaño más grande para el título */
  font-weight: bold; /* Texto en negrita */
  padding: 10px 20px;
}

.carousel-caption p {
  font-size: 1.3rem; /* Tamaño ajustado para el artista */
  margin-top: 0.5rem; /* Espaciado superior */
  padding: 10px 20px;
}

/* Agrandar controles */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo más oscuro para los controles */
  border-radius: 50%; /* Iconos redondeados */
  padding: 15px; /* Tamaño del icono aumentado */
}

.carousel-control-prev,
.carousel-control-next {
  width: 8%; /* Controles más grandes */
}

@media (max-width: 768px) {
  .carousel-inner img {
    height: 400px; /* Ajuste de altura para dispositivos pequeños */
  }

  .carousel-caption h5 {
    font-size: 1.5rem;
  }

  .carousel-caption p {
    font-size: 1.1rem;
  }
}
</style>
