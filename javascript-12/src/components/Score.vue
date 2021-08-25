<template>
  <div id="score">
    <h2>Результаты</h2>
    <ul>
      <li v-for="result in results" :key="result.operationType">
        <div>
          Упраженение {{ result.operationType }}. Время {{ result.time }}.
          Выполнено {{ result.countCoodResult }} из {{ result.countTaskAll }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Score",
  title: "Результаты",
  props: {
    msg: String,
    gameLevel: Number,
    operationType: String,
  },
  data() {
    return {
      str: "bar",
      results: this.$store.getters.results,
    };
  },
};
</script>
