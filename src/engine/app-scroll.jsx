import { he } from "./preamble.jsx";
import { Ai } from "./three-11.jsx";
import { Mb, Sb, et, yn } from "./gsap-tail.jsx";
import { P } from "./gsap-css-plugin.jsx";
import { Ln, dM, fM, hM, iM, lM, mM, nM, oM, pM, qu, rM, sM, uM } from "./app-work.jsx";
import { ye } from "./engine-main.jsx";
class gM {
  constructor() {
    he(this, "domElements", {
      scrollContainer: document.getElementById("scroll-container"),
      landingPage: document.getElementById("landing-page"),
      landingPageContent: document.getElementById("landing-page-section"),
      menuContainer: document.getElementById("menu-container"),
      logoWhiteBackground: document.getElementById("logo-white-background"),
      profilePictureMaskRect: document.getElementById(
        "about-profile-picture-mask-rect"
      ),
    });
    he(this, "items", [
      {
        name: "home",
        elements: [
          document.querySelectorAll(".menu-item")[0],
          document.getElementById("logo-click-container"),
        ],
      },
      {
        name: "about",
        elements: [document.querySelectorAll(".menu-item")[1]],
        onOpen: () =>
          this.experience.ui.about.animations.playHologramAnimation(0.1),
      },
      {
        name: "work",
        elements: [document.querySelectorAll(".menu-item")[2]],
      },
      {
        name: "contact",
        elements: [
          document.querySelectorAll(".menu-item")[3],
          document.getElementById("landing-cta-button"),
        ],
      },
    ]);
    (this.experience = new ye()),
      (this.transition = this.experience.ui.transition),
      (this.scrollIcon = this.experience.ui.scrollIcon),
      (this.landingPage = this.experience.ui.landingPage),
      (this.scroll = this.experience.ui.scroll),
      (this.renderer = this.experience.renderer),
      (this.waypoints = this.experience.waypoints),
      (this.character = this.experience.world.character),
      (this.menu = this.experience.ui.menu.main),
      (this.background = this.experience.world.background),
      (this.room = this.experience.world.landingPage.room),
      (this.sections = this.experience.ui.sections),
      (this.sounds = this.experience.sounds),
      (this.sizes = this.experience.sizes),
      (this.contactAnimation = this.experience.world.contact.animation),
      this.menu.on("open", () => this.updateActiveItem()),
      this.addClickEventListeners();
  }
  addClickEventListeners() {
    this.items.forEach((e) => {
      e.elements.forEach((t) => {
        t.addEventListener("click", () => {
          this.sounds.play("buttonClick"), this.openItem(e);
        });
      });
    });
  }
  updateActiveItem() {
    this.landingPage.visible
      ? (this.clearAllActiveItems(),
        document
          .querySelectorAll(".menu-item")[0]
          .classList.add("active-menu-item"))
      : this.items.forEach((e) => {
          if (e.name !== "home") {
            const t = this.sections.sections.find((n) => n.name === e.name).y;
            if (this.scroll.scrollY + window.innerHeight / 2 >= t) {
              this.clearAllActiveItems(),
                document
                  .querySelectorAll(".menu-item")
                  [this.items.indexOf(e)].classList.add("active-menu-item");
              return;
            }
          }
        });
  }
  clearAllActiveItems() {
    document
      .querySelectorAll(".menu-item")
      .forEach((t) => t.classList.remove("active-menu-item"));
  }
  openItem(e) {
    this.menu.visible || this.clearAllActiveItems(),
      !this.transition.isShowing &&
        !e.elements[0].classList.contains("active-menu-item") &&
        !(this.landingPage.visible && e.name == "home") &&
        (this.transition.show(),
        P.delayedCall(0.7, () => {
          this.transition.hide(), this.setupItem(e);
        }));
  }
  setupItem(e) {
    this.scrollIcon.kill(),
      e.name != "about" &&
        e.name != "home" &&
        (        (this.cards = this.experience.ui.work.cards),
        (this.cards.currentItemIndex = Math.floor((oM.length - 1) / 2)),
        this.cards.updatePositions()),
      this.experience.ui.hoverIcon.setupDefault(),
      this.experience.ui.hoverIcon.updateBaseColor("#FF923E"),
      e.onOpen && e.onOpen(),
      e.name != "home"
        ? this.setupScrollContainerItem(e)
        : this.setupLandingPage();
  }
  setupLandingPage() {
    (this.landingPage.visible = !0),
      this.waypoints.moveToWaypoint(
        this.sizes.portrait ? "landing-page-portrait" : "landing-page",
        !1
      ),
      this.contactAnimation.resetCharacter(),
      this.sounds.muteGroup("landing", !1),
      this.sounds.muteGroup("lab", !0),
      this.room.baseModel.scale.set(1, 1, 1),
      (this.room.shadow.material.uniforms.uOpacity.value = 1),
      (this.character.body.model.position.y = -5.7),
      this.character.animations.play("idle", 0),
      this.character.body.updateWireframe("up"),
      (this.character.face.material.map = this.character.face.textures.default),
      this.character.intervals.scrollIntervalCall &&
        this.character.intervals.scrollIntervalCall.restart(!0),
      this.character.intervals.killLeftDesktopIntervals(),
      this.experience.world.landingPage.mouse.moveToIdleStartPositon(),
      this.moveWithoutTransition(this.domElements.landingPage, "top", "0"),
      this.moveWithoutTransition(
        this.domElements.scrollContainer,
        "top",
        "100%"
      ),
      P.to(this.domElements.scrollContainer, {
        y: 0,
        duration: 0,
      }),
      this.renderer.instance.setClearColor("#F5EFE6"),
      (this.background.material.uniforms.uOffset.value =
        -this.background.height),
      P.to(this.domElements.logoWhiteBackground, {
        y: 0,
        duration: 0,
      }),
      this.instantHideMenu(),
      (this.scroll.scrollY = 0);
  }
  setupScrollContainerItem(e) {
    const t = this.sections.sections.find((n) => n.name === e.name);
    (this.landingPage.visible = !1),
      this.waypoints.moveToWaypoint(
        this.sizes.portrait ? "scroll-start-portrait" : "scroll-start",
        !1
      ),
      this.contactAnimation.resetCharacter(),
      e.name != "about"
        ? this.experience.ui.scrollScrollIcon.kill()
        : this.experience.ui.scrollScrollIcon.fade(!0),
      this.sounds.muteGroup("landing", !0),
      e.name == "contact"
        ? (this.sizes.portrait ||
            (this.contactAnimation.playIdle(),
            P.delayedCall(1, () => this.contactAnimation.playTransition())),
          this.experience.ui.contact.animationEvents.resetPositions(),
          this.experience.ui.work.scrollEvents.resetPositions())
        : e.name == "work"
        ? (this.contactAnimation.playIdle(),
          this.experience.ui.work.scrollEvents.resetPositions())
        : this.experience.ui.about.animations.resetCharacterToPosition(),
      this.scroll.resetAllEvents(),
      this.moveWithoutTransition(this.domElements.landingPage, "top", "-100%"),
      this.moveWithoutTransition(this.domElements.scrollContainer, "top", "0"),
      this.renderer.instance.setClearColor("#EFE7DC"),
      this.instantHideMenu(),
      (this.scroll.scrollY = t.y),
      this.scroll.performScroll(0, "force");
  }
  instantHideMenu() {
    (this.menu.visible = !1),
      this.menu.resetMenuButton(),
      this.moveWithoutTransition(this.domElements.scrollContainer, "left", "0"),
      this.moveWithoutTransition(
        this.domElements.landingPageContent,
        "left",
        "0"
      ),
      this.moveWithoutTransition(
        this.domElements.menuContainer,
        "right",
        `-${this.domElements.menuContainer.clientWidth}px`
      ),
      P.to(this.domElements.logoWhiteBackground, {
        opacity: 1,
        duration: 0,
      });
  }
  moveWithoutTransition(e, t, n) {
    e.classList.add("no-transition"),
      (e.style[t] = n),
      e.offsetHeight,
      setTimeout(() => {
        e.classList.remove("no-transition");
      });
  }
}
class _M {
  constructor() {
    he(this, "domElements", {
      aboutContainer: document.getElementById("about-section"),
      workContainer: document.getElementById("work-section"),
    });
    he(this, "sections", [
      {
        name: "about",
        y: 0,
        container: document.getElementById("about-section"),
        offset: () => 0,
      },
      {
        name: "work",
        y: 0,
        container: document.getElementById("work-section"),
        offset: () => 20,
      },
      {
        name: "technologies",
        y: 0,
        container: document.getElementById("technologies-section"),
        offset: () => 0,
      },
      {
        name: "experience",
        y: 0,
        container: document.getElementById("experience-section"),
        offset: () => 0,
      },
      {
        name: "education",
        y: 0,
        container: document.getElementById("education-section"),
        offset: () => 0,
      },
      {
        name: "certificates",
        y: 0,
        container: document.getElementById("certificates-section"),
        offset: () => 0,
      },
      {
        name: "contact",
        y: 0,
        container: document.getElementById("contact-section"),
        offset: () => (this.sizes.portrait ? -100 : 0),
      },
    ]);
    (this.experience = new ye()),
      (this.scroll = this.experience.ui.scroll),
      (this.gestures = this.experience.gestures),
      (this.sizes = this.experience.sizes),
      this.setSectionsY();
  }
  setSectionsY() {
    this.sections.forEach((e) => {
      e.y = 0;
      for (let t = 0; t < this.sections.length; t++)
        t < this.sections.indexOf(e) &&
          (e.y += this.sizes.getAbsoluteHeight(this.sections[t].container));
      (e.y += this.sizes.getMarginTop(e.container)), (e.y += e.offset());
    });
  }
  resize() {
    this.setSectionsY();
  }
}
class yM {
  constructor() {
    he(this, "domElements", {
      submitButton: document.getElementById("contact-submit-button"),
      formContainer: document.getElementById("contact-form-container"),
      loadingContainer: document.getElementById("contact-loading-container"),
      resultContainer: document.getElementById("contact-result-container"),
      resultMessage: document.getElementById(
        "contact-result-message-container"
      ),
      resultButton: document.getElementById("contact-result-button"),
      errorLines: document.querySelectorAll(".contact-error-line"),
      successLine: document.getElementById("contact-success-line"),
    });
    he(this, "fields", [
      {
        input: document.getElementById("contact-name-input-field"),
        container: document.getElementById("contact-name-input"),
      },
      {
        input: document.getElementById("contact-email-input-field"),
        container: document.getElementById("contact-email-input"),
      },
      {
        input: document.getElementById("contact-message-input-field"),
        container: document.getElementById("contact-message-input"),
      },
    ]);
    (this.experience = new ye()),
      (this.sections = this.experience.ui.sections),
      (this.scroll = this.experience.ui.scroll),
      (this.sounds = this.experience.sounds),
      this.addSubmitButtonEventListener(),
      this.addHideErrorEventListeners(),
      this.addResultButtonEventListener(),
      this.initTabEvents();
  }
  initTabEvents() {
    window.addEventListener("keydown", () => {
      event.keyCode == 9 &&
        (event.preventDefault(),
        this.fields.forEach((e) => {
          e.input === document.activeElement &&
            this.focusNext(this.fields.indexOf(e));
        }));
    });
  }
  focusNext(e) {
    if (
      this.scroll.scrollY + window.innerHeight / 3 >=
      this.sections.sections.find((t) => t.name === "contact").y
    ) {
      const t = this.fields[e + 1 == this.fields.length ? 0 : e + 1].input;
      setTimeout(() => t.focus());
    }
  }
  addSubmitButtonEventListener() {
    this.domElements.submitButton.addEventListener("click", () => {
      this.sounds.play("buttonClick"),
        this.hideAllErrors(),
        this.checkNameInput();
    });
  }
  addHideErrorEventListeners() {
    this.fields.forEach((e) => {
      e.container.addEventListener("focusin", () => this.hideError(e)),
        e.input.addEventListener("input", () => this.hideError(e));
    });
  }
  hideAllErrors() {
    this.fields.forEach((e) => this.hideError(e));
  }
  hideError(e) {
    document
      .querySelectorAll(".error-label")
      [this.fields.indexOf(e)].classList.add("hide"),
      e.container.classList.remove("error-container");
  }
  showError(e) {
    document
      .querySelectorAll(".error-label")
      [this.fields.indexOf(e)].classList.remove("hide"),
      e.container.classList.add("error-container");
  }
  checkNameInput() {
    const e = this.fields[0];
    e.input.value.length >= 4 ? this.checkEmailInput() : this.showError(e);
  }
  checkEmailInput() {
    const e = this.fields[1];
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.input.value)
      ? this.checkMessageInput()
      : this.showError(e);
  }
  checkMessageInput() {
    const e = this.fields[2];
    e.input.value.length >= 10 ? this.sendMail() : this.showError(e);
  }
  async sendMail() {
    this.showContainer("loading");
    const e = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.fields[0].input.value,
        email: this.fields[1].input.value,
        message: this.fields[2].input.value,
      }),
    });
    this.showResult(e);
  }
  hideAllContainers() {
    this.domElements.formContainer.classList.add("hide"),
      this.domElements.resultContainer.classList.add("hide"),
      this.domElements.loadingContainer.classList.add("hide");
  }
  showContainer(e) {
    this.hideAllContainers(),
      P.fromTo(
        this.domElements[e + "Container"],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
        }
      ),
      this.domElements[e + "Container"].classList.remove("hide");
  }
  showResult(e) {
    const t = Math.floor(e.status / 100);
    this.showContainer("result"),
      (this.domElements.resultMessage.innerHTML =
        t == 2
          ? "<h4>Your message has been sent.</h4><span>I'll get back to you as soon as possible.</span>"
          : "<h4>Oops. An error occurred.</h4><span>Please try again.</span>"),
      (this.domElements.resultButton.innerHTML =
        t == 2 ? "Cool!" : "Try again"),
      t == 2 ? this.showSuccessIcon() : this.showErrorIcon();
  }
  addResultButtonEventListener() {
    this.domElements.resultButton.addEventListener("click", () => {
      this.sounds.play("buttonClick"),
        this.showContainer("form"),
        this.domElements.errorLines[0].classList.contains("hide") &&
          this.clearInputs();
    });
  }
  showSuccessIcon() {
    this.domElements.successLine.classList.remove("hide"),
      this.domElements.errorLines.forEach((e) => e.classList.add("hide")),
      this.fillLine(this.domElements.successLine);
  }
  showErrorIcon() {
    this.domElements.successLine.classList.add("hide"),
      this.domElements.errorLines.forEach((t) => t.classList.remove("hide"));
    let e = 0;
    this.domElements.errorLines.forEach((t) => {
      this.fillLine(t, e, 0.3), (e += 0.3);
    });
  }
  clearInputs() {
    this.fields.forEach((e) => (e.input.value = ""));
  }
  fillLine(e, t = 0, n = 0.5) {
    if (e.getClientRects().length != 0) {
      const i = e.getTotalLength();
      (e.style.strokeDasharray = i),
        P.fromTo(
          e.style,
          {
            strokeDashoffset: i,
          },
          {
            strokeDashoffset: 0,
            duration: n,
            delay: t,
          }
        );
    }
  }
}
class xM {
  constructor() {
    he(this, "domElements", {
      smallHeader: document.querySelectorAll(".section-subheader-container")[1],
      header: document.querySelectorAll(".section-header-container")[2],
      form: document.getElementById("contact-container"),
      contactSection: document.getElementById("contact-section"),
    });
    (this.experience = new ye()),
      (this.animation = this.experience.world.contact.animation),
      (this.sizes = this.experience.sizes),
      this.addScrollEvents();
  }
  addScrollEvents() {
    (this.scrollEvents = [
      new Ln({
        element: this.domElements.contactSection,
        direction: "down",
        f: () => this.animation.playIdle(),
        repeats: !0,
      }),
      new Ln({
        element: this.domElements.contactSection,
        direction: "down",
        f: () => P.delayedCall(0.5, () => this.animation.playTransition()),
        offset: this.sizes.portrait
          ? this.sizes.getAbsoluteHeight(this.domElements.header) +
            this.sizes.getAbsoluteHeight(this.domElements.smallHeader) +
            this.sizes.getAbsoluteHeight(this.domElements.form) +
            window.innerHeight * 0.3
          : this.domElements.contactSection.clientHeight * 0.5,
      }),
    ]),
      this.played ||
        (this.scrollEvents.push(
          new Ln({
            element: this.domElements.smallHeader,
            direction: "down",
            f: () =>
              P.to(this.domElements.smallHeader, {
                y: 0,
                opacity: 1,
                duration: 0.4,
              }),
            setup: () =>
              P.to(this.domElements.smallHeader, {
                y: 100,
                opacity: 0,
                duration: 0,
              }),
            reset: () =>
              P.to(this.domElements.smallHeader, {
                y: 0,
                opacity: 1,
                duration: 0,
              }),
          })
        ),
        this.scrollEvents.push(
          new Ln({
            element: this.domElements.header,
            direction: "down",
            f: () =>
              P.to(this.domElements.header, {
                y: 0,
                opacity: 1,
                duration: 0.6,
              }),
            setup: () =>
              P.to(this.domElements.header, {
                y: 100,
                opacity: 0,
                duration: 0,
              }),
            reset: () =>
              P.to(this.domElements.header, {
                y: 0,
                opacity: 1,
                duration: 0,
              }),
          })
        ),
        this.scrollEvents.push(
          new Ln({
            element: this.domElements.form,
            direction: "down",
            f: () =>
              P.to(this.domElements.form, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                onComplete: () => (this.played = !0),
              }),
            setup: () =>
              P.to(this.domElements.form, {
                y: 100,
                opacity: 0,
                duration: 0,
              }),
            reset: () =>
              P.to(this.domElements.form, {
                y: 0,
                opacity: 1,
                duration: 0,
                onComplete: () => (this.played = !0),
              }),
          })
        ));
  }
  resetPositions() {
    this.scrollEvents.forEach((e) => {
      e.reset && e.reset();
    });
  }
  resize() {
    setTimeout(() => this.addScrollEvents());
  }
}
class vM {
  constructor() {
    he(this, "parameters", {
      timeTillFinish: 1.2,
    });
    he(this, "domElements", {
      container: document.getElementById("intro-container"),
      overlay: document.getElementById("overlay-container"),
      landingPage: document.getElementById("landing-page"),
      logo: document.getElementById("intro-svg"),
      scrollIcon: document.querySelector(".scroll-icon"),
    });
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      this.resources.on("ready", () => {
        (this.resourcesReady = !0),
          (this.room = this.experience.world.landingPage.room),
          (this.landingPage = this.experience.ui.landingPage),
          (this.gestures = this.experience.gestures),
          (this.character = this.experience.world.character),
          (this.sounds = this.experience.sounds),
          (this.tones = this.experience.world.landingPage.tones),
          (this.hoverIcon = this.experience.ui.hoverIcon),
          (this.soundButton = this.experience.ui.soundButton),
          P.delayedCall(1.2, () => {
            this.close(),
              this.clicked &&
                localStorage.getItem("soundActive") != "false" &&
                this.soundButton.activate(!1);
          });
      }),
      localStorage.getItem("soundActive") != "false"
        ? this.setupClickCTA()
        : this.killAnimation(),
      this.onWindowClick();
  }
  onWindowClick() {
    window.addEventListener("click", () => {
      this.clicked ||
        ((this.clicked = !0),
        this.closeClickCTA(),
        this.resourcesReady &&
          this.clicked &&
          localStorage.getItem("soundActive") != "false" &&
          this.soundButton.activate(!1),
        event.preventDefault(),
        this.sounds && this.sounds.playRoomAmbience());
    });
  }
  setupClickCTA() {
    this.experience.sizes.touch ||
      document.querySelector("body").classList.add("pointer"),
      document.getElementById("hover-icon").classList.add("clickCTA"),
      (this.clickCTAVisible = !0),
      this.startAnimation();
  }
  startAnimation() {
    this.animationElements = document.querySelectorAll(".hover-spread");
    for (let e = 0; e < this.animationElements.length; e++)
      P.fromTo(
        this.animationElements[e],
        {
          scale: 1,
        },
        {
          scale: 5,
          repeat: -1,
          duration: 1.5,
          delay: (e * 1.5) / 2,
          ease: Sb.easeNone,
        }
      ),
        P.fromTo(
          this.animationElements[e],
          {
            opacity: 0.175,
          },
          {
            opacity: 0,
            repeat: -1,
            duration: 1.5,
            delay: (e * 1.5) / 2,
            ease: Mb.easeIn,
          }
        );
  }
  killAnimation() {
    (this.animationElements = document.querySelectorAll(".hover-spread")),
      this.animationElements.forEach((e) => {
        P.killTweensOf(e),
          P.to(e, {
            opacity: 0,
          }),
          P.to(e, {
            scale: 0,
          });
      });
  }
  closeClickCTA() {
    setTimeout(() => (this.clickCTAVisible = !1)),
      this.experience.sizes.touch ||
        document.querySelector("body").classList.remove("pointer"),
      document.getElementById("hover-icon").classList.remove("clickCTA"),
      this.killAnimation();
  }
  close() {
    this.closed ||
      ((this.closed = !0),
      this.experience.sizes.touch ||
        (this.domElements.container.style.cursor = "unset"),
      P.to(this.hoverIcon.domElements.icon, {
        scale: 1,
        duration: 0.3,
        delay: 0.5,
      }),
      this.hoverIcon.setupDefault(),
      this.playIntro());
  }
  playIntro() {
    P.delayedCall(
      0.1,
      () => (this.domElements.container.style.backgroundColor = "transparent")
    ),
      P.to(this.domElements.logo, {
        scale: 0,
        duration: 0.6,
        ease: yn.easeIn.config(2.5),
      }),
      this.landingPage.playOpeningAnimation(0.62),
      this.room.bounceIn(0.45, !0),
      this.character.animations.playIntroAnimation(),
      P.delayedCall(this.parameters.timeTillFinish, () => this.finish()),
      this.clicked && this.sounds.playRoomAmbience();
  }
  finish() {
    P.fromTo(
      this.domElements.overlay,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    ),
      this.domElements.container.classList.add("hide"),
      this.gestures.init();
  }
}
class bM {
  constructor() {
    he(this, "domElements", {
      aboutSection: document.getElementById("about-section"),
      smallHeader: document.querySelector(".section-subheader-container"),
      header0: document.querySelector(".section-header-container"),
      header1: document.querySelectorAll(".section-header-container")[1],
      cards: document.querySelectorAll(".work-item-container"),
      renderContainer: document.getElementById("work-render-container"),
      navigation: document.getElementById("work-navigation-container"),
    });
    (this.experience = new ye()),
      (this.sizes = this.experience.sizes),
      this.addScrollEvents();
  }
  resetPositions() {
    this.scrollEvents.forEach((e) => {
      e.reset && e.reset();
    });
  }
  addScrollEvents() {
    this.played ||
      (this.scrollEvents = [
        new Ln({
          element: this.domElements.smallHeader,
          direction: "down",
          f: () => {
            P.to(this.domElements.smallHeader, {
              y: 0,
              opacity: 1,
              duration: 0.3,
            });
          },
          setup: () =>
            P.to(this.domElements.smallHeader, {
              y: 100,
              opacity: 0,
              duration: 0,
            }),
          reset: () =>
            P.to(this.domElements.smallHeader, {
              y: 0,
              opacity: 1,
              duration: 0,
            }),
        }),
        new Ln({
          element: this.domElements.header0,
          direction: "down",
          f: () =>
            P.to(this.domElements.header0, {
              y: 0,
              opacity: 1,
              duration: 0.4,
            }),
          setup: () =>
            P.to(this.domElements.header0, {
              y: 100,
              opacity: 0,
              duration: 0,
            }),
          reset: () =>
            P.to(this.domElements.header0, {
              y: 0,
              opacity: 1,
              duration: 0,
            }),
        }),
        new Ln({
          element: this.domElements.header1,
          direction: "down",
          f: () =>
            P.to(this.domElements.header1, {
              y: 0,
              opacity: 1,
              duration: 0.5,
            }),
          setup: () =>
            P.to(this.domElements.header1, {
              y: 100,
              opacity: 0,
              duration: 0,
            }),
          reset: () =>
            P.to(this.domElements.header1, {
              y: 0,
              opacity: 1,
              duration: 0,
            }),
        }),
        new Ln({
          element: this.domElements.cards[2],
          direction: "down",
          f: () => {
            const center = (this.domElements.cards.length - 1) / 2;
            this.domElements.cards.forEach((el, idx) => {
              P.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.65 + 0.1 * Math.min(4, Math.abs(idx - center)),
                onComplete:
                  idx === this.domElements.cards.length - 1
                    ? () => {
                        P.delayedCall(0.2, () => {
                          this.addTransitionClass(!0), (this.played = !0);
                        });
                      }
                    : void 0,
              });
            });
          },
          setup: () => {
            this.addTransitionClass(!1),
              this.domElements.cards.forEach((el) => {
                P.to(el, {
                  y: 100,
                  opacity: 0,
                  duration: 0,
                });
              });
          },
          reset: () => {
            const last = this.domElements.cards.length - 1;
            this.domElements.cards.forEach((el, idx) => {
              P.to(el, {
                y: 0,
                opacity: 1,
                duration: 0,
                onComplete:
                  idx === last
                    ? () => {
                        this.addTransitionClass(!0), (this.played = !0);
                      }
                    : void 0,
              });
            });
          },
        }),
      ]);
  }
  addTransitionClass(e) {
    this.domElements.cards.forEach((t) => {
      e
        ? t.classList.add("work-item-container-transition")
        : t.classList.remove("work-item-container-transition");
    });
  }
  resize() {
    setTimeout(() => this.addScrollEvents());
  }
}
class wM {
  constructor() {
    he(
      this,
      "downLines",
      document.querySelectorAll(".about-down-animation-line")
    );
    he(this, "upLines", document.querySelectorAll(".about-up-animation-line"));
    (this.experience = new ye()),
      (this.scroll = this.experience.ui.scroll),
      (this.aboutAnimations = this.experience.ui.about.animations),
      this.scroll.on("scroll-down", () => this.showLines(this.downLines)),
      this.scroll.on("scroll-up", () => this.showLines(this.upLines));
  }
  showLines(e) {
    !this.aboutAnimations.isAnimating &&
      this.aboutAnimations.hologramPlayed &&
      e.forEach((t) => {
        P.to(t, {
          opacity: 0.8,
          duration: 0.3,
          onComplete: () => {
            P.to(t, {
              opacity: 0,
              duration: 0.5,
            });
          },
        });
      });
  }
}
class MM {
  constructor() {
    (this.experience = new ye()),
      (this.resources = this.experience.resources),
      (this.world = this.experience.world),
      (this.sizes = this.experience.sizes),
      this.resources.on("ready", () => {
        (this.transition = new sM()),
          (this.scrollIcon = new qu(0)),
          (this.scrollScrollIcon = new qu(1)),
          (this.landingPage = new nM()),
          (this.scroll = new iM()),
          (this.sections = new _M()),
          (this.soundButton = new pM()),
          (this.menu = {}),
          (this.menu.main = new fM()),
          (this.menu.items = new gM()),
          (this.about = {}),
          (this.about.render = new hM()),
          (this.about.animations = new mM()),
          (this.about.scrollLines = new wM()),
          (this.work = {}),
          (this.work.render = new lM()),
          (this.work.cards = new rM()),
          (this.work.scrollEvents = new bM()),
          (this.contact = {}),
          (this.contact.form = new yM()),
          (this.contact.animationEvents = new xM()),
          (this.header = new dM()),
          (this.hoverIcon = new uM());
      }),
      (this.intro = new vM());
  }
  resize() {
    this.scroll && this.scroll.resize(),
      this.scrollbar && this.scrollbar.resize(),
      this.menu && this.menu.main && this.menu.main.resize(),
      this.sections && this.sections.resize(),
      this.about && this.about.animations && this.about.animations.resize(),
      this.contact &&
        this.contact.animationEvents &&
        this.contact.animationEvents.resize(),
      this.hoverIcon && this.hoverIcon.resize(),
      this.work && this.work.scrollEvents && this.work.scrollEvents.resize();
  }
  update() {
    this.scroll && this.scroll.update();
  }
}
class SM extends Ai {
  constructor() {
    super(), (this.experience = new ye());
  }
  init() {
    this.applyEventListeners(), this.defineCurrentHoverElement();
  }
  applyEventListeners() {
    (this.mousewheelOrKey = this.mousewheelOrKey.bind(this)),
      (this.touchStart = this.touchStart.bind(this)),
      (this.touchEnd = this.touchEnd.bind(this)),
      document.addEventListener("touchstart", this.touchStart),
      document.addEventListener("touchend", this.touchEnd),
      document.addEventListener("mousewheel", this.mousewheelOrKey),
      document.addEventListener("wheel", this.mousewheelOrKey),
      window.addEventListener("keydown", this.mousewheelOrKey);
  }
  defineCurrentHoverElement() {
    window.addEventListener("mouseover", () => {
      event.path && (this.currentHoveringElement = event.path[0]);
    });
  }
  mousewheelOrKey() {
    event.deltaY > 0 || event.keyCode == 40
      ? this.trigger("scroll-down")
      : (event.deltaY < 0 || event.keyCode == 38) && this.trigger("scroll-up"),
      this.trigger("scroll");
  }
  touchStart() {
    (this.mTouchStartY = event.changedTouches[0].clientY),
      (this.mTouchStartX = event.changedTouches[0].clientX),
      this.trigger("touch-start"),
      (this.touchStartTime = this.experience.time.current);
  }
  touchEnd() {
    (this.mTouchEndY = event.changedTouches[0].clientY),
      (this.mTouchEndX = event.changedTouches[0].clientX),
      (this.touchDistanceY = this.mTouchEndY - this.mTouchStartY),
      (this.touchDistanceX = this.mTouchEndX - this.mTouchStartX);
    const e = 10,
      t = 80;
    this.touchDistanceX < -t ||
    (this.touchDistanceX > t &&
      this.experience.ui.work.cards.isCurrentSwipeElement)
      ? this.mTouchEndX < this.mTouchStartX
        ? this.trigger("swipe-right")
        : this.mTouchEndX > this.mTouchStartX && this.trigger("swipe-left")
      : (this.touchDistanceY < -e || this.touchDistanceY > e) &&
        (this.mTouchEndY < this.mTouchStartY
          ? this.trigger("touch-down")
          : this.mTouchEndY > this.mTouchStartY && this.trigger("touch-up"));
  }
}
class TM {
  constructor() {
    he(this, "waypoints", [
      {
        name: "landing-page",
        position: {
          x: 5.8,
          y: 0,
          z: 8.3,
        },
        lookAt: {
          x: -2.7,
          y: -3.7,
          z: 0,
        },
      },
      {
        name: "landing-page-portrait",
        position: {
          x: 10.5,
          y: 2.5,
          z: 14,
        },
        lookAt: {
          x: 0.4,
          y: -0.1,
          z: 0,
        },
      },
      {
        name: "landing-menu",
        position: {
          x: -7,
          y: 0,
          z: 7.5,
        },
        lookAt: {
          x: 1,
          y: -3.7,
          z: 0,
        },
      },
      {
        name: "scroll-start",
        position: {
          x: 6,
          y: -14.75,
          z: 8.5,
        },
        lookAt: {
          x: -2.7,
          y: -17.45,
          z: 0,
        },
      },
      {
        name: "scroll-start-portrait",
        position: {
          x: 10.5,
          y: -12.5,
          z: 14,
        },
        lookAt: {
          x: 0.4,
          y: -19,
          z: 0,
        },
      },
      {
        name: "lab-menu",
        position: {
          x: -6,
          y: -14,
          z: 9.3,
        },
        lookAt: {
          x: 0.5,
          y: -17.7,
          z: 0,
        },
      },
      {
        name: "contact-menu",
        position: {
          x: 3.5,
          y: -25.9,
          z: 8.8,
        },
        lookAt: {
          x: 2,
          y: -29.6,
          z: 0,
        },
      },
    ]);
    (this.experience = new ye()),
      (this.camera = this.experience.camera.instance),
      (this.time = this.experience.time),
      (this.sizes = this.experience.sizes),
      (this.tweens = []),
      this.setupWaypoints(),
      this.sizes.on("portrait", () => this.onOrientationChange()),
      this.sizes.on("landscape", () => this.onOrientationChange());
  }
  onOrientationChange() {
    this.tweens.forEach((e) => {
      e.kill();
    });
  }
  setupWaypoints() {
    this.waypoints.forEach((e) => {
      this.camera.position.set(e.position.x, e.position.y, e.position.z),
        this.camera.lookAt(e.lookAt.x, e.lookAt.y, e.lookAt.z),
        (e.rotation = {}),
        (e.rotation.x = this.camera.rotation.x),
        (e.rotation.y = this.camera.rotation.y),
        (e.rotation.z = this.camera.rotation.z);
    });
  }
  moveToWaypoint(e, t = !0, n = 0.8) {
    const i = this.waypoints.find((s) => s.name === e);
    t
      ? (this.tweens.push(
          P.to(this.camera.position, {
            x: i.position.x,
            y: i.position.y,
            z: i.position.z,
            duration: n,
            ease: et.easeInOut,
          })
        ),
        this.tweens.push(
          P.to(this.camera.rotation, {
            x: i.rotation.x,
            y: i.rotation.y,
            z: i.rotation.z,
            duration: n,
            ease: et.easeInOut,
          })
        ))
      : (this.camera.position.set(i.position.x, i.position.y, i.position.z),
        this.camera.rotation.set(i.rotation.x, i.rotation.y, i.rotation.z));
  }
}
var Mr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Ni = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

export { MM, Mr, Ni, SM, TM };
