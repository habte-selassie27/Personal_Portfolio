import { Ap, Cp, El, Ep, Fr, Ge, Gi, Hs, It, Ji, Jn, Ju, Ke, Ki, Lp, Ml, Mp, Ns, Oo, Rp, Rs, Sl, Sp, Sr, Tl, Tp, Vc, Vo, Wc, Ws, Xc, Xo, Xu, Yc, Yi, Yu, Zn, Zt, Zu, _p, bp, bt, cp, dp, es, fp, gp, hp, ia, ie, im, ir, jc, js, mi, mp, ns, pp, qc, rm, rn, sm, sn, te, ui, vl, vp, wp, xn, xp, yp, zr, zs } from "./three-01.jsx";
import { C, _e, nc } from "./three-02.jsx";
import { Nm, Ot, St, dt, ft, oa, tt } from "./three-03.jsx";
import { An, ae } from "./three-04.jsx";
import { Hy } from "./three-05.jsx";
let Uy = 0;
class Gy {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      r = this._getShaderCacheForMaterial(e);
    return (
      r.has(i) === !1 && (r.add(i), i.usedTimes++),
      r.has(s) === !1 && (r.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return t.has(e) === !1 && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (t.has(e) === !1) {
      const n = new Vy(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class Vy {
  constructor(e) {
    (this.id = Uy++), (this.code = e), (this.usedTimes = 0);
  }
}

function Wy(o, e, t, n, i, s, r) {
  const a = new nc(),
    c = new Gy(),
    h = [],
    d = i.isWebGL2,
    l = i.logarithmicDepthBuffer,
    u = i.floatVertexTextures,
    f = i.maxVertexUniforms,
    g = i.vertexTextures;
  let p = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };

  function _(v) {
    const U = v.skeleton.bones;
    if (u) return 1024;
    {
      const O = Math.floor((f - 20) / 4),
        N = Math.min(O, U.length);
      return N < U.length
        ? (console.warn(
            "THREE.WebGLRenderer: Skeleton has " +
              U.length +
              " bones. This GPU supports " +
              N +
              "."
          ),
          0)
        : N;
    }
  }

  function y(v, L, U, D, O) {
    const N = D.fog,
      H = O.geometry,
      F = v.isMeshStandardMaterial ? D.environment : null,
      X = (v.isMeshStandardMaterial ? t : e).get(v.envMap || F),
      Z = X && X.mapping === ia ? X.image.height : null,
      Q = m[v.type],
      $ = O.isSkinnedMesh ? _(O) : 0;
    v.precision !== null &&
      ((p = i.getMaxPrecision(v.precision)),
      p !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          p,
          "instead."
        ));
    const ue =
        H.morphAttributes.position ||
        H.morphAttributes.normal ||
        H.morphAttributes.color,
      Me = ue !== void 0 ? ue.length : 0;
    let xe = 0;
    H.morphAttributes.position !== void 0 && (xe = 1),
      H.morphAttributes.normal !== void 0 && (xe = 2),
      H.morphAttributes.color !== void 0 && (xe = 3);
    let Y, We, Re, Pe;
    if (Q) {
      const ne = An[Q];
      (Y = ne.vertexShader), (We = ne.fragmentShader);
    } else
      (Y = v.vertexShader),
        (We = v.fragmentShader),
        c.update(v),
        (Re = c.getVertexShaderID(v)),
        (Pe = c.getFragmentShaderID(v));
    const se = o.getRenderTarget(),
      Be = v.alphaTest > 0,
      j = v.clearcoat > 0;
    return {
      isWebGL2: d,
      shaderID: Q,
      shaderName: v.type,
      vertexShader: Y,
      fragmentShader: We,
      defines: v.defines,
      customVertexShaderID: Re,
      customFragmentShaderID: Pe,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      instancing: O.isInstancedMesh === !0,
      instancingColor: O.isInstancedMesh === !0 && O.instanceColor !== null,
      supportsVertexTextures: g,
      outputEncoding:
        se === null
          ? o.outputEncoding
          : se.isXRRenderTarget === !0
          ? se.texture.encoding
          : Zn,
      map: !!v.map,
      matcap: !!v.matcap,
      envMap: !!X,
      envMapMode: X && X.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!v.lightMap,
      aoMap: !!v.aoMap,
      emissiveMap: !!v.emissiveMap,
      bumpMap: !!v.bumpMap,
      normalMap: !!v.normalMap,
      objectSpaceNormalMap: v.normalMapType === rm,
      tangentSpaceNormalMap: v.normalMapType === es,
      decodeVideoTexture:
        !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Ge,
      clearcoat: j,
      clearcoatMap: j && !!v.clearcoatMap,
      clearcoatRoughnessMap: j && !!v.clearcoatRoughnessMap,
      clearcoatNormalMap: j && !!v.clearcoatNormalMap,
      displacementMap: !!v.displacementMap,
      roughnessMap: !!v.roughnessMap,
      metalnessMap: !!v.metalnessMap,
      specularMap: !!v.specularMap,
      specularIntensityMap: !!v.specularIntensityMap,
      specularColorMap: !!v.specularColorMap,
      opaque: v.transparent === !1 && v.blending === Ns,
      alphaMap: !!v.alphaMap,
      alphaTest: Be,
      gradientMap: !!v.gradientMap,
      sheen: v.sheen > 0,
      sheenColorMap: !!v.sheenColorMap,
      sheenRoughnessMap: !!v.sheenRoughnessMap,
      transmission: v.transmission > 0,
      transmissionMap: !!v.transmissionMap,
      thicknessMap: !!v.thicknessMap,
      combine: v.combine,
      vertexTangents: !!v.normalMap && !!H.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!H.attributes.color &&
        H.attributes.color.itemSize === 4,
      vertexUvs:
        !!v.map ||
        !!v.bumpMap ||
        !!v.normalMap ||
        !!v.specularMap ||
        !!v.alphaMap ||
        !!v.emissiveMap ||
        !!v.roughnessMap ||
        !!v.metalnessMap ||
        !!v.clearcoatMap ||
        !!v.clearcoatRoughnessMap ||
        !!v.clearcoatNormalMap ||
        !!v.displacementMap ||
        !!v.transmissionMap ||
        !!v.thicknessMap ||
        !!v.specularIntensityMap ||
        !!v.specularColorMap ||
        !!v.sheenColorMap ||
        !!v.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          v.map ||
          v.bumpMap ||
          v.normalMap ||
          v.specularMap ||
          v.alphaMap ||
          v.emissiveMap ||
          v.roughnessMap ||
          v.metalnessMap ||
          v.clearcoatNormalMap ||
          v.transmission > 0 ||
          v.transmissionMap ||
          v.thicknessMap ||
          v.specularIntensityMap ||
          v.specularColorMap ||
          v.sheen > 0 ||
          v.sheenColorMap ||
          v.sheenRoughnessMap
        ) && !!v.displacementMap,
      fog: !!N,
      useFog: v.fog,
      fogExp2: N && N.isFogExp2,
      flatShading: !!v.flatShading,
      sizeAttenuation: v.sizeAttenuation,
      logarithmicDepthBuffer: l,
      skinning: O.isSkinnedMesh === !0 && $ > 0,
      maxBones: $,
      useVertexTexture: u,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: Me,
      morphTextureStride: xe,
      numDirLights: L.directional.length,
      numPointLights: L.point.length,
      numSpotLights: L.spot.length,
      numRectAreaLights: L.rectArea.length,
      numHemiLights: L.hemi.length,
      numDirLightShadows: L.directionalShadowMap.length,
      numPointLightShadows: L.pointShadowMap.length,
      numSpotLightShadows: L.spotShadowMap.length,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: o.shadowMap.enabled && U.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: v.toneMapped ? o.toneMapping : Jn,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === Yi,
      flipSided: v.side === xn,
      depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: v.extensions && v.extensions.derivatives,
      extensionFragDepth: v.extensions && v.extensions.fragDepth,
      extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
      extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: d || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: d || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: d || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
  }

  function b(v) {
    const L = [];
    if (
      (v.shaderID
        ? L.push(v.shaderID)
        : (L.push(v.customVertexShaderID), L.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const U in v.defines) L.push(U), L.push(v.defines[U]);
    return (
      v.isRawShaderMaterial === !1 &&
        (w(L, v), x(L, v), L.push(o.outputEncoding)),
      L.push(v.customProgramCacheKey),
      L.join()
    );
  }

  function w(v, L) {
    v.push(L.precision),
      v.push(L.outputEncoding),
      v.push(L.envMapMode),
      v.push(L.envMapCubeUVHeight),
      v.push(L.combine),
      v.push(L.vertexUvs),
      v.push(L.fogExp2),
      v.push(L.sizeAttenuation),
      v.push(L.maxBones),
      v.push(L.morphTargetsCount),
      v.push(L.morphAttributeCount),
      v.push(L.numDirLights),
      v.push(L.numPointLights),
      v.push(L.numSpotLights),
      v.push(L.numHemiLights),
      v.push(L.numRectAreaLights),
      v.push(L.numDirLightShadows),
      v.push(L.numPointLightShadows),
      v.push(L.numSpotLightShadows),
      v.push(L.shadowMapType),
      v.push(L.toneMapping),
      v.push(L.numClippingPlanes),
      v.push(L.numClipIntersection);
  }

  function x(v, L) {
    a.disableAll(),
      L.isWebGL2 && a.enable(0),
      L.supportsVertexTextures && a.enable(1),
      L.instancing && a.enable(2),
      L.instancingColor && a.enable(3),
      L.map && a.enable(4),
      L.matcap && a.enable(5),
      L.envMap && a.enable(6),
      L.lightMap && a.enable(7),
      L.aoMap && a.enable(8),
      L.emissiveMap && a.enable(9),
      L.bumpMap && a.enable(10),
      L.normalMap && a.enable(11),
      L.objectSpaceNormalMap && a.enable(12),
      L.tangentSpaceNormalMap && a.enable(13),
      L.clearcoat && a.enable(14),
      L.clearcoatMap && a.enable(15),
      L.clearcoatRoughnessMap && a.enable(16),
      L.clearcoatNormalMap && a.enable(17),
      L.displacementMap && a.enable(18),
      L.specularMap && a.enable(19),
      L.roughnessMap && a.enable(20),
      L.metalnessMap && a.enable(21),
      L.gradientMap && a.enable(22),
      L.alphaMap && a.enable(23),
      L.alphaTest && a.enable(24),
      L.vertexColors && a.enable(25),
      L.vertexAlphas && a.enable(26),
      L.vertexUvs && a.enable(27),
      L.vertexTangents && a.enable(28),
      L.uvsVertexOnly && a.enable(29),
      L.fog && a.enable(30),
      v.push(a.mask),
      a.disableAll(),
      L.useFog && a.enable(0),
      L.flatShading && a.enable(1),
      L.logarithmicDepthBuffer && a.enable(2),
      L.skinning && a.enable(3),
      L.useVertexTexture && a.enable(4),
      L.morphTargets && a.enable(5),
      L.morphNormals && a.enable(6),
      L.morphColors && a.enable(7),
      L.premultipliedAlpha && a.enable(8),
      L.shadowMapEnabled && a.enable(9),
      L.physicallyCorrectLights && a.enable(10),
      L.doubleSided && a.enable(11),
      L.flipSided && a.enable(12),
      L.depthPacking && a.enable(13),
      L.dithering && a.enable(14),
      L.specularIntensityMap && a.enable(15),
      L.specularColorMap && a.enable(16),
      L.transmission && a.enable(17),
      L.transmissionMap && a.enable(18),
      L.thicknessMap && a.enable(19),
      L.sheen && a.enable(20),
      L.sheenColorMap && a.enable(21),
      L.sheenRoughnessMap && a.enable(22),
      L.decodeVideoTexture && a.enable(23),
      L.opaque && a.enable(24),
      v.push(a.mask);
  }

  function E(v) {
    const L = m[v.type];
    let U;
    if (L) {
      const D = An[L];
      U = Nm.clone(D.uniforms);
    } else U = v.uniforms;
    return U;
  }

  function T(v, L) {
    let U;
    for (let D = 0, O = h.length; D < O; D++) {
      const N = h[D];
      if (N.cacheKey === L) {
        (U = N), ++U.usedTimes;
        break;
      }
    }
    return U === void 0 && ((U = new Hy(o, L, v, s)), h.push(U)), U;
  }

  function R(v) {
    if (--v.usedTimes === 0) {
      const L = h.indexOf(v);
      (h[L] = h[h.length - 1]), h.pop(), v.destroy();
    }
  }

  function I(v) {
    c.remove(v);
  }

  function B() {
    c.dispose();
  }
  return {
    getParameters: y,
    getProgramCacheKey: b,
    getUniforms: E,
    acquireProgram: T,
    releaseProgram: R,
    releaseShaderCache: I,
    programs: h,
    dispose: B,
  };
}

function qy() {
  let o = new WeakMap();

  function e(s) {
    let r = o.get(s);
    return r === void 0 && ((r = {}), o.set(s, r)), r;
  }

  function t(s) {
    o.delete(s);
  }

  function n(s, r, a) {
    o.get(s)[r] = a;
  }

  function i() {
    o = new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i,
  };
}

function Xy(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.material.id !== e.material.id
    ? o.material.id - e.material.id
    : o.z !== e.z
    ? o.z - e.z
    : o.id - e.id;
}

function Yh(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.z !== e.z
    ? e.z - o.z
    : o.id - e.id;
}

function Jh() {
  const o = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];

  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }

  function r(l, u, f, g, p, m) {
    let _ = o[e];
    return (
      _ === void 0
        ? ((_ = {
            id: l.id,
            object: l,
            geometry: u,
            material: f,
            groupOrder: g,
            renderOrder: l.renderOrder,
            z: p,
            group: m,
          }),
          (o[e] = _))
        : ((_.id = l.id),
          (_.object = l),
          (_.geometry = u),
          (_.material = f),
          (_.groupOrder = g),
          (_.renderOrder = l.renderOrder),
          (_.z = p),
          (_.group = m)),
      e++,
      _
    );
  }

  function a(l, u, f, g, p, m) {
    const _ = r(l, u, f, g, p, m);
    f.transmission > 0
      ? n.push(_)
      : f.transparent === !0
      ? i.push(_)
      : t.push(_);
  }

  function c(l, u, f, g, p, m) {
    const _ = r(l, u, f, g, p, m);
    f.transmission > 0
      ? n.unshift(_)
      : f.transparent === !0
      ? i.unshift(_)
      : t.unshift(_);
  }

  function h(l, u) {
    t.length > 1 && t.sort(l || Xy),
      n.length > 1 && n.sort(u || Yh),
      i.length > 1 && i.sort(u || Yh);
  }

  function d() {
    for (let l = e, u = o.length; l < u; l++) {
      const f = o[l];
      if (f.id === null) break;
      (f.id = null),
        (f.object = null),
        (f.geometry = null),
        (f.material = null),
        (f.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: d,
    sort: h,
  };
}

function jy() {
  let o = new WeakMap();

  function e(n, i) {
    let s;
    return (
      o.has(n) === !1
        ? ((s = new Jh()), o.set(n, [s]))
        : i >= o.get(n).length
        ? ((s = new Jh()), o.get(n).push(s))
        : (s = o.get(n)[i]),
      s
    );
  }

  function t() {
    o = new WeakMap();
  }
  return {
    get: e,
    dispose: t,
  };
}

function Yy() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new C(),
            color: new ie(),
          };
          break;
        case "SpotLight":
          t = {
            position: new C(),
            direction: new C(),
            color: new ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = {
            position: new C(),
            color: new ie(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new C(),
            skyColor: new ie(),
            groundColor: new ie(),
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ie(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C(),
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}

function Jy() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}
let Ky = 0;

function Zy(o, e) {
  return (e.castShadow ? 1 : 0) - (o.castShadow ? 1 : 0);
}

function $y(o, e) {
  const t = new Yy(),
    n = Jy(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let d = 0; d < 9; d++) i.probe.push(new C());
  const s = new C(),
    r = new _e(),
    a = new _e();

  function c(d, l) {
    let u = 0,
      f = 0,
      g = 0;
    for (let I = 0; I < 9; I++) i.probe[I].set(0, 0, 0);
    let p = 0,
      m = 0,
      _ = 0,
      y = 0,
      b = 0,
      w = 0,
      x = 0,
      E = 0;
    d.sort(Zy);
    const T = l !== !0 ? Math.PI : 1;
    for (let I = 0, B = d.length; I < B; I++) {
      const v = d[I],
        L = v.color,
        U = v.intensity,
        D = v.distance,
        O = v.shadow && v.shadow.map ? v.shadow.map.texture : null;
      if (v.isAmbientLight)
        (u += L.r * U * T), (f += L.g * U * T), (g += L.b * U * T);
      else if (v.isLightProbe)
        for (let N = 0; N < 9; N++)
          i.probe[N].addScaledVector(v.sh.coefficients[N], U);
      else if (v.isDirectionalLight) {
        const N = t.get(v);
        if (
          (N.color.copy(v.color).multiplyScalar(v.intensity * T), v.castShadow)
        ) {
          const H = v.shadow,
            F = n.get(v);
          (F.shadowBias = H.bias),
            (F.shadowNormalBias = H.normalBias),
            (F.shadowRadius = H.radius),
            (F.shadowMapSize = H.mapSize),
            (i.directionalShadow[p] = F),
            (i.directionalShadowMap[p] = O),
            (i.directionalShadowMatrix[p] = v.shadow.matrix),
            w++;
        }
        (i.directional[p] = N), p++;
      } else if (v.isSpotLight) {
        const N = t.get(v);
        if (
          (N.position.setFromMatrixPosition(v.matrixWorld),
          N.color.copy(L).multiplyScalar(U * T),
          (N.distance = D),
          (N.coneCos = Math.cos(v.angle)),
          (N.penumbraCos = Math.cos(v.angle * (1 - v.penumbra))),
          (N.decay = v.decay),
          v.castShadow)
        ) {
          const H = v.shadow,
            F = n.get(v);
          (F.shadowBias = H.bias),
            (F.shadowNormalBias = H.normalBias),
            (F.shadowRadius = H.radius),
            (F.shadowMapSize = H.mapSize),
            (i.spotShadow[_] = F),
            (i.spotShadowMap[_] = O),
            (i.spotShadowMatrix[_] = v.shadow.matrix),
            E++;
        }
        (i.spot[_] = N), _++;
      } else if (v.isRectAreaLight) {
        const N = t.get(v);
        N.color.copy(L).multiplyScalar(U),
          N.halfWidth.set(v.width * 0.5, 0, 0),
          N.halfHeight.set(0, v.height * 0.5, 0),
          (i.rectArea[y] = N),
          y++;
      } else if (v.isPointLight) {
        const N = t.get(v);
        if (
          (N.color.copy(v.color).multiplyScalar(v.intensity * T),
          (N.distance = v.distance),
          (N.decay = v.decay),
          v.castShadow)
        ) {
          const H = v.shadow,
            F = n.get(v);
          (F.shadowBias = H.bias),
            (F.shadowNormalBias = H.normalBias),
            (F.shadowRadius = H.radius),
            (F.shadowMapSize = H.mapSize),
            (F.shadowCameraNear = H.camera.near),
            (F.shadowCameraFar = H.camera.far),
            (i.pointShadow[m] = F),
            (i.pointShadowMap[m] = O),
            (i.pointShadowMatrix[m] = v.shadow.matrix),
            x++;
        }
        (i.point[m] = N), m++;
      } else if (v.isHemisphereLight) {
        const N = t.get(v);
        N.skyColor.copy(v.color).multiplyScalar(U * T),
          N.groundColor.copy(v.groundColor).multiplyScalar(U * T),
          (i.hemi[b] = N),
          b++;
      }
    }
    y > 0 &&
      (e.isWebGL2 || o.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ae.LTC_FLOAT_1), (i.rectAreaLTC2 = ae.LTC_FLOAT_2))
        : o.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ae.LTC_HALF_1), (i.rectAreaLTC2 = ae.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = u),
      (i.ambient[1] = f),
      (i.ambient[2] = g);
    const R = i.hash;
    (R.directionalLength !== p ||
      R.pointLength !== m ||
      R.spotLength !== _ ||
      R.rectAreaLength !== y ||
      R.hemiLength !== b ||
      R.numDirectionalShadows !== w ||
      R.numPointShadows !== x ||
      R.numSpotShadows !== E) &&
      ((i.directional.length = p),
      (i.spot.length = _),
      (i.rectArea.length = y),
      (i.point.length = m),
      (i.hemi.length = b),
      (i.directionalShadow.length = w),
      (i.directionalShadowMap.length = w),
      (i.pointShadow.length = x),
      (i.pointShadowMap.length = x),
      (i.spotShadow.length = E),
      (i.spotShadowMap.length = E),
      (i.directionalShadowMatrix.length = w),
      (i.pointShadowMatrix.length = x),
      (i.spotShadowMatrix.length = E),
      (R.directionalLength = p),
      (R.pointLength = m),
      (R.spotLength = _),
      (R.rectAreaLength = y),
      (R.hemiLength = b),
      (R.numDirectionalShadows = w),
      (R.numPointShadows = x),
      (R.numSpotShadows = E),
      (i.version = Ky++));
  }

  function h(d, l) {
    let u = 0,
      f = 0,
      g = 0,
      p = 0,
      m = 0;
    const _ = l.matrixWorldInverse;
    for (let y = 0, b = d.length; y < b; y++) {
      const w = d[y];
      if (w.isDirectionalLight) {
        const x = i.directional[u];
        x.direction.setFromMatrixPosition(w.matrixWorld),
          s.setFromMatrixPosition(w.target.matrixWorld),
          x.direction.sub(s),
          x.direction.transformDirection(_),
          u++;
      } else if (w.isSpotLight) {
        const x = i.spot[g];
        x.position.setFromMatrixPosition(w.matrixWorld),
          x.position.applyMatrix4(_),
          x.direction.setFromMatrixPosition(w.matrixWorld),
          s.setFromMatrixPosition(w.target.matrixWorld),
          x.direction.sub(s),
          x.direction.transformDirection(_),
          g++;
      } else if (w.isRectAreaLight) {
        const x = i.rectArea[p];
        x.position.setFromMatrixPosition(w.matrixWorld),
          x.position.applyMatrix4(_),
          a.identity(),
          r.copy(w.matrixWorld),
          r.premultiply(_),
          a.extractRotation(r),
          x.halfWidth.set(w.width * 0.5, 0, 0),
          x.halfHeight.set(0, w.height * 0.5, 0),
          x.halfWidth.applyMatrix4(a),
          x.halfHeight.applyMatrix4(a),
          p++;
      } else if (w.isPointLight) {
        const x = i.point[f];
        x.position.setFromMatrixPosition(w.matrixWorld),
          x.position.applyMatrix4(_),
          f++;
      } else if (w.isHemisphereLight) {
        const x = i.hemi[m];
        x.direction.setFromMatrixPosition(w.matrixWorld),
          x.direction.transformDirection(_),
          x.direction.normalize(),
          m++;
      }
    }
  }
  return {
    setup: c,
    setupView: h,
    state: i,
  };
}

function Kh(o, e) {
  const t = new $y(o, e),
    n = [],
    i = [];

  function s() {
    (n.length = 0), (i.length = 0);
  }

  function r(l) {
    n.push(l);
  }

  function a(l) {
    i.push(l);
  }

  function c(l) {
    t.setup(n, l);
  }

  function h(l) {
    t.setupView(n, l);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t,
    },
    setupLights: c,
    setupLightsView: h,
    pushLight: r,
    pushShadow: a,
  };
}

function Qy(o, e) {
  let t = new WeakMap();

  function n(s, r = 0) {
    let a;
    return (
      t.has(s) === !1
        ? ((a = new Kh(o, e)), t.set(s, [a]))
        : r >= t.get(s).length
        ? ((a = new Kh(o, e)), t.get(s).push(a))
        : (a = t.get(s)[r]),
      a
    );
  }

  function i() {
    t = new WeakMap();
  }
  return {
    get: n,
    dispose: i,
  };
}
class oc extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = im),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
oc.prototype.isMeshDepthMaterial = !0;
class ac extends dt {
  constructor(e) {
    super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new C()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
ac.prototype.isMeshDistanceMaterial = !0;
const ex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  tx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function md(o, e, t) {
  let n = new oa();
  const i = new te(),
    s = new te(),
    r = new Ke(),
    a = new oc({
      depthPacking: sm,
    }),
    c = new ac(),
    h = {},
    d = t.maxTextureSize,
    l = {
      0: xn,
      1: Ws,
      2: Yi,
    },
    u = new Ot({
      defines: {
        VSM_SAMPLES: 8,
      },
      uniforms: {
        shadow_pass: {
          value: null,
        },
        resolution: {
          value: new te(),
        },
        radius: {
          value: 4,
        },
      },
      vertexShader: ex,
      fragmentShader: tx,
    }),
    f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new tt();
  g.setAttribute(
    "position",
    new ft(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new St(g, u),
    m = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Xu),
    (this.render = function (w, x, E) {
      if (
        m.enabled === !1 ||
        (m.autoUpdate === !1 && m.needsUpdate === !1) ||
        w.length === 0
      )
        return;
      const T = o.getRenderTarget(),
        R = o.getActiveCubeFace(),
        I = o.getActiveMipmapLevel(),
        B = o.state;
      B.setBlending(mi),
        B.buffers.color.setClear(1, 1, 1, 1),
        B.buffers.depth.setTest(!0),
        B.setScissorTest(!1);
      for (let v = 0, L = w.length; v < L; v++) {
        const U = w[v],
          D = U.shadow;
        if (D === void 0) {
          console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        i.copy(D.mapSize);
        const O = D.getFrameExtents();
        if (
          (i.multiply(O),
          s.copy(D.mapSize),
          (i.x > d || i.y > d) &&
            (i.x > d &&
              ((s.x = Math.floor(d / O.x)),
              (i.x = s.x * O.x),
              (D.mapSize.x = s.x)),
            i.y > d &&
              ((s.y = Math.floor(d / O.y)),
              (i.y = s.y * O.y),
              (D.mapSize.y = s.y))),
          D.map === null &&
            !D.isPointLightShadow &&
            this.type === Sr &&
            ((D.map = new Zt(i.x, i.y)),
            (D.map.texture.name = U.name + ".shadowMap"),
            (D.mapPass = new Zt(i.x, i.y)),
            D.camera.updateProjectionMatrix()),
          D.map === null)
        ) {
          const H = {
            minFilter: bt,
            magFilter: bt,
            format: rn,
          };
          (D.map = new Zt(i.x, i.y, H)),
            (D.map.texture.name = U.name + ".shadowMap"),
            D.camera.updateProjectionMatrix();
        }
        o.setRenderTarget(D.map), o.clear();
        const N = D.getViewportCount();
        for (let H = 0; H < N; H++) {
          const F = D.getViewport(H);
          r.set(s.x * F.x, s.y * F.y, s.x * F.z, s.y * F.w),
            B.viewport(r),
            D.updateMatrices(U, H),
            (n = D.getFrustum()),
            b(x, E, D.camera, U, this.type);
        }
        !D.isPointLightShadow && this.type === Sr && _(D, E),
          (D.needsUpdate = !1);
      }
      (m.needsUpdate = !1), o.setRenderTarget(T, R, I);
    });

  function _(w, x) {
    const E = e.update(p);
    u.defines.VSM_SAMPLES !== w.blurSamples &&
      ((u.defines.VSM_SAMPLES = w.blurSamples),
      (f.defines.VSM_SAMPLES = w.blurSamples),
      (u.needsUpdate = !0),
      (f.needsUpdate = !0)),
      (u.uniforms.shadow_pass.value = w.map.texture),
      (u.uniforms.resolution.value = w.mapSize),
      (u.uniforms.radius.value = w.radius),
      o.setRenderTarget(w.mapPass),
      o.clear(),
      o.renderBufferDirect(x, null, E, u, p, null),
      (f.uniforms.shadow_pass.value = w.mapPass.texture),
      (f.uniforms.resolution.value = w.mapSize),
      (f.uniforms.radius.value = w.radius),
      o.setRenderTarget(w.map),
      o.clear(),
      o.renderBufferDirect(x, null, E, f, p, null);
  }

  function y(w, x, E, T, R, I) {
    let B = null;
    const v =
      E.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (
      (v !== void 0 ? (B = v) : (B = E.isPointLight === !0 ? c : a),
      (o.localClippingEnabled &&
        x.clipShadows === !0 &&
        x.clippingPlanes.length !== 0) ||
        (x.displacementMap && x.displacementScale !== 0) ||
        (x.alphaMap && x.alphaTest > 0))
    ) {
      const L = B.uuid,
        U = x.uuid;
      let D = h[L];
      D === void 0 && ((D = {}), (h[L] = D));
      let O = D[U];
      O === void 0 && ((O = B.clone()), (D[U] = O)), (B = O);
    }
    return (
      (B.visible = x.visible),
      (B.wireframe = x.wireframe),
      I === Sr
        ? (B.side = x.shadowSide !== null ? x.shadowSide : x.side)
        : (B.side = x.shadowSide !== null ? x.shadowSide : l[x.side]),
      (B.alphaMap = x.alphaMap),
      (B.alphaTest = x.alphaTest),
      (B.clipShadows = x.clipShadows),
      (B.clippingPlanes = x.clippingPlanes),
      (B.clipIntersection = x.clipIntersection),
      (B.displacementMap = x.displacementMap),
      (B.displacementScale = x.displacementScale),
      (B.displacementBias = x.displacementBias),
      (B.wireframeLinewidth = x.wireframeLinewidth),
      (B.linewidth = x.linewidth),
      E.isPointLight === !0 &&
        B.isMeshDistanceMaterial === !0 &&
        (B.referencePosition.setFromMatrixPosition(E.matrixWorld),
        (B.nearDistance = T),
        (B.farDistance = R)),
      B
    );
  }

  function b(w, x, E, T, R) {
    if (w.visible === !1) return;
    if (
      w.layers.test(x.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && R === Sr)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, w.matrixWorld);
      const v = e.update(w),
        L = w.material;
      if (Array.isArray(L)) {
        const U = v.groups;
        for (let D = 0, O = U.length; D < O; D++) {
          const N = U[D],
            H = L[N.materialIndex];
          if (H && H.visible) {
            const F = y(w, H, T, E.near, E.far, R);
            o.renderBufferDirect(E, null, v, F, w, N);
          }
        }
      } else if (L.visible) {
        const U = y(w, L, T, E.near, E.far, R);
        o.renderBufferDirect(E, null, v, U, w, null);
      }
    }
    const B = w.children;
    for (let v = 0, L = B.length; v < L; v++) b(B[v], x, E, T, R);
  }
}

function nx(o, e, t) {
  const n = t.isWebGL2;

  function i() {
    let k = !1;
    const le = new Ke();
    let oe = null;
    const Se = new Ke(0, 0, 0, 0);
    return {
      setMask: function (pe) {
        oe !== pe && !k && (o.colorMask(pe, pe, pe, pe), (oe = pe));
      },
      setLocked: function (pe) {
        k = pe;
      },
      setClear: function (pe, Te, re, Ae, nt) {
        nt === !0 && ((pe *= Ae), (Te *= Ae), (re *= Ae)),
          le.set(pe, Te, re, Ae),
          Se.equals(le) === !1 && (o.clearColor(pe, Te, re, Ae), Se.copy(le));
      },
      reset: function () {
        (k = !1), (oe = null), Se.set(-1, 0, 0, 0);
      },
    };
  }

  function s() {
    let k = !1,
      le = null,
      oe = null,
      Se = null;
    return {
      setTest: function (pe) {
        pe ? xe(2929) : Y(2929);
      },
      setMask: function (pe) {
        le !== pe && !k && (o.depthMask(pe), (le = pe));
      },
      setFunc: function (pe) {
        if (oe !== pe) {
          if (pe)
            switch (pe) {
              case Sp:
                o.depthFunc(512);
                break;
              case Tp:
                o.depthFunc(519);
                break;
              case Ep:
                o.depthFunc(513);
                break;
              case vl:
                o.depthFunc(515);
                break;
              case Ap:
                o.depthFunc(514);
                break;
              case Cp:
                o.depthFunc(518);
                break;
              case Lp:
                o.depthFunc(516);
                break;
              case Rp:
                o.depthFunc(517);
                break;
              default:
                o.depthFunc(515);
            }
          else o.depthFunc(515);
          oe = pe;
        }
      },
      setLocked: function (pe) {
        k = pe;
      },
      setClear: function (pe) {
        Se !== pe && (o.clearDepth(pe), (Se = pe));
      },
      reset: function () {
        (k = !1), (le = null), (oe = null), (Se = null);
      },
    };
  }

  function r() {
    let k = !1,
      le = null,
      oe = null,
      Se = null,
      pe = null,
      Te = null,
      re = null,
      Ae = null,
      nt = null;
    return {
      setTest: function (He) {
        k || (He ? xe(2960) : Y(2960));
      },
      setMask: function (He) {
        le !== He && !k && (o.stencilMask(He), (le = He));
      },
      setFunc: function (He, bn, wn) {
        (oe !== He || Se !== bn || pe !== wn) &&
          (o.stencilFunc(He, bn, wn), (oe = He), (Se = bn), (pe = wn));
      },
      setOp: function (He, bn, wn) {
        (Te !== He || re !== bn || Ae !== wn) &&
          (o.stencilOp(He, bn, wn), (Te = He), (re = bn), (Ae = wn));
      },
      setLocked: function (He) {
        k = He;
      },
      setClear: function (He) {
        nt !== He && (o.clearStencil(He), (nt = He));
      },
      reset: function () {
        (k = !1),
          (le = null),
          (oe = null),
          (Se = null),
          (pe = null),
          (Te = null),
          (re = null),
          (Ae = null),
          (nt = null);
      },
    };
  }
  const a = new i(),
    c = new s(),
    h = new r();
  let d = {},
    l = {},
    u = new WeakMap(),
    f = [],
    g = null,
    p = !1,
    m = null,
    _ = null,
    y = null,
    b = null,
    w = null,
    x = null,
    E = null,
    T = !1,
    R = null,
    I = null,
    B = null,
    v = null,
    L = null;
  const U = o.getParameter(35661);
  let D = !1,
    O = 0;
  const N = o.getParameter(7938);
  N.indexOf("WebGL") !== -1
    ? ((O = parseFloat(/^WebGL (\d)/.exec(N)[1])), (D = O >= 1))
    : N.indexOf("OpenGL ES") !== -1 &&
      ((O = parseFloat(/^OpenGL ES (\d)/.exec(N)[1])), (D = O >= 2));
  let H = null,
    F = {};
  const X = o.getParameter(3088),
    Z = o.getParameter(2978),
    Q = new Ke().fromArray(X),
    $ = new Ke().fromArray(Z);

  function ue(k, le, oe) {
    const Se = new Uint8Array(4),
      pe = o.createTexture();
    o.bindTexture(k, pe),
      o.texParameteri(k, 10241, 9728),
      o.texParameteri(k, 10240, 9728);
    for (let Te = 0; Te < oe; Te++)
      o.texImage2D(le + Te, 0, 6408, 1, 1, 0, 6408, 5121, Se);
    return pe;
  }
  const Me = {};
  (Me[3553] = ue(3553, 3553, 1)),
    (Me[34067] = ue(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    c.setClear(1),
    h.setClear(0),
    xe(2929),
    c.setFunc(vl),
    ne(!1),
    me(Vc),
    xe(2884),
    j(mi);

  function xe(k) {
    d[k] !== !0 && (o.enable(k), (d[k] = !0));
  }

  function Y(k) {
    d[k] !== !1 && (o.disable(k), (d[k] = !1));
  }

  function We(k, le) {
    return l[k] !== le
      ? (o.bindFramebuffer(k, le),
        (l[k] = le),
        n && (k === 36009 && (l[36160] = le), k === 36160 && (l[36009] = le)),
        !0)
      : !1;
  }

  function Re(k, le) {
    let oe = f,
      Se = !1;
    if (k)
      if (
        ((oe = u.get(le)),
        oe === void 0 && ((oe = []), u.set(le, oe)),
        k.isWebGLMultipleRenderTargets)
      ) {
        const pe = k.texture;
        if (oe.length !== pe.length || oe[0] !== 36064) {
          for (let Te = 0, re = pe.length; Te < re; Te++) oe[Te] = 36064 + Te;
          (oe.length = pe.length), (Se = !0);
        }
      } else oe[0] !== 36064 && ((oe[0] = 36064), (Se = !0));
    else oe[0] !== 1029 && ((oe[0] = 1029), (Se = !0));
    Se &&
      (t.isWebGL2
        ? o.drawBuffers(oe)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe));
  }

  function Pe(k) {
    return g !== k ? (o.useProgram(k), (g = k), !0) : !1;
  }
  const se = {
    [Rs]: 32774,
    [fp]: 32778,
    [pp]: 32779,
  };
  if (n) (se[jc] = 32775), (se[Yc] = 32776);
  else {
    const k = e.get("EXT_blend_minmax");
    k !== null && ((se[jc] = k.MIN_EXT), (se[Yc] = k.MAX_EXT));
  }
  const Be = {
    [mp]: 0,
    [gp]: 1,
    [_p]: 768,
    [Yu]: 770,
    [Mp]: 776,
    [bp]: 774,
    [xp]: 772,
    [yp]: 769,
    [Ju]: 771,
    [wp]: 775,
    [vp]: 773,
  };

  function j(k, le, oe, Se, pe, Te, re, Ae) {
    if (k === mi) {
      p === !0 && (Y(3042), (p = !1));
      return;
    }
    if ((p === !1 && (xe(3042), (p = !0)), k !== dp)) {
      if (k !== m || Ae !== T) {
        if (
          ((_ !== Rs || w !== Rs) &&
            (o.blendEquation(32774), (_ = Rs), (w = Rs)),
          Ae)
        )
          switch (k) {
            case Ns:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Wc:
              o.blendFunc(1, 1);
              break;
            case qc:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Xc:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", k);
              break;
          }
        else
          switch (k) {
            case Ns:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Wc:
              o.blendFunc(770, 1);
              break;
            case qc:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Xc:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", k);
              break;
          }
        (y = null), (b = null), (x = null), (E = null), (m = k), (T = Ae);
      }
      return;
    }
    (pe = pe || le),
      (Te = Te || oe),
      (re = re || Se),
      (le !== _ || pe !== w) &&
        (o.blendEquationSeparate(se[le], se[pe]), (_ = le), (w = pe)),
      (oe !== y || Se !== b || Te !== x || re !== E) &&
        (o.blendFuncSeparate(Be[oe], Be[Se], Be[Te], Be[re]),
        (y = oe),
        (b = Se),
        (x = Te),
        (E = re)),
      (m = k),
      (T = null);
  }

  function K(k, le) {
    k.side === Yi ? Y(2884) : xe(2884);
    let oe = k.side === xn;
    le && (oe = !oe),
      ne(oe),
      k.blending === Ns && k.transparent === !1
        ? j(mi)
        : j(
            k.blending,
            k.blendEquation,
            k.blendSrc,
            k.blendDst,
            k.blendEquationAlpha,
            k.blendSrcAlpha,
            k.blendDstAlpha,
            k.premultipliedAlpha
          ),
      c.setFunc(k.depthFunc),
      c.setTest(k.depthTest),
      c.setMask(k.depthWrite),
      a.setMask(k.colorWrite);
    const Se = k.stencilWrite;
    h.setTest(Se),
      Se &&
        (h.setMask(k.stencilWriteMask),
        h.setFunc(k.stencilFunc, k.stencilRef, k.stencilFuncMask),
        h.setOp(k.stencilFail, k.stencilZFail, k.stencilZPass)),
      Ce(k.polygonOffset, k.polygonOffsetFactor, k.polygonOffsetUnits),
      k.alphaToCoverage === !0 ? xe(32926) : Y(32926);
  }

  function ne(k) {
    R !== k && (k ? o.frontFace(2304) : o.frontFace(2305), (R = k));
  }

  function me(k) {
    k !== cp
      ? (xe(2884),
        k !== I &&
          (k === Vc
            ? o.cullFace(1029)
            : k === hp
            ? o.cullFace(1028)
            : o.cullFace(1032)))
      : Y(2884),
      (I = k);
  }

  function de(k) {
    k !== B && (D && o.lineWidth(k), (B = k));
  }

  function Ce(k, le, oe) {
    k
      ? (xe(32823),
        (v !== le || L !== oe) && (o.polygonOffset(le, oe), (v = le), (L = oe)))
      : Y(32823);
  }

  function we(k) {
    k ? xe(3089) : Y(3089);
  }

  function ve(k) {
    k === void 0 && (k = 33984 + U - 1),
      H !== k && (o.activeTexture(k), (H = k));
  }

  function st(k, le) {
    H === null && ve();
    let oe = F[H];
    oe === void 0 &&
      ((oe = {
        type: void 0,
        texture: void 0,
      }),
      (F[H] = oe)),
      (oe.type !== k || oe.texture !== le) &&
        (o.bindTexture(k, le || Me[k]), (oe.type = k), (oe.texture = le));
  }

  function Ze() {
    const k = F[H];
    k !== void 0 &&
      k.type !== void 0 &&
      (o.bindTexture(k.type, null), (k.type = void 0), (k.texture = void 0));
  }

  function A() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function M() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function W() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function ee() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function ce() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function fe() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function be() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function q() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (k) {
      console.error("THREE.WebGLState:", k);
    }
  }

  function Ie(k) {
    Q.equals(k) === !1 && (o.scissor(k.x, k.y, k.z, k.w), Q.copy(k));
  }

  function ke(k) {
    $.equals(k) === !1 && (o.viewport(k.x, k.y, k.z, k.w), $.copy(k));
  }

  function ge() {
    o.disable(3042),
      o.disable(2884),
      o.disable(2929),
      o.disable(32823),
      o.disable(3089),
      o.disable(2960),
      o.disable(32926),
      o.blendEquation(32774),
      o.blendFunc(1, 0),
      o.blendFuncSeparate(1, 0, 1, 0),
      o.colorMask(!0, !0, !0, !0),
      o.clearColor(0, 0, 0, 0),
      o.depthMask(!0),
      o.depthFunc(513),
      o.clearDepth(1),
      o.stencilMask(4294967295),
      o.stencilFunc(519, 0, 4294967295),
      o.stencilOp(7680, 7680, 7680),
      o.clearStencil(0),
      o.cullFace(1029),
      o.frontFace(2305),
      o.polygonOffset(0, 0),
      o.activeTexture(33984),
      o.bindFramebuffer(36160, null),
      n === !0 &&
        (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)),
      o.useProgram(null),
      o.lineWidth(1),
      o.scissor(0, 0, o.canvas.width, o.canvas.height),
      o.viewport(0, 0, o.canvas.width, o.canvas.height),
      (d = {}),
      (H = null),
      (F = {}),
      (l = {}),
      (u = new WeakMap()),
      (f = []),
      (g = null),
      (p = !1),
      (m = null),
      (_ = null),
      (y = null),
      (b = null),
      (w = null),
      (x = null),
      (E = null),
      (T = !1),
      (R = null),
      (I = null),
      (B = null),
      (v = null),
      (L = null),
      Q.set(0, 0, o.canvas.width, o.canvas.height),
      $.set(0, 0, o.canvas.width, o.canvas.height),
      a.reset(),
      c.reset(),
      h.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: h,
    },
    enable: xe,
    disable: Y,
    bindFramebuffer: We,
    drawBuffers: Re,
    useProgram: Pe,
    setBlending: j,
    setMaterial: K,
    setFlipSided: ne,
    setCullFace: me,
    setLineWidth: de,
    setPolygonOffset: Ce,
    setScissorTest: we,
    activeTexture: ve,
    bindTexture: st,
    unbindTexture: Ze,
    compressedTexImage2D: A,
    texImage2D: be,
    texImage3D: q,
    texStorage2D: ce,
    texStorage3D: fe,
    texSubImage2D: M,
    texSubImage3D: W,
    compressedTexSubImage2D: ee,
    scissor: Ie,
    viewport: ke,
    reset: ge,
  };
}

function ix(o, e, t, n, i, s, r) {
  const a = i.isWebGL2,
    c = i.maxTextures,
    h = i.maxCubemapSize,
    d = i.maxTextureSize,
    l = i.maxSamples,
    u = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    f = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let p;
  const m = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}

  function y(A, M) {
    return _ ? new OffscreenCanvas(A, M) : zr("canvas");
  }

  function b(A, M, W, ee) {
    let ce = 1;
    if (
      ((A.width > ee || A.height > ee) &&
        (ce = ee / Math.max(A.width, A.height)),
      ce < 1 || M === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && A instanceof ImageBitmap)
      ) {
        const fe = M ? Xo : Math.floor,
          be = fe(ce * A.width),
          q = fe(ce * A.height);
        p === void 0 && (p = y(be, q));
        const Ie = W ? y(be, q) : p;
        return (
          (Ie.width = be),
          (Ie.height = q),
          Ie.getContext("2d").drawImage(A, 0, 0, be, q),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              A.width +
              "x" +
              A.height +
              ") to (" +
              be +
              "x" +
              q +
              ")."
          ),
          Ie
        );
      } else
        return (
          "data" in A &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                A.width +
                "x" +
                A.height +
                ")."
            ),
          A
        );
    return A;
  }

