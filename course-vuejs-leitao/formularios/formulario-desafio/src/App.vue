<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form v-if="!enviado" class="painel">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="nomeCompleto"></NomeCompleto>
        <Rotulo name="E-mail" name-id="in-email">
          <input type="email" id="in-email" v-model="email" />
        </Rotulo>
        <Rotulo name="Senha" name-id="in-senha">
          <input type="password" id="in-senha" v-model="senha" />
        </Rotulo>
        <Rotulo name="Armazenar Dados?">
          <input type="radio" id="rd-sim" value="sim" v-model="armazenar" />
          <label for="rd-sim">Sim</label>
          <input type="radio" id="rd-nao" value="nao" v-model="armazenar" />
          <label for="rd-nao">Não</label>
        </Rotulo>
        <input type="submit" value="Enviar" @click.prevent="enviado = true" />
      </form>
      <div v-else class="painel">
        <div class="cabecalho">Resultado</div>
        <Rotulo name="Nome Completo">
          <span>{{ nomeCompleto }}</span>
        </Rotulo>
        <Rotulo name="E-mail">
          <span>{{ email }}</span>
        </Rotulo>
        <Rotulo name="Senha">
          <span>{{ senha }}</span>
        </Rotulo>
        <Rotulo name="Armazenar Dados?">
          <span>{{ armazenar }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  data() {
    return {
      nomeCompleto: "",
      email: "",
      senha: "",
      armazenar: "sim",
      enviado: false,
    };
  },
  components: { Rotulo, NomeCompleto },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app form input[type="radio"] {
  max-width: 50px;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
