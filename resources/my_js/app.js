// setup  files
import './bootstrap';
// import "./plugins/axios_setup.js";
// import "./plugins/sweet_alert.js";

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// welcome
import App from './views/App.vue';

// routes
import AdminLayout from './views/pages/admin/partials/Layout.vue'
import AdminDasboard from './views/pages/admin/Dashboard.vue'

import AdminUserLayout from './views/pages/admin/management/User/Layout.vue'
import AdminUserAll from './views/pages/admin/management/User/All.vue'
import AdminUserCreate from './views/pages/admin/management/User/Create.vue'

// common components

// project routes

// routers
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "welcome",
            component: App,
            children: [
                {
                    path: "admin",
                    name: "adminLayout",
                    component: AdminLayout,
                    children: [
                        {
                            path: "dashboard",
                            name: "adminDashboard",
                            component: AdminDasboard,
                        },
                        {
                            path: "user",
                            name: "adminUserLayout",
                            component: AdminUserLayout,
                            children: [
                                {
                                    path: "all",
                                    name: "adminUserAll",
                                    component: AdminUserAll,
                                },
                                {
                                    path: "create",
                                    name: "adminUserCreate",
                                    component: AdminUserCreate,
                                },
                            ]
                        }
                    ]
                },
            ]
        },
    ]
})

// previous route store
router.beforeEach((to, from, next) => {
    to.href.length > 2 &&
        window.sessionStorage.setItem('prevurl', to.href);
    next();
});

// render component
const app = createApp({});

app.component('app', App);
app.use(router);
app.mount('#app')
