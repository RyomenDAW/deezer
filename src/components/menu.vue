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
/* 👤 USUARIO */
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
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
