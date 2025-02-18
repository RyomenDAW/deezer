<template>
    <li class="playlist-item">
      <div class="song-info">
        <img :src="song?.album?.cover_small || 'https://via.placeholder.com/150'" class="cover" />
        <div>
          <p class="song-title">{{ song?.title || "Unkwown Title" }}</p>
          <p class="artist-name">{{ song?.artist?.name || "Unkwown Artist" }}</p>
        </div>
      </div>
      <button class="remove-btn" @click="$emit('remove')">❌</button>
    </li>
</template>

<script setup>
defineProps({ song: Object });
</script>


  
  <style scoped>
  .playlist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: background 0.2s ease-in-out;
  }
  
  .playlist-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .song-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .cover {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  
  .song-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
  
  .artist-name {
    font-size: 1rem;
    color: #bbb;
  }
  
  .remove-btn {
    background: none;
    border: none;
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .remove-btn:hover {
    transform: scale(1.1);
  }
  </style>
  