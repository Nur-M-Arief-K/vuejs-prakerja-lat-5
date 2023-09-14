<template>
  <div class="list-group-item d-flex column-gap-3">
    <li
      ref="elNamaKegiatan"
      class="flex-fill text-start"
      :class="!modeEdit && 'cursor-pointer'"
      @blur="inputBlurHandler()"
      @click="navigasiHandler()"
    >
      {{ namaKegiatan }}
    </li>
    <div>
      <button
        @click.stop="hapusKegiatanHandler()"
        type="button"
        class="btn btn-danger"
      >
        Hapus
      </button>
    </div>
    <div>
      <button
        @click.stop="ubahNamaKegiatanHandler()"
        type="button"
        class="btn btn-primary"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    namaKegiatan: {
      type: String,
      required: true,
      validator: (value) => {
        return value.trim().length > 0;
      },
    },
    indexKegiatan: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      modeEdit: false,
      timeoutInputBlur: null,
    };
  },
  methods: {
    ...mapActions(["hapusKegiatan", "ubahDataKegiatan"]),
    hapusKegiatanHandler() {
      this.hapusKegiatan(this.indexKegiatan);
    },
    ubahNamaKegiatanHandler() {
      if (!this.modeEdit) {
        this.toggleModeEdit();
      } else {
        clearTimeout(this.timeoutInputBlur);
        this.simpanPerubahanNamaKegiatan();
        this.toggleModeEdit();
      }
    },
    inputBlurHandler() {
      this.timeoutInputBlur = setTimeout(() => {
        this.simpanPerubahanNamaKegiatan();
        this.toggleModeEdit();
      }, 100);
    },
    navigasiHandler() {
      !this.modeEdit && this.$router.push(`/${this.indexKegiatan}`);
    },
    simpanPerubahanNamaKegiatan() {
      const namaKegiatanBaru = this.$refs.elNamaKegiatan.innerText.trim();
      if (this.namaKegiatan == namaKegiatanBaru) {
        return;
      } else {
        this.ubahDataKegiatan({
          indexKegiatan: this.indexKegiatan,
          dataBaruKegiatan: { nama: namaKegiatanBaru },
        });
      }
    },
    toggleModeEdit() {
      const elNamaKegiatan = this.$refs.elNamaKegiatan;
      this.modeEdit = !this.modeEdit;
      if (this.modeEdit) {
        elNamaKegiatan.setAttribute("contenteditable", true);
        elNamaKegiatan.focus();
      } else {
        elNamaKegiatan.removeAttribute("contenteditable");
      }
    },
  },
  unmounted() {
    clearTimeout(this.timeoutInputBlur);
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>