  function w(A) {
    return El(A.width) && El(A.height);
  }

  function x(A) {
    return a
      ? !1
      : A.wrapS !== sn ||
          A.wrapT !== sn ||
          (A.minFilter !== bt && A.minFilter !== It);
  }

  function E(A, M) {
    return A.generateMipmaps && M && A.minFilter !== bt && A.minFilter !== It;
  }

  function T(A) {
    o.generateMipmap(A);
  }

  function R(A, M, W, ee, ce = !1) {
    if (a === !1) return M;
    if (A !== null) {
      if (o[A] !== void 0) return o[A];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          A +
          "'"
      );
    }
    let fe = M;
    return (
      M === 6403 &&
        (W === 5126 && (fe = 33326),
        W === 5131 && (fe = 33325),
        W === 5121 && (fe = 33321)),
      M === 33319 &&
        (W === 5126 && (fe = 33328),
        W === 5131 && (fe = 33327),
        W === 5121 && (fe = 33323)),
      M === 6408 &&
        (W === 5126 && (fe = 34836),
        W === 5131 && (fe = 34842),
        W === 5121 && (fe = ee === Ge && ce === !1 ? 35907 : 32856),
        W === 32819 && (fe = 32854),
        W === 32820 && (fe = 32855)),
      (fe === 33325 ||
        fe === 33326 ||
        fe === 33327 ||
        fe === 33328 ||
        fe === 34842 ||
        fe === 34836) &&
        e.get("EXT_color_buffer_float"),
      fe
    );
  }

  function I(A, M, W) {
    return E(A, W) === !0 ||
      (A.isFramebufferTexture && A.minFilter !== bt && A.minFilter !== It)
      ? Math.log2(Math.max(M.width, M.height)) + 1
      : A.mipmaps !== void 0 && A.mipmaps.length > 0
      ? A.mipmaps.length
      : A.isCompressedTexture && Array.isArray(A.image)
      ? M.mipmaps.length
      : 1;
  }

  function B(A) {
    return A === bt || A === Ml || A === Sl ? 9728 : 9729;
  }

  function v(A) {
    const M = A.target;
    M.removeEventListener("dispose", v), U(M), M.isVideoTexture && g.delete(M);
  }

  function L(A) {
    const M = A.target;
    M.removeEventListener("dispose", L), O(M);
  }

  function U(A) {
    const M = n.get(A);
    if (M.__webglInit === void 0) return;
    const W = A.source,
      ee = m.get(W);
    if (ee) {
      const ce = ee[M.__cacheKey];
      ce.usedTimes--,
        ce.usedTimes === 0 && D(A),
        Object.keys(ee).length === 0 && m.delete(W);
    }
    n.remove(A);
  }

  function D(A) {
    const M = n.get(A);
    o.deleteTexture(M.__webglTexture);
    const W = A.source,
      ee = m.get(W);
    delete ee[M.__cacheKey], r.memory.textures--;
  }

  function O(A) {
    const M = A.texture,
      W = n.get(A),
      ee = n.get(M);
    if (
      (ee.__webglTexture !== void 0 &&
        (o.deleteTexture(ee.__webglTexture), r.memory.textures--),
      A.depthTexture && A.depthTexture.dispose(),
      A.isWebGLCubeRenderTarget)
    )
      for (let ce = 0; ce < 6; ce++)
        o.deleteFramebuffer(W.__webglFramebuffer[ce]),
          W.__webglDepthbuffer &&
            o.deleteRenderbuffer(W.__webglDepthbuffer[ce]);
    else
      o.deleteFramebuffer(W.__webglFramebuffer),
        W.__webglDepthbuffer && o.deleteRenderbuffer(W.__webglDepthbuffer),
        W.__webglMultisampledFramebuffer &&
          o.deleteFramebuffer(W.__webglMultisampledFramebuffer),
        W.__webglColorRenderbuffer &&
          o.deleteRenderbuffer(W.__webglColorRenderbuffer),
        W.__webglDepthRenderbuffer &&
          o.deleteRenderbuffer(W.__webglDepthRenderbuffer);
    if (A.isWebGLMultipleRenderTargets)
      for (let ce = 0, fe = M.length; ce < fe; ce++) {
        const be = n.get(M[ce]);
        be.__webglTexture &&
          (o.deleteTexture(be.__webglTexture), r.memory.textures--),
          n.remove(M[ce]);
      }
    n.remove(M), n.remove(A);
  }
  let N = 0;

  function H() {
    N = 0;
  }

  function F() {
    const A = N;
    return (
      A >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            A +
            " texture units while this GPU supports only " +
            c
        ),
      (N += 1),
      A
    );
  }

  function X(A) {
    const M = [];
    return (
      M.push(A.wrapS),
      M.push(A.wrapT),
      M.push(A.magFilter),
      M.push(A.minFilter),
      M.push(A.anisotropy),
      M.push(A.internalFormat),
      M.push(A.format),
      M.push(A.type),
      M.push(A.generateMipmaps),
      M.push(A.premultiplyAlpha),
      M.push(A.flipY),
      M.push(A.unpackAlignment),
      M.push(A.encoding),
      M.join()
    );
  }

  function Z(A, M) {
    const W = n.get(A);
    if (
      (A.isVideoTexture && st(A),
      A.isRenderTargetTexture === !1 &&
        A.version > 0 &&
        W.__version !== A.version)
    ) {
      const ee = A.image;
      if (ee === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ee.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Re(W, A, M);
        return;
      }
    }
    t.activeTexture(33984 + M), t.bindTexture(3553, W.__webglTexture);
  }

  function Q(A, M) {
    const W = n.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      Re(W, A, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(35866, W.__webglTexture);
  }

  function $(A, M) {
    const W = n.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      Re(W, A, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(32879, W.__webglTexture);
  }

  function ue(A, M) {
    const W = n.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      Pe(W, A, M);
      return;
    }
    t.activeTexture(33984 + M), t.bindTexture(34067, W.__webglTexture);
  }
  const Me = {
      [Ji]: 10497,
      [sn]: 33071,
      [Vo]: 33648,
    },
    xe = {
      [bt]: 9728,
      [Ml]: 9984,
      [Sl]: 9986,
      [It]: 9729,
      [Zu]: 9985,
      [ir]: 9987,
    };

  function Y(A, M, W) {
    if (
      (W
        ? (o.texParameteri(A, 10242, Me[M.wrapS]),
          o.texParameteri(A, 10243, Me[M.wrapT]),
          (A === 32879 || A === 35866) &&
            o.texParameteri(A, 32882, Me[M.wrapR]),
          o.texParameteri(A, 10240, xe[M.magFilter]),
          o.texParameteri(A, 10241, xe[M.minFilter]))
        : (o.texParameteri(A, 10242, 33071),
          o.texParameteri(A, 10243, 33071),
          (A === 32879 || A === 35866) && o.texParameteri(A, 32882, 33071),
          (M.wrapS !== sn || M.wrapT !== sn) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          o.texParameteri(A, 10240, B(M.magFilter)),
          o.texParameteri(A, 10241, B(M.minFilter)),
          M.minFilter !== bt &&
            M.minFilter !== It &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ee = e.get("EXT_texture_filter_anisotropic");
      if (
        (M.type === ui && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          M.type === zs &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) &&
        (o.texParameterf(
          A,
          ee.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(M.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(M).__currentAnisotropy = M.anisotropy));
    }
  }

  function We(A, M) {
    let W = !1;
    A.__webglInit === void 0 &&
      ((A.__webglInit = !0), M.addEventListener("dispose", v));
    const ee = M.source;
    let ce = m.get(ee);
    ce === void 0 && ((ce = {}), m.set(ee, ce));
    const fe = X(M);
    if (fe !== A.__cacheKey) {
      ce[fe] === void 0 &&
        ((ce[fe] = {
          texture: o.createTexture(),
          usedTimes: 0,
        }),
        r.memory.textures++,
        (W = !0)),
        ce[fe].usedTimes++;
      const be = ce[A.__cacheKey];
      be !== void 0 &&
        (ce[A.__cacheKey].usedTimes--, be.usedTimes === 0 && D(M)),
        (A.__cacheKey = fe),
        (A.__webglTexture = ce[fe].texture);
    }
    return W;
  }

  function Re(A, M, W) {
    let ee = 3553;
    M.isDataArrayTexture && (ee = 35866), M.isData3DTexture && (ee = 32879);
    const ce = We(A, M),
      fe = M.source;
    if (
      (t.activeTexture(33984 + W),
      t.bindTexture(ee, A.__webglTexture),
      fe.version !== fe.__currentVersion || ce === !0)
    ) {
      o.pixelStorei(37440, M.flipY),
        o.pixelStorei(37441, M.premultiplyAlpha),
        o.pixelStorei(3317, M.unpackAlignment),
        o.pixelStorei(37443, 0);
      const be = x(M) && w(M.image) === !1;
      let q = b(M.image, be, !1, d);
      q = Ze(M, q);
      const Ie = w(q) || a,
        ke = s.convert(M.format, M.encoding);
      let ge = s.convert(M.type),
        k = R(M.internalFormat, ke, ge, M.encoding, M.isVideoTexture);
      Y(ee, M, Ie);
      let le;
      const oe = M.mipmaps,
        Se = a && M.isVideoTexture !== !0,
        pe = A.__version === void 0,
        Te = I(M, q, Ie);
      if (M.isDepthTexture)
        (k = 6402),
          a
            ? M.type === ui
              ? (k = 36012)
              : M.type === Oo
              ? (k = 33190)
              : M.type === Hs
              ? (k = 35056)
              : (k = 33189)
            : M.type === ui &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          M.format === Gi &&
            k === 6402 &&
            M.type !== Fr &&
            M.type !== Oo &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (M.type = Fr),
            (ge = s.convert(M.type))),
          M.format === js &&
            k === 6402 &&
            ((k = 34041),
            M.type !== Hs &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (M.type = Hs),
              (ge = s.convert(M.type)))),
          Se && pe
            ? t.texStorage2D(3553, 1, k, q.width, q.height)
            : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, null);
      else if (M.isDataTexture)
        if (oe.length > 0 && Ie) {
          Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
          for (let re = 0, Ae = oe.length; re < Ae; re++)
            (le = oe[re]),
              Se
                ? t.texSubImage2D(
                    3553,
                    re,
                    0,
                    0,
                    le.width,
                    le.height,
                    ke,
                    ge,
                    le.data
                  )
                : t.texImage2D(
                    3553,
                    re,
                    k,
                    le.width,
                    le.height,
                    0,
                    ke,
                    ge,
                    le.data
                  );
          M.generateMipmaps = !1;
        } else
          Se
            ? (pe && t.texStorage2D(3553, Te, k, q.width, q.height),
              t.texSubImage2D(3553, 0, 0, 0, q.width, q.height, ke, ge, q.data))
            : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, q.data);
      else if (M.isCompressedTexture) {
        Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
        for (let re = 0, Ae = oe.length; re < Ae; re++)
          (le = oe[re]),
            M.format !== rn
              ? ke !== null
                ? Se
                  ? t.compressedTexSubImage2D(
                      3553,
                      re,
                      0,
                      0,
                      le.width,
                      le.height,
                      ke,
                      le.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      re,
                      k,
                      le.width,
                      le.height,
                      0,
                      le.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : Se
              ? t.texSubImage2D(
                  3553,
                  re,
                  0,
                  0,
                  le.width,
                  le.height,
                  ke,
                  ge,
                  le.data
                )
              : t.texImage2D(
                  3553,
                  re,
                  k,
                  le.width,
                  le.height,
                  0,
                  ke,
                  ge,
                  le.data
                );
      } else if (M.isDataArrayTexture)
        Se
          ? (pe && t.texStorage3D(35866, Te, k, q.width, q.height, q.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              q.width,
              q.height,
              q.depth,
              ke,
              ge,
              q.data
            ))
          : t.texImage3D(
              35866,
              0,
              k,
              q.width,
              q.height,
              q.depth,
              0,
              ke,
              ge,
              q.data
            );
      else if (M.isData3DTexture)
        Se
          ? (pe && t.texStorage3D(32879, Te, k, q.width, q.height, q.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              q.width,
              q.height,
              q.depth,
              ke,
              ge,
              q.data
            ))
          : t.texImage3D(
              32879,
              0,
              k,
              q.width,
              q.height,
              q.depth,
              0,
              ke,
              ge,
              q.data
            );
      else if (M.isFramebufferTexture)
        Se && pe
          ? t.texStorage2D(3553, Te, k, q.width, q.height)
          : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, null);
      else if (oe.length > 0 && Ie) {
        Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
        for (let re = 0, Ae = oe.length; re < Ae; re++)
          (le = oe[re]),
            Se
              ? t.texSubImage2D(3553, re, 0, 0, ke, ge, le)
              : t.texImage2D(3553, re, k, ke, ge, le);
        M.generateMipmaps = !1;
      } else
        Se
          ? (pe && t.texStorage2D(3553, Te, k, q.width, q.height),
            t.texSubImage2D(3553, 0, 0, 0, ke, ge, q))
          : t.texImage2D(3553, 0, k, ke, ge, q);
      E(M, Ie) && T(ee),
        (fe.__currentVersion = fe.version),
        M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }

  function Pe(A, M, W) {
    if (M.image.length !== 6) return;
    const ee = We(A, M),
      ce = M.source;
    if (
      (t.activeTexture(33984 + W),
      t.bindTexture(34067, A.__webglTexture),
      ce.version !== ce.__currentVersion || ee === !0)
    ) {
      o.pixelStorei(37440, M.flipY),
        o.pixelStorei(37441, M.premultiplyAlpha),
        o.pixelStorei(3317, M.unpackAlignment),
        o.pixelStorei(37443, 0);
      const fe = M.isCompressedTexture || M.image[0].isCompressedTexture,
        be = M.image[0] && M.image[0].isDataTexture,
        q = [];
      for (let re = 0; re < 6; re++)
        !fe && !be
          ? (q[re] = b(M.image[re], !1, !0, h))
          : (q[re] = be ? M.image[re].image : M.image[re]),
          (q[re] = Ze(M, q[re]));
      const Ie = q[0],
        ke = w(Ie) || a,
        ge = s.convert(M.format, M.encoding),
        k = s.convert(M.type),
        le = R(M.internalFormat, ge, k, M.encoding),
        oe = a && M.isVideoTexture !== !0,
        Se = A.__version === void 0;
      let pe = I(M, Ie, ke);
      Y(34067, M, ke);
      let Te;
      if (fe) {
        oe && Se && t.texStorage2D(34067, pe, le, Ie.width, Ie.height);
        for (let re = 0; re < 6; re++) {
          Te = q[re].mipmaps;
          for (let Ae = 0; Ae < Te.length; Ae++) {
            const nt = Te[Ae];
            M.format !== rn
              ? ge !== null
                ? oe
                  ? t.compressedTexSubImage2D(
                      34069 + re,
                      Ae,
                      0,
                      0,
                      nt.width,
                      nt.height,
                      ge,
                      nt.data
                    )
                  : t.compressedTexImage2D(
                      34069 + re,
                      Ae,
                      le,
                      nt.width,
                      nt.height,
                      0,
                      nt.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : oe
              ? t.texSubImage2D(
                  34069 + re,
                  Ae,
                  0,
                  0,
                  nt.width,
                  nt.height,
                  ge,
                  k,
                  nt.data
                )
              : t.texImage2D(
                  34069 + re,
                  Ae,
                  le,
                  nt.width,
                  nt.height,
                  0,
                  ge,
                  k,
                  nt.data
                );
          }
        }
      } else {
        (Te = M.mipmaps),
          oe &&
            Se &&
            (Te.length > 0 && pe++,
            t.texStorage2D(34067, pe, le, q[0].width, q[0].height));
        for (let re = 0; re < 6; re++)
          if (be) {
            oe
              ? t.texSubImage2D(
                  34069 + re,
                  0,
                  0,
                  0,
                  q[re].width,
                  q[re].height,
                  ge,
                  k,
                  q[re].data
                )
              : t.texImage2D(
                  34069 + re,
                  0,
                  le,
                  q[re].width,
                  q[re].height,
                  0,
                  ge,
                  k,
                  q[re].data
                );
            for (let Ae = 0; Ae < Te.length; Ae++) {
              const He = Te[Ae].image[re].image;
              oe
                ? t.texSubImage2D(
                    34069 + re,
                    Ae + 1,
                    0,
                    0,
                    He.width,
                    He.height,
                    ge,
                    k,
                    He.data
                  )
                : t.texImage2D(
                    34069 + re,
                    Ae + 1,
                    le,
                    He.width,
                    He.height,
                    0,
                    ge,
                    k,
                    He.data
                  );
            }
          } else {
            oe
              ? t.texSubImage2D(34069 + re, 0, 0, 0, ge, k, q[re])
              : t.texImage2D(34069 + re, 0, le, ge, k, q[re]);
            for (let Ae = 0; Ae < Te.length; Ae++) {
              const nt = Te[Ae];
              oe
                ? t.texSubImage2D(34069 + re, Ae + 1, 0, 0, ge, k, nt.image[re])
                : t.texImage2D(34069 + re, Ae + 1, le, ge, k, nt.image[re]);
            }
          }
      }
      E(M, ke) && T(34067),
        (ce.__currentVersion = ce.version),
        M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }

  function se(A, M, W, ee, ce) {
    const fe = s.convert(W.format, W.encoding),
      be = s.convert(W.type),
      q = R(W.internalFormat, fe, be, W.encoding);
    n.get(M).__hasExternalTextures ||
      (ce === 32879 || ce === 35866
        ? t.texImage3D(ce, 0, q, M.width, M.height, M.depth, 0, fe, be, null)
        : t.texImage2D(ce, 0, q, M.width, M.height, 0, fe, be, null)),
      t.bindFramebuffer(36160, A),
      ve(M)
        ? u.framebufferTexture2DMultisampleEXT(
            36160,
            ee,
            ce,
            n.get(W).__webglTexture,
            0,
            we(M)
          )
        : o.framebufferTexture2D(36160, ee, ce, n.get(W).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }

  function Be(A, M, W) {
    if ((o.bindRenderbuffer(36161, A), M.depthBuffer && !M.stencilBuffer)) {
      let ee = 33189;
      if (W || ve(M)) {
        const ce = M.depthTexture;
        ce &&
          ce.isDepthTexture &&
          (ce.type === ui ? (ee = 36012) : ce.type === Oo && (ee = 33190));
        const fe = we(M);
        ve(M)
          ? u.renderbufferStorageMultisampleEXT(
              36161,
              fe,
              ee,
              M.width,
              M.height
            )
          : o.renderbufferStorageMultisample(36161, fe, ee, M.width, M.height);
      } else o.renderbufferStorage(36161, ee, M.width, M.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, A);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const ee = we(M);
      W && ve(M) === !1
        ? o.renderbufferStorageMultisample(36161, ee, 35056, M.width, M.height)
        : ve(M)
        ? u.renderbufferStorageMultisampleEXT(
            36161,
            ee,
            35056,
            M.width,
            M.height
          )
        : o.renderbufferStorage(36161, 34041, M.width, M.height),
        o.framebufferRenderbuffer(36160, 33306, 36161, A);
    } else {
      const ee =
          M.isWebGLMultipleRenderTargets === !0 ? M.texture[0] : M.texture,
        ce = s.convert(ee.format, ee.encoding),
        fe = s.convert(ee.type),
        be = R(ee.internalFormat, ce, fe, ee.encoding),
        q = we(M);
      W && ve(M) === !1
        ? o.renderbufferStorageMultisample(36161, q, be, M.width, M.height)
        : ve(M)
        ? u.renderbufferStorageMultisampleEXT(36161, q, be, M.width, M.height)
        : o.renderbufferStorage(36161, be, M.width, M.height);
    }
    o.bindRenderbuffer(36161, null);
  }

  function j(A, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, A),
      !(M.depthTexture && M.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(M.depthTexture).__webglTexture ||
      M.depthTexture.image.width !== M.width ||
      M.depthTexture.image.height !== M.height) &&
      ((M.depthTexture.image.width = M.width),
      (M.depthTexture.image.height = M.height),
      (M.depthTexture.needsUpdate = !0)),
      Z(M.depthTexture, 0);
    const ee = n.get(M.depthTexture).__webglTexture,
      ce = we(M);
    if (M.depthTexture.format === Gi)
      ve(M)
        ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, ce)
        : o.framebufferTexture2D(36160, 36096, 3553, ee, 0);
    else if (M.depthTexture.format === js)
      ve(M)
        ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, ce)
        : o.framebufferTexture2D(36160, 33306, 3553, ee, 0);
    else throw new Error("Unknown depthTexture format");
  }

  function K(A) {
    const M = n.get(A),
      W = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (W)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      j(M.__webglFramebuffer, A);
    } else if (W) {
      M.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        t.bindFramebuffer(36160, M.__webglFramebuffer[ee]),
          (M.__webglDepthbuffer[ee] = o.createRenderbuffer()),
          Be(M.__webglDepthbuffer[ee], A, !1);
    } else
      t.bindFramebuffer(36160, M.__webglFramebuffer),
        (M.__webglDepthbuffer = o.createRenderbuffer()),
        Be(M.__webglDepthbuffer, A, !1);
    t.bindFramebuffer(36160, null);
  }

  function ne(A, M, W) {
    const ee = n.get(A);
    M !== void 0 && se(ee.__webglFramebuffer, A, A.texture, 36064, 3553),
      W !== void 0 && K(A);
  }

  function me(A) {
    const M = A.texture,
      W = n.get(A),
      ee = n.get(M);
    A.addEventListener("dispose", L),
      A.isWebGLMultipleRenderTargets !== !0 &&
        (ee.__webglTexture === void 0 &&
          (ee.__webglTexture = o.createTexture()),
        (ee.__version = M.version),
        r.memory.textures++);
    const ce = A.isWebGLCubeRenderTarget === !0,
      fe = A.isWebGLMultipleRenderTargets === !0,
      be = w(A) || a;
    if (ce) {
      W.__webglFramebuffer = [];
      for (let q = 0; q < 6; q++)
        W.__webglFramebuffer[q] = o.createFramebuffer();
    } else if (((W.__webglFramebuffer = o.createFramebuffer()), fe))
      if (i.drawBuffers) {
        const q = A.texture;
        for (let Ie = 0, ke = q.length; Ie < ke; Ie++) {
          const ge = n.get(q[Ie]);
          ge.__webglTexture === void 0 &&
            ((ge.__webglTexture = o.createTexture()), r.memory.textures++);
        }
      } else
        console.warn(
          "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
        );
    else if (a && A.samples > 0 && ve(A) === !1) {
      (W.__webglMultisampledFramebuffer = o.createFramebuffer()),
        (W.__webglColorRenderbuffer = o.createRenderbuffer()),
        o.bindRenderbuffer(36161, W.__webglColorRenderbuffer);
      const q = s.convert(M.format, M.encoding),
        Ie = s.convert(M.type),
        ke = R(M.internalFormat, q, Ie, M.encoding),
        ge = we(A);
      o.renderbufferStorageMultisample(36161, ge, ke, A.width, A.height),
        t.bindFramebuffer(36160, W.__webglMultisampledFramebuffer),
        o.framebufferRenderbuffer(
          36160,
          36064,
          36161,
          W.__webglColorRenderbuffer
        ),
        o.bindRenderbuffer(36161, null),
        A.depthBuffer &&
          ((W.__webglDepthRenderbuffer = o.createRenderbuffer()),
          Be(W.__webglDepthRenderbuffer, A, !0)),
        t.bindFramebuffer(36160, null);
    }
    if (ce) {
      t.bindTexture(34067, ee.__webglTexture), Y(34067, M, be);
      for (let q = 0; q < 6; q++)
        se(W.__webglFramebuffer[q], A, M, 36064, 34069 + q);
      E(M, be) && T(34067), t.unbindTexture();
    } else if (fe) {
      const q = A.texture;
      for (let Ie = 0, ke = q.length; Ie < ke; Ie++) {
        const ge = q[Ie],
          k = n.get(ge);
        t.bindTexture(3553, k.__webglTexture),
          Y(3553, ge, be),
          se(W.__webglFramebuffer, A, ge, 36064 + Ie, 3553),
          E(ge, be) && T(3553);
      }
      t.unbindTexture();
    } else {
      let q = 3553;
      (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) &&
        (a
          ? (q = A.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(q, ee.__webglTexture),
        Y(q, M, be),
        se(W.__webglFramebuffer, A, M, 36064, q),
        E(M, be) && T(q),
        t.unbindTexture();
    }
    A.depthBuffer && K(A);
  }

  function de(A) {
    const M = w(A) || a,
      W = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
    for (let ee = 0, ce = W.length; ee < ce; ee++) {
      const fe = W[ee];
      if (E(fe, M)) {
        const be = A.isWebGLCubeRenderTarget ? 34067 : 3553,
          q = n.get(fe).__webglTexture;
        t.bindTexture(be, q), T(be), t.unbindTexture();
      }
    }
  }

  function Ce(A) {
    if (a && A.samples > 0 && ve(A) === !1) {
      const M = A.width,
        W = A.height;
      let ee = 16384;
      const ce = [36064],
        fe = A.stencilBuffer ? 33306 : 36096;
      A.depthBuffer && ce.push(fe);
      const be = n.get(A),
        q = be.__ignoreDepthValues !== void 0 ? be.__ignoreDepthValues : !1;
      q === !1 &&
        (A.depthBuffer && (ee |= 256), A.stencilBuffer && (ee |= 1024)),
        t.bindFramebuffer(36008, be.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, be.__webglFramebuffer),
        q === !0 &&
          (o.invalidateFramebuffer(36008, [fe]),
          o.invalidateFramebuffer(36009, [fe])),
        o.blitFramebuffer(0, 0, M, W, 0, 0, M, W, ee, 9728),
        f && o.invalidateFramebuffer(36008, ce),
        t.bindFramebuffer(36008, null),
        t.bindFramebuffer(36009, be.__webglMultisampledFramebuffer);
    }
  }

  function we(A) {
    return Math.min(l, A.samples);
  }

  function ve(A) {
    const M = n.get(A);
    return (
      a &&
      A.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      M.__useRenderToTexture !== !1
    );
  }

  function st(A) {
    const M = r.render.frame;
    g.get(A) !== M && (g.set(A, M), A.update());
  }

  function Ze(A, M) {
    const W = A.encoding,
      ee = A.format,
      ce = A.type;
    return (
      A.isCompressedTexture === !0 ||
        A.isVideoTexture === !0 ||
        A.format === Tl ||
        (W !== Zn &&
          (W === Ge
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && ee === rn
                ? ((A.format = Tl),
                  (A.minFilter = It),
                  (A.generateMipmaps = !1))
                : (M = ns.sRGBToLinear(M))
              : (ee !== rn || ce !== Ki) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                W
              ))),
      M
    );
  }
  (this.allocateTextureUnit = F),
    (this.resetTextureUnits = H),
    (this.setTexture2D = Z),
    (this.setTexture2DArray = Q),
    (this.setTexture3D = $),
    (this.setTextureCube = ue),
    (this.rebindTextures = ne),
    (this.setupRenderTarget = me),
    (this.updateRenderTargetMipmap = de),
    (this.updateMultisampleRenderTarget = Ce),
    (this.setupDepthRenderbuffer = K),
    (this.setupFrameBufferTexture = se),
    (this.useMultisampledRTT = ve);
}


export { Qy, Wy, ac, ix, jy, md, nx, oc, qy };
