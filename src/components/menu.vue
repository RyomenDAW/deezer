<template>
  <nav class="bg-dark text-white p-3">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home 🏠</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/playlists">Playlists 🎧 </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/search">Buscador 🔎</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/search2">Buscador 2 (TBD)</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
/* Fijar el menú a la izquierda y hacerlo vertical */
/* 3️⃣ - Menú lateral */
nav {
  width: 220px; 
  background: linear-gradient(to right, #444343, #111111); /* Gradiente de gris oscuro a negro */
  padding-top: 60px; 
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.3);
  border-right: 2px solid rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  flex-grow: 0; /* Expande el menú hasta el footer */
}



/* Estilo de la lista y los items */
.navbar-nav {
  list-style: none;
  padding: 0;
}

.nav-item {
  padding: 1rem;
}

.nav-item .nav-link {
  color: white;
  text-decoration: none;
  transition: background-color 0.1s, color 0.1s;
  font-weight: 800;
  border-radius: 10px;
}

.nav-item:hover .nav-link {
  background-color: #9f1fbe;
  font-weight: bold;
  color: white;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

/* Active state */
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
