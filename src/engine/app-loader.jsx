import { he } from "./preamble.jsx";
import { Br, Ge, It, Ji, Ml, No, Qu, Sl, Ut, Vo, Ws, Yi, Ys, Zu, bt, es, ie, ir, nm, sn, te, wm, xt } from "./three-01.jsx";
import { C, _e, dn, is, je } from "./three-02.jsx";
import { Dt, Ot, St, dt, ft, ht, tt } from "./three-03.jsx";
import { aa } from "./three-04.jsx";
import { la } from "./three-05.jsx";
import { Ks, Pn, Yn, _i, ha, rr } from "./three-07.jsx";
import { bd, cc, da, fa, gc, hc, os, ua, uc, vd } from "./three-08.jsx";
import { $n, Bn, Ei, Fs, Il, Ud, Vd, Vr, Wr, Zi, _a, ar, jd, qd, xi, yc } from "./three-09.jsx";
import { Xe, Yd } from "./three-10.jsx";
import { Hf, Uf, et, wi, yn } from "./gsap-tail.jsx";
import { Hc, P, Uc, jb } from "./gsap-css-plugin.jsx";
import { ye } from "./engine-main.jsx";
class Yb {
  constructor() {
    he(this, "parameters", {
      color: "#c4a37e",
    });
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.resource = this.resources.items.roomShadowModel),
      this.setModel(),
      this.setMaterial();
  }
  setModel() {
    this.model = this.resource.scene;
  }
  setMaterial() {
    (this.shadowTexture = this.resources.items.bakedShadowRoomTexture),
      (this.shadowTexture.flipY = !1),
      (this.material = new Ot({
        transparent: !0,
        uniforms: {
          alphaMask: {
            value: this.shadowTexture,
          },
          uColor: {
            value: new ie(this.parameters.color),
          },
          uOpacity: {
            value: 1,
          },
        },
        vertexShader: Hc,
        fragmentShader: Uc,
      })),
      (this.model.children.find((e) => e.name === "shadowCatcher").material =
        this.material);
  }
}
class Jb {
  constructor() {
    (this.experience = new ye()),
      (this.room = this.experience.world.landingPage.room),
      (this.resources = this.experience.resources),
      (this.sounds = this.experience.sounds),
      (this.desktops = []),
      (this.desktopLayers = {}),
      this.setDesktop1(),
      this.setDesktop0();
  }
  setDesktop0() {
    (this.desktop0 = this.room.baseModel.children.find(
      (e) => e.name === "desktop-plane-0"
    )),
      (this.desktop0Layer0Material = new ht({
        map: this.resources.items.desktop0,
        fog: !1,
      })),
      (this.desktop0.material = this.desktop0Layer0Material);
  }
  scrollDesktop0() {
    const e = Math.random() * -0.5 + 0.25;
    P.to(this.resources.items.desktop0.offset, {
      y: e,
      duration: 1,
    }),
      this.sounds.play("mouseWheel");
  }
  setDesktop1() {
    (this.desktop1 = this.room.baseModel.children.find(
      (e) => e.name === "desktop-plane-1"
    )),
      (this.desktop1PlaneMaterial = new ht({
        map: this.resources.items.desktop1,
        fog: !1,
      })),
      (this.desktop1.material = this.desktop1PlaneMaterial),
      (this.desktop1.scale.x = 1.01),
      this.setNotification();
  }
  setNotification() {
    (this.notification = this.desktop1.clone()),
      (this.notification.material = new ht({
        map: this.resources.items.desktop1Notification,
        transparent: !0,
        fog: !1,
        opacity: 0,
      })),
      (this.notification.position.x += 0.01),
      this.room.baseModel.add(this.notification);
  }
}
class Kb {
  constructor() {
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.desktopLayers = {}),
      this.setModel(),
      this.setMaterial(),
      this.setBottomMaterial(),
      setTimeout(() => this.setPosition());
  }
  setModel() {
    (this.model = this.resources.items.labModel.scene),
      (this.model.rotation.y = -Math.PI / 2),
      this.scene.add(this.model);
  }
  setPosition() {
    (this.model.position.y -= 19.9), this.model.scale.set(0.97, 0.97, 0.97);
  }
  setMaterial() {
    (this.texture = this.resources.items.bakedLabTexture),
      (this.texture.flipY = !1),
      (this.material = new ht({
        map: this.texture,
      }));
    const e = this.model.children.find((t) => t.name === "merged-scene");
    e.material = this.material;
  }
  setBottomMaterial() {
    (this.bottom = this.model.children.find((e) => e.name === "bottom")),
      (this.bottomMaterial = new ht({
        color: "gray",
      })),
      (this.bottom.material = this.bottomMaterial),
      (this.bottom.position.y -= 0.005);
  }
}
class Zb {
  constructor() {
    he(this, "parameters", {
      color: "#00204d",
    });
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.lab = this.experience.world.lab.model),
      (this.resource = this.resources.items.labShadowModel),
      this.setModel(),
      this.setMaterial();
  }
  setModel() {
    (this.model = this.resource.scene),
      (this.model.position.y = 0.003),
      this.lab.model.add(this.model);
  }
  setMaterial() {
    (this.shadowTexture = this.resources.items.bakedShadowLabTexture),
      (this.shadowTexture.flipY = !1),
      (this.material = new Ot({
        transparent: !0,
        uniforms: {
          alphaMask: {
            value: this.shadowTexture,
          },
          uColor: {
            value: new ie(this.parameters.color),
          },
          uOpacity: {
            value: 1,
          },
        },
        vertexShader: Hc,
        fragmentShader: Uc,
      })),
      (this.model.children.find((e) => e.name === "shadowCatcher").material =
        this.material);
  }
}
var $b = `uniform vec3 uColorTop;
uniform vec3 uColorBottom;
uniform float uOpacity;
  
varying vec2 vUv;
    
void main() {
    gl_FragColor = vec4( mix(uColorBottom, uColorTop, vUv.y), uOpacity);
}`,
  Qb = `varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
class ew {
  constructor() {
    he(this, "parameters", {
      uColorTop: "#0047d6",
      uColorBottom: "#70ffff",
      uOpacity: 0.25,
    });
    (this.experience = new ye()),
      (this.lab = this.experience.world.lab.model),
      this.setMaterial(),
      this.setModel();
  }
  setMaterial() {
    this.material = new Ot({
      uniforms: {
        uColorTop: {
          value: new ie(this.parameters.uColorTop),
        },
        uColorBottom: {
          value: new ie(this.parameters.uColorBottom),
        },
        uOpacity: {
          value: this.parameters.uOpacity,
        },
      },
      vertexShader: Qb,
      fragmentShader: $b,
      transparent: !0,
    });
  }
  setModel() {
    (this.geometry = new gc(1.5, 1.5, 3, 32, 1, !0)),
      (this.model = new St(this.geometry, this.material)),
      this.model.position.set(-0.08, 2.9, -0.12),
      this.model.scale.set(0.92, 1.55, 0.92),
      this.lab.model.add(this.model);
  }
}
class tw {
  constructor() {
    he(this, "parameters", {
      speed: 5e-4,
    });
    he(this, "active", !0);
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.lab = this.experience.world.lab.model),
      (this.sounds = this.experience.sounds),
      this.setModel(),
      this.setMaterial(),
      this.setBackground(),
      this.setButton();
  }
  setModel() {
    this.model = this.lab.model.children.find((e) => e.name === "desktop");
  }
  setMaterial() {
    (this.texture = this.resources.items.labScreenGraph),
      (this.texture.wrapS = Ji),
      (this.material = new ht({
        map: this.texture,
        transparent: !0,
      })),
      (this.model.material = this.material);
  }
  setBackground() {
    (this.background = {
      geometry: this.model.geometry.clone(),
      material: new ht({
        map: this.resources.items.labScreenOffline,
      }),
    }),
      (this.background.mesh = new St(
        this.background.geometry,
        this.background.material
      )),
      this.background.mesh.position.set(
        this.model.position.x - 0.001,
        this.model.position.y,
        this.model.position.z
      ),
      this.lab.model.add(this.background.mesh);
  }
  setButton() {
    (this.button = this.lab.model.children.find((e) => e.name === "pc-button")),
      (this.button.material = this.lab.material),
      (this.button.hoverIcon = "pointer"),
      (this.button.onClick = () => {
        this.sounds.play("buttonClick"), this.switchActivity();
      });
  }
  switchActivity() {
    (this.active = !this.active),
      P.to(this.material, {
        opacity: this.active ? 1 : 0,
        duration: 0.2,
      });
  }
  update() {
    this.active && (this.texture.offset.x -= this.parameters.speed);
  }
}
class nw {
  constructor() {
    (this.experience = new ye()),
      (this.lab = this.experience.world.lab.model),
      this.setModel(),
      this.dropInterval();
  }
  setModel() {
    (this.model = this.lab.model.children.find((e) => e.name === "drop")),
      (this.model.material = this.lab.material),
      (this.model.position.x -= 0.055),
      (this.model.position.y = -0.035);
  }
  dropInterval() {
    P.delayedCall(4, () => {
      P.fromTo(
        this.model.position,
        {
          y: 2.1,
        },
        {
          y: -0.02,
          duration: 1.7,
          ease: wi.easeIn,
        }
      ),
        P.fromTo(
          this.model.scale,
          {
            y: 0,
          },
          {
            y: 1,
            duration: 0.6,
            delay: 0.1,
          }
        ),
        P.to(this.model.scale, {
          y: 0,
          duration: 0.05,
          delay: 1.65,
        }),
        this.dropInterval();
    });
  }
}
class iw {
  constructor() {
    he(this, "parameters", {
      count: 11,
      maxMovementDuration: 3,
    });
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.lab = this.experience.world.lab.model),
      (this.sounds = this.experience.sounds),
      this.setSprite(),
      this.startInterval();
  }
  setSprite() {
    (this.sprites = []), (this.availableSprites = []);
    for (let e = 0; e < this.parameters.count; e++)
      this.sprites.push(
        new _i(
          new Pn({
            map: this.resources.items.bubbleSprite,
            depthTest: !1,
            opacity: 0,
          })
        )
      ),
        this.availableSprites.push(this.sprites[e]),
        (this.sprites[e].position.x = Math.sin(e) * 1.1),
        (this.sprites[e].position.z = Math.cos(e) * 1.1 - 0.15),
        this.lab.model.add(this.sprites[e]),
        this.addOnHover(this.sprites[e]);
  }
  addOnHover(e) {
    e.onHover = () => {
      e.popped || this.popBubble(e);
    };
  }
  popBubble(e) {
    this.sounds.play("bubble"),
      (e.popped = !0),
      (e.material.map = this.resources.items.bubblePopSprite),
      P.to(e.material, {
        opacity: 0,
        duration: 0.2,
      });
    const t = e.scale.x + 0.1;
    P.to(e.scale, {
      x: t,
      y: t,
      duration: 0.2,
    });
  }
  getAvailableSprite() {
    const e =
      this.availableSprites[
        Math.floor(Math.random() * this.availableSprites.length)
      ];
    return this.availableSprites.splice(this.availableSprites.indexOf(e), 1), e;
  }
  spawnBubble(e = Math.random() * 1.1, t) {
    if (this.availableSprites.length != 0) {
      const n = this.getAvailableSprite(),
        i = t === "back" ? 4 : this.parameters.maxMovementDuration,
        s = t === "back" ? yn.easeIn.config(2.5) : Hf.easeNone,
        r = i - i * (e / 3.9);
      (e += 0.8),
        P.fromTo(
          n.position,
          {
            y: e,
          },
          {
            y: 4.7,
            duration: r,
            ease: s,
            onComplete: () => {
              this.availableSprites.push(n);
            },
          }
        ),
        (n.material.opacity = Math.random() * 0.5 + 0.5),
        (n.popped = !1),
        (n.material.map = this.resources.items.bubbleSprite);
      const a = Math.random() * 0.12 + 0.2;
      P.fromTo(
        n.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: a,
          y: a,
          z: a,
          duration: 0.5,
          ease: yn.easeIn.config(1.5),
        }
      ),
        P.to(n.material, {
          opacity: 0,
          duration: 0.2,
          delay: r - 0.2,
          ease: s,
        });
    }
  }
  startInterval() {
    P.delayedCall(Math.random() * 0.3 + 0.25, () => {
      this.spawnBubble(), this.startInterval();
    });
  }
}
class sw {
  constructor() {
    he(this, "parameters", {
      color: "#004961",
      opacity: 0.05,
    });
    (this.experience = new ye()),
      (this.lab = this.experience.world.lab.model),
      this.setTubes();
  }
  setTubes() {
    (this.tubes = this.lab.model.children.find((e) => e.name === "test-tubes")),
      (this.material = new ht({
        color: this.parameters.color,
        transparent: !0,
        opacity: this.parameters.opacity,
        blending: 5,
      })),
      (this.tubes.material = this.material);
  }
}
var rw = `varying vec3 vColor;

