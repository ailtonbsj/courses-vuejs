<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightgreen'">Usando diretiva personalizada.</p>
		<p v-destaque.atrasar="'lightblue'">Usando diretiva personalizada.</p>
	</div>
</template>

<script>
// Padrão das diretivas:
// <p v-diretiva:argumento.modificador1.modificador2="'valor'"></p>

export default {
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
