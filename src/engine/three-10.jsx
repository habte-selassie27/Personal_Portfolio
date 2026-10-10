import { $u, Is, Ke, Lt, No, Or, Ps, Ql, Qp, Ut, Wo, em, ie, ju, qo, te, tm, ts } from "./three-01.jsx";
import { C, _e, dn, is, je, nc, rs, ss } from "./three-02.jsx";
import { Dt, St, Xn, dt, ft, mt, oa, tt, wt } from "./three-03.jsx";
import { lc, rr } from "./three-07.jsx";
import { Kn, cc, da, hn, jo, or, os, yi } from "./three-08.jsx";
import { Bn, Dn, Il, Od, _c, xi } from "./three-09.jsx";
class hv {
  constructor(e, t, n) {
    (this.binding = e), (this.valueSize = n);
    let i, s, r;
    switch (t) {
      case "quaternion":
        (i = this._slerp),
          (s = this._slerpAdditive),
          (r = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(n * 6)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (s = this._select),
          (r = this._setAdditiveIdentityOther),
          (this.buffer = new Array(n * 5));
        break;
      default:
        (i = this._lerp),
          (s = this._lerpAdditive),
          (r = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(n * 5));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = s),
      (this._setIdentity = r),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    const n = this.buffer,
      i = this.valueSize,
      s = e * i + i;
    let r = this.cumulativeWeight;
    if (r === 0) {
      for (let a = 0; a !== i; ++a) n[s + a] = n[a];
      r = t;
    } else {
      r += t;
      const a = t / r;
      this._mixBufferRegion(n, s, 0, a, i);
    }
    this.cumulativeWeight = r;
  }
  accumulateAdditive(e) {
    const t = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(),
      this._mixBufferRegionAdditive(t, i, 0, e, n),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    const t = this.valueSize,
      n = this.buffer,
      i = e * t + t,
      s = this.cumulativeWeight,
      r = this.cumulativeWeightAdditive,
      a = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), s < 1)
    ) {
      const c = t * this._origIndex;
      this._mixBufferRegion(n, i, c, 1 - s, t);
    }
    r > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, h = t + t; c !== h; ++c)
      if (n[c] !== n[c + t]) {
        a.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding,
      t = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, r = i; s !== r; ++s) t[s] = t[i + (s % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, s) {
    if (i >= 0.5) for (let r = 0; r !== s; ++r) e[t + r] = e[n + r];
  }
  _slerp(e, t, n, i) {
    Ut.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const r = this._workIndex * s;
    Ut.multiplyQuaternionsFlat(e, r, e, t, e, n),
      Ut.slerpFlat(e, t, e, t, e, r, i);
  }
  _lerp(e, t, n, i, s) {
    const r = 1 - i;
    for (let a = 0; a !== s; ++a) {
      const c = t + a;
      e[c] = e[c] * r + e[n + a] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let r = 0; r !== s; ++r) {
      const a = t + r;
      e[a] = e[a] + e[n + r] * i;
    }
  }
}
const bc = "\\[\\]\\.:\\/",
  uv = new RegExp("[" + bc + "]", "g"),
  wc = "[^" + bc + "]",
  dv = "[^" + bc.replace("\\.", "") + "]",
  fv = /((?:WC+[\/:])*)/.source.replace("WC", wc),
  pv = /(WCOD+)?/.source.replace("WCOD", dv),
  mv = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", wc),
  gv = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", wc),
  _v = new RegExp("^" + fv + pv + mv + gv + "$"),
  yv = ["material", "materials", "bones"];
class xv {
  constructor(e, t, n) {
    const i = n || Xe.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Xe {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || Xe.parseTrackName(t)),
      (this.node = Xe.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Xe.Composite(e, t, n)
      : new Xe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(uv, "");
  }
  static parseTrackName(e) {
    const t = _v.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      yv.indexOf(s) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = s));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (s) {
          for (let r = 0; r < s.length; r++) {
            const a = s[r];
            if (a.name === t || a.uuid === t) return a;
            const c = n(a.children);
            if (c) return c;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let s = t.propertyIndex;
    if (
      (e ||
        ((e = Xe.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (n) {
      let h = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let d = 0; d < e.length; d++)
            if (e[d].name === h) {
              h = d;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (h !== void 0) {
        if (e[h] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[h];
      }
    }
    const r = e[i];
    if (r === void 0) {
      const h = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          h +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let a = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (a = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
            return;
          }
          e.morphTargetDictionary[s] !== void 0 &&
            (s = e.morphTargetDictionary[s]);
        } else {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
            this
          );
          return;
        }
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = r),
        (this.propertyIndex = s);
    } else
      r.fromArray !== void 0 && r.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = r))
        : Array.isArray(r)
        ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = r))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][a]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Xe.Composite = xv;
