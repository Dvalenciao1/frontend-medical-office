<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-positive text-white">
      <q-toolbar>
        <q-toolbar-title> IEES </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-positive text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>IESS</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
