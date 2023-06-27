
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../pages/SchedulePage.vue')
  }
]

export default routes
