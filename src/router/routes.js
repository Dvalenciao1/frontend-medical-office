const routes = [
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/patient",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "profile",
        component: () => import("pages/PacientePage.vue"),
      },
      {
        path: "history",
        component: () => import("pages/HistorialPacientePage.vue"),
      },
      {
        path: "appointments",
        component: () => import("pages/AgendarCitasPage.vue"),
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
