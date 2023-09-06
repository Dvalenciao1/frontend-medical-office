<template>
    <div>
        <div class="row">
            <div class="col-6">
                <div class="q-pt-md text-center">
                    <span class="text-h3 q-pa-xl">Bienvenido!</span>
                </div>
                <div class="q-pt-md text-center">
                    <span class="text-h6 q-pa-xl"
                        >Revisa tus citas pendientes en el calendario</span
                    >
                </div>
                <div class="q-pt-xl text-center">
                    <q-date style="width: 400px" v-model="days" multiple />
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="q-pa-md">
                            <q-btn
                                label="Nuevo horario"
                                color="positive"
                                @click="dialog = true"
                            />

                            <q-dialog
                                v-model="dialog"
                                persistent
                                transition-show="slide-up"
                                transition-hide="slide-down"
                            >
                                <q-card
                                    class="bg-primary text-white"
                                    style="width: 600px"
                                >
                                    <q-bar>
                                        <q-space />

                                        <q-btn
                                            dense
                                            flat
                                            icon="minimize"
                                            @click="maximizedToggle = false"
                                            :disable="!maximizedToggle"
                                        >
                                            <q-tooltip
                                                v-if="maximizedToggle"
                                                class="bg-white text-primary"
                                                >Minimize</q-tooltip
                                            >
                                        </q-btn>
                                        <q-btn
                                            dense
                                            flat
                                            icon="crop_square"
                                            @click="maximizedToggle = true"
                                            :disable="maximizedToggle"
                                        >
                                            <q-tooltip
                                                v-if="!maximizedToggle"
                                                class="bg-white text-primary"
                                                >Maximize</q-tooltip
                                            >
                                        </q-btn>
                                        <q-btn
                                            dense
                                            flat
                                            icon="close"
                                            v-close-popup
                                        >
                                            <q-tooltip
                                                class="bg-white text-primary"
                                                >Close</q-tooltip
                                            >
                                        </q-btn>
                                    </q-bar>

                                    <q-card-section>
                                        <div class="text-h6">
                                            Llenar formulario
                                        </div>
                                    </q-card-section>
                                    <div class="bg-accent">
                                        <div class="q-pa-sm">
                                            <div
                                                class="text-center"
                                                style="max-width: 400px"
                                            >
                                                <q-input
                                                    v-model="text"
                                                    label="Nombre"
                                                />
                                                <q-input
                                                    v-model="text"
                                                    label="Cedula"
                                                />
                                                <q-input
                                                    v-model="date"
                                                    type="date"
                                                    label="fecha"
                                                />
                                                <q-input
                                                    v-model="time"
                                                    type="time"
                                                    label="Hora"
                                                /><q-input
                                                    v-model="text"
                                                    label="Estado"
                                                />
                                                <div class>
                                                    <q-btn
                                                        color="primary"
                                                        label="Enviar"
                                                    />
                                                    <q-btn
                                                        color="warning"
                                                        label="Cancelar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <q-card-section class="q-pt-none">
                                    </q-card-section>
                                </q-card>
                            </q-dialog>
                        </div>
                    </div>

                    <!--El otro dialog -->
                    <div class="q-pa-md q-gutter-sm">
                        <q-btn
                            label="Reporte medico"
                            color="positive"
                            @click="dialog2 = true"
                        />
                        <q-dialog
                            v-model="dialog2"
                            persistent
                            :maximized="maximizedToggle"
                            transition-show="slide-up"
                            transition-hide="slide-down"
                        >
                            <q-card class="bg-primary text-white">
                                <q-bar>
                                    <q-space />

                                    <q-btn
                                        dense
                                        flat
                                        icon="minimize"
                                        @click="maximizedToggle = false"
                                        :disable="!maximizedToggle"
                                    >
                                        <q-tooltip
                                            v-if="maximizedToggle"
                                            class="bg-white text-primary"
                                            >Minimize</q-tooltip
                                        >
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        icon="crop_square"
                                        @click="maximizedToggle = true"
                                        :disable="maximizedToggle"
                                    >
                                        <q-tooltip
                                            v-if="!maximizedToggle"
                                            class="bg-white text-primary"
                                            >Maximize</q-tooltip
                                        >
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        icon="close"
                                        v-close-popup
                                    >
                                        <q-tooltip class="bg-white text-primary"
                                            >Close</q-tooltip
                                        >
                                    </q-btn>
                                </q-bar>

                                <q-card-section>
                                    <div class="text-h6">Informe</div>
                                </q-card-section>
                                <div class="bg-accent">
                                    <div class="q-pa-md">
                                        <div
                                            class="q-gutter-md"
                                            style="width: 1000px"
                                        >
                                            <div class="q-pa-md">
                                                <q-card
                                                    class="my-card"
                                                    flat
                                                    bordered
                                                >
                                                    <q-card-section>
                                                        <div
                                                            class="text-subtitle2"
                                                        >
                                                            by John Doe
                                                        </div>
                                                    </q-card-section>

                                                    <q-tabs
                                                        v-model="tab"
                                                        class="text-teal"
                                                    >
                                                        <q-tab
                                                            label="Citas pendientes"
                                                            name="one"
                                                        />
                                                        <q-tab
                                                            label="Citas anteriores"
                                                            name="two"
                                                        />
                                                    </q-tabs>

                                                    <q-separator />

                                                    <q-tab-panels
                                                        v-model="tab"
                                                        animated
                                                    >
                                                        <q-tab-panel
                                                            name="one"
                                                            class="text-dark"
                                                        >
                                                            <div
                                                                class="q-pa-md"
                                                            >
                                                                <q-table
                                                                    class="my-sticky-header-table"
                                                                    flat
                                                                    bordered
                                                                    title="Citas pendiente"
                                                                    :rows="rows"
                                                                    :columns="
                                                                        columns
                                                                    "
                                                                    row-key="name"
                                                                />
                                                            </div>
                                                        </q-tab-panel>

                                                        <q-tab-panel
                                                            name="two"
                                                            class="text-dark"
                                                        >
                                                            <div
                                                                class="q-pa-md"
                                                            >
                                                                <q-table
                                                                    class="my-sticky-header-table"
                                                                    flat
                                                                    bordered
                                                                    title="Citas anteriores"
                                                                    :rows="rows"
                                                                    :columns="
                                                                        columns
                                                                    "
                                                                    row-key="name"
                                                                />
                                                            </div>
                                                        </q-tab-panel>
                                                    </q-tab-panels>
                                                </q-card>
                                            </div>

                                            />
                                        </div>
                                    </div>
                                </div>
                                <q-card-section class="q-pt-none">
                                </q-card-section>
                            </q-card>
                        </q-dialog>
                    </div>
                </div>
            </div>

            <div class="col-6 bg-primary">
                <q-img style="width: 620px" src="../assets/Vector.svg" />
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        return {
            days: ref(["2023/01/01"]),
            dialog: ref(false),
            dialog2: ref(false),
            maximizedToggle: ref(true),
            date: ref(""),
            time: ref(""),
            tab: ref("one"),
        };
    },
};
</script>
