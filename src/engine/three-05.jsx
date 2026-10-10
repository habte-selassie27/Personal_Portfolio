import { Bp, Dp, Fp, Ge, Ip, It, Jn, Ke, Lt, Op, Pp, Sr, Ws, Xs, Xu, Zn, Zt, bl, gh, ia, ie, kp, mi, na, qs, rn, sa, tc, td, te, ui, up, wl, xn, xt, zs } from "./three-01.jsx";
import { C } from "./three-02.jsx";
import { Dt, Js, Ot, Pt, Qr, St, Xn, ft, ht, ic, od, ra, rd, sd, tt } from "./three-03.jsx";
import { An, Oe, aa } from "./three-04.jsx";
An.physical = {
  uniforms: Pt([
    An.standard.uniforms,
    {
      clearcoat: {
        value: 0,
      },
      clearcoatMap: {
        value: null,
      },
      clearcoatRoughness: {
        value: 0,
      },
      clearcoatRoughnessMap: {
        value: null,
      },
      clearcoatNormalScale: {
        value: new te(1, 1),
      },
      clearcoatNormalMap: {
        value: null,
      },
      sheen: {
        value: 0,
      },
      sheenColor: {
        value: new ie(0),
      },
      sheenColorMap: {
        value: null,
      },
      sheenRoughness: {
        value: 1,
      },
      sheenRoughnessMap: {
        value: null,
      },
      transmission: {
        value: 0,
      },
      transmissionMap: {
        value: null,
      },
      transmissionSamplerSize: {
        value: new te(),
      },
      transmissionSamplerMap: {
        value: null,
      },
      thickness: {
        value: 0,
      },
      thicknessMap: {
        value: null,
      },
      attenuationDistance: {
        value: 0,
      },
      attenuationColor: {
        value: new ie(0),
      },
      specularIntensity: {
        value: 1,
      },
      specularIntensityMap: {
        value: null,
      },
      specularColor: {
        value: new ie(1, 1, 1),
      },
      specularColorMap: {
        value: null,
      },
    },
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag,
};

function _0(o, e, t, n, i, s) {
  const r = new ie(0);
  let a = i === !0 ? 0 : 1,
    c,
    h,
    d = null,
    l = 0,
    u = null;

  function f(p, m) {
    let _ = !1,
      y = m.isScene === !0 ? m.background : null;
    y && y.isTexture && (y = e.get(y));
    const b = o.xr,
      w = b.getSession && b.getSession();
    w && w.environmentBlendMode === "additive" && (y = null),
      y === null ? g(r, a) : y && y.isColor && (g(y, 1), (_ = !0)),
      (o.autoClear || _) &&
        o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil),
      y && (y.isCubeTexture || y.mapping === ia)
        ? (h === void 0 &&
            ((h = new St(
              new Qr(1, 1, 1),
              new Ot({
                name: "BackgroundCubeMaterial",
                uniforms: Js(An.cube.uniforms),
                vertexShader: An.cube.vertexShader,
                fragmentShader: An.cube.fragmentShader,
                side: xn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            h.geometry.deleteAttribute("normal"),
            h.geometry.deleteAttribute("uv"),
            (h.onBeforeRender = function (x, E, T) {
              this.matrixWorld.copyPosition(T.matrixWorld);
            }),
            Object.defineProperty(h.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(h)),
          (h.material.uniforms.envMap.value = y),
          (h.material.uniforms.flipEnvMap.value =
            y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
          (d !== y || l !== y.version || u !== o.toneMapping) &&
            ((h.material.needsUpdate = !0),
            (d = y),
            (l = y.version),
            (u = o.toneMapping)),
          p.unshift(h, h.geometry, h.material, 0, 0, null))
        : y &&
          y.isTexture &&
          (c === void 0 &&
            ((c = new St(
              new aa(2, 2),
              new Ot({
                name: "BackgroundMaterial",
                uniforms: Js(An.background.uniforms),
                vertexShader: An.background.vertexShader,
                fragmentShader: An.background.fragmentShader,
                side: Ws,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.t2D.value = y),
          y.matrixAutoUpdate === !0 && y.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(y.matrix),
          (d !== y || l !== y.version || u !== o.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = y),
            (l = y.version),
            (u = o.toneMapping)),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }

  function g(p, m) {
    t.buffers.color.setClear(p.r, p.g, p.b, m, s);
  }
  return {
    getClearColor: function () {
      return r;
    },
    setClearColor: function (p, m = 1) {
      r.set(p), (a = m), g(r, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (p) {
      (a = p), g(r, a);
    },
    render: f,
  };
}

function y0(o, e, t, n) {
  const i = o.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    r = n.isWebGL2 || s !== null,
    a = {},
    c = m(null);
  let h = c,
    d = !1;

  function l(D, O, N, H, F) {
    let X = !1;
    if (r) {
      const Z = p(H, N, O);
      h !== Z && ((h = Z), f(h.object)), (X = _(H, F)), X && y(H, F);
    } else {
      const Z = O.wireframe === !0;
      (h.geometry !== H.id || h.program !== N.id || h.wireframe !== Z) &&
        ((h.geometry = H.id), (h.program = N.id), (h.wireframe = Z), (X = !0));
    }
    D.isInstancedMesh === !0 && (X = !0),
      F !== null && t.update(F, 34963),
      (X || d) &&
        ((d = !1),
        R(D, O, N, H),
        F !== null && o.bindBuffer(34963, t.get(F).buffer));
  }

  function u() {
    return n.isWebGL2 ? o.createVertexArray() : s.createVertexArrayOES();
  }

  function f(D) {
    return n.isWebGL2 ? o.bindVertexArray(D) : s.bindVertexArrayOES(D);
  }

  function g(D) {
    return n.isWebGL2 ? o.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
  }

  function p(D, O, N) {
    const H = N.wireframe === !0;
    let F = a[D.id];
    F === void 0 && ((F = {}), (a[D.id] = F));
    let X = F[O.id];
    X === void 0 && ((X = {}), (F[O.id] = X));
    let Z = X[H];
    return Z === void 0 && ((Z = m(u())), (X[H] = Z)), Z;
  }

  function m(D) {
    const O = [],
      N = [],
      H = [];
    for (let F = 0; F < i; F++) (O[F] = 0), (N[F] = 0), (H[F] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: N,
      attributeDivisors: H,
      object: D,
      attributes: {},
      index: null,
    };
  }

  function _(D, O) {
    const N = h.attributes,
      H = D.attributes;
    let F = 0;
    for (const X in H) {
      const Z = N[X],
        Q = H[X];
      if (Z === void 0 || Z.attribute !== Q || Z.data !== Q.data) return !0;
      F++;
    }
    return h.attributesNum !== F || h.index !== O;
  }

  function y(D, O) {
    const N = {},
      H = D.attributes;
    let F = 0;
    for (const X in H) {
      const Z = H[X],
        Q = {};
      (Q.attribute = Z), Z.data && (Q.data = Z.data), (N[X] = Q), F++;
    }
    (h.attributes = N), (h.attributesNum = F), (h.index = O);
  }

  function b() {
    const D = h.newAttributes;
    for (let O = 0, N = D.length; O < N; O++) D[O] = 0;
  }

  function w(D) {
    x(D, 0);
  }

  function x(D, O) {
    const N = h.newAttributes,
      H = h.enabledAttributes,
      F = h.attributeDivisors;
    (N[D] = 1),
      H[D] === 0 && (o.enableVertexAttribArray(D), (H[D] = 1)),
      F[D] !== O &&
        ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, O),
        (F[D] = O));
  }

  function E() {
    const D = h.newAttributes,
      O = h.enabledAttributes;
    for (let N = 0, H = O.length; N < H; N++)
      O[N] !== D[N] && (o.disableVertexAttribArray(N), (O[N] = 0));
  }

  function T(D, O, N, H, F, X) {
    n.isWebGL2 === !0 && (N === 5124 || N === 5125)
      ? o.vertexAttribIPointer(D, O, N, F, X)
      : o.vertexAttribPointer(D, O, N, H, F, X);
  }

  function R(D, O, N, H) {
    if (
      n.isWebGL2 === !1 &&
      (D.isInstancedMesh || H.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    b();
    const F = H.attributes,
      X = N.getAttributes(),
      Z = O.defaultAttributeValues;
    for (const Q in X) {
      const $ = X[Q];
      if ($.location >= 0) {
        let ue = F[Q];
        if (
          (ue === void 0 &&
            (Q === "instanceMatrix" &&
              D.instanceMatrix &&
              (ue = D.instanceMatrix),
            Q === "instanceColor" && D.instanceColor && (ue = D.instanceColor)),
          ue !== void 0)
        ) {
          const Me = ue.normalized,
            xe = ue.itemSize,
            Y = t.get(ue);
          if (Y === void 0) continue;
          const We = Y.buffer,
            Re = Y.type,
            Pe = Y.bytesPerElement;
          if (ue.isInterleavedBufferAttribute) {
            const se = ue.data,
              Be = se.stride,
              j = ue.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let K = 0; K < $.locationSize; K++)
                x($.location + K, se.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let K = 0; K < $.locationSize; K++) w($.location + K);
            o.bindBuffer(34962, We);
            for (let K = 0; K < $.locationSize; K++)
              T(
                $.location + K,
                xe / $.locationSize,
                Re,
                Me,
                Be * Pe,
                (j + (xe / $.locationSize) * K) * Pe
              );
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let se = 0; se < $.locationSize; se++)
                x($.location + se, ue.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                H._maxInstanceCount === void 0 &&
                (H._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let se = 0; se < $.locationSize; se++) w($.location + se);
            o.bindBuffer(34962, We);
            for (let se = 0; se < $.locationSize; se++)
              T(
                $.location + se,
                xe / $.locationSize,
                Re,
                Me,
                xe * Pe,
                (xe / $.locationSize) * se * Pe
              );
          }
        } else if (Z !== void 0) {
          const Me = Z[Q];
          if (Me !== void 0)
            switch (Me.length) {
              case 2:
                o.vertexAttrib2fv($.location, Me);
                break;
              case 3:
                o.vertexAttrib3fv($.location, Me);
                break;
              case 4:
                o.vertexAttrib4fv($.location, Me);
                break;
              default:
                o.vertexAttrib1fv($.location, Me);
            }
        }
      }
    }
    E();
  }

  function I() {
    L();
    for (const D in a) {
      const O = a[D];
      for (const N in O) {
        const H = O[N];
        for (const F in H) g(H[F].object), delete H[F];
        delete O[N];
      }
      delete a[D];
    }
  }

  function B(D) {
    if (a[D.id] === void 0) return;
    const O = a[D.id];
    for (const N in O) {
      const H = O[N];
      for (const F in H) g(H[F].object), delete H[F];
      delete O[N];
    }
    delete a[D.id];
  }

  function v(D) {
    for (const O in a) {
      const N = a[O];
      if (N[D.id] === void 0) continue;
      const H = N[D.id];
      for (const F in H) g(H[F].object), delete H[F];
      delete N[D.id];
    }
  }

  function L() {
    U(), (d = !0), h !== c && ((h = c), f(h.object));
  }

  function U() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: l,
    reset: L,
    resetDefaultState: U,
    dispose: I,
    releaseStatesOfGeometry: B,
    releaseStatesOfProgram: v,
    initAttributes: b,
    enableAttribute: w,
    disableUnusedAttributes: E,
  };
}

function x0(o, e, t, n) {
  const i = n.isWebGL2;
  let s;

  function r(h) {
    s = h;
  }

  function a(h, d) {
    o.drawArrays(s, h, d), t.update(d, s, 1);
  }

  function c(h, d, l) {
    if (l === 0) return;
    let u, f;
    if (i) (u = o), (f = "drawArraysInstanced");
    else if (
      ((u = e.get("ANGLE_instanced_arrays")),
      (f = "drawArraysInstancedANGLE"),
      u === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    u[f](s, h, d, l), t.update(d, s, l);
  }
  (this.setMode = r), (this.render = a), (this.renderInstances = c);
}

function v0(o, e, t) {
  let n;

  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const T = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }

  function s(T) {
    if (T === "highp") {
      if (
        o.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        o.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      T = "mediump";
    }
    return T === "mediump" &&
      o.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      o.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const r =
    (typeof WebGL2RenderingContext < "u" &&
      o instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < "u" &&
      o instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      c,
      "instead."
    ),
    (a = c));
  const h = r || e.has("WEBGL_draw_buffers"),
    d = t.logarithmicDepthBuffer === !0,
    l = o.getParameter(34930),
    u = o.getParameter(35660),
    f = o.getParameter(3379),
    g = o.getParameter(34076),
    p = o.getParameter(34921),
    m = o.getParameter(36347),
    _ = o.getParameter(36348),
    y = o.getParameter(36349),
    b = u > 0,
    w = r || e.has("OES_texture_float"),
    x = b && w,
    E = r ? o.getParameter(36183) : 0;
  return {
    isWebGL2: r,
    drawBuffers: h,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: d,
    maxTextures: l,
    maxVertexTextures: u,
    maxTextureSize: f,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: m,
    maxVaryings: _,
    maxFragmentUniforms: y,
    vertexTextures: b,
    floatFragmentTextures: w,
    floatVertexTextures: x,
    maxSamples: E,
  };
}

function b0(o) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const r = new Xn(),
    a = new Lt(),
    c = {
      value: null,
      needsUpdate: !1,
    };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (l, u, f) {
      const g = l.length !== 0 || u || n !== 0 || i;
      return (i = u), (t = d(l, f, 0)), (n = l.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), d(null);
    }),
    (this.endShadows = function () {
      (s = !1), h();
    }),
    (this.setState = function (l, u, f) {
      const g = l.clippingPlanes,
        p = l.clipIntersection,
        m = l.clipShadows,
        _ = o.get(l);
      if (!i || g === null || g.length === 0 || (s && !m)) s ? d(null) : h();
      else {
        const y = s ? 0 : n,
          b = y * 4;
        let w = _.clippingState || null;
        (c.value = w), (w = d(g, u, b, f));
        for (let x = 0; x !== b; ++x) w[x] = t[x];
        (_.clippingState = w),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += y);
      }
    });

  function h() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }

  function d(l, u, f, g) {
    const p = l !== null ? l.length : 0;
    let m = null;
    if (p !== 0) {
      if (((m = c.value), g !== !0 || m === null)) {
        const _ = f + p * 4,
          y = u.matrixWorldInverse;
        a.getNormalMatrix(y),
          (m === null || m.length < _) && (m = new Float32Array(_));
        for (let b = 0, w = f; b !== p; ++b, w += 4)
          r.copy(l[b]).applyMatrix4(y, a),
            r.normal.toArray(m, w),
            (m[w + 3] = r.constant);
      }
      (c.value = m), (c.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), m;
  }
}

function w0(o) {
  let e = new WeakMap();

  function t(r, a) {
    return a === bl ? (r.mapping = qs) : a === wl && (r.mapping = Xs), r;
  }

  function n(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      const a = r.mapping;
      if (a === bl || a === wl)
        if (e.has(r)) {
          const c = e.get(r).texture;
          return t(c, r.mapping);
        } else {
          const c = r.image;
          if (c && c.height > 0) {
            const h = new od(c.height / 2);
            return (
              h.fromEquirectangularTexture(o, r),
              e.set(r, h),
              r.addEventListener("dispose", i),
              t(h.texture, r.mapping)
            );
          } else return null;
        }
    }
    return r;
  }

  function i(r) {
    const a = r.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }

  function s() {
    e = new WeakMap();
  }
  return {
    get: n,
    dispose: s,
  };
}
class la extends ic {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = r),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = r),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      r = n + e,
      a = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
        d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += h * this.view.offsetX),
        (r = s + h * this.view.width),
        (a -= d * this.view.offsetY),
        (c = a - d * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, r, a, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
la.prototype.isOrthographicCamera = !0;
const Ds = 4,
  Lh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  zi = 20,
  Za = new la(),
  Rh = new ie();
let $a = null;
const Fi = (1 + Math.sqrt(5)) / 2,
  Ss = 1 / Fi,
  Ph = [
    new C(1, 1, 1),
    new C(-1, 1, 1),
    new C(1, 1, -1),
    new C(-1, 1, -1),
    new C(0, Fi, Ss),
    new C(0, Fi, -Ss),
    new C(Ss, 0, Fi),
    new C(-Ss, 0, Fi),
    new C(Fi, Ss, 0),
    new C(-Fi, Ss, 0),
  ];
class Ih {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    ($a = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Fh()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = kh()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget($a),
      (e.scissorTest = !1),
      Mo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === qs || e.mapping === Xs
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      ($a = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize - 32,
      n = {
        magFilter: It,
        minFilter: It,
        generateMipmaps: !1,
        type: zs,
        format: rn,
        encoding: Zn,
        depthBuffer: !1,
      },
      i = Dh(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Dh(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = M0(s)),
        (this._blurMaterial = S0(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new St(this._lodPlanes[0], e);
    this._renderer.compile(t, Za);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Dt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      h = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      l = d.autoClear,
      u = d.toneMapping;
    d.getClearColor(Rh), (d.toneMapping = Jn), (d.autoClear = !1);
    const f = new ht({
        name: "PMREM.Background",
        side: xn,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new St(new Qr(), f);
    let p = !1;
    const m = e.background;
    m
      ? m.isColor && (f.color.copy(m), (e.background = null), (p = !0))
      : (f.color.copy(Rh), (p = !0));
    for (let _ = 0; _ < 6; _++) {
      const y = _ % 3;
      y === 0
        ? (a.up.set(0, c[_], 0), a.lookAt(h[_], 0, 0))
        : y === 1
        ? (a.up.set(0, 0, c[_]), a.lookAt(0, h[_], 0))
        : (a.up.set(0, c[_], 0), a.lookAt(0, 0, h[_]));
      const b = this._cubeSize;
      Mo(i, y * b, _ > 2 ? b : 0, b, b),
        d.setRenderTarget(i),
        p && d.render(g, a),
        d.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (d.toneMapping = u),
      (d.autoClear = l),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === qs || e.mapping === Xs;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fh()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = kh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      r = new St(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Mo(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(r, Za);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        r = Ph[(i - 1) % Ph.length];
      this._blur(e, i - 1, i, s, r);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(e, r, t, n, i, "latitudinal", s),
      this._halfBlur(r, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, r, a) {
    const c = this._renderer,
      h = this._blurMaterial;
    r !== "latitudinal" &&
      r !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const d = 3,
      l = new St(this._lodPlanes[i], h),
      u = h.uniforms,
      f = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * f) : (2 * Math.PI) / (2 * zi - 1),
      p = s / g,
      m = isFinite(s) ? 1 + Math.floor(d * p) : zi;
    m > zi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`
      );
    const _ = [];
    let y = 0;
    for (let T = 0; T < zi; ++T) {
      const R = T / p,
        I = Math.exp((-R * R) / 2);
      _.push(I), T === 0 ? (y += I) : T < m && (y += 2 * I);
    }
    for (let T = 0; T < _.length; T++) _[T] = _[T] / y;
    (u.envMap.value = e.texture),
      (u.samples.value = m),
      (u.weights.value = _),
      (u.latitudinal.value = r === "latitudinal"),
      a && (u.poleAxis.value = a);
    const { _lodMax: b } = this;
    (u.dTheta.value = g), (u.mipInt.value = b - n);
    const w = this._sizeLods[i],
      x = 3 * w * (i > b - Ds ? i - b + Ds : 0),
      E = 4 * (this._cubeSize - w);
    Mo(t, x, E, 3 * w, 2 * w), c.setRenderTarget(t), c.render(l, Za);
  }
}

function M0(o) {
  const e = [],
    t = [],
    n = [];
  let i = o;
  const s = o - Ds + 1 + Lh.length;
  for (let r = 0; r < s; r++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    r > o - Ds ? (c = Lh[r - o + Ds - 1]) : r === 0 && (c = 0), n.push(c);
    const h = 1 / (a - 1),
      d = -h / 2,
      l = 1 + h / 2,
      u = [d, d, l, d, l, l, d, d, l, l, d, l],
      f = 6,
      g = 6,
      p = 3,
      m = 2,
      _ = 1,
      y = new Float32Array(p * g * f),
      b = new Float32Array(m * g * f),
      w = new Float32Array(_ * g * f);
    for (let E = 0; E < f; E++) {
      const T = ((E % 3) * 2) / 3 - 1,
        R = E > 2 ? 0 : -1,
        I = [
          T,
          R,
          0,
          T + 2 / 3,
          R,
          0,
          T + 2 / 3,
          R + 1,
          0,
          T,
          R,
          0,
          T + 2 / 3,
          R + 1,
          0,
          T,
          R + 1,
          0,
        ];
      y.set(I, p * g * E), b.set(u, m * g * E);
      const B = [E, E, E, E, E, E];
      w.set(B, _ * g * E);
    }
    const x = new tt();
    x.setAttribute("position", new ft(y, p)),
      x.setAttribute("uv", new ft(b, m)),
      x.setAttribute("faceIndex", new ft(w, _)),
      e.push(x),
      i > Ds && i--;
  }
  return {
    lodPlanes: e,
    sizeLods: t,
    sigmas: n,
  };
}

function Dh(o, e, t) {
  const n = new Zt(o, e, t);
  return (
    (n.texture.mapping = ia),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}

function Mo(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}

function S0(o, e, t) {
  const n = new Float32Array(zi),
    i = new C(0, 1, 0);
  return new Ot({
    name: "SphericalGaussianBlur",
    defines: {
      n: zi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`,
    },
    uniforms: {
      envMap: {
        value: null,
      },
      samples: {
        value: 1,
      },
      weights: {
        value: n,
      },
      latitudinal: {
        value: !1,
      },
      dTheta: {
        value: 0,
      },
      mipInt: {
        value: 0,
      },
      poleAxis: {
        value: i,
      },
    },
    vertexShader: rc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}

function kh() {
  return new Ot({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
    },
    vertexShader: rc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}

function Fh() {
  return new Ot({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
    },
    vertexShader: rc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: mi,
    depthTest: !1,
    depthWrite: !1,
  });
}

function rc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}

function T0(o) {
  let e = new WeakMap(),
    t = null;

  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping,
        h = c === bl || c === wl,
        d = c === qs || c === Xs;
      if (h || d)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let l = e.get(a);
          return (
            t === null && (t = new Ih(o)),
            (l = h ? t.fromEquirectangular(a, l) : t.fromCubemap(a, l)),
            e.set(a, l),
            l.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const l = a.image;
            if ((h && l && l.height > 0) || (d && l && i(l))) {
              t === null && (t = new Ih(o));
              const u = h ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, u), a.addEventListener("dispose", s), u.texture;
            } else return null;
          }
        }
    }
    return a;
  }

  function i(a) {
    let c = 0;
    const h = 6;
    for (let d = 0; d < h; d++) a[d] !== void 0 && c++;
    return c === h;
  }

  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const h = e.get(c);
    h !== void 0 && (e.delete(c), h.dispose());
  }

  function r() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return {
    get: n,
    dispose: r,
  };
}

function E0(o) {
  const e = {};

  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          o.getExtension("WEBGL_depth_texture") ||
          o.getExtension("MOZ_WEBGL_depth_texture") ||
          o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          o.getExtension("EXT_texture_filter_anisotropic") ||
          o.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          o.getExtension("WEBGL_compressed_texture_s3tc") ||
          o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          o.getExtension("WEBGL_compressed_texture_pvrtc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}

function A0(o, e, t, n) {
  const i = {},
    s = new WeakMap();

  function r(l) {
    const u = l.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes) e.remove(u.attributes[g]);
    u.removeEventListener("dispose", r), delete i[u.id];
    const f = s.get(u);
    f && (e.remove(f), s.delete(u)),
      n.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      t.memory.geometries--;
  }

  function a(l, u) {
    return (
      i[u.id] === !0 ||
        (u.addEventListener("dispose", r),
        (i[u.id] = !0),
        t.memory.geometries++),
      u
    );
  }

  function c(l) {
    const u = l.attributes;
    for (const g in u) e.update(u[g], 34962);
    const f = l.morphAttributes;
    for (const g in f) {
      const p = f[g];
      for (let m = 0, _ = p.length; m < _; m++) e.update(p[m], 34962);
    }
  }

  function h(l) {
    const u = [],
      f = l.index,
      g = l.attributes.position;
    let p = 0;
    if (f !== null) {
      const y = f.array;
      p = f.version;
      for (let b = 0, w = y.length; b < w; b += 3) {
        const x = y[b + 0],
          E = y[b + 1],
          T = y[b + 2];
        u.push(x, E, E, T, T, x);
      }
    } else {
      const y = g.array;
      p = g.version;
      for (let b = 0, w = y.length / 3 - 1; b < w; b += 3) {
        const x = b + 0,
          E = b + 1,
          T = b + 2;
        u.push(x, E, E, T, T, x);
      }
    }
    const m = new (td(u) ? rd : sd)(u, 1);
    m.version = p;
    const _ = s.get(l);
    _ && e.remove(_), s.set(l, m);
  }

  function d(l) {
    const u = s.get(l);
    if (u) {
      const f = l.index;
      f !== null && u.version < f.version && h(l);
    } else h(l);
    return s.get(l);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: d,
  };
}

function C0(o, e, t, n) {
  const i = n.isWebGL2;
  let s;

  function r(u) {
    s = u;
  }
  let a, c;

  function h(u) {
    (a = u.type), (c = u.bytesPerElement);
  }

  function d(u, f) {
    o.drawElements(s, f, a, u * c), t.update(f, s, 1);
  }

  function l(u, f, g) {
    if (g === 0) return;
    let p, m;
    if (i) (p = o), (m = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (m = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[m](s, f, a, u * c, g), t.update(f, s, g);
  }
  (this.setMode = r),
    (this.setIndex = h),
    (this.render = d),
    (this.renderInstances = l);
}

function L0(o) {
  const e = {
      geometries: 0,
      textures: 0,
    },
    t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0,
    };

  function n(s, r, a) {
    switch ((t.calls++, r)) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }

  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}

function R0(o, e) {
  return o[0] - e[0];
}

function P0(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}

function Qa(o, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array
    ? (t = 127)
    : n instanceof Int16Array
    ? (t = 32767)
    : n instanceof Int32Array
    ? (t = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        n
      ),
    o.divideScalar(t);
}

function I0(o, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    r = new Ke(),
    a = [];
  for (let h = 0; h < 8; h++) a[h] = [h, 0];

  function c(h, d, l, u) {
    const f = h.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p =
          d.morphAttributes.position ||
          d.morphAttributes.normal ||
          d.morphAttributes.color,
        m = p !== void 0 ? p.length : 0;
      let _ = s.get(d);
      if (_ === void 0 || _.count !== m) {
        let N = function () {
          D.dispose(), s.delete(d), d.removeEventListener("dispose", N);
        };
        var g = N;
        _ !== void 0 && _.texture.dispose();
        const w = d.morphAttributes.position !== void 0,
          x = d.morphAttributes.normal !== void 0,
          E = d.morphAttributes.color !== void 0,
          T = d.morphAttributes.position || [],
          R = d.morphAttributes.normal || [],
          I = d.morphAttributes.color || [];
        let B = 0;
        w === !0 && (B = 1), x === !0 && (B = 2), E === !0 && (B = 3);
        let v = d.attributes.position.count * B,
          L = 1;
        v > e.maxTextureSize &&
          ((L = Math.ceil(v / e.maxTextureSize)), (v = e.maxTextureSize));
        const U = new Float32Array(v * L * 4 * m),
          D = new sa(U, v, L, m);
        (D.type = ui), (D.needsUpdate = !0);
        const O = B * 4;
        for (let H = 0; H < m; H++) {
          const F = T[H],
            X = R[H],
            Z = I[H],
            Q = v * L * 4 * H;
          for (let $ = 0; $ < F.count; $++) {
            const ue = $ * O;
            w === !0 &&
              (r.fromBufferAttribute(F, $),
              F.normalized === !0 && Qa(r, F),
              (U[Q + ue + 0] = r.x),
              (U[Q + ue + 1] = r.y),
              (U[Q + ue + 2] = r.z),
              (U[Q + ue + 3] = 0)),
              x === !0 &&
                (r.fromBufferAttribute(X, $),
                X.normalized === !0 && Qa(r, X),
                (U[Q + ue + 4] = r.x),
                (U[Q + ue + 5] = r.y),
                (U[Q + ue + 6] = r.z),
                (U[Q + ue + 7] = 0)),
              E === !0 &&
                (r.fromBufferAttribute(Z, $),
                Z.normalized === !0 && Qa(r, Z),
                (U[Q + ue + 8] = r.x),
                (U[Q + ue + 9] = r.y),
                (U[Q + ue + 10] = r.z),
                (U[Q + ue + 11] = Z.itemSize === 4 ? r.w : 1));
          }
        }
        (_ = {
          count: m,
          texture: D,
          size: new te(v, L),
        }),
          s.set(d, _),
          d.addEventListener("dispose", N);
      }
      let y = 0;
      for (let w = 0; w < f.length; w++) y += f[w];
      const b = d.morphTargetsRelative ? 1 : 1 - y;
      u.getUniforms().setValue(o, "morphTargetBaseInfluence", b),
        u.getUniforms().setValue(o, "morphTargetInfluences", f),
        u.getUniforms().setValue(o, "morphTargetsTexture", _.texture, t),
        u.getUniforms().setValue(o, "morphTargetsTextureSize", _.size);
    } else {
      const p = f === void 0 ? 0 : f.length;
      let m = n[d.id];
      if (m === void 0 || m.length !== p) {
        m = [];
        for (let x = 0; x < p; x++) m[x] = [x, 0];
        n[d.id] = m;
      }
      for (let x = 0; x < p; x++) {
        const E = m[x];
        (E[0] = x), (E[1] = f[x]);
      }
      m.sort(P0);
      for (let x = 0; x < 8; x++)
        x < p && m[x][1]
          ? ((a[x][0] = m[x][0]), (a[x][1] = m[x][1]))
          : ((a[x][0] = Number.MAX_SAFE_INTEGER), (a[x][1] = 0));
      a.sort(R0);
      const _ = d.morphAttributes.position,
        y = d.morphAttributes.normal;
      let b = 0;
      for (let x = 0; x < 8; x++) {
        const E = a[x],
          T = E[0],
          R = E[1];
        T !== Number.MAX_SAFE_INTEGER && R
          ? (_ &&
              d.getAttribute("morphTarget" + x) !== _[T] &&
              d.setAttribute("morphTarget" + x, _[T]),
            y &&
              d.getAttribute("morphNormal" + x) !== y[T] &&
              d.setAttribute("morphNormal" + x, y[T]),
            (i[x] = R),
            (b += R))
          : (_ &&
              d.hasAttribute("morphTarget" + x) === !0 &&
              d.deleteAttribute("morphTarget" + x),
            y &&
              d.hasAttribute("morphNormal" + x) === !0 &&
              d.deleteAttribute("morphNormal" + x),
            (i[x] = 0));
      }
      const w = d.morphTargetsRelative ? 1 : 1 - b;
      u.getUniforms().setValue(o, "morphTargetBaseInfluence", w),
        u.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return {
    update: c,
  };
}

function D0(o, e, t, n) {
  let i = new WeakMap();

  function s(c) {
    const h = n.render.frame,
      d = c.geometry,
      l = e.get(c, d);
    return (
      i.get(l) !== h && (e.update(l), i.set(l, h)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", a) === !1 &&
          c.addEventListener("dispose", a),
        t.update(c.instanceMatrix, 34962),
        c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      l
    );
  }

  function r() {
    i = new WeakMap();
  }

  function a(c) {
    const h = c.target;
    h.removeEventListener("dispose", a),
      t.remove(h.instanceMatrix),
      h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return {
    update: s,
    dispose: r,
  };
}
const ld = new xt(),
  cd = new sa(),
  hd = new tc(),
  ud = new ra(),
  Bh = [],
  Oh = [],
  Nh = new Float32Array(16),
  zh = new Float32Array(9),
  Hh = new Float32Array(4);

function sr(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0) return o;
  const i = e * t;
  let s = Bh[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (Bh[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let r = 1, a = 0; r !== e; ++r) (a += t), o[r].toArray(s, a);
  }
  return s;
}

function Gt(o, e) {
  if (o.length !== e.length) return !1;
  for (let t = 0, n = o.length; t < n; t++) if (o[t] !== e[t]) return !1;
  return !0;
}

function Nt(o, e) {
  for (let t = 0, n = e.length; t < n; t++) o[t] = e[t];
}

function ca(o, e) {
  let t = Oh[e];
  t === void 0 && ((t = new Int32Array(e)), (Oh[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
  return t;
}

function k0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), (t[0] = e));
}

function F0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (o.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Gt(t, e)) return;
    o.uniform2fv(this.addr, e), Nt(t, e);
  }
}

function B0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (o.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (o.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Gt(t, e)) return;
    o.uniform3fv(this.addr, e), Nt(t, e);
  }
}

function O0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (o.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Gt(t, e)) return;
    o.uniform4fv(this.addr, e), Nt(t, e);
  }
}

function N0(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    o.uniformMatrix2fv(this.addr, !1, e), Nt(t, e);
  } else {
    if (Gt(t, n)) return;
    Hh.set(n), o.uniformMatrix2fv(this.addr, !1, Hh), Nt(t, n);
  }
}

function z0(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    o.uniformMatrix3fv(this.addr, !1, e), Nt(t, e);
  } else {
    if (Gt(t, n)) return;
    zh.set(n), o.uniformMatrix3fv(this.addr, !1, zh), Nt(t, n);
  }
}

function H0(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    o.uniformMatrix4fv(this.addr, !1, e), Nt(t, e);
  } else {
    if (Gt(t, n)) return;
    Nh.set(n), o.uniformMatrix4fv(this.addr, !1, Nh), Nt(t, n);
  }
}

function U0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), (t[0] = e));
}

function G0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform2iv(this.addr, e), Nt(t, e));
}

function V0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform3iv(this.addr, e), Nt(t, e));
}

function W0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform4iv(this.addr, e), Nt(t, e));
}

