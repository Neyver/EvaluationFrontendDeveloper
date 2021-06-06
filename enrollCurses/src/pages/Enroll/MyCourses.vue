<template>
  <div class="q-pa-md">
    <q-table
      title="Courses"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    />
  </div>
</template>

<script>

import StorageService from '../../services/storage-service';

export default {
  name: 'Register',
  data () {
    return {
      selected: [],
      columns: [
        { name: 'number', label: 'number', field: 'number',  },
        { name: 'name', label: 'name', field: 'name',  }
      ],
      data: []
    }
  },
  mounted () {
    this.getCourses();
  },
  methods: {
    getCourses() {
      const userInfo = StorageService.get('courses');
      this.data = userInfo;
    },
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  },
}
</script>