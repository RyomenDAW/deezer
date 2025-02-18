<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Welcome to DeezerX Cloud!</h2>
        <p>Enter your name and choose an avatar.</p>
  
        <!-- =============================== -->
        <!-- 📝 INPUT DE NOMBRE -->
        <input v-model="name" placeholder="Enter your name" class="input-name" />
  
        <!-- =============================== -->
        <!-- 🖼️ SELECCIÓN DE AVATAR -->
        <div class="avatar-selection">
          <img
            v-for="(avatar, index) in avatars"
            :key="index"
            :src="avatar"
            :class="{ selected: avatar === selectedAvatar }"
            @click="selectedAvatar = avatar"
          />
        </div>
  
        <!-- =============================== -->
        <!-- ✅ BOTÓN PARA GUARDAR -->
        <button @click="saveUser" class="save-btn" :disabled="!name || !selectedAvatar">
          Start
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const name = ref("");
  const selectedAvatar = ref(null);
  
  // Lista de avatares predefinidos
  const avatars = [
  // 🔥 Jujutsu Kaisen (Manga)
  "https://i.redd.it/e88k7qgz8lzb1.jpg", // Gojo Satoru
  "https://preview.redd.it/assuming-yuji-is-a-manga-reader-and-sukuna-has-access-to-v0-jj2v1299ab4c1.jpg?auto=webp&s=134001f948f382b40b3559fbb7177ccbe2a47dd2", // Sukuna
  "https://i.pinimg.com/736x/20/bd/3a/20bd3a9de99e49792e37ddfc66909563.jpg", // Makora
  "https://s3.amazonaws.com/comicgeeks/characters/avatars/41687.jpg?t=1664800514", // Yuta Okkotsu

  // 🏹 Dark Souls
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbb2559b-70e8-45e9-8491-e19a0b3eddf6/da01hod-8172a926-bd6a-4c11-a519-775bdb2b7594.jpg/v1/fill/w_830,h_736,q_75,strp/dark_souls_iii_fanart___the_nameless_king_by_daemonstar_da01hod-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM2IiwicGF0aCI6IlwvZlwvYmJiMjU1OWItNzBlOC00NWU5LTg0OTEtZTE5YTBiM2VkZGY2XC9kYTAxaG9kLTgxNzJhOTI2LWJkNmEtNGMxMS1hNTE5LTc3NWJkYjJiNzU5NC5qcGciLCJ3aWR0aCI6Ijw9ODMwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lsuDGsvAK9jvSTa9V9WrofZhShCa9PQGNa8d5CPEnWo", // Artorias el Caminante del Abismo
  "https://i.pinimg.com/736x/3e/20/51/3e20519334ec7b0dfb79ed5131e45a0e.jpg", // soul of cinder
  "https://m.media-amazon.com/images/I/61l866Yv1+L._AC_SL1500_.jpg", // malenia
  "https://pbs.twimg.com/media/FWf0GCuXkAEdoIq?format=jpg&name=4096x4096", // Gwyn, Señor de la Ceniza
  "https://i.ytimg.com/vi/cBco3lNl-q8/maxresdefault.jpg", // radagon

  "https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fill/w_568,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png"
];

  
  // Emitir el usuario al padre
  const emit = defineEmits(["user-set"]);
  
  const saveUser = () => {
    if (name.value && selectedAvatar.value) {
      emit("user-set", {
        name: name.value,
        avatar: selectedAvatar.value,
      });
    }
  };
  </script>
  
  <style scoped>
  /* =============================== */
  /* 🖥️ MODAL */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* 🔹 MUY ALTO PARA ESTAR SOBRE TODO */

  }
  
  .modal-content {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: white;
    font-family: "Orbitron", sans-serif;

  }
  
  /* 📝 INPUT NOMBRE */
  .input-name {
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    margin-left: 10%;

  }
  
  /* 🖼️ AVATAR */
  .avatar-selection {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }
  
  .avatar-selection img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .avatar-selection img.selected {
    transform: scale(1.2);
    border: 2px solid #8000ff;
  }
  
  /* ✅ BOTÓN GUARDAR */
  .save-btn {
    margin-top: 15px;
    padding: 10px 20px;
    border: none;
    background: #8000ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s;
    font-family: "Orbitron", sans-serif;
    letter-spacing: 2px;
  }
  
  .save-btn:hover {
    background: #c400ff;
  }
  </style>
  