function q0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), (t[0] = e));
}

function X0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform2uiv(this.addr, e), Nt(t, e));
}

function j0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform3uiv(this.addr, e), Nt(t, e));
}

function Y0(o, e) {
  const t = this.cache;
  Gt(t, e) || (o.uniform4uiv(this.addr, e), Nt(t, e));
}

function J0(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || ld, i);
}

function K0(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || hd, i);
}

function Z0(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || ud, i);
}

function $0(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || cd, i);
}

function Q0(o) {
  switch (o) {
    case 5126:
      return k0;
    case 35664:
      return F0;
    case 35665:
      return B0;
    case 35666:
      return O0;
    case 35674:
      return N0;
    case 35675:
      return z0;
    case 35676:
      return H0;
    case 5124:
    case 35670:
      return U0;
    case 35667:
    case 35671:
      return G0;
    case 35668:
    case 35672:
      return V0;
    case 35669:
    case 35673:
      return W0;
    case 5125:
      return q0;
    case 36294:
      return X0;
    case 36295:
      return j0;
    case 36296:
      return Y0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return J0;
    case 35679:
    case 36299:
    case 36307:
      return K0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Z0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $0;
  }
}

function ey(o, e) {
  o.uniform1fv(this.addr, e);
}

function ty(o, e) {
  const t = sr(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}

function ny(o, e) {
  const t = sr(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}

function iy(o, e) {
  const t = sr(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}

function sy(o, e) {
  const t = sr(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}

function ry(o, e) {
  const t = sr(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}

function oy(o, e) {
  const t = sr(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}

function ay(o, e) {
  o.uniform1iv(this.addr, e);
}

function ly(o, e) {
  o.uniform2iv(this.addr, e);
}

function cy(o, e) {
  o.uniform3iv(this.addr, e);
}

function hy(o, e) {
  o.uniform4iv(this.addr, e);
}

function uy(o, e) {
  o.uniform1uiv(this.addr, e);
}

function dy(o, e) {
  o.uniform2uiv(this.addr, e);
}

function fy(o, e) {
  o.uniform3uiv(this.addr, e);
}

function py(o, e) {
  o.uniform4uiv(this.addr, e);
}

function my(o, e, t) {
  const n = e.length,
    i = ca(t, n);
  o.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture2D(e[s] || ld, i[s]);
}

function gy(o, e, t) {
  const n = e.length,
    i = ca(t, n);
  o.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture3D(e[s] || hd, i[s]);
}

function _y(o, e, t) {
  const n = e.length,
    i = ca(t, n);
  o.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTextureCube(e[s] || ud, i[s]);
}

function yy(o, e, t) {
  const n = e.length,
    i = ca(t, n);
  o.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s) t.setTexture2DArray(e[s] || cd, i[s]);
}

function xy(o) {
  switch (o) {
    case 5126:
      return ey;
    case 35664:
      return ty;
    case 35665:
      return ny;
    case 35666:
      return iy;
    case 35674:
      return sy;
    case 35675:
      return ry;
    case 35676:
      return oy;
    case 5124:
    case 35670:
      return ay;
    case 35667:
    case 35671:
      return ly;
    case 35668:
    case 35672:
      return cy;
    case 35669:
    case 35673:
      return hy;
    case 5125:
      return uy;
    case 36294:
      return dy;
    case 36295:
      return fy;
    case 36296:
      return py;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return my;
    case 35679:
    case 36299:
    case 36307:
      return gy;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _y;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return yy;
  }
}

function vy(o, e, t) {
  (this.id = o),
    (this.addr = t),
    (this.cache = []),
    (this.setValue = Q0(e.type));
}

function dd(o, e, t) {
  (this.id = o),
    (this.addr = t),
    (this.cache = []),
    (this.size = e.size),
    (this.setValue = xy(e.type));
}
dd.prototype.updateCache = function (o) {
  const e = this.cache;
  o instanceof Float32Array &&
    e.length !== o.length &&
    (this.cache = new Float32Array(o.length)),
    Nt(e, o);
};

function fd(o) {
  (this.id = o), (this.seq = []), (this.map = {});
}
fd.prototype.setValue = function (o, e, t) {
  const n = this.seq;
  for (let i = 0, s = n.length; i !== s; ++i) {
    const r = n[i];
    r.setValue(o, e[r.id], t);
  }
};
const el = /(\w+)(\])?(\[|\.)?/g;

function Uh(o, e) {
  o.seq.push(e), (o.map[e.id] = e);
}

function by(o, e, t) {
  const n = o.name,
    i = n.length;
  for (el.lastIndex = 0; ; ) {
    const s = el.exec(n),
      r = el.lastIndex;
    let a = s[1];
    const c = s[2] === "]",
      h = s[3];
    if ((c && (a = a | 0), h === void 0 || (h === "[" && r + 2 === i))) {
      Uh(t, h === void 0 ? new vy(a, o, e) : new dd(a, o, e));
      break;
    } else {
      let l = t.map[a];
      l === void 0 && ((l = new fd(a)), Uh(t, l)), (t = l);
    }
  }
}

function gi(o, e) {
  (this.seq = []), (this.map = {});
  const t = o.getProgramParameter(e, 35718);
  for (let n = 0; n < t; ++n) {
    const i = o.getActiveUniform(e, n),
      s = o.getUniformLocation(e, i.name);
    by(i, s, this);
  }
}
gi.prototype.setValue = function (o, e, t, n) {
  const i = this.map[e];
  i !== void 0 && i.setValue(o, t, n);
};
gi.prototype.setOptional = function (o, e, t) {
  const n = e[t];
  n !== void 0 && this.setValue(o, t, n);
};
gi.upload = function (o, e, t, n) {
  for (let i = 0, s = e.length; i !== s; ++i) {
    const r = e[i],
      a = t[r.id];
    a.needsUpdate !== !1 && r.setValue(o, a.value, n);
  }
};
gi.seqWithValue = function (o, e) {
  const t = [];
  for (let n = 0, i = o.length; n !== i; ++n) {
    const s = o[n];
    s.id in e && t.push(s);
  }
  return t;
};

function Gh(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let wy = 0;

function My(o, e) {
  const t = o.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) n.push(r + 1 + ": " + t[r]);
  return n.join(`
`);
}

function Sy(o) {
  switch (o) {
    case Zn:
      return ["Linear", "( value )"];
    case Ge:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", o),
        ["Linear", "( value )"]
      );
  }
}

function Vh(o, e, t) {
  const n = o.getShaderParameter(e, 35713),
    i = o.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);
  return (
    t.toUpperCase() +
    `

` +
    i +
    `

` +
    My(o.getShaderSource(e), s)
  );
}

function Ty(o, e) {
  const t = Sy(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}

function Ey(o, e) {
  let t;
  switch (e) {
    case Dp:
      t = "Linear";
      break;
    case kp:
      t = "Reinhard";
      break;
    case Fp:
      t = "OptimizedCineon";
      break;
    case Bp:
      t = "ACESFilmic";
      break;
    case Op:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}

function Ay(o) {
  return [
    o.extensionDerivatives ||
    o.envMapCubeUVHeight ||
    o.bumpMap ||
    o.tangentSpaceNormalMap ||
    o.clearcoatNormalMap ||
    o.flatShading ||
    o.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) &&
    o.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) &&
    o.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Tr).join(`
`);
}

function Cy(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}

function Ly(o, e) {
  const t = {},
    n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = o.getActiveAttrib(e, i),
      r = s.name;
    let a = 1;
    s.type === 35674 && (a = 2),
      s.type === 35675 && (a = 3),
      s.type === 35676 && (a = 4),
      (t[r] = {
        type: s.type,
        location: o.getAttribLocation(e, r),
        locationSize: a,
      });
  }
  return t;
}

function Tr(o) {
  return o !== "";
}

function Wh(o, e) {
  return o
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}

function qh(o, e) {
  return o
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Ry = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Al(o) {
  return o.replace(Ry, Py);
}

function Py(o, e) {
  const t = Oe[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Al(t);
}
const Iy =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  Dy =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Xh(o) {
  return o.replace(Dy, pd).replace(Iy, ky);
}

function ky(o, e, t, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    pd(o, e, t, n)
  );
}

function pd(o, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}

function jh(o) {
  let e =
    "precision " +
    o.precision +
    ` float;
precision ` +
    o.precision +
    " int;";
  return (
    o.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : o.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : o.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}

function Fy(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    o.shadowMapType === Xu
      ? (e = "SHADOWMAP_TYPE_PCF")
      : o.shadowMapType === up
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : o.shadowMapType === Sr && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}

function By(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case qs:
      case Xs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ia:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}

function Oy(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case Xs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}

function Ny(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case na:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Pp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ip:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}

function zy(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e / 32 + 1) + 3,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}

function Hy(o, e, t, n) {
  const i = o.getContext(),
    s = t.defines;
  let r = t.vertexShader,
    a = t.fragmentShader;
  const c = Fy(t),
    h = By(t),
    d = Oy(t),
    l = Ny(t),
    u = zy(t),
    f = t.isWebGL2 ? "" : Ay(t),
    g = Cy(s),
    p = i.createProgram();
  let m,
    _,
    y = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((m = [g].filter(Tr).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (_ = [f, g].filter(Tr).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((m = [
        jh(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define MAX_BONES " + t.maxBones,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + d : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.useVertexTexture ? "#define BONE_TEXTURE" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Tr).join(`
`)),
      (_ = [
        f,
        jh(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + d : "",
        t.envMap ? "#define " + l : "",
        u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
        u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
        u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Jn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Jn ? Oe.tonemapping_pars_fragment : "",
        t.toneMapping !== Jn ? Ey("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Oe.encodings_pars_fragment,
        Ty("linearToOutputTexel", t.outputEncoding),
        t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Tr).join(`
`))),
    (r = Al(r)),
    (r = Wh(r, t)),
    (r = qh(r, t)),
    (a = Al(a)),
    (a = Wh(a, t)),
    (a = qh(a, t)),
    (r = Xh(r)),
    (a = Xh(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((y = `#version 300 es
`),
      (m =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (_ =
        [
          "#define varying in",
          t.glslVersion === gh
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === gh ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        _));
  const b = y + m + r,
    w = y + _ + a,
    x = Gh(i, 35633, b),
    E = Gh(i, 35632, w);
  if (
    (i.attachShader(p, x),
    i.attachShader(p, E),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p),
    o.debug.checkShaderErrors)
  ) {
    const I = i.getProgramInfoLog(p).trim(),
      B = i.getShaderInfoLog(x).trim(),
      v = i.getShaderInfoLog(E).trim();
    let L = !0,
      U = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      L = !1;
      const D = Vh(i, x, "vertex"),
        O = Vh(i, E, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          I +
          `
` +
          D +
          `
` +
          O
      );
    } else
      I !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", I)
        : (B === "" || v === "") && (U = !1);
    U &&
      (this.diagnostics = {
        runnable: L,
        programLog: I,
        vertexShader: {
          log: B,
          prefix: m,
        },
        fragmentShader: {
          log: v,
          prefix: _,
        },
      });
  }
  i.deleteShader(x), i.deleteShader(E);
  let T;
  this.getUniforms = function () {
    return T === void 0 && (T = new gi(i, p)), T;
  };
  let R;
  return (
    (this.getAttributes = function () {
      return R === void 0 && (R = Ly(i, p)), R;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = wy++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = x),
    (this.fragmentShader = E),
    this
  );
}

export { A0, C0, D0, E0, Hy, I0, L0, T0, _0, b0, gi, la, v0, w0, x0, y0 };
