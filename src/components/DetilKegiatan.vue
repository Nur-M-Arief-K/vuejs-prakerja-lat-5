<template>
  <router-link to="/" class="btn btn-primary mt-3">Kembali</router-link>
  <h2 class="fs-1">{{ kegiatanSaatIni.nama }}</h2>
  <p
    v-if="kegiatanSaatIni.deskripsi == '' && !modeEdit"
    class="d-block mb-3 fst-italic text-body-tertiary"
  >
    Deskripsi kegiatan kosong
  </p>
  <p
    ref="elDeskripsiKegiatan"
    class="mb-3 fs-5"
    :class="modeEdit && 'border border-primary'"
  >
    {{ kegiatanSaatIni.deskripsi }}
  </p>
  <button
    type="button"
    @click="editDeskripsiHandler()"
    class="btn btn-primary"
    :class="modeEdit && 'btn-success float-end'"
  >
    {{ !modeEdit ? "Ubah Deskripsi" : "Simpan" }}
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      kegiatanSaatIni: {
        nama: "",
        deskripsi: "",
      },
      modeEdit: false,
    };
  },
  computed: {
    ...mapGetters(["ambilItemKegiatan"]),
  },
  mounted() {
    this.perbaruiKegiatanSaatIni(+this.$route.params.idKegiatan);

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.perbaruiKegiatanSaatIni(+toParams.idKegiatan);
      }
    );
  },
  methods: {
    ...mapActions(["ubahDataKegiatan"]),
    editDeskripsiHandler() {
      this.toggleModeEdit();
      if (this.modeEdit) {
        this.$refs.elDeskripsiKegiatan.setAttribute("contenteditable", true);
        this.$refs.elDeskripsiKegiatan.focus();
      } else {
        this.ubahDataKegiatan({
          indexKegiatan: +this.$route.params.idKegiatan,
          dataBaruKegiatan: {
            nama: this.kegiatanSaatIni.nama,
            deskripsi: this.$refs.elDeskripsiKegiatan.innerText.trim(),
          },
        });

        this.perbaruiKegiatanSaatIni(+this.$route.params.idKegiatan);

        this.$refs.elDeskripsiKegiatan.removeAttribute("contenteditable");
      }
    },
    perbaruiKegiatanSaatIni(indexKegiatan) {
      if (
        typeof this.ambilItemKegiatan(+indexKegiatan) !=
        "undefined"
      ) {
        this.kegiatanSaatIni = this.ambilItemKegiatan(
          +indexKegiatan
        );
      }
    },
    toggleModeEdit() {
      this.modeEdit = !this.modeEdit;
    },
  },
};
</script>