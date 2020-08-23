import "./app1.css";
import $ from "jquery";

// 数据相关放到 M
const m = {
  data: {
    // 初始化数据
    n: parseInt(localStorage.getItem("n")),
  },
};

// 视图相关放到 V
const v = {
  el: null,
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
  init(container) {
    v.el = $(container);
  },
  render(n) {
    if (v.el.children.length !== 0) v.el.empty();
    $(v.html.replace("{{n}}", n)).appendTo(v.el);
  },
};

// 其他放到 C
const c = {
  init(container) {
    v.init(container);
    v.render(m.data.n); // view = render(data)
    c.autoBindEvents();
  },
  events: {
    "click #add1": "add",
    "click #minus1": "minus",
    "click #mul2": "mul",
    "click #divide2": "div",
  },
  add() {
    m.data.n += 1;
    v.render(m.data.n);
  },
  minus() {
    m.data.n -= 1;
    v.render(m.data.n);
  },
  mul() {
    m.data.n *= 2;
    v.render(m.data.n);
  },
  div() {
    m.data.n /= 2;
    v.render(m.data.n);
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      const spaceIndex = key.indexOf(" ");
      const part1 = key.slice(0, spaceIndex);
      const part2 = key.slice(spaceIndex + 1);
      console.log(part1, part2, value);
      v.el.on(part1, part2, value);
    }
  },
};

export default c;
