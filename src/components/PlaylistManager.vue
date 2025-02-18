<template>
    <div class="playlist-manager">
  
      <div v-if="!playlist || playlist.length === 0" class="empty-message">
        There is no songs available 😢
      </div>
  
      <ul class="playlist" @dragover.prevent @drop="drop">
        <PlaylistItem 
          v-for="(song, index) in playlist" 
          :key="song.id || song.title" 
          :song="song"
          :index="index"
          @dragstart="dragStart(index)"
          @remove="removeSong(song.id)"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useFavoritesStore } from "@/stores/favorites.js";
  import PlaylistItem from "@/components/PlaylistItem.vue";
  import { computed, ref, onMounted } from "vue";
  
  const favoritesStore = useFavoritesStore();
  const playlist = computed(() => favoritesStore.playlist || []);
  
  const draggedItemIndex = ref(null); // 🔹 Guarda el índice del item arrastrado
  
  // Cargar desde localStorage al montar
  onMounted(() => {
    favoritesStore.loadFromLocalStorage();
  });
  
  // **Inicio del arrastre**
  const dragStart = (index) => {
    draggedItemIndex.value = index;
  };
  
  // **Soltar el elemento y reordenar**
  const drop = (event) => {
    if (draggedItemIndex.value === null) return;
  
    const newIndex = [...event.target.closest(".playlist").children].indexOf(event.target.closest(".playlist-item"));
  
    if (newIndex !== -1 && newIndex !== draggedItemIndex.value) {
      const updatedPlaylist = [...playlist.value];
      const movedItem = updatedPlaylist.splice(draggedItemIndex.value, 1)[0]; // 🔹 Remover el item
      updatedPlaylist.splice(newIndex, 0, movedItem); // 🔹 Insertar en la nueva posición
  
      favoritesStore.playlist = updatedPlaylist; // 🔹 Actualizar en Pinia
      favoritesStore.saveToLocalStorage(); // 🔹 Guardar el nuevo orden
    }
  
    draggedItemIndex.value = null;
  };
  
  // **Eliminar una canción**
  const removeSong = (id) => {
    favoritesStore.removeSong(id);
  };
  </script>
  
  <style scoped>
.playlist-manager {
  background: linear-gradient(200deg, #0f0e0e, #5d066d, #302077, #1342c2); /* 🔥 MÁS OSCURO Y ELECTRIFICANTE */  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(128, 0, 255, 0.5);
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
}

  
  .title {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 20px;
  }
  
  .empty-message {
    font-size: 1.2rem;
    color: #bbb;
    margin-top: 20px;
  }
  
  .playlist {
    list-style: none;
    padding: 0;
  }
  
  /* 🔥 Efecto visual cuando un elemento está arrastrándose */
  .playlist-item {
    cursor: grab;
    transition: transform 0.2s ease-in-out;
    margin-top: 30%;
  }
  
  .playlist-item:active {
    transform: scale(1.05);
    cursor: grabbing;
  }

  </style>
  