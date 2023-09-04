<template>
  <div class="container q-mx-xl">
    <div class="row justify-end">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          color="grey-7"
          text-color="white"
          glossy
          unelevated
          icon="close"
          label="Cerrar Sesión"
        />
      </div>
    </div>
    <div class="q-mb-xl">
      <span class="text-h5">Selecciona una opción</span>
    </div>

    <div class="row justify-around">
      <div class="col-3 q-mr-m">
        <q-card class="my-card">
          <img src="../image/doctor.jpg" />

          <q-card-section class="bg-positive">
            <div class="text-h6">Nombre del doctor</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 self-end">
        <q-card class="my-card">
          <a href="">
            <q-img
              style="height: 300px"
              src="../image/lista-de-verificacion.png"
            />
          </a>
          <q-card-section class="bg-secondary">
            <div class="text-h6">Historial de citas</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 self-end">
        <q-card class="my-card">
          <a href="#">
            <q-img style="height: 300px" src="../image/cita.png" />
          </a>
          <q-card-section class="bg-secondary">
            <div class="text-h6">Agendar una cita</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
