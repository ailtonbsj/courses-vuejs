<template>
  <div id="app" class="container-fluid">
    <!-- Aula -->
    <h1>Animação de grupos</h1>
    <div class="mb-3">
      <b-button @click="addAluno">Add Aluno</b-button>
    </div>
    <b-list-group class="mb-4">
      <transition-group name="slide-grp" tag="div">
        <b-list-group-item
          @click="rmAluno(i)"
          v-for="(aluno, i) in alunos"
          :key="aluno"
        >
          {{ aluno }}
        </b-list-group-item>
      </transition-group>
    </b-list-group>

    <!-- Aula -->
    <h1>Animação de componente dinâmico</h1>
    <div class="mb-4">
      <b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'">
        Info
      </b-button>
      <b-button
        class="ml-4"
        variant="secondary"
        @click="componenteSelecionado = 'AlertaAdv'"
      >
        Advertencia
      </b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <!-- Aula -->
    <h1>Animações JS</h1>
    <b-button @click="exibir2 = !exibir2">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <!-- Aula -->
    <h1>Animações CSS</h1>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">
      Alternar estado
    </b-button>
    <b-select class="mb-4" v-model="tipoAnimacao">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>
    <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <!-- Aula -->
  </div>
</template>

<script>
import AlertaAdv from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: {
    AlertaAdv,
    AlertaInfo,
  },
  data() {
    return {
      alunos: ["Maria", "João", "José"],
      msg: "Uma mensagem de informação para o usuário",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    addAluno() {
      this.alunos.push(Math.random().toString(36).substring(2));
    },
    rmAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, sinal) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const nLargura = this.larguraBase + rodada * 10 * sinal;
        el.style.width = `${nLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, 1);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled() {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, -1);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("leaveCancelled");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-grp-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-grp-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-grp-enter,
.slide-grp-leave-to {
  opacity: 0;
}

.slide-grp-move {
  transition: transform 1s;
}
</style>