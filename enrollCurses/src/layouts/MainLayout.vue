<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Evaluation
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          <h4>Options</h4>
        </q-item-label>
        <q-item
          clickable
          v-ripple
          to="profile"
          exact
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>

          <q-item-section> Profile </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/enroll" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="keyboard_alt" />
          </q-item-section>
          <q-item-section> Enroll </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/my-Courses" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="keyboard_alt" />
          </q-item-section>
          <q-item-section> My courses </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
