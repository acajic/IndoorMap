﻿(function () {
    var t;
    (function (t, e, i) {
        function n(i, s) {
            if (!e[i]) {
                if (!t[i]) {
                    var r = "function" == typeof require && require;
                    if (!s && r) return r(i, !0);
                    if (o) return o(i, !0);
                    throw Error("Cannot find module '" + i + "'")
                }
                var a = e[i] = {
                    exports: {}
                };
                t[i][0].call(a.exports, function (e) {
                    var o = t[i][1][e];
                    return n(o ? o : e)
                }, a, a.exports)
            }
            return e[i].exports
        }
        for (var o = "function" == typeof require && require, s = 0; i.length > s; s++) n(i[s]);
        return n
    })({
        1: [
            function (t, e) {
                window.L = t("Leaflet/dist/leaflet-src"), window.L.Icon.Default.imagePath = "http://api.tiles.mapbox.com/mapbox.js/v" + t("./package.json").version + "/images", L.mapbox = e.exports = {
                    VERSION: t("./package.json").version,
                    geocoder: t("./src/geocoder"),
                    marker: t("./src/marker"),
                    tileLayer: t("./src/tile_layer"),
                    legendControl: t("./src/legend_control"),
                    geocoderControl: t("./src/geocoder_control"),
                    gridControl: t("./src/grid_control"),
                    gridLayer: t("./src/grid_layer"),
                    markerLayer: t("./src/marker_layer"),
                    map: t("./src/map"),
                    config: t("./src/config")
                }
            }, {
                "./package.json": 2,
                "Leaflet/dist/leaflet-src": 3,
                "./src/geocoder": 4,
                "./src/marker": 5,
                "./src/tile_layer": 6,
                "./src/legend_control": 7,
                "./src/geocoder_control": 8,
                "./src/grid_control": 9,
                "./src/grid_layer": 10,
                "./src/marker_layer": 11,
                "./src/map": 12,
                "./src/config": 13
            }
        ],
        2: [
            function (t, e) {
                e.exports = {
                    author: "MapBox",
                    name: "mapbox.js",
                    description: "mapbox javascript api",
                    version: "1.0.2",
                    homepage: "http://mapbox.com/",
                    repository: {
                        type: "git",
                        url: "git://github.com/mapbox/mapbox.js.git"
                    },
                    main: "index.js",
                    dependencies: {
                        leaflet: "git://github.com/Leaflet/Leaflet.git#b31c9d50b81c5a73086d8180d6ace51967001316",
                        mustache: "~0.7.2",
                        corslite: "0.0.3",
                        json3: "~3.2.4"
                    },
                    scripts: {
                        test: "mocha-phantomjs test/index.html"
                    },
                    devDependencies: {
                        "leaflet-hash": "git://github.com/mlevans/leaflet-hash.git#b039a3aa4e2492a5c7448075172ac26769e601d6",
                        "leaflet-fullscreen": "0.0.0",
                        "uglify-js": "~2.2.5",
                        mocha: "~1.9",
                        "expect.js": "~0.2.0",
                        sinon: "~1.6.0",
                        "mocha-phantomjs": "~1.1.1",
                        happen: "~0.1.2",
                        browserify: "~2.12.0"
                    },
                    optionalDependencies: {},
                    engines: {
                        node: "*"
                    }
                }
            }, {}
        ],
        3: [
            function (e, i) {
                (function () {
                    (function (e, n, o) {
                        var s = e.L,
                            r = {};
                        r.version = "0.6-dev", "object" == typeof i && "object" == typeof i.exports ? i.exports = r : "function" == typeof t && t.amd && t("leaflet", [], function () {
                            return r
                        }), r.noConflict = function () {
                            return e.L = s, this
                        }, e.L = r, r.Util = {
                            extend: function (t) {
                                var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                                for (i = 0, n = s.length; n > i; i++) {
                                    o = s[i] || {};
                                    for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                                }
                                return t
                            },
                            bind: function (t, e) {
                                var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                                return function () {
                                    return t.apply(e, i || arguments)
                                }
                            },
                            stamp: function () {
                                var t = 0,
                                    e = "_leaflet_id";
                                return function (i) {
                                    return i[e] = i[e] || ++t, i[e]
                                }
                            }(),
                            invokeEach: function (t, e, i) {
                                var n, o;
                                if ("object" == typeof t) {
                                    o = Array.prototype.slice.call(arguments, 3);
                                    for (n in t) e.apply(i, [n, t[n]].concat(o));
                                    return !0
                                }
                                return !1
                            },
                            limitExecByInterval: function (t, e, i) {
                                var n, s;
                                return function r() {
                                    var a = arguments;
                                    return n ? (s = !0, o) : (n = !0, setTimeout(function () {
                                        n = !1, s && (r.apply(i, a), s = !1)
                                    }, e), t.apply(i, a), o)
                                }
                            },
                            falseFn: function () {
                                return !1
                            },
                            formatNum: function (t, e) {
                                var i = Math.pow(10, e || 5);
                                return Math.round(t * i) / i
                            },
                            trim: function (t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            },
                            splitWords: function (t) {
                                return r.Util.trim(t).split(/\s+/)
                            },
                            setOptions: function (t, e) {
                                return t.options = r.extend({}, t.options, e), t.options
                            },
                            getParamString: function (t, e) {
                                var i = [];
                                for (var n in t) i.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                                return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
                            },
                            template: function (t, e) {
                                return t.replace(/\{ *([\w_]+) *\}/g, function (t, i) {
                                    var n = e[i];
                                    if (n === o) throw Error("No value provided for variable " + t);
                                    return "function" == typeof n && (n = n(e)), n
                                })
                            },
                            isArray: function (t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            },
                            emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        },
                        function () {
                            function t(t) {
                                var i, n, o = ["webkit", "moz", "o", "ms"];
                                for (i = 0; o.length > i && !n; i++) n = e[o[i] + t];
                                return n
                            }

                            function i(t) {
                                var i = +new Date,
                                    o = Math.max(0, 16 - (i - n));
                                return n = i + o, e.setTimeout(t, o)
                            }
                            var n = 0,
                                s = e.requestAnimationFrame || t("RequestAnimationFrame") || i,
                                a = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function (t) {
                                    e.clearTimeout(t)
                                };
                            r.Util.requestAnimFrame = function (t, n, a, l) {
                                return t = r.bind(t, n), a && s === i ? (t(), o) : s.call(e, t, l)
                            }, r.Util.cancelAnimFrame = function (t) {
                                t && a.call(e, t)
                            }
                        }(), r.extend = r.Util.extend, r.bind = r.Util.bind, r.stamp = r.Util.stamp, r.setOptions = r.Util.setOptions, r.Class = function () {}, r.Class.extend = function (t) {
                            var e = function () {
                                this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                            }, i = function () {};
                            i.prototype = this.prototype;
                            var n = new i;
                            n.constructor = e, e.prototype = n;
                            for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                            t.statics && (r.extend(e, t.statics), delete t.statics), t.includes && (r.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = r.extend({}, n.options, t.options)), r.extend(n, t), n._initHooks = [];
                            var s = this;
                            return e.__super__ = s.prototype, n.callInitHooks = function () {
                                if (!this._initHooksCalled) {
                                    s.prototype.callInitHooks && s.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                                    for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                                }
                            }, e
                        }, r.Class.include = function (t) {
                            r.extend(this.prototype, t)
                        }, r.Class.mergeOptions = function (t) {
                            r.extend(this.prototype.options, t)
                        }, r.Class.addInitHook = function (t) {
                            var e = Array.prototype.slice.call(arguments, 1),
                                i = "function" == typeof t ? t : function () {
                                    this[t].apply(this, e)
                                };
                            this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
                        };
                        var a = "_leaflet_events";
                        r.Mixin = {}, r.Mixin.Events = {
                            addEventListener: function (t, e, i) {
                                if (r.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                                var n, o, s, l, h, u, c, p = this[a] = this[a] || {}, d = i && r.stamp(i);
                                for (t = r.Util.splitWords(t), n = 0, o = t.length; o > n; n++) s = {
                                    action: e,
                                    context: i || this
                                }, l = t[n], i ? (h = l + "_idx", u = h + "_len", c = p[h] = p[h] || {}, c[d] || (c[d] = [], p[u] = (p[u] || 0) + 1), c[d].push(s)) : (p[l] = p[l] || [], p[l].push(s));
                                return this
                            },
                            hasEventListeners: function (t) {
                                var e = this[a];
                                return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
                            },
                            removeEventListener: function (t, e, i) {
                                if (!t) return this.clearAllEventListeners();
                                if (r.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                                var n, o, s, l, h, u, c, p, d = this[a],
                                    m = i && r.stamp(i);
                                for (t = r.Util.splitWords(t), n = 0, o = t.length; o > n; n++)
                                    if (s = t[n], u = s + "_idx", c = u + "_len", p = d[u], e) {
                                        if (l = i && p ? p[m] : d[s]) {
                                            for (h = l.length - 1; h >= 0; h--) l[h].action !== e || i && l[h].context !== i || l.splice(h, 1);
                                            i && p && 0 === l.length && (delete p[m], d[c]--)
                                        }
                                    } else delete d[s], delete d[u];
                                return this
                            },
                            clearAllEventListeners: function () {
                                return delete this[a], this
                            },
                            fireEvent: function (t, e) {
                                if (!this.hasEventListeners(t)) return this;
                                var i, n, o, s, l, h = r.Util.extend({}, e, {
                                        type: t,
                                        target: this
                                    }),
                                    u = this[a];
                                if (u[t])
                                    for (i = u[t].slice(), n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context || this, h);
                                s = u[t + "_idx"];
                                for (l in s)
                                    if (i = s[l])
                                        for (n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context || this, h);
                                return this
                            },
                            addOneTimeEventListener: function (t, e, i) {
                                if (r.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                                var n = r.bind(function () {
                                    this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                                }, this);
                                return this.addEventListener(t, e, i).addEventListener(t, n, i)
                            }
                        }, r.Mixin.Events.on = r.Mixin.Events.addEventListener, r.Mixin.Events.off = r.Mixin.Events.removeEventListener, r.Mixin.Events.once = r.Mixin.Events.addOneTimeEventListener, r.Mixin.Events.fire = r.Mixin.Events.fireEvent,
                        function () {
                            var t = !! e.ActiveXObject,
                                i = t && !e.XMLHttpRequest,
                                s = t && !n.querySelector,
                                a = t && !n.addEventListener,
                                l = navigator.userAgent.toLowerCase(),
                                h = -1 !== l.indexOf("webkit"),
                                u = -1 !== l.indexOf("chrome"),
                                c = -1 !== l.indexOf("phantom"),
                                p = -1 !== l.indexOf("android"),
                                d = -1 !== l.search("android [23]"),
                                m = typeof orientation != o + "",
                                f = e.navigator && e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints,
                                _ = "devicePixelRatio" in e && e.devicePixelRatio > 1 || "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches,
                                g = n.documentElement,
                                v = t && "transition" in g.style,
                                y = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix,
                                L = "MozPerspective" in g.style,
                                T = "OTransition" in g.style,
                                P = !e.L_DISABLE_3D && (v || y || L || T) && !c,
                                b = !e.L_NO_TOUCH && !c && function () {
                                    var t = "ontouchstart";
                                    if (f || t in g) return !0;
                                    var e = n.createElement("div"),
                                        i = !1;
                                    return e.setAttribute ? (e.setAttribute(t, "return;"), "function" == typeof e[t] && (i = !0), e.removeAttribute(t), e = null, i) : !1
                                }();
                            r.Browser = {
                                ie: t,
                                ie6: i,
                                ie7: s,
                                ielt9: a,
                                webkit: h,
                                android: p,
                                android23: d,
                                chrome: u,
                                ie3d: v,
                                webkit3d: y,
                                gecko3d: L,
                                opera3d: T,
                                any3d: P,
                                mobile: m,
                                mobileWebkit: m && h,
                                mobileWebkit3d: m && y,
                                mobileOpera: m && e.opera,
                                touch: b,
                                msTouch: f,
                                retina: _
                            }
                        }(), r.Point = function (t, e, i) {
                            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                        }, r.Point.prototype = {
                            clone: function () {
                                return new r.Point(this.x, this.y)
                            },
                            add: function (t) {
                                return this.clone()._add(r.point(t))
                            },
                            _add: function (t) {
                                return this.x += t.x, this.y += t.y, this
                            },
                            subtract: function (t) {
                                return this.clone()._subtract(r.point(t))
                            },
                            _subtract: function (t) {
                                return this.x -= t.x, this.y -= t.y, this
                            },
                            divideBy: function (t) {
                                return this.clone()._divideBy(t)
                            },
                            _divideBy: function (t) {
                                return this.x /= t, this.y /= t, this
                            },
                            multiplyBy: function (t) {
                                return this.clone()._multiplyBy(t)
                            },
                            _multiplyBy: function (t) {
                                return this.x *= t, this.y *= t, this
                            },
                            round: function () {
                                return this.clone()._round()
                            },
                            _round: function () {
                                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                            },
                            floor: function () {
                                return this.clone()._floor()
                            },
                            _floor: function () {
                                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                            },
                            distanceTo: function (t) {
                                t = r.point(t);
                                var e = t.x - this.x,
                                    i = t.y - this.y;
                                return Math.sqrt(e * e + i * i)
                            },
                            equals: function (t) {
                                return t = r.point(t), t.x === this.x && t.y === this.y
                            },
                            contains: function (t) {
                                return t = r.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                            },
                            toString: function () {
                                return "Point(" + r.Util.formatNum(this.x) + ", " + r.Util.formatNum(this.y) + ")"
                            }
                        }, r.point = function (t, e, i) {
                            return t instanceof r.Point ? t : r.Util.isArray(t) ? new r.Point(t[0], t[1]) : t === o || null === t ? t : new r.Point(t, e, i)
                        }, r.Bounds = function (t, e) {
                            if (t)
                                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                        }, r.Bounds.prototype = {
                            extend: function (t) {
                                return t = r.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                            },
                            getCenter: function (t) {
                                return new r.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                            },
                            getBottomLeft: function () {
                                return new r.Point(this.min.x, this.max.y)
                            },
                            getTopRight: function () {
                                return new r.Point(this.max.x, this.min.y)
                            },
                            getSize: function () {
                                return this.max.subtract(this.min)
                            },
                            contains: function (t) {
                                var e, i;
                                return t = "number" == typeof t[0] || t instanceof r.Point ? r.point(t) : r.bounds(t), t instanceof r.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                            },
                            intersects: function (t) {
                                t = r.bounds(t);
                                var e = this.min,
                                    i = this.max,
                                    n = t.min,
                                    o = t.max,
                                    s = o.x >= e.x && n.x <= i.x,
                                    a = o.y >= e.y && n.y <= i.y;
                                return s && a
                            },
                            isValid: function () {
                                return !(!this.min || !this.max)
                            }
                        }, r.bounds = function (t, e) {
                            return !t || t instanceof r.Bounds ? t : new r.Bounds(t, e)
                        }, r.Transformation = function (t, e, i, n) {
                            this._a = t, this._b = e, this._c = i, this._d = n
                        }, r.Transformation.prototype = {
                            transform: function (t, e) {
                                return this._transform(t.clone(), e)
                            },
                            _transform: function (t, e) {
                                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                            },
                            untransform: function (t, e) {
                                return e = e || 1, new r.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                            }
                        }, r.DomUtil = {
                            get: function (t) {
                                return "string" == typeof t ? n.getElementById(t) : t
                            },
                            getStyle: function (t, e) {
                                var i = t.style[e];
                                if (!i && t.currentStyle && (i = t.currentStyle[e]), (!i || "auto" === i) && n.defaultView) {
                                    var o = n.defaultView.getComputedStyle(t, null);
                                    i = o ? o[e] : null
                                }
                                return "auto" === i ? null : i
                            },
                            getViewportOffset: function (t) {
                                var e, i = 0,
                                    o = 0,
                                    s = t,
                                    a = n.body,
                                    l = n.documentElement,
                                    h = r.Browser.ie7;
                                do {
                                    if (i += s.offsetTop || 0, o += s.offsetLeft || 0, i += parseInt(r.DomUtil.getStyle(s, "borderTopWidth"), 10) || 0, o += parseInt(r.DomUtil.getStyle(s, "borderLeftWidth"), 10) || 0, e = r.DomUtil.getStyle(s, "position"), s.offsetParent === a && "absolute" === e) break;
                                    if ("fixed" === e) {
                                        i += a.scrollTop || l.scrollTop || 0, o += a.scrollLeft || l.scrollLeft || 0;
                                        break
                                    }
                                    s = s.offsetParent
                                } while (s);
                                s = t;
                                do {
                                    if (s === a) break;
                                    i -= s.scrollTop || 0, o -= s.scrollLeft || 0, r.DomUtil.documentIsLtr() || !r.Browser.webkit && !h || (o += s.scrollWidth - s.clientWidth, h && "hidden" !== r.DomUtil.getStyle(s, "overflow-y") && "hidden" !== r.DomUtil.getStyle(s, "overflow") && (o += 17)), s = s.parentNode
                                } while (s);
                                return new r.Point(o, i)
                            },
                            documentIsLtr: function () {
                                return r.DomUtil._docIsLtrCached || (r.DomUtil._docIsLtrCached = !0, r.DomUtil._docIsLtr = "ltr" === r.DomUtil.getStyle(n.body, "direction")), r.DomUtil._docIsLtr
                            },
                            create: function (t, e, i) {
                                var o = n.createElement(t);
                                return o.className = e, i && i.appendChild(o), o
                            },
                            disableTextSelection: function () {
                                n.selection && n.selection.empty && n.selection.empty(), this._onselectstart || (this._onselectstart = n.onselectstart || null, n.onselectstart = r.Util.falseFn)
                            },
                            enableTextSelection: function () {
                                n.onselectstart === r.Util.falseFn && (n.onselectstart = this._onselectstart, this._onselectstart = null)
                            },
                            hasClass: function (t, e) {
                                return t.className.length > 0 && RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                            },
                            addClass: function (t, e) {
                                r.DomUtil.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                            },
                            removeClass: function (t, e) {
                                t.className = r.Util.trim((" " + t.className + " ").replace(" " + e + " ", " "))
                            },
                            setOpacity: function (t, e) {
                                if ("opacity" in t.style) t.style.opacity = e;
                                else if ("filter" in t.style) {
                                    var i = !1,
                                        n = "DXImageTransform.Microsoft.Alpha";
                                    try {
                                        i = t.filters.item(n)
                                    } catch (o) {
                                        if (1 === e) return
                                    }
                                    e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                                }
                            },
                            testProp: function (t) {
                                for (var e = n.documentElement.style, i = 0; t.length > i; i++)
                                    if (t[i] in e) return t[i];
                                return !1
                            },
                            getTranslateString: function (t) {
                                var e = r.Browser.webkit3d,
                                    i = "translate" + (e ? "3d" : "") + "(",
                                    n = (e ? ",0" : "") + ")";
                                return i + t.x + "px," + t.y + "px" + n
                            },
                            getScaleString: function (t, e) {
                                var i = r.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                                    n = " scale(" + t + ") ";
                                return i + n
                            },
                            setPosition: function (t, e, i) {
                                t._leaflet_pos = e, !i && r.Browser.any3d ? (t.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(e), r.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden")) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                            },
                            getPosition: function (t) {
                                return t._leaflet_pos
                            }
                        }, r.DomUtil.TRANSFORM = r.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), r.DomUtil.TRANSITION = r.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), r.DomUtil.TRANSITION_END = "webkitTransition" === r.DomUtil.TRANSITION || "OTransition" === r.DomUtil.TRANSITION ? r.DomUtil.TRANSITION + "End" : "transitionend", r.LatLng = function (t, e) {
                            var i = parseFloat(t),
                                n = parseFloat(e);
                            if (isNaN(i) || isNaN(n)) throw Error("Invalid LatLng object: (" + t + ", " + e + ")");
                            this.lat = i, this.lng = n
                        }, r.extend(r.LatLng, {
                            DEG_TO_RAD: Math.PI / 180,
                            RAD_TO_DEG: 180 / Math.PI,
                            MAX_MARGIN: 1e-9
                        }), r.LatLng.prototype = {
                            equals: function (t) {
                                if (!t) return !1;
                                t = r.latLng(t);
                                var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                                return r.LatLng.MAX_MARGIN >= e
                            },
                            toString: function (t) {
                                return "LatLng(" + r.Util.formatNum(this.lat, t) + ", " + r.Util.formatNum(this.lng, t) + ")"
                            },
                            distanceTo: function (t) {
                                t = r.latLng(t);
                                var e = 6378137,
                                    i = r.LatLng.DEG_TO_RAD,
                                    n = (t.lat - this.lat) * i,
                                    o = (t.lng - this.lng) * i,
                                    s = this.lat * i,
                                    a = t.lat * i,
                                    l = Math.sin(n / 2),
                                    h = Math.sin(o / 2),
                                    u = l * l + h * h * Math.cos(s) * Math.cos(a);
                                return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
                            },
                            wrap: function (t, e) {
                                var i = this.lng;
                                return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new r.LatLng(this.lat, i)
                            }
                        }, r.latLng = function (t, e) {
                            return t instanceof r.LatLng ? t : r.Util.isArray(t) ? new r.LatLng(t[0], t[1]) : t === o || null === t ? t : "object" == typeof t && "lat" in t ? new r.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : new r.LatLng(t, e)
                        }, r.LatLngBounds = function (t, e) {
                            if (t)
                                for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                        }, r.LatLngBounds.prototype = {
                            extend: function (t) {
                                return t = "number" == typeof t[0] || "string" == typeof t[0] || t instanceof r.LatLng ? r.latLng(t) : r.latLngBounds(t), t instanceof r.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new r.LatLng(t.lat, t.lng), this._northEast = new r.LatLng(t.lat, t.lng)) : t instanceof r.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
                            },
                            pad: function (t) {
                                var e = this._southWest,
                                    i = this._northEast,
                                    n = Math.abs(e.lat - i.lat) * t,
                                    o = Math.abs(e.lng - i.lng) * t;
                                return new r.LatLngBounds(new r.LatLng(e.lat - n, e.lng - o), new r.LatLng(i.lat + n, i.lng + o))
                            },
                            getCenter: function () {
                                return new r.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                            },
                            getSouthWest: function () {
                                return this._southWest
                            },
                            getNorthEast: function () {
                                return this._northEast
                            },
                            getNorthWest: function () {
                                return new r.LatLng(this.getNorth(), this.getWest())
                            },
                            getSouthEast: function () {
                                return new r.LatLng(this.getSouth(), this.getEast())
                            },
                            getWest: function () {
                                return this._southWest.lng
                            },
                            getSouth: function () {
                                return this._southWest.lat
                            },
                            getEast: function () {
                                return this._northEast.lng
                            },
                            getNorth: function () {
                                return this._northEast.lat
                            },
                            contains: function (t) {
                                t = "number" == typeof t[0] || t instanceof r.LatLng ? r.latLng(t) : r.latLngBounds(t);
                                var e, i, n = this._southWest,
                                    o = this._northEast;
                                return t instanceof r.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                            },
                            intersects: function (t) {
                                t = r.latLngBounds(t);
                                var e = this._southWest,
                                    i = this._northEast,
                                    n = t.getSouthWest(),
                                    o = t.getNorthEast(),
                                    s = o.lat >= e.lat && n.lat <= i.lat,
                                    a = o.lng >= e.lng && n.lng <= i.lng;
                                return s && a
                            },
                            toBBoxString: function () {
                                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                            },
                            equals: function (t) {
                                return t ? (t = r.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
                            },
                            isValid: function () {
                                return !(!this._southWest || !this._northEast)
                            }
                        }, r.latLngBounds = function (t, e) {
                            return !t || t instanceof r.LatLngBounds ? t : new r.LatLngBounds(t, e)
                        }, r.Projection = {}, r.Projection.SphericalMercator = {
                            MAX_LATITUDE: 85.0511287798,
                            project: function (t) {
                                var e = r.LatLng.DEG_TO_RAD,
                                    i = this.MAX_LATITUDE,
                                    n = Math.max(Math.min(i, t.lat), -i),
                                    o = t.lng * e,
                                    s = n * e;
                                return s = Math.log(Math.tan(Math.PI / 4 + s / 2)), new r.Point(o, s)
                            },
                            unproject: function (t) {
                                var e = r.LatLng.RAD_TO_DEG,
                                    i = t.x * e,
                                    n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                                return new r.LatLng(n, i)
                            }
                        }, r.Projection.LonLat = {
                            project: function (t) {
                                return new r.Point(t.lng, t.lat)
                            },
                            unproject: function (t) {
                                return new r.LatLng(t.y, t.x)
                            }
                        }, r.CRS = {
                            latLngToPoint: function (t, e) {
                                var i = this.projection.project(t),
                                    n = this.scale(e);
                                return this.transformation._transform(i, n)
                            },
                            pointToLatLng: function (t, e) {
                                var i = this.scale(e),
                                    n = this.transformation.untransform(t, i);
                                return this.projection.unproject(n)
                            },
                            project: function (t) {
                                return this.projection.project(t)
                            },
                            scale: function (t) {
                                return 256 * Math.pow(2, t)
                            }
                        }, r.CRS.Simple = r.extend({}, r.CRS, {
                            projection: r.Projection.LonLat,
                            transformation: new r.Transformation(1, 0, -1, 0),
                            scale: function (t) {
                                return Math.pow(2, t)
                            }
                        }), r.CRS.EPSG3857 = r.extend({}, r.CRS, {
                            code: "EPSG:3857",
                            projection: r.Projection.SphericalMercator,
                            transformation: new r.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                            project: function (t) {
                                var e = this.projection.project(t),
                                    i = 6378137;
                                return e.multiplyBy(i)
                            }
                        }), r.CRS.EPSG900913 = r.extend({}, r.CRS.EPSG3857, {
                            code: "EPSG:900913"
                        }), r.CRS.EPSG4326 = r.extend({}, r.CRS, {
                            code: "EPSG:4326",
                            projection: r.Projection.LonLat,
                            transformation: new r.Transformation(1 / 360, .5, -1 / 360, .5)
                        }), r.Map = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                crs: r.CRS.EPSG3857,
                                fadeAnimation: r.DomUtil.TRANSITION && !r.Browser.android23,
                                trackResize: !0,
                                markerZoomAnimation: r.DomUtil.TRANSITION && r.Browser.any3d
                            },
                            initialize: function (t, e) {
                                e = r.setOptions(this, e), this._initContainer(t), this._initLayout(), this.callInitHooks(), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== o && this.setView(r.latLng(e.center), e.zoom, !0), this._initLayers(e.layers)
                            },
                            setView: function (t, e) {
                                return this._resetView(r.latLng(t), this._limitZoom(e)), this
                            },
                            setZoom: function (t) {
                                return this.setView(this.getCenter(), t)
                            },
                            zoomIn: function (t) {
                                return this.setZoom(this._zoom + (t || 1))
                            },
                            zoomOut: function (t) {
                                return this.setZoom(this._zoom - (t || 1))
                            },
                            setZoomAround: function (t, e) {
                                var i = this.getZoomScale(e),
                                    n = this.getSize().divideBy(2),
                                    o = t instanceof r.Point ? t : this.latLngToContainerPoint(t),
                                    s = o.subtract(n).multiplyBy(1 - 1 / i),
                                    a = this.containerPointToLatLng(n.add(s));
                                return this.setView(a, e)
                            },
                            fitBounds: function (t, e, i) {
                                t = t.getBounds ? t.getBounds() : r.latLngBounds(t), e = r.point(e || [0, 0]), i = r.point(i || e);
                                var n = this.getBoundsZoom(t, !1, e.add(i)),
                                    o = i.subtract(e).divideBy(2),
                                    s = this.project(t.getSouthWest(), n),
                                    a = this.project(t.getNorthEast(), n),
                                    l = this.unproject(s.add(a).divideBy(2).add(o), n);
                                return this.setView(l, n)
                            },
                            fitWorld: function () {
                                return this.fitBounds([
                                    [-90, -180],
                                    [90, 180]
                                ])
                            },
                            panTo: function (t) {
                                return this.setView(t, this._zoom)
                            },
                            panBy: function (t) {
                                return this.fire("movestart"), this._rawPanBy(r.point(t)), this.fire("move"), this.fire("moveend")
                            },
                            setMaxBounds: function (t) {
                                if (t = r.latLngBounds(t), this.options.maxBounds = t, !t) return this._boundsMinZoom = null, this;
                                var e = this.getBoundsZoom(t, !0);
                                return this._boundsMinZoom = e, this._loaded && (e > this._zoom ? this.setView(t.getCenter(), e) : this.panInsideBounds(t)), this.on("moveend", this._panInsideMaxBounds, this), this
                            },
                            panInsideBounds: function (t) {
                                t = r.latLngBounds(t);
                                var e = this.getPixelBounds(),
                                    i = e.getBottomLeft(),
                                    n = e.getTopRight(),
                                    o = this.project(t.getSouthWest()),
                                    s = this.project(t.getNorthEast()),
                                    a = 0,
                                    l = 0;
                                return n.y < s.y && (l = Math.ceil(s.y - n.y)), n.x > s.x && (a = Math.floor(s.x - n.x)), i.y > o.y && (l = Math.floor(o.y - i.y)), i.x < o.x && (a = Math.ceil(o.x - i.x)), a || l ? this.panBy([a, l]) : this
                            },
                            addLayer: function (t) {
                                var e = r.stamp(t);
                                return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this.whenReady(function () {
                                    t.onAdd(this), this.fire("layeradd", {
                                        layer: t
                                    })
                                }, this), this)
                            },
                            removeLayer: function (t) {
                                var e = r.stamp(t);
                                if (this._layers[e]) return t.onRemove(this), delete this._layers[e], this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this.fire("layerremove", {
                                    layer: t
                                })
                            },
                            hasLayer: function (t) {
                                return t ? r.stamp(t) in this._layers : !1
                            },
                            eachLayer: function (t, e) {
                                for (var i in this._layers) t.call(e, this._layers[i]);
                                return this
                            },
                            invalidateSize: function (t) {
                                var e = this.getSize();
                                if (this._sizeChanged = !0, this.options.maxBounds && this.setMaxBounds(this.options.maxBounds), !this._loaded) return this;
                                var i = this.getSize(),
                                    n = e.subtract(i).divideBy(2).round();
                                return (0 !== n.x || 0 !== n.y) && (t === !0 ? this.panBy(n) : (this._rawPanBy(n), this.fire("move"), clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r.bind(this.fire, this, "moveend"), 200)), this.fire("resize", {
                                    oldSize: e,
                                    newSize: i
                                })), this
                            },
                            addHandler: function (t, e) {
                                return e ? (this[t] = new e(this), this.options[t] && this[t].enable(), this) : o
                            },
                            remove: function () {
                                return this._loaded && this.fire("unload"), this._initEvents("off"), delete this._container._leaflet, this
                            },
                            getCenter: function () {
                                return this._checkIfLoaded(), this._moved() ? this.layerPointToLatLng(this._getCenterLayerPoint()) : this._initialCenter
                            },
                            getZoom: function () {
                                return this._zoom
                            },
                            getBounds: function () {
                                var t = this.getPixelBounds(),
                                    e = this.unproject(t.getBottomLeft()),
                                    i = this.unproject(t.getTopRight());
                                return new r.LatLngBounds(e, i)
                            },
                            getMinZoom: function () {
                                var t = this.options.minZoom || 0,
                                    e = this._layersMinZoom || 0,
                                    i = this._boundsMinZoom || 0;
                                return Math.max(t, e, i)
                            },
                            getMaxZoom: function () {
                                var t = this.options.maxZoom === o ? 1 / 0 : this.options.maxZoom,
                                    e = this._layersMaxZoom === o ? 1 / 0 : this._layersMaxZoom;
                                return Math.min(t, e)
                            },
                            getBoundsZoom: function (t, e, i) {
                                t = r.latLngBounds(t);
                                var n, o = this.getMinZoom() - (e ? 1 : 0),
                                    s = this.getMaxZoom(),
                                    a = this.getSize(),
                                    l = t.getNorthWest(),
                                    h = t.getSouthEast(),
                                    u = !0;
                                i = r.point(i || [0, 0]);
                                do o++, n = this.project(h, o).subtract(this.project(l, o)).add(i), u = e ? n.x < a.x || n.y < a.y : a.contains(n); while (u && s >= o);
                                return u && e ? null : e ? o : o - 1
                            },
                            getSize: function () {
                                return (!this._size || this._sizeChanged) && (this._size = new r.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                            },
                            getPixelBounds: function () {
                                var t = this._getTopLeftPoint();
                                return new r.Bounds(t, t.add(this.getSize()))
                            },
                            getPixelOrigin: function () {
                                return this._checkIfLoaded(), this._initialTopLeftPoint
                            },
                            getPanes: function () {
                                return this._panes
                            },
                            getContainer: function () {
                                return this._container
                            },
                            getZoomScale: function (t) {
                                var e = this.options.crs;
                                return e.scale(t) / e.scale(this._zoom)
                            },
                            getScaleZoom: function (t) {
                                return this._zoom + Math.log(t) / Math.LN2
                            },
                            project: function (t, e) {
                                return e = e === o ? this._zoom : e, this.options.crs.latLngToPoint(r.latLng(t), e)
                            },
                            unproject: function (t, e) {
                                return e = e === o ? this._zoom : e, this.options.crs.pointToLatLng(r.point(t), e)
                            },
                            layerPointToLatLng: function (t) {
                                var e = r.point(t).add(this.getPixelOrigin());
                                return this.unproject(e)
                            },
                            latLngToLayerPoint: function (t) {
                                var e = this.project(r.latLng(t))._round();
                                return e._subtract(this.getPixelOrigin())
                            },
                            containerPointToLayerPoint: function (t) {
                                return r.point(t).subtract(this._getMapPanePos())
                            },
                            layerPointToContainerPoint: function (t) {
                                return r.point(t).add(this._getMapPanePos())
                            },
                            containerPointToLatLng: function (t) {
                                var e = this.containerPointToLayerPoint(r.point(t));
                                return this.layerPointToLatLng(e)
                            },
                            latLngToContainerPoint: function (t) {
                                return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(t)))
                            },
                            mouseEventToContainerPoint: function (t) {
                                return r.DomEvent.getMousePosition(t, this._container)
                            },
                            mouseEventToLayerPoint: function (t) {
                                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                            },
                            mouseEventToLatLng: function (t) {
                                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                            },
                            _initContainer: function (t) {
                                var e = this._container = r.DomUtil.get(t);
                                if (!e) throw Error("Map container not found.");
                                if (e._leaflet) throw Error("Map container is already initialized.");
                                e._leaflet = !0
                            },
                            _initLayout: function () {
                                var t = this._container;
                                r.DomUtil.addClass(t, "leaflet-container"), r.Browser.touch && r.DomUtil.addClass(t, "leaflet-touch"), this.options.fadeAnimation && r.DomUtil.addClass(t, "leaflet-fade-anim");
                                var e = r.DomUtil.getStyle(t, "position");
                                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                            },
                            _initPanes: function () {
                                var t = this._panes = {};
                                this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                                var e = " leaflet-zoom-hide";
                                this.options.markerZoomAnimation || (r.DomUtil.addClass(t.markerPane, e), r.DomUtil.addClass(t.shadowPane, e), r.DomUtil.addClass(t.popupPane, e))
                            },
                            _createPane: function (t, e) {
                                return r.DomUtil.create("div", t, e || this._panes.objectsPane)
                            },
                            _initLayers: function (t) {
                                t = t ? r.Util.isArray(t) ? t : [t] : [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0;
                                var e, i;
                                for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                            },
                            _resetView: function (t, e, i, n) {
                                var o = this._zoom !== e;
                                n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : r.DomUtil.setPosition(this._mapPane, new r.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                                var s = !this._loaded;
                                this._loaded = !0, s && this.fire("load"), this.fire("viewreset", {
                                    hard: !i
                                }), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
                                    hard: !i
                                })
                            },
                            _rawPanBy: function (t) {
                                r.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                            },
                            _getZoomSpan: function () {
                                return this.getMaxZoom() - this.getMinZoom()
                            },
                            _updateZoomLevels: function () {
                                var t, e = 1 / 0,
                                    i = -1 / 0,
                                    n = this._getZoomSpan();
                                for (t in this._zoomBoundLayers) {
                                    var s = this._zoomBoundLayers[t];
                                    isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
                                }
                                t === o ? this._layersMaxZoom = this._layersMinZoom = o : (this._layersMaxZoom = i, this._layersMinZoom = e), n !== this._getZoomSpan() && this.fire("zoomlevelschange")
                            },
                            _panInsideMaxBounds: function () {
                                this.panInsideBounds(this.options.maxBounds)
                            },
                            _checkIfLoaded: function () {
                                if (!this._loaded) throw Error("Set map center and zoom first.")
                            },
                            _initEvents: function (t) {
                                if (r.DomEvent) {
                                    t = t || "on", r.DomEvent[t](this._container, "click", this._onMouseClick, this);
                                    var i, n, o = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                                    for (i = 0, n = o.length; n > i; i++) r.DomEvent[t](this._container, o[i], this._fireMouseEvent, this);
                                    this.options.trackResize && r.DomEvent[t](e, "resize", this._onResize, this)
                                }
                            },
                            _onResize: function () {
                                r.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = r.Util.requestAnimFrame(this.invalidateSize, this, !1, this._container)
                            },
                            _onMouseClick: function (t) {
                                !this._loaded || this.dragging && this.dragging.moved() || (this.fire("preclick"), this._fireMouseEvent(t))
                            },
                            _fireMouseEvent: function (t) {
                                if (this._loaded) {
                                    var e = t.type;
                                    if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                                        "contextmenu" === e && r.DomEvent.preventDefault(t);
                                        var i = this.mouseEventToContainerPoint(t),
                                            n = this.containerPointToLayerPoint(i),
                                            o = this.layerPointToLatLng(n);
                                        this.fire(e, {
                                            latlng: o,
                                            layerPoint: n,
                                            containerPoint: i,
                                            originalEvent: t
                                        })
                                    }
                                }
                            },
                            _onTileLayerLoad: function () {
                                this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                            },
                            whenReady: function (t, e) {
                                return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
                            },
                            _getMapPanePos: function () {
                                return r.DomUtil.getPosition(this._mapPane)
                            },
                            _moved: function () {
                                var t = this._getMapPanePos();
                                return t && !t.equals([0, 0])
                            },
                            _getTopLeftPoint: function () {
                                return this.getPixelOrigin().subtract(this._getMapPanePos())
                            },
                            _getNewTopLeftPoint: function (t, e) {
                                var i = this.getSize()._divideBy(2);
                                return this.project(t, e)._subtract(i)._round()
                            },
                            _latLngToNewLayerPoint: function (t, e, i) {
                                var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                                return this.project(t, e)._subtract(n)
                            },
                            _getCenterLayerPoint: function () {
                                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                            },
                            _getCenterOffset: function (t) {
                                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                            },
                            _limitZoom: function (t) {
                                var e = this.getMinZoom(),
                                    i = this.getMaxZoom();
                                return Math.max(e, Math.min(i, t))
                            }
                        }), r.map = function (t, e) {
                            return new r.Map(t, e)
                        }, r.Projection.Mercator = {
                            MAX_LATITUDE: 85.0840591556,
                            R_MINOR: 6356752.3142,
                            R_MAJOR: 6378137,
                            project: function (t) {
                                var e = r.LatLng.DEG_TO_RAD,
                                    i = this.MAX_LATITUDE,
                                    n = Math.max(Math.min(i, t.lat), -i),
                                    o = this.R_MAJOR,
                                    s = this.R_MINOR,
                                    a = t.lng * e * o,
                                    l = n * e,
                                    h = s / o,
                                    u = Math.sqrt(1 - h * h),
                                    c = u * Math.sin(l);
                                c = Math.pow((1 - c) / (1 + c), .5 * u);
                                var p = Math.tan(.5 * (.5 * Math.PI - l)) / c;
                                return l = -s * Math.log(p), new r.Point(a, l)
                            },
                            unproject: function (t) {
                                for (var e, i = r.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = this.R_MINOR, s = t.x * i / n, a = o / n, l = Math.sqrt(1 - a * a), h = Math.exp(-t.y / o), u = Math.PI / 2 - 2 * Math.atan(h), c = 15, p = 1e-7, d = c, m = .1; Math.abs(m) > p && --d > 0;) e = l * Math.sin(u), m = Math.PI / 2 - 2 * Math.atan(h * Math.pow((1 - e) / (1 + e), .5 * l)) - u, u += m;
                                return new r.LatLng(u * i, s)
                            }
                        }, r.CRS.EPSG3395 = r.extend({}, r.CRS, {
                            code: "EPSG:3395",
                            projection: r.Projection.Mercator,
                            transformation: function () {
                                var t = r.Projection.Mercator,
                                    e = t.R_MAJOR,
                                    i = t.R_MINOR;
                                return new r.Transformation(.5 / (Math.PI * e), .5, -.5 / (Math.PI * i), .5)
                            }()
                        }), r.TileLayer = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                minZoom: 0,
                                maxZoom: 18,
                                tileSize: 256,
                                subdomains: "abc",
                                errorTileUrl: "",
                                attribution: "",
                                zoomOffset: 0,
                                opacity: 1,
                                unloadInvisibleTiles: r.Browser.mobile,
                                updateWhenIdle: r.Browser.mobile
                            },
                            initialize: function (t, e) {
                                e = r.setOptions(this, e), e.detectRetina && r.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = r.latLngBounds(e.bounds)), this._url = t;
                                var i = this.options.subdomains;
                                "string" == typeof i && (this.options.subdomains = i.split(""))
                            },
                            onAdd: function (t) {
                                this._map = t, this._animated = t.options.zoomAnimation && r.Browser.any3d, this._initContainer(), this._createTileProto(), t.on({
                                    viewreset: this._reset,
                                    moveend: this._update
                                }, this), this._animated && t.on({
                                    zoomanim: this._animateZoom,
                                    zoomend: this._endZoomAnim
                                }, this), this.options.updateWhenIdle || (this._limitedUpdate = r.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            onRemove: function (t) {
                                this._container.parentNode.removeChild(this._container), t.off({
                                    viewreset: this._reset,
                                    moveend: this._update
                                }, this), this._animated && t.off({
                                    zoomanim: this._animateZoom,
                                    zoomend: this._endZoomAnim
                                }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                            },
                            bringToFront: function () {
                                var t = this._map._panes.tilePane;
                                return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
                            },
                            bringToBack: function () {
                                var t = this._map._panes.tilePane;
                                return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
                            },
                            getAttribution: function () {
                                return this.options.attribution
                            },
                            getContainer: function () {
                                return this._container
                            },
                            setOpacity: function (t) {
                                return this.options.opacity = t, this._map && this._updateOpacity(), this
                            },
                            setZIndex: function (t) {
                                return this.options.zIndex = t, this._updateZIndex(), this
                            },
                            setUrl: function (t, e) {
                                return this._url = t, e || this.redraw(), this
                            },
                            redraw: function () {
                                return this._map && (this._reset({
                                    hard: !0
                                }), this._update()), this
                            },
                            _updateZIndex: function () {
                                this._container && this.options.zIndex !== o && (this._container.style.zIndex = this.options.zIndex)
                            },
                            _setAutoZIndex: function (t, e) {
                                var i, n, o, s = t.children,
                                    r = -e(1 / 0, -1 / 0);
                                for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (r = e(r, i)));
                                this.options.zIndex = this._container.style.zIndex = (isFinite(r) ? r : 0) + e(1, -1)
                            },
                            _updateOpacity: function () {
                                var t, e = this._tiles;
                                if (r.Browser.ielt9)
                                    for (t in e) r.DomUtil.setOpacity(e[t], this.options.opacity);
                                else r.DomUtil.setOpacity(this._container, this.options.opacity); if (r.Browser.webkit)
                                    for (t in e) e[t].style.webkitTransform += " translate(0,0)"
                            },
                            _initContainer: function () {
                                var t = this._map._panes.tilePane;
                                if (!this._container) {
                                    if (this._container = r.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                                        var e = "leaflet-tile-container leaflet-zoom-animated";
                                        this._bgBuffer = r.DomUtil.create("div", e, this._container), this._tileContainer = r.DomUtil.create("div", e, this._container)
                                    } else this._tileContainer = this._container;
                                    t.appendChild(this._container), 1 > this.options.opacity && this._updateOpacity()
                                }
                            },
                            _reset: function (t) {
                                for (var e in this._tiles) this.fire("tileunload", {
                                    tile: this._tiles[e]
                                });
                                this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
                            },
                            _update: function () {
                                if (this._map) {
                                    var t = this._map.getPixelBounds(),
                                        e = this._map.getZoom(),
                                        i = this.options.tileSize;
                                    if (!(e > this.options.maxZoom || this.options.minZoom > e)) {
                                        var n = r.bounds(t.min.divideBy(i)._floor(), t.max.divideBy(i)._floor());
                                        this._addTilesFromCenterOut(n), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(n)
                                    }
                                }
                            },
                            _addTilesFromCenterOut: function (t) {
                                var e, i, o, s = [],
                                    a = t.getCenter();
                                for (e = t.min.y; t.max.y >= e; e++)
                                    for (i = t.min.x; t.max.x >= i; i++) o = new r.Point(i, e), this._tileShouldBeLoaded(o) && s.push(o);
                                var l = s.length;
                                if (0 !== l) {
                                    s.sort(function (t, e) {
                                        return t.distanceTo(a) - e.distanceTo(a)
                                    });
                                    var h = n.createDocumentFragment();
                                    for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, i = 0; l > i; i++) this._addTile(s[i], h);
                                    this._tileContainer.appendChild(h)
                                }
                            },
                            _tileShouldBeLoaded: function (t) {
                                if (t.x + ":" + t.y in this._tiles) return !1;
                                var e = this.options;
                                if (!e.continuousWorld && e.noWrap) {
                                    var i = this._getWrapTileNum();
                                    if (0 > t.x || t.x >= i || 0 > t.y || t.y >= i) return !1
                                }
                                if (e.bounds) {
                                    var n = e.tileSize,
                                        o = t.multiplyBy(n),
                                        s = o.add([n, n]),
                                        r = this._map.unproject(o),
                                        a = this._map.unproject(s);
                                    if (e.continuousWorld || e.noWrap || (r = r.wrap(), a = a.wrap()), !e.bounds.intersects([r, a])) return !1
                                }
                                return !0
                            },
                            _removeOtherTiles: function (t) {
                                var e, i, n, o;
                                for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (t.min.x > i || i > t.max.x || t.min.y > n || n > t.max.y) && this._removeTile(o)
                            },
                            _removeTile: function (t) {
                                var e = this._tiles[t];
                                this.fire("tileunload", {
                                    tile: e,
                                    url: e.src
                                }), this.options.reuseTiles ? (r.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), r.Browser.android || (e.onload = null, e.src = r.Util.emptyImageUrl), delete this._tiles[t]
                            },
                            _addTile: function (t, e) {
                                var i = this._getTilePos(t),
                                    n = this._getTile();
                                r.DomUtil.setPosition(n, i, r.Browser.chrome || r.Browser.android23), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
                            },
                            _getZoomForUrl: function () {
                                var t = this.options,
                                    e = this._map.getZoom();
                                return t.zoomReverse && (e = t.maxZoom - e), e + t.zoomOffset
                            },
                            _getTilePos: function (t) {
                                var e = this._map.getPixelOrigin(),
                                    i = this.options.tileSize;
                                return t.multiplyBy(i).subtract(e)
                            },
                            getTileUrl: function (t) {
                                return r.Util.template(this._url, r.extend({
                                    s: this._getSubdomain(t),
                                    z: t.z,
                                    x: t.x,
                                    y: t.y
                                }, this.options))
                            },
                            _getWrapTileNum: function () {
                                return Math.pow(2, this._getZoomForUrl())
                            },
                            _adjustTilePoint: function (t) {
                                var e = this._getWrapTileNum();
                                this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e + e) % e), this.options.tms && (t.y = e - t.y - 1), t.z = this._getZoomForUrl()
                            },
                            _getSubdomain: function (t) {
                                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                                return this.options.subdomains[e]
                            },
                            _createTileProto: function () {
                                var t = this._tileImg = r.DomUtil.create("img", "leaflet-tile");
                                t.style.width = t.style.height = this.options.tileSize + "px", t.galleryimg = "no"
                            },
                            _getTile: function () {
                                if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                                    var t = this._unusedTiles.pop();
                                    return this._resetTile(t), t
                                }
                                return this._createTile()
                            },
                            _resetTile: function () {},
                            _createTile: function () {
                                var t = this._tileImg.cloneNode(!1);
                                return t.onselectstart = t.onmousemove = r.Util.falseFn, r.Browser.ielt9 && this.options.opacity !== o && r.DomUtil.setOpacity(t, this.options.opacity), t
                            },
                            _loadTile: function (t, e) {
                                t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e)
                            },
                            _tileLoaded: function () {
                                this._tilesToLoad--, this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(r.bind(this._clearBgBuffer, this), 500)))
                            },
                            _tileOnLoad: function () {
                                var t = this._layer;
                                this.src !== r.Util.emptyImageUrl && (r.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                                    tile: this,
                                    url: this.src
                                })), t._tileLoaded()
                            },
                            _tileOnError: function () {
                                var t = this._layer;
                                t.fire("tileerror", {
                                    tile: this,
                                    url: this.src
                                });
                                var e = t.options.errorTileUrl;
                                e && (this.src = e), t._tileLoaded()
                            }
                        }), r.tileLayer = function (t, e) {
                            return new r.TileLayer(t, e)
                        }, r.TileLayer.WMS = r.TileLayer.extend({
                            defaultWmsParams: {
                                service: "WMS",
                                request: "GetMap",
                                version: "1.1.1",
                                layers: "",
                                styles: "",
                                format: "image/jpeg",
                                transparent: !1
                            },
                            initialize: function (t, e) {
                                this._url = t;
                                var i = r.extend({}, this.defaultWmsParams),
                                    n = e.tileSize || this.options.tileSize;
                                i.width = i.height = e.detectRetina && r.Browser.retina ? 2 * n : n;
                                for (var o in e) this.options.hasOwnProperty(o) || (i[o] = e[o]);
                                this.wmsParams = i, r.setOptions(this, e)
                            },
                            onAdd: function (t) {
                                var e = parseFloat(this.wmsParams.version) >= 1.3 ? "crs" : "srs";
                                this.wmsParams[e] = t.options.crs.code, r.TileLayer.prototype.onAdd.call(this, t)
                            },
                            getTileUrl: function (t, e) {
                                var i = this._map,
                                    n = i.options.crs,
                                    o = this.options.tileSize,
                                    s = t.multiplyBy(o),
                                    a = s.add([o, o]),
                                    l = n.project(i.unproject(s, e)),
                                    h = n.project(i.unproject(a, e)),
                                    u = [l.x, h.y, h.x, l.y].join(","),
                                    c = r.Util.template(this._url, {
                                        s: this._getSubdomain(t)
                                    });
                                return c + r.Util.getParamString(this.wmsParams, c) + "&bbox=" + u
                            },
                            setParams: function (t, e) {
                                return r.extend(this.wmsParams, t), e || this.redraw(), this
                            }
                        }), r.tileLayer.wms = function (t, e) {
                            return new r.TileLayer.WMS(t, e)
                        }, r.TileLayer.Canvas = r.TileLayer.extend({
                            options: {
                                async: !1
                            },
                            initialize: function (t) {
                                r.setOptions(this, t)
                            },
                            redraw: function () {
                                for (var t in this._tiles) this._redrawTile(this._tiles[t]);
                                return this
                            },
                            _redrawTile: function (t) {
                                this.drawTile(t, t._tilePoint, this._map._zoom)
                            },
                            _createTileProto: function () {
                                var t = this._canvasProto = r.DomUtil.create("canvas", "leaflet-tile");
                                t.width = t.height = this.options.tileSize
                            },
                            _createTile: function () {
                                var t = this._canvasProto.cloneNode(!1);
                                return t.onselectstart = t.onmousemove = r.Util.falseFn, t
                            },
                            _loadTile: function (t, e) {
                                t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
                            },
                            drawTile: function () {},
                            tileDrawn: function (t) {
                                this._tileOnLoad.call(t)
                            }
                        }), r.tileLayer.canvas = function (t) {
                            return new r.TileLayer.Canvas(t)
                        }, r.ImageOverlay = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                opacity: 1
                            },
                            initialize: function (t, e, i) {
                                this._url = t, this._bounds = r.latLngBounds(e), r.setOptions(this, i)
                            },
                            onAdd: function (t) {
                                this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && r.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
                            },
                            onRemove: function (t) {
                                t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            setOpacity: function (t) {
                                return this.options.opacity = t, this._updateOpacity(), this
                            },
                            bringToFront: function () {
                                return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                            },
                            bringToBack: function () {
                                var t = this._map._panes.overlayPane;
                                return this._image && t.insertBefore(this._image, t.firstChild), this
                            },
                            _initImage: function () {
                                this._image = r.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && r.Browser.any3d ? r.DomUtil.addClass(this._image, "leaflet-zoom-animated") : r.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), r.extend(this._image, {
                                    galleryimg: "no",
                                    onselectstart: r.Util.falseFn,
                                    onmousemove: r.Util.falseFn,
                                    onload: r.bind(this._onImageLoad, this),
                                    src: this._url
                                })
                            },
                            _animateZoom: function (t) {
                                var e = this._map,
                                    i = this._image,
                                    n = e.getZoomScale(t.zoom),
                                    o = this._bounds.getNorthWest(),
                                    s = this._bounds.getSouthEast(),
                                    a = e._latLngToNewLayerPoint(o, t.zoom, t.center),
                                    l = e._latLngToNewLayerPoint(s, t.zoom, t.center)._subtract(a),
                                    h = a._add(l._multiplyBy(.5 * (1 - 1 / n)));
                                i.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(h) + " scale(" + n + ") "
                            },
                            _reset: function () {
                                var t = this._image,
                                    e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                                    i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                                r.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
                            },
                            _onImageLoad: function () {
                                this.fire("load")
                            },
                            _updateOpacity: function () {
                                r.DomUtil.setOpacity(this._image, this.options.opacity)
                            }
                        }), r.imageOverlay = function (t, e, i) {
                            return new r.ImageOverlay(t, e, i)
                        }, r.Icon = r.Class.extend({
                            options: {
                                className: ""
                            },
                            initialize: function (t) {
                                r.setOptions(this, t)
                            },
                            createIcon: function () {
                                return this._createIcon("icon")
                            },
                            createShadow: function () {
                                return this._createIcon("shadow")
                            },
                            _createIcon: function (t) {
                                var e = this._getIconUrl(t);
                                if (!e) {
                                    if ("icon" === t) throw Error("iconUrl not set in Icon options (see the docs).");
                                    return null
                                }
                                var i = this._createImg(e);
                                return this._setIconStyles(i, t), i
                            },
                            _setIconStyles: function (t, e) {
                                var i, n = this.options,
                                    o = r.point(n[e + "Size"]);
                                i = "shadow" === e ? r.point(n.shadowAnchor || n.iconAnchor) : r.point(n.iconAnchor), !i && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                            },
                            _createImg: function (t) {
                                var e;
                                return r.Browser.ie6 ? (e = n.createElement("div"), e.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + t + '")') : (e = n.createElement("img"), e.src = t), e
                            },
                            _getIconUrl: function (t) {
                                return r.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
                            }
                        }), r.icon = function (t) {
                            return new r.Icon(t)
                        }, r.Icon.Default = r.Icon.extend({
                            options: {
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            },
                            _getIconUrl: function (t) {
                                var e = t + "Url";
                                if (this.options[e]) return this.options[e];
                                r.Browser.retina && "icon" === t && (t += "-2x");
                                var i = r.Icon.Default.imagePath;
                                if (!i) throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                                return i + "/marker-" + t + ".png"
                            }
                        }), r.Icon.Default.imagePath = function () {
                            var t, e, i, o, s, r = n.getElementsByTagName("script"),
                                a = /\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                            for (t = 0, e = r.length; e > t; t++)
                                if (i = r[t].src, o = i.match(a)) return s = i.split(a)[0], (s ? s + "/" : "") + "images"
                        }(), r.Marker = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                icon: new r.Icon.Default,
                                title: "",
                                clickable: !0,
                                draggable: !1,
                                zIndexOffset: 0,
                                opacity: 1,
                                riseOnHover: !1,
                                riseOffset: 250
                            },
                            initialize: function (t, e) {
                                r.setOptions(this, e), this._latlng = r.latLng(t)
                            },
                            onAdd: function (t) {
                                this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            onRemove: function (t) {
                                this.dragging && this.dragging.disable(), this._removeIcon(), this.fire("remove"), t.off({
                                    viewreset: this.update,
                                    zoomanim: this._animateZoom
                                }, this), this._map = null
                            },
                            getLatLng: function () {
                                return this._latlng
                            },
                            setLatLng: function (t) {
                                return this._latlng = r.latLng(t), this.update(), this.fire("move", {
                                    latlng: this._latlng
                                })
                            },
                            setZIndexOffset: function (t) {
                                return this.options.zIndexOffset = t, this.update(), this
                            },
                            setIcon: function (t) {
                                return this._map && this._removeIcon(), this.options.icon = t, this._map && (this._initIcon(), this.update()), this
                            },
                            update: function () {
                                if (this._icon) {
                                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                                    this._setPos(t)
                                }
                                return this
                            },
                            _initIcon: function () {
                                var t = this.options,
                                    e = this._map,
                                    i = e.options.zoomAnimation && e.options.markerZoomAnimation,
                                    n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                                    o = !1;
                                this._icon || (this._icon = t.icon.createIcon(), t.title && (this._icon.title = t.title), this._initInteraction(), o = 1 > this.options.opacity, r.DomUtil.addClass(this._icon, n), t.riseOnHover && r.DomEvent.on(this._icon, "mouseover", this._bringToFront, this).on(this._icon, "mouseout", this._resetZIndex, this)), this._shadow || (this._shadow = t.icon.createShadow(), this._shadow && (r.DomUtil.addClass(this._shadow, n), o = 1 > this.options.opacity)), o && this._updateOpacity();
                                var s = this._map._panes;
                                s.markerPane.appendChild(this._icon), this._shadow && s.shadowPane.appendChild(this._shadow)
                            },
                            _removeIcon: function () {
                                var t = this._map._panes;
                                this.options.riseOnHover && r.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), t.markerPane.removeChild(this._icon), this._shadow && t.shadowPane.removeChild(this._shadow), this._icon = this._shadow = null
                            },
                            _setPos: function (t) {
                                r.DomUtil.setPosition(this._icon, t), this._shadow && r.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                            },
                            _updateZIndex: function (t) {
                                this._icon.style.zIndex = this._zIndex + t
                            },
                            _animateZoom: function (t) {
                                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                                this._setPos(e)
                            },
                            _initInteraction: function () {
                                if (this.options.clickable) {
                                    var t = this._icon,
                                        e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                                    r.DomUtil.addClass(t, "leaflet-clickable"), r.DomEvent.on(t, "click", this._onMouseClick, this);
                                    for (var i = 0; e.length > i; i++) r.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                                    r.Handler.MarkerDrag && (this.dragging = new r.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                                }
                            },
                            _onMouseClick: function (t) {
                                var e = this.dragging && this.dragging.moved();
                                (this.hasEventListeners(t.type) || e) && r.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                                    originalEvent: t,
                                    latlng: this._latlng
                                })
                            },
                            _fireMouseEvent: function (t) {
                                this.fire(t.type, {
                                    originalEvent: t,
                                    latlng: this._latlng
                                }), "contextmenu" === t.type && this.hasEventListeners(t.type) && r.DomEvent.preventDefault(t), "mousedown" !== t.type && r.DomEvent.stopPropagation(t)
                            },
                            setOpacity: function (t) {
                                this.options.opacity = t, this._map && this._updateOpacity()
                            },
                            _updateOpacity: function () {
                                r.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && r.DomUtil.setOpacity(this._shadow, this.options.opacity)
                            },
                            _bringToFront: function () {
                                this._updateZIndex(this.options.riseOffset)
                            },
                            _resetZIndex: function () {
                                this._updateZIndex(0)
                            }
                        }), r.marker = function (t, e) {
                            return new r.Marker(t, e)
                        }, r.DivIcon = r.Icon.extend({
                            options: {
                                iconSize: [12, 12],
                                className: "leaflet-div-icon"
                            },
                            createIcon: function () {
                                var t = n.createElement("div"),
                                    e = this.options;
                                return e.html && (t.innerHTML = e.html), e.bgPos && (t.style.backgroundPosition = -e.bgPos.x + "px " + -e.bgPos.y + "px"), this._setIconStyles(t, "icon"), t
                            },
                            createShadow: function () {
                                return null
                            }
                        }), r.divIcon = function (t) {
                            return new r.DivIcon(t)
                        }, r.Map.mergeOptions({
                            closePopupOnClick: !0
                        }), r.Popup = r.Class.extend({
                            includes: r.Mixin.Events,
                            options: {
                                minWidth: 50,
                                maxWidth: 300,
                                maxHeight: null,
                                autoPan: !0,
                                closeButton: !0,
                                offset: [0, 6],
                                autoPanPadding: [5, 5],
                                keepInView: !1,
                                className: "",
                                zoomAnimation: !0
                            },
                            initialize: function (t, e) {
                                r.setOptions(this, t), this._source = e, this._animated = r.Browser.any3d && this.options.zoomAnimation
                            },
                            onAdd: function (t) {
                                this._map = t, this._container || this._initLayout(), this._updateContent();
                                var e = t.options.fadeAnimation;
                                e && r.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this._update(), e && r.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                                    popup: this
                                }), this._source && this._source.fire("popupopen", {
                                    popup: this
                                })
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            openOn: function (t) {
                                return t.openPopup(this), this
                            },
                            onRemove: function (t) {
                                t._panes.popupPane.removeChild(this._container), r.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && r.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                                    popup: this
                                }), this._source && this._source.fire("popupclose", {
                                    popup: this
                                })
                            },
                            setLatLng: function (t) {
                                return this._latlng = r.latLng(t), this._update(), this
                            },
                            setContent: function (t) {
                                return this._content = t, this._update(), this
                            },
                            _getEvents: function () {
                                var t = {
                                    viewreset: this._updatePosition
                                };
                                return this._animated && (t.zoomanim = this._zoomAnimation), this._map.options.closePopupOnClick && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                            },
                            _close: function () {
                                this._map && this._map.removeLayer(this)
                            },
                            _initLayout: function () {
                                var t, e = "leaflet-popup",
                                    i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                                    n = this._container = r.DomUtil.create("div", i);
                                this.options.closeButton && (t = this._closeButton = r.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", r.DomEvent.disableClickPropagation(t), r.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                                var o = this._wrapper = r.DomUtil.create("div", e + "-content-wrapper", n);
                                r.DomEvent.disableClickPropagation(o), this._contentNode = r.DomUtil.create("div", e + "-content", o), r.DomEvent.on(this._contentNode, "mousewheel", r.DomEvent.stopPropagation), this._tipContainer = r.DomUtil.create("div", e + "-tip-container", n), this._tip = r.DomUtil.create("div", e + "-tip", this._tipContainer)
                            },
                            _update: function () {
                                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                            },
                            _updateContent: function () {
                                if (this._content) {
                                    if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                                    else {
                                        for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                        this._contentNode.appendChild(this._content)
                                    }
                                    this.fire("contentupdate")
                                }
                            },
                            _updateLayout: function () {
                                var t = this._contentNode,
                                    e = t.style;
                                e.width = "", e.whiteSpace = "nowrap";
                                var i = t.offsetWidth;
                                i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                                var n = t.offsetHeight,
                                    o = this.options.maxHeight,
                                    s = "leaflet-popup-scrolled";
                                o && n > o ? (e.height = o + "px", r.DomUtil.addClass(t, s)) : r.DomUtil.removeClass(t, s), this._containerWidth = this._container.offsetWidth
                            },
                            _updatePosition: function () {
                                if (this._map) {
                                    var t = this._map.latLngToLayerPoint(this._latlng),
                                        e = this._animated,
                                        i = r.point(this.options.offset);
                                    e && r.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                                }
                            },
                            _zoomAnimation: function (t) {
                                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                                r.DomUtil.setPosition(this._container, e)
                            },
                            _adjustPan: function () {
                                if (this.options.autoPan) {
                                    var t = this._map,
                                        e = this._container.offsetHeight,
                                        i = this._containerWidth,
                                        n = new r.Point(this._containerLeft, -e - this._containerBottom);
                                    this._animated && n._add(r.DomUtil.getPosition(this._container));
                                    var o = t.layerPointToContainerPoint(n),
                                        s = r.point(this.options.autoPanPadding),
                                        a = t.getSize(),
                                        l = 0,
                                        h = 0;
                                    o.x + i > a.x && (l = o.x + i - a.x + s.x), 0 > o.x - l && (l = o.x - s.x), o.y + e > a.y && (h = o.y + e - a.y + s.y), 0 > o.y - h && (h = o.y - s.y), (l || h) && t.fire("autopanstart").panBy([l, h])
                                }
                            },
                            _onCloseButtonClick: function (t) {
                                this._close(), r.DomEvent.stop(t)
                            }
                        }), r.popup = function (t, e) {
                            return new r.Popup(t, e)
                        }, r.Map.include({
                            openPopup: function (t, e, i) {
                                if (this.closePopup(), !(t instanceof r.Popup)) {
                                    var n = t;
                                    t = new r.Popup(i).setLatLng(e).setContent(n)
                                }
                                return this._popup = t, this.addLayer(t)
                            },
                            closePopup: function () {
                                return this._popup && (this.removeLayer(this._popup), this._popup = null), this
                            }
                        }), r.Marker.include({
                            openPopup: function () {
                                return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                            },
                            closePopup: function () {
                                return this._popup && this._popup._close(), this
                            },
                            bindPopup: function (t, e) {
                                var i = r.point(this.options.icon.options.popupAnchor || [0, 0]);
                                return i = i.add(r.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = r.extend({
                                    offset: i
                                }, e), this._popup || this.on("click", this.openPopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), t instanceof r.Popup ? (r.setOptions(t, e), this._popup = t) : this._popup = new r.Popup(e, this).setContent(t), this
                            },
                            setPopupContent: function (t) {
                                return this._popup && this._popup.setContent(t), this
                            },
                            unbindPopup: function () {
                                return this._popup && (this._popup = null, this.off("click", this.openPopup).off("remove", this.closePopup).off("move", this._movePopup)), this
                            },
                            _movePopup: function (t) {
                                this._popup.setLatLng(t.latlng)
                            }
                        }), r.LayerGroup = r.Class.extend({
                            initialize: function (t) {
                                this._layers = {};
                                var e, i;
                                if (t)
                                    for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                            },
                            addLayer: function (t) {
                                var e = this.getLayerId(t);
                                return this._layers[e] = t, this._map && this._map.addLayer(t), this
                            },
                            removeLayer: function (t) {
                                var e = this.getLayerId(t);
                                return this._map && this._layers[e] && this._map.removeLayer(t), delete this._layers[e], this
                            },
                            hasLayer: function (t) {
                                return t ? this.getLayerId(t) in this._layers : !1
                            },
                            clearLayers: function () {
                                return this.eachLayer(this.removeLayer, this), this
                            },
                            invoke: function (t) {
                                var e, i, n = Array.prototype.slice.call(arguments, 1);
                                for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                                return this
                            },
                            onAdd: function (t) {
                                this._map = t, this.eachLayer(t.addLayer, t)
                            },
                            onRemove: function (t) {
                                this.eachLayer(t.removeLayer, t), this._map = null
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            eachLayer: function (t, e) {
                                for (var i in this._layers) t.call(e, this._layers[i]);
                                return this
                            },
                            getLayers: function () {
                                var t = [];
                                for (var e in this._layers) t.push(this._layers[e]);
                                return t
                            },
                            setZIndex: function (t) {
                                return this.invoke("setZIndex", t)
                            },
                            getLayerId: function (t) {
                                return r.stamp(t)
                            }
                        }), r.layerGroup = function (t) {
                            return new r.LayerGroup(t)
                        }, r.FeatureGroup = r.LayerGroup.extend({
                            includes: r.Mixin.Events,
                            statics: {
                                EVENTS: "click dblclick mouseover mouseout mousemove contextmenu"
                            },
                            addLayer: function (t) {
                                return this.hasLayer(t) ? this : (t.on(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                                    layer: t
                                }))
                            },
                            removeLayer: function (t) {
                                return t.off(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                                    layer: t
                                })
                            },
                            bindPopup: function (t, e) {
                                return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
                            },
                            setStyle: function (t) {
                                return this.invoke("setStyle", t)
                            },
                            bringToFront: function () {
                                return this.invoke("bringToFront")
                            },
                            bringToBack: function () {
                                return this.invoke("bringToBack")
                            },
                            getBounds: function () {
                                var t = new r.LatLngBounds;
                                return this.eachLayer(function (e) {
                                    t.extend(e instanceof r.Marker ? e.getLatLng() : e.getBounds())
                                }), t
                            },
                            _propagateEvent: function (t) {
                                t.layer || (t.layer = t.target), t.target = this, this.fire(t.type, t)
                            }
                        }), r.featureGroup = function (t) {
                            return new r.FeatureGroup(t)
                        }, r.Path = r.Class.extend({
                            includes: [r.Mixin.Events],
                            statics: {
                                CLIP_PADDING: r.Browser.mobile ? Math.max(0, Math.min(.5, (1280 / Math.max(e.innerWidth, e.innerHeight) - 1) / 2)) : .5
                            },
                            options: {
                                stroke: !0,
                                color: "#0033ff",
                                dashArray: null,
                                weight: 5,
                                opacity: .5,
                                fill: !1,
                                fillColor: null,
                                fillOpacity: .2,
                                clickable: !0
                            },
                            initialize: function (t) {
                                r.setOptions(this, t)
                            },
                            onAdd: function (t) {
                                this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                                    viewreset: this.projectLatlngs,
                                    moveend: this._updatePath
                                }, this)
                            },
                            addTo: function (t) {
                                return t.addLayer(this), this
                            },
                            onRemove: function (t) {
                                t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, r.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                                    viewreset: this.projectLatlngs,
                                    moveend: this._updatePath
                                }, this)
                            },
                            projectLatlngs: function () {},
                            setStyle: function (t) {
                                return r.setOptions(this, t), this._container && this._updateStyle(), this
                            },
                            redraw: function () {
                                return this._map && (this.projectLatlngs(), this._updatePath()), this
                            }
                        }), r.Map.include({
                            _updatePathViewport: function () {
                                var t = r.Path.CLIP_PADDING,
                                    e = this.getSize(),
                                    i = r.DomUtil.getPosition(this._mapPane),
                                    n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                                    o = n.add(e.multiplyBy(1 + 2 * t)._round());
                                this._pathViewport = new r.Bounds(n, o)
                            }
                        }), r.Path.SVG_NS = "http://www.w3.org/2000/svg", r.Browser.svg = !(!n.createElementNS || !n.createElementNS(r.Path.SVG_NS, "svg").createSVGRect), r.Path = r.Path.extend({
                            statics: {
                                SVG: r.Browser.svg
                            },
                            bringToFront: function () {
                                var t = this._map._pathRoot,
                                    e = this._container;
                                return e && t.lastChild !== e && t.appendChild(e), this
                            },
                            bringToBack: function () {
                                var t = this._map._pathRoot,
                                    e = this._container,
                                    i = t.firstChild;
                                return e && i !== e && t.insertBefore(e, i), this
                            },
                            getPathString: function () {},
                            _createElement: function (t) {
                                return n.createElementNS(r.Path.SVG_NS, t)
                            },
                            _initElements: function () {
                                this._map._initPathRoot(), this._initPath(), this._initStyle()
                            },
                            _initPath: function () {
                                this._container = this._createElement("g"), this._path = this._createElement("path"), this._container.appendChild(this._path)
                            },
                            _initStyle: function () {
                                this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                            },
                            _updateStyle: function () {
                                this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray")) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                            },
                            _updatePath: function () {
                                var t = this.getPathString();
                                t || (t = "M0 0"), this._path.setAttribute("d", t)
                            },
                            _initEvents: function () {
                                if (this.options.clickable) {
                                    (r.Browser.svg || !r.Browser.vml) && this._path.setAttribute("class", "leaflet-clickable"), r.DomEvent.on(this._container, "click", this._onMouseClick, this);
                                    for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; t.length > e; e++) r.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                                }
                            },
                            _onMouseClick: function (t) {
                                this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
                            },
                            _fireMouseEvent: function (t) {
                                if (this.hasEventListeners(t.type)) {
                                    var e = this._map,
                                        i = e.mouseEventToContainerPoint(t),
                                        n = e.containerPointToLayerPoint(i),
                                        o = e.layerPointToLatLng(n);
                                    this.fire(t.type, {
                                        latlng: o,
                                        layerPoint: n,
                                        containerPoint: i,
                                        originalEvent: t
                                    }), "contextmenu" === t.type && r.DomEvent.preventDefault(t), "mousemove" !== t.type && r.DomEvent.stopPropagation(t)
                                }
                            }
                        }), r.Map.include({
                            _initPathRoot: function () {
                                this._pathRoot || (this._pathRoot = r.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && r.Browser.any3d ? (this._pathRoot.setAttribute("class", " leaflet-zoom-animated"), this.on({
                                    zoomanim: this._animatePathZoom,
                                    zoomend: this._endPathZoom
                                })) : this._pathRoot.setAttribute("class", " leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                            },
                            _animatePathZoom: function (t) {
                                var e = this.getZoomScale(t.zoom),
                                    i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                                this._pathRoot.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
                            },
                            _endPathZoom: function () {
                                this._pathZooming = !1
                            },
                            _updateSvgViewport: function () {
                                if (!this._pathZooming) {
                                    this._updatePathViewport();
                                    var t = this._pathViewport,
                                        e = t.min,
                                        i = t.max,
                                        n = i.x - e.x,
                                        o = i.y - e.y,
                                        s = this._pathRoot,
                                        a = this._panes.overlayPane;
                                    r.Browser.mobileWebkit && a.removeChild(s), r.DomUtil.setPosition(s, e), s.setAttribute("width", n), s.setAttribute("height", o), s.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), r.Browser.mobileWebkit && a.appendChild(s)
                                }
                            }
                        }), r.Path.include({
                            bindPopup: function (t, e) {
                                return t instanceof r.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new r.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                            },
                            unbindPopup: function () {
                                return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                            },
                            openPopup: function (t) {
                                return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                                    latlng: t
                                })), this
                            },
                            closePopup: function () {
                                return this._popup && this._popup._close(), this
                            },
                            _openPopup: function (t) {
                                this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
                            }
                        }), r.Browser.vml = !r.Browser.svg && function () {
                            try {
                                var t = n.createElement("div");
                                t.innerHTML = '<v:shape adj="1"/>';
                                var e = t.firstChild;
                                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                            } catch (i) {
                                return !1
                            }
                        }(), r.Path = r.Browser.svg || !r.Browser.vml ? r.Path : r.Path.extend({
                            statics: {
                                VML: !0,
                                CLIP_PADDING: .02
                            },
                            _createElement: function () {
                                try {
                                    return n.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                    function (t) {
                                        return n.createElement("<lvml:" + t + ' class="lvml">')
                                    }
                                } catch (t) {
                                    return function (t) {
                                        return n.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                                    }
                                }
                            }(),
                            _initPath: function () {
                                var t = this._container = this._createElement("shape");
                                r.DomUtil.addClass(t, "leaflet-vml-shape"), this.options.clickable && r.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
                            },
                            _initStyle: function () {
                                this._updateStyle()
                            },
                            _updateStyle: function () {
                                var t = this._stroke,
                                    e = this._fill,
                                    i = this.options,
                                    n = this._container;
                                n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? i.dashArray instanceof Array ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "") : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
                            },
                            _updatePath: function () {
                                var t = this._container.style;
                                t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
                            }
                        }), r.Map.include(r.Browser.svg || !r.Browser.vml ? {} : {
                            _initPathRoot: function () {
                                if (!this._pathRoot) {
                                    var t = this._pathRoot = n.createElement("div");
                                    t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                                }
                            }
                        }), r.Browser.canvas = function () {
                            return !!n.createElement("canvas").getContext
                        }(), r.Path = r.Path.SVG && !e.L_PREFER_CANVAS || !r.Browser.canvas ? r.Path : r.Path.extend({
                            statics: {
                                CANVAS: !0,
                                SVG: !1
                            },
                            redraw: function () {
                                return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                            },
                            setStyle: function (t) {
                                return r.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
                            },
                            onRemove: function (t) {
                                t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && this._map.off("click", this._onClick, this), this._requestUpdate(), this._map = null
                            },
                            _requestUpdate: function () {
                                this._map && !r.Path._updateRequest && (r.Path._updateRequest = r.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                            },
                            _fireMapMoveEnd: function () {
                                r.Path._updateRequest = null, this.fire("moveend")
                            },
                            _initElements: function () {
                                this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                            },
                            _updateStyle: function () {
                                var t = this.options;
                                t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
                            },
                            _drawPath: function () {
                                var t, e, i, n, o, s;
                                for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                                    for (e = 0, n = this._parts[t].length; n > e; e++) o = this._parts[t][e], s = (0 === e ? "move" : "line") + "To", this._ctx[s](o.x, o.y);
                                    this instanceof r.Polygon && this._ctx.closePath()
                                }
                            },
                            _checkIfEmpty: function () {
                                return !this._parts.length
                            },
                            _updatePath: function () {
                                if (!this._checkIfEmpty()) {
                                    var t = this._ctx,
                                        e = this.options;
                                    this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                                }
                            },
                            _initEvents: function () {
                                this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
                            },
                            _onClick: function (t) {
                                this._containsPoint(t.layerPoint) && this.fire("click", t)
                            },
                            _onMouseMove: function (t) {
                                this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
                            }
                        }), r.Map.include(r.Path.SVG && !e.L_PREFER_CANVAS || !r.Browser.canvas ? {} : {
                            _initPathRoot: function () {
                                var t, e = this._pathRoot;
                                e || (e = this._pathRoot = n.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                            },
                            _updateCanvasViewport: function () {
                                if (!this._pathZooming) {
                                    this._updatePathViewport();
                                    var t = this._pathViewport,
                                        e = t.min,
                                        i = t.max.subtract(e),
                                        n = this._pathRoot;
                                    r.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                                }
                            }
                        }), r.LineUtil = {
                            simplify: function (t, e) {
                                if (!e || !t.length) return t.slice();
                                var i = e * e;
                                return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
                            },
                            pointToSegmentDistance: function (t, e, i) {
                                return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                            },
                            closestPointOnSegment: function (t, e, i) {
                                return this._sqClosestPointOnSegment(t, e, i)
                            },
                            _simplifyDP: function (t, e) {
                                var i = t.length,
                                    n = typeof Uint8Array != o + "" ? Uint8Array : Array,
                                    s = new n(i);
                                s[0] = s[i - 1] = 1, this._simplifyDPStep(t, s, e, 0, i - 1);
                                var r, a = [];
                                for (r = 0; i > r; r++) s[r] && a.push(t[r]);
                                return a
                            },
                            _simplifyDPStep: function (t, e, i, n, o) {
                                var s, r, a, l = 0;
                                for (r = n + 1; o - 1 >= r; r++) a = this._sqClosestPointOnSegment(t[r], t[n], t[o], !0), a > l && (s = r, l = a);
                                l > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
                            },
                            _reducePoints: function (t, e) {
                                for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                                return s - 1 > o && i.push(t[s - 1]), i
                            },
                            clipSegment: function (t, e, i, n) {
                                var o, s, r, a = n ? this._lastCode : this._getBitCode(t, i),
                                    l = this._getBitCode(e, i);
                                for (this._lastCode = l;;) {
                                    if (!(a | l)) return [t, e];
                                    if (a & l) return !1;
                                    o = a || l, s = this._getEdgeIntersection(t, e, o, i), r = this._getBitCode(s, i), o === a ? (t = s, a = r) : (e = s, l = r)
                                }
                            },
                            _getEdgeIntersection: function (t, e, i, n) {
                                var s = e.x - t.x,
                                    a = e.y - t.y,
                                    l = n.min,
                                    h = n.max;
                                return 8 & i ? new r.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new r.Point(t.x + s * (l.y - t.y) / a, l.y) : 2 & i ? new r.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new r.Point(l.x, t.y + a * (l.x - t.x) / s) : o
                            },
                            _getBitCode: function (t, e) {
                                var i = 0;
                                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                            },
                            _sqDist: function (t, e) {
                                var i = e.x - t.x,
                                    n = e.y - t.y;
                                return i * i + n * n
                            },
                            _sqClosestPointOnSegment: function (t, e, i, n) {
                                var o, s = e.x,
                                    a = e.y,
                                    l = i.x - s,
                                    h = i.y - a,
                                    u = l * l + h * h;
                                return u > 0 && (o = ((t.x - s) * l + (t.y - a) * h) / u, o > 1 ? (s = i.x, a = i.y) : o > 0 && (s += l * o, a += h * o)), l = t.x - s, h = t.y - a, n ? l * l + h * h : new r.Point(s, a)
                            }
                        }, r.Polyline = r.Path.extend({
                            initialize: function (t, e) {
                                r.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
                            },
                            options: {
                                smoothFactor: 1,
                                noClip: !1
                            },
                            projectLatlngs: function () {
                                this._originalPoints = [];
                                for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
                            },
                            getPathString: function () {
                                for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
                                return i
                            },
                            getLatLngs: function () {
                                return this._latlngs
                            },
                            setLatLngs: function (t) {
                                return this._latlngs = this._convertLatLngs(t), this.redraw()
                            },
                            addLatLng: function (t) {
                                return this._latlngs.push(r.latLng(t)), this.redraw()
                            },
                            spliceLatLngs: function () {
                                var t = [].splice.apply(this._latlngs, arguments);
                                return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
                            },
                            closestLayerPoint: function (t) {
                                for (var e, i, n = 1 / 0, o = this._parts, s = null, a = 0, l = o.length; l > a; a++)
                                    for (var h = o[a], u = 1, c = h.length; c > u; u++) {
                                        e = h[u - 1], i = h[u];
                                        var p = r.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                                        n > p && (n = p, s = r.LineUtil._sqClosestPointOnSegment(t, e, i))
                                    }
                                return s && (s.distance = Math.sqrt(n)), s
                            },
                            getBounds: function () {
                                return new r.LatLngBounds(this.getLatLngs())
                            },
                            _convertLatLngs: function (t, e) {
                                var i, n, o = e ? t : [];
                                for (i = 0, n = t.length; n > i; i++) {
                                    if (r.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                                    o[i] = r.latLng(t[i])
                                }
                                return o
                            },
                            _initEvents: function () {
                                r.Path.prototype._initEvents.call(this)
                            },
                            _getPathPartStr: function (t) {
                                for (var e, i = r.Path.VML, n = 0, o = t.length, s = ""; o > n; n++) e = t[n], i && e._round(), s += (n ? "L" : "M") + e.x + " " + e.y;
                                return s
                            },
                            _clipPoints: function () {
                                var t, e, i, n = this._originalPoints,
                                    s = n.length;
                                if (this.options.noClip) return this._parts = [n], o;
                                this._parts = [];
                                var a = this._parts,
                                    l = this._map._pathViewport,
                                    h = r.LineUtil;
                                for (t = 0, e = 0; s - 1 > t; t++) i = h.clipSegment(n[t], n[t + 1], l, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
                            },
                            _simplifyPoints: function () {
                                for (var t = this._parts, e = r.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
                            },
                            _updatePath: function () {
                                this._map && (this._clipPoints(), this._simplifyPoints(), r.Path.prototype._updatePath.call(this))
                            }
                        }), r.polyline = function (t, e) {
                            return new r.Polyline(t, e)
                        }, r.PolyUtil = {}, r.PolyUtil.clipPolygon = function (t, e) {
                            var i, n, o, s, a, l, h, u, c, p = [1, 4, 2, 8],
                                d = r.LineUtil;
                            for (n = 0, h = t.length; h > n; n++) t[n]._code = d._getBitCode(t[n], e);
                            for (s = 0; 4 > s; s++) {
                                for (u = p[s], i = [], n = 0, h = t.length, o = h - 1; h > n; o = n++) a = t[n], l = t[o], a._code & u ? l._code & u || (c = d._getEdgeIntersection(l, a, u, e), c._code = d._getBitCode(c, e), i.push(c)) : (l._code & u && (c = d._getEdgeIntersection(l, a, u, e), c._code = d._getBitCode(c, e), i.push(c)), i.push(a));
                                t = i
                            }
                            return t
                        }, r.Polygon = r.Polyline.extend({
                            options: {
                                fill: !0
                            },
                            initialize: function (t, e) {
                                var i, n, o;
                                if (r.Polyline.prototype.initialize.call(this, t, e), t && r.Util.isArray(t[0]) && "number" != typeof t[0][0])
                                    for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), i = 0, n = this._holes.length; n > i; i++) o = this._holes[i] = this._convertLatLngs(this._holes[i]), o[0].equals(o[o.length - 1]) && o.pop();
                                t = this._latlngs, t[0].equals(t[t.length - 1]) && t.pop()
                            },
                            projectLatlngs: function () {
                                if (r.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                                    var t, e, i, n;
                                    for (t = 0, i = this._holes.length; i > t; t++)
                                        for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                                }
                            },
                            _clipPoints: function () {
                                var t = this._originalPoints,
                                    e = [];
                                if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                                    for (var i = 0, n = this._parts.length; n > i; i++) {
                                        var o = r.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                                        o.length && e.push(o)
                                    }
                                    this._parts = e
                                }
                            },
                            _getPathPartStr: function (t) {
                                var e = r.Polyline.prototype._getPathPartStr.call(this, t);
                                return e + (r.Browser.svg ? "z" : "x")
                            }
                        }), r.polygon = function (t, e) {
                            return new r.Polygon(t, e)
                        },
                        function () {
                            function t(t) {
                                return r.FeatureGroup.extend({
                                    initialize: function (t, e) {
                                        this._layers = {}, this._options = e, this.setLatLngs(t)
                                    },
                                    setLatLngs: function (e) {
                                        var i = 0,
                                            n = e.length;
                                        for (this.eachLayer(function (t) {
                                            n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                                        }, this); n > i;) this.addLayer(new t(e[i++], this._options));
                                        return this
                                    }
                                })
                            }
                            r.MultiPolyline = t(r.Polyline), r.MultiPolygon = t(r.Polygon), r.multiPolyline = function (t, e) {
                                return new r.MultiPolyline(t, e)
                            }, r.multiPolygon = function (t, e) {
                                return new r.MultiPolygon(t, e)
                            }
                        }(), r.Rectangle = r.Polygon.extend({
                            initialize: function (t, e) {
                                r.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                            },
                            setBounds: function (t) {
                                this.setLatLngs(this._boundsToLatLngs(t))
                            },
                            _boundsToLatLngs: function (t) {
                                return t = r.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                            }
                        }), r.rectangle = function (t, e) {
                            return new r.Rectangle(t, e)
                        }, r.Circle = r.Path.extend({
                            initialize: function (t, e, i) {
                                r.Path.prototype.initialize.call(this, i), this._latlng = r.latLng(t), this._mRadius = e
                            },
                            options: {
                                fill: !0
                            },
                            setLatLng: function (t) {
                                return this._latlng = r.latLng(t), this.redraw()
                            },
                            setRadius: function (t) {
                                return this._mRadius = t, this.redraw()
                            },
                            projectLatlngs: function () {
                                var t = this._getLngRadius(),
                                    e = this._latlng,
                                    i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                                this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
                            },
                            getBounds: function () {
                                var t = this._getLngRadius(),
                                    e = 360 * (this._mRadius / 40075017),
                                    i = this._latlng;
                                return new r.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
                            },
                            getLatLng: function () {
                                return this._latlng
                            },
                            getPathString: function () {
                                var t = this._point,
                                    e = this._radius;
                                return this._checkIfEmpty() ? "" : r.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0," + 23592600)
                            },
                            getRadius: function () {
                                return this._mRadius
                            },
                            _getLatRadius: function () {
                                return 360 * (this._mRadius / 40075017)
                            },
                            _getLngRadius: function () {
                                return this._getLatRadius() / Math.cos(r.LatLng.DEG_TO_RAD * this._latlng.lat)
                            },
                            _checkIfEmpty: function () {
                                if (!this._map) return !1;
                                var t = this._map._pathViewport,
                                    e = this._radius,
                                    i = this._point;
                                return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
                            }
                        }), r.circle = function (t, e, i) {
                            return new r.Circle(t, e, i)
                        }, r.CircleMarker = r.Circle.extend({
                            options: {
                                radius: 10,
                                weight: 2
                            },
                            initialize: function (t, e) {
                                r.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
                            },
                            projectLatlngs: function () {
                                this._point = this._map.latLngToLayerPoint(this._latlng)
                            },
                            _updateStyle: function () {
                                r.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                            },
                            setRadius: function (t) {
                                return this.options.radius = this._radius = t, this.redraw()
                            }
                        }), r.circleMarker = function (t, e) {
                            return new r.CircleMarker(t, e)
                        }, r.Polyline.include(r.Path.CANVAS ? {
                            _containsPoint: function (t, e) {
                                var i, n, o, s, a, l, h, u = this.options.weight / 2;
                                for (r.Browser.touch && (u += 10), i = 0, s = this._parts.length; s > i; i++)
                                    for (h = this._parts[i], n = 0, a = h.length, o = a - 1; a > n; o = n++)
                                        if ((e || 0 !== n) && (l = r.LineUtil.pointToSegmentDistance(t, h[o], h[n]), u >= l)) return !0;
                                return !1
                            }
                        } : {}), r.Polygon.include(r.Path.CANVAS ? {
                            _containsPoint: function (t) {
                                var e, i, n, o, s, a, l, h, u = !1;
                                if (r.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                                for (o = 0, l = this._parts.length; l > o; o++)
                                    for (e = this._parts[o], s = 0, h = e.length, a = h - 1; h > s; a = s++) i = e[s], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                                return u
                            }
                        } : {}), r.Circle.include(r.Path.CANVAS ? {
                            _drawPath: function () {
                                var t = this._point;
                                this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
                            },
                            _containsPoint: function (t) {
                                var e = this._point,
                                    i = this.options.stroke ? this.options.weight / 2 : 0;
                                return t.distanceTo(e) <= this._radius + i
                            }
                        } : {}), r.GeoJSON = r.FeatureGroup.extend({
                            initialize: function (t, e) {
                                r.setOptions(this, e), this._layers = {}, t && this.addData(t)
                            },
                            addData: function (t) {
                                var e, i, n = r.Util.isArray(t) ? t : t.features;
                                if (n) {
                                    for (e = 0, i = n.length; i > e; e++)(n[e].geometries || n[e].geometry || n[e].features) && this.addData(n[e]);
                                    return this
                                }
                                var o = this.options;
                                if (!o.filter || o.filter(t)) {
                                    var s = r.GeoJSON.geometryToLayer(t, o.pointToLayer, o.coordsToLatLng);
                                    return s.feature = t, s.defaultOptions = s.options, this.resetStyle(s), o.onEachFeature && o.onEachFeature(t, s), this.addLayer(s)
                                }
                            },
                            resetStyle: function (t) {
                                var e = this.options.style;
                                e && (r.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
                            },
                            setStyle: function (t) {
                                this.eachLayer(function (e) {
                                    this._setLayerStyle(e, t)
                                }, this)
                            },
                            _setLayerStyle: function (t, e) {
                                "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                            }
                        }), r.extend(r.GeoJSON, {
                            geometryToLayer: function (t, e, i) {
                                var n, o, s, a, l, h = "Feature" === t.type ? t.geometry : t,
                                    u = h.coordinates,
                                    c = [];
                                switch (i = i || this.coordsToLatLng, h.type) {
                                case "Point":
                                    return n = i(u), e ? e(t, n) : new r.Marker(n);
                                case "MultiPoint":
                                    for (s = 0, a = u.length; a > s; s++) n = i(u[s]), l = e ? e(t, n) : new r.Marker(n), c.push(l);
                                    return new r.FeatureGroup(c);
                                case "LineString":
                                    return o = this.coordsToLatLngs(u, 0, i), new r.Polyline(o);
                                case "Polygon":
                                    return o = this.coordsToLatLngs(u, 1, i), new r.Polygon(o);
                                case "MultiLineString":
                                    return o = this.coordsToLatLngs(u, 1, i), new r.MultiPolyline(o);
                                case "MultiPolygon":
                                    return o = this.coordsToLatLngs(u, 2, i), new r.MultiPolygon(o);
                                case "GeometryCollection":
                                    for (s = 0, a = h.geometries.length; a > s; s++) l = this.geometryToLayer({
                                        geometry: h.geometries[s],
                                        type: "Feature",
                                        properties: t.properties
                                    }, e), c.push(l);
                                    return new r.FeatureGroup(c);
                                default:
                                    throw Error("Invalid GeoJSON object.")
                                }
                            },
                            coordsToLatLng: function (t) {
                                return new r.LatLng(t[1], t[0])
                            },
                            coordsToLatLngs: function (t, e, i) {
                                var n, o, s, r = [];
                                for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), r.push(n);
                                return r
                            },
                            latLngToCoords: function (t) {
                                return [t.lng, t.lat]
                            },
                            latLngsToCoords: function (t) {
                                for (var e = [], i = 0, n = t.length; n > i; i++) e.push(r.GeoJSON.latLngToCoords(t[i]));
                                return e
                            }
                        }), r.Marker.include({
                            toGeoJSON: function () {
                                return {
                                    type: "Point",
                                    coordinates: r.GeoJSON.latLngToCoords(this.getLatLng())
                                }
                            }
                        }), r.Polyline.include({
                            toGeoJSON: function () {
                                return {
                                    type: "LineString",
                                    coordinates: r.GeoJSON.latLngsToCoords(this.getLatLngs())
                                }
                            }
                        }), r.Polygon.include({
                            toGeoJSON: function () {
                                var t, e, i, n = [r.GeoJSON.latLngsToCoords(this.getLatLngs())];
                                if (n[0].push(n[0][0]), this._holes)
                                    for (t = 0, e = this._holes.length; e > t; t++) i = r.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
                                return {
                                    type: "Polygon",
                                    coordinates: n
                                }
                            }
                        }),
                        function () {
                            function t(t, e) {
                                t.include({
                                    toGeoJSON: function () {
                                        var t = [];
                                        return this.eachLayer(function (e) {
                                            t.push(e.toGeoJSON().coordinates)
                                        }), {
                                            type: e,
                                            coordinates: t
                                        }
                                    }
                                })
                            }
                            t(r.MultiPolyline, "MultiLineString"), t(r.MultiPolygon, "MultiPolygon")
                        }(), r.LayerGroup.include({
                            toGeoJSON: function () {
                                var t = [];
                                return this.eachLayer(function (e) {
                                    e.toGeoJSON && t.push(e.toGeoJSON())
                                }), {
                                    type: "GeometryCollection",
                                    geometries: t
                                }
                            }
                        }), r.geoJson = function (t, e) {
                            return new r.GeoJSON(t, e)
                        }, r.DomEvent = {
                            addListener: function (t, e, i, n) {
                                var s, a, l, h = r.stamp(i),
                                    u = "_leaflet_" + e + h;
                                return t[u] ? this : (s = function (e) {
                                    return i.call(n || t, e || r.DomEvent._getEvent())
                                }, r.Browser.msTouch && 0 === e.indexOf("touch") ? this.addMsTouchListener(t, e, s, h) : (r.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, l = "mouseenter" === e ? "mouseover" : "mouseout", s = function (e) {
                                    return r.DomEvent._checkMouse(t, e) ? a(e) : o
                                }, t.addEventListener(l, s, !1)) : "click" === e && r.Browser.android ? (a = s, s = function (t) {
                                    return r.DomEvent._filterClick(t, a)
                                }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[u] = s, this))
                            },
                            removeListener: function (t, e, i) {
                                var n = r.stamp(i),
                                    o = "_leaflet_" + e + n,
                                    s = t[o];
                                return s ? (r.Browser.msTouch && 0 === e.indexOf("touch") ? this.removeMsTouchListener(t, e, n) : r.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", s, !1), t.removeEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1) : t.removeEventListener(e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[o] = null, this) : this
                            },
                            stopPropagation: function (t) {
                                return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this
                            },
                            disableClickPropagation: function (t) {
                                for (var e = r.DomEvent.stopPropagation, i = r.Draggable.START.length - 1; i >= 0; i--) r.DomEvent.addListener(t, r.Draggable.START[i], e);
                                return r.DomEvent.addListener(t, "click", e).addListener(t, "dblclick", e)
                            },
                            preventDefault: function (t) {
                                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                            },
                            stop: function (t) {
                                return r.DomEvent.preventDefault(t).stopPropagation(t)
                            },
                            getMousePosition: function (t, e) {
                                var i = n.body,
                                    o = n.documentElement,
                                    s = t.pageX ? t.pageX : t.clientX + i.scrollLeft + o.scrollLeft,
                                    a = t.pageY ? t.pageY : t.clientY + i.scrollTop + o.scrollTop,
                                    l = new r.Point(s, a);
                                return e ? l._subtract(r.DomUtil.getViewportOffset(e)) : l
                            },
                            getWheelDelta: function (t) {
                                var e = 0;
                                return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
                            },
                            _checkMouse: function (t, e) {
                                var i = e.relatedTarget;
                                if (!i) return !0;
                                try {
                                    for (; i && i !== t;) i = i.parentNode
                                } catch (n) {
                                    return !1
                                }
                                return i !== t
                            },
                            _getEvent: function () {
                                var t = e.event;
                                if (!t)
                                    for (var i = arguments.callee.caller; i && (t = i.arguments[0], !t || e.Event !== t.constructor);) i = i.caller;
                                return t
                            },
                            _filterClick: function (t, e) {
                                var i = t.timeStamp || t.originalEvent.timeStamp,
                                    n = r.DomEvent._lastClick && i - r.DomEvent._lastClick;
                                return n && n > 100 && 400 > n ? (r.DomEvent.stop(t), o) : (r.DomEvent._lastClick = i, e(t))
                            }
                        }, r.DomEvent.on = r.DomEvent.addListener, r.DomEvent.off = r.DomEvent.removeListener, r.Draggable = r.Class.extend({
                            includes: r.Mixin.Events,
                            statics: {
                                START: r.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                                END: {
                                    mousedown: "mouseup",
                                    touchstart: "touchend",
                                    MSPointerDown: "touchend"
                                },
                                MOVE: {
                                    mousedown: "mousemove",
                                    touchstart: "touchmove",
                                    MSPointerDown: "touchmove"
                                },
                                TAP_TOLERANCE: 15
                            },
                            initialize: function (t, e, i) {
                                this._element = t, this._dragStartTarget = e || t, this._longPress = i && !r.Browser.msTouch
                            },
                            enable: function () {
                                if (!this._enabled) {
                                    for (var t = r.Draggable.START.length - 1; t >= 0; t--) r.DomEvent.on(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
                                    this._enabled = !0
                                }
                            },
                            disable: function () {
                                if (this._enabled) {
                                    for (var t = r.Draggable.START.length - 1; t >= 0; t--) r.DomEvent.off(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
                                    this._enabled = !1, this._moved = !1
                                }
                            },
                            _onDown: function (t) {
                                if (!t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (r.DomEvent.preventDefault(t).stopPropagation(t), !r.Draggable._disabled)) {
                                    this._simulateClick = !0;
                                    var e = t.touches && t.touches.length || 0;
                                    if (e > 1) return this._simulateClick = !1, clearTimeout(this._longPressTimeout), o;
                                    var i = 1 === e ? t.touches[0] : t,
                                        s = i.target;
                                    r.Browser.touch && "a" === s.tagName.toLowerCase() && r.DomUtil.addClass(s, "leaflet-active"), this._moved = !1, this._moving || (this._startPoint = new r.Point(i.clientX, i.clientY), this._startPos = this._newPos = r.DomUtil.getPosition(this._element), 1 === e && r.Browser.touch && this._longPress && (this._longPressTimeout = setTimeout(r.bind(function () {
                                        var t = this._newPos && this._newPos.distanceTo(this._startPos) || 0;
                                        r.Draggable.TAP_TOLERANCE > t && (this._simulateClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                                    }, this), 1e3)), r.DomEvent.on(n, r.Draggable.MOVE[t.type], this._onMove, this).on(n, r.Draggable.END[t.type], this._onUp, this))
                                }
                            },
                            _onMove: function (t) {
                                if (!(t.touches && t.touches.length > 1)) {
                                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                        i = new r.Point(e.clientX, e.clientY),
                                        o = i.subtract(this._startPoint);
                                    (o.x || o.y) && (r.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = r.DomUtil.getPosition(this._element).subtract(o), r.Browser.touch || (r.DomUtil.disableTextSelection(), r.DomUtil.addClass(n.body, "leaflet-dragging"))), this._newPos = this._startPos.add(o), this._moving = !0, r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
                                }
                            },
                            _updatePosition: function () {
                                this.fire("predrag"), r.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                            },
                            _onUp: function (t) {
                                var e, i, o, s, a;
                                clearTimeout(this._longPressTimeout), this._simulateClick && t.changedTouches && (o = this._newPos && this._newPos.distanceTo(this._startPos) || 0, e = t.changedTouches[0], i = e.target, "a" === i.tagName.toLowerCase() && r.DomUtil.removeClass(i, "leaflet-active"), r.Draggable.TAP_TOLERANCE > o && (s = !0)), r.Browser.touch || (r.DomUtil.enableTextSelection(), r.DomUtil.removeClass(n.body, "leaflet-dragging"));
                                for (a in r.Draggable.MOVE) r.DomEvent.off(n, r.Draggable.MOVE[a], this._onMove).off(n, r.Draggable.END[a], this._onUp);
                                this._moved && (r.Util.cancelAnimFrame(this._animRequest), this.fire("dragend")), this._moving = !1, s && (this._moved = !1, this._simulateEvent("click", e))
                            },
                            _simulateEvent: function (t, i) {
                                var o = n.createEvent("MouseEvents");
                                o.initMouseEvent(t, !0, !0, e, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
                            }
                        }), r.Handler = r.Class.extend({
                            initialize: function (t) {
                                this._map = t
                            },
                            enable: function () {
                                this._enabled || (this._enabled = !0, this.addHooks())
                            },
                            disable: function () {
                                this._enabled && (this._enabled = !1, this.removeHooks())
                            },
                            enabled: function () {
                                return !!this._enabled
                            }
                        }), r.Map.mergeOptions({
                            dragging: !0,
                            inertia: !r.Browser.android23,
                            inertiaDeceleration: 3400,
                            inertiaMaxSpeed: 1 / 0,
                            inertiaThreshold: r.Browser.touch ? 32 : 18,
                            easeLinearity: .25,
                            longPress: !0,
                            worldCopyJump: !1
                        }), r.Map.Drag = r.Handler.extend({
                            addHooks: function () {
                                if (!this._draggable) {
                                    var t = this._map;
                                    this._draggable = new r.Draggable(t._mapPane, t._container, t.options.longPress), this._draggable.on({
                                        dragstart: this._onDragStart,
                                        drag: this._onDrag,
                                        dragend: this._onDragEnd
                                    }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this))
                                }
                                this._draggable.enable()
                            },
                            removeHooks: function () {
                                this._draggable.disable()
                            },
                            moved: function () {
                                return this._draggable && this._draggable._moved
                            },
                            _onDragStart: function () {
                                var t = this._map;
                                t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                            },
                            _onDrag: function () {
                                if (this._map.options.inertia) {
                                    var t = this._lastTime = +new Date,
                                        e = this._lastPos = this._draggable._newPos;
                                    this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                                }
                                this._map.fire("move").fire("drag")
                            },
                            _onViewReset: function () {
                                var t = this._map.getSize()._divideBy(2),
                                    e = this._map.latLngToLayerPoint([0, 0]);
                                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
                            },
                            _onPreDrag: function () {
                                var t = this._worldWidth,
                                    e = Math.round(t / 2),
                                    i = this._initialWorldOffset,
                                    n = this._draggable._newPos.x,
                                    o = (n - e + i) % t + e - i,
                                    s = (n + e + i) % t - e - i,
                                    r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                                this._draggable._newPos.x = r
                            },
                            _onDragEnd: function () {
                                var t = this._map,
                                    e = t.options,
                                    i = +new Date - this._lastTime,
                                    n = !e.inertia || i > e.inertiaThreshold || !this._positions[0];
                                if (t.fire("dragend"), n) t.fire("moveend");
                                else {
                                    var o = this._lastPos.subtract(this._positions[0]),
                                        s = (this._lastTime + i - this._times[0]) / 1e3,
                                        a = e.easeLinearity,
                                        l = o.multiplyBy(a / s),
                                        h = l.distanceTo([0, 0]),
                                        u = Math.min(e.inertiaMaxSpeed, h),
                                        c = l.multiplyBy(u / h),
                                        p = u / (e.inertiaDeceleration * a),
                                        d = c.multiplyBy(-p / 2).round();
                                    d.x && d.y ? r.Util.requestAnimFrame(function () {
                                        t.panBy(d, p, a, !0)
                                    }) : t.fire("moveend")
                                }
                            }
                        }), r.Map.addInitHook("addHandler", "dragging", r.Map.Drag), r.Map.mergeOptions({
                            doubleClickZoom: !0
                        }), r.Map.DoubleClickZoom = r.Handler.extend({
                            addHooks: function () {
                                this._map.on("dblclick", this._onDoubleClick)
                            },
                            removeHooks: function () {
                                this._map.off("dblclick", this._onDoubleClick)
                            },
                            _onDoubleClick: function (t) {
                                this.setZoomAround(t.containerPoint, this._zoom + 1)
                            }
                        }), r.Map.addInitHook("addHandler", "doubleClickZoom", r.Map.DoubleClickZoom), r.Map.mergeOptions({
                            scrollWheelZoom: !0
                        }), r.Map.ScrollWheelZoom = r.Handler.extend({
                            addHooks: function () {
                                r.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
                            },
                            removeHooks: function () {
                                r.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll)
                            },
                            _onWheelScroll: function (t) {
                                var e = r.DomEvent.getWheelDelta(t);
                                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                                var i = Math.max(40 - (+new Date - this._startTime), 0);
                                clearTimeout(this._timer), this._timer = setTimeout(r.bind(this._performZoom, this), i), r.DomEvent.preventDefault(t), r.DomEvent.stopPropagation(t)
                            },
                            _performZoom: function () {
                                var t = this._map,
                                    e = this._delta,
                                    i = t.getZoom();
                                e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && t.setZoomAround(this._lastMousePos, i + e)
                            }
                        }), r.Map.addInitHook("addHandler", "scrollWheelZoom", r.Map.ScrollWheelZoom), r.extend(r.DomEvent, {
                            _touchstart: r.Browser.msTouch ? "MSPointerDown" : "touchstart",
                            _touchend: r.Browser.msTouch ? "MSPointerUp" : "touchend",
                            addDoubleTapListener: function (t, e, i) {
                                function o(t) {
                                    var e;
                                    if (r.Browser.msTouch ? (m.push(t.pointerId), e = m.length) : e = t.touches.length, !(e > 1)) {
                                        var i = Date.now(),
                                            n = i - (a || i);
                                        l = t.touches ? t.touches[0] : t, h = n > 0 && u >= n, a = i
                                    }
                                }

                                function s(t) {
                                    if (r.Browser.msTouch) {
                                        var i = m.indexOf(t.pointerId);
                                        if (-1 === i) return;
                                        m.splice(i, 1)
                                    }
                                    if (h) {
                                        if (r.Browser.msTouch) {
                                            var n, o = {};
                                            for (var s in l) n = l[s], o[s] = "function" == typeof n ? n.bind(l) : n;
                                            l = o
                                        }
                                        l.type = "dblclick", e(l), a = null
                                    }
                                }
                                var a, l, h = !1,
                                    u = 250,
                                    c = "_leaflet_",
                                    p = this._touchstart,
                                    d = this._touchend,
                                    m = [];
                                t[c + p + i] = o, t[c + d + i] = s;
                                var f = r.Browser.msTouch ? n.documentElement : t;
                                return t.addEventListener(p, o, !1), f.addEventListener(d, s, !1), r.Browser.msTouch && f.addEventListener("MSPointerCancel", s, !1), this
                            },
                            removeDoubleTapListener: function (t, e) {
                                var i = "_leaflet_";
                                return t.removeEventListener(this._touchstart, t[i + this._touchstart + e], !1), (r.Browser.msTouch ? n.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + e], !1), r.Browser.msTouch && n.documentElement.removeEventListener("MSPointerCancel", t[i + this._touchend + e], !1), this
                            }
                        }), r.extend(r.DomEvent, {
                            _msTouches: [],
                            _msDocumentListener: !1,
                            addMsTouchListener: function (t, e, i, n) {
                                switch (e) {
                                case "touchstart":
                                    return this.addMsTouchListenerStart(t, e, i, n);
                                case "touchend":
                                    return this.addMsTouchListenerEnd(t, e, i, n);
                                case "touchmove":
                                    return this.addMsTouchListenerMove(t, e, i, n);
                                default:
                                    throw "Unknown touch event type"
                                }
                            },
                            addMsTouchListenerStart: function (t, e, i, o) {
                                var s = "_leaflet_",
                                    r = this._msTouches,
                                    a = function (t) {
                                        for (var e = !1, n = 0; r.length > n; n++)
                                            if (r[n].pointerId === t.pointerId) {
                                                e = !0;
                                                break
                                            }
                                        e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], i(t)
                                    };
                                if (t[s + "touchstart" + o] = a, t.addEventListener("MSPointerDown", a, !1), !this._msDocumentListener) {
                                    var l = function (t) {
                                        for (var e = 0; r.length > e; e++)
                                            if (r[e].pointerId === t.pointerId) {
                                                r.splice(e, 1);
                                                break
                                            }
                                    };
                                    n.documentElement.addEventListener("MSPointerUp", l, !1), n.documentElement.addEventListener("MSPointerCancel", l, !1), this._msDocumentListener = !0
                                }
                                return this
                            },
                            addMsTouchListenerMove: function (t, e, i, n) {
                                function o(t) {
                                    if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE || 0 !== t.buttons) {
                                        for (var e = 0; r.length > e; e++)
                                            if (r[e].pointerId === t.pointerId) {
                                                r[e] = t;
                                                break
                                            }
                                        t.touches = r.slice(), t.changedTouches = [t], i(t)
                                    }
                                }
                                var s = "_leaflet_",
                                    r = this._msTouches;
                                return t[s + "touchmove" + n] = o, t.addEventListener("MSPointerMove", o, !1), this
                            },
                            addMsTouchListenerEnd: function (t, e, i, n) {
                                var o = "_leaflet_",
                                    s = this._msTouches,
                                    r = function (t) {
                                        for (var e = 0; s.length > e; e++)
                                            if (s[e].pointerId === t.pointerId) {
                                                s.splice(e, 1);
                                                break
                                            }
                                        t.touches = s.slice(), t.changedTouches = [t], i(t)
                                    };
                                return t[o + "touchend" + n] = r, t.addEventListener("MSPointerUp", r, !1), t.addEventListener("MSPointerCancel", r, !1), this
                            },
                            removeMsTouchListener: function (t, e, i) {
                                var n = "_leaflet_",
                                    o = t[n + e + i];
                                switch (e) {
                                case "touchstart":
                                    t.removeEventListener("MSPointerDown", o, !1);
                                    break;
                                case "touchmove":
                                    t.removeEventListener("MSPointerMove", o, !1);
                                    break;
                                case "touchend":
                                    t.removeEventListener("MSPointerUp", o, !1), t.removeEventListener("MSPointerCancel", o, !1)
                                }
                                return this
                            }
                        }), r.Map.mergeOptions({
                            touchZoom: r.Browser.touch && !r.Browser.android23
                        }), r.Map.TouchZoom = r.Handler.extend({
                            addHooks: function () {
                                r.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                            },
                            removeHooks: function () {
                                r.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                            },
                            _onTouchStart: function (t) {
                                var e = this._map;
                                if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                                    var i = e.mouseEventToLayerPoint(t.touches[0]),
                                        o = e.mouseEventToLayerPoint(t.touches[1]),
                                        s = e._getCenterLayerPoint();
                                    this._startCenter = i.add(o)._divideBy(2), this._startDist = i.distanceTo(o), this._moved = !1, this._zooming = !0, this._centerOffset = s.subtract(this._startCenter), e._panAnim && e._panAnim.stop(), r.DomEvent.on(n, "touchmove", this._onTouchMove, this).on(n, "touchend", this._onTouchEnd, this), r.DomEvent.preventDefault(t)
                                }
                            },
                            _onTouchMove: function (t) {
                                var e = this._map;
                                if (t.touches && 2 === t.touches.length && this._zooming) {
                                    var i = e.mouseEventToLayerPoint(t.touches[0]),
                                        n = e.mouseEventToLayerPoint(t.touches[1]);
                                    this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (this._moved || (r.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), r.DomEvent.preventDefault(t))
                                }
                            },
                            _updateOnMove: function () {
                                var t = this._map,
                                    e = this._getScaleOrigin(),
                                    i = t.layerPointToLatLng(e),
                                    n = t.getScaleZoom(this._scale);
                                t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !0)
                            },
                            _onTouchEnd: function () {
                                if (!this._moved || !this._zooming) return this._zooming = !1, o;
                                var t = this._map;
                                this._zooming = !1, r.DomUtil.removeClass(t._mapPane, "leaflet-touching"), r.Util.cancelAnimFrame(this._animRequest), r.DomEvent.off(n, "touchmove", this._onTouchMove).off(n, "touchend", this._onTouchEnd);
                                var e = this._getScaleOrigin(),
                                    i = t.layerPointToLatLng(e),
                                    s = t.getZoom(),
                                    a = t.getScaleZoom(this._scale) - s,
                                    l = a > 0 ? Math.ceil(a) : Math.floor(a),
                                    h = t._limitZoom(s + l),
                                    u = t.getZoomScale(h) / this._scale;
                                t._animateZoom(i, h, e, u, null, !0)
                            },
                            _getScaleOrigin: function () {
                                var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                                return this._startCenter.add(t)
                            }
                        }), r.Map.addInitHook("addHandler", "touchZoom", r.Map.TouchZoom), r.Map.mergeOptions({
                            boxZoom: !0
                        }), r.Map.BoxZoom = r.Handler.extend({
                            initialize: function (t) {
                                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
                            },
                            addHooks: function () {
                                r.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                            },
                            removeHooks: function () {
                                r.DomEvent.off(this._container, "mousedown", this._onMouseDown)
                            },
                            _onMouseDown: function (t) {
                                return !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (r.DomUtil.disableTextSelection(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), this._box = r.DomUtil.create("div", "leaflet-zoom-box", this._pane), r.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", r.DomEvent.on(n, "mousemove", this._onMouseMove, this).on(n, "mouseup", this._onMouseUp, this).on(n, "keydown", this._onKeyDown, this).preventDefault(t), this._map.fire("boxzoomstart"), o)
                            },
                            _onMouseMove: function (t) {
                                var e = this._startLayerPoint,
                                    i = this._box,
                                    n = this._map.mouseEventToLayerPoint(t),
                                    o = n.subtract(e),
                                    s = new r.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                                r.DomUtil.setPosition(i, s), i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
                            },
                            _finish: function () {
                                this._pane.removeChild(this._box), this._container.style.cursor = "", r.DomUtil.enableTextSelection(), r.DomEvent.off(n, "mousemove", this._onMouseMove).off(n, "mouseup", this._onMouseUp).off(n, "keydown", this._onKeyDown)
                            },
                            _onMouseUp: function (t) {
                                this._finish();
                                var e = this._map,
                                    i = e.mouseEventToLayerPoint(t);
                                if (!this._startLayerPoint.equals(i)) {
                                    var n = new r.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                                    e.fitBounds(n), e.fire("boxzoomend", {
                                        boxZoomBounds: n
                                    })
                                }
                            },
                            _onKeyDown: function (t) {
                                27 === t.keyCode && this._finish()
                            }
                        }), r.Map.addInitHook("addHandler", "boxZoom", r.Map.BoxZoom), r.Map.mergeOptions({
                            keyboard: !0,
                            keyboardPanOffset: 80,
                            keyboardZoomOffset: 1
                        }), r.Map.Keyboard = r.Handler.extend({
                            keyCodes: {
                                left: [37],
                                right: [39],
                                down: [40],
                                up: [38],
                                zoomIn: [187, 107, 61],
                                zoomOut: [189, 109, 173]
                            },
                            initialize: function (t) {
                                this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
                            },
                            addHooks: function () {
                                var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), r.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                            },
                            removeHooks: function () {
                                this._removeHooks();
                                var t = this._map._container;
                                r.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                            },
                            _onMouseDown: function () {
                                if (!this._focused) {
                                    var t = n.body,
                                        i = n.documentElement,
                                        o = t.scrollTop || i.scrollTop,
                                        s = t.scrollTop || i.scrollLeft;
                                    this._map._container.focus(), e.scrollTo(s, o)
                                }
                            },
                            _onFocus: function () {
                                this._focused = !0, this._map.fire("focus")
                            },
                            _onBlur: function () {
                                this._focused = !1, this._map.fire("blur")
                            },
                            _setPanOffset: function (t) {
                                var e, i, n = this._panKeys = {}, o = this.keyCodes;
                                for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
                                for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
                                for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
                                for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
                            },
                            _setZoomOffset: function (t) {
                                var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
                                for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
                                for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
                            },
                            _addHooks: function () {
                                r.DomEvent.on(n, "keydown", this._onKeyDown, this)
                            },
                            _removeHooks: function () {
                                r.DomEvent.off(n, "keydown", this._onKeyDown, this)
                            },
                            _onKeyDown: function (t) {
                                var e = t.keyCode,
                                    i = this._map;
                                if (e in this._panKeys) i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds);
                                else {
                                    if (!(e in this._zoomKeys)) return;
                                    i.setZoom(i.getZoom() + this._zoomKeys[e])
                                }
                                r.DomEvent.stop(t)
                            }
                        }), r.Map.addInitHook("addHandler", "keyboard", r.Map.Keyboard), r.Handler.MarkerDrag = r.Handler.extend({
                            initialize: function (t) {
                                this._marker = t
                            },
                            addHooks: function () {
                                var t = this._marker._icon;
                                this._draggable || (this._draggable = new r.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable()
                            },
                            removeHooks: function () {
                                this._draggable.off("dragstart", this._onDragStart).off("drag", this._onDrag).off("dragend", this._onDragEnd), this._draggable.disable()
                            },
                            moved: function () {
                                return this._draggable && this._draggable._moved
                            },
                            _onDragStart: function () {
                                this._marker.closePopup().fire("movestart").fire("dragstart")
                            },
                            _onDrag: function () {
                                var t = this._marker,
                                    e = t._shadow,
                                    i = r.DomUtil.getPosition(t._icon),
                                    n = t._map.layerPointToLatLng(i);
                                e && r.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                                    latlng: n
                                }).fire("drag")
                            },
                            _onDragEnd: function () {
                                this._marker.fire("moveend").fire("dragend")
                            }
                        }), r.Control = r.Class.extend({
                            options: {
                                position: "topright"
                            },
                            initialize: function (t) {
                                r.setOptions(this, t)
                            },
                            getPosition: function () {
                                return this.options.position
                            },
                            setPosition: function (t) {
                                var e = this._map;
                                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                            },
                            getContainer: function () {
                                return this._container
                            },
                            addTo: function (t) {
                                this._map = t;
                                var e = this._container = this.onAdd(t),
                                    i = this.getPosition(),
                                    n = t._controlCorners[i];
                                return r.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                            },
                            removeFrom: function (t) {
                                var e = this.getPosition(),
                                    i = t._controlCorners[e];
                                return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
                            }
                        }), r.control = function (t) {
                            return new r.Control(t)
                        }, r.Map.include({
                            addControl: function (t) {
                                return t.addTo(this), this
                            },
                            removeControl: function (t) {
                                return t.removeFrom(this), this
                            },
                            _initControlPos: function () {
                                function t(t, o) {
                                    var s = i + t + " " + i + o;
                                    e[t + o] = r.DomUtil.create("div", s, n)
                                }
                                var e = this._controlCorners = {}, i = "leaflet-",
                                    n = this._controlContainer = r.DomUtil.create("div", i + "control-container", this._container);
                                t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
                            }
                        }), r.Control.Zoom = r.Control.extend({
                            options: {
                                position: "topleft"
                            },
                            onAdd: function (t) {
                                var e = "leaflet-control-zoom",
                                    i = r.DomUtil.create("div", e + " leaflet-bar");
                                return this._map = t, this._zoomInButton = this._createButton("+", "Zoom in", e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton("-", "Zoom out", e + "-out", i, this._zoomOut, this), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                            },
                            onRemove: function (t) {
                                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                            },
                            _zoomIn: function (t) {
                                this._map.zoomIn(t.shiftKey ? 3 : 1)
                            },
                            _zoomOut: function (t) {
                                this._map.zoomOut(t.shiftKey ? 3 : 1)
                            },
                            _createButton: function (t, e, i, n, o, s) {
                                var a = r.DomUtil.create("a", i, n);
                                a.innerHTML = t, a.href = "#", a.title = e;
                                var l = r.DomEvent.stopPropagation;
                                return r.DomEvent.on(a, "click", l).on(a, "mousedown", l).on(a, "dblclick", l).on(a, "click", r.DomEvent.preventDefault).on(a, "click", o, s), a
                            },
                            _updateDisabled: function () {
                                var t = this._map,
                                    e = "leaflet-disabled";
                                r.DomUtil.removeClass(this._zoomInButton, e), r.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && r.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && r.DomUtil.addClass(this._zoomInButton, e)
                            }
                        }), r.Map.mergeOptions({
                            zoomControl: !0
                        }), r.Map.addInitHook(function () {
                            this.options.zoomControl && (this.zoomControl = new r.Control.Zoom, this.addControl(this.zoomControl))
                        }), r.control.zoom = function (t) {
                            return new r.Control.Zoom(t)
                        }, r.Control.Attribution = r.Control.extend({
                            options: {
                                position: "bottomright",
                                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                            },
                            initialize: function (t) {
                                r.setOptions(this, t), this._attributions = {}
                            },
                            onAdd: function (t) {
                                return this._container = r.DomUtil.create("div", "leaflet-control-attribution"), r.DomEvent.disableClickPropagation(this._container), t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                            },
                            onRemove: function (t) {
                                t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                            },
                            setPrefix: function (t) {
                                return this.options.prefix = t, this._update(), this
                            },
                            addAttribution: function (t) {
                                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : o
                            },
                            removeAttribution: function (t) {
                                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : o
                            },
                            _update: function () {
                                if (this._map) {
                                    var t = [];
                                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                                    var i = [];
                                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                                }
                            },
                            _onLayerAdd: function (t) {
                                t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
                            },
                            _onLayerRemove: function (t) {
                                t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
                            }
                        }), r.Map.mergeOptions({
                            attributionControl: !0
                        }), r.Map.addInitHook(function () {
                            this.options.attributionControl && (this.attributionControl = (new r.Control.Attribution).addTo(this))
                        }), r.control.attribution = function (t) {
                            return new r.Control.Attribution(t)
                        }, r.Control.Scale = r.Control.extend({
                            options: {
                                position: "bottomleft",
                                maxWidth: 100,
                                metric: !0,
                                imperial: !0,
                                updateWhenIdle: !1
                            },
                            onAdd: function (t) {
                                this._map = t;
                                var e = "leaflet-control-scale",
                                    i = r.DomUtil.create("div", e),
                                    n = this.options;
                                return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                            },
                            onRemove: function (t) {
                                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                            },
                            _addScales: function (t, e, i) {
                                t.metric && (this._mScale = r.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = r.DomUtil.create("div", e + "-line", i))
                            },
                            _update: function () {
                                var t = this._map.getBounds(),
                                    e = t.getCenter().lat,
                                    i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
                                    n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                                    o = this._map.getSize(),
                                    s = this.options,
                                    r = 0;
                                o.x > 0 && (r = n * (s.maxWidth / o.x)), this._updateScales(s, r)
                            },
                            _updateScales: function (t, e) {
                                t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
                            },
                            _updateMetric: function (t) {
                                var e = this._getRoundNum(t);
                                this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
                            },
                            _updateImperial: function (t) {
                                var e, i, n, o = 3.2808399 * t,
                                    s = this._iScale;
                                o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
                            },
                            _getScaleWidth: function (t) {
                                return Math.round(this.options.maxWidth * t) - 10
                            },
                            _getRoundNum: function (t) {
                                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                    i = t / e;
                                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
                            }
                        }), r.control.scale = function (t) {
                            return new r.Control.Scale(t)
                        }, r.Control.Layers = r.Control.extend({
                            options: {
                                collapsed: !0,
                                position: "topright",
                                autoZIndex: !0
                            },
                            initialize: function (t, e, i) {
                                r.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                                for (var n in t) this._addLayer(t[n], n);
                                for (n in e) this._addLayer(e[n], n, !0)
                            },
                            onAdd: function (t) {
                                return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                            },
                            onRemove: function (t) {
                                t.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
                            },
                            addBaseLayer: function (t, e) {
                                return this._addLayer(t, e), this._update(), this
                            },
                            addOverlay: function (t, e) {
                                return this._addLayer(t, e, !0), this._update(), this
                            },
                            removeLayer: function (t) {
                                var e = r.stamp(t);
                                return delete this._layers[e], this._update(), this
                            },
                            _initLayout: function () {
                                var t = "leaflet-control-layers",
                                    e = this._container = r.DomUtil.create("div", t);
                                r.Browser.touch ? r.DomEvent.on(e, "click", r.DomEvent.stopPropagation) : (r.DomEvent.disableClickPropagation(e), r.DomEvent.on(e, "mousewheel", r.DomEvent.stopPropagation));
                                var i = this._form = r.DomUtil.create("form", t + "-list");
                                if (this.options.collapsed) {
                                    r.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                                    var n = this._layersLink = r.DomUtil.create("a", t + "-toggle", e);
                                    n.href = "#", n.title = "Layers", r.Browser.touch ? r.DomEvent.on(n, "click", r.DomEvent.stopPropagation).on(n, "click", r.DomEvent.preventDefault).on(n, "click", this._expand, this) : r.DomEvent.on(n, "focus", this._expand, this), this._map.on("movestart", this._collapse, this)
                                } else this._expand();
                                this._baseLayersList = r.DomUtil.create("div", t + "-base", i), this._separator = r.DomUtil.create("div", t + "-separator", i), this._overlaysList = r.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
                            },
                            _addLayer: function (t, e, i) {
                                var n = r.stamp(t);
                                this._layers[n] = {
                                    layer: t,
                                    name: e,
                                    overlay: i
                                }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
                            },
                            _update: function () {
                                if (this._container) {
                                    this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                                    var t, e, i = !1,
                                        n = !1;
                                    for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                                    this._separator.style.display = n && i ? "" : "none"
                                }
                            },
                            _onLayerChange: function (t) {
                                var e = r.stamp(t.layer);
                                this._layers[e] && !this._handlingClick && this._update()
                            },
                            _createRadioElement: function (t, e) {
                                var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                                e && (i += ' checked="checked"'), i += "/>";
                                var o = n.createElement("div");
                                return o.innerHTML = i, o.firstChild
                            },
                            _addItem: function (t) {
                                var e, i = n.createElement("label"),
                                    o = this._map.hasLayer(t.layer);
                                t.overlay ? (e = n.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = r.stamp(t.layer), r.DomEvent.on(e, "click", this._onInputClick, this);
                                var s = n.createElement("span");
                                s.innerHTML = " " + t.name, i.appendChild(e), i.appendChild(s);
                                var a = t.overlay ? this._overlaysList : this._baseLayersList;
                                return a.appendChild(i), i
                            },
                            _onInputClick: function () {
                                var t, e, i, n, o = this._form.getElementsByTagName("input"),
                                    s = o.length;
                                for (this._handlingClick = !0, t = 0; s > t; t++) e = o[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? (this._map.addLayer(i.layer), i.overlay ? this._map.fire("overlayadd", {
                                    layer: i
                                }) : n = i.layer) : !e.checked && this._map.hasLayer(i.layer) && (this._map.removeLayer(i.layer), this._map.fire("overlayremove", {
                                    layer: i
                                }));
                                n && (this._map.setZoom(this._map.getZoom()), this._map.fire("baselayerchange", {
                                    layer: n
                                })), this._handlingClick = !1
                            },
                            _expand: function () {
                                r.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                            },
                            _collapse: function () {
                                this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                            }
                        }), r.control.layers = function (t, e, i) {
                            return new r.Control.Layers(t, e, i)
                        }, r.PosAnimation = r.Class.extend({
                            includes: r.Mixin.Events,
                            run: function (t, e, i, n) {
                                this.stop(), this._el = t, this._inProgress = !0, this.fire("start"), t.style[r.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", r.DomEvent.on(t, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this), r.DomUtil.setPosition(t, e), r.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(r.bind(this._onStep, this), 50)
                            },
                            stop: function () {
                                this._inProgress && (r.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), r.Util.falseFn(this._el.offsetWidth))
                            },
                            _onStep: function () {
                                this._el._leaflet_pos = this._getPos(), this.fire("step")
                            },
                            _transformRe: /(-?[\d\.]+), (-?[\d\.]+)\)/,
                            _getPos: function () {
                                var t, i, n, o = this._el,
                                    s = e.getComputedStyle(o);
                                return r.Browser.any3d ? (n = s[r.DomUtil.TRANSFORM].match(this._transformRe), t = parseFloat(n[1]), i = parseFloat(n[2])) : (t = parseFloat(s.left), i = parseFloat(s.top)), new r.Point(t, i, !0)
                            },
                            _onTransitionEnd: function () {
                                r.DomEvent.off(this._el, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[r.DomUtil.TRANSITION] = "", clearInterval(this._stepTimer), this.fire("step").fire("end"))
                            }
                        }), r.Map.include({
                            setView: function (t, e, i) {
                                e = this._limitZoom(e), t = r.latLng(t), this._panAnim && this._panAnim.stop();
                                var n = this._zoom !== e,
                                    o = this._loaded && !i && !! this._layers;
                                if (o) {
                                    var s = n ? this.options.zoomAnimation && this._animateZoomIfClose && this._animateZoomIfClose(t, e) : this._animatePanIfClose(t);
                                    if (s) return clearTimeout(this._sizeTimer), this
                                }
                                return this._resetView(t, e), this
                            },
                            panBy: function (t, e, i, n) {
                                if (t = r.point(t).round(), !t.x && !t.y) return this;
                                this._panAnim || (this._panAnim = new r.PosAnimation, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), n || this.fire("movestart"), r.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                var o = this._getMapPanePos().subtract(t);
                                return this._panAnim.run(this._mapPane, o, e || .25, i), this
                            },
                            _onPanTransitionStep: function () {
                                this.fire("move")
                            },
                            _onPanTransitionEnd: function () {
                                r.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                            },
                            _animatePanIfClose: function (t) {
                                var e = this._getCenterOffset(t)._floor();
                                return this.getSize().contains(e) ? (this.panBy(e), !0) : !1
                            }
                        }), r.PosAnimation = r.DomUtil.TRANSITION ? r.PosAnimation : r.PosAnimation.extend({
                            run: function (t, e, i, n) {
                                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = r.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                            },
                            stop: function () {
                                this._inProgress && (this._step(), this._complete())
                            },
                            _animate: function () {
                                this._animId = r.Util.requestAnimFrame(this._animate, this), this._step()
                            },
                            _step: function () {
                                var t = +new Date - this._startTime,
                                    e = 1e3 * this._duration;
                                e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
                            },
                            _runFrame: function (t) {
                                var e = this._startPos.add(this._offset.multiplyBy(t));
                                r.DomUtil.setPosition(this._el, e), this.fire("step")
                            },
                            _complete: function () {
                                r.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                            },
                            _easeOut: function (t) {
                                return 1 - Math.pow(1 - t, this._easeOutPower)
                            }
                        }), r.Map.mergeOptions({
                            zoomAnimation: r.DomUtil.TRANSITION && !r.Browser.android23 && !r.Browser.mobileOpera,
                            zoomAnimationThreshold: 4
                        }), r.DomUtil.TRANSITION && r.Map.addInitHook(function () {
                            r.DomEvent.on(this._mapPane, r.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                        }), r.Map.include(r.DomUtil.TRANSITION ? {
                            _catchTransitionEnd: function () {
                                this._animatingZoom && this._onZoomTransitionEnd()
                            },
                            _animateZoomIfClose: function (t, e) {
                                if (this._animatingZoom) return !0;
                                if (Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                                var i = this.getZoomScale(e),
                                    n = this._getCenterOffset(t)._divideBy(1 - 1 / i),
                                    o = this._getCenterLayerPoint()._add(n);
                                return this.getSize().contains(n) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, o, i), !0) : !1
                            },
                            _animateZoom: function (t, e, i, n, o, s) {
                                this._animatingZoom = !0, r.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, r.Draggable && (r.Draggable._disabled = !0), this.fire("zoomanim", {
                                    center: t,
                                    zoom: e,
                                    origin: i,
                                    scale: n,
                                    delta: o,
                                    backwards: s
                                })
                            },
                            _onZoomTransitionEnd: function () {
                                this._animatingZoom = !1, r.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), r.Draggable && (r.Draggable._disabled = !1)
                            }
                        } : {}), r.TileLayer.include({
                            _animateZoom: function (t) {
                                var e = !1;
                                this._animating || (this._animating = !0, e = !0), e && this._prepareBgBuffer();
                                var i = r.DomUtil.TRANSFORM,
                                    n = this._bgBuffer;
                                e && (clearTimeout(this._clearBgBufferTimer), r.Util.falseFn(n.offsetWidth));
                                var o = r.DomUtil.getScaleString(t.scale, t.origin),
                                    s = n.style[i];
                                n.style[i] = t.backwards ? (t.delta ? r.DomUtil.getTranslateString(t.delta) : s) + " " + o : o + " " + s
                            },
                            _endZoomAnim: function () {
                                var t = this._tileContainer,
                                    e = this._bgBuffer;
                                t.style.visibility = "", t.style.zIndex = 2, e.style.zIndex = 1, r.Util.falseFn(e.offsetWidth), this._animating = !1
                            },
                            _clearBgBuffer: function () {
                                var t = this._map;
                                !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[r.DomUtil.TRANSFORM] = "")
                            },
                            _prepareBgBuffer: function () {
                                var t = this._tileContainer,
                                    e = this._bgBuffer;
                                return e && this._getLoadedTilesPercentage(e) > .5 && .5 > this._getLoadedTilesPercentage(t) ? (t.style.visibility = "hidden", this._stopLoadingImages(t), o) : (e.style.visibility = "hidden", e.style[r.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), o)
                            },
                            _getLoadedTilesPercentage: function (t) {
                                var e, i, n = t.getElementsByTagName("img"),
                                    o = 0;
                                for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
                                return o / i
                            },
                            _stopLoadingImages: function (t) {
                                var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
                                for (e = 0, i = o.length; i > e; e++) n = o[e], n.complete || (n.onload = r.Util.falseFn, n.onerror = r.Util.falseFn, n.src = r.Util.emptyImageUrl, n.parentNode.removeChild(n))
                            }
                        }), r.Map.include({
                            _defaultLocateOptions: {
                                watch: !1,
                                setView: !1,
                                maxZoom: 1 / 0,
                                timeout: 1e4,
                                maximumAge: 0,
                                enableHighAccuracy: !1
                            },
                            locate: function (t) {
                                if (t = this._locateOptions = r.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                                    code: 0,
                                    message: "Geolocation not supported."
                                }), this;
                                var e = r.bind(this._handleGeolocationResponse, this),
                                    i = r.bind(this._handleGeolocationError, this);
                                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                            },
                            stopLocate: function () {
                                return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                            },
                            _handleGeolocationError: function (t) {
                                var e = t.code,
                                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                    code: e,
                                    message: "Geolocation error: " + i + "."
                                })
                            },
                            _handleGeolocationResponse: function (t) {
                                var e = t.coords.latitude,
                                    i = t.coords.longitude,
                                    n = new r.LatLng(e, i),
                                    o = 180 * t.coords.accuracy / 40075017,
                                    s = o / Math.cos(r.LatLng.DEG_TO_RAD * e),
                                    a = r.latLngBounds([e - o, i - s], [e + o, i + s]),
                                    l = this._locateOptions;
                                if (l.setView) {
                                    var h = Math.min(this.getBoundsZoom(a), l.maxZoom);
                                    this.setView(n, h)
                                }
                                var u = r.extend({
                                    latlng: n,
                                    bounds: a
                                }, t.coords);
                                this.fire("locationfound", u)
                            }
                        })
                    })(window, document)
                })()
            }, {}
        ],
        13: [
            function (t, e) {
                "use strict";
                e.exports = {
                    HTTP_URLS: ["http://a.tiles.mapbox.com/v3/", "http://b.tiles.mapbox.com/v3/", "http://c.tiles.mapbox.com/v3/", "http://d.tiles.mapbox.com/v3/"],
                    FORCE_HTTPS: !1,
                    HTTPS_URLS: []
                }
            }, {}
        ],
        4: [
            function (t, e) {
                "use strict";
                var i = t("./util"),
                    n = t("./url"),
                    o = t("./request");
                e.exports = function (t) {
                    var e, s = {};
                    return s.getURL = function () {
                        return e
                    }, s.setURL = function (t) {
                        return e = n.jsonify(t), s
                    }, s.setID = function (t) {
                        return s.setURL(n.base() + t + "/geocode/{query}.json"), s
                    }, s.setTileJSON = function (t) {
                        return i.strict(t, "object"), s.setURL(t.geocoder), s
                    }, s.queryURL = function (t) {
                        return L.Util.template(s.getURL(), {
                            query: encodeURIComponent(t)
                        })
                    }, s.query = function (t, e) {
                        return o(s.queryURL(t), function (t, n) {
                            if (n && n.results && n.results.length) {
                                var o = {
                                    results: n.results,
                                    latlng: [n.results[0][0].lat, n.results[0][0].lon]
                                };
                                void 0 !== n.results[0][0].bounds && (o.bounds = n.results[0][0].bounds, o.lbounds = i.lbounds(o.bounds)), e(null, o)
                            } else e(t)
                        }), s
                    }, s.reverseQuery = function (t, e) {
                        function i(t) {
                            return void 0 !== t.lat && void 0 !== t.lng ? t.lng + "," + t.lat : void 0 !== t.lat && void 0 !== t.lon ? t.lon + "," + t.lat : t[0] + "," + t[1]
                        }
                        var n = "";
                        if (t.length && t[0].length) {
                            for (var r = 0, a = []; t.length > r; r++) a.push(i(t[r]));
                            n = a.join(";")
                        } else n = i(t);
                        return o(s.queryURL(n), function (t, i) {
                            e(t, i)
                        }), s
                    }, "string" == typeof t ? -1 == t.indexOf("/") ? s.setID(t) : s.setURL(t) : "object" == typeof t && s.setTileJSON(t), s
                }
            }, {
                "./util": 14,
                "./url": 15,
                "./request": 16
            }
        ],
        5: [
            function (t, e) {
                "use strict";

                function i(t) {
                    t = t || {};
                    var e = {
                        small: [20, 50],
                        medium: [30, 70],
                        large: [35, 90]
                    }, i = t["marker-size"] || "medium",
                        n = t["marker-symbol"] ? "-" + t["marker-symbol"] : "",
                        o = (t["marker-color"] || "7e7e7e").replace("#", "");
                    return L.icon({
                        iconUrl: s.base() + "marker/" + "pin-" + i.charAt(0) + n + "+" + o + (L.Browser.retina ? "@2x" : "") + ".png",
                        iconSize: e[i],
                        iconAnchor: [e[i][0] / 2, e[i][1] / 2],
                        popupAnchor: [0, -e[i][1] / 2]
                    })
                }

                function n(t, e) {
                    return L.marker(e, {
                        icon: i(t.properties),
                        title: t.properties.title
                    })
                }

                function o(t, e) {
                    var i = '<div class="marker-title">' + t.properties.title + "</div>";
                    return t.properties.description && (i += '<div class="marker-description">' + t.properties.description + "</div>"), (e || r)(i)
                }
                var s = t("./url"),
                    r = t("./sanitize");
                e.exports = {
                    icon: i,
                    style: n,
                    createPopup: o
                }
            }, {
                "./url": 15,
                "./sanitize": 17
            }
        ],
        6: [
            function (t, e) {
                "use strict";
                var i = t("./util"),
                    n = t("./url"),
                    o = L.TileLayer.extend({
                        includes: [t("./load_tilejson")],
                        options: {
                            format: "png"
                        },
                        formats: ["png", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
                        initialize: function (t, e) {
                            L.TileLayer.prototype.initialize.call(this, void 0, e), this._tilejson = {}, e && e.detectRetina && L.Browser.retina && e.retinaVersion && (t = e.retinaVersion), e && e.format && i.strict_oneof(e.format, this.formats), this._loadTileJSON(t)
                        },
                        setFormat: function (t) {
                            return i.strict(t, "string"), this.options.format = t, this.redraw(), this
                        },
                        setUrl: null,
                        _setTileJSON: function (t) {
                            return i.strict(t, "object"), t = n.httpsify(t), L.extend(this.options, {
                                tiles: t.tiles,
                                attribution: t.attribution,
                                minZoom: t.minzoom,
                                maxZoom: t.maxzoom,
                                tms: "tms" === t.scheme,
                                bounds: t.bounds && i.lbounds(t.bounds)
                            }), this._tilejson = t, this.redraw(), this
                        },
                        getTileJSON: function () {
                            return this._tilejson
                        },
                        getTileUrl: function (t) {
                            var e = this.options.tiles,
                                i = (t.x + t.y) % e.length,
                                n = e[i],
                                o = L.Util.template(n, t);
                            return o ? o.replace(".png", "." + this.options.format) : o
                        },
                        _update: function () {
                            this.options.tiles && L.TileLayer.prototype._update.call(this)
                        }
                    });
                e.exports = function (t, e) {
                    return new o(t, e)
                }
            }, {
                "./util": 14,
                "./url": 15,
                "./load_tilejson": 18
            }
        ],
        7: [
            function (t, e) {
                "use strict";
                var i = L.Control.extend({
                    options: {
                        position: "bottomright",
                        sanitizer: t("./sanitize")
                    },
                    initialize: function (t) {
                        L.setOptions(this, t), this._legends = {}
                    },
                    onAdd: function () {
                        return this._container = L.DomUtil.create("div", "map-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
                    },
                    addLegend: function (t) {
                        return t ? (this._legends[t] || (this._legends[t] = 0), this._legends[t]++, this._update()) : this
                    },
                    removeLegend: function (t) {
                        return t ? (this._legends[t] && this._legends[t]--, this._update()) : this
                    },
                    _update: function () {
                        if (!this._map) return this;
                        this._container.innerHTML = "";
                        for (var t in this._legends)
                            if (this._legends.hasOwnProperty(t) && this._legends[t]) {
                                var e = this._container.appendChild(document.createElement("div"));
                                e.className = "map-legend", e.innerHTML = this.options.sanitizer(t)
                            }
                        return this
                    }
                });
                e.exports = function (t) {
                    return new i(t)
                }
            }, {
                "./sanitize": 17
            }
        ],
        8: [
            function (t, e) {
                "use strict";
                var i = t("./geocoder"),
                    n = L.Control.extend({
                        includes: L.Mixin.Events,
                        initialize: function (t) {
                            this.geocoder = i(t)
                        },
                        setURL: function (t) {
                            return this.geocoder.setURL(t), this
                        },
                        getURL: function () {
                            return this.geocoder.getURL()
                        },
                        setID: function (t) {
                            return this.geocoder.setID(t), this
                        },
                        setTileJSON: function (t) {
                            return this.geocoder.setTileJSON(t), this
                        },
                        onAdd: function (t) {
                            this._map = t;
                            var e = "leaflet-control-mapbox-geocoder",
                                i = L.DomUtil.create("div", e);
                            L.DomEvent.disableClickPropagation(i);
                            var n = this._form = L.DomUtil.create("form", e + "-form");
                            L.DomEvent.addListener(n, "submit", this._geocode, this);
                            var o = this._input = document.createElement("input");
                            o.type = "text";
                            var s = this._submit = document.createElement("input");
                            return s.type = "submit", s.className = "mapbox-button", s.value = "Locate", n.appendChild(o), n.appendChild(s), i.appendChild(n), i
                        },
                        _geocode: function (t) {
                            L.DomEvent.preventDefault(t), L.DomUtil.addClass(this._container, "searching"), this.geocoder.query(this._input.value, L.bind(function (t, e) {
                                L.DomUtil.removeClass(this._container, "searching"), t ? this.fire("error", {
                                    error: t
                                }) : (e.lbounds ? this._map.fitBounds(e.lbounds) : this._map.setView(e.latlng, 6), this.fire("found", e))
                            }, this))
                        }
                    });
                e.exports = function (t) {
                    return new n(t)
                }
            }, {
                "./geocoder": 4
            }
        ],
        10: [
            function (t, e) {
                "use strict";
                var i = t("./util"),
                    n = t("./url"),
                    o = t("./request"),
                    s = t("./grid"),
                    r = L.Class.extend({
                        includes: [L.Mixin.Events, t("./load_tilejson")],
                        options: {
                            template: function () {
                                return ""
                            }
                        },
                        _mouseOn: null,
                        _tilejson: {},
                        _cache: {},
                        initialize: function (t, e) {
                            L.Util.setOptions(this, e), this._loadTileJSON(t)
                        },
                        _setTileJSON: function (t) {
                            return i.strict(t, "object"), t = n.httpsify(t), L.extend(this.options, {
                                grids: t.grids,
                                minZoom: t.minzoom,
                                maxZoom: t.maxzoom,
                                bounds: t.bounds && i.lbounds(t.bounds)
                            }), this._tilejson = t, this._cache = {}, this._update(), this
                        },
                        getTileJSON: function () {
                            return this._tilejson
                        },
                        active: function () {
                            return !!(this._map && this.options.grids && this.options.grids.length)
                        },
                        addTo: function (t) {
                            return t.addLayer(this), this
                        },
                        onAdd: function (t) {
                            this._map = t, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
                        },
                        onRemove: function () {
                            this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
                        },
                        getData: function (t, e) {
                            if (this.active()) {
                                var i = this._map,
                                    n = i.project(t),
                                    o = 256,
                                    s = 4,
                                    r = Math.floor(n.x / o),
                                    a = Math.floor(n.y / o),
                                    l = i.options.crs.scale(i.getZoom()) / o;
                                return r = (r + l) % l, a = (a + l) % l, this._getTile(i.getZoom(), r, a, function (t) {
                                    var i = Math.floor((n.x - r * o) / s),
                                        l = Math.floor((n.y - a * o) / s);
                                    e(t(i, l))
                                }), this
                            }
                        },
                        _click: function (t) {
                            this.getData(t.latlng, L.bind(function (e) {
                                this.fire("click", {
                                    latLng: t.latlng,
                                    data: e
                                })
                            }, this))
                        },
                        _move: function (t) {
                            this.getData(t.latlng, L.bind(function (e) {
                                e !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
                                    latLng: t.latlng,
                                    data: this._mouseOn
                                }), this.fire("mouseover", {
                                    latLng: t.latlng,
                                    data: e
                                }), this._mouseOn = e) : this.fire("mousemove", {
                                    latLng: t.latlng,
                                    data: e
                                })
                            }, this))
                        },
                        _getTileURL: function (t) {
                            var e = this.options.grids,
                                i = (t.x + t.y) % e.length,
                                n = e[i];
                            return L.Util.template(n, t)
                        },
                        _update: function () {
                            if (this.active()) {
                                var t = this._map.getPixelBounds(),
                                    e = this._map.getZoom(),
                                    i = 256;
                                if (!(e > this.options.maxZoom || this.options.minZoom > e))
                                    for (var n = new L.Point(Math.floor(t.min.x / i), Math.floor(t.min.y / i)), o = new L.Point(Math.floor(t.max.x / i), Math.floor(t.max.y / i)), s = this._map.options.crs.scale(e) / i, r = n.x; o.x >= r; r++)
                                        for (var a = n.y; o.y >= a; a++) {
                                            var l = (r + s) % s,
                                                h = (a + s) % s;
                                            this._getTile(e, l, h)
                                        }
                            }
                        },
                        _getTile: function (t, e, i, n) {
                            var r = t + "_" + e + "_" + i,
                                a = L.point(e, i);
                            if (a.z = t, this._tileShouldBeLoaded(a)) {
                                if (r in this._cache) {
                                    if (!n) return;
                                    return "function" == typeof this._cache[r] ? n(this._cache[r]) : this._cache[r].push(n), void 0
                                }
                                this._cache[r] = [], n && this._cache[r].push(n), o(this._getTileURL(a), L.bind(function (t, e) {
                                    var i = this._cache[r];
                                    this._cache[r] = s(e);
                                    for (var n = 0; i.length > n; ++n) i[n](this._cache[r])
                                }, this))
                            }
                        },
                        _tileShouldBeLoaded: function (t) {
                            if (t.z > this.options.maxZoom || t.z < this.options.minZoom) return !1;
                            if (this.options.bounds) {
                                var e = 256,
                                    i = t.multiplyBy(e),
                                    n = i.add(new L.Point(e, e)),
                                    o = this._map.unproject(i),
                                    s = this._map.unproject(n),
                                    r = new L.LatLngBounds([o, s]);
                                if (!this.options.bounds.intersects(r)) return !1
                            }
                            return !0
                        }
                    });
                e.exports = function (t, e) {
                    return new r(t, e)
                }
            }, {
                "./util": 14,
                "./url": 15,
                "./request": 16,
                "./grid": 19,
                "./load_tilejson": 18
            }
        ],
        11: [
            function (t, e) {
                "use strict";
                var i = t("./util"),
                    n = t("./url"),
                    o = t("./request"),
                    s = t("./marker"),
                    r = L.FeatureGroup.extend({
                        options: {
                            filter: function () {
                                return !0
                            },
                            sanitizer: t("./sanitize")
                        },
                        initialize: function (t, e) {
                            L.setOptions(this, e), this._layers = {}, "string" == typeof t ? i.idUrl(t, this) : t && "object" == typeof t && this.setGeoJSON(t)
                        },
                        setGeoJSON: function (t) {
                            this._geojson = t, this._initialize(t)
                        },
                        getGeoJSON: function () {
                            return this._geojson
                        },
                        loadURL: function (t) {
                            return t = n.jsonify(t), o(t, L.bind(function (e, n) {
                                e ? (i.log("could not load markers at " + t), this.fire("error", {
                                    error: e
                                })) : n && (this.setGeoJSON(n), this.fire("ready"))
                            }, this)), this
                        },
                        loadID: function (t) {
                            return this.loadURL(n.base() + t + "/markers.geojson")
                        },
                        setFilter: function (t) {
                            return this.options.filter = t, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
                        },
                        getFilter: function () {
                            return this.options.filter
                        },
                        _initialize: function (t) {
                            var e, i, n = L.Util.isArray(t) ? t : t.features;
                            if (n)
                                for (e = 0, i = n.length; i > e; e++)(n[e].geometries || n[e].geometry || n[e].features) && this._initialize(n[e]);
                            else if (this.options.filter(t)) {
                                var o = L.GeoJSON.geometryToLayer(t, s.style),
                                    r = s.createPopup(t, this.options.sanitizer);
                                o.feature = t, o.bindPopup(r, {
                                    closeButton: !1
                                }), this.addLayer(o)
                            }
                        }
                    });
                e.exports = function (t, e) {
                    return new r(t, e)
                }
            }, {
                "./util": 14,
                "./url": 15,
                "./request": 16,
                "./marker": 5,
                "./sanitize": 17
            }
        ],
        12: [
            function (t, e) {
                "use strict";
                var i = (t("./util"), t("./tile_layer")),
                    n = t("./marker_layer"),
                    o = t("./grid_layer"),
                    s = t("./grid_control"),
                    r = t("./legend_control"),
                    a = L.Map.extend({
                        includes: [t("./load_tilejson")],
                        options: {
                            tileLayer: !0,
                            markerLayer: !0,
                            gridLayer: !0,
                            legendControl: !0,
                            gridControl: !0
                        },
                        _tilejson: {},
                        initialize: function (t, e, a) {
                            L.Map.prototype.initialize.call(this, t, a), this.attributionControl && this.attributionControl.setPrefix(""), this.options.tileLayer && (this.tileLayer = i(), this.addLayer(this.tileLayer)), this.options.markerLayer && (this.markerLayer = n(), this.addLayer(this.markerLayer)), this.options.gridLayer && (this.gridLayer = o(), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = s(this.gridLayer), this.addControl(this.gridControl)), this.options.legendControl && (this.legendControl = r(), this.addControl(this.legendControl)), this._loadTileJSON(e)
                        },
                        addLayer: function (t) {
                            return t.on("ready", L.bind(function () {
                                this._updateLayer(t)
                            }, this)), L.Map.prototype.addLayer.call(this, t)
                        },
                        _setTileJSON: function (t) {
                            return this._tilejson = t, this._initialize(t), this
                        },
                        getTileJSON: function () {
                            return this._tilejson
                        },
                        _initialize: function (t) {
                            if (this.tileLayer && (this.tileLayer._setTileJSON(t), this._updateLayer(this.tileLayer)), this.markerLayer && t.data && t.data[0] && this.markerLayer.loadURL(t.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(t), this._updateLayer(this.gridLayer)), this.gridControl && t.template && this.gridControl.setTemplate(t.template), this.legendControl && t.legend && this.legendControl.addLegend(t.legend), !this._loaded) {
                                var e = t.center[2],
                                    i = L.latLng(t.center[1], t.center[0]);
                                this.setView(i, e)
                            }
                        },
                        _updateLayer: function (t) {
                            t.options && (this.attributionControl && this._loaded && this.attributionControl.addAttribution(t.options.attribution), L.stamp(t) in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[L.stamp(t)] = t), this._updateZoomLevels())
                        }
                    });
                e.exports = function (t, e, i) {
                    return new a(t, e, i)
                }
            }, {
                "./util": 14,
                "./tile_layer": 6,
                "./marker_layer": 11,
                "./grid_layer": 10,
                "./grid_control": 9,
                "./legend_control": 7,
                "./load_tilejson": 18
            }
        ],
        14: [
            function (t, e) {
                "use strict";
                e.exports = {
                    idUrl: function (t, e) {
                        -1 == t.indexOf("/") ? e.loadID(t) : e.loadURL(t)
                    },
                    log: function (t) {
                        console && "function" == typeof console.error && console.error(t)
                    },
                    strict: function (t, e) {
                        if (typeof t !== e) throw Error("Invalid argument: " + e + " expected")
                    },
                    strict_instance: function (t, e, i) {
                        if (!(t instanceof e)) throw Error("Invalid argument: " + i + " expected")
                    },
                    strict_oneof: function (t, e) {
                        if (-1 == e.indexOf(t)) throw Error("Invalid argument: " + t + " given, valid values are " + e.join(", "))
                    },
                    lbounds: function (t) {
                        return new L.LatLngBounds([
                            [t[1], t[0]],
                            [t[3], t[2]]
                        ])
                    }
                }
            }, {}
        ],
        19: [
            function (t, e) {
                "use strict";

                function i(t) {
                    return t >= 93 && t--, t >= 35 && t--, t - 32
                }
                e.exports = function (t) {
                    return function (e, n) {
                        if (t) {
                            var o = i(t.grid[n].charCodeAt(e)),
                                s = t.keys[o];
                            return t.data[s]
                        }
                    }
                }
            }, {}
        ],
        17: [
            function (t, e) {
                "use strict";

                function i(t) {
                    return /^https/.test(t.getScheme()) ? "" + t : "data" == t.getScheme() && /^image/.test(t.getPath()) ? "" + t : void 0
                }

                function n(t) {
                    return t
                }
                var o = t("../ext/sanitizer/html-sanitizer-bundle.js");
                e.exports = function (t) {
                    return t ? o(t, i, n) : ""
                }
            }, {
                "../ext/sanitizer/html-sanitizer-bundle.js": 20
            }
        ],
        15: [
            function (t, e) {
                "use strict";
                var i = t("./config");
                e.exports = {
                    base: function (t) {
                        var e = i.HTTP_URLS;
                        return ("https:" === window.location.protocol || i.FORCE_HTTPS) && i.HTTPS_URLS.length && (e = i.HTTPS_URLS), void 0 === t || "number" != typeof t ? e[0] : e[t % e.length]
                    },
                    httpsify: function (t) {
                        function e(t) {
                            for (var e = [], n = 0; t.length > n; n++) {
                                for (var o = t[n], s = 0; i.HTTP_URLS.length > s; s++) o = o.replace(i.HTTP_URLS[s], i.HTTPS_URLS[s % i.HTTPS_URLS.length]);
                                e.push(o)
                            }
                            return e
                        }
                        return ("https:" === window.location.protocol || i.FORCE_HTTPS) && i.HTTPS_URLS.length && (t.tiles && (t.tiles = e(t.tiles)), t.grids && (t.grids = e(t.grids)), t.data && (t.data = e(t.data))), t
                    },
                    jsonify: function (t) {
                        return t.replace(/\.(geo)?jsonp(?=$|\?)/, ".$1json")
                    }
                }
            }, {
                "./config": 13
            }
        ],
        18: [
            function (t, e) {
                "use strict";
                var i = t("./request"),
                    n = t("./url"),
                    o = t("./util");
                e.exports = {
                    _loadTileJSON: function (t) {
                        "string" == typeof t ? (-1 == t.indexOf("/") && (t = n.base() + t + ".json"), i(t, L.bind(function (e, i) {
                            e ? (o.log("could not load TileJSON at " + t), this.fire("error", {
                                error: e
                            })) : i && (this._setTileJSON(i), this.fire("ready"))
                        }, this))) : t && "object" == typeof t && this._setTileJSON(t)
                    }
                }
            }, {
                "./request": 16,
                "./url": 15,
                "./util": 14
            }
        ],
        9: [
            function (t, e) {
                "use strict";
                var i = t("./util"),
                    n = t("mustache"),
                    o = L.Control.extend({
                        options: {
                            pinnable: !0,
                            follow: !1,
                            sanitizer: t("./sanitize")
                        },
                        _currentContent: "",
                        _pinned: !1,
                        initialize: function (t, e) {
                            L.Util.setOptions(this, e), i.strict_instance(t, L.Class, "L.mapbox.gridLayer"), this._layer = t
                        },
                        setTemplate: function (t) {
                            this.options.template = t
                        },
                        _show: function (t, e) {
                            var i;
                            if (this.options.template) {
                                var o = {};
                                o["__" + t + "__"] = !0, i = this.options.sanitizer(n.to_html(this.options.template, L.extend(o, e.data)))
                            }
                            i !== this._currentContent && (this._currentContent = i, this.options.follow ? (this._popup.setContent(i).setLatLng(e.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = i))
                        },
                        _hide: function () {
                            this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable")
                        },
                        _mouseover: function (t) {
                            t.data ?
                                L.DomUtil.addClass(this._map._container, "map-clickable") :
                                L.DomUtil.removeClass(this._map._container, "map-clickable"), this._pinned || (t.data ? this._show("teaser", t) : null/*this._hide()*/)
                        },
                        _mousemove: function (t) {
                            this._pinned || this.options.follow && this._popup.setLatLng(t.latLng)
                        },
                        _click: function (t) {
                            this.options.pinnable && (t.data ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show("full", t)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this._hide()))
                        },
                        _createClosebutton: function (t, e) {
                            var i = L.DomUtil.create("a", "close", t);
                            return i.innerHTML = "close", i.href = "#", i.title = "close", L.DomEvent.on(i, "click", L.DomEvent.stopPropagation).on(i, "mousedown", L.DomEvent.stopPropagation).on(i, "dblclick", L.DomEvent.stopPropagation).on(i, "click", L.DomEvent.preventDefault).on(i, "click", e, this), i
                        },
                        onAdd: function (t) {
                            this._map = t;
                            var e = "leaflet-control-grid map-tooltip",
                                i = L.DomUtil.create("div", e),
                                n = L.DomUtil.create("div", "map-tooltip-content");
                            return i.style.display = "none", this._createClosebutton(i, this._hide), i.appendChild(n), this._contentWrapper = n, this._popup = new L.Popup({
                                autoPan: !1
                            }), t.on("popupclose", L.bind(function () {
                                this._currentContent = null, this._pinned = !1
                            }, this)), L.DomEvent.disableClickPropagation(i).addListener(i, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), i
                        }
                    });
                e.exports = function (t, e) {
                    return new o(t, e)
                }
            }, {
                "./util": 14,
                "./sanitize": 17,
                mustache: 21
            }
        ],
        20: [
            function (t, e) {
                (function () {
                    var t = function () {
                        function t(t) {
                            var e = ("" + t).match(d);
                            return e ? new l(h(e[1]), h(e[2]), h(e[3]), h(e[4]), h(e[5]), h(e[6]), h(e[7])) : null
                        }

                        function e(t, e, s, r, a, h, u) {
                            var c = new l(n(t, m), n(e, m), i(s), r > 0 ? "" + r : null, n(a, f), null, i(u));
                            return h && ("string" == typeof h ? c.setRawQuery(h.replace(/[^?&=0-9A-Za-z_\-~.%]/g, o)) : c.setAllParameters(h)), c
                        }

                        function i(t) {
                            return "string" == typeof t ? encodeURIComponent(t) : null
                        }

                        function n(t, e) {
                            return "string" == typeof t ? encodeURI(t).replace(e, o) : null
                        }

                        function o(t) {
                            var e = t.charCodeAt(0);
                            return "%" + "0123456789ABCDEF".charAt(15 & e >> 4) + "0123456789ABCDEF".charAt(15 & e)
                        }

                        function s(t) {
                            return t.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                        }

                        function r(t) {
                            if (null === t) return null;
                            for (var e, i = s(t), n = c;
                                (e = i.replace(n, "$1")) != i; i = e);
                            return i
                        }

                        function a(t, e) {
                            var i = t.clone(),
                                n = e.hasScheme();
                            n ? i.setRawScheme(e.getRawScheme()) : n = e.hasCredentials(), n ? i.setRawCredentials(e.getRawCredentials()) : n = e.hasDomain(), n ? i.setRawDomain(e.getRawDomain()) : n = e.hasPort();
                            var o = e.getRawPath(),
                                s = r(o);
                            if (n) i.setPort(e.getPort()), s = s && s.replace(p, "");
                            else if (n = !! o) {
                                if (47 !== s.charCodeAt(0)) {
                                    var a = r(i.getRawPath() || "").replace(p, ""),
                                        l = a.lastIndexOf("/") + 1;
                                    s = r((l ? a.substring(0, l) : "") + r(o)).replace(p, "")
                                }
                            } else s = s && s.replace(p, ""), s !== o && i.setRawPath(s);
                            return n ? i.setRawPath(s) : n = e.hasQuery(), n ? i.setRawQuery(e.getRawQuery()) : n = e.hasFragment(), n && i.setRawFragment(e.getRawFragment()), i
                        }

                        function l(t, e, i, n, o, s, r) {
                            this.scheme_ = t, this.credentials_ = e, this.domain_ = i, this.port_ = n, this.path_ = o, this.query_ = s, this.fragment_ = r, this.paramCache_ = null
                        }

                        function h(t) {
                            return "string" == typeof t && t.length > 0 ? t : null
                        }
                        var u = RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
                            c = RegExp(u),
                            p = /^(?:\.\.\/)*(?:\.\.$)?/;
                        l.prototype.toString = function () {
                            var t = [];
                            return null !== this.scheme_ && t.push(this.scheme_, ":"), null !== this.domain_ && (t.push("//"), null !== this.credentials_ && t.push(this.credentials_, "@"), t.push(this.domain_), null !== this.port_ && t.push(":", "" + this.port_)), null !== this.path_ && t.push(this.path_), null !== this.query_ && t.push("?", this.query_), null !== this.fragment_ && t.push("#", this.fragment_), t.join("")
                        }, l.prototype.clone = function () {
                            return new l(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                        }, l.prototype.getScheme = function () {
                            return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                        }, l.prototype.getRawScheme = function () {
                            return this.scheme_
                        }, l.prototype.setScheme = function (t) {
                            return this.scheme_ = n(t, m), this
                        }, l.prototype.setRawScheme = function (t) {
                            return this.scheme_ = t ? t : null, this
                        }, l.prototype.hasScheme = function () {
                            return null !== this.scheme_
                        }, l.prototype.getCredentials = function () {
                            return this.credentials_ && decodeURIComponent(this.credentials_)
                        }, l.prototype.getRawCredentials = function () {
                            return this.credentials_
                        }, l.prototype.setCredentials = function (t) {
                            return this.credentials_ = n(t, m), this
                        }, l.prototype.setRawCredentials = function (t) {
                            return this.credentials_ = t ? t : null, this
                        }, l.prototype.hasCredentials = function () {
                            return null !== this.credentials_
                        }, l.prototype.getDomain = function () {
                            return this.domain_ && decodeURIComponent(this.domain_)
                        }, l.prototype.getRawDomain = function () {
                            return this.domain_
                        }, l.prototype.setDomain = function (t) {
                            return this.setRawDomain(t && encodeURIComponent(t))
                        }, l.prototype.setRawDomain = function (t) {
                            return this.domain_ = t ? t : null, this.setRawPath(this.path_)
                        }, l.prototype.hasDomain = function () {
                            return null !== this.domain_
                        }, l.prototype.getPort = function () {
                            return this.port_ && decodeURIComponent(this.port_)
                        }, l.prototype.setPort = function (t) {
                            if (t) {
                                if (t = Number(t), t !== (65535 & t)) throw Error("Bad port number " + t);
                                this.port_ = "" + t
                            } else this.port_ = null;
                            return this
                        }, l.prototype.hasPort = function () {
                            return null !== this.port_
                        }, l.prototype.getPath = function () {
                            return this.path_ && decodeURIComponent(this.path_)
                        }, l.prototype.getRawPath = function () {
                            return this.path_
                        }, l.prototype.setPath = function (t) {
                            return this.setRawPath(n(t, f))
                        }, l.prototype.setRawPath = function (t) {
                            return t ? (t += "", this.path_ = !this.domain_ || /^\//.test(t) ? t : "/" + t) : this.path_ = null, this
                        }, l.prototype.hasPath = function () {
                            return null !== this.path_
                        }, l.prototype.getQuery = function () {
                            return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                        }, l.prototype.getRawQuery = function () {
                            return this.query_
                        }, l.prototype.setQuery = function (t) {
                            return this.paramCache_ = null, this.query_ = i(t), this
                        }, l.prototype.setRawQuery = function (t) {
                            return this.paramCache_ = null, this.query_ = t ? t : null, this
                        }, l.prototype.hasQuery = function () {
                            return null !== this.query_
                        }, l.prototype.setAllParameters = function (t) {
                            if ("object" == typeof t && !(t instanceof Array) && (t instanceof Object || "[object Array]" !== Object.prototype.toString.call(t))) {
                                var e = [],
                                    i = -1;
                                for (var n in t) {
                                    var o = t[n];
                                    "string" == typeof o && (e[++i] = n, e[++i] = o)
                                }
                                t = e
                            }
                            this.paramCache_ = null;
                            for (var s = [], r = "", a = 0; t.length > a;) {
                                var n = t[a++],
                                    o = t[a++];
                                s.push(r, encodeURIComponent("" + n)), r = "&", o && s.push("=", encodeURIComponent("" + o))
                            }
                            return this.query_ = s.join(""), this
                        }, l.prototype.checkParameterCache_ = function () {
                            if (!this.paramCache_) {
                                var t = this.query_;
                                if (t) {
                                    for (var e = t.split(/[&\?]/), i = [], n = -1, o = 0; e.length > o; ++o) {
                                        var s = e[o].match(/^([^=]*)(?:=(.*))?$/);
                                        i[++n] = decodeURIComponent(s[1]).replace(/\+/g, " "), i[++n] = decodeURIComponent(s[2] || "").replace(/\+/g, " ")
                                    }
                                    this.paramCache_ = i
                                } else this.paramCache_ = []
                            }
                        }, l.prototype.setParameterValues = function (t, e) {
                            "string" == typeof e && (e = [e]), this.checkParameterCache_();
                            for (var i = 0, n = this.paramCache_, o = [], s = 0; n.length > s; s += 2) t === n[s] ? e.length > i && o.push(t, e[i++]) : o.push(n[s], n[s + 1]);
                            for (; e.length > i;) o.push(t, e[i++]);
                            return this.setAllParameters(o), this
                        }, l.prototype.removeParameter = function (t) {
                            return this.setParameterValues(t, [])
                        }, l.prototype.getAllParameters = function () {
                            return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                        }, l.prototype.getParameterValues = function (t) {
                            this.checkParameterCache_();
                            for (var e = [], i = 0; this.paramCache_.length > i; i += 2) t === this.paramCache_[i] && e.push(this.paramCache_[i + 1]);
                            return e
                        }, l.prototype.getParameterMap = function () {
                            this.checkParameterCache_();
                            for (var t = {}, e = 0; this.paramCache_.length > e; e += 2) {
                                var i = this.paramCache_[e++],
                                    n = this.paramCache_[e++];
                                i in t ? t[i].push(n) : t[i] = [n]
                            }
                            return t
                        }, l.prototype.getParameterValue = function (t) {
                            this.checkParameterCache_();
                            for (var e = 0; this.paramCache_.length > e; e += 2)
                                if (t === this.paramCache_[e]) return this.paramCache_[e + 1];
                            return null
                        }, l.prototype.getFragment = function () {
                            return this.fragment_ && decodeURIComponent(this.fragment_)
                        }, l.prototype.getRawFragment = function () {
                            return this.fragment_
                        }, l.prototype.setFragment = function (t) {
                            return this.fragment_ = t ? encodeURIComponent(t) : null, this
                        }, l.prototype.setRawFragment = function (t) {
                            return this.fragment_ = t ? t : null, this
                        }, l.prototype.hasFragment = function () {
                            return null !== this.fragment_
                        };
                        var d = RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                            m = /[#\/\?@]/g,
                            f = /[\#\?]/g;
                        return l.parse = t, l.create = e, l.resolve = a, l.collapse_dots = r, l.utils = {
                            mimeTypeOf: function (e) {
                                var i = t(e);
                                return /\.html$/.test(i.getPath()) ? "text/html" : "application/javascript"
                            },
                            resolve: function (e, i) {
                                return e ? "" + a(t(e), t(i)) : "" + i
                            }
                        }, l
                    }();
                    "undefined" != typeof window && (window.URI = t);
                    var i = {};
                    if (i.atype = {
                        NONE: 0,
                        URI: 1,
                        URI_FRAGMENT: 11,
                        SCRIPT: 2,
                        STYLE: 3,
                        HTML: 12,
                        ID: 4,
                        IDREF: 5,
                        IDREFS: 6,
                        GLOBAL_NAME: 7,
                        LOCAL_NAME: 8,
                        CLASSES: 9,
                        FRAME_TARGET: 10,
                        MEDIA_QUERY: 13
                    }, i.atype = i.atype, i.ATTRIBS = {
                        "*::class": 9,
                        "*::dir": 0,
                        "*::draggable": 0,
                        "*::hidden": 0,
                        "*::id": 4,
                        "*::inert": 0,
                        "*::itemprop": 0,
                        "*::itemref": 6,
                        "*::itemscope": 0,
                        "*::lang": 0,
                        "*::onblur": 2,
                        "*::onchange": 2,
                        "*::onclick": 2,
                        "*::ondblclick": 2,
                        "*::onfocus": 2,
                        "*::onkeydown": 2,
                        "*::onkeypress": 2,
                        "*::onkeyup": 2,
                        "*::onload": 2,
                        "*::onmousedown": 2,
                        "*::onmousemove": 2,
                        "*::onmouseout": 2,
                        "*::onmouseover": 2,
                        "*::onmouseup": 2,
                        "*::onreset": 2,
                        "*::onscroll": 2,
                        "*::onselect": 2,
                        "*::onsubmit": 2,
                        "*::onunload": 2,
                        "*::spellcheck": 0,
                        "*::style": 3,
                        "*::title": 0,
                        "*::translate": 0,
                        "a::accesskey": 0,
                        "a::coords": 0,
                        "a::href": 1,
                        "a::hreflang": 0,
                        "a::name": 7,
                        "a::onblur": 2,
                        "a::onfocus": 2,
                        "a::shape": 0,
                        "a::tabindex": 0,
                        "a::target": 10,
                        "a::type": 0,
                        "area::accesskey": 0,
                        "area::alt": 0,
                        "area::coords": 0,
                        "area::href": 1,
                        "area::nohref": 0,
                        "area::onblur": 2,
                        "area::onfocus": 2,
                        "area::shape": 0,
                        "area::tabindex": 0,
                        "area::target": 10,
                        "audio::controls": 0,
                        "audio::loop": 0,
                        "audio::mediagroup": 5,
                        "audio::muted": 0,
                        "audio::preload": 0,
                        "bdo::dir": 0,
                        "blockquote::cite": 1,
                        "br::clear": 0,
                        "button::accesskey": 0,
                        "button::disabled": 0,
                        "button::name": 8,
                        "button::onblur": 2,
                        "button::onfocus": 2,
                        "button::tabindex": 0,
                        "button::type": 0,
                        "button::value": 0,
                        "canvas::height": 0,
                        "canvas::width": 0,
                        "caption::align": 0,
                        "col::align": 0,
                        "col::char": 0,
                        "col::charoff": 0,
                        "col::span": 0,
                        "col::valign": 0,
                        "col::width": 0,
                        "colgroup::align": 0,
                        "colgroup::char": 0,
                        "colgroup::charoff": 0,
                        "colgroup::span": 0,
                        "colgroup::valign": 0,
                        "colgroup::width": 0,
                        "command::checked": 0,
                        "command::command": 5,
                        "command::disabled": 0,
                        "command::icon": 1,
                        "command::label": 0,
                        "command::radiogroup": 0,
                        "command::type": 0,
                        "data::value": 0,
                        "del::cite": 1,
                        "del::datetime": 0,
                        "details::open": 0,
                        "dir::compact": 0,
                        "div::align": 0,
                        "dl::compact": 0,
                        "fieldset::disabled": 0,
                        "font::color": 0,
                        "font::face": 0,
                        "font::size": 0,
                        "form::accept": 0,
                        "form::action": 1,
                        "form::autocomplete": 0,
                        "form::enctype": 0,
                        "form::method": 0,
                        "form::name": 7,
                        "form::novalidate": 0,
                        "form::onreset": 2,
                        "form::onsubmit": 2,
                        "form::target": 10,
                        "h1::align": 0,
                        "h2::align": 0,
                        "h3::align": 0,
                        "h4::align": 0,
                        "h5::align": 0,
                        "h6::align": 0,
                        "hr::align": 0,
                        "hr::noshade": 0,
                        "hr::size": 0,
                        "hr::width": 0,
                        "iframe::align": 0,
                        "iframe::frameborder": 0,
                        "iframe::height": 0,
                        "iframe::marginheight": 0,
                        "iframe::marginwidth": 0,
                        "iframe::width": 0,
                        "img::align": 0,
                        "img::alt": 0,
                        "img::border": 0,
                        "img::height": 0,
                        "img::hspace": 0,
                        "img::ismap": 0,
                        "img::name": 7,
                        "img::src": 1,
                        "img::usemap": 11,
                        "img::vspace": 0,
                        "img::width": 0,
                        "input::accept": 0,
                        "input::accesskey": 0,
                        "input::align": 0,
                        "input::alt": 0,
                        "input::autocomplete": 0,
                        "input::checked": 0,
                        "input::disabled": 0,
                        "input::inputmode": 0,
                        "input::ismap": 0,
                        "input::list": 5,
                        "input::max": 0,
                        "input::maxlength": 0,
                        "input::min": 0,
                        "input::multiple": 0,
                        "input::name": 8,
                        "input::onblur": 2,
                        "input::onchange": 2,
                        "input::onfocus": 2,
                        "input::onselect": 2,
                        "input::placeholder": 0,
                        "input::readonly": 0,
                        "input::required": 0,
                        "input::size": 0,
                        "input::src": 1,
                        "input::step": 0,
                        "input::tabindex": 0,
                        "input::type": 0,
                        "input::usemap": 11,
                        "input::value": 0,
                        "ins::cite": 1,
                        "ins::datetime": 0,
                        "label::accesskey": 0,
                        "label::for": 5,
                        "label::onblur": 2,
                        "label::onfocus": 2,
                        "legend::accesskey": 0,
                        "legend::align": 0,
                        "li::type": 0,
                        "li::value": 0,
                        "map::name": 7,
                        "menu::compact": 0,
                        "menu::label": 0,
                        "menu::type": 0,
                        "meter::high": 0,
                        "meter::low": 0,
                        "meter::max": 0,
                        "meter::min": 0,
                        "meter::value": 0,
                        "ol::compact": 0,
                        "ol::reversed": 0,
                        "ol::start": 0,
                        "ol::type": 0,
                        "optgroup::disabled": 0,
                        "optgroup::label": 0,
                        "option::disabled": 0,
                        "option::label": 0,
                        "option::selected": 0,
                        "option::value": 0,
                        "output::for": 6,
                        "output::name": 8,
                        "p::align": 0,
                        "pre::width": 0,
                        "progress::max": 0,
                        "progress::min": 0,
                        "progress::value": 0,
                        "q::cite": 1,
                        "select::autocomplete": 0,
                        "select::disabled": 0,
                        "select::multiple": 0,
                        "select::name": 8,
                        "select::onblur": 2,
                        "select::onchange": 2,
                        "select::onfocus": 2,
                        "select::required": 0,
                        "select::size": 0,
                        "select::tabindex": 0,
                        "source::type": 0,
                        "table::align": 0,
                        "table::bgcolor": 0,
                        "table::border": 0,
                        "table::cellpadding": 0,
                        "table::cellspacing": 0,
                        "table::frame": 0,
                        "table::rules": 0,
                        "table::summary": 0,
                        "table::width": 0,
                        "tbody::align": 0,
                        "tbody::char": 0,
                        "tbody::charoff": 0,
                        "tbody::valign": 0,
                        "td::abbr": 0,
                        "td::align": 0,
                        "td::axis": 0,
                        "td::bgcolor": 0,
                        "td::char": 0,
                        "td::charoff": 0,
                        "td::colspan": 0,
                        "td::headers": 6,
                        "td::height": 0,
                        "td::nowrap": 0,
                        "td::rowspan": 0,
                        "td::scope": 0,
                        "td::valign": 0,
                        "td::width": 0,
                        "textarea::accesskey": 0,
                        "textarea::autocomplete": 0,
                        "textarea::cols": 0,
                        "textarea::disabled": 0,
                        "textarea::inputmode": 0,
                        "textarea::name": 8,
                        "textarea::onblur": 2,
                        "textarea::onchange": 2,
                        "textarea::onfocus": 2,
                        "textarea::onselect": 2,
                        "textarea::placeholder": 0,
                        "textarea::readonly": 0,
                        "textarea::required": 0,
                        "textarea::rows": 0,
                        "textarea::tabindex": 0,
                        "textarea::wrap": 0,
                        "tfoot::align": 0,
                        "tfoot::char": 0,
                        "tfoot::charoff": 0,
                        "tfoot::valign": 0,
                        "th::abbr": 0,
                        "th::align": 0,
                        "th::axis": 0,
                        "th::bgcolor": 0,
                        "th::char": 0,
                        "th::charoff": 0,
                        "th::colspan": 0,
                        "th::headers": 6,
                        "th::height": 0,
                        "th::nowrap": 0,
                        "th::rowspan": 0,
                        "th::scope": 0,
                        "th::valign": 0,
                        "th::width": 0,
                        "thead::align": 0,
                        "thead::char": 0,
                        "thead::charoff": 0,
                        "thead::valign": 0,
                        "tr::align": 0,
                        "tr::bgcolor": 0,
                        "tr::char": 0,
                        "tr::charoff": 0,
                        "tr::valign": 0,
                        "track::default": 0,
                        "track::kind": 0,
                        "track::label": 0,
                        "track::srclang": 0,
                        "ul::compact": 0,
                        "ul::type": 0,
                        "video::controls": 0,
                        "video::height": 0,
                        "video::loop": 0,
                        "video::mediagroup": 5,
                        "video::muted": 0,
                        "video::poster": 1,
                        "video::preload": 0,
                        "video::width": 0
                    }, i.ATTRIBS = i.ATTRIBS, i.eflags = {
                        OPTIONAL_ENDTAG: 1,
                        EMPTY: 2,
                        CDATA: 4,
                        RCDATA: 8,
                        UNSAFE: 16,
                        FOLDABLE: 32,
                        SCRIPT: 64,
                        STYLE: 128,
                        VIRTUALIZED: 256
                    }, i.eflags = i.eflags, i.ELEMENTS = {
                        a: 0,
                        abbr: 0,
                        acronym: 0,
                        address: 0,
                        applet: 272,
                        area: 2,
                        article: 0,
                        aside: 0,
                        audio: 0,
                        b: 0,
                        base: 274,
                        basefont: 274,
                        bdi: 0,
                        bdo: 0,
                        big: 0,
                        blockquote: 0,
                        body: 305,
                        br: 2,
                        button: 0,
                        canvas: 0,
                        caption: 0,
                        center: 0,
                        cite: 0,
                        code: 0,
                        col: 2,
                        colgroup: 1,
                        command: 2,
                        data: 0,
                        datalist: 0,
                        dd: 1,
                        del: 0,
                        details: 0,
                        dfn: 0,
                        dialog: 272,
                        dir: 0,
                        div: 0,
                        dl: 0,
                        dt: 1,
                        em: 0,
                        fieldset: 0,
                        figcaption: 0,
                        figure: 0,
                        font: 0,
                        footer: 0,
                        form: 0,
                        frame: 274,
                        frameset: 272,
                        h1: 0,
                        h2: 0,
                        h3: 0,
                        h4: 0,
                        h5: 0,
                        h6: 0,
                        head: 305,
                        header: 0,
                        hgroup: 0,
                        hr: 2,
                        html: 305,
                        i: 0,
                        iframe: 4,
                        img: 2,
                        input: 2,
                        ins: 0,
                        isindex: 274,
                        kbd: 0,
                        keygen: 274,
                        label: 0,
                        legend: 0,
                        li: 1,
                        link: 274,
                        map: 0,
                        mark: 0,
                        menu: 0,
                        meta: 274,
                        meter: 0,
                        nav: 0,
                        nobr: 0,
                        noembed: 276,
                        noframes: 276,
                        noscript: 276,
                        object: 272,
                        ol: 0,
                        optgroup: 0,
                        option: 1,
                        output: 0,
                        p: 1,
                        param: 274,
                        pre: 0,
                        progress: 0,
                        q: 0,
                        s: 0,
                        samp: 0,
                        script: 84,
                        section: 0,
                        select: 0,
                        small: 0,
                        source: 2,
                        span: 0,
                        strike: 0,
                        strong: 0,
                        style: 148,
                        sub: 0,
                        summary: 0,
                        sup: 0,
                        table: 0,
                        tbody: 1,
                        td: 1,
                        textarea: 8,
                        tfoot: 1,
                        th: 1,
                        thead: 1,
                        time: 0,
                        title: 280,
                        tr: 1,
                        track: 2,
                        tt: 0,
                        u: 0,
                        ul: 0,
                        "var": 0,
                        video: 0,
                        wbr: 2
                    }, i.ELEMENTS = i.ELEMENTS, i.ELEMENT_DOM_INTERFACES = {
                        a: "HTMLAnchorElement",
                        abbr: "HTMLElement",
                        acronym: "HTMLElement",
                        address: "HTMLElement",
                        applet: "HTMLAppletElement",
                        area: "HTMLAreaElement",
                        article: "HTMLElement",
                        aside: "HTMLElement",
                        audio: "HTMLAudioElement",
                        b: "HTMLElement",
                        base: "HTMLBaseElement",
                        basefont: "HTMLBaseFontElement",
                        bdi: "HTMLElement",
                        bdo: "HTMLElement",
                        big: "HTMLElement",
                        blockquote: "HTMLQuoteElement",
                        body: "HTMLBodyElement",
                        br: "HTMLBRElement",
                        button: "HTMLButtonElement",
                        canvas: "HTMLCanvasElement",
                        caption: "HTMLTableCaptionElement",
                        center: "HTMLElement",
                        cite: "HTMLElement",
                        code: "HTMLElement",
                        col: "HTMLTableColElement",
                        colgroup: "HTMLTableColElement",
                        command: "HTMLCommandElement",
                        data: "HTMLElement",
                        datalist: "HTMLDataListElement",
                        dd: "HTMLElement",
                        del: "HTMLModElement",
                        details: "HTMLDetailsElement",
                        dfn: "HTMLElement",
                        dialog: "HTMLDialogElement",
                        dir: "HTMLDirectoryElement",
                        div: "HTMLDivElement",
                        dl: "HTMLDListElement",
                        dt: "HTMLElement",
                        em: "HTMLElement",
                        fieldset: "HTMLFieldSetElement",
                        figcaption: "HTMLElement",
                        figure: "HTMLElement",
                        font: "HTMLFontElement",
                        footer: "HTMLElement",
                        form: "HTMLFormElement",
                        frame: "HTMLFrameElement",
                        frameset: "HTMLFrameSetElement",
                        h1: "HTMLHeadingElement",
                        h2: "HTMLHeadingElement",
                        h3: "HTMLHeadingElement",
                        h4: "HTMLHeadingElement",
                        h5: "HTMLHeadingElement",
                        h6: "HTMLHeadingElement",
                        head: "HTMLHeadElement",
                        header: "HTMLElement",
                        hgroup: "HTMLElement",
                        hr: "HTMLHRElement",
                        html: "HTMLHtmlElement",
                        i: "HTMLElement",
                        iframe: "HTMLIFrameElement",
                        img: "HTMLImageElement",
                        input: "HTMLInputElement",
                        ins: "HTMLModElement",
                        isindex: "HTMLUnknownElement",
                        kbd: "HTMLElement",
                        keygen: "HTMLKeygenElement",
                        label: "HTMLLabelElement",
                        legend: "HTMLLegendElement",
                        li: "HTMLLIElement",
                        link: "HTMLLinkElement",
                        map: "HTMLMapElement",
                        mark: "HTMLElement",
                        menu: "HTMLMenuElement",
                        meta: "HTMLMetaElement",
                        meter: "HTMLMeterElement",
                        nav: "HTMLElement",
                        nobr: "HTMLElement",
                        noembed: "HTMLElement",
                        noframes: "HTMLElement",
                        noscript: "HTMLElement",
                        object: "HTMLObjectElement",
                        ol: "HTMLOListElement",
                        optgroup: "HTMLOptGroupElement",
                        option: "HTMLOptionElement",
                        output: "HTMLOutputElement",
                        p: "HTMLParagraphElement",
                        param: "HTMLParamElement",
                        pre: "HTMLPreElement",
                        progress: "HTMLProgressElement",
                        q: "HTMLQuoteElement",
                        s: "HTMLElement",
                        samp: "HTMLElement",
                        script: "HTMLScriptElement",
                        section: "HTMLElement",
                        select: "HTMLSelectElement",
                        small: "HTMLElement",
                        source: "HTMLSourceElement",
                        span: "HTMLSpanElement",
                        strike: "HTMLElement",
                        strong: "HTMLElement",
                        style: "HTMLStyleElement",
                        sub: "HTMLElement",
                        summary: "HTMLElement",
                        sup: "HTMLElement",
                        table: "HTMLTableElement",
                        tbody: "HTMLTableSectionElement",
                        td: "HTMLTableDataCellElement",
                        textarea: "HTMLTextAreaElement",
                        tfoot: "HTMLTableSectionElement",
                        th: "HTMLTableHeaderCellElement",
                        thead: "HTMLTableSectionElement",
                        time: "HTMLTimeElement",
                        title: "HTMLTitleElement",
                        tr: "HTMLTableRowElement",
                        track: "HTMLTrackElement",
                        tt: "HTMLElement",
                        u: "HTMLElement",
                        ul: "HTMLUListElement",
                        "var": "HTMLElement",
                        video: "HTMLVideoElement",
                        wbr: "HTMLElement"
                    }, i.ELEMENT_DOM_INTERFACES = i.ELEMENT_DOM_INTERFACES, i.ueffects = {
                        NOT_LOADED: 0,
                        SAME_DOCUMENT: 1,
                        NEW_DOCUMENT: 2
                    }, i.ueffects = i.ueffects, i.URIEFFECTS = {
                        "a::href": 2,
                        "area::href": 2,
                        "blockquote::cite": 0,
                        "command::icon": 1,
                        "del::cite": 0,
                        "form::action": 2,
                        "img::src": 1,
                        "input::src": 1,
                        "ins::cite": 0,
                        "q::cite": 0,
                        "video::poster": 1
                    }, i.URIEFFECTS = i.URIEFFECTS, i.ltypes = {
                        UNSANDBOXED: 2,
                        SANDBOXED: 1,
                        DATA: 0
                    }, i.ltypes = i.ltypes, i.LOADERTYPES = {
                        "a::href": 2,
                        "area::href": 2,
                        "blockquote::cite": 2,
                        "command::icon": 1,
                        "del::cite": 2,
                        "form::action": 2,
                        "img::src": 1,
                        "input::src": 1,
                        "ins::cite": 2,
                        "q::cite": 2,
                        "video::poster": 1
                    }, i.LOADERTYPES = i.LOADERTYPES, "undefined" != typeof window && (window.html4 = i), "i" !== "I".toLowerCase()) throw "I/i problem";
                    var n = function (e) {
                        function i(t) {
                            if (k.hasOwnProperty(t)) return k[t];
                            var e = t.match(A);
                            if (e) return String.fromCharCode(parseInt(e[1], 10));
                            if (e = t.match(U)) return String.fromCharCode(parseInt(e[1], 16));
                            if (I && O.test(t)) {
                                I.innerHTML = "&" + t + ";";
                                var i = I.textContent;
                                return k[t] = i, i
                            }
                            return "&" + t + ";"
                        }

                        function n(t, e) {
                            return i(e)
                        }

                        function o(t) {
                            return t.replace(R, "")
                        }

                        function s(t) {
                            return t.replace(B, n)
                        }

                        function r(t) {
                            return ("" + t).replace(N, "&amp;").replace(j, "&lt;").replace(Z, "&gt;").replace(F, "&#34;")
                        }

                        function a(t) {
                            return t.replace(H, "&amp;$1").replace(j, "&lt;").replace(Z, "&gt;")
                        }

                        function l(t) {
                            var e = {
                                cdata: t.cdata || t.cdata,
                                comment: t.comment || t.comment,
                                endDoc: t.endDoc || t.endDoc,
                                endTag: t.endTag || t.endTag,
                                pcdata: t.pcdata || t.pcdata,
                                rcdata: t.rcdata || t.rcdata,
                                startDoc: t.startDoc || t.startDoc,
                                startTag: t.startTag || t.startTag
                            };
                            return function (t, i) {
                                return h(t, e, i)
                            }
                        }

                        function h(t, e, i) {
                            var n = p(t),
                                o = {
                                    noMoreGT: !1,
                                    noMoreEndComments: !1
                                };
                            c(e, n, 0, o, i)
                        }

                        function u(t, e, i, n, o) {
                            return function () {
                                c(t, e, i, n, o)
                            }
                        }

                        function c(t, i, n, o, s) {
                            try {
                                t.startDoc && 0 == n && t.startDoc(s);
                                for (var r, a, l, h = n, c = i.length; c > h;) {
                                    var p = i[h++],
                                        _ = i[h];
                                    switch (p) {
                                    case "&":
                                        z.test(_) ? (t.pcdata && t.pcdata("&" + _, s, V, u(t, i, h, o, s)), h++) : t.pcdata && t.pcdata("&amp;", s, V, u(t, i, h, o, s));
                                        break;
                                    case "</":
                                        (r = /^([-\w:]+)[^\'\"]*/.exec(_)) ? r[0].length === _.length && ">" === i[h + 1] ? (h += 2, l = r[1].toLowerCase(), t.endTag && t.endTag(l, s, V, u(t, i, h, o, s))) : h = d(i, h, t, s, V, o) : t.pcdata && t.pcdata("&lt;/", s, V, u(t, i, h, o, s));
                                        break;
                                    case "<":
                                        if (r = /^([-\w:]+)\s*\/?/.exec(_))
                                            if (r[0].length === _.length && ">" === i[h + 1]) {
                                                h += 2, l = r[1].toLowerCase(), t.startTag && t.startTag(l, [], s, V, u(t, i, h, o, s));
                                                var g = e.ELEMENTS[l];
                                                if (g & q) {
                                                    var v = {
                                                        name: l,
                                                        next: h,
                                                        eflags: g
                                                    };
                                                    h = f(i, v, t, s, V, o)
                                                }
                                            } else h = m(i, h, t, s, V, o);
                                            else t.pcdata && t.pcdata("&lt;", s, V, u(t, i, h, o, s));
                                        break;
                                    case "<!--":
                                        if (!o.noMoreEndComments) {
                                            for (a = h + 1; c > a && (">" !== i[a] || !/--$/.test(i[a - 1])); a++);
                                            if (c > a) {
                                                if (t.comment) {
                                                    var y = i.slice(h, a).join("");
                                                    t.comment(y.substr(0, y.length - 2), s, V, u(t, i, a + 1, o, s))
                                                }
                                                h = a + 1
                                            } else o.noMoreEndComments = !0
                                        }
                                        o.noMoreEndComments && t.pcdata && t.pcdata("&lt;!--", s, V, u(t, i, h, o, s));
                                        break;
                                    case "<!":
                                        if (/^\w/.test(_)) {
                                            if (!o.noMoreGT) {
                                                for (a = h + 1; c > a && ">" !== i[a]; a++);
                                                c > a ? h = a + 1 : o.noMoreGT = !0
                                            }
                                            o.noMoreGT && t.pcdata && t.pcdata("&lt;!", s, V, u(t, i, h, o, s))
                                        } else t.pcdata && t.pcdata("&lt;!", s, V, u(t, i, h, o, s));
                                        break;
                                    case "<?":
                                        if (!o.noMoreGT) {
                                            for (a = h + 1; c > a && ">" !== i[a]; a++);
                                            c > a ? h = a + 1 : o.noMoreGT = !0
                                        }
                                        o.noMoreGT && t.pcdata && t.pcdata("&lt;?", s, V, u(t, i, h, o, s));
                                        break;
                                    case ">":
                                        t.pcdata && t.pcdata("&gt;", s, V, u(t, i, h, o, s));
                                        break;
                                    case "":
                                        break;
                                    default:
                                        t.pcdata && t.pcdata(p, s, V, u(t, i, h, o, s))
                                    }
                                }
                                t.endDoc && t.endDoc(s)
                            } catch (L) {
                                if (L !== V) throw L
                            }
                        }

                        function p(t) {
                            var e = /(<\/|<\!--|<[!?]|[&<>])/g;
                            if (t += "", G) return t.split(e);
                            for (var i, n = [], o = 0; null !== (i = e.exec(t));) n.push(t.substring(o, i.index)), n.push(i[0]), o = i.index + i[0].length;
                            return n.push(t.substring(o)), n
                        }

                        function d(t, e, i, n, o, s) {
                            var r = _(t, e);
                            return r ? (i.endTag && i.endTag(r.name, n, o, u(i, t, e, s, n)), r.next) : t.length
                        }

                        function m(t, e, i, n, o, s) {
                            var r = _(t, e);
                            return r ? (i.startTag && i.startTag(r.name, r.attrs, n, o, u(i, t, r.next, s, n)), r.eflags & q ? f(t, r, i, n, o, s) : r.next) : t.length
                        }

                        function f(t, i, n, o, s, r) {
                            var l = t.length;
                            J.hasOwnProperty(i.name) || (J[i.name] = RegExp("^" + i.name + "(?:[\\s\\/]|$)", "i"));
                            for (var h = J[i.name], c = i.next, p = i.next + 1; l > p && ("</" !== t[p - 1] || !h.test(t[p])); p++);
                            l > p && (p -= 1);
                            var d = t.slice(c, p).join("");
                            if (i.eflags & e.eflags.CDATA) n.cdata && n.cdata(d, o, s, u(n, t, p, r, o));
                            else {
                                if (!(i.eflags & e.eflags.RCDATA)) throw Error("bug");
                                n.rcdata && n.rcdata(a(d), o, s, u(n, t, p, r, o))
                            }
                            return p
                        }

                        function _(t, i) {
                            var n = /^([-\w:]+)/.exec(t[i]),
                                o = {};
                            o.name = n[1].toLowerCase(), o.eflags = e.ELEMENTS[o.name];
                            for (var s = t[i].substr(n[0].length), r = i + 1, a = t.length; a > r && ">" !== t[r]; r++) s += t[r];
                            if (r >= a) return void 0;
                            for (var l = [];
                                "" !== s;)
                                if (n = W.exec(s)) {
                                    if (n[4] && !n[5] || n[6] && !n[7]) {
                                        for (var h = n[4] || n[6], u = !1, c = [s, t[r++]]; a > r; r++) {
                                            if (u) {
                                                if (">" === t[r]) break
                                            } else t[r].indexOf(h) >= 0 && (u = !0);
                                            c.push(t[r])
                                        }
                                        if (r >= a) break;
                                        s = c.join("");
                                        continue
                                    }
                                    var p = n[1].toLowerCase(),
                                        d = n[2] ? g(n[3]) : "";
                                    l.push(p, d), s = s.substr(n[0].length)
                                } else s = s.replace(/^[\s\S][^a-z\s]*/, "");
                            return o.attrs = l, o.next = r + 1, o
                        }

                        function g(t) {
                            var e = t.charCodeAt(0);
                            return (34 === e || 39 === e) && (t = t.substr(1, t.length - 2)), s(o(t))
                        }

                        function v(t) {
                            var i, n, o = function (t, e) {
                                    n || e.push(t)
                                };
                            return l({
                                startDoc: function () {
                                    i = [], n = !1
                                },
                                startTag: function (o, s, a) {
                                    if (!n && e.ELEMENTS.hasOwnProperty(o)) {
                                        var l = e.ELEMENTS[o];
                                        if (!(l & e.eflags.FOLDABLE)) {
                                            var h = t(o, s);
                                            if (!h) return n = !(l & e.eflags.EMPTY), void 0;
                                            if ("object" != typeof h) throw Error("tagPolicy did not return object (old API?)");
                                            if (!("attribs" in h)) throw Error("tagPolicy gave no attribs");
                                            s = h.attribs;
                                            var u, c;
                                            if ("tagName" in h ? (c = h.tagName, u = e.ELEMENTS[c]) : (c = o, u = l), l & e.eflags.OPTIONAL_ENDTAG) {
                                                var p = i[i.length - 1];
                                                !p || p.orig !== o || p.rep === c && o === c || a.push("</", p.rep, ">")
                                            }
                                            l & e.eflags.EMPTY || i.push({
                                                orig: o,
                                                rep: c
                                            }), a.push("<", c);
                                            for (var d = 0, m = s.length; m > d; d += 2) {
                                                var f = s[d],
                                                    _ = s[d + 1];
                                                null !== _ && void 0 !== _ && a.push(" ", f, '="', r(_), '"')
                                            }
                                            a.push(">"), l & e.eflags.EMPTY && !(u & e.eflags.EMPTY) && a.push("</", c, ">")
                                        }
                                    }
                                },
                                endTag: function (t, o) {
                                    if (n) return n = !1, void 0;
                                    if (e.ELEMENTS.hasOwnProperty(t)) {
                                        var s = e.ELEMENTS[t];
                                        if (!(s & (e.eflags.EMPTY | e.eflags.FOLDABLE))) {
                                            var r;
                                            if (s & e.eflags.OPTIONAL_ENDTAG)
                                                for (r = i.length; --r >= 0;) {
                                                    var a = i[r].orig;
                                                    if (a === t) break;
                                                    if (!(e.ELEMENTS[a] & e.eflags.OPTIONAL_ENDTAG)) return
                                                } else
                                                    for (r = i.length; --r >= 0 && i[r].orig !== t;);
                                            if (0 > r) return;
                                            for (var l = i.length; --l > r;) {
                                                var h = i[l].rep;
                                                e.ELEMENTS[h] & e.eflags.OPTIONAL_ENDTAG || o.push("</", h, ">")
                                            }
                                            i.length > r && (t = i[r].rep), i.length = r, o.push("</", t, ">")
                                        }
                                    }
                                },
                                pcdata: o,
                                rcdata: o,
                                cdata: o,
                                endDoc: function (t) {
                                    for (; i.length; i.length--) t.push("</", i[i.length - 1].rep, ">")
                                }
                            })
                        }

                        function y(e, i, n, o, s) {
                            if (!s) return null;
                            try {
                                var r = t.parse("" + e);
                                if (r && (!r.hasScheme() || X.test(r.getScheme()))) {
                                    var a = s(r, i, n, o);
                                    return a ? "" + a : null
                                }
                            } catch (l) {
                                return null
                            }
                            return null
                        }

                        function L(t, e, i, n, o) {
                            if (i || t(e + " removed", {
                                change: "removed",
                                tagName: e
                            }), n !== o) {
                                var s = "changed";
                                n && !o ? s = "removed" : !n && o && (s = "added"), t(e + "." + i + " " + s, {
                                    change: s,
                                    tagName: e,
                                    attribName: i,
                                    oldValue: n,
                                    newValue: o
                                })
                            }
                        }

                        function T(t, e, i) {
                            var n;
                            return n = e + "::" + i, t.hasOwnProperty(n) ? t[n] : (n = "*::" + i, t.hasOwnProperty(n) ? t[n] : void 0)
                        }

                        function P(t, i) {
                            return T(e.LOADERTYPES, t, i)
                        }

                        function b(t, i) {
                            return T(e.URIEFFECTS, t, i)
                        }

                        function E(t, i, n, o, s) {
                            for (var r = 0; i.length > r; r += 2) {
                                var a, l = i[r],
                                    h = i[r + 1],
                                    u = h,
                                    c = null;
                                if (a = t + "::" + l, (e.ATTRIBS.hasOwnProperty(a) || (a = "*::" + l, e.ATTRIBS.hasOwnProperty(a))) && (c = e.ATTRIBS[a]), null !== c) switch (c) {
                                case e.atype.NONE:
                                    break;
                                case e.atype.SCRIPT:
                                    h = null, s && L(s, t, l, u, h);
                                    break;
                                case e.atype.STYLE:
                                    if (C === void 0) {
                                        h = null, s && L(s, t, l, u, h);
                                        break
                                    }
                                    var p = [];
                                    C(h, {
                                        declaration: function (t, i) {
                                            var o = t.toLowerCase(),
                                                s = S[o];
                                            s && (D(o, s, i, n ? function (t) {
                                                return y(t, e.ueffects.SAME_DOCUMENT, e.ltypes.SANDBOXED, {
                                                    TYPE: "CSS",
                                                    CSS_PROP: o
                                                }, n)
                                            } : null), p.push(t + ": " + i.join(" ")))
                                        }
                                    }), h = p.length > 0 ? p.join(" ; ") : null, s && L(s, t, l, u, h);
                                    break;
                                case e.atype.ID:
                                case e.atype.IDREF:
                                case e.atype.IDREFS:
                                case e.atype.GLOBAL_NAME:
                                case e.atype.LOCAL_NAME:
                                case e.atype.CLASSES:
                                    h = o ? o(h) : h, s && L(s, t, l, u, h);
                                    break;
                                case e.atype.URI:
                                    h = y(h, b(t, l), P(t, l), {
                                        TYPE: "MARKUP",
                                        XML_ATTR: l,
                                        XML_TAG: t
                                    }, n), s && L(s, t, l, u, h);
                                    break;
                                case e.atype.URI_FRAGMENT:
                                    h && "#" === h.charAt(0) ? (h = h.substring(1), h = o ? o(h) : h, null !== h && void 0 !== h && (h = "#" + h)) : h = null, s && L(s, t, l, u, h);
                                    break;
                                default:
                                    h = null, s && L(s, t, l, u, h)
                                } else h = null, s && L(s, t, l, u, h);
                                i[r + 1] = h
                            }
                            return i
                        }

                        function w(t, i, n) {
                            return function (o, s) {
                                return e.ELEMENTS[o] & e.eflags.UNSAFE ? (n && L(n, o, void 0, void 0, void 0), void 0) : {
                                    attribs: E(o, s, t, i, n)
                                }
                            }
                        }

                        function x(t, e) {
                            var i = [];
                            return v(e)(t, i), i.join("")
                        }

                        function M(t, e, i, n) {
                            var o = w(e, i, n);
                            return x(t, o)
                        }
                        var C, D, S;
                        "undefined" != typeof window && (C = window.parseCssDeclarations, D = window.sanitizeCssProperty, S = window.cssSchema);
                        var k = {
                            lt: "<",
                            LT: "<",
                            gt: ">",
                            GT: ">",
                            amp: "&",
                            AMP: "&",
                            quot: '"',
                            apos: "'",
                            nbsp: "Â "
                        }, A = /^#(\d+)$/,
                            U = /^#x([0-9A-Fa-f]+)$/,
                            O = /^[A-Za-z][A-za-z0-9]+$/,
                            I = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
                            R = /\0/g,
                            B = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
                            z = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
                            N = /&/g,
                            H = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                            j = /[<]/g,
                            Z = />/g,
                            F = /\"/g,
                            W = RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                            G = 3 === "a,b".split(/(,)/).length,
                            q = e.eflags.CDATA | e.eflags.RCDATA,
                            V = {}, J = {}, X = /^(?:https?|mailto|data)$/i,
                            $ = {};
                        return $.escapeAttrib = $.escapeAttrib = r, $.makeHtmlSanitizer = $.makeHtmlSanitizer = v, $.makeSaxParser = $.makeSaxParser = l, $.makeTagPolicy = $.makeTagPolicy = w, $.normalizeRCData = $.normalizeRCData = a, $.sanitize = $.sanitize = M, $.sanitizeAttribs = $.sanitizeAttribs = E, $.sanitizeWithPolicy = $.sanitizeWithPolicy = x, $.unescapeEntities = $.unescapeEntities = s, $
                    }(i),
                        o = n.sanitize;
                    i.ATTRIBS["*::style"] = 0, i.ELEMENTS.style = 0, i.ATTRIBS["a::target"] = 0, i.ELEMENTS.video = 0, i.ATTRIBS["video::src"] = 0, i.ATTRIBS["video::poster"] = 0, i.ATTRIBS["video::controls"] = 0, i.ELEMENTS.audio = 0, i.ATTRIBS["audio::src"] = 0, i.ATTRIBS["video::autoplay"] = 0, i.ATTRIBS["video::controls"] = 0, "undefined" != typeof window && (window.html = n, window.html_sanitize = o), e !== void 0 && (e.exports = o)
                })()
            }, {}
        ],
        21: [
            function (e, i, n) {
                (function () {
                    (function (e, o) {
                        "object" == typeof n && n ? i.exports = o : "function" == typeof t && t.amd ? t(o) : e.Mustache = o
                    })(this, function () {
                        function t(t, e) {
                            return RegExp.prototype.test.call(t, e)
                        }

                        function e(e) {
                            return !t(m, e)
                        }

                        function i(t) {
                            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                        }

                        function n(t) {
                            return (t + "").replace(/[&<>"'\/]/g, function (t) {
                                return y[t]
                            })
                        }

                        function o(t) {
                            this.string = t, this.tail = t, this.pos = 0
                        }

                        function s(t, e) {
                            this.view = t, this.parent = e, this.clearCache()
                        }

                        function r() {
                            this.clearCache()
                        }

                        function a(t) {
                            function e(t, e, n) {
                                if (!i[t]) {
                                    var o = a(e);
                                    i[t] = function (t, e) {
                                        return o(t, e, n)
                                    }
                                }
                                return i[t]
                            }
                            var i = {};
                            return function (i, n, o) {
                                for (var s, r, a = "", l = 0, h = t.length; h > l; ++l) switch (s = t[l], s[0]) {
                                case "#":
                                    r = o.slice(s[3], s[5]), a += i._section(s[1], n, r, e(l, s[4], o));
                                    break;
                                case "^":
                                    a += i._inverted(s[1], n, e(l, s[4], o));
                                    break;
                                case ">":
                                    a += i._partial(s[1], n);
                                    break;
                                case "&":
                                    a += i._name(s[1], n);
                                    break;
                                case "name":
                                    a += i._escaped(s[1], n);
                                    break;
                                case "text":
                                    a += s[1]
                                }
                                return a
                            }
                        }

                        function l(t) {
                            for (var e, i = [], n = i, o = [], s = 0, r = t.length; r > s; ++s) switch (e = t[s], e[0]) {
                            case "#":
                            case "^":
                                o.push(e), n.push(e), n = e[4] = [];
                                break;
                            case "/":
                                var a = o.pop();
                                a[5] = e[2], n = o.length > 0 ? o[o.length - 1][4] : i;
                                break;
                            default:
                                n.push(e)
                            }
                            return i
                        }

                        function h(t) {
                            for (var e, i, n = [], o = 0, s = t.length; s > o; ++o) e = t[o], "text" === e[0] && i && "text" === i[0] ? (i[1] += e[1], i[3] = e[3]) : (i = e, n.push(e));
                            return n
                        }

                        function u(t) {
                            return [RegExp(i(t[0]) + "\\s*"), RegExp("\\s*" + i(t[1]))]
                        }
                        var c = {};
                        c.name = "mustache.js", c.version = "0.7.2", c.tags = ["{{", "}}"], c.Scanner = o, c.Context = s, c.Writer = r;
                        var p = /\s*/,
                            d = /\s+/,
                            m = /\S/,
                            f = /\s*=/,
                            _ = /\s*\}/,
                            g = /#|\^|\/|>|\{|&|=|!/,
                            v = Array.isArray || function (t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }, y = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#x2F;"
                            };
                        c.escape = n, o.prototype.eos = function () {
                            return "" === this.tail
                        }, o.prototype.scan = function (t) {
                            var e = this.tail.match(t);
                            return e && 0 === e.index ? (this.tail = this.tail.substring(e[0].length), this.pos += e[0].length, e[0]) : ""
                        }, o.prototype.scanUntil = function (t) {
                            var e, i = this.tail.search(t);
                            switch (i) {
                            case -1:
                                e = this.tail, this.pos += this.tail.length, this.tail = "";
                                break;
                            case 0:
                                e = "";
                                break;
                            default:
                                e = this.tail.substring(0, i), this.tail = this.tail.substring(i), this.pos += i
                            }
                            return e
                        }, s.make = function (t) {
                            return t instanceof s ? t : new s(t)
                        }, s.prototype.clearCache = function () {
                            this._cache = {}
                        }, s.prototype.push = function (t) {
                            return new s(t, this)
                        }, s.prototype.lookup = function (t) {
                            var e = this._cache[t];
                            if (!e) {
                                if ("." === t) e = this.view;
                                else
                                    for (var i = this; i;) {
                                        if (t.indexOf(".") > 0) {
                                            var n = t.split("."),
                                                o = 0;
                                            for (e = i.view; e && n.length > o;) e = e[n[o++]]
                                        } else e = i.view[t]; if (null != e) break;
                                        i = i.parent
                                    }
                                this._cache[t] = e
                            }
                            return "function" == typeof e && (e = e.call(this.view)), e
                        }, r.prototype.clearCache = function () {
                            this._cache = {}, this._partialCache = {}
                        }, r.prototype.compile = function (t, e) {
                            var i = this._cache[t];
                            if (!i) {
                                var n = c.parse(t, e);
                                i = this._cache[t] = this.compileTokens(n, t)
                            }
                            return i
                        }, r.prototype.compilePartial = function (t, e, i) {
                            var n = this.compile(e, i);
                            return this._partialCache[t] = n, n
                        }, r.prototype.compileTokens = function (t, e) {
                            var i = a(t),
                                n = this;
                            return function (t, o) {
                                if (o)
                                    if ("function" == typeof o) n._loadPartial = o;
                                    else
                                        for (var r in o) n.compilePartial(r, o[r]);
                                return i(n, s.make(t), e)
                            }
                        }, r.prototype.render = function (t, e, i) {
                            return this.compile(t)(e, i)
                        }, r.prototype._section = function (t, e, i, n) {
                            var o = e.lookup(t);
                            switch (typeof o) {
                            case "object":
                                if (v(o)) {
                                    for (var s = "", r = 0, a = o.length; a > r; ++r) s += n(this, e.push(o[r]));
                                    return s
                                }
                                return o ? n(this, e.push(o)) : "";
                            case "function":
                                var l = this,
                                    h = function (t) {
                                        return l.render(t, e)
                                    }, u = o.call(e.view, i, h);
                                return null != u ? u : "";
                            default:
                                if (o) return n(this, e)
                            }
                            return ""
                        }, r.prototype._inverted = function (t, e, i) {
                            var n = e.lookup(t);
                            return !n || v(n) && 0 === n.length ? i(this, e) : ""
                        }, r.prototype._partial = function (t, e) {
                            t in this._partialCache || !this._loadPartial || this.compilePartial(t, this._loadPartial(t));
                            var i = this._partialCache[t];
                            return i ? i(e) : ""
                        }, r.prototype._name = function (t, e) {
                            var i = e.lookup(t);
                            return "function" == typeof i && (i = i.call(e.view)), null == i ? "" : i + ""
                        }, r.prototype._escaped = function (t, e) {
                            return c.escape(this._name(t, e))
                        }, c.parse = function (t, n) {
                            function s() {
                                if (E && !w)
                                    for (; b.length;) P.splice(b.pop(), 1);
                                else b = [];
                                E = !1, w = !1
                            }
                            if (t = t || "", n = n || c.tags, "string" == typeof n && (n = n.split(d)), 2 !== n.length) throw Error("Invalid tags: " + n.join(", "));
                            for (var r, a, m, v, y = u(n), L = new o(t), T = [], P = [], b = [], E = !1, w = !1; !L.eos();) {
                                if (r = L.pos, m = L.scanUntil(y[0]))
                                    for (var x = 0, M = m.length; M > x; ++x) v = m.charAt(x), e(v) ? b.push(P.length) : w = !0, P.push(["text", v, r, r + 1]), r += 1, "\n" === v && s();
                                if (r = L.pos, !L.scan(y[0])) break;
                                if (E = !0, a = L.scan(g) || "name", L.scan(p), "=" === a) m = L.scanUntil(f), L.scan(f), L.scanUntil(y[1]);
                                else if ("{" === a) {
                                    var C = RegExp("\\s*" + i("}" + n[1]));
                                    m = L.scanUntil(C), L.scan(_), L.scanUntil(y[1]), a = "&"
                                } else m = L.scanUntil(y[1]); if (!L.scan(y[1])) throw Error("Unclosed tag at " + L.pos);
                                if ("/" === a) {
                                    if (0 === T.length) throw Error('Unopened section "' + m + '" at ' + r);
                                    var D = T.pop();
                                    if (D[1] !== m) throw Error('Unclosed section "' + D[1] + '" at ' + r)
                                }
                                var S = [a, m, r, L.pos];
                                if (P.push(S), "#" === a || "^" === a) T.push(S);
                                else if ("name" === a || "{" === a || "&" === a) w = !0;
                                else if ("=" === a) {
                                    if (n = m.split(d), 2 !== n.length) throw Error("Invalid tags at " + r + ": " + n.join(", "));
                                    y = u(n)
                                }
                            }
                            var D = T.pop();
                            if (D) throw Error('Unclosed section "' + D[1] + '" at ' + L.pos);
                            return l(h(P))
                        };
                        var L = new r;
                        return c.clearCache = function () {
                            return L.clearCache()
                        }, c.compile = function (t, e) {
                            return L.compile(t, e)
                        }, c.compilePartial = function (t, e, i) {
                            return L.compilePartial(t, e, i)
                        }, c.compileTokens = function (t, e) {
                            return L.compileTokens(t, e)
                        }, c.render = function (t, e, i) {
                            return L.render(t, e, i)
                        }, c.to_html = function (t, e, i, n) {
                            var o = c.render(t, e, i);
                            return "function" != typeof n ? o : (n(o), void 0)
                        }, c
                    }())
                })()
            }, {}
        ],
        16: [
            function (t, e) {
                "use strict";
                var i = t("corslite"),
                    n = t("json3"),
                    o = t("./util").strict;
                e.exports = function (t, e) {
                    o(t, "string"), o(e, "function"), i(t, function (t, i) {
                        !t && i && (i = "g" == i.responseText[0] ? n.parse(i.responseText.substring(5, i.responseText.length - 2)) : n.parse(i.responseText)), e(t, i)
                    })
                }
            }, {
                "./util": 14,
                corslite: 22,
                json3: 23
            }
        ],
        22: [
            function (t, e) {
                function i(t, e, n) {
                    function o(t) {
                        return t >= 200 && 300 > t || 304 === t
                    }

                    function s() {
                        void 0 === a.status || o(a.status) ? e.call(a, null, a) : e.call(a, a, null)
                    }
                    if (window.XMLHttpRequest === void 0) return e(Error("Browser not supported"));
                    if (n === void 0) {
                        var r = t.match(/^\s*https?:\/\/[^\/]*/);
                        n = r && r[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
                    }
                    var a;
                    return a = !n || "object" != typeof window.XDomainRequest && "function" != typeof window.XDomainRequest ? new window.XMLHttpRequest : new window.XDomainRequest, "onload" in a ? a.onload = s : a.onreadystatechange = function () {
                        4 === a.readyState && s()
                    }, a.onerror = function (t) {
                        e.call(this, t, null), e = function () {}
                    }, a.onprogress = function () {}, a.ontimeout = function (t) {
                        e.call(this, t, null), e = function () {}
                    }, a.onabort = function (t) {
                        e.call(this, t, null), e = function () {}
                    }, a.open("GET", t, !0), a.send(null), i
                }
                e !== void 0 && (e.exports = i)
            }, {}
        ],
        23: [
            function (e, i, n) {
                (function () {
                    function e(t) {
                        var e, i, n, o = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                            a = "json" == t;
                        if (a || "json-stringify" == t || "json-parse" == t) {
                            if ("json-stringify" == t || a) {
                                if (e = "function" == typeof l.stringify && w) {
                                    (n = function () {
                                        return 1
                                    }).toJSON = n;
                                    try {
                                        e = "0" === l.stringify(0) && "0" === l.stringify(new Number) && '""' == l.stringify(new String) && l.stringify(r) === s && l.stringify(s) === s && l.stringify() === s && "1" === l.stringify(n) && "[1]" == l.stringify([n]) && "[null]" == l.stringify([s]) && "null" == l.stringify(null) && "[null,null,null]" == l.stringify([s, r, null]) && l.stringify({
                                            A: [n, !0, !1, null, "\0\b\n\f\r	"]
                                        }) == o && "1" === l.stringify(null, n) && "[\n 1,\n 2\n]" == l.stringify([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l.stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l.stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l.stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l.stringify(new Date(-1))
                                    } catch (h) {
                                        e = !1
                                    }
                                }
                                if (!a) return e
                            }
                            if ("json-parse" == t || a) {
                                if ("function" == typeof l.parse) try {
                                    if (0 === l.parse("0") && !l.parse(!1) && (n = l.parse(o), i = 5 == n.A.length && 1 == n.A[0])) {
                                        try {
                                            i = !l.parse('"	"')
                                        } catch (h) {}
                                        if (i) try {
                                            i = 1 != l.parse("01")
                                        } catch (h) {}
                                    }
                                } catch (h) {
                                    i = !1
                                }
                                if (!a) return i
                            }
                            return e && i
                        }
                    }
                    var i, o, s, r = {}.toString,
                        a = "function" == typeof t && t.amd,
                        l = !a && "object" == typeof n && n;
                    l || a ? "object" == typeof JSON && JSON ? a ? l = JSON : (l.stringify = JSON.stringify, l.parse = JSON.parse) : a && (l = this.JSON = {}) : l = this.JSON || (this.JSON = {});
                    var h, u, c, p, d, m, f, _, g, v, y, L, T, P, b, E, w = new Date(-0xc782b5b800cec);
                    try {
                        w = -109252 == w.getUTCFullYear() && 0 === w.getUTCMonth() && 1 == w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
                    } catch (x) {}
                    e("json") || (w || (P = Math.floor, b = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function (t, e) {
                        return b[e] + 365 * (t - 1970) + P((t - 1969 + (e = +(e > 1))) / 4) - P((t - 1901 + e) / 100) + P((t - 1601 + e) / 400)
                    }), (i = {}.hasOwnProperty) || (i = function (t) {
                        var e, n = {};
                        return (n.__proto__ = null, n.__proto__ = {
                            toString: 1
                        }, n).toString != r ? i = function (t) {
                            var e = this.__proto__,
                                i = (this.__proto__ = null, t in this);
                            return this.__proto__ = e, i
                        } : (e = n.constructor, i = function (t) {
                            var i = (this.constructor || e).prototype;
                            return t in this && !(t in i && this[t] === i[t])
                        }), n = null, i.call(this, t)
                    }), o = function (t, e) {
                        var n, o, s, a, l = 0;
                        (n = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, o = new n;
                        for (s in o) i.call(o, s) && l++;
                        return n = o = null, l ? a = 2 == l ? function (t, e) {
                            var n, o = {}, s = "[object Function]" == r.call(t);
                            for (n in t) s && "prototype" == n || i.call(o, n) || !(o[n] = 1) || !i.call(t, n) || e(n)
                        } : function (t, e) {
                            var n, o, s = "[object Function]" == r.call(t);
                            for (n in t) s && "prototype" == n || !i.call(t, n) || (o = "constructor" === n) || e(n);
                            (o || i.call(t, n = "constructor")) && e(n)
                        } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], a = function (t, e) {
                            var n, s, a = "[object Function]" == r.call(t);
                            for (n in t) a && "prototype" == n || !i.call(t, n) || e(n);
                            for (s = o.length; n = o[--s]; i.call(t, n) && e(n));
                        }), a(t, e)
                    }, e("json-stringify") || (h = {
                        "\\": "\\\\",
                        '"': '\\"',
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "	": "\\t"
                    }, u = function (t, e) {
                        return ("000000" + (e || 0)).slice(-t)
                    }, c = function (t) {
                        for (var e, i = '"', n = 0; e = t.charAt(n); n++) i += '\\"\b\f\n\r	'.indexOf(e) > -1 ? h[e] : h[e] = " " > e ? "\\u00" + u(2, e.charCodeAt(0).toString(16)) : e;
                        return i + '"'
                    }, p = function (t, e, n, a, l, h, d) {
                        var m, f, _, g, v, y, L, T, b, w, x, M, C, D, S, k, A = e[t];
                        if ("object" == typeof A && A)
                            if (m = r.call(A), "[object Date]" != m || i.call(A, "toJSON")) "function" == typeof A.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || i.call(A, "toJSON")) && (A = A.toJSON(t));
                            else if (A > -1 / 0 && 1 / 0 > A) {
                            if (E) {
                                for (g = P(A / 864e5), f = P(g / 365.2425) + 1970 - 1; g >= E(f + 1, 0); f++);
                                for (_ = P((g - E(f, 0)) / 30.42); g >= E(f, _ + 1); _++);
                                g = 1 + g - E(f, _), v = (A % 864e5 + 864e5) % 864e5, y = P(v / 36e5) % 24, L = P(v / 6e4) % 60, T = P(v / 1e3) % 60, b = v % 1e3
                            } else f = A.getUTCFullYear(), _ = A.getUTCMonth(), g = A.getUTCDate(), y = A.getUTCHours(), L = A.getUTCMinutes(), T = A.getUTCSeconds(), b = A.getUTCMilliseconds();
                            A = (0 >= f || f >= 1e4 ? (0 > f ? "-" : "+") + u(6, 0 > f ? -f : f) : u(4, f)) + "-" + u(2, _ + 1) + "-" + u(2, g) + "T" + u(2, y) + ":" + u(2, L) + ":" + u(2, T) + "." + u(3, b) + "Z"
                        } else A = null; if (n && (A = n.call(e, t, A)), null === A) return "null";
                        if (m = r.call(A), "[object Boolean]" == m) return "" + A;
                        if ("[object Number]" == m) return A > -1 / 0 && 1 / 0 > A ? "" + A : "null";
                        if ("[object String]" == m) return c(A);
                        if ("object" == typeof A) {
                            for (C = d.length; C--;)
                                if (d[C] === A) throw TypeError();
                            if (d.push(A), w = [], D = h, h += l, "[object Array]" == m) {
                                for (M = 0, C = A.length; C > M; S || (S = !0), M++) x = p(M, A, n, a, l, h, d), w.push(x === s ? "null" : x);
                                k = S ? l ? "[\n" + h + w.join(",\n" + h) + "\n" + D + "]" : "[" + w.join(",") + "]" : "[]"
                            } else o(a || A, function (t) {
                                var e = p(t, A, n, a, l, h, d);
                                e !== s && w.push(c(t) + ":" + (l ? " " : "") + e), S || (S = !0)
                            }), k = S ? l ? "{\n" + h + w.join(",\n" + h) + "\n" + D + "}" : "{" + w.join(",") + "}" : "{}";
                            return d.pop(), k
                        }
                    }, l.stringify = function (t, e, i) {
                        var n, o, s, a, l, h;
                        if ("function" == typeof e || "object" == typeof e && e)
                            if ("[object Function]" == r.call(e)) o = e;
                            else if ("[object Array]" == r.call(e))
                            for (s = {}, a = 0, l = e.length; l > a; h = e[a++], ("[object String]" == r.call(h) || "[object Number]" == r.call(h)) && (s[h] = 1));
                        if (i)
                            if ("[object Number]" == r.call(i)) {
                                if ((i -= i % 1) > 0)
                                    for (n = "", i > 10 && (i = 10); i > n.length; n += " ");
                            } else "[object String]" == r.call(i) && (n = 10 >= i.length ? i : i.slice(0, 10));
                        return p("", (h = {}, h[""] = t, h), o, s, n, "", [])
                    }), e("json-parse") || (d = String.fromCharCode, m = {
                        "\\": "\\",
                        '"': '"',
                        "/": "/",
                        b: "\b",
                        t: "	",
                        n: "\n",
                        f: "\f",
                        r: "\r"
                    }, f = function () {
                        throw L = T = null, SyntaxError()
                    }, _ = function () {
                        for (var t, e, i, n, o, s = T, r = s.length; r > L;)
                            if (t = s.charAt(L), "	\r\n ".indexOf(t) > -1) L++;
                            else {
                                if ("{}[]:,".indexOf(t) > -1) return L++, t;
                                if ('"' == t) {
                                    for (e = "@", L++; r > L;)
                                        if (t = s.charAt(L), " " > t) f();
                                        else if ("\\" == t)
                                        if (t = s.charAt(++L), '\\"/btnfr'.indexOf(t) > -1) e += m[t], L++;
                                        else if ("u" == t) {
                                        for (i = ++L, n = L + 4; n > L; L++) t = s.charAt(L), t >= "0" && "9" >= t || t >= "a" && "f" >= t || t >= "A" && "F" >= t || f();
                                        e += d("0x" + s.slice(i, L))
                                    } else f();
                                    else {
                                        if ('"' == t) break;
                                        e += t, L++
                                    } if ('"' == s.charAt(L)) return L++, e;
                                    f()
                                } else {
                                    if (i = L, "-" == t && (o = !0, t = s.charAt(++L)), t >= "0" && "9" >= t) {
                                        for ("0" == t && (t = s.charAt(L + 1), t >= "0" && "9" >= t) && f(), o = !1; r > L && (t = s.charAt(L), t >= "0" && "9" >= t); L++);
                                        if ("." == s.charAt(L)) {
                                            for (n = ++L; r > n && (t = s.charAt(n), t >= "0" && "9" >= t); n++);
                                            n == L && f(), L = n
                                        }
                                        if (t = s.charAt(L), "e" == t || "E" == t) {
                                            for (t = s.charAt(++L), ("+" == t || "-" == t) && L++, n = L; r > n && (t = s.charAt(n), t >= "0" && "9" >= t); n++);
                                            n == L && f(), L = n
                                        }
                                        return +s.slice(i, L)
                                    }
                                    if (o && f(), "true" == s.slice(L, L + 4)) return L += 4, !0;
                                    if ("false" == s.slice(L, L + 5)) return L += 5, !1;
                                    if ("null" == s.slice(L, L + 4)) return L += 4, null;
                                    f()
                                }
                            }
                        return "$"
                    }, g = function (t) {
                        var e, i;
                        if ("$" == t && f(), "string" == typeof t) {
                            if ("@" == t.charAt(0)) return t.slice(1);
                            if ("[" == t) {
                                for (e = []; t = _(), "]" != t; i || (i = !0)) i && ("," == t ? (t = _(), "]" == t && f()) : f()), "," == t && f(), e.push(g(t));
                                return e
                            }
                            if ("{" == t) {
                                for (e = {}; t = _(), "}" != t; i || (i = !0)) i && ("," == t ? (t = _(), "}" == t && f()) : f()), ("," == t || "string" != typeof t || "@" != t.charAt(0) || ":" != _()) && f(), e[t.slice(1)] = g(_());
                                return e
                            }
                            f()
                        }
                        return t
                    }, y = function (t, e, i) {
                        var n = v(t, e, i);
                        n === s ? delete t[e] : t[e] = n
                    }, v = function (t, e, i) {
                        var n, s = t[e];
                        if ("object" == typeof s && s)
                            if ("[object Array]" == r.call(s))
                                for (n = s.length; n--;) y(s, n, i);
                            else o(s, function (t) {
                                y(s, t, i)
                            });
                        return i.call(t, e, s)
                    }, l.parse = function (t, e) {
                        var i, n;
                        return L = 0, T = t, i = g(_()), "$" != _() && f(), L = T = null, e && "[object Function]" == r.call(e) ? v((n = {}, n[""] = i, n), "", e) : i
                    })), a && t(function () {
                        return l
                    })
                }).call(this)
            }, {}
        ]
    }, {}, [1])
})();