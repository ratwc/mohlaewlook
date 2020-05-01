let routes = [
    {
        path: "/",
        name: "Home",
        component: require("./pages/home.vue").default
    },
    {
        path: "/login",
        name: "userLogin",
        component: require("./pages/login.vue").default,
        meta: { requiresVisitor: true }
    },
    {
        path: "/register",
        name: "userRegister",
        component: require("./pages/register.vue").default,
        meta: { requiresVisitor: true }
    },
    {
        path: "/info",
        name: "info",
        component: require("./pages/info.vue").default,
        meta: { requiresAuth: true }
    },
    {
        path: "/reservation",
        name: "reservation",
        component: require("./pages/reservation.vue").default,
        meta: { requiresAuth: true }
    },
    {
        path: "/adminLogin",
        name: "adminLogin",
        component: require("./pages/admin/adminLogin.vue").default
    },
    {
        path: "/admin",
        component: require("./pages/admin/admin_control.vue").default,
        meta: { requiresAdmin: true },

        children: [
            {
                path: "",
                name: "adminHome",
                component: require("./pages/admin/adminHome.vue").default
            },
            {
                path: "newEmployee",
                name: "newEmployee",
                component: require("./pages/admin/registerEmployee.vue").default
            },
            {
                path: "addFlight",
                name: "addFlight",
                component: require("./pages/admin/addFlight.vue").default
            },
            {
                path: "addAircraft",
                name: "addAircraft",
                component: require("./pages/admin/addAircraft.vue").default
            },
            {
                path: "addAirport",
                name: "addAirport",
                component: require("./pages/admin/addAirport.vue").default
            },
            {
                path: "customer",
                name: "customerCRUD",
                component: require("./pages/admin/customerCRUD.vue").default
            },
            {
                path: "addPrice",
                name: "addPrice",
                component: require("./pages/admin/addPrice.vue").default
            }
        ]
    }
];

export default routes;
