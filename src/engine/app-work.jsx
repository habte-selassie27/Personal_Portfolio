import { he } from "./preamble.jsx";
import { Ge } from "./three-01.jsx";
import { Bn, _a, yc } from "./three-09.jsx";
import { Tv } from "./three-10.jsx";
import { Ai } from "./three-11.jsx";
import { et, wi, yn } from "./gsap-tail.jsx";
import { P } from "./gsap-css-plugin.jsx";
import { Mw } from "./app-loader.jsx";
import { ye } from "./engine-main.jsx";
class Zw extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this,
      r = new _a(this.manager);
    r.setPath(this.path),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(s.withCredentials),
      r.load(
        e,
        function (a) {
          let c;
          try {
            c = JSON.parse(a);
          } catch {
            console.warn(
              "THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
            ),
              (c = JSON.parse(a.substring(65, a.length - 2)));
          }
          const h = s.parse(c);
          t && t(h);
        },
        n,
        i
      );
  }
  parse(e) {
    return new tp(e);
  }
}
class tp {
  constructor(e) {
    (this.type = "Font"), (this.data = e);
  }
  generateShapes(e, t = 100) {
    const n = [],
      i = $w(e, t, this.data);
    for (let s = 0, r = i.length; s < r; s++)
      Array.prototype.push.apply(n, i[s].toShapes());
    return n;
  }
}

function $w(o, e, t) {
  const n = Array.from(o),
    i = e / t.resolution,
    s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i,
    r = [];
  let a = 0,
    c = 0;
  for (let h = 0; h < n.length; h++) {
    const d = n[h];
    if (
      d ===
      `
`
    )
      (a = 0), (c -= s);
    else {
      const l = Qw(d, i, a, c, t);
      (a += l.offsetX), r.push(l.path);
    }
  }
  return r;
}

