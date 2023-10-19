import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import axios from 'axios'


import NavHome from "./components/NavHome.vue"
import NavCart from "./components/NavCart.vue"
import NavContact from "./components/NavContact.vue"
import NavMenuSP from './components/NavMenuSP.vue'
import QTDoanhthu from './components/QTDoanhthu.vue'
import QTDonhang from "./components/QTDonhang.vue"
import QTSanPham from "./components/QTSanpham.vue"
import QTThongtin from "./components/QTThongtin.vue"
import QTMenu from './components/QTMenu.vue'
import QTTintuc from "./components/QTTintuc.vue"
import QTUser from './components/QTUser.vue'
import NavForm from './components/NavForm.vue'
import Dangki from './components/Dangki.vue'
import JobDetails from './components/JobDetails.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: NavHome },
        { path: '/menusp', component: NavMenuSP },
        { path: '/navcart', component: NavCart },
        { path: '/navcontact', component: NavContact },
        { path: '/qtdoanhthu', component: QTDoanhthu },
        { path: '/qtdonhang', component:QTDonhang },
        { path: '/qtsp', component: QTSanPham },
        { path: '/qttt', component: QTThongtin },
        { path: '/qtmenu', component: QTMenu },
        { path: '/qttintuc', component: QTTintuc },
        { path: '/qtuser', component: QTUser },
        { path: '/navform', component: NavForm },
        { path: '/dangki', component: Dangki },
        { path: '/job/:id', component: JobDetails , name:"JobDetails"},
    ]
});


const app = createApp(App)
app.use(router,store,axios)
app.mount('#app')
