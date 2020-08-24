import "./app1.css";
import Vue from "vue";

// 其他放到 C
const init = (el) => {
  new Vue({
    el: el,
    data: { n: parseFloat(localStorage.getItem("n")) },
    methods: {
      add() {
        this.n += 1;
      },
      minus() {
        this.n -= 1;
      },
      mul() {
        this.n *= 2;
      },
      div() {
        this.n /= 2;
      },
    },
    watch: {
      n: function () {
        localStorage.setItem("n", this.n);
      },
    },
    template: `
      <section>
        <div id="output">
          <span id="number">{{n}}</span></div>
        <div id="actions">
          <button @click="add">+1</button>
          <button @click="minus">-1</button>
          <button @click="mul">*2</button>
          <button @click="div">÷2</button>
        </div>
      </section>
    `,
  });
};
export default init;
