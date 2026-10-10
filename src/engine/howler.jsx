import { Mr, Ni } from "./app-scroll.jsx";
(function (o) {
  (function () {
    var e = function () {
      this.init();
    };
    e.prototype = {
      init: function () {
        var l = this || t;
        return (
          (l._counter = 1e3),
          (l._html5AudioPool = []),
          (l.html5PoolSize = 10),
          (l._codecs = {}),
          (l._howls = []),
          (l._muted = !1),
          (l._volume = 1),
          (l._canPlayEvent = "canplaythrough"),
          (l._navigator =
            typeof window < "u" && window.navigator ? window.navigator : null),
          (l.masterGain = null),
          (l.noAudio = !1),
          (l.usingWebAudio = !0),
          (l.autoSuspend = !0),
          (l.ctx = null),
          (l.autoUnlock = !0),
          l._setup(),
          l
        );
      },
      volume: function (l) {
        var u = this || t;
        if (
          ((l = parseFloat(l)),
          u.ctx || d(),
          typeof l < "u" && l >= 0 && l <= 1)
        ) {
          if (((u._volume = l), u._muted)) return u;
          u.usingWebAudio &&
            u.masterGain.gain.setValueAtTime(l, t.ctx.currentTime);
          for (var f = 0; f < u._howls.length; f++)
            if (!u._howls[f]._webAudio)
              for (
                var g = u._howls[f]._getSoundIds(), p = 0;
                p < g.length;
                p++
              ) {
                var m = u._howls[f]._soundById(g[p]);
                m && m._node && (m._node.volume = m._volume * l);
              }
          return u;
        }
        return u._volume;
      },
      mute: function (l) {
        var u = this || t;
        u.ctx || d(),
          (u._muted = l),
          u.usingWebAudio &&
            u.masterGain.gain.setValueAtTime(
              l ? 0 : u._volume,
              t.ctx.currentTime
            );
        for (var f = 0; f < u._howls.length; f++)
          if (!u._howls[f]._webAudio)
            for (var g = u._howls[f]._getSoundIds(), p = 0; p < g.length; p++) {
              var m = u._howls[f]._soundById(g[p]);
              m && m._node && (m._node.muted = l ? !0 : m._muted);
            }
        return u;
      },
      stop: function () {
        for (var l = this || t, u = 0; u < l._howls.length; u++)
          l._howls[u].stop();
        return l;
      },
      unload: function () {
        for (var l = this || t, u = l._howls.length - 1; u >= 0; u--)
          l._howls[u].unload();
        return (
          l.usingWebAudio &&
            l.ctx &&
            typeof l.ctx.close < "u" &&
            (l.ctx.close(), (l.ctx = null), d()),
          l
        );
      },
      codecs: function (l) {
        return (this || t)._codecs[l.replace(/^x-/, "")];
      },
      _setup: function () {
        var l = this || t;
        if (
          ((l.state = (l.ctx && l.ctx.state) || "suspended"),
          l._autoSuspend(),
          !l.usingWebAudio)
        )
          if (typeof Audio < "u")
            try {
              var u = new Audio();
              typeof u.oncanplaythrough > "u" && (l._canPlayEvent = "canplay");
            } catch {
              l.noAudio = !0;
            }
          else l.noAudio = !0;
        try {
          var u = new Audio();
          u.muted && (l.noAudio = !0);
        } catch {}
        return l.noAudio || l._setupCodecs(), l;
      },
      _setupCodecs: function () {
        var l = this || t,
          u = null;
        try {
          u = typeof Audio < "u" ? new Audio() : null;
        } catch {
          return l;
        }
        if (!u || typeof u.canPlayType != "function") return l;
        var f = u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          g = l._navigator ? l._navigator.userAgent : "",
          p = g.match(/OPR\/([0-6].)/g),
          m = p && parseInt(p[0].split("/")[1], 10) < 33,
          _ = g.indexOf("Safari") !== -1 && g.indexOf("Chrome") === -1,
          y = g.match(/Version\/(.*?) /),
          b = _ && y && parseInt(y[1], 10) < 15;
        return (
          (l._codecs = {
            mp3: !!(
              !m &&
              (f || u.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!f,
            opus: !!u
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!u
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!u
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!(
              u.canPlayType('audio/wav; codecs="1"') ||
              u.canPlayType("audio/wav")
            ).replace(/^no$/, ""),
            aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!u.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              u.canPlayType("audio/x-m4a;") ||
              u.canPlayType("audio/m4a;") ||
              u.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            m4b: !!(
              u.canPlayType("audio/x-m4b;") ||
              u.canPlayType("audio/m4b;") ||
              u.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              u.canPlayType("audio/x-mp4;") ||
              u.canPlayType("audio/mp4;") ||
              u.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!(
              !b &&
              u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            webm: !!(
              !b &&
              u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            dolby: !!u
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              u.canPlayType("audio/x-flac;") || u.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          l
        );
      },
      _unlockAudio: function () {
        var l = this || t;
        if (!(l._audioUnlocked || !l.ctx)) {
          (l._audioUnlocked = !1),
            (l.autoUnlock = !1),
            !l._mobileUnloaded &&
              l.ctx.sampleRate !== 44100 &&
              ((l._mobileUnloaded = !0), l.unload()),
            (l._scratchBuffer = l.ctx.createBuffer(1, 1, 22050));
          var u = function (f) {
            for (; l._html5AudioPool.length < l.html5PoolSize; )
              try {
                var g = new Audio();
                (g._unlocked = !0), l._releaseHtml5Audio(g);
              } catch {
                l.noAudio = !0;
                break;
              }
            for (var p = 0; p < l._howls.length; p++)
              if (!l._howls[p]._webAudio)
                for (
                  var m = l._howls[p]._getSoundIds(), _ = 0;
                  _ < m.length;
                  _++
                ) {
                  var y = l._howls[p]._soundById(m[_]);
                  y &&
                    y._node &&
                    !y._node._unlocked &&
                    ((y._node._unlocked = !0), y._node.load());
                }
            l._autoResume();
            var b = l.ctx.createBufferSource();
            (b.buffer = l._scratchBuffer),
              b.connect(l.ctx.destination),
              typeof b.start > "u" ? b.noteOn(0) : b.start(0),
              typeof l.ctx.resume == "function" && l.ctx.resume(),
              (b.onended = function () {
                b.disconnect(0),
                  (l._audioUnlocked = !0),
                  document.removeEventListener("touchstart", u, !0),
                  document.removeEventListener("touchend", u, !0),
                  document.removeEventListener("click", u, !0),
                  document.removeEventListener("keydown", u, !0);
                for (var w = 0; w < l._howls.length; w++)
                  l._howls[w]._emit("unlock");
              });
          };
          return (
            document.addEventListener("touchstart", u, !0),
            document.addEventListener("touchend", u, !0),
            document.addEventListener("click", u, !0),
            document.addEventListener("keydown", u, !0),
            l
          );
        }
      },
      _obtainHtml5Audio: function () {
        var l = this || t;
        if (l._html5AudioPool.length) return l._html5AudioPool.pop();
        var u = new Audio().play();
        return (
          u &&
            typeof Promise < "u" &&
            (u instanceof Promise || typeof u.then == "function") &&
            u.catch(function () {
              console.warn(
                "HTML5 Audio pool exhausted, returning potentially locked audio object."
              );
            }),
          new Audio()
        );
      },
      _releaseHtml5Audio: function (l) {
        var u = this || t;
        return l._unlocked && u._html5AudioPool.push(l), u;
      },
      _autoSuspend: function () {
        var l = this;
        if (
          !(
            !l.autoSuspend ||
            !l.ctx ||
            typeof l.ctx.suspend > "u" ||
            !t.usingWebAudio
          )
        ) {
          for (var u = 0; u < l._howls.length; u++)
            if (l._howls[u]._webAudio) {
              for (var f = 0; f < l._howls[u]._sounds.length; f++)
                if (!l._howls[u]._sounds[f]._paused) return l;
            }
          return (
            l._suspendTimer && clearTimeout(l._suspendTimer),
            (l._suspendTimer = setTimeout(function () {
              if (l.autoSuspend) {
                (l._suspendTimer = null), (l.state = "suspending");
                var g = function () {
                  (l.state = "suspended"),
                    l._resumeAfterSuspend &&
                      (delete l._resumeAfterSuspend, l._autoResume());
                };
                l.ctx.suspend().then(g, g);
              }
            }, 3e4)),
            l
          );
        }
      },
      _autoResume: function () {
        var l = this;
        if (!(!l.ctx || typeof l.ctx.resume > "u" || !t.usingWebAudio))
          return (
            l.state === "running" &&
            l.ctx.state !== "interrupted" &&
            l._suspendTimer
              ? (clearTimeout(l._suspendTimer), (l._suspendTimer = null))
              : l.state === "suspended" ||
                (l.state === "running" && l.ctx.state === "interrupted")
              ? (l.ctx.resume().then(function () {
                  l.state = "running";
                  for (var u = 0; u < l._howls.length; u++)
                    l._howls[u]._emit("resume");
                }),
                l._suspendTimer &&
                  (clearTimeout(l._suspendTimer), (l._suspendTimer = null)))
              : l.state === "suspending" && (l._resumeAfterSuspend = !0),
            l
          );
      },
    };
    var t = new e(),
      n = function (l) {
        var u = this;
        if (!l.src || l.src.length === 0) {
          console.error(
            "An array of source files must be passed with any new Howl."
          );
          return;
        }
        u.init(l);
      };
    n.prototype = {
      init: function (l) {
        var u = this;
        return (
          t.ctx || d(),
          (u._autoplay = l.autoplay || !1),
          (u._format = typeof l.format != "string" ? l.format : [l.format]),
          (u._html5 = l.html5 || !1),
          (u._muted = l.mute || !1),
          (u._loop = l.loop || !1),
          (u._pool = l.pool || 5),
          (u._preload =
            typeof l.preload == "boolean" || l.preload === "metadata"
              ? l.preload
              : !0),
          (u._rate = l.rate || 1),
          (u._sprite = l.sprite || {}),
          (u._src = typeof l.src != "string" ? l.src : [l.src]),
          (u._volume = l.volume !== void 0 ? l.volume : 1),
          (u._xhr = {
            method: l.xhr && l.xhr.method ? l.xhr.method : "GET",
            headers: l.xhr && l.xhr.headers ? l.xhr.headers : null,
            withCredentials:
              l.xhr && l.xhr.withCredentials ? l.xhr.withCredentials : !1,
          }),
          (u._duration = 0),
          (u._state = "unloaded"),
          (u._sounds = []),
          (u._endTimers = {}),
          (u._queue = []),
          (u._playLock = !1),
          (u._onend = l.onend
            ? [
                {
                  fn: l.onend,
                },
              ]
            : []),
          (u._onfade = l.onfade
            ? [
                {
                  fn: l.onfade,
                },
              ]
            : []),
          (u._onload = l.onload
            ? [
                {
                  fn: l.onload,
                },
              ]
            : []),
          (u._onloaderror = l.onloaderror
            ? [
                {
                  fn: l.onloaderror,
                },
              ]
            : []),
          (u._onplayerror = l.onplayerror
            ? [
                {
                  fn: l.onplayerror,
                },
              ]
            : []),
          (u._onpause = l.onpause
            ? [
                {
                  fn: l.onpause,
                },
              ]
            : []),
          (u._onplay = l.onplay
            ? [
                {
                  fn: l.onplay,
                },
              ]
            : []),
          (u._onstop = l.onstop
            ? [
                {
                  fn: l.onstop,
                },
              ]
            : []),
          (u._onmute = l.onmute
            ? [
                {
                  fn: l.onmute,
                },
              ]
            : []),
          (u._onvolume = l.onvolume
            ? [
                {
                  fn: l.onvolume,
                },
              ]
            : []),
          (u._onrate = l.onrate
            ? [
                {
                  fn: l.onrate,
                },
              ]
            : []),
          (u._onseek = l.onseek
            ? [
                {
                  fn: l.onseek,
                },
              ]
            : []),
          (u._onunlock = l.onunlock
            ? [
                {
                  fn: l.onunlock,
                },
              ]
            : []),
          (u._onresume = []),
          (u._webAudio = t.usingWebAudio && !u._html5),
          typeof t.ctx < "u" && t.ctx && t.autoUnlock && t._unlockAudio(),
          t._howls.push(u),
          u._autoplay &&
            u._queue.push({
              event: "play",
              action: function () {
                u.play();
              },
            }),
          u._preload && u._preload !== "none" && u.load(),
          u
        );
      },
      load: function () {
        var l = this,
          u = null;
        if (t.noAudio) {
          l._emit("loaderror", null, "No audio support.");
          return;
        }
        typeof l._src == "string" && (l._src = [l._src]);
        for (var f = 0; f < l._src.length; f++) {
          var g, p;
          if (l._format && l._format[f]) g = l._format[f];
          else {
            if (((p = l._src[f]), typeof p != "string")) {
              l._emit(
                "loaderror",
                null,
                "Non-string found in selected audio sources - ignoring."
              );
              continue;
            }
            (g = /^data:audio\/([^;,]+);/i.exec(p)),
              g || (g = /\.([^.]+)$/.exec(p.split("?", 1)[0])),
              g && (g = g[1].toLowerCase());
          }
          if (
            (g ||
              console.warn(
                'No file extension was found. Consider using the "format" property or specify an extension.'
              ),
            g && t.codecs(g))
          ) {
            u = l._src[f];
            break;
          }
        }
        if (!u) {
          l._emit(
            "loaderror",
            null,
            "No codec support for selected audio sources."
          );
          return;
        }
        return (
          (l._src = u),
          (l._state = "loading"),
          window.location.protocol === "https:" &&
            u.slice(0, 5) === "http:" &&
            ((l._html5 = !0), (l._webAudio = !1)),
          new i(l),
          l._webAudio && r(l),
          l
        );
      },
      play: function (l, u) {
        var f = this,
          g = null;
        if (typeof l == "number") (g = l), (l = null);
        else {
          if (typeof l == "string" && f._state === "loaded" && !f._sprite[l])
            return null;
          if (typeof l > "u" && ((l = "__default"), !f._playLock)) {
            for (var p = 0, m = 0; m < f._sounds.length; m++)
              f._sounds[m]._paused &&
                !f._sounds[m]._ended &&
                (p++, (g = f._sounds[m]._id));
            p === 1 ? (l = null) : (g = null);
          }
        }
        var _ = g ? f._soundById(g) : f._inactiveSound();
        if (!_) return null;
        if (
          (g && !l && (l = _._sprite || "__default"), f._state !== "loaded")
        ) {
          (_._sprite = l), (_._ended = !1);
          var y = _._id;
          return (
            f._queue.push({
              event: "play",
              action: function () {
                f.play(y);
              },
            }),
            y
          );
        }
        if (g && !_._paused) return u || f._loadQueue("play"), _._id;
        f._webAudio && t._autoResume();
        var b = Math.max(0, _._seek > 0 ? _._seek : f._sprite[l][0] / 1e3),
          w = Math.max(0, (f._sprite[l][0] + f._sprite[l][1]) / 1e3 - b),
          x = (w * 1e3) / Math.abs(_._rate),
          E = f._sprite[l][0] / 1e3,
          T = (f._sprite[l][0] + f._sprite[l][1]) / 1e3;
        (_._sprite = l), (_._ended = !1);
        var R = function () {
          (_._paused = !1),
            (_._seek = b),
            (_._start = E),
            (_._stop = T),
            (_._loop = !!(_._loop || f._sprite[l][2]));
        };
        if (b >= T) {
          f._ended(_);
          return;
        }
        var I = _._node;
        if (f._webAudio) {
          var B = function () {
            (f._playLock = !1), R(), f._refreshBuffer(_);
            var D = _._muted || f._muted ? 0 : _._volume;
            I.gain.setValueAtTime(D, t.ctx.currentTime),
              (_._playStart = t.ctx.currentTime),
              typeof I.bufferSource.start > "u"
                ? _._loop
                  ? I.bufferSource.noteGrainOn(0, b, 86400)
                  : I.bufferSource.noteGrainOn(0, b, w)
                : _._loop
                ? I.bufferSource.start(0, b, 86400)
                : I.bufferSource.start(0, b, w),
              x !== 1 / 0 &&
                (f._endTimers[_._id] = setTimeout(f._ended.bind(f, _), x)),
              u ||
                setTimeout(function () {
                  f._emit("play", _._id), f._loadQueue();
                }, 0);
          };
          t.state === "running" && t.ctx.state !== "interrupted"
            ? B()
            : ((f._playLock = !0), f.once("resume", B), f._clearTimer(_._id));
        } else {
          var v = function () {
            (I.currentTime = b),
              (I.muted = _._muted || f._muted || t._muted || I.muted),
              (I.volume = _._volume * t.volume()),
              (I.playbackRate = _._rate);
            try {
              var D = I.play();
              if (
                (D &&
                typeof Promise < "u" &&
                (D instanceof Promise || typeof D.then == "function")
                  ? ((f._playLock = !0),
                    R(),
                    D.then(function () {
                      (f._playLock = !1),
                        (I._unlocked = !0),
                        u ? f._loadQueue() : f._emit("play", _._id);
                    }).catch(function () {
                      (f._playLock = !1),
                        f._emit(
                          "playerror",
                          _._id,
                          "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                        ),
                        (_._ended = !0),
                        (_._paused = !0);
                    }))
                  : u || ((f._playLock = !1), R(), f._emit("play", _._id)),
                (I.playbackRate = _._rate),
                I.paused)
              ) {
                f._emit(
                  "playerror",
                  _._id,
                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                );
                return;
              }
              l !== "__default" || _._loop
                ? (f._endTimers[_._id] = setTimeout(f._ended.bind(f, _), x))
                : ((f._endTimers[_._id] = function () {
                    f._ended(_),
                      I.removeEventListener("ended", f._endTimers[_._id], !1);
                  }),
                  I.addEventListener("ended", f._endTimers[_._id], !1));
            } catch (O) {
              f._emit("playerror", _._id, O);
            }
          };
          I.src ===
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" &&
            ((I.src = f._src), I.load());
          var L =
            (window && window.ejecta) ||
            (!I.readyState && t._navigator.isCocoonJS);
          if (I.readyState >= 3 || L) v();
          else {
            (f._playLock = !0), (f._state = "loading");
            var U = function () {
              (f._state = "loaded"),
                v(),
                I.removeEventListener(t._canPlayEvent, U, !1);
            };
            I.addEventListener(t._canPlayEvent, U, !1), f._clearTimer(_._id);
          }
        }
        return _._id;
      },
      pause: function (l) {
        var u = this;
        if (u._state !== "loaded" || u._playLock)
          return (
            u._queue.push({
              event: "pause",
              action: function () {
                u.pause(l);
              },
            }),
            u
          );
        for (var f = u._getSoundIds(l), g = 0; g < f.length; g++) {
          u._clearTimer(f[g]);
          var p = u._soundById(f[g]);
          if (
            p &&
            !p._paused &&
            ((p._seek = u.seek(f[g])),
            (p._rateSeek = 0),
            (p._paused = !0),
            u._stopFade(f[g]),
            p._node)
          )
            if (u._webAudio) {
              if (!p._node.bufferSource) continue;
              typeof p._node.bufferSource.stop > "u"
                ? p._node.bufferSource.noteOff(0)
                : p._node.bufferSource.stop(0),
                u._cleanBuffer(p._node);
            } else
              (!isNaN(p._node.duration) || p._node.duration === 1 / 0) &&
                p._node.pause();
          arguments[1] || u._emit("pause", p ? p._id : null);
        }
        return u;
      },
      stop: function (l, u) {
        var f = this;
        if (f._state !== "loaded" || f._playLock)
          return (
            f._queue.push({
              event: "stop",
              action: function () {
                f.stop(l);
              },
            }),
            f
          );
        for (var g = f._getSoundIds(l), p = 0; p < g.length; p++) {
          f._clearTimer(g[p]);
          var m = f._soundById(g[p]);
          m &&
            ((m._seek = m._start || 0),
            (m._rateSeek = 0),
            (m._paused = !0),
            (m._ended = !0),
            f._stopFade(g[p]),
            m._node &&
              (f._webAudio
                ? m._node.bufferSource &&
                  (typeof m._node.bufferSource.stop > "u"
                    ? m._node.bufferSource.noteOff(0)
                    : m._node.bufferSource.stop(0),
                  f._cleanBuffer(m._node))
                : (!isNaN(m._node.duration) || m._node.duration === 1 / 0) &&
                  ((m._node.currentTime = m._start || 0),
                  m._node.pause(),
                  m._node.duration === 1 / 0 && f._clearSound(m._node))),
            u || f._emit("stop", m._id));
        }
        return f;
      },
      mute: function (l, u) {
        var f = this;
        if (f._state !== "loaded" || f._playLock)
          return (
            f._queue.push({
              event: "mute",
              action: function () {
                f.mute(l, u);
              },
            }),
            f
          );
        if (typeof u > "u")
          if (typeof l == "boolean") f._muted = l;
          else return f._muted;
        for (var g = f._getSoundIds(u), p = 0; p < g.length; p++) {
          var m = f._soundById(g[p]);
          m &&
            ((m._muted = l),
            m._interval && f._stopFade(m._id),
            f._webAudio && m._node
              ? m._node.gain.setValueAtTime(
                  l ? 0 : m._volume,
                  t.ctx.currentTime
                )
              : m._node && (m._node.muted = t._muted ? !0 : l),
            f._emit("mute", m._id));
        }
        return f;
      },
      volume: function () {
        var l = this,
          u = arguments,
          f,
          g;
        if (u.length === 0) return l._volume;
        if (u.length === 1 || (u.length === 2 && typeof u[1] > "u")) {
          var p = l._getSoundIds(),
            m = p.indexOf(u[0]);
          m >= 0 ? (g = parseInt(u[0], 10)) : (f = parseFloat(u[0]));
        } else
          u.length >= 2 && ((f = parseFloat(u[0])), (g = parseInt(u[1], 10)));
        var _;
        if (typeof f < "u" && f >= 0 && f <= 1) {
          if (l._state !== "loaded" || l._playLock)
            return (
              l._queue.push({
                event: "volume",
                action: function () {
                  l.volume.apply(l, u);
                },
              }),
              l
            );
          typeof g > "u" && (l._volume = f), (g = l._getSoundIds(g));
          for (var y = 0; y < g.length; y++)
            (_ = l._soundById(g[y])),
              _ &&
                ((_._volume = f),
                u[2] || l._stopFade(g[y]),
                l._webAudio && _._node && !_._muted
                  ? _._node.gain.setValueAtTime(f, t.ctx.currentTime)
                  : _._node && !_._muted && (_._node.volume = f * t.volume()),
                l._emit("volume", _._id));
        } else
          return (_ = g ? l._soundById(g) : l._sounds[0]), _ ? _._volume : 0;
        return l;
      },
      fade: function (l, u, f, g) {
        var p = this;
        if (p._state !== "loaded" || p._playLock)
          return (
            p._queue.push({
              event: "fade",
              action: function () {
                p.fade(l, u, f, g);
              },
            }),
            p
          );
        (l = Math.min(Math.max(0, parseFloat(l)), 1)),
          (u = Math.min(Math.max(0, parseFloat(u)), 1)),
          (f = parseFloat(f)),
          p.volume(l, g);
        for (var m = p._getSoundIds(g), _ = 0; _ < m.length; _++) {
          var y = p._soundById(m[_]);
          if (y) {
            if ((g || p._stopFade(m[_]), p._webAudio && !y._muted)) {
              var b = t.ctx.currentTime,
                w = b + f / 1e3;
              (y._volume = l),
                y._node.gain.setValueAtTime(l, b),
                y._node.gain.linearRampToValueAtTime(u, w);
            }
            p._startFadeInterval(y, l, u, f, m[_], typeof g > "u");
          }
        }
        return p;
      },
      _startFadeInterval: function (l, u, f, g, p, m) {
        var _ = this,
          y = u,
          b = f - u,
          w = Math.abs(b / 0.01),
          x = Math.max(4, w > 0 ? g / w : g),
          E = Date.now();
        (l._fadeTo = f),
          (l._interval = setInterval(function () {
            var T = (Date.now() - E) / g;
            (E = Date.now()),
              (y += b * T),
              (y = Math.round(y * 100) / 100),
              b < 0 ? (y = Math.max(f, y)) : (y = Math.min(f, y)),
              _._webAudio ? (l._volume = y) : _.volume(y, l._id, !0),
              m && (_._volume = y),
              ((f < u && y <= f) || (f > u && y >= f)) &&
                (clearInterval(l._interval),
                (l._interval = null),
                (l._fadeTo = null),
                _.volume(f, l._id),
                _._emit("fade", l._id));
          }, x));
      },
      _stopFade: function (l) {
        var u = this,
          f = u._soundById(l);
        return (
          f &&
            f._interval &&
            (u._webAudio &&
              f._node.gain.cancelScheduledValues(t.ctx.currentTime),
            clearInterval(f._interval),
            (f._interval = null),
            u.volume(f._fadeTo, l),
            (f._fadeTo = null),
            u._emit("fade", l)),
          u
        );
      },
      loop: function () {
        var l = this,
          u = arguments,
          f,
          g,
          p;
        if (u.length === 0) return l._loop;
        if (u.length === 1)
          if (typeof u[0] == "boolean") (f = u[0]), (l._loop = f);
          else return (p = l._soundById(parseInt(u[0], 10))), p ? p._loop : !1;
        else u.length === 2 && ((f = u[0]), (g = parseInt(u[1], 10)));
        for (var m = l._getSoundIds(g), _ = 0; _ < m.length; _++)
          (p = l._soundById(m[_])),
            p &&
              ((p._loop = f),
              l._webAudio &&
                p._node &&
                p._node.bufferSource &&
                ((p._node.bufferSource.loop = f),
                f &&
                  ((p._node.bufferSource.loopStart = p._start || 0),
                  (p._node.bufferSource.loopEnd = p._stop),
                  l.playing(m[_]) && (l.pause(m[_], !0), l.play(m[_], !0)))));
        return l;
      },
      rate: function () {
        var l = this,
          u = arguments,
          f,
          g;
        if (u.length === 0) g = l._sounds[0]._id;
        else if (u.length === 1) {
          var p = l._getSoundIds(),
            m = p.indexOf(u[0]);
          m >= 0 ? (g = parseInt(u[0], 10)) : (f = parseFloat(u[0]));
        } else
          u.length === 2 && ((f = parseFloat(u[0])), (g = parseInt(u[1], 10)));
        var _;
        if (typeof f == "number") {
          if (l._state !== "loaded" || l._playLock)
            return (
              l._queue.push({
                event: "rate",
                action: function () {
                  l.rate.apply(l, u);
                },
              }),
              l
            );
          typeof g > "u" && (l._rate = f), (g = l._getSoundIds(g));
          for (var y = 0; y < g.length; y++)
            if (((_ = l._soundById(g[y])), _)) {
              l.playing(g[y]) &&
                ((_._rateSeek = l.seek(g[y])),
                (_._playStart = l._webAudio
                  ? t.ctx.currentTime
                  : _._playStart)),
                (_._rate = f),
                l._webAudio && _._node && _._node.bufferSource
                  ? _._node.bufferSource.playbackRate.setValueAtTime(
                      f,
                      t.ctx.currentTime
                    )
                  : _._node && (_._node.playbackRate = f);
              var b = l.seek(g[y]),
                w =
                  (l._sprite[_._sprite][0] + l._sprite[_._sprite][1]) / 1e3 - b,
                x = (w * 1e3) / Math.abs(_._rate);
              (l._endTimers[g[y]] || !_._paused) &&
                (l._clearTimer(g[y]),
                (l._endTimers[g[y]] = setTimeout(l._ended.bind(l, _), x))),
                l._emit("rate", _._id);
            }
        } else return (_ = l._soundById(g)), _ ? _._rate : l._rate;
        return l;
      },
      seek: function () {
        var l = this,
          u = arguments,
          f,
          g;
        if (u.length === 0) l._sounds.length && (g = l._sounds[0]._id);
        else if (u.length === 1) {
          var p = l._getSoundIds(),
            m = p.indexOf(u[0]);
          m >= 0
            ? (g = parseInt(u[0], 10))
            : l._sounds.length &&
              ((g = l._sounds[0]._id), (f = parseFloat(u[0])));
        } else
          u.length === 2 && ((f = parseFloat(u[0])), (g = parseInt(u[1], 10)));
        if (typeof g > "u") return 0;
        if (typeof f == "number" && (l._state !== "loaded" || l._playLock))
          return (
            l._queue.push({
              event: "seek",
              action: function () {
                l.seek.apply(l, u);
              },
            }),
            l
          );
        var _ = l._soundById(g);
        if (_)
          if (typeof f == "number" && f >= 0) {
            var y = l.playing(g);
            y && l.pause(g, !0),
              (_._seek = f),
              (_._ended = !1),
              l._clearTimer(g),
              !l._webAudio &&
                _._node &&
                !isNaN(_._node.duration) &&
                (_._node.currentTime = f);
            var b = function () {
              y && l.play(g, !0), l._emit("seek", g);
            };
            if (y && !l._webAudio) {
              var w = function () {
                l._playLock ? setTimeout(w, 0) : b();
              };
              setTimeout(w, 0);
            } else b();
          } else if (l._webAudio) {
            var x = l.playing(g) ? t.ctx.currentTime - _._playStart : 0,
              E = _._rateSeek ? _._rateSeek - _._seek : 0;
            return _._seek + (E + x * Math.abs(_._rate));
          } else return _._node.currentTime;
        return l;
      },
      playing: function (l) {
        var u = this;
        if (typeof l == "number") {
          var f = u._soundById(l);
          return f ? !f._paused : !1;
        }
        for (var g = 0; g < u._sounds.length; g++)
          if (!u._sounds[g]._paused) return !0;
        return !1;
      },
      duration: function (l) {
        var u = this,
          f = u._duration,
          g = u._soundById(l);
        return g && (f = u._sprite[g._sprite][1] / 1e3), f;
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var l = this, u = l._sounds, f = 0; f < u.length; f++)
          u[f]._paused || l.stop(u[f]._id),
            l._webAudio ||
              (l._clearSound(u[f]._node),
              u[f]._node.removeEventListener("error", u[f]._errorFn, !1),
              u[f]._node.removeEventListener(t._canPlayEvent, u[f]._loadFn, !1),
              u[f]._node.removeEventListener("ended", u[f]._endFn, !1),
              t._releaseHtml5Audio(u[f]._node)),
            delete u[f]._node,
            l._clearTimer(u[f]._id);
        var g = t._howls.indexOf(l);
        g >= 0 && t._howls.splice(g, 1);
        var p = !0;
        for (f = 0; f < t._howls.length; f++)
          if (
            t._howls[f]._src === l._src ||
            l._src.indexOf(t._howls[f]._src) >= 0
          ) {
            p = !1;
            break;
          }
        return (
          s && p && delete s[l._src],
          (t.noAudio = !1),
          (l._state = "unloaded"),
          (l._sounds = []),
          (l = null),
          null
        );
      },
      on: function (l, u, f, g) {
        var p = this,
          m = p["_on" + l];
        return (
          typeof u == "function" &&
            m.push(
              g
                ? {
                    id: f,
                    fn: u,
                    once: g,
                  }
                : {
                    id: f,
                    fn: u,
                  }
            ),
          p
        );
      },
      off: function (l, u, f) {
        var g = this,
          p = g["_on" + l],
          m = 0;
        if ((typeof u == "number" && ((f = u), (u = null)), u || f))
          for (m = 0; m < p.length; m++) {
            var _ = f === p[m].id;
            if ((u === p[m].fn && _) || (!u && _)) {
              p.splice(m, 1);
              break;
            }
          }
        else if (l) g["_on" + l] = [];
        else {
          var y = Object.keys(g);
          for (m = 0; m < y.length; m++)
            y[m].indexOf("_on") === 0 &&
              Array.isArray(g[y[m]]) &&
              (g[y[m]] = []);
        }
        return g;
      },
      once: function (l, u, f) {
        var g = this;
        return g.on(l, u, f, 1), g;
      },
      _emit: function (l, u, f) {
        for (var g = this, p = g["_on" + l], m = p.length - 1; m >= 0; m--)
          (!p[m].id || p[m].id === u || l === "load") &&
            (setTimeout(
              function (_) {
                _.call(this, u, f);
              }.bind(g, p[m].fn),
              0
            ),
            p[m].once && g.off(l, p[m].fn, p[m].id));
        return g._loadQueue(l), g;
      },
      _loadQueue: function (l) {
        var u = this;
        if (u._queue.length > 0) {
          var f = u._queue[0];
          f.event === l && (u._queue.shift(), u._loadQueue()), l || f.action();
        }
        return u;
      },
      _ended: function (l) {
        var u = this,
          f = l._sprite;
        if (
          !u._webAudio &&
          l._node &&
          !l._node.paused &&
          !l._node.ended &&
          l._node.currentTime < l._stop
        )
          return setTimeout(u._ended.bind(u, l), 100), u;
        var g = !!(l._loop || u._sprite[f][2]);
        if (
          (u._emit("end", l._id),
          !u._webAudio && g && u.stop(l._id, !0).play(l._id),
          u._webAudio && g)
        ) {
          u._emit("play", l._id),
            (l._seek = l._start || 0),
            (l._rateSeek = 0),
            (l._playStart = t.ctx.currentTime);
          var p = ((l._stop - l._start) * 1e3) / Math.abs(l._rate);
          u._endTimers[l._id] = setTimeout(u._ended.bind(u, l), p);
        }
        return (
          u._webAudio &&
            !g &&
            ((l._paused = !0),
            (l._ended = !0),
            (l._seek = l._start || 0),
            (l._rateSeek = 0),
            u._clearTimer(l._id),
            u._cleanBuffer(l._node),
            t._autoSuspend()),
          !u._webAudio && !g && u.stop(l._id, !0),
          u
        );
      },
      _clearTimer: function (l) {
        var u = this;
        if (u._endTimers[l]) {
          if (typeof u._endTimers[l] != "function")
            clearTimeout(u._endTimers[l]);
          else {
            var f = u._soundById(l);
            f &&
              f._node &&
              f._node.removeEventListener("ended", u._endTimers[l], !1);
          }
          delete u._endTimers[l];
        }
        return u;
      },
      _soundById: function (l) {
        for (var u = this, f = 0; f < u._sounds.length; f++)
          if (l === u._sounds[f]._id) return u._sounds[f];
        return null;
      },
      _inactiveSound: function () {
        var l = this;
        l._drain();
        for (var u = 0; u < l._sounds.length; u++)
          if (l._sounds[u]._ended) return l._sounds[u].reset();
        return new i(l);
      },
      _drain: function () {
        var l = this,
          u = l._pool,
          f = 0,
          g = 0;
        if (!(l._sounds.length < u)) {
          for (g = 0; g < l._sounds.length; g++) l._sounds[g]._ended && f++;
          for (g = l._sounds.length - 1; g >= 0; g--) {
            if (f <= u) return;
            l._sounds[g]._ended &&
              (l._webAudio &&
                l._sounds[g]._node &&
                l._sounds[g]._node.disconnect(0),
              l._sounds.splice(g, 1),
              f--);
          }
        }
      },
      _getSoundIds: function (l) {
        var u = this;
        if (typeof l > "u") {
          for (var f = [], g = 0; g < u._sounds.length; g++)
            f.push(u._sounds[g]._id);
          return f;
        } else return [l];
      },
      _refreshBuffer: function (l) {
        var u = this;
        return (
          (l._node.bufferSource = t.ctx.createBufferSource()),
          (l._node.bufferSource.buffer = s[u._src]),
          l._panner
            ? l._node.bufferSource.connect(l._panner)
            : l._node.bufferSource.connect(l._node),
          (l._node.bufferSource.loop = l._loop),
          l._loop &&
            ((l._node.bufferSource.loopStart = l._start || 0),
            (l._node.bufferSource.loopEnd = l._stop || 0)),
          l._node.bufferSource.playbackRate.setValueAtTime(
            l._rate,
            t.ctx.currentTime
          ),
          u
        );
      },
      _cleanBuffer: function (l) {
        var u = this,
          f = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
        if (
          t._scratchBuffer &&
          l.bufferSource &&
          ((l.bufferSource.onended = null), l.bufferSource.disconnect(0), f)
        )
          try {
            l.bufferSource.buffer = t._scratchBuffer;
          } catch {}
        return (l.bufferSource = null), u;
      },
      _clearSound: function (l) {
        var u = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
        u ||
          (l.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      },
    };
    var i = function (l) {
      (this._parent = l), this.init();
    };
    i.prototype = {
      init: function () {
        var l = this,
          u = l._parent;
        return (
          (l._muted = u._muted),
          (l._loop = u._loop),
          (l._volume = u._volume),
          (l._rate = u._rate),
          (l._seek = 0),
          (l._paused = !0),
          (l._ended = !0),
          (l._sprite = "__default"),
          (l._id = ++t._counter),
          u._sounds.push(l),
          l.create(),
          l
        );
      },
      create: function () {
        var l = this,
          u = l._parent,
          f = t._muted || l._muted || l._parent._muted ? 0 : l._volume;
        return (
          u._webAudio
            ? ((l._node =
                typeof t.ctx.createGain > "u"
                  ? t.ctx.createGainNode()
                  : t.ctx.createGain()),
              l._node.gain.setValueAtTime(f, t.ctx.currentTime),
              (l._node.paused = !0),
              l._node.connect(t.masterGain))
            : t.noAudio ||
              ((l._node = t._obtainHtml5Audio()),
              (l._errorFn = l._errorListener.bind(l)),
              l._node.addEventListener("error", l._errorFn, !1),
              (l._loadFn = l._loadListener.bind(l)),
              l._node.addEventListener(t._canPlayEvent, l._loadFn, !1),
              (l._endFn = l._endListener.bind(l)),
              l._node.addEventListener("ended", l._endFn, !1),
              (l._node.src = u._src),
              (l._node.preload = u._preload === !0 ? "auto" : u._preload),
              (l._node.volume = f * t.volume()),
              l._node.load()),
          l
        );
      },
      reset: function () {
        var l = this,
          u = l._parent;
        return (
          (l._muted = u._muted),
          (l._loop = u._loop),
          (l._volume = u._volume),
          (l._rate = u._rate),
          (l._seek = 0),
          (l._rateSeek = 0),
          (l._paused = !0),
          (l._ended = !0),
          (l._sprite = "__default"),
          (l._id = ++t._counter),
          l
        );
      },
      _errorListener: function () {
        var l = this;
        l._parent._emit(
          "loaderror",
          l._id,
          l._node.error ? l._node.error.code : 0
        ),
          l._node.removeEventListener("error", l._errorFn, !1);
      },
      _loadListener: function () {
        var l = this,
          u = l._parent;
        (u._duration = Math.ceil(l._node.duration * 10) / 10),
          Object.keys(u._sprite).length === 0 &&
            (u._sprite = {
              __default: [0, u._duration * 1e3],
            }),
          u._state !== "loaded" &&
            ((u._state = "loaded"), u._emit("load"), u._loadQueue()),
          l._node.removeEventListener(t._canPlayEvent, l._loadFn, !1);
      },
      _endListener: function () {
        var l = this,
          u = l._parent;
        u._duration === 1 / 0 &&
          ((u._duration = Math.ceil(l._node.duration * 10) / 10),
          u._sprite.__default[1] === 1 / 0 &&
            (u._sprite.__default[1] = u._duration * 1e3),
          u._ended(l)),
          l._node.removeEventListener("ended", l._endFn, !1);
      },
    };
    var s = {},
      r = function (l) {
        var u = l._src;
        if (s[u]) {
          (l._duration = s[u].duration), h(l);
          return;
        }
        if (/^data:[^;]+;base64,/.test(u)) {
          for (
            var f = atob(u.split(",")[1]), g = new Uint8Array(f.length), p = 0;
            p < f.length;
            ++p
          )
            g[p] = f.charCodeAt(p);
          c(g.buffer, l);
        } else {
          var m = new XMLHttpRequest();
          m.open(l._xhr.method, u, !0),
            (m.withCredentials = l._xhr.withCredentials),
            (m.responseType = "arraybuffer"),
            l._xhr.headers &&
              Object.keys(l._xhr.headers).forEach(function (_) {
                m.setRequestHeader(_, l._xhr.headers[_]);
              }),
            (m.onload = function () {
              var _ = (m.status + "")[0];
              if (_ !== "0" && _ !== "2" && _ !== "3") {
                l._emit(
                  "loaderror",
                  null,
                  "Failed loading audio file with status: " + m.status + "."
                );
                return;
              }
              c(m.response, l);
            }),
            (m.onerror = function () {
              l._webAudio &&
                ((l._html5 = !0),
                (l._webAudio = !1),
                (l._sounds = []),
                delete s[u],
                l.load());
            }),
            a(m);
        }
      },
      a = function (l) {
        try {
          l.send();
        } catch {
          l.onerror();
        }
      },
      c = function (l, u) {
        var f = function () {
            u._emit("loaderror", null, "Decoding audio data failed.");
          },
          g = function (p) {
            p && u._sounds.length > 0 ? ((s[u._src] = p), h(u, p)) : f();
          };
        typeof Promise < "u" && t.ctx.decodeAudioData.length === 1
          ? t.ctx.decodeAudioData(l).then(g).catch(f)
          : t.ctx.decodeAudioData(l, g, f);
      },
      h = function (l, u) {
        u && !l._duration && (l._duration = u.duration),
          Object.keys(l._sprite).length === 0 &&
            (l._sprite = {
              __default: [0, l._duration * 1e3],
            }),
          l._state !== "loaded" &&
            ((l._state = "loaded"), l._emit("load"), l._loadQueue());
      },
      d = function () {
        if (t.usingWebAudio) {
          try {
            typeof AudioContext < "u"
              ? (t.ctx = new AudioContext())
              : typeof webkitAudioContext < "u"
              ? (t.ctx = new webkitAudioContext())
              : (t.usingWebAudio = !1);
          } catch {
            t.usingWebAudio = !1;
          }
          t.ctx || (t.usingWebAudio = !1);
          var l = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
            u =
              t._navigator &&
              t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            f = u ? parseInt(u[1], 10) : null;
          if (l && f && f < 9) {
            var g = /safari/.test(
              t._navigator && t._navigator.userAgent.toLowerCase()
            );
            t._navigator && !g && (t.usingWebAudio = !1);
          }
          t.usingWebAudio &&
            ((t.masterGain =
              typeof t.ctx.createGain > "u"
                ? t.ctx.createGainNode()
                : t.ctx.createGain()),
            t.masterGain.gain.setValueAtTime(
              t._muted ? 0 : t._volume,
              t.ctx.currentTime
            ),
            t.masterGain.connect(t.ctx.destination)),
            t._setup();
        }
      };
    (o.Howler = t),
      (o.Howl = n),
      typeof Mr < "u"
        ? ((Mr.HowlerGlobal = e),
          (Mr.Howler = t),
          (Mr.Howl = n),
          (Mr.Sound = i))
        : typeof window < "u" &&
          ((window.HowlerGlobal = e),
          (window.Howler = t),
          (window.Howl = n),
          (window.Sound = i));
  })();
  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */
  (function () {
    (HowlerGlobal.prototype._pos = [0, 0, 0]),
      (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
      (HowlerGlobal.prototype.stereo = function (t) {
        var n = this;
        if (!n.ctx || !n.ctx.listener) return n;
        for (var i = n._howls.length - 1; i >= 0; i--) n._howls[i].stereo(t);
        return n;
      }),
      (HowlerGlobal.prototype.pos = function (t, n, i) {
        var s = this;
        if (!s.ctx || !s.ctx.listener) return s;
        if (
          ((n = typeof n != "number" ? s._pos[1] : n),
          (i = typeof i != "number" ? s._pos[2] : i),
          typeof t == "number")
        )
          (s._pos = [t, n, i]),
            typeof s.ctx.listener.positionX < "u"
              ? (s.ctx.listener.positionX.setTargetAtTime(
                  s._pos[0],
                  Howler.ctx.currentTime,
                  0.1
                ),
                s.ctx.listener.positionY.setTargetAtTime(
                  s._pos[1],
                  Howler.ctx.currentTime,
                  0.1
                ),
                s.ctx.listener.positionZ.setTargetAtTime(
                  s._pos[2],
                  Howler.ctx.currentTime,
                  0.1
                ))
              : s.ctx.listener.setPosition(s._pos[0], s._pos[1], s._pos[2]);
        else return s._pos;
        return s;
      }),
      (HowlerGlobal.prototype.orientation = function (t, n, i, s, r, a) {
        var c = this;
        if (!c.ctx || !c.ctx.listener) return c;
        var h = c._orientation;
        if (
          ((n = typeof n != "number" ? h[1] : n),
          (i = typeof i != "number" ? h[2] : i),
          (s = typeof s != "number" ? h[3] : s),
          (r = typeof r != "number" ? h[4] : r),
          (a = typeof a != "number" ? h[5] : a),
          typeof t == "number")
        )
          (c._orientation = [t, n, i, s, r, a]),
            typeof c.ctx.listener.forwardX < "u"
              ? (c.ctx.listener.forwardX.setTargetAtTime(
                  t,
                  Howler.ctx.currentTime,
                  0.1
                ),
                c.ctx.listener.forwardY.setTargetAtTime(
                  n,
                  Howler.ctx.currentTime,
                  0.1
                ),
                c.ctx.listener.forwardZ.setTargetAtTime(
                  i,
                  Howler.ctx.currentTime,
                  0.1
                ),
                c.ctx.listener.upX.setTargetAtTime(
                  s,
                  Howler.ctx.currentTime,
                  0.1
                ),
                c.ctx.listener.upY.setTargetAtTime(
                  r,
                  Howler.ctx.currentTime,
                  0.1
                ),
                c.ctx.listener.upZ.setTargetAtTime(
                  a,
                  Howler.ctx.currentTime,
                  0.1
                ))
              : c.ctx.listener.setOrientation(t, n, i, s, r, a);
        else return h;
        return c;
      }),
      (Howl.prototype.init = (function (t) {
        return function (n) {
          var i = this;
          return (
            (i._orientation = n.orientation || [1, 0, 0]),
            (i._stereo = n.stereo || null),
            (i._pos = n.pos || null),
            (i._pannerAttr = {
              coneInnerAngle:
                typeof n.coneInnerAngle < "u" ? n.coneInnerAngle : 360,
              coneOuterAngle:
                typeof n.coneOuterAngle < "u" ? n.coneOuterAngle : 360,
              coneOuterGain: typeof n.coneOuterGain < "u" ? n.coneOuterGain : 0,
              distanceModel:
                typeof n.distanceModel < "u" ? n.distanceModel : "inverse",
              maxDistance: typeof n.maxDistance < "u" ? n.maxDistance : 1e4,
              panningModel:
                typeof n.panningModel < "u" ? n.panningModel : "HRTF",
              refDistance: typeof n.refDistance < "u" ? n.refDistance : 1,
              rolloffFactor: typeof n.rolloffFactor < "u" ? n.rolloffFactor : 1,
            }),
            (i._onstereo = n.onstereo
              ? [
                  {
                    fn: n.onstereo,
                  },
                ]
              : []),
            (i._onpos = n.onpos
              ? [
                  {
                    fn: n.onpos,
                  },
                ]
              : []),
            (i._onorientation = n.onorientation
              ? [
                  {
                    fn: n.onorientation,
                  },
                ]
              : []),
            t.call(this, n)
          );
        };
      })(Howl.prototype.init)),
      (Howl.prototype.stereo = function (t, n) {
        var i = this;
        if (!i._webAudio) return i;
        if (i._state !== "loaded")
          return (
            i._queue.push({
              event: "stereo",
              action: function () {
                i.stereo(t, n);
              },
            }),
            i
          );
        var s =
          typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
        if (typeof n > "u")
          if (typeof t == "number") (i._stereo = t), (i._pos = [t, 0, 0]);
          else return i._stereo;
        for (var r = i._getSoundIds(n), a = 0; a < r.length; a++) {
          var c = i._soundById(r[a]);
          if (c)
            if (typeof t == "number")
              (c._stereo = t),
                (c._pos = [t, 0, 0]),
                c._node &&
                  ((c._pannerAttr.panningModel = "equalpower"),
                  (!c._panner || !c._panner.pan) && e(c, s),
                  s === "spatial"
                    ? typeof c._panner.positionX < "u"
                      ? (c._panner.positionX.setValueAtTime(
                          t,
                          Howler.ctx.currentTime
                        ),
                        c._panner.positionY.setValueAtTime(
                          0,
                          Howler.ctx.currentTime
                        ),
                        c._panner.positionZ.setValueAtTime(
                          0,
                          Howler.ctx.currentTime
                        ))
                      : c._panner.setPosition(t, 0, 0)
                    : c._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
                i._emit("stereo", c._id);
            else return c._stereo;
        }
        return i;
      }),
      (Howl.prototype.pos = function (t, n, i, s) {
        var r = this;
        if (!r._webAudio) return r;
        if (r._state !== "loaded")
          return (
            r._queue.push({
              event: "pos",
              action: function () {
                r.pos(t, n, i, s);
              },
            }),
            r
          );
        if (
          ((n = typeof n != "number" ? 0 : n),
          (i = typeof i != "number" ? -0.5 : i),
          typeof s > "u")
        )
          if (typeof t == "number") r._pos = [t, n, i];
          else return r._pos;
        for (var a = r._getSoundIds(s), c = 0; c < a.length; c++) {
          var h = r._soundById(a[c]);
          if (h)
            if (typeof t == "number")
              (h._pos = [t, n, i]),
                h._node &&
                  ((!h._panner || h._panner.pan) && e(h, "spatial"),
                  typeof h._panner.positionX < "u"
                    ? (h._panner.positionX.setValueAtTime(
                        t,
                        Howler.ctx.currentTime
                      ),
                      h._panner.positionY.setValueAtTime(
                        n,
                        Howler.ctx.currentTime
                      ),
                      h._panner.positionZ.setValueAtTime(
                        i,
                        Howler.ctx.currentTime
                      ))
                    : h._panner.setPosition(t, n, i)),
                r._emit("pos", h._id);
            else return h._pos;
        }
        return r;
      }),
      (Howl.prototype.orientation = function (t, n, i, s) {
        var r = this;
        if (!r._webAudio) return r;
        if (r._state !== "loaded")
          return (
            r._queue.push({
              event: "orientation",
              action: function () {
                r.orientation(t, n, i, s);
              },
            }),
            r
          );
        if (
          ((n = typeof n != "number" ? r._orientation[1] : n),
          (i = typeof i != "number" ? r._orientation[2] : i),
          typeof s > "u")
        )
          if (typeof t == "number") r._orientation = [t, n, i];
          else return r._orientation;
        for (var a = r._getSoundIds(s), c = 0; c < a.length; c++) {
          var h = r._soundById(a[c]);
          if (h)
            if (typeof t == "number")
              (h._orientation = [t, n, i]),
                h._node &&
                  (h._panner ||
                    (h._pos || (h._pos = r._pos || [0, 0, -0.5]),
                    e(h, "spatial")),
                  typeof h._panner.orientationX < "u"
                    ? (h._panner.orientationX.setValueAtTime(
                        t,
                        Howler.ctx.currentTime
                      ),
                      h._panner.orientationY.setValueAtTime(
                        n,
                        Howler.ctx.currentTime
                      ),
                      h._panner.orientationZ.setValueAtTime(
                        i,
                        Howler.ctx.currentTime
                      ))
                    : h._panner.setOrientation(t, n, i)),
                r._emit("orientation", h._id);
            else return h._orientation;
        }
        return r;
      }),
      (Howl.prototype.pannerAttr = function () {
        var t = this,
          n = arguments,
          i,
          s,
          r;
        if (!t._webAudio) return t;
        if (n.length === 0) return t._pannerAttr;
        if (n.length === 1)
          if (typeof n[0] == "object")
            (i = n[0]),
              typeof s > "u" &&
                (i.pannerAttr ||
                  (i.pannerAttr = {
                    coneInnerAngle: i.coneInnerAngle,
                    coneOuterAngle: i.coneOuterAngle,
                    coneOuterGain: i.coneOuterGain,
                    distanceModel: i.distanceModel,
                    maxDistance: i.maxDistance,
                    refDistance: i.refDistance,
                    rolloffFactor: i.rolloffFactor,
                    panningModel: i.panningModel,
                  }),
                (t._pannerAttr = {
                  coneInnerAngle:
                    typeof i.pannerAttr.coneInnerAngle < "u"
                      ? i.pannerAttr.coneInnerAngle
                      : t._coneInnerAngle,
                  coneOuterAngle:
                    typeof i.pannerAttr.coneOuterAngle < "u"
                      ? i.pannerAttr.coneOuterAngle
                      : t._coneOuterAngle,
                  coneOuterGain:
                    typeof i.pannerAttr.coneOuterGain < "u"
                      ? i.pannerAttr.coneOuterGain
                      : t._coneOuterGain,
                  distanceModel:
                    typeof i.pannerAttr.distanceModel < "u"
                      ? i.pannerAttr.distanceModel
                      : t._distanceModel,
                  maxDistance:
                    typeof i.pannerAttr.maxDistance < "u"
                      ? i.pannerAttr.maxDistance
                      : t._maxDistance,
                  refDistance:
                    typeof i.pannerAttr.refDistance < "u"
                      ? i.pannerAttr.refDistance
                      : t._refDistance,
                  rolloffFactor:
                    typeof i.pannerAttr.rolloffFactor < "u"
                      ? i.pannerAttr.rolloffFactor
                      : t._rolloffFactor,
                  panningModel:
                    typeof i.pannerAttr.panningModel < "u"
                      ? i.pannerAttr.panningModel
                      : t._panningModel,
                }));
          else
            return (
              (r = t._soundById(parseInt(n[0], 10))),
              r ? r._pannerAttr : t._pannerAttr
            );
        else n.length === 2 && ((i = n[0]), (s = parseInt(n[1], 10)));
        for (var a = t._getSoundIds(s), c = 0; c < a.length; c++)
          if (((r = t._soundById(a[c])), r)) {
            var h = r._pannerAttr;
            h = {
              coneInnerAngle:
                typeof i.coneInnerAngle < "u"
                  ? i.coneInnerAngle
                  : h.coneInnerAngle,
              coneOuterAngle:
                typeof i.coneOuterAngle < "u"
                  ? i.coneOuterAngle
                  : h.coneOuterAngle,
              coneOuterGain:
                typeof i.coneOuterGain < "u"
                  ? i.coneOuterGain
                  : h.coneOuterGain,
              distanceModel:
                typeof i.distanceModel < "u"
                  ? i.distanceModel
                  : h.distanceModel,
              maxDistance:
                typeof i.maxDistance < "u" ? i.maxDistance : h.maxDistance,
              refDistance:
                typeof i.refDistance < "u" ? i.refDistance : h.refDistance,
              rolloffFactor:
                typeof i.rolloffFactor < "u"
                  ? i.rolloffFactor
                  : h.rolloffFactor,
              panningModel:
                typeof i.panningModel < "u" ? i.panningModel : h.panningModel,
            };
            var d = r._panner;
            d
              ? ((d.coneInnerAngle = h.coneInnerAngle),
                (d.coneOuterAngle = h.coneOuterAngle),
                (d.coneOuterGain = h.coneOuterGain),
                (d.distanceModel = h.distanceModel),
                (d.maxDistance = h.maxDistance),
                (d.refDistance = h.refDistance),
                (d.rolloffFactor = h.rolloffFactor),
                (d.panningModel = h.panningModel))
              : (r._pos || (r._pos = t._pos || [0, 0, -0.5]), e(r, "spatial"));
          }
        return t;
      }),
      (Sound.prototype.init = (function (t) {
        return function () {
          var n = this,
            i = n._parent;
          (n._orientation = i._orientation),
            (n._stereo = i._stereo),
            (n._pos = i._pos),
            (n._pannerAttr = i._pannerAttr),
            t.call(this),
            n._stereo
              ? i.stereo(n._stereo)
              : n._pos && i.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
        };
      })(Sound.prototype.init)),
      (Sound.prototype.reset = (function (t) {
        return function () {
          var n = this,
            i = n._parent;
          return (
            (n._orientation = i._orientation),
            (n._stereo = i._stereo),
            (n._pos = i._pos),
            (n._pannerAttr = i._pannerAttr),
            n._stereo
              ? i.stereo(n._stereo)
              : n._pos
              ? i.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
              : n._panner &&
                (n._panner.disconnect(0),
                (n._panner = void 0),
                i._refreshBuffer(n)),
            t.call(this)
          );
        };
      })(Sound.prototype.reset));
    var e = function (t, n) {
      (n = n || "spatial"),
        n === "spatial"
          ? ((t._panner = Howler.ctx.createPanner()),
            (t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle),
            (t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle),
            (t._panner.coneOuterGain = t._pannerAttr.coneOuterGain),
            (t._panner.distanceModel = t._pannerAttr.distanceModel),
            (t._panner.maxDistance = t._pannerAttr.maxDistance),
            (t._panner.refDistance = t._pannerAttr.refDistance),
            (t._panner.rolloffFactor = t._pannerAttr.rolloffFactor),
            (t._panner.panningModel = t._pannerAttr.panningModel),
            typeof t._panner.positionX < "u"
              ? (t._panner.positionX.setValueAtTime(
                  t._pos[0],
                  Howler.ctx.currentTime
                ),
                t._panner.positionY.setValueAtTime(
                  t._pos[1],
                  Howler.ctx.currentTime
                ),
                t._panner.positionZ.setValueAtTime(
                  t._pos[2],
                  Howler.ctx.currentTime
                ))
              : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]),
            typeof t._panner.orientationX < "u"
              ? (t._panner.orientationX.setValueAtTime(
                  t._orientation[0],
                  Howler.ctx.currentTime
                ),
                t._panner.orientationY.setValueAtTime(
                  t._orientation[1],
                  Howler.ctx.currentTime
                ),
                t._panner.orientationZ.setValueAtTime(
                  t._orientation[2],
                  Howler.ctx.currentTime
                ))
              : t._panner.setOrientation(
                  t._orientation[0],
                  t._orientation[1],
                  t._orientation[2]
                ))
          : ((t._panner = Howler.ctx.createStereoPanner()),
            t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)),
        t._panner.connect(t._node),
        t._paused || t._parent.pause(t._id, !0).play(t._id, !0);
    };
  })();
})(Ni);
