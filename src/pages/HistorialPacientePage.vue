<template>
    <q-page padding>
        <q-table
            title="Historial de Citas"
            :data="data"
            :columns="columns"
            row-key="name"
        />
    </q-page>
</template>
