import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import warki from '@/components/warki'
import receptury from '@/components/receptury'
import receptura from '@/components/receptura'
import galeria from '@/components/galeria'
import browar from '@/components/browar'
import kontakt from '@/components/kontakt'
import check from '@/components/check'

Vue.use(Router)

const router = new Router({
  base: "/oskars-craft-beer/", // tylko w przypadku migracji na github pages
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/warki/:id?',
      name: 'warki',
      component: warki
    },
    {
      path: '/receptury',
      name: 'receptury',
      component: receptury
    },
    {
      path: '/receptury/:id',
      name: 'receptura',
      component: receptura
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: galeria
    },
    {
      path: '/browar',
      name: 'browar',
      component: browar
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: kontakt
    },
    {
      path: '/check',
      name: 'check',
      component: check
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (window.localStorage.getItem("check") || to.path === "/check") {
        next();
    }
    else {
        next('/check')
    }
    
});

export default router;
