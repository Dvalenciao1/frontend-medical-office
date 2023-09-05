<template>
  <div>
    <div class="row bg-primary justify-end">
      <div class="col-6 content-center">
        <span class="text-h6 text-accent">Medical Office</span>
      </div>
      <div class="col-6">
        <div class="q-pa-md">
          <q-btn color="primary" label="Salir" icon-right="close" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div>
          <span class="text-dark text-h3">Bienevido!</span>
        </div>
        <div>
          <q-img src="../assets/Image.svg" alt="Doctor"></q-img>
        </div>
      </div>
      <div class="col-6">
        <span class="text-h4">Selecciona una opción</span>
        <div class="row">
          <div>
            <div class="q-pa-md row items-start">
              <q-card class="my-card" flat bordered>
                <q-card-section horizontal>
                  <q-img
                    class="col-6"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                  ></q-img>
                  <q-card-section clas="col-6">
                    <div class="text-h6">Agendamiento de Citas Medicas</div>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn
                        color="positive"
                        icon-right="arrow"
                        label="Agendar citas"
                      />
                    </div>
                  </q-card-section>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <div class="q-pa-md row items-start">
              <q-card class="my-card" flat bordered>
                <q-card-section horizontal>
                  <q-img
                    class="col-6"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                  ></q-img>
                  <q-card-section clas="col-6">
                    <div class="text-h6">Historial de Citas</div>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn
                        color="positive"
                        icon-right="arrow"
                        label="Historial"
                      />
                    </div>
                  </q-card-section>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
