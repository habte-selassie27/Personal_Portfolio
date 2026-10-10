import { lc } from "./three-07.jsx";
import { Av, Cv, Lv, Rv } from "./app-core-base.jsx";
import { ww } from "./app-loader.jsx";
import { eM, tM } from "./app-work.jsx";
import { MM, SM, TM } from "./app-scroll.jsx";
import { AM, EM } from "./app-post-howler-sounds.jsx";
let xl = null;
class ye {
  constructor(e) {
    if (xl) return xl;
    (xl = this),
      (this.canvas = e),
      (this.gestures = new SM()),
      (this.sounds = new EM()),
      (this.sizes = new Av()),
      (this.time = new Cv()),
      (this.scene = new lc()),
      (this.resources = new eM(tM)),
      (this.camera = new Lv()),
      (this.waypoints = new TM()),
      (this.renderer = new Rv()),
      (this.world = new ww()),
      (this.ui = new MM()),
      (this.raycaster = new AM()),
      this.sizes.on("resize", () => {
        this.resize();
      }),
      this.time.on("tick", () => {
        this.update();
      });
  }
  resize() {
    this.camera.resize(), this.renderer.resize(), this.ui.resize();
  }
  update() {
    this.camera.update(),
      this.world.update(),
      this.renderer.update(),
      this.raycaster.update(),
      this.ui.update();
  }
}

export { ye };
