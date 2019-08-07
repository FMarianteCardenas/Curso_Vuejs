import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:  () => import('@/views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:  () => import('@/views/Dashboard.vue')
    },
    {
      path: '/productos',
      name: 'products',
      component:  () => import('@/views/Products.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  //store.dispatch('token');
  //console.log('ruta',to);
  console.log('authenticated',store.state.authenticated)
  const protected_routes = ['/dashboard','/productos']
  // protected_routes.forEach(element => {
  //   console.log('element',element)
  //   if(to.fullPath === element){
  //     if(!store.state.authenticated){
        
  //       next(
  //         {path:'/login',
  //         query: { redirect: to.fullPath }
  //       });
  //       console.log('entro');
  //     }
  //     else{
  //       next(element);
  //     }

  //     next();
  //   }
  // });
  let founded = false
  protected_routes.forEach(route => {
    if(to.fullPath === route){
      console.log('encontro',route);
      founded = true
    }
  });
  console.log('se ejecuta antes?',founded);

  if(founded){
    if(!store.state.authenticated){
      next('/login')
    }
    else{
      next()
    }
  }
  else{
    if(to.fullPath === '/login' || to.fullPath === '/'){
        if(store.state.authenticated){
          next('/dashboard')
        }
        else{
          next()
        }
    }
    else{
      next()
    }
  }
  // if (to.fullPath === '/dashboard') {
  //   if (!store.state.authenticated) {
  //     next('/login');
  //   }
  // }
  // if (to.fullPath === '/login') {
  //   if (store.state.authenticated) {
  //     next('/users');
  //   }
  // }
  // next();
});

export default router;
