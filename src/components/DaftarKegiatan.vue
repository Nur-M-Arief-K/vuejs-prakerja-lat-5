<template>
  <ol class="list-group list-group-numbered mb-3 fs-5">
    <p v-if="jumlahDaftarKegiatan == 0" class="fst-italic text-body-tertiary text-lg-start text-md-center">
      Belum ada kegiatan yang ditambahkan, silahkan tambahkan melalui kolom di
      bawah ini
    </p>
    <ItemDaftarKegiatan
      v-for="(kegiatan, indexKegiatan) in daftarKegiatan"
      :key="indexKegiatan"
      :namaKegiatan="kegiatan.nama"
      :indexKegiatan="indexKegiatan"
    />
  </ol>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ItemDaftarKegiatan from "./ItemDaftarKegiatan.vue";

export default {
  computed: {
    ...mapState({
      daftarKegiatan: "daftarKegiatan",
    }),
    ...mapGetters(["jumlahDaftarKegiatan"]),
  },
  components: {
    ItemDaftarKegiatan,
  },
};
</script>