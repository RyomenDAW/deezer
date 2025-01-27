<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Búsqueda de canciones en Deezer</h1>
    <!-- Componente hijo -->
    <SearchBar @results="handleResults" />
    <!-- Lista de canciones -->
    <div class="mt-6 space-y-2">
      <div 
        v-for="song in songs" 
        :key="song.id" 
        class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200"
      >
        <!-- Información de la canción en una línea -->
        <div class="flex flex-grow gap-4 items-center truncate">
          <!-- Aumenté el tamaño de la fuente de los textos de la canción -->
          <span class="text-xl font-semibold truncate">{{ song.title }}</span> 
          <span class="text-xl text-gray-600 truncate">{{ song.artist.name }}</span> 
          <span class="text-lg text-gray-500 italic truncate">{{ song.album.title }}</span> 
          <span class="text-lg font-medium text-gray-800 truncate">{{ song.formattedDuration }}</span>
        </div>
        <!-- Carátula del álbum, fija a la derecha -->
        <img 
          :src="song.album.cover" 
          :alt="`Carátula del álbum ${song.album.title}`" 
          class="w-16 h-16 rounded-lg object-cover ml-4 flex-shrink-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue"; // Importa el componente hijo

const songs = ref([]); // Estado para almacenar la lista de canciones

// Función para formatear la duración en minutos y segundos
const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Maneja los resultados emitidos por el componente hijo
const handleResults = (data) => {
  // Añade una propiedad `formattedDuration` a cada canción
  songs.value = data.map((song) => ({
    ...song,
    formattedDuration: formatDuration(song.duration),
  }));
};
</script>

<style>
/* Estilo adicional para mejorar el diseño */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

h1 {
  color: #1db954; /* Verde estilo Spotify */
}

/* Ajustes para la lista */
.flex-grow {
  display: flex;
  align-items: center;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bg-white {
  line-height: 1.6; /* Ajuste compacto pero legible */
}

/* Para que la imagen de la carátula esté siempre a la derecha */
img {
  margin-left: 1rem; /* Separa la imagen de los textos */
}

/* Añadí flex-shrink-0 para evitar que la imagen se reduzca */
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
