<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { type, id } = route.params;

const itemData = ref(null);
const loading = ref(true);
const errorMessage = ref("");

// 🔥 Función para cargar datos desde la API
const fetchData = async () => {
  let apiUrl = "";
  if (type === "song") {
    apiUrl = `http://localhost:8080/https://api.deezer.com/track/${id}`;
  } else if (type === "album") {
    apiUrl = `http://localhost:8080/https://api.deezer.com/album/${id}`;
  } else if (type === "artist") {
    apiUrl = `http://localhost:8080/https://api.deezer.com/artist/${id}`;
  }

  console.log(`🔍 Fetching data from: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Error al obtener datos de Deezer");

    const data = await response.json();
    console.log("✅ Datos obtenidos:", data);

    itemData.value = data;
  } catch (error) {
    console.error("❌ Error cargando datos:", error);
    errorMessage.value = "No se pudo cargar la información.";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);

// 🔄 Cargar dinámicamente el componente correspondiente
const DynamicComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/components/details/${type}Card.vue`));
});
</script>

<template>
  <div class="details-container">
    <h1 class="details-title">Detalles de {{ type }}</h1>

    <p v-if="loading">Cargando datos...</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <!-- 🔥 Verifica que itemData tiene datos antes de pasarlos -->
    <component 
      v-if="DynamicComponent && itemData" 
      :is="DynamicComponent" 
      :item="itemData" 
    />
  </div>
</template>

<style scoped>
.details-container {
  text-align: center;
  padding: 40px;
}

.details-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  letter-spacing: 5px;
  color: white;
  text-transform: uppercase;
  text-shadow: 0px 0px 8px rgba(128, 0, 255, 0.8);
}

.error-message {
  color: red;
  font-size: 1.2rem;
}
</style>
