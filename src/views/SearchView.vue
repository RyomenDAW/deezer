<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Search for some songs in Deezer</h1>
    <!-- Componente hijo -->
    <SearchBar @results="handleResults" />
    
    <!-- Lista de canciones -->
    <div class="mt-6 space-y-2">
      <div id="playlist" v-for="song in songs" :key="song.id"
        class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-200">
        
        <!-- Información de la canción -->
        <div class="row items-center truncate">
          <div class="col-3" id="titulo">{{ song.title }}</div>
          <div class="col-2" id="artista">{{ song.artist.name }}</div>
          <div class="col-2" id="tituloalbum">{{ song.album.title }}</div>
          <div class="col-2" id="duracion">{{ song.formattedDuration }}</div>
          <div class="col-2">
            <img :src="song.album.cover" :alt="`Carátula del álbum ${song.album.title}`"
              class="w-16 h-16 rounded-lg object-cover ml-4 flex-shrink-0" />
          </div>
        </div>

        <!-- Botón de favorito -->
        <button class="btn btn-outline-success favorite-btn" @click="toggleFavorite(song)">
          <i :class="isFavorite(song.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFavoritesStore } from "../stores/favorites";
import SearchBar from "../components/SearchBar.vue";

const songs = ref([]); // Estado para almacenar la lista de canciones
const favoritesStore = useFavoritesStore(); // Accedemos a la store de favoritos

// Función para formatear la duración en minutos y segundos
const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Maneja los resultados emitidos por el componente hijo
const handleResults = (data) => {
  songs.value = data.map((song) => ({
    ...song,
    formattedDuration: formatDuration(song.duration),
  }));
};

// Agregar o eliminar de favoritos
const toggleFavorite = (song) => {
  if (isFavorite(song.id)) {
    favoritesStore.removeSong(song.id);
  } else {
    favoritesStore.addSong(song);
  }
};

// Verifica si una canción está en favoritos
const isFavorite = (songId) => {
  return favoritesStore.isFavorite(songId);
};
</script>

<style>
/* Estilo adicional para mejorar el diseño */
/* Estilo general de la página */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  /* Fondo oscuro estilo Spotify */
  color: #fff;
  /* Texto blanco para mejor contraste */
}


/* Botón de favorito */
.favorite-btn {
  font-size: 1.5rem;
  border: none;
  background: none;
  color: #ffffff; /* Color verde estilo Spotify */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

/* Cambio de color cuando está en favoritos */
.favorite-btn .bi-heart-fill {
  color: red;
}

.favorite-btn:hover {
  transform: scale(1.2);
}


/* Estilo del título con Orbitron */
h1 {
  font-family: 'Orbitron', sans-serif; /* Aplicar la fuente */
  font-size: 2rem; /* Tamaño más grande */
  letter-spacing: 4px; /* Espaciado entre letras */
  color: #ffffff; /* Blanco para destacar */
  text-shadow: 0px 0px 8px rgba(128, 0, 255, 0.7); /* Brillo futurista */
  text-transform: uppercase; /* Texto en mayúsculas */
  margin-bottom: 1rem; /* Espaciado inferior */
  text-align: center; /* Centrar el texto */
}

/* Contenedor principal de la playlist */
#playlist {
  background-color: #181818;
  /* Fondo oscuro para cada canción */
  padding: 15px;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  border-radius: 1px;
}

/* Efecto hover para cada canción */
#playlist:hover {
  background: #282828;
  /* Un poco más claro al pasar el mouse */
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

/* Alineación y espacio entre elementos */
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}


/* Columnas de la canción */
#titulo,
#artista,
#tituloalbum,
#duracion {
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  font-style: italic;

}

/* Colores diferenciados */
#titulo {
  color: #000000;
  font-weight: 700;
  transition: letter-spacing 0.3s ease-in-out; /* Para animación suave */
  font-size: 20px;
}

#titulo:hover{
  letter-spacing: 1px;
  color: #0d4624;
  transition: 3s;
}

#artista {
  color: #000000;
}

#tituloalbum {
  color: #080808;
}

#duracion {
  color: #080606;
}

/* Imagen del álbum */
img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

/* Efecto al pasar el mouse sobre la imagen */
img:hover {
  transform: scale(1.1);
}
.row {
  display: flex;
  align-items: stretch; /* Hace que todas las columnas tengan la misma altura */
}

.row > div {
  border-right: 2px solid rgba(0, 0, 0, 0.2); /* Bordes más visibles */
  padding: 5px; /* Espacio interno */
  display: flex;
  align-items: center; /* Centra el contenido verticalmente */
  justify-content: center; /* Centra horizontalmente */
  flex: 1; /* Hace que cada columna ocupe su espacio proporcional */
}

.row > div:last-child {
  border-right: none; /* Elimina el borde de la última columna */
}

.main-content {
  background: linear-gradient(to right, #1d1b1b,rgb(66, 16, 68));
}

</style>
