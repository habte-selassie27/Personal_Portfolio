import { he } from "./preamble.jsx";
import { Ge } from "./three-01.jsx";
import { C } from "./three-02.jsx";
import { Dt } from "./three-03.jsx";
import { Je, Yn } from "./three-07.jsx";
import { Ai } from "./three-11.jsx";
import { ye } from "./engine-main.jsx";
class Av extends Ai {
  constructor() {
    super();
    he(this, "touch", !1);
    he(this, "portrait", !1);
    (this.experience = new ye()),
      this.resize(),
      window.addEventListener("resize", () => {
        this.resize(), setTimeout(() => this.trigger("resize"));
      });
  }
  resize() {
    this.checkTouchDevice(),
      this.checkPortrait(),
      (this.width = window.innerWidth),
      (this.height = window.innerHeight),
      (this.pixelRatio = Math.min(window.devicePixelRatio, 2));
  }
  checkPortrait() {
    const t = window.innerWidth / window.innerHeight <= 1.2;
    t !== this.portrait &&
      ((this.portrait = t),
      setTimeout(() => this.trigger(this.portrait ? "portrait" : "landscape")));
  }
  checkTouchDevice() {
    const t =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    t != this.touch &&
      ((this.touch = t),
      setTimeout(() => this.trigger(this.touch ? "touch" : "no-touch")));
  }
  getAbsoluteHeight(t) {
    const n = window.getComputedStyle(t),
      i = parseFloat(n.marginTop) + parseFloat(n.marginBottom);
    return Math.ceil(t.offsetHeight + i);
  }
  getMarginTop(t) {
    const n = window.getComputedStyle(t);
    return Math.ceil(parseFloat(n.marginTop));
  }
}
class Cv extends Ai {
  constructor() {
    super(),
      (this.start = Date.now()),
      (this.current = this.start),
      (this.elapsed = 0),
      (this.delta = 16),
      (this.hiddenDelta = 0),
      window.requestAnimationFrame(() => {
        this.tick();
      });
  }
  tick() {
    const e = Date.now();
    (this.delta = e - this.current),
      (this.current = e),
      (this.elapsed = this.current - this.start),
      this.trigger("tick"),
      window.requestAnimationFrame(() => {
        this.tick();
      });
  }
}
class Lv {
  constructor() {
    he(this, "parallax", {
      intensity: 0.4,
      speed: 3,
      enabled: !0,
    });
    he(this, "lookAtStartParameters", new C());
    (this.experience = new ye()),
      (this.sizes = this.experience.sizes),
      (this.scene = this.experience.scene),
      (this.canvas = this.experience.canvas),
      (this.time = this.experience.time),
      this.setInstance(),
      this.setCursor();
  }
  setInstance() {
    (this.instance = new Dt(
      38,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )),
      (this.cameraParallaxGroup = new Yn()),
      this.cameraParallaxGroup.add(this.instance),
      this.scene.add(this.cameraParallaxGroup);
  }
  setCursor() {
    (this.cursor = {}),
      window.addEventListener("mousemove", (e) => {
        (this.cursor.x = e.clientX / this.sizes.width - 0.5),
          (this.cursor.y = e.clientY / this.sizes.height - 0.5);
      });
  }
  resize() {
    (this.instance.aspect = this.sizes.width / this.sizes.height),
      this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls && this.controls.update(),
      !this.sizes.touch && this.parallax.enabled && this.updateParallax();
  }
  updateParallax() {
    const e = this.cursor.x * this.parallax.intensity,
      t = -this.cursor.y * this.parallax.intensity,
      n = this.time.delta / 1e3,
      i = (e - this.cameraParallaxGroup.position.x) * this.parallax.speed * n,
      s = (t - this.cameraParallaxGroup.position.y) * this.parallax.speed * n;
    i < 0.05 && i > -0.05 && (this.cameraParallaxGroup.position.x += i),
      s < 0.05 && s > -0.05 && (this.cameraParallaxGroup.position.y += s);
  }
}
class Rv {
  constructor() {
    (this.experience = new ye()),
      (this.canvas = this.experience.canvas),
      (this.sizes = this.experience.sizes),
      (this.scene = this.experience.scene),
      (this.camera = this.experience.camera),
      this.setInstance();
  }
  setInstance() {
    (this.instance = new Je({
      canvas: this.canvas,
      antialias: !0,
    })),
      (this.instance.outputEncoding = Ge),
      this.instance.setClearColor("#F5EFE6"),
      this.resize();
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}

function qn(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}

function Zd(o, e) {
  (o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = e);
}
/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

export { Av, Cv, Lv, Rv, Zd, qn };
