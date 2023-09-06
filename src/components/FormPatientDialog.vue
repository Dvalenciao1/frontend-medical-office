<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide" style="width: 900px">
        <q-card
            class="q-dialog-plugin q-pa-md"
            style="width: 700px; max-width: 80vw"
        >
            <q-card-section>
                <span class="text-h5">Crear Cita</span>
            </q-card-section>
            <q-card-section>
                <q-form class="">
                    <div class="row">
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Nombre Completo"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Correo"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Telefono"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Cedula"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Fecha de cita"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Hora de cita"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Tipo de sangre"
                            />
                        </div>
                        <div class="col-12 col-md-6 q-pa-md">
                            <q-input
                                v-model="text"
                                type="text"
                                label="Genero"
                            />
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn
                    style="border-radius: 8px"
                    color="positive"
                    label="Agendar"
                    @click="onOKClick"
                    class="q-mr-lg text-weight-regular"
                    no-caps
                />
                <q-btn
                    style="border-radius: 8px; color: #757575"
                    outline
                    label="Cancelar"
                    class="text-weight-regular"
                    @click="onDialogCancel"
                    no-caps
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
<script>
import { useDialogPluginComponent } from "quasar";

export default {
    name: "FormPatient",
    emits: [...useDialogPluginComponent.emits],

    setup() {
        const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
            useDialogPluginComponent();

        return {
            dialogRef,
            onDialogHide,
            onOKClick() {
                onDialogOK();
            },
            onCancelClick: onDialogCancel,
        };
    },
};
</script>
