const routes = [
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            { path: "", component: () => import("pages/IndexPage.vue") },
        ],
    },
    {
        path: "/patient",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: "profile",
                component: () => import("pages/PacientePage.vue"),
            },
            {
                path: "history",
                component: () => import("pages/HistorialPaciente.vue"),
            },
            {
                path: "appointments",
                component: () => import("pages/AgendarcitasPage.vue"),
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
