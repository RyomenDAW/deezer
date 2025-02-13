<template>
  <div class="playlist-view">
    <h1 class="title">🎵 YOUR PLAYLIST</h1>
    <hr>
    <PlaylistManager />
  </div>
</template>

<script setup>
import PlaylistManager from "@/components/PlaylistManager.vue";
</script>

<style scoped>
.playlist-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.song-cover {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

.song-info h3 {
  font-size: 1.2rem;
  color: white;
}

.song-info p {
  color: #bbb;
  font-size: 1rem;
}

.title{
  margin: 10%;
  font-family: 'Orbitron', sans-serif;
  color: white;
}
</style>
