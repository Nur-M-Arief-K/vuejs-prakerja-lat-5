import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:idKegiatan',
    name: 'kegiatan',
    component: () => import('../views/KegiatanView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.name == 'kegiatan') {
    if (typeof store.getters.ambilItemKegiatan(+to.params.idKegiatan) == 'undefined')
      return '/'
  }
})

export default router
