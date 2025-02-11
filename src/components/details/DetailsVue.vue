<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { type, id } = route.params;

// Cargar dinámicamente el componente desde `components/details/`
const DynamicComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/components/details/${type}Card.vue`));
});
</script>

<template>
  <div class="details-container">
    <h1>Detalles de {{ type }}</h1>
    <component v-if="DynamicComponent" :is="DynamicComponent" :id="id" />
    <p v-else>Error: Componente no encontrado!</p>
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
</style>
