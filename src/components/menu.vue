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

    <!-- =============================== -->
    <!-- 👤 USUARIO Y AVATAR -->
    <div class="user-info" v-if="user">
      <img :src="user.avatar" alt="User Avatar" class="avatar" />
      <span class="username">{{ user.name }}</span>
      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </nav>

  <!-- =============================== -->
  <!-- 🚀 MODAL DE BIENVENIDA -->
  <WelcomeModal v-if="!user" @user-set="setUser" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import WelcomeModal from "@/components/WelcomeModal.vue";

// ===============================
// 👤 GESTIÓN DEL USUARIO
const user = ref(null);

// ✅ Cargar usuario al montar
onMounted(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    user.value = JSON.parse(savedUser);
  }
});

// ✅ Guardar usuario desde el modal
const setUser = (newUser) => {
  user.value = newUser;
  localStorage.setItem("user", JSON.stringify(newUser));
};

// ✅ Cerrar sesión
const logout = () => {
  localStorage.removeItem("user");
  user.value = null;
};
</script>

<style lang="scss">
/* =============================== */
/* 📌 NAVBAR MÁS ELECTRIFICANTE */
nav {
  width: 300px;
  background: linear-gradient(105deg, #0f0e0e, #2e0036, #4a0080, #7a00cc); /* ⚡ MÁS OSCURO Y PROFUNDO */
  box-shadow: 4px 0 15px rgba(230, 37, 220, 0.5);  /* 🔥 SOMBRA MÁS SUAVE PERO PRESENTE */
  border-bottom: 1px solid rgb(117, 111, 111);
  border-right: 1px solid rgb(117, 111, 111);

  display: flex;
  flex-direction: column;
  flex-grow: 0;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 1px;
}

/* =============================== */
/* 🔥 ELEMENTOS DEL NAVBAR EN NEGRITA */
.navbar-nav {
  list-style: none;
  padding: 0;
}

.nav-item {
  padding: 1rem;
  font-weight: bold;
  /* ✅ PONER EN NEGRITA */
}

.nav-item .nav-link {
  color: white;
  text-decoration: none;
  transition: background-color 0.1s, color 0.1s;
  font-weight: 900;
  /* 🔥 MÁS NEGRITA */
  border-radius: 10px;
  font-size: 19px;
}

.nav-item:hover .nav-link {
  background: linear-gradient(to right, #ff00ffe6, #ff00ffe6);
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 15px #ff00ffe6;
  /* ⚡ BRILLO MÁS INTENSO */
}

/* ✅ Active state */
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* =============================== */
/* 👤 USUARIO */
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-weight: bold;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.username {
  font-weight: bold;
  font-size: 1.2rem;
}

.logout-btn {
  background: none;
  border: none;
  color: #ff4b4b;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.logout-btn:hover {
  color: red;
}
</style>