uniform float uOffset;

void main()
{
    gl_Position = vec4(position.x, position.y + uOffset, position.z, 1.0);

    vColor = color;
}`,
  ow = `varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`;
class aw {
  constructor() {
    he(this, "height", 3.5);
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.scene = this.experience.scene),
      this.setBackground();
  }
  setBackground() {
    (this.colors = {}),
      (this.colors.topLeft = {}),
      (this.colors.topLeft.value = "#000e2e"),
      (this.colors.topLeft.instance = new ie(this.colors.topLeft.value)),
      (this.colors.topRight = {}),
      (this.colors.topRight.value = "#002757"),
      (this.colors.topRight.instance = new ie(this.colors.topRight.value)),
      (this.colors.bottomLeft = {}),
      (this.colors.bottomLeft.value = "#004db3"),
      (this.colors.bottomLeft.instance = new ie(this.colors.bottomLeft.value)),
      (this.colors.bottomRight = {}),
      (this.colors.bottomRight.value = "#009dff"),
      (this.colors.bottomRight.instance = new ie(
        this.colors.bottomRight.value
      )),
      (this.geometry = new aa(2, this.height, 1, 1)),
      (this.material = new Ot({
        uniforms: {
          uOffset: {
            value: -2.75,
          },
        },
        vertexColors: !0,
        depthWrite: !1,
        vertexShader: rw,
        fragmentShader: ow,
      })),
      (this.mesh = new St(this.geometry, this.material)),
      (this.mesh.frustumCulled = !1),
      this.scene.add(this.mesh),
      (this.updateColors = () => {
        this.colors.topLeft.instance.set(this.colors.topLeft.value),
          this.colors.topRight.instance.set(this.colors.topRight.value),
          this.colors.bottomLeft.instance.set(this.colors.bottomLeft.value),
          this.colors.bottomRight.instance.set(this.colors.bottomRight.value);
        const e = new Float32Array(4 * 3);
        (e[0] = this.colors.topLeft.instance.r),
          (e[1] = this.colors.topLeft.instance.g),
          (e[2] = this.colors.topLeft.instance.b),
          (e[3] = this.colors.topRight.instance.r),
          (e[4] = this.colors.topRight.instance.g),
          (e[5] = this.colors.topRight.instance.b),
          (e[6] = this.colors.bottomLeft.instance.r),
          (e[7] = this.colors.bottomLeft.instance.g),
          (e[8] = this.colors.bottomLeft.instance.b),
          (e[9] = this.colors.bottomRight.instance.r),
          (e[10] = this.colors.bottomRight.instance.g),
          (e[11] = this.colors.bottomRight.instance.b),
          this.geometry.setAttribute("color", new ft(e, 3));
      }),
      this.updateColors();
  }
}
class lw {
  constructor() {
    he(this, "parameters", {
      leftBorder: 0.2,
      rightBorder: 0.6,
    });
    (this.experience = new ye()),
      (this.room = this.experience.world.landingPage.room),
      this.setModel(),
      this.setIdleStartPosition();
  }
  setModel() {
    (this.model = this.room.model.children.find((e) => e.name === "mouse")),
      this.room.baseModel.add(this.model),
      (this.model.position.x += 0.15),
      (this.model.position.z += 0.07);
  }
  setIdleStartPosition() {
    this.model.idleStartPosition = {
      x: this.model.position.x,
      z: this.model.position.z,
    };
  }
  moveToIdleStartPositon() {
    (this.model.position.x = this.model.idleStartPosition.x),
      (this.model.position.z = this.model.idleStartPosition.z);
  }
  updateMouseSync() {
    let t =
      this.experience.world.character.body.model.children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].getWorldPosition(
        new C()
      );
    t.y < 1.63 - 5.7 &&
      t.y > 1.58 - 5.7 &&
      t.x > this.parameters.leftBorder &&
      t.x < this.parameters.rightBorder &&
      ((this.model.position.z = -t.x - 1.849),
      (this.model.position.x = t.z + 0.92));
  }
}
class cw {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.room = this.experience.world.landingPage.room),
      (this.desktops = this.experience.world.landingPage.desktops),
      (this.sounds = this.experience.sounds),
      this.setSprite();
  }
  setSprite() {
    (this.material = new Pn({
      map: this.resources.items.newMessageSprite,
      alphaTest: 0.1,
      opacity: 0,
      fog: !1,
    })),
      (this.sprite = new _i(this.material)),
      this.room.model.add(this.sprite),
      this.sprite.position.set(-1.75, 3.5, 1.8),
      this.sprite.scale.set(0.35, 0.35, 0.35);
  }
  show() {
    this.sounds.play("notification"),
      P.fromTo(
        this.sprite.position,
        {
          y: 3.3,
        },
        {
          y: 4,
          duration: 2,
          ease: wi.easeOut,
        }
      ),
      P.fromTo(
        this.material,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      ),
      P.fromTo(
        this.material,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
          delay: 1.3,
        }
      ),
      P.fromTo(
        this.desktops.notification.material,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
        }
      ),
      P.fromTo(
        this.desktops.notification.material,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 1,
          delay: 2,
        }
      );
  }
}
class hw {
  constructor() {
    he(this, "parameters", {
      portraitScale: 1.7,
    });
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.sizes = this.experience.sizes),
      this.setModel(),
      this.setMaterial(),
      this.onOrientationChange(),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  setYPosition(e) {
    this.model.position.y = e - 4.7;
  }
  onOrientationChange() {
    this.sizes.portrait
      ? ((this.model.position.y = this.parameters.portraitY),
        this.model.scale.set(
          this.parameters.portraitScale,
          this.parameters.portraitScale,
          this.parameters.portraitScale
        ))
      : this.model.scale.set(1, 1, 1);
  }
  setModel() {
    (this.model = this.resources.items.contactSceneModel.scene),
      this.scene.add(this.model);
  }
  setMaterial() {
    (this.texture = this.resources.items.bakedContactTexture),
      (this.texture.flipY = !1),
      (this.material = new ht({
        map: this.texture,
        fog: !1,
      })),
      (this.model.children[0].material = this.material);
  }
}
class uw {
  constructor() {
    he(this, "parameters", {
      color: "#ac9172",
    });
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.contactScene = this.experience.world.contact.scene),
      (this.resource = this.resources.items.contactShadowModel),
      this.setModel(),
      this.setMaterial();
  }
  setModel() {
    (this.model = this.resource.scene), this.contactScene.model.add(this.model);
  }
  setMaterial() {
    (this.shadowTexture = this.resources.items.bakedShadowContactTexture),
      (this.shadowTexture.flipY = !1),
      (this.material = new Ot({
        transparent: !0,
        uniforms: {
          alphaMask: {
            value: this.shadowTexture,
          },
          uColor: {
            value: new ie(this.parameters.color),
          },
          uOpacity: {
            value: 1,
          },
        },
        vertexShader: Hc,
        fragmentShader: Uc,
      })),
      (this.model.children.find((e) => e.name === "shadowCatcher").material =
        this.material);
  }
}
class dw {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.contactScene = this.experience.world.contact.scene),
      (this.sizes = this.experience.sizes),
      this.setSprite(),
      this.onOrientationChange(),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    this.sizes.portrait
      ? (this.sprite.scale.set(2.61, 5.05),
        this.sprite.position.set(-0.05, 2.7, 0))
      : (this.sprite.scale.set(2.61, 5.05),
        this.sprite.position.set(-0.05, 2.15, 0));
  }
  setSprite() {
    (this.texture = this.resources.items.davidImage),
      (this.material = new Pn({
        map: this.texture,
        depthTest: !1,
        fog: !1,
        opacity: 0,
      })),
      (this.sprite = new _i(this.material)),
      this.contactScene.model.add(this.sprite);
  }
}
class fw {
  constructor() {
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.sizes = this.experience.sizes),
      this.setFog(),
      this.onOrientationChange(),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    (this.fog.near = this.sizes.portrait ? 18 : 10),
      (this.fog.far = this.sizes.portrait ? 23 : 17),
      (this.fog.color = new ie(this.sizes.portrait ? "#001945" : "#002C6A"));
  }
  setFog() {
    (this.fog = new ha("#002C6A", 10, 17)), (this.scene.fog = this.fog);
  }
}
class pw {
  constructor() {
    he(this, "played", !1);
    he(this, "parameters", {
      transitionDuration: 2,
      characterPortraitY: 1.5,
      characterLandscapeY: 0.27,
      characterPortraitScale: 1.7,
    });
    (this.experience = new ye()),
      (this.character = this.experience.world.character),
      (this.contactScene = this.experience.world.contact.scene),
      (this.david = this.experience.world.contact.david),
      (this.exclamationMark = this.experience.world.contact.exclamationMark),
      (this.sizes = this.experience.sizes),
      (this.sounds = this.experience.sounds),
      this.setMaterialsToHide();
  }
  playIdle() {
    this.played ||
      ((this.character.body.model.position.y =
        this.experience.world.contact.scene.model.position.y +
        this.parameters[
          this.sizes.portrait ? "characterPortraitY" : "characterLandscapeY"
        ]),
      this.sizes.portrait &&
        this.character.body.model.scale.set(
          this.parameters.characterPortraitScale,
          this.parameters.characterPortraitScale,
          this.parameters.characterPortraitScale
        ),
      this.character.body.setAllToOriginal(),
      (this.character.face.material.map = this.character.face.textures.sleepy),
      this.character.animations.actions.current._clip.name != "standing-idle" &&
        this.character.animations.play("standingIdle", 0));
  }
  playTransition() {
    this.played ||
      ((this.played = !0),
      (this.timeline = P.timeline()),
      P.delayedCall(0.2, () => {
        (this.character.face.material.map =
          this.character.face.textures.scared),
          P.delayedCall(0.35, () => {
            (this.character.face.faceTransitions.current = null),
              this.character.face.updateFace("contact");
          });
      }),
      P.delayedCall(0.15, () => {
        this.character.animations.actions.current._clip.name ===
          "standing-idle" &&
          (this.sounds.play("gasp"),
          this.character.animations.play("contact", 0.1));
      }),
      (this.transtionDelay = P.delayedCall(0.2, () => {
        (this.startedTransition = !0),
          this.timeline.to(
            this.david.material,
            {
              opacity: 1,
              duration: this.parameters.transitionDuration,
              ease: wi.easeIn,
            },
            0
          ),
          (this.character.body.materials.bakedMaterial.transparent = !0),
          (this.character.body.materials.bakedMaterial.needsUpdate = !0),
          (this.character.face.model.renderOrder = 1),
          this.materialsToHide.forEach((e) => {
            this.timeline.to(
              e,
              {
                opacity: 0,
                duration: this.parameters.transitionDuration,
                ease: wi.easeIn,
              },
              0
            );
          });
      })));
  }
  resetCharacter() {
    (this.character.body.materials.bakedMaterial.transparent ||
      this.materialsToHide[0].opacity != 1 ||
      !this.startedTransition) &&
      (this.experience.ui.landingPage.visible ||
        this.experience.ui.about.animations.resetCharacterToPosition(),
      this.character.body.model.scale.set(1, 1, 1),
      (this.character.body.materials.bakedMaterial.transparent = !1),
      (this.character.body.materials.bakedMaterial.needsUpdate = !0),
      (this.character.face.model.renderOrder = 0),
      this.materialsToHide.forEach((e) => {
        e.opacity = 1;
      }),
      this.timeline && this.timeline.kill(),
      this.transtionDelay && this.transtionDelay.kill(),
      this.david.material.opacity != 1 &&
        this.played &&
        P.to(
          this.david.material,
          {
            opacity: 1,
            duration: this.parameters.transitionDuration,
            ease: wi.easeIn,
          },
          0
        ));
  }
  setMaterialsToHide() {
    this.materialsToHide = [
      this.character.body.materials.shirtMaterial,
      this.character.body.materials.skinMaterial,
      this.character.body.materials.pantsMaterial,
      this.character.body.materials.whiteMaterial,
      this.character.body.materials.bakedMaterial,
      this.character.face.material,
    ];
  }
}
class mw {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.scene = this.experience.scene),
      this.setModel(),
      this.defineBodyParts(),
      this.defineMaterials(),
      this.applyMaterials(),
      this.deactiveFrustumCulling(),
      this.defineWireframe(),
      this.defineWireframeAt(),
      this.preloadWireframe();
  }
  setModel() {
    (this.model = this.resources.items.characterModel.scene),
      (this.model.position.y = 2),
      (this.model.rotation.y = -Math.PI / 2),
      this.scene.add(this.model);
  }
  defineBodyParts() {
    (this.armature = this.model.children.find((e) => e.name === "armature")),
      (this.armLeft = this.armature.children.find(
        (e) => e.name === "arm-left"
      )),
      (this.armRight = this.armature.children.find(
        (e) => e.name === "arm-right"
      )),
      (this.legRight = this.armature.children.find(
        (e) => e.name === "leg-right"
      )),
      (this.legLeft = this.armature.children.find(
        (e) => e.name === "leg-left"
      )),
      (this.shoeRight = this.armature.children.find(
        (e) => e.name === "shoe-right"
      )),
      (this.shoeLeft = this.armature.children.find(
        (e) => e.name === "shoe-left"
      )),
      (this.shoeWhiteRight = this.armature.children.find(
        (e) => e.name === "shoe-white-right"
      )),
      (this.shoeWhiteLeft = this.armature.children.find(
        (e) => e.name === "shoe-white-left"
      )),
      (this.sockRight = this.armature.children.find(
        (e) => e.name === "sock-right"
      )),
      (this.sockLeft = this.armature.children.find(
        (e) => e.name === "sock-left"
      )),
      (this.pantsBottomRight = this.armature.children.find(
        (e) => e.name === "pants-bottom-right"
      )),
      (this.pantsBottomLeft = this.armature.children.find(
        (e) => e.name === "pants-bottom-left"
      )),
      (this.pantsRight = this.armature.children.find(
        (e) => e.name === "pants-right"
      )),
      (this.pantsLeft = this.armature.children.find(
        (e) => e.name === "pants-left"
      )),
      (this.chest = this.armature.children.find((e) => e.name === "chest")),
      (this.shoulderRight = this.armature.children.find(
        (e) => e.name === "shoulder-right"
      )),
      (this.shoulderLeft = this.armature.children.find(
        (e) => e.name === "shoulder-left"
      )),
      (this.throat = this.armature.children.find((e) => e.name === "throat")),
      (this.chest = this.armature.children.find((e) => e.name === "chest")),
      (this.head = this.armature.children.find((e) => e.name === "head"));
  }
  deactiveFrustumCulling() {
    this.armature.children.forEach((e) => {
      e.type === "SkinnedMesh" && (e.frustumCulled = !1);
    });
  }
  defineMaterials() {
    (this.materials = {}),
      (this.materials.shirtMaterial = new Fs({
        matcap: this.resources.items.shirtMatcap,
        transparent: !0,
        fog: !1,
      })),
      (this.materials.skinMaterial = new Fs({
        matcap: this.resources.items.skinMatcap,
        transparent: !0,
        fog: !1,
      })),
      (this.materials.pantsMaterial = new Fs({
        matcap: this.resources.items.pantsMatcap,
        transparent: !0,
        fog: !1,
      })),
      (this.materials.whiteMaterial = new Fs({
        matcap: this.resources.items.whiteMatcap,
        transparent: !0,
        fog: !1,
      })),
      (this.bakedTexture = this.resources.items.bakedCharacterHeadTexture),
      (this.bakedTexture.flipY = !1),
      (this.materials.bakedMaterial = new ht({
        map: this.bakedTexture,
        fog: !1,
      }));
  }
  applyMaterials() {
    (this.armRight.material = this.materials.skinMaterial),
      (this.armLeft.material = this.materials.skinMaterial),
      (this.legRight.material = this.materials.skinMaterial),
      (this.legLeft.material = this.materials.skinMaterial),
      (this.shoeRight.material = this.materials.shirtMaterial),
      (this.shoeLeft.material = this.materials.shirtMaterial),
      (this.shoeWhiteRight.material = this.materials.whiteMaterial),
      (this.shoeWhiteLeft.material = this.materials.whiteMaterial),
      (this.sockRight.material = this.materials.whiteMaterial),
      (this.sockLeft.material = this.materials.whiteMaterial),
      (this.pantsBottomRight.material = this.materials.shirtMaterial),
      (this.pantsBottomLeft.material = this.materials.shirtMaterial),
      (this.pantsRight.material = this.materials.pantsMaterial),
      (this.pantsLeft.material = this.materials.pantsMaterial),
      (this.chest.material = this.materials.shirtMaterial),
      (this.shoulderRight.material = this.materials.shirtMaterial),
      (this.shoulderLeft.material = this.materials.shirtMaterial),
      (this.throat.material = this.materials.skinMaterial),
      (this.head.material = this.materials.bakedMaterial);
  }
  defineWireframeAt() {
    (this.legRight.wireframeAt = "-9.1"),
      (this.legLeft.wireframeAt = "-9.1"),
      (this.shoeRight.wireframeAt = "-9"),
      (this.shoeLeft.wireframeAt = "-9"),
      (this.shoeWhiteRight.wireframeAt = "-9"),
      (this.shoeWhiteLeft.wireframeAt = "-9"),
      (this.sockRight.wireframeAt = "-9"),
      (this.sockLeft.wireframeAt = "-9"),
      (this.pantsBottomRight.wireframeAt = "-9.2"),
      (this.pantsBottomLeft.wireframeAt = "-9.2"),
      (this.pantsRight.wireframeAt = "-10"),
      (this.pantsLeft.wireframeAt = "-10"),
      (this.chest.wireframeAt = "-11"),
      (this.shoulderRight.wireframeAt = "-11"),
      (this.shoulderLeft.wireframeAt = "-11"),
      (this.throat.wireframeAt = "-11.2"),
      (this.head.wireframeAt = "-11.5"),
      (this.armRight.wireframeAt = "-11.55"),
      (this.armLeft.wireframeAt = "-11.5");
  }
  defineWireframe() {
    (this.wireframeParameters = {
      color: "#009dff",
    }),
      (this.materials.wireframeMaterial = new ht({
        color: this.wireframeParameters.color,
        wireframe: !0,
        opacity: 0.24,
        blending: 2,
        wireframeLinewidth: 0.01,
        fog: !1,
      }));
  }
  preloadWireframe() {
    this.setAllToWireframe(), setTimeout(() => this.setAllToOriginal());
  }
  setAllToOriginal() {
    this.model.children[0].children.forEach((e) => {
      e.name === "face" && (e.visible = !0),
        e.originalMaterial && (e.material = e.originalMaterial);
    });
  }
  setAllToWireframe() {
    this.model.children[0].children.forEach((e) => {
      e.name != "face" &&
        (e.originalMaterial || (e.originalMaterial = e.material),
        (e.material = this.materials.wireframeMaterial));
    });
  }
  update() {
    this.checkForWireframe && this.updateWireframe(this.checkForWireframe);
  }
  updateWireframe(e) {
    this.model.children[0].children.forEach((t) => {
      t.wireframeAt &&
        (e == "up" && this.model.position.y > t.wireframeAt - 5.7
          ? this.updateToOriginalMaterial(t)
          : this.model.position.y < t.wireframeAt - 5.7 &&
            this.updateToWireframeMaterial(t));
    });
  }
  updateToOriginalMaterial(e) {
    e.name === "face" ? (e.visible = !0) : (e.material = e.originalMaterial);
  }
  updateToWireframeMaterial(e) {
    e.name === "face"
      ? (e.visible = !1)
      : (e.originalMaterial || (e.originalMaterial = e.material),
        (e.material = this.materials.wireframeMaterial));
  }
}
class gw {
  constructor() {
    (this.experience = new ye()),
      (this.character = this.experience.world.character),
      (this.resources = this.experience.resources),
      this.setFace(),
      this.defineFaceTransitions();
  }
  setFace() {
    (this.model = this.character.body.armature.children.find(
      (e) => e.name === "face"
    )),
      (this.model.wireframeAt = "-11.5"),
      (this.textures = {
        default: this.resources.items.characterDefaultFace,
        scared: this.resources.items.characterScaredFace,
        sleepy: this.resources.items.characterSleepyFace,
        hurt: this.resources.items.characterHurtFace,
      }),
      (this.material = new ht({
        map: this.textures.default,
        transparent: !0,
        fog: !1,
      })),
      (this.model.material = this.material),
      this.defineFaceTransitions();
  }
  defineFaceTransitions() {
    (this.faceTransitions = {}),
      (this.faceTransitions.smile = {
        allowedOutsideLanding: !1,
        faces: [
          this.resources.items.characterSmile0Face,
          this.resources.items.characterSmile1Face,
          this.resources.items.characterSmile2Face,
        ],
      }),
      (this.faceTransitions.contact = {
        allowedOutsideLanding: !0,
        faces: [
          this.resources.items.characterScaredFace,
          this.resources.items.characterContact1Face,
          this.resources.items.characterContact2Face,
        ],
      });
  }
  updateFace(e) {
    if (
      ((this.landingPage = this.experience.ui.landingPage), e === "default")
    ) {
      this.faceTransitions.count =
        this.faceTransitions.current.faces.length - 1;
      const t = () =>
        (this.faceCall = P.delayedCall(0.03, () => {
          (this.landingPage.visible ||
            this.faceTransitions.current.allowedOutsideLanding ||
            this.landingPage.isAnimating) &&
            ((this.model.material.map =
              this.faceTransitions.current.faces[this.faceTransitions.count]),
            this.faceTransitions.count--,
            this.faceTransitions.count == -1
              ? (this.model.material.map = this.textures.default)
              : t());
        }));
      t();
    } else {
      (this.faceTransitions.current = this.faceTransitions[e]),
        (this.faceTransitions.count = 0);
      const t = () =>
        (this.faceCall = P.delayedCall(0.033, () => {
          (this.landingPage.visible ||
            this.faceTransitions.current.allowedOutsideLanding) &&
            ((this.model.material.map =
              this.faceTransitions[e].faces[this.faceTransitions.count]),
            this.faceTransitions.count++,
            this.faceTransitions.count !=
              this.faceTransitions[e].faces.length && t());
        }));
      t();
    }
  }
}
class _w {
  constructor() {
    he(this, "leftDesktopIntervalDuration", 12);
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.mouse = this.experience.world.landingPage.mouse),
      (this.messagePopUp = this.experience.world.landingPage.messagePopUp),
      (this.desktops = this.experience.world.landingPage.desktops),
      (this.sounds = this.experience.sounds),
      (this.face = this.experience.world.character.face),
      (this.animations = this.experience.world.character.animations);
  }
  initBlink() {
    (this.blink = {
      intervalDuration: 5,
      phases: [
        this.resources.items.characterBlink0Face,
        this.resources.items.characterBlink1Face,
        this.resources.items.characterBlink0Face,
      ],
      allowedMaps: [this.face.textures.default, this.face.textures.sleepy],
    }),
      this.startBlinking();
  }
  startBlinking() {
    (this.blink.interval = () =>
      P.delayedCall(this.blink.intervalDuration, () => {
        if (
          ((this.blink.currentMap = this.face.material.map),
          this.blink.allowedMaps.includes(this.blink.currentMap))
        )
          for (let e = 0; e < this.blink.phases.length + 1; e++)
            P.delayedCall((e * 60) / 1e3, () => {
              (this.face.material.map == this.blink.phases[e - 1] || e == 0) &&
                (this.face.material.map =
                  e < this.blink.phases.length - 1
                    ? this.blink.phases[e]
                    : this.blink.currentMap);
            });
        this.blink.interval();
      })),
      this.blink.interval();
  }
  idle() {
    (this.animation = this.experience.world.character.animations),
      this.animation.actions.current._clip.name === "wave" &&
        this.animation.play("idle", 0.4),
      this.scrollInterval(),
      this.leftDesktopInterval();
  }
  scrollInterval() {
    this.scrollIntervalCall = P.delayedCall(Math.random() * 2 + 3, () => {
      this.experience.ui.landingPage.visible &&
        this.animation.actions.current._clip.name == "idle" &&
        (this.desktops.scrollDesktop0(),
        Math.random() <= 0.33 &&
          P.delayedCall(0.7, () => {
            !this.isLeft &&
              !this.experience.ui.landingPage.isAnimating &&
              this.desktops.scrollDesktop0();
          })),
        this.scrollInterval();
    });
  }
  leftDesktopInterval() {
    this.leftDesktopIntervalCall = P.delayedCall(
      this.leftDesktopIntervalDuration +
        this.animation.actions.leftDesktopAction._clip.duration +
        Math.random() * 4,
      () => {
        this.experience.ui.landingPage.visible &&
          !this.experience.ui.landingPage.isAnimating &&
          ((this.leftDesktopIntervals = []),
          (this.isLeft = !0),
          this.leftDesktopIntervals.push(
            P.delayedCall(0.18, () =>
              this.animation.play("leftDesktopAction", 0.3)
            )
          ),
          this.messagePopUp.show(),
          this.leftDesktopIntervals.push(
            P.delayedCall(1.7, () => {
              this.experience.ui.landingPage.isAnimating ||
                this.sounds.play("longKeyboard");
            })
          ),
          this.leftDesktopIntervals.push(
            P.delayedCall(
              this.animation.actions.leftDesktopAction._clip.duration,
              () => {
                this.experience.ui.landingPage.isAnimating ||
                  ((this.isLeft = !1), this.animation.play("idle", 0.35));
              }
            )
          )),
          this.leftDesktopInterval();
      }
    );
  }
  killLeftDesktopIntervals() {
    this.leftDesktopIntervals &&
      (this.leftDesktopIntervals.forEach((e) => e.kill(!0)),
      (this.leftDesktopIntervals = []));
  }
  update() {
    this.experience.ui.landingPage.visible &&
      (this.animations.actions.current._clip.name === "idle" ||
        this.animations.actions.current._clip.name === "left-desktop-action") &&
      this.mouse.updateMouseSync();
  }
}
class yw {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.chair = this.experience.world.landingPage.room.chair),
      (this.resource = this.resources.items.characterModel),
      (this.model = this.resource.scene),
      (this.face = this.experience.world.character.face),
      (this.sounds = this.experience.sounds),
      this.setAnimations();
  }
  setAnimations() {
    (this.mixer = new Yd(this.model)),
      this.defineActions(),
      (this.actions.current = this.actions.idle);
  }
  defineActions() {
    (this.actions = {}),
      (this.actions.leftDesktopAction = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "left-desktop-action")
      )),
      (this.actions.leftDesktopAction.repetitions = 1),
      (this.actions.leftDesktopAction.clampWhenFinished = !0),
      (this.actions.leftDesktopAction.allowedOutsideLanding = !1),
      (this.actions.idle = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "idle")
      )),
      (this.actions.idle.loop = No),
      (this.actions.idle.allowedOutsideLanding = !1),
      (this.actions.wave = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "wave")
      )),
      (this.actions.wave.repetitions = 1),
      (this.actions.wave.clampWhenFinished = !0),
      (this.actions.wave.allowedOutsideLanding = !1),
      (this.actions.fallDown = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "fall-down")
      )),
      (this.actions.fallDown.repetitions = 1),
      (this.actions.fallDown.clampWhenFinished = !0),
      (this.actions.fallDown.allowedOutsideLanding = !0),
      (this.actions.waterIdle = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "water-idle")
      )),
      (this.actions.waterIdle.loop = No),
      (this.actions.waterIdle.allowedOutsideLanding = !0),
      (this.actions.contact = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "contact-animation")
      )),
      (this.actions.contact.repetitions = 1),
      (this.actions.contact.clampWhenFinished = !0),
      (this.actions.contact.allowedOutsideLanding = !0),
      (this.actions.standingIdle = this.mixer.clipAction(
        this.resource.animations.find((e) => e.name === "standing-idle")
      )),
      (this.actions.standingIdle.loop = No),
      (this.actions.standingIdle.allowedOutsideLanding = !0),
      (this.actions.standingIdle.timeScale = 0.5);
  }
  play(e, t = 0.5) {
    const n = this.actions[e],
      i = this.actions.current;
    !i._clip.name != n._clip.name &&
      (n.allowedOutsideLanding || this.experience.ui.landingPage.visible) &&
      (n.reset().play(), i.crossFadeTo(n, t), (this.actions.current = n));
  }
  playIntroAnimation() {
    P.fromTo(
      this.model.position,
      {
        y: 2,
      },
      {
        y: -5.7,
        duration: 1.1,
        ease: et.easeIn,
        onComplete: () => {
          (this.face.material.map = this.face.textures.default),
            this.sounds.play("chairImpact"),
            P.delayedCall(0.2, () => this.sounds.play("chairDown")),
            P.to(this.chair.rotation, {
              x: 0.12,
              z: -0.12,
              ease: Uf.easeOut,
              duration: 0.16,
              yoyo: !0,
              repeat: 1,
            });
        },
      }
    ),
      (this.face.material.map = this.face.textures.scared),
      P.delayedCall(1, () => {
        P.delayedCall(0.37, () => {
          this.face.updateFace("smile"),
            this.experience.world.character.intervals.initBlink();
        }),
          P.delayedCall(this.actions.wave._clip.duration - 1.7, () => {
            this.experience.ui.landingPage.visible &&
              this.face.updateFace("default");
          });
      }),
      P.delayedCall(0, () => this.play("wave")),
      P.delayedCall(this.actions.wave._clip.duration, () =>
        this.experience.world.character.intervals.idle()
      );
  }
  update() {
    this.mixer &&
      this.time.delta < 50 &&
      this.mixer.update(this.time.delta * 0.001);
  }
}
class xw {
  constructor() {
    (this.experience = new ye()),
      (this.room = this.experience.world.landingPage.room),
      (this.resources = this.experience.resources),
      this.setSprites(),
      P.delayedCall(2, () => this.startAnimations());
  }
  startAnimations() {
    this.moveSprite(0),
      P.delayedCall(1.5, () => this.moveSprite(1)),
      P.delayedCall(3, () => this.moveSprite(2));
  }
  setSprites() {
    (this.materials = [
      new Pn({
        map: this.resources.items.tone0Texture,
        alphaTest: 0.1,
        opacity: 0,
        fog: !1,
      }),
      new Pn({
        map: this.resources.items.tone1Texture,
        alphaTest: 0.1,
        opacity: 0,
        fog: !1,
      }),
      new Pn({
        map: this.resources.items.tone2Texture,
        alphaTest: 0.1,
        opacity: 0,
        fog: !1,
      }),
    ]),
      (this.sprites = [
        new _i(this.materials[0]),
        new _i(this.materials[1]),
        new _i(this.materials[2]),
      ]),
      this.sprites.forEach((e) => {
        e.scale.set(0.3, 0.3, 0.3),
          e.position.set(-1.2, 2, -1.9),
          this.room.model.add(e);
      });
  }
  moveSprite(e) {
    if (this.experience.sounds.active) {
      const t = this.sprites[e];
      P.fromTo(
        t.material,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      ),
        P.fromTo(
          t.material,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 0.5,
            delay: 2.5,
          }
        ),
        P.fromTo(
          t.material,
          {
            rotation: -0.15,
          },
          {
            rotation: 0.15,
            duration: 1,
            repeat: 4,
            yoyo: !0,
            ease: Uf.easeInOut,
          }
        ),
        P.fromTo(
          t.position,
          {
            y: 2,
            x: -1.9,
          },
          {
            y: 3.5,
            x: -0.9 - Math.random() * 2,
            duration: 3,
            ease: Hf.easeNone,
          }
        );
    }
    P.delayedCall(3, () => P.delayedCall(2, () => this.moveSprite(e)));
  }
}
class vw {
  constructor() {
    (this.experience = new ye()),
      (this.room = this.experience.world.landingPage.room),
      (this.sounds = this.experience.sounds),
      (this.model = this.room.speaker),
      (this.model.hoverIcon = "pointer"),
      (this.model.onClick = () => this.clickEvent()),
      window.requestAnimationFrame(() => {
        const e = this.experience.ui.menu.main;
        e.on("open", () => {
          (this.model.hoverIcon = null), (this.model.onClick = null);
        }),
          e.on("hide", () => {
            (this.model.hoverIcon = "pointer"),
              (this.model.onClick = () => this.clickEvent());
          });
      });
  }
  clickEvent() {
    if (!this.experience.ui.intro.clickCTAVisible) {
      const e = this.experience.ui.soundButton;
      e.active ? e.deactivate() : e.activate(), this.sounds.play("buttonClick");
    }
  }
}
class bw {
  constructor() {
    (this.experience = new ye()),
      (this.sounds = this.experience.sounds),
      (this.resources = this.experience.resources),
      (this.room = this.experience.world.landingPage.room),
      (this.model = this.experience.world.landingPage.room.penguin),
      (this.wings = [this.model.children[0], this.model.children[1]]),
      this.setHeart(),
      (this.model.hoverIcon = "pointer"),
      (this.model.onClick = () => this.jump());
  }
  setHeart() {
    (this.heartMaterial = new Pn({
      map: this.resources.items.heartTexture,
      alphaTest: 0.1,
      opacity: 0,
      fog: !1,
      rotation: 0.2,
    })),
      (this.heart = new _i(this.heartMaterial)),
      this.heart.position.set(
        this.model.position.x + 0.07,
        2.2,
        this.model.position.z + 0.07
      ),
      this.heart.scale.set(0.25, 0.25, 0.25),
      this.room.model.add(this.heart);
  }
  jump() {
    this.isJumping ||
      ((this.isJumping = !0),
      P.delayedCall(0.8, () => (this.isJumping = !1)),
      P.to(this.model.position, {
        y: 2,
        yoyo: !0,
        repeat: 1,
        duration: 0.4,
      }),
      P.to(this.wings[0].rotation, {
        x: 0.4,
        duration: 0.1,
        repeat: 7,
        yoyo: !0,
      }),
      P.to(this.wings[1].rotation, {
        x: -0.4,
        duration: 0.1,
        repeat: 7,
        yoyo: !0,
      }),
      this.sounds.play("bird"),
      this.animateHeart());
  }
  animateHeart() {
    P.fromTo(
      this.heart.position,
      {
        x: this.model.position.x + 0.03,
        y: 2.15,
        z: this.model.position.z + 0.03,
      },
      {
        x: this.model.position.x + 0.1,
        y: 2.7,
        z: this.model.position.z + 0.1,
        duration: 0.8,
        ease: et.easeOut,
      }
    ),
      P.fromTo(
        this.heartMaterial,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
        }
      ),
      P.fromTo(
        this.heartMaterial,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.3,
          delay: 0.5,
        }
      );
  }
}
class ww {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      this.resources.on("ready", () => {
        (this.fog = new fw()),
          (this.background = new aw()),
          (this.landingPage = {}),
          (this.landingPage.roomShadow = new Yb()),
          (this.landingPage.room = new jb()),
          (this.landingPage.desktops = new Jb()),
          (this.landingPage.mouse = new lw()),
          (this.landingPage.messagePopUp = new cw()),
          (this.landingPage.tones = new xw()),
          (this.landingPage.speaker = new vw()),
          (this.landingPage.penguin = new bw()),
          (this.lab = {}),
          (this.lab.model = new Kb()),
          (this.lab.shadow = new Zb()),
          (this.lab.tube = new ew()),
          (this.lab.screen = new tw()),
          (this.lab.drop = new nw()),
          (this.lab.bubbles = new iw()),
          (this.lab.testTubes = new sw()),
          (this.contact = {}),
          (this.contact.scene = new hw()),
          (this.contact.shadow = new uw()),
          (this.contact.david = new dw()),
          (this.character = {}),
          (this.character.body = new mw()),
          (this.character.face = new gw()),
          (this.character.animations = new yw()),
          (this.character.intervals = new _w()),
          (this.contact.animation = new pw());
      });
  }
  update() {
    this.character &&
      (this.character.animations && this.character.animations.update(),
      this.character.intervals && this.character.intervals.update(),
      this.character.body && this.character.body.update()),
      this.lab && this.lab.screen && this.lab.screen.update();
  }
}
class Mw extends Bn {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new Aw(t);
      }),
      this.register(function (t) {
        return new Dw(t);
      }),
      this.register(function (t) {
        return new kw(t);
      }),
      this.register(function (t) {
        return new Cw(t);
      }),
      this.register(function (t) {
        return new Lw(t);
      }),
      this.register(function (t) {
        return new Rw(t);
      }),
      this.register(function (t) {
        return new Pw(t);
      }),
      this.register(function (t) {
        return new Iw(t);
      }),
      this.register(function (t) {
        return new Tw(t);
      }),
      this.register(function (t) {
        return new Fw(t);
      });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    this.resourcePath !== ""
      ? (r = this.resourcePath)
      : this.path !== ""
      ? (r = this.path)
      : (r = xi.extractUrlBase(e)),
      this.manager.itemStart(e);
    const a = function (h) {
        i ? i(h) : console.error(h),
          s.manager.itemError(e),
          s.manager.itemEnd(e);
      },
      c = new _a(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (h) {
          try {
            s.parse(
              h,
              r,
              function (d) {
                t(d), s.manager.itemEnd(e);
              },
              a
            );
          } catch (d) {
            a(d);
          }
        },
        n,
        a
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let s;
    const r = {},
      a = {};
    if (typeof e == "string") s = e;
    else if (xi.decodeText(new Uint8Array(e, 0, 4)) === Qf) {
      try {
        r[Ne.KHR_BINARY_GLTF] = new Bw(e);
      } catch (l) {
        i && i(l);
        return;
      }
      s = r[Ne.KHR_BINARY_GLTF].content;
    } else s = xi.decodeText(new Uint8Array(e));
    const c = JSON.parse(s);
    if (c.asset === void 0 || c.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const h = new Jw(c, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    h.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const l = this.pluginCallbacks[d](h);
      (a[l.name] = l), (r[l.name] = !0);
    }
    if (c.extensionsUsed)
      for (let d = 0; d < c.extensionsUsed.length; ++d) {
        const l = c.extensionsUsed[d],
          u = c.extensionsRequired || [];
        switch (l) {
          case Ne.KHR_MATERIALS_UNLIT:
            r[l] = new Ew();
            break;
          case Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            r[l] = new zw();
            break;
          case Ne.KHR_DRACO_MESH_COMPRESSION:
            r[l] = new Ow(c, this.dracoLoader);
            break;
          case Ne.KHR_TEXTURE_TRANSFORM:
            r[l] = new Nw();
            break;
          case Ne.KHR_MESH_QUANTIZATION:
            r[l] = new Hw();
            break;
          default:
            u.indexOf(l) >= 0 &&
              a[l] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    h.setExtensions(r), h.setPlugins(a), h.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.parse(e, t, i, s);
    });
  }
}

function Sw() {
  let o = {};
  return {
    get: function (e) {
      return o[e];
    },
    add: function (e, t) {
      o[e] = t;
    },
    remove: function (e) {
      delete o[e];
    },
    removeAll: function () {
      o = {};
    },
  };
}
const Ne = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
};
class Tw {
  constructor(e) {
    (this.parser = e),
      (this.name = Ne.KHR_LIGHTS_PUNCTUAL),
      (this.cache = {
        refs: {},
        uses: {},
      });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions &&
        s.extensions[this.name] &&
        s.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json,
      c = (((s.extensions && s.extensions[this.name]) || {}).lights || [])[e];
    let h;
    const d = new ie(16777215);
    c.color !== void 0 && d.fromArray(c.color);
    const l = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (h = new qd(d)), h.target.position.set(0, 0, -1), h.add(h.target);
        break;
      case "point":
        (h = new Vd(d)), (h.distance = l);
        break;
      case "spot":
        (h = new Ud(d)),
          (h.distance = l),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (h.angle = c.spot.outerConeAngle),
          (h.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          h.target.position.set(0, 0, -1),
          h.add(h.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      h.position.set(0, 0, 0),
      (h.decay = 2),
      c.intensity !== void 0 && (h.intensity = c.intensity),
      (h.name = t.createUniqueName(c.name || "light_" + e)),
      (i = Promise.resolve(h)),
      t.cache.add(n, i),
      i
    );
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      s = n.json.nodes[e],
      a = ((s.extensions && s.extensions[this.name]) || {}).light;
    return a === void 0
      ? null
      : this._loadLight(a).then(function (c) {
          return n._getNodeRef(t.cache, a, c);
        });
  }
}
class Ew {
  constructor() {
    this.name = Ne.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ht;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new ie(1, 1, 1)), (e.opacity = 1);
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.fromArray(r), (e.opacity = r[3]);
      }
      s.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", s.baseColorTexture, Ge));
    }
    return Promise.all(i);
  }
}
class Aw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      r = i.extensions[this.name];
    if (
      (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor),
      r.clearcoatTexture !== void 0 &&
        s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)),
      r.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = r.clearcoatRoughnessFactor),
      r.clearcoatRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            r.clearcoatRoughnessTexture
          )
        ),
      r.clearcoatNormalTexture !== void 0 &&
        (s.push(
          n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)
        ),
        r.clearcoatNormalTexture.scale !== void 0))
    ) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new te(a, a);
    }
    return Promise.all(s);
  }
}
class Cw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [];
    (t.sheenColor = new ie(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const r = i.extensions[this.name];
    return (
      r.sheenColorFactor !== void 0 &&
        t.sheenColor.fromArray(r.sheenColorFactor),
      r.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = r.sheenRoughnessFactor),
      r.sheenColorTexture !== void 0 &&
        s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Ge)),
      r.sheenRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)
        ),
      Promise.all(s)
    );
  }
}
class Lw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      r = i.extensions[this.name];
    return (
      r.transmissionFactor !== void 0 &&
        (t.transmission = r.transmissionFactor),
      r.transmissionTexture !== void 0 &&
        s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)),
      Promise.all(s)
    );
  }
}
class Rw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      r = i.extensions[this.name];
    (t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0),
      r.thicknessTexture !== void 0 &&
        s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)),
      (t.attenuationDistance = r.attenuationDistance || 0);
    const a = r.attenuationColor || [1, 1, 1];
    return (t.attenuationColor = new ie(a[0], a[1], a[2])), Promise.all(s);
  }
}
class Pw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return (t.ior = s.ior !== void 0 ? s.ior : 1.5), Promise.resolve();
  }
}
class Iw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Ei;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      r = i.extensions[this.name];
    (t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1),
      r.specularTexture !== void 0 &&
        s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new ie(a[0], a[1], a[2])),
      r.specularColorTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "specularColorMap", r.specularColorTexture, Ge)
        ),
      Promise.all(s)
    );
  }
}
class Dw {
  constructor(e) {
    (this.parser = e), (this.name = Ne.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const s = i.extensions[this.name],
      r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class kw {
  constructor(e) {
    (this.parser = e),
      (this.name = Ne.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const r = s.extensions[t],
      a = i.images[r.source];
    let c = n.textureLoader;
    if (a.uri) {
      const h = n.options.manager.getHandler(a.uri);
      h !== null && (c = h);
    }
    return this.detectSupport().then(function (h) {
      if (h) return n.loadTextureImage(e, r.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class Fw {
  constructor(e) {
    (this.name = Ne.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        s = this.parser.getDependency("buffer", i.buffer),
        r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return Promise.all([s, r.ready]).then(function (a) {
        const c = i.byteOffset || 0,
          h = i.byteLength || 0,
          d = i.count,
          l = i.byteStride,
          u = new ArrayBuffer(d * l),
          f = new Uint8Array(a[0], c, h);
        return (
          r.decodeGltfBuffer(new Uint8Array(u), d, l, f, i.mode, i.filter), u
        );
      });
    } else return null;
  }
}
const Qf = "glTF",
  br = 12,
  Nu = {
    JSON: 1313821514,
    BIN: 5130562,
  };
class Bw {
  constructor(e) {
    (this.name = Ne.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, br);
    if (
      ((this.header = {
        magic: xi.decodeText(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== Qf)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - br,
      i = new DataView(e, br);
    let s = 0;
    for (; s < n; ) {
      const r = i.getUint32(s, !0);
      s += 4;
      const a = i.getUint32(s, !0);
      if (((s += 4), a === Nu.JSON)) {
        const c = new Uint8Array(e, br + s, r);
        this.content = xi.decodeText(c);
      } else if (a === Nu.BIN) {
        const c = br + s;
        this.body = e.slice(c, c + r);
      }
      s += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ow {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = Ne.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      s = e.extensions[this.name].bufferView,
      r = e.extensions[this.name].attributes,
      a = {},
      c = {},
      h = {};
    for (const d in r) {
      const l = Kl[d] || d.toLowerCase();
      a[l] = r[d];
    }
    for (const d in e.attributes) {
      const l = Kl[d] || d.toLowerCase();
      if (r[d] !== void 0) {
        const u = n.accessors[e.attributes[d]],
          f = $r[u.componentType];
        (h[l] = f), (c[l] = u.normalized === !0);
      }
    }
    return t.getDependency("bufferView", s).then(function (d) {
      return new Promise(function (l) {
        i.decodeDracoFile(
          d,
          function (u) {
            for (const f in u.attributes) {
              const g = u.attributes[f],
                p = c[f];
              p !== void 0 && (g.normalized = p);
            }
            l(u);
          },
          a,
          h
        );
      });
    });
  }
}
class Nw {
  constructor() {
    this.name = Ne.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      t.texCoord !== void 0 &&
        console.warn(
          'THREE.GLTFLoader: Custom UV sets in "' +
            this.name +
            '" extension not yet supported.'
        ),
      (t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) ||
        ((e = e.clone()),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class Jl extends ar {
  constructor(e) {
    super(), (this.isGLTFSpecularGlossinessMaterial = !0);
    const t = [
        "#ifdef USE_SPECULARMAP",
        "	uniform sampler2D specularMap;",
        "#endif",
      ].join(`
