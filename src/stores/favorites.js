// stores/favorites.js
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    playlist: JSON.parse(localStorage.getItem('favorites')) || [], // Cargar desde localStorage
  }),
  getters: {
    // Devuelve true si la canción ya está en favoritos
    isFavorite: (state) => (id) => state.playlist.some((song) => song.id === id),
  },
  actions: {
    // Guarda el estado en localStorage
    saveToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.playlist));
    },

    // Añade una canción a favoritos asegurando que los datos sean válidos
    addSong(song) {
      if (!this.playlist.some((s) => s.id === song.id)) {
        this.playlist.push({
          id: song.id || Date.now(), // 🔹 Si no tiene ID, se genera uno único
          title: song.title || "Título Desconocido", // 🔹 Previene errores con títulos vacíos
          artist: { name: song.artist?.name || "Artista Desconocido" }, // 🔹 Previene errores en artistas
          album: { cover_small: song.album?.cover_small || "https://via.placeholder.com/150" }, // 🔹 Imagen de fallback
          preview: song.preview || "", // 🔹 Guardar la preview (para el reproductor)
          duration: song.duration || 0, // 🔹 Duración predeterminada en 0 si no está definida
        });
        this.saveToLocalStorage();
      }
    },

    // Elimina una canción de favoritos
    removeSong(songId) {
      if (!songId) return; // 🔹 Previene errores si no se pasa un ID válido
      this.playlist = this.playlist.filter((song) => song.id !== songId);
      this.saveToLocalStorage();
    },

    // Cargar favoritos manualmente (en caso de que sea necesario)
    loadFromLocalStorage() {
      this.playlist = JSON.parse(localStorage.getItem('favorites')) || [];
    },
  },
});
