<template>
  <div class="container-xl">
    <DetilKegiatan />
  </div>
</template>

<script>
import DetilKegiatan from '../components/DetilKegiatan.vue'

export default {
  data() {
    return {
      editMode: false,// BUAT ROUTE GUARD
      isSaved: false, // BUAT ROUTE GUARD
    }
  },
  components: {
    DetilKegiatan
  }
}
</script>