import { $c, $l, $p, Aa, Ea, Fr, Ge, Gi, Gp, Hp, Hs, Jc, Jn, Jp, Kc, Ke, Ki, Kp, Np, Oo, Or, Qc, Sa, Ta, Tl, Up, Vp, Wp, Ws, Xo, Xp, Yi, Yp, Zc, Zn, Zp, Zt, ah, bt, ch, cn, dh, eh, fh, hh, ie, ih, ir, jp, js, lh, mh, nh, oh, ph, qp, rh, rn, sh, te, th, ts, uh, ui, xn, xt, zp, zr, zs } from "./three-01.jsx";
import { C, _e, je } from "./three-02.jsx";
import { Dt, ad, dt, ft, oa, tt, wt } from "./three-03.jsx";
import { Vm } from "./three-04.jsx";
import { A0, C0, D0, E0, I0, L0, T0, _0, b0, gi, v0, w0, x0, y0 } from "./three-05.jsx";
import { Qy, Wy, ix, jy, md, nx, qy } from "./three-06.jsx";
function sx(o, e, t) {
  const n = t.isWebGL2;

  function i(s, r = null) {
    let a;
    if (s === Ki) return 5121;
    if (s === Up) return 32819;
    if (s === Gp) return 32820;
    if (s === Np) return 5120;
    if (s === zp) return 5122;
    if (s === Fr) return 5123;
    if (s === Hp) return 5124;
    if (s === Oo) return 5125;
    if (s === ui) return 5126;
    if (s === zs)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Vp) return 6406;
    if (s === rn) return 6408;
    if (s === qp) return 6409;
    if (s === Xp) return 6410;
    if (s === Gi) return 6402;
    if (s === js) return 34041;
    if (s === jp) return 6403;
    if (s === Wp)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (s === Tl)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Yp) return 36244;
    if (s === Jp) return 33319;
    if (s === Kp) return 33320;
    if (s === Zp) return 36249;
    if (s === Sa || s === Ta || s === Ea || s === Aa)
      if (r === Ge)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === Sa) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ta) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Ea) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Aa) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === Sa) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ta) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Ea) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Aa) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === Jc || s === Kc || s === Zc || s === $c)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === Jc) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Kc) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Zc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === $c) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === $p)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Qc || s === eh)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === Qc)
          return r === Ge ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === eh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === th ||
      s === nh ||
      s === ih ||
      s === sh ||
      s === rh ||
      s === oh ||
      s === ah ||
      s === lh ||
      s === ch ||
      s === hh ||
      s === uh ||
      s === dh ||
      s === fh ||
      s === ph
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === th)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === nh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === ih)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === sh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === rh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === oh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === ah)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === lh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === ch)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === hh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === uh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === dh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === fh)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === ph)
          return r === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === mh)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === mh)
          return r === Ge
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (s === Hs)
      return n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return {
    convert: i,
  };
}
class gd extends Dt {
  constructor(e = []) {
    super(), (this.cameras = e);
  }
}
gd.prototype.isArrayCamera = !0;
class Yn extends je {
  constructor() {
    super(), (this.type = "Group");
  }
}
Yn.prototype.isGroup = !0;
const rx = {
  type: "move",
};
class tl {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Yn()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = {
          pinching: !1,
        })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Yn()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new C()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new C())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Yn()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new C()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new C())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({
        type: "disconnected",
        data: e,
      }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      r = null;
    const a = this._targetRay,
      c = this._grip,
      h = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred")
      if (
        (a !== null &&
          ((i = t.getPose(e.targetRaySpace, n)),
          i !== null &&
            (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity
              ? ((a.hasLinearVelocity = !0),
                a.linearVelocity.copy(i.linearVelocity))
              : (a.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((a.hasAngularVelocity = !0),
                a.angularVelocity.copy(i.angularVelocity))
              : (a.hasAngularVelocity = !1),
            this.dispatchEvent(rx))),
        h && e.hand)
      ) {
        r = !0;
        for (const p of e.hand.values()) {
          const m = t.getJointPose(p, n);
          if (h.joints[p.jointName] === void 0) {
            const y = new Yn();
            (y.matrixAutoUpdate = !1),
              (y.visible = !1),
              (h.joints[p.jointName] = y),
              h.add(y);
          }
          const _ = h.joints[p.jointName];
          m !== null &&
            (_.matrix.fromArray(m.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = m.radius)),
            (_.visible = m !== null);
        }
        const d = h.joints["index-finger-tip"],
          l = h.joints["thumb-tip"],
          u = d.position.distanceTo(l.position),
          f = 0.02,
          g = 0.005;
        h.inputState.pinching && u > f + g
          ? ((h.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !h.inputState.pinching &&
            u <= f - g &&
            ((h.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (c.matrix.fromArray(s.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            s.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(s.linearVelocity))
              : (c.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(s.angularVelocity))
              : (c.hasAngularVelocity = !1)));
    return (
      a !== null && (a.visible = i !== null),
      c !== null && (c.visible = s !== null),
      h !== null && (h.visible = r !== null),
      this
    );
  }
}
class _d extends xt {
  constructor(e, t, n, i, s, r, a, c, h, d) {
    if (((d = d !== void 0 ? d : Gi), d !== Gi && d !== js))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && d === Gi && (n = Fr),
      n === void 0 && d === js && (n = Hs),
      super(null, i, s, r, a, c, d, n, h),
      (this.image = {
        width: e,
        height: t,
      }),
      (this.magFilter = a !== void 0 ? a : bt),
      (this.minFilter = c !== void 0 ? c : bt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
_d.prototype.isDepthTexture = !0;
class ox extends ts {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      r = null,
      a = "local-floor",
      c = null,
      h = null,
      d = null,
      l = null,
      u = null;
    const f = t.getContextAttributes();
    let g = null,
      p = null;
    const m = [],
      _ = new Map(),
      y = new Dt();
    y.layers.enable(1), (y.viewport = new Ke());
    const b = new Dt();
    b.layers.enable(2), (b.viewport = new Ke());
    const w = [y, b],
      x = new gd();
    x.layers.enable(1), x.layers.enable(2);
    let E = null,
      T = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (F) {
        let X = m[F];
        return (
          X === void 0 && ((X = new tl()), (m[F] = X)), X.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (F) {
        let X = m[F];
        return X === void 0 && ((X = new tl()), (m[F] = X)), X.getGripSpace();
      }),
      (this.getHand = function (F) {
        let X = m[F];
        return X === void 0 && ((X = new tl()), (m[F] = X)), X.getHandSpace();
      });

    function R(F) {
      const X = _.get(F.inputSource);
      X &&
        X.dispatchEvent({
          type: F.type,
          data: F.inputSource,
        });
    }

    function I() {
      _.forEach(function (F, X) {
        F.disconnect(X);
      }),
        _.clear(),
        (E = null),
        (T = null),
        e.setRenderTarget(g),
        (l = null),
        (d = null),
        (h = null),
        (i = null),
        (p = null),
        H.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({
          type: "sessionend",
        });
    }
    (this.setFramebufferScaleFactor = function (F) {
      (s = F),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (F) {
        (a = F),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return r;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : l;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return u;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (F) {
        if (((i = F), i !== null)) {
          if (
            ((g = e.getRenderTarget()),
            i.addEventListener("select", R),
            i.addEventListener("selectstart", R),
            i.addEventListener("selectend", R),
            i.addEventListener("squeeze", R),
            i.addEventListener("squeezestart", R),
            i.addEventListener("squeezeend", R),
            i.addEventListener("end", I),
            i.addEventListener("inputsourceschange", B),
            f.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const X = {
              antialias: i.renderState.layers === void 0 ? f.antialias : !0,
              alpha: f.alpha,
              depth: f.depth,
              stencil: f.stencil,
              framebufferScaleFactor: s,
            };
            (l = new XRWebGLLayer(i, t, X)),
              i.updateRenderState({
                baseLayer: l,
              }),
              (p = new Zt(l.framebufferWidth, l.framebufferHeight, {
                format: rn,
                type: Ki,
                encoding: e.outputEncoding,
              }));
          } else {
            let X = null,
              Z = null,
              Q = null;
            f.depth &&
              ((Q = f.stencil ? 35056 : 33190),
              (X = f.stencil ? js : Gi),
              (Z = f.stencil ? Hs : Fr));
            const $ = {
              colorFormat: e.outputEncoding === Ge ? 35907 : 32856,
              depthFormat: Q,
              scaleFactor: s,
            };
            (h = new XRWebGLBinding(i, t)),
              (d = h.createProjectionLayer($)),
              i.updateRenderState({
                layers: [d],
              }),
              (p = new Zt(d.textureWidth, d.textureHeight, {
                format: rn,
                type: Ki,
                depthTexture: new _d(
                  d.textureWidth,
                  d.textureHeight,
                  Z,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  X
                ),
                stencilBuffer: f.stencil,
                encoding: e.outputEncoding,
                samples: f.antialias ? 4 : 0,
              }));
            const ue = e.properties.get(p);
            ue.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (p.isXRRenderTarget = !0),
            this.setFoveation(1),
            (r = await i.requestReferenceSpace(a)),
            H.setContext(i),
            H.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({
              type: "sessionstart",
            });
        }
      });

    function B(F) {
      const X = i.inputSources;
      for (let Z = 0; Z < m.length; Z++) _.set(X[Z], m[Z]);
      for (let Z = 0; Z < F.removed.length; Z++) {
        const Q = F.removed[Z],
          $ = _.get(Q);
        $ &&
          ($.dispatchEvent({
            type: "disconnected",
            data: Q,
          }),
          _.delete(Q));
      }
      for (let Z = 0; Z < F.added.length; Z++) {
        const Q = F.added[Z],
          $ = _.get(Q);
        $ &&
          $.dispatchEvent({
            type: "connected",
            data: Q,
          });
      }
    }
    const v = new C(),
      L = new C();

    function U(F, X, Z) {
      v.setFromMatrixPosition(X.matrixWorld),
        L.setFromMatrixPosition(Z.matrixWorld);
      const Q = v.distanceTo(L),
        $ = X.projectionMatrix.elements,
        ue = Z.projectionMatrix.elements,
        Me = $[14] / ($[10] - 1),
        xe = $[14] / ($[10] + 1),
        Y = ($[9] + 1) / $[5],
        We = ($[9] - 1) / $[5],
        Re = ($[8] - 1) / $[0],
        Pe = (ue[8] + 1) / ue[0],
        se = Me * Re,
        Be = Me * Pe,
        j = Q / (-Re + Pe),
        K = j * -Re;
      X.matrixWorld.decompose(F.position, F.quaternion, F.scale),
        F.translateX(K),
        F.translateZ(j),
        F.matrixWorld.compose(F.position, F.quaternion, F.scale),
        F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const ne = Me + j,
        me = xe + j,
        de = se - K,
        Ce = Be + (Q - K),
        we = ((Y * xe) / me) * ne,
        ve = ((We * xe) / me) * ne;
      F.projectionMatrix.makePerspective(de, Ce, we, ve, ne, me);
    }

    function D(F, X) {
      X === null
        ? F.matrixWorld.copy(F.matrix)
        : F.matrixWorld.multiplyMatrices(X.matrixWorld, F.matrix),
        F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    (this.updateCamera = function (F) {
      if (i === null) return;
      (x.near = b.near = y.near = F.near),
        (x.far = b.far = y.far = F.far),
        (E !== x.near || T !== x.far) &&
          (i.updateRenderState({
            depthNear: x.near,
            depthFar: x.far,
          }),
          (E = x.near),
          (T = x.far));
      const X = F.parent,
        Z = x.cameras;
      D(x, X);
      for (let $ = 0; $ < Z.length; $++) D(Z[$], X);
      x.matrixWorld.decompose(x.position, x.quaternion, x.scale),
        F.position.copy(x.position),
        F.quaternion.copy(x.quaternion),
        F.scale.copy(x.scale),
        F.matrix.copy(x.matrix),
        F.matrixWorld.copy(x.matrixWorld);
      const Q = F.children;
      for (let $ = 0, ue = Q.length; $ < ue; $++) Q[$].updateMatrixWorld(!0);
      Z.length === 2 ? U(x, y, b) : x.projectionMatrix.copy(y.projectionMatrix);
    }),
      (this.getCamera = function () {
        return x;
      }),
      (this.getFoveation = function () {
        if (d !== null) return d.fixedFoveation;
        if (l !== null) return l.fixedFoveation;
      }),
      (this.setFoveation = function (F) {
        d !== null && (d.fixedFoveation = F),
          l !== null && l.fixedFoveation !== void 0 && (l.fixedFoveation = F);
      });
    let O = null;

    function N(F, X) {
      if (((c = X.getViewerPose(r)), (u = X), c !== null)) {
        const Q = c.views;
        l !== null &&
          (e.setRenderTargetFramebuffer(p, l.framebuffer),
          e.setRenderTarget(p));
        let $ = !1;
        Q.length !== x.cameras.length && ((x.cameras.length = 0), ($ = !0));
        for (let ue = 0; ue < Q.length; ue++) {
          const Me = Q[ue];
          let xe = null;
          if (l !== null) xe = l.getViewport(Me);
          else {
            const We = h.getViewSubImage(d, Me);
            (xe = We.viewport),
              ue === 0 &&
                (e.setRenderTargetTextures(
                  p,
                  We.colorTexture,
                  d.ignoreDepthValues ? void 0 : We.depthStencilTexture
                ),
                e.setRenderTarget(p));
          }
          const Y = w[ue];
          Y.matrix.fromArray(Me.transform.matrix),
            Y.projectionMatrix.fromArray(Me.projectionMatrix),
            Y.viewport.set(xe.x, xe.y, xe.width, xe.height),
            ue === 0 && x.matrix.copy(Y.matrix),
            $ === !0 && x.cameras.push(Y);
        }
      }
      const Z = i.inputSources;
      for (let Q = 0; Q < m.length; Q++) {
        const $ = m[Q],
          ue = Z[Q];
        $.update(ue, X, r);
      }
      O && O(F, X), (u = null);
    }
    const H = new ad();
    H.setAnimationLoop(N),
      (this.setAnimationLoop = function (F) {
        O = F;
      }),
      (this.dispose = function () {});
  }
}

function ax(o, e) {
  function t(p, m) {
    p.fogColor.value.copy(m.color),
      m.isFog
        ? ((p.fogNear.value = m.near), (p.fogFar.value = m.far))
        : m.isFogExp2 && (p.fogDensity.value = m.density);
  }

  function n(p, m, _, y, b) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? i(p, m)
      : m.isMeshToonMaterial
      ? (i(p, m), d(p, m))
      : m.isMeshPhongMaterial
      ? (i(p, m), h(p, m))
      : m.isMeshStandardMaterial
      ? (i(p, m), l(p, m), m.isMeshPhysicalMaterial && u(p, m, b))
      : m.isMeshMatcapMaterial
      ? (i(p, m), f(p, m))
      : m.isMeshDepthMaterial
      ? i(p, m)
      : m.isMeshDistanceMaterial
      ? (i(p, m), g(p, m))
      : m.isMeshNormalMaterial
      ? i(p, m)
      : m.isLineBasicMaterial
      ? (s(p, m), m.isLineDashedMaterial && r(p, m))
      : m.isPointsMaterial
      ? a(p, m, _, y)
      : m.isSpriteMaterial
      ? c(p, m)
      : m.isShadowMaterial
      ? (p.color.value.copy(m.color), (p.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }

  function i(p, m) {
    (p.opacity.value = m.opacity),
      m.color && p.diffuse.value.copy(m.color),
      m.emissive &&
        p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.bumpMap &&
        ((p.bumpMap.value = m.bumpMap),
        (p.bumpScale.value = m.bumpScale),
        m.side === xn && (p.bumpScale.value *= -1)),
      m.displacementMap &&
        ((p.displacementMap.value = m.displacementMap),
        (p.displacementScale.value = m.displacementScale),
        (p.displacementBias.value = m.displacementBias)),
      m.emissiveMap && (p.emissiveMap.value = m.emissiveMap),
      m.normalMap &&
        ((p.normalMap.value = m.normalMap),
        p.normalScale.value.copy(m.normalScale),
        m.side === xn && p.normalScale.value.negate()),
      m.specularMap && (p.specularMap.value = m.specularMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const _ = e.get(m).envMap;
    if (
      (_ &&
        ((p.envMap.value = _),
        (p.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = m.reflectivity),
        (p.ior.value = m.ior),
        (p.refractionRatio.value = m.refractionRatio)),
      m.lightMap)
    ) {
      p.lightMap.value = m.lightMap;
      const w = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = m.lightMapIntensity * w;
    }
    m.aoMap &&
      ((p.aoMap.value = m.aoMap), (p.aoMapIntensity.value = m.aoMapIntensity));
    let y;
    m.map
      ? (y = m.map)
      : m.specularMap
      ? (y = m.specularMap)
      : m.displacementMap
      ? (y = m.displacementMap)
      : m.normalMap
      ? (y = m.normalMap)
      : m.bumpMap
      ? (y = m.bumpMap)
      : m.roughnessMap
      ? (y = m.roughnessMap)
      : m.metalnessMap
      ? (y = m.metalnessMap)
      : m.alphaMap
      ? (y = m.alphaMap)
      : m.emissiveMap
      ? (y = m.emissiveMap)
      : m.clearcoatMap
      ? (y = m.clearcoatMap)
      : m.clearcoatNormalMap
      ? (y = m.clearcoatNormalMap)
      : m.clearcoatRoughnessMap
      ? (y = m.clearcoatRoughnessMap)
      : m.specularIntensityMap
      ? (y = m.specularIntensityMap)
      : m.specularColorMap
      ? (y = m.specularColorMap)
      : m.transmissionMap
      ? (y = m.transmissionMap)
      : m.thicknessMap
      ? (y = m.thicknessMap)
      : m.sheenColorMap
      ? (y = m.sheenColorMap)
      : m.sheenRoughnessMap && (y = m.sheenRoughnessMap),
      y !== void 0 &&
        (y.isWebGLRenderTarget && (y = y.texture),
        y.matrixAutoUpdate === !0 && y.updateMatrix(),
        p.uvTransform.value.copy(y.matrix));
    let b;
    m.aoMap ? (b = m.aoMap) : m.lightMap && (b = m.lightMap),
      b !== void 0 &&
        (b.isWebGLRenderTarget && (b = b.texture),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        p.uv2Transform.value.copy(b.matrix));
  }

  function s(p, m) {
    p.diffuse.value.copy(m.color), (p.opacity.value = m.opacity);
  }

  function r(p, m) {
    (p.dashSize.value = m.dashSize),
      (p.totalSize.value = m.dashSize + m.gapSize),
      (p.scale.value = m.scale);
  }

  function a(p, m, _, y) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.size.value = m.size * _),
      (p.scale.value = y * 0.5),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    let b;
    m.map ? (b = m.map) : m.alphaMap && (b = m.alphaMap),
      b !== void 0 &&
        (b.matrixAutoUpdate === !0 && b.updateMatrix(),
        p.uvTransform.value.copy(b.matrix));
  }

  function c(p, m) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.rotation.value = m.rotation),
      m.map && (p.map.value = m.map),
      m.alphaMap && (p.alphaMap.value = m.alphaMap),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    let _;
    m.map ? (_ = m.map) : m.alphaMap && (_ = m.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        p.uvTransform.value.copy(_.matrix));
  }

  function h(p, m) {
    p.specular.value.copy(m.specular),
      (p.shininess.value = Math.max(m.shininess, 1e-4));
  }

  function d(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }

  function l(p, m) {
    (p.roughness.value = m.roughness),
      (p.metalness.value = m.metalness),
      m.roughnessMap && (p.roughnessMap.value = m.roughnessMap),
      m.metalnessMap && (p.metalnessMap.value = m.metalnessMap),
      e.get(m).envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }

  function u(p, m, _) {
    (p.ior.value = m.ior),
      m.sheen > 0 &&
        (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (p.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap),
        m.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = m.sheenRoughnessMap)),
      m.clearcoat > 0 &&
        ((p.clearcoat.value = m.clearcoat),
        (p.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap),
        m.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
        m.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = m.clearcoatNormalMap),
          m.side === xn && p.clearcoatNormalScale.value.negate())),
      m.transmission > 0 &&
        ((p.transmission.value = m.transmission),
        (p.transmissionSamplerMap.value = _.texture),
        p.transmissionSamplerSize.value.set(_.width, _.height),
        m.transmissionMap && (p.transmissionMap.value = m.transmissionMap),
        (p.thickness.value = m.thickness),
        m.thicknessMap && (p.thicknessMap.value = m.thicknessMap),
        (p.attenuationDistance.value = m.attenuationDistance),
        p.attenuationColor.value.copy(m.attenuationColor)),
      (p.specularIntensity.value = m.specularIntensity),
      p.specularColor.value.copy(m.specularColor),
      m.specularIntensityMap &&
        (p.specularIntensityMap.value = m.specularIntensityMap),
      m.specularColorMap && (p.specularColorMap.value = m.specularColorMap);
  }

  function f(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }

  function g(p, m) {
    p.referencePosition.value.copy(m.referencePosition),
      (p.nearDistance.value = m.nearDistance),
      (p.farDistance.value = m.farDistance);
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n,
  };
}

function lx() {
  const o = zr("canvas");
  return (o.style.display = "block"), o;
}

function Je(o = {}) {
  const e = o.canvas !== void 0 ? o.canvas : lx(),
    t = o.context !== void 0 ? o.context : null,
    n = o.depth !== void 0 ? o.depth : !0,
    i = o.stencil !== void 0 ? o.stencil : !0,
    s = o.antialias !== void 0 ? o.antialias : !1,
    r = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0,
    a = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1,
    c = o.powerPreference !== void 0 ? o.powerPreference : "default",
    h =
      o.failIfMajorPerformanceCaveat !== void 0
        ? o.failIfMajorPerformanceCaveat
        : !1;
  let d;
  o.context !== void 0
    ? (d = t.getContextAttributes().alpha)
    : (d = o.alpha !== void 0 ? o.alpha : !1);
  let l = null,
    u = null;
  const f = [],
    g = [];
  (this.domElement = e),
    (this.debug = {
      checkShaderErrors: !0,
    }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = Zn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Jn),
    (this.toneMappingExposure = 1);
  const p = this;
  let m = !1,
    _ = 0,
    y = 0,
    b = null,
    w = -1,
    x = null;
  const E = new Ke(),
    T = new Ke();
  let R = null,
    I = e.width,
    B = e.height,
    v = 1,
    L = null,
    U = null;
  const D = new Ke(0, 0, I, B),
    O = new Ke(0, 0, I, B);
  let N = !1;
  const H = new oa();
  let F = !1,
    X = !1,
    Z = null;
  const Q = new _e(),
    $ = new te(),
    ue = new C(),
    Me = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };

  function xe() {
    return b === null ? v : 1;
  }
  let Y = t;

  function We(S, z) {
    for (let V = 0; V < S.length; V++) {
      const G = S[V],
        J = e.getContext(G, z);
      if (J !== null) return J;
    }
    return null;
  }
  try {
    const S = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: r,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: h,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${$l}`),
      e.addEventListener("webglcontextlost", k, !1),
      e.addEventListener("webglcontextrestored", le, !1),
      Y === null)
    ) {
      const z = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && z.shift(), (Y = We(z, S)), Y === null))
        throw We(z)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    Y.getShaderPrecisionFormat === void 0 &&
      (Y.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1,
        };
      });
  } catch (S) {
    throw (console.error("THREE.WebGLRenderer: " + S.message), S);
  }
  let Re,
    Pe,
    se,
    Be,
    j,
    K,
    ne,
    me,
    de,
    Ce,
    we,
    ve,
    st,
    Ze,
    A,
    M,
    W,
    ee,
    ce,
    fe,
    be,
    q,
    Ie;

  function ke() {
    (Re = new E0(Y)),
      (Pe = new v0(Y, Re, o)),
      Re.init(Pe),
      (q = new sx(Y, Re, Pe)),
      (se = new nx(Y, Re, Pe)),
      (Be = new L0()),
      (j = new qy()),
      (K = new ix(Y, Re, se, j, Pe, q, Be)),
      (ne = new w0(p)),
      (me = new T0(p)),
      (de = new Vm(Y, Pe)),
      (Ie = new y0(Y, Re, de, Pe)),
      (Ce = new A0(Y, de, Be, Ie)),
      (we = new D0(Y, Ce, de, Be)),
      (ce = new I0(Y, Pe, K)),
      (M = new b0(j)),
      (ve = new Wy(p, ne, me, Re, Pe, Ie, M)),
      (st = new ax(p, j)),
      (Ze = new jy()),
      (A = new Qy(Re, Pe)),
      (ee = new _0(p, ne, se, we, d, r)),
      (W = new md(p, we, Pe)),
      (fe = new x0(Y, Re, Be, Pe)),
      (be = new C0(Y, Re, Be, Pe)),
      (Be.programs = ve.programs),
      (p.capabilities = Pe),
      (p.extensions = Re),
      (p.properties = j),
      (p.renderLists = Ze),
      (p.shadowMap = W),
      (p.state = se),
      (p.info = Be);
  }
  ke();
  const ge = new ox(p, Y);
  (this.xr = ge),
    (this.getContext = function () {
      return Y;
    }),
    (this.getContextAttributes = function () {
      return Y.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const S = Re.get("WEBGL_lose_context");
      S && S.loseContext();
    }),
    (this.forceContextRestore = function () {
      const S = Re.get("WEBGL_lose_context");
      S && S.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return v;
    }),
    (this.setPixelRatio = function (S) {
      S !== void 0 && ((v = S), this.setSize(I, B, !1));
    }),
    (this.getSize = function (S) {
      return S.set(I, B);
    }),
    (this.setSize = function (S, z, V) {
      if (ge.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (I = S),
        (B = z),
        (e.width = Math.floor(S * v)),
        (e.height = Math.floor(z * v)),
        V !== !1 && ((e.style.width = S + "px"), (e.style.height = z + "px")),
        this.setViewport(0, 0, S, z);
    }),
    (this.getDrawingBufferSize = function (S) {
      return S.set(I * v, B * v).floor();
    }),
    (this.setDrawingBufferSize = function (S, z, V) {
      (I = S),
        (B = z),
        (v = V),
        (e.width = Math.floor(S * V)),
        (e.height = Math.floor(z * V)),
        this.setViewport(0, 0, S, z);
    }),
    (this.getCurrentViewport = function (S) {
      return S.copy(E);
    }),
    (this.getViewport = function (S) {
      return S.copy(D);
    }),
    (this.setViewport = function (S, z, V, G) {
      S.isVector4 ? D.set(S.x, S.y, S.z, S.w) : D.set(S, z, V, G),
        se.viewport(E.copy(D).multiplyScalar(v).floor());
    }),
    (this.getScissor = function (S) {
      return S.copy(O);
    }),
    (this.setScissor = function (S, z, V, G) {
      S.isVector4 ? O.set(S.x, S.y, S.z, S.w) : O.set(S, z, V, G),
        se.scissor(T.copy(O).multiplyScalar(v).floor());
    }),
    (this.getScissorTest = function () {
      return N;
    }),
    (this.setScissorTest = function (S) {
      se.setScissorTest((N = S));
    }),
    (this.setOpaqueSort = function (S) {
      L = S;
    }),
    (this.setTransparentSort = function (S) {
      U = S;
    }),
    (this.getClearColor = function (S) {
      return S.copy(ee.getClearColor());
    }),
    (this.setClearColor = function () {
      ee.setClearColor.apply(ee, arguments);
    }),
    (this.getClearAlpha = function () {
      return ee.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ee.setClearAlpha.apply(ee, arguments);
    }),
    (this.clear = function (S = !0, z = !0, V = !0) {
      let G = 0;
      S && (G |= 16384), z && (G |= 256), V && (G |= 1024), Y.clear(G);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", k, !1),
        e.removeEventListener("webglcontextrestored", le, !1),
        Ze.dispose(),
        A.dispose(),
        j.dispose(),
        ne.dispose(),
        me.dispose(),
        we.dispose(),
        Ie.dispose(),
        ve.dispose(),
        ge.dispose(),
        ge.removeEventListener("sessionstart", Ae),
        ge.removeEventListener("sessionend", nt),
        Z && (Z.dispose(), (Z = null)),
        He.stop();
    });

  function k(S) {
    S.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (m = !0);
  }

  function le() {
    console.log("THREE.WebGLRenderer: Context Restored."), (m = !1);
    const S = Be.autoReset,
      z = W.enabled,
      V = W.autoUpdate,
      G = W.needsUpdate,
      J = W.type;
    ke(),
      (Be.autoReset = S),
      (W.enabled = z),
      (W.autoUpdate = V),
      (W.needsUpdate = G),
      (W.type = J);
  }

  function oe(S) {
    const z = S.target;
    z.removeEventListener("dispose", oe), Se(z);
  }

  function Se(S) {
    pe(S), j.remove(S);
  }

  function pe(S) {
    const z = j.get(S).programs;
    z !== void 0 &&
      (z.forEach(function (V) {
        ve.releaseProgram(V);
      }),
      S.isShaderMaterial && ve.releaseShaderCache(S));
  }
  (this.renderBufferDirect = function (S, z, V, G, J, Ee) {
    z === null && (z = Me);
    const Le = J.isMesh && J.matrixWorld.determinant() < 0,
      Fe = sp(S, z, V, G, J);
    se.setMaterial(G, Le);
    let De = V.index;
    const Ye = V.attributes.position;
    if (De === null) {
      if (Ye === void 0 || Ye.count === 0) return;
    } else if (De.count === 0) return;
    let Ue = 1;
    G.wireframe === !0 && ((De = Ce.getWireframeAttribute(V)), (Ue = 2)),
      Ie.setup(J, G, Fe, V, De);
    let Ve,
      lt = fe;
    De !== null && ((Ve = de.get(De)), (lt = be), lt.setIndex(Ve));
    const Li = De !== null ? De.count : Ye.count,
      ls = V.drawRange.start * Ue,
      cs = V.drawRange.count * Ue,
      Mn = Ee !== null ? Ee.start * Ue : 0,
      qe = Ee !== null ? Ee.count * Ue : 1 / 0,
      hs = Math.max(ls, Mn),
      gt = Math.min(Li, ls + cs, Mn + qe) - 1,
      Sn = Math.max(0, gt - hs + 1);
    if (Sn !== 0) {
      if (J.isMesh)
        G.wireframe === !0
          ? (se.setLineWidth(G.wireframeLinewidth * xe()), lt.setMode(1))
          : lt.setMode(4);
      else if (J.isLine) {
        let ti = G.linewidth;
        ti === void 0 && (ti = 1),
          se.setLineWidth(ti * xe()),
          J.isLineSegments
            ? lt.setMode(1)
            : J.isLineLoop
            ? lt.setMode(2)
            : lt.setMode(3);
      } else J.isPoints ? lt.setMode(0) : J.isSprite && lt.setMode(4);
      if (J.isInstancedMesh) lt.renderInstances(hs, Sn, J.count);
      else if (V.isInstancedBufferGeometry) {
        const ti = Math.min(V.instanceCount, V._maxInstanceCount);
        lt.renderInstances(hs, Sn, ti);
      } else lt.render(hs, Sn);
    }
  }),
    (this.compile = function (S, z) {
      (u = A.get(S)),
        u.init(),
        g.push(u),
        S.traverseVisible(function (V) {
          V.isLight &&
            V.layers.test(z.layers) &&
            (u.pushLight(V), V.castShadow && u.pushShadow(V));
        }),
        u.setupLights(p.physicallyCorrectLights),
        S.traverse(function (V) {
          const G = V.material;
          if (G)
            if (Array.isArray(G))
              for (let J = 0; J < G.length; J++) {
                const Ee = G[J];
                ba(Ee, S, V);
              }
            else ba(G, S, V);
        }),
        g.pop(),
        (u = null);
    });
  let Te = null;

  function re(S) {
    Te && Te(S);
  }

  function Ae() {
    He.stop();
  }

  function nt() {
    He.start();
  }
  const He = new ad();
  He.setAnimationLoop(re),
    typeof self < "u" && He.setContext(self),
    (this.setAnimationLoop = function (S) {
      (Te = S), ge.setAnimationLoop(S), S === null ? He.stop() : He.start();
    }),
    ge.addEventListener("sessionstart", Ae),
    ge.addEventListener("sessionend", nt),
    (this.render = function (S, z) {
      if (z !== void 0 && z.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (m === !0) return;
      S.autoUpdate === !0 && S.updateMatrixWorld(),
        z.parent === null && z.updateMatrixWorld(),
        ge.enabled === !0 &&
          ge.isPresenting === !0 &&
          (ge.cameraAutoUpdate === !0 && ge.updateCamera(z),
          (z = ge.getCamera())),
        S.isScene === !0 && S.onBeforeRender(p, S, z, b),
        (u = A.get(S, g.length)),
        u.init(),
        g.push(u),
        Q.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
        H.setFromProjectionMatrix(Q),
        (X = this.localClippingEnabled),
        (F = M.init(this.clippingPlanes, X, z)),
        (l = Ze.get(S, f.length)),
        l.init(),
        f.push(l),
        bn(S, z, 0, p.sortObjects),
        l.finish(),
        p.sortObjects === !0 && l.sort(L, U),
        F === !0 && M.beginShadows();
      const V = u.state.shadowsArray;
      if (
        (W.render(V, S, z),
        F === !0 && M.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        ee.render(l, S),
        u.setupLights(p.physicallyCorrectLights),
        z.isArrayCamera)
      ) {
        const G = z.cameras;
        for (let J = 0, Ee = G.length; J < Ee; J++) {
          const Le = G[J];
          wn(l, S, Le, Le.viewport);
        }
      } else wn(l, S, z);
      b !== null &&
        (K.updateMultisampleRenderTarget(b), K.updateRenderTargetMipmap(b)),
        S.isScene === !0 && S.onAfterRender(p, S, z),
        Ie.resetDefaultState(),
        (w = -1),
        (x = null),
        g.pop(),
        g.length > 0 ? (u = g[g.length - 1]) : (u = null),
        f.pop(),
        f.length > 0 ? (l = f[f.length - 1]) : (l = null);
    });

  function bn(S, z, V, G) {
    if (S.visible === !1) return;
    if (S.layers.test(z.layers)) {
      if (S.isGroup) V = S.renderOrder;
      else if (S.isLOD) S.autoUpdate === !0 && S.update(z);
      else if (S.isLight) u.pushLight(S), S.castShadow && u.pushShadow(S);
      else if (S.isSprite) {
        if (!S.frustumCulled || H.intersectsSprite(S)) {
          G && ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);
          const Le = we.update(S),
            Fe = S.material;
          Fe.visible && l.push(S, Le, Fe, V, ue.z, null);
        }
      } else if (
        (S.isMesh || S.isLine || S.isPoints) &&
        (S.isSkinnedMesh &&
          S.skeleton.frame !== Be.render.frame &&
          (S.skeleton.update(), (S.skeleton.frame = Be.render.frame)),
        !S.frustumCulled || H.intersectsObject(S))
      ) {
        G && ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);
        const Le = we.update(S),
          Fe = S.material;
        if (Array.isArray(Fe)) {
          const De = Le.groups;
          for (let Ye = 0, Ue = De.length; Ye < Ue; Ye++) {
            const Ve = De[Ye],
              lt = Fe[Ve.materialIndex];
            lt && lt.visible && l.push(S, Le, lt, V, ue.z, Ve);
          }
        } else Fe.visible && l.push(S, Le, Fe, V, ue.z, null);
      }
    }
    const Ee = S.children;
    for (let Le = 0, Fe = Ee.length; Le < Fe; Le++) bn(Ee[Le], z, V, G);
  }

  function wn(S, z, V, G) {
    const J = S.opaque,
      Ee = S.transmissive,
      Le = S.transparent;
    u.setupLightsView(V),
      Ee.length > 0 && np(J, z, V),
      G && se.viewport(E.copy(G)),
      J.length > 0 && no(J, z, V),
      Ee.length > 0 && no(Ee, z, V),
      Le.length > 0 && no(Le, z, V),
      se.buffers.depth.setTest(!0),
      se.buffers.depth.setMask(!0),
      se.buffers.color.setMask(!0),
      se.setPolygonOffset(!1);
  }

  function np(S, z, V) {
    const G = Pe.isWebGL2;
    Z === null &&
      (Z = new Zt(1, 1, {
        generateMipmaps: !0,
        type: q.convert(zs) !== null ? zs : Ki,
        minFilter: ir,
        samples: G && s === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize($),
      G ? Z.setSize($.x, $.y) : Z.setSize(Xo($.x), Xo($.y));
    const J = p.getRenderTarget();
    p.setRenderTarget(Z), p.clear();
    const Ee = p.toneMapping;
    (p.toneMapping = Jn),
      no(S, z, V),
      (p.toneMapping = Ee),
      K.updateMultisampleRenderTarget(Z),
      K.updateRenderTargetMipmap(Z),
      p.setRenderTarget(J);
  }

  function no(S, z, V) {
    const G = z.isScene === !0 ? z.overrideMaterial : null;
    for (let J = 0, Ee = S.length; J < Ee; J++) {
      const Le = S[J],
        Fe = Le.object,
        De = Le.geometry,
        Ye = G === null ? Le.material : G,
        Ue = Le.group;
      Fe.layers.test(V.layers) && ip(Fe, z, V, De, Ye, Ue);
    }
  }

  function ip(S, z, V, G, J, Ee) {
    S.onBeforeRender(p, z, V, G, J, Ee),
      S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, S.matrixWorld),
      S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
      J.onBeforeRender(p, z, V, G, S, Ee),
      J.transparent === !0 && J.side === Yi
        ? ((J.side = xn),
          (J.needsUpdate = !0),
          p.renderBufferDirect(V, z, G, J, S, Ee),
          (J.side = Ws),
          (J.needsUpdate = !0),
          p.renderBufferDirect(V, z, G, J, S, Ee),
          (J.side = Yi))
        : p.renderBufferDirect(V, z, G, J, S, Ee),
      S.onAfterRender(p, z, V, G, J, Ee);
  }

  function ba(S, z, V) {
    z.isScene !== !0 && (z = Me);
    const G = j.get(S),
      J = u.state.lights,
      Ee = u.state.shadowsArray,
      Le = J.state.version,
      Fe = ve.getParameters(S, J.state, Ee, z, V),
      De = ve.getProgramCacheKey(Fe);
    let Ye = G.programs;
    (G.environment = S.isMeshStandardMaterial ? z.environment : null),
      (G.fog = z.fog),
      (G.envMap = (S.isMeshStandardMaterial ? me : ne).get(
        S.envMap || G.environment
      )),
      Ye === void 0 &&
        (S.addEventListener("dispose", oe),
        (Ye = new Map()),
        (G.programs = Ye));
    let Ue = Ye.get(De);
    if (Ue !== void 0) {
      if (G.currentProgram === Ue && G.lightsStateVersion === Le)
        return Gc(S, Fe), Ue;
    } else
      (Fe.uniforms = ve.getUniforms(S)),
        S.onBuild(V, Fe, p),
        S.onBeforeCompile(Fe, p),
        (Ue = ve.acquireProgram(Fe, De)),
        Ye.set(De, Ue),
        (G.uniforms = Fe.uniforms);
    const Ve = G.uniforms;
    ((!S.isShaderMaterial && !S.isRawShaderMaterial) || S.clipping === !0) &&
      (Ve.clippingPlanes = M.uniform),
      Gc(S, Fe),
      (G.needsLights = op(S)),
      (G.lightsStateVersion = Le),
      G.needsLights &&
        ((Ve.ambientLightColor.value = J.state.ambient),
        (Ve.lightProbe.value = J.state.probe),
        (Ve.directionalLights.value = J.state.directional),
        (Ve.directionalLightShadows.value = J.state.directionalShadow),
        (Ve.spotLights.value = J.state.spot),
        (Ve.spotLightShadows.value = J.state.spotShadow),
        (Ve.rectAreaLights.value = J.state.rectArea),
        (Ve.ltc_1.value = J.state.rectAreaLTC1),
        (Ve.ltc_2.value = J.state.rectAreaLTC2),
        (Ve.pointLights.value = J.state.point),
        (Ve.pointLightShadows.value = J.state.pointShadow),
        (Ve.hemisphereLights.value = J.state.hemi),
        (Ve.directionalShadowMap.value = J.state.directionalShadowMap),
        (Ve.directionalShadowMatrix.value = J.state.directionalShadowMatrix),
        (Ve.spotShadowMap.value = J.state.spotShadowMap),
        (Ve.spotShadowMatrix.value = J.state.spotShadowMatrix),
        (Ve.pointShadowMap.value = J.state.pointShadowMap),
        (Ve.pointShadowMatrix.value = J.state.pointShadowMatrix));
    const lt = Ue.getUniforms(),
      Li = gi.seqWithValue(lt.seq, Ve);
    return (G.currentProgram = Ue), (G.uniformsList = Li), Ue;
  }

  function Gc(S, z) {
    const V = j.get(S);
    (V.outputEncoding = z.outputEncoding),
      (V.instancing = z.instancing),
      (V.skinning = z.skinning),
      (V.morphTargets = z.morphTargets),
      (V.morphNormals = z.morphNormals),
      (V.morphColors = z.morphColors),
      (V.morphTargetsCount = z.morphTargetsCount),
      (V.numClippingPlanes = z.numClippingPlanes),
      (V.numIntersection = z.numClipIntersection),
      (V.vertexAlphas = z.vertexAlphas),
      (V.vertexTangents = z.vertexTangents),
      (V.toneMapping = z.toneMapping);
  }

  function sp(S, z, V, G, J) {
    z.isScene !== !0 && (z = Me), K.resetTextureUnits();
    const Ee = z.fog,
      Le = G.isMeshStandardMaterial ? z.environment : null,
      Fe =
        b === null
          ? p.outputEncoding
          : b.isXRRenderTarget === !0
          ? b.texture.encoding
          : Zn,
      De = (G.isMeshStandardMaterial ? me : ne).get(G.envMap || Le),
      Ye =
        G.vertexColors === !0 &&
        !!V.attributes.color &&
        V.attributes.color.itemSize === 4,
      Ue = !!G.normalMap && !!V.attributes.tangent,
      Ve = !!V.morphAttributes.position,
      lt = !!V.morphAttributes.normal,
      Li = !!V.morphAttributes.color,
      ls = G.toneMapped ? p.toneMapping : Jn,
      cs =
        V.morphAttributes.position ||
        V.morphAttributes.normal ||
        V.morphAttributes.color,
      Mn = cs !== void 0 ? cs.length : 0,
      qe = j.get(G),
      hs = u.state.lights;
    if (F === !0 && (X === !0 || S !== x)) {
      const fn = S === x && G.id === w;
      M.setState(G, S, fn);
    }
    let gt = !1;
    G.version === qe.__version
      ? ((qe.needsLights && qe.lightsStateVersion !== hs.state.version) ||
          qe.outputEncoding !== Fe ||
          (J.isInstancedMesh && qe.instancing === !1) ||
          (!J.isInstancedMesh && qe.instancing === !0) ||
          (J.isSkinnedMesh && qe.skinning === !1) ||
          (!J.isSkinnedMesh && qe.skinning === !0) ||
          qe.envMap !== De ||
          (G.fog && qe.fog !== Ee) ||
          (qe.numClippingPlanes !== void 0 &&
            (qe.numClippingPlanes !== M.numPlanes ||
              qe.numIntersection !== M.numIntersection)) ||
          qe.vertexAlphas !== Ye ||
          qe.vertexTangents !== Ue ||
          qe.morphTargets !== Ve ||
          qe.morphNormals !== lt ||
          qe.morphColors !== Li ||
          qe.toneMapping !== ls ||
          (Pe.isWebGL2 === !0 && qe.morphTargetsCount !== Mn)) &&
        (gt = !0)
      : ((gt = !0), (qe.__version = G.version));
    let Sn = qe.currentProgram;
    gt === !0 && (Sn = ba(G, z, J));
    let ti = !1,
      hr = !1,
      wa = !1;
    const Rt = Sn.getUniforms(),
      ur = qe.uniforms;
    if (
      (se.useProgram(Sn.program) && ((ti = !0), (hr = !0), (wa = !0)),
      G.id !== w && ((w = G.id), (hr = !0)),
      ti || x !== S)
    ) {
      if (
        (Rt.setValue(Y, "projectionMatrix", S.projectionMatrix),
        Pe.logarithmicDepthBuffer &&
          Rt.setValue(Y, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)),
        x !== S && ((x = S), (hr = !0), (wa = !0)),
        G.isShaderMaterial ||
          G.isMeshPhongMaterial ||
          G.isMeshToonMaterial ||
          G.isMeshStandardMaterial ||
          G.envMap)
      ) {
        const fn = Rt.map.cameraPosition;
        fn !== void 0 &&
          fn.setValue(Y, ue.setFromMatrixPosition(S.matrixWorld));
      }
      (G.isMeshPhongMaterial ||
        G.isMeshToonMaterial ||
        G.isMeshLambertMaterial ||
        G.isMeshBasicMaterial ||
        G.isMeshStandardMaterial ||
        G.isShaderMaterial) &&
        Rt.setValue(Y, "isOrthographic", S.isOrthographicCamera === !0),
        (G.isMeshPhongMaterial ||
          G.isMeshToonMaterial ||
          G.isMeshLambertMaterial ||
          G.isMeshBasicMaterial ||
          G.isMeshStandardMaterial ||
          G.isShaderMaterial ||
          G.isShadowMaterial ||
          J.isSkinnedMesh) &&
          Rt.setValue(Y, "viewMatrix", S.matrixWorldInverse);
    }
    if (J.isSkinnedMesh) {
      Rt.setOptional(Y, J, "bindMatrix"),
        Rt.setOptional(Y, J, "bindMatrixInverse");
      const fn = J.skeleton;
      fn &&
        (Pe.floatVertexTextures
          ? (fn.boneTexture === null && fn.computeBoneTexture(),
            Rt.setValue(Y, "boneTexture", fn.boneTexture, K),
            Rt.setValue(Y, "boneTextureSize", fn.boneTextureSize))
          : Rt.setOptional(Y, fn, "boneMatrices"));
    }
    const Ma = V.morphAttributes;
    return (
      (Ma.position !== void 0 ||
        Ma.normal !== void 0 ||
        (Ma.color !== void 0 && Pe.isWebGL2 === !0)) &&
        ce.update(J, V, G, Sn),
      (hr || qe.receiveShadow !== J.receiveShadow) &&
        ((qe.receiveShadow = J.receiveShadow),
        Rt.setValue(Y, "receiveShadow", J.receiveShadow)),
      hr &&
        (Rt.setValue(Y, "toneMappingExposure", p.toneMappingExposure),
        qe.needsLights && rp(ur, wa),
        Ee && G.fog && st.refreshFogUniforms(ur, Ee),
        st.refreshMaterialUniforms(ur, G, v, B, Z),
        gi.upload(Y, qe.uniformsList, ur, K)),
      G.isShaderMaterial &&
        G.uniformsNeedUpdate === !0 &&
        (gi.upload(Y, qe.uniformsList, ur, K), (G.uniformsNeedUpdate = !1)),
      G.isSpriteMaterial && Rt.setValue(Y, "center", J.center),
      Rt.setValue(Y, "modelViewMatrix", J.modelViewMatrix),
      Rt.setValue(Y, "normalMatrix", J.normalMatrix),
      Rt.setValue(Y, "modelMatrix", J.matrixWorld),
      Sn
    );
  }

  function rp(S, z) {
    (S.ambientLightColor.needsUpdate = z),
      (S.lightProbe.needsUpdate = z),
      (S.directionalLights.needsUpdate = z),
      (S.directionalLightShadows.needsUpdate = z),
      (S.pointLights.needsUpdate = z),
      (S.pointLightShadows.needsUpdate = z),
      (S.spotLights.needsUpdate = z),
      (S.spotLightShadows.needsUpdate = z),
      (S.rectAreaLights.needsUpdate = z),
      (S.hemisphereLights.needsUpdate = z);
  }

  function op(S) {
    return (
      S.isMeshLambertMaterial ||
      S.isMeshToonMaterial ||
      S.isMeshPhongMaterial ||
      S.isMeshStandardMaterial ||
      S.isShadowMaterial ||
      (S.isShaderMaterial && S.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return y;
    }),
    (this.getRenderTarget = function () {
      return b;
    }),
    (this.setRenderTargetTextures = function (S, z, V) {
      (j.get(S.texture).__webglTexture = z),
        (j.get(S.depthTexture).__webglTexture = V);
      const G = j.get(S);
      (G.__hasExternalTextures = !0),
        G.__hasExternalTextures &&
          ((G.__autoAllocateDepthBuffer = V === void 0),
          G.__autoAllocateDepthBuffer ||
            (Re.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (G.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (S, z) {
      const V = j.get(S);
      (V.__webglFramebuffer = z), (V.__useDefaultFramebuffer = z === void 0);
    }),
    (this.setRenderTarget = function (S, z = 0, V = 0) {
      (b = S), (_ = z), (y = V);
      let G = !0;
      if (S) {
        const De = j.get(S);
        De.__useDefaultFramebuffer !== void 0
          ? (se.bindFramebuffer(36160, null), (G = !1))
          : De.__webglFramebuffer === void 0
          ? K.setupRenderTarget(S)
          : De.__hasExternalTextures &&
            K.rebindTextures(
              S,
              j.get(S.texture).__webglTexture,
              j.get(S.depthTexture).__webglTexture
            );
      }
      let J = null,
        Ee = !1,
        Le = !1;
      if (S) {
        const De = S.texture;
        (De.isData3DTexture || De.isDataArrayTexture) && (Le = !0);
        const Ye = j.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget
          ? ((J = Ye[z]), (Ee = !0))
          : Pe.isWebGL2 && S.samples > 0 && K.useMultisampledRTT(S) === !1
          ? (J = j.get(S).__webglMultisampledFramebuffer)
          : (J = Ye),
          E.copy(S.viewport),
          T.copy(S.scissor),
          (R = S.scissorTest);
      } else
        E.copy(D).multiplyScalar(v).floor(),
          T.copy(O).multiplyScalar(v).floor(),
          (R = N);
      if (
        (se.bindFramebuffer(36160, J) &&
          Pe.drawBuffers &&
          G &&
          se.drawBuffers(S, J),
        se.viewport(E),
        se.scissor(T),
        se.setScissorTest(R),
        Ee)
      ) {
        const De = j.get(S.texture);
        Y.framebufferTexture2D(36160, 36064, 34069 + z, De.__webglTexture, V);
      } else if (Le) {
        const De = j.get(S.texture),
          Ye = z || 0;
        Y.framebufferTextureLayer(36160, 36064, De.__webglTexture, V || 0, Ye);
      }
      w = -1;
    }),
    (this.readRenderTargetPixels = function (S, z, V, G, J, Ee, Le) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Fe = j.get(S).__webglFramebuffer;
      if ((S.isWebGLCubeRenderTarget && Le !== void 0 && (Fe = Fe[Le]), Fe)) {
        se.bindFramebuffer(36160, Fe);
        try {
          const De = S.texture,
            Ye = De.format,
            Ue = De.type;
          if (Ye !== rn && q.convert(Ye) !== Y.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Ve =
            Ue === zs &&
            (Re.has("EXT_color_buffer_half_float") ||
              (Pe.isWebGL2 && Re.has("EXT_color_buffer_float")));
          if (
            Ue !== Ki &&
            q.convert(Ue) !== Y.getParameter(35738) &&
            !(
              Ue === ui &&
              (Pe.isWebGL2 ||
                Re.has("OES_texture_float") ||
                Re.has("WEBGL_color_buffer_float"))
            ) &&
            !Ve
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          z >= 0 &&
            z <= S.width - G &&
            V >= 0 &&
            V <= S.height - J &&
            Y.readPixels(z, V, G, J, q.convert(Ye), q.convert(Ue), Ee);
        } finally {
          const De = b !== null ? j.get(b).__webglFramebuffer : null;
          se.bindFramebuffer(36160, De);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (S, z, V = 0) {
      if (z.isFramebufferTexture !== !0) {
        console.error(
          "THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
        );
        return;
      }
      const G = Math.pow(2, -V),
        J = Math.floor(z.image.width * G),
        Ee = Math.floor(z.image.height * G);
      K.setTexture2D(z, 0),
        Y.copyTexSubImage2D(3553, V, 0, 0, S.x, S.y, J, Ee),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture = function (S, z, V, G = 0) {
      const J = z.image.width,
        Ee = z.image.height,
        Le = q.convert(V.format),
        Fe = q.convert(V.type);
      K.setTexture2D(V, 0),
        Y.pixelStorei(37440, V.flipY),
        Y.pixelStorei(37441, V.premultiplyAlpha),
        Y.pixelStorei(3317, V.unpackAlignment),
        z.isDataTexture
          ? Y.texSubImage2D(3553, G, S.x, S.y, J, Ee, Le, Fe, z.image.data)
          : z.isCompressedTexture
          ? Y.compressedTexSubImage2D(
              3553,
              G,
              S.x,
              S.y,
              z.mipmaps[0].width,
              z.mipmaps[0].height,
              Le,
              z.mipmaps[0].data
            )
          : Y.texSubImage2D(3553, G, S.x, S.y, Le, Fe, z.image),
        G === 0 && V.generateMipmaps && Y.generateMipmap(3553),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (S, z, V, G, J = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const Ee = S.max.x - S.min.x + 1,
        Le = S.max.y - S.min.y + 1,
        Fe = S.max.z - S.min.z + 1,
        De = q.convert(G.format),
        Ye = q.convert(G.type);
      let Ue;
      if (G.isData3DTexture) K.setTexture3D(G, 0), (Ue = 32879);
      else if (G.isDataArrayTexture) K.setTexture2DArray(G, 0), (Ue = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      Y.pixelStorei(37440, G.flipY),
        Y.pixelStorei(37441, G.premultiplyAlpha),
        Y.pixelStorei(3317, G.unpackAlignment);
      const Ve = Y.getParameter(3314),
        lt = Y.getParameter(32878),
        Li = Y.getParameter(3316),
        ls = Y.getParameter(3315),
        cs = Y.getParameter(32877),
        Mn = V.isCompressedTexture ? V.mipmaps[0] : V.image;
      Y.pixelStorei(3314, Mn.width),
        Y.pixelStorei(32878, Mn.height),
        Y.pixelStorei(3316, S.min.x),
        Y.pixelStorei(3315, S.min.y),
        Y.pixelStorei(32877, S.min.z),
        V.isDataTexture || V.isData3DTexture
          ? Y.texSubImage3D(Ue, J, z.x, z.y, z.z, Ee, Le, Fe, De, Ye, Mn.data)
          : V.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            Y.compressedTexSubImage3D(
              Ue,
              J,
              z.x,
              z.y,
              z.z,
              Ee,
              Le,
              Fe,
              De,
              Mn.data
            ))
          : Y.texSubImage3D(Ue, J, z.x, z.y, z.z, Ee, Le, Fe, De, Ye, Mn),
        Y.pixelStorei(3314, Ve),
        Y.pixelStorei(32878, lt),
        Y.pixelStorei(3316, Li),
        Y.pixelStorei(3315, ls),
        Y.pixelStorei(32877, cs),
        J === 0 && G.generateMipmaps && Y.generateMipmap(Ue),
        se.unbindTexture();
    }),
    (this.initTexture = function (S) {
      K.setTexture2D(S, 0), se.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (y = 0), (b = null), se.reset(), Ie.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", {
          detail: this,
        })
      );
}
Je.prototype.isWebGLRenderer = !0;
class cx extends Je {}
cx.prototype.isWebGL1Renderer = !0;
class ha {
  constructor(e, t = 1, n = 1e3) {
    (this.name = ""), (this.color = new ie(e)), (this.near = t), (this.far = n);
  }
  clone() {
    return new ha(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
ha.prototype.isFog = !0;
class lc extends je {
  constructor() {
    super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", {
            detail: this,
          })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
lc.prototype.isScene = !0;
class rr {
  constructor(e, t) {
    (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = Or),
      (this.updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.version = 0),
      (this.uuid = cn());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
rr.prototype.isInterleavedBuffer = !0;
const zt = new C();
class Ks {
  constructor(e, t, n, i = !1) {
    (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i === !0);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      zt.fromBufferAttribute(this, t),
        zt.applyMatrix4(e),
        this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t),
        zt.applyNormalMatrix(e),
        this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      zt.fromBufferAttribute(this, t),
        zt.transformDirection(e),
        this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  setX(e, t) {
    return (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new ft(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Ks(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
Ks.prototype.isInterleavedBufferAttribute = !0;
class Pn extends dt {
  constructor(e) {
    super(),
      (this.type = "SpriteMaterial"),
      (this.color = new ie(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
}
Pn.prototype.isSpriteMaterial = !0;
let Ts;
const mr = new C(),
  Es = new C(),
  As = new C(),
  Cs = new te(),
  gr = new te(),
  yd = new _e(),
  So = new C(),
  _r = new C(),
  To = new C(),
  Zh = new te(),
  nl = new te(),
  $h = new te();
class _i extends je {
  constructor(e) {
    if ((super(), (this.type = "Sprite"), Ts === void 0)) {
      Ts = new tt();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new rr(t, 5);
      Ts.setIndex([0, 1, 2, 0, 2, 3]),
        Ts.setAttribute("position", new Ks(n, 3, 0, !1)),
        Ts.setAttribute("uv", new Ks(n, 2, 3, !1));
    }
    (this.geometry = Ts),
      (this.material = e !== void 0 ? e : new Pn()),
      (this.center = new te(0.5, 0.5));
  }
  raycast(e, t) {
    e.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      Es.setFromMatrixScale(this.matrixWorld),
      yd.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      As.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        Es.multiplyScalar(-As.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && ((s = Math.cos(n)), (i = Math.sin(n)));
    const r = this.center;
    Eo(So.set(-0.5, -0.5, 0), As, r, Es, i, s),
      Eo(_r.set(0.5, -0.5, 0), As, r, Es, i, s),
      Eo(To.set(0.5, 0.5, 0), As, r, Es, i, s),
      Zh.set(0, 0),
      nl.set(1, 0),
      $h.set(1, 1);
    let a = e.ray.intersectTriangle(So, _r, To, !1, mr);
    if (
      a === null &&
      (Eo(_r.set(-0.5, 0.5, 0), As, r, Es, i, s),
      nl.set(0, 1),
      (a = e.ray.intersectTriangle(So, To, _r, !1, mr)),
      a === null)
    )
      return;
    const c = e.ray.origin.distanceTo(mr);
    c < e.near ||
      c > e.far ||
      t.push({
        distance: c,
        point: mr.clone(),
        uv: wt.getUV(mr, So, _r, To, Zh, nl, $h, new te()),
        face: null,
        object: this,
      });
  }
  copy(e) {
    return (
      super.copy(e),
      e.center !== void 0 && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
_i.prototype.isSprite = !0;

function Eo(o, e, t, n, i, s) {
  Cs.subVectors(o, t).addScalar(0.5).multiply(n),
    i !== void 0
      ? ((gr.x = s * Cs.x - i * Cs.y), (gr.y = i * Cs.x + s * Cs.y))
      : gr.copy(Cs),
    o.copy(e),
    (o.x += gr.x),
    (o.y += gr.y),
    o.applyMatrix4(yd);
}

export { Je, Ks, Pn, Yn, _i, ha, lc, rr };