Xe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Xe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Xe.prototype.GetterByBindingType = [
  Xe.prototype._getValue_direct,
  Xe.prototype._getValue_array,
  Xe.prototype._getValue_arrayElement,
  Xe.prototype._getValue_toArray,
];
Xe.prototype.SetterByBindingTypeAndVersioning = [
  [
    Xe.prototype._setValue_direct,
    Xe.prototype._setValue_direct_setNeedsUpdate,
    Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_array,
    Xe.prototype._setValue_array_setNeedsUpdate,
    Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_arrayElement,
    Xe.prototype._setValue_arrayElement_setNeedsUpdate,
    Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Xe.prototype._setValue_fromArray,
    Xe.prototype._setValue_fromArray_setNeedsUpdate,
    Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class vv {
  constructor(e, t, n = null, i = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = n),
      (this.blendMode = i);
    const s = t.tracks,
      r = s.length,
      a = new Array(r),
      c = {
        endingStart: Ps,
        endingEnd: Ps,
      };
    for (let h = 0; h !== r; ++h) {
      const d = s[h].createInterpolant(null);
      (a[h] = d), (d.settings = c);
    }
    (this._interpolantSettings = c),
      (this._interpolants = a),
      (this._propertyBindings = new Array(r)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = em),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      this.timeScale !== 0 &&
      this._startTime === null &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if ((e.fadeOut(t), this.fadeIn(t), n)) {
      const i = this._clip.duration,
        s = e._clip.duration,
        r = s / i,
        a = i / s;
      e.warp(1, r, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return (
      e !== null &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer,
      s = i.time,
      r = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null &&
      ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
    const c = a.parameterPositions,
      h = a.sampleValues;
    return (c[0] = s), (c[1] = s + n), (h[0] = e / r), (h[1] = t / r), this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return (
      e !== null &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      if (c < 0 || n === 0) return;
      (this._startTime = null), (t = n * c);
    }
    t *= this._updateTimeScale(e);
    const r = this._updateTime(t),
      a = this._updateWeight(e);
    if (a > 0) {
      const c = this._interpolants,
        h = this._propertyBindings;
      switch (this.blendMode) {
        case $u:
          for (let d = 0, l = c.length; d !== l; ++d)
            c[d].evaluate(r), h[d].accumulateAdditive(a);
          break;
        case Ql:
        default:
          for (let d = 0, l = c.length; d !== l; ++d)
            c[d].evaluate(r), h[d].accumulate(i, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopWarping(),
            t === 0 ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    const t = this._clip.duration,
      n = this.loop;
    let i = this.time + e,
      s = this._loopCount;
    const r = n === No;
    if (e === 0) return s === -1 ? i : r && (s & 1) === 1 ? t - i : i;
    if (n === Qp) {
      s === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (s === -1 &&
          (e >= 0
            ? ((s = 0), this._setEndings(!0, this.repetitions === 0, r))
            : this._setEndings(this.repetitions === 0, !0, r)),
        i >= t || i < 0)
      ) {
        const a = Math.floor(i / t);
        (i -= t * a), (s += Math.abs(a));
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = e > 0 ? t : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (c === 1) {
            const h = e < 0;
            this._setEndings(h, !h, r);
          } else this._setEndings(!1, !1, r);
          (this._loopCount = s),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: a,
            });
        }
      } else this.time = i;
      if (r && (s & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = Is), (i.endingEnd = Is))
      : (e
          ? (i.endingStart = this.zeroSlopeAtStart ? Is : Ps)
          : (i.endingStart = Wo),
        t ? (i.endingEnd = this.zeroSlopeAtEnd ? Is : Ps) : (i.endingEnd = Wo));
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer,
      s = i.time;
    let r = this._weightInterpolant;
    r === null &&
      ((r = i._lendControlInterpolant()), (this._weightInterpolant = r));
    const a = r.parameterPositions,
      c = r.sampleValues;
    return (a[0] = s), (c[0] = t), (a[1] = s + e), (c[1] = n), this;
  }
}
class Yd extends ts {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root,
      i = e._clip.tracks,
      s = i.length,
      r = e._propertyBindings,
      a = e._interpolants,
      c = n.uuid,
      h = this._bindingsByRootAndName;
    let d = h[c];
    d === void 0 && ((d = {}), (h[c] = d));
    for (let l = 0; l !== s; ++l) {
      const u = i[l],
        f = u.name;
      let g = d[f];
      if (g !== void 0) ++g.referenceCount, (r[l] = g);
      else {
        if (((g = r[l]), g !== void 0)) {
          g._cacheIndex === null &&
            (++g.referenceCount, this._addInactiveBinding(g, c, f));
          continue;
        }
        const p = t && t._propertyBindings[l].binding.parsedPath;
        (g = new hv(Xe.create(n, f, p), u.ValueTypeName, u.getValueSize())),
          ++g.referenceCount,
          this._addInactiveBinding(g, c, f),
          (r[l] = g);
      }
      a[l].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid,
          i = e._clip.uuid,
          s = this._actionsByClip[i];
        this._bindAction(e, s && s.knownActions[0]),
          this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 &&
          (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions,
      s = this._actionsByClip;
    let r = s[t];
    if (r === void 0)
      (r = {
        knownActions: [e],
        actionByRoot: {},
      }),
        (e._byClipCacheIndex = 0),
        (s[t] = r);
    else {
      const a = r.knownActions;
      (e._byClipCacheIndex = a.length), a.push(e);
    }
    (e._cacheIndex = i.length), i.push(e), (r.actionByRoot[n] = e);
  }
  _removeInactiveAction(e) {
    const t = this._actions,
      n = t[t.length - 1],
      i = e._cacheIndex;
    (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
    const s = e._clip.uuid,
      r = this._actionsByClip,
      a = r[s],
      c = a.knownActions,
      h = c[c.length - 1],
      d = e._byClipCacheIndex;
    (h._byClipCacheIndex = d),
      (c[d] = h),
      c.pop(),
      (e._byClipCacheIndex = null);
    const l = a.actionByRoot,
      u = (e._localRoot || this._root).uuid;
    delete l[u],
      c.length === 0 && delete r[s],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = this._nActiveActions++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = --this._nActiveActions,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName,
      s = this._bindings;
    let r = i[t];
    r === void 0 && ((r = {}), (i[t] = r)),
      (r[n] = e),
      (e._cacheIndex = s.length),
      s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings,
      n = e.binding,
      i = n.rootNode.uuid,
      s = n.path,
      r = this._bindingsByRootAndName,
      a = r[i],
      c = t[t.length - 1],
      h = e._cacheIndex;
    (c._cacheIndex = h),
      (t[h] = c),
      t.pop(),
      delete a[s],
      Object.keys(a).length === 0 && delete r[i];
  }
  _lendBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = this._nActiveBindings++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = --this._nActiveBindings,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++;
    let n = e[t];
    return (
      n === void 0 &&
        ((n = new Od(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )),
        (n.__cacheIndex = t),
        (e[t] = n)),
      n
    );
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants,
      n = e.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      s = t[i];
    (e.__cacheIndex = i), (t[i] = e), (s.__cacheIndex = n), (t[n] = s);
  }
  clipAction(e, t, n) {
    const i = t || this._root,
      s = i.uuid;
    let r = typeof e == "string" ? Il.findByName(i, e) : e;
    const a = r !== null ? r.uuid : e,
      c = this._actionsByClip[a];
    let h = null;
    if (
      (n === void 0 && (r !== null ? (n = r.blendMode) : (n = Ql)),
      c !== void 0)
    ) {
      const l = c.actionByRoot[s];
      if (l !== void 0 && l.blendMode === n) return l;
      (h = c.knownActions[0]), r === null && (r = h._clip);
    }
    if (r === null) return null;
    const d = new vv(this, r, t, n);
    return this._bindAction(d, h), this._addInactiveAction(d, a, s), d;
  }
  existingAction(e, t) {
    const n = t || this._root,
      i = n.uuid,
      s = typeof e == "string" ? Il.findByName(n, e) : e,
      r = s ? s.uuid : e,
      a = this._actionsByClip[r];
    return (a !== void 0 && a.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const e = this._actions,
      t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions,
      n = this._nActiveActions,
      i = (this.time += e),
      s = Math.sign(e),
      r = (this._accuIndex ^= 1);
    for (let h = 0; h !== n; ++h) t[h]._update(i, e, s, r);
    const a = this._bindings,
      c = this._nActiveBindings;
    for (let h = 0; h !== c; ++h) a[h].apply(r);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions,
      n = e.uuid,
      i = this._actionsByClip,
      s = i[n];
    if (s !== void 0) {
      const r = s.knownActions;
      for (let a = 0, c = r.length; a !== c; ++a) {
        const h = r[a];
        this._deactivateAction(h);
        const d = h._cacheIndex,
          l = t[t.length - 1];
        (h._cacheIndex = null),
          (h._byClipCacheIndex = null),
          (l._cacheIndex = d),
          (t[d] = l),
          t.pop(),
          this._removeInactiveBindingsForAction(h);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid,
      n = this._actionsByClip;
    for (const r in n) {
      const a = n[r].actionByRoot,
        c = a[t];
      c !== void 0 &&
        (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName,
      s = i[t];
    if (s !== void 0)
      for (const r in s) {
        const a = s[r];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
Yd.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class bv extends rr {
  constructor(e, t, n = 1) {
    super(e, t), (this.meshPerAttribute = n);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  clone(e) {
    const t = super.clone(e);
    return (t.meshPerAttribute = this.meshPerAttribute), t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.isInstancedInterleavedBuffer = !0),
      (t.meshPerAttribute = this.meshPerAttribute),
      t
    );
  }
}
bv.prototype.isInstancedInterleavedBuffer = !0;
class wv {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new ss(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new nc()),
      (this.params = {
        Mesh: {},
        Line: {
          threshold: 1,
        },
        LOD: {},
        Points: {
          threshold: 1,
        },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Dl(e, this, n, t), n.sort(bu), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++) Dl(e[i], this, n, t);
    return n.sort(bu), n;
  }
}

function bu(o, e) {
  return o.distance - e.distance;
}

function Dl(o, e, t, n) {
  if ((o.layers.test(e.layers) && o.raycast(e, t), n === !0)) {
    const i = o.children;
    for (let s = 0, r = i.length; s < r; s++) Dl(i[s], e, t, !0);
  }
}
const ci = new C(),
  Fo = new _e(),
  ll = new _e();
class Mv extends da {
  constructor(e) {
    const t = Jd(e),
      n = new tt(),
      i = [],
      s = [],
      r = new ie(0, 0, 1),
      a = new ie(0, 1, 0);
    for (let h = 0; h < t.length; h++) {
      const d = t[h];
      d.parent &&
        d.parent.isBone &&
        (i.push(0, 0, 0),
        i.push(0, 0, 0),
        s.push(r.r, r.g, r.b),
        s.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new mt(i, 3)),
      n.setAttribute("color", new mt(s, 3));
    const c = new os({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0,
    });
    super(n, c),
      (this.type = "SkeletonHelper"),
      (this.isSkeletonHelper = !0),
      (this.root = e),
      (this.bones = t),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(e) {
    const t = this.bones,
      n = this.geometry,
      i = n.getAttribute("position");
    ll.copy(this.root.matrixWorld).invert();
    for (let s = 0, r = 0; s < t.length; s++) {
      const a = t[s];
      a.parent &&
        a.parent.isBone &&
        (Fo.multiplyMatrices(ll, a.matrixWorld),
        ci.setFromMatrixPosition(Fo),
        i.setXYZ(r, ci.x, ci.y, ci.z),
        Fo.multiplyMatrices(ll, a.parent.matrixWorld),
        ci.setFromMatrixPosition(Fo),
        i.setXYZ(r + 1, ci.x, ci.y, ci.z),
        (r += 2));
    }
    (n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(e);
  }
}

function Jd(o) {
  const e = [];
  o.isBone === !0 && e.push(o);
  for (let t = 0; t < o.children.length; t++)
    e.push.apply(e, Jd(o.children[t]));
  return e;
}
class Sv extends da {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    (n = new ie(n)), (i = new ie(i));
    const s = t / 2,
      r = e / t,
      a = e / 2,
      c = [],
      h = [];
    for (let u = 0, f = 0, g = -a; u <= t; u++, g += r) {
      c.push(-a, 0, g, a, 0, g), c.push(g, 0, -a, g, 0, a);
      const p = u === s ? n : i;
      p.toArray(h, f),
        (f += 3),
        p.toArray(h, f),
        (f += 3),
        p.toArray(h, f),
        (f += 3),
        p.toArray(h, f),
        (f += 3);
    }
    const d = new tt();
    d.setAttribute("position", new mt(c, 3)),
      d.setAttribute("color", new mt(h, 3));
    const l = new os({
      vertexColors: !0,
      toneMapped: !1,
    });
    super(d, l), (this.type = "GridHelper");
  }
}
class Tv {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new ie()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(e, t) {
    return (
      (this.currentPath = new jo()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(e, t),
      this
    );
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, r) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, r), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e, t) {
    function n(y) {
      const b = [];
      for (let w = 0, x = y.length; w < x; w++) {
        const E = y[w],
          T = new yi();
        (T.curves = E.curves), b.push(T);
      }
      return b;
    }

    function i(y, b) {
      const w = b.length;
      let x = !1;
      for (let E = w - 1, T = 0; T < w; E = T++) {
        let R = b[E],
          I = b[T],
          B = I.x - R.x,
          v = I.y - R.y;
        if (Math.abs(v) > Number.EPSILON) {
          if (
            (v < 0 && ((R = b[T]), (B = -B), (I = b[E]), (v = -v)),
            y.y < R.y || y.y > I.y)
          )
            continue;
          if (y.y === R.y) {
            if (y.x === R.x) return !0;
          } else {
            const L = v * (y.x - R.x) - B * (y.y - R.y);
            if (L === 0) return !0;
            if (L < 0) continue;
            x = !x;
          }
        } else {
          if (y.y !== R.y) continue;
          if ((I.x <= y.x && y.x <= R.x) || (R.x <= y.x && y.x <= I.x))
            return !0;
        }
      }
      return x;
    }
    const s = Kn.isClockWise,
      r = this.subPaths;
    if (r.length === 0) return [];
    if (t === !0) return n(r);
    let a, c, h;
    const d = [];
    if (r.length === 1)
      return (c = r[0]), (h = new yi()), (h.curves = c.curves), d.push(h), d;
    let l = !s(r[0].getPoints());
    l = e ? !l : l;
    const u = [],
      f = [];
    let g = [],
      p = 0,
      m;
    (f[p] = void 0), (g[p] = []);
    for (let y = 0, b = r.length; y < b; y++)
      (c = r[y]),
        (m = c.getPoints()),
        (a = s(m)),
        (a = e ? !a : a),
        a
          ? (!l && f[p] && p++,
            (f[p] = {
              s: new yi(),
              p: m,
            }),
            (f[p].s.curves = c.curves),
            l && p++,
            (g[p] = []))
          : g[p].push({
              h: c,
              p: m[0],
            });
    if (!f[0]) return n(r);
    if (f.length > 1) {
      let y = !1,
        b = 0;
      for (let w = 0, x = f.length; w < x; w++) u[w] = [];
      for (let w = 0, x = f.length; w < x; w++) {
        const E = g[w];
        for (let T = 0; T < E.length; T++) {
          const R = E[T];
          let I = !0;
          for (let B = 0; B < f.length; B++)
            i(R.p, f[B].p) &&
              (w !== B && b++, I ? ((I = !1), u[B].push(R)) : (y = !0));
          I && u[w].push(R);
        }
      }
      b > 0 && y === !1 && (g = u);
    }
    let _;
    for (let y = 0, b = f.length; y < b; y++) {
      (h = f[y].s), d.push(h), (_ = g[y]);
      for (let w = 0, x = _.length; w < x; w++) h.holes.push(_[w].h);
    }
    return d;
  }
}
const Tn = new Uint32Array(512),
  En = new Uint32Array(512);
for (let o = 0; o < 256; ++o) {
  const e = o - 127;
  e < -27
    ? ((Tn[o] = 0), (Tn[o | 256] = 32768), (En[o] = 24), (En[o | 256] = 24))
    : e < -14
    ? ((Tn[o] = 1024 >> (-e - 14)),
      (Tn[o | 256] = (1024 >> (-e - 14)) | 32768),
      (En[o] = -e - 1),
      (En[o | 256] = -e - 1))
    : e <= 15
    ? ((Tn[o] = (e + 15) << 10),
      (Tn[o | 256] = ((e + 15) << 10) | 32768),
      (En[o] = 13),
      (En[o | 256] = 13))
    : e < 128
    ? ((Tn[o] = 31744), (Tn[o | 256] = 64512), (En[o] = 24), (En[o | 256] = 24))
    : ((Tn[o] = 31744),
      (Tn[o | 256] = 64512),
      (En[o] = 13),
      (En[o | 256] = 13));
}
const Kd = new Uint32Array(2048),
  eo = new Uint32Array(64),
  Ev = new Uint32Array(64);
for (let o = 1; o < 1024; ++o) {
  let e = o << 13,
    t = 0;
  for (; !(e & 8388608); ) (e <<= 1), (t -= 8388608);
  (e &= -8388609), (t += 947912704), (Kd[o] = e | t);
}
for (let o = 1024; o < 2048; ++o) Kd[o] = 939524096 + ((o - 1024) << 13);
for (let o = 1; o < 31; ++o) eo[o] = o << 23;
eo[31] = 1199570944;
eo[32] = 2147483648;
for (let o = 33; o < 63; ++o) eo[o] = 2147483648 + ((o - 32) << 23);
eo[63] = 3347054592;
for (let o = 1; o < 64; ++o) o !== 32 && (Ev[o] = 1024);
hn.create = function (o, e) {
  return (
    console.log("THREE.Curve.create() has been deprecated"),
    (o.prototype = Object.create(hn.prototype)),
    (o.prototype.constructor = o),
    (o.prototype.getPoint = e),
    o
  );
};
jo.prototype.fromPoints = function (o) {
  return (
    console.warn(
      "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
    ),
    this.setFromPoints(o)
  );
};
Sv.prototype.setColors = function () {
  console.error(
    "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
  );
};
Mv.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Bn.prototype.extractUrlBase = function (o) {
  return (
    console.warn(
      "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
    ),
    xi.extractUrlBase(o)
  );
};
Bn.Handlers = {
  add: function () {
    console.error(
      "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
    );
  },
  get: function () {
    console.error(
      "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
    );
  },
};
dn.prototype.center = function (o) {
  return (
    console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(o)
  );
};
dn.prototype.empty = function () {
  return (
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
dn.prototype.isIntersectionBox = function (o) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(o)
  );
};
dn.prototype.isIntersectionSphere = function (o) {
  return (
    console.warn(
      "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(o)
  );
};
dn.prototype.size = function (o) {
  return (
    console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(o)
  );
};
rs.prototype.toVector3 = function () {
  console.error(
    "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
  );
};
is.prototype.empty = function () {
  return (
    console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
  );
};
oa.prototype.setFromMatrix = function (o) {
  return (
    console.warn(
      "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
    ),
    this.setFromProjectionMatrix(o)
  );
};
Lt.prototype.flattenToArrayOffset = function (o, e) {
  return (
    console.warn(
      "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(o, e)
  );
};
Lt.prototype.multiplyVector3 = function (o) {
  return (
    console.warn(
      "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
    ),
    o.applyMatrix3(this)
  );
};
Lt.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
Lt.prototype.applyToBufferAttribute = function (o) {
  return (
    console.warn(
      "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
    ),
    o.applyMatrix3(this)
  );
};
Lt.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
Lt.prototype.getInverse = function (o) {
  return (
    console.warn(
      "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(o).invert()
  );
};
_e.prototype.extractPosition = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
    ),
    this.copyPosition(o)
  );
};
_e.prototype.flattenToArrayOffset = function (o, e) {
  return (
    console.warn(
      "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
    ),
    this.toArray(o, e)
  );
};
_e.prototype.getPosition = function () {
  return (
    console.warn(
      "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
    ),
    new C().setFromMatrixColumn(this, 3)
  );
};
_e.prototype.setRotationFromQuaternion = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
    ),
    this.makeRotationFromQuaternion(o)
  );
};
_e.prototype.multiplyToArray = function () {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
_e.prototype.multiplyVector3 = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    o.applyMatrix4(this)
  );
};
_e.prototype.multiplyVector4 = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    o.applyMatrix4(this)
  );
};
_e.prototype.multiplyVector3Array = function () {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
_e.prototype.rotateAxis = function (o) {
  console.warn(
    "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
  ),
    o.transformDirection(this);
};
_e.prototype.crossVector = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
    ),
    o.applyMatrix4(this)
  );
};
_e.prototype.translate = function () {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
_e.prototype.rotateX = function () {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
_e.prototype.rotateY = function () {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
_e.prototype.rotateZ = function () {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
_e.prototype.rotateByAxis = function () {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
_e.prototype.applyToBufferAttribute = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
    ),
    o.applyMatrix4(this)
  );
};
_e.prototype.applyToVector3Array = function () {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
_e.prototype.makeFrustum = function (o, e, t, n, i, s) {
  return (
    console.warn(
      "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
    ),
    this.makePerspective(o, e, n, t, i, s)
  );
};
_e.prototype.getInverse = function (o) {
  return (
    console.warn(
      "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
    ),
    this.copy(o).invert()
  );
};
Xn.prototype.isIntersectionLine = function (o) {
  return (
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
    ),
    this.intersectsLine(o)
  );
};
Ut.prototype.multiplyVector3 = function (o) {
  return (
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
    ),
    o.applyQuaternion(this)
  );
};
Ut.prototype.inverse = function () {
  return (
    console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
  );
};
ss.prototype.isIntersectionBox = function (o) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
    ),
    this.intersectsBox(o)
  );
};
ss.prototype.isIntersectionPlane = function (o) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
    ),
    this.intersectsPlane(o)
  );
};
ss.prototype.isIntersectionSphere = function (o) {
  return (
    console.warn(
      "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
    ),
    this.intersectsSphere(o)
  );
};
wt.prototype.area = function () {
  return (
    console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
  );
};
wt.prototype.barycoordFromPoint = function (o, e) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    this.getBarycoord(o, e)
  );
};
wt.prototype.midpoint = function (o) {
  return (
    console.warn(
      "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
    ),
    this.getMidpoint(o)
  );
};
wt.prototypenormal = function (o) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(o)
  );
};
wt.prototype.plane = function (o) {
  return (
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(o)
  );
};
wt.barycoordFromPoint = function (o, e, t, n, i) {
  return (
    console.warn(
      "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
    ),
    wt.getBarycoord(o, e, t, n, i)
  );
};
wt.normal = function (o, e, t, n) {
  return (
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    wt.getNormal(o, e, t, n)
  );
};
yi.prototype.extractAllPoints = function (o) {
  return (
    console.warn(
      "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
    ),
    this.extractPoints(o)
  );
};
yi.prototype.extrude = function (o) {
  return (
    console.warn(
      "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
    ),
    new or(this, o)
  );
};
yi.prototype.makeGeometry = function (o) {
  return (
    console.warn(
      "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
    ),
    new _c(this, o)
  );
};
te.prototype.fromAttribute = function (o, e, t) {
  return (
    console.warn(
      "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(o, e, t)
  );
};
te.prototype.distanceToManhattan = function (o) {
  return (
    console.warn(
      "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(o)
  );
};
te.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
C.prototype.setEulerFromRotationMatrix = function () {
  console.error(
    "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
  );
};
C.prototype.setEulerFromQuaternion = function () {
  console.error(
    "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
  );
};
C.prototype.getPositionFromMatrix = function (o) {
  return (
    console.warn(
      "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
    ),
    this.setFromMatrixPosition(o)
  );
};
C.prototype.getScaleFromMatrix = function (o) {
  return (
    console.warn(
      "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
    ),
    this.setFromMatrixScale(o)
  );
};
C.prototype.getColumnFromMatrix = function (o, e) {
  return (
    console.warn(
      "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
    ),
    this.setFromMatrixColumn(e, o)
  );
};
C.prototype.applyProjection = function (o) {
  return (
    console.warn(
      "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
    ),
    this.applyMatrix4(o)
  );
};
C.prototype.fromAttribute = function (o, e, t) {
  return (
    console.warn(
      "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(o, e, t)
  );
};
C.prototype.distanceToManhattan = function (o) {
  return (
    console.warn(
      "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
    ),
    this.manhattanDistanceTo(o)
  );
};
C.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
Ke.prototype.fromAttribute = function (o, e, t) {
  return (
    console.warn(
      "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
    ),
    this.fromBufferAttribute(o, e, t)
  );
};
Ke.prototype.lengthManhattan = function () {
  return (
    console.warn(
      "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
    ),
    this.manhattanLength()
  );
};
je.prototype.getChildByName = function (o) {
  return (
    console.warn(
      "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
    ),
    this.getObjectByName(o)
  );
};
je.prototype.renderDepth = function () {
  console.warn(
    "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
  );
};
je.prototype.translate = function (o, e) {
  return (
    console.warn(
      "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
    ),
    this.translateOnAxis(e, o)
  );
};
je.prototype.getWorldRotation = function () {
  console.error(
    "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
  );
};
je.prototype.applyMatrix = function (o) {
  return (
    console.warn(
      "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(o)
  );
};
Object.defineProperties(je.prototype, {
  eulerOrder: {
    get: function () {
      return (
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order
      );
    },
    set: function (o) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        (this.rotation.order = o);
    },
  },
  useQuaternion: {
    get: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
    set: function () {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
  },
});
St.prototype.setDrawMode = function () {
  console.error(
    "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
  );
};
Object.defineProperties(St.prototype, {
  drawMode: {
    get: function () {
      return (
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
        ),
        tm
      );
    },
    set: function () {
      console.error(
        "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    },
  },
});
cc.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Dt.prototype.setLens = function (o, e) {
  console.warn(
    "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
  ),
    e !== void 0 && (this.filmGauge = e),
    this.setFocalLength(o);
};
Object.defineProperties(Dn.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    },
  },
  shadowCameraFov: {
    set: function (o) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
        (this.shadow.camera.fov = o);
    },
  },
  shadowCameraLeft: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
      ),
        (this.shadow.camera.left = o);
    },
  },
  shadowCameraRight: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
      ),
        (this.shadow.camera.right = o);
    },
  },
  shadowCameraTop: {
    set: function (o) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
        (this.shadow.camera.top = o);
    },
  },
  shadowCameraBottom: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
      ),
        (this.shadow.camera.bottom = o);
    },
  },
  shadowCameraNear: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
      ),
        (this.shadow.camera.near = o);
    },
  },
  shadowCameraFar: {
    set: function (o) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
        (this.shadow.camera.far = o);
    },
  },
  shadowCameraVisible: {
    set: function () {
      console.warn(
        "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
      );
    },
  },
  shadowBias: {
    set: function (o) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
        (this.shadow.bias = o);
    },
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    },
  },
  shadowMapWidth: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
      ),
        (this.shadow.mapSize.width = o);
    },
  },
  shadowMapHeight: {
    set: function (o) {
      console.warn(
        "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
      ),
        (this.shadow.mapSize.height = o);
    },
  },
});
Object.defineProperties(ft.prototype, {
  length: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
        ),
        this.array.length
      );
    },
  },
  dynamic: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        ),
        this.usage === qo
      );
    },
    set: function () {
      console.warn(
        "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
      ),
        this.setUsage(qo);
    },
  },
});
ft.prototype.setDynamic = function (o) {
  return (
    console.warn(
      "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(o === !0 ? qo : Or),
    this
  );
};
(ft.prototype.copyIndicesArray = function () {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}),
  (ft.prototype.setArray = function () {
    console.error(
      "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
    );
  });
tt.prototype.addIndex = function (o) {
  console.warn(
    "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
  ),
    this.setIndex(o);
};
tt.prototype.addAttribute = function (o, e) {
  return (
    console.warn(
      "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
    ),
    !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute)
      ? (console.warn(
          "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
        ),
        this.setAttribute(o, new ft(arguments[1], arguments[2])))
      : o === "index"
      ? (console.warn(
          "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
        ),
        this.setIndex(e),
        this)
      : this.setAttribute(o, e)
  );
};
tt.prototype.addDrawCall = function (o, e, t) {
  t !== void 0 &&
    console.warn(
      "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
    ),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(o, e);
};
tt.prototype.clearDrawCalls = function () {
  console.warn(
    "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
  ),
    this.clearGroups();
};
tt.prototype.computeOffsets = function () {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
tt.prototype.removeAttribute = function (o) {
  return (
    console.warn(
      "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
    ),
    this.deleteAttribute(o)
  );
};
tt.prototype.applyMatrix = function (o) {
  return (
    console.warn(
      "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
    ),
    this.applyMatrix4(o)
  );
};
Object.defineProperties(tt.prototype, {
  drawcalls: {
    get: function () {
      return (
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
  offsets: {
    get: function () {
      return (
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups."
        ),
        this.groups
      );
    },
  },
});
rr.prototype.setDynamic = function (o) {
  return (
    console.warn(
      "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
    ),
    this.setUsage(o === !0 ? qo : Or),
    this
  );
};
rr.prototype.setArray = function () {
  console.error(
    "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
  );
};
or.prototype.getArrays = function () {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
or.prototype.addShapeList = function () {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
or.prototype.addShape = function () {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
lc.prototype.dispose = function () {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(dt.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
  },
  wrapRGB: {
    get: function () {
      return (
        console.warn("THREE.Material: .wrapRGB has been removed."), new ie()
      );
    },
  },
  shading: {
    get: function () {
      console.error(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      );
    },
    set: function (o) {
      console.warn(
        "THREE." +
          this.type +
          ": .shading has been removed. Use the boolean .flatShading instead."
      ),
        (this.flatShading = o === ju);
    },
  },
  stencilMask: {
    get: function () {
      return (
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        ),
        this.stencilFuncMask
      );
    },
    set: function (o) {
      console.warn(
        "THREE." +
          this.type +
          ": .stencilMask has been removed. Use .stencilFuncMask instead."
      ),
        (this.stencilFuncMask = o);
    },
  },
  vertexTangents: {
    get: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      );
    },
    set: function () {
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      );
    },
  },
});

export { Tv, Xe, Yd, wv };
