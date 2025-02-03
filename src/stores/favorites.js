// stores/favorites.js
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    playlist: JSON.parse(localStorage.getItem('favorites')) || [], // Cargar desde localStorage
  }),
  getters: {
    // Devuelve true si la canción ya está en favoritos
    isFavorite: (state) => (id) => {
      return state.playlist.some((song) => song.id === id);
    },
  },
  actions: {
    // Guarda el estado en localStorage
    saveToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.playlist));
    },

    // Añade una canción a favoritos
    addSong(song) {
      if (!this.playlist.some((s) => s.id === song.id)) {
        this.playlist.push(song);
        this.saveToLocalStorage(); // Guardar en localStorage
      }
    },

    // Elimina una canción de favoritos
    removeSong(songId) {
      this.playlist = this.playlist.filter((song) => song.id !== songId);
      this.saveToLocalStorage(); // Guardar en localStorage
    },

    // Cargar favoritos manualmente (en caso de que sea necesario)
    loadFromLocalStorage() {
      this.playlist = JSON.parse(localStorage.getItem('favorites')) || [];
    },
  },
});
