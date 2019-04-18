<template>
  <form @submit.prevent="dosave">
    <md-input-container>
      <label>Nome do convidado</label>
      <md-input v-model="convidado.nomeconvidado" required></md-input>
    </md-input-container>
    <md-button type="submit" class="md-primary md-raised">Salvar</md-button>
  </form>
</template>

<script>
const axios = require("axios");
const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});
module.exports = {
  name: "CriarConvidado",
  data: _ => ({convidado:{nomeconvidado:""}}),
  methods: {
    dosave() {
      api
        .post("/convidado/save", this.convidado)
        .then(ret => {
          if (ret.status != 200) throw ret;
          this.convidado = ret.data;
          this.$router.push("/lista-convidados")
        })
        .catch(err => {
          console.log(err);
          alert("Erro ao salvar convidado");
        });
    }
  }
};
</script>

<style>

</style>