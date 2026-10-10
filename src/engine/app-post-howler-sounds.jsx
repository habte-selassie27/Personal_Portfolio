import { he } from "./preamble.jsx";
import { wv } from "./three-10.jsx";
import { P } from "./gsap-css-plugin.jsx";
import { Ni } from "./app-scroll.jsx";
import { ye } from "./engine-main.jsx";
class EM {
  constructor() {
    he(this, "items", [
      {
        name: "mouseWheel",
        files: [
          "/sounds/mouse-wheel-0.mp3",
          "/sounds/mouse-wheel-1.mp3",
          "/sounds/mouse-wheel-2.mp3",
        ],
        group: "landing",
        volume: 0.6,
      },
      {
        name: "bubble",
        files: [
          "/sounds/bubble-0.mp3",
          "/sounds/bubble-1.mp3",
          "/sounds/bubble-2.mp3",
        ],
        group: "lab",
        volume: 0.2,
      },
      {
        name: "roomAmbience",
        files: ["/sounds/room-ambience.mp3"],
        group: "landing",
        volume: 0.1,
        html5: !0,
      },
      {
        name: "notification",
        files: ["/sounds/notification.mp3"],
        group: "landing",
        volume: 0.25,
      },
      {
        name: "longKeyboard",
        files: ["/sounds/long-keyboard.mp3"],
        group: "landing",
        volume: 0.5,
      },
      {
        name: "labAmbience",
        files: ["/sounds/lab-ambience.mp3"],
        group: "lab",
        volume: 0.15,
      },
      {
        name: "waterSplash",
        files: ["/sounds/water-splash.mp3"],
        group: "lab",
        volume: 0.3,
      },
      {
        name: "hologram",
        files: ["/sounds/hologram.mp3"],
        group: "lab",
        volume: 0.8,
      },
      {
        name: "transition0",
        files: ["sounds/transition-0.mp3"],
        group: "general",
        volume: 0.3,
      },
      {
        name: "transition1",
        files: ["sounds/transition-1.mp3"],
        group: "general",
        volume: 0.3,
      },
      {
        name: "waterUp",
        files: ["/sounds/water-up.mp3"],
        group: "general",
        volume: 0.5,
      },
      {
        name: "gasp",
        files: ["/sounds/gasp.mp3"],
        group: "general",
        volume: 0.2,
      },
      {
        name: "buttonClick",
        files: ["/sounds/button-click.mp3"],
        group: "general",
        volume: 1,
      },
      {
        name: "chairDown",
        files: ["/sounds/chair-down.mp3"],
        group: "landing",
        volume: 0.4,
      },
      {
        name: "chairImpact",
        files: ["/sounds/chair-impact.mp3"],
        group: "landing",
        volume: 1,
      },
      {
        name: "bird",
        files: ["/sounds/bird.mp3"],
        group: "landing",
        volume: 0.6,
      },
    ]);
    (this.experience = new ye()),
      (this.active = !1),
      this.setMute(),
      this.setMasterVolume(),
      this.setupSounds(),
      document.addEventListener("visibilitychange", () =>
        this.pauseAll(document.hidden)
      ),
      this.setRoomAmbience(),
      this.setLabAmbience();
  }
  setRoomAmbience() {
    (this.roomAmbience = this.items.find(
      (e) => e.name === "roomAmbience"
    ).howls[0]),
      (this.roomAmbience._loop = !0),
      (this.roomAmbience.name = "roomAmbience");
  }
  playRoomAmbience() {
    this.roomAmbiencePlaying ||
      ((this.roomAmbiencePlaying = !0), this.roomAmbience.play());
  }
  setLabAmbience() {
    (this.labAmbience = this.items.find(
      (e) => e.name === "labAmbience"
    ).howls[0]),
      (this.labAmbience._loop = !0),
      (this.labAmbience._volume = 0),
      (this.labAmbience.name = "labAmbience"),
      this.labAmbience.play();
  }
  labAmbienceScroll(e) {
    if (this.active) {
      let t = e === "recent" ? this.labAmbience.recentVolumePercentage : 1 - e;
      t < 0 && (t = 0),
        (this.labAmbience.recentVolumePercentage = t),
        this.items.forEach((n) => {
          n.group === "lab" &&
            n.howls.forEach((i) => {
              P.to(i, {
                volume: n.volume * t,
                duration: 0.2,
              });
            });
        });
    }
  }
  setupSounds() {
    this.items.forEach((e) => {
      (e.howls = []),
        e.files.forEach((t) => {
          e.howls.push(
            new Ni.Howl({
              src: t,
              volume: e.volume,
              html5: e.html5 ? e.html5 : !1,
            })
          );
        });
    });
  }
  pauseAll(e) {
    this.items.forEach((t) => {
      t.howls.forEach((n) => {
        t.name != "labAmbience" &&
          t.name != "roomAmbience" &&
          (e
            ? n.pause()
            : n.seek() != 0 && n.seek() != n.duration() && n.play());
      });
    });
  }
  muteGroup(e, t) {
    this.items.forEach((n) => {
      n.group === e &&
        n.howls.forEach((i) => {
          P.to(i, {
            volume: t ? 0 : n.volume,
            duration: 1,
          }),
            i.name === "roomAmbience" &&
              this.roomFadeTween &&
              this.roomFadeTween.kill(),
            t &&
              P.delayedCall(1, () => {
                i.name !== "labAmbience" &&
                  i.name !== "roomAmbience" &&
                  i.stop();
              });
        });
    });
  }
  play(e) {
    const t = this.items.find((n) => n.name === e);
    this.active &&
      (!this.experience.sizes.touch || e != "buttonClick") &&
      t.howls[Math.floor(Math.random() * t.howls.length)].play();
  }
  mute(e) {
    (this.active = !e), Ni.Howler.mute(e);
  }
  setMute() {
    document.addEventListener("visibilitychange", () => {
      this.active && document.hidden
        ? Ni.Howler.mute(!0)
        : this.active && !document.hidden && Ni.Howler.mute(!1);
    });
  }
  setMasterVolume() {
    (this.masterVolume = 0.5),
      Ni.Howler.volume(this.masterVolume),
      window.requestAnimationFrame(() => {
        Ni.Howler.volume(this.masterVolume);
      });
  }
}
class AM {
  constructor() {
    he(this, "objects", []);
    he(this, "pointer", {
      x: 0,
      y: 0,
    });
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.camera = this.experience.camera),
      (this.scene = this.experience.scene),
      this.resources.on("ready", () => {
        (this.instance = new wv()),
          (this.hoverIcon = this.experience.ui.hoverIcon),
          this.scene.traverse((e) => {
            (e.onHover || e.onClick) && this.objects.push(e);
          }),
          this.hoverIcon.on("move", () => {
            (this.positionTriggered = !1),
              (this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1),
              (this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1);
          }),
          window.addEventListener("click", () => {
            (this.positionTriggered = !1), (this.triggerClick = !0);
          });
      });
  }
  update() {
    if (
      this.instance &&
      this.hoverIcon &&
      this.pointer.x != 0 &&
      !this.positionTriggered
    ) {
      (this.positionTriggered = !0),
        this.instance.setFromCamera(this.pointer, this.camera.instance);
      const e = this.instance.intersectObjects(this.objects);
      e.length == 0
        ? (this.hoverIcon.setupDefault(),
          (this.intersect = null),
          (this.isHovering = !1),
          (this.triggerClick = !1))
        : ((this.intersect = e[0]),
          this.intersect.object.onHover && this.intersect.object.onHover(),
          (this.isHovering = this.intersect.object.hoverIcon),
          this.intersect.object.hoverIcon &&
            this.intersect.object.hoverIcon == "pointer" &&
            this.hoverIcon.setupPointer(),
          this.triggerClick &&
            this.intersect.object.onClick &&
            this.intersect.object.onClick(),
          (this.triggerClick = !1));
    }
  }
}

export { AM, EM };
