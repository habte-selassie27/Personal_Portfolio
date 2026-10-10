import { $u, At, Br, Ca, Is, Ke, Nr, Ps, Ql, Ut, Wo, Ys, cn, es, ie, na, te, xt, zr } from "./three-01.jsx";
import { C, _e, je } from "./three-02.jsx";
import { Dt, Ot, dt, ht, mt, oa, ra, tt } from "./three-03.jsx";
import { la } from "./three-05.jsx";
import { ac, oc } from "./three-06.jsx";
import { Pn } from "./three-07.jsx";
import { Kn, fa, os, yi } from "./three-08.jsx";
class _c extends tt {
  constructor(
    e = new yi([new te(0, 0.5), new te(-0.5, -0.5), new te(0.5, -0.5)]),
    t = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = {
        shapes: e,
        curveSegments: t,
      });
    const n = [],
      i = [],
      s = [],
      r = [];
    let a = 0,
      c = 0;
    if (Array.isArray(e) === !1) h(e);
    else
      for (let d = 0; d < e.length; d++)
        h(e[d]), this.addGroup(a, c, d), (a += c), (c = 0);
    this.setIndex(n),
      this.setAttribute("position", new mt(i, 3)),
      this.setAttribute("normal", new mt(s, 3)),
      this.setAttribute("uv", new mt(r, 2));

    function h(d) {
      const l = i.length / 3,
        u = d.extractPoints(t);
      let f = u.shape;
      const g = u.holes;
      Kn.isClockWise(f) === !1 && (f = f.reverse());
      for (let m = 0, _ = g.length; m < _; m++) {
        const y = g[m];
        Kn.isClockWise(y) === !0 && (g[m] = y.reverse());
      }
      const p = Kn.triangulateShape(f, g);
      for (let m = 0, _ = g.length; m < _; m++) {
        const y = g[m];
        f = f.concat(y);
      }
      for (let m = 0, _ = f.length; m < _; m++) {
        const y = f[m];
        i.push(y.x, y.y, 0), s.push(0, 0, 1), r.push(y.x, y.y);
      }
      for (let m = 0, _ = p.length; m < _; m++) {
        const y = p[m],
          b = y[0] + l,
          w = y[1] + l,
          x = y[2] + l;
        n.push(b, w, x), (c += 3);
      }
    }
  }
  toJSON() {
    const e = super.toJSON(),
      t = this.parameters.shapes;
    return qx(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const r = t[e.shapes[i]];
      n.push(r);
    }
    return new _c(n, e.curveSegments);
  }
}