function Qw(o, e, t, n, i) {
  const s = i.glyphs[o] || i.glyphs["?"];
  if (!s) {
    console.error(
      'THREE.Font: character "' +
        o +
        '" does not exists in font family ' +
        i.familyName +
        "."
    );
    return;
  }
  const r = new Tv();
  let a, c, h, d, l, u, f, g;
  if (s.o) {
    const p = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let m = 0, _ = p.length; m < _; )
      switch (p[m++]) {
        case "m":
          (a = p[m++] * e + t), (c = p[m++] * e + n), r.moveTo(a, c);
          break;
        case "l":
          (a = p[m++] * e + t), (c = p[m++] * e + n), r.lineTo(a, c);
          break;
        case "q":
          (h = p[m++] * e + t),
            (d = p[m++] * e + n),
            (l = p[m++] * e + t),
            (u = p[m++] * e + n),
            r.quadraticCurveTo(l, u, h, d);
          break;
        case "b":
          (h = p[m++] * e + t),
            (d = p[m++] * e + n),
            (l = p[m++] * e + t),
            (u = p[m++] * e + n),
            (f = p[m++] * e + t),
            (g = p[m++] * e + n),
            r.bezierCurveTo(l, u, f, g, h, d);
          break;
      }
  }
  return {
    offsetX: s.ha * e,
    path: r,
  };
}
tp.prototype.isFont = !0;
class eM extends Ai {
  constructor(t) {
    super();
    he(this, "loadingAnimation", document.getElementById("loading-animation"));
    he(this, "loadingRect", document.getElementById("loading-rect"));
    (this.experience = new ye()),
      (this.sources = t),
      (this.items = {}),
      (this.toLoad = this.sources.length),
      (this.loaded = 0),
      (this.textures = []),
      P.to(this.loadingRect, {
        y: 61,
        duration: 0,
      }),
      this.setLoaders(),
      this.startLoading();
  }
  setLoaders() {
    (this.loaders = {}),
      (this.loaders.gltfLoader = new Mw()),
      (this.loaders.textureLoader = new yc()),
      (this.loaders.fontLoader = new Zw());
  }
  startLoading() {
    for (const t of this.sources)
      t.type === "gltfModel"
        ? this.loaders.gltfLoader.load(t.path, (n) => {
            this.sourceLoaded(t, n);
          })
        : t.type === "texture" &&
          this.loaders.textureLoader.load(t.path, (n) => {
            this.sourceLoaded(t, n), (n.encoding = Ge), this.textures.push(n);
          });
  }
  sourceLoaded(t, n) {
    (this.items[t.name] = n),
      this.loaded++,
      this.updateLoadingAnimation(),
      this.loaded === this.toLoad &&
        (this.trigger("ready"), this.initTextures());
  }
  updateLoadingAnimation() {
    P.to(this.loadingRect, {
      y: 61 - 61 * (this.loaded / this.toLoad),
    });
  }
  initTextures() {
    this.textures.forEach((t) => {
      this.experience.renderer.instance.initTexture(t);
    });
  }
}
const tM = [
  {
    name: "roomModel",
    type: "gltfModel",
    path: "models/room/model.glb",
  },
  {
    name: "roomShadowModel",
    type: "gltfModel",
    path: "models/room/shadow-model.glb",
  },
  {
    name: "bakedRoomTexture",
    type: "texture",
    path: "models/room/baked.jpg",
  },
  {
    name: "bakedShadowRoomTexture",
    type: "texture",
    path: "models/room/shadow-baked.jpg",
  },
  {
    name: "tone0Texture",
    type: "texture",
    path: "textures/sprites/tone-0.png",
  },
  {
    name: "tone1Texture",
    type: "texture",
    path: "textures/sprites/tone-1.png",
  },
  {
    name: "tone2Texture",
    type: "texture",
    path: "textures/sprites/tone-2.png",
  },
  {
    name: "heartTexture",
    type: "texture",
    path: "textures/sprites/heart.png",
  },
  {
    name: "characterModel",
    type: "gltfModel",
    path: "models/character/model.glb",
  },
  {
    name: "shirtMatcap",
    type: "texture",
    path: "textures/matcaps/shirt.jpg",
  },
  {
    name: "skinMatcap",
    type: "texture",
    path: "textures/matcaps/skin.jpg",
  },
  {
    name: "pantsMatcap",
    type: "texture",
    path: "textures/matcaps/pants.jpg",
  },
  {
    name: "whiteMatcap",
    type: "texture",
    path: "textures/matcaps/white.jpg",
  },
  {
    name: "bakedCharacterHeadTexture",
    type: "texture",
    path: "models/character/head-baked.jpg",
  },
  {
    name: "characterDefaultFace",
    type: "texture",
    path: "models/character/faces/default.png",
  },
  {
    name: "characterBlink0Face",
    type: "texture",
    path: "models/character/faces/blink-0.png",
  },
  {
    name: "characterBlink1Face",
    type: "texture",
    path: "models/character/faces/blink-1.png",
  },
  {
    name: "characterSmile0Face",
    type: "texture",
    path: "models/character/faces/smile/0.png",
  },
  {
    name: "characterSmile1Face",
    type: "texture",
    path: "models/character/faces/smile/1.png",
  },
  {
    name: "characterSmile2Face",
    type: "texture",
    path: "models/character/faces/smile/2.png",
  },
  {
    name: "characterScaredFace",
    type: "texture",
    path: "models/character/faces/scared.png",
  },
  {
    name: "characterSleepyFace",
    type: "texture",
    path: "models/character/faces/sleepy.png",
  },
  {
    name: "characterContact1Face",
    type: "texture",
    path: "models/character/faces/contact/1.png",
  },
  {
    name: "characterContact2Face",
    type: "texture",
    path: "models/character/faces/contact/2.png",
  },
  {
    name: "desktop0",
    type: "texture",
    path: "models/room/desktops/0.png",
  },
  {
    name: "desktop1",
    type: "texture",
    path: "models/room/desktops/1.png",
  },
  {
    name: "newMessageSprite",
    type: "texture",
    path: "textures/sprites/new-message.png",
  },
  {
    name: "desktop1Notification",
    type: "texture",
    path: "models/room/desktops/1-notification.png",
  },
  {
    name: "labModel",
    type: "gltfModel",
    path: "models/lab/model.glb",
  },
  {
    name: "labShadowModel",
    type: "gltfModel",
    path: "models/lab/shadow-model.glb",
  },
  {
    name: "bakedShadowLabTexture",
    type: "texture",
    path: "models/lab/shadow-baked.jpg",
  },
  {
    name: "bakedLabTexture",
    type: "texture",
    path: "models/lab/baked.jpg",
  },
  {
    name: "labScreenGraph",
    type: "texture",
    path: "models/lab/screen-graph.jpg",
  },
  {
    name: "labScreenOffline",
    type: "texture",
    path: "models/lab/screen-offline.jpg",
  },
  {
    name: "bubbleSprite",
    type: "texture",
    path: "textures/sprites/bubble.png",
  },
  {
    name: "bubblePopSprite",
    type: "texture",
    path: "textures/sprites/bubble-pop.png",
  },
  {
    name: "contactSceneModel",
    type: "gltfModel",
    path: "models/contact/model.glb",
  },
  {
    name: "bakedContactTexture",
    type: "texture",
    path: "models/contact/baked.jpg",
  },
  {
    name: "contactShadowModel",
    type: "gltfModel",
    path: "models/contact/shadow-model.glb",
  },
  {
    name: "bakedShadowContactTexture",
    type: "texture",
    path: "models/contact/shadow-baked.jpg",
  },
  {
    name: "davidImage",
    type: "texture",
    path: "images/david.png",
  },
];
class nM extends Ai {
  constructor() {
    super();
    he(this, "scrollAnimationDuration", 0.7);
    he(this, "visible", !0);
    he(this, "isAnimating", !1);
    he(this, "reopeningEnabled", !0);
    he(this, "domElements", {
      landingPage: document.getElementById("landing-page"),
      scrollContainer: document.getElementById("scroll-container"),
      logoWhiteBackground: document.getElementById("logo-white-background"),
      contentSvg: document.getElementById("landing-content-svg"),
      heading0: document.querySelectorAll(".landing-headline")[0],
      heading1: document.querySelectorAll(".landing-headline")[1],
      subheading: document.querySelector(".landing-subheading"),
      button: document.getElementById("landing-cta-button"),
      aboutMeButton: document.getElementById("landing-more-about-me"),
    });
    (this.experience = new ye()),
      (this.gestures = this.experience.gestures),
      (this.room = this.experience.world.landingPage.room),
      (this.background = this.experience.world.background),
      (this.renderer = this.experience.renderer),
      (this.character = this.experience.world.character),
      (this.scrollIcon = this.experience.ui.scrollIcon),
      (this.transiton = this.experience.ui.transition),
      (this.sounds = this.experience.sounds),
      (this.sizes = this.experience.sizes),
      (this.waypoints = this.experience.waypoints),
      (this.contactAnimation = this.experience.world.contact.animation),
      (this.intervals = this.experience.world.character.intervals),
      this.gestures.on("scroll-down", () => this.hide()),
      this.gestures.on("touch-down", () => this.hide()),
      this.waypoints.moveToWaypoint(
        this.sizes.portrait ? "landing-page-portrait" : "landing-page",
        !1
      ),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    this.visible &&
      this.waypoints.moveToWaypoint(
        this.sizes.portrait ? "landing-page-portrait" : "landing-page",
        !1
      );
  }
  playOpeningAnimation(t = 0) {
    P.fromTo(
      this.domElements.contentSvg,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: t,
        duration: 0.4,
      }
    ),
      this.sizes.portrait
        ? P.fromTo(
            this.domElements.contentSvg,
            {
              y: this.domElements.contentSvg.clientWidth * 0.6,
              scale: 0.6,
            },
            {
              y: 0,
              scale: 1,
              delay: t,
              duration: 0.6,
              ease: yn.easeOut.config(1.4),
            }
          )
        : P.fromTo(
            this.domElements.contentSvg,
            {
              x: this.domElements.contentSvg.clientWidth * 0.6,
              scale: 0.6,
            },
            {
              x: 0,
              scale: 1,
              delay: t,
              duration: 0.6,
              ease: yn.easeOut.config(1.4),
            }
          );
  }
  hide() {
    this.visible &&
      !this.isAnimating &&
      !this.experience.ui.menu.main.visible &&
      !this.experience.ui.menu.main.isAnimating &&
      !this.transiton.isShowing &&
      this.reopeningEnabled &&
      ((this.visible = !1),
      this.scrollIcon.kill(),
      this.intervals.killLeftDesktopIntervals(),
      this.lockScrolling(),
      this.sounds.muteGroup("landing", !0),
      this.sounds.muteGroup("lab", !1),
      this.room.bounceOut(),
      P.delayedCall(0.2, () => {
        (this.domElements.landingPage.style.top = "-100%"),
          (this.domElements.scrollContainer.style.top = "0"),
          this.waypoints.moveToWaypoint(
            this.sizes.portrait ? "scroll-start-portrait" : "scroll-start",
            !0,
            this.scrollAnimationDuration
          ),
          P.to(this.background.material.uniforms.uOffset, {
            value: -0.75,
            ease: et.easeInOut,
            duration: this.scrollAnimationDuration,
          }),
          P.to(this.domElements.logoWhiteBackground, {
            y: -window.innerHeight,
            ease: et.easeInOut,
            duration: this.scrollAnimationDuration,
          }),
          P.delayedCall(0.7, () =>
            this.experience.ui.scrollScrollIcon.fade(!0)
          ),
          P.delayedCall(0.7, () =>
            this.renderer.instance.setClearColor("#EFE7DC")
          ),
          (this.experience.ui.about.animations.hologramPlayed = !1),
          this.experience.ui.about.animations.playHologramAnimation(0.5),
          this.character.animations.play("fallDown", 0.35),
          P.to(this.character.body.model.position, {
            y: -18.95,
            duration: this.scrollAnimationDuration,
            ease: et.easeInOut,
          }),
          P.delayedCall(0.05, () => this.sounds.play("waterSplash")),
          (this.character.face.material.map =
            this.character.face.textures.scared),
          P.delayedCall(0.65, () =>
            this.character.animations.play("waterIdle", 1)
          ),
          P.delayedCall(0.05, () => {
            for (let n = 0; n < 5; n++)
              this.experience.world.lab.bubbles.spawnBubble(
                Math.random() * 1.8 + 1.2,
                "back"
              );
          }),
          (this.character.body.checkForWireframe = "down"),
          P.delayedCall(
            this.scrollAnimationDuration,
            () => (this.character.body.checkForWireframe = null)
          ),
          this.trigger("hide"),
          this.lockReopening();
      }));
  }
  show() {
    !this.visible &&
      !this.isAnimating &&
      !this.transiton.isShowing &&
      this.reopeningEnabled &&
      ((this.visible = !0),
      this.intervals.killLeftDesktopIntervals(),
      this.sounds.muteGroup("landing", !1, 1),
      this.sounds.muteGroup("lab", !0, 1),
      this.lockScrolling(),
      this.experience.ui.scrollScrollIcon.fade(!1),
      this.room.bounceIn(0.5),
      (this.domElements.landingPage.style.top = "0"),
      (this.domElements.scrollContainer.style.top = "100%"),
      this.waypoints.moveToWaypoint(
        this.sizes.portrait ? "landing-page-portrait" : "landing-page",
        !0,
        this.scrollAnimationDuration
      ),
      P.to(this.background.material.uniforms.uOffset, {
        value: -2.75,
        duration: this.scrollAnimationDuration,
        ease: et.easeInOut,
      }),
      P.to(this.domElements.logoWhiteBackground, {
        y: 0,
        ease: et.easeInOut,
        duration: this.scrollAnimationDuration,
      }),
      this.renderer.instance.setClearColor("#F5EFE6"),
      P.to(this.character.body.model.position, {
        y: -5.7,
        duration: this.scrollAnimationDuration,
        ease: et.easeInOut,
      }),
      this.character.animations.play("idle", 0.7),
      this.experience.world.landingPage.mouse.moveToIdleStartPositon(),
      (this.character.face.material.map = this.character.face.textures.default),
      (this.character.body.checkForWireframe = "up"),
      P.delayedCall(
        this.scrollAnimationDuration,
        () => (this.character.body.checkForWireframe = null)
      ),
      this.contactAnimation.resetCharacter(),
      this.sounds.play("waterUp"),
      this.trigger("show"),
      this.lockReopening());
  }
  lockScrolling() {
    (this.isAnimating = !0),
      P.delayedCall(
        this.scrollAnimationDuration + 0.2,
        () => (this.isAnimating = !1)
      );
  }
  lockReopening() {
    (this.reopeningEnabled = !1),
      P.delayedCall(
        this.scrollAnimationDuration + 0.5,
        () => (this.reopeningEnabled = !0)
      );
  }
}
class iM extends Ai {
  constructor() {
    super();
    he(this, "parameters", {
      multiplyTouchStrengthBy: () => (this.sizes.portrait, 2),
      scrollDuration: () => (this.sizes.touch ? 0.6 : 0.8),
      scrollEase: () => (this.sizes.touch, et.easeOut),
      verticalSwipeMaximumSinceStart: 250,
    });
    he(this, "scrollY", 0);
    he(this, "events", []);
    he(this, "domElements", {
      scrollContainer: document.getElementById("scroll-container"),
      logoWhiteBackground: document.getElementById("logo-white-background"),
    });
    (this.experience = new ye()),
      (this.camera = this.experience.camera),
      (this.sizes = this.experience.sizes),
      (this.landingPage = this.experience.ui.landingPage),
      (this.time = this.experience.time),
      (this.background = this.experience.world.background),
      (this.gestures = this.experience.gestures),
      (this.transition = this.experience.ui.transition),
      (this.sounds = this.experience.sounds),
      (this.waypoints = this.experience.waypoints),
      (this.scrollIcon = this.experience.ui.scrollScrollIcon),
      (this.contactScene = this.experience.world.contact.scene),
      (this.time = this.experience.time),
      (this.domElements.scrollContainer.style.top = "100%"),
      setTimeout(() =>
        this.domElements.scrollContainer.classList.add(
          "scroll-container-transitions"
        )
      ),
      this.setCameraRange(),
      this.setAboutContainerDetails(),
      this.setLogoOverlayHeight(),
      this.gestures.on("scroll-down", () => this.attemptScroll(1)),
      this.gestures.on("scroll-up", () => this.attemptScroll(-1)),
      this.gestures.on("touch-down", () => {
        this.experience.time.current - this.gestures.touchStartTime <
          this.parameters.verticalSwipeMaximumSinceStart &&
          this.attemptScroll(
            1,
            -this.gestures.touchDistanceY *
              this.parameters.multiplyTouchStrengthBy()
          );
      }),
      this.gestures.on("touch-up", () => {
        this.experience.time.current - this.gestures.touchStartTime <
          this.parameters.verticalSwipeMaximumSinceStart &&
          this.attemptScroll(
            -1,
            this.gestures.touchDistanceY *
              this.parameters.multiplyTouchStrengthBy()
          );
      }),
      this.landingPage.on("hide", () => {
        this.scrollY != 0 && (this.scrollY = 0);
      }),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange()),
      (this.previousTouchDistance = 0),
      window.addEventListener("touchmove", () => {
        if (
          !(
            Math.abs(
              this.gestures.mTouchStartY - event.changedTouches[0].clientY
            ) <
              Math.abs(
                this.gestures.mTouchStartX - event.changedTouches[0].clientX
              ) && this.experience.ui.work.cards.isCurrentSwipeElement
          )
        ) {
          const t =
            this.gestures.mTouchStartY -
            event.changedTouches[0].clientY -
            this.previousTouchDistance;
          (this.previousTouchDistance += t),
            this.attemptScroll(Math.sign(t), Math.abs(t));
        }
      }),
      window.addEventListener(
        "touchend",
        () => (this.previousTouchDistance = 0)
      ),
      this.stopScrollOnTouchStart();
  }
  attemptScroll(t, n = t * ((event.deltaY ? event.deltaY : 100 * t) * 0.9)) {
    this.scrollAllowed() &&
      (t == -1 && this.scrollY <= 20
        ? this.checkLandingPageOpening()
        : (this.scrollY != 0 || t == 1) &&
          (this.scrollY <
            this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) -
              window.innerHeight ||
            t == -1) &&
          ((this.scrollY += t * n),
          t == -1 && (this.lastWheelUp = this.time.current),
          this.performScroll(),
          this.scrollIcon.visible && this.scrollIcon.kill()),
      this.trigger(t == -1 ? "scroll-up" : "scroll-down"),
      document.activeElement.blur());
  }
  preventFromScrollingBottom() {
    return this.scrollY >=
      this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) -
        window.innerHeight
      ? this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) -
          window.innerHeight
      : this.scrollY;
  }
  performScroll(t = this.parameters.scrollDuration(), n = !1) {
    if (this.scrollAllowed() || n == "force") {
      this.contentScrollTo = this.preventFromScrollingBottom();
      let i = 0;
      this.scrollY > this.aboutContainer.offset || this.sizes.portrait
        ? this.sizes.portrait
          ? ((i =
              this.contentScrollTo /
              this.sizes.getAbsoluteHeight(this.domElements.scrollContainer)),
            this.sounds.labAmbienceScroll(
              this.scrollY / this.aboutContainer.height
            ))
          : ((i =
              (this.contentScrollTo - this.aboutContainer.offset) /
              (this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) -
                this.aboutContainer.height)),
            this.sounds.labAmbienceScroll(
              (this.contentScrollTo - this.aboutContainer.offset) /
                (this.sizes.getAbsoluteHeight(
                  this.domElements.scrollContainer
                ) *
                  0.7 -
                  this.aboutContainer.height)
            ))
        : this.sounds.labAmbienceScroll(0),
        this.contentScrollTo < 0 && (this.contentScrollTo = 0),
        i < 0 && (i = 0),
        i > 1 && (i = 1),
        P.to(this.domElements.scrollContainer, {
          y: -this.contentScrollTo,
          duration: t,
          ease: this.parameters.scrollEase(),
        }),
        i >= 0 &&
          (P.to(this.background.material.uniforms.uOffset, {
            value: this.background.height * 1.9 * i - 0.75,
            duration: t,
            ease: this.parameters.scrollEase(),
          }),
          P.to(this.camera.instance.position, {
            y:
              (this.cameraRange.bottom - this.cameraRange.top) * i +
              this.cameraRange.top,
            duration: t,
            ease: this.parameters.scrollEase(),
          }),
          P.to(this.domElements.logoWhiteBackground, {
            y: -this.contentScrollTo - window.innerHeight,
            duration: t,
            ease: this.parameters.scrollEase(),
          }));
    }
  }
  stopScrollOnTouchStart() {
    this.gestures.on("touch-start", () => {
      !this.landingPage.isAnimating &&
        !this.landingPage.visible &&
        !this.experience.ui.menu.main.visible &&
        !this.experience.ui.menu.main.isAnimating &&
        !this.transition.isShowing &&
        (P.killTweensOf(this.domElements.scrollContainer),
        P.killTweensOf(this.domElements.logoWhiteBackground),
        P.killTweensOf(this.camera.instance.position),
        P.killTweensOf(this.background.material.uniforms.uOffset),
        (this.scrollY = this.actualScroll));
    });
  }
  onOrientationChange() {
    this.landingPage.visible || this.moveToTop();
  }
  moveToTop() {
    this.waypoints.moveToWaypoint(
      this.sizes.portrait ? "scroll-start-portrait" : "scroll-start",
      !1
    ),
      (this.scrollY = 0),
      this.performScroll(0),
      this.experience.ui.header.show(),
      this.experience.ui.about.animations.playHologramAnimation(),
      this.experience.ui.about.animations.resetCharacterToPosition();
  }
  setCameraRange() {
    this.cameraRange = {};
    const t = this.waypoints.waypoints.find(
      (n) =>
        n.name ===
        (this.sizes.portrait ? "scroll-start-portrait" : "scroll-start")
    );
    (this.cameraRange.top = t.position.y),
      (this.cameraRange.bottom = this.sizes.portrait
        ? -54
        : -17 -
          ((this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) -
            this.sizes.getAbsoluteHeight(
              document.getElementById("about-section")
            )) /
            window.innerHeight) *
            5),
      this.contactScene.setYPosition(
        this.cameraRange.bottom + (this.sizes.portrait ? 0.5 : 0)
      );
  }
  setAboutContainerDetails() {
    (this.aboutContainer = {}),
      (this.aboutContainer.domElement =
        document.getElementById("about-section")),
      (this.aboutContainer.offset =
        this.aboutContainer.domElement.clientHeight - window.innerHeight),
      (this.aboutContainer.height =
        this.aboutContainer.domElement.clientHeight);
  }
  addEvent(t, n, i, s) {
    let r = !1;
    this.events.push({
      height: t,
      direction: n,
      task: i,
      check: () => {
        r ||
          ((n === "up"
            ? t >= this.actualScroll && this.actualScroll != 0
            : t <= this.actualScroll) &&
            (i(), s || (r = !0)));
      },
    });
  }
  resetAllEvents() {
    this.events.forEach((t) => (t.played = !1));
  }
  scrollAllowed() {
    return (
      !this.landingPage.isAnimating &&
      !this.landingPage.visible &&
      !this.experience.ui.menu.main.visible &&
      !this.experience.ui.menu.main.isAnimating &&
      !this.transition.isShowing
    );
  }
  checkLandingPageOpening() {
    (!this.lastWheelUp || this.time.current - this.lastWheelUp > 200) &&
      this.landingPage.show();
  }
  setLogoOverlayHeight() {
    const t = document.getElementById("logo-white-background");
    (t.style.height = this.aboutContainer.height + "px"),
      (t.style.marginTop = window.innerHeight - 15 + "px");
  }
  resize() {
    (this.events = []),
      this.setAboutContainerDetails(),
      this.setLogoOverlayHeight(),
      this.setCameraRange(),
      this.performScroll(0),
      setTimeout(() => {
        this.events.forEach((t) => {
          t.check();
        });
      }, 10);
  }
  update() {
    const t = window.getComputedStyle(this.domElements.scrollContainer),
      n = new WebKitCSSMatrix(t.transform);
    (this.actualScroll = -n.m42),
      this.events.forEach((i) => {
        this.scrollY != this.actualScroll && i.check();
      });
  }
}
class sM {
  constructor() {
    he(this, "isShowing", !1);
    he(this, "duration", 0.6);
    he(this, "domElements", {
      container: document.getElementById("transition-container"),
      logo: document.getElementById("loadig-animation-container"),
    });
    (this.experience = new ye()), (this.sounds = this.experience.sounds);
  }
  show() {
    this.domElements.container.classList.remove("hide"),
      (this.isShowing = !0),
      this.domElements.container.classList.remove("hideTopTransition"),
      this.domElements.container.classList.remove("hideIntroTransition"),
      this.domElements.container.classList.add("showTransition"),
      P.delayedCall(0.3, () => this.sounds.play("transition0"));
  }
  hide() {
    P.delayedCall(0.15, () => {
      this.domElements.container.classList.remove("showTransition"),
        this.domElements.container.classList.add("hideTopTransition"),
        P.delayedCall(this.duration, () => (this.isShowing = !1)),
        P.delayedCall(0.2, () => this.sounds.play("transition1"));
    });
  }
}
class rM {
  constructor() {
    he(this, "positionStyles", [
      "transform: translateX(-410%) scale(0.9);",
      "transform: translateX(-310%) scale(0.9); ",
      "transform: translateX(-210%) scale(0.9);",
      "transform: translateX(-110%) scale(0.9); ",
      "transform: translateX(0%);",
      "transform: translateX(110%) scale(0.9);",
      "transform: translateX(210%) scale(0.9)",
      "transform: translateX(310%) scale(0.9);",
      "transform: translateX(410%) scale(0.9);",
    ]);
    he(this, "domElements", {
      section: document.getElementById("work-section"),
      backButton: document.getElementById("work-back-button"),
      nextButton: document.getElementById("work-next-button"),
    });
    he(this, "currentItemIndex", Math.floor((oM.length - 1) / 2));
    he(this, "itemsAreMoving", !0);
    (this.experience = new ye()),
      (this.gestures = this.experience.gestures),
      (this.render = this.experience.ui.work.render),
      (this.sounds = this.experience.sounds),
      (this.scroll = this.experience.ui.scroll),
      (this.sizes = this.experience.sizes),
      this.addButtonEventListeners(),
      this.initSwipes(),
      this.updatePositions(!0),
      this.onArrowClick(),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    (this.currentItemIndex = Math.floor((oM.length - 1) / 2)),
      this.updatePositions();
  }
  addButtonEventListeners() {
    this.domElements.backButton.addEventListener("click", () => {
      this.sounds.play("buttonClick"), this.moveBack();
    }),
      this.domElements.nextButton.addEventListener("click", () => {
        this.sounds.play("buttonClick"), this.moveForward();
      });
  }
  initSwipes() {
    this.gestures.on("swipe-right", () => this.swipe("right")),
      this.gestures.on("swipe-left", () => this.swipe("left")),
      this.domElements.section.addEventListener(
        "touchend",
        () => {
          setTimeout(() => (this.isCurrentSwipeElement = !1));
        },
        {
          passive: !0,
        }
      ),
      this.domElements.section.addEventListener(
        "touchstart",
        () => {
          this.isCurrentSwipeElement = !0;
        },
        {
          passive: !0,
        }
      );
  }
  swipe(e) {
    this.isCurrentSwipeElement &&
      (e == "right" ? this.moveForward() : this.moveBack());
  }
  moveBack() {
    this.currentItemIndex != oM.length - 1 &&
      !this.itemsAreMoving &&
      document
        .getElementById("work-item-0")
        .classList.contains("work-item-container-transition") &&
      (this.currentItemIndex++, this.updatePositions());
  }
  moveForward() {
    this.currentItemIndex != 0 &&
      !this.itemsAreMoving &&
      document
        .getElementById("work-item-0")
        .classList.contains("work-item-container-transition") &&
      (this.currentItemIndex--, this.updatePositions());
  }
  onArrowClick() {
    window.addEventListener("keyup", () => {
      this.scroll.scrollAllowed() &&
        (event.keyCode == 39
          ? this.moveForward()
          : event.keyCode == 37 && this.moveBack());
    });
  }
  updatePositions(e = !1) {
    (!this.itemsAreMoving || e) &&
      (this.render.items.forEach((t) => {
        const n = this.render.items.indexOf(t),
          i = oM.length - 1,
          r = Math.max(0, Math.min(8, n + this.currentItemIndex - i + 4)),
          el = document.getElementById("work-item-" + t.id);
        (el.style = this.positionStyles[r]),
          n + this.currentItemIndex != i
            ? el.classList.add("work-inactive-item-container")
            : el.classList.remove("work-inactive-item-container");
      }),
      (this.itemsAreMoving = !0),
      P.delayedCall(0.5, () => (this.itemsAreMoving = !1)),
      this.updateNavigation());
  }
  updateNavigation() {
    this.currentItemIndex == 0
      ? (this.domElements.nextButton.classList.add(
          "work-disabled-navigation-button"
        ),
        this.experience.ui.hoverIcon.setupDefault())
      : this.currentItemIndex == oM.length - 1
      ? (this.domElements.backButton.classList.add(
          "work-disabled-navigation-button"
        ),
        this.experience.ui.hoverIcon.setupDefault())
      : (this.domElements.nextButton.classList.remove(
          "work-disabled-navigation-button"
        ),
        this.domElements.backButton.classList.remove(
          "work-disabled-navigation-button"
        ));
  }
}
const oM = [
    {
      id: 0,
      name: "Mapty",
      description: "A workout tracker that plots running and cycling workouts on an interactive map using the Geolocation API.",
      image: "images/projects/location-finder.png",
      tags: ["javascript", "html", "css"],
      liveview: "https://bejewelled-frangollo-83bce1.netlify.app/",
      alt: "Mapty activity tracker screenshot",
    },
    {
      id: 1,
      name: "Natours",
      description: "A tour booking website with detailed tour pages, reviews and a polished animated interface.",
      image: "images/projects/Natours.png",
      tags: ["html", "css", "javascript"],
      liveview: "https://natours-pw5m.onrender.com/",
      alt: "Natours tour application screenshot",
    },
    {
      id: 2,
      name: "AgentSheild",
      description: "Bonded AI-agent liability registry on GenLayer — agents post GEN bonds and claims are settled by validator consensus.",
      image: "images/projects/agent-sheild.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/AgentSheild",
      liveview: "https://agent-sheild.vercel.app",
      alt: "AgentSheild liability registry screenshot",
    },
    {
      id: 3,
      name: "ZeroSky",
      description: "Parametric weather cover for farms and outdoor businesses, settled by a GenLayer intelligent contract.",
      image: "images/projects/zero-sky.jpg",
      tags: ["react", "python", "genlayer"],
      github: "https://github.com/habte-selassie27/ZeroSky",
      liveview: "https://zero-sky.vercel.app",
      alt: "ZeroSky weather cover application screenshot",
    },
    {
      id: 4,
      name: "Reality-Bet",
      description: "AI-resolved prediction market on GenLayer — bet on real-world events and let validator consensus settle outcomes.",
      image: "images/projects/reality-bet.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/Reality-Bet-GenLayer",
      liveview: "https://reality-bet.vercel.app",
      alt: "Reality-Bet prediction market screenshot",
    },
    {
      id: 5,
      name: "AgentCourt",
      description: "Autonomous dispute resolution for AI agents on GenLayer — evidence, adversarial review and on-chain settlement.",
      image: "images/projects/agent-court.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/AgentCourt",
      liveview: "https://agent-court-genlayer.vercel.app",
      alt: "AgentCourt dispute resolution screenshot",
    },
    {
      id: 6,
      name: "Lore-Chain",
      description: "Consensus-managed canon for collaborative fiction worlds, owned by a GenLayer contract with VecDB memory.",
      image: "images/projects/lore-chain.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/Lore-Chain",
      liveview: "https://lore-chain-theta.vercel.app",
      alt: "Lore-Chain world bible screenshot",
    },
    {
      id: 7,
      name: "BugBond",
      description: "Public bug-bounty protocol on GenLayer — sponsors fund scoped targets and validators agree payouts on-chain.",
      image: "images/projects/bug-bond.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/BugBond-Genlayer",
      liveview: "https://bug-bond-genlayer.vercel.app",
      alt: "BugBond bounty protocol screenshot",
    },
    {
      id: 8,
      name: "TruthLock",
      description: "On-chain fact checker — submit a claim and a source, get a TRUE/FALSE verdict recorded on GenLayer.",
      image: "images/projects/truthlock.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/TruthLock_Dapp",
      liveview: "https://truthlockdapp.vercel.app",
      alt: "TruthLock fact checker screenshot",
    },
    {
      id: 9,
      name: "Agent-Pact",
      description: "Trustless escrow for AI agents on GenLayer — post a task, judges score deliverables and payment releases automatically.",
      image: "images/projects/agent-pact.jpg",
      tags: ["typescript", "genlayer", "web3"],
      github: "https://github.com/habte-selassie27/Agent-Pact",
      liveview: "https://agent-pact-xi.vercel.app",
      alt: "Agent-Pact escrow application screenshot",
    },
    {
      id: 10,
      name: "Arc-Passport",
      description: "Wallet-linked identity platform on Arc Testnet — build your passport, receive attestations and verify trustlessly.",
      image: "images/projects/arc-passport.jpg",
      tags: ["solidity", "web3"],
      github: "https://github.com/habte-selassie27/Arc-Passport",
      liveview: "https://arc-passport.vercel.app",
      alt: "Arc-Passport identity platform screenshot",
    },
    {
      id: 11,
      name: "CrediVault",
      description: "CrediVault — lending platform on Arc Network with loans, credit scoring, vaults and repayment tracking.",
      image: "images/projects/arc-credit.jpg",
      tags: ["typescript", "web3", "node"],
      github: "https://github.com/habte-selassie27/Arc-Credit",
      liveview: "https://arc-credit.vercel.app",
      alt: "CrediVault lending platform screenshot",
    },
    {
      id: 12,
      name: "Verida-AI",
      description: "Trust-first AI dataset marketplace on Aptos — provenance-anchored datasets, wallet access and Shelby storage.",
      image: "images/projects/verida-ai.jpg",
      tags: ["react", "typescript", "aptos"],
      github: "https://github.com/habte-selassie27/Verida-AI",
      liveview: "https://verida-ai-nu.vercel.app",
      alt: "Verida-AI dataset marketplace screenshot",
    },
    {
      id: 13,
      name: "BlockMind_Labs",
      description: "AI-native Web3 platform for GIWA — natural-language on-chain actions like balances, swaps and contract analysis.",
      image: "images/projects/blockmind.jpg",
      tags: ["typescript", "web3", "ai"],
      github: "https://github.com/habte-selassie27/BlockMind_Labs",
      alt: "BlockMind Labs AI Web3 platform card",
    },
    {
      id: 14,
      name: "Evidence Host",
      description: "DepositSplit evidence host — move-in and move-out damage evidence pages for tenancy deposit disputes.",
      image: "images/projects/evidence-host.jpg",
      tags: ["react", "ui"],
      github: "https://github.com/habte-selassie27/evidence-host",
      liveview: "https://evidence-host.vercel.app",
      alt: "DepositSplit evidence host screenshot",
    },
    {
      id: 15,
      name: "PolkaPass",
      description: "PolkaPass — KILT-powered decentralized identity app issuing and verifying verifiable credentials.",
      image: "images/projects/polkapass.jpg",
      tags: ["javascript", "web3", "node"],
      github: "https://github.com/habte-selassie27/polkpass",
      liveview: "https://polkapass.vercel.app",
      alt: "PolkaPass decentralized identity card",
    },
    {
      id: 16,
      name: "Staking DApp",
      description: "Ethereum staking dApp built with Next.js, RainbowKit, Hardhat, Wagmi and TypeScript.",
      image: "images/projects/staking-dapp.jpg",
      tags: ["nextjs", "typescript", "solidity"],
      github: "https://github.com/habte-selassie27/Staking-DApp",
      liveview: "https://staking-d-app-nextjs.vercel.app",
      alt: "Staking DApp screenshot",
    },
    {
      id: 17,
      name: "NFT Challenge",
      description: "NFT minting challenge dApp built with Next.js, RainbowKit, Hardhat, Wagmi and TypeScript.",
      image: "images/projects/nft-challenge.jpg",
      tags: ["nextjs", "typescript", "web3"],
      github: "https://github.com/habte-selassie27/Nft-Challenge",
      liveview: "https://nft-challenge-nine-tawny.vercel.app",
      alt: "NFT challenge dApp screenshot",
    },
    {
      id: 18,
      name: "Portfolio 3D",
      description: "Interactive 3D portfolio — this site — built with Three.js, a scroll-driven camera engine and GSAP.",
      image: "images/projects/portfolio-3d.jpg",
      tags: ["javascript", "ui", "three"],
      github: "https://github.com/habte-selassie27/portfolio-3d",
      alt: "3D portfolio website screenshot",
    },
    {
      id: 19,
      name: "GovAssist",
      description: "Government assistance portal in React — multi-step application wizard, lottery form, timer and testimonials.",
      image: "images/projects/gov-assist.jpg",
      tags: ["react", "javascript", "ui"],
      github: "https://github.com/habte-selassie27/GovAssist_Project",
      liveview: "https://gov-assist-project.vercel.app",
      alt: "GovAssist government portal card",
    },
    {
      id: 20,
      name: "HR Manager",
      description: "Angular application with an employee (HR) CRUD module and a restaurant storefront demo.",
      image: "images/projects/angular-restaurant.jpg",
      tags: ["angular", "typescript"],
      github: "https://github.com/habte-selassie27/angular-project-master",
      liveview: "https://angular-project-master.vercel.app",
      alt: "Angular restaurant application screenshot",
    },
    {
      id: 21,
      name: "Resullet",
      description: "Decentralized resume wallet — MetaMask sign-in with profiles persisted through Supabase.",
      image: "images/projects/resullet1.jpg",
      tags: ["react", "javascript", "supabase"],
      github: "https://github.com/habte-selassie27/resullet1",
      liveview: "https://resullet1.vercel.app",
      alt: "Resullet decentralized resume wallet screenshot",
    },
    {
      id: 22,
      name: "Arc House Tracker",
      description: "Arc House Tracker — data-entry companion site for the Arc House platform.",
      image: "images/projects/archouse.jpg",
      tags: ["javascript", "ui"],
      liveview: "https://archouseextension.vercel.app",
      alt: "Arc House Tracker screenshot",
    },
  ],
  aM = {
    html: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">HTML</div>',
    css: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">CSS</div>',
    javascript:
      '<div class="work-item-tag" style="background: #FFB800;">JavaScript</div>',
    react:
      '<div class="work-item-tag" style="background: #21BAEB;">React js</div>',
    mongodb:'<div class="work-item-tag" style="background: #4fe461;">MongoDB</div>',
    googleAuth:'<div class="work-item-tag" style="background: #4fe461;">Google Auth</div>',
    express:
      '<div class="work-item-tag" style="background: #333;">Express</div>',
    multer:
      '<div class="work-item-tag" style="background:rgb(187, 93, 93);">Multer</div>',
      Cloudinery: '<div class="work-item-tag" style="background:rgb(73, 143, 248);">Cloudinery</div>',
      freelance: '<div class="work-item-tag" style="background:rgb(73, 143, 248);">Freelancs</div>',
    ui: '<div class="work-item-tag" style="background: #CA49F8;">UI Design</div>',
    tailwind: '<div class="work-item-tag" style="background:rgb(234, 248, 73);">Tailwind</div>',
    game: '<div class="work-item-tag" style="background: #e86ef0;">Game</div>',
    framer: '<div class="work-item-tag" style="background: #e86ef0;">Framer</div>',
    typescript:
      '<div class="work-item-tag" style="background: #1F6FEB;">TypeScript</div>',
    genlayer:
      '<div class="work-item-tag" style="background: #6D28D9;">GenLayer</div>',
    web3: '<div class="work-item-tag" style="background: #0D9488;">Web3</div>',
    python:
      '<div class="work-item-tag" style="background: #306998;">Python</div>',
    solidity:
      '<div class="work-item-tag" style="background: #627EEA;">Solidity</div>',
    node: '<div class="work-item-tag" style="background: #3C873A;">Node js</div>',
    aptos: '<div class="work-item-tag" style="background: #E6007A;">Aptos</div>',
    ai: '<div class="work-item-tag" style="background: #0EA5E9;">AI</div>',
    nextjs: '<div class="work-item-tag" style="background: #111827;">Next js</div>',
    angular:
      '<div class="work-item-tag" style="background: #DD0031;">Angular</div>',
    three: '<div class="work-item-tag" style="background: #049EF4;">Three js</div>',
    supabase:
      '<div class="work-item-tag" style="background: #3ECF8E;">Supabase</div>',
  };
