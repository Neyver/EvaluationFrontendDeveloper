<template>
    <div class="column q-pa-lg">
      <div class="row items-center register">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
          </q-card-section>
          <q-card-section>
            <q-form 
            class="q-px-sm q-pt-xl q-pb-lg"
            @submit="onSubmit"
            >
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="name" type="name" label="Name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Get Started" type="submit"/>
          </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>
<script>
import StorageService from '../services/storage-service';

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      name: '',
    }
  },
  methods: {
    onSubmit(){
      StorageService.set('Account',
      {
        email: this.email, 
        name: this.name, 
      });
       StorageService.set('courses', [])
      this.$router.push(`profile`);
    }
  },
}
</script>

<style>
 .register {
   justify-content: center;
   align-items: center;
 }
</style>