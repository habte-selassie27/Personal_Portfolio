const $l = "139",
  cp = 0,
  Vc = 1,
  hp = 2,
  Xu = 1,
  up = 2,
  Sr = 3,
  Ws = 0,
  xn = 1,
  Yi = 2,
  ju = 1,
  mi = 0,
  Ns = 1,
  Wc = 2,
  qc = 3,
  Xc = 4,
  dp = 5,
  Rs = 100,
  fp = 101,
  pp = 102,
  jc = 103,
  Yc = 104,
  mp = 200,
  gp = 201,
  _p = 202,
  yp = 203,
  Yu = 204,
  Ju = 205,
  xp = 206,
  vp = 207,
  bp = 208,
  wp = 209,
  Mp = 210,
  Sp = 0,
  Tp = 1,
  Ep = 2,
  vl = 3,
  Ap = 4,
  Cp = 5,
  Lp = 6,
  Rp = 7,
  na = 0,
  Pp = 1,
  Ip = 2,
  Jn = 0,
  Dp = 1,
  kp = 2,
  Fp = 3,
  Bp = 4,
  Op = 5,
  Ku = 300,
  qs = 301,
  Xs = 302,
  bl = 303,
  wl = 304,
  ia = 306,
  Ji = 1e3,
  sn = 1001,
  Vo = 1002,
  bt = 1003,
  Ml = 1004,
  Sl = 1005,
  It = 1006,
  Zu = 1007,
  ir = 1008,
  Ki = 1009,
  Np = 1010,
  zp = 1011,
  Fr = 1012,
  Hp = 1013,
  Oo = 1014,
  ui = 1015,
  zs = 1016,
  Up = 1017,
  Gp = 1018,
  Hs = 1020,
  Vp = 1021,
  Wp = 1022,
  rn = 1023,
  qp = 1024,
  Xp = 1025,
  Gi = 1026,
  js = 1027,
  jp = 1028,
  Yp = 1029,
  Jp = 1030,
  Kp = 1031,
  Zp = 1033,
  Sa = 33776,
  Ta = 33777,
  Ea = 33778,
  Aa = 33779,
  Jc = 35840,
  Kc = 35841,
  Zc = 35842,
  $c = 35843,
  $p = 36196,
  Qc = 37492,
  eh = 37496,
  th = 37808,
  nh = 37809,
  ih = 37810,
  sh = 37811,
  rh = 37812,
  oh = 37813,
  ah = 37814,
  lh = 37815,
  ch = 37816,
  hh = 37817,
  uh = 37818,
  dh = 37819,
  fh = 37820,
  ph = 37821,
  mh = 36492,
  Qp = 2200,
  em = 2201,
  No = 2202,
  Br = 2300,
  Ys = 2301,
  Ca = 2302,
  Ps = 2400,
  Is = 2401,
  Wo = 2402,
  Ql = 2500,
  $u = 2501,
  tm = 0,
  nm = 1,
  Qu = 2,
  Zn = 3e3,
  Ge = 3001,
  im = 3200,
  sm = 3201,
  es = 0,
  rm = 1,
  Wn = "srgb",
  Hi = "srgb-linear",
  La = 7680,
  om = 519,
  Or = 35044,
  qo = 35048,
  gh = "300 es",
  Tl = 1035;
class ts {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, r = i.length; s < r; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const Et = [];
for (let o = 0; o < 256; o++) Et[o] = (o < 16 ? "0" : "") + o.toString(16);
let _h = 1234567;
const Cr = Math.PI / 180,
  Nr = 180 / Math.PI;

function cn() {
  const o = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Et[o & 255] +
    Et[(o >> 8) & 255] +
    Et[(o >> 16) & 255] +
    Et[(o >> 24) & 255] +
    "-" +
    Et[e & 255] +
    Et[(e >> 8) & 255] +
    "-" +
    Et[((e >> 16) & 15) | 64] +
    Et[(e >> 24) & 255] +
    "-" +
    Et[(t & 63) | 128] +
    Et[(t >> 8) & 255] +
    "-" +
    Et[(t >> 16) & 255] +
    Et[(t >> 24) & 255] +
    Et[n & 255] +
    Et[(n >> 8) & 255] +
    Et[(n >> 16) & 255] +
    Et[(n >> 24) & 255]
  ).toLowerCase();
}

function At(o, e, t) {
  return Math.max(e, Math.min(t, o));
}

function ec(o, e) {
  return ((o % e) + e) % e;
}

