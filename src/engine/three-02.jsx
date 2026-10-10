import { At, Lt, Ut, cn, ts } from "./three-01.jsx";
Ut.prototype.isQuaternion = !0;
class C {
  constructor(e = 0, t = 0, n = 0) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(yh.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(yh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      r = e.y,
      a = e.z,
      c = e.w,
      h = c * t + r * i - a * n,
      d = c * n + a * t - s * i,
      l = c * i + s * n - r * t,
      u = -s * t - r * n - a * i;
    return (
      (this.x = h * c + u * -s + d * -a - l * -r),
      (this.y = d * c + u * -r + l * -s - h * -a),
      (this.z = l * c + u * -a + h * -r - d * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      r = t.x,
      a = t.y,
      c = t.z;
    return (
      (this.x = i * c - s * a),
      (this.y = s * r - n * c),
      (this.z = n * a - i * r),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Da.copy(this).projectOnVector(e), this.sub(Da);
  }
  reflect(e) {
    return this.sub(Da.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(At(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
C.prototype.isVector3 = !0;
const Da = new C(),
  yh = new Ut();
class dn {
  constructor(
    e = new C(1 / 0, 1 / 0, 1 / 0),
    t = new C(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      r = -1 / 0,
      a = -1 / 0;
    for (let c = 0, h = e.length; c < h; c += 3) {
      const d = e[c],
        l = e[c + 1],
        u = e[c + 2];
      d < t && (t = d),
        l < n && (n = l),
        u < i && (i = u),
        d > s && (s = d),
        l > r && (r = l),
        u > a && (a = u);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      r = -1 / 0,
      a = -1 / 0;
    for (let c = 0, h = e.count; c < h; c++) {
      const d = e.getX(c),
        l = e.getY(c),
        u = e.getZ(c);
      d < t && (t = d),
        l < n && (n = l),
        u < i && (i = u),
        d > s && (s = d),
        l > r && (r = l),
        u > a && (a = u);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ri.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let r = 0, a = s.count; r < a; r++)
          Ri.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Ri);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          ka.copy(n.boundingBox),
          ka.applyMatrix4(e.matrixWorld),
          this.union(ka);
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ri),
      Ri.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(dr),
      ro.subVectors(this.max, dr),
      ds.subVectors(e.a, dr),
      fs.subVectors(e.b, dr),
      ps.subVectors(e.c, dr),
      ni.subVectors(fs, ds),
      ii.subVectors(ps, fs),
      Pi.subVectors(ds, ps);
    let t = [
      0,
      -ni.z,
      ni.y,
      0,
      -ii.z,
      ii.y,
      0,
      -Pi.z,
      Pi.y,
      ni.z,
      0,
      -ni.x,
      ii.z,
      0,
      -ii.x,
      Pi.z,
      0,
      -Pi.x,
      -ni.y,
      ni.x,
      0,
      -ii.y,
      ii.x,
      0,
      -Pi.y,
      Pi.x,
      0,
    ];
    return !Fa(t, ds, fs, ps, ro) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Fa(t, ds, fs, ps, ro))
      ? !1
      : (oo.crossVectors(ni, ii),
        (t = [oo.x, oo.y, oo.z]),
        Fa(t, ds, fs, ps, ro));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Ri.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(Ri).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (On[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        On[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        On[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        On[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        On[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        On[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        On[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        On[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(On),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
dn.prototype.isBox3 = !0;
const On = [
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
  ],
  Ri = new C(),
  ka = new dn(),
  ds = new C(),
  fs = new C(),
  ps = new C(),
  ni = new C(),
  ii = new C(),
  Pi = new C(),
  dr = new C(),
  ro = new C(),
  oo = new C(),
  Ii = new C();

function Fa(o, e, t, n, i) {
  for (let s = 0, r = o.length - 3; s <= r; s += 3) {
    Ii.fromArray(o, s);
    const a =
        i.x * Math.abs(Ii.x) + i.y * Math.abs(Ii.y) + i.z * Math.abs(Ii.z),
      c = e.dot(Ii),
      h = t.dot(Ii),
      d = n.dot(Ii);
    if (Math.max(-Math.max(c, h, d), Math.min(c, h, d)) > a) return !1;
  }
  return !0;
}
const Am = new dn(),
  xh = new C(),
  ao = new C(),
  Ba = new C();
class is {
  constructor(e = new C(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Am.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    Ba.subVectors(e, this.center);
    const t = Ba.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(Ba.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? ao.set(0, 0, 1).multiplyScalar(e.radius)
        : ao
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(xh.copy(e.center).add(ao)),
      this.expandByPoint(xh.copy(e.center).sub(ao)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Nn = new C(),
  Oa = new C(),
  lo = new C(),
  si = new C(),
  Na = new C(),
  co = new C(),
  za = new C();
class ss {
  constructor(e = new C(), t = new C(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Nn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Nn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Nn.copy(this.direction).multiplyScalar(t).add(this.origin),
        Nn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Oa.copy(e).add(t).multiplyScalar(0.5),
      lo.copy(t).sub(e).normalize(),
      si.copy(this.origin).sub(Oa);
    const s = e.distanceTo(t) * 0.5,
      r = -this.direction.dot(lo),
      a = si.dot(this.direction),
      c = -si.dot(lo),
      h = si.lengthSq(),
      d = Math.abs(1 - r * r);
    let l, u, f, g;
    if (d > 0)
      if (((l = r * c - a), (u = r * a - c), (g = s * d), l >= 0))
        if (u >= -g)
          if (u <= g) {
            const p = 1 / d;
            (l *= p),
              (u *= p),
              (f = l * (l + r * u + 2 * a) + u * (r * l + u + 2 * c) + h);
          } else
            (u = s),
              (l = Math.max(0, -(r * u + a))),
              (f = -l * l + u * (u + 2 * c) + h);
        else
          (u = -s),
            (l = Math.max(0, -(r * u + a))),
            (f = -l * l + u * (u + 2 * c) + h);
      else
        u <= -g
          ? ((l = Math.max(0, -(-r * s + a))),
            (u = l > 0 ? -s : Math.min(Math.max(-s, -c), s)),
            (f = -l * l + u * (u + 2 * c) + h))
          : u <= g
          ? ((l = 0),
            (u = Math.min(Math.max(-s, -c), s)),
            (f = u * (u + 2 * c) + h))
          : ((l = Math.max(0, -(r * s + a))),
            (u = l > 0 ? s : Math.min(Math.max(-s, -c), s)),
            (f = -l * l + u * (u + 2 * c) + h));
    else
      (u = r > 0 ? -s : s),
        (l = Math.max(0, -(r * u + a))),
        (f = -l * l + u * (u + 2 * c) + h);
    return (
      n && n.copy(this.direction).multiplyScalar(l).add(this.origin),
      i && i.copy(lo).multiplyScalar(u).add(Oa),
      f
    );
  }
  intersectSphere(e, t) {
    Nn.subVectors(e.center, this.origin);
    const n = Nn.dot(this.direction),
      i = Nn.dot(Nn) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const r = Math.sqrt(s - i),
      a = n - r,
      c = n + r;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, r, a, c;
    const h = 1 / this.direction.x,
      d = 1 / this.direction.y,
      l = 1 / this.direction.z,
      u = this.origin;
    return (
      h >= 0
        ? ((n = (e.min.x - u.x) * h), (i = (e.max.x - u.x) * h))
        : ((n = (e.max.x - u.x) * h), (i = (e.min.x - u.x) * h)),
      d >= 0
        ? ((s = (e.min.y - u.y) * d), (r = (e.max.y - u.y) * d))
        : ((s = (e.max.y - u.y) * d), (r = (e.min.y - u.y) * d)),
      n > r ||
      s > i ||
      ((s > n || n !== n) && (n = s),
      (r < i || i !== i) && (i = r),
      l >= 0
        ? ((a = (e.min.z - u.z) * l), (c = (e.max.z - u.z) * l))
        : ((a = (e.max.z - u.z) * l), (c = (e.min.z - u.z) * l)),
      n > c || a > i) ||
      ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Nn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Na.subVectors(t, e), co.subVectors(n, e), za.crossVectors(Na, co);
    let r = this.direction.dot(za),
      a;
    if (r > 0) {
      if (i) return null;
      a = 1;
    } else if (r < 0) (a = -1), (r = -r);
    else return null;
    si.subVectors(this.origin, e);
    const c = a * this.direction.dot(co.crossVectors(si, co));
    if (c < 0) return null;
    const h = a * this.direction.dot(Na.cross(si));
    if (h < 0 || c + h > r) return null;
    const d = -a * si.dot(za);
    return d < 0 ? null : this.at(d / r, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class _e {
  constructor() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, s, r, a, c, h, d, l, u, f, g, p, m) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = n),
      (_[12] = i),
      (_[1] = s),
      (_[5] = r),
      (_[9] = a),
      (_[13] = c),
      (_[2] = h),
      (_[6] = d),
      (_[10] = l),
      (_[14] = u),
      (_[3] = f),
      (_[7] = g),
      (_[11] = p),
      (_[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _e().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / ms.setFromMatrixColumn(e, 0).length(),
      s = 1 / ms.setFromMatrixColumn(e, 1).length(),
      r = 1 / ms.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * r),
      (t[9] = n[9] * r),
      (t[10] = n[10] * r),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      r = Math.cos(n),
      a = Math.sin(n),
      c = Math.cos(i),
      h = Math.sin(i),
      d = Math.cos(s),
      l = Math.sin(s);
    if (e.order === "XYZ") {
      const u = r * d,
        f = r * l,
        g = a * d,
        p = a * l;
      (t[0] = c * d),
        (t[4] = -c * l),
        (t[8] = h),
        (t[1] = f + g * h),
        (t[5] = u - p * h),
        (t[9] = -a * c),
        (t[2] = p - u * h),
        (t[6] = g + f * h),
        (t[10] = r * c);
    } else if (e.order === "YXZ") {
      const u = c * d,
        f = c * l,
        g = h * d,
        p = h * l;
      (t[0] = u + p * a),
        (t[4] = g * a - f),
        (t[8] = r * h),
        (t[1] = r * l),
        (t[5] = r * d),
        (t[9] = -a),
        (t[2] = f * a - g),
        (t[6] = p + u * a),
        (t[10] = r * c);
    } else if (e.order === "ZXY") {
      const u = c * d,
        f = c * l,
        g = h * d,
        p = h * l;
      (t[0] = u - p * a),
        (t[4] = -r * l),
        (t[8] = g + f * a),
        (t[1] = f + g * a),
        (t[5] = r * d),
        (t[9] = p - u * a),
        (t[2] = -r * h),
        (t[6] = a),
        (t[10] = r * c);
    } else if (e.order === "ZYX") {
      const u = r * d,
        f = r * l,
        g = a * d,
        p = a * l;
      (t[0] = c * d),
        (t[4] = g * h - f),
        (t[8] = u * h + p),
        (t[1] = c * l),
        (t[5] = p * h + u),
        (t[9] = f * h - g),
        (t[2] = -h),
        (t[6] = a * c),
        (t[10] = r * c);
    } else if (e.order === "YZX") {
      const u = r * c,
        f = r * h,
        g = a * c,
        p = a * h;
      (t[0] = c * d),
        (t[4] = p - u * l),
        (t[8] = g * l + f),
        (t[1] = l),
        (t[5] = r * d),
        (t[9] = -a * d),
        (t[2] = -h * d),
        (t[6] = f * l + g),
        (t[10] = u - p * l);
    } else if (e.order === "XZY") {
      const u = r * c,
        f = r * h,
        g = a * c,
        p = a * h;
      (t[0] = c * d),
        (t[4] = -l),
        (t[8] = h * d),
        (t[1] = u * l + p),
        (t[5] = r * d),
        (t[9] = f * l - g),
        (t[2] = g * l - f),
        (t[6] = a * d),
        (t[10] = p * l + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Cm, e, Lm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      jt.subVectors(e, t),
      jt.lengthSq() === 0 && (jt.z = 1),
      jt.normalize(),
      ri.crossVectors(n, jt),
      ri.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (jt.x += 1e-4) : (jt.z += 1e-4),
        jt.normalize(),
        ri.crossVectors(n, jt)),
      ri.normalize(),
      ho.crossVectors(jt, ri),
      (i[0] = ri.x),
      (i[4] = ho.x),
      (i[8] = jt.x),
      (i[1] = ri.y),
      (i[5] = ho.y),
      (i[9] = jt.y),
      (i[2] = ri.z),
      (i[6] = ho.z),
      (i[10] = jt.z),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      r = n[0],
      a = n[4],
      c = n[8],
      h = n[12],
      d = n[1],
      l = n[5],
      u = n[9],
      f = n[13],
      g = n[2],
      p = n[6],
      m = n[10],
      _ = n[14],
      y = n[3],
      b = n[7],
      w = n[11],
      x = n[15],
      E = i[0],
      T = i[4],
      R = i[8],
      I = i[12],
      B = i[1],
      v = i[5],
      L = i[9],
      U = i[13],
      D = i[2],
      O = i[6],
      N = i[10],
      H = i[14],
      F = i[3],
      X = i[7],
      Z = i[11],
      Q = i[15];
    return (
      (s[0] = r * E + a * B + c * D + h * F),
      (s[4] = r * T + a * v + c * O + h * X),
      (s[8] = r * R + a * L + c * N + h * Z),
      (s[12] = r * I + a * U + c * H + h * Q),
      (s[1] = d * E + l * B + u * D + f * F),
      (s[5] = d * T + l * v + u * O + f * X),
      (s[9] = d * R + l * L + u * N + f * Z),
      (s[13] = d * I + l * U + u * H + f * Q),
      (s[2] = g * E + p * B + m * D + _ * F),
      (s[6] = g * T + p * v + m * O + _ * X),
      (s[10] = g * R + p * L + m * N + _ * Z),
      (s[14] = g * I + p * U + m * H + _ * Q),
      (s[3] = y * E + b * B + w * D + x * F),
      (s[7] = y * T + b * v + w * O + x * X),
      (s[11] = y * R + b * L + w * N + x * Z),
      (s[15] = y * I + b * U + w * H + x * Q),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      r = e[1],
      a = e[5],
      c = e[9],
      h = e[13],
      d = e[2],
      l = e[6],
      u = e[10],
      f = e[14],
      g = e[3],
      p = e[7],
      m = e[11],
      _ = e[15];
    return (
      g *
        (+s * c * l -
          i * h * l -
          s * a * u +
          n * h * u +
          i * a * f -
          n * c * f) +
      p *
        (+t * c * f -
          t * h * u +
          s * r * u -
          i * r * f +
          i * h * d -
          s * c * d) +
      m *
        (+t * h * l -
          t * a * f -
          s * r * l +
          n * r * f +
          s * a * d -
          n * h * d) +
      _ *
        (-i * a * d - t * c * l + t * a * u + i * r * l - n * r * u + n * c * d)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      r = e[4],
      a = e[5],
      c = e[6],
      h = e[7],
      d = e[8],
      l = e[9],
      u = e[10],
      f = e[11],
      g = e[12],
      p = e[13],
      m = e[14],
      _ = e[15],
      y = l * m * h - p * u * h + p * c * f - a * m * f - l * c * _ + a * u * _,
      b = g * u * h - d * m * h - g * c * f + r * m * f + d * c * _ - r * u * _,
      w = d * p * h - g * l * h + g * a * f - r * p * f - d * a * _ + r * l * _,
      x = g * l * c - d * p * c - g * a * u + r * p * u + d * a * m - r * l * m,
      E = t * y + n * b + i * w + s * x;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / E;
    return (
      (e[0] = y * T),
      (e[1] =
        (p * u * s -
          l * m * s -
          p * i * f +
          n * m * f +
          l * i * _ -
          n * u * _) *
        T),
      (e[2] =
        (a * m * s -
          p * c * s +
          p * i * h -
          n * m * h -
          a * i * _ +
          n * c * _) *
        T),
      (e[3] =
        (l * c * s -
          a * u * s -
          l * i * h +
          n * u * h +
          a * i * f -
          n * c * f) *
        T),
      (e[4] = b * T),
      (e[5] =
        (d * m * s -
          g * u * s +
          g * i * f -
          t * m * f -
          d * i * _ +
          t * u * _) *
        T),
      (e[6] =
        (g * c * s -
          r * m * s -
          g * i * h +
          t * m * h +
          r * i * _ -
          t * c * _) *
        T),
      (e[7] =
        (r * u * s -
          d * c * s +
          d * i * h -
          t * u * h -
          r * i * f +
          t * c * f) *
        T),
      (e[8] = w * T),
      (e[9] =
        (g * l * s -
          d * p * s -
          g * n * f +
          t * p * f +
          d * n * _ -
          t * l * _) *
        T),
      (e[10] =
        (r * p * s -
          g * a * s +
          g * n * h -
          t * p * h -
          r * n * _ +
          t * a * _) *
        T),
      (e[11] =
        (d * a * s -
          r * l * s -
          d * n * h +
          t * l * h +
          r * n * f -
          t * a * f) *
        T),
      (e[12] = x * T),
      (e[13] =
        (d * p * i -
          g * l * i +
          g * n * u -
          t * p * u -
          d * n * m +
          t * l * m) *
        T),
      (e[14] =
        (g * a * i -
          r * p * i -
          g * n * c +
          t * p * c +
          r * n * m -
          t * a * m) *
        T),
      (e[15] =
        (r * l * i -
          d * a * i +
          d * n * c -
          t * l * c -
          r * n * u +
          t * a * u) *
        T),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      r = e.x,
      a = e.y,
      c = e.z,
      h = s * r,
      d = s * a;
    return (
      this.set(
        h * r + n,
        h * a - i * c,
        h * c + i * a,
        0,
        h * a + i * c,
        d * a + n,
        d * c - i * r,
        0,
        h * c - i * a,
        d * c + i * r,
        s * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, r) {
    return this.set(1, n, s, 0, e, 1, r, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      r = t._y,
      a = t._z,
      c = t._w,
      h = s + s,
      d = r + r,
      l = a + a,
      u = s * h,
      f = s * d,
      g = s * l,
      p = r * d,
      m = r * l,
      _ = a * l,
      y = c * h,
      b = c * d,
      w = c * l,
      x = n.x,
      E = n.y,
      T = n.z;
    return (
      (i[0] = (1 - (p + _)) * x),
      (i[1] = (f + w) * x),
      (i[2] = (g - b) * x),
      (i[3] = 0),
      (i[4] = (f - w) * E),
      (i[5] = (1 - (u + _)) * E),
      (i[6] = (m + y) * E),
      (i[7] = 0),
      (i[8] = (g + b) * T),
      (i[9] = (m - y) * T),
      (i[10] = (1 - (u + p)) * T),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = ms.set(i[0], i[1], i[2]).length();
    const r = ms.set(i[4], i[5], i[6]).length(),
      a = ms.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      gn.copy(this);
    const h = 1 / s,
      d = 1 / r,
      l = 1 / a;
    return (
      (gn.elements[0] *= h),
      (gn.elements[1] *= h),
      (gn.elements[2] *= h),
      (gn.elements[4] *= d),
      (gn.elements[5] *= d),
      (gn.elements[6] *= d),
      (gn.elements[8] *= l),
      (gn.elements[9] *= l),
      (gn.elements[10] *= l),
      t.setFromRotationMatrix(gn),
      (n.x = s),
      (n.y = r),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, s, r) {
    r === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const a = this.elements,
      c = (2 * s) / (t - e),
      h = (2 * s) / (n - i),
      d = (t + e) / (t - e),
      l = (n + i) / (n - i),
      u = -(r + s) / (r - s),
      f = (-2 * r * s) / (r - s);
    return (
      (a[0] = c),
      (a[4] = 0),
      (a[8] = d),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = h),
      (a[9] = l),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = u),
      (a[14] = f),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, r) {
    const a = this.elements,
      c = 1 / (t - e),
      h = 1 / (n - i),
      d = 1 / (r - s),
      l = (t + e) * c,
      u = (n + i) * h,
      f = (r + s) * d;
    return (
      (a[0] = 2 * c),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -l),
      (a[1] = 0),
      (a[5] = 2 * h),
      (a[9] = 0),
      (a[13] = -u),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * d),
      (a[14] = -f),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
_e.prototype.isMatrix4 = !0;
const ms = new C(),
  gn = new _e(),
  Cm = new C(0, 0, 0),
  Lm = new C(1, 1, 1),
  ri = new C(),
  ho = new C(),
  jt = new C(),
  vh = new _e(),
  bh = new Ut();
class rs {
  constructor(e = 0, t = 0, n = 0, i = rs.DefaultOrder) {
    (this._x = e), (this._y = t), (this._z = n), (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      r = i[4],
      a = i[8],
      c = i[1],
      h = i[5],
      d = i[9],
      l = i[2],
      u = i[6],
      f = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(At(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-d, f)), (this._z = Math.atan2(-r, s)))
            : ((this._x = Math.atan2(u, h)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-At(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(a, f)), (this._z = Math.atan2(c, h)))
            : ((this._y = Math.atan2(-l, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(At(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-l, f)), (this._z = Math.atan2(-r, h)))
            : ((this._y = 0), (this._z = Math.atan2(c, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-At(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(u, f)), (this._z = Math.atan2(c, s)))
            : ((this._x = 0), (this._z = Math.atan2(-r, h)));
        break;
      case "YZX":
        (this._z = Math.asin(At(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-d, h)), (this._y = Math.atan2(-l, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, f)));
        break;
      case "XZY":
        (this._z = Math.asin(-At(r, -1, 1))),
          Math.abs(r) < 0.9999999
            ? ((this._x = Math.atan2(u, h)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-d, f)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      vh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(vh, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return bh.setFromEuler(this), this.setFromQuaternion(bh, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}
rs.prototype.isEuler = !0;
rs.DefaultOrder = "XYZ";
rs.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class nc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Rm = 0;
const wh = new C(),
  gs = new Ut(),
  zn = new _e(),
  uo = new C(),
  fr = new C(),
  Pm = new C(),
  Im = new Ut(),
  Mh = new C(1, 0, 0),
  Sh = new C(0, 1, 0),
  Th = new C(0, 0, 1),
  Dm = {
    type: "added",
  },
  Eh = {
    type: "removed",
  };
class je extends ts {
  constructor() {
    super(),
      Object.defineProperty(this, "id", {
        value: Rm++,
      }),
      (this.uuid = cn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = je.DefaultUp.clone());
    const e = new C(),
      t = new rs(),
      n = new Ut(),
      i = new C(1, 1, 1);

    function s() {
      n.setFromEuler(t, !1);
    }

    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(r),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        modelViewMatrix: {
          value: new _e(),
        },
        normalMatrix: {
          value: new Lt(),
        },
      }),
      (this.matrix = new _e()),
      (this.matrixWorld = new _e()),
      (this.matrixAutoUpdate = je.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new nc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return gs.setFromAxisAngle(e, t), this.quaternion.multiply(gs), this;
  }
  rotateOnWorldAxis(e, t) {
    return gs.setFromAxisAngle(e, t), this.quaternion.premultiply(gs), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Mh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Sh, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Th, e);
  }
  translateOnAxis(e, t) {
    return (
      wh.copy(e).applyQuaternion(this.quaternion),
      this.position.add(wh.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Mh, e);
  }
  translateY(e) {
    return this.translateOnAxis(Sh, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Th, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(zn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? uo.copy(e) : uo.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      fr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? zn.lookAt(fr, uo, this.up)
        : zn.lookAt(uo, fr, this.up),
      this.quaternion.setFromRotationMatrix(zn),
      i &&
        (zn.extractRotation(i.matrixWorld),
        gs.setFromRotationMatrix(zn),
        this.quaternion.premultiply(gs.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Dm))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Eh)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Eh);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      zn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), zn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(zn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0) return r;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, e, Pm), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, Im, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, r = i.length; s < r; s++) i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));

    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let h = 0, d = c.length; h < d; h++) {
            const l = c[h];
            s(e.shapes, l);
          }
        else s(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, h = this.material.length; c < h; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = r(e.geometries),
        c = r(e.materials),
        h = r(e.textures),
        d = r(e.images),
        l = r(e.shapes),
        u = r(e.skeletons),
        f = r(e.animations),
        g = r(e.nodes);
      a.length > 0 && (n.geometries = a),
        c.length > 0 && (n.materials = c),
        h.length > 0 && (n.textures = h),
        d.length > 0 && (n.images = d),
        l.length > 0 && (n.shapes = l),
        u.length > 0 && (n.skeletons = u),
        f.length > 0 && (n.animations = f),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;

    function r(a) {
      const c = [];
      for (const h in a) {
        const d = a[h];
        delete d.metadata, c.push(d);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}

export { C, _e, dn, is, je, nc, rs, ss };
