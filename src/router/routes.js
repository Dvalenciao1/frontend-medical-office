const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/paciente",
        component: () => import("pages/PacientePage.vue"),
      },
      {
        path: "/historial-paciente",
        component: () => import("pages/HistorialPaciente.vue"),
      },
      {
        path: "/agendar-citas",
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
