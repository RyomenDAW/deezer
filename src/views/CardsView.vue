<template>
    <div class="cards-container">
      <h1 class="cards-title">🎵 Song & Album Cards</h1>
  
      <div class="cards-grid">
        <SongCard v-for="song in songs" :key="song.id" :song="song" />
        <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SongCard from "../components/SongCard.vue";
  import AlbumCard from "../components/AlbumCard.vue";
  
  // Simulación de datos (Reemplazar con API)
  const songs = ref([
    {
      id: 1,
      title: "Blinding Lights",
      artist: { name: "The Weeknd" },
      album: { cover_big: "https://cdns-images.dzcdn.net/images/cover/1.jpg" },
    },
    {
      id: 2,
      title: "Save Your Tears",
      artist: { name: "The Weeknd" },
      album: { cover_big: "https://cdns-images.dzcdn.net/images/cover/2.jpg" },
    },
  ]);
  
  const albums = ref([
    {
      id: 1,
      title: "After Hours",
      artist: { name: "The Weeknd" },
      cover_big: "https://cdns-images.dzcdn.net/images/cover/3.jpg",
    },
    {
      id: 2,
      title: "Starboy",
      artist: { name: "The Weeknd" },
      cover_big: "https://cdns-images.dzcdn.net/images/cover/4.jpg",
    },
  ]);
  </script>
  
  <style scoped>
  .cards-container {
    text-align: center;
    padding: 40px;
  }
  
  .cards-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    letter-spacing: 5px;
    color: #ffffff;
    text-transform: uppercase;
    text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.8);
  }
  
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  </style>
  