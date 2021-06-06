<template>
    <div class="column q-pa-lg" id="q-app">
      <div>
        <q-card square class="shadow-24">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Profile</h4>
          </q-card-section>
          <q-card-section>
            <q-form 
            class="q-px-sm q-pt-xl q-pb-lg"
            @submit="onSubmit"
            >
              <q-input square clearable v-model="email" type="email" label="Email" class="col-6 col-sm-6">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="name" type="name" label="Name" class="col-6 col-sm-6">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="lastname" type="lastname" label="LastName" class="col-6 col-sm-6">
                <template v-slot:prepend>
                  <q-icon name="people" />
                </template>
              </q-input>
              <q-input square clearable v-model="phone" type="number" label="Phone" class="col-6 col-sm-6">
                <template v-slot:prepend>
                  <q-icon name="phone" />
                </template>
              </q-input>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="text-white" label="Update" type="submit"/>
          </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>
<script>
import StorageService from '../../services/storage-service';

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      name: '',
      lastname: '',
      phone: ''
    }
  },
  mounted () {
    this.getUser();
  },
  methods: {
    onSubmit() {
      StorageService.set('Account',
      {
        email: this.email, 
        name: this.name,
        lastname: this.lastname,
        phone: this.phone,
      });
      this.$q.notify({
        type: 'positive',
        message: ` Updated Success`
      })
    },
    getUser() {
      const userInfo = StorageService.get('Account');
      this.email = userInfo.email;
      this.name = userInfo.name;
      this.phone = userInfo.phone;
      this.lastname = userInfo.lastname;
    },
  },
}
</script>

<style>
 .register {
   justify-content: center;
   align-items: center;
 }
</style>