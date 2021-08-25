<template>
  <div id="app">
    <router-link to="/">Настройки</router-link>
    <router-link to="/game">Играть</router-link>
    <router-link to="/score">Результаты</router-link>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import Settings from "./components/Settings.vue";
import Score from "./components/Score.vue";
export default {
  name: "App",
  components: {
    Game,
    Settings,
    Score,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
