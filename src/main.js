import Vue from 'vue'
import Layout from './layout'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
    el: '#app',
    router,
    render: h=>h(Layout)
});
