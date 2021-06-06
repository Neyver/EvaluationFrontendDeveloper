<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">UX/UI</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" @click="register">
          Register
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

import StorageService from '../../services/storage-service';

export default {
  name: 'Register',
  data () {
    return {
      courses: [],
    }
  },
  mounted () {
    this.getCourses();
  },
  methods: {
    register() {
      this.courses.push({name: "ux/ui", number: this.courses.length +1});
      StorageService.set('courses', this.courses);
      this.$q.notify({
        type: 'positive',
        message: `Register Success`
      })
    },
    getCourses() {
      const userInfo = StorageService.get('courses');
      this.courses = userInfo;
    },
  },
}
</script>