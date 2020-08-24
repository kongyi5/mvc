import EventBus from "./EventBus.js";

class Model extends EventBus {
  constructor(options) {
    super(); // EventBus#constructor()
    const key = ["data", "create", "delete", "update", "get"];
    key.forEach((key) => {
      if (key in options) {
        this[key] = options[key];
      }
    });
    // this.data = options.data;
    // this.create = options.create;
    // this.delete = options.delete;
    // this.update = options.update;
    // this.get = options.get;
  }
  create() {
    // ?. 可选链
    console && console.error && console.error("你还没有实现 create");
  }
  delete() {
    console && console.error && console.error("你还没有实现 delete");
  }
  update() {
    console && console.error && console.error("你还没有实现 update");
  }
  get() {
    console && console.error && console.error("你还没有实现 get");
  }
}

// const m = new Model();
// m.create();
// m.delete();
// m.update();
// m.get();

export default Model;
