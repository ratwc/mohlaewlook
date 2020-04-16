/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
Vue.use(VueRouter);

let routes = [
    {
        path: "/",
        name: "Home",
        component: require("./components/ExampleComponent.vue").default
    },
    {
        path: "/login", component: require("./components/login.vue").default
    },
    {
        path: "/register",
        component: require("./components/register.vue").default
    },
    {
        path: "/info", component: require("./components/info.vue").default
    }
];

const router = new VueRouter({
    // mode: "history",
    routes // short for `routes: routes`
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Vue.component("navbar", require("./components/navbar.vue").default);
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    data() {
        return {
            navbarlinks: [
                // { link: "/", label: "Home" },
                { link: "/login", label: "login" },
                { link: "/register", label: "register" },
                { link: "/info", label: "info" }
            ]
        };
    }
}).$mount("#app");
