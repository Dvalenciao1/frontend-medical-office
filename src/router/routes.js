const routes = [
    {
        path: "",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: "patient",
                component: () => import("pages/IndexPage.vue"),
            },
            {
                path: "history",
                component: () => import("pages/HistorialPacientePage.vue"),
            },
        ],
    },
    {
        path: "",
        component: () => import("layouts/DoctorLayout.vue"),
        children: [
            { path: "doctor", component: () => import("pages/DoctorPage.vue") },
        ],
    },
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [{ path: "", component: () => import("pages/AuthPage.vue") }],
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
