<script setup>
defineProps({ artist: Object });
</script>

<template>
    <div class="card-container">
      <img 
        :src="artist.picture_big || 'https://via.placeholder.com/150'" 
        :alt="`Picture of ${artist.name}`"
        class="artist-picture"
      />
      <h3 class="artist-name">{{ artist.name }}</h3>
    </div>
  </template>
  

  
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
  
  .artist-picture {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .artist-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-top: 10px;
  }
  </style>
  