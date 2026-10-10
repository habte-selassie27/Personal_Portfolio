import { At, It, Ke, bt, cn, ed, ie, rn, te, ui, xt } from "./three-01.jsx";
import { C, _e, is, je, ss } from "./three-02.jsx";
import { St, dt, ft, mt, tt } from "./three-03.jsx";
const Qh = new C(),
  eu = new Ke(),
  tu = new Ke(),
  hx = new C(),
  nu = new _e();
class cc extends St {
  constructor(e, t) {
    super(e, t),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new _e()),
      (this.bindMatrixInverse = new _e());
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ke(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === "attached"
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === "detached"
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    eu.fromBufferAttribute(i.attributes.skinIndex, e),
      tu.fromBufferAttribute(i.attributes.skinWeight, e),
      Qh.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = tu.getComponent(s);
      if (r !== 0) {
        const a = eu.getComponent(s);
        nu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]),
          t.addScaledVector(hx.copy(Qh).applyMatrix4(nu), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
cc.prototype.isSkinnedMesh = !0;
class hc extends je {
  constructor() {
    super(), (this.type = "Bone");
  }
}
hc.prototype.isBone = !0;
class xd extends xt {
  constructor(e = null, t = 1, n = 1, i, s, r, a, c, h = bt, d = bt, l, u) {
    super(null, r, a, c, h, d, i, s, l, u),
      (this.image = {
        data: e,
        width: t,
        height: n,
      }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
xd.prototype.isDataTexture = !0;
const iu = new _e(),
  ux = new _e();
class uc {
  constructor(e = [], t = []) {
    (this.uuid = cn()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new _e());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new _e();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let s = 0, r = e.length; s < r; s++) {
      const a = e[s] ? e[s].matrixWorld : ux;
      iu.multiplyMatrices(a, t[s]), iu.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new uc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = ed(e)), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new xd(t, e, e, rn, ui);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let r = t[s];
      r === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", s),
        (r = new hc())),
        this.bones.push(r),
        this.boneInverses.push(new _e().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Cl extends ft {
  constructor(e, t, n, i = 1) {
    typeof n == "number" &&
      ((i = n),
      (n = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(e, t, n),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
Cl.prototype.isInstancedBufferAttribute = !0;
const su = new _e(),
  ru = new _e(),
  Ao = [],
  yr = new St();
class dx extends St {
  constructor(e, t, n) {
    super(e, t),
      (this.instanceMatrix = new Cl(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.count = n),
      (this.frustumCulled = !1);
  }
  copy(e) {
    return (
      super.copy(e),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((yr.geometry = this.geometry),
      (yr.material = this.material),
      yr.material !== void 0)
    )
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, su),
          ru.multiplyMatrices(n, su),
          (yr.matrixWorld = ru),
          yr.raycast(e, Ao);
        for (let r = 0, a = Ao.length; r < a; r++) {
          const c = Ao[r];
          (c.instanceId = s), (c.object = this), t.push(c);
        }
        Ao.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new Cl(
        new Float32Array(this.instanceMatrix.count * 3),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
dx.prototype.isInstancedMesh = !0;
class os extends dt {
  constructor(e) {
    super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new ie(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      this
    );
  }
}
os.prototype.isLineBasicMaterial = !0;
const ou = new C(),
  au = new C(),
  lu = new _e(),
  il = new ss(),
  Co = new is();
class ua extends je {
  constructor(e = new tt(), t = new os()) {
    super(),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position,
          n = [0];
        for (let i = 1, s = t.count; i < s; i++)
          ou.fromBufferAttribute(t, i - 1),
            au.fromBufferAttribute(t, i),
            (n[i] = n[i - 1]),
            (n[i] += ou.distanceTo(au));
        e.setAttribute("lineDistance", new mt(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      r = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Co.copy(n.boundingSphere),
      Co.applyMatrix4(i),
      (Co.radius += s),
      e.ray.intersectsSphere(Co) === !1)
    )
      return;
    lu.copy(i).invert(), il.copy(e.ray).applyMatrix4(lu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = a * a,
      h = new C(),
      d = new C(),
      l = new C(),
      u = new C(),
      f = this.isLineSegments ? 2 : 1;
    if (n.isBufferGeometry) {
      const g = n.index,
        m = n.attributes.position;
      if (g !== null) {
        const _ = Math.max(0, r.start),
          y = Math.min(g.count, r.start + r.count);
        for (let b = _, w = y - 1; b < w; b += f) {
          const x = g.getX(b),
            E = g.getX(b + 1);
          if (
            (h.fromBufferAttribute(m, x),
            d.fromBufferAttribute(m, E),
            il.distanceSqToSegment(h, d, u, l) > c)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const R = e.ray.origin.distanceTo(u);
          R < e.near ||
            R > e.far ||
            t.push({
              distance: R,
              point: l.clone().applyMatrix4(this.matrixWorld),
              index: b,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        const _ = Math.max(0, r.start),
          y = Math.min(m.count, r.start + r.count);
        for (let b = _, w = y - 1; b < w; b += f) {
          if (
            (h.fromBufferAttribute(m, b),
            d.fromBufferAttribute(m, b + 1),
            il.distanceSqToSegment(h, d, u, l) > c)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const E = e.ray.origin.distanceTo(u);
          E < e.near ||
            E > e.far ||
            t.push({
              distance: E,
              point: l.clone().applyMatrix4(this.matrixWorld),
              index: b,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    } else
      n.isGeometry &&
        console.error(
          "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
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
          "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
ua.prototype.isLine = !0;
const cu = new C(),
  hu = new C();
class da extends ua {
  constructor(e, t) {
    super(e, t), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        const t = e.attributes.position,
          n = [];
        for (let i = 0, s = t.count; i < s; i += 2)
          cu.fromBufferAttribute(t, i),
            hu.fromBufferAttribute(t, i + 1),
            (n[i] = i === 0 ? 0 : n[i - 1]),
            (n[i + 1] = n[i] + cu.distanceTo(hu));
        e.setAttribute("lineDistance", new mt(n, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
}
da.prototype.isLineSegments = !0;
class vd extends ua {
  constructor(e, t) {
    super(e, t), (this.type = "LineLoop");
  }
}
vd.prototype.isLineLoop = !0;
class fa extends dt {
  constructor(e) {
    super(),
      (this.type = "PointsMaterial"),
      (this.color = new ie(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
}
fa.prototype.isPointsMaterial = !0;
const uu = new _e(),
  Ll = new ss(),
  Lo = new is(),
  Ro = new C();
class bd extends je {
  constructor(e = new tt(), t = new fa()) {
    super(),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Points.threshold,
      r = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Lo.copy(n.boundingSphere),
      Lo.applyMatrix4(i),
      (Lo.radius += s),
      e.ray.intersectsSphere(Lo) === !1)
    )
      return;
    uu.copy(i).invert(), Ll.copy(e.ray).applyMatrix4(uu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = a * a;
    if (n.isBufferGeometry) {
      const h = n.index,
        l = n.attributes.position;
      if (h !== null) {
        const u = Math.max(0, r.start),
          f = Math.min(h.count, r.start + r.count);
        for (let g = u, p = f; g < p; g++) {
          const m = h.getX(g);
          Ro.fromBufferAttribute(l, m), du(Ro, m, c, i, e, t, this);
        }
      } else {
        const u = Math.max(0, r.start),
          f = Math.min(l.count, r.start + r.count);
        for (let g = u, p = f; g < p; g++)
          Ro.fromBufferAttribute(l, g), du(Ro, g, c, i, e, t, this);
      }
    } else
      console.error(
        "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
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
          "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
bd.prototype.isPoints = !0;

function du(o, e, t, n, i, s, r) {
  const a = Ll.distanceSqToPoint(o);
  if (a < t) {
    const c = new C();
    Ll.closestPointToPoint(o, c), c.applyMatrix4(n);
    const h = i.ray.origin.distanceTo(c);
    if (h < i.near || h > i.far) return;
    s.push({
      distance: h,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: r,
    });
  }
}
class fx extends xt {
  constructor(e, t, n, i, s, r, a, c, h) {
    super(e, t, n, i, s, r, a, c, h),
      (this.minFilter = r !== void 0 ? r : It),
      (this.magFilter = s !== void 0 ? s : It),
      (this.generateMipmaps = !1);
    const d = this;

    function l() {
      (d.needsUpdate = !0), e.requestVideoFrameCallback(l);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(l);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 &&
      e.readyState >= e.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
fx.prototype.isVideoTexture = !0;
class px extends xt {
  constructor(e, t, n) {
    super({
      width: e,
      height: t,
    }),
      (this.format = n),
      (this.magFilter = bt),
      (this.minFilter = bt),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
}
px.prototype.isFramebufferTexture = !0;
class mx extends xt {
  constructor(e, t, n, i, s, r, a, c, h, d, l, u) {
    super(null, r, a, c, h, d, i, s, l, u),
      (this.image = {
        width: t,
        height: n,
      }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
mx.prototype.isCompressedTexture = !0;
class gx extends xt {
  constructor(e, t, n, i, s, r, a, c, h) {
    super(e, t, n, i, s, r, a, c, h), (this.needsUpdate = !0);
  }
}
gx.prototype.isCanvasTexture = !0;
class hn {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n,
      i = this.getPoint(0),
      s = 0;
    t.push(0);
    for (let r = 1; r <= e; r++)
      (n = this.getPoint(r / e)), (s += n.distanceTo(i)), t.push(s), (i = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let r;
    t ? (r = t) : (r = e * n[s - 1]);
    let a = 0,
      c = s - 1,
      h;
    for (; a <= c; )
      if (((i = Math.floor(a + (c - a) / 2)), (h = n[i] - r), h < 0)) a = i + 1;
      else if (h > 0) c = i - 1;
      else {
        c = i;
        break;
      }
    if (((i = c), n[i] === r)) return i / (s - 1);
    const d = n[i],
      u = n[i + 1] - d,
      f = (r - d) / u;
    return (i + f) / (s - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4,
      s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const r = this.getPoint(i),
      a = this.getPoint(s),
      c = t || (r.isVector2 ? new te() : new C());
    return c.copy(a).sub(r).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new C(),
      i = [],
      s = [],
      r = [],
      a = new C(),
      c = new _e();
    for (let f = 0; f <= e; f++) {
      const g = f / e;
      i[f] = this.getTangentAt(g, new C());
    }
    (s[0] = new C()), (r[0] = new C());
    let h = Number.MAX_VALUE;
    const d = Math.abs(i[0].x),
      l = Math.abs(i[0].y),
      u = Math.abs(i[0].z);
    d <= h && ((h = d), n.set(1, 0, 0)),
      l <= h && ((h = l), n.set(0, 1, 0)),
      u <= h && n.set(0, 0, 1),
      a.crossVectors(i[0], n).normalize(),
      s[0].crossVectors(i[0], a),
      r[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (
        ((s[f] = s[f - 1].clone()),
        (r[f] = r[f - 1].clone()),
        a.crossVectors(i[f - 1], i[f]),
        a.length() > Number.EPSILON)
      ) {
        a.normalize();
        const g = Math.acos(At(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(c.makeRotationAxis(a, g));
      }
      r[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(At(s[0].dot(s[e]), -1, 1));
      (f /= e), i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(c.makeRotationAxis(i[g], f * g)),
          r[g].crossVectors(i[g], s[g]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: r,
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON",
      },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class pa extends hn {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    i = 1,
    s = 0,
    r = Math.PI * 2,
    a = !1,
    c = 0
  ) {
    super(),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = s),
      (this.aEndAngle = r),
      (this.aClockwise = a),
      (this.aRotation = c);
  }
  getPoint(e, t) {
    const n = t || new te(),
      i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const r = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (r ? (s = 0) : (s = i)),
      this.aClockwise === !0 && !r && (s === i ? (s = -i) : (s = s - i));
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a),
      h = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const d = Math.cos(this.aRotation),
        l = Math.sin(this.aRotation),
        u = c - this.aX,
        f = h - this.aY;
      (c = u * d - f * l + this.aX), (h = u * l + f * d + this.aY);
    }
    return n.set(c, h);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
pa.prototype.isEllipseCurve = !0;
class wd extends pa {
  constructor(e, t, n, i, s, r) {
    super(e, t, n, n, i, s, r), (this.type = "ArcCurve");
  }
}
wd.prototype.isArcCurve = !0;

function dc() {
  let o = 0,
    e = 0,
    t = 0,
    n = 0;

  function i(s, r, a, c) {
    (o = s),
      (e = a),
      (t = -3 * s + 3 * r - 2 * a - c),
      (n = 2 * s - 2 * r + a + c);
  }
  return {
    initCatmullRom: function (s, r, a, c, h) {
      i(r, a, h * (a - s), h * (c - r));
    },
    initNonuniformCatmullRom: function (s, r, a, c, h, d, l) {
      let u = (r - s) / h - (a - s) / (h + d) + (a - r) / d,
        f = (a - r) / d - (c - r) / (d + l) + (c - a) / l;
      (u *= d), (f *= d), i(r, a, u, f);
    },
    calc: function (s) {
      const r = s * s,
        a = r * s;
      return o + e * s + t * r + n * a;
    },
  };
}
const Po = new C(),
  sl = new dc(),
  rl = new dc(),
  ol = new dc();
class Md extends hn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = n),
      (this.tension = i);
  }
  getPoint(e, t = new C()) {
    const n = t,
      i = this.points,
      s = i.length,
      r = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(r),
      c = r - a;
    this.closed
      ? (a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s)
      : c === 0 && a === s - 1 && ((a = s - 2), (c = 1));
    let h, d;
    this.closed || a > 0
      ? (h = i[(a - 1) % s])
      : (Po.subVectors(i[0], i[1]).add(i[0]), (h = Po));
    const l = i[a % s],
      u = i[(a + 1) % s];
    if (
      (this.closed || a + 2 < s
        ? (d = i[(a + 2) % s])
        : (Po.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), (d = Po)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(h.distanceToSquared(l), f),
        p = Math.pow(l.distanceToSquared(u), f),
        m = Math.pow(u.distanceToSquared(d), f);
      p < 1e-4 && (p = 1),
        g < 1e-4 && (g = p),
        m < 1e-4 && (m = p),
        sl.initNonuniformCatmullRom(h.x, l.x, u.x, d.x, g, p, m),
        rl.initNonuniformCatmullRom(h.y, l.y, u.y, d.y, g, p, m),
        ol.initNonuniformCatmullRom(h.z, l.z, u.z, d.z, g, p, m);
    } else
      this.curveType === "catmullrom" &&
        (sl.initCatmullRom(h.x, l.x, u.x, d.x, this.tension),
        rl.initCatmullRom(h.y, l.y, u.y, d.y, this.tension),
        ol.initCatmullRom(h.z, l.z, u.z, d.z, this.tension));
    return n.set(sl.calc(c), rl.calc(c), ol.calc(c)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new C().fromArray(i));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
Md.prototype.isCatmullRomCurve3 = !0;

function fu(o, e, t, n, i) {
  const s = (n - e) * 0.5,
    r = (i - t) * 0.5,
    a = o * o,
    c = o * a;
  return (
    (2 * t - 2 * n + s + r) * c + (-3 * t + 3 * n - 2 * s - r) * a + s * o + t
  );
}

function _x(o, e) {
  const t = 1 - o;
  return t * t * e;
}

function yx(o, e) {
  return 2 * (1 - o) * o * e;
}

function xx(o, e) {
  return o * o * e;
}

function Rr(o, e, t, n) {
  return _x(o, e) + yx(o, t) + xx(o, n);
}

function vx(o, e) {
  const t = 1 - o;
  return t * t * t * e;
}

function bx(o, e) {
  const t = 1 - o;
  return 3 * t * t * o * e;
}

function wx(o, e) {
  return 3 * (1 - o) * o * o * e;
}

function Mx(o, e) {
  return o * o * o * e;
}

function Pr(o, e, t, n, i) {
  return vx(o, e) + bx(o, t) + wx(o, n) + Mx(o, i);
}
class fc extends hn {
  constructor(e = new te(), t = new te(), n = new te(), i = new te()) {
    super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new te()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      r = this.v2,
      a = this.v3;
    return n.set(Pr(e, i.x, s.x, r.x, a.x), Pr(e, i.y, s.y, r.y, a.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
fc.prototype.isCubicBezierCurve = !0;
class Sd extends hn {
  constructor(e = new C(), t = new C(), n = new C(), i = new C()) {
    super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new C()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      r = this.v2,
      a = this.v3;
    return (
      n.set(
        Pr(e, i.x, s.x, r.x, a.x),
        Pr(e, i.y, s.y, r.y, a.y),
        Pr(e, i.z, s.z, r.z, a.z)
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
Sd.prototype.isCubicBezierCurve3 = !0;
class ma extends hn {
  constructor(e = new te(), t = new te()) {
    super(), (this.type = "LineCurve"), (this.v1 = e), (this.v2 = t);
  }
  getPoint(e, t = new te()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const n = t || new te();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
ma.prototype.isLineCurve = !0;
class Sx extends hn {
  constructor(e = new C(), t = new C()) {
    super(),
      (this.type = "LineCurve3"),
      (this.isLineCurve3 = !0),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new C()) {
    const n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class pc extends hn {
  constructor(e = new te(), t = new te(), n = new te()) {
    super(),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new te()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      r = this.v2;
    return n.set(Rr(e, i.x, s.x, r.x), Rr(e, i.y, s.y, r.y)), n;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
pc.prototype.isQuadraticBezierCurve = !0;
class Td extends hn {
  constructor(e = new C(), t = new C(), n = new C()) {
    super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new C()) {
    const n = t,
      i = this.v0,
      s = this.v1,
      r = this.v2;
    return (
      n.set(Rr(e, i.x, s.x, r.x), Rr(e, i.y, s.y, r.y), Rr(e, i.z, s.z, r.z)), n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
Td.prototype.isQuadraticBezierCurve3 = !0;
class mc extends hn {
  constructor(e = []) {
    super(), (this.type = "SplineCurve"), (this.points = e);
  }
  getPoint(e, t = new te()) {
    const n = t,
      i = this.points,
      s = (i.length - 1) * e,
      r = Math.floor(s),
      a = s - r,
      c = i[r === 0 ? r : r - 1],
      h = i[r],
      d = i[r > i.length - 2 ? i.length - 1 : r + 1],
      l = i[r > i.length - 3 ? i.length - 1 : r + 2];
    return n.set(fu(a, c.x, h.x, d.x, l.x), fu(a, c.y, h.y, d.y, l.y)), n;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new te().fromArray(i));
    }
    return this;
  }
}
mc.prototype.isSplineCurve = !0;
var Ed = Object.freeze({
  __proto__: null,
  ArcCurve: wd,
  CatmullRomCurve3: Md,
  CubicBezierCurve: fc,
  CubicBezierCurve3: Sd,
  EllipseCurve: pa,
  LineCurve: ma,
  LineCurve3: Sx,
  QuadraticBezierCurve: pc,
  QuadraticBezierCurve3: Td,
  SplineCurve: mc,
});
class Tx extends hn {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new ma(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(),
      i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const r = i[s] - n,
          a = this.curves[s],
          c = a.getLength(),
          h = c === 0 ? 0 : 1 - r / c;
        return a.getPointAt(h, t);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (t += this.curves[n].getLength()), e.push(t);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const r = s[i],
        a = r.isEllipseCurve
          ? e * 2
          : r.isLineCurve || r.isLineCurve3
          ? 1
          : r.isSplineCurve
          ? e * r.points.length
          : e,
        c = r.getPoints(a);
      for (let h = 0; h < c.length; h++) {
        const d = c[h];
        (n && n.equals(d)) || (t.push(d), (n = d));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Ed[i.type]().fromJSON(i));
    }
    return this;
  }
}
class jo extends Tx {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new te()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new ma(this.currentPoint.clone(), new te(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new pc(this.currentPoint.clone(), new te(e, t), new te(n, i));
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, r) {
    const a = new fc(
      this.currentPoint.clone(),
      new te(e, t),
      new te(n, i),
      new te(s, r)
    );
    return this.curves.push(a), this.currentPoint.set(s, r), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e),
      n = new mc(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, r) {
    const a = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absarc(e + a, t + c, n, i, s, r), this;
  }
  absarc(e, t, n, i, s, r) {
    return this.absellipse(e, t, n, n, i, s, r), this;
  }
  ellipse(e, t, n, i, s, r, a, c) {
    const h = this.currentPoint.x,
      d = this.currentPoint.y;
    return this.absellipse(e + h, t + d, n, i, s, r, a, c), this;
  }
  absellipse(e, t, n, i, s, r, a, c) {
    const h = new pa(e, t, n, i, s, r, a, c);
    if (this.curves.length > 0) {
      const l = h.getPoint(0);
      l.equals(this.currentPoint) || this.lineTo(l.x, l.y);
    }
    this.curves.push(h);
    const d = h.getPoint(1);
    return this.currentPoint.copy(d), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class gc extends tt {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    i = 8,
    s = 1,
    r = !1,
    a = 0,
    c = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: s,
        openEnded: r,
        thetaStart: a,
        thetaLength: c,
      });
    const h = this;
    (i = Math.floor(i)), (s = Math.floor(s));
    const d = [],
      l = [],
      u = [],
      f = [];
    let g = 0;
    const p = [],
      m = n / 2;
    let _ = 0;
    y(),
      r === !1 && (e > 0 && b(!0), t > 0 && b(!1)),
      this.setIndex(d),
      this.setAttribute("position", new mt(l, 3)),
      this.setAttribute("normal", new mt(u, 3)),
      this.setAttribute("uv", new mt(f, 2));

    function y() {
      const w = new C(),
        x = new C();
      let E = 0;
      const T = (t - e) / n;
      for (let R = 0; R <= s; R++) {
        const I = [],
          B = R / s,
          v = B * (t - e) + e;
        for (let L = 0; L <= i; L++) {
          const U = L / i,
            D = U * c + a,
            O = Math.sin(D),
            N = Math.cos(D);
          (x.x = v * O),
            (x.y = -B * n + m),
            (x.z = v * N),
            l.push(x.x, x.y, x.z),
            w.set(O, T, N).normalize(),
            u.push(w.x, w.y, w.z),
            f.push(U, 1 - B),
            I.push(g++);
        }
        p.push(I);
      }
      for (let R = 0; R < i; R++)
        for (let I = 0; I < s; I++) {
          const B = p[I][R],
            v = p[I + 1][R],
            L = p[I + 1][R + 1],
            U = p[I][R + 1];
          d.push(B, v, U), d.push(v, L, U), (E += 6);
        }
      h.addGroup(_, E, 0), (_ += E);
    }

    function b(w) {
      const x = g,
        E = new te(),
        T = new C();
      let R = 0;
      const I = w === !0 ? e : t,
        B = w === !0 ? 1 : -1;
      for (let L = 1; L <= i; L++)
        l.push(0, m * B, 0), u.push(0, B, 0), f.push(0.5, 0.5), g++;
      const v = g;
      for (let L = 0; L <= i; L++) {
        const D = (L / i) * c + a,
          O = Math.cos(D),
          N = Math.sin(D);
        (T.x = I * N),
          (T.y = m * B),
          (T.z = I * O),
          l.push(T.x, T.y, T.z),
          u.push(0, B, 0),
          (E.x = O * 0.5 + 0.5),
          (E.y = N * 0.5 * B + 0.5),
          f.push(E.x, E.y),
          g++;
      }
      for (let L = 0; L < i; L++) {
        const U = x + L,
          D = v + L;
        w === !0 ? d.push(D, D + 1, U) : d.push(D + 1, D, U), (R += 3);
      }
      h.addGroup(_, R, w === !0 ? 1 : 2), (_ += R);
    }
  }
  static fromJSON(e) {
    return new gc(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class yi extends jo {
  constructor(e) {
    super(e), (this.uuid = cn()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e),
    };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new jo().fromJSON(i));
    }
    return this;
  }
}
const Ex = {
  triangulate: function (o, e, t = 2) {
    const n = e && e.length,
      i = n ? e[0] * t : o.length;
    let s = Ad(o, 0, i, t, !0);
    const r = [];
    if (!s || s.next === s.prev) return r;
    let a, c, h, d, l, u, f;
    if ((n && (s = Px(o, e, s, t)), o.length > 80 * t)) {
      (a = h = o[0]), (c = d = o[1]);
      for (let g = t; g < i; g += t)
        (l = o[g]),
          (u = o[g + 1]),
          l < a && (a = l),
          u < c && (c = u),
          l > h && (h = l),
          u > d && (d = u);
      (f = Math.max(h - a, d - c)), (f = f !== 0 ? 1 / f : 0);
    }
    return Hr(s, r, t, a, c, f), r;
  },
};

function Ad(o, e, t, n, i) {
  let s, r;
  if (i === Gx(o, e, t, n) > 0)
    for (s = e; s < t; s += n) r = pu(s, o[s], o[s + 1], r);
  else for (s = t - n; s >= e; s -= n) r = pu(s, o[s], o[s + 1], r);
  return r && ga(r, r.next) && (Gr(r), (r = r.next)), r;
}

function Mi(o, e) {
  if (!o) return o;
  e || (e = o);
  let t = o,
    n;
  do
    if (
      ((n = !1), !t.steiner && (ga(t, t.next) || ot(t.prev, t, t.next) === 0))
    ) {
      if ((Gr(t), (t = e = t.prev), t === t.next)) break;
      n = !0;
    } else t = t.next;
  while (n || t !== e);
  return e;
}

function Hr(o, e, t, n, i, s, r) {
  if (!o) return;
  !r && s && Bx(o, n, i, s);
  let a = o,
    c,
    h;
  for (; o.prev !== o.next; ) {
    if (((c = o.prev), (h = o.next), s ? Cx(o, n, i, s) : Ax(o))) {
      e.push(c.i / t),
        e.push(o.i / t),
        e.push(h.i / t),
        Gr(o),
        (o = h.next),
        (a = h.next);
      continue;
    }
    if (((o = h), o === a)) {
      r
        ? r === 1
          ? ((o = Lx(Mi(o), e, t)), Hr(o, e, t, n, i, s, 2))
          : r === 2 && Rx(o, e, t, n, i, s)
        : Hr(Mi(o), e, t, n, i, s, 1);
      break;
    }
  }
}

function Ax(o) {
  const e = o.prev,
    t = o,
    n = o.next;
  if (ot(e, t, n) >= 0) return !1;
  let i = o.next.next;
  for (; i !== o.prev; ) {
    if (
      ks(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) &&
      ot(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}

function Cx(o, e, t, n) {
  const i = o.prev,
    s = o,
    r = o.next;
  if (ot(i, s, r) >= 0) return !1;
  const a = i.x < s.x ? (i.x < r.x ? i.x : r.x) : s.x < r.x ? s.x : r.x,
    c = i.y < s.y ? (i.y < r.y ? i.y : r.y) : s.y < r.y ? s.y : r.y,
    h = i.x > s.x ? (i.x > r.x ? i.x : r.x) : s.x > r.x ? s.x : r.x,
    d = i.y > s.y ? (i.y > r.y ? i.y : r.y) : s.y > r.y ? s.y : r.y,
    l = Rl(a, c, e, t, n),
    u = Rl(h, d, e, t, n);
  let f = o.prevZ,
    g = o.nextZ;
  for (; f && f.z >= l && g && g.z <= u; ) {
    if (
      (f !== o.prev &&
        f !== o.next &&
        ks(i.x, i.y, s.x, s.y, r.x, r.y, f.x, f.y) &&
        ot(f.prev, f, f.next) >= 0) ||
      ((f = f.prevZ),
      g !== o.prev &&
        g !== o.next &&
        ks(i.x, i.y, s.x, s.y, r.x, r.y, g.x, g.y) &&
        ot(g.prev, g, g.next) >= 0)
    )
      return !1;
    g = g.nextZ;
  }
  for (; f && f.z >= l; ) {
    if (
      f !== o.prev &&
      f !== o.next &&
      ks(i.x, i.y, s.x, s.y, r.x, r.y, f.x, f.y) &&
      ot(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.prevZ;
  }
  for (; g && g.z <= u; ) {
    if (
      g !== o.prev &&
      g !== o.next &&
      ks(i.x, i.y, s.x, s.y, r.x, r.y, g.x, g.y) &&
      ot(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.nextZ;
  }
  return !0;
}

function Lx(o, e, t) {
  let n = o;
  do {
    const i = n.prev,
      s = n.next.next;
    !ga(i, s) &&
      Cd(i, n, n.next, s) &&
      Ur(i, s) &&
      Ur(s, i) &&
      (e.push(i.i / t),
      e.push(n.i / t),
      e.push(s.i / t),
      Gr(n),
      Gr(n.next),
      (n = o = s)),
      (n = n.next);
  } while (n !== o);
  return Mi(n);
}

function Rx(o, e, t, n, i, s) {
  let r = o;
  do {
    let a = r.next.next;
    for (; a !== r.prev; ) {
      if (r.i !== a.i && zx(r, a)) {
        let c = Ld(r, a);
        (r = Mi(r, r.next)),
          (c = Mi(c, c.next)),
          Hr(r, e, t, n, i, s),
          Hr(c, e, t, n, i, s);
        return;
      }
      a = a.next;
    }
    r = r.next;
  } while (r !== o);
}

function Px(o, e, t, n) {
  const i = [];
  let s, r, a, c, h;
  for (s = 0, r = e.length; s < r; s++)
    (a = e[s] * n),
      (c = s < r - 1 ? e[s + 1] * n : o.length),
      (h = Ad(o, a, c, n, !1)),
      h === h.next && (h.steiner = !0),
      i.push(Nx(h));
  for (i.sort(Ix), s = 0; s < i.length; s++) Dx(i[s], t), (t = Mi(t, t.next));
  return t;
}

function Ix(o, e) {
  return o.x - e.x;
}

function Dx(o, e) {
  if (((e = kx(o, e)), e)) {
    const t = Ld(e, o);
    Mi(e, e.next), Mi(t, t.next);
  }
}

function kx(o, e) {
  let t = e;
  const n = o.x,
    i = o.y;
  let s = -1 / 0,
    r;
  do {
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      const u = t.x + ((i - t.y) * (t.next.x - t.x)) / (t.next.y - t.y);
      if (u <= n && u > s) {
        if (((s = u), u === n)) {
          if (i === t.y) return t;
          if (i === t.next.y) return t.next;
        }
        r = t.x < t.next.x ? t : t.next;
      }
    }
    t = t.next;
  } while (t !== e);
  if (!r) return null;
  if (n === s) return r;
  const a = r,
    c = r.x,
    h = r.y;
  let d = 1 / 0,
    l;
  t = r;
  do
    n >= t.x &&
      t.x >= c &&
      n !== t.x &&
      ks(i < h ? n : s, i, c, h, i < h ? s : n, i, t.x, t.y) &&
      ((l = Math.abs(i - t.y) / (n - t.x)),
      Ur(t, o) &&
        (l < d || (l === d && (t.x > r.x || (t.x === r.x && Fx(r, t))))) &&
        ((r = t), (d = l))),
      (t = t.next);
  while (t !== a);
  return r;
}

function Fx(o, e) {
  return ot(o.prev, o, e.prev) < 0 && ot(e.next, o, o.next) < 0;
}

function Bx(o, e, t, n) {
  let i = o;
  do
    i.z === null && (i.z = Rl(i.x, i.y, e, t, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next);
  while (i !== o);
  (i.prevZ.nextZ = null), (i.prevZ = null), Ox(i);
}

function Ox(o) {
  let e,
    t,
    n,
    i,
    s,
    r,
    a,
    c,
    h = 1;
  do {
    for (t = o, o = null, s = null, r = 0; t; ) {
      for (r++, n = t, a = 0, e = 0; e < h && (a++, (n = n.nextZ), !!n); e++);
      for (c = h; a > 0 || (c > 0 && n); )
        a !== 0 && (c === 0 || !n || t.z <= n.z)
          ? ((i = t), (t = t.nextZ), a--)
          : ((i = n), (n = n.nextZ), c--),
          s ? (s.nextZ = i) : (o = i),
          (i.prevZ = s),
          (s = i);
      t = n;
    }
    (s.nextZ = null), (h *= 2);
  } while (r > 1);
  return o;
}

function Rl(o, e, t, n, i) {
  return (
    (o = 32767 * (o - t) * i),
    (e = 32767 * (e - n) * i),
    (o = (o | (o << 8)) & 16711935),
    (o = (o | (o << 4)) & 252645135),
    (o = (o | (o << 2)) & 858993459),
    (o = (o | (o << 1)) & 1431655765),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    o | (e << 1)
  );
}

function Nx(o) {
  let e = o,
    t = o;
  do (e.x < t.x || (e.x === t.x && e.y < t.y)) && (t = e), (e = e.next);
  while (e !== o);
  return t;
}

function ks(o, e, t, n, i, s, r, a) {
  return (
    (i - r) * (e - a) - (o - r) * (s - a) >= 0 &&
    (o - r) * (n - a) - (t - r) * (e - a) >= 0 &&
    (t - r) * (s - a) - (i - r) * (n - a) >= 0
  );
}

function zx(o, e) {
  return (
    o.next.i !== e.i &&
    o.prev.i !== e.i &&
    !Hx(o, e) &&
    ((Ur(o, e) &&
      Ur(e, o) &&
      Ux(o, e) &&
      (ot(o.prev, o, e.prev) || ot(o, e.prev, e))) ||
      (ga(o, e) && ot(o.prev, o, o.next) > 0 && ot(e.prev, e, e.next) > 0))
  );
}

function ot(o, e, t) {
  return (e.y - o.y) * (t.x - e.x) - (e.x - o.x) * (t.y - e.y);
}

function ga(o, e) {
  return o.x === e.x && o.y === e.y;
}

function Cd(o, e, t, n) {
  const i = Do(ot(o, e, t)),
    s = Do(ot(o, e, n)),
    r = Do(ot(t, n, o)),
    a = Do(ot(t, n, e));
  return !!(
    (i !== s && r !== a) ||
    (i === 0 && Io(o, t, e)) ||
    (s === 0 && Io(o, n, e)) ||
    (r === 0 && Io(t, o, n)) ||
    (a === 0 && Io(t, e, n))
  );
}

function Io(o, e, t) {
  return (
    e.x <= Math.max(o.x, t.x) &&
    e.x >= Math.min(o.x, t.x) &&
    e.y <= Math.max(o.y, t.y) &&
    e.y >= Math.min(o.y, t.y)
  );
}

function Do(o) {
  return o > 0 ? 1 : o < 0 ? -1 : 0;
}

function Hx(o, e) {
  let t = o;
  do {
    if (
      t.i !== o.i &&
      t.next.i !== o.i &&
      t.i !== e.i &&
      t.next.i !== e.i &&
      Cd(t, t.next, o, e)
    )
      return !0;
    t = t.next;
  } while (t !== o);
  return !1;
}

function Ur(o, e) {
  return ot(o.prev, o, o.next) < 0
    ? ot(o, e, o.next) >= 0 && ot(o, o.prev, e) >= 0
    : ot(o, e, o.prev) < 0 || ot(o, o.next, e) < 0;
}

function Ux(o, e) {
  let t = o,
    n = !1;
  const i = (o.x + e.x) / 2,
    s = (o.y + e.y) / 2;
  do
    t.y > s != t.next.y > s &&
      t.next.y !== t.y &&
      i < ((t.next.x - t.x) * (s - t.y)) / (t.next.y - t.y) + t.x &&
      (n = !n),
      (t = t.next);
  while (t !== o);
  return n;
}

function Ld(o, e) {
  const t = new Pl(o.i, o.x, o.y),
    n = new Pl(e.i, e.x, e.y),
    i = o.next,
    s = e.prev;
  return (
    (o.next = e),
    (e.prev = o),
    (t.next = i),
    (i.prev = t),
    (n.next = t),
    (t.prev = n),
    (s.next = n),
    (n.prev = s),
    n
  );
}

function pu(o, e, t, n) {
  const i = new Pl(o, e, t);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}

function Gr(o) {
  (o.next.prev = o.prev),
    (o.prev.next = o.next),
    o.prevZ && (o.prevZ.nextZ = o.nextZ),
    o.nextZ && (o.nextZ.prevZ = o.prevZ);
}

function Pl(o, e, t) {
  (this.i = o),
    (this.x = e),
    (this.y = t),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}

function Gx(o, e, t, n) {
  let i = 0;
  for (let s = e, r = t - n; s < t; s += n)
    (i += (o[r] - o[s]) * (o[s + 1] + o[r + 1])), (r = s);
  return i;
}
class Kn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Kn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [],
      i = [],
      s = [];
    mu(e), gu(n, e);
    let r = e.length;
    t.forEach(mu);
    for (let c = 0; c < t.length; c++)
      i.push(r), (r += t[c].length), gu(n, t[c]);
    const a = Ex.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3) s.push(a.slice(c, c + 3));
    return s;
  }
}

function mu(o) {
  const e = o.length;
  e > 2 && o[e - 1].equals(o[0]) && o.pop();
}

function gu(o, e) {
  for (let t = 0; t < e.length; t++) o.push(e[t].x), o.push(e[t].y);
}
class or extends tt {
  constructor(
    e = new yi([
      new te(0.5, 0.5),
      new te(-0.5, 0.5),
      new te(-0.5, -0.5),
      new te(0.5, -0.5),
    ]),
    t = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = {
        shapes: e,
        options: t,
      }),
      (e = Array.isArray(e) ? e : [e]);
    const n = this,
      i = [],
      s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const h = e[a];
      r(h);
    }
    this.setAttribute("position", new mt(i, 3)),
      this.setAttribute("uv", new mt(s, 2)),
      this.computeVertexNormals();

    function r(a) {
      const c = [],
        h = t.curveSegments !== void 0 ? t.curveSegments : 12,
        d = t.steps !== void 0 ? t.steps : 1;
      let l = t.depth !== void 0 ? t.depth : 1,
        u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
        f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2,
        g = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1,
        p = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
        m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const _ = t.extrudePath,
        y = t.UVGenerator !== void 0 ? t.UVGenerator : Vx;
      t.amount !== void 0 &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (l = t.amount));
      let b,
        w = !1,
        x,
        E,
        T,
        R;
      _ &&
        ((b = _.getSpacedPoints(d)),
        (w = !0),
        (u = !1),
        (x = _.computeFrenetFrames(d, !1)),
        (E = new C()),
        (T = new C()),
        (R = new C())),
        u || ((m = 0), (f = 0), (g = 0), (p = 0));
      const I = a.extractPoints(h);
      let B = I.shape;
      const v = I.holes;
      if (!Kn.isClockWise(B)) {
        B = B.reverse();
        for (let j = 0, K = v.length; j < K; j++) {
          const ne = v[j];
          Kn.isClockWise(ne) && (v[j] = ne.reverse());
        }
      }
      const U = Kn.triangulateShape(B, v),
        D = B;
      for (let j = 0, K = v.length; j < K; j++) {
        const ne = v[j];
        B = B.concat(ne);
      }

      function O(j, K, ne) {
        return (
          K || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          K.clone().multiplyScalar(ne).add(j)
        );
      }
      const N = B.length,
        H = U.length;

      function F(j, K, ne) {
        let me, de, Ce;
        const we = j.x - K.x,
          ve = j.y - K.y,
          st = ne.x - j.x,
          Ze = ne.y - j.y,
          A = we * we + ve * ve,
          M = we * Ze - ve * st;
        if (Math.abs(M) > Number.EPSILON) {
          const W = Math.sqrt(A),
            ee = Math.sqrt(st * st + Ze * Ze),
            ce = K.x - ve / W,
            fe = K.y + we / W,
            be = ne.x - Ze / ee,
            q = ne.y + st / ee,
            Ie = ((be - ce) * Ze - (q - fe) * st) / (we * Ze - ve * st);
          (me = ce + we * Ie - j.x), (de = fe + ve * Ie - j.y);
          const ke = me * me + de * de;
          if (ke <= 2) return new te(me, de);
          Ce = Math.sqrt(ke / 2);
        } else {
          let W = !1;
          we > Number.EPSILON
            ? st > Number.EPSILON && (W = !0)
            : we < -Number.EPSILON
            ? st < -Number.EPSILON && (W = !0)
            : Math.sign(ve) === Math.sign(Ze) && (W = !0),
            W
              ? ((me = -ve), (de = we), (Ce = Math.sqrt(A)))
              : ((me = we), (de = ve), (Ce = Math.sqrt(A / 2)));
        }
        return new te(me / Ce, de / Ce);
      }
      const X = [];
      for (
        let j = 0, K = D.length, ne = K - 1, me = j + 1;
        j < K;
        j++, ne++, me++
      )
        ne === K && (ne = 0),
          me === K && (me = 0),
          (X[j] = F(D[j], D[ne], D[me]));
      const Z = [];
      let Q,
        $ = X.concat();
      for (let j = 0, K = v.length; j < K; j++) {
        const ne = v[j];
        Q = [];
        for (
          let me = 0, de = ne.length, Ce = de - 1, we = me + 1;
          me < de;
          me++, Ce++, we++
        )
          Ce === de && (Ce = 0),
            we === de && (we = 0),
            (Q[me] = F(ne[me], ne[Ce], ne[we]));
        Z.push(Q), ($ = $.concat(Q));
      }
      for (let j = 0; j < m; j++) {
        const K = j / m,
          ne = f * Math.cos((K * Math.PI) / 2),
          me = g * Math.sin((K * Math.PI) / 2) + p;
        for (let de = 0, Ce = D.length; de < Ce; de++) {
          const we = O(D[de], X[de], me);
          We(we.x, we.y, -ne);
        }
        for (let de = 0, Ce = v.length; de < Ce; de++) {
          const we = v[de];
          Q = Z[de];
          for (let ve = 0, st = we.length; ve < st; ve++) {
            const Ze = O(we[ve], Q[ve], me);
            We(Ze.x, Ze.y, -ne);
          }
        }
      }
      const ue = g + p;
      for (let j = 0; j < N; j++) {
        const K = u ? O(B[j], $[j], ue) : B[j];
        w
          ? (T.copy(x.normals[0]).multiplyScalar(K.x),
            E.copy(x.binormals[0]).multiplyScalar(K.y),
            R.copy(b[0]).add(T).add(E),
            We(R.x, R.y, R.z))
          : We(K.x, K.y, 0);
      }
      for (let j = 1; j <= d; j++)
        for (let K = 0; K < N; K++) {
          const ne = u ? O(B[K], $[K], ue) : B[K];
          w
            ? (T.copy(x.normals[j]).multiplyScalar(ne.x),
              E.copy(x.binormals[j]).multiplyScalar(ne.y),
              R.copy(b[j]).add(T).add(E),
              We(R.x, R.y, R.z))
            : We(ne.x, ne.y, (l / d) * j);
        }
      for (let j = m - 1; j >= 0; j--) {
        const K = j / m,
          ne = f * Math.cos((K * Math.PI) / 2),
          me = g * Math.sin((K * Math.PI) / 2) + p;
        for (let de = 0, Ce = D.length; de < Ce; de++) {
          const we = O(D[de], X[de], me);
          We(we.x, we.y, l + ne);
        }
        for (let de = 0, Ce = v.length; de < Ce; de++) {
          const we = v[de];
          Q = Z[de];
          for (let ve = 0, st = we.length; ve < st; ve++) {
            const Ze = O(we[ve], Q[ve], me);
            w
              ? We(Ze.x, Ze.y + b[d - 1].y, b[d - 1].x + ne)
              : We(Ze.x, Ze.y, l + ne);
          }
        }
      }
      Me(), xe();

      function Me() {
        const j = i.length / 3;
        if (u) {
          let K = 0,
            ne = N * K;
          for (let me = 0; me < H; me++) {
            const de = U[me];
            Re(de[2] + ne, de[1] + ne, de[0] + ne);
          }
          (K = d + m * 2), (ne = N * K);
          for (let me = 0; me < H; me++) {
            const de = U[me];
            Re(de[0] + ne, de[1] + ne, de[2] + ne);
          }
        } else {
          for (let K = 0; K < H; K++) {
            const ne = U[K];
            Re(ne[2], ne[1], ne[0]);
          }
          for (let K = 0; K < H; K++) {
            const ne = U[K];
            Re(ne[0] + N * d, ne[1] + N * d, ne[2] + N * d);
          }
        }
        n.addGroup(j, i.length / 3 - j, 0);
      }

      function xe() {
        const j = i.length / 3;
        let K = 0;
        Y(D, K), (K += D.length);
        for (let ne = 0, me = v.length; ne < me; ne++) {
          const de = v[ne];
          Y(de, K), (K += de.length);
        }
        n.addGroup(j, i.length / 3 - j, 1);
      }

      function Y(j, K) {
        let ne = j.length;
        for (; --ne >= 0; ) {
          const me = ne;
          let de = ne - 1;
          de < 0 && (de = j.length - 1);
          for (let Ce = 0, we = d + m * 2; Ce < we; Ce++) {
            const ve = N * Ce,
              st = N * (Ce + 1),
              Ze = K + me + ve,
              A = K + de + ve,
              M = K + de + st,
              W = K + me + st;
            Pe(Ze, A, M, W);
          }
        }
      }

      function We(j, K, ne) {
        c.push(j), c.push(K), c.push(ne);
      }

      function Re(j, K, ne) {
        se(j), se(K), se(ne);
        const me = i.length / 3,
          de = y.generateTopUV(n, i, me - 3, me - 2, me - 1);
        Be(de[0]), Be(de[1]), Be(de[2]);
      }

      function Pe(j, K, ne, me) {
        se(j), se(K), se(me), se(K), se(ne), se(me);
        const de = i.length / 3,
          Ce = y.generateSideWallUV(n, i, de - 6, de - 3, de - 2, de - 1);
        Be(Ce[0]), Be(Ce[1]), Be(Ce[3]), Be(Ce[1]), Be(Ce[2]), Be(Ce[3]);
      }

      function se(j) {
        i.push(c[j * 3 + 0]), i.push(c[j * 3 + 1]), i.push(c[j * 3 + 2]);
      }

      function Be(j) {
        s.push(j.x), s.push(j.y);
      }
    }
  }
  toJSON() {
    const e = super.toJSON(),
      t = this.parameters.shapes,
      n = this.parameters.options;
    return Wx(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, r = e.shapes.length; s < r; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return (
      i !== void 0 && (e.options.extrudePath = new Ed[i.type]().fromJSON(i)),
      new or(n, e.options)
    );
  }
}
const Vx = {
  generateTopUV: function (o, e, t, n, i) {
    const s = e[t * 3],
      r = e[t * 3 + 1],
      a = e[n * 3],
      c = e[n * 3 + 1],
      h = e[i * 3],
      d = e[i * 3 + 1];
    return [new te(s, r), new te(a, c), new te(h, d)];
  },
  generateSideWallUV: function (o, e, t, n, i, s) {
    const r = e[t * 3],
      a = e[t * 3 + 1],
      c = e[t * 3 + 2],
      h = e[n * 3],
      d = e[n * 3 + 1],
      l = e[n * 3 + 2],
      u = e[i * 3],
      f = e[i * 3 + 1],
      g = e[i * 3 + 2],
      p = e[s * 3],
      m = e[s * 3 + 1],
      _ = e[s * 3 + 2];
    return Math.abs(a - d) < Math.abs(r - h)
      ? [new te(r, 1 - c), new te(h, 1 - l), new te(u, 1 - g), new te(p, 1 - _)]
      : [
          new te(a, 1 - c),
          new te(d, 1 - l),
          new te(f, 1 - g),
          new te(m, 1 - _),
        ];
  },
};

function Wx(o, e, t) {
  if (((t.shapes = []), Array.isArray(o)))
    for (let n = 0, i = o.length; n < i; n++) {
      const s = o[n];
      t.shapes.push(s.uuid);
    }
  else t.shapes.push(o.uuid);
  return (
    e.extrudePath !== void 0 &&
      (t.options.extrudePath = e.extrudePath.toJSON()),
    t
  );
}

export { Kn, bd, cc, da, fa, gc, hc, hn, jo, or, os, ua, uc, vd, yi };
