const routes = [
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            { path: "", component: () => import("pages/IndexPage.vue") },
        ],
    },
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        /*meta: {
            requireAuth: true,
        },*/
        children: [
            {
                path: "patient",
                component: () => import("pages/PacientePage.vue"),
            },
            {
                path: "history",
                component: () => import("pages/HistorialPaciente.vue"),
            },
            {
                path: "appointments",
                component: () => import("pages/AgendarCitasPage.vue"),
            },
            {
                path: "doctor",
                component: () => import("pages/DoctorPage.vue"),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
