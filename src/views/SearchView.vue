<template>
  <div class="search-container">
    <h1 class="title">SEARCH FOR SOME SONGS IN DEEZER</h1>

    <!-- Barra de búsqueda -->
    <SearchBar @results="handleResults" />

    <!-- Resultados de búsqueda -->
    <div class="song-list">
      <div v-for="song in songs" :key="song.id" class="song-card">
        
        <!-- 🎵 Información de la canción -->
        <div class="song-info">
          <router-link :to="`/details/song/${song.id}`" class="song-title">
           Title: {{ song.title }}
          </router-link>

          <router-link :to="`/details/artist/${song.artist.id}`" class="song-artist">
           Artist: {{ song.artist.name }}
          </router-link>

          <router-link :to="`/details/album/${song.album.id}`" class="song-album">
            Album: {{ song.album.title }}
          </router-link>

          <p class="song-duration">{{ song.formattedDuration }}</p>
        </div>

        <!-- 💿 Imagen del álbum -->
        <div class="album-cover">
          <img :src="song.album.cover" :alt="`Carátula del álbum ${song.album.title}`" />
        </div>

        <!-- ❤️ Botón de favorito -->
        <button class="favorite-btn" @click="toggleFavorite(song)">
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

const songs = ref([]);
const favoritesStore = useFavoritesStore();

// **Formatear duración de la canción**
const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// **Manejar los resultados de la búsqueda**
const handleResults = (data) => {
  songs.value = data.map((song) => ({
    ...song,
    formattedDuration: formatDuration(song.duration),
  }));
};

// **Añadir/Quitar de favoritos**
const toggleFavorite = (song) => {
  if (isFavorite(song.id)) {
    favoritesStore.removeSong(song.id);
  } else {
    favoritesStore.addSong(song);
  }
};

// **Verificar si una canción está en favoritos**
const isFavorite = (songId) => {
  return favoritesStore.isFavorite(songId);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

/* 🔹 Estilos generales */
.search-container {
  color: white;
  padding: 30px;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
}

/* 🔥 Estilo del título */
.title {
  font-size: 2rem;
  letter-spacing: 3px;
  text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.8);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

/* 🎶 Contenedor de canciones */
.song-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 80%;
  margin: 0 auto;
}

/* 🎵 Tarjeta de cada canción */
.song-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #35004b, #4b0082); /* Gradiente aplicado a toda la tarjeta */
  padding: 15px;
  border-radius: 10px;
  transition: background 0.3s, transform 0.2s ease-in-out;
  box-shadow: 0px 0px 15px rgba(128, 0, 255, 0.5);
}

.song-card:hover {
  background: linear-gradient(to right, #4b0082, #5f00b7);
  transform: scale(1.02);
}

/* 🎼 Información de la canción */
.song-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
  flex: 1;
}

.song-title,
.song-artist,
.song-album {
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.song-title {
  color: #f7286d;
}

.song-artist {
  color: #c400ff;
}

.song-album {
  color: #4db6ac;
}

.song-title:hover,
.song-artist:hover,
.song-album:hover {
  text-decoration: underline;
}

/* ⏱️ Duración de la canción */
.song-duration {
  font-size: 1rem;
  color: #ddd;
}

/* 💿 Imagen del álbum */
.album-cover img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

.album-cover img:hover {
  transform: scale(1.1);
}

/* ❤️ Botón de favoritos */
.favorite-btn {
  font-size: 1.5rem;
  border: none;
  background: none;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin-left: 10%;
}

.favorite-btn .bi-heart-fill {
  color: red;
}

.favorite-btn:hover {
  transform: scale(1.2);
}
</style>