function qx(o, e) {
  if (((e.shapes = []), Array.isArray(o)))
    for (let t = 0, n = o.length; t < n; t++) {
      const i = o[t];
      e.shapes.push(i.uuid);
    }
  else e.shapes.push(o.uuid);
  return e;
}
class Rd extends dt {
  constructor(e) {
    super(),
      (this.type = "ShadowMaterial"),
      (this.color = new ie(0)),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this;
  }
}
Rd.prototype.isShadowMaterial = !0;
class Pd extends Ot {
  constructor(e) {
    super(e), (this.type = "RawShaderMaterial");
  }
}
Pd.prototype.isRawShaderMaterial = !0;
class ar extends dt {
  constructor(e) {
    super(),
      (this.defines = {
        STANDARD: "",
      }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new ie(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = es),
      (this.normalScale = new te(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
      }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
ar.prototype.isMeshStandardMaterial = !0;
class Ei extends ar {
  constructor(e) {
    super(),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new te(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return At((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.sheenColor = new ie(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new ie(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new ie(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        STANDARD: "",
        PHYSICAL: "",
      }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
Ei.prototype.isMeshPhysicalMaterial = !0;
class Id extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new ie(16777215)),
      (this.specular = new ie(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = es),
      (this.normalScale = new te(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = na),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
Id.prototype.isMeshPhongMaterial = !0;
class Dd extends dt {
  constructor(e) {
    super(),
      (this.defines = {
        TOON: "",
      }),
      (this.type = "MeshToonMaterial"),
      (this.color = new ie(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = es),
      (this.normalScale = new te(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      this
    );
  }
}
Dd.prototype.isMeshToonMaterial = !0;
class kd extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = es),
      (this.normalScale = new te(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
kd.prototype.isMeshNormalMaterial = !0;
class Fd extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = na),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      this
    );
  }
}
Fd.prototype.isMeshLambertMaterial = !0;
class Fs extends dt {
  constructor(e) {
    super(),
      (this.defines = {
        MATCAP: "",
      }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new ie(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = es),
      (this.normalScale = new te(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = {
        MATCAP: "",
      }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
Fs.prototype.isMeshMatcapMaterial = !0;
class Bd extends os {
  constructor(e) {
    super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
}
Bd.prototype.isLineDashedMaterial = !0;
const Xx = {
  ShadowMaterial: Rd,
  SpriteMaterial: Pn,
  RawShaderMaterial: Pd,
  ShaderMaterial: Ot,
  PointsMaterial: fa,
  MeshPhysicalMaterial: Ei,
  MeshStandardMaterial: ar,
  MeshPhongMaterial: Id,
  MeshToonMaterial: Dd,
  MeshNormalMaterial: kd,
  MeshLambertMaterial: Fd,
  MeshDepthMaterial: oc,
  MeshDistanceMaterial: ac,
  MeshBasicMaterial: ht,
  MeshMatcapMaterial: Fs,
  LineDashedMaterial: Bd,
  LineBasicMaterial: os,
  Material: dt,
};
dt.fromType = function (o) {
  return new Xx[o]();
};
const it = {
  arraySlice: function (o, e, t) {
    return it.isTypedArray(o)
      ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length))
      : o.slice(e, t);
  },
  convertArray: function (o, e, t) {
    return !o || (!t && o.constructor === e)
      ? o
      : typeof e.BYTES_PER_ELEMENT == "number"
      ? new e(o)
      : Array.prototype.slice.call(o);
  },
  isTypedArray: function (o) {
    return ArrayBuffer.isView(o) && !(o instanceof DataView);
  },
  getKeyframeOrder: function (o) {
    function e(i, s) {
      return o[i] - o[s];
    }
    const t = o.length,
      n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  },
  sortedArray: function (o, e, t) {
    const n = o.length,
      i = new o.constructor(n);
    for (let s = 0, r = 0; r !== n; ++s) {
      const a = t[s] * e;
      for (let c = 0; c !== e; ++c) i[r++] = o[a + c];
    }
    return i;
  },
  flattenJSON: function (o, e, t, n) {
    let i = 1,
      s = o[0];
    for (; s !== void 0 && s[n] === void 0; ) s = o[i++];
    if (s === void 0) return;
    let r = s[n];
    if (r !== void 0)
      if (Array.isArray(r))
        do
          (r = s[n]),
            r !== void 0 && (e.push(s.time), t.push.apply(t, r)),
            (s = o[i++]);
        while (s !== void 0);
      else if (r.toArray !== void 0)
        do
          (r = s[n]),
            r !== void 0 && (e.push(s.time), r.toArray(t, t.length)),
            (s = o[i++]);
        while (s !== void 0);
      else
        do
          (r = s[n]), r !== void 0 && (e.push(s.time), t.push(r)), (s = o[i++]);
        while (s !== void 0);
  },
  subclip: function (o, e, t, n, i = 30) {
    const s = o.clone();
    s.name = e;
    const r = [];
    for (let c = 0; c < s.tracks.length; ++c) {
      const h = s.tracks[c],
        d = h.getValueSize(),
        l = [],
        u = [];
      for (let f = 0; f < h.times.length; ++f) {
        const g = h.times[f] * i;
        if (!(g < t || g >= n)) {
          l.push(h.times[f]);
          for (let p = 0; p < d; ++p) u.push(h.values[f * d + p]);
        }
      }
      l.length !== 0 &&
        ((h.times = it.convertArray(l, h.times.constructor)),
        (h.values = it.convertArray(u, h.values.constructor)),
        r.push(h));
    }
    s.tracks = r;
    let a = 1 / 0;
    for (let c = 0; c < s.tracks.length; ++c)
      a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
    for (let c = 0; c < s.tracks.length; ++c) s.tracks[c].shift(-1 * a);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function (o, e = 0, t = o, n = 30) {
    n <= 0 && (n = 30);
    const i = t.tracks.length,
      s = e / n;
    for (let r = 0; r < i; ++r) {
      const a = t.tracks[r],
        c = a.ValueTypeName;
      if (c === "bool" || c === "string") continue;
      const h = o.tracks.find(function (_) {
        return _.name === a.name && _.ValueTypeName === c;
      });
      if (h === void 0) continue;
      let d = 0;
      const l = a.getValueSize();
      a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (d = l / 3);
      let u = 0;
      const f = h.getValueSize();
      h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (u = f / 3);
      const g = a.times.length - 1;
      let p;
      if (s <= a.times[0]) {
        const _ = d,
          y = l - d;
        p = it.arraySlice(a.values, _, y);
      } else if (s >= a.times[g]) {
        const _ = g * l + d,
          y = _ + l - d;
        p = it.arraySlice(a.values, _, y);
      } else {
        const _ = a.createInterpolant(),
          y = d,
          b = l - d;
        _.evaluate(s), (p = it.arraySlice(_.resultBuffer, y, b));
      }
      c === "quaternion" &&
        new Ut().fromArray(p).normalize().conjugate().toArray(p);
      const m = h.times.length;
      for (let _ = 0; _ < m; ++_) {
        const y = _ * f + u;
        if (c === "quaternion")
          Ut.multiplyQuaternionsFlat(h.values, y, p, 0, h.values, y);
        else {
          const b = f - u * 2;
          for (let w = 0; w < b; ++w) h.values[y + w] -= p[w];
        }
      }
    }
    return (o.blendMode = $u), o;
  },
};
class $n {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      s = t[n - 1];
    e: {
      t: {
        let r;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.afterEnd_(n - 1, e, s)
                );
              }
              if (n === a) break;
              if (((s = i), (i = t[++n]), e < i)) break t;
            }
            r = t.length;
            break n;
          }
          if (!(e >= s)) {
            const a = t[1];
            e < a && ((n = 2), (s = a));
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
              if (n === c) break;
              if (((i = s), (s = t[--n - 1]), e >= s)) break t;
            }
            (r = n), (n = 0);
            break n;
          }
          break e;
        }
        for (; n < r; ) {
          const a = (n + r) >>> 1;
          e < t[a] ? (r = a) : (n = a + 1);
        }
        if (((i = t[n]), (s = t[n - 1]), s === void 0))
          return (this._cachedIndex = 0), this.beforeStart_(0, e, i);
        if (i === void 0)
          return (
            (n = t.length), (this._cachedIndex = n), this.afterEnd_(n - 1, s, e)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i;
    for (let r = 0; r !== i; ++r) t[r] = n[s + r];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
$n.prototype.beforeStart_ = $n.prototype.copySampleValue_;
$n.prototype.afterEnd_ = $n.prototype.copySampleValue_;
class jx extends $n {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = {
        endingStart: Ps,
        endingEnd: Ps,
      });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2,
      r = e + 1,
      a = i[s],
      c = i[r];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Is:
          (s = e), (a = 2 * t - n);
          break;
        case Wo:
          (s = i.length - 2), (a = t + i[s] - i[s + 1]);
          break;
        default:
          (s = e), (a = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Is:
          (r = e), (c = 2 * n - t);
          break;
        case Wo:
          (r = 1), (c = n + i[1] - i[0]);
          break;
        default:
          (r = e - 1), (c = t);
      }
    const h = (n - t) * 0.5,
      d = this.valueSize;
    (this._weightPrev = h / (t - a)),
      (this._weightNext = h / (c - n)),
      (this._offsetPrev = s * d),
      (this._offsetNext = r * d);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      r = this.sampleValues,
      a = this.valueSize,
      c = e * a,
      h = c - a,
      d = this._offsetPrev,
      l = this._offsetNext,
      u = this._weightPrev,
      f = this._weightNext,
      g = (n - t) / (i - t),
      p = g * g,
      m = p * g,
      _ = -u * m + 2 * u * p - u * g,
      y = (1 + u) * m + (-1.5 - 2 * u) * p + (-0.5 + u) * g + 1,
      b = (-1 - f) * m + (1.5 + f) * p + 0.5 * g,
      w = f * m - f * p;
    for (let x = 0; x !== a; ++x)
      s[x] = _ * r[d + x] + y * r[h + x] + b * r[c + x] + w * r[l + x];
    return s;
  }
}
class Od extends $n {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      r = this.sampleValues,
      a = this.valueSize,
      c = e * a,
      h = c - a,
      d = (n - t) / (i - t),
      l = 1 - d;
    for (let u = 0; u !== a; ++u) s[u] = r[h + u] * l + r[c + u] * d;
    return s;
  }
}
class Yx extends $n {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Fn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = it.convertArray(t, this.TimeBufferType)),
      (this.values = it.convertArray(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: it.convertArray(e.times, Array),
        values: it.convertArray(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Yx(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Od(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new jx(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Br:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ys:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ca:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Br;
      case this.InterpolantFactoryMethodLinear:
        return Ys;
      case this.InterpolantFactoryMethodSmooth:
        return Ca;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let s = 0,
      r = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; r !== -1 && n[r] > t; ) --r;
    if ((++r, s !== 0 || r !== i)) {
      s >= r && ((r = Math.max(r, 1)), (s = r - 1));
      const a = this.getValueSize();
      (this.times = it.arraySlice(n, s, r)),
        (this.values = it.arraySlice(this.values, s * a, r * a));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      s = n.length;
    s === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let r = null;
    for (let a = 0; a !== s; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          a,
          c
        ),
          (e = !1);
        break;
      }
      if (r !== null && r > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, r),
          (e = !1);
        break;
      }
      r = c;
    }
    if (i !== void 0 && it.isTypedArray(i))
      for (let a = 0, c = i.length; a !== c; ++a) {
        const h = i[a];
        if (isNaN(h)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            a,
            h
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = it.arraySlice(this.times),
      t = it.arraySlice(this.values),
      n = this.getValueSize(),
      i = this.getInterpolation() === Ca,
      s = e.length - 1;
    let r = 1;
    for (let a = 1; a < s; ++a) {
      let c = !1;
      const h = e[a],
        d = e[a + 1];
      if (h !== d && (a !== 1 || h !== e[0]))
        if (i) c = !0;
        else {
          const l = a * n,
            u = l - n,
            f = l + n;
          for (let g = 0; g !== n; ++g) {
            const p = t[l + g];
            if (p !== t[u + g] || p !== t[f + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (a !== r) {
          e[r] = e[a];
          const l = a * n,
            u = r * n;
          for (let f = 0; f !== n; ++f) t[u + f] = t[l + f];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let a = s * n, c = r * n, h = 0; h !== n; ++h) t[c + h] = t[a + h];
      ++r;
    }
    return (
      r !== e.length
        ? ((this.times = it.arraySlice(e, 0, r)),
          (this.values = it.arraySlice(t, 0, r * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = it.arraySlice(this.times, 0),
      t = it.arraySlice(this.values, 0),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
Fn.prototype.TimeBufferType = Float32Array;
Fn.prototype.ValueBufferType = Float32Array;
Fn.prototype.DefaultInterpolation = Ys;
class lr extends Fn {}
lr.prototype.ValueTypeName = "bool";
lr.prototype.ValueBufferType = Array;
lr.prototype.DefaultInterpolation = Br;
lr.prototype.InterpolantFactoryMethodLinear = void 0;
lr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Nd extends Fn {}
Nd.prototype.ValueTypeName = "color";
class Vr extends Fn {}
Vr.prototype.ValueTypeName = "number";
class Jx extends $n {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      r = this.sampleValues,
      a = this.valueSize,
      c = (n - t) / (i - t);
    let h = e * a;
    for (let d = h + a; h !== d; h += 4) Ut.slerpFlat(s, 0, r, h - a, r, h, c);
    return s;
  }
}
class Zi extends Fn {
  InterpolantFactoryMethodLinear(e) {
    return new Jx(this.times, this.values, this.getValueSize(), e);
  }
}
Zi.prototype.ValueTypeName = "quaternion";
Zi.prototype.DefaultInterpolation = Ys;
Zi.prototype.InterpolantFactoryMethodSmooth = void 0;
class cr extends Fn {}
cr.prototype.ValueTypeName = "string";
cr.prototype.ValueBufferType = Array;
cr.prototype.DefaultInterpolation = Br;
cr.prototype.InterpolantFactoryMethodLinear = void 0;
cr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Wr extends Fn {}
Wr.prototype.ValueTypeName = "vector";
class Il {
  constructor(e, t = -1, n, i = Ql) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = cn()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let r = 0, a = n.length; r !== a; ++r) t.push(Zx(n[r]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return (s.uuid = e.uuid), s;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let s = 0, r = n.length; s !== r; ++s) t.push(Fn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length,
      r = [];
    for (let a = 0; a < s; a++) {
      let c = [],
        h = [];
      c.push((a + s - 1) % s, a, (a + 1) % s), h.push(0, 1, 0);
      const d = it.getKeyframeOrder(c);
      (c = it.sortedArray(c, 1, d)),
        (h = it.sortedArray(h, 1, d)),
        !i && c[0] === 0 && (c.push(s), h.push(h[0])),
        r.push(
          new Vr(".morphTargetInfluences[" + t[a].name + "]", c, h).scale(1 / n)
        );
    }
    return new this(e, -1, r);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const h = e[a],
        d = h.name.match(s);
      if (d && d.length > 1) {
        const l = d[1];
        let u = i[l];
        u || (i[l] = u = []), u.push(h);
      }
    }
    const r = [];
    for (const a in i)
      r.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return r;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (l, u, f, g, p) {
        if (f.length !== 0) {
          const m = [],
            _ = [];
          it.flattenJSON(f, m, _, g), m.length !== 0 && p.push(new l(u, m, _));
        }
      },
      i = [],
      s = e.name || "default",
      r = e.fps || 30,
      a = e.blendMode;
    let c = e.length || -1;
    const h = e.hierarchy || [];
    for (let l = 0; l < h.length; l++) {
      const u = h[l].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < u.length; g++)
            if (u[g].morphTargets)
              for (let p = 0; p < u[g].morphTargets.length; p++)
                f[u[g].morphTargets[p]] = -1;
          for (const p in f) {
            const m = [],
              _ = [];
            for (let y = 0; y !== u[g].morphTargets.length; ++y) {
              const b = u[g];
              m.push(b.time), _.push(b.morphTarget === p ? 1 : 0);
            }
            i.push(new Vr(".morphTargetInfluence[" + p + "]", m, _));
          }
          c = f.length * r;
        } else {
          const f = ".bones[" + t[l].name + "]";
          n(Wr, f + ".position", u, "pos", i),
            n(Zi, f + ".quaternion", u, "rot", i),
            n(Wr, f + ".scale", u, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(s, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}

function Kx(o) {
  switch (o.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Vr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Wr;
    case "color":
      return Nd;
    case "quaternion":
      return Zi;
    case "bool":
    case "boolean":
      return lr;
    case "string":
      return cr;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
}

function Zx(o) {
  if (o.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Kx(o.type);
  if (o.times === void 0) {
    const t = [],
      n = [];
    it.flattenJSON(o.keys, t, n, "value"), (o.times = t), (o.values = n);
  }
  return e.parse !== void 0
    ? e.parse(o)
    : new e(o.name, o.times, o.values, o.interpolation);
}
const Zs = {
  enabled: !1,
  files: {},
  add: function (o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function (o) {
    if (this.enabled !== !1) return this.files[o];
  },
  remove: function (o) {
    delete this.files[o];
  },
  clear: function () {
    this.files = {};
  },
};
class $x {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      r = 0,
      a = 0,
      c;
    const h = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (d) {
        a++, s === !1 && i.onStart !== void 0 && i.onStart(d, r, a), (s = !0);
      }),
      (this.itemEnd = function (d) {
        r++,
          i.onProgress !== void 0 && i.onProgress(d, r, a),
          r === a && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (d) {
        i.onError !== void 0 && i.onError(d);
      }),
      (this.resolveURL = function (d) {
        return c ? c(d) : d;
      }),
      (this.setURLModifier = function (d) {
        return (c = d), this;
      }),
      (this.addHandler = function (d, l) {
        return h.push(d, l), this;
      }),
      (this.removeHandler = function (d) {
        const l = h.indexOf(d);
        return l !== -1 && h.splice(l, 2), this;
      }),
      (this.getHandler = function (d) {
        for (let l = 0, u = h.length; l < u; l += 2) {
          const f = h[l],
            g = h[l + 1];
          if ((f.global && (f.lastIndex = 0), f.test(d))) return g;
        }
        return null;
      });
  }
}
const Qx = new $x();
class Bn {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Qx),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const Gn = {};
class _a extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = Zs.get(e);
    if (s !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(s), this.manager.itemEnd(e);
        }, 0),
        s
      );
    if (Gn[e] !== void 0) {
      Gn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i,
      });
      return;
    }
    (Gn[e] = []),
      Gn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i,
      });
    const r = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      a = this.mimeType,
      c = this.responseType;
    fetch(r)
      .then((h) => {
        if (h.status === 200 || h.status === 0) {
          if (
            (h.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              h.body === void 0 ||
              h.body.getReader === void 0)
          )
            return h;
          const d = Gn[e],
            l = h.body.getReader(),
            u = h.headers.get("Content-Length"),
            f = u ? parseInt(u) : 0,
            g = f !== 0;
          let p = 0;
          const m = new ReadableStream({
            start(_) {
              y();

              function y() {
                l.read().then(({ done: b, value: w }) => {
                  if (b) _.close();
                  else {
                    p += w.byteLength;
                    const x = new ProgressEvent("progress", {
                      lengthComputable: g,
                      loaded: p,
                      total: f,
                    });
                    for (let E = 0, T = d.length; E < T; E++) {
                      const R = d[E];
                      R.onProgress && R.onProgress(x);
                    }
                    _.enqueue(w), y();
                  }
                });
              }
            },
          });
          return new Response(m);
        } else
          throw Error(
            `fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`
          );
      })
      .then((h) => {
        switch (c) {
          case "arraybuffer":
            return h.arrayBuffer();
          case "blob":
            return h.blob();
          case "document":
            return h.text().then((d) => new DOMParser().parseFromString(d, a));
          case "json":
            return h.json();
          default:
            if (a === void 0) return h.text();
            {
              const l = /charset="?([^;"\s]*)"?/i.exec(a),
                u = l && l[1] ? l[1].toLowerCase() : void 0,
                f = new TextDecoder(u);
              return h.arrayBuffer().then((g) => f.decode(g));
            }
        }
      })
      .then((h) => {
        Zs.add(e, h);
        const d = Gn[e];
        delete Gn[e];
        for (let l = 0, u = d.length; l < u; l++) {
          const f = d[l];
          f.onLoad && f.onLoad(h);
        }
      })
      .catch((h) => {
        const d = Gn[e];
        if (d === void 0) throw (this.manager.itemError(e), h);
        delete Gn[e];
        for (let l = 0, u = d.length; l < u; l++) {
          const f = d[l];
          f.onError && f.onError(h);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class zd extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      r = Zs.get(e);
    if (r !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(r), s.manager.itemEnd(e);
        }, 0),
        r
      );
    const a = zr("img");

    function c() {
      d(), Zs.add(e, this), t && t(this), s.manager.itemEnd(e);
    }

    function h(l) {
      d(), i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }

    function d() {
      a.removeEventListener("load", c, !1),
        a.removeEventListener("error", h, !1);
    }
    return (
      a.addEventListener("load", c, !1),
      a.addEventListener("error", h, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class ev extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ra(),
      r = new zd(this.manager);
    r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
    let a = 0;

    function c(h) {
      r.load(
        e[h],
        function (d) {
          (s.images[h] = d), a++, a === 6 && ((s.needsUpdate = !0), t && t(s));
        },
        void 0,
        i
      );
    }
    for (let h = 0; h < e.length; ++h) c(h);
    return s;
  }
}
class yc extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new xt(),
      r = new zd(this.manager);
    return (
      r.setCrossOrigin(this.crossOrigin),
      r.setPath(this.path),
      r.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class Dn extends je {
  constructor(e, t = 1) {
    super(),
      (this.type = "Light"),
      (this.color = new ie(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
Dn.prototype.isLight = !0;
class tv extends Dn {
  constructor(e, t, n) {
    super(e, n),
      (this.type = "HemisphereLight"),
      this.position.copy(je.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new ie(t));
  }
  copy(e) {
    return (
      Dn.prototype.copy.call(this, e),
      this.groundColor.copy(e.groundColor),
      this
    );
  }
}
tv.prototype.isHemisphereLight = !0;
const _u = new _e(),
  yu = new C(),
  xu = new C();
class xc {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new te(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new _e()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new oa()),
      (this._frameExtents = new te(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ke(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    yu.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(yu),
      xu.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(xu),
      t.updateMatrixWorld(),
      _u.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(_u),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(t.projectionMatrix),
      n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Hd extends xc {
  constructor() {
    super(new Dt(50, 1, 0.5, 500)), (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = Nr * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
Hd.prototype.isSpotLightShadow = !0;
class Ud extends Dn {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 1) {
    super(e, t),
      (this.type = "SpotLight"),
      this.position.copy(je.DefaultUp),
      this.updateMatrix(),
      (this.target = new je()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = s),
      (this.decay = r),
      (this.shadow = new Hd());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
Ud.prototype.isSpotLight = !0;
const vu = new _e(),
  xr = new C(),
  al = new C();
class Gd extends xc {
  constructor() {
    super(new Dt(90, 1, 0.5, 500)),
      (this._frameExtents = new te(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Ke(2, 1, 1, 1),
        new Ke(0, 1, 1, 1),
        new Ke(3, 1, 1, 1),
        new Ke(1, 1, 1, 1),
        new Ke(3, 0, 1, 1),
        new Ke(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new C(1, 0, 0),
        new C(-1, 0, 0),
        new C(0, 0, 1),
        new C(0, 0, -1),
        new C(0, 1, 0),
        new C(0, -1, 0),
      ]),
      (this._cubeUps = [
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 1, 0),
        new C(0, 0, 1),
        new C(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      xr.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(xr),
      al.copy(n.position),
      al.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(al),
      n.updateMatrixWorld(),
      i.makeTranslation(-xr.x, -xr.y, -xr.z),
      vu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(vu);
  }
}
Gd.prototype.isPointLightShadow = !0;
class Vd extends Dn {
  constructor(e, t, n = 0, i = 1) {
    super(e, t),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new Gd());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
Vd.prototype.isPointLight = !0;
class Wd extends xc {
  constructor() {
    super(new la(-5, 5, 5, -5, 0.5, 500));
  }
}
Wd.prototype.isDirectionalLightShadow = !0;
class qd extends Dn {
  constructor(e, t) {
    super(e, t),
      (this.type = "DirectionalLight"),
      this.position.copy(je.DefaultUp),
      this.updateMatrix(),
      (this.target = new je()),
      (this.shadow = new Wd());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
qd.prototype.isDirectionalLight = !0;
class nv extends Dn {
  constructor(e, t) {
    super(e, t), (this.type = "AmbientLight");
  }
}
nv.prototype.isAmbientLight = !0;
class iv extends Dn {
  constructor(e, t, n = 10, i = 10) {
    super(e, t),
      (this.type = "RectAreaLight"),
      (this.width = n),
      (this.height = i);
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return (
      super.copy(e), (this.width = e.width), (this.height = e.height), this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.width = this.width), (t.object.height = this.height), t;
  }
}
iv.prototype.isRectAreaLight = !0;
class Xd {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new C());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      r = this.coefficients;
    return (
      t.copy(r[0]).multiplyScalar(0.282095),
      t.addScaledVector(r[1], 0.488603 * i),
      t.addScaledVector(r[2], 0.488603 * s),
      t.addScaledVector(r[3], 0.488603 * n),
      t.addScaledVector(r[4], 1.092548 * (n * i)),
      t.addScaledVector(r[5], 1.092548 * (i * s)),
      t.addScaledVector(r[6], 0.315392 * (3 * s * s - 1)),
      t.addScaledVector(r[7], 1.092548 * (n * s)),
      t.addScaledVector(r[8], 0.546274 * (n * n - i * i)),
      t
    );
  }
  getIrradianceAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      r = this.coefficients;
    return (
      t.copy(r[0]).multiplyScalar(0.886227),
      t.addScaledVector(r[1], 2 * 0.511664 * i),
      t.addScaledVector(r[2], 2 * 0.511664 * s),
      t.addScaledVector(r[3], 2 * 0.511664 * n),
      t.addScaledVector(r[4], 2 * 0.429043 * n * i),
      t.addScaledVector(r[5], 2 * 0.429043 * i * s),
      t.addScaledVector(r[6], 0.743125 * s * s - 0.247708),
      t.addScaledVector(r[7], 2 * 0.429043 * n * s),
      t.addScaledVector(r[8], 0.429043 * (n * n - i * i)),
      t
    );
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z;
    (t[0] = 0.282095),
      (t[1] = 0.488603 * i),
      (t[2] = 0.488603 * s),
      (t[3] = 0.488603 * n),
      (t[4] = 1.092548 * n * i),
      (t[5] = 1.092548 * i * s),
      (t[6] = 0.315392 * (3 * s * s - 1)),
      (t[7] = 1.092548 * n * s),
      (t[8] = 0.546274 * (n * n - i * i));
  }
}
Xd.prototype.isSphericalHarmonics3 = !0;
class vc extends Dn {
  constructor(e = new Xd(), t = 1) {
    super(void 0, t), (this.sh = e);
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return (this.intensity = e.intensity), this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.sh = this.sh.toArray()), t;
  }
}
vc.prototype.isLightProbe = !0;
class xi {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class sv extends tt {
  constructor() {
    super(),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(e) {
    return super.copy(e), (this.instanceCount = e.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = super.toJSON(this);
    return (
      (e.instanceCount = this.instanceCount),
      (e.isInstancedBufferGeometry = !0),
      e
    );
  }
}
sv.prototype.isInstancedBufferGeometry = !0;
class jd extends Bn {
  constructor(e) {
    super(e),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = {
        premultiplyAlpha: "none",
      });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      r = Zs.get(e);
    if (r !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(r), s.manager.itemEnd(e);
        }, 0),
        r
      );
    const a = {};
    (a.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (a.headers = this.requestHeader),
      fetch(e, a)
        .then(function (c) {
          return c.blob();
        })
        .then(function (c) {
          return createImageBitmap(
            c,
            Object.assign(s.options, {
              colorSpaceConversion: "none",
            })
          );
        })
        .then(function (c) {
          Zs.add(e, c), t && t(c), s.manager.itemEnd(e);
        })
        .catch(function (c) {
          i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
        }),
      s.manager.itemStart(e);
  }
}
jd.prototype.isImageBitmapLoader = !0;
let ko;
const rv = {
  getContext: function () {
    return (
      ko === void 0 &&
        (ko = new (window.AudioContext || window.webkitAudioContext)()),
      ko
    );
  },
  setContext: function (o) {
    ko = o;
  },
};
class ov extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this,
      r = new _a(this.manager);
    r.setResponseType("arraybuffer"),
      r.setPath(this.path),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(this.withCredentials),
      r.load(
        e,
        function (a) {
          try {
            const c = a.slice(0);
            rv.getContext().decodeAudioData(c, function (d) {
              t(d);
            });
          } catch (c) {
            i ? i(c) : console.error(c), s.manager.itemError(e);
          }
        },
        n,
        i
      );
  }
}
class av extends vc {
  constructor(e, t, n = 1) {
    super(void 0, n);
    const i = new ie().set(e),
      s = new ie().set(t),
      r = new C(i.r, i.g, i.b),
      a = new C(s.r, s.g, s.b),
      c = Math.sqrt(Math.PI),
      h = c * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(r).add(a).multiplyScalar(c),
      this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(h);
  }
}
av.prototype.isHemisphereLightProbe = !0;
class lv extends vc {
  constructor(e, t = 1) {
    super(void 0, t);
    const n = new ie().set(e);
    this.sh.coefficients[0]
      .set(n.r, n.g, n.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
lv.prototype.isAmbientLightProbe = !0;
let cv = class extends je {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source.stop(),
      (this.source.onended = null),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return (this._connected = !1), this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    if (((this.detune = e), this.source.detune !== void 0))
      return (
        this.isPlaying === !0 &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
};

export { $n, Bn, Dn, Ei, Fs, Il, Od, Ud, Vd, Vr, Wr, Zi, _a, _c, ar, cv, ev, jd, ov, qd, xi, yc };
