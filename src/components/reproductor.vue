<template>
    <div class="player">
      <h2>Reproductor de Música</h2>
  
      <!-- Controles del reproductor -->
      <div class="player-controls">
        <button @click="previousTrack">⏮ Anterior</button>
        <button @click="togglePlay">{{ isPlaying ? "⏸ Pausar" : "▶ Reproducir" }}</button>
        <button @click="nextTrack">⏭ Siguiente</button>
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
          :max="currentTrack.duration"
          v-model="progress"
          @input="seekAudio"
        />
        <div>
          <span>{{ formatTime(progress) }}</span> / 
          <span>{{ formatTime(currentTrack.duration) }}</span>
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
  
  // Lista de pistas con URLs reales
  const tracks = [
    {
      title: "Canción 1",
      artist: "Artista 1",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: 310, // Duración estimada en segundos (puede actualizarse dinámicamente)
    },
    {
      title: "Canción 2",
      artist: "Artista 2",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      duration: 290,
    },
    {
      title: "Canción 3",
      artist: "Artista 3",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      duration: 330,
    },
  ];
  
  // Estado reactivo del reproductor
  const state = reactive({
    currentTrackIndex: 0,
    isPlaying: false,
    progress: 0,
    duration: 0, // Duración actual de la canción (sincronizada con el audio)
  });
  
  // Referencia al elemento <audio>
  const audioPlayer = ref(null);
  
  // Computed para obtener la pista actual
  const currentTrack = computed(() => tracks[state.currentTrackIndex]);
  
  // Función para alternar reproducción/pausa
  const togglePlay = () => {
    if (!audioPlayer.value) return;
  
    if (state.isPlaying) {
      audioPlayer.value.pause();
    } else {
      audioPlayer.value.play();
    }
  
    state.isPlaying = !state.isPlaying;
  };
  
  // Función para avanzar a la siguiente canción
  const nextTrack = () => {
    if (state.currentTrackIndex < tracks.length - 1) {
      state.currentTrackIndex++;
    } else {
      state.currentTrackIndex = 0; // Repetir desde la primera canción
    }
    resetPlayer();
  };
  
  // Función para retroceder a la canción anterior
  const previousTrack = () => {
    if (state.currentTrackIndex > 0) {
      state.currentTrackIndex--;
    } else {
      state.currentTrackIndex = tracks.length - 1; // Ir a la última canción
    }
    resetPlayer();
  };
  
  // Función para reiniciar el reproductor al cambiar de pista
  const resetPlayer = () => {
    state.progress = 0;
    state.isPlaying = false;
  
    if (audioPlayer.value) {
      audioPlayer.value.pause();
      audioPlayer.value.currentTime = 0;
      audioPlayer.value.src = currentTrack.value.src;
      togglePlay(); // Opcional: iniciar reproducción automáticamente
    }
  };
  
  // Función para actualizar el progreso desde el evento `timeupdate`
  const updateProgress = () => {
    if (audioPlayer.value) {
      state.progress = audioPlayer.value.currentTime;
      state.duration = audioPlayer.value.duration || currentTrack.value.duration;
    }
  };
  
  // Función para saltar a una posición específica en la canción
  const seekAudio = (event) => {
    if (audioPlayer.value) {
      audioPlayer.value.currentTime = event.target.value;
      state.progress = event.target.value;
    }
  };
  
  // Función para formatear el tiempo (segundos a mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };
  
  // Sincronizar estado del reproductor al montar el componente
  onMounted(() => {
    if (audioPlayer.value) {
      audioPlayer.value.src = currentTrack.value.src;
    }
  });
  
  // Limpiar el reproductor al desmontar el componente
  onUnmounted(() => {
    if (audioPlayer.value) {
      audioPlayer.value.pause();
    }
  });
  </script>
  
  <style scoped>
  .player {
    background-color: #f8f9fa;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 500px;
    margin: auto;
  }
  
  .player-controls {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  
  .track-info {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .progress-bar {
    text-align: center;
  }
  
  input[type="range"] {
    width: 100%;
    margin: 0.5rem 0;
  }
  </style>
  