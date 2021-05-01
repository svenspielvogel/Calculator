<template>
  <div id="app">
    <div class="container">
      <div class="calculator">
        <div class="display">{{ input }}</div>
        <div class="answer">{{ answer }}</div>
        <div @click="clear" id="clear" class="btn operator">C</div>
        <div id="back" class="btn operator">CE</div>
        <div @click="append('7')" class="btn">7</div>
        <div @click="append('8')" class="btn">8</div>
        <div @click="append('9')" class="btn">9</div>
        <div @click="append('/')" class="btn operator">/</div>
        <div @click="append('4')" class="btn">4</div>
        <div @click="append('5')" class="btn">5</div>
        <div @click="append('6')" class="btn">6</div>
        <div @click="append('*')" class="btn operator">*</div>
        <div @click="append('1')" id="n1" class="btn">1</div>
        <div @click="append('2')" id="n2" class="btn">2</div>
        <div @click="append('3')" id="n3" class="btn">3</div>
        <div @click="append('-')" id="plus" class="btn operator">-</div>
        <div @click="append('0')" id="n0" class="zero">0</div>
        <div @click="calculate" class="btn equal operator">=</div>
        <div @click="append('+')" class="btn operator ">+</div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "App",
  data() {
    return {
      baseURL: "http://localhost:3000",
      input: "",
      answer: "",
      operator: "",
      num1: "",
      num2: "",
      hasOperator: false,
    };
  },
  methods: {
    append(sign) {
      if (sign == "+" || sign == "-" || sign == "*" || sign == "/") {
        if (this.hasOperator) {
          return;
        } else {
          this.hasOperator = true;
          this.operator = sign;
        }
      }
      if (this.hasOperator) {
        this.num2 = sign;
      } else {
        this.num1 = sign;
      }
      this.input = this.input + sign;
    },

    clear() {
      this.input = "";
      this.result = "";
      this.hasOperator = false;
    },

    calculate() {
      let route = "";
      switch (this.operator) {
        case "+":
          route = "/add";
          break;
        case "-":
          route = "/subtract";
          break;
        case "*":
          route = "/multiply";
          break;
        case "/":
          route = "/divide";
          break;
        default:
          break;
      }
      axios
        .post(`${this.baseURL}${route}`, {
          num1: parseInt(this.num1),
          num2: parseInt(this.num2),
        })
        .then(({ data }) => (this.answer = parseFloat(data.result)));
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background-color: #872931;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.calculator {
  display: grid;
  grid-template-rows: repeat(7, minmax(60px, auto));
  grid-template-columns: repeat(4, 60px);
  grid-gap: 12px;
  padding: 35px;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
}

.btn,
.zero {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #ffa8a8;
  border-radius: 5px;
}

.display,
.answer {
  grid-column: 1 / 5;
  display: flex;
  align-items: center;
  color: #b59e9e;
}

.display {
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: clip;
}

.answer {
  font-weight: 500;
  font-size: 55px;
  height: 65px;
  overflow: hidden;
}

#clear {
  grid-column: 1 / 3;
}

#back {
  grid-column: 3 / 5;
}

.zero {
  grid-column: 1 / 3;
}

.operator {
  background-color: #d3404c;
  color: #fff;
}
</style>
