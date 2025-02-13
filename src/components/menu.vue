<template>
  <nav class="bg-dark text-white p-3">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home 🏠</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/playlist">Playlists 🎧 </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/search">Search Songs 🔎</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
/* Importamos la fuente futurista */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

/* Estilos generales del menú */
nav {
  width: 220px;
  background: linear-gradient(to right, #444343, #111111); /* Gradiente de gris oscuro a negro */
  padding-top: 60px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.3);
  border-right: 2px solid rgb(117, 111, 111);
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  font-family: "Orbitron", sans-serif; /* Aplicar fuente futurista */
  letter-spacing: 2px; /* Espaciado entre letras */
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
  letter-spacing: 2px; /* Aumentar espaciado en los enlaces */
}

.nav-item:hover .nav-link {
  background-color: #9f1fbe;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 10px rgba(128, 0, 255, 0.8); /* Efecto de brillo al pasar el mouse */
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  text-transform: uppercase; /* Poner texto en mayúsculas para más impacto */
}

/* Active state */
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

</style>
