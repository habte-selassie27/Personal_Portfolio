import { Cr, It, Jn, Ju, Ke, La, Lt, Nr, Ns, Or, Rs, Ws, Yi, Yu, Zn, Zt, cn, ie, ir, ju, mi, na, om, qs, td, te, ts, vl, xn, xt } from "./three-01.jsx";
import { C, _e, dn, is, je, ss } from "./three-02.jsx";
je.DefaultUp = new C(0, 1, 0);
je.DefaultMatrixAutoUpdate = !0;
je.prototype.isObject3D = !0;
const _n = new C(),
  Hn = new C(),
  Ha = new C(),
  Un = new C(),
  _s = new C(),
  ys = new C(),
  Ah = new C(),
  Ua = new C(),
  Ga = new C(),
  Va = new C();
class wt {
  constructor(e = new C(), t = new C(), n = new C()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), _n.subVectors(e, t), i.cross(_n);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    _n.subVectors(i, t), Hn.subVectors(n, t), Ha.subVectors(e, t);
    const r = _n.dot(_n),
      a = _n.dot(Hn),
      c = _n.dot(Ha),
      h = Hn.dot(Hn),
      d = Hn.dot(Ha),
      l = r * h - a * a;
    if (l === 0) return s.set(-2, -1, -1);
    const u = 1 / l,
      f = (h * c - a * d) * u,
      g = (r * d - a * c) * u;
    return s.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Un),
      Un.x >= 0 && Un.y >= 0 && Un.x + Un.y <= 1
    );
  }
  static getUV(e, t, n, i, s, r, a, c) {
    return (
      this.getBarycoord(e, t, n, i, Un),
      c.set(0, 0),
      c.addScaledVector(s, Un.x),
      c.addScaledVector(r, Un.y),
      c.addScaledVector(a, Un.z),
      c
    );
  }
  static isFrontFacing(e, t, n, i) {
    return _n.subVectors(n, t), Hn.subVectors(e, t), _n.cross(Hn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      _n.subVectors(this.c, this.b),
      Hn.subVectors(this.a, this.b),
      _n.cross(Hn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return wt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return wt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return wt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return wt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return wt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let r, a;
    _s.subVectors(i, n), ys.subVectors(s, n), Ua.subVectors(e, n);
    const c = _s.dot(Ua),
      h = ys.dot(Ua);
    if (c <= 0 && h <= 0) return t.copy(n);
    Ga.subVectors(e, i);
    const d = _s.dot(Ga),
      l = ys.dot(Ga);
    if (d >= 0 && l <= d) return t.copy(i);
    const u = c * l - d * h;
    if (u <= 0 && c >= 0 && d <= 0)
      return (r = c / (c - d)), t.copy(n).addScaledVector(_s, r);
    Va.subVectors(e, s);
    const f = _s.dot(Va),
      g = ys.dot(Va);
    if (g >= 0 && f <= g) return t.copy(s);
    const p = f * h - c * g;
    if (p <= 0 && h >= 0 && g <= 0)
      return (a = h / (h - g)), t.copy(n).addScaledVector(ys, a);
    const m = d * g - f * l;
    if (m <= 0 && l - d >= 0 && f - g >= 0)
      return (
        Ah.subVectors(s, i),
        (a = (l - d) / (l - d + (f - g))),
        t.copy(i).addScaledVector(Ah, a)
      );
    const _ = 1 / (m + p + u);
    return (
      (r = p * _),
      (a = u * _),
      t.copy(n).addScaledVector(_s, r).addScaledVector(ys, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let km = 0;
class dt extends ts {
  constructor() {
    super(),
      Object.defineProperty(this, "id", {
        value: km++,
      }),
      (this.uuid = cn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.fog = !0),
      (this.blending = Ns),
      (this.side = Ws),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Yu),
      (this.blendDst = Ju),
      (this.blendEquation = Rs),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = vl),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = om),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = La),
      (this.stencilZFail = La),
      (this.stencilZPass = La),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = n === ju);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t &&
      (e = {
        textures: {},
        images: {},
      });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ns && (n.blending = this.blending),
      this.side !== Ws && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

    function i(s) {
      const r = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, r.push(c);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures),
        r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.fog = e.fog),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
dt.prototype.isMaterial = !0;
dt.fromType = function () {
  return null;
};
class ht extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
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
ht.prototype.isMeshBasicMaterial = !0;
const _t = new C(),
  fo = new te();
class ft {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = Or),
      (this.updateRange = {
        offset: 0,
        count: -1,
      }),
      (this.version = 0);
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
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let r = e[i];
      r === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (r = new ie())),
        (t[n++] = r.r),
        (t[n++] = r.g),
        (t[n++] = r.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let r = e[i];
      r === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (r = new te())),
        (t[n++] = r.x),
        (t[n++] = r.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let r = e[i];
      r === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (r = new C())),
        (t[n++] = r.x),
        (t[n++] = r.y),
        (t[n++] = r.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let r = e[i];
      r === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (r = new Ke())),
        (t[n++] = r.x),
        (t[n++] = r.y),
        (t[n++] = r.z),
        (t[n++] = r.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        fo.fromBufferAttribute(this, t),
          fo.applyMatrix3(e),
          this.setXY(t, fo.x, fo.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        _t.fromBufferAttribute(this, t),
          _t.applyMatrix3(e),
          this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyMatrix4(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.applyNormalMatrix(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t),
        _t.transformDirection(e),
        this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Or && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
ft.prototype.isBufferAttribute = !0;
class sd extends ft {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class rd extends ft {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Fm extends ft {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
Fm.prototype.isFloat16BufferAttribute = !0;
class mt extends ft {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Bm = 0;
const en = new _e(),
  Wa = new je(),
  xs = new C(),
  Yt = new dn(),
  pr = new dn(),
  Mt = new C();
class tt extends ts {
  constructor() {
    super(),
      Object.defineProperty(this, "id", {
        value: Bm++,
      }),
      (this.uuid = cn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = {
        start: 0,
        count: 1 / 0,
      }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (td(e) ? rd : sd)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n,
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Lt().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return en.makeRotationFromQuaternion(e), this.applyMatrix4(en), this;
  }
  rotateX(e) {
    return en.makeRotationX(e), this.applyMatrix4(en), this;
  }
  rotateY(e) {
    return en.makeRotationY(e), this.applyMatrix4(en), this;
  }
  rotateZ(e) {
    return en.makeRotationZ(e), this.applyMatrix4(en), this;
  }
  translate(e, t, n) {
    return en.makeTranslation(e, t, n), this.applyMatrix4(en), this;
  }
  scale(e, t, n) {
    return en.makeScale(e, t, n), this.applyMatrix4(en), this;
  }
  lookAt(e) {
    return Wa.lookAt(e), Wa.updateMatrix(), this.applyMatrix4(Wa.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(xs).negate(),
      this.translate(xs.x, xs.y, xs.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new mt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new dn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new C(-1 / 0, -1 / 0, -1 / 0),
          new C(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Yt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (Mt.addVectors(this.boundingBox.min, Yt.min),
                this.boundingBox.expandByPoint(Mt),
                Mt.addVectors(this.boundingBox.max, Yt.max),
                this.boundingBox.expandByPoint(Mt))
              : (this.boundingBox.expandByPoint(Yt.min),
                this.boundingBox.expandByPoint(Yt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new is());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Yt.setFromBufferAttribute(e), t))
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s];
          pr.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (Mt.addVectors(Yt.min, pr.min),
                Yt.expandByPoint(Mt),
                Mt.addVectors(Yt.max, pr.max),
                Yt.expandByPoint(Mt))
              : (Yt.expandByPoint(pr.min), Yt.expandByPoint(pr.max));
        }
      Yt.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        Mt.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(Mt)));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s],
            c = this.morphTargetsRelative;
          for (let h = 0, d = a.count; h < d; h++)
            Mt.fromBufferAttribute(a, h),
              c && (xs.fromBufferAttribute(e, h), Mt.add(xs)),
              (i = Math.max(i, n.distanceToSquared(Mt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      r = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new ft(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array,
      h = [],
      d = [];
    for (let B = 0; B < a; B++) (h[B] = new C()), (d[B] = new C());
    const l = new C(),
      u = new C(),
      f = new C(),
      g = new te(),
      p = new te(),
      m = new te(),
      _ = new C(),
      y = new C();

    function b(B, v, L) {
      l.fromArray(i, B * 3),
        u.fromArray(i, v * 3),
        f.fromArray(i, L * 3),
        g.fromArray(r, B * 2),
        p.fromArray(r, v * 2),
        m.fromArray(r, L * 2),
        u.sub(l),
        f.sub(l),
        p.sub(g),
        m.sub(g);
      const U = 1 / (p.x * m.y - m.x * p.y);
      isFinite(U) &&
        (_.copy(u)
          .multiplyScalar(m.y)
          .addScaledVector(f, -p.y)
          .multiplyScalar(U),
        y
          .copy(f)
          .multiplyScalar(p.x)
          .addScaledVector(u, -m.x)
          .multiplyScalar(U),
        h[B].add(_),
        h[v].add(_),
        h[L].add(_),
        d[B].add(y),
        d[v].add(y),
        d[L].add(y));
    }
    let w = this.groups;
    w.length === 0 &&
      (w = [
        {
          start: 0,
          count: n.length,
        },
      ]);
    for (let B = 0, v = w.length; B < v; ++B) {
      const L = w[B],
        U = L.start,
        D = L.count;
      for (let O = U, N = U + D; O < N; O += 3) b(n[O + 0], n[O + 1], n[O + 2]);
    }
    const x = new C(),
      E = new C(),
      T = new C(),
      R = new C();

    function I(B) {
      T.fromArray(s, B * 3), R.copy(T);
      const v = h[B];
      x.copy(v),
        x.sub(T.multiplyScalar(T.dot(v))).normalize(),
        E.crossVectors(R, v);
      const U = E.dot(d[B]) < 0 ? -1 : 1;
      (c[B * 4] = x.x),
        (c[B * 4 + 1] = x.y),
        (c[B * 4 + 2] = x.z),
        (c[B * 4 + 3] = U);
    }
    for (let B = 0, v = w.length; B < v; ++B) {
      const L = w[B],
        U = L.start,
        D = L.count;
      for (let O = U, N = U + D; O < N; O += 3)
        I(n[O + 0]), I(n[O + 1]), I(n[O + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new ft(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let u = 0, f = n.count; u < f; u++) n.setXYZ(u, 0, 0, 0);
      const i = new C(),
        s = new C(),
        r = new C(),
        a = new C(),
        c = new C(),
        h = new C(),
        d = new C(),
        l = new C();
      if (e)
        for (let u = 0, f = e.count; u < f; u += 3) {
          const g = e.getX(u + 0),
            p = e.getX(u + 1),
            m = e.getX(u + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, p),
            r.fromBufferAttribute(t, m),
            d.subVectors(r, s),
            l.subVectors(i, s),
            d.cross(l),
            a.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, p),
            h.fromBufferAttribute(n, m),
            a.add(d),
            c.add(d),
            h.add(d),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(p, c.x, c.y, c.z),
            n.setXYZ(m, h.x, h.y, h.z);
        }
      else
        for (let u = 0, f = t.count; u < f; u += 3)
          i.fromBufferAttribute(t, u + 0),
            s.fromBufferAttribute(t, u + 1),
            r.fromBufferAttribute(t, u + 2),
            d.subVectors(r, s),
            l.subVectors(i, s),
            d.cross(l),
            n.setXYZ(u + 0, d.x, d.y, d.z),
            n.setXYZ(u + 1, d.x, d.y, d.z),
            n.setXYZ(u + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    t === void 0 &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0) continue;
      const r = n[i].array,
        a = e.attributes[i],
        c = a.array,
        h = a.itemSize * t,
        d = Math.min(c.length, r.length - h);
      for (let l = 0, u = h; l < d; l++, u++) r[u] = c[l];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Mt.fromBufferAttribute(e, t),
        Mt.normalize(),
        e.setXYZ(t, Mt.x, Mt.y, Mt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const h = a.array,
        d = a.itemSize,
        l = a.normalized,
        u = new h.constructor(c.length * d);
      let f = 0,
        g = 0;
      for (let p = 0, m = c.length; p < m; p++) {
        a.isInterleavedBufferAttribute
          ? (f = c[p] * a.data.stride + a.offset)
          : (f = c[p] * d);
        for (let _ = 0; _ < d; _++) u[g++] = h[f++];
      }
      return new ft(u, d, l);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new tt(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const c = i[a],
        h = e(c, n);
      t.setAttribute(a, h);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [],
        h = s[a];
      for (let d = 0, l = h.length; d < l; d++) {
        const u = h[d],
          f = e(u, n);
        c.push(f);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let a = 0, c = r.length; a < c; a++) {
      const h = r[a];
      t.addGroup(h.start, h.count, h.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const h in c) c[h] !== void 0 && (e[h] = c[h]);
      return e;
    }
    e.data = {
      attributes: {},
    };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const h = n[c];
      e.data.attributes[c] = h.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const h = this.morphAttributes[c],
        d = [];
      for (let l = 0, u = h.length; l < u; l++) {
        const f = h[l];
        d.push(f.toJSON(e.data));
      }
      d.length > 0 && ((i[c] = d), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const h in i) {
      const d = i[h];
      this.setAttribute(h, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const h in s) {
      const d = [],
        l = s[h];
      for (let u = 0, f = l.length; u < f; u++) d.push(l[u].clone(t));
      this.morphAttributes[h] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let h = 0, d = r.length; h < d; h++) {
      const l = r[h];
      this.addGroup(l.start, l.count, l.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
tt.prototype.isBufferGeometry = !0;
const Ch = new _e(),
  vs = new ss(),
  qa = new is(),
  oi = new C(),
  ai = new C(),
  li = new C(),
  Xa = new C(),
  ja = new C(),
  Ya = new C(),
  po = new C(),
  mo = new C(),
  go = new C(),
  _o = new te(),
  yo = new te(),
  xo = new te(),
  Ja = new C(),
  vo = new C();
class St extends je {
  constructor(e = new tt(), t = new ht()) {
    super(),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, r = i.length; s < r; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = s);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      t !== void 0 &&
        t.length > 0 &&
        console.error(
          "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      qa.copy(n.boundingSphere),
      qa.applyMatrix4(s),
      e.ray.intersectsSphere(qa) === !1) ||
      (Ch.copy(s).invert(),
      vs.copy(e.ray).applyMatrix4(Ch),
      n.boundingBox !== null && vs.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let r;
    if (n.isBufferGeometry) {
      const a = n.index,
        c = n.attributes.position,
        h = n.morphAttributes.position,
        d = n.morphTargetsRelative,
        l = n.attributes.uv,
        u = n.attributes.uv2,
        f = n.groups,
        g = n.drawRange;
      if (a !== null)
        if (Array.isArray(i))
          for (let p = 0, m = f.length; p < m; p++) {
            const _ = f[p],
              y = i[_.materialIndex],
              b = Math.max(_.start, g.start),
              w = Math.min(
                a.count,
                Math.min(_.start + _.count, g.start + g.count)
              );
            for (let x = b, E = w; x < E; x += 3) {
              const T = a.getX(x),
                R = a.getX(x + 1),
                I = a.getX(x + 2);
              (r = bo(this, y, e, vs, c, h, d, l, u, T, R, I)),
                r &&
                  ((r.faceIndex = Math.floor(x / 3)),
                  (r.face.materialIndex = _.materialIndex),
                  t.push(r));
            }
          }
        else {
          const p = Math.max(0, g.start),
            m = Math.min(a.count, g.start + g.count);
          for (let _ = p, y = m; _ < y; _ += 3) {
            const b = a.getX(_),
              w = a.getX(_ + 1),
              x = a.getX(_ + 2);
            (r = bo(this, i, e, vs, c, h, d, l, u, b, w, x)),
              r && ((r.faceIndex = Math.floor(_ / 3)), t.push(r));
          }
        }
      else if (c !== void 0)
        if (Array.isArray(i))
          for (let p = 0, m = f.length; p < m; p++) {
            const _ = f[p],
              y = i[_.materialIndex],
              b = Math.max(_.start, g.start),
              w = Math.min(
                c.count,
                Math.min(_.start + _.count, g.start + g.count)
              );
            for (let x = b, E = w; x < E; x += 3) {
              const T = x,
                R = x + 1,
                I = x + 2;
              (r = bo(this, y, e, vs, c, h, d, l, u, T, R, I)),
                r &&
                  ((r.faceIndex = Math.floor(x / 3)),
                  (r.face.materialIndex = _.materialIndex),
                  t.push(r));
            }
          }
        else {
          const p = Math.max(0, g.start),
            m = Math.min(c.count, g.start + g.count);
          for (let _ = p, y = m; _ < y; _ += 3) {
            const b = _,
              w = _ + 1,
              x = _ + 2;
            (r = bo(this, i, e, vs, c, h, d, l, u, b, w, x)),
              r && ((r.faceIndex = Math.floor(_ / 3)), t.push(r));
          }
        }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
}
St.prototype.isMesh = !0;

function Om(o, e, t, n, i, s, r, a) {
  let c;
  if (
    (e.side === xn
      ? (c = n.intersectTriangle(r, s, i, !0, a))
      : (c = n.intersectTriangle(i, s, r, e.side !== Yi, a)),
    c === null)
  )
    return null;
  vo.copy(a), vo.applyMatrix4(o.matrixWorld);
  const h = t.ray.origin.distanceTo(vo);
  return h < t.near || h > t.far
    ? null
    : {
        distance: h,
        point: vo.clone(),
        object: o,
      };
}

function bo(o, e, t, n, i, s, r, a, c, h, d, l) {
  oi.fromBufferAttribute(i, h),
    ai.fromBufferAttribute(i, d),
    li.fromBufferAttribute(i, l);
  const u = o.morphTargetInfluences;
  if (s && u) {
    po.set(0, 0, 0), mo.set(0, 0, 0), go.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const m = u[g],
        _ = s[g];
      m !== 0 &&
        (Xa.fromBufferAttribute(_, h),
        ja.fromBufferAttribute(_, d),
        Ya.fromBufferAttribute(_, l),
        r
          ? (po.addScaledVector(Xa, m),
            mo.addScaledVector(ja, m),
            go.addScaledVector(Ya, m))
          : (po.addScaledVector(Xa.sub(oi), m),
            mo.addScaledVector(ja.sub(ai), m),
            go.addScaledVector(Ya.sub(li), m)));
    }
    oi.add(po), ai.add(mo), li.add(go);
  }
  o.isSkinnedMesh &&
    (o.boneTransform(h, oi), o.boneTransform(d, ai), o.boneTransform(l, li));
  const f = Om(o, e, t, n, oi, ai, li, Ja);
  if (f) {
    a &&
      (_o.fromBufferAttribute(a, h),
      yo.fromBufferAttribute(a, d),
      xo.fromBufferAttribute(a, l),
      (f.uv = wt.getUV(Ja, oi, ai, li, _o, yo, xo, new te()))),
      c &&
        (_o.fromBufferAttribute(c, h),
        yo.fromBufferAttribute(c, d),
        xo.fromBufferAttribute(c, l),
        (f.uv2 = wt.getUV(Ja, oi, ai, li, _o, yo, xo, new te())));
    const g = {
      a: h,
      b: d,
      c: l,
      normal: new C(),
      materialIndex: 0,
    };
    wt.getNormal(oi, ai, li, g.normal), (f.face = g);
  }
  return f;
}
class Qr extends tt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: r,
      });
    const a = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (r = Math.floor(r));
    const c = [],
      h = [],
      d = [],
      l = [];
    let u = 0,
      f = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, r, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, r, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, r, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(c),
      this.setAttribute("position", new mt(h, 3)),
      this.setAttribute("normal", new mt(d, 3)),
      this.setAttribute("uv", new mt(l, 2));

    function g(p, m, _, y, b, w, x, E, T, R, I) {
      const B = w / T,
        v = x / R,
        L = w / 2,
        U = x / 2,
        D = E / 2,
        O = T + 1,
        N = R + 1;
      let H = 0,
        F = 0;
      const X = new C();
      for (let Z = 0; Z < N; Z++) {
        const Q = Z * v - U;
        for (let $ = 0; $ < O; $++) {
          const ue = $ * B - L;
          (X[p] = ue * y),
            (X[m] = Q * b),
            (X[_] = D),
            h.push(X.x, X.y, X.z),
            (X[p] = 0),
            (X[m] = 0),
            (X[_] = E > 0 ? 1 : -1),
            d.push(X.x, X.y, X.z),
            l.push($ / T),
            l.push(1 - Z / R),
            (H += 1);
        }
      }
      for (let Z = 0; Z < R; Z++)
        for (let Q = 0; Q < T; Q++) {
          const $ = u + Q + O * Z,
            ue = u + Q + O * (Z + 1),
            Me = u + (Q + 1) + O * (Z + 1),
            xe = u + (Q + 1) + O * Z;
          c.push($, ue, xe), c.push(ue, Me, xe), (F += 6);
        }
      a.addGroup(f, F, I), (f += F), (u += H);
    }
  }
  static fromJSON(e) {
    return new Qr(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}

function Js(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}

function Pt(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = Js(o[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
const Nm = {
  clone: Js,
  merge: Pt,
};
var zm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Hm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ot extends dt {
  constructor(e) {
    super(),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = zm),
      (this.fragmentShader = Hm),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 &&
        (e.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Js(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture
        ? (t.uniforms[i] = {
            type: "t",
            value: r.toJSON(e).uuid,
          })
        : r && r.isColor
        ? (t.uniforms[i] = {
            type: "c",
            value: r.getHex(),
          })
        : r && r.isVector2
        ? (t.uniforms[i] = {
            type: "v2",
            value: r.toArray(),
          })
        : r && r.isVector3
        ? (t.uniforms[i] = {
            type: "v3",
            value: r.toArray(),
          })
        : r && r.isVector4
        ? (t.uniforms[i] = {
            type: "v4",
            value: r.toArray(),
          })
        : r && r.isMatrix3
        ? (t.uniforms[i] = {
            type: "m3",
            value: r.toArray(),
          })
        : r && r.isMatrix4
        ? (t.uniforms[i] = {
            type: "m4",
            value: r.toArray(),
          })
        : (t.uniforms[i] = {
            value: r,
          });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
Ot.prototype.isShaderMaterial = !0;
let ic = class extends je {
  constructor() {
    super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new _e()),
      (this.projectionMatrix = new _e()),
      (this.projectionMatrixInverse = new _e());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
ic.prototype.isCamera = !0;
class Dt extends ic {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Nr * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Cr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Nr * 2 * Math.atan(Math.tan(Cr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, r) {
    (this.aspect = e / t),
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
    const e = this.near;
    let t = (e * Math.tan(Cr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = r.fullWidth,
        h = r.fullHeight;
      (s += (r.offsetX * i) / c),
        (t -= (r.offsetY * n) / h),
        (i *= r.width / c),
        (n *= r.height / h);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
Dt.prototype.isPerspectiveCamera = !0;
const bs = 90,
  ws = 1;
class sc extends je {
  constructor(e, t, n) {
    if (
      (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = n;
    const i = new Dt(bs, ws, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new C(1, 0, 0)),
      this.add(i);
    const s = new Dt(bs, ws, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new C(-1, 0, 0)),
      this.add(s);
    const r = new Dt(bs, ws, e, t);
    (r.layers = this.layers),
      r.up.set(0, 0, 1),
      r.lookAt(new C(0, 1, 0)),
      this.add(r);
    const a = new Dt(bs, ws, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new C(0, -1, 0)),
      this.add(a);
    const c = new Dt(bs, ws, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new C(0, 0, 1)),
      this.add(c);
    const h = new Dt(bs, ws, e, t);
    (h.layers = this.layers),
      h.up.set(0, -1, 0),
      h.lookAt(new C(0, 0, -1)),
      this.add(h);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, r, a, c, h] = this.children,
      d = e.getRenderTarget(),
      l = e.outputEncoding,
      u = e.toneMapping,
      f = e.xr.enabled;
    (e.outputEncoding = Zn), (e.toneMapping = Jn), (e.xr.enabled = !1);
    const g = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, r),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      (n.texture.generateMipmaps = g),
      e.setRenderTarget(n, 5),
      e.render(t, h),
      e.setRenderTarget(d),
      (e.outputEncoding = l),
      (e.toneMapping = u),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ra extends xt {
  constructor(e, t, n, i, s, r, a, c, h, d) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : qs),
      super(e, t, n, i, s, r, a, c, h, d),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
ra.prototype.isCubeTexture = !0;
class od extends Zt {
  constructor(e, t = {}) {
    super(e, e, t);
    const n = {
        width: e,
        height: e,
        depth: 1,
      },
      i = [n, n, n, n, n, n];
    (this.texture = new ra(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : It);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: {
          tEquirect: {
            value: null,
          },
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Qr(5, 5, 5),
      s = new Ot({
        name: "CubemapFromEquirect",
        uniforms: Js(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: xn,
        blending: mi,
      });
    s.uniforms.tEquirect.value = t;
    const r = new St(i, s),
      a = t.minFilter;
    return (
      t.minFilter === ir && (t.minFilter = It),
      new sc(1, 10, this).update(e, r),
      (t.minFilter = a),
      r.geometry.dispose(),
      r.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
od.prototype.isWebGLCubeRenderTarget = !0;
const Ka = new C(),
  Um = new C(),
  Gm = new Lt();
class Xn {
  constructor(e = new C(1, 0, 0), t = 0) {
    (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ka.subVectors(n, t).cross(Um.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Ka),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Gm.getNormalMatrix(e),
      i = this.coplanarPoint(Ka).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Xn.prototype.isPlane = !0;
const Ms = new is(),
  wo = new C();
class oa {
  constructor(
    e = new Xn(),
    t = new Xn(),
    n = new Xn(),
    i = new Xn(),
    s = new Xn(),
    r = new Xn()
  ) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(s),
      a[5].copy(r),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      r = n[2],
      a = n[3],
      c = n[4],
      h = n[5],
      d = n[6],
      l = n[7],
      u = n[8],
      f = n[9],
      g = n[10],
      p = n[11],
      m = n[12],
      _ = n[13],
      y = n[14],
      b = n[15];
    return (
      t[0].setComponents(a - i, l - c, p - u, b - m).normalize(),
      t[1].setComponents(a + i, l + c, p + u, b + m).normalize(),
      t[2].setComponents(a + s, l + h, p + f, b + _).normalize(),
      t[3].setComponents(a - s, l - h, p - f, b - _).normalize(),
      t[4].setComponents(a - r, l - d, p - g, b - y).normalize(),
      t[5].setComponents(a + r, l + d, p + g, b + y).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ms)
    );
  }
  intersectsSprite(e) {
    return (
      Ms.center.set(0, 0, 0),
      (Ms.radius = 0.7071067811865476),
      Ms.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ms)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((wo.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (wo.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (wo.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(wo) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}

function ad() {
  let o = null,
    e = !1,
    t = null,
    n = null;

  function i(s, r) {
    t(s, r), (n = o.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = o.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      o.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      o = s;
    },
  };
}


export { Dt, Js, Nm, Ot, Pt, Qr, St, Xn, ad, dt, ft, ht, ic, mt, oa, od, ra, rd, sc, sd, tt, wt };
