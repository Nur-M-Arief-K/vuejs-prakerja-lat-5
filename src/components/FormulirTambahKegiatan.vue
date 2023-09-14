<template>
  <form @submit.prevent="tambahKegiatanHandler()">
    <div class="row column-gap-3 justify-content-center">
      <div>
        <label for="namaKegiatan" class="form-label" hidden
          >Nama kegiatan</label
        >
      </div>
      <div class="col-7">
        <input
          id="namaKegiatan"
          type="text"
          class="form-control"
          v-model="inputNamaKegiatan"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-success">Tambahkan</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      inputNamaKegiatan: "",
    };
  },
  methods: {
    ...mapActions(["tambahKegiatan", "test"]),
    tambahKegiatanHandler() {
      const trimmedInputNamaKegiatan = this.inputNamaKegiatan.trim();
      trimmedInputNamaKegiatan.length > 0 &&
        this.tambahKegiatan(trimmedInputNamaKegiatan);
      this.inputNamaKegiatan = "";
    },
  },
};
</script>