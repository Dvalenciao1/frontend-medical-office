<template>
    <q-page padding>
        <div class="q-pa-md row">
            <div class="col-6">
                <span class="text-h3">Bienevido!</span>
                <div class="text-center">
                    <q-img
                        src="../assets/Image.svg"
                        alt="Doctor"
                        style="max-width: 680px; max-height: 600px"
                    ></q-img>
                </div>
            </div>
            <div class="col-6">
                <span class="text-h5">Selecciona una opción</span>
                <div class="q-pa-md">
                    <q-scroll-area style="width: auto; height: 620px">
                        <template
                            v-for="(item, index) in list_actions"
                            :key="index"
                        >
                            <PatientAction :propsObject="item" />
                        </template>
                    </q-scroll-area>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import PatientAction from "src/components/PatientAction.vue";
import FormPatientDialog from "src/components/FormPatientDialog.vue";

export default defineComponent({
    name: "PatientPage",
    components: { PatientAction },
    setup() {
        const $q = useQuasar();
        const list_actions = ref([
            {
                imgPath: "src/image/agendar_cita.png",
                title: " Agendamiento de Citas Medicas",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquipex ea commodo consequat.",
                labelButton: "Agendar cita",
                to: "",
                openPatient: () => {
                    $q.dialog({
                        component: FormPatientDialog,
                    })
                        .onOk(() => {
                            console.log("OK");
                        })
                        .onCancel(() => {
                            console.log("Cancel");
                        })
                        .onDismiss(() => {
                            console.log("Called on OK or Cancel");
                        });
                },
            },
            {
                imgPath: "src/image/historial.png",
                title: "Historial de Citas",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquipex ea commodo consequat.",
                labelButton: "Historial",
            },
            {
                imgPath: "https://cdn.quasar.dev/img/parallax2.jpg",
                title: "Historial de Citas",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquipex ea commodo consequat.",
                labelButton: "Historial",
            },
        ]);

        return {
            list_actions,
        };
    },
});
</script>