class lM {
  constructor() {
    he(this, "domElements", {
      renderContainer: document.getElementById("work-render-container"),
    });
    (this.experience = new ye()),
      (this.sounds = this.experience.sounds),
      (this.items = oM),
      (this.tags = aM),
      this.renderItems();
  }
  renderItems() {
    this.items.forEach((e) => {
      this.domElements.renderContainer.insertAdjacentHTML(
        "beforeend",
        `
            <div id="work-item-${e.id}" class="work-item-container column">
                <img class="work-item-image" src="${e.image}" alt="${
          e.alt
        }" height="300" width="334"/>
                <div class="work-item-content-container">
                    <h3>${e.name}</h3>
                    <div class="work-item-tag-container row">
                        ${this.renderTags(e.tags)}
                    </div>
                    <span>${e.description}</span>
                </div>
                <div class="work-item-button-container row">
                    ${this.renderButtons(e)}
                </div>
                ${e.bannerIcons ? this.renderBanner(e) : ""}
            </div>
            `
      ),
        this.addEventListenersToCard(e);
    });
  }
  renderBanner(e) {
    let t = "";
    return (
      (t = `
            <div class="work-banner-container row center">
                ${e.bannerIcons.map(
                  (n) =>
                    `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                )}
                <span>Website Of<br>The Day</span>
            </div>
        `),
      t
    );
  }
  // renderButtons(e) {
  //   let t = "";
  //   return (
  //     e.github
  //       ? (t = `
  //               <div id="work-item-gray-button-${
  //                 e.id
  //               }" class="work-item-gray-button center gray-hover" ${
  //           e.liveview ? "" : 'style="width: 100%"'
  //         }>
  //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  class="code-icon">
  //                       <use href="#code-path"/>
  //                   </svg>
  //                ${e.liveview ? "" : "<span>Source Code</span>"}
  //               </div>
  //                ${
  //                  e.liveview
  //                    ? `<div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover">Live View</div>`
  //                    : ""
  //                }
  //           `)
  //       : e.twitter
  //       ? (t = `
  //           <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
  //               <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px" style="margin-right: 5px">    
  //                   <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/>
  //               </svg>
  //               Stay up to date
  //           </div>`)
  //       : (t = `
  //               <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
  //                   Work in progress
  //               </div>
  //           `),
  //     t
  //   );
  // }
  renderButtons(e) {
    let t = "";
    if (e.github) {
        t = `
            <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center gray-hover" ${
              e.liveview ? "" : 'style="width: 100%"'
            }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="code-icon">
                    <use href="#code-path"/>
                </svg>
                ${e.liveview ? "" : "<span>Source Code</span>"}
            </div>
            ${
              e.liveview
                ? `<div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover">Live View</div>`
                : ""
            }
        `;
    } else if (e.liveview) {
        t = `
            <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
                Live View
            </div>
        `;
    } else if (e.twitter) {
        t = `
            <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px" style="margin-right: 5px">    
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/>
                </svg>
                Stay up to date
            </div>
        `;
    } else {
        // Render a "Work in progress" button if no liveview or Twitter link is present
        t = `
            <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
                Work in progress
            </div>
        `;
    }
    return t;
}

  renderTags(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
    return t;
  }
  // addEventListenersToCard(e) {
  //   const t = document.getElementById("work-item-" + e.id);
  //   t.addEventListener("click", () => {
  //     t.classList.contains("work-inactive-item-container") &&
  //       document
  //         .getElementById("work-item-0")
  //         .classList.contains("work-item-container-transition") &&
  //       ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
  //       this.experience.ui.work.cards.updatePositions(),
  //       this.sounds.play("buttonClick"));
  //   }),
  //     e.github
  //       ? (document
  //           .getElementById("work-item-gray-button-" + e.id)
  //           .addEventListener("click", () => {
  //             window.open(e.github, "_blank").focus();
  //           }),
  //         e.liveview &&
  //           document
  //             .getElementById("work-item-orange-button-" + e.id)
  //             .addEventListener("click", () => {
  //               window.open(e.liveview, "_blank").focus();
  //             }))
  //       : e.twitter &&
  //         document
  //           .getElementById("work-item-orange-button-" + e.id)
  //           .addEventListener("click", () => {
  //             window.open(e.twitter, "_blank").focus();
  //           });
  // }
  addEventListenersToCard(e) {
    const t = document.getElementById("work-item-" + e.id);
    t.addEventListener("click", () => {
        if (
            t.classList.contains("work-inactive-item-container") &&
            document
                .getElementById("work-item-0")
                .classList.contains("work-item-container-transition")
        ) {
            this.experience.ui.work.cards.currentItemIndex =
                -e.id + (oM.length - 1);
            this.experience.ui.work.cards.updatePositions();
            this.sounds.play("buttonClick");
        }
    });

    if (e.github) {
        document
            .getElementById("work-item-gray-button-" + e.id)
            .addEventListener("click", () => {
                window.open(e.github, "_blank").focus();
            });
        if (e.liveview)
            document
                .getElementById("work-item-orange-button-" + e.id)
                .addEventListener("click", () => {
                    window.open(e.liveview, "_blank").focus();
                });
    } else if (e.liveview) {
        document
            .getElementById("work-item-orange-button-" + e.id)
            .addEventListener("click", () => {
                window.open(e.liveview, "_blank").focus();
            });
    } else if (e.twitter) {
        document
            .getElementById("work-item-orange-button-" + e.id)
            .addEventListener("click", () => {
                window.open(e.twitter, "_blank").focus();
            });
    }
}

}
const cM = [
  {
    name: "web development",
    width: "90%",
  },
  {
    name: "app devlopment",
    width: "55%",
  },
  {
    name: "graphic design",
    width: "90%",
  },
  {
    name: "frontend",
    width: "80%",
  },
  {
    name: "backend",
    width: "75%",
  },
];
class hM {
  constructor() {
    he(this, "domElements", {
      skillsRenderContainer: document.getElementById(
        "about-skills-render-container"
      ),
    });
    (this.skills = cM), this.renderSkills();
  }
  renderSkills() {
    this.skills.forEach((e) => {
      this.domElements.skillsRenderContainer.insertAdjacentHTML(
        "beforeend",
        `
                <div id="about-skill-container-${this.skills.indexOf(
                  e
                )}" class="row about-skill-container">
                    <span id="about-skill-span-${this.skills.indexOf(
                      e
                    )}" class="about-skill-span">${e.name}</span>
                    <div class="about-skill-bar-container">
                        <div id="about-skill-bar-${this.skills.indexOf(
                          e
                        )}" class="about-skill-bar" style="width: ${
          e.width
        }"></div>
                    </div>
                </div>
            `
      );
    });
  }
}
class uM extends Ai {
  constructor() {
    super();
    he(this, "domElements", {
      icon: document.getElementById("hover-icon"),
      content: document.getElementById("hover-content"),
      colorSwitchContainer: document.getElementById("hover-icon-color-switch"),
      aboutSection: document.getElementById("about-section"),
    });
    he(this, "hoverElements", [
      {
        class: ".menu-item",
        type: "circle",
        color: "#FF923E",
      },
      {
        class: ".work-item-gray-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: ".small-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: "#landing-cta-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: "#landing-cta-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: "#logo-click-container",
        type: "pointer",
        color: "#FF923E",
      },
      {
        class: ".overlay-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: ".work-navigation-button",
        type: "pointer",
        color: "#091434",
      },
      {
        class: ".work-item-container",
        type: "pointer",
        color: "#091434",
      },
      {
        class: "a",
        type: "pointer",
        color: "#FF923E",
      },
    ]);
    he(this, "currentBaseColor", "#FF923E");
    he(this, "cursorIsInsideDoc", !0);
    (this.experience = new ye()),
      (this.sizes = this.experience.sizes),
      (this.scroll = this.experience.ui.scroll),
      (this.landingPage = this.experience.ui.landingPage),
      (this.intro = this.experience.ui.intro),
      this.setupDefault(),
      this.setCursorLeavesDoc(),
      this.setHoverColorSwitchHeight(),
      this.applyEventListeners(),
      this.applyColorSwitchEventListeners(),
      this.sizes.touch
        ? this.domElements.icon.classList.add("hide")
        : this.domElements.icon.classList.remove("hide"),
      this.sizes.on("touch", () => this.domElements.icon.classList.add("hide")),
      this.sizes.on("no-touch", () =>
        this.domElements.icon.classList.remove("hide")
      ),
      document.addEventListener("visibilitychange", () => {
        this.updateBaseColor("#FF923E", !0), console.log();
      });
  }
  applyEventListeners() {
    this.hoverElements.forEach((t) => {
      const n = document.querySelectorAll(t.class);
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        s.addEventListener("mouseenter", () => {
          this.sizes.touch ||
            (t.type == "pointer"
              ? this.setupPointer(t, s)
              : this.setupCircle(t, s)),
            (this.isHoveringCursorElement = !0);
        }),
          s.addEventListener("mouseleave", () => {
            this.sizes.touch ||
              (this.setupDefault(), (this.isHoveringCursorElement = !1));
          });
      }
    }),
      window.addEventListener("mousemove", () => {
        (this.domElements.icon.style.opacity = 1),
          this.updatePosition(),
          this.trigger("move"),
          !this.isHoveringCursorElement &&
            !this.experience.raycaster.isHovering &&
            this.setupDefault();
      });
  }
  updatePosition() {
    this.sizes.touch ||
      P.to(this.domElements.icon, {
        x: event.pageX,
        y: event.pageY,
        duration: 0.4,
        ease: wi.easeOut,
      });
  }
  setCursorLeavesDoc() {
    document.addEventListener(
      "mouseleave",
      () => (this.cursorIsInsideDoc = !1)
    ),
      document.addEventListener(
        "mouseenter",
        () => (this.cursorIsInsideDoc = !0)
      );
  }
  applyColorSwitchEventListeners() {
    const t = () => {
        this.updateBaseColor("#34bfff");
      },
      n = () => {
        this.updateBaseColor("#FF923E");
      };
    this.domElements.colorSwitchContainer.addEventListener("mousemove", () =>
      t()
    ),
      this.domElements.colorSwitchContainer.addEventListener("mousenter", () =>
        t()
      ),
      this.domElements.aboutSection.addEventListener("mousemove", () => t()),
      this.domElements.aboutSection.addEventListener("mouseenter", () => t()),
      this.domElements.colorSwitchContainer.addEventListener("mouseleave", () =>
        n()
      ),
      this.domElements.aboutSection.addEventListener("mouseleave", () => n());
  }
  updateBaseColor(t, n = !1) {
    setTimeout(() => {
      (n ||
        (!document.hidden &&
          (this.cursorIsInsideDoc || this.landingPage.visible) &&
          this.currentBaseColor != t &&
          !this.experience.raycaster.isHovering)) &&
        ((this.currentBaseColor = t),
        (this.domElements.icon.style.borderColor = this.currentBaseColor));
    });
  }
  setupDefault() {
    this.currentIcon != "default" &&
      !this.isHoveringCursorElement &&
      !this.experience.raycaster.isHovering &&
      ((this.currentIcon = "default"),
      (this.domElements.icon.style.borderWidth = "7px"),
      (this.domElements.icon.style.height = "0"),
      (this.domElements.icon.style.width = "0"),
      (this.domElements.icon.style.borderColor = this.currentBaseColor),
      this.domElements.content.classList.add("hide"),
      this.sizes.touch || (document.querySelector("body").style.cursor = ""));
  }
  setupPointer(t = {}, n) {
    if (this.currentIcon != "pointer") {
      const i =
          t.class == ".work-item-container"
            ? n.classList.contains("work-inactive-item-container")
            : !0,
        s = n ? !n.classList.contains("work-disabled-navigation-button") : !0,
        r =
          t.class == ".work-item-gray-button"
            ? n.classList.contains("gray-hover")
            : !0;
      i &&
        s &&
        r &&
        setTimeout(() => {
          (this.currentIcon = "pointer"),
            (this.domElements.icon.style.borderWidth = "5px"),
            (this.domElements.icon.style.height = "18px"),
            (this.domElements.icon.style.width = "18px"),
            (this.domElements.icon.style.borderColor = t.color
              ? t.color
              : "#091434"),
            (this.domElements.icon.style.background = "transparent"),
            this.domElements.content.classList.add("hide"),
            this.sizes.touch ||
              (document.querySelector("body").style.cursor = "pointer");
        });
    }
  }
  setupCircle(t, n) {
    this.currentIcon != "circle" &&
      (t == "force" || !n.classList.contains("active-menu-item")) &&
      ((this.currentIcon = "circle"),
      (this.domElements.icon.style.borderWidth = "0"),
      (this.domElements.icon.style.height = "55px"),
      (this.domElements.icon.style.width = "55px"),
      (this.domElements.icon.style.background =
        t == "force" ? "#FF923E" : t.color),
      this.domElements.content.classList.remove("hide"),
      !this.intro.clickCTAVisbile &&
        !this.sizes.touch &&
        (document.querySelector("body").style.cursor = ""));
  }
  setHoverColorSwitchHeight() {
    this.domElements.colorSwitchContainer.style.height =
      this.scroll.aboutContainer.height +
      window.innerHeight * (this.sizes.portrait ? 0.03 : 0.15) +
      "px";
  }
  resize() {
    this.setHoverColorSwitchHeight();
  }
}
class dM {
  constructor() {
    he(this, "visible", !0);
    he(this, "domElements", {
      header: document.getElementById("header-container"),
    });
    (this.experience = new ye()),
      (this.landingPage = this.experience.ui.landingPage),
      (this.menu = this.experience.ui.menu.main),
      (this.gestures = this.experience.gestures),
      (this.scroll = this.experience.ui.scroll),
      (this.transition = this.experience.ui.transition),
      this.gestures.on("scroll-up", () => this.show()),
      this.gestures.on("scroll-down", () => this.hide()),
      this.gestures.on("touch-up", () => this.show()),
      this.gestures.on("touch-down", () => this.hide());
  }
  show() {
    this.visible ||
      ((this.visible = !0), (this.domElements.header.style.top = "0"));
  }
  hide() {
    this.scroll.scrollAllowed() &&
      ((this.visible = !1), (this.domElements.header.style.top = "-80px"));
  }
}
class fM extends Ai {
  constructor() {
    super();
    he(this, "visible", !1);
    he(this, "initials", {});
    he(this, "isAnimating", !1);
    he(this, "domElements", {
      menuButton: document.getElementById("menu-button"),
      menuContainer: document.getElementById("menu-container"),
      menuButtonBar0: document.getElementById("menu-button-bar-0"),
      menuButtonBar1: document.getElementById("menu-button-bar-1"),
      menuButtonBar2: document.getElementById("menu-button-bar-2"),
      landingPageContent: document.getElementById("landing-page-section"),
      aboutSection: document.getElementById("about-section"),
      scrollContainer: document.getElementById("scroll-container"),
      logoWhiteBackground: document.getElementById("logo-white-background"),
      workSection: document.getElementById("work-section"),
    });
    (this.experience = new ye()),
      (this.landingPage = this.experience.ui.landingPage),
      (this.waypoints = this.experience.waypoints),
      (this.scroll = this.experience.ui.scroll),
      (this.labBackground = this.experience.world.background),
      (this.camera = this.experience.camera),
      (this.gestures = this.experience.gestures),
      (this.transition = this.experience.ui.transition),
      (this.sounds = this.experience.sounds),
      (this.sizes = this.experience.sizes),
      (this.contactAnimation = this.experience.world.contact.animation),
      (this.character = this.experience.world.character),
      this.setWidth(),
      this.updatePositon(),
      this.menuButtonClick(),
      this.hideEvents(),
      window.requestAnimationFrame(() =>
        this.domElements.menuContainer.classList.add(
          "slide-out-left-transition"
        )
      ),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    this.yTween && (this.yTween.kill(), (this.yTween = null));
  }
  menuButtonClick() {
    this.domElements.menuButton.addEventListener("click", () => {
      this.isAnimating || this.sounds.play("buttonClick"),
        this.switchVisiblity();
    });
  }
  switchVisiblity(t = !0, n = !1, i = !0) {
    ((!this.isAnimating &&
      !this.landingPage.isAnimating &&
      !this.transition.isShowing) ||
      n) &&
      ((this.visible = !this.visible),
      this.updatePositon(),
      this.sizes.portrait &&
        P.to(this.domElements.logoWhiteBackground, {
          opacity: this.visible ? 0 : 1,
          duration: 0.7,
        }),
      this.visible ? this.crossMenuButton() : this.resetMenuButton(),
      t &&
        !this.sizes.portrait &&
        (this.landingPage.visible
          ? this.landingPageTransition(i)
          : this.scrollContainerTransition(i)),
      (this.isAnimating = !0),
      P.delayedCall(0.9, () => (this.isAnimating = !1)),
      this.fadeScrollIcons(!this.visible));
  }
  landingPageTransition(t) {
    this.waypoints.moveToWaypoint(
      this.visible ? "landing-menu" : "landing-page",
      t || this.isAnimating,
      0.9
    ),
      (this.domElements.landingPageContent.style.left = this.visible
        ? "-100%"
        : "0");
  }
  scrollContainerTransition(t) {
    this.visible
      ? (this.scroll.scrollY + window.innerHeight / 2 <=
        this.sizes.getAbsoluteHeight(this.domElements.aboutSection) +
          this.sizes.getAbsoluteHeight(this.domElements.workSection) / 2
          ? this.focusLabScene()
          : this.focusContactScene(),
        (this.domElements.scrollContainer.style.left = "-100%"),
        this.setInitialPositions())
      : (t || this.isAnimating
          ? this.returnToInitialPosition()
          : this.sizes.portrait ||
            (this.waypoints.moveToWaypoint(
              this.sizes.portrait ? "scroll-start-portrait" : "scroll-start"
            ),
            (this.yTween = P.to(this.camera.instance.position, {
              y: this.initials.cameraY,
              duration: 0.9,
              ease: et.easeInOut,
            }))),
        (this.domElements.scrollContainer.style.left = "0"));
  }
  setInitialPositions() {
    (this.initials.cameraY = this.camera.instance.position.y),
      (this.initials.scrollY = this.scroll.contentScrollTo),
      (this.initials.logoBackgroundY =
        -this.scroll.contentScrollTo - window.innerHeight),
      (this.initials.backgroundY =
        this.labBackground.material.uniforms.uOffset.value);
  }
  returnToInitialPosition() {
    this.waypoints.moveToWaypoint(
      this.sizes.portrait ? "scroll-start-portrait" : "scroll-start"
    ),
      P.to(this.camera.instance.position, {
        y: this.initials.cameraY,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      P.to(this.domElements.scrollContainer, {
        y: -this.initials.scrollY,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      P.to(this.labBackground.material.uniforms.uOffset, {
        value: this.initials.backgroundY,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      P.to(this.domElements.logoWhiteBackground, {
        y: this.initials.logoBackgroundY
          ? this.initials.logoBackgroundY
          : -window.innerHeight,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      this.sounds.labAmbienceScroll("recent");
  }
  focusLabScene() {
    P.to(this.labBackground.material.uniforms.uOffset, {
      value: 0,
      duration: 0.9,
    }),
      P.to(this.domElements.scrollContainer, {
        y: 0,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      P.to(this.domElements.logoWhiteBackground, {
        y: -window.innerHeight,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      this.waypoints.moveToWaypoint("lab-menu"),
      this.sounds.muteGroup("lab", !1, 0.4),
      this.character.body.model.position.y != -18.95 &&
        this.experience.ui.about.animations.resetCharacterToPosition();
  }
  focusContactScene() {
    P.to(this.labBackground.material.uniforms.uOffset, {
      value: this.labBackground.height,
      duration: 0.9,
    }),
      P.to(this.domElements.scrollContainer, {
        y: -this.domElements.scrollContainer.clientHeight + window.innerHeight,
        duration: 0.9,
        ease: et.easeInOut,
      }),
      (this.waypoints.waypoints.find(
        (t) => t.name == "contact-menu"
      ).position.y =
        this.experience.world.contact.scene.model.position.y + 5.8),
      this.waypoints.moveToWaypoint("contact-menu"),
      this.contactAnimation.playIdle(),
      P.delayedCall(1, () => this.contactAnimation.playTransition()),
      window.requestAnimationFrame(() => {
        this.sounds.labAmbienceScroll(
          this.sizes.getAbsoluteHeight(this.domElements.scrollContainer)
        );
      });
  }
  hideEvents() {
    this.landingPage.on("hide", () => {
      this.visible && this.switchVisiblity(!1);
    }),
      this.landingPage.on("show", () => {
        this.visible && this.switchVisiblity(!1);
      }),
      this.gestures.on("scroll", () => {
        this.visible && this.switchVisiblity();
      });
  }
  fadeScrollIcons(t) {
    const n = document.querySelectorAll(".scroll-container");
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      (!(this.landingPage.visible && i == 1) || !this.landingPage.visible) &&
        P.to(s, {
          opacity: t ? 1 : 0,
        });
    }
  }
  crossMenuButton() {
    P.to(this.domElements.menuButtonBar0, {
      rotation: 45,
      y: 9,
      duration: 0.1,
    }),
      P.to(this.domElements.menuButtonBar1, {
        opacity: 0,
        duration: 0.1,
      }),
      P.to(this.domElements.menuButtonBar2, {
        rotation: -45,
        y: -9,
        duration: 0.1,
      }),
      this.trigger("open");
  }
  resetMenuButton() {
    P.to(this.domElements.menuButtonBar0, {
      rotation: 0,
      y: 0,
      duration: 0.1,
    }),
      P.to(this.domElements.menuButtonBar1, {
        opacity: 1,
        duration: 0.1,
      }),
      P.to(this.domElements.menuButtonBar2, {
        rotation: 0,
        y: 0,
        duration: 0.1,
      }),
      this.trigger("hide");
  }
  setWidth() {
    this.domElements.menuContainer.style.width =
      (window.innerWidth - this.domElements.aboutSection.clientWidth) / 2 +
      350 +
      "px";
  }
  updatePositon() {
    this.domElements.menuContainer.style.right = this.visible
      ? "0"
      : `-${this.domElements.menuContainer.clientWidth}px`;
  }
  resize() {
    this.setWidth(),
      this.updatePositon(),
      this.visible && this.switchVisiblity(!0, !0, !1);
  }
}
class qu {
  constructor(e) {
    he(this, "visible", !0);
    (this.icon = document.querySelectorAll(".scroll-container")[e]),
      (this.border = document.querySelectorAll(".scroll-border-container")[e]),
      (this.wheel = document.querySelectorAll(".scroll-wheel")[e]),
      (this.touchIcon = document.querySelectorAll(".scroll-touch-icon")[e]),
      (this.experience = new ye()),
      (this.sizes = this.experience.sizes),
      this.sizes.on("touch", () => this.setupTouchIcon()),
      this.sizes.on("no-touch", () => this.setupScrollIcon()),
      this.sizes.touch ? this.setupTouchIcon() : this.setupScrollIcon();
  }
  setupTouchIcon() {
    this.border.classList.add("hide"),
      this.touchIcon.classList.remove("hide"),
      P.killTweensOf(this.wheel),
      P.fromTo(
        this.touchIcon,
        {
          y: 0,
        },
        {
          y: 6,
          duration: 1,
          ease: wi.easeOut,
          repeat: -1,
          yoyo: !0,
        }
      );
  }
  setupScrollIcon() {
    this.border.classList.remove("hide"),
      this.touchIcon.classList.add("hide"),
      P.killTweensOf(this.touchIcon),
      P.fromTo(
        this.wheel,
        {
          y: 0,
        },
        {
          y: 6,
          duration: 1,
          ease: wi.easeIn,
          repeat: -1,
          yoyo: !0,
        }
      );
  }
  fade(e) {
    this.visible &&
      P.to(this.icon, {
        opacity: e ? 1 : 0,
        duration: 0.3,
      });
  }
  kill() {
    this.visible &&
      (this.fade(),
      (this.visible = !1),
      P.delayedCall(0.3, () => {
        P.killTweensOf(this.wheel), this.icon.classList.add("hide");
      }));
  }
}
let pM = class {
  constructor() {
    he(this, "domElements", {
      body: document.getElementById("sound-body-path"),
      volume0: document.getElementById("sound-volume-0-path"),
      volume1: document.getElementById("sound-volume-1-path"),
      button: document.getElementById("sound-button"),
    });
    (this.experience = new ye()),
      (this.sounds = this.experience.sounds),
      (this.landingPage = this.experience.ui.landingPage),
      (this.transition = this.experience.ui.transition),
      (this.tweens = []),
      this.deactivate(!1),
      this.domElements.button.addEventListener("click", () => {
        this.transition.isShowing ||
          (this.active ? this.deactivate() : this.activate(),
          this.sounds.play("buttonClick"));
      }),
      window.addEventListener("keydown", () => {
        event.key === "m" &&
          !this.transition.isShowing &&
          (this.active ? this.deactivate() : this.activate());
      });
  }
  killTweens() {
    P.killTweensOf(this.domElements.body),
      P.killTweensOf(this.domElements.volume0),
      P.killTweensOf(this.domElements.volume1);
  }
  deactivate(e = !0) {
    (this.active = !1),
      this.sounds.mute(!0),
      this.killTweens(),
      P.to(this.domElements.body, {
        x: 2,
        duration: 0.2,
      }),
      P.to(this.domElements.volume0, {
        opacity: 0,
        duration: 0,
      }),
      P.to(this.domElements.volume1, {
        opacity: 0,
        duration: 0,
      }),
      this.domElements.button.classList.add("gray-hover"),
      this.domElements.button.classList.remove("orange-hover"),
      this.sounds.muteGroup(
        this.landingPage.visible ? "lab" : "landing",
        !0,
        0
      ),
      this.sounds.muteGroup(
        this.landingPage.visible ? "landing" : "lab",
        !1,
        0
      ),
      e && this.updateLocalStorage();
  }
  activate(e = !0) {
    (this.active = !0),
      this.sounds.mute(!1),
      this.killTweens(),
      P.to(this.domElements.body, {
        x: 0,
        duration: 0.2,
      }),
      P.to(this.domElements.volume0, {
        opacity: 1,
        duration: 0,
      }),
      P.to(this.domElements.volume1, {
        opacity: 1,
        duration: 0,
        delay: 0.1,
      }),
      this.domElements.button.classList.remove("gray-hover"),
      this.domElements.button.classList.add("orange-hover"),
      this.landingPage.visible || this.sounds.labAmbienceScroll("recent"),
      this.experience.ui.scroll.performScroll(),
      e && this.updateLocalStorage(),
      this.sounds.playRoomAmbience();
  }
  updateLocalStorage() {
    localStorage.setItem("soundActive", this.active);
  }
};
class Ln {
  constructor(e) {
    (this.experience = new ye()),
      (this.scroll = this.experience.ui.scroll),
      (this.sizes = this.experience.sizes),
      e.setup && !this.sizes.touch && e.setup(),
      (this.element = e.element),
      (this.direction = e.direction ? e.direction : "down"),
      (this.f = e.f ? e.f : () => {}),
      (this.offset = e.offset ? e.offset : 0),
      (this.reset = e.reset ? e.reset : () => {}),
      (this.repeats = e.repeats ? e.repeats : !1),
      this.initEvent();
  }
  initEvent() {
    let e = this.getY(this.element) + this.offset;
    this.direction == "up" && (e += window.innerHeight),
      this.scroll.addEvent(e, this.direction, this.f, this.repeats);
  }
  getY(e) {
    let t = 0;
    t += e.offsetTop;
    let n = e.offsetParent.id,
      i = e;
    for (; n != "scroll-container"; )
      (i = i.offsetParent), (n = i.offsetParent.id), (t += i.offsetTop);
    return t - e.scrollTop + e.clientTop - window.innerHeight;
  }
}
class mM {
  constructor() {
    he(this, "hologramPlayed", !1);
    he(this, "parameters", {
      skillsAdditionalDelay: 0.2,
      aboutAdditionalDelay: 0.45,
    });
    he(this, "domElements", {
      infoBackground: document.getElementById("about-info-background"),
      profilePictureMaskRect: document.getElementById(
        "about-profile-picture-mask-rect"
      ),
      profilePictureGradient: document.getElementById(
        "about-profile-picture-gradient"
      ),
      skillsSvg: document.getElementById("skills-svg"),
      headerGroup: document.getElementById("about-svg-header"),
      skillsGroup: document.getElementById("about-svg-skills"),
      aboutGroup: document.getElementById("about-svg-about"),
      skillsHeaderRect: document.getElementById("skills-header-rect"),
      aboutHeaderRect: document.getElementById("about-header-rect"),
      aboutSection: document.getElementById("about-section"),
    });
    (this.experience = new ye()),
      (this.skills = this.experience.ui.about.render.skills),
      (this.scroll = this.experience.ui.scroll),
      (this.sounds = this.experience.sounds),
      (this.character = this.experience.world.character),
      this.addScrollEvents(),
      this.setupLines();
  }
  setupLines() {
    const e = document.querySelectorAll(".about-box-line");
    this.lines = [];
    for (let t = 0; t < e.length; t++) {
      const n = e[t],
        i = n.getTotalLength();
      this.lines.push({
        line: n,
        length: i,
      }),
        (n.style.strokeDasharray = i);
    }
  }
  playHologramAnimation(e = 0) {
    this.hologramPlayed ||
      ((this.hologramPlayed = !0),
      (this.isAnimating = !0),
      P.delayedCall(0.9, () => (this.isAnimating = !1)),
      P.delayedCall(0.3, () => this.sounds.play("hologram")),
      this.fadeInHologramUI(e),
      this.domElements.profilePictureMaskRect.classList.add("no-transition"),
      (this.domElements.profilePictureMaskRect.style.transform =
        "translateY(0)"),
      this.domElements.profilePictureGradient.classList.add("no-transition"),
      (this.domElements.profilePictureGradient.style.transform =
        "translateY(0)"),
      P.delayedCall(e, () => {
        this.animateHeaderBox(),
          P.delayedCall(this.parameters.skillsAdditionalDelay, () =>
            this.animateSkillsBox()
          ),
          P.delayedCall(this.parameters.aboutAdditionalDelay, () =>
            this.animateAboutBox()
          );
      }));
  }
  animateHeaderBox() {
    this.fillLine(0, 0.25),
      this.fillLine(1, 0.25),
      this.fillLine(2, 0.45),
      this.fillLine(3, 0.45);
    const e = document.querySelectorAll(".about-header-upper-text"),
      t = document.querySelectorAll(".about-header-lower-text");
    for (let n = 0; n < e.length; n++)
      P.fromTo(
        e[n],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.4 + n / 10,
        }
      ),
        P.fromTo(
          t[n],
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
            delay: 0.4 + n / 10,
          }
        );
    P.fromTo(
      document.getElementById("about-header-background"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        ease: et.easeIn,
        delay: 0.35,
      }
    ),
      P.fromTo(
        document.getElementById("about-profile-background"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.7,
          ease: et.easeIn,
        }
      ),
      this.domElements.profilePictureMaskRect.classList.remove("no-transition"),
      (this.domElements.profilePictureMaskRect.style.transform =
        "translateY(-205px)"),
      this.domElements.profilePictureGradient.classList.remove("no-transition"),
      (this.domElements.profilePictureGradient.style.transform =
        "translateY(-205px)");
  }
  animateSkillsBox() {
    this.fillLine(4, 0), this.fillLine(5, 0);
    for (let e = 0; e < this.skills.length; e++)
      P.fromTo(
        document.getElementById("about-skill-container-" + e),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          delay: e / 10,
        }
      ),
        P.fromTo(
          document.getElementById("about-skill-bar-" + e).style,
          {
            width: "0%",
          },
          {
            width: this.skills[e].width,
            duration: 0.3,
            delay: e / 10,
          }
        );
    P.fromTo(
      document.getElementById("about-skills-background"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        ease: et.easeIn,
      }
    ),
      P.fromTo(
        this.domElements.skillsHeaderRect,
        {
          width: 0,
        },
        {
          width: 500,
          duration: 0.5,
          ease: et.easeIn,
        }
      );
  }
  animateAboutBox() {
    this.fillLine(6, 0),
      this.fillLine(7, 0),
      P.fromTo(
        document.getElementById("about-about-background"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.7,
          ease: et.easeIn,
        }
      ),
      P.fromTo(
        this.domElements.aboutHeaderRect,
        {
          width: 0,
        },
        {
          width: 500,
          duration: 0.5,
          ease: et.easeIn,
        }
      );
    const e = document.querySelectorAll(".about-icon");
    for (let i = 0; i < e.length; i++)
      P.fromTo(
        e[i],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: i / 10,
        }
      );
    const t = document.querySelectorAll(".about-text");
    for (let i = 0; i < t.length; i++)
      P.fromTo(
        t[i],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: i / 10,
        }
      );
    const n = document.querySelectorAll(".about-pixel-mask-rect");
    for (let i = 0; i < n.length; i++)
      P.fromTo(
        n[i],
        {
          height: 0,
        },
        {
          height: 64,
          delay: i / 10,
        }
      );
  }
  addScrollEvents() {
    new Ln({
      element: document.getElementById("work-section"),
      direction: "up",
      f: () => {
        this.playHologramAnimation(0.1), this.resetCharacterToPosition();
      },
      repeats: !0,
    });
  }
  resetCharacterToPosition() {
    !this.experience.ui.landingPage.visible &&
      this.character.body.model.position.y != -18.95 &&
      !this.experience.ui.landingPage.isAnimating &&
      (this.character.animations.actions.current._clip.name != "water-idle" &&
        this.character.animations.play("waterIdle", 0),
      (this.character.body.model.position.y = -18.95),
      this.character.body.updateWireframe("down"),
      this.character.body.model.scale.set(1, 1, 1));
  }
  fadeInHologramUI(e) {
    P.fromTo(
      this.domElements.headerGroup,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
        delay: e,
      }
    ),
      P.fromTo(
        this.domElements.skillsGroup,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          delay: e + this.parameters.skillsAdditionalDelay,
        }
      ),
      P.fromTo(
        this.domElements.aboutGroup,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          delay: e + this.parameters.aboutAdditionalDelay,
        }
      );
  }
  fillLine(e, t = 0) {
    const n = this.lines[e];
    P.fromTo(
      n.line,
      {
        strokeDashoffset: n.length,
      },
      {
        strokeDashoffset: 0,
        duration: 0.6,
        delay: t,
      }
    );
  }
  resize() {
    this.addScrollEvents();
  }
}

export { Ln, dM, eM, fM, hM, iM, lM, mM, nM, oM, pM, qu, rM, sM, tM, uM };
