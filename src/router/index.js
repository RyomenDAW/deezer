  import { createRouter, createWebHistory } from 'vue-router';

  import HomeView from '../views/HomeView.vue';
  import PlaylistView from '../views/PlaylistView.vue'; // ✅ Mantener esta vista
  import SearchView from '../views/SearchView.vue';
  import SongCarousel from '../components/SongCarousel.vue';
  import Details from '../components/details/DetailsVue.vue'; // Importar la vista Details

  const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/playlist', name: 'Playlist', component: PlaylistView }, // ✅ Corrección: "Playlist" en singular
    { path: '/search', name: 'Buscador', component: SearchView },
    { path: '/carousel', name: 'Carousel', component: SongCarousel },
    { path: '/details/:type/:id', name: 'Details', component: Details }, // Ruta dinámica para detalles
  ];

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  export default router;