function am(o, e, t, n, i) {
  return n + ((o - e) * (i - n)) / (t - e);
}

function lm(o, e, t) {
  return o !== e ? (t - o) / (e - o) : 0;
}

function Lr(o, e, t) {
  return (1 - t) * o + t * e;
}

function cm(o, e, t, n) {
  return Lr(o, e, 1 - Math.exp(-t * n));
}

function hm(o, e = 1) {
  return e - Math.abs(ec(o, e * 2) - e);
}

function um(o, e, t) {
  return o <= e
    ? 0
    : o >= t
    ? 1
    : ((o = (o - e) / (t - e)), o * o * (3 - 2 * o));
}

function dm(o, e, t) {
  return o <= e
    ? 0
    : o >= t
    ? 1
    : ((o = (o - e) / (t - e)), o * o * o * (o * (o * 6 - 15) + 10));
}

function fm(o, e) {
  return o + Math.floor(Math.random() * (e - o + 1));
}

function pm(o, e) {
  return o + Math.random() * (e - o);
}

function mm(o) {
  return o * (0.5 - Math.random());
}

function gm(o) {
  o !== void 0 && (_h = o);
  let e = (_h += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}

function _m(o) {
  return o * Cr;
}

function ym(o) {
  return o * Nr;
}

function El(o) {
  return (o & (o - 1)) === 0 && o !== 0;
}

function ed(o) {
  return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
}

function Xo(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}

function xm(o, e, t, n, i) {
  const s = Math.cos,
    r = Math.sin,
    a = s(t / 2),
    c = r(t / 2),
    h = s((e + n) / 2),
    d = r((e + n) / 2),
    l = s((e - n) / 2),
    u = r((e - n) / 2),
    f = s((n - e) / 2),
    g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      o.set(a * d, c * l, c * u, a * h);
      break;
    case "YZY":
      o.set(c * u, a * d, c * l, a * h);
      break;
    case "ZXZ":
      o.set(c * l, c * u, a * d, a * h);
      break;
    case "XZX":
      o.set(a * d, c * g, c * f, a * h);
      break;
    case "YXY":
      o.set(c * f, a * d, c * g, a * h);
      break;
    case "ZYZ":
      o.set(c * g, c * f, a * d, a * h);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}

function vm(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}

function bm(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var wm = Object.freeze({
  __proto__: null,
  DEG2RAD: Cr,
  RAD2DEG: Nr,
  generateUUID: cn,
  clamp: At,
  euclideanModulo: ec,
  mapLinear: am,
  inverseLerp: lm,
  lerp: Lr,
  damp: cm,
  pingpong: hm,
  smoothstep: um,
  smootherstep: dm,
  randInt: fm,
  randFloat: pm,
  randFloatSpread: mm,
  seededRandom: gm,
  degToRad: _m,
  radToDeg: ym,
  isPowerOfTwo: El,
  ceilPowerOfTwo: ed,
  floorPowerOfTwo: Xo,
  setQuaternionFromProperEuler: xm,
  normalize: bm,
  denormalize: vm,
});
class te {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
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
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
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
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      r = this.y - e.y;
    return (this.x = s * n - r * i + e.x), (this.y = s * i + r * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
te.prototype.isVector2 = !0;
class Lt {
  constructor() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, s, r, a, c, h) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[1] = i),
      (d[2] = a),
      (d[3] = t),
      (d[4] = s),
      (d[5] = c),
      (d[6] = n),
      (d[7] = r),
      (d[8] = h),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
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
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      r = n[0],
      a = n[3],
      c = n[6],
      h = n[1],
      d = n[4],
      l = n[7],
      u = n[2],
      f = n[5],
      g = n[8],
      p = i[0],
      m = i[3],
      _ = i[6],
      y = i[1],
      b = i[4],
      w = i[7],
      x = i[2],
      E = i[5],
      T = i[8];
    return (
      (s[0] = r * p + a * y + c * x),
      (s[3] = r * m + a * b + c * E),
      (s[6] = r * _ + a * w + c * T),
      (s[1] = h * p + d * y + l * x),
      (s[4] = h * m + d * b + l * E),
      (s[7] = h * _ + d * w + l * T),
      (s[2] = u * p + f * y + g * x),
      (s[5] = u * m + f * b + g * E),
      (s[8] = u * _ + f * w + g * T),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      r = e[4],
      a = e[5],
      c = e[6],
      h = e[7],
      d = e[8];
    return (
      t * r * d - t * a * h - n * s * d + n * a * c + i * s * h - i * r * c
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
      l = d * r - a * h,
      u = a * c - d * s,
      f = h * s - r * c,
      g = t * l + n * u + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (
      (e[0] = l * p),
      (e[1] = (i * h - d * n) * p),
      (e[2] = (a * n - i * r) * p),
      (e[3] = u * p),
      (e[4] = (d * t - i * c) * p),
      (e[5] = (i * s - a * t) * p),
      (e[6] = f * p),
      (e[7] = (n * c - h * t) * p),
      (e[8] = (r * t - n * s) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, r, a) {
    const c = Math.cos(s),
      h = Math.sin(s);
    return (
      this.set(
        n * c,
        n * h,
        -n * (c * r + h * a) + r + e,
        -i * h,
        i * c,
        -i * (-h * r + c * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      s = i[0],
      r = i[3],
      a = i[6],
      c = i[1],
      h = i[4],
      d = i[7];
    return (
      (i[0] = t * s + n * c),
      (i[3] = t * r + n * h),
      (i[6] = t * a + n * d),
      (i[1] = -n * s + t * c),
      (i[4] = -n * r + t * h),
      (i[7] = -n * a + t * d),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
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
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
Lt.prototype.isMatrix3 = !0;

function td(o) {
  for (let e = o.length - 1; e >= 0; --e) if (o[e] > 65535) return !0;
  return !1;
}

function zr(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}

function Vi(o) {
  return o < 0.04045
    ? o * 0.0773993808
    : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}

function zo(o) {
  return o < 0.0031308 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const Ra = {
    [Wn]: {
      [Hi]: Vi,
    },
    [Hi]: {
      [Wn]: zo,
    },
  },
  pn = {
    legacyMode: !0,
    get workingColorSpace() {
      return Hi;
    },
    set workingColorSpace(o) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (o, e, t) {
      if (this.legacyMode || e === t || !e || !t) return o;
      if (Ra[e] && Ra[e][t] !== void 0) {
        const n = Ra[e][t];
        return (o.r = n(o.r)), (o.g = n(o.g)), (o.b = n(o.b)), o;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (o, e) {
      return this.convert(o, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (o, e) {
      return this.convert(o, e, this.workingColorSpace);
    },
  },
  nd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  vt = {
    r: 0,
    g: 0,
    b: 0,
  },
  mn = {
    h: 0,
    s: 0,
    l: 0,
  },
  io = {
    h: 0,
    s: 0,
    l: 0,
  };

function Pa(o, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? o + (e - o) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? o + (e - o) * 6 * (2 / 3 - t)
      : o
  );
}

function so(o, e) {
  return (e.r = o.r), (e.g = o.g), (e.b = o.b), e;
}
class ie {
  constructor(e, t, n) {
    return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Wn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      pn.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Hi) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      pn.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Hi) {
    if (((e = ec(e, 1)), (t = At(t, 0, 1)), (n = At(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        r = 2 * n - s;
      (this.r = Pa(r, s, e + 1 / 3)),
        (this.g = Pa(r, s, e)),
        (this.b = Pa(r, s, e - 1 / 3));
    }
    return pn.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Wn) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const r = i[1],
        a = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              pn.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              pn.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const c = parseFloat(s[1]) / 360,
              h = parseInt(s[2], 10) / 100,
              d = parseInt(s[3], 10) / 100;
            return n(s[4]), this.setHSL(c, h, d, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        r = s.length;
      if (r === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          pn.toWorkingColorSpace(this, t),
          this
        );
      if (r === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          pn.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Wn) {
    const n = nd[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Vi(e.r)), (this.g = Vi(e.g)), (this.b = Vi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = zo(e.r)), (this.g = zo(e.g)), (this.b = zo(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Wn) {
    return (
      pn.fromWorkingColorSpace(so(this, vt), e),
      (At(vt.r * 255, 0, 255) << 16) ^
        (At(vt.g * 255, 0, 255) << 8) ^
        (At(vt.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Wn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Hi) {
    pn.fromWorkingColorSpace(so(this, vt), t);
    const n = vt.r,
      i = vt.g,
      s = vt.b,
      r = Math.max(n, i, s),
      a = Math.min(n, i, s);
    let c, h;
    const d = (a + r) / 2;
    if (a === r) (c = 0), (h = 0);
    else {
      const l = r - a;
      switch (((h = d <= 0.5 ? l / (r + a) : l / (2 - r - a)), r)) {
        case n:
          c = (i - s) / l + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / l + 2;
          break;
        case s:
          c = (n - i) / l + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = h), (e.l = d), e;
  }
  getRGB(e, t = Hi) {
    return (
      pn.fromWorkingColorSpace(so(this, vt), t),
      (e.r = vt.r),
      (e.g = vt.g),
      (e.b = vt.b),
      e
    );
  }
  getStyle(e = Wn) {
    return (
      pn.fromWorkingColorSpace(so(this, vt), e),
      e !== Wn
        ? `color(${e} ${vt.r} ${vt.g} ${vt.b})`
        : `rgb(${(vt.r * 255) | 0},${(vt.g * 255) | 0},${(vt.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(mn),
      (mn.h += e),
      (mn.s += t),
      (mn.l += n),
      this.setHSL(mn.h, mn.s, mn.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(mn), e.getHSL(io);
    const n = Lr(mn.h, io.h, t),
      i = Lr(mn.s, io.s, t),
      s = Lr(mn.l, io.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
}
ie.NAMES = nd;
ie.prototype.isColor = !0;
ie.prototype.r = 1;
ie.prototype.g = 1;
ie.prototype.b = 1;
let us;
class ns {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      us === void 0 && (us = zr("canvas")),
        (us.width = e.width),
        (us.height = e.height);
      const n = us.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = us);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = zr("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let r = 0; r < s.length; r++) s[r] = Vi(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Vi(t[n] / 255) * 255))
          : (t[n] = Vi(t[n]));
      return {
        data: t,
        width: e.width,
        height: e.height,
      };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class id {
  constructor(e = null) {
    (this.uuid = cn()), (this.data = e), (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = {
        uuid: this.uuid,
        url: "",
      },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let r = 0, a = i.length; r < a; r++)
          i[r].isDataTexture ? s.push(Ia(i[r].image)) : s.push(Ia(i[r]));
      } else s = Ia(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}

function Ia(o) {
  return (typeof HTMLImageElement < "u" && o instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && o instanceof ImageBitmap)
    ? ns.getDataURL(o)
    : o.data
    ? {
        data: Array.prototype.slice.call(o.data),
        width: o.width,
        height: o.height,
        type: o.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
id.prototype.isSource = !0;
let Mm = 0;
class xt extends ts {
  constructor(
    e = xt.DEFAULT_IMAGE,
    t = xt.DEFAULT_MAPPING,
    n = sn,
    i = sn,
    s = It,
    r = ir,
    a = rn,
    c = Ki,
    h = 1,
    d = Zn
  ) {
    super(),
      Object.defineProperty(this, "id", {
        value: Mm++,
      }),
      (this.uuid = cn()),
      (this.name = ""),
      (this.source = new id(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = r),
      (this.anisotropy = h),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new te(0, 0)),
      (this.repeat = new te(1, 1)),
      (this.center = new te(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Lt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = d),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON",
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  transformUv(e) {
    if (this.mapping !== Ku) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ji:
          e.x = e.x - Math.floor(e.x);
          break;
        case sn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Vo:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ji:
          e.y = e.y - Math.floor(e.y);
          break;
        case sn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Vo:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = Ku;
xt.prototype.isTexture = !0;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.x = e), (this.y = t), (this.z = n), (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
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
  setW(e) {
    return (this.w = e), this;
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
      case 3:
        this.w = t;
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
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s),
      (this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s),
      (this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s),
      (this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements,
      h = c[0],
      d = c[4],
      l = c[8],
      u = c[1],
      f = c[5],
      g = c[9],
      p = c[2],
      m = c[6],
      _ = c[10];
    if (
      Math.abs(d - u) < 0.01 &&
      Math.abs(l - p) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(d + u) < 0.1 &&
        Math.abs(l + p) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(h + f + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (h + 1) / 2,
        w = (f + 1) / 2,
        x = (_ + 1) / 2,
        E = (d + u) / 4,
        T = (l + p) / 4,
        R = (g + m) / 4;
      return (
        b > w && b > x
          ? b < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(b)), (i = E / n), (s = T / n))
          : w > x
          ? w < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(w)), (n = E / i), (s = R / i))
          : x < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(x)), (n = T / s), (i = R / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let y = Math.sqrt(
      (m - g) * (m - g) + (l - p) * (l - p) + (u - d) * (u - d)
    );
    return (
      Math.abs(y) < 0.001 && (y = 1),
      (this.x = (m - g) / y),
      (this.y = (l - p) / y),
      (this.z = (u - d) / y),
      (this.w = Math.acos((h + f + _ - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
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
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
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
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
Ke.prototype.isVector4 = !0;
class Zt extends ts {
  constructor(e, t, n = {}) {
    super(),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Ke(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ke(0, 0, e, t));
    const i = {
      width: e,
      height: t,
      depth: 1,
    };
    (this.texture = new xt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : It),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.image = Object.assign({}, e.texture.image)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
Zt.prototype.isWebGLRenderTarget = !0;
class sa extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = bt),
      (this.minFilter = bt),
      (this.wrapR = sn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
sa.prototype.isDataArrayTexture = !0;
class Sm extends Zt {
  constructor(e, t, n) {
    super(e, t),
      (this.depth = n),
      (this.texture = new sa(null, e, t, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
Sm.prototype.isWebGLArrayRenderTarget = !0;
class tc extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.image = {
        data: e,
        width: t,
        height: n,
        depth: i,
      }),
      (this.magFilter = bt),
      (this.minFilter = bt),
      (this.wrapR = sn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
tc.prototype.isData3DTexture = !0;
class Tm extends Zt {
  constructor(e, t, n) {
    super(e, t),
      (this.depth = n),
      (this.texture = new tc(null, e, t, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
Tm.prototype.isWebGL3DRenderTarget = !0;
class Em extends Zt {
  constructor(e, t, n, i = {}) {
    super(e, t, i);
    const s = this.texture;
    this.texture = [];
    for (let r = 0; r < n; r++)
      (this.texture[r] = s.clone()),
        (this.texture[r].isRenderTargetTexture = !0);
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, s = this.texture.length; i < s; i++)
        (this.texture[i].image.width = e),
          (this.texture[i].image.height = t),
          (this.texture[i].image.depth = n);
      this.dispose();
    }
    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
  }
  copy(e) {
    this.dispose(),
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      (this.texture.length = 0);
    for (let t = 0, n = e.texture.length; t < n; t++)
      this.texture[t] = e.texture[t].clone();
    return this;
  }
}
Em.prototype.isWebGLMultipleRenderTargets = !0;
class Ut {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this._x = e), (this._y = t), (this._z = n), (this._w = i);
  }
  static slerp(e, t, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(e, t, i)
    );
  }
  static slerpFlat(e, t, n, i, s, r, a) {
    let c = n[i + 0],
      h = n[i + 1],
      d = n[i + 2],
      l = n[i + 3];
    const u = s[r + 0],
      f = s[r + 1],
      g = s[r + 2],
      p = s[r + 3];
    if (a === 0) {
      (e[t + 0] = c), (e[t + 1] = h), (e[t + 2] = d), (e[t + 3] = l);
      return;
    }
    if (a === 1) {
      (e[t + 0] = u), (e[t + 1] = f), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (l !== p || c !== u || h !== f || d !== g) {
      let m = 1 - a;
      const _ = c * u + h * f + d * g + l * p,
        y = _ >= 0 ? 1 : -1,
        b = 1 - _ * _;
      if (b > Number.EPSILON) {
        const x = Math.sqrt(b),
          E = Math.atan2(x, _ * y);
        (m = Math.sin(m * E) / x), (a = Math.sin(a * E) / x);
      }
      const w = a * y;
      if (
        ((c = c * m + u * w),
        (h = h * m + f * w),
        (d = d * m + g * w),
        (l = l * m + p * w),
        m === 1 - a)
      ) {
        const x = 1 / Math.sqrt(c * c + h * h + d * d + l * l);
        (c *= x), (h *= x), (d *= x), (l *= x);
      }
    }
    (e[t] = c), (e[t + 1] = h), (e[t + 2] = d), (e[t + 3] = l);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const a = n[i],
      c = n[i + 1],
      h = n[i + 2],
      d = n[i + 3],
      l = s[r],
      u = s[r + 1],
      f = s[r + 2],
      g = s[r + 3];
    return (
      (e[t] = a * g + d * l + c * f - h * u),
      (e[t + 1] = c * g + d * u + h * l - a * f),
      (e[t + 2] = h * g + d * f + a * u - c * l),
      (e[t + 3] = d * g - a * l - c * u - h * f),
      e
    );
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
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = e._x,
      i = e._y,
      s = e._z,
      r = e._order,
      a = Math.cos,
      c = Math.sin,
      h = a(n / 2),
      d = a(i / 2),
      l = a(s / 2),
      u = c(n / 2),
      f = c(i / 2),
      g = c(s / 2);
    switch (r) {
      case "XYZ":
        (this._x = u * d * l + h * f * g),
          (this._y = h * f * l - u * d * g),
          (this._z = h * d * g + u * f * l),
          (this._w = h * d * l - u * f * g);
        break;
      case "YXZ":
        (this._x = u * d * l + h * f * g),
          (this._y = h * f * l - u * d * g),
          (this._z = h * d * g - u * f * l),
          (this._w = h * d * l + u * f * g);
        break;
      case "ZXY":
        (this._x = u * d * l - h * f * g),
          (this._y = h * f * l + u * d * g),
          (this._z = h * d * g + u * f * l),
          (this._w = h * d * l - u * f * g);
        break;
      case "ZYX":
        (this._x = u * d * l - h * f * g),
          (this._y = h * f * l + u * d * g),
          (this._z = h * d * g - u * f * l),
          (this._w = h * d * l + u * f * g);
        break;
      case "YZX":
        (this._x = u * d * l + h * f * g),
          (this._y = h * f * l + u * d * g),
          (this._z = h * d * g - u * f * l),
          (this._w = h * d * l - u * f * g);
        break;
      case "XZY":
        (this._x = u * d * l - h * f * g),
          (this._y = h * f * l - u * d * g),
          (this._z = h * d * g + u * f * l),
          (this._w = h * d * l + u * f * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      r = t[1],
      a = t[5],
      c = t[9],
      h = t[2],
      d = t[6],
      l = t[10],
      u = n + a + l;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / f),
        (this._x = (d - c) * f),
        (this._y = (s - h) * f),
        (this._z = (r - i) * f);
    } else if (n > a && n > l) {
      const f = 2 * Math.sqrt(1 + n - a - l);
      (this._w = (d - c) / f),
        (this._x = 0.25 * f),
        (this._y = (i + r) / f),
        (this._z = (s + h) / f);
    } else if (a > l) {
      const f = 2 * Math.sqrt(1 + a - n - l);
      (this._w = (s - h) / f),
        (this._x = (i + r) / f),
        (this._y = 0.25 * f),
        (this._z = (c + d) / f);
    } else {
      const f = 2 * Math.sqrt(1 + l - n - a);
      (this._w = (r - i) / f),
        (this._x = (s + h) / f),
        (this._y = (c + d) / f),
        (this._z = 0.25 * f);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(At(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      r = e._w,
      a = t._x,
      c = t._y,
      h = t._z,
      d = t._w;
    return (
      (this._x = n * d + r * a + i * h - s * c),
      (this._y = i * d + r * c + s * a - n * h),
      (this._z = s * d + r * h + n * c - i * a),
      (this._w = r * d - n * a - i * c - s * h),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      r = this._w;
    let a = r * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = r), (this._x = n), (this._y = i), (this._z = s), this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return (
        (this._w = f * r + t * this._w),
        (this._x = f * n + t * this._x),
        (this._y = f * i + t * this._y),
        (this._z = f * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const h = Math.sqrt(c),
      d = Math.atan2(h, a),
      l = Math.sin((1 - t) * d) / h,
      u = Math.sin(t * d) / h;
    return (
      (this._w = r * l + this._w * u),
      (this._x = n * l + this._x * u),
      (this._y = i * l + this._y * u),
      (this._z = s * l + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}

export { $c, $l, $p, $u, Aa, Ap, At, Bp, Br, Ca, Cp, Cr, Dp, Ea, El, Ep, Fp, Fr, Ge, Gi, Gp, Hp, Hs, Ip, Is, It, Jc, Ji, Jn, Jp, Ju, Kc, Ke, Ki, Kp, La, Lp, Lt, Ml, Mp, No, Np, Nr, Ns, Oo, Op, Or, Pp, Ps, Qc, Ql, Qp, Qu, Rp, Rs, Sa, Sl, Sp, Sr, Ta, Tl, Tp, Up, Ut, Vc, Vo, Vp, Wc, Wo, Wp, Ws, Xc, Xo, Xp, Xs, Xu, Yc, Yi, Yp, Ys, Yu, Zc, Zn, Zp, Zt, Zu, _p, ah, bl, bp, bt, ch, cn, cp, dh, dp, ed, eh, em, es, fh, fp, gh, gp, hh, hp, ia, ie, ih, im, ir, jc, jp, js, ju, kp, lh, mh, mi, mp, na, nh, nm, ns, oh, om, ph, pp, qc, qo, qp, qs, rh, rm, rn, sa, sh, sm, sn, tc, td, te, th, tm, ts, uh, ui, up, vl, vp, wl, wm, wp, xn, xp, xt, yp, zp, zr, zs };
