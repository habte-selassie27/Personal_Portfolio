import { ht } from "./three-03.jsx";
import { $t, Ac, Af, Bs, If, Jt, Kt, Nf, Of, Pf, Sc, Tt, Us, Wi, Wt, Xr, Xt, bi, ef, kc, kt, lf, pt, qt, tf } from "./gsap-core.jsx";
import { et, yn } from "./gsap-tail.jsx";
import { ye } from "./engine-main.jsx";
var Lu,
  fi,
  Gs,
  Bc,
  Ui,
  Ru,
  Oc,
  Tb = function () {
    return typeof window < "u";
  },
  ei = {},
  Bi = 180 / Math.PI,
  Vs = Math.PI / 180,
  Ls = Math.atan2,
  Pu = 1e8,
  Nc = /([A-Z])/g,
  Eb = /(left|right|width|margin|padding|x)/i,
  Ab = /[\s,\(]\S/,
  Rn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  ql = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Cb = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Lb = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Rb = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Gf = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Vf = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Pb = function (e, t, n) {
    return (e.style[t] = n);
  },
  Ib = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  Db = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  kb = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Fb = function (e, t, n, i, s) {
    var r = e._gsap;
    (r.scaleX = r.scaleY = n), r.renderTransform(s, r);
  },
  Bb = function (e, t, n, i, s) {
    var r = e._gsap;
    (r[t] = n), r.renderTransform(s, r);
  },
  at = "transform",
  vn = at + "Origin",
  Ob = function o(e, t) {
    var n = this,
      i = this.target,
      s = i.style;
    if (e in ei && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Rn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (r) {
                return (n.tfm[r] = jn(i, r));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : jn(i, e));
      else
        return Rn.transform.split(",").forEach(function (r) {
          return o.call(n, r, t);
        });
      if (this.props.indexOf(at) >= 0) return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(vn, t, "")),
        (e = at);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Wf = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Nb = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      s,
      r;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (n[e[s]] = e[s + 2])
        : n.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(Nc, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (r in this.tfm) i[r] = this.tfm[r];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Oc()),
        (!s || !s.isStart) && !n[at] && (Wf(n), (i.uncache = 1));
    }
  },
  qf = function (e, t) {
    var n = {
      target: e,
      props: [],
      revert: Nb,
      save: Ob,
    };
    return (
      e._gsap || Xt.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  Xf,
  Xl = function (e, t) {
    var n = fi.createElementNS
      ? fi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : fi.createElement(e);
    return n.style ? n : fi.createElement(e);
  },
  In = function o(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(Nc, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && o(e, nr(t) || t, 1)) ||
      ""
    );
  },
  Iu = "O,Moz,ms,Ms,Webkit".split(","),
  nr = function (e, t, n) {
    var i = t || Ui,
      s = i.style,
      r = 5;
    if (e in s && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      r-- && !(Iu[r] + e in s);

    );
    return r < 0 ? null : (r === 3 ? "ms" : r >= 0 ? Iu[r] : "") + e;
  },
  jl = function () {
    Tb() &&
      window.document &&
      ((Lu = window),
      (fi = Lu.document),
      (Gs = fi.documentElement),
      (Ui = Xl("div") || {
        style: {},
      }),
      Xl("div"),
      (at = nr(at)),
      (vn = at + "Origin"),
      (Ui.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Xf = !!nr("perspective")),
      (Oc = Xt.core.reverting),
      (Bc = 1));
  },
  gl = function o(e) {
    var t = Xl(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      r;
    if (
      (Gs.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (r = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o);
      } catch {}
    else this._gsapBBox && (r = this._gsapBBox());
    return (
      n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
      Gs.removeChild(t),
      (this.style.cssText = s),
      r
    );
  },
  Du = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  jf = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = gl.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === gl || (t = gl.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Du(e, ["x", "cx", "x1"]) || 0,
            y: +Du(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Yf = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && jf(e));
  },
  Jr = function (e, t) {
    if (t) {
      var n = e.style;
      t in ei && t !== vn && (t = at),
        n.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            n.removeProperty(t.replace(Nc, "-$1").toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  pi = function (e, t, n, i, s, r) {
    var a = new qt(e._pt, t, n, 0, 1, r ? Vf : Gf);
    return (e._pt = a), (a.b = i), (a.e = s), e._props.push(n), a;
  },
  ku = {
    deg: 1,
    rad: 1,
    turn: 1,
  },
  zb = {
    grid: 1,
    flex: 1,
  },
  Ti = function o(e, t, n, i) {
    var s = parseFloat(n) || 0,
      r = (n + "").trim().substr((s + "").length) || "px",
      a = Ui.style,
      c = Eb.test(t),
      h = e.tagName.toLowerCase() === "svg",
      d = (h ? "client" : "offset") + (c ? "Width" : "Height"),
      l = 100,
      u = i === "px",
      f = i === "%",
      g,
      p,
      m,
      _;
    return i === r || !s || ku[i] || ku[r]
      ? s
      : (r !== "px" && !u && (s = o(e, t, n, "px")),
        (_ = e.getCTM && Yf(e)),
        (f || r === "%") && (ei[t] || ~t.indexOf("adius"))
          ? ((g = _ ? e.getBBox()[c ? "width" : "height"] : e[d]),
            pt(f ? (s / g) * l : (s / 100) * g))
          : ((a[c ? "width" : "height"] = l + (u ? r : i)),
            (p =
              ~t.indexOf("adius") || (i === "em" && e.appendChild && !h)
                ? e
                : e.parentNode),
            _ && (p = (e.ownerSVGElement || {}).parentNode),
            (!p || p === fi || !p.appendChild) && (p = fi.body),
            (m = p._gsap),
            m && f && m.width && c && m.time === Kt.time && !m.uncache
              ? pt((s / m.width) * l)
              : ((f || r === "%") &&
                  !zb[In(p, "display")] &&
                  (a.position = In(e, "position")),
                p === e && (a.position = "static"),
                p.appendChild(Ui),
                (g = Ui[d]),
                p.removeChild(Ui),
                (a.position = "absolute"),
                c && f && ((m = Wi(p)), (m.time = Kt.time), (m.width = p[d])),
                pt(u ? (g * s) / l : g && s ? (l / g) * s : 0))));
  },
  jn = function (e, t, n, i) {
    var s;
    return (
      Bc || jl(),
      t in Rn &&
        t !== "transform" &&
        ((t = Rn[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      ei[t] && t !== "transform"
        ? ((s = Zr(e, i)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : ta(In(e, vn)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (ea[t] && ea[t](e, t, n)) ||
              In(e, t) ||
              lf(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(s + "").trim().indexOf(" ") ? Ti(e, t, s, n) + n : s
    );
  },
  Hb = function (e, t, n, i) {
    if (!n || n === "none") {
      var s = nr(t, e, 1),
        r = s && In(e, s, 1);
      r && r !== n
        ? ((t = s), (n = r))
        : t === "borderColor" && (n = In(e, "borderTopColor"));
    }
    var a = new qt(this._pt, e.style, t, 0, 1, Of),
      c = 0,
      h = 0,
      d,
      l,
      u,
      f,
      g,
      p,
      m,
      _,
      y,
      b,
      w,
      x;
    if (
      ((a.b = n),
      (a.e = i),
      (n += ""),
      (i += ""),
      i === "auto" && ((e.style[t] = i), (i = In(e, t) || i), (e.style[t] = n)),
      (d = [n, i]),
      Af(d),
      (n = d[0]),
      (i = d[1]),
      (u = n.match(Bs) || []),
      (x = i.match(Bs) || []),
      x.length)
    ) {
      for (; (l = Bs.exec(i)); )
        (m = l[0]),
          (y = i.substring(c, l.index)),
          g
            ? (g = (g + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
          m !== (p = u[h++] || "") &&
            ((f = parseFloat(p) || 0),
            (w = p.substr((f + "").length)),
            m.charAt(1) === "=" && (m = Us(f, m) + w),
            (_ = parseFloat(m)),
            (b = m.substr((_ + "").length)),
            (c = Bs.lastIndex - b.length),
            b ||
              ((b = b || $t.units[t] || w),
              c === i.length && ((i += b), (a.e += b))),
            w !== b && (f = Ti(e, t, p, b) || 0),
            (a._pt = {
              _next: a._pt,
              p: y || h === 1 ? y : ",",
              s: f,
              c: _ - f,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = c < i.length ? i.substring(c, i.length) : "";
    } else a.r = t === "display" && i === "none" ? Vf : Gf;
    return tf.test(i) && (a.e = 0), (this._pt = a), a;
  },
  Fu = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%",
  },
  Ub = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = Fu[n] || n),
      (t[1] = Fu[i] || i),
      t.join(" ")
    );
  },
  Gb = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        s = t.u,
        r = n._gsap,
        a,
        c,
        h;
      if (s === "all" || s === !0) (i.cssText = ""), (c = 1);
      else
        for (s = s.split(","), h = s.length; --h > -1; )
          (a = s[h]),
            ei[a] && ((c = 1), (a = a === "transformOrigin" ? vn : at)),
            Jr(n, a);
      c &&
        (Jr(n, at),
        r &&
          (r.svg && n.removeAttribute("transform"),
          Zr(n, 1),
          (r.uncache = 1),
          Wf(i)));
    }
  },
  ea = {
    clearProps: function (e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var r = (e._pt = new qt(e._pt, t, n, 0, 0, Gb));
        return (r.u = i), (r.pr = -10), (r.tween = s), e._props.push(n), 1;
      }
    },
  },
  Kr = [1, 0, 0, 1, 0, 0],
  Jf = {},
  Kf = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Bu = function (e) {
    var t = In(e, at);
    return Kf(t) ? Kr : t.substr(7).match(ef).map(pt);
  },
  zc = function (e, t) {
    var n = e._gsap || Wi(e),
      i = e.style,
      s = Bu(e),
      r,
      a,
      c,
      h;
    return n.svg && e.getAttribute("transform")
      ? ((c = e.transform.baseVal.consolidate().matrix),
        (s = [c.a, c.b, c.c, c.d, c.e, c.f]),
        s.join(",") === "1,0,0,1,0,0" ? Kr : s)
      : (s === Kr &&
          !e.offsetParent &&
          e !== Gs &&
          !n.svg &&
          ((c = i.display),
          (i.display = "block"),
          (r = e.parentNode),
          (!r || !e.offsetParent) &&
            ((h = 1), (a = e.nextElementSibling), Gs.appendChild(e)),
          (s = Bu(e)),
          c ? (i.display = c) : Jr(e, "display"),
          h &&
            (a
              ? r.insertBefore(e, a)
              : r
              ? r.appendChild(e)
              : Gs.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Yl = function (e, t, n, i, s, r) {
    var a = e._gsap,
      c = s || zc(e, !0),
      h = a.xOrigin || 0,
      d = a.yOrigin || 0,
      l = a.xOffset || 0,
      u = a.yOffset || 0,
      f = c[0],
      g = c[1],
      p = c[2],
      m = c[3],
      _ = c[4],
      y = c[5],
      b = t.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0,
      E,
      T,
      R,
      I;
    n
      ? c !== Kr &&
        (T = f * m - g * p) &&
        ((R = w * (m / T) + x * (-p / T) + (p * y - m * _) / T),
        (I = w * (-g / T) + x * (f / T) - (f * y - g * _) / T),
        (w = R),
        (x = I))
      : ((E = jf(e)),
        (w = E.x + (~b[0].indexOf("%") ? (w / 100) * E.width : w)),
        (x = E.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * E.height : x))),
      i || (i !== !1 && a.smooth)
        ? ((_ = w - h),
          (y = x - d),
          (a.xOffset = l + (_ * f + y * p) - _),
          (a.yOffset = u + (_ * g + y * m) - y))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = w),
      (a.yOrigin = x),
      (a.smooth = !!i),
      (a.origin = t),
      (a.originIsAbsolute = !!n),
      (e.style[vn] = "0px 0px"),
      r &&
        (pi(r, a, "xOrigin", h, w),
        pi(r, a, "yOrigin", d, x),
        pi(r, a, "xOffset", l, a.xOffset),
        pi(r, a, "yOffset", u, a.yOffset)),
      e.setAttribute("data-svg-origin", w + " " + x);
  },
  Zr = function (e, t) {
    var n = e._gsap || new Pf(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      s = n.scaleX < 0,
      r = "px",
      a = "deg",
      c = getComputedStyle(e),
      h = In(e, vn) || "0",
      d,
      l,
      u,
      f,
      g,
      p,
      m,
      _,
      y,
      b,
      w,
      x,
      E,
      T,
      R,
      I,
      B,
      v,
      L,
      U,
      D,
      O,
      N,
      H,
      F,
      X,
      Z,
      Q,
      $,
      ue,
      Me,
      xe;
    return (
      (d = l = u = p = m = _ = y = b = w = 0),
      (f = g = 1),
      (n.svg = !!(e.getCTM && Yf(e))),
      c.translate &&
        ((c.translate !== "none" ||
          c.scale !== "none" ||
          c.rotate !== "none") &&
          (i[at] =
            (c.translate !== "none"
              ? "translate3d(" +
                (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
            (c.scale !== "none"
              ? "scale(" + c.scale.split(" ").join(",") + ") "
              : "") +
            (c[at] !== "none" ? c[at] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (T = zc(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((F = e.getBBox()),
            (h = n.xOrigin - F.x + "px " + (n.yOrigin - F.y) + "px"),
            (H = ""))
          : (H = !t && e.getAttribute("data-svg-origin")),
        Yl(e, H || h, !!H || n.originIsAbsolute, n.smooth !== !1, T)),
      (x = n.xOrigin || 0),
      (E = n.yOrigin || 0),
      T !== Kr &&
        ((v = T[0]),
        (L = T[1]),
        (U = T[2]),
        (D = T[3]),
        (d = O = T[4]),
        (l = N = T[5]),
        T.length === 6
          ? ((f = Math.sqrt(v * v + L * L)),
            (g = Math.sqrt(D * D + U * U)),
            (p = v || L ? Ls(L, v) * Bi : 0),
            (y = U || D ? Ls(U, D) * Bi + p : 0),
            y && (g *= Math.abs(Math.cos(y * Vs))),
            n.svg && ((d -= x - (x * v + E * U)), (l -= E - (x * L + E * D))))
          : ((xe = T[6]),
            (ue = T[7]),
            (Z = T[8]),
            (Q = T[9]),
            ($ = T[10]),
            (Me = T[11]),
            (d = T[12]),
            (l = T[13]),
            (u = T[14]),
            (R = Ls(xe, $)),
            (m = R * Bi),
            R &&
              ((I = Math.cos(-R)),
              (B = Math.sin(-R)),
              (H = O * I + Z * B),
              (F = N * I + Q * B),
              (X = xe * I + $ * B),
              (Z = O * -B + Z * I),
              (Q = N * -B + Q * I),
              ($ = xe * -B + $ * I),
              (Me = ue * -B + Me * I),
              (O = H),
              (N = F),
              (xe = X)),
            (R = Ls(-U, $)),
            (_ = R * Bi),
            R &&
              ((I = Math.cos(-R)),
              (B = Math.sin(-R)),
              (H = v * I - Z * B),
              (F = L * I - Q * B),
              (X = U * I - $ * B),
              (Me = D * B + Me * I),
              (v = H),
              (L = F),
              (U = X)),
            (R = Ls(L, v)),
            (p = R * Bi),
            R &&
              ((I = Math.cos(R)),
              (B = Math.sin(R)),
              (H = v * I + L * B),
              (F = O * I + N * B),
              (L = L * I - v * B),
              (N = N * I - O * B),
              (v = H),
              (O = F)),
            m &&
              Math.abs(m) + Math.abs(p) > 359.9 &&
              ((m = p = 0), (_ = 180 - _)),
            (f = pt(Math.sqrt(v * v + L * L + U * U))),
            (g = pt(Math.sqrt(N * N + xe * xe))),
            (R = Ls(O, N)),
            (y = Math.abs(R) > 2e-4 ? R * Bi : 0),
            (w = Me ? 1 / (Me < 0 ? -Me : Me) : 0)),
        n.svg &&
          ((H = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !Kf(In(e, at))),
          H && e.setAttribute("transform", H))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((f *= -1), (y += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((g *= -1), (y += y <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        d -
        ((n.xPercent =
          d &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        r),
      (n.y =
        l -
        ((n.yPercent =
          l &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        r),
      (n.z = u + r),
      (n.scaleX = pt(f)),
      (n.scaleY = pt(g)),
      (n.rotation = pt(p) + a),
      (n.rotationX = pt(m) + a),
      (n.rotationY = pt(_) + a),
      (n.skewX = y + a),
      (n.skewY = b + a),
      (n.transformPerspective = w + r),
      (n.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (i[vn] = ta(h)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = $t.force3D),
      (n.renderTransform = n.svg ? Wb : Xf ? Zf : Vb),
      (n.uncache = 0),
      n
    );
  },
  ta = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  _l = function (e, t, n) {
    var i = kt(t);
    return pt(parseFloat(t) + parseFloat(Ti(e, "x", n + "px", i))) + i;
  },
  Vb = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Zf(e, t);
  },
  Di = "0deg",
  vr = "0px",
  ki = ") ",
  Zf = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      r = n.x,
      a = n.y,
      c = n.z,
      h = n.rotation,
      d = n.rotationY,
      l = n.rotationX,
      u = n.skewX,
      f = n.skewY,
      g = n.scaleX,
      p = n.scaleY,
      m = n.transformPerspective,
      _ = n.force3D,
      y = n.target,
      b = n.zOrigin,
      w = "",
      x = (_ === "auto" && e && e !== 1) || _ === !0;
    if (b && (l !== Di || d !== Di)) {
      var E = parseFloat(d) * Vs,
        T = Math.sin(E),
        R = Math.cos(E),
        I;
      (E = parseFloat(l) * Vs),
        (I = Math.cos(E)),
        (r = _l(y, r, T * I * -b)),
        (a = _l(y, a, -Math.sin(E) * -b)),
        (c = _l(y, c, R * I * -b + b));
    }
    m !== vr && (w += "perspective(" + m + ki),
      (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
      (x || r !== vr || a !== vr || c !== vr) &&
        (w +=
          c !== vr || x
            ? "translate3d(" + r + ", " + a + ", " + c + ") "
            : "translate(" + r + ", " + a + ki),
      h !== Di && (w += "rotate(" + h + ki),
      d !== Di && (w += "rotateY(" + d + ki),
      l !== Di && (w += "rotateX(" + l + ki),
      (u !== Di || f !== Di) && (w += "skew(" + u + ", " + f + ki),
      (g !== 1 || p !== 1) && (w += "scale(" + g + ", " + p + ki),
      (y.style[at] = w || "translate(0, 0)");
  },
  Wb = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      r = n.x,
      a = n.y,
      c = n.rotation,
      h = n.skewX,
      d = n.skewY,
      l = n.scaleX,
      u = n.scaleY,
      f = n.target,
      g = n.xOrigin,
      p = n.yOrigin,
      m = n.xOffset,
      _ = n.yOffset,
      y = n.forceCSS,
      b = parseFloat(r),
      w = parseFloat(a),
      x,
      E,
      T,
      R,
      I;
    (c = parseFloat(c)),
      (h = parseFloat(h)),
      (d = parseFloat(d)),
      d && ((d = parseFloat(d)), (h += d), (c += d)),
      c || h
        ? ((c *= Vs),
          (h *= Vs),
          (x = Math.cos(c) * l),
          (E = Math.sin(c) * l),
          (T = Math.sin(c - h) * -u),
          (R = Math.cos(c - h) * u),
          h &&
            ((d *= Vs),
            (I = Math.tan(h - d)),
            (I = Math.sqrt(1 + I * I)),
            (T *= I),
            (R *= I),
            d &&
              ((I = Math.tan(d)),
              (I = Math.sqrt(1 + I * I)),
              (x *= I),
              (E *= I))),
          (x = pt(x)),
          (E = pt(E)),
          (T = pt(T)),
          (R = pt(R)))
        : ((x = l), (R = u), (E = T = 0)),
      ((b && !~(r + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
        ((b = Ti(f, "x", r, "px")), (w = Ti(f, "y", a, "px"))),
      (g || p || m || _) &&
        ((b = pt(b + g - (g * x + p * T) + m)),
        (w = pt(w + p - (g * E + p * R) + _))),
      (i || s) &&
        ((I = f.getBBox()),
        (b = pt(b + (i / 100) * I.width)),
        (w = pt(w + (s / 100) * I.height))),
      (I =
        "matrix(" + x + "," + E + "," + T + "," + R + "," + b + "," + w + ")"),
      f.setAttribute("transform", I),
      y && (f.style[at] = I);
  },
  qb = function (e, t, n, i, s) {
    var r = 360,
      a = Tt(s),
      c = parseFloat(s) * (a && ~s.indexOf("rad") ? Bi : 1),
      h = c - i,
      d = i + h + "deg",
      l,
      u;
    return (
      a &&
        ((l = s.split("_")[1]),
        l === "short" && ((h %= r), h !== h % (r / 2) && (h += h < 0 ? r : -r)),
        l === "cw" && h < 0
          ? (h = ((h + r * Pu) % r) - ~~(h / r) * r)
          : l === "ccw" && h > 0 && (h = ((h - r * Pu) % r) - ~~(h / r) * r)),
      (e._pt = u = new qt(e._pt, t, n, i, h, Cb)),
      (u.e = d),
      (u.u = "deg"),
      e._props.push(n),
      u
    );
  },
  Ou = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Xb = function (e, t, n) {
    var i = Ou({}, n._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      r = n.style,
      a,
      c,
      h,
      d,
      l,
      u,
      f,
      g;
    i.svg
      ? ((h = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (r[at] = t),
        (a = Zr(n, 1)),
        Jr(n, at),
        n.setAttribute("transform", h))
      : ((h = getComputedStyle(n)[at]),
        (r[at] = t),
        (a = Zr(n, 1)),
        (r[at] = h));
    for (c in ei)
      (h = i[c]),
        (d = a[c]),
        h !== d &&
          s.indexOf(c) < 0 &&
          ((f = kt(h)),
          (g = kt(d)),
          (l = f !== g ? Ti(n, c, h, g) : parseFloat(h)),
          (u = parseFloat(d)),
          (e._pt = new qt(e._pt, a, c, l, u - l, ql)),
          (e._pt.u = g || 0),
          e._props.push(c));
    Ou(a, i);
  };
Wt("padding,margin,Width,Radius", function (o, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    s = "Left",
    r = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function (a) {
      return e < 2 ? o + a : "border" + a + o;
    });
  ea[e > 1 ? "border" + o : o] = function (a, c, h, d, l) {
    var u, f;
    if (arguments.length < 4)
      return (
        (u = r.map(function (g) {
          return jn(a, g, h);
        })),
        (f = u.join(" ")),
        f.split(u[0]).length === 5 ? u[0] : f
      );
    (u = (d + "").split(" ")),
      (f = {}),
      r.forEach(function (g, p) {
        return (f[g] = u[p] = u[p] || u[((p - 1) / 2) | 0]);
      }),
      a.init(c, f, l);
  };
});
var $f = {
  name: "css",
  register: jl,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, s) {
    var r = this._props,
      a = e.style,
      c = n.vars.startAt,
      h,
      d,
      l,
      u,
      f,
      g,
      p,
      m,
      _,
      y,
      b,
      w,
      x,
      E,
      T,
      R;
    Bc || jl(),
      (this.styles = this.styles || qf(e)),
      (R = this.styles.props),
      (this.tween = n);
    for (p in t)
      if (p !== "autoRound" && ((d = t[p]), !(Jt[p] && If(p, t, n, i, e, s)))) {
        if (
          ((f = typeof d),
          (g = ea[p]),
          f === "function" && ((d = d.call(n, i, e, s)), (f = typeof d)),
          f === "string" && ~d.indexOf("random(") && (d = Xr(d)),
          g)
        )
          g(this, e, p, d, n) && (T = 1);
        else if (p.substr(0, 2) === "--")
          (h = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (d += ""),
            (bi.lastIndex = 0),
            bi.test(h) || ((m = kt(h)), (_ = kt(d))),
            _ ? m !== _ && (h = Ti(e, p, h, _) + _) : m && (d += m),
            this.add(a, "setProperty", h, d, i, s, 0, 0, p),
            r.push(p),
            R.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (
            (c && p in c
              ? ((h = typeof c[p] == "function" ? c[p].call(n, i, e, s) : c[p]),
                Tt(h) && ~h.indexOf("random(") && (h = Xr(h)),
                kt(h + "") || (h += $t.units[p] || kt(jn(e, p)) || ""),
                (h + "").charAt(1) === "=" && (h = jn(e, p)))
              : (h = jn(e, p)),
            (u = parseFloat(h)),
            (y = f === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
            y && (d = d.substr(2)),
            (l = parseFloat(d)),
            p in Rn &&
              (p === "autoAlpha" &&
                (u === 1 && jn(e, "visibility") === "hidden" && l && (u = 0),
                R.push("visibility", 0, a.visibility),
                pi(
                  this,
                  a,
                  "visibility",
                  u ? "inherit" : "hidden",
                  l ? "inherit" : "hidden",
                  !l
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = Rn[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (b = p in ei),
            b)
          ) {
            if (
              (this.styles.save(p),
              w ||
                ((x = e._gsap),
                (x.renderTransform && !t.parseTransform) ||
                  Zr(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && x.smooth),
                (w = this._pt =
                  new qt(this._pt, a, at, 0, 1, x.renderTransform, x, 0, -1)),
                (w.dep = 1)),
              p === "scale")
            )
              (this._pt = new qt(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (y ? Us(x.scaleY, y + l) : l) - x.scaleY || 0,
                ql
              )),
                (this._pt.u = 0),
                r.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              R.push(vn, 0, a[vn]),
                (d = Ub(d)),
                x.svg
                  ? Yl(e, d, 0, E, 0, this)
                  : ((_ = parseFloat(d.split(" ")[2]) || 0),
                    _ !== x.zOrigin && pi(this, x, "zOrigin", x.zOrigin, _),
                    pi(this, a, p, ta(h), ta(d)));
              continue;
            } else if (p === "svgOrigin") {
              Yl(e, d, 1, E, 0, this);
              continue;
            } else if (p in Jf) {
              qb(this, x, p, u, y ? Us(u, y + d) : d);
              continue;
            } else if (p === "smoothOrigin") {
              pi(this, x, "smooth", x.smooth, d);
              continue;
            } else if (p === "force3D") {
              x[p] = d;
              continue;
            } else if (p === "transform") {
              Xb(this, d, e);
              continue;
            }
          } else p in a || (p = nr(p) || p);
          if (b || ((l || l === 0) && (u || u === 0) && !Ab.test(d) && p in a))
            (m = (h + "").substr((u + "").length)),
              l || (l = 0),
              (_ = kt(d) || (p in $t.units ? $t.units[p] : m)),
              m !== _ && (u = Ti(e, p, h, _)),
              (this._pt = new qt(
                this._pt,
                b ? x : a,
                p,
                u,
                (y ? Us(u, y + l) : l) - u,
                !b && (_ === "px" || p === "zIndex") && t.autoRound !== !1
                  ? Rb
                  : ql
              )),
              (this._pt.u = _ || 0),
              m !== _ && _ !== "%" && ((this._pt.b = h), (this._pt.r = Lb));
          else if (p in a) Hb.call(this, e, p, h, y ? y + d : d);
          else if (p in e) this.add(e, p, h || e[p], y ? y + d : d, i, s);
          else if (p !== "parseTransform") {
            Ac(p, d);
            continue;
          }
          b || (p in a ? R.push(p, 0, a[p]) : R.push(p, 1, h || e[p])),
            r.push(p);
        }
      }
    T && Nf(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Oc())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: jn,
  aliases: Rn,
  getSetter: function (e, t, n) {
    var i = Rn[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in ei && t !== vn && (e._gsap.x || jn(e, "x"))
        ? n && Ru === n
          ? t === "scale"
            ? kb
            : Db
          : (Ru = n || {}) && (t === "scale" ? Fb : Bb)
        : e.style && !Sc(e.style[t])
        ? Pb
        : ~t.indexOf("-")
        ? Ib
        : kc(e, t)
    );
  },
  core: {
    _removeProperty: Jr,
    _getMatrix: zc,
  },
};
Xt.utils.checkPrefix = nr;
Xt.core.getStyleSaver = qf;
(function (o, e, t, n) {
  var i = Wt(o + "," + e + "," + t, function (s) {
    ei[s] = 1;
  });
  Wt(e, function (s) {
    ($t.units[s] = "deg"), (Jf[s] = 1);
  }),
    (Rn[i[13]] = o + "," + e),
    Wt(n, function (s) {
      var r = s.split(":");
      Rn[r[1]] = i[r[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Wt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    $t.units[o] = "px";
  }
);
Xt.registerPlugin($f);
var P = Xt.registerPlugin($f) || Xt;
P.core.Tween;
class jb {
  constructor() {
    (this.experience = new ye()),
      (this.scene = this.experience.scene),
      (this.resources = this.experience.resources),
      (this.time = this.experience.time),
      (this.shadow = this.experience.world.landingPage.roomShadow),
      (this.sounds = this.experience.sounds),
      (this.desktopLayers = {}),
      this.setModel(),
      this.setMaterial(),
      this.addShadow();
  }
  setModel() {
    (this.model = this.resources.items.roomModel.scene),
      (this.baseModel = this.model.children.find(
        (e) => e.name === "room-base"
      )),
      (this.shelving = this.model.children.find((e) => e.name === "shelving")),
      (this.picture = this.model.children.find((e) => e.name === "picture")),
      (this.blackboard = this.model.children.find(
        (e) => e.name === "blackboard"
      )),
      (this.plant = this.model.children.find((e) => e.name === "plant")),
      (this.chair = this.model.children.find((e) => e.name === "chair")),
      (this.speaker = this.model.children.find((e) => e.name === "speaker")),
      (this.penguin = this.model.children.find((e) => e.name === "penguin")),
      this.baseModel.add(this.speaker),
      this.baseModel.add(this.penguin),
      this.baseModel.add(this.speaker),
      this.baseModel.add(this.chair),
      (this.deskopPlane0 = this.model.children.find(
        (e) => e.name === "desktop-plane-0"
      )),
      (this.deskopPlane1 = this.model.children.find(
        (e) => e.name === "desktop-plane-1"
      )),
      this.baseModel.add(this.deskopPlane0),
      this.baseModel.add(this.deskopPlane1),
      (this.model.rotation.y = -Math.PI / 2),
      (this.model.position.y -= 5.7),
      this.scene.add(this.model);
  }
  setMaterial() {
    (this.texture = this.resources.items.bakedRoomTexture),
      (this.texture.flipY = !1),
      (this.material = new ht({
        map: this.texture,
        transparent: !0,
        fog: !1,
      })),
      this.model.traverse((e) => {
        e.material = this.material;
      });
  }
  addShadow() {
    this.model.add(this.shadow.model);
  }
  bounceIn(e = 0, t = !1) {
    P.fromTo(
      this.baseModel.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: yn.easeOut.config(1.5),
        delay: e,
      }
    ),
      P.fromTo(
        this.shadow.material.uniforms.uOpacity,
        {
          value: 0,
        },
        {
          value: 1,
          duration: 0.4,
          delay: e + (t ? 0.5 : 0.23),
          ease: et.easeOut,
        }
      ),
      t &&
        (P.fromTo(
          this.shelving.scale,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
            ease: yn.easeOut.config(1.5),
            delay: e + 0.25,
          }
        ),
        P.fromTo(
          this.picture.scale,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
            ease: yn.easeOut.config(1.5),
            delay: e + 0.32,
          }
        ),
        P.fromTo(
          this.blackboard.scale,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
            ease: yn.easeOut.config(1.5),
            delay: e + 0.39,
          }
        ),
        P.fromTo(
          this.plant.scale,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
            ease: yn.easeOut.config(1.5),
            delay: e + 0.46,
          }
        ));
  }
  bounceOut(e = 0) {
    P.fromTo(
      this.baseModel.scale,
      {
        x: 1,
        y: 1,
        z: 1,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: yn.easeIn.config(1.5),
        delay: e,
      }
    ),
      P.fromTo(
        this.shadow.material.uniforms.uOpacity,
        {
          value: 1,
        },
        {
          value: 0,
          duration: 0.15,
          delay: e + 0.25,
        }
      );
  }
}
var Hc = `varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,
  Uc = `uniform sampler2D alphaMask;
uniform vec3 uColor;
uniform float uOpacity;

varying vec2 vUv;

void main()
{
    float alpha = texture2D(alphaMask, vUv).r;

    alpha = (1.0 - alpha) * uOpacity;

    gl_FragColor = vec4(uColor, alpha);
}`;

export { Hc, P, Uc, jb };
