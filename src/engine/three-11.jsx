import { $l, Ge, Zn, Zt, ns } from "./three-01.jsx";
import { Ot, sc } from "./three-03.jsx";
import { md } from "./three-06.jsx";
import { Je } from "./three-07.jsx";
import { cv, ev, ov, yc } from "./three-09.jsx";
Object.defineProperties(Ot.prototype, {
  derivatives: {
    get: function () {
      return (
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        ),
        this.extensions.derivatives
      );
    },
    set: function (o) {
      console.warn(
        "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
      ),
        (this.extensions.derivatives = o);
    },
  },
});
Je.prototype.clearTarget = function (o, e, t, n) {
  console.warn(
    "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
  ),
    this.setRenderTarget(o),
    this.clear(e, t, n);
};
Je.prototype.animate = function (o) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(o);
};
Je.prototype.getCurrentRenderTarget = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
    ),
    this.getRenderTarget()
  );
};
Je.prototype.getMaxAnisotropy = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
    ),
    this.capabilities.getMaxAnisotropy()
  );
};
Je.prototype.getPrecision = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
    ),
    this.capabilities.precision
  );
};
Je.prototype.resetGLState = function () {
  return (
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
  );
};
Je.prototype.supportsFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
    ),
    this.extensions.get("OES_texture_float")
  );
};
Je.prototype.supportsHalfFloatTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
    ),
    this.extensions.get("OES_texture_half_float")
  );
};
Je.prototype.supportsStandardDerivatives = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
    ),
    this.extensions.get("OES_standard_derivatives")
  );
};
Je.prototype.supportsCompressedTextureS3TC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
  );
};
Je.prototype.supportsCompressedTexturePVRTC = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
    ),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
  );
};
Je.prototype.supportsBlendMinMax = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
    ),
    this.extensions.get("EXT_blend_minmax")
  );
};
Je.prototype.supportsVertexTextures = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
    ),
    this.capabilities.vertexTextures
  );
};
Je.prototype.supportsInstancedArrays = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
    ),
    this.extensions.get("ANGLE_instanced_arrays")
  );
};
Je.prototype.enableScissorTest = function (o) {
  console.warn(
    "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
  ),
    this.setScissorTest(o);
};
Je.prototype.initMaterial = function () {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
Je.prototype.addPrePlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
Je.prototype.addPostPlugin = function () {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
Je.prototype.updateShadowMap = function () {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
Je.prototype.setFaceCulling = function () {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
Je.prototype.allocTextureUnit = function () {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
Je.prototype.setTexture = function () {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
Je.prototype.setTexture2D = function () {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
Je.prototype.setTextureCube = function () {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
Je.prototype.getActiveMipMapLevel = function () {
  return (
    console.warn(
      "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
    ),
    this.getActiveMipmapLevel()
  );
};
Object.defineProperties(Je.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
      ),
        (this.shadowMap.enabled = o);
    },
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
      ),
        (this.shadowMap.type = o);
    },
  },
  shadowMapCullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  context: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
        ),
        this.getContext()
      );
    },
  },
  vr: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
        this.xr
      );
    },
  },
  gammaInput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        ),
        !1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
      );
    },
  },
  gammaOutput: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        ),
        !1
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
      ),
        (this.outputEncoding = o === !0 ? Ge : Zn);
    },
  },
  toneMappingWhitePoint: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
        ),
        1
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
      );
    },
  },
  gammaFactor: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
      );
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
    },
  },
});
Object.defineProperties(md.prototype, {
  cullFace: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderReverseSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
  renderSingleSided: {
    get: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
    set: function () {
      console.warn(
        "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
      );
    },
  },
});
Object.defineProperties(Zt.prototype, {
  wrapS: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        (this.texture.wrapS = o);
    },
  },
  wrapT: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        (this.texture.wrapT = o);
    },
  },
  magFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        ),
        this.texture.magFilter
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
      ),
        (this.texture.magFilter = o);
    },
  },
  minFilter: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        ),
        this.texture.minFilter
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
      ),
        (this.texture.minFilter = o);
    },
  },
  anisotropy: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        ),
        this.texture.anisotropy
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
      ),
        (this.texture.anisotropy = o);
    },
  },
  offset: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        ),
        this.texture.offset
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        (this.texture.offset = o);
    },
  },
  repeat: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        ),
        this.texture.repeat
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        (this.texture.repeat = o);
    },
  },
  format: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        ),
        this.texture.format
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        (this.texture.format = o);
    },
  },
  type: {
    get: function () {
      return (
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type
      );
    },
    set: function (o) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        (this.texture.type = o);
    },
  },
  generateMipmaps: {
    get: function () {
      return (
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        ),
        this.texture.generateMipmaps
      );
    },
    set: function (o) {
      console.warn(
        "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
      ),
        (this.texture.generateMipmaps = o);
    },
  },
});
cv.prototype.load = function (o) {
  console.warn(
    "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
  );
  const e = this;
  return (
    new ov().load(o, function (n) {
      e.setBuffer(n);
    }),
    this
  );
};
sc.prototype.updateCubeMap = function (o, e) {
  return (
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(o, e)
  );
};
sc.prototype.clear = function (o, e, t, n) {
  return (
    console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(o, e, t, n)
  );
};
ns.crossOrigin = void 0;
ns.loadTexture = function (o, e, t, n) {
  console.warn(
    "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
  );
  const i = new yc();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(o, t, void 0, n);
  return e && (s.mapping = e), s;
};
ns.loadTextureCube = function (o, e, t, n) {
  console.warn(
    "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
  );
  const i = new ev();
  i.setCrossOrigin(this.crossOrigin);
  const s = i.load(o, t, void 0, n);
  return e && (s.mapping = e), s;
};
ns.loadCompressedTexture = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
  );
};
ns.loadCompressedTextureCube = function () {
  console.error(
    "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
  );
};
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", {
      detail: {
        revision: $l,
      },
    })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = $l));
