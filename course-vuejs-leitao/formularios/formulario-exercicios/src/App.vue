<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form v-if="!enviado" class="painel">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input type="text" v-model.lazy.trim="usuario.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="usuario.idade" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-2">
            <input
              type="checkbox"
              id="reproduzivel"
              value="reproduzivel"
              v-model="caracteristicas"
            />
            <label for="reproduzivel">Reproduzível</label>
          </span>
          <span class="mr-2">
            <input
              type="checkbox"
              id="intermitente"
              value="intermitente"
              v-model="caracteristicas"
            />
            <label for="intermitente">Intermitente</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="outro"
              value="outro"
              v-model="caracteristicas"
            />
            <label for="outro">Outro</label>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input id="rd-web" type="radio" v-model="produto" value="Web" />
            <label for="rd-web">Web</label>
          </span>
          <span class="mr-4">
            <input
              id="rd-mobile"
              type="radio"
              v-model="produto"
              value="Mobile"
            />
            <label for="rd-mobile">Mobile</label>
          </span>
          <span>
            <input id="rd-outro" type="radio" v-model="produto" value="Outro" />
            <label for="rd-outro">Outro</label>
          </span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="prioridade in prioridades"
              :value="prioridade.id"
              :key="prioridade.id"
            >
              {{ prioridade.id }} - {{ prioridade.name }}
            </option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="escolha" />
        </Rotulo>
        <hr />
        <button @click.prevent="enviado = true">Enviar</button>
      </form>
      <div v-else class="painel">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ usuario.idade }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre">{{ mensagem }}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li v-for="c in caracteristicas" :key="c">
                {{ c }}
              </li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>
            {{ prioridade }} ({{
              prioridades.find((p) => p.id === prioridade).name
            }})
          </span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  data() {
    return {
      usuario: {},
      mensagem: "",
      caracteristicas: [],
      produto: "Web",
      prioridades: [
        { id: 1, name: "Baixa" },
        { id: 2, name: "Média" },
        { id: 3, name: "Alta" },
      ],
      prioridade: 2,
      escolha: true,
      enviado: false,
    };
  },
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

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-2 {
  margin-right: 20px;
}

.mr-4 {
  margin-right: 40px;
}
</style>
