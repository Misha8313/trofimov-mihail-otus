<template>
  <div class="gamed">
    <h2>Настройки</h2>
    <h3>Тип упражнения</h3>
    <select v-model="seletedOperationType" @change="saveSeletedOperation">
      <option
        v-for="(item, index) in operations"
        :key="index"
        :value="item.type"
        >{{ item.type }}</option
      >
    </select>
    <h3>Время упражения</h3>
    <select v-model="seletedTime" @change="saveSeletedTime">
      <option
        v-for="(item, index) in times"
        :key="index"
        :value="item.minutes"
        >{{ item.minutes }}</option
      >
    </select>
    <h3>Уровень сложности</h3>
    <select v-model="seletedLevel" @change="saveSeletedLevel">
      <option
        v-for="(item, index) in levels"
        :key="index"
        :value="item.level"
        >{{ item.level }}</option
      >
    </select>
    <Score />
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
import Score from "../components/Score.vue";
export default {
  name: "Settings",
  props: {
    msg: String,
  },
   components: {  
    Score
  },
  data() {
    return {
      operations: [
        { type: MULTIPLICATION },
        { type: DIVISION },
        { type: SUBSTRACTION },
        { type: ADDITION },
      ],
      seletedOperationType: "",
      times: [
        { minutes: 1 },
        { minutes: 5 },
        { minutes: 15 },
        { minutes: 30 },
        { minutes: 45 },
        { minutes: 60 },
      ],
      seletedTime: 0,
      levels: [{ level: LOW }, { level: MEDIUM }, { level: HIGHT }],
      seletedLevels: 0,
    };
  },
  methods: {
    saveSeletedOperation() {
      this.$store.commit("setOperationType", this.seletedOperationType);
    },
    saveSeletedTime() {
      this.$store.commit("setSeletedTime", this.seletedTime);
    },
    saveSeletedLevel() {
      this.$store.commit("setSeletedLevel", this.seletedLevel);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
