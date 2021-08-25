<template>
  <div id="game">
    <h2>{{ msg }}</h2>

    <p>Упражнение: {{ seletedOperationType }}</p>
    <p>Уровень сложности: {{ seletedLevel }}</p>

    <div>Осталось {{ roundSeconds }} сек</div>
    <div>{{ operator1 }} {{ operation }} {{ operator2 }}</div>
    <input v-model="inputResult" v-if="roundSeconds > 0" />
    <button @click="checkResult">Проверить</button>
    <div>{{ info }}</div>
  </div>
</template>

<script>
import {
  MULTIPLICATION,
  DIVISION,
  SUBSTRACTION,
  ADDITION,
  LOW,
  MEDIUM,
  HIGHT,
} from "../models/constants.ts";
export default {
  name: "Game",

  props: {
    msg: String,
    gameLevel: Number,
    operationType: String,
  },
  data() {
    return {
      str: "",
      result: "",
      seletedOperationType: this.$store.getters.seletedOperationType,
      seletedTime: this.$store.getters.seletedTime,
      seletedLevel: this.$store.getters.seletedLevel,
      countAllTest: 0,
      countCoodResult: 0,
      roundSeconds: this.$store.getters.seletedTime * 60,
      operator1: 0,
      operator2: 0,
      operation: "",
      taskResult: 0,
      inputResult: "",
    };
  },

  mounted() {
    setInterval(() => {
      this.roundSeconds--;
      if (this.roundSeconds == 0) {
        this.info = "время вышло!";
        this.updateScore();
      }
      this.roundSeconds = this.roundSeconds < 0 ? 0 : this.roundSeconds;
    }, 1000);
    this.createNewTask();
  },

  methods: {
    updateScore() {
      this.$store.commit("addResult", {
        operationType: this.seletedOperationType,
        time: this.seletedTime,
        countTaskAll: this.countAllTest,
        countCoodResult: this.countCoodResult,
      });
    },
    checkResult() {
      if (this.inputResult === this.taskResult.toString()) {
        this.info = "правильно!";
        this.countCoodResult++;
      } else {
        this.info = "ответ не верный!";
      }
      this.countAllTest++;
      this.inputResult = "";
      this.createNewTask();
    },
    createNewTask() {
      let max = 10;
      switch (this.$store.getters.seletedLevel) {
        case LOW:
          max = 10;
          break;
        case MEDIUM:
          max = 100;
          break;
        case HIGHT:
          max = 1000;
          break;
      }

      this.operator1 = Math.floor(Math.random() * max) + 1;
      this.operator2 = Math.floor(Math.random() * max) + 1;

      switch (this.$store.getters.seletedOperationType) {
        case MULTIPLICATION:
          this.operation = "*";
          this.taskResult = this.operator1 * this.operator2;
          break;
        case DIVISION:
          this.operation = ":";
          this.taskResult = this.operator1 / this.operator2;
          break;
        case SUBSTRACTION:
          this.operation = "-";
          this.taskResult = this.operator1 - this.operator2;
          break;
        case ADDITION:
          this.operation = "+";
          this.taskResult = this.operator1 + this.operator2;
          break;
      }
    },
  },
};
</script>