class Ai {
  constructor() {
    (this.callbacks = {}), (this.callbacks.base = {});
  }
  on(e, t) {
    return typeof e > "u" || e === ""
      ? (console.warn("wrong names"), !1)
      : typeof t > "u"
      ? (console.warn("wrong callback"), !1)
      : (this.resolveNames(e).forEach((i) => {
          const s = this.resolveName(i);
          this.callbacks[s.namespace] instanceof Object ||
            (this.callbacks[s.namespace] = {}),
            this.callbacks[s.namespace][s.value] instanceof Array ||
              (this.callbacks[s.namespace][s.value] = []),
            this.callbacks[s.namespace][s.value].push(t);
        }),
        this);
  }
  off(e) {
    return typeof e > "u" || e === ""
      ? (console.warn("wrong name"), !1)
      : (this.resolveNames(e).forEach((n) => {
          const i = this.resolveName(n);
          if (i.namespace !== "base" && i.value === "")
            delete this.callbacks[i.namespace];
          else if (i.namespace === "base")
            for (const s in this.callbacks)
              this.callbacks[s] instanceof Object &&
                this.callbacks[s][i.value] instanceof Array &&
                (delete this.callbacks[s][i.value],
                Object.keys(this.callbacks[s]).length === 0 &&
                  delete this.callbacks[s]);
          else
            this.callbacks[i.namespace] instanceof Object &&
              this.callbacks[i.namespace][i.value] instanceof Array &&
              (delete this.callbacks[i.namespace][i.value],
              Object.keys(this.callbacks[i.namespace]).length === 0 &&
                delete this.callbacks[i.namespace]);
        }),
        this);
  }
  trigger(e, t) {
    if (typeof e > "u" || e === "") return console.warn("wrong name"), !1;
    let n = null;
    const i = t instanceof Array ? t : [];
    let s = this.resolveNames(e);
    if (((s = this.resolveName(s[0])), s.namespace === "base"))
      for (const r in this.callbacks)
        this.callbacks[r] instanceof Object &&
          this.callbacks[r][s.value] instanceof Array &&
          this.callbacks[r][s.value].forEach(function (a) {
            a.apply(this, i);
          });
    else if (this.callbacks[s.namespace] instanceof Object) {
      if (s.value === "") return console.warn("wrong name"), this;
      this.callbacks[s.namespace][s.value].forEach(function (r) {
        r.apply(this, i);
      });
    }
    return n;
  }
  resolveNames(e) {
    let t = e;
    return (
      (t = t.replace(/[^a-zA-Z0-9 ,/.]/g, "")),
      (t = t.replace(/[,/]+/g, " ")),
      (t = t.split(" ")),
      t
    );
  }
  resolveName(e) {
    const t = {},
      n = e.split(".");
    return (
      (t.original = e),
      (t.value = n[0]),
      (t.namespace = "base"),
      n.length > 1 && n[1] !== "" && (t.namespace = n[1]),
      t
    );
  }
}

export { Ai };
