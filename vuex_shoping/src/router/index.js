import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import axios from "axios"
import vueaxios from "vue-axios"

Vue.use(vueaxios,axios)

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }]
})