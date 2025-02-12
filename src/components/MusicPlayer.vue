<template>
  <div class="player">
    <h2>Music Player</h2>

    <!-- Controles del reproductor con imágenes -->
    <div class="player-controls">
      <button @click="previousTrack">
        <img src="https://cdn-icons-png.flaticon.com/512/26/26309.png" alt="Prev" class="icon" />
        Anterior
      </button>
      <button @click="togglePlay">
        <img v-if="isPlaying" src="https://cdn-icons-png.flaticon.com/128/786/786279.png" alt="Pause" class="icon" />
        <img v-else src="https://cdn-icons-png.flaticon.com/128/142/142457.png" alt="Play" class="icon" />
        {{ isPlaying ? "Pausar" : "Reproducir" }}
      </button>
      <button @click="nextTrack">
        <img src="https://cdn-icons-png.flaticon.com/128/3318/3318722.png" alt="Next" class="icon" />
        Siguiente
      </button>
    </div>

    <!-- Información de la pista -->
    <div class="track-info">
      <p><strong>Título:</strong> {{ currentTrack.title }}</p>
      <p><strong>Artista:</strong> {{ currentTrack.artist }}</p>
    </div>

    <!-- Barra de progreso -->
    <div class="progress-bar">
      <input
        type="range"
        min="0"
        :max="currentTrack.duration || 1"
        v-model="progress"
        @input="seekAudio"
      />
      <div class="time-display">
        <span>{{ formatTime(progress) }}</span> / 
        <span>{{ formatTime(currentTrack.duration || 0) }}</span>
      </div>
    </div>

    <!-- Elemento de audio oculto -->
    <audio
      ref="audioPlayer"
      :src="currentTrack.src"
      @timeupdate="updateProgress"
      @ended="nextTrack"
    ></audio>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from "vue";

// Lista de pistas con nombres reales
const tracks = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: 200,
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: 230,
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: 215,
  },
];

// Estado reactivo del reproductor
const state = reactive({
  currentTrackIndex: 0,
  isPlaying: false,
  progress: 0,
  duration: 0,
});

// Referencia al elemento <audio>
const audioPlayer = ref(null);

// Computed para obtener la pista actual
const currentTrack = computed(() => tracks[state.currentTrackIndex]);

// Alternar reproducción/pausa
const togglePlay = () => {
  if (!audioPlayer.value) return;
  if (state.isPlaying) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  state.isPlaying = !state.isPlaying;
};

// Avanzar a la siguiente canción
const nextTrack = () => {
  state.currentTrackIndex = (state.currentTrackIndex + 1) % tracks.length;
  resetPlayer();
};

// Retroceder a la canción anterior
const previousTrack = () => {
  state.currentTrackIndex =
    (state.currentTrackIndex - 1 + tracks.length) % tracks.length;
  resetPlayer();
};

// Reiniciar el reproductor al cambiar de pista
const resetPlayer = () => {
  state.progress = 0;
  state.isPlaying = false;
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    audioPlayer.value.currentTime = 0;
    audioPlayer.value.src = currentTrack.value.src;
    togglePlay();
  }
};

// Actualizar el progreso
const updateProgress = () => {
  if (audioPlayer.value) {
    state.progress = audioPlayer.value.currentTime;
    state.duration = audioPlayer.value.duration || currentTrack.value.duration;
  }
};

// Saltar a una posición específica
const seekAudio = (event) => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = event.target.value;
    state.progress = event.target.value;
  }
};

// Formatear el tiempo (segundos a mm:ss)
const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

// Sincronizar estado del reproductor
onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.src = currentTrack.value.src;
  }
});

onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
  }
});
</script>

<style scoped>
/* Importamos la fuente futurista */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

/* Diseño futurista del reproductor */
.player {
  width: 100%;
  background: linear-gradient(to right, #1d1b1b, #181818);
  padding: 2rem;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 15px rgba(128, 0, 255, 0.6);
  letter-spacing: 2px; /* Espaciado entre letras en todo el reproductor */
}

/* Botones */
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
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 3px; /* Mayor espaciado en los botones */
}

.player-controls button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #8000ff;
}

/* Iconos pequeños */
.icon {
  width: 20px;
  height: 20px;
}

/* Información de la pista */
.track-info {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  letter-spacing: 2px; /* Espaciado en los textos de la pista */
}

/* Barra de progreso */
.progress-bar {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.time-display {
  font-size: 1rem;
  margin-top: 5px;
  color: #ddd;
  letter-spacing: 2px; /* Espaciado en la duración de la pista */
}

/* Estilización de la barra */
input[type="range"] {
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #3b3343, #c400ff);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.3s ease-in-out;
}

/* Pulgar de la barra de progreso */
input[type="range"]::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid #c400ff;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
</style>

