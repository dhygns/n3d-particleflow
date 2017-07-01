//Import Frameworks
import Framework from "./framework.js"

//Main Class
class Main {

  constructor() {
    this.oldt = new Date();
    this.newt = new Date();
    this.framework = new Framework();

    this.update();
  }

  update() {
    this.oldt = this.newt;
    this.newt = new Date();

    this.framework.update((this.newt - this.oldt) * 0.001);

    requestAnimationFrame(this.update.bind(this));
  }
}

var main = new Main();
