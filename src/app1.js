import "./app1.css";
import $ from "jquery";
import Model from "./base/Model.js";
import View from "./base/View.js";
import EventBus from "./base/EventBus.js";

const eventBus = new EventBus();

// 数据相关放到 M
const m = new Model({
  data: {
    // 初始化数据
    n: parseFloat(localStorage.getItem("n")),
  },
  update: function (data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:updated");
    localStorage.setItem("n", m.data.n);
  },
});

// 其他放到 C
const init = (el) => {
  new View({
    el: el,
    data: m.data,
    eventBus: eventBus,
    html: `
      <div>
        <div id="output">
          <span id="number">{{n}}</span></div>
        <div id="actions">
          <button id="add1">+1</button>
          <button id="minus1">-1</button>
          <button id="mul2">*2</button>
          <button id="divide2">÷2</button>
        </div>
      </div>
    `,
    render(data) {
      const n = data.n;
      if (this.el.children.length !== 0) this.el.empty();
      $(this.html.replace("{{n}}", n)).appendTo(this.el);
    },
    events: {
      "click #add1": "add",
      "click #minus1": "minus",
      "click #mul2": "mul",
      "click #divide2": "div",
    },
    add() {
      m.update({ n: m.data.n + 1 });
    },
    minus() {
      m.update({ n: m.data.n - 1 });
    },
    mul() {
      m.update({ n: m.data.n * 2 });
    },
    div() {
      m.update({ n: m.data.n / 2 });
    },
    autoBindEvents() {
      for (let key in this.events) {
        const value = this[this.events[key]];
        const spaceIndex = key.indexOf(" ");
        const part1 = key.slice(0, spaceIndex);
        const part2 = key.slice(spaceIndex + 1);
        this.el.on(part1, part2, value);
      }
    },
  });
};
export default init;
