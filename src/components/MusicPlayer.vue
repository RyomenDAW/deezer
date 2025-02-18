<script setup>
import { useFavoritesStore } from "@/stores/favorites.js";
import { reactive, ref, computed, onMounted, onUnmounted, watch } from "vue";

const favoritesStore = useFavoritesStore();
const audioPlayer = ref(null);

const state = reactive({
  currentTrackIndex: 0,
  isPlaying: false,
  progress: 0,
  duration: 0,
});
  
// **🎵 Computed: Obtener la lista de favoritos**
const tracks = computed(() => favoritesStore.playlist || []);

// **🔹 Si no hay canciones en favoritos, mostramos un mensaje**
const currentTrack = computed(() => {
  if (tracks.value.length > 0) {
    return tracks.value[state.currentTrackIndex];
  } else {
    return {
      title: "Sin canciones en favoritos",
      artist: { name: "N/A" },
      preview: "", // 🛑 Si esto está vacío, no sonará nada
      duration: 0,
    };
  }
});

// **🔊 Función de Debug: Ver si el preview está bien asignado**
watch(currentTrack, (newTrack) => {
  console.log("🎵 Nueva canción cargada:", newTrack);
  console.log("🔊 URL de preview:", newTrack.preview);
});

// **🎧 Iniciar/Pausar Reproducción**
const togglePlay = async () => {
  if (!audioPlayer.value || !currentTrack.value.preview) {
    console.warn("⚠️ No hay un archivo de audio válido.");
    return;
  }

  if (state.isPlaying) {
    audioPlayer.value.pause();
    state.isPlaying = false;
  } else {
    try {
      await audioPlayer.value.play();
      state.isPlaying = true;
    } catch (error) {
      console.error("⚠️ Error al reproducir el audio:", error);
    }
  }
};

// **⏭️ Siguiente Canción**
const nextTrack = () => {
  if (tracks.value.length === 0) return;
  state.currentTrackIndex = (state.currentTrackIndex + 1) % tracks.value.length;
  resetPlayer();
};

// **⏮️ Canción Anterior**
const previousTrack = () => {
  if (tracks.value.length === 0) return;
  state.currentTrackIndex =
    (state.currentTrackIndex - 1 + tracks.value.length) % tracks.value.length;
  resetPlayer();
};

// **🔄 Resetear el reproductor al cambiar de canción**
const resetPlayer = async () => {
  if (!audioPlayer.value || tracks.value.length === 0) return;
  state.progress = 0;
  state.isPlaying = false;

  // **💡 PAUSAR antes de cambiar de canción para evitar conflictos**
  audioPlayer.value.pause();
  audioPlayer.value.currentTime = 0;
  audioPlayer.value.src = currentTrack.value.preview;

  try {
    await audioPlayer.value.play();
    state.isPlaying = true;
  } catch (error) {
    console.warn("⚠️ No se pudo iniciar la reproducción automáticamente", error);
  }
};

// **📡 Actualizar barra de progreso en tiempo real**
const updateProgress = () => {
  if (audioPlayer.value) {
    state.progress = audioPlayer.value.currentTime;
    state.duration = audioPlayer.value.duration || currentTrack.value.duration;
  }
};

// **🎯 Permitir mover manualmente la barra de progreso**
const seekAudio = (event) => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = event.target.value;
    state.progress = event.target.value;
  }
};

// **📌 Asegurar que la duración se carga correctamente**
const onLoadedMetadata = () => {
  if (audioPlayer.value) {
    state.duration = audioPlayer.value.duration;
  }
};

// **🕒 Formato del tiempo (segundos → mm:ss)**
const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

// **🟢 Iniciar la pista cuando el componente se monta**
onMounted(() => {
  if (audioPlayer.value && tracks.value.length > 0) {
    audioPlayer.value.src = currentTrack.value.preview;
  }
});

// **🔴 Limpiar cuando el componente se desmonta**
onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
});
</script>

<template>
  <div class="player">
    <h2>Music Player 🎵</h2>

    <!-- Controles del reproductor -->
    <div class="player-controls">
      <button @click="previousTrack">
        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" alt="Prev" class="icon" />
        Before
      </button>
      <button @click="togglePlay">
        <img v-if="state.isPlaying" src="https://cdn-icons-png.flaticon.com/128/786/786279.png" alt="Pause" class="icon" />
        <img v-else src="https://cdn-icons-png.flaticon.com/128/142/142457.png" alt="Play" class="icon" />
        {{ state.isPlaying ? "Pause" : "Play" }}
      </button>
      <button @click="nextTrack">
        <img src="https://cdn-icons-png.flaticon.com/128/3318/3318722.png" alt="Next" class="icon" />
        Next
      </button>
    </div>

    <!-- Información de la pista -->
    <div class="track-info">
      <p><strong>Título:</strong> {{ currentTrack.title }}</p>
      <p><strong>Artista:</strong> {{ currentTrack.artist?.name || "Desconocido" }}</p>
    </div>

    <!-- Barra de progreso -->
    <div class="progress-bar">
      <input
        type="range"
        min="0"
        :max="state.duration || 1"
        v-model="state.progress"
        @input="seekAudio"
      />
      <div class="time-display">
        <span>{{ formatTime(state.progress) }}</span> / 
        <span>{{ formatTime(state.duration || 0) }}</span>
      </div>
    </div>

    <!-- Elemento de audio oculto -->
    <audio
      ref="audioPlayer"
      :src="currentTrack.preview"
      @timeupdate="updateProgress"
      @loadedmetadata="onLoadedMetadata"
      @ended="nextTrack"
    ></audio>
  </div>
</template>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.player {
  width: 100%;
  background: linear-gradient(120deg, #100f1f, #28004d, #5a00b3, #9b00ff);
  padding: 2rem;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 20px rgba(128, 0, 255, 0.75);
  letter-spacing: 2px;
  border-top: 2px solid rgb(117, 111, 111);
}


.player-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1rem;
}

.player-controls button {
  background: #8000ff;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.player-controls button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #8000ff;
}

/* 🔥 Barra de progreso morada */
input[type="range"] {
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #8000ff, #c400ff);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
}

.icon {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 0px 5px #c400ff);
  transition: transform 0.2s ease-in-out;
}

.icon:hover {
  transform: scale(1.2);
  filter: drop-shadow(0px 0px 10px #ff00ff);
}

.progress-bar input[type="range"] {
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #8000ff, #c400ff);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
}

.progress-bar input[type="range"]::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid #c400ff;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.progress-bar input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

</style>
