import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import AboutComponent from '@/views/AboutComponent.vue'
import App from './App.vue'

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: HomeComponent},
        {path: '/about', name:'About', component: AboutComponent}
    ]
        
});

createApp(App)
.use(router)
.mount('#app')
