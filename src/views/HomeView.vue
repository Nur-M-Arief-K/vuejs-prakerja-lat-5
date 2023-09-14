<template>
  <div class="container-lg">
    <h1 class="fs-1 mt-3">To Do List</h1>
    <DaftarKegiatan />
    <FormulirTambahKegiatan />
  </div>
</template>

<script>
// @ is an alias to /src
import FormulirTambahKegiatan from '@/components/FormulirTambahKegiatan.vue'
import DaftarKegiatan from '@/components/DaftarKegiatan.vue'

export default {
  name: 'HomeView',
  components: {
    FormulirTambahKegiatan,
    DaftarKegiatan
  }
}
</script>
