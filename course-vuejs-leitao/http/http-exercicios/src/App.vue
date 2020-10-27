<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="msg in mensagens"
      :key="msg.texto"
      :variant="msg.tipo"
    >
      {{ msg.texto }}
    </b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome"
        />
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o email"
        />
      </b-form-group>
      <b-button size="lg" variant="primary" @click="salvar">Salvar</b-button>
      <b-button size="lg" variant="success" @click="obterUsuarios" class="ml-2"
        >Obter Usuários</b-button
      >
    </b-card>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: </strong>{{ usuario.nome }}<br />
        <strong>E-mail: </strong>{{ usuario.email }}<br />
        <strong>Id: </strong>{{ usuario.id }}<br />
        <b-button variant="warning" size="lg" @click="carregar(id)">
          Carregar
        </b-button>
        <b-button
          variant="danger"
          size="lg"
          class="ml-2"
          @click="excluir(usuario.id)"
        >
          Excluir
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
      },
      usuarios: [],
      id: null,
      mensagens: [],
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => {
          this.limpar();
          this.obterUsuarios();
        })
        .catch(() => {
          this.mensagens.push({
            texto: "Problema ao excluir!",
            tipo: "danger",
          });
        });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] }
    },
    salvar() {
      for(let key in this.usuario) {
        if(this.usuario[key] === ''){
          this.mensagens = []
          this.mensagens.push({
            texto: `Você precisa preeencher o campo ${key}`,
            type: 'warning'
          })
          return
        }
      }
      const metodo = this.id === null ? "post" : "patch"
      const finalUrl = this.id === null ? ".json" : `/${this.usuario.id}.json`
      const userTemp = {...this.usuario}
      delete userTemp['id']
      this.$http[metodo](`/usuarios${finalUrl}`, userTemp).then(() => {
        this.limpar()
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        })
        this.obterUsuarios()
      });
    },
    obterUsuarios() {
      // axios('https://course-vuejs-leitao.firebaseio.com/usuarios.json').then(res => {
      //   this.usuarios = res.data
      // })
      this.$http("usuarios.json").then((res) => {
        this.usuarios = res.data;
      });
    },
  },
  created() {
    this.obterUsuarios();
    // this.$http.post('usuarios.json', {
    // 	nome: 'Maria',
    // 	email: 'maria@gmail.com'
    // }).then(res => console.log(res))
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
