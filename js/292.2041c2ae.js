"use strict";(self["webpackChunklatihan_materi_5"]=self["webpackChunklatihan_materi_5"]||[]).push([[292],{6292:function(t,a,i){i.r(a),i.d(a,{default:function(){return b}});var e=i(3396);const n={class:"container-xl"};function s(t,a,i,s,r,d){const o=(0,e.up)("DetilKegiatan");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e.Wm)(o)])}var r=i(7139);const d={class:"fs-1"},o={key:0,class:"d-block mb-3 fst-italic text-body-tertiary"};function m(t,a,i,n,s,m){const u=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(u,{to:"/",class:"btn btn-primary mt-3"},{default:(0,e.w5)((()=>[(0,e.Uk)("Kembali")])),_:1}),(0,e._)("h2",d,(0,r.zw)(s.kegiatanSaatIni.nama),1),""!=s.kegiatanSaatIni.deskripsi||s.modeEdit?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("p",o," Deskripsi kegiatan kosong ")),(0,e._)("p",{ref:"elDeskripsiKegiatan",class:(0,r.C_)(["mb-3 fs-5",s.modeEdit&&"border border-primary"])},(0,r.zw)(s.kegiatanSaatIni.deskripsi),3),(0,e._)("button",{type:"button",onClick:a[0]||(a[0]=t=>m.editDeskripsiHandler()),class:(0,r.C_)(["btn btn-primary",s.modeEdit&&"btn-success float-end"])},(0,r.zw)(s.modeEdit?"Simpan":"Ubah Deskripsi"),3)],64)}var u=i(65),g={data(){return{kegiatanSaatIni:{nama:"",deskripsi:""},modeEdit:!1}},computed:{...(0,u.Se)(["ambilItemKegiatan"])},mounted(){this.perbaruiKegiatanSaatIni(+this.$route.params.idKegiatan),this.$watch((()=>this.$route.params),((t,a)=>{this.perbaruiKegiatanSaatIni(+t.idKegiatan)}))},methods:{...(0,u.nv)(["ubahDataKegiatan"]),editDeskripsiHandler(){this.toggleModeEdit(),this.modeEdit?(this.$refs.elDeskripsiKegiatan.setAttribute("contenteditable",!0),this.$refs.elDeskripsiKegiatan.focus()):(this.ubahDataKegiatan({indexKegiatan:+this.$route.params.idKegiatan,dataBaruKegiatan:{nama:this.kegiatanSaatIni.nama,deskripsi:this.$refs.elDeskripsiKegiatan.innerText.trim()}}),this.perbaruiKegiatanSaatIni(+this.$route.params.idKegiatan),this.$refs.elDeskripsiKegiatan.removeAttribute("contenteditable"))},perbaruiKegiatanSaatIni(t){"undefined"!=typeof this.ambilItemKegiatan(+t)&&(this.kegiatanSaatIni=this.ambilItemKegiatan(+t))},toggleModeEdit(){this.modeEdit=!this.modeEdit}}},l=i(89);const p=(0,l.Z)(g,[["render",m]]);var h=p,c={data(){return{editMode:!1,isSaved:!1}},components:{DetilKegiatan:h}};const k=(0,l.Z)(c,[["render",s]]);var b=k}}]);
//# sourceMappingURL=292.2041c2ae.js.map