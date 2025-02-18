<script setup>
import { ref, computed } from "vue";

const props = defineProps({ item: Object });
const showModal = ref(false); // 🔥 Controla la visibilidad del modal

// 🔥 Asegurar que `album` tenga valores por defecto si es `undefined`
const album = computed(() => props.item || { 
  title: "Cargando...", 
  cover_big: "https://via.placeholder.com/150", 
  artist: { name: "Desconocido" } 
});

// ✅ Abre el modal
const openModal = () => {
  showModal.value = true;
};

// ✅ Cierra el modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <!-- 🔥 Tarjeta del Álbum -->
  <div v-if="album" class="card-container" @click="openModal">
    <img 
      :src="album.cover_big || 'https://via.placeholder.com/150'" 
      :alt="`Cover of ${album.title}`"
      class="album-cover"
    />

    <h3 class="album-title">{{ album.title || "Álbum Desconocido" }}</h3>
    <p class="info-text"><strong>🎤 Artista:</strong> {{ album.artist?.name || "Desconocido" }}</p>
  </div>

  <p v-else class="loading-text">Cargando álbum...</p>

  <!-- ✅ MODAL DE BOOSTRAP -->
  <div class="modal fade" :class="{ 'show d-block': showModal }" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- 🔥 HEADER -->
        <div class="modal-header">
          <h5 class="modal-title">{{ album.title }}</h5>
          <button type="button" class="close" @click="closeModal">
            <span>&times;</span>
          </button>
        </div>

        <!-- 📀 BODY -->
        <div class="modal-body text-center">
          <img 
            :src="album.cover_big || 'https://via.placeholder.com/150'" 
            :alt="`Cover of ${album.title}`"
            class="modal-album-cover"
          />
          <p class="modal-info"><strong>Artista:</strong> {{ album.artist?.name || "Desconocido" }}</p>
        </div>

        <!-- 🎵 FOOTER -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ✅ BACKDROP PARA CERRAR MODAL -->
  <div v-if="showModal" class="modal-backdrop fade show" @click="closeModal"></div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

* {
  font-family: "Orbitron", sans-serif;
}

.card-container {
  background: linear-gradient(135deg, #29063b, #3d0970, #5a00a3);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(128, 0, 255, 0.5);
  transition: transform 0.2s ease-in-out;
  width: 40%;
  margin: 0 auto;
  margin-top: 5%;
  cursor: pointer;
}

.card-container:hover {
  transform: scale(1.05);
}

.album-cover {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
}

.album-title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
}

.info-text {
  font-size: 1.2rem;
  color: #ddd;
  margin: 5px 0;
}

.loading-text {
  font-size: 1.5rem;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}

/* ✅ MODAL ESTILOS */
.modal-content {
  background: linear-gradient(135deg, #1a0222, #3d0970, #5a00a3);
  color: white;
  border-radius: 10px;
  text-align: center;
  border: 2px solid rgb(253, 0, 0);
}

.modal-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.modal-album-cover {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 15px;
}

.modal-info {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

/* ✅ BOTÓN DE CIERRE */
.close {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

.close:hover {
  color: red;
}

/* ✅ BACKDROP (FONDO OSCURO AL ABRIR EL MODAL) */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1040;
}
</style>
