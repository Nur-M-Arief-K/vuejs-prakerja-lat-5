import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    daftarKegiatan: []
  },
  getters: {
    jumlahDaftarKegiatan(state) {
      return state.daftarKegiatan.length;
    },
    ambilItemKegiatan: (state) => (indexKegiatan) => {
      return state.daftarKegiatan[indexKegiatan];
    },
  },
  mutations: {
    tambahKeDaftarKegiatan(state, kegiatanBaru) {
      state.daftarKegiatan.push(kegiatanBaru);
    },
    hapusDariDaftarKegiatan(state, indexKegiatan) {
      state.daftarKegiatan.splice(indexKegiatan, 1);
    },
    perbaruiItemDiDaftarKegiatan(state, { indexKegiatan, dataBaruKegiatan }) {
      state.daftarKegiatan[indexKegiatan] = { ...state.daftarKegiatan[indexKegiatan], ...dataBaruKegiatan };
    }
  },
  actions: {
    tambahKegiatan({ commit }, namaKegiatanBaru) {
      const trimmedNamaKegiatanBaru = namaKegiatanBaru.trim();
      if (trimmedNamaKegiatanBaru.length > 0) {
        const kegiatanBaru = {
          nama: trimmedNamaKegiatanBaru,
          deskripsi: ""
        }
        commit('tambahKeDaftarKegiatan', kegiatanBaru);
      }
    },
    hapusKegiatan({ commit }, indexKegiatan) {
      commit('hapusDariDaftarKegiatan', indexKegiatan);
    },
    ubahDataKegiatan({ commit, dispatch }, { indexKegiatan, dataBaruKegiatan }) {
      const namaBaruKegiatan = dataBaruKegiatan.nama.trim();
      if (namaBaruKegiatan.length > 0) {
        commit('perbaruiItemDiDaftarKegiatan', { indexKegiatan, dataBaruKegiatan });
      } else {
        dispatch('hapusKegiatan', indexKegiatan);
      }
    }
  },
  modules: {
  }
})
