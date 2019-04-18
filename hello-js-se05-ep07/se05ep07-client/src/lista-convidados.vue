<template>
  <md-list>
    <md-subheader>
      Lista de convidados
    </md-subheader>
    <md-list-item v-for="c in convidados" :key="c.idconvidado">
      {{c.nomeconvidado}}
    </md-list-item>
  </md-list>
</template>

<script>
const axios = require("axios");
const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});
module.exports = {
  name: "ListaConvidados",
  created() {
    this.listconvidados();
  },
  data() {
    return {
      convidados: []
    };
  },
  methods: {
    listconvidados() {
      api
        .get("/convidado/list")
        .then(ret => {
          if (ret.status != 200) throw ret;
          this.convidados = ret.data;
        })
        .catch(err => {
          console.log(err);
          alert("Erro ao recuperar convidados");
        });
    }
  }
};
</script>

<style>

</style>