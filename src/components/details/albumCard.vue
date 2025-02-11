<template>
    <div class="card-container">
      <img 
        :src="album.cover_big || 'https://via.placeholder.com/150'" 
        :alt="`Cover of ${album.title}`"
        class="album-cover"
      />
      <h3 class="album-title">{{ album.title }}</h3>
      <p class="artist-name">{{ album.artist.name }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({ album: Object });
  </script>
  
  <style scoped>
  .card-container {
    background: linear-gradient(to right, #222, #333);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 15px rgba(128, 0, 255, 0.4);
    transition: transform 0.2s ease-in-out;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1.5px;
  }
  
  .card-container:hover {
    transform: scale(1.05);
  }
  
  .album-cover {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .album-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    margin-top: 10px;
  }
  
  .artist-name {
    font-size: 1rem;
    color: #bbb;
  }
  </style>
  