`),
      n = [
        "#ifdef USE_GLOSSINESSMAP",
        "	uniform sampler2D glossinessMap;",
        "#endif",
      ].join(`
`),
      i = [
        "vec3 specularFactor = specular;",
        "#ifdef USE_SPECULARMAP",
        "	vec4 texelSpecular = texture2D( specularMap, vUv );",
        "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
        "	specularFactor *= texelSpecular.rgb;",
        "#endif",
      ].join(`
`),
      s = [
        "float glossinessFactor = glossiness;",
        "#ifdef USE_GLOSSINESSMAP",
        "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
        "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
        "	glossinessFactor *= texelGlossiness.a;",
        "#endif",
      ].join(`
`),
      r = [
        "PhysicalMaterial material;",
        "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
        "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
        "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
        "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
        "material.roughness += geometryRoughness;",
        "material.roughness = min( material.roughness, 1.0 );",
        "material.specularColor = specularFactor;",
      ].join(`
`),
      a = {
        specular: {
          value: new ie().setHex(16777215),
        },
        glossiness: {
          value: 1,
        },
        specularMap: {
          value: null,
        },
        glossinessMap: {
          value: null,
        },
      };
    (this._extraUniforms = a),
      (this.onBeforeCompile = function (c) {
        for (const h in a) c.uniforms[h] = a[h];
        c.fragmentShader = c.fragmentShader
          .replace("uniform float roughness;", "uniform vec3 specular;")
          .replace("uniform float metalness;", "uniform float glossiness;")
          .replace("#include <roughnessmap_pars_fragment>", t)
          .replace("#include <metalnessmap_pars_fragment>", n)
          .replace("#include <roughnessmap_fragment>", i)
          .replace("#include <metalnessmap_fragment>", s)
          .replace("#include <lights_physical_fragment>", r);
      }),
      Object.defineProperties(this, {
        specular: {
          get: function () {
            return a.specular.value;
          },
          set: function (c) {
            a.specular.value = c;
          },
        },
        specularMap: {
          get: function () {
            return a.specularMap.value;
          },
          set: function (c) {
            (a.specularMap.value = c),
              c
                ? (this.defines.USE_SPECULARMAP = "")
                : delete this.defines.USE_SPECULARMAP;
          },
        },
        glossiness: {
          get: function () {
            return a.glossiness.value;
          },
          set: function (c) {
            a.glossiness.value = c;
          },
        },
        glossinessMap: {
          get: function () {
            return a.glossinessMap.value;
          },
          set: function (c) {
            (a.glossinessMap.value = c),
              c
                ? ((this.defines.USE_GLOSSINESSMAP = ""),
                  (this.defines.USE_UV = ""))
                : (delete this.defines.USE_GLOSSINESSMAP,
                  delete this.defines.USE_UV);
          },
        },
      }),
      delete this.metalness,
      delete this.roughness,
      delete this.metalnessMap,
      delete this.roughnessMap,
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.specularMap = e.specularMap),
      this.specular.copy(e.specular),
      (this.glossinessMap = e.glossinessMap),
      (this.glossiness = e.glossiness),
      delete this.metalness,
      delete this.roughness,
      delete this.metalnessMap,
      delete this.roughnessMap,
      this
    );
  }
}
class zw {
  constructor() {
    (this.name = Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
      (this.specularGlossinessParams = [
        "color",
        "map",
        "lightMap",
        "lightMapIntensity",
        "aoMap",
        "aoMapIntensity",
        "emissive",
        "emissiveIntensity",
        "emissiveMap",
        "bumpMap",
        "bumpScale",
        "normalMap",
        "normalMapType",
        "displacementMap",
        "displacementScale",
        "displacementBias",
        "specularMap",
        "specular",
        "glossinessMap",
        "glossiness",
        "alphaMap",
        "envMap",
        "envMapIntensity",
      ]);
  }
  getMaterialType() {
    return Jl;
  }
  extendParams(e, t, n) {
    const i = t.extensions[this.name];
    (e.color = new ie(1, 1, 1)), (e.opacity = 1);
    const s = [];
    if (Array.isArray(i.diffuseFactor)) {
      const r = i.diffuseFactor;
      e.color.fromArray(r), (e.opacity = r[3]);
    }
    if (
      (i.diffuseTexture !== void 0 &&
        s.push(n.assignTexture(e, "map", i.diffuseTexture, Ge)),
      (e.emissive = new ie(0, 0, 0)),
      (e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1),
      (e.specular = new ie(1, 1, 1)),
      Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor),
      i.specularGlossinessTexture !== void 0)
    ) {
      const r = i.specularGlossinessTexture;
      s.push(n.assignTexture(e, "glossinessMap", r)),
        s.push(n.assignTexture(e, "specularMap", r, Ge));
    }
    return Promise.all(s);
  }
  createMaterial(e) {
    const t = new Jl(e);
    return (
      (t.fog = !0),
      (t.color = e.color),
      (t.map = e.map === void 0 ? null : e.map),
      (t.lightMap = null),
      (t.lightMapIntensity = 1),
      (t.aoMap = e.aoMap === void 0 ? null : e.aoMap),
      (t.aoMapIntensity = 1),
      (t.emissive = e.emissive),
      (t.emissiveIntensity = 1),
      (t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap),
      (t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap),
      (t.bumpScale = 1),
      (t.normalMap = e.normalMap === void 0 ? null : e.normalMap),
      (t.normalMapType = es),
      e.normalScale && (t.normalScale = e.normalScale),
      (t.displacementMap = null),
      (t.displacementScale = 1),
      (t.displacementBias = 0),
      (t.specularMap = e.specularMap === void 0 ? null : e.specularMap),
      (t.specular = e.specular),
      (t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap),
      (t.glossiness = e.glossiness),
      (t.alphaMap = null),
      (t.envMap = e.envMap === void 0 ? null : e.envMap),
      (t.envMapIntensity = 1),
      t
    );
  }
}
class Hw {
  constructor() {
    this.name = Ne.KHR_MESH_QUANTIZATION;
  }
}
class Qi extends $n {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i * 3 + i;
    for (let r = 0; r !== i; r++) t[r] = n[s + r];
    return t;
  }
}
Qi.prototype.beforeStart_ = Qi.prototype.copySampleValue_;
Qi.prototype.afterEnd_ = Qi.prototype.copySampleValue_;
Qi.prototype.interpolate_ = function (o, e, t, n) {
  const i = this.resultBuffer,
    s = this.sampleValues,
    r = this.valueSize,
    a = r * 2,
    c = r * 3,
    h = n - e,
    d = (t - e) / h,
    l = d * d,
    u = l * d,
    f = o * c,
    g = f - c,
    p = -2 * u + 3 * l,
    m = u - l,
    _ = 1 - p,
    y = m - l + d;
  for (let b = 0; b !== r; b++) {
    const w = s[g + b + r],
      x = s[g + b + a] * h,
      E = s[f + b + r],
      T = s[f + b] * h;
    i[b] = _ * w + y * x + p * E + m * T;
  }
  return i;
};
const Uw = new Ut();
class Gw extends Qi {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Uw.fromArray(s).normalize().toArray(s), s;
  }
}
const Vn = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  $r = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  zu = {
    9728: bt,
    9729: It,
    9984: Ml,
    9985: Zu,
    9986: Sl,
    9987: ir,
  },
  Hu = {
    33071: sn,
    33648: Vo,
    10497: Ji,
  },
  Uu = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16,
  },
  Kl = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  hi = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  Vw = {
    CUBICSPLINE: void 0,
    LINEAR: Ys,
    STEP: Br,
  },
  yl = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND",
  };

function Ww(o) {
  return (
    o.DefaultMaterial === void 0 &&
      (o.DefaultMaterial = new ar({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Ws,
      })),
    o.DefaultMaterial
  );
}

function wr(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}

function Oi(o, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(o.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}

function qw(o, e, t) {
  let n = !1,
    i = !1,
    s = !1;
  for (let h = 0, d = e.length; h < d; h++) {
    const l = e[h];
    if (
      (l.POSITION !== void 0 && (n = !0),
      l.NORMAL !== void 0 && (i = !0),
      l.COLOR_0 !== void 0 && (s = !0),
      n && i && s)
    )
      break;
  }
  if (!n && !i && !s) return Promise.resolve(o);
  const r = [],
    a = [],
    c = [];
  for (let h = 0, d = e.length; h < d; h++) {
    const l = e[h];
    if (n) {
      const u =
        l.POSITION !== void 0
          ? t.getDependency("accessor", l.POSITION)
          : o.attributes.position;
      r.push(u);
    }
    if (i) {
      const u =
        l.NORMAL !== void 0
          ? t.getDependency("accessor", l.NORMAL)
          : o.attributes.normal;
      a.push(u);
    }
    if (s) {
      const u =
        l.COLOR_0 !== void 0
          ? t.getDependency("accessor", l.COLOR_0)
          : o.attributes.color;
      c.push(u);
    }
  }
  return Promise.all([Promise.all(r), Promise.all(a), Promise.all(c)]).then(
    function (h) {
      const d = h[0],
        l = h[1],
        u = h[2];
      return (
        n && (o.morphAttributes.position = d),
        i && (o.morphAttributes.normal = l),
        s && (o.morphAttributes.color = u),
        (o.morphTargetsRelative = !0),
        o
      );
    }
  );
}

function Xw(o, e) {
  if ((o.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}

function jw(o) {
  const e = o.extensions && o.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return (
    e
      ? (t = "draco:" + e.bufferView + ":" + e.indices + ":" + Gu(e.attributes))
      : (t = o.indices + ":" + Gu(o.attributes) + ":" + o.mode),
    t
  );
}

function Gu(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + o[t[n]] + ";";
  return e;
}

function Zl(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}

function Yw(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
class Jw {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new Sw()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.meshCache = {
        refs: {},
        uses: {},
      }),
      (this.cameraCache = {
        refs: {},
        uses: {},
      }),
      (this.lightCache = {
        refs: {},
        uses: {},
      }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {}),
      typeof createImageBitmap < "u" &&
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1
        ? (this.textureLoader = new jd(this.options.manager))
        : (this.textureLoader = new yc(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new _a(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      s = this.extensions;
    this.cache.removeAll(),
      this._invokeAll(function (r) {
        return r._markDefs && r._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (r) {
          return r.beforeRoot && r.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (r) {
          const a = {
            scene: r[0][i.scene || 0],
            scenes: r[0],
            animations: r[1],
            cameras: r[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          wr(s, a, i),
            Oi(a, i),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(a);
              })
            ).then(function () {
              e(a);
            });
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let a = 0, c = r.length; a < c; a++) e[r[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, r.mesh),
        r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
        r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      s = (r, a) => {
        const c = this.associations.get(r);
        c != null && this.associations.set(a, c);
        for (const [h, d] of r.children.entries()) s(d, a.children[h]);
      };
    return s(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this.loadNode(t);
          break;
        case "mesh":
          i = this._invokeOne(function (s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this.loadAnimation(t);
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (s, r) {
          return n.getDependency(e, r);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (s, r) {
      n.load(xi.resolveURL(t.uri, i.path), s, void 0, function () {
        r(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0)
      return Promise.resolve(null);
    const s = [];
    return (
      i.bufferView !== void 0
        ? s.push(this.getDependency("bufferView", i.bufferView))
        : s.push(null),
      i.sparse !== void 0 &&
        (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        s.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(s).then(function (r) {
        const a = r[0],
          c = Uu[i.type],
          h = $r[i.componentType],
          d = h.BYTES_PER_ELEMENT,
          l = d * c,
          u = i.byteOffset || 0,
          f =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let p, m;
        if (f && f !== l) {
          const _ = Math.floor(u / f),
            y =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              _ +
              ":" +
              i.count;
          let b = t.cache.get(y);
          b ||
            ((p = new h(a, _ * f, (i.count * f) / d)),
            (b = new rr(p, f / d)),
            t.cache.add(y, b)),
            (m = new Ks(b, c, (u % f) / d, g));
        } else a === null ? (p = new h(i.count * c)) : (p = new h(a, u, i.count * c)), (m = new ft(p, c, g));
        if (i.sparse !== void 0) {
          const _ = Uu.SCALAR,
            y = $r[i.sparse.indices.componentType],
            b = i.sparse.indices.byteOffset || 0,
            w = i.sparse.values.byteOffset || 0,
            x = new y(r[1], b, i.sparse.count * _),
            E = new h(r[2], w, i.sparse.count * c);
          a !== null && (m = new ft(m.array.slice(), m.itemSize, m.normalized));
          for (let T = 0, R = x.length; T < R; T++) {
            const I = x[T];
            if (
              (m.setX(I, E[T * c]),
              c >= 2 && m.setY(I, E[T * c + 1]),
              c >= 3 && m.setZ(I, E[T * c + 2]),
              c >= 4 && m.setW(I, E[T * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return m;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      s = t.textures[e].source,
      r = t.images[s];
    let a = this.textureLoader;
    if (r.uri) {
      const c = n.manager.getHandler(r.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      s = this.json,
      r = s.textures[e],
      a = s.images[t],
      c = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const h = this.loadImageSource(t, n)
      .then(function (d) {
        (d.flipY = !1), r.name && (d.name = r.name);
        const u = (s.samplers || {})[r.sampler] || {};
        return (
          (d.magFilter = zu[u.magFilter] || It),
          (d.minFilter = zu[u.minFilter] || ir),
          (d.wrapS = Hu[u.wrapS] || Ji),
          (d.wrapT = Hu[u.wrapT] || Ji),
          i.associations.set(d, {
            textures: e,
          }),
          d
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = h), h;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const r = i.images[e],
      a = self.URL || self.webkitURL;
    let c = r.uri || "",
      h = !1;
    if (r.bufferView !== void 0)
      c = n.getDependency("bufferView", r.bufferView).then(function (l) {
        h = !0;
        const u = new Blob([l], {
          type: r.mimeType,
        });
        return (c = a.createObjectURL(u)), c;
      });
    else if (r.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const d = Promise.resolve(c)
      .then(function (l) {
        return new Promise(function (u, f) {
          let g = u;
          t.isImageBitmapLoader === !0 &&
            (g = function (p) {
              const m = new xt(p);
              (m.needsUpdate = !0), u(m);
            }),
            t.load(xi.resolveURL(l, s.path), g, void 0, f);
        });
      })
      .then(function (l) {
        return (
          h === !0 && a.revokeObjectURL(c),
          (l.userData.mimeType = r.mimeType || Yw(r.uri)),
          l
        );
      })
      .catch(function (l) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), l);
      });
    return (this.sourceCache[e] = d), d;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function (r) {
      if (
        (n.texCoord !== void 0 &&
          n.texCoord != 0 &&
          !(t === "aoMap" && n.texCoord == 1) &&
          console.warn(
            "THREE.GLTFLoader: Custom UV set " +
              n.texCoord +
              " for texture " +
              t +
              " not yet supported."
          ),
        s.extensions[Ne.KHR_TEXTURE_TRANSFORM])
      ) {
        const a =
          n.extensions !== void 0
            ? n.extensions[Ne.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (a) {
          const c = s.associations.get(r);
          (r = s.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(r, a)),
            s.associations.set(r, c);
        }
      }
      return i !== void 0 && (r.encoding = i), (e[t] = r), r;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      s = t.attributes.color !== void 0,
      r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c ||
        ((c = new fa()),
        dt.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(a, c)),
        (n = c);
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c ||
        ((c = new os()),
        dt.prototype.copy.call(c, n),
        c.color.copy(n.color),
        this.cache.add(a, c)),
        (n = c);
    }
    if (i || s || r) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      n.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"),
        i && (a += "derivative-tangents:"),
        s && (a += "vertex-colors:"),
        r && (a += "flat-shading:");
      let c = this.cache.get(a);
      c ||
        ((c = n.clone()),
        s && (c.vertexColors = !0),
        r && (c.flatShading = !0),
        i &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(a, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    n.aoMap &&
      t.attributes.uv2 === void 0 &&
      t.attributes.uv !== void 0 &&
      t.setAttribute("uv2", t.attributes.uv),
      (e.material = n);
  }
  getMaterialType() {
    return ar;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.materials[e];
    let r;
    const a = {},
      c = s.extensions || {},
      h = [];
    if (c[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const l = i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      (r = l.getMaterialType()), h.push(l.extendParams(a, s, t));
    } else if (c[Ne.KHR_MATERIALS_UNLIT]) {
      const l = i[Ne.KHR_MATERIALS_UNLIT];
      (r = l.getMaterialType()), h.push(l.extendParams(a, s, t));
    } else {
      const l = s.pbrMetallicRoughness || {};
      if (
        ((a.color = new ie(1, 1, 1)),
        (a.opacity = 1),
        Array.isArray(l.baseColorFactor))
      ) {
        const u = l.baseColorFactor;
        a.color.fromArray(u), (a.opacity = u[3]);
      }
      l.baseColorTexture !== void 0 &&
        h.push(t.assignTexture(a, "map", l.baseColorTexture, Ge)),
        (a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1),
        (a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1),
        l.metallicRoughnessTexture !== void 0 &&
          (h.push(
            t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)
          ),
          h.push(
            t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture)
          )),
        (r = this._invokeOne(function (u) {
          return u.getMaterialType && u.getMaterialType(e);
        })),
        h.push(
          Promise.all(
            this._invokeAll(function (u) {
              return u.extendMaterialParams && u.extendMaterialParams(e, a);
            })
          )
        );
    }
    s.doubleSided === !0 && (a.side = Yi);
    const d = s.alphaMode || yl.OPAQUE;
    if (
      (d === yl.BLEND
        ? ((a.transparent = !0), (a.depthWrite = !1))
        : ((a.transparent = !1),
          d === yl.MASK &&
            (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)),
      s.normalTexture !== void 0 &&
        r !== ht &&
        (h.push(t.assignTexture(a, "normalMap", s.normalTexture)),
        (a.normalScale = new te(1, 1)),
        s.normalTexture.scale !== void 0))
    ) {
      const l = s.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    return (
      s.occlusionTexture !== void 0 &&
        r !== ht &&
        (h.push(t.assignTexture(a, "aoMap", s.occlusionTexture)),
        s.occlusionTexture.strength !== void 0 &&
          (a.aoMapIntensity = s.occlusionTexture.strength)),
      s.emissiveFactor !== void 0 &&
        r !== ht &&
        (a.emissive = new ie().fromArray(s.emissiveFactor)),
      s.emissiveTexture !== void 0 &&
        r !== ht &&
        h.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Ge)),
      Promise.all(h).then(function () {
        let l;
        return (
          r === Jl
            ? (l =
                i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a))
            : (l = new r(a)),
          s.name && (l.name = s.name),
          Oi(l, s),
          t.associations.set(l, {
            materials: e,
          }),
          s.extensions && wr(i, l, s),
          l
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Xe.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
    return (this.nodeNamesUsed[n] = !0), n;
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;

    function s(a) {
      return n[Ne.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(a, t)
        .then(function (c) {
          return Vu(c, a, t);
        });
    }
    const r = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const h = e[a],
        d = jw(h),
        l = i[d];
      if (l) r.push(l.promise);
      else {
        let u;
        h.extensions && h.extensions[Ne.KHR_DRACO_MESH_COMPRESSION]
          ? (u = s(h))
          : (u = Vu(new tt(), h, t)),
          (i[d] = {
            primitive: h,
            promise: u,
          }),
          r.push(u);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.meshes[e],
      r = s.primitives,
      a = [];
    for (let c = 0, h = r.length; c < h; c++) {
      const d =
        r[c].material === void 0
          ? Ww(this.cache)
          : this.getDependency("material", r[c].material);
      a.push(d);
    }
    return (
      a.push(t.loadGeometries(r)),
      Promise.all(a).then(function (c) {
        const h = c.slice(0, c.length - 1),
          d = c[c.length - 1],
          l = [];
        for (let f = 0, g = d.length; f < g; f++) {
          const p = d[f],
            m = r[f];
          let _;
          const y = h[f];
          if (
            m.mode === Vn.TRIANGLES ||
            m.mode === Vn.TRIANGLE_STRIP ||
            m.mode === Vn.TRIANGLE_FAN ||
            m.mode === void 0
          )
            (_ = s.isSkinnedMesh === !0 ? new cc(p, y) : new St(p, y)),
              _.isSkinnedMesh === !0 &&
                !_.geometry.attributes.skinWeight.normalized &&
                _.normalizeSkinWeights(),
              m.mode === Vn.TRIANGLE_STRIP
                ? (_.geometry = Wu(_.geometry, nm))
                : m.mode === Vn.TRIANGLE_FAN &&
                  (_.geometry = Wu(_.geometry, Qu));
          else if (m.mode === Vn.LINES) _ = new da(p, y);
          else if (m.mode === Vn.LINE_STRIP) _ = new ua(p, y);
          else if (m.mode === Vn.LINE_LOOP) _ = new vd(p, y);
          else if (m.mode === Vn.POINTS) _ = new bd(p, y);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode
            );
          Object.keys(_.geometry.morphAttributes).length > 0 && Xw(_, s),
            (_.name = t.createUniqueName(s.name || "mesh_" + e)),
            Oi(_, s),
            m.extensions && wr(i, _, m),
            t.assignFinalMaterial(_),
            l.push(_);
        }
        for (let f = 0, g = l.length; f < g; f++)
          t.associations.set(l[f], {
            meshes: e,
            primitives: f,
          });
        if (l.length === 1) return l[0];
        const u = new Yn();
        t.associations.set(u, {
          meshes: e,
        });
        for (let f = 0, g = l.length; f < g; f++) u.add(l[f]);
        return u;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new Dt(
            wm.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new la(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      Oi(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = {
        joints: t.joints,
      };
    return t.inverseBindMatrices === void 0
      ? Promise.resolve(n)
      : this.getDependency("accessor", t.inverseBindMatrices).then(function (
          i
        ) {
          return (n.inverseBindMatrices = i), n;
        });
  }
  loadAnimation(e) {
    const n = this.json.animations[e],
      i = [],
      s = [],
      r = [],
      a = [],
      c = [];
    for (let h = 0, d = n.channels.length; h < d; h++) {
      const l = n.channels[h],
        u = n.samplers[l.sampler],
        f = l.target,
        g = f.node !== void 0 ? f.node : f.id,
        p = n.parameters !== void 0 ? n.parameters[u.input] : u.input,
        m = n.parameters !== void 0 ? n.parameters[u.output] : u.output;
      i.push(this.getDependency("node", g)),
        s.push(this.getDependency("accessor", p)),
        r.push(this.getDependency("accessor", m)),
        a.push(u),
        c.push(f);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(r),
      Promise.all(a),
      Promise.all(c),
    ]).then(function (h) {
      const d = h[0],
        l = h[1],
        u = h[2],
        f = h[3],
        g = h[4],
        p = [];
      for (let _ = 0, y = d.length; _ < y; _++) {
        const b = d[_],
          w = l[_],
          x = u[_],
          E = f[_],
          T = g[_];
        if (b === void 0) continue;
        b.updateMatrix(), (b.matrixAutoUpdate = !0);
        let R;
        switch (hi[T.path]) {
          case hi.weights:
            R = Vr;
            break;
          case hi.rotation:
            R = Zi;
            break;
          case hi.position:
          case hi.scale:
          default:
            R = Wr;
            break;
        }
        const I = b.name ? b.name : b.uuid,
          B = E.interpolation !== void 0 ? Vw[E.interpolation] : Ys,
          v = [];
        hi[T.path] === hi.weights
          ? b.traverse(function (U) {
              U.morphTargetInfluences && v.push(U.name ? U.name : U.uuid);
            })
          : v.push(I);
        let L = x.array;
        if (x.normalized) {
          const U = Zl(L.constructor),
            D = new Float32Array(L.length);
          for (let O = 0, N = L.length; O < N; O++) D[O] = L[O] * U;
          L = D;
        }
        for (let U = 0, D = v.length; U < D; U++) {
          const O = new R(v[U] + "." + hi[T.path], w.array, L, B);
          E.interpolation === "CUBICSPLINE" &&
            ((O.createInterpolant = function (H) {
              const F = this instanceof Zi ? Gw : Qi;
              return new F(this.times, this.values, this.getValueSize() / 3, H);
            }),
            (O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0)),
            p.push(O);
        }
      }
      const m = n.name ? n.name : "animation_" + e;
      return new Il(m, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (s) {
          const r = n._getNodeRef(n.meshCache, i.mesh, s);
          return (
            i.weights !== void 0 &&
              r.traverse(function (a) {
                if (a.isMesh)
                  for (let c = 0, h = i.weights.length; c < h; c++)
                    a.morphTargetInfluences[c] = i.weights[c];
              }),
            r
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this.extensions,
      i = this,
      s = t.nodes[e],
      r = s.name ? i.createUniqueName(s.name) : "";
    return (function () {
      const a = [],
        c = i._invokeOne(function (h) {
          return h.createNodeMesh && h.createNodeMesh(e);
        });
      return (
        c && a.push(c),
        s.camera !== void 0 &&
          a.push(
            i.getDependency("camera", s.camera).then(function (h) {
              return i._getNodeRef(i.cameraCache, s.camera, h);
            })
          ),
        i
          ._invokeAll(function (h) {
            return h.createNodeAttachment && h.createNodeAttachment(e);
          })
          .forEach(function (h) {
            a.push(h);
          }),
        Promise.all(a)
      );
    })().then(function (a) {
      let c;
      if (
        (s.isBone === !0
          ? (c = new hc())
          : a.length > 1
          ? (c = new Yn())
          : a.length === 1
          ? (c = a[0])
          : (c = new je()),
        c !== a[0])
      )
        for (let h = 0, d = a.length; h < d; h++) c.add(a[h]);
      if (
        (s.name && ((c.userData.name = s.name), (c.name = r)),
        Oi(c, s),
        s.extensions && wr(n, c, s),
        s.matrix !== void 0)
      ) {
        const h = new _e();
        h.fromArray(s.matrix), c.applyMatrix4(h);
      } else s.translation !== void 0 && c.position.fromArray(s.translation), s.rotation !== void 0 && c.quaternion.fromArray(s.rotation), s.scale !== void 0 && c.scale.fromArray(s.scale);
      return (
        i.associations.has(c) || i.associations.set(c, {}),
        (i.associations.get(c).nodes = e),
        c
      );
    });
  }
  loadScene(e) {
    const t = this.json,
      n = this.extensions,
      i = this.json.scenes[e],
      s = this,
      r = new Yn();
    i.name && (r.name = s.createUniqueName(i.name)),
      Oi(r, i),
      i.extensions && wr(n, r, i);
    const a = i.nodes || [],
      c = [];
    for (let h = 0, d = a.length; h < d; h++) c.push(ep(a[h], r, t, s));
    return Promise.all(c).then(function () {
      const h = (d) => {
        const l = new Map();
        for (const [u, f] of s.associations)
          (u instanceof dt || u instanceof xt) && l.set(u, f);
        return (
          d.traverse((u) => {
            const f = s.associations.get(u);
            f != null && l.set(u, f);
          }),
          l
        );
      };
      return (s.associations = h(r)), r;
    });
  }
}

function ep(o, e, t, n) {
  const i = t.nodes[o];
  return n
    .getDependency("node", o)
    .then(function (s) {
      if (i.skin === void 0) return s;
      let r;
      return n
        .getDependency("skin", i.skin)
        .then(function (a) {
          r = a;
          const c = [];
          for (let h = 0, d = r.joints.length; h < d; h++)
            c.push(n.getDependency("node", r.joints[h]));
          return Promise.all(c);
        })
        .then(function (a) {
          return (
            s.traverse(function (c) {
              if (!c.isMesh) return;
              const h = [],
                d = [];
              for (let l = 0, u = a.length; l < u; l++) {
                const f = a[l];
                if (f) {
                  h.push(f);
                  const g = new _e();
                  r.inverseBindMatrices !== void 0 &&
                    g.fromArray(r.inverseBindMatrices.array, l * 16),
                    d.push(g);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    r.joints[l]
                  );
              }
              c.bind(new uc(h, d), c.matrixWorld);
            }),
            s
          );
        });
    })
    .then(function (s) {
      e.add(s);
      const r = [];
      if (i.children) {
        const a = i.children;
        for (let c = 0, h = a.length; c < h; c++) {
          const d = a[c];
          r.push(ep(d, s, t, n));
        }
      }
      return Promise.all(r);
    });
}

function Kw(o, e, t) {
  const n = e.attributes,
    i = new dn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION],
      c = a.min,
      h = a.max;
    if (c !== void 0 && h !== void 0) {
      if (
        (i.set(new C(c[0], c[1], c[2]), new C(h[0], h[1], h[2])), a.normalized)
      ) {
        const d = Zl($r[a.componentType]);
        i.min.multiplyScalar(d), i.max.multiplyScalar(d);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new C(),
      c = new C();
    for (let h = 0, d = s.length; h < d; h++) {
      const l = s[h];
      if (l.POSITION !== void 0) {
        const u = t.json.accessors[l.POSITION],
          f = u.min,
          g = u.max;
        if (f !== void 0 && g !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))),
            c.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))),
            c.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))),
            u.normalized)
          ) {
            const p = Zl($r[u.componentType]);
            c.multiplyScalar(p);
          }
          a.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(a);
  }
  o.boundingBox = i;
  const r = new is();
  i.getCenter(r.center),
    (r.radius = i.min.distanceTo(i.max) / 2),
    (o.boundingSphere = r);
}

function Vu(o, e, t) {
  const n = e.attributes,
    i = [];

  function s(r, a) {
    return t.getDependency("accessor", r).then(function (c) {
      o.setAttribute(a, c);
    });
  }
  for (const r in n) {
    const a = Kl[r] || r.toLowerCase();
    a in o.attributes || i.push(s(n[r], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = t.getDependency("accessor", e.indices).then(function (a) {
      o.setIndex(a);
    });
    i.push(r);
  }
  return (
    Oi(o, e),
    Kw(o, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? qw(o, e.targets, t) : o;
    })
  );
}

function Wu(o, e) {
  let t = o.getIndex();
  if (t === null) {
    const r = [],
      a = o.getAttribute("position");
    if (a !== void 0) {
      for (let c = 0; c < a.count; c++) r.push(c);
      o.setIndex(r), (t = o.getIndex());
    } else
      return (
        console.error(
          "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ),
        o
      );
  }
  const n = t.count - 2,
    i = [];
  if (e === Qu)
    for (let r = 1; r <= n; r++)
      i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
  else
    for (let r = 0; r < n; r++)
      r % 2 === 0
        ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2)))
        : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
  i.length / 3 !== n &&
    console.error(
      "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
    );
  const s = o.clone();
  return s.setIndex(i), s;
}

export { Mw, ww };
