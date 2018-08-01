!function(i) {
    function n(e) {
        if (s[e]) return s[e].exports;
        var t = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
    }
    var s = {};
    n.m = i, n.c = s, n.i = function(e) {
        return e;
    }, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 36);
}([ function(e, t) {
    e.exports = jQuery;
}, function(e, t, i) {
    "use strict";
    function n() {
        return "rtl" === r()("html").attr("dir");
    }
    function s(e, t) {
        return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "");
    }
    function o(e) {
        var t, i = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend"
        }, n = document.createElement("div");
        for (var s in i) void 0 !== n.style[s] && (t = i[s]);
        return t || (t = setTimeout(function() {
            e.triggerHandler("transitionend", [ e ]);
        }, 1), "transitionend");
    }
    i.d(t, "a", function() {
        return n;
    }), i.d(t, "b", function() {
        return s;
    }), i.d(t, "c", function() {
        return o;
    });
    var a = i(0), r = i.n(a);
}, function(e, t, s) {
    "use strict";
    function i(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function o(e) {
        return void 0 !== e.constructor.name ? i(e.constructor.name) : i(e.className);
    }
    s.d(t, "a", function() {
        return l;
    });
    var n = s(0), a = (s.n(n), s(1)), r = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), l = function() {
        function n(e, t) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, n), this._setup(e, t);
            var i = o(this);
            this.uuid = s.i(a.b)(6, i), this.$element.attr("data-" + i) || this.$element.attr("data-" + i, this.uuid), 
            this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf." + i);
        }
        return r(n, [ {
            key: "destroy",
            value: function() {
                this._destroy();
                var e = o(this);
                for (var t in this.$element.removeAttr("data-" + e).removeData("zfPlugin").trigger("destroyed.zf." + e), 
                this) this[t] = null;
            }
        } ]), n;
    }();
}, function(e, t, r) {
    "use strict";
    function s(e) {
        return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !(!l()(this).is(":visible") || l()(this).attr("tabindex") < 0);
        });
    }
    function o(e) {
        var t = n[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
        return t = t.replace(/\W+/, ""), e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), 
        e.altKey && (t = "ALT_" + t), t = t.replace(/_$/, "");
    }
    r.d(t, "a", function() {
        return a;
    });
    var i = r(0), l = r.n(i), c = r(1), n = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        35: "END",
        36: "HOME",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, u = {}, a = {
        keys: function(e) {
            var t = {};
            for (var i in e) t[e[i]] = e[i];
            return t;
        }(n),
        parseKey: o,
        handleKey: function(e, t, i) {
            var n, s = u[t], o = this.parseKey(e);
            if (!s) return console.warn("Component not defined!");
            if ((n = i[(void 0 === s.ltr ? s : r.i(c.a)() ? l.a.extend({}, s.ltr, s.rtl) : l.a.extend({}, s.rtl, s.ltr))[o]]) && "function" == typeof n) {
                var a = n.apply();
                (i.handled || "function" == typeof i.handled) && i.handled(a);
            } else (i.unhandled || "function" == typeof i.unhandled) && i.unhandled();
        },
        findFocusable: s,
        register: function(e, t) {
            u[e] = t;
        },
        trapFocus: function(e) {
            var t = s(e), i = t.eq(0), n = t.eq(-1);
            e.on("keydown.zf.trapfocus", function(e) {
                e.target === n[0] && "TAB" === o(e) ? (e.preventDefault(), i.focus()) : e.target === i[0] && "SHIFT_TAB" === o(e) && (e.preventDefault(), 
                n.focus());
            });
        },
        releaseFocus: function(e) {
            e.off("keydown.zf.trapfocus");
        }
    };
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return a;
    });
    var n = i(0), o = i.n(n), s = window.matchMedia || function() {
        var t = window.styleMedia || window.media;
        if (!t) {
            var i, n = document.createElement("style"), e = document.getElementsByTagName("script")[0];
            n.type = "text/css", n.id = "matchmediajs-test", e && e.parentNode && e.parentNode.insertBefore(n, e), 
            i = "getComputedStyle" in window && window.getComputedStyle(n, null) || n.currentStyle, 
            t = {
                matchMedium: function(e) {
                    var t = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return n.styleSheet ? n.styleSheet.cssText = t : n.textContent = t, "1px" === i.width;
                }
            };
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            };
        };
    }(), a = {
        queries: [],
        current: "",
        _init: function() {
            o()("meta.foundation-mq").length || o()('<meta class="foundation-mq">').appendTo(document.head);
            var e, t, i, n = o()(".foundation-mq").css("font-family");
            for (var s in i = {}, e = "string" != typeof (t = n) ? i : (t = t.trim().slice(1, -1)) ? i = t.split("&").reduce(function(e, t) {
                var i = t.replace(/\+/g, " ").split("="), n = i[0], s = i[1];
                return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), 
                e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(s) : e[n] = [ e[n], s ] : e[n] = s, 
                e;
            }, {}) : i) e.hasOwnProperty(s) && this.queries.push({
                name: s,
                value: "only screen and (min-width: " + e[s] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher();
        },
        atLeast: function(e) {
            var t = this.get(e);
            return !!t && s(t).matches;
        },
        is: function(e) {
            return 1 < (e = e.trim().split(" ")).length && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0]);
        },
        get: function(e) {
            for (var t in this.queries) if (this.queries.hasOwnProperty(t)) {
                var i = this.queries[t];
                if (e === i.name) return i.value;
            }
            return null;
        },
        _getCurrentSize: function() {
            for (var e, t = 0; t < this.queries.length; t++) {
                var i = this.queries[t];
                s(i.value).matches && (e = i);
            }
            return "object" == typeof e ? e.name : e;
        },
        _watcher: function() {
            var i = this;
            o()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
                var e = i._getCurrentSize(), t = i.current;
                e !== t && (i.current = e, o()(window).trigger("changed.zf.mediaquery", [ e, t ]));
            });
        }
    };
}, function(e, t, i) {
    "use strict";
    function n(t, e, i) {
        var n = void 0, s = Array.prototype.slice.call(arguments, 3);
        o()(window).off(e).on(e, function(e) {
            n && clearTimeout(n), n = setTimeout(function() {
                i.apply(null, s);
            }, t || 10);
        });
    }
    i.d(t, "a", function() {
        return c;
    });
    var s = i(0), o = i.n(s), a = i(6), r = function() {
        for (var e = [ "WebKit", "Moz", "O", "Ms", "" ], t = 0; t < e.length; t++) if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
        return !1;
    }(), l = function(t, i) {
        t.data(i).split(" ").forEach(function(e) {
            o()("#" + e)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [ t ]);
        });
    }, c = {
        Listeners: {
            Basic: {},
            Global: {}
        },
        Initializers: {}
    };
    c.Listeners.Basic = {
        openListener: function() {
            l(o()(this), "open");
        },
        closeListener: function() {
            o()(this).data("close") ? l(o()(this), "close") : o()(this).trigger("close.zf.trigger");
        },
        toggleListener: function() {
            o()(this).data("toggle") ? l(o()(this), "toggle") : o()(this).trigger("toggle.zf.trigger");
        },
        closeableListener: function(e) {
            e.stopPropagation();
            var t = o()(this).data("closable");
            "" !== t ? a.a.animateOut(o()(this), t, function() {
                o()(this).trigger("closed.zf");
            }) : o()(this).fadeOut().trigger("closed.zf");
        },
        toggleFocusListener: function() {
            var e = o()(this).data("toggle-focus");
            o()("#" + e).triggerHandler("toggle.zf.trigger", [ o()(this) ]);
        }
    }, c.Initializers.addOpenListener = function(e) {
        e.off("click.zf.trigger", c.Listeners.Basic.openListener), e.on("click.zf.trigger", "[data-open]", c.Listeners.Basic.openListener);
    }, c.Initializers.addCloseListener = function(e) {
        e.off("click.zf.trigger", c.Listeners.Basic.closeListener), e.on("click.zf.trigger", "[data-close]", c.Listeners.Basic.closeListener);
    }, c.Initializers.addToggleListener = function(e) {
        e.off("click.zf.trigger", c.Listeners.Basic.toggleListener), e.on("click.zf.trigger", "[data-toggle]", c.Listeners.Basic.toggleListener);
    }, c.Initializers.addCloseableListener = function(e) {
        e.off("close.zf.trigger", c.Listeners.Basic.closeableListener), e.on("close.zf.trigger", "[data-closeable], [data-closable]", c.Listeners.Basic.closeableListener);
    }, c.Initializers.addToggleFocusListener = function(e) {
        e.off("focus.zf.trigger blur.zf.trigger", c.Listeners.Basic.toggleFocusListener), 
        e.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", c.Listeners.Basic.toggleFocusListener);
    }, c.Listeners.Global = {
        resizeListener: function(e) {
            r || e.each(function() {
                o()(this).triggerHandler("resizeme.zf.trigger");
            }), e.attr("data-events", "resize");
        },
        scrollListener: function(e) {
            r || e.each(function() {
                o()(this).triggerHandler("scrollme.zf.trigger");
            }), e.attr("data-events", "scroll");
        },
        closeMeListener: function(e, t) {
            var i = e.namespace.split(".")[0];
            o()("[data-" + i + "]").not('[data-yeti-box="' + t + '"]').each(function() {
                var e = o()(this);
                e.triggerHandler("close.zf.trigger", [ e ]);
            });
        }
    }, c.Initializers.addClosemeListener = function(e) {
        var t = o()("[data-yeti-box]"), i = [ "dropdown", "tooltip", "reveal" ];
        if (e && ("string" == typeof e ? i.push(e) : "object" == typeof e && "string" == typeof e[0] ? i.concat(e) : console.error("Plugin names must be strings")), 
        t.length) {
            var n = i.map(function(e) {
                return "closeme.zf." + e;
            }).join(" ");
            o()(window).off(n).on(n, c.Listeners.Global.closeMeListener);
        }
    }, c.Initializers.addResizeListener = function(e) {
        var t = o()("[data-resize]");
        t.length && n(e, "resize.zf.trigger", c.Listeners.Global.resizeListener, t);
    }, c.Initializers.addScrollListener = function(e) {
        var t = o()("[data-scroll]");
        t.length && n(e, "scroll.zf.trigger", c.Listeners.Global.scrollListener, t);
    }, c.Initializers.addMutationEventsListener = function(e) {
        if (!r) return !1;
        var t = e.find("[data-resize], [data-scroll], [data-mutate]"), i = function(e) {
            var t = o()(e[0].target);
            switch (e[0].type) {
              case "attributes":
                "scroll" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("scrollme.zf.trigger", [ t, window.pageYOffset ]), 
                "resize" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("resizeme.zf.trigger", [ t ]), 
                "style" === e[0].attributeName && (t.closest("[data-mutate]").attr("data-events", "mutate"), 
                t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [ t.closest("[data-mutate]") ]));
                break;

              case "childList":
                t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [ t.closest("[data-mutate]") ]);
                break;

              default:
                return !1;
            }
        };
        if (t.length) for (var n = 0; n <= t.length - 1; n++) {
            new r(i).observe(t[n], {
                attributes: !0,
                childList: !0,
                characterData: !1,
                subtree: !0,
                attributeFilter: [ "data-events", "style" ]
            });
        }
    }, c.Initializers.addSimpleListeners = function() {
        var e = o()(document);
        c.Initializers.addOpenListener(e), c.Initializers.addCloseListener(e), c.Initializers.addToggleListener(e), 
        c.Initializers.addCloseableListener(e), c.Initializers.addToggleFocusListener(e);
    }, c.Initializers.addGlobalListeners = function() {
        var e = o()(document);
        c.Initializers.addMutationEventsListener(e), c.Initializers.addResizeListener(), 
        c.Initializers.addScrollListener(), c.Initializers.addClosemeListener();
    }, c.init = function(e, t) {
        if (void 0 === e.triggersInitialized) {
            e(document);
            "complete" === document.readyState ? (c.Initializers.addSimpleListeners(), c.Initializers.addGlobalListeners()) : e(window).on("load", function() {
                c.Initializers.addSimpleListeners(), c.Initializers.addGlobalListeners();
            }), e.triggersInitialized = !0;
        }
        t && (t.Triggers = c, t.IHearYou = c.Initializers.addGlobalListeners);
    };
}, function(e, t, r) {
    "use strict";
    function i(i, n, s) {
        var o, a, r = null;
        if (0 === i) return s.apply(n), void n.trigger("finished.zf.animate", [ n ]).triggerHandler("finished.zf.animate", [ n ]);
        o = window.requestAnimationFrame(function e(t) {
            r || (r = t), a = t - r, s.apply(n), a < i ? o = window.requestAnimationFrame(e, n) : (window.cancelAnimationFrame(o), 
            n.trigger("finished.zf.animate", [ n ]).triggerHandler("finished.zf.animate", [ n ]));
        });
    }
    function n(e, t, i, n) {
        function s() {
            t[0].style.transitionDuration = 0, t.removeClass(o + " " + a + " " + i);
        }
        if ((t = l()(t).eq(0)).length) {
            var o = e ? u[0] : u[1], a = e ? d[0] : d[1];
            s(), t.addClass(i).css("transition", "none"), requestAnimationFrame(function() {
                t.addClass(o), e && t.show();
            }), requestAnimationFrame(function() {
                t[0].offsetWidth, t.css("transition", "").addClass(a);
            }), t.one(r.i(c.c)(t), function() {
                e || t.hide(), s(), n && n.apply(t);
            });
        }
    }
    r.d(t, "b", function() {
        return i;
    }), r.d(t, "a", function() {
        return o;
    });
    var s = r(0), l = r.n(s), c = r(1), u = [ "mui-enter", "mui-leave" ], d = [ "mui-enter-active", "mui-leave-active" ], o = {
        animateIn: function(e, t, i) {
            n(!0, e, t, i);
        },
        animateOut: function(e, t, i) {
            n(!1, e, t, i);
        }
    };
}, function(e, t, a) {
    "use strict";
    function o(e, t, i, n, s) {
        var o, a, r, l, c = d(e);
        if (t) {
            var u = d(t);
            a = u.height + u.offset.top - (c.offset.top + c.height), o = c.offset.top - u.offset.top, 
            r = c.offset.left - u.offset.left, l = u.width + u.offset.left - (c.offset.left + c.width);
        } else a = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height), 
        o = c.offset.top - c.windowDims.offset.top, r = c.offset.left - c.windowDims.offset.left, 
        l = c.windowDims.width - (c.offset.left + c.width);
        return a = s ? 0 : Math.min(a, 0), o = Math.min(o, 0), r = Math.min(r, 0), l = Math.min(l, 0), 
        i ? r + l : n ? o + a : Math.sqrt(o * o + a * a + r * r + l * l);
    }
    function d(e) {
        if ((e = e.length ? e[0] : e) === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var t = e.getBoundingClientRect(), i = e.parentNode.getBoundingClientRect(), n = document.body.getBoundingClientRect(), s = window.pageYOffset, o = window.pageXOffset;
        return {
            width: t.width,
            height: t.height,
            offset: {
                top: t.top + s,
                left: t.left + o
            },
            parentDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: i.top + s,
                    left: i.left + o
                }
            },
            windowDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: s,
                    left: o
                }
            }
        };
    }
    function r(e, t, i, n, s, o, a) {
        var r, l, c = d(e), u = t ? d(t) : null;
        switch (i) {
          case "top":
            r = u.offset.top - (c.height + s);
            break;

          case "bottom":
            r = u.offset.top + u.height + s;
            break;

          case "left":
            l = u.offset.left - (c.width + o);
            break;

          case "right":
            l = u.offset.left + u.width + o;
        }
        switch (i) {
          case "top":
          case "bottom":
            switch (n) {
              case "left":
                l = u.offset.left + o;
                break;

              case "right":
                l = u.offset.left - c.width + u.width - o;
                break;

              case "center":
                l = a ? o : u.offset.left + u.width / 2 - c.width / 2 + o;
            }
            break;

          case "right":
          case "left":
            switch (n) {
              case "bottom":
                r = u.offset.top - s + u.height - c.height;
                break;

              case "top":
                r = u.offset.top + s;
                break;

              case "center":
                r = u.offset.top + s + u.height / 2 - c.height / 2;
            }
        }
        return {
            top: r,
            left: l
        };
    }
    a.d(t, "a", function() {
        return i;
    });
    var l = a(1), i = {
        ImNotTouchingYou: function(e, t, i, n, s) {
            return 0 === o(e, t, i, n, s);
        },
        OverlapArea: o,
        GetDimensions: d,
        GetOffsets: function(e, t, i, n, s, o) {
            switch (console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"), 
            i) {
              case "top":
                return a.i(l.a)() ? r(e, t, "top", "left", n, s, o) : r(e, t, "top", "right", n, s, o);

              case "bottom":
                return a.i(l.a)() ? r(e, t, "bottom", "left", n, s, o) : r(e, t, "bottom", "right", n, s, o);

              case "center top":
                return r(e, t, "top", "center", n, s, o);

              case "center bottom":
                return r(e, t, "bottom", "center", n, s, o);

              case "center left":
                return r(e, t, "left", "center", n, s, o);

              case "center right":
                return r(e, t, "right", "center", n, s, o);

              case "left bottom":
                return r(e, t, "bottom", "left", n, s, o);

              case "right bottom":
                return r(e, t, "bottom", "right", n, s, o);

              case "center":
                return {
                    left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + s,
                    top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + n)
                };

              case "reveal":
                return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2 + s,
                    top: $eleDims.windowDims.offset.top + n
                };

              case "reveal full":
                return {
                    left: $eleDims.windowDims.offset.left,
                    top: $eleDims.windowDims.offset.top
                };

              default:
                return {
                    left: a.i(l.a)() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - s : $anchorDims.offset.left + s,
                    top: $anchorDims.offset.top + $anchorDims.height + n
                };
            }
        },
        GetExplicitOffsets: r
    };
}, function(e, t, i) {
    "use strict";
    function n(e, t) {
        function n() {
            0 === --i && t();
        }
        var i = e.length;
        0 === i && t(), e.each(function() {
            if (this.complete && void 0 !== this.naturalWidth) n(); else {
                var e = new Image(), i = "load.zf.images error.zf.images";
                o()(e).one(i, function e(t) {
                    o()(this).off(i, e), n();
                }), e.src = o()(this).attr("src");
            }
        });
    }
    i.d(t, "a", function() {
        return n;
    });
    var s = i(0), o = i.n(s);
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return s;
    });
    var n = i(0), r = i.n(n), s = {
        Feather: function(e) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "zf";
            e.attr("role", "menubar");
            var t = e.find("li").attr({
                role: "menuitem"
            }), n = "is-" + i + "-submenu", s = n + "-item", o = "is-" + i + "-submenu-parent", a = "accordion" !== i;
            t.each(function() {
                var e = r()(this), t = e.children("ul");
                t.length && (e.addClass(o), t.addClass("submenu " + n).attr({
                    "data-submenu": ""
                }), a && (e.attr({
                    "aria-haspopup": !0,
                    "aria-label": e.children("a:first").text()
                }), "drilldown" === i && e.attr({
                    "aria-expanded": !1
                })), t.addClass("submenu " + n).attr({
                    "data-submenu": "",
                    role: "menu"
                }), "drilldown" === i && t.attr({
                    "aria-hidden": !0
                })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + s);
            });
        },
        Burn: function(e, t) {
            var i = "is-" + t + "-submenu", n = i + "-item", s = "is-" + t + "-submenu-parent";
            e.find(">li, .menu, .menu > li").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "");
        }
    };
}, function(e, t, i) {
    "use strict";
    function s() {
        this.removeEventListener("touchmove", n), this.removeEventListener("touchend", s), 
        f = !1;
    }
    function n(e) {
        if (d.a.spotSwipe.preventDefault && e.preventDefault(), f) {
            var t, i = e.touches[0].pageX, n = (e.touches[0].pageY, r - i);
            c = new Date().getTime() - l, Math.abs(n) >= d.a.spotSwipe.moveThreshold && c <= d.a.spotSwipe.timeThreshold && (t = 0 < n ? "left" : "right"), 
            t && (e.preventDefault(), s.call(this), d()(this).trigger("swipe", t).trigger("swipe" + t));
        }
    }
    function o(e) {
        1 == e.touches.length && (r = e.touches[0].pageX, e.touches[0].pageY, f = !0, l = new Date().getTime(), 
        this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", s, !1));
    }
    function a() {
        this.addEventListener && this.addEventListener("touchstart", o, !1);
    }
    i.d(t, "a", function() {
        return p;
    });
    var r, l, c, u = i(0), d = i.n(u), h = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), p = {}, f = !1, m = function() {
        function t(e) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, 
            this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, 
            this._init();
        }
        return h(t, [ {
            key: "_init",
            value: function() {
                var e = this.$;
                e.event.special.swipe = {
                    setup: a
                }, e.each([ "left", "up", "down", "right" ], function() {
                    e.event.special["swipe" + this] = {
                        setup: function() {
                            e(this).on("swipe", e.noop);
                        }
                    };
                });
            }
        } ]), t;
    }();
    p.setupSpotSwipe = function(e) {
        e.spotSwipe = new m(e);
    }, p.setupTouchHandler = function(n) {
        n.fn.addTouch = function() {
            this.each(function(e, t) {
                n(t).bind("touchstart touchmove touchend touchcancel", function() {
                    i(event);
                });
            });
            var i = function(e) {
                var t, i = e.changedTouches[0], n = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup"
                }[e.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(n, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: i.screenX,
                    screenY: i.screenY,
                    clientX: i.clientX,
                    clientY: i.clientY
                }) : (t = document.createEvent("MouseEvent")).initMouseEvent(n, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), 
                i.target.dispatchEvent(t);
            };
        };
    }, p.init = function(e) {
        void 0 === e.spotSwipe && (p.setupSpotSwipe(e), p.setupTouchHandler(e));
    };
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", function() {
        return c;
    });
    var i = a(0), r = a.n(i), s = a(3), l = a(1), n = a(2), o = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, n["a"]), o(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = r.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Accordion", this._init(), s.a.register("Accordion", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_DOWN: "next",
                    ARROW_UP: "previous"
                });
            }
        }, {
            key: "_init",
            value: function() {
                var s = this;
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), 
                this.$tabs.each(function(e, t) {
                    var i = r()(t), n = i.children("[data-tab-content]"), s = n[0].id || a.i(l.b)(6, "accordion"), o = t.id || s + "-label";
                    i.find("a:first").attr({
                        "aria-controls": s,
                        role: "tab",
                        id: o,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), n.attr({
                        role: "tabpanel",
                        "aria-labelledby": o,
                        "aria-hidden": !0,
                        id: s
                    });
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                this.firstTimeInit = !0, e.length && (this.down(e, this.firstTimeInit), this.firstTimeInit = !1), 
                this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (e.length) {
                        var t = s.$element.find('[href$="' + e + '"]'), i = r()(e);
                        if (t.length && i) {
                            if (t.parent("[data-accordion-item]").hasClass("is-active") || (s.down(i, s.firstTimeInit), 
                            s.firstTimeInit = !1), s.options.deepLinkSmudge) {
                                var n = s;
                                r()(window).load(function() {
                                    var e = n.$element.offset();
                                    r()("html, body").animate({
                                        scrollTop: e.top
                                    }, n.options.deepLinkSmudgeDelay);
                                });
                            }
                            s.$element.trigger("deeplink.zf.accordion", [ t, i ]);
                        }
                    }
                }, this.options.deepLink && this._checkDeepLink(), this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var n = this;
                this.$tabs.each(function() {
                    var t = r()(this), i = t.children("[data-tab-content]");
                    i.length && t.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), n.toggle(i);
                    }).on("keydown.zf.accordion", function(e) {
                        s.a.handleKey(e, "Accordion", {
                            toggle: function() {
                                n.toggle(i);
                            },
                            next: function() {
                                var e = t.next().find("a").focus();
                                n.options.multiExpand || e.trigger("click.zf.accordion");
                            },
                            previous: function() {
                                var e = t.prev().find("a").focus();
                                n.options.multiExpand || e.trigger("click.zf.accordion");
                            },
                            handled: function() {
                                e.preventDefault(), e.stopPropagation();
                            }
                        });
                    });
                }), this.options.deepLink && r()(window).on("popstate", this._checkDeepLink);
            }
        }, {
            key: "toggle",
            value: function(e) {
                if (e.closest("[data-accordion]").is("[disabled]")) console.info("Cannot toggle an accordion that is disabled."); else if (e.parent().hasClass("is-active") ? this.up(e) : this.down(e), 
                this.options.deepLink) {
                    var t = e.prev("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", t) : history.replaceState({}, "", t);
                }
            }
        }, {
            key: "down",
            value: function(e, t) {
                var i = this;
                if (!e.closest("[data-accordion]").is("[disabled]") || t) {
                    if (e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), 
                    !this.options.multiExpand && !t) {
                        var n = this.$element.children(".is-active").children("[data-tab-content]");
                        n.length && this.up(n.not(e));
                    }
                    e.slideDown(this.options.slideSpeed, function() {
                        i.$element.trigger("down.zf.accordion", [ e ]);
                    }), r()("#" + e.attr("aria-labelledby")).attr({
                        "aria-expanded": !0,
                        "aria-selected": !0
                    });
                } else console.info("Cannot call down on an accordion that is disabled.");
            }
        }, {
            key: "up",
            value: function(e) {
                if (e.closest("[data-accordion]").is("[disabled]")) console.info("Cannot call up on an accordion that is disabled."); else {
                    var t = e.parent().siblings(), i = this;
                    (this.options.allowAllClosed || t.hasClass("is-active")) && e.parent().hasClass("is-active") && (e.slideUp(i.options.slideSpeed, function() {
                        i.$element.trigger("up.zf.accordion", [ e ]);
                    }), e.attr("aria-hidden", !0).parent().removeClass("is-active"), r()("#" + e.attr("aria-labelledby")).attr({
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }));
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), 
                this.$element.find("a").off(".zf.accordion"), this.options.deepLink && r()(window).off("popstate", this._checkDeepLink);
            }
        } ]), i;
    }();
    c.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1
    };
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", function() {
        return u;
    });
    var i = a(0), r = a.n(i), l = a(3), n = a(9), c = a(1), s = a(2), o = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), u = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, s["a"]), o(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = r.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "AccordionMenu", this._init(), l.a.register("AccordionMenu", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_RIGHT: "open",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "close",
                    ESCAPE: "closeAll"
                });
            }
        }, {
            key: "_init",
            value: function() {
                n.a.Feather(this.$element, "accordion");
                var o = this;
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var e = this.id || a.i(c.b)(6, "acc-menu-link"), t = r()(this), i = t.children("[data-submenu]"), n = i[0].id || a.i(c.b)(6, "acc-menu"), s = i.hasClass("is-active");
                    o.options.submenuToggle ? (t.addClass("has-submenu-toggle"), t.children("a").after('<button id="' + e + '" class="submenu-toggle" aria-controls="' + n + '" aria-expanded="' + s + '" title="' + o.options.submenuToggleText + '"><span class="submenu-toggle-text">' + o.options.submenuToggleText + "</span></button>")) : t.attr({
                        "aria-controls": n,
                        "aria-expanded": s,
                        id: e
                    }), i.attr({
                        "aria-labelledby": e,
                        "aria-hidden": !s,
                        role: "group",
                        id: n
                    });
                }), this.$element.find("li").attr({
                    role: "treeitem"
                });
                var e = this.$element.find(".is-active");
                if (e.length) {
                    o = this;
                    e.each(function() {
                        o.down(r()(this));
                    });
                }
                this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var a = this;
                this.$element.find("li").each(function() {
                    var t = r()(this).children("[data-submenu]");
                    t.length && (a.options.submenuToggle ? r()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                        a.toggle(t);
                    }) : r()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                        e.preventDefault(), a.toggle(t);
                    }));
                }).on("keydown.zf.accordionmenu", function(t) {
                    var i, n, s = r()(this), o = s.parent("ul").children("li"), e = s.children("[data-submenu]");
                    o.each(function(e) {
                        if (r()(this).is(s)) return i = o.eq(Math.max(0, e - 1)).find("a").first(), n = o.eq(Math.min(e + 1, o.length - 1)).find("a").first(), 
                        r()(this).children("[data-submenu]:visible").length && (n = s.find("li:first-child").find("a").first()), 
                        r()(this).is(":first-child") ? i = s.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), 
                        void (r()(this).is(":last-child") && (n = s.parents("li").first().next("li").find("a").first()));
                    }), l.a.handleKey(t, "AccordionMenu", {
                        open: function() {
                            e.is(":hidden") && (a.down(e), e.find("li").first().find("a").first().focus());
                        },
                        close: function() {
                            e.length && !e.is(":hidden") ? a.up(e) : s.parent("[data-submenu]").length && (a.up(s.parent("[data-submenu]")), 
                            s.parents("li").first().find("a").first().focus());
                        },
                        up: function() {
                            return i.focus(), !0;
                        },
                        down: function() {
                            return n.focus(), !0;
                        },
                        toggle: function() {
                            return !a.options.submenuToggle && (s.children("[data-submenu]").length ? (a.toggle(s.children("[data-submenu]")), 
                            !0) : void 0);
                        },
                        closeAll: function() {
                            a.hideAll();
                        },
                        handled: function(e) {
                            e && t.preventDefault(), t.stopImmediatePropagation();
                        }
                    });
                });
            }
        }, {
            key: "hideAll",
            value: function() {
                this.up(this.$element.find("[data-submenu]"));
            }
        }, {
            key: "showAll",
            value: function() {
                this.down(this.$element.find("[data-submenu]"));
            }
        }, {
            key: "toggle",
            value: function(e) {
                e.is(":animated") || (e.is(":hidden") ? this.down(e) : this.up(e));
            }
        }, {
            key: "down",
            value: function(e) {
                var t = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))), 
                e.addClass("is-active").attr({
                    "aria-hidden": !1
                }), this.options.submenuToggle ? e.prev(".submenu-toggle").attr({
                    "aria-expanded": !0
                }) : e.parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }), e.slideDown(t.options.slideSpeed, function() {
                    t.$element.trigger("down.zf.accordionMenu", [ e ]);
                });
            }
        }, {
            key: "up",
            value: function(e) {
                var t = this;
                e.slideUp(t.options.slideSpeed, function() {
                    t.$element.trigger("up.zf.accordionMenu", [ e ]);
                });
                var i = e.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                this.options.submenuToggle ? i.prev(".submenu-toggle").attr("aria-expanded", !1) : i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1);
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), 
                this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), 
                this.$element.find(".submenu-toggle").remove()), n.a.Burn(this.$element, "accordion");
            }
        } ]), i;
    }();
    u.defaults = {
        slideSpeed: 250,
        submenuToggle: !1,
        submenuToggleText: "Toggle menu",
        multiOpen: !0
    };
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", function() {
        return d;
    });
    var i = a(0), r = a.n(i), l = a(3), n = a(9), c = a(1), s = a(7), o = a(2), u = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), d = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, o["a"]), u(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = r.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Drilldown", this._init(), l.a.register("Drilldown", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close",
                    TAB: "down",
                    SHIFT_TAB: "up"
                });
            }
        }, {
            key: "_init",
            value: function() {
                n.a.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), 
                this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": !1
                }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), 
                this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), 
                this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"), 
                this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || a.i(c.b)(6, "drilldown")), 
                this._prepareMenu(), this._registerEvents(), this._keyboardEvents();
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var i = this;
                this.$submenuAnchors.each(function() {
                    var e = r()(this), t = e.parent();
                    i.options.parentLink && e.clone().prependTo(t.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), 
                    e.data("savedHref", e.attr("href")).removeAttr("href").attr("tabindex", 0), e.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "group"
                    }), i._events(e);
                }), this.$submenus.each(function() {
                    var e = r()(this);
                    if (!e.find(".js-drilldown-back").length) switch (i.options.backButtonPosition) {
                      case "bottom":
                        e.append(i.options.backButton);
                        break;

                      case "top":
                        e.prepend(i.options.backButton);
                        break;

                      default:
                        console.error("Unsupported backButtonPosition value '" + i.options.backButtonPosition + "'");
                    }
                    i._back(e);
                }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), 
                this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = r()(this.options.wrapper).addClass("is-drilldown"), 
                this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), 
                this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims());
            }
        }, {
            key: "_resize",
            value: function() {
                this.$wrapper.css({
                    "max-width": "none",
                    "min-height": "none"
                }), this.$wrapper.css(this._getMaxDims());
            }
        }, {
            key: "_events",
            value: function(i) {
                var n = this;
                i.off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    if (r()(e.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (e.stopImmediatePropagation(), 
                    e.preventDefault()), n._show(i.parent("li")), n.options.closeOnClick) {
                        var t = r()("body");
                        t.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                            e.target === n.$element[0] || r.a.contains(n.$element[0], e.target) || (e.preventDefault(), 
                            n._hideAll(), t.off(".zf.drilldown"));
                        });
                    }
                });
            }
        }, {
            key: "_registerEvents",
            value: function() {
                this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler)), 
                this.$element.on("mutateme.zf.trigger", this._resize.bind(this));
            }
        }, {
            key: "_scrollTop",
            value: function() {
                var e = this, t = "" != e.options.scrollTopElement ? r()(e.options.scrollTopElement) : e.$element, i = parseInt(t.offset().top + e.options.scrollTopOffset, 10);
                r()("html, body").stop(!0).animate({
                    scrollTop: i
                }, e.options.animationDuration, e.options.animationEasing, function() {
                    this === r()("html")[0] && e.$element.trigger("scrollme.zf.drilldown");
                });
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var e = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(t) {
                    var i, n, s = r()(this), o = s.parent("li").parent("ul").children("li").children("a");
                    o.each(function(e) {
                        if (r()(this).is(s)) return i = o.eq(Math.max(0, e - 1)), void (n = o.eq(Math.min(e + 1, o.length - 1)));
                    }), l.a.handleKey(t, "Drilldown", {
                        next: function() {
                            if (s.is(e.$submenuAnchors)) return e._show(s.parent("li")), s.parent("li").one(a.i(c.c)(s), function() {
                                s.parent("li").find("ul li a").filter(e.$menuItems).first().focus();
                            }), !0;
                        },
                        previous: function() {
                            return e._hide(s.parent("li").parent("ul")), s.parent("li").parent("ul").one(a.i(c.c)(s), function() {
                                setTimeout(function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus();
                                }, 1);
                            }), !0;
                        },
                        up: function() {
                            return i.focus(), !s.is(e.$element.find("> li:first-child > a"));
                        },
                        down: function() {
                            return n.focus(), !s.is(e.$element.find("> li:last-child > a"));
                        },
                        close: function() {
                            s.is(e.$element.find("> li > a")) || (e._hide(s.parent().parent()), s.parent().parent().siblings("a").focus());
                        },
                        open: function() {
                            return s.is(e.$menuItems) ? s.is(e.$submenuAnchors) ? (e._show(s.parent("li")), 
                            s.parent("li").one(a.i(c.c)(s), function() {
                                s.parent("li").find("ul li a").filter(e.$menuItems).first().focus();
                            }), !0) : void 0 : (e._hide(s.parent("li").parent("ul")), s.parent("li").parent("ul").one(a.i(c.c)(s), function() {
                                setTimeout(function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus();
                                }, 1);
                            }), !0);
                        },
                        handled: function(e) {
                            e && t.preventDefault(), t.stopImmediatePropagation();
                        }
                    });
                });
            }
        }, {
            key: "_hideAll",
            value: function() {
                var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                }), t.one(a.i(c.c)(t), function(e) {
                    t.removeClass("is-active is-closing");
                }), this.$element.trigger("closed.zf.drilldown");
            }
        }, {
            key: "_back",
            value: function(i) {
                var n = this;
                i.off("click.zf.drilldown"), i.children(".js-drilldown-back").on("click.zf.drilldown", function(e) {
                    e.stopImmediatePropagation(), n._hide(i);
                    var t = i.parent("li").parent("ul").parent("li");
                    t.length && n._show(t);
                });
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    setTimeout(function() {
                        t._hideAll();
                    }, 0);
                });
            }
        }, {
            key: "_show",
            value: function(e) {
                this.options.autoHeight && this.$wrapper.css({
                    height: e.children("[data-submenu]").data("calcHeight")
                }), e.attr("aria-expanded", !0), e.children("[data-submenu]").addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), 
                this.$element.trigger("open.zf.drilldown", [ e ]);
            }
        }, {
            key: "_hide",
            value: function(e) {
                this.options.autoHeight && this.$wrapper.css({
                    height: e.parent().closest("ul").data("calcHeight")
                });
                e.parent("li").attr("aria-expanded", !1), e.attr("aria-hidden", !0).addClass("is-closing"), 
                e.addClass("is-closing").one(a.i(c.c)(e), function() {
                    e.removeClass("is-active is-closing"), e.blur().addClass("invisible");
                }), e.trigger("hide.zf.drilldown", [ e ]);
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var t = 0, i = {}, n = this;
                return this.$submenus.add(this.$element).each(function() {
                    r()(this).children("li").length;
                    var e = s.a.GetDimensions(this).height;
                    t = t < e ? e : t, n.options.autoHeight && (r()(this).data("calcHeight", e), r()(this).hasClass("is-drilldown-submenu") || (i.height = e));
                }), this.options.autoHeight || (i["min-height"] = t + "px"), i["max-width"] = this.$element[0].getBoundingClientRect().width + "px", 
                i;
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), 
                this._hideAll(), this.$element.off("mutateme.zf.trigger"), n.a.Burn(this.$element, "drilldown"), 
                this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), 
                this.$submenuAnchors.each(function() {
                    r()(this).off(".zf.drilldown");
                }), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                    var e = r()(this);
                    e.removeAttr("tabindex"), e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref");
                });
            }
        } ]), i;
    }();
    d.defaults = {
        autoApplyClass: !0,
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return c;
    });
    var i = n(0), h = n.n(i), p = n(3), s = n(9), a = n(7), o = n(1), r = n(2), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, r["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = h.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "DropdownMenu", this._init(), p.a.register("DropdownMenu", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close"
                });
            }
        }, {
            key: "_init",
            value: function() {
                s.a.Feather(this.$element, "dropdown");
                var e = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), 
                this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), 
                this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), 
                "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || n.i(o.a)() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", 
                e.addClass("opens-left")) : (this.options.alignment = "left", e.addClass("opens-right")) : "right" === this.options.alignment ? e.addClass("opens-left") : e.addClass("opens-right"), 
                this.changed = !1, this._events();
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction");
            }
        }, {
            key: "_isRtl",
            value: function() {
                return this.$element.hasClass("align-right") || n.i(o.a)() && !this.$element.hasClass("align-left");
            }
        }, {
            key: "_events",
            value: function() {
                var d = this, o = "ontouchstart" in window || void 0 !== window.ontouchstart, a = "is-dropdown-submenu-parent";
                (this.options.clickOpen || o) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(e) {
                    var t = h()(e.target).parentsUntil("ul", "." + a), i = t.hasClass(a), n = "true" === t.attr("data-is-click"), s = t.children(".is-dropdown-submenu");
                    if (i) if (n) {
                        if (!d.options.closeOnClick || !d.options.clickOpen && !o || d.options.forceFollow && o) return;
                        e.stopImmediatePropagation(), e.preventDefault(), d._hide(t);
                    } else e.preventDefault(), e.stopImmediatePropagation(), d._show(s), t.add(t.parentsUntil(d.$element, "." + a)).attr("data-is-click", !0);
                }), d.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(e) {
                    h()(this).hasClass(a) || d._hide();
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                    var t = h()(this);
                    t.hasClass(a) && (clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                        d._show(t.children(".is-dropdown-submenu"));
                    }, d.options.hoverDelay)));
                }).on("mouseleave.zf.dropdownmenu", function(e) {
                    var t = h()(this);
                    if (t.hasClass(a) && d.options.autoclose) {
                        if ("true" === t.attr("data-is-click") && d.options.clickOpen) return !1;
                        clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                            d._hide(t);
                        }, d.options.closingTime));
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(t) {
                    var i, n, s = h()(t.target).parentsUntil("ul", '[role="menuitem"]'), e = -1 < d.$tabs.index(s), o = e ? d.$tabs : s.siblings("li").add(s);
                    o.each(function(e) {
                        if (h()(this).is(s)) return i = o.eq(e - 1), void (n = o.eq(e + 1));
                    });
                    var a = function() {
                        n.children("a:first").focus(), t.preventDefault();
                    }, r = function() {
                        i.children("a:first").focus(), t.preventDefault();
                    }, l = function() {
                        var e = s.children("ul.is-dropdown-submenu");
                        e.length && (d._show(e), s.find("li > a:first").focus(), t.preventDefault());
                    }, c = function() {
                        var e = s.parent("ul").parent("li");
                        e.children("a:first").focus(), d._hide(e), t.preventDefault();
                    }, u = {
                        open: l,
                        close: function() {
                            d._hide(d.$element), d.$menuItems.eq(0).children("a").focus(), t.preventDefault();
                        },
                        handled: function() {
                            t.stopImmediatePropagation();
                        }
                    };
                    e ? d._isVertical() ? d._isRtl() ? h.a.extend(u, {
                        down: a,
                        up: r,
                        next: c,
                        previous: l
                    }) : h.a.extend(u, {
                        down: a,
                        up: r,
                        next: l,
                        previous: c
                    }) : d._isRtl() ? h.a.extend(u, {
                        next: r,
                        previous: a,
                        down: l,
                        up: c
                    }) : h.a.extend(u, {
                        next: a,
                        previous: r,
                        down: l,
                        up: c
                    }) : d._isRtl() ? h.a.extend(u, {
                        next: c,
                        previous: l,
                        down: a,
                        up: r
                    }) : h.a.extend(u, {
                        next: l,
                        previous: c,
                        down: a,
                        up: r
                    }), p.a.handleKey(t, "DropdownMenu", u);
                });
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = h()(document.body), i = this;
                t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                    i.$element.find(e.target).length || (i._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"));
                });
            }
        }, {
            key: "_show",
            value: function(i) {
                var e = this.$tabs.index(this.$tabs.filter(function(e, t) {
                    return 0 < h()(t).find(i).length;
                })), t = i.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(t, e), i.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var n = a.a.ImNotTouchingYou(i, null, !0);
                if (!n) {
                    var s = "left" === this.options.alignment ? "-right" : "-left", o = i.parent(".is-dropdown-submenu-parent");
                    o.removeClass("opens" + s).addClass("opens-" + this.options.alignment), (n = a.a.ImNotTouchingYou(i, null, !0)) || o.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), 
                    this.changed = !0;
                }
                i.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [ i ]);
            }
        }, {
            key: "_hide",
            value: function(e, i) {
                var t;
                if ((t = e && e.length ? e : void 0 !== i ? this.$tabs.not(function(e, t) {
                    return e === i;
                }) : this.$element).hasClass("is-active") || 0 < t.find(".is-active").length) {
                    if (t.find("li.is-active").add(t).attr({
                        "data-is-click": !1
                    }).removeClass("is-active"), t.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), 
                    this.changed || t.find("opens-inner").length) {
                        var n = "left" === this.options.alignment ? "right" : "left";
                        t.find("li.is-dropdown-submenu-parent").add(t).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + n), 
                        this.changed = !1;
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [ t ]);
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), 
                h()(document.body).off(".zf.dropdownmenu"), s.a.Burn(this.$element, "dropdown");
            }
        } ]), i;
    }();
    c.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "auto",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    };
}, function(e, t, i) {
    "use strict";
    function n(e, t) {
        var i = t.indexOf(e);
        return i === t.length - 1 ? t[0] : t[i + 1];
    }
    i.d(t, "a", function() {
        return h;
    });
    var a = i(7), s = i(2), o = i(1), r = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), l = [ "left", "right", "top", "bottom" ], c = [ "top", "bottom", "center" ], u = [ "left", "right", "center" ], d = {
        left: c,
        right: c,
        top: u,
        bottom: u
    }, h = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, s["a"]), r(t, [ {
            key: "_init",
            value: function() {
                this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, 
                this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment;
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                return "bottom";
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                switch (this.position) {
                  case "bottom":
                  case "top":
                    return i.i(o.a)() ? "right" : "left";

                  case "left":
                  case "right":
                    return "bottom";
                }
            }
        }, {
            key: "_reposition",
            value: function() {
                this._alignmentsExhausted(this.position) ? (this.position = n(this.position, l), 
                this.alignment = d[this.position][0]) : this._realign();
            }
        }, {
            key: "_realign",
            value: function() {
                this._addTriedPosition(this.position, this.alignment), this.alignment = n(this.alignment, d[this.position]);
            }
        }, {
            key: "_addTriedPosition",
            value: function(e, t) {
                this.triedPositions[e] = this.triedPositions[e] || [], this.triedPositions[e].push(t);
            }
        }, {
            key: "_positionsExhausted",
            value: function() {
                for (var e = !0, t = 0; t < l.length; t++) e = e && this._alignmentsExhausted(l[t]);
                return e;
            }
        }, {
            key: "_alignmentsExhausted",
            value: function(e) {
                return this.triedPositions[e] && this.triedPositions[e].length == d[e].length;
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return this.options.vOffset;
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return this.options.hOffset;
            }
        }, {
            key: "_setPosition",
            value: function(e, t, i) {
                if ("false" === e.attr("aria-expanded")) return !1;
                a.a.GetDimensions(t), a.a.GetDimensions(e);
                if (t.offset(a.a.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset())), 
                !this.options.allowOverlap) {
                    for (var n = 1e8, s = {
                        position: this.position,
                        alignment: this.alignment
                    }; !this._positionsExhausted(); ) {
                        var o = a.a.OverlapArea(t, i, !1, !1, this.options.allowBottomOverlap);
                        if (0 === o) return;
                        o < n && (n = o, s = {
                            position: this.position,
                            alignment: this.alignment
                        }), this._reposition(), t.offset(a.a.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
                    }
                    this.position = s.position, this.alignment = s.alignment, t.offset(a.a.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
                }
            }
        } ]), t;
    }();
    h.defaults = {
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        vOffset: 0,
        hOffset: 0
    };
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return s;
    });
    var n = i(0), o = i.n(n), a = i(1), r = i(2), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), s = function(e) {
        function s() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, s), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(s, r["a"]), l(s, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = o.a.extend({}, s.defaults, this.$element.data(), t), 
                this.className = "SmoothScroll", this._init();
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element[0].id || i.i(a.b)(6, "smooth-scroll");
                this.$element.attr({
                    id: e
                }), this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var i = this, e = function(e) {
                    if (!o()(this).is('a[href^="#"]')) return !1;
                    var t = this.getAttribute("href");
                    i._inTransition = !0, s.scrollToLoc(t, i.options, function() {
                        i._inTransition = !1;
                    }), e.preventDefault();
                };
                this.$element.on("click.zf.smoothScroll", e), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', e);
            }
        } ], [ {
            key: "scrollToLoc",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : s.defaults, i = arguments[2];
                if (!o()(e).length) return !1;
                var n = Math.round(o()(e).offset().top - t.threshold / 2 - t.offset);
                o()("html, body").stop(!0).animate({
                    scrollTop: n
                }, t.animationDuration, t.animationEasing, function() {
                    i && "function" == typeof i && i();
                });
            }
        } ]), s;
    }();
    s.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    };
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return c;
    });
    var i = s(0), r = s.n(i), a = s(3), o = s(8), n = s(2), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, n["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = r.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Tabs", this._init(), a.a.register("Tabs", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "previous",
                    ARROW_DOWN: "next",
                    ARROW_LEFT: "previous"
                });
            }
        }, {
            key: "_init",
            value: function() {
                var n = this, a = this;
                if (this.$element.attr({
                    role: "tablist"
                }), this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = r()('[data-tabs-content="' + this.$element[0].id + '"]'), 
                this.$tabTitles.each(function() {
                    var e = r()(this), t = e.find("a"), i = e.hasClass("" + a.options.linkActiveClass), n = t.attr("data-tabs-target") || t[0].hash.slice(1), s = t[0].id ? t[0].id : n + "-label", o = r()("#" + n);
                    e.attr({
                        role: "presentation"
                    }), t.attr({
                        role: "tab",
                        "aria-controls": n,
                        "aria-selected": i,
                        id: s,
                        tabindex: i ? "0" : "-1"
                    }), o.attr({
                        role: "tabpanel",
                        "aria-labelledby": s
                    }), i || o.attr("aria-hidden", "true"), i && a.options.autoFocus && r()(window).load(function() {
                        r()("html, body").animate({
                            scrollTop: e.offset().top
                        }, a.options.deepLinkSmudgeDelay, function() {
                            t.focus();
                        });
                    });
                }), this.options.matchHeight) {
                    var e = this.$tabContent.find("img");
                    e.length ? s.i(o.a)(e, this._setHeight.bind(this)) : this._setHeight();
                }
                this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (e.length) {
                        var t = n.$element.find('[href$="' + e + '"]');
                        if (t.length) {
                            if (n.selectTab(r()(e), !0), n.options.deepLinkSmudge) {
                                var i = n.$element.offset();
                                r()("html, body").animate({
                                    scrollTop: i.top
                                }, n.options.deepLinkSmudgeDelay);
                            }
                            n.$element.trigger("deeplink.zf.tabs", [ t, r()(e) ]);
                        }
                    }
                }, this.options.deepLink && this._checkDeepLink(), this._events();
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, 
                this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), 
                r()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && r()(window).on("popstate", this._checkDeepLink);
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var t = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
                    e.preventDefault(), e.stopPropagation(), t._handleTabChange(r()(this));
                });
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var o = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                    if (9 !== e.which) {
                        var t, i, n = r()(this), s = n.parent("ul").children("li");
                        s.each(function(e) {
                            r()(this).is(n) && (o.options.wrapOnKeys ? (t = 0 === e ? s.last() : s.eq(e - 1), 
                            i = e === s.length - 1 ? s.first() : s.eq(e + 1)) : (t = s.eq(Math.max(0, e - 1)), 
                            i = s.eq(Math.min(e + 1, s.length - 1))));
                        }), a.a.handleKey(e, "Tabs", {
                            open: function() {
                                n.find('[role="tab"]').focus(), o._handleTabChange(n);
                            },
                            previous: function() {
                                t.find('[role="tab"]').focus(), o._handleTabChange(t);
                            },
                            next: function() {
                                i.find('[role="tab"]').focus(), o._handleTabChange(i);
                            },
                            handled: function() {
                                e.stopPropagation(), e.preventDefault();
                            }
                        });
                    }
                });
            }
        }, {
            key: "_handleTabChange",
            value: function(e, t) {
                if (e.hasClass("" + this.options.linkActiveClass)) this.options.activeCollapse && (this._collapseTab(e), 
                this.$element.trigger("collapse.zf.tabs", [ e ])); else {
                    var i = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass), n = e.find('[role="tab"]'), s = n.attr("data-tabs-target") || n[0].hash.slice(1), o = this.$tabContent.find("#" + s);
                    if (this._collapseTab(i), this._openTab(e), this.options.deepLink && !t) {
                        var a = e.find("a").attr("href");
                        this.options.updateHistory ? history.pushState({}, "", a) : history.replaceState({}, "", a);
                    }
                    this.$element.trigger("change.zf.tabs", [ e, o ]), o.find("[data-mutate]").trigger("mutateme.zf.trigger");
                }
            }
        }, {
            key: "_openTab",
            value: function(e) {
                var t = e.find('[role="tab"]'), i = t.attr("data-tabs-target") || t[0].hash.slice(1), n = this.$tabContent.find("#" + i);
                e.addClass("" + this.options.linkActiveClass), t.attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }), n.addClass("" + this.options.panelActiveClass).removeAttr("aria-hidden");
            }
        }, {
            key: "_collapseTab",
            value: function(e) {
                var t = e.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                    "aria-selected": "false",
                    tabindex: -1
                });
                r()("#" + t.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "true"
                });
            }
        }, {
            key: "selectTab",
            value: function(e, t) {
                var i;
                (i = "object" == typeof e ? e[0].id : e).indexOf("#") < 0 && (i = "#" + i);
                var n = this.$tabTitles.find('[href$="' + i + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(n, t);
            }
        }, {
            key: "_setHeight",
            value: function() {
                var n = 0, s = this;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var e = r()(this), t = e.hasClass("" + s.options.panelActiveClass);
                    t || e.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var i = this.getBoundingClientRect().height;
                    t || e.css({
                        visibility: "",
                        display: ""
                    }), n = n < i ? i : n;
                }).css("height", n + "px");
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), 
                this.options.matchHeight && null != this._setHeightMqHandler && r()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), 
                this.options.deepLink && r()(window).off("popstate", this._checkDeepLink);
            }
        } ]), i;
    }();
    c.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    };
}, function(e, t, i) {
    "use strict";
    function n(t, e, i) {
        var n, s, o = this, a = e.duration, r = Object.keys(t.data())[0] || "timer", l = -1;
        this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(s), this.start();
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(s), l = l <= 0 ? a : l, t.data("paused", !1), n = Date.now(), 
            s = setTimeout(function() {
                e.infinite && o.restart(), i && "function" == typeof i && i();
            }, l), t.trigger("timerstart.zf." + r);
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(s), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf." + r);
        };
    }
    i.d(t, "a", function() {
        return n;
    });
    var s = i(0);
    i.n(s);
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(0), s = i.n(n), o = i(21), a = i(1), r = i(7), l = i(8), c = i(3), u = i(4), d = i(6), h = i(9), p = i(18), f = i(10), m = i(5), g = i(20), v = i(11), y = i(12), w = i(13), b = i(22), _ = i(14), x = i(23), C = i(24), $ = i(25), T = i(26), k = i(27), S = i(29), z = i(30), E = i(31), O = i(32), P = i(16), I = i(33), M = i(17), A = i(34), L = i(35), D = i(28);
    o.a.addToJquery(s.a), o.a.rtl = a.a, o.a.GetYoDigits = a.b, o.a.transitionend = a.c, 
    o.a.Box = r.a, o.a.onImagesLoaded = l.a, o.a.Keyboard = c.a, o.a.MediaQuery = u.a, 
    o.a.Motion = d.a, o.a.Move = d.b, o.a.Nest = h.a, o.a.Timer = p.a, f.a.init(s.a), 
    m.a.init(s.a, o.a), o.a.plugin(g.a, "Abide"), o.a.plugin(v.a, "Accordion"), o.a.plugin(y.a, "AccordionMenu"), 
    o.a.plugin(w.a, "Drilldown"), o.a.plugin(b.a, "Dropdown"), o.a.plugin(_.a, "DropdownMenu"), 
    o.a.plugin(x.a, "Equalizer"), o.a.plugin(C.a, "Interchange"), o.a.plugin($.a, "Magellan"), 
    o.a.plugin(T.a, "OffCanvas"), o.a.plugin(k.a, "Orbit"), o.a.plugin(S.a, "ResponsiveMenu"), 
    o.a.plugin(z.a, "ResponsiveToggle"), o.a.plugin(E.a, "Reveal"), o.a.plugin(O.a, "Slider"), 
    o.a.plugin(P.a, "SmoothScroll"), o.a.plugin(I.a, "Sticky"), o.a.plugin(M.a, "Tabs"), 
    o.a.plugin(A.a, "Toggler"), o.a.plugin(L.a, "Tooltip"), o.a.plugin(D.a, "ResponsiveAccordionTabs");
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return a;
    });
    var n = i(0), u = i.n(n), s = i(2), o = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), a = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, s["a"]), o(i, [ {
            key: "_setup",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                this.$element = e, this.options = u.a.extend(!0, {}, i.defaults, this.$element.data(), t), 
                this.className = "Abide", this._init();
            }
        }, {
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select"), this._events();
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    t.resetForm();
                }).on("submit.zf.abide", function() {
                    return t.validateForm();
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                    t.validateInput(u()(e.target));
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                    t.validateInput(u()(e.target));
                }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                    t.validateInput(u()(e.target));
                });
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init();
            }
        }, {
            key: "requiredCheck",
            value: function(e) {
                if (!e.attr("required")) return !0;
                var t = !0;
                switch (e[0].type) {
                  case "checkbox":
                    t = e[0].checked;
                    break;

                  case "select":
                  case "select-one":
                  case "select-multiple":
                    var i = e.find("option:selected");
                    i.length && i.val() || (t = !1);
                    break;

                  default:
                    e.val() && e.val().length || (t = !1);
                }
                return t;
            }
        }, {
            key: "findFormError",
            value: function(e) {
                var t = e[0].id, i = e.siblings(this.options.formErrorSelector);
                return i.length || (i = e.parent().find(this.options.formErrorSelector)), i = i.add(this.$element.find('[data-form-error-for="' + t + '"]'));
            }
        }, {
            key: "findLabel",
            value: function(e) {
                var t = e[0].id, i = this.$element.find('label[for="' + t + '"]');
                return i.length ? i : e.closest("label");
            }
        }, {
            key: "findRadioLabels",
            value: function(e) {
                var s = this, t = e.map(function(e, t) {
                    var i = t.id, n = s.$element.find('label[for="' + i + '"]');
                    return n.length || (n = u()(t).closest("label")), n[0];
                });
                return u()(t);
            }
        }, {
            key: "addErrorClasses",
            value: function(e) {
                var t = this.findLabel(e), i = this.findFormError(e);
                t.length && t.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), 
                e.addClass(this.options.inputErrorClass).attr("data-invalid", "");
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(e) {
                var t = this.$element.find(':radio[name="' + e + '"]'), i = this.findRadioLabels(t), n = this.findFormError(t);
                i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), 
                t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
            }
        }, {
            key: "removeErrorClasses",
            value: function(e) {
                if ("radio" == e[0].type) return this.removeRadioErrorClasses(e.attr("name"));
                var t = this.findLabel(e), i = this.findFormError(e);
                t.length && t.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), 
                e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
            }
        }, {
            key: "validateInput",
            value: function(e) {
                var t = this.requiredCheck(e), i = !1, n = !0, s = e.attr("data-validator"), o = !0;
                if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]') || e.is("[disabled]")) return !0;
                switch (e[0].type) {
                  case "radio":
                    i = this.validateRadio(e.attr("name"));
                    break;

                  case "checkbox":
                    i = t;
                    break;

                  case "select":
                  case "select-one":
                  case "select-multiple":
                    i = t;
                    break;

                  default:
                    i = this.validateText(e);
                }
                s && (n = this.matchValidation(e, s, e.attr("required"))), e.attr("data-equalto") && (o = this.options.validators.equalTo(e));
                var a = -1 === [ t, i, n, o ].indexOf(!1), r = (a ? "valid" : "invalid") + ".zf.abide";
                if (a) {
                    var l = this.$element.find('[data-equalto="' + e.attr("id") + '"]');
                    if (l.length) {
                        var c = this;
                        l.each(function() {
                            u()(this).val() && c.validateInput(u()(this));
                        });
                    }
                }
                return this[a ? "removeErrorClasses" : "addErrorClasses"](e), e.trigger(r, [ e ]), 
                a;
            }
        }, {
            key: "validateForm",
            value: function() {
                var e = [], t = this;
                this.$inputs.each(function() {
                    e.push(t.validateInput(u()(this)));
                });
                var i = -1 === e.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", i ? "none" : "block"), 
                this.$element.trigger((i ? "formvalid" : "forminvalid") + ".zf.abide", [ this.$element ]), 
                i;
            }
        }, {
            key: "validateText",
            value: function(e, t) {
                t = t || e.attr("pattern") || e.attr("type");
                var i = e.val(), n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(t) ? this.options.patterns[t].test(i) : t === e.attr("type") || new RegExp(t).test(i) : e.prop("required") || (n = !0), 
                n;
            }
        }, {
            key: "validateRadio",
            value: function(e) {
                var t = this.$element.find(':radio[name="' + e + '"]'), i = !1, n = !1;
                return t.each(function(e, t) {
                    u()(t).attr("required") && (n = !0);
                }), n || (i = !0), i || t.each(function(e, t) {
                    u()(t).prop("checked") && (i = !0);
                }), i;
            }
        }, {
            key: "matchValidation",
            value: function(t, e, i) {
                var n = this;
                return i = !!i, -1 === e.split(" ").map(function(e) {
                    return n.options.validators[e](t, i, t.parent());
                }).indexOf(!1);
            }
        }, {
            key: "resetForm",
            value: function() {
                var e = this.$element, t = this.options;
                u()("." + t.labelErrorClass, e).not("small").removeClass(t.labelErrorClass), u()("." + t.inputErrorClass, e).not("small").removeClass(t.inputErrorClass), 
                u()(t.formErrorSelector + "." + t.formErrorClass).removeClass(t.formErrorClass), 
                e.find("[data-abide-error]").css("display", "none"), u()(":input", e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), 
                u()(":input:radio", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), 
                u()(":input:checkbox", e).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), 
                e.trigger("formreset.zf.abide", [ e ]);
            }
        }, {
            key: "_destroy",
            value: function() {
                var e = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    e.removeErrorClasses(u()(this));
                });
            }
        } ]), i;
    }();
    a.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
                test: function(e) {
                    return a.defaults.patterns.domain.test(e) || a.defaults.patterns.url.test(e);
                }
            }
        },
        validators: {
            equalTo: function(e, t, i) {
                return u()("#" + e.attr("data-equalto")).val() === e.val();
            }
        }
    };
}, function(e, t, n) {
    "use strict";
    function a(e) {
        if (void 0 === Function.prototype.name) {
            var t = /function\s([^(]{1,})\(/.exec(e.toString());
            return t && 1 < t.length ? t[1].trim() : "";
        }
        return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name;
    }
    function s(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    n.d(t, "a", function() {
        return c;
    });
    var i = n(0), o = n.n(i), r = n(1), l = n(4), c = {
        version: "6.4.3",
        _plugins: {},
        _uuids: [],
        plugin: function(e, t) {
            var i = t || a(e), n = s(i);
            this._plugins[n] = this[i] = e;
        },
        registerPlugin: function(e, t) {
            var i = t ? s(t) : a(e.constructor).toLowerCase();
            e.uuid = n.i(r.b)(6, i), e.$element.attr("data-" + i) || e.$element.attr("data-" + i, e.uuid), 
            e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + i), 
            this._uuids.push(e.uuid);
        },
        unregisterPlugin: function(e) {
            var t = s(a(e.$element.data("zfPlugin").constructor));
            for (var i in this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + t).removeData("zfPlugin").trigger("destroyed.zf." + t), 
            e) e[i] = null;
        },
        reInit: function(e) {
            var t = e instanceof o.a;
            try {
                if (t) e.each(function() {
                    o()(this).data("zfPlugin")._init();
                }); else {
                    var i = this;
                    ({
                        object: function(e) {
                            e.forEach(function(e) {
                                e = s(e), o()("[data-" + e + "]").foundation("_init");
                            });
                        },
                        string: function() {
                            e = s(e), o()("[data-" + e + "]").foundation("_init");
                        },
                        undefined: function() {
                            this.object(Object.keys(i._plugins));
                        }
                    })[typeof e](e);
                }
            } catch (e) {
                console.error(e);
            } finally {
                return e;
            }
        },
        reflow: function(n, e) {
            void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [ e ]);
            var s = this;
            o.a.each(e, function(e, t) {
                var i = s._plugins[t];
                o()(n).find("[data-" + t + "]").addBack("[data-" + t + "]").each(function() {
                    var e = o()(this), s = {};
                    if (e.data("zfPlugin")) console.warn("Tried to initialize " + t + " on an element that already has a Foundation plugin."); else {
                        if (e.attr("data-options")) e.attr("data-options").split(";").forEach(function(e, t) {
                            var i, n = e.split(":").map(function(e) {
                                return e.trim();
                            });
                            n[0] && (s[n[0]] = "true" === (i = n[1]) || "false" !== i && (isNaN(1 * i) ? i : parseFloat(i)));
                        });
                        try {
                            e.data("zfPlugin", new i(o()(this), s));
                        } catch (e) {
                            console.error(e);
                        } finally {
                            return;
                        }
                    }
                });
            });
        },
        getFnName: a,
        addToJquery: function(o) {
            return o.fn.foundation = function(i) {
                var e = typeof i, t = o(".no-js");
                if (t.length && t.removeClass("no-js"), "undefined" === e) l.a._init(), c.reflow(this); else {
                    if ("string" !== e) throw new TypeError("We're sorry, " + e + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                    var n = Array.prototype.slice.call(arguments, 1), s = this.data("zfPlugin");
                    if (void 0 === s || void 0 === s[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (s ? a(s) : "this element") + ".");
                    1 === this.length ? s[i].apply(s, n) : this.each(function(e, t) {
                        s[i].apply(o(t).data("zfPlugin"), n);
                    });
                }
                return this;
            }, o;
        }
    };
    c.util = {
        throttle: function(i, n) {
            var s = null;
            return function() {
                var e = this, t = arguments;
                null === s && (s = setTimeout(function() {
                    i.apply(e, t), s = null;
                }, n));
            };
        }
    }, window.Foundation = c, function() {
        Date.now && window.Date.now || (window.Date.now = Date.now = function() {
            return new Date().getTime();
        });
        for (var e = [ "webkit", "moz" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
            var i = e[t];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function(e) {
                var t = Date.now(), i = Math.max(n + 16, t);
                return setTimeout(function() {
                    e(n = i);
                }, i - t);
            }, window.cancelAnimationFrame = clearTimeout;
        }
        window.performance && window.performance.now || (window.performance = {
            start: Date.now(),
            now: function() {
                return Date.now() - this.start;
            }
        });
    }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), i = this, n = function() {}, s = function() {
            return i.apply(this instanceof n ? this : e, t.concat(Array.prototype.slice.call(arguments)));
        };
        return this.prototype && (n.prototype = this.prototype), s.prototype = new n(), 
        s;
    });
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d;
    });
    var i = n(0), s = n.n(i), o = n(3), a = n(1), r = n(15), l = n(5), c = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), u = function e(t, i, n) {
        null === t && (t = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(t, i);
        if (void 0 === s) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, i, n);
        }
        if ("value" in s) return s.value;
        var a = s.get;
        return void 0 !== a ? a.call(n) : void 0;
    }, d = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, r["a"]), c(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Dropdown", l.a.init(s.a), this._init(), o.a.register("Dropdown", {
                    ENTER: "open",
                    SPACE: "open",
                    ESCAPE: "close"
                });
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                this.$anchors = s()('[data-toggle="' + e + '"]').length ? s()('[data-toggle="' + e + '"]') : s()('[data-open="' + e + '"]'), 
                this.$anchors.attr({
                    "aria-controls": e,
                    "data-is-focus": !1,
                    "data-yeti-box": e,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null, 
                this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": e,
                    "data-resize": e,
                    "aria-labelledby": this.$currentAnchor.id || n.i(a.b)(6, "dd-anchor")
                }), u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_init", this).call(this), 
                this._events();
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var e = this.$element[0].className.match(/(top|left|right|bottom)/g);
                return e ? e[0] : "bottom";
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                var e = /float-(\S+)/.exec(this.$currentAnchor.className);
                return e ? e[1] : u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_getDefaultAlignment", this).call(this);
            }
        }, {
            key: "_setPosition",
            value: function() {
                u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);
            }
        }, {
            key: "_setCurrentAnchor",
            value: function(e) {
                this.$currentAnchor = s()(e);
            }
        }, {
            key: "_events",
            value: function() {
                var i = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
                    i._setCurrentAnchor(this);
                }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    i._setCurrentAnchor(this);
                    var e = s()("body").data();
                    void 0 !== e.whatinput && "mouse" !== e.whatinput || (clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                        i.open(), i.$anchors.data("hover", !0);
                    }, i.options.hoverDelay));
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                        i.close(), i.$anchors.data("hover", !1);
                    }, i.options.hoverDelay);
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(i.timeout);
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                        i.close(), i.$anchors.data("hover", !1);
                    }, i.options.hoverDelay);
                })), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e) {
                    var t = s()(this);
                    o.a.findFocusable(i.$element);
                    o.a.handleKey(e, "Dropdown", {
                        open: function() {
                            t.is(i.$anchors) && (i.open(), i.$element.attr("tabindex", -1).focus(), e.preventDefault());
                        },
                        close: function() {
                            i.close(), i.$anchors.focus();
                        }
                    });
                });
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = s()(document.body).not(this.$element), i = this;
                t.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
                    i.$anchors.is(e.target) || i.$anchors.find(e.target).length || i.$element.find(e.target).length || (i.close(), 
                    t.off("click.zf.dropdown"));
                });
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                    "aria-expanded": !0
                }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                    "aria-hidden": !1
                }), this.options.autoFocus) {
                    var e = o.a.findFocusable(this.$element);
                    e.length && e.eq(0).focus();
                }
                this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && o.a.trapFocus(this.$element), 
                this.$element.trigger("show.zf.dropdown", [ this.$element ]);
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [ this.$element ]), 
                this.options.trapFocus && o.a.releaseFocus(this.$element);
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchors.data("hover")) return;
                    this.close();
                } else this.open();
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), s()(document.body).off("click.zf.dropdown");
            }
        } ]), i;
    }();
    d.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 0,
        hOffset: 0,
        positionClass: "",
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    };
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return c;
    });
    var i = s(0), d = s.n(i), o = s(4), a = s(8), r = s(1), n = s(2), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, n["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = d.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Equalizer", this._init();
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element.attr("data-equalizer") || "", t = this.$element.find('[data-equalizer-watch="' + e + '"]');
                o.a._init(), this.$watched = t.length ? t : this.$element.find("[data-equalizer-watch]"), 
                this.$element.attr("data-resize", e || s.i(r.b)(6, "eq")), this.$element.attr("data-mutate", e || s.i(r.b)(6, "eq")), 
                this.hasNested = 0 < this.$element.find("[data-equalizer]").length, this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length, 
                this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var i, n = this.$element.find("img");
                this.options.equalizeOn ? (i = this._checkMQ(), d()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), 
                (void 0 !== i && !1 === i || void 0 === i) && (n.length ? s.i(a.a)(n, this._reflow.bind(this)) : this._reflow());
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                    "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                });
            }
        }, {
            key: "_onResizeMe",
            value: function(e) {
                this._reflow();
            }
        }, {
            key: "_onPostEqualized",
            value: function(e) {
                e.target !== this.$element[0] && this._reflow();
            }
        }, {
            key: "_events",
            value: function() {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), 
                this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0;
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var e = !o.a.is(this.options.equalizeOn);
                return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), 
                e;
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), 
                !1;
                this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this));
            }
        }, {
            key: "_isStacked",
            value: function() {
                return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
            }
        }, {
            key: "getHeights",
            value: function(e) {
                for (var t = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", 
                t.push(this.$watched[i].offsetHeight);
                e(t);
            }
        }, {
            key: "getHeightsByRow",
            value: function(e) {
                var t = this.$watched.length ? this.$watched.first().offset().top : 0, i = [], n = 0;
                i[n] = [];
                for (var s = 0, o = this.$watched.length; s < o; s++) {
                    this.$watched[s].style.height = "auto";
                    var a = d()(this.$watched[s]).offset().top;
                    a != t && (i[++n] = [], t = a), i[n].push([ this.$watched[s], this.$watched[s].offsetHeight ]);
                }
                for (var r = 0, l = i.length; r < l; r++) {
                    var c = d()(i[r]).map(function() {
                        return this[1];
                    }).get(), u = Math.max.apply(null, c);
                    i[r].push(u);
                }
                e(i);
            }
        }, {
            key: "applyHeight",
            value: function(e) {
                var t = Math.max.apply(null, e);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), 
                this.$element.trigger("postequalized.zf.equalizer");
            }
        }, {
            key: "applyHeightByRow",
            value: function(e) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var t = 0, i = e.length; t < i; t++) {
                    var n = e[t].length, s = e[t][n - 1];
                    if (n <= 2) d()(e[t][0][0]).css({
                        height: "auto"
                    }); else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var o = 0, a = n - 1; o < a; o++) d()(e[t][o][0]).css({
                            height: s
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer");
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer");
            }
        }, {
            key: "_destroy",
            value: function() {
                this._pauseEvents(), this.$watched.css("height", "auto");
            }
        } ]), i;
    }();
    c.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    };
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return r;
    });
    var n = i(0), s = i.n(n), o = i(4), a = i(2), l = i(1), c = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), r = function(e) {
        function r() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, r), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(r, a["a"]), c(r, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = s.a.extend({}, r.defaults, t), this.rules = [], 
                this.currentPath = "", this.className = "Interchange", this._init(), this._events();
            }
        }, {
            key: "_init",
            value: function() {
                o.a._init();
                var e = this.$element[0].id || i.i(l.b)(6, "interchange");
                this.$element.attr({
                    "data-resize": e,
                    id: e
                }), this._addBreakpoints(), this._generateRules(), this._reflow();
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                    return e._reflow();
                });
            }
        }, {
            key: "_reflow",
            value: function() {
                var e;
                for (var t in this.rules) if (this.rules.hasOwnProperty(t)) {
                    var i = this.rules[t];
                    window.matchMedia(i.query).matches && (e = i);
                }
                e && this.replace(e.path);
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var e in o.a.queries) if (o.a.queries.hasOwnProperty(e)) {
                    var t = o.a.queries[e];
                    r.SPECIAL_QUERIES[t.name] = t.value;
                }
            }
        }, {
            key: "_generateRules",
            value: function(e) {
                var t, i = [];
                for (var n in t = "string" == typeof (t = this.options.rules ? this.options.rules : this.$element.data("interchange")) ? t.match(/\[.*?\]/g) : t) if (t.hasOwnProperty(n)) {
                    var s = t[n].slice(1, -1).split(", "), o = s.slice(0, -1).join(""), a = s[s.length - 1];
                    r.SPECIAL_QUERIES[a] && (a = r.SPECIAL_QUERIES[a]), i.push({
                        path: o,
                        query: a
                    });
                }
                this.rules = i;
            }
        }, {
            key: "replace",
            value: function(t) {
                if (this.currentPath !== t) {
                    var i = this, n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
                        i.currentPath = t;
                    }).trigger(n) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), 
                    this.$element.css({
                        "background-image": "url(" + t + ")"
                    }).trigger(n)) : s.a.get(t, function(e) {
                        i.$element.html(e).trigger(n), s()(e).foundation(), i.currentPath = t;
                    });
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off("resizeme.zf.trigger");
            }
        } ]), r;
    }();
    r.defaults = {
        rules: null
    }, r.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return c;
    });
    var i = n(0), s = n.n(i), o = n(1), a = n(2), r = n(16), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, a["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Magellan", this._init(), this.calcPoints();
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element[0].id || n.i(o.b)(6, "magellan");
                this.$targets = s()("[data-magellan-target]"), this.$links = this.$element.find("a"), 
                this.$element.attr({
                    "data-resize": e,
                    "data-scroll": e,
                    id: e
                }), this.$active = s()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events();
            }
        }, {
            key: "calcPoints",
            value: function() {
                var i = this, e = document.body, t = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, t.clientHeight)), 
                this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)), 
                this.$targets.each(function() {
                    var e = s()(this), t = Math.round(e.offset().top - i.options.threshold);
                    e.targetPoint = t, i.points.push(t);
                });
            }
        }, {
            key: "_events",
            value: function() {
                var i = this;
                s()("html, body"), i.options.animationDuration, i.options.animationEasing;
                s()(window).one("load", function() {
                    i.options.deepLinking && location.hash && i.scrollToLoc(location.hash), i.calcPoints(), 
                    i._updateActive();
                }), this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                    e.preventDefault();
                    var t = this.getAttribute("href");
                    i.scrollToLoc(t);
                }), this._deepLinkScroll = function(e) {
                    i.options.deepLinking && i.scrollToLoc(window.location.hash);
                }, s()(window).on("popstate", this._deepLinkScroll);
            }
        }, {
            key: "scrollToLoc",
            value: function(e) {
                this._inTransition = !0;
                var t = this, i = {
                    animationEasing: this.options.animationEasing,
                    animationDuration: this.options.animationDuration,
                    threshold: this.options.threshold,
                    offset: this.options.offset
                };
                r.a.scrollToLoc(e, i, function() {
                    t._inTransition = !1, t._updateActive();
                });
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(), this._updateActive();
            }
        }, {
            key: "_updateActive",
            value: function() {
                if (!this._inTransition) {
                    var e, i = parseInt(window.pageYOffset, 10);
                    if (i + this.winHeight === this.docHeight) e = this.points.length - 1; else if (i < this.points[0]) e = void 0; else {
                        var n = this.scrollPos < i, s = this, t = this.points.filter(function(e, t) {
                            return n ? e - s.options.offset <= i : e - s.options.offset - s.options.threshold <= i;
                        });
                        e = t.length ? t.length - 1 : 0;
                    }
                    if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]').addClass(this.options.activeClass), 
                    this.options.deepLinking) {
                        var o = "";
                        null != e && (o = this.$active[0].getAttribute("href")), o !== window.location.hash && (window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o);
                    }
                    this.scrollPos = i, this.$element.trigger("update.zf.magellan", [ this.$active ]);
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), 
                this.options.deepLinking) {
                    var e = this.$active[0].getAttribute("href");
                    window.location.hash.replace(e, "");
                }
                s()(window).off("popstate", this._deepLinkScroll);
            }
        } ]), i;
    }();
    c.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        offset: 0
    };
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n;
    });
    var i = s(0), o = s.n(i), a = s(3), r = s(4), l = s(1), c = s(2), u = s(5), d = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), n = function(e) {
        function n() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, n), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(n, c["a"]), d(n, [ {
            key: "_setup",
            value: function(e, t) {
                var i = this;
                this.className = "OffCanvas", this.$element = e, this.options = o.a.extend({}, n.defaults, this.$element.data(), t), 
                this.contentClasses = {
                    base: [],
                    reveal: []
                }, this.$lastTrigger = o()(), this.$triggers = o()(), this.position = "left", this.$content = o()(), 
                this.nested = !!this.options.nested, o()([ "push", "overlap" ]).each(function(e, t) {
                    i.contentClasses.base.push("has-transition-" + t);
                }), o()([ "left", "right", "top", "bottom" ]).each(function(e, t) {
                    i.contentClasses.base.push("has-position-" + t), i.contentClasses.reveal.push("has-reveal-" + t);
                }), u.a.init(o.a), r.a._init(), this._init(), this._events(), a.a.register("OffCanvas", {
                    ESCAPE: "close"
                });
            }
        }, {
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = o()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), 
                this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, 
                !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), 
                this.$element.addClass("is-transition-" + this.options.transition + " is-closed"), 
                this.$triggers = o()(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), 
                this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, 
                !0 === this.options.contentOverlay) {
                    var t = document.createElement("div"), i = "fixed" === o()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    t.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = o()(t), "is-overlay-fixed" === i ? o()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay);
                }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), 
                !0 === this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], 
                this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), 
                this._removeContentClasses();
            }
        }, {
            key: "_events",
            value: function() {
                (this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), !0 === this.options.closeOnClick) && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                    "click.zf.offcanvas": this.close.bind(this)
                });
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var e = this;
                o()(window).on("changed.zf.mediaquery", function() {
                    r.a.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1);
                }).one("load.zf.offcanvas", function() {
                    r.a.atLeast(e.options.revealOn) && e.reveal(!0);
                });
            }
        }, {
            key: "_removeContentClasses",
            value: function(e) {
                "boolean" != typeof e ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === e && this.$content.removeClass("has-reveal-" + this.position);
            }
        }, {
            key: "_addContentClasses",
            value: function(e) {
                this._removeContentClasses(e), "boolean" != typeof e ? this.$content.addClass("has-transition-" + this.options.transition + " has-position-" + this.position) : !0 === e && this.$content.addClass("has-reveal-" + this.position);
            }
        }, {
            key: "reveal",
            value: function(e) {
                e ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), 
                this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, 
                this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), this.$element.addClass("is-closed")), this._addContentClasses(e);
            }
        }, {
            key: "_stopScrolling",
            value: function(e) {
                return !1;
            }
        }, {
            key: "_recordScrollable",
            value: function(e) {
                var t = this;
                t.scrollHeight !== t.clientHeight && (0 === t.scrollTop && (t.scrollTop = 1), t.scrollTop === t.scrollHeight - t.clientHeight && (t.scrollTop = t.scrollHeight - t.clientHeight - 1)), 
                t.allowUp = 0 < t.scrollTop, t.allowDown = t.scrollTop < t.scrollHeight - t.clientHeight, 
                t.lastY = e.originalEvent.pageY;
            }
        }, {
            key: "_stopScrollPropagation",
            value: function(e) {
                var t = e.pageY < this.lastY, i = !t;
                this.lastY = e.pageY, t && this.allowUp || i && this.allowDown ? e.stopPropagation() : e.preventDefault();
            }
        }, {
            key: "open",
            value: function(e, t) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    t && (this.$lastTrigger = t), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), 
                    this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), 
                    this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), 
                    this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.$content.addClass("is-open-" + this.position), 
                    !1 === this.options.contentScroll && (o()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), 
                    this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), 
                    !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), 
                    !0 === this.options.autoFocus && this.$element.one(s.i(l.c)(this.$element), function() {
                        if (i.$element.hasClass("is-open")) {
                            var e = i.$element.find("[data-autofocus]");
                            e.length ? e.eq(0).focus() : i.$element.find("a, button").eq(0).focus();
                        }
                    }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), a.a.trapFocus(this.$element)), 
                    this._addContentClasses();
                }
            }
        }, {
            key: "close",
            value: function(e) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var t = this;
                    this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), 
                    this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), 
                    !1 === this.options.contentScroll && (o()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), 
                    this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), 
                    !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), 
                    this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), 
                    a.a.releaseFocus(this.$element)), this.$element.one(s.i(l.c)(this.$element), function(e) {
                        t.$element.addClass("is-closed"), t._removeContentClasses();
                    });
                }
            }
        }, {
            key: "toggle",
            value: function(e, t) {
                this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t);
            }
        }, {
            key: "_handleKeyboard",
            value: function(e) {
                var t = this;
                a.a.handleKey(e, "OffCanvas", {
                    close: function() {
                        return t.close(), t.$lastTrigger.focus(), !0;
                    },
                    handled: function() {
                        e.stopPropagation(), e.preventDefault();
                    }
                });
            }
        }, {
            key: "_destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas");
            }
        } ]), n;
    }();
    n.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return p;
    });
    var i = n(0), o = n.n(i), s = n(3), u = n(6), a = n(18), r = n(8), l = n(1), c = n(2), d = n(10), h = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), p = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, c["a"]), h(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = o.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Orbit", d.a.init(o.a), this._init(), s.a.register("Orbit", {
                    ltr: {
                        ARROW_RIGHT: "next",
                        ARROW_LEFT: "previous"
                    },
                    rtl: {
                        ARROW_LEFT: "next",
                        ARROW_RIGHT: "previous"
                    }
                });
            }
        }, {
            key: "_init",
            value: function() {
                this._reset(), this.$wrapper = this.$element.find("." + this.options.containerClass), 
                this.$slides = this.$element.find("." + this.options.slideClass);
                var e = this.$element.find("img"), t = this.$slides.filter(".is-active"), i = this.$element[0].id || n.i(l.b)(6, "orbit");
                this.$element.attr({
                    "data-resize": i,
                    id: i
                }), t.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), 
                e.length ? n.i(r.a)(e, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), 
                this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && 1 < this.$slides.length && this.geoSync(), 
                this.options.accessible && this.$wrapper.attr("tabindex", 0);
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button");
            }
        }, {
            key: "geoSync",
            value: function() {
                var e = this;
                this.timer = new a.a(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function() {
                    e.changeSlide(!0);
                }), this.timer.start();
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                this._setWrapperHeight();
            }
        }, {
            key: "_setWrapperHeight",
            value: function(e) {
                var t, i = 0, n = 0, s = this;
                this.$slides.each(function() {
                    t = this.getBoundingClientRect().height, o()(this).attr("data-slide", n), /mui/g.test(o()(this)[0].className) || s.$slides.filter(".is-active")[0] === s.$slides.eq(n)[0] || o()(this).css({
                        position: "relative",
                        display: "none"
                    }), i = i < t ? t : i, n++;
                }), n === this.$slides.length && (this.$wrapper.css({
                    height: i
                }), e && e(i));
            }
        }, {
            key: "_setSlideHeight",
            value: function(e) {
                this.$slides.each(function() {
                    o()(this).css("max-height", e);
                });
            }
        }, {
            key: "_events",
            value: function() {
                var n = this;
                if (this.$element.off(".resizeme.zf.trigger").on({
                    "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                }), 1 < this.$slides.length) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                        e.preventDefault(), n.changeSlide(!0);
                    }).on("swiperight.zf.orbit", function(e) {
                        e.preventDefault(), n.changeSlide(!1);
                    }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                        n.$element.data("clickedOn", !n.$element.data("clickedOn")), n.timer[n.$element.data("clickedOn") ? "pause" : "start"]();
                    }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                        n.timer.pause();
                    }).on("mouseleave.zf.orbit", function() {
                        n.$element.data("clickedOn") || n.timer.start();
                    })), this.options.navButtons) this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e) {
                        e.preventDefault(), n.changeSlide(o()(this).hasClass(n.options.nextClass));
                    });
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var e = o()(this).data("slide"), t = e > n.$slides.filter(".is-active").data("slide"), i = n.$slides.eq(e);
                        n.changeSlide(t, i, e);
                    }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
                        s.a.handleKey(e, "Orbit", {
                            next: function() {
                                n.changeSlide(!0);
                            },
                            previous: function() {
                                n.changeSlide(!1);
                            },
                            handled: function() {
                                o()(e.target).is(n.$bullets) && n.$bullets.filter(".is-active").focus();
                            }
                        });
                    });
                }
            }
        }, {
            key: "_reset",
            value: function() {
                void 0 !== this.$slides && 1 < this.$slides.length && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), 
                this.options.autoPlay && this.timer.restart(), this.$slides.each(function(e) {
                    o()(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide();
                }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [ this.$slides.first() ]), 
                this.options.bullets && this._updateBullets(0));
            }
        }, {
            key: "changeSlide",
            value: function(e, t, i) {
                if (this.$slides) {
                    var n = this.$slides.filter(".is-active").eq(0);
                    if (/mui/g.test(n[0].className)) return !1;
                    var s, o = this.$slides.first(), a = this.$slides.last(), r = e ? "Right" : "Left", l = e ? "Left" : "Right", c = this;
                    (s = t || (e ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : a : n.prev("." + this.options.slideClass))).length && (this.$element.trigger("beforeslidechange.zf.orbit", [ n, s ]), 
                    this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), 
                    this.options.useMUI && !this.$element.is(":hidden") ? (u.a.animateIn(s.addClass("is-active").css({
                        position: "absolute",
                        top: 0
                    }), this.options["animInFrom" + r], function() {
                        s.css({
                            position: "relative",
                            display: "block"
                        }).attr("aria-live", "polite");
                    }), u.a.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function() {
                        n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart();
                    })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), 
                    this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [ s ]));
                }
            }
        }, {
            key: "_updateBullets",
            value: function(e) {
                var t = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
                this.$bullets.eq(e).addClass("is-active").append(t);
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
            }
        } ]), i;
    }();
    p.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    };
}, function(e, t, u) {
    "use strict";
    u.d(t, "a", function() {
        return c;
    });
    var i = u(0), d = u.n(i), a = u(4), h = u(1), n = u(2), s = u(11), o = u(17), r = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), l = {
        tabs: {
            cssClass: "tabs",
            plugin: o.a
        },
        accordion: {
            cssClass: "accordion",
            plugin: s.a
        }
    }, c = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, n["a"]), r(t, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = d()(e), this.options = d.a.extend({}, this.$element.data(), t), 
                this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, 
                this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", u.i(h.b)(6, "responsiveaccordiontabs")), 
                this._init(), this._events();
            }
        }, {
            key: "_init",
            value: function() {
                if (a.a._init(), "string" == typeof this.rules) {
                    for (var e = {}, t = this.rules.split(" "), i = 0; i < t.length; i++) {
                        var n = t[i].split("-"), s = 1 < n.length ? n[0] : "small", o = 1 < n.length ? n[1] : n[0];
                        null !== l[o] && (e[s] = l[o]);
                    }
                    this.rules = e;
                }
                this._getAllOptions(), d.a.isEmptyObject(this.rules) || this._checkMediaQueries();
            }
        }, {
            key: "_getAllOptions",
            value: function() {
                for (var e in this.allOptions = {}, l) if (l.hasOwnProperty(e)) {
                    var t = l[e];
                    try {
                        var i = d()("<ul></ul>"), n = new t.plugin(i, this.options);
                        for (var s in n.options) if (n.options.hasOwnProperty(s) && "zfPlugin" !== s) {
                            var o = n.options[s];
                            this.allOptions[s] = o;
                        }
                        n.destroy();
                    } catch (e) {}
                }
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                d()(window).on("changed.zf.mediaquery", function() {
                    e._checkMediaQueries();
                });
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var t, i = this;
                d.a.each(this.rules, function(e) {
                    a.a.atLeast(e) && (t = e);
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (d.a.each(l, function(e, t) {
                    i.$element.removeClass(t.cssClass);
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), 
                this.currentPlugin.destroy()), this._handleMarkup(this.rules[t].cssClass), this.currentPlugin = new this.rules[t].plugin(this.$element, {}), 
                this.storezfData = this.currentPlugin.$element.data("zfPlugin")));
            }
        }, {
            key: "_handleMarkup",
            value: function(e) {
                var i = this, t = "accordion", n = d()("[data-tabs-content=" + this.$element.attr("id") + "]");
                if (n.length && (t = "tabs"), t !== e) {
                    var s = i.allOptions.linkClass ? i.allOptions.linkClass : "tabs-title", o = i.allOptions.panelClass ? i.allOptions.panelClass : "tabs-panel";
                    this.$element.removeAttr("role");
                    var a = this.$element.children("." + s + ",[data-accordion-item]").removeClass(s).removeClass("accordion-item").removeAttr("data-accordion-item"), r = a.children("a").removeClass("accordion-title");
                    if ("tabs" === t ? (n = n.children("." + o).removeClass(o).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : n = a.children("[data-tab-content]").removeClass("accordion-content"), 
                    n.css({
                        display: "",
                        visibility: ""
                    }), a.css({
                        display: "",
                        visibility: ""
                    }), "accordion" === e) n.each(function(e, t) {
                        d()(t).appendTo(a.get(e)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                            height: ""
                        }), d()("[data-tabs-content=" + i.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + i.$element.attr("id") + '"></div>').detach(), 
                        a.addClass("accordion-item").attr("data-accordion-item", ""), r.addClass("accordion-title");
                    }); else if ("tabs" === e) {
                        var l = d()("[data-tabs-content=" + i.$element.attr("id") + "]"), c = d()("#tabs-placeholder-" + i.$element.attr("id"));
                        c.length ? (l = d()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content", i.$element.attr("id")), 
                        c.remove()) : l = d()('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content", i.$element.attr("id")), 
                        n.each(function(e, t) {
                            var i = d()(t).appendTo(l).addClass(o), n = r.get(e).hash.slice(1), s = d()(t).attr("id") || u.i(h.b)(6, "accordion");
                            n !== s && ("" !== n ? d()(t).attr("id", n) : (n = s, d()(t).attr("id", n), d()(r.get(e)).attr("href", d()(r.get(e)).attr("href").replace("#", "") + "#" + n))), 
                            d()(a.get(e)).hasClass("is-active") && i.addClass("is-active");
                        }), a.addClass(s);
                    }
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin && this.currentPlugin.destroy(), d()(window).off(".zf.ResponsiveAccordionTabs");
            }
        } ]), t;
    }();
    c.defaults = {};
}, function(e, t, a) {
    "use strict";
    a.d(t, "a", function() {
        return p;
    });
    var i = a(0), r = a.n(i), l = a(4), c = a(1), n = a(2), s = a(14), o = a(13), u = a(12), d = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), h = {
        dropdown: {
            cssClass: "dropdown",
            plugin: s.a
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: o.a
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: u.a
        }
    }, p = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, n["a"]), d(t, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = r()(e), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, 
                this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events();
            }
        }, {
            key: "_init",
            value: function() {
                if (l.a._init(), "string" == typeof this.rules) {
                    for (var e = {}, t = this.rules.split(" "), i = 0; i < t.length; i++) {
                        var n = t[i].split("-"), s = 1 < n.length ? n[0] : "small", o = 1 < n.length ? n[1] : n[0];
                        null !== h[o] && (e[s] = h[o]);
                    }
                    this.rules = e;
                }
                r.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || a.i(c.b)(6, "responsive-menu"));
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                r()(window).on("changed.zf.mediaquery", function() {
                    e._checkMediaQueries();
                });
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var t, i = this;
                r.a.each(this.rules, function(e) {
                    l.a.atLeast(e) && (t = e);
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (r.a.each(h, function(e, t) {
                    i.$element.removeClass(t.cssClass);
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), 
                this.currentPlugin = new this.rules[t].plugin(this.$element, {})));
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin.destroy(), r()(window).off(".zf.ResponsiveMenu");
            }
        } ]), t;
    }();
    p.defaults = {};
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return c;
    });
    var n = i(0), s = i.n(n), o = i(4), a = i(6), r = i(2), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, r["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = s()(e), this.options = s.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "ResponsiveToggle", this._init(), this._events();
            }
        }, {
            key: "_init",
            value: function() {
                o.a._init();
                var t = this.$element.data("responsive-toggle");
                if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), 
                this.$targetMenu = s()("#" + t), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                    var e = s()(this).data("toggle");
                    return e === t || "" === e;
                }), this.options = s.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate) {
                    var e = this.options.animate.split(" ");
                    this.animationIn = e[0], this.animationOut = e[1] || null;
                }
                this._update();
            }
        }, {
            key: "_events",
            value: function() {
                this._updateMqHandler = this._update.bind(this), s()(window).on("changed.zf.mediaquery", this._updateMqHandler), 
                this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
            }
        }, {
            key: "_update",
            value: function() {
                o.a.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), 
                this.$targetMenu.hide());
            }
        }, {
            key: "toggleMenu",
            value: function() {
                var e = this;
                o.a.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? a.a.animateIn(this.$targetMenu, this.animationIn, function() {
                    e.$element.trigger("toggled.zf.responsiveToggle"), e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger");
                }) : a.a.animateOut(this.$targetMenu, this.animationOut, function() {
                    e.$element.trigger("toggled.zf.responsiveToggle");
                }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), 
                this.$element.trigger("toggled.zf.responsiveToggle")));
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), 
                s()(window).off("changed.zf.mediaquery", this._updateMqHandler);
            }
        } ]), i;
    }();
    c.defaults = {
        hideFor: "medium",
        animate: !1
    };
}, function(e, t, i) {
    "use strict";
    function n() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent) || /Android/.test(window.navigator.userAgent);
    }
    i.d(t, "a", function() {
        return h;
    });
    var s = i(0), a = i.n(s), o = i(3), r = i(4), l = i(6), c = i(2), u = i(5), d = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), h = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, c["a"]), d(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = a.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Reveal", this._init(), u.a.init(a.a), o.a.register("Reveal", {
                    ESCAPE: "close"
                });
            }
        }, {
            key: "_init",
            value: function() {
                r.a._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: r.a.current
                }, this.isMobile = n(), this.$anchor = a()('[data-open="' + this.id + '"]').length ? a()('[data-open="' + this.id + '"]') : a()('[data-toggle="' + this.id + '"]'), 
                this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, 
                this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), 
                this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(a()(this.options.appendTo)), 
                this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && a()(window).one("load.zf.reveal", this.open.bind(this));
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                var e = "";
                return this.options.additionalOverlayClasses && (e = " " + this.options.additionalOverlayClasses), 
                a()("<div></div>").addClass("reveal-overlay" + e).appendTo(this.options.appendTo);
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var e, t, i = this.$element.outerWidth(), n = a()(window).width(), s = this.$element.outerHeight(), o = a()(window).height();
                e = "auto" === this.options.hOffset ? parseInt((n - i) / 2, 10) : parseInt(this.options.hOffset, 10), 
                t = "auto" === this.options.vOffset ? o < s ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - s) / 4, 10) : parseInt(this.options.vOffset, 10), 
                this.$element.css({
                    top: t + "px"
                }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: e + "px"
                }), this.$element.css({
                    margin: "0px"
                }));
            }
        }, {
            key: "_events",
            value: function() {
                var i = this, n = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(e, t) {
                        if (e.target === n.$element[0] || a()(e.target).parents("[data-closable]")[0] === t) return i.close.apply(i);
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        n._updatePosition();
                    }
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                    e.target !== n.$element[0] && !a.a.contains(n.$element[0], e.target) && a.a.contains(document, e.target) && n.close();
                }), this.options.deepLink && a()(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this));
            }
        }, {
            key: "_handleState",
            value: function(e) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open();
            }
        }, {
            key: "open",
            value: function() {
                function e() {
                    n.isMobile ? (n.originalScrollPos || (n.originalScrollPos = window.pageYOffset), 
                    a()("html, body").addClass("is-reveal-open")) : a()("body").addClass("is-reveal-open");
                }
                var t = this;
                if (this.options.deepLink) {
                    var i = "#" + this.id;
                    window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", i) : window.history.replaceState({}, "", i) : window.location.hash = i;
                }
                this.isActive = !0, this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(), this._updatePosition(), this.$element.hide().css({
                    visibility: ""
                }), this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), 
                this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                var n = this;
                if (this.options.animationIn) {
                    this.options.overlay && l.a.animateIn(this.$overlay, "fade-in"), l.a.animateIn(this.$element, this.options.animationIn, function() {
                        t.$element && (t.focusableElements = o.a.findFocusable(t.$element), n.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }).focus(), e(), o.a.trapFocus(n.$element));
                    });
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), o.a.trapFocus(this.$element), e(), this._extraHandlers(), this.$element.trigger("open.zf.reveal");
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var t = this;
                this.$element && (this.focusableElements = o.a.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || a()("body").on("click.zf.reveal", function(e) {
                    e.target !== t.$element[0] && !a.a.contains(t.$element[0], e.target) && a.a.contains(document, e.target) && t.close();
                }), this.options.closeOnEsc && a()(window).on("keydown.zf.reveal", function(e) {
                    o.a.handleKey(e, "Reveal", {
                        close: function() {
                            t.options.closeOnEsc && t.close();
                        }
                    });
                }));
            }
        }, {
            key: "close",
            value: function() {
                function e() {
                    t.isMobile ? (0 === a()(".reveal:visible").length && a()("html, body").removeClass("is-reveal-open"), 
                    t.originalScrollPos && (a()("body").scrollTop(t.originalScrollPos), t.originalScrollPos = null)) : 0 === a()(".reveal:visible").length && a()("body").removeClass("is-reveal-open"), 
                    o.a.releaseFocus(t.$element), t.$element.attr("aria-hidden", !0), t.$element.trigger("closed.zf.reveal");
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var t = this;
                this.options.animationOut ? (this.options.overlay && l.a.animateOut(this.$overlay, "fade-out"), 
                l.a.animateOut(this.$element, this.options.animationOut, e)) : (this.$element.hide(this.options.hideDelay), 
                this.options.overlay ? this.$overlay.hide(0, e) : e()), this.options.closeOnEsc && a()(window).off("keydown.zf.reveal"), 
                !this.options.overlay && this.options.closeOnClick && a()("body").off("click.zf.reveal"), 
                this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), 
                this.isActive = !1, t.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = ""), 
                this.$anchor.focus();
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open();
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo(a()(this.options.appendTo)), this.$overlay.hide().off().remove()), 
                this.$element.hide().off(), this.$anchor.off(".zf"), a()(window).off(".zf.reveal:" + this.id);
            }
        } ]), i;
    }();
    h.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        updateHistory: !1,
        appendTo: "body",
        additionalOverlayClasses: ""
    };
}, function(e, t, _) {
    "use strict";
    function x(e, t) {
        return e / t;
    }
    function m(e, t, i, n) {
        return Math.abs(e.position()[t] + e[n]() / 2 - i);
    }
    _.d(t, "a", function() {
        return l;
    });
    var i = _(0), g = _.n(i), a = _(3), C = _(6), v = _(1), n = _(2), s = _(10), o = _(5), r = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), l = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, n["a"]), r(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = g.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Slider", s.a.init(g.a), o.a.init(g.a), this._init(), a.a.register("Slider", {
                    ltr: {
                        ARROW_RIGHT: "increase",
                        ARROW_UP: "increase",
                        ARROW_DOWN: "decrease",
                        ARROW_LEFT: "decrease",
                        SHIFT_ARROW_RIGHT: "increase_fast",
                        SHIFT_ARROW_UP: "increase_fast",
                        SHIFT_ARROW_DOWN: "decrease_fast",
                        SHIFT_ARROW_LEFT: "decrease_fast",
                        HOME: "min",
                        END: "max"
                    },
                    rtl: {
                        ARROW_LEFT: "increase",
                        ARROW_RIGHT: "decrease",
                        SHIFT_ARROW_LEFT: "increase_fast",
                        SHIFT_ARROW_RIGHT: "decrease_fast"
                    }
                });
            }
        }, {
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), 
                this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : g()("#" + this.$handle.attr("aria-controls")), 
                this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, 
                this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = g()().add(this.$input), 
                this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, 
                this.$handle2 = this.handles.eq(1), this.$input2 = 1 < this.inputs.length ? this.inputs.eq(1) : g()("#" + this.$handle2.attr("aria-controls")), 
                this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), !0, this._setInitAttr(1)), 
                this.setHandles(), this._events();
            }
        }, {
            key: "setHandles",
            value: function() {
                var e = this;
                this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                    e._setHandlePos(e.$handle2, e.inputs.eq(1).val(), !0);
                }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0);
            }
        }, {
            key: "_reflow",
            value: function() {
                this.setHandles();
            }
        }, {
            key: "_pctOfBar",
            value: function(e) {
                var t = x(e - this.options.start, this.options.end - this.options.start);
                switch (this.options.positionValueFunction) {
                  case "pow":
                    t = this._logTransform(t);
                    break;

                  case "log":
                    t = this._powTransform(t);
                }
                return t.toFixed(2);
            }
        }, {
            key: "_value",
            value: function(e) {
                switch (this.options.positionValueFunction) {
                  case "pow":
                    e = this._powTransform(e);
                    break;

                  case "log":
                    e = this._logTransform(e);
                }
                return (this.options.end - this.options.start) * e + this.options.start;
            }
        }, {
            key: "_logTransform",
            value: function(e) {
                return t = this.options.nonLinearBase, i = e * (this.options.nonLinearBase - 1) + 1, 
                Math.log(i) / Math.log(t);
                var t, i;
            }
        }, {
            key: "_powTransform",
            value: function(e) {
                return (Math.pow(this.options.nonLinearBase, e) - 1) / (this.options.nonLinearBase - 1);
            }
        }, {
            key: "_setHandlePos",
            value: function(e, t, i, n) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    (t = parseFloat(t)) < this.options.start ? t = this.options.start : t > this.options.end && (t = this.options.end);
                    var s = this.options.doubleSided;
                    if (this.options.vertical && !i && (t = this.options.end - t), s) if (0 === this.handles.index(e)) {
                        var o = parseFloat(this.$handle2.attr("aria-valuenow"));
                        t = o <= t ? o - this.options.step : t;
                    } else {
                        var a = parseFloat(this.$handle.attr("aria-valuenow"));
                        t = t <= a ? a + this.options.step : t;
                    }
                    var r = this, l = this.options.vertical, c = l ? "height" : "width", u = l ? "top" : "left", d = e[0].getBoundingClientRect()[c], h = this.$element[0].getBoundingClientRect()[c], p = this._pctOfBar(t), f = (100 * x((h - d) * p, h)).toFixed(this.options.decimal);
                    t = parseFloat(t.toFixed(this.options.decimal));
                    var m = {};
                    if (this._setValues(e, t), s) {
                        var g, v = 0 === this.handles.index(e), y = ~~(100 * x(d, h));
                        if (v) m[u] = f + "%", g = parseFloat(this.$handle2[0].style[u]) - f + y, n && "function" == typeof n && n(); else {
                            var w = parseFloat(this.$handle[0].style[u]);
                            g = f - (isNaN(w) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : w) + y;
                        }
                        m["min-" + c] = g + "%";
                    }
                    this.$element.one("finished.zf.animate", function() {
                        r.$element.trigger("moved.zf.slider", [ e ]);
                    });
                    var b = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                    _.i(C.b)(b, e, function() {
                        isNaN(f) ? e.css(u, 100 * p + "%") : e.css(u, f + "%"), r.options.doubleSided ? r.$fill.css(m) : r.$fill.css(c, 100 * p + "%");
                    }), clearTimeout(r.timeout), r.timeout = setTimeout(function() {
                        r.$element.trigger("changed.zf.slider", [ e ]);
                    }, r.options.changedDelay);
                }
            }
        }, {
            key: "_setInitAttr",
            value: function(e) {
                var t = 0 === e ? this.options.initialStart : this.options.initialEnd, i = this.inputs.eq(e).attr("id") || _.i(v.b)(6, "slider");
                this.inputs.eq(e).attr({
                    id: i,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.inputs.eq(e).val(t), this.handles.eq(e).attr({
                    role: "slider",
                    "aria-controls": i,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": t,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                });
            }
        }, {
            key: "_setValues",
            value: function(e, t) {
                var i = this.options.doubleSided ? this.handles.index(e) : 0;
                this.inputs.eq(i).val(t), e.attr("aria-valuenow", t);
            }
        }, {
            key: "_handleEvent",
            value: function(e, t, i) {
                var n, s;
                if (i) n = this._adjustValue(null, i), s = !0; else {
                    e.preventDefault();
                    var o = this.options.vertical, a = o ? "height" : "width", r = o ? "top" : "left", l = o ? e.pageY : e.pageX, c = (this.$handle[0].getBoundingClientRect()[a], 
                    this.$element[0].getBoundingClientRect()[a]), u = o ? g()(window).scrollTop() : g()(window).scrollLeft(), d = this.$element.offset()[r];
                    e.clientY === e.pageY && (l += u);
                    var h, p = l - d, f = x(h = p < 0 ? 0 : c < p ? c : p, c);
                    if (n = this._value(f), _.i(v.a)() && !this.options.vertical && (n = this.options.end - n), 
                    n = this._adjustValue(null, n), s = !1, !t) t = m(this.$handle, r, h, a) <= m(this.$handle2, r, h, a) ? this.$handle : this.$handle2;
                }
                this._setHandlePos(t, n, s);
            }
        }, {
            key: "_adjustValue",
            value: function(e, t) {
                var i, n, s, o = this.options.step, a = parseFloat(o / 2);
                return 0 === (n = (i = e ? parseFloat(e.attr("aria-valuenow")) : t) % o) ? i : i = (s = i - n) + a <= i ? s + o : s;
            }
        }, {
            key: "_events",
            value: function() {
                this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2);
            }
        }, {
            key: "_eventsForHandle",
            value: function(t) {
                var i, o = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
                    var t = o.inputs.index(g()(this));
                    o._handleEvent(e, o.handles.eq(t), g()(this).val());
                }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                    if (o.$element.data("dragging")) return !1;
                    g()(e.target).is("[data-slider-handle]") || (o.options.doubleSided ? o._handleEvent(e) : o._handleEvent(e, o.$handle));
                }), this.options.draggable) {
                    this.handles.addTouch();
                    var n = g()("body");
                    t.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e) {
                        t.addClass("is-dragging"), o.$fill.addClass("is-dragging"), o.$element.data("dragging", !0), 
                        i = g()(e.currentTarget), n.on("mousemove.zf.slider", function(e) {
                            e.preventDefault(), o._handleEvent(e, i);
                        }).on("mouseup.zf.slider", function(e) {
                            o._handleEvent(e, i), t.removeClass("is-dragging"), o.$fill.removeClass("is-dragging"), 
                            o.$element.data("dragging", !1), n.off("mousemove.zf.slider mouseup.zf.slider");
                        });
                    }).on("selectstart.zf.slider touchmove.zf.slider", function(e) {
                        e.preventDefault();
                    });
                }
                t.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                    var t, i = g()(this), n = o.options.doubleSided ? o.handles.index(i) : 0, s = parseFloat(o.inputs.eq(n).val());
                    a.a.handleKey(e, "Slider", {
                        decrease: function() {
                            t = s - o.options.step;
                        },
                        increase: function() {
                            t = s + o.options.step;
                        },
                        decrease_fast: function() {
                            t = s - 10 * o.options.step;
                        },
                        increase_fast: function() {
                            t = s + 10 * o.options.step;
                        },
                        min: function() {
                            t = o.options.start;
                        },
                        max: function() {
                            t = o.options.end;
                        },
                        handled: function() {
                            e.preventDefault(), o._setHandlePos(i, t, !0);
                        }
                    });
                });
            }
        }, {
            key: "_destroy",
            value: function() {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), 
                clearTimeout(this.timeout);
            }
        } ]), i;
    }();
    l.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * e;
    }
    n.d(t, "a", function() {
        return d;
    });
    var i = n(0), l = n.n(i), s = n(1), c = n(4), o = n(2), a = n(5), u = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), d = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, o["a"]), u(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = l.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Sticky", a.a.init(l.a), this._init();
            }
        }, {
            key: "_init",
            value: function() {
                c.a._init();
                var e = this.$element.parent("[data-sticky-container]"), t = this.$element[0].id || n.i(s.b)(6, "sticky"), i = this;
                e.length ? this.$container = e : (this.wasWrapped = !0, this.$element.wrap(this.options.container), 
                this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), 
                this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": t,
                    "data-mutate": t
                }), "" !== this.options.anchor && l()("#" + i.options.anchor).attr({
                    "data-mutate": t
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, l()(window).one("load.zf.sticky", function() {
                    i.containerHeight = "none" == i.$element.css("display") ? 0 : i.$element[0].getBoundingClientRect().height, 
                    i.$container.css("height", i.containerHeight), i.elemHeight = i.containerHeight, 
                    "" !== i.options.anchor ? i.$anchor = l()("#" + i.options.anchor) : i._parsePoints(), 
                    i._setSizes(function() {
                        var e = window.pageYOffset;
                        i._calc(!1, e), i.isStuck || i._removeSticky(!(e >= i.topPoint));
                    }), i._events(t.split("-").reverse().join("-"));
                });
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var e = [ "" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor ], t = {}, i = 0, n = e.length; i < n && e[i]; i++) {
                    var s;
                    if ("number" == typeof e[i]) s = e[i]; else {
                        var o = e[i].split(":"), a = l()("#" + o[0]);
                        s = a.offset().top, o[1] && "bottom" === o[1].toLowerCase() && (s += a[0].getBoundingClientRect().height);
                    }
                    t[i] = s;
                }
                this.points = t;
            }
        }, {
            key: "_events",
            value: function(i) {
                var n = this, e = this.scrollListener = "scroll.zf." + i;
                this.isOn || (this.canStick && (this.isOn = !0, l()(window).off(e).on(e, function(e) {
                    0 === n.scrollCount ? (n.scrollCount = n.options.checkEvery, n._setSizes(function() {
                        n._calc(!1, window.pageYOffset);
                    })) : (n.scrollCount--, n._calc(!1, window.pageYOffset));
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e, t) {
                    n._eventsHandler(i);
                }), this.$element.on("mutateme.zf.trigger", function(e, t) {
                    n._eventsHandler(i);
                }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function(e, t) {
                    n._eventsHandler(i);
                }));
            }
        }, {
            key: "_eventsHandler",
            value: function(e) {
                var t = this, i = this.scrollListener = "scroll.zf." + e;
                t._setSizes(function() {
                    t._calc(!1), t.canStick ? t.isOn || t._events(e) : t.isOn && t._pauseListeners(i);
                });
            }
        }, {
            key: "_pauseListeners",
            value: function(e) {
                this.isOn = !1, l()(window).off(e), this.$element.trigger("pause.zf.sticky");
            }
        }, {
            key: "_calc",
            value: function(e, t) {
                if (e && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), 
                !1;
                t || (t = window.pageYOffset), t >= this.topPoint ? t <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0);
            }
        }, {
            key: "_setSticky",
            value: function() {
                var e = this, t = this.options.stickTo, i = "top" === t ? "marginTop" : "marginBottom", n = "top" === t ? "bottom" : "top", s = {};
                s[i] = this.options[i] + "em", s[t] = 0, s[n] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + n).addClass("is-stuck is-at-" + t).css(s).trigger("sticky.zf.stuckto:" + t), 
                this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    e._setSizes();
                });
            }
        }, {
            key: "_removeSticky",
            value: function(e) {
                var t = this.options.stickTo, i = "top" === t, n = {}, s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, o = e ? "top" : "bottom";
                n[i ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = e ? 0 : s, this.isStuck = !1, 
                this.$element.removeClass("is-stuck is-at-" + t).addClass("is-anchored is-at-" + o).css(n).trigger("sticky.zf.unstuckfrom:" + o);
            }
        }, {
            key: "_setSizes",
            value: function(e) {
                this.canStick = c.a.is(this.options.stickyOn), this.canStick || e && "function" == typeof e && e();
                var t = this.$container[0].getBoundingClientRect().width, i = window.getComputedStyle(this.$container[0]), n = parseInt(i["padding-left"], 10), s = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), 
                this.$element.css({
                    "max-width": t - n - s + "px"
                });
                var o = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (o = 0), this.containerHeight = o, 
                this.$container.css({
                    height: o
                }), this.elemHeight = o, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                    var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", a);
                }
                this._setBreakPoints(o, function() {
                    e && "function" == typeof e && e();
                });
            }
        }, {
            key: "_setBreakPoints",
            value: function(e, t) {
                if (!this.canStick) {
                    if (!t || "function" != typeof t) return !1;
                    t();
                }
                var i = r(this.options.marginTop), n = r(this.options.marginBottom), s = this.points ? this.points[0] : this.$anchor.offset().top, o = this.points ? this.points[1] : s + this.anchorHeight, a = window.innerHeight;
                "top" === this.options.stickTo ? (s -= i, o -= e + i) : "bottom" === this.options.stickTo && (s -= a - (e + n), 
                o -= a - n), this.topPoint = s, this.bottomPoint = o, t && "function" == typeof t && t();
            }
        }, {
            key: "_destroy",
            value: function() {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), 
                l()(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                });
            }
        } ]), i;
    }();
    d.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
}, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return c;
    });
    var n = i(0), s = i.n(n), o = i(6), a = i(2), r = i(5), l = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), c = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, a["a"]), l(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = s.a.extend({}, i.defaults, e.data(), t), this.className = "", 
                this.className = "Toggler", r.a.init(s.a), this._init(), this._events();
            }
        }, {
            key: "_init",
            value: function() {
                var e;
                this.options.animate ? (e = this.options.animate.split(" "), this.animationIn = e[0], 
                this.animationOut = e[1] || null) : (e = this.$element.data("toggler"), this.className = "." === e[0] ? e.slice(1) : e);
                var t = this.$element[0].id;
                s()('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-controls", t), 
                this.$element.attr("aria-expanded", !this.$element.is(":hidden"));
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var e = this.$element.hasClass(this.className);
                e ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), 
                this._updateARIA(e), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger");
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var e = this;
                this.$element.is(":hidden") ? o.a.animateIn(this.$element, this.animationIn, function() {
                    e._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                }) : o.a.animateOut(this.$element, this.animationOut, function() {
                    e._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                });
            }
        }, {
            key: "_updateARIA",
            value: function(e) {
                this.$element.attr("aria-expanded", !!e);
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.toggler");
            }
        } ]), i;
    }();
    c.defaults = {
        animate: !1
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d;
    });
    var i = n(0), s = n.n(i), o = n(1), a = n(4), r = n(5), l = n(15), c = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        };
    }(), u = function e(t, i, n) {
        null === t && (t = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(t, i);
        if (void 0 === s) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, i, n);
        }
        if ("value" in s) return s.value;
        var a = s.get;
        return void 0 !== a ? a.call(n) : void 0;
    }, d = function(e) {
        function i() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(i, l["a"]), c(i, [ {
            key: "_setup",
            value: function(e, t) {
                this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), 
                this.className = "Tooltip", this.isActive = !1, this.isClick = !1, r.a.init(s.a), 
                this._init();
            }
        }, {
            key: "_init",
            value: function() {
                a.a._init();
                var e = this.$element.attr("aria-describedby") || n.i(o.b)(6, "tooltip");
                this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? s()(this.options.template) : this._buildTemplate(e), 
                this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), 
                this.$element.attr({
                    title: "",
                    "aria-describedby": e,
                    "data-yeti-box": e,
                    "data-toggle": e,
                    "data-resize": e
                }).addClass(this.options.triggerClass), u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_init", this).call(this), 
                this._events();
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var e = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
                return e ? e[0] : "top";
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                return "center";
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset;
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset;
            }
        }, {
            key: "_buildTemplate",
            value: function(e) {
                var t = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim();
                return s()("<div></div>").addClass(t).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: e
                });
            }
        }, {
            key: "_setPosition",
            value: function() {
                u(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_setPosition", this).call(this, this.$element, this.template);
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !a.a.is(this.options.showOn)) return !1;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), 
                this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), 
                this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), 
                this.$element.trigger("show.zf.tooltip");
            }
        }, {
            key: "hide",
            value: function() {
                var e = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    e.isActive = !1, e.isClick = !1;
                }), this.$element.trigger("hide.zf.tooltip");
            }
        }, {
            key: "_events",
            value: function() {
                var t = this, i = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    t.isActive || (t.timeout = setTimeout(function() {
                        t.show();
                    }, t.options.hoverDelay));
                }).on("mouseleave.zf.tooltip", function(e) {
                    clearTimeout(t.timeout), (!i || t.isClick && !t.options.clickOpen) && t.hide();
                }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show());
                }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), t.isClick = !0;
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    t.isActive ? t.hide() : t.show();
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(e) {
                    if (i = !0, t.isClick) return t.options.clickOpen || (i = !1), !1;
                    t.show();
                }).on("focusout.zf.tooltip", function(e) {
                    i = !1, t.isClick = !1, t.hide();
                }).on("resizeme.zf.trigger", function() {
                    t.isActive && t._setPosition();
                });
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show();
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), 
                this.template.remove();
            }
        } ]), i;
    }();
    d.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !1,
        vOffset: 0,
        hOffset: 0,
        tooltipHeight: 14,
        tooltipWidth: 12,
        allowHtml: !1
    };
}, function(e, t, i) {
    e.exports = i(19);
} ]), function(t, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], function(e) {
        return i(t, e);
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery);
}(window, function(e, t) {
    "use strict";
    function i(c, s, u) {
        (u = u || t || e.jQuery) && (s.prototype.option || (s.prototype.option = function(e) {
            u.isPlainObject(e) && (this.options = u.extend(!0, this.options, e));
        }), u.fn[c] = function(e) {
            if ("string" == typeof e) {
                var t = d.call(arguments, 1);
                return a = t, l = "$()." + c + '("' + (o = e) + '")', (i = this).each(function(e, t) {
                    var i = u.data(t, c);
                    if (i) {
                        var n = i[o];
                        if (n && "_" != o.charAt(0)) {
                            var s = n.apply(i, a);
                            r = void 0 === r ? s : r;
                        } else h(l + " is not a valid method");
                    } else h(c + " not initialized. Cannot call methods, i.e. " + l);
                }), void 0 !== r ? r : i;
            }
            var i, o, a, r, l, n;
            return n = e, this.each(function(e, t) {
                var i = u.data(t, c);
                i ? (i.option(n), i._init()) : (i = new s(t, n), u.data(t, c, i));
            }), this;
        }, n(u));
    }
    function n(e) {
        !e || e && e.bridget || (e.bridget = i);
    }
    var d = Array.prototype.slice, s = e.console, h = void 0 === s ? function() {} : function(e) {
        s.error(e);
    };
    return n(t || e.jQuery), i;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this;
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this;
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this;
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0, s = i[n];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; s; ) {
                var a = o && o[s];
                a && (this.off(e, s), delete o[s]), s.apply(this, t), s = i[n += a ? 0 : 1];
            }
            return this;
        }
    }, e;
}), function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return t();
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t();
}(window, function() {
    "use strict";
    function v(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t;
    }
    function y(e) {
        var t = getComputedStyle(e);
        return t || i("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), 
        t;
    }
    function w(e) {
        if (function() {
            if (!C) {
                C = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
                e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var t = document.body || document.documentElement;
                t.appendChild(e);
                var i = y(e);
                w.isBoxSizeOuter = b = 200 == v(i.width), t.removeChild(e);
            }
        }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = y(e);
            if ("none" == t.display) return function() {
                for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0; t < x; t++) e[_[t]] = 0;
                return e;
            }();
            var i = {};
            i.width = e.offsetWidth, i.height = e.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == t.boxSizing, s = 0; s < x; s++) {
                var o = _[s], a = t[o], r = parseFloat(a);
                i[o] = isNaN(r) ? 0 : r;
            }
            var l = i.paddingLeft + i.paddingRight, c = i.paddingTop + i.paddingBottom, u = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom, h = i.borderLeftWidth + i.borderRightWidth, p = i.borderTopWidth + i.borderBottomWidth, f = n && b, m = v(t.width);
            !1 !== m && (i.width = m + (f ? 0 : l + h));
            var g = v(t.height);
            return !1 !== g && (i.height = g + (f ? 0 : c + p)), i.innerWidth = i.width - (l + h), 
            i.innerHeight = i.height - (c + p), i.outerWidth = i.width + u, i.outerHeight = i.height + d, 
            i;
        }
    }
    var b, i = "undefined" == typeof console ? function() {} : function(e) {
        console.error(e);
    }, _ = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], x = _.length, C = !1;
    return w;
}), function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t();
}(window, function() {
    "use strict";
    var i = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = [ "webkit", "moz", "ms", "o" ], i = 0; i < t.length; i++) {
            var n = t[i] + "MatchesSelector";
            if (e[n]) return n;
        }
    }();
    return function(e, t) {
        return e[i](t);
    };
}), function(t, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], function(e) {
        return i(t, e);
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector);
}(window, function(c, o) {
    var u = {
        extend: function(e, t) {
            for (var i in t) e[i] = t[i];
            return e;
        },
        modulo: function(e, t) {
            return (e % t + t) % t;
        },
        makeArray: function(e) {
            var t = [];
            if (Array.isArray(e)) t = e; else if (e && "object" == typeof e && "number" == typeof e.length) for (var i = 0; i < e.length; i++) t.push(e[i]); else t.push(e);
            return t;
        },
        removeFrom: function(e, t) {
            var i = e.indexOf(t);
            -1 != i && e.splice(i, 1);
        },
        getParent: function(e, t) {
            for (;e.parentNode && e != document.body; ) if (e = e.parentNode, o(e, t)) return e;
        },
        getQueryElement: function(e) {
            return "string" == typeof e ? document.querySelector(e) : e;
        },
        handleEvent: function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
        },
        filterFindElements: function(e, n) {
            e = u.makeArray(e);
            var s = [];
            return e.forEach(function(e) {
                if (e instanceof HTMLElement) if (n) {
                    o(e, n) && s.push(e);
                    for (var t = e.querySelectorAll(n), i = 0; i < t.length; i++) s.push(t[i]);
                } else s.push(e);
            }), s;
        },
        debounceMethod: function(e, t, n) {
            var s = e.prototype[t], o = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[o];
                e && clearTimeout(e);
                var t = arguments, i = this;
                this[o] = setTimeout(function() {
                    s.apply(i, t), delete i[o];
                }, n || 100);
            };
        },
        docReady: function(e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
        },
        toDashed: function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i;
            }).toLowerCase();
        }
    }, d = c.console;
    return u.htmlInit = function(r, l) {
        u.docReady(function() {
            var e = u.toDashed(l), s = "data-" + e, t = document.querySelectorAll("[" + s + "]"), i = document.querySelectorAll(".js-" + e), n = u.makeArray(t).concat(u.makeArray(i)), o = s + "-options", a = c.jQuery;
            n.forEach(function(t) {
                var e, i = t.getAttribute(s) || t.getAttribute(o);
                try {
                    e = i && JSON.parse(i);
                } catch (e) {
                    return void (d && d.error("Error parsing " + s + " on " + t.className + ": " + e));
                }
                var n = new r(t, e);
                a && a.data(t, l, n);
            });
        });
    }, u;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, 
    e.Outlayer.Item = t(e.EvEmitter, e.getSize));
}(window, function(e, t) {
    "use strict";
    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create());
    }
    var n = document.documentElement.style, s = "string" == typeof n.transition ? "transition" : "WebkitTransition", o = "string" == typeof n.transform ? "transform" : "WebkitTransform", a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[s], r = {
        transform: o,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
    }, l = i.prototype = Object.create(e.prototype);
    l.constructor = i, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        });
    }, l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
    }, l.getSize = function() {
        this.size = t(this.element);
    }, l.css = function(e) {
        var t = this.element.style;
        for (var i in e) {
            t[r[i] || i] = e[i];
        }
    }, l.getPosition = function() {
        var e = getComputedStyle(this.element), t = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = e[t ? "left" : "right"], s = e[i ? "top" : "bottom"], o = this.layout.size, a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10), r = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
        a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= t ? o.paddingLeft : o.paddingRight, 
        r -= i ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = r;
    }, l.layoutPosition = function() {
        var e = this.layout.size, t = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), s = i ? "paddingLeft" : "paddingRight", o = i ? "left" : "right", a = i ? "right" : "left", r = this.position.x + e[s];
        t[o] = this.getXValue(r), t[a] = "";
        var l = n ? "paddingTop" : "paddingBottom", c = n ? "top" : "bottom", u = n ? "bottom" : "top", d = this.position.y + e[l];
        t[c] = this.getYValue(d), t[u] = "", this.css(t), this.emitEvent("layout", [ this ]);
    }, l.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px";
    }, l.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px";
    }, l._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, s = parseInt(e, 10), o = parseInt(t, 10), a = s === this.position.x && o === this.position.y;
        if (this.setPosition(e, t), !a || this.isTransitioning) {
            var r = e - i, l = t - n, c = {};
            c.transform = this.getTranslate(r, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            });
        } else this.layoutPosition();
    }, l.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)";
    }, l.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition();
    }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
        this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10);
    }, l._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this);
    }, l.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
            for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null;
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0;
        } else this._nonTransition(e);
    };
    var c = "opacity," + o.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
    });
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: c,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(a, this, !1);
        }
    }, l.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e);
    }, l.onotransitionend = function(e) {
        this.ontransitionend(e);
    };
    var u = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn, i = u[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[i], function(e) {
                for (var t in e) return !1;
                return !0;
            }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", 
            delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
            this.emitEvent("transitionEnd", [ this ]);
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1;
    }, l._removeStyles = function(e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t);
    };
    var d = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(d);
    }, l.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms";
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [ this ]);
    }, l.remove = function() {
        s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem();
        }), this.hide()) : this.removeElem();
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options, t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, 
        this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        });
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
    }, l.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i;
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options, t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, 
        this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        });
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"));
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }, i;
}), function(s, o) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], function(e, t, i, n) {
        return o(s, e, t, i, n);
    }) : "object" == typeof module && module.exports ? module.exports = o(s, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : s.Outlayer = o(s, s.EvEmitter, s.getSize, s.fizzyUIUtils, s.Outlayer.Item);
}(window, function(e, t, s, o, n) {
    "use strict";
    function a(e, t) {
        var i = o.getQueryElement(e);
        if (i) {
            this.element = i, c && (this.$element = c(this.element)), this.options = o.extend({}, this.constructor.defaults), 
            this.option(t);
            var n = ++u;
            this.element.outlayerGUID = n, (d[n] = this)._create(), this._getOption("initLayout") && this.layout();
        } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e));
    }
    function r(e) {
        function t() {
            e.apply(this, arguments);
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
    }
    var l = e.console, c = e.jQuery, i = function() {}, u = 0, d = {};
    a.namespace = "outlayer", a.Item = n, a.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = a.prototype;
    o.extend(h, t.prototype), h.option = function(e) {
        o.extend(this.options, e);
    }, h._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e];
    }, a.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, h._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), 
        this._getOption("resize") && this.bindResize();
    }, h.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }, h._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], s = 0; s < t.length; s++) {
            var o = new i(t[s], this);
            n.push(o);
        }
        return n;
    }, h._filterFindItemElements = function(e) {
        return o.filterFindElements(e, this.options.itemSelector);
    }, h.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element;
        });
    }, h.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0;
    }, h._init = h.layout, h._resetLayout = function() {
        this.getSize();
    }, h.getSize = function() {
        this.size = s(this.element);
    }, h._getMeasurement = function(e, t) {
        var i, n = this.options[e];
        n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), 
        this[e] = i ? s(i)[t] : n) : this[e] = 0;
    }, h.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout();
    }, h._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored;
        });
    }, h._layoutItems = function(e, i) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var n = [];
            e.forEach(function(e) {
                var t = this._getItemLayoutPosition(e);
                t.item = e, t.isInstant = i || e.isLayoutInstant, n.push(t);
            }, this), this._processLayoutQueue(n);
        }
    }, h._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }, h._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach(function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t);
        }, this);
    }, h.updateStagger = function() {
        var e = this.options.stagger;
        if (null != e) return this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/), i = t && t[1], n = t && t[2];
            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0;
        }(e), this.stagger;
        this.stagger = 0;
    }, h._positionItem = function(e, t, i, n, s) {
        n ? e.goTo(t, i) : (e.stagger(s * this.stagger), e.moveTo(t, i));
    }, h._postLayout = function() {
        this.resizeContainer();
    }, h.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, h._getContainerSize = i, h._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
            e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px";
        }
    }, h._emitCompleteOnItems = function(t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [ e ]);
        }
        function n() {
            ++a == o && i();
        }
        var s = this, o = e.length;
        if (e && o) {
            var a = 0;
            e.forEach(function(e) {
                e.once(t, n);
            });
        } else i();
    }, h.dispatchEvent = function(e, t, i) {
        var n = t ? [ t ].concat(i) : i;
        if (this.emitEvent(e, n), c) if (this.$element = this.$element || c(this.element), 
        t) {
            var s = c.Event(t);
            s.type = e, this.$element.trigger(s, i);
        } else this.$element.trigger(e, i);
    }, h.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0);
    }, h.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored;
    }, h.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this));
    }, h.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            o.removeFrom(this.stamps, e), this.unignore(e);
        }, this);
    }, h._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = o.makeArray(e);
    }, h._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, h._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(), t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        };
    }, h._manageStamp = i, h._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(), i = this._boundingRect, n = s(e);
        return {
            left: t.left - i.left - n.marginLeft,
            top: t.top - i.top - n.marginTop,
            right: i.right - t.right - n.marginRight,
            bottom: i.bottom - t.bottom - n.marginBottom
        };
    }, h.handleEvent = o.handleEvent, h.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0;
    }, h.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1;
    }, h.onresize = function() {
        this.resize();
    }, o.debounceMethod(a, "onresize", 100), h.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, h.needsResizeLayout = function() {
        var e = s(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth;
    }, h.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t;
    }, h.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
    }, h.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), 
            this.reveal(t), this.layoutItems(i);
        }
    }, h.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var i = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * i), e.reveal();
            });
        }
    }, h.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var i = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * i), e.hide();
            });
        }
    }, h.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t);
    }, h.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t);
    }, h.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i;
        }
    }, h.getItems = function(e) {
        e = o.makeArray(e);
        var i = [];
        return e.forEach(function(e) {
            var t = this.getItem(e);
            t && i.push(t);
        }, this), i;
    }, h.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
            e.remove(), o.removeFrom(this.items, e);
        }, this);
    }, h.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
            e.destroy();
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete d[t], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
    }, a.data = function(e) {
        var t = (e = o.getQueryElement(e)) && e.outlayerGUID;
        return t && d[t];
    }, a.create = function(e, t) {
        var i = r(a);
        return i.defaults = o.extend({}, a.defaults), o.extend(i.defaults, t), i.compatOptions = o.extend({}, a.compatOptions), 
        i.namespace = e, i.data = a.data, i.Item = r(n), o.htmlInit(i, e), c && c.bridget && c.bridget(e, i), 
        i;
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return a.Item = n, a;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/item", [ "outlayer/outlayer" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, 
    e.Isotope.Item = t(e.Outlayer));
}(window, function(e) {
    "use strict";
    function t() {
        e.Item.apply(this, arguments);
    }
    var i = t.prototype = Object.create(e.Item.prototype), n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {};
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData, t = this.layout._sorters;
            for (var i in e) {
                var n = t[i];
                this.sortData[i] = n(this.element, this);
            }
        }
    };
    var s = i.destroy;
    return i.destroy = function() {
        s.apply(this, arguments), this.css({
            display: ""
        });
    }, t;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", [ "get-size/get-size", "outlayer/outlayer" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, 
    e.Isotope.LayoutMode = t(e.getSize, e.Outlayer));
}(window, function(t, i) {
    "use strict";
    function n(e) {
        (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, 
        this.items = e.filteredItems, this.size = e.size);
    }
    var s = n.prototype;
    return [ "_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption" ].forEach(function(e) {
        s[e] = function() {
            return i.prototype[e].apply(this.isotope, arguments);
        };
    }), s.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight;
    }, s._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }, s.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
    }, s.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
    }, s.getSegmentSize = function(e, t) {
        var i = e + t, n = "outer" + t;
        if (this._getMeasurement(i, n), !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + t];
        }
    }, s.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
    }, s.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }, s.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, n.modes = {}, n.create = function(e, t) {
        function i() {
            n.apply(this, arguments);
        }
        return i.prototype = Object.create(s), i.prototype.constructor = i, t && (i.options = t), 
        i.prototype.namespace = e, n.modes[e] = i;
    }, n;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("masonry/masonry", [ "outlayer/outlayer", "get-size/get-size" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize);
}(window, function(e, c) {
    var t = e.create("masonry");
    t.compatOptions.fitWidth = "isFitWidth";
    var i = t.prototype;
    return i._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
        this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0;
    }, i.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0], t = e && e.element;
            this.columnWidth = t && c(t).outerWidth || this.containerWidth;
        }
        var i = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / i, o = i - n % i;
        s = Math[o && o < 1 ? "round" : "floor"](s), this.cols = Math.max(s, 1);
    }, i.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element, t = c(e);
        this.containerWidth = t && t.innerWidth;
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth, i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e), s = {
            x: this.columnWidth * n.col,
            y: n.y
        }, o = n.y + e.size.outerHeight, a = i + n.col, r = n.col; r < a; r++) this.colYs[r] = o;
        return s;
    }, i._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e), i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        };
    }, i._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) t[n] = this._getColGroupY(n, e);
        return t;
    }, i._getColGroupY = function(e, t) {
        if (t < 2) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i);
    }, i._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < e && i + e > this.cols ? 0 : i;
        var n = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = n ? i + e : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, e)
        };
    }, i._manageStamp = function(e) {
        var t = c(e), i = this._getElementOffset(e), n = this._getOption("originLeft") ? i.left : i.right, s = n + t.outerWidth, o = Math.floor(n / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(s / this.columnWidth);
        a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var r = (this._getOption("originTop") ? i.top : i.bottom) + t.outerHeight, l = o; l <= a; l++) this.colYs[l] = Math.max(r, this.colYs[l]);
    }, i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), 
        e;
    }, i._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
        return (this.cols - e) * this.columnWidth - this.gutter;
    }, i.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth;
    }, t;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", [ "../layout-mode", "masonry/masonry" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry);
}(window, function(e, t) {
    "use strict";
    var i = e.create("masonry"), n = i.prototype, s = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var o in t.prototype) s[o] || (n[o] = t.prototype[o]);
    var a = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, a.call(this);
    };
    var r = n._getOption;
    return n._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments);
    }, i;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", [ "../layout-mode" ], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode);
}(window, function(e) {
    "use strict";
    var t = e.create("fitRows"), i = t.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, 
        n;
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        };
    }, t;
}), function(e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", [ "../layout-mode" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode);
}(window, function(e) {
    "use strict";
    var t = e.create("vertical", {
        horizontalAlignment: 0
    }), i = t.prototype;
    return i._resetLayout = function() {
        this.y = 0;
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += e.size.outerHeight, {
            x: t,
            y: i
        };
    }, i._getContainerSize = function() {
        return {
            height: this.y
        };
    }, t;
}), function(a, r) {
    "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical" ], function(e, t, i, n, s, o) {
        return r(a, e, t, i, n, s, o);
    }) : "object" == typeof module && module.exports ? module.exports = r(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : a.Isotope = r(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode);
}(window, function(e, i, t, n, o, s, a) {
    var r = e.jQuery, l = String.prototype.trim ? function(e) {
        return e.trim();
    } : function(e) {
        return e.replace(/^\s+|\s+$/g, "");
    }, c = i.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    c.Item = s, c.LayoutMode = a;
    var u = c.prototype;
    u._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), 
        this.modes = {}, this.filteredItems = this.items, this.sortHistory = [ "original-order" ], 
        a.modes) this._initLayoutMode(e);
    }, u.reloadItems = function() {
        this.itemGUID = 0, i.prototype.reloadItems.call(this);
    }, u._itemize = function() {
        for (var e = i.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) {
            e[t].id = this.itemGUID++;
        }
        return this._updateItemsSortData(e), e;
    }, u._initLayoutMode = function(e) {
        var t = a.modes[e], i = this.options[e] || {};
        this.options[e] = t.options ? o.extend(t.options, i) : i, this.modes[e] = new t(this);
    }, u.layout = function() {
        this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange();
    }, u._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), 
        this._isLayoutInited = !0;
    }, u.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [ t ]) : this._hideReveal(t), 
        this._sort(), this._layout();
    }, u._init = u.arrange, u._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide);
    }, u._getIsInstant = function() {
        var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t;
    }, u._bindArrangeComplete = function() {
        function e() {
            t && i && n && s.dispatchEvent("arrangeComplete", null, [ s.filteredItems ]);
        }
        var t, i, n, s = this;
        this.once("layoutComplete", function() {
            t = !0, e();
        }), this.once("hideComplete", function() {
            i = !0, e();
        }), this.once("revealComplete", function() {
            n = !0, e();
        });
    }, u._filter = function(e) {
        var t = this.options.filter;
        t = t || "*";
        for (var i = [], n = [], s = [], o = this._getFilterTest(t), a = 0; a < e.length; a++) {
            var r = e[a];
            if (!r.isIgnored) {
                var l = o(r);
                l && i.push(r), l && r.isHidden ? n.push(r) : l || r.isHidden || s.push(r);
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: s
        };
    }, u._getFilterTest = function(t) {
        return r && this.options.isJQueryFiltering ? function(e) {
            return r(e.element).is(t);
        } : "function" == typeof t ? function(e) {
            return t(e.element);
        } : function(e) {
            return n(e.element, t);
        };
    }, u.updateSortData = function(e) {
        var t;
        e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), 
        this._updateItemsSortData(t);
    }, u._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) {
            var i = e[t];
            this._sorters[t] = d(i);
        }
    }, u._updateItemsSortData = function(e) {
        for (var t = e && e.length, i = 0; t && i < t; i++) {
            e[i].updateSortData();
        }
    };
    var d = function(e) {
        if ("string" != typeof e) return e;
        var t, i, n = l(e).split(" "), s = n[0], o = s.match(/^\[(.+)\]$/), a = (t = o && o[1], 
        i = s, t ? function(e) {
            return e.getAttribute(t);
        } : function(e) {
            var t = e.querySelector(i);
            return t && t.textContent;
        }), r = c.sortDataParsers[n[1]];
        return e = r ? function(e) {
            return e && r(a(e));
        } : function(e) {
            return e && a(e);
        };
    };
    c.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10);
        },
        parseFloat: function(e) {
            return parseFloat(e);
        }
    }, u._sort = function() {
        if (this.options.sortBy) {
            var e = o.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var a, r, t = (a = this.sortHistory, r = this.options.sortAscending, function(e, t) {
                for (var i = 0; i < a.length; i++) {
                    var n = a[i], s = e.sortData[n], o = t.sortData[n];
                    if (o < s || s < o) return (o < s ? 1 : -1) * ((void 0 !== r[n] ? r[n] : r) ? 1 : -1);
                }
                return 0;
            });
            this.filteredItems.sort(t);
        }
    }, u._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++) if (e[t] != this.sortHistory[t]) return !1;
        return !0;
    }, u._mode = function() {
        var e = this.options.layoutMode, t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t;
    }, u._resetLayout = function() {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, u._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e);
    }, u._manageStamp = function(e) {
        this._mode()._manageStamp(e);
    }, u._getContainerSize = function() {
        return this._mode()._getContainerSize();
    }, u.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    }, u.appended = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(i);
        }
    }, u.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), 
            this.items = t.concat(this.items);
        }
    }, u._filterRevealAdded = function(e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), 
        t.matches;
    }, u.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i, n, s = t.length;
            for (i = 0; i < s; i++) n = t[i], this.element.appendChild(n.element);
            var o = this._filter(t).matches;
            for (i = 0; i < s; i++) t[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < s; i++) delete t[i].isLayoutInstant;
            this.reveal(o);
        }
    };
    var h = u.remove;
    return u.remove = function(e) {
        e = o.makeArray(e);
        var t = this.getItems(e);
        h.call(this, e);
        for (var i = t && t.length, n = 0; i && n < i; n++) {
            var s = t[n];
            o.removeFrom(this.filteredItems, s);
        }
    }, u.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random();
        }
        this.options.sortBy = "random", this._sort(), this._layout();
    }, u._noTransition = function(e, t) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = e.apply(this, t);
        return this.options.transitionDuration = i, n;
    }, u.getFilteredItemElements = function() {
        return this.filteredItems.map(function(e) {
            return e.element;
        });
    }, c;
}), function(e, t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : e.Fresco = t(jQuery);
}(this, function($) {
    function baseToString(e) {
        return "string" == typeof e ? e : null == e ? "" : e + "";
    }
    function Timers() {
        return this.initialize.apply(this, _slice.call(arguments));
    }
    function getURIData(n) {
        var s = {
            type: "image"
        };
        return $.each(Types, function(e, t) {
            var i = t.data(n);
            i && ((s = i).type = e, s.url = n);
        }), s;
    }
    function detectExtension(e) {
        var t = (e || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/);
        return t ? t[1].toLowerCase() : null;
    }
    function View() {
        this.initialize.apply(this, _slice.call(arguments));
    }
    function Thumbnail() {
        this.initialize.apply(this, _slice.call(arguments));
    }
    var Fresco = {};
    $.extend(Fresco, {
        version: "2.2.2"
    }), Fresco.Skins = {
        fresco: {}
    };
    var Bounds = {
        viewport: function() {
            var e = {
                width: $(window).width()
            };
            if (Browser.MobileSafari || Browser.Android && Browser.Gecko) {
                var t = document.documentElement.clientWidth / window.innerWidth;
                e.height = window.innerHeight * t;
            } else e.height = $(window).height();
            return e;
        }
    }, Browser = function(i) {
        function e(e) {
            var t = new RegExp(e + "([\\d.]+)").exec(i);
            return !t || parseFloat(t[1]);
        }
        return {
            IE: !(!window.attachEvent || -1 !== i.indexOf("Opera")) && e("MSIE "),
            Opera: -1 < i.indexOf("Opera") && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55),
            WebKit: -1 < i.indexOf("AppleWebKit/") && e("AppleWebKit/"),
            Gecko: -1 < i.indexOf("Gecko") && -1 === i.indexOf("KHTML") && e("rv:"),
            MobileSafari: !!i.match(/Apple.*Mobile.*Safari/),
            Chrome: -1 < i.indexOf("Chrome") && e("Chrome/"),
            ChromeMobile: -1 < i.indexOf("CrMo") && e("CrMo/"),
            Android: -1 < i.indexOf("Android") && e("Android "),
            IEMobile: -1 < i.indexOf("IEMobile") && e("IEMobile/")
        };
    }(navigator.userAgent), _slice = Array.prototype.slice, _ = {
        isElement: function(e) {
            return e && 1 == e.nodeType;
        },
        String: {
            capitalize: function(e) {
                return (e = baseToString(e)) && e.charAt(0).toUpperCase() + e.slice(1);
            }
        }
    };
    $(document.documentElement).on("mousewheel DOMMouseScroll", function(e) {
        var t;
        if (e.originalEvent.wheelDelta ? t = e.originalEvent.wheelDelta / 120 : e.originalEvent.detail && (t = -e.originalEvent.detail / 3), 
        t) {
            var i = $.Event("fresco:mousewheel");
            $(e.target).trigger(i, t), i.isPropagationStopped() && e.stopPropagation(), i.isDefaultPrevented() && e.preventDefault();
        }
    });
    var Fit = {
        within: function(e, t) {
            for (var i = $.extend({
                height: !0,
                width: !0
            }, arguments[2] || {}), n = $.extend({}, t), s = 1, o = 5, a = i.width, r = i.height; 0 < o && (a && n.width > e.width || r && n.height > e.height); ) {
                var l = 1, c = 1;
                a && n.width > e.width && (l = e.width / n.width), r && n.height > e.height && (c = e.height / n.height);
                s = Math.min(l, c);
                n = {
                    width: Math.round(t.width * s),
                    height: Math.round(t.height * s)
                }, o--;
            }
            return n.width = Math.max(n.width, 0), n.height = Math.max(n.height, 0), n;
        }
    };
    $.extend($.easing, {
        frescoEaseInCubic: function(e, t, i, n, s) {
            return n * (t /= s) * t * t + i;
        },
        frescoEaseInSine: function(e, t, i, n, s) {
            return -n * Math.cos(t / s * (Math.PI / 2)) + n + i;
        },
        frescoEaseOutSine: function(e, t, i, n, s) {
            return n * Math.sin(t / s * (Math.PI / 2)) + i;
        }
    });
    var Support = function() {
        function t(e, t) {
            var i = e.charAt(0).toUpperCase() + e.substr(1);
            return function(e, t) {
                for (var i in e) if (void 0 !== n.style[e[i]]) return "prefix" != t || e[i];
                return !1;
            }((e + " " + s.join(i + " ") + i).split(" "), t);
        }
        var e, n = document.createElement("div"), s = "Webkit Moz O ms Khtml".split(" ");
        return {
            canvas: (e = document.createElement("canvas"), !(!e.getContext || !e.getContext("2d"))),
            css: {
                animation: t("animation"),
                transform: t("transform"),
                prefixed: function(e) {
                    return t(e, "prefix");
                }
            },
            svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            touch: function() {
                try {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
                } catch (e) {
                    return !1;
                }
            }()
        };
    }();
    Support.detectMobileTouch = function() {
        Support.mobileTouch = Support.touch && (Browser.MobileSafari || Browser.Android || Browser.IEMobile || Browser.ChromeMobile || !/^(Win|Mac|Linux)/.test(navigator.platform));
    }, Support.detectMobileTouch();
    var ImageReady = function() {
        return this.initialize.apply(this, Array.prototype.slice.call(arguments));
    };
    $.extend(ImageReady.prototype, {
        supports: {
            naturalWidth: "naturalWidth" in new Image()
        },
        initialize: function(e, t, i) {
            return this.img = $(e)[0], this.successCallback = t, this.errorCallback = i, this.isLoaded = !1, 
            this.options = $.extend({
                method: "naturalWidth",
                pollFallbackAfter: 1e3
            }, arguments[3] || {}), this.supports.naturalWidth && "onload" != this.options.method ? this.img.complete && "undefined" != $.type(this.img.naturalWidth) ? void setTimeout($.proxy(function() {
                0 < this.img.naturalWidth ? this.success() : this.error();
            }, this)) : ($(this.img).bind("error", $.proxy(function() {
                setTimeout($.proxy(function() {
                    this.error();
                }, this));
            }, this)), this.intervals = [ [ 1e3, 10 ], [ 2e3, 50 ], [ 4e3, 100 ], [ 2e4, 500 ] ], 
            this._ipos = 0, this._time = 0, this._delay = this.intervals[this._ipos][1], void this.poll()) : void setTimeout($.proxy(this.fallback, this));
        },
        poll: function() {
            this._polling = setTimeout($.proxy(function() {
                if (0 < this.img.naturalWidth) this.success(); else {
                    if (this._time += this._delay, this.options.pollFallbackAfter && this._time >= this.options.pollFallbackAfter && !this._usedPollFallback && (this._usedPollFallback = !0, 
                    this.fallback()), this._time > this.intervals[this._ipos][0]) {
                        if (!this.intervals[this._ipos + 1]) return void this.error();
                        this._ipos++, this._delay = this.intervals[this._ipos][1];
                    }
                    this.poll();
                }
            }, this), this._delay);
        },
        fallback: function() {
            var e = new Image();
            (this._fallbackImg = e).onload = $.proxy(function() {
                e.onload = function() {}, this.supports.naturalWidth || (this.img.naturalWidth = e.width, 
                this.img.naturalHeight = e.height), this.success();
            }, this), e.onerror = $.proxy(this.error, this), e.src = this.img.src;
        },
        abort: function() {
            this._fallbackImg && (this._fallbackImg.onload = function() {}), this._polling && (clearTimeout(this._polling), 
            this._polling = null);
        },
        success: function() {
            this._calledSuccess || (this._calledSuccess = !0, this.isLoaded = !0, this.successCallback(this));
        },
        error: function() {
            this._calledError || (this._calledError = !0, this.abort(), this.errorCallback && this.errorCallback(this));
        }
    }), $.extend(Timers.prototype, {
        initialize: function() {
            this._timers = {};
        },
        set: function(e, t, i) {
            this._timers[e] = setTimeout(t, i);
        },
        get: function(e) {
            return this._timers[e];
        },
        clear: function(e) {
            e ? this._timers[e] && (clearTimeout(this._timers[e]), delete this._timers[e]) : this.clearAll();
        },
        clearAll: function() {
            $.each(this._timers, function(e, t) {
                clearTimeout(t);
            }), this._timers = {};
        }
    });
    var Type = {
        isVideo: function(e) {
            return /^(youtube|vimeo)$/.test(e);
        }
    }, Types = {
        image: {
            extensions: "bmp gif jpeg jpg png webp",
            detect: function(e) {
                return -1 < $.inArray(detectExtension(e), this.extensions.split(" "));
            },
            data: function(e) {
                return !!this.detect() && {
                    extension: detectExtension(e)
                };
            }
        },
        vimeo: {
            detect: function(e) {
                var t = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(e);
                return !(!t || !t[2]) && t[2];
            },
            data: function(e) {
                var t = this.detect(e);
                return !!t && {
                    id: t
                };
            }
        },
        youtube: {
            detect: function(e) {
                var t = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(e);
                return t && t[2] ? t[2] : !(!(t = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(e)) || !t[3]) && t[3];
            },
            data: function(e) {
                var t = this.detect(e);
                return !!t && {
                    id: t
                };
            }
        }
    }, VimeoThumbnail = function() {
        var e = function() {
            return this.initialize.apply(this, _slice.call(arguments));
        };
        $.extend(e.prototype, {
            initialize: function(e, t, i) {
                this.url = e, this.successCallback = t, this.errorCallback = i, this.load();
            },
            load: function() {
                var e = n.get(this.url);
                if (e) return this.successCallback(e.data.url);
                var t = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":", i = getURIData(this.url).id;
                this._xhr = $.getJSON(t + "//vimeo.com/api/oembed.json?url=" + t + "//vimeo.com/" + i + "&callback=?", $.proxy(function(e) {
                    if (e && e.thumbnail_url) {
                        e = {
                            url: e.thumbnail_url
                        };
                        n.set(this.url, e), this.successCallback(e.url);
                    } else this.errorCallback();
                }, this));
            },
            abort: function() {
                this._xhr && (this._xhr.abort(), this._xhr = null);
            }
        });
        var n = {
            cache: [],
            get: function(e) {
                for (var t = null, i = 0; i < this.cache.length; i++) this.cache[i] && this.cache[i].url == e && (t = this.cache[i]);
                return t;
            },
            set: function(e, t) {
                this.remove(e), this.cache.push({
                    url: e,
                    data: t
                });
            },
            remove: function(e) {
                for (var t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url == e && delete this.cache[t];
            }
        };
        return e;
    }(), VimeoReady = function() {
        var e = function() {
            return this.initialize.apply(this, _slice.call(arguments));
        };
        $.extend(e.prototype, {
            initialize: function(e, t) {
                this.url = e, this.callback = t, this.load();
            },
            load: function() {
                var e = n.get(this.url);
                if (e) return this.callback(e.data);
                var t = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":", i = getURIData(this.url).id;
                this._xhr = $.getJSON(t + "//vimeo.com/api/oembed.json?url=" + t + "//vimeo.com/" + i + "&maxwidth=9999999&maxheight=9999999&callback=?", $.proxy(function(e) {
                    var t = {
                        dimensions: {
                            width: e.width,
                            height: e.height
                        }
                    };
                    n.set(this.url, t), this.callback && this.callback(t);
                }, this));
            },
            abort: function() {
                this._xhr && (this._xhr.abort(), this._xhr = null);
            }
        });
        var n = {
            cache: [],
            get: function(e) {
                for (var t = null, i = 0; i < this.cache.length; i++) this.cache[i] && this.cache[i].url == e && (t = this.cache[i]);
                return t;
            },
            set: function(e, t) {
                this.remove(e), this.cache.push({
                    url: e,
                    data: t
                });
            },
            remove: function(e) {
                for (var t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url == e && delete this.cache[t];
            }
        };
        return e;
    }(), Options = {
        defaults: {
            effects: {
                content: {
                    show: 0,
                    hide: 0
                },
                spinner: {
                    show: 150,
                    hide: 150
                },
                window: {
                    show: 440,
                    hide: 300
                },
                thumbnail: {
                    show: 300,
                    delay: 150
                },
                thumbnails: {
                    slide: 0
                }
            },
            keyboard: {
                left: !0,
                right: !0,
                esc: !0
            },
            loadedMethod: "naturalWidth",
            loop: !1,
            onClick: "previous-next",
            overflow: !1,
            overlay: {
                close: !0
            },
            preload: [ 1, 2 ],
            position: !0,
            skin: "fresco",
            spinner: !0,
            spinnerDelay: 300,
            sync: !0,
            thumbnails: "horizontal",
            ui: "outside",
            uiDelay: 3e3,
            vimeo: {
                autoplay: 1,
                api: 1,
                title: 1,
                byline: 1,
                portrait: 0,
                loop: 0
            },
            youtube: {
                autoplay: 1,
                controls: 1,
                enablejsapi: 1,
                hd: 1,
                iv_load_policy: 3,
                loop: 0,
                modestbranding: 1,
                rel: 0,
                vq: "hd1080"
            },
            initialTypeOptions: {
                image: {},
                vimeo: {
                    width: 1280
                },
                youtube: {
                    width: 1280,
                    height: 720
                }
            }
        },
        create: function(e, t, i) {
            i = i || {}, (e = e || {}).skin = e.skin || this.defaults.skin;
            var n = e.skin ? $.extend({}, Fresco.Skins[e.skin] || Fresco.Skins[this.defaults.skin]) : {}, s = $.extend(!0, {}, this.defaults, n);
            s.initialTypeOptions && (t && s.initialTypeOptions[t] && (s = $.extend(!0, {}, s.initialTypeOptions[t], s)), 
            delete s.initialTypeOptions);
            var o = $.extend(!0, {}, s, e);
            if (Support.mobileTouch && "inside" == o.ui && (o.ui = "outside"), (!o.effects || Browser.IE && Browser.IE < 9) && (o.effects = {}, 
            $.each(this.defaults.effects, function(t, e) {
                $.each(o.effects[t] = $.extend({}, e), function(e) {
                    o.effects[t][e] = 0;
                });
            }), o.spinner = !1), o.keyboard && ("boolean" == $.type(o.keyboard) && (o.keyboard = {}, 
            $.each(this.defaults.keyboard, function(e, t) {
                o.keyboard[e] = !0;
            })), ("vimeo" == t || "youtube" == t) && $.extend(o.keyboard, {
                left: !1,
                right: !1
            })), !o.overflow || Support.mobileTouch ? o.overflow = {
                x: !1,
                y: !1
            } : "boolean" == $.type(o.overflow) && (o.overflow = {
                x: !1,
                y: !0
            }), ("vimeo" == t || "youtube" == t) && (o.overlap = !1), (Browser.IE && Browser.IE < 9 || Support.mobileTouch) && (o.thumbnail = !1, 
            o.thumbnails = !1), "youtube" != t && (o.width && !o.maxWidth && (o.maxWidth = o.width), 
            o.height && !o.maxHeight && (o.maxHeight = o.height)), !o.thumbnail && "boolean" != $.type(o.thumbnail)) {
                var a = !1;
                switch (t) {
                  case "youtube":
                    a = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":" + "//img.youtube.com/vi/" + i.id + "/0.jpg";
                    break;

                  case "image":
                  case "vimeo":
                    a = !0;
                }
                o.thumbnail = a;
            }
            return o;
        }
    }, Overlay = {
        initialize: function() {
            this.build(), this.visible = !1;
        },
        build: function() {
            this.element = $("<div>").addClass("fr-overlay").hide().append($("<div>").addClass("fr-overlay-background")), 
            this.element.on("click", $.proxy(function() {
                var e = Pages.page;
                e && e.view && e.view.options.overlay && !e.view.options.overlay.close || Window.hide();
            }, this)), Support.mobileTouch && this.element.addClass("fr-mobile-touch"), this.element.on("fresco:mousewheel", function(e) {
                e.preventDefault();
            });
        },
        setSkin: function(e) {
            this.skin && this.element.removeClass("fr-overlay-skin-" + this.skin), this.element.addClass("fr-overlay-skin-" + e), 
            this.skin = e;
        },
        attach: function() {
            $(document.body).append(this.element);
        },
        detach: function() {
            this.element.detach();
        },
        show: function(e, t) {
            if (this.visible) e && e(); else {
                this.visible = !0, this.attach(), this.max();
                var i = Pages.page && Pages.page.view.options.effects.window.show || 0, n = ("number" == $.type(t) ? t : i) || 0;
                this.element.stop(!0).fadeTo(n, 1, e);
            }
        },
        hide: function(e, t) {
            if (this.visible) {
                var i = Pages.page && Pages.page.view.options.effects.window.hide || 0, n = ("number" == $.type(t) ? t : i) || 0;
                this.element.stop(!0).fadeOut(n || 0, $.proxy(function() {
                    this.detach(), this.visible = !1, e && e();
                }, this));
            } else e && e();
        },
        getScrollDimensions: function() {
            var s = {};
            return $.each([ "width", "height" ], function(e, t) {
                var i = t.substr(0, 1).toUpperCase() + t.substr(1), n = document.documentElement;
                s[t] = (Browser.IE ? Math.max(n["offset" + i], n["scroll" + i]) : Browser.WebKit ? document.body["scroll" + i] : n["scroll" + i]) || 0;
            }), s;
        },
        max: function() {
            var e;
            if (Browser.MobileSafari && Browser.WebKit && Browser.WebKit < 533.18 && (e = this.getScrollDimensions(), 
            this.element.css(e)), Browser.IE && Browser.IE < 9) {
                var t = Bounds.viewport();
                this.element.css({
                    height: t.height,
                    width: t.width
                });
            }
            Support.mobileTouch && !e && this.element.css({
                height: this.getScrollDimensions().height
            });
        }
    }, Window = {
        initialize: function() {
            this.queues = [], this.queues.hide = $({}), this.pages = [], this._tracking = [], 
            this._first = !0, this.timers = new Timers(), this.build(), this.setSkin(Options.defaults.skin);
        },
        build: function() {
            if (this.element = $("<div>").addClass("fr-window fr-measured").hide().append(this._box = $("<div>").addClass("fr-box").append(this._pages = $("<div>").addClass("fr-pages"))).append(this._thumbnails = $("<div>").addClass("fr-thumbnails")), 
            Overlay.initialize(), Pages.initialize(this._pages), Thumbnails.initialize(this._thumbnails), 
            Spinner.initialize(), UI.initialize(), this.element.addClass("fr" + (Support.mobileTouch ? "" : "-no") + "-mobile-touch"), 
            this.element.addClass("fr" + (Support.svg ? "" : "-no") + "-svg"), Browser.IE) for (var e = 7; e <= 9; e++) Browser.IE < e && this.element.addClass("fr-ltIE" + e);
            this.element.on("fresco:mousewheel", function(e) {
                e.preventDefault();
            });
        },
        attach: function() {
            this._attached || ($(document.body).append(this.element), this._attached = !0);
        },
        detach: function() {
            this._attached && (this.element.detach(), this._attached = !1);
        },
        setSkin: function(e) {
            this._skin && this.element.removeClass("fr-window-skin-" + this._skin), this.element.addClass("fr-window-skin-" + e), 
            Overlay.setSkin(e), this._skin = e;
        },
        setShowingType: function(e) {
            this._showingType != e && (this._showingType && (this.element.removeClass("fr-showing-type-" + this._showingType), 
            Type.isVideo(this._showingType) && this.element.removeClass("fr-showing-type-video")), 
            this.element.addClass("fr-showing-type-" + e), Type.isVideo(e) && this.element.addClass("fr-showing-type-video"), 
            this._showingType = e);
        },
        startObservingResize: function() {
            this._onWindowResizeHandler || $(window).on("resize orientationchange", this._onWindowResizeHandler = $.proxy(this._onWindowResize, this));
        },
        stopObservingResize: function() {
            this._onWindowResizeHandler && ($(window).off("resize orientationchange", this._onWindowResizeHandler), 
            this._onWindowResizeHandler = null);
        },
        _onScroll: function() {
            Support.mobileTouch && this.timers.set("scroll", $.proxy(this.adjustToScroll, this), 0);
        },
        _onWindowResize: function() {
            var e;
            (e = Pages.page) && (Thumbnails.fitToViewport(), this.updateBoxDimensions(), e.fitToBox(), 
            UI.update(), UI.adjustPrevNext(null, 0), Spinner.center(), Overlay.max(), UI._onWindowResize(), 
            this._onScroll());
        },
        adjustToScroll: function() {
            Support.mobileTouch && this.element.css({
                top: $(window).scrollTop()
            });
        },
        getBoxDimensions: function() {
            return this._boxDimensions;
        },
        updateBoxDimensions: function() {
            if (Pages.page) {
                var e = Bounds.viewport(), t = Thumbnails.getDimensions(), i = "horizontal" == Thumbnails._orientation;
                this._boxDimensions = {
                    width: i ? e.width : e.width - t.width,
                    height: i ? e.height - t.height : e.height
                }, this._boxPosition = {
                    top: 0,
                    left: i ? 0 : t.width
                }, this._box.css($.extend({}, this._boxDimensions, this._boxPosition));
            }
        },
        show: function(e, t) {
            if (this.visible) e && e(); else {
                this.visible = !0, this.opening = !0, this.attach(), this.timers.clear("show-window"), 
                this.timers.clear("hide-overlay"), this.adjustToScroll();
                var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.show) || 0, n = 2;
                Overlay[Pages.page && Pages.page.view.options.overlay ? "show" : "hide"](function() {
                    e && --n < 1 && e();
                }, i), this.timers.set("show-window", $.proxy(function() {
                    this._show($.proxy(function() {
                        this.opening = !1, e && --n < 1 && e();
                    }, this), i);
                }, this), 1 < i ? Math.min(.5 * i, 50) : 1);
            }
        },
        _show: function(e, t) {
            var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.show) || 0;
            this.element.stop(!0).fadeTo(i, 1, e);
        },
        hide: function(t) {
            if (this.view) {
                var e = this.queues.hide;
                e.queue([]), this.timers.clear("show-window"), this.timers.clear("hide-overlay");
                var i = Pages.page ? Pages.page.view.options.effects.window.hide : 0;
                e.queue($.proxy(function(e) {
                    Pages.stop(), Spinner.hide(), e();
                }, this)), e.queue($.proxy(function(e) {
                    UI.disable(), UI.hide(null, i), Keyboard.disable(), e();
                }, this)), e.queue($.proxy(function(e) {
                    var t = 2;
                    this._hide(function() {
                        --t < 1 && e();
                    }, i), this.timers.set("hide-overlay", $.proxy(function() {
                        Overlay.hide(function() {
                            --t < 1 && e();
                        }, i);
                    }, this), 1 < i ? Math.min(.5 * i, 150) : 1), this._first = !0;
                }, this)), e.queue($.proxy(function(e) {
                    this._reset(), this.stopObservingResize(), Pages.removeAll(), Thumbnails.clear(), 
                    this.timers.clear(), this._position = -1;
                    var t = Pages.page && Pages.page.view.options.afterHide;
                    "function" == $.type(t) && t.call(Fresco), this.view = null, this.opening = !1, 
                    this.closing = !1, this.detach(), e();
                }, this)), "function" == $.type(t) && e.queue($.proxy(function(e) {
                    t(), e();
                }, this));
            }
        },
        _hide: function(e, t) {
            var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.hide) || 0;
            this.element.stop(!0).fadeOut(i, e);
        },
        load: function(e, t) {
            this.views = e, this.attach(), Thumbnails.load(e), Pages.load(e), this.startObservingResize(), 
            t && this.setPosition(t);
        },
        setPosition: function(e, t) {
            this._position = e, this.view = this.views[e - 1], this.stopHideQueue(), this.page = Pages.show(e, $.proxy(function() {
                t && t();
            }, this));
        },
        stopHideQueue: function() {
            this.queues.hide.queue([]);
        },
        _reset: function() {
            this.visible = !1, UI.hide(null, 0), UI.reset();
        },
        mayPrevious: function() {
            return this.view && this.view.options.loop && this.views && 1 < this.views.length || 1 != this._position;
        },
        previous: function(e) {
            var t = this.mayPrevious();
            (e || t) && this.setPosition(this.getSurroundingIndexes().previous);
        },
        mayNext: function() {
            var e = this.views && 1 < this.views.length;
            return this.view && this.view.options.loop && e || e && 1 != this.getSurroundingIndexes().next;
        },
        next: function(e) {
            var t = this.mayNext();
            (e || t) && this.setPosition(this.getSurroundingIndexes().next);
        },
        getSurroundingIndexes: function() {
            if (!this.views) return {};
            var e = this._position, t = this.views.length;
            return {
                previous: e <= 1 ? t : e - 1,
                next: t <= e ? 1 : e + 1
            };
        }
    }, Keyboard = {
        enabled: !1,
        keyCode: {
            left: 37,
            right: 39,
            esc: 27
        },
        enable: function(e) {
            this.disable(), e && ($(document).on("keydown", this._onKeyDownHandler = $.proxy(this.onKeyDown, this)).on("keyup", this._onKeyUpHandler = $.proxy(this.onKeyUp, this)), 
            this.enabled = e);
        },
        disable: function() {
            this.enabled = !1, this._onKeyUpHandler && ($(document).off("keyup", this._onKeyUpHandler).off("keydown", this._onKeyDownHandler), 
            this._onKeyUpHandler = this._onKeyDownHandler = null);
        },
        onKeyDown: function(e) {
            if (this.enabled) {
                var t = this.getKeyByKeyCode(e.keyCode);
                if (t && (!t || !this.enabled || this.enabled[t])) switch (e.preventDefault(), e.stopPropagation(), 
                t) {
                  case "left":
                    Window.previous();
                    break;

                  case "right":
                    Window.next();
                }
            }
        },
        onKeyUp: function(e) {
            if (this.enabled) {
                var t = this.getKeyByKeyCode(e.keyCode);
                if (t && (!t || !this.enabled || this.enabled[t])) switch (t) {
                  case "esc":
                    Window.hide();
                }
            }
        },
        getKeyByKeyCode: function(e) {
            for (var t in this.keyCode) if (this.keyCode[t] == e) return t;
            return null;
        }
    }, Page = function() {
        function e() {
            return this.initialize.apply(this, _slice.call(arguments));
        }
        var n = 0, i = {}, s = $("<div>").addClass("fr-stroke fr-stroke-top fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color")).add($("<div>").addClass("fr-stroke fr-stroke-bottom fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-left fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-right fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color")));
        return $.extend(e.prototype, {
            initialize: function(e, t, i) {
                this.view = e, this.dimensions = {
                    width: 0,
                    height: 0
                }, this.uid = n++, this._position = t, this._total = i, this._fullClick = !1, this._visible = !1, 
                this.queues = {}, this.queues.showhide = $({});
            },
            create: function() {
                if (!this._created) {
                    Pages.element.append(this.element = $("<div>").addClass("fr-page").append(this.container = $("<div>").addClass("fr-container")).css({
                        opacity: 0
                    }).hide());
                    var e = this.view.options.position && 1 < this._total;
                    if (e && this.element.addClass("fr-has-position"), (this.view.caption || e) && (this.element.append(this.info = $("<div>").addClass("fr-info").append($("<div>").addClass("fr-info-background")).append(s.clone(!0)).append(this.infoPadder = $("<div>").addClass("fr-info-padder"))), 
                    e && (this.element.addClass("fr-has-position"), this.infoPadder.append(this.pos = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)))), 
                    this.view.caption && this.infoPadder.append(this.caption = $("<div>").addClass("fr-caption").html(this.view.caption))), 
                    this.container.append(this.background = $("<div>").addClass("fr-content-background")).append(this.content = $("<div>").addClass("fr-content")), 
                    "image" == this.view.type && (this.content.append(this.image = $("<img>").addClass("fr-content-element").attr({
                        src: this.view.url
                    })), this.content.append(s.clone(!0))), e && "outside" == this.view.options.ui && this.container.append(this.positionOutside = $("<div>").addClass("fr-position-outside").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), 
                    "inside" == this.view.options.ui) {
                        this.content.append(this.previousInside = $("<div>").addClass("fr-side fr-side-previous fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.nextInside = $("<div>").addClass("fr-side fr-side-next fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.closeInside = $("<div>").addClass("fr-close fr-toggle-ui").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), 
                        (this.view.caption || e && this.view.grouped.caption) && (this.content.append(this.infoInside = $("<div>").addClass("fr-info fr-toggle-ui").append($("<div>").addClass("fr-info-background")).append(s.clone(!0)).append(this.infoPadderInside = $("<div>").addClass("fr-info-padder"))), 
                        e && this.infoPadderInside.append(this.posInside = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), 
                        this.view.caption && this.infoPadderInside.append(this.captionInside = $("<div>").addClass("fr-caption").html(this.view.caption))), 
                        this.view.caption || !e || this.view.grouped.caption || this.content.append(this.positionInside = $("<div>").addClass("fr-position-inside fr-toggle-ui").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)));
                        var t = this.view.options.loop && 1 < this._total || 1 != this._position, i = this.view.options.loop && 1 < this._total || this._position < this._total;
                        this.previousInside[(t ? "remove" : "add") + "Class"]("fr-side-disabled"), this.nextInside[(i ? "remove" : "add") + "Class"]("fr-side-disabled");
                    }
                    $.each([ "x", "y" ], $.proxy(function(e, t) {
                        this.view.options.overflow[t] && this.element.addClass("fr-overflow-" + t);
                    }, this)), this.element.addClass("fr-type-" + this.view.type), Type.isVideo(this.view.type) && this.element.addClass("fr-type-video"), 
                    this._total < 2 && this.element.addClass("fr-no-sides"), this._created = !0;
                }
            },
            _getSurroundingPages: function() {
                var e;
                if (!(e = this.view.options.preload)) return [];
                for (var t = [], i = Math.max(1, this._position - e[0]), n = Math.min(this._position + e[1], this._total), s = this._position, o = s; o <= n; o++) {
                    (a = Pages.pages[o - 1])._position != s && t.push(a);
                }
                for (o = s; i <= o; o--) {
                    var a;
                    (a = Pages.pages[o - 1])._position != s && t.push(a);
                }
                return t;
            },
            preloadSurroundingImages: function() {
                var e = this._getSurroundingPages();
                $.each(e, $.proxy(function(e, t) {
                    t.preload();
                }, this));
            },
            preload: function() {
                this.preloading || this.preloaded || "image" != this.view.type || !this.view.options.preload || this.loaded || (this.create(), 
                this.preloading = !0, this.preloadReady = new ImageReady(this.image[0], $.proxy(function(e) {
                    this.loaded = !0, i[this.view.url] = !0, this.preloading = !1, this.preloaded = !0, 
                    this.dimensions = {
                        width: e.img.naturalWidth,
                        height: e.img.naturalHeight
                    };
                }, this), null, {
                    method: "naturalWidth"
                }));
            },
            load: function(t, e) {
                if (this.create(), this.loaded) t && t(); else switch (this.abort(), this.loading = !0, 
                this.view.options.spinner && (this._spinnerDelay = setTimeout($.proxy(function() {
                    Spinner.show();
                }, this), this.view.options.spinnerDelay || 0)), this.view.type) {
                  case "image":
                    if (this.error) return void (t && t());
                    this.imageReady = new ImageReady(this.image[0], $.proxy(function(e) {
                        this._markAsLoaded(), this.setDimensions({
                            width: e.img.naturalWidth,
                            height: e.img.naturalHeight
                        }), t && t();
                    }, this), $.proxy(function() {
                        this._markAsLoaded(), this.image.hide(), this.content.prepend(this.error = $("<div>").addClass("fr-error fr-content-element").append($("<div>").addClass("fr-error-icon"))), 
                        this.element.addClass("fr-has-error"), this.setDimensions({
                            width: this.error.outerWidth(),
                            height: this.error.outerHeight()
                        }), this.error.css({
                            width: "100%",
                            height: "100%"
                        }), t && t();
                    }, this), {
                        method: this.view.options.loadedMethod
                    });
                    break;

                  case "vimeo":
                    this.vimeoReady = new VimeoReady(this.view.url, $.proxy(function(e) {
                        this._markAsLoaded(), this.setDimensions({
                            width: e.dimensions.width,
                            height: e.dimensions.height
                        }), t && t();
                    }, this));
                    break;

                  case "youtube":
                    this._markAsLoaded(), this.setDimensions({
                        width: this.view.options.width,
                        height: this.view.options.height
                    }), t && t();
                }
            },
            setDimensions: function(e) {
                if (this.dimensions = e, this.view.options.maxWidth || this.view.options.maxHeight) {
                    var t = this.view.options, i = {
                        width: t.maxWidth ? t.maxWidth : this.dimensions.width,
                        height: t.maxHeight ? t.maxHeight : this.dimensions.height
                    };
                    this.dimensions = Fit.within(i, this.dimensions);
                }
            },
            _markAsLoaded: function() {
                this._abortSpinnerDelay(), this.loading = !1, this.loaded = !0, i[this.view.url] = !0, 
                Spinner.hide(null, null, this._position);
            },
            isVideo: function() {
                return Type.isVideo(this.view.type);
            },
            insertVideo: function(e) {
                if (!this.playerIframe && this.isVideo()) {
                    var t = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":", i = $.extend({}, this.view.options[this.view.type] || {}), n = $.param(i), s = {
                        vimeo: t + "//player.vimeo.com/video/{id}?{queryString}",
                        youtube: t + "//www.youtube.com/embed/{id}?{queryString}"
                    }[this.view.type].replace("{id}", this.view._data.id).replace("{queryString}", n);
                    this.content.prepend(this.playerIframe = $("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").addClass("fr-content-element").attr({
                        src: s,
                        height: this._contentDimensions.height,
                        width: this._contentDimensions.width,
                        frameborder: 0
                    })), e && e();
                } else e && e();
            },
            raise: function() {
                var e = Pages.element[0].lastChild;
                e && e == this.element[0] || Pages.element.append(this.element);
            },
            show: function(t) {
                var e = this.queues.showhide;
                e.queue([]), e.queue($.proxy(function(e) {
                    var t = this.view.options.spinner && !i[this.view.url];
                    Spinner._visible && !t && Spinner.hide(), Pages.stopInactive(), e();
                }, this)), e.queue($.proxy(function(e) {
                    this.updateUI(), UI.set(this._ui), e();
                }, this)), e.queue($.proxy(function(e) {
                    Keyboard.enable(this.view.options.keyboard), e();
                }, this)), e.queue($.proxy(function(e) {
                    Spinner.setSkin(this.view.options.skin), this.load($.proxy(function() {
                        this.preloadSurroundingImages(), e();
                    }, this));
                }, this)), e.queue($.proxy(function(e) {
                    this.raise(), Window.setSkin(this.view.options.skin), UI.enable(), this.fitToBox(), 
                    Window.adjustToScroll(), e();
                }, this)), this.isVideo() && e.queue($.proxy(function(e) {
                    this.insertVideo($.proxy(function() {
                        e();
                    }));
                }, this)), this.view.options.sync || e.queue($.proxy(function(e) {
                    Pages.hideInactive(e);
                }, this)), e.queue($.proxy(function(e) {
                    var t = 3, i = this.view.options.effects.content.show;
                    Window.setShowingType(this.view.type), Window.visible || (i = this.view.options.effects.window.show, 
                    "function" == $.type(this.view.options.onShow) && this.view.options.onShow.call(Fresco)), 
                    this.view.options.sync && (t++, Pages.hideInactive(function() {
                        --t < 1 && e();
                    })), Window.show(function() {
                        --t < 1 && e();
                    }, this.view.options.effects.window.show), this._show(function() {
                        --t < 1 && e();
                    }, i), UI.adjustPrevNext(function() {
                        --t < 1 && e();
                    }, Window._first ? 0 : i), Window._first ? (UI.show(null, 0), Window._first = !1) : UI.show(null, 0);
                    var n = this.view.options.afterPosition;
                    "function" == $.type(n) && n.call(Fresco, this._position);
                }, this)), e.queue($.proxy(function(e) {
                    this._visible = !0, t && t(), e();
                }, this));
            },
            _show: function(e, t) {
                var i = Window.visible ? "number" == $.type(t) ? t : this.view.options.effects.content.show : 0;
                this.element.stop(!0).show().fadeTo(i || 0, 1, e);
            },
            hide: function(e, t) {
                if (this.element) {
                    this.removeVideo(), this.abort();
                    var i = "number" == $.type(t) ? t : this.view.options.effects.content.hide;
                    this.isVideo() && (i = 0), this.element.stop(!0).fadeTo(i, 0, "frescoEaseInCubic", $.proxy(function() {
                        this.element.hide(), this._visible = !1, Pages.removeTracking(this._position), e && e();
                    }, this));
                } else e && e();
            },
            stop: function() {
                this.queues.showhide.queue([]), this.element && this.element.stop(!0), this.abort();
            },
            removeVideo: function() {
                this.playerIframe && (this.playerIframe[0].src = "//about:blank", this.playerIframe.remove(), 
                this.playerIframe = null);
            },
            remove: function() {
                this.stop(), this.removeVideo(), this.element && this.element.remove(), this._track && (Pages.removeTracking(this._position), 
                this._track = !1), this.preloadReady && (this.preloadReady.abort(), this.preloadReady = null, 
                this.preloading = null, this.preloaded = null), this._visible = !1, this.removed = !0;
            },
            abort: function() {
                this.imageReady && (this.imageReady.abort(), this.imageReady = null), this.vimeoReady && (this.vimeoReady.abort(), 
                this.vimeoReady = null), this._abortSpinnerDelay(), this.loading = !1;
            },
            _abortSpinnerDelay: function() {
                this._spinnerDelay && (clearTimeout(this._spinnerDelay), this._spinnerDelay = null);
            },
            _getInfoHeight: function(e) {
                var t = this.view.options.position && 1 < this._total;
                switch (this._ui) {
                  case "fullclick":
                  case "inside":
                    if (!this.view.caption && !t) return 0;
                    break;

                  case "outside":
                    if (!this.view.caption) return 0;
                }
                var i = "inside" == this._ui ? this.infoInside : this.info;
                "outside" == this._ui && (e = Math.min(e, Window._boxDimensions.width));
                var n, s = i[0].style.width;
                return ("inside" == this._ui || "fullclick" == this._ui) && (s = "100%"), i.css({
                    width: e + "px"
                }), n = parseFloat(i.outerHeight()), i.css({
                    width: s
                }), n;
            },
            _whileVisible: function(e, t) {
                var i = [], n = Window.element.add(this.element);
                t && (n = n.add(t)), $.each(n, function(e, t) {
                    $(t).is(":visible") || i.push($(t).show());
                });
                var s = this.element.hasClass("fr-no-caption");
                this.element.removeClass("fr-no-caption");
                var o = this.element.hasClass("fr-has-caption");
                this.element.addClass("fr-has-caption"), Window.element.css({
                    visibility: "hidden"
                }), e(), Window.element.css({
                    visibility: "visible"
                }), s && this.element.addClass("fr-no-caption"), o || this.element.removeClass("fr-has-caption"), 
                $.each(i, function(e, t) {
                    t.hide();
                });
            },
            updateForced: function() {
                this.create(), this._fullClick = this.view.options.fullClick, this._noOverflow = !1, 
                0 < parseInt(this.element.css("min-width")) && (this._fullClick = !0), 0 < parseInt(this.element.css("min-height")) && (this._noOverflow = !0);
            },
            updateUI: function(e) {
                this.updateForced();
                e = this._fullClick ? "fullclick" : this.view.options.ui;
                this._ui && this.element.removeClass("fr-ui-" + this._ui), this.element.addClass("fr-ui-" + e), 
                this._ui = e;
            },
            fitToBox: function() {
                if (this.content) {
                    var i = (this.element, $.extend({}, Window.getBoxDimensions())), e = $.extend({}, this.dimensions), t = this.container;
                    this.updateUI();
                    var n = {
                        left: parseInt(t.css("padding-left")),
                        top: parseInt(t.css("padding-top"))
                    };
                    if ("outside" == this._ui && this._positionOutside) {
                        var s = 0;
                        this._whileVisible($.proxy(function() {
                            this._positionOutside.is(":visible") && (s = this._positionOutside.outerWidth(!0));
                        }, this)), s > n.left && (n.left = s);
                    }
                    i.width -= 2 * n.left, i.height -= 2 * n.top;
                    var o, a = {
                        width: !0,
                        height: !!this._noOverflow || !this.view.options.overflow.y
                    }, r = Fit.within(i, e, a), l = $.extend({}, r), c = (this.content, 0), u = "inside" == this._ui, d = u ? this.infoInside : this.info, h = u ? this.captionInside : this.caption, p = u ? this.posInside : this.pos, f = !!h;
                    switch (this._ui) {
                      case "outside":
                        var m = $.extend({}, l);
                        this.caption && (g = this.caption, this._whileVisible($.proxy(function() {
                            for (var e = 0; e < 2; ) {
                                c = this._getInfoHeight(l.width);
                                var t = i.height - l.height;
                                t < c && (l = Fit.within({
                                    width: l.width,
                                    height: Math.max(l.height - (c - t), 0)
                                }, l, a)), e++;
                            }
                            c = this._getInfoHeight(l.width);
                            (!this.view.options.overflow.y && c + l.height > i.height || d && "none" == d.css("display") || c >= .5 * l.height) && (f = !1, 
                            c = 0, l = m);
                        }, this), g)), d && d.css({
                            width: l.width + "px"
                        }), o = {
                            width: l.width,
                            height: l.height + c
                        };
                        break;

                      case "inside":
                        if (this.caption) {
                            var g = h;
                            this._whileVisible($.proxy(function() {
                                (c = this._getInfoHeight(l.width)) >= .45 * l.height && (f = !1, c = 0);
                            }, this), g);
                        }
                        o = l;
                        break;

                      case "fullclick":
                        var v = [];
                        h && v.push(h), this._whileVisible($.proxy(function() {
                            if ((h || p) && d.css({
                                width: "100%"
                            }), c = this._getInfoHeight(Window._boxDimensions.width), h && c > .5 * i.height) if (f = !1, 
                            p) {
                                var e = this.caption.is(":visible");
                                this.caption.hide(), c = this._getInfoHeight(Window._boxDimensions.width), e && this.caption.show();
                            } else c = 0;
                            l = Fit.within({
                                width: i.width,
                                height: Math.max(0, i.height - c)
                            }, l, a), o = l;
                        }, this), v), this.content.css({
                            "padding-bottom": 0
                        });
                    }
                    h && h[f ? "show" : "hide"](), this.element[(f ? "remove" : "add") + "Class"]("fr-no-caption"), 
                    this.element[(f ? "add" : "remove") + "Class"]("fr-has-caption"), this.content.css(l), 
                    this.background.css(o), this.playerIframe && this.playerIframe.attr(l), this.overlap = {
                        y: o.height + ("fullclick" == this._ui ? c : 0) - Window._boxDimensions.height,
                        x: 0
                    }, this._track = !this._noOverflow && this.view.options.overflow.y && 0 < this.overlap.y, 
                    this._infoHeight = c, this._padding = n, this._contentDimensions = l, this._backgroundDimensions = o, 
                    Pages[(this._track ? "set" : "remove") + "Tracking"](this._position), this.position();
                }
            },
            position: function() {
                if (this.content) {
                    var e = this._contentDimensions, t = this._backgroundDimensions, i = {
                        top: .5 * Window._boxDimensions.height - .5 * t.height,
                        left: .5 * Window._boxDimensions.width - .5 * t.width
                    }, n = {
                        top: i.top + e.height,
                        left: i.left
                    }, s = 0, o = "inside" == this._ui ? this.infoInside : this.info;
                    switch (this._ui) {
                      case "fullclick":
                        i.top = .5 * (Window._boxDimensions.height - this._infoHeight) - .5 * t.height, 
                        n = {
                            top: Window._boxDimensions.height - this._infoHeight,
                            left: 0,
                            bottom: "auto"
                        }, s = this._infoHeight;
                        break;

                      case "inside":
                        n = {
                            top: "auto",
                            left: 0,
                            bottom: 0
                        };
                    }
                    if (0 < this.overlap.y) {
                        var a = Pages.getXYP();
                        switch (i.top = 0 - a.y * this.overlap.y, this._ui) {
                          case "outside":
                          case "fullclick":
                            n.top = Window._boxDimensions.height - this._infoHeight;
                            break;

                          case "inside":
                            var r = i.top + e.height - Window._boxDimensions.height, l = -1 * i.top;
                            if (n.bottom = r, this.closeInside.css({
                                top: l
                            }), 1 < this._total) {
                                var c = Window.element.is(":visible");
                                c || Window.element.show();
                                var u = this.previousInside.attr("style");
                                this.previousInside.removeAttr("style");
                                var d = parseInt(this.previousInside.css("margin-top"));
                                this.previousInside.attr({
                                    style: u
                                }), c || Window.element.hide();
                                var h = this.previousInside.add(this.nextInside), p = .5 * this.overlap.y;
                                h.css({
                                    "margin-top": d + (l - p)
                                }), this.positionInside && this.positionInside.css({
                                    bottom: r
                                });
                            }
                        }
                    } else "inside" == this._ui && this.element.find(".fr-info, .fr-side, .fr-close, .fr-position-inside").removeAttr("style");
                    o && o.css(n), this.container.css({
                        bottom: s
                    }), this.content.css(i), this.background.css(i);
                }
            }
        }), e;
    }(), Pages = {
        initialize: function(e) {
            this.element = e, this.pages = [], this.uid = 1, this._tracking = [];
        },
        load: function(e) {
            this.views = e, this.removeAll(), $.each(e, $.proxy(function(e, t) {
                this.pages.push(new Page(t, e + 1, this.views.length));
            }, this));
        },
        show: function(e, t) {
            var i = this.pages[e - 1];
            this.page && this.page.uid == i.uid || (this.page = i, Thumbnails.show(e), Window.updateBoxDimensions(), 
            i.show($.proxy(function() {
                t && t();
            }, this)));
        },
        getPositionInActivePageGroup: function(i) {
            var n = 0;
            return $.each(this.pages, function(e, t) {
                t.view.element && t.view.element == i && (n = e + 1);
            }), n;
        },
        getLoadingCount: function() {
            var i = 0;
            return $.each(this.pages, function(e, t) {
                t.loading && i++;
            }), i;
        },
        removeAll: function() {
            $.each(this.pages, function(e, t) {
                t.remove();
            }), this.pages = [];
        },
        hideInactive: function(i, n) {
            var s = [];
            $.each(this.pages, $.proxy(function(e, t) {
                t.uid != this.page.uid && s.push(t);
            }, this));
            var o = 0 + s.length;
            return o < 1 ? i && i() : $.each(s, function(e, t) {
                t.hide(function() {
                    i && --o < 1 && i();
                }, n);
            }), s.length;
        },
        stopInactive: function() {
            $.each(this.pages, $.proxy(function(e, t) {
                t.uid != this.page.uid && t.stop();
            }, this));
        },
        stop: function() {
            $.each(this.pages, function(e, t) {
                t.stop();
            });
        },
        handleTracking: function(e) {
            Browser.IE && Browser.IE < 9 ? (this.setXY({
                x: e.pageX,
                y: e.pageY
            }), this.updatePositions()) : this._tracking_timer = setTimeout($.proxy(function() {
                this.setXY({
                    x: e.pageX,
                    y: e.pageY
                }), this.updatePositions();
            }, this), 30);
        },
        clearTrackingTimer: function() {
            this._tracking_timer && (clearTimeout(this._tracking_timer), this._tracking_timer = null);
        },
        startTracking: function() {
            Support.mobileTouch || this._handleTracking || $(document.documentElement).on("mousemove", this._handleTracking = $.proxy(this.handleTracking, this));
        },
        stopTracking: function() {
            !Support.mobileTouch && this._handleTracking && ($(document.documentElement).off("mousemove", this._handleTracking), 
            this._handleTracking = null, this.clearTrackingTimer());
        },
        setTracking: function(e) {
            this.isTracking(e) || (this._tracking.push(this.pages[e - 1]), 1 == this._tracking.length && this.startTracking());
        },
        clearTracking: function() {
            this._tracking = [];
        },
        removeTracking: function(t) {
            this._tracking = $.grep(this._tracking, function(e) {
                return e._position != t;
            }), this._tracking.length < 1 && this.stopTracking();
        },
        isTracking: function(i) {
            var n = !1;
            return $.each(this._tracking, function(e, t) {
                return t._position == i ? !(n = !0) : void 0;
            }), n;
        },
        setXY: function(e) {
            this._xy = e;
        },
        getXYP: function(e) {
            var t = Pages.page, i = $.extend({}, Window._boxDimensions);
            (e = $.extend({}, this._xy)).y -= $(window).scrollTop(), t && ("outside" == t._ui || "fullclick" == t._ui) && 0 < t._infoHeight && (i.height -= t._infoHeight), 
            e.y -= Window._boxPosition.top;
            var n = {
                x: 0,
                y: Math.min(Math.max(e.y / i.height, 0), 1)
            }, s = {
                x: "width",
                y: "height"
            }, o = {};
            return $.each("y".split(" "), $.proxy(function(e, t) {
                o[t] = Math.min(Math.max(20 / i[s[t]], 0), 1), n[t] *= 1 + 2 * o[t], n[t] -= o[t], 
                n[t] = Math.min(Math.max(n[t], 0), 1);
            }, this)), this.setXYP(n), this._xyp;
        },
        setXYP: function(e) {
            this._xyp = e;
        },
        updatePositions: function() {
            this._tracking.length < 1 || $.each(this._tracking, function(e, t) {
                t.position();
            });
        }
    };
    $.extend(View.prototype, {
        initialize: function(object) {
            var options = arguments[1] || {}, data = {};
            if ("string" == $.type(object)) object = {
                url: object
            }; else if (object && 1 == object.nodeType) {
                var element = $(object);
                object = {
                    element: element[0],
                    url: element.attr("href"),
                    caption: element.data("fresco-caption"),
                    group: element.data("fresco-group"),
                    extension: element.data("fresco-extension"),
                    type: element.data("fresco-type"),
                    options: element.data("fresco-options") && eval("({" + element.data("fresco-options") + "})") || {}
                };
            }
            if (object && (object.extension || (object.extension = detectExtension(object.url)), 
            !object.type)) {
                var data = getURIData(object.url);
                object._data = data, object.type = data.type;
            }
            return object._data || (object._data = getURIData(object.url)), object && object.options ? object.options = $.extend(!0, $.extend({}, options), $.extend({}, object.options)) : object.options = $.extend({}, options), 
            object.options = Options.create(object.options, object.type, object._data), $.extend(this, object), 
            this;
        }
    });
    var Spinner = {
        supported: Support.css.transform && Support.css.animation,
        initialize: function(e) {
            this.element = $("<div>").addClass("fr-spinner").hide();
            for (var t = 1; t <= 12; t++) this.element.append($("<div>").addClass("fr-spin-" + t));
            this.element.on("click", $.proxy(function() {
                Window.hide();
            }, this)), this.element.on("fresco:mousewheel", function(e) {
                e.preventDefault();
            });
        },
        setSkin: function(e) {
            this.supported && (this._skin && this.element.removeClass("fr-spinner-skin-" + this._skin), 
            this.updateDimensions(), this.element.addClass("fr-spinner-skin-" + e), this._skin = e);
        },
        updateDimensions: function() {
            var e = this._attached;
            e || this.attach(), this._dimensions = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, e || this.detach();
        },
        attach: function() {
            this._attached || ($(document.body).append(this.element), this._attached = !0);
        },
        detach: function() {
            this._attached && (this.element.detach(), this._attached = !1);
        },
        show: function(e, t) {
            this._visible = !0, this.attach(), this.center();
            var i = Pages.page && Pages.page.view.options.effects.spinner.show || 0, n = ("number" == $.type(t) ? t : i) || 0;
            this.element.stop(!0).fadeTo(n, 1, e);
        },
        hide: function(e, t, i) {
            this._visible = !1;
            var n = Pages.page && Pages.page.view.options.effects.spinner.hide || 0, s = ("number" == $.type(t) ? t : n) || 0;
            this.element.stop(!0).fadeOut(s || 0, $.proxy(function() {
                this.detach(), e && e();
            }, this));
        },
        center: function() {
            if (this.supported) {
                this._dimensions || this.updateDimensions();
                var e = Pages.page, t = 0;
                e && "fullclick" == e._ui && e._whileVisible(function() {
                    t = e._getInfoHeight(Window._boxDimensions.width);
                }), this.element.css({
                    top: Window._boxPosition.top + .5 * Window._boxDimensions.height - .5 * this._dimensions.height - .5 * t,
                    left: Window._boxPosition.left + .5 * Window._boxDimensions.width - .5 * this._dimensions.width
                });
            }
        }
    }, _Fresco = {
        _disabled: !1,
        _fallback: !0,
        initialize: function() {
            Window.initialize(), this._disabled || this.startDelegating();
        },
        startDelegating: function() {
            this._delegateHandler || $(document.documentElement).on("click", ".fresco[href]", this._delegateHandler = $.proxy(this.delegate, this)).on("click", this._setClickXYHandler = $.proxy(this.setClickXY, this));
        },
        stopDelegating: function() {
            this._delegateHandler && ($(document.documentElement).off("click", ".fresco[href]", this._delegateHandler).off("click", this._setClickXYHandler), 
            this._setClickXYHandler = null, this._delegateHandler = null);
        },
        setClickXY: function(e) {
            Pages.setXY({
                x: e.pageX,
                y: e.pageY
            });
        },
        delegate: function(e) {
            if (!this._disabled) {
                e.stopPropagation(), e.preventDefault();
                var t = e.currentTarget;
                this.setClickXY(e), _Fresco.show(t);
            }
        },
        show: function(object) {
            if (this._disabled) this.showFallback.apply(_Fresco, _slice.call(arguments)); else {
                var options = arguments[1] || {}, position = arguments[2];
                arguments[1] && "number" == $.type(arguments[1]) && (position = arguments[1], options = {});
                var views = [], object_type, isElement = _.isElement(object);
                switch (object_type = $.type(object)) {
                  case "string":
                  case "object":
                    var view = new View(object, options), _dgo = "data-fresco-group-options";
                    if (view.group) {
                        if (isElement) {
                            var elements = $('.fresco[data-fresco-group="' + $(object).data("fresco-group") + '"]'), groupOptions = {};
                            elements.filter("[" + _dgo + "]").each(function(i, element) {
                                $.extend(groupOptions, eval("({" + ($(element).attr(_dgo) || "") + "})"));
                            }), elements.each(function(e, t) {
                                position || t != object || (position = e + 1), views.push(new View(t, $.extend({}, groupOptions, options)));
                            });
                        }
                    } else {
                        var groupOptions = {};
                        isElement && $(object).is("[" + _dgo + "]") && ($.extend(groupOptions, eval("({" + ($(object).attr(_dgo) || "") + "})")), 
                        view = new View(object, $.extend({}, groupOptions, options))), views.push(view);
                    }
                    break;

                  case "array":
                    $.each(object, function(e, t) {
                        var i = new View(t, options);
                        views.push(i);
                    });
                }
                var groupExtend = {
                    grouped: {
                        caption: !1
                    }
                }, firstUI = views[0].options.ui, positionInAPG;
                $.each(views, function(e, t) {
                    t.caption && (groupExtend.grouped.caption = !0), 0 < e && t.options.ui != firstUI && (t.options.ui = firstUI);
                }), $.each(views, function(e, t) {
                    t = $.extend(t, groupExtend);
                }), (!position || position < 1) && (position = 1), position > views.length && (position = views.length), 
                isElement && (positionInAPG = Pages.getPositionInActivePageGroup(object)) ? Window.setPosition(positionInAPG) : Window.load(views, position);
            }
        },
        showFallback: function(e) {
            if (this._fallback) {
                var t = function e(t) {
                    var i = $.type(t);
                    if ("string" == i) n = t; else if ("array" == i && t[0]) n = e(t[0]); else if (_.isElement(t) && $(t).attr("href")) var n = $(t).attr("href"); else n = !!t.url && t.url;
                    return n;
                }(e);
                t && (window.location.href = t);
            }
        }
    };
    $.extend(Fresco, {
        show: function(e) {
            return _Fresco.show.apply(_Fresco, _slice.call(arguments)), this;
        },
        hide: function() {
            return Window.hide(), this;
        },
        disable: function() {
            return _Fresco.stopDelegating(), _Fresco._disabled = !0, this;
        },
        enable: function() {
            return _Fresco._disabled = !1, _Fresco.startDelegating(), this;
        },
        fallback: function(e) {
            return _Fresco._fallback = e, this;
        },
        setDefaultSkin: function(e) {
            return Options.defaults.skin = e, this;
        }
    }), (Browser.IE && Browser.IE < 7 || "number" == $.type(Browser.Android) && Browser.Android < 3 || Browser.MobileSafari && "number" == $.type(Browser.WebKit) && Browser.WebKit < 533.18) && (_Fresco.show = _Fresco.showFallback);
    var Thumbnails = {
        initialize: function(e) {
            this.element = e, this._thumbnails = [], this._orientation = "vertical", this._vars = {
                thumbnail: {},
                thumbnailFrame: {},
                thumbnails: {}
            }, this.build(), this.startObserving();
        },
        build: function() {
            this.element.append(this.wrapper = $("<div>").addClass("fr-thumbnails-wrapper").append(this._slider = $("<div>").addClass("fr-thumbnails-slider").append(this._previous = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous").append(this._previous_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon")))).append(this._thumbs = $("<div>").addClass("fr-thumbnails-thumbs").append(this._slide = $("<div>").addClass("fr-thumbnails-slide"))).append(this._next = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next").append(this._next_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon"))))));
        },
        startObserving: function() {
            this._slider.delegate(".fr-thumbnail", "click", $.proxy(function(e) {
                e.stopPropagation();
                var t = $(e.target).closest(".fr-thumbnail")[0], i = t && $(t).data("fr-position");
                i && (this.setActive(i), Window.setPosition(i));
            }, this)), this._slider.bind("click", function(e) {
                e.stopPropagation();
            }), this._previous.bind("click", $.proxy(this.previousPage, this)), this._next.bind("click", $.proxy(this.nextPage, this));
        },
        load: function(e) {
            this.clear();
            var i = "horizontal", n = !1;
            $.each(e, $.proxy(function(e, t) {
                "vertical" == t.options.thumbnails && (i = "vertical"), t.options.thumbnails || (n = !0);
            }, this)), this.setOrientation(i), this._disabledGroup = n, $.each(e, $.proxy(function(e, t) {
                this._thumbnails.push(new Thumbnail(t, e + 1));
            }, this)), this.fitToViewport();
        },
        clear: function() {
            $.each(this._thumbnails, function(e, t) {
                t.remove();
            }), this._thumbnails = [], this._position = -1, this._page = -1;
        },
        setOrientation: function(e) {
            this._orientation && Window.element.removeClass("fr-thumbnails-" + this._orientation), 
            Window.element.addClass("fr-thumbnails-" + e), this._orientation = e;
        },
        disable: function() {
            Window.element.removeClass("fr-thumbnails-enabled").addClass("fr-thumbnails-disabled"), 
            this._disabled = !0;
        },
        enable: function() {
            Window.element.removeClass("fr-thumbnails-disabled").addClass("fr-thumbnails-enabled"), 
            this._disabled = !1;
        },
        enabled: function() {
            return !this._disabled;
        },
        disabled: function() {
            return this._disabled;
        },
        updateVars: function() {
            var e = Window.element, t = this._vars, i = "horizontal" == this._orientation, n = i ? "top" : "left", s = i ? "left" : "top", o = i ? "bottom" : "left", a = i ? "top" : "right", r = i ? "width" : "height", l = i ? "height" : "width", c = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top"
            };
            this.element.removeClass("fr-thumbnails-measured");
            var u = e.is(":visible");
            if (u || e.show(), this.disabled() && this.enable(), !this.element.is(":visible") || this._thumbnails.length < 2 || this._disabledGroup) return this.disable(), 
            $.extend(this._vars.thumbnails, {
                width: 0,
                height: 0
            }), u || e.hide(), void this.element.addClass("fr-thumbnails-measured");
            this.enable();
            var d = this._previous, h = this._next, p = this._thumbs, f = Bounds.viewport(), m = this.element["inner" + _.String.capitalize(l)](), g = parseInt(this._thumbs.css("padding-" + n)) || 0, v = Math.max(m - 2 * g, 0), y = parseInt(this._thumbs.css("padding-" + s)) || 0, w = (parseInt(this.element.css("margin-" + o)) || 0) + (parseInt(this.element.css("margin-" + a)) || 0);
            $.extend(t.thumbnails, {
                height: m + w,
                width: f[i ? "width" : "height"],
                paddingTop: g
            }), $.extend(t.thumbnail, {
                height: v,
                width: v
            }), $.extend(t.thumbnailFrame, {
                width: v + 2 * y,
                height: m
            }), t.sides = {
                previous: {
                    width: h["inner" + _.String.capitalize(r)](),
                    marginLeft: parseInt(d.css("margin-" + s)) || 0,
                    marginRight: parseInt(d.css("margin-" + c[s])) || 0
                },
                next: {
                    width: h["inner" + _.String.capitalize(r)](),
                    marginLeft: parseInt(h.css("margin-" + s)) || 0,
                    marginRight: parseInt(h.css("margin-" + c[s])) || 0
                }
            };
            var b = f[r], x = t.thumbnailFrame.width;
            p = this._thumbnails.length;
            t.thumbnails.width = b, t.sides.enabled = 1 < p * x / b;
            var C = b, T = t.sides, k = T.previous, S = T.next, z = k.marginLeft + k.width + k.marginRight + S.marginLeft + S.width + S.marginRight;
            t.sides.enabled && (C -= z);
            var E = p * x;
            E < (C = Math.floor(C / x) * x) && (C = E);
            var O = C + (t.sides.enabled ? z : 0);
            t.ipp = C / x, this._mode = "page", t.ipp <= 1 && (O = C = b, t.sides.enabled = !1, 
            this._mode = "center"), t.pages = Math.ceil(p * x / C), t.wrapper = {
                width: O + 1,
                height: m
            }, t.thumbs = {
                width: C,
                height: m
            }, t.slide = {
                width: p * x + 1,
                height: m
            }, u || e.hide(), this.element.addClass("fr-thumbnails-measured");
        },
        hide: function() {
            this.disable(), this.thumbnails.hide(), this._visible = !1;
        },
        getDimensions: function() {
            var e = "horizontal" == this._orientation;
            return {
                width: e ? this._vars.thumbnails.width : this._vars.thumbnails.height,
                height: e ? this._vars.thumbnails.height : this._vars.thumbnails.width
            };
        },
        fitToViewport: function() {
            if (this.updateVars(), !this.disabled()) {
                var e = $.extend({}, this._vars), t = "horizontal" == this._orientation;
                $.each(this._thumbnails, function(e, t) {
                    t.resize();
                }), this._previous[e.sides.enabled ? "show" : "hide"](), this._next[e.sides.enabled ? "show" : "hide"](), 
                this._thumbs.css({
                    width: e.thumbs[t ? "width" : "height"],
                    height: e.thumbs[t ? "height" : "width"]
                }), this._slide.css({
                    width: e.slide[t ? "width" : "height"],
                    height: e.slide[t ? "height" : "width"]
                });
                var i = {
                    width: e.wrapper[t ? "width" : "height"],
                    height: e.wrapper[t ? "height" : "width"]
                };
                i["margin-" + (t ? "left" : "top")] = Math.round(-.5 * e.wrapper.width) + "px", 
                i["margin-" + (t ? "top" : "left")] = 0, this.wrapper.css(i), this._position && this.moveTo(this._position, !0);
            }
        },
        moveToPage: function(e) {
            if (!(e < 1 || e > this._vars.pages || e == this._page)) {
                var t = this._vars.ipp * (e - 1) + 1;
                this.moveTo(t);
            }
        },
        previousPage: function() {
            this.moveToPage(this._page - 1);
        },
        nextPage: function() {
            this.moveToPage(this._page + 1);
        },
        show: function(e) {
            var t = this._position < 0;
            e < 1 && (e = 1);
            var i = this._thumbnails.length;
            i < e && (e = i), this._position = e, this.setActive(e), ("page" != this._mode || this._page != Math.ceil(e / this._vars.ipp)) && this.moveTo(e, t);
        },
        moveTo: function(e, t) {
            if (this.updateVars(), !this.disabled()) {
                var i, n = "horizontal" == this._orientation, s = .5 * Bounds.viewport()[n ? "width" : "height"], o = this._vars.thumbnailFrame.width;
                if ("page" == this._mode) {
                    var a = Math.ceil(e / this._vars.ipp);
                    this._page = a, i = o * (this._page - 1) * this._vars.ipp * -1;
                    var r = "fr-thumbnails-side-button-disabled";
                    this._previous_button[(a < 2 ? "add" : "remove") + "Class"](r), this._next_button[(a >= this._vars.pages ? "add" : "remove") + "Class"](r);
                } else i = s + -1 * (o * (e - 1) + .5 * o);
                a = Pages.page;
                var l = {}, c = {};
                l[n ? "top" : "left"] = 0, c[n ? "left" : "top"] = i + "px", this._slide.stop(!0).css(l).animate(c, t ? 0 : a && a.view.options.effects.thumbnails.slide || 0, $.proxy(function() {
                    this.loadCurrentPage();
                }, this));
            }
        },
        loadCurrentPage: function() {
            var e, t;
            if (this._position && this._vars.thumbnailFrame.width && !(this._thumbnails.length < 1)) {
                if ("page" == this._mode) {
                    if (this._page < 1) return;
                    e = (this._page - 1) * this._vars.ipp + 1, t = Math.min(e - 1 + this._vars.ipp, this._thumbnails.length);
                } else {
                    var i = (this._orientation, Math.ceil(this._vars.thumbnails.width / this._vars.thumbnailFrame.width));
                    e = Math.max(Math.floor(Math.max(this._position - .5 * i, 0)), 1), t = Math.ceil(Math.min(this._position + .5 * i)), 
                    this._thumbnails.length < t && (t = this._thumbnails.length);
                }
                for (var n = e; n <= t; n++) this._thumbnails[n - 1].load();
            }
        },
        setActive: function(e) {
            this._slide.find(".fr-thumbnail-active").removeClass("fr-thumbnail-active");
            var t = e && this._thumbnails[e - 1];
            t && t.activate();
        },
        refresh: function() {
            this._position && this.setPosition(this._position);
        }
    };
    $.extend(Thumbnail.prototype, {
        initialize: function(e, t) {
            this.view = e, this._dimension = {}, this._position = t, this.preBuild();
        },
        preBuild: function() {
            this.thumbnail = $("<div>").addClass("fr-thumbnail").data("fr-position", this._position);
        },
        build: function() {
            if (!this.thumbnailFrame) {
                var e = this.view.options;
                Thumbnails._slide.append(this.thumbnailFrame = $("<div>").addClass("fr-thumbnail-frame").append(this.thumbnail.append(this.thumbnailWrapper = $("<div>").addClass("fr-thumbnail-wrapper")))), 
                "image" == this.view.type && this.thumbnail.addClass("fr-load-thumbnail").data("thumbnail", {
                    view: this.view,
                    src: e.thumbnail || this.view.url
                });
                var t = e.thumbnail && e.thumbnail.icon;
                t && this.thumbnail.append($("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-" + t)), 
                this.thumbnail.append($("<div>").addClass("fr-thumbnail-overlay").append($("<div>").addClass("fr-thumbnail-overlay-background")).append(this.loading = $("<div>").addClass("fr-thumbnail-loading").append($("<div>").addClass("fr-thumbnail-loading-background")).append(this.spinner = $("<div>").addClass("fr-thumbnail-spinner").hide().append($("<div>").addClass("fr-thumbnail-spinner-spin")))).append($("<div>").addClass("fr-thumbnail-overlay-border"))), 
                this.thumbnail.append($("<div>").addClass("fr-thumbnail-state")), this.resize();
            }
        },
        remove: function() {
            this.thumbnailFrame && (this.thumbnailFrame.remove(), this.thumbnailFrame = null, 
            this.image = null), this.ready && (this.ready.abort(), this.ready = null), this.vimeoThumbnail && (this.vimeoThumbnail.abort(), 
            this.vimeoThumbnail = null), this._loading = !1, this._removed = !0, this.view = null, 
            this._clearDelay();
        },
        load: function() {
            if (!(this._loaded || this._loading || this._removed)) {
                this.thumbnailWrapper || this.build(), this._loading = !0;
                var e = this.view.options.thumbnail, t = e && "boolean" == $.type(e) ? this.view.url : e || this.view.url;
                if (this._url = t) if ("vimeo" == this.view.type) if (t == e) this._url = t, this._load(this._url); else switch (this.view.type) {
                  case "vimeo":
                    this.vimeoThumbnail = new VimeoThumbnail(this.view.url, $.proxy(function(e) {
                        this._url = e, this._load(e);
                    }, this), $.proxy(function() {
                        this._error();
                    }, this));
                } else this._load(this._url);
            }
        },
        activate: function() {
            this.thumbnail.addClass("fr-thumbnail-active");
        },
        _load: function(e) {
            this.thumbnailWrapper.prepend(this.image = $("<img>").addClass("fr-thumbnail-image").attr({
                src: e
            }).css({
                opacity: 1e-4
            })), this.fadeInSpinner(), this.ready = new ImageReady(this.image[0], $.proxy(function(e) {
                var t = e.img;
                this.thumbnailFrame && this._loading && (this._loaded = !0, this._loading = !1, 
                this._dimensions = {
                    width: t.naturalWidth,
                    height: t.naturalHeight
                }, this.resize(), this.show());
            }, this), $.proxy(function() {
                this._error();
            }, this), {
                method: this.view.options.loadedMethod
            });
        },
        _error: function() {
            this._loaded = !0, this._loading = !1, this.thumbnail.addClass("fr-thumbnail-error"), 
            this.image && this.image.hide(), this.thumbnailWrapper.append($("<div>").addClass("fr-thumbnail-image")), 
            this.show();
        },
        fadeInSpinner: function() {
            if (Spinner.supported && this.view.options.spinner) {
                this._clearDelay();
                var e = this.view.options.effects.thumbnail;
                this._delay = setTimeout($.proxy(function() {
                    this.spinner.stop(!0).fadeTo(e.show || 0, 1);
                }, this), this.view.options.spinnerDelay || 0);
            }
        },
        show: function() {
            this._clearDelay();
            var e = this.view.options.effects.thumbnail;
            this.loading.stop(!0).delay(e.delay).fadeTo(e.show, 0);
        },
        _clearDelay: function() {
            this._delay && (clearTimeout(this._delay), this._delay = null);
        },
        resize: function() {
            if (this.thumbnailFrame) {
                var e = "horizontal" == Thumbnails._orientation;
                if (this.thumbnailFrame.css({
                    width: Thumbnails._vars.thumbnailFrame[e ? "width" : "height"],
                    height: Thumbnails._vars.thumbnailFrame[e ? "height" : "width"]
                }), this.thumbnailFrame.css({
                    top: e ? 0 : Thumbnails._vars.thumbnailFrame.width * (this._position - 1),
                    left: e ? Thumbnails._vars.thumbnailFrame.width * (this._position - 1) : 0
                }), this.thumbnailWrapper) {
                    var t = Thumbnails._vars.thumbnail;
                    if (this.thumbnail.css({
                        width: t.width,
                        height: t.height,
                        "margin-top": Math.round(-.5 * t.height),
                        "margin-left": Math.round(-.5 * t.width),
                        "margin-bottom": 0,
                        "margin-right": 0
                    }), this._dimensions) {
                        var i, n = {
                            width: t.width,
                            height: t.height
                        }, s = Math.max(n.width, n.height), o = $.extend({}, this._dimensions);
                        if (o.width > n.width && o.height > n.height) {
                            var a = 1, r = 1;
                            (i = Fit.within(n, o)).width < n.width && (a = n.width / i.width), i.height < n.height && (r = n.height / i.height);
                            var l = Math.max(a, r);
                            1 < l && (i.width *= l, i.height *= l), $.each("width height".split(" "), function(e, t) {
                                i[t] = Math.round(i[t]);
                            });
                        } else i = Fit.within(this._dimensions, o.width < n.width || o.height < n.height ? {
                            width: s,
                            height: s
                        } : n);
                        var c = Math.round(.5 * n.width - .5 * i.width), u = Math.round(.5 * n.height - .5 * i.height);
                        this.image.removeAttr("style").css($.extend({}, i, {
                            top: u,
                            left: c
                        }));
                    }
                }
            }
        }
    });
    var UI = {
        _modes: [ "fullclick", "outside", "inside" ],
        _ui: !1,
        _validClickTargetSelector: [ ".fr-content-element", ".fr-content", ".fr-content > .fr-stroke", ".fr-content > .fr-stroke .fr-stroke-color" ].join(", "),
        initialize: function(e) {
            $.each(this._modes, $.proxy(function(e, t) {
                this[t].initialize();
            }, this)), Window.element.addClass("fr-ui-inside-hidden fr-ui-fullclick-hidden");
        },
        set: function(e) {
            this._ui && (Window.element.removeClass("fr-window-ui-" + this._ui), Overlay.element.removeClass("fr-overlay-ui-" + this._ui)), 
            Window.element.addClass("fr-window-ui-" + e), Overlay.element.addClass("fr-overlay-ui-" + e), 
            this._enabled && this._ui && this._ui != e && (this[this._ui].disable(), this[e].enable(), 
            UI[e].show()), this._ui = e;
        },
        _onWindowResize: function() {
            Support.mobileTouch && this.show();
        },
        enable: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t][t == this._ui ? "enable" : "disable"]();
            }, this)), this._enabled = !0;
        },
        disable: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t].disable();
            }, this)), this._enabled = !1;
        },
        adjustPrevNext: function(e, t) {
            UI[this._ui].adjustPrevNext(e, t);
        },
        show: function(e, t) {
            UI[this._ui].show(e, t);
        },
        hide: function(e, t) {
            UI[this._ui].hide(e, t);
        },
        reset: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t].reset();
            }, this));
        },
        update: function() {
            var e = Pages.page;
            e && this.set(e._ui);
        }
    };
    return UI.fullclick = {
        initialize: function() {
            this.build(), this._scrollLeft = -1;
        },
        build: function() {
            Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-fullclick").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), 
            Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), 
            this._close.on("click", $.proxy(function(e) {
                e.preventDefault(), Window.hide();
            }, this)), this._previous.on("click", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e);
            }, this)), this._next.on("click", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e);
            }, this));
        },
        enable: function() {
            this.bind();
        },
        disable: function() {
            this.unbind();
        },
        reset: function() {
            Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, 
            this.resetPrevNext(), this._onMouseLeave();
        },
        resetPrevNext: function() {
            this._previous.add(this._next).stop(!0).removeAttr("style");
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-container", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), 
            Support.mobileTouch || (Window.element.on("mouseenter", this._showHandler = $.proxy(this.show, this)).on("mouseleave", this._hideHandler = $.proxy(this.hide, this)), 
            Window.element.on("mousemove", this._mousemoveHandler = $.proxy(function(e) {
                var t = e.pageX, i = e.pageY;
                this._hoveringSideButton || i == this._y && t == this._x || (this._x = t, this._y = i, 
                this.show(), this.startTimer());
            }, this)), Window._pages.on("mousemove", ".fr-container", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-container", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-container", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), 
            Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), 
            $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
        },
        unbind: function() {
            this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-container", this._onMouseUpHandler), 
            this._onMouseUpHandler = null, this._showHandler && (Window.element.off("mouseenter", this._showHandler).off("mouseleave", this._hideHandler).off("mousemove", this._mousemoveHandler), 
            Window._pages.off("mousemove", ".fr-container", this._onMouseMoveHandler).off("mouseleave", ".fr-container", this._onMouseLeaveHandler).off("mouseenter", ".fr-container", this._onMouseEnterHandler), 
            Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), 
            $(window).off("scroll", this._onScrollHandler), this._showHandler = null));
        },
        adjustPrevNext: function(e, t) {
            var i = Pages.page;
            if (i) {
                var n = Window.element.is(":visible");
                n || Window.element.show();
                var s = this._previous.attr("style");
                this._previous.removeAttr("style");
                var o = parseInt(this._previous.css("margin-top"));
                this._previous.attr({
                    style: s
                }), n || Window.element.hide();
                var a = i._infoHeight || 0, r = this._previous.add(this._next), l = {
                    "margin-top": o - .5 * a
                }, c = "number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.content.show || 0;
                this.opening && (c = 0), r.stop(!0).animate(l, c, e), this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), 
                this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), 
                r[(i._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), e && e();
            } else e && e();
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft();
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e), i = _.String.capitalize(t), n = !!t && Window["may" + i]();
                if (t != this._hoveringSide || n != this._mayClickHoveringSide) switch (this._hoveringSide = t, 
                this._mayClickHoveringSide = n, Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), 
                t) {
                  case "previous":
                    Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                    break;

                  case "next":
                    Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");
                }
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), 
            this._hoveringSide = !1;
        },
        _onMouseUp: function(e) {
            if (!(1 < e.which)) {
                if (1 == Pages.pages.length) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e);
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e);
        },
        _getEventSide: function(e) {
            return (-1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), 
            e.pageX - Window._boxPosition.left - this._scrollLeft) < .5 * Window._boxDimensions.width ? "previous" : "next";
        },
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), 
            this.clearTimer();
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, 
            this.startTimer();
        },
        show: function(e) {
            return this._visible ? this.startTimer() : (this._visible = !0, this.startTimer(), 
            Window.element.addClass("fr-visible-fullclick-ui").removeClass("fr-hidden-fullclick-ui"), 
            Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show()), 
            void ("function" == $.type(e) && e());
        },
        hide: function(e) {
            var t = Pages.page && Pages.page.view.type;
            return !this._visible || t && ("youtube" == t || "vimeo" == t) || (this._visible = !1, 
            Window.element.removeClass("fr-visible-fullclick-ui").addClass("fr-hidden-fullclick-ui")), 
            void ("function" == $.type(e) && e());
        },
        clearTimer: function() {
            Support.mobileTouch || Window.timers.clear("ui-fullclick");
        },
        startTimer: function() {
            Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-fullclick", $.proxy(function() {
                this.hide();
            }, this), Window.view ? Window.view.options.uiDelay : 0));
        }
    }, UI.inside = {
        initialize: function() {},
        enable: function() {
            this.bind();
        },
        disable: function() {
            this.unbind();
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), 
            Window._pages.on("click", ".fr-content .fr-close", $.proxy(function(e) {
                e.preventDefault(), Window.hide();
            }, this)).on("click", ".fr-content .fr-side-previous", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e);
            }, this)).on("click", ".fr-content .fr-side-next", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e);
            }, this)), Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), 
            Support.mobileTouch || (Window.element.on("mouseenter", ".fr-content", this._showHandler = $.proxy(this.show, this)).on("mouseleave", ".fr-content", this._hideHandler = $.proxy(this.hide, this)), 
            Window.element.on("mousemove", ".fr-content", this._mousemoveHandler = $.proxy(function(e) {
                var t = e.pageX, i = e.pageY;
                this._hoveringSideButton || i == this._y && t == this._x || (this._x = t, this._y = i, 
                this.show(), this.startTimer());
            }, this)), Window._pages.on("mousemove", ".fr-info, .fr-close", $.proxy(function(e) {
                e.stopPropagation(), this._onMouseLeave(e);
            }, this)), Window._pages.on("mousemove", ".fr-info", $.proxy(function(e) {
                this.clearTimer();
            }, this)), Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), 
            Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), 
            $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
        },
        unbind: function() {
            this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-content", this._onMouseUpHandler), 
            this._onMouseUpHandler = null, Window._pages.off("click", ".fr-content .fr-close").off("click", ".fr-content .fr-side-previous").off("click", ".fr-content .fr-side-next"), 
            Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), 
            this._showHandler && (Window.element.off("mouseenter", ".fr-content", this._showHandler).off("mouseleave", ".fr-content", this._hideHandler).off("mousemove", ".fr-content", this._mousemoveHandler), 
            Window._pages.off("mousemove", ".fr-info, .fr-close"), Window._pages.off("mousemove", ".fr-info"), 
            Window._pages.off("mousemove", ".fr-content-element", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), 
            Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), 
            $(window).off("scroll", this._onScrollHandler), this._showHandler = null));
        },
        reset: function() {
            Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, 
            this._hoveringSide = !1, this._onMouseLeave();
        },
        adjustPrevNext: function(e) {
            e && e();
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft();
        },
        _delegateOverlayClose: function(e) {
            var t = Pages.page;
            t && t.view.options.overlay && !t.view.options.overlay.close || $(e.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (e.preventDefault(), 
            e.stopPropagation(), Window.hide());
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e), i = _.String.capitalize(t), n = !!t && Window["may" + i]();
                if ((1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) && (t = !1), 
                t != this._hoveringSide || n != this._mayClickHoveringSide) if (this._hoveringSide = t, 
                this._mayClickHoveringSide = n, t) switch (Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), 
                t) {
                  case "previous":
                    Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                    break;

                  case "next":
                    Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");
                } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next");
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), 
            this._hoveringSide = !1;
        },
        _onMouseUp: function(e) {
            if (!(1 < e.which) && $(e.target).is(UI._validClickTargetSelector)) {
                if (1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e);
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e);
        },
        _getEventSide: function(e) {
            return (-1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), 
            e.pageX - Window._boxPosition.left - this._scrollLeft) < .5 * Window._boxDimensions.width ? "previous" : "next";
        },
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), 
            this.clearTimer();
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, 
            this.startTimer();
        },
        show: function(e) {
            return this._visible ? this.startTimer() : (this._visible = !0, this.startTimer(), 
            Window.element.addClass("fr-visible-inside-ui").removeClass("fr-hidden-inside-ui")), 
            void ("function" == $.type(e) && e());
        },
        hide: function(e) {
            return this._visible && (this._visible = !1, Window.element.removeClass("fr-visible-inside-ui").addClass("fr-hidden-inside-ui")), 
            void ("function" == $.type(e) && e());
        },
        clearTimer: function() {
            Support.mobileTouch || Window.timers.clear("ui-inside");
        },
        startTimer: function() {
            Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-inside", $.proxy(function() {
                this.hide();
            }, this), Window.view ? Window.view.options.uiDelay : 0));
        }
    }, UI.outside = {
        initialize: function() {
            this.build(), this._scrollLeft = -1;
        },
        build: function() {
            Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-outside").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), 
            Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), 
            this._close.on("click", $.proxy(function(e) {
                e.preventDefault(), Window.hide();
            }, this)), this._previous.on("click", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e);
            }, this)), this._next.on("click", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e);
            }, this));
        },
        enable: function() {
            this.bind();
        },
        disable: function() {
            this.unbind();
        },
        reset: function() {
            Window.timers.clear("ui-outside"), this._x = -1, this._y = -1, this._scrollLeft = -1, 
            this._onMouseLeave();
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window.element.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), 
            Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), 
            Support.mobileTouch || (Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), 
            Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), 
            $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))));
        },
        unbind: function() {
            this._onMouseUpHandler && (Window.element.off("mouseup", ".fr-content", this._onMouseUpHandler), 
            this._onMouseUpHandler = null, Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), 
            this._onMouseMoveHandler && (Window._pages.off("mousemove", ".fr-content", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), 
            Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), 
            $(window).off("scroll", this._onScrollHandler), this._onMouseMoveHandler = null));
        },
        adjustPrevNext: function(e, t) {
            var i = Pages.page;
            if (i) {
                var n = this._previous.add(this._next);
                this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), 
                this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), 
                n[(i._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), e && e();
            } else e && e();
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft();
        },
        _delegateOverlayClose: function(e) {
            var t = Pages.page;
            t && t.view.options.overlay && !t.view.options.overlay.close || $(e.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (e.preventDefault(), 
            e.stopPropagation(), Window.hide());
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e), i = _.String.capitalize(t), n = !!t && Window["may" + i]();
                if ((1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) && (t = !1), 
                t != this._hoveringSide || n != this._mayClickHoveringSide) if (this._hoveringSide = t, 
                this._mayClickHoveringSide = n, t) switch (Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), 
                t) {
                  case "previous":
                    Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                    break;

                  case "next":
                    Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous");
                } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next");
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), 
            this._hoveringSide = !1;
        },
        _onMouseUp: function(e) {
            if (!(1 < e.which) && $(e.target).is(UI._validClickTargetSelector)) {
                if (1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e);
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e);
        },
        _getEventSide: function(e) {
            return (-1 < this._scrollLeft ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), 
            e.pageX - Window._boxPosition.left - this._scrollLeft) < .5 * Window._boxDimensions.width ? "previous" : "next";
        },
        show: function() {
            Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show();
        },
        hide: function() {},
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)]();
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1;
        },
        clearTimer: function() {}
    }, $(document).ready(function(e) {
        _Fresco.initialize();
    }), Fresco;
}), function() {
    function e() {}
    function o(e, t) {
        for (var i = e.length; i--; ) if (e[i].listener === t) return i;
        return -1;
    }
    function t(e) {
        return function() {
            return this[e].apply(this, arguments);
        };
    }
    var i = e.prototype, n = this, s = n.EventEmitter;
    i.getListeners = function(e) {
        var t, i, n = this._getEvents();
        if ("object" == typeof e) for (i in t = {}, n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i]); else t = n[e] || (n[e] = []);
        return t;
    }, i.flattenListeners = function(e) {
        var t, i = [];
        for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
        return i;
    }, i.getListenersAsObject = function(e) {
        var t, i = this.getListeners(e);
        return i instanceof Array && ((t = {})[e] = i), t || i;
    }, i.addListener = function(e, t) {
        var i, n = this.getListenersAsObject(e), s = "object" == typeof t;
        for (i in n) n.hasOwnProperty(i) && -1 === o(n[i], t) && n[i].push(s ? t : {
            listener: t,
            once: !1
        });
        return this;
    }, i.on = t("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        });
    }, i.once = t("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this;
    }, i.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this;
    }, i.removeListener = function(e, t) {
        var i, n, s = this.getListenersAsObject(e);
        for (n in s) s.hasOwnProperty(n) && -1 !== (i = o(s[n], t)) && s[n].splice(i, 1);
        return this;
    }, i.off = t("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t);
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t);
    }, i.manipulateListeners = function(e, t, i) {
        var n, s, o = e ? this.removeListener : this.addListener, a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (n = i.length; n--; ) o.call(this, t, i[n]); else for (n in t) t.hasOwnProperty(n) && (s = t[n]) && ("function" == typeof s ? o.call(this, n, s) : a.call(this, n, s));
        return this;
    }, i.removeEvent = function(e) {
        var t, i = typeof e, n = this._getEvents();
        if ("string" === i) delete n[e]; else if ("object" === i) for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t]; else delete this._events;
        return this;
    }, i.removeAllListeners = t("removeEvent"), i.emitEvent = function(e, t) {
        var i, n, s, o = this.getListenersAsObject(e);
        for (s in o) if (o.hasOwnProperty(s)) for (n = o[s].length; n--; ) !0 === (i = o[s][n]).once && this.removeListener(e, i.listener), 
        i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
        return this;
    }, i.trigger = t("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this;
    }, i._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    }, i._getEvents = function() {
        return this._events || (this._events = {});
    }, e.noConflict = function() {
        return n.EventEmitter = s, e;
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e;
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e;
}.call(this), function(i) {
    function n(e) {
        var t = i.event;
        return t.target = t.target || t.srcElement || e, t;
    }
    var e = document.documentElement, t = function() {};
    e.addEventListener ? t = function(e, t, i) {
        e.addEventListener(t, i, !1);
    } : e.attachEvent && (t = function(t, e, i) {
        t[e + i] = i.handleEvent ? function() {
            var e = n(t);
            i.handleEvent.call(i, e);
        } : function() {
            var e = n(t);
            i.call(t, e);
        }, t.attachEvent("on" + e, t[e + i]);
    });
    var s = function() {};
    e.removeEventListener ? s = function(e, t, i) {
        e.removeEventListener(t, i, !1);
    } : e.detachEvent && (s = function(t, i, n) {
        t.detachEvent("on" + i, t[i + n]);
        try {
            delete t[i + n];
        } catch (e) {
            t[i + n] = void 0;
        }
    });
    var o = {
        bind: t,
        unbind: s
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : i.eventie = o;
}(this), function(i, n) {
    "function" == typeof define && define.amd ? define([ "eventEmitter/EventEmitter", "eventie/eventie" ], function(e, t) {
        return n(i, e, t);
    }) : "object" == typeof exports ? module.exports = n(i, require("eventEmitter"), require("eventie")) : i.imagesLoaded = n(i, i.EventEmitter, i.eventie);
}(this, function(e, t, i) {
    function s(e, t) {
        for (var i in t) e[i] = t[i];
        return e;
    }
    function o(e) {
        var t, i = [];
        if (t = e, "[object Array]" === d.call(t)) i = e; else if ("number" == typeof e.length) for (var n = 0, s = e.length; n < s; n++) i.push(e[n]); else i.push(e);
        return i;
    }
    function a(e, t, i) {
        if (!(this instanceof a)) return new a(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), 
        this.options = s({}, this.options), "function" == typeof t ? i = t : s(this.options, t), 
        i && this.on("always", i), this.getImages(), l && (this.jqDeferred = new l.Deferred());
        var n = this;
        setTimeout(function() {
            n.check();
        });
    }
    function n(e) {
        this.img = e;
    }
    function r(e) {
        this.src = e, h[e] = this;
    }
    var l = e.jQuery, c = e.console, u = void 0 !== c, d = Object.prototype.toString;
    a.prototype = new t(), a.prototype.options = {}, a.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; e < t; e++) {
            var i = this.elements[e];
            "IMG" === i.nodeName && this.addImage(i);
            for (var n = i.querySelectorAll("img"), s = 0, o = n.length; s < o; s++) {
                var a = n[s];
                this.addImage(a);
            }
        }
    }, a.prototype.addImage = function(e) {
        var t = new n(e);
        this.images.push(t);
    }, a.prototype.check = function() {
        function e(e, t) {
            return i.options.debug && u && c.log("confirm", e, t), i.progress(e), ++n === s && i.complete(), 
            !0;
        }
        var i = this, n = 0, s = this.images.length;
        if (this.hasAnyBroken = !1, s) for (var t = 0; t < s; t++) {
            var o = this.images[t];
            o.on("confirm", e), o.check();
        } else this.complete();
    }, a.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
    }, a.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var i = this;
        setTimeout(function() {
            if (i.emit(t, i), i.emit("always", i), i.jqDeferred) {
                var e = i.hasAnyBroken ? "reject" : "resolve";
                i.jqDeferred[e](i);
            }
        });
    }, l && (l.fn.imagesLoaded = function(e, t) {
        return new a(this, e, t).jqDeferred.promise(l(this));
    }), n.prototype = new t(), n.prototype.check = function() {
        var e = h[this.img.src] || new r(this.img.src);
        if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed"); else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); else {
            var i = this;
            e.on("confirm", function(e, t) {
                return i.confirm(e.isLoaded, t), !0;
            }), e.check();
        }
    }, n.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emit("confirm", this, t);
    };
    var h = {};
    return r.prototype = new t(), r.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image();
            i.bind(e, "load", this), i.bind(e, "error", this), e.src = this.src, this.isChecked = !0;
        }
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
    }, r.prototype.onload = function(e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e);
    }, r.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
    }, r.prototype.confirm = function(e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t);
    }, r.prototype.unbindProxyEvents = function(e) {
        i.unbind(e.target, "load", this), i.unbind(e.target, "error", this);
    }, a;
}), function(n) {
    "use strict";
    function i(e, t) {
        this.$target = n(e), this.opts = n.extend({}, s, t, this.$target.data()), void 0 === this.isOpen && this._init();
    }
    var c, u, d, h, p, f, s = {
        loadingNotice: "Loading image",
        errorNotice: "The image could not be loaded",
        errorDuration: 2500,
        linkAttribute: "href",
        preventClicks: !0,
        beforeShow: n.noop,
        beforeHide: n.noop,
        onShow: n.noop,
        onHide: n.noop,
        onMove: n.noop
    };
    i.prototype._init = function() {
        this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = n('<div class="easyzoom-flyout" />'), 
        this.$notice = n('<div class="easyzoom-notice" />'), this.$target.on({
            "mousemove.easyzoom touchmove.easyzoom": n.proxy(this._onMove, this),
            "mouseleave.easyzoom touchend.easyzoom": n.proxy(this._onLeave, this),
            "mouseenter.easyzoom touchstart.easyzoom": n.proxy(this._onEnter, this)
        }), this.opts.preventClicks && this.$target.on("click.easyzoom", function(e) {
            e.preventDefault();
        });
    }, i.prototype.show = function(e, t) {
        var i, n, s, o, a = this;
        if (!1 !== this.opts.beforeShow.call(this)) {
            if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), function() {
                (a.isMouseOver || !t) && a.show(e);
            });
            this.$target.append(this.$flyout), i = this.$target.width(), n = this.$target.height(), 
            s = this.$flyout.width(), o = this.$flyout.height(), c = this.$zoom.width() - s, 
            u = this.$zoom.height() - o, c < 0 && (c = 0), u < 0 && (u = 0), d = c / i, h = u / n, 
            this.isOpen = !0, this.opts.onShow.call(this), e && this._move(e);
        }
    }, i.prototype._onEnter = function(e) {
        var t = e.originalEvent.touches;
        this.isMouseOver = !0, t && 1 != t.length || (e.preventDefault(), this.show(e, !0));
    }, i.prototype._onMove = function(e) {
        this.isOpen && (e.preventDefault(), this._move(e));
    }, i.prototype._onLeave = function() {
        this.isMouseOver = !1, this.isOpen && this.hide();
    }, i.prototype._onLoad = function(e) {
        e.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), 
        this.$target.removeClass("is-loading").addClass("is-ready"), e.data.call && e.data());
    }, i.prototype._onError = function() {
        var e = this;
        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), 
        this.detachNotice = setTimeout(function() {
            e.$notice.detach(), e.detachNotice = null;
        }, this.opts.errorDuration);
    }, i.prototype._loadImage = function(e, t) {
        var i = new Image();
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), 
        this.$zoom = n(i).on("error", n.proxy(this._onError, this)).on("load", t, n.proxy(this._onLoad, this)), 
        i.style.position = "absolute", i.src = e;
    }, i.prototype._move = function(e) {
        if (0 === e.type.indexOf("touch")) {
            var t = e.touches || e.originalEvent.touches;
            p = t[0].pageX, f = t[0].pageY;
        } else p = e.pageX || p, f = e.pageY || f;
        var i = this.$target.offset(), n = f - i.top, s = p - i.left, o = Math.ceil(n * h), a = Math.ceil(s * d);
        if (a < 0 || o < 0 || c < a || u < o) this.hide(); else {
            var r = -1 * o, l = -1 * a;
            this.$zoom.css({
                top: r,
                left: l
            }), this.opts.onMove.call(this, r, l);
        }
    }, i.prototype.hide = function() {
        this.isOpen && !1 !== this.opts.beforeHide.call(this) && (this.$flyout.detach(), 
        this.isOpen = !1, this.opts.onHide.call(this));
    }, i.prototype.swap = function(e, t, i) {
        this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), 
        this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), 
        this.$image.attr({
            src: e,
            srcset: n.isArray(i) ? i.join() : i
        }), this.$link.attr(this.opts.linkAttribute, t);
    }, i.prototype.teardown = function() {
        this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), 
        this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, 
        delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, 
        delete this.isReady;
    }, n.fn.easyZoom = function(t) {
        return this.each(function() {
            var e = n.data(this, "easyZoom");
            e ? void 0 === e.isOpen && e._init() : n.data(this, "easyZoom", new i(this, t));
        });
    }, "function" == typeof define && define.amd ? define(function() {
        return i;
    }) : "undefined" != typeof module && module.exports && (module.exports = i);
}(jQuery), function(e) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], e) : e(jQuery);
}(function(se) {
    function n(i) {
        return !i || void 0 !== i.allowPageScroll || void 0 === i.swipe && void 0 === i.swipeStatus || (i.allowPageScroll = de), 
        void 0 !== i.click && void 0 === i.tap && (i.tap = i.click), i || (i = {}), i = se.extend({}, se.fn.swipe.defaults, i), 
        this.each(function() {
            var e = se(this), t = e.data(Se);
            t || (t = new function(e, y) {
                function t(e) {
                    if (!0 !== U.data(Se + "_intouch") && !(0 < se(e.target).closest(y.excludedElements, U).length)) {
                        var t, i, n = e.originalEvent ? e.originalEvent : e, s = ke ? n.touches[0] : n;
                        return X = xe, ke ? Q = n.touches.length : e.preventDefault(), Y = F = null, N = 1, 
                        V = B = q = W = R = 0, K = function() {
                            for (var e = [], t = 0; t <= 5; t++) e.push({
                                start: {
                                    x: 0,
                                    y: 0
                                },
                                end: {
                                    x: 0,
                                    y: 0
                                },
                                identifier: 0
                            });
                            return e;
                        }(), (i = {})[oe] = E(oe), i[ae] = E(ae), i[re] = E(re), i[le] = E(le), G = i, C(), 
                        !ke || Q === y.fingers || y.fingers === be || _() ? (k(0, s), Z = I(), 2 == Q && (k(1, n.touches[1]), 
                        q = B = P(K[0].start, K[1].start)), (y.swipeStatus || y.pinchStatus) && (t = b(n, X))) : t = !1, 
                        !1 === t ? (b(n, X = Te), t) : (T(!0), null);
                    }
                }
                function i(e) {
                    var t = e.originalEvent ? e.originalEvent : e;
                    if (X !== $e && X !== Te && !$()) {
                        var i, n, s, o, a, r, l, c, u, d, h, p, f = ke ? t.touches[0] : t, m = S(f);
                        if (J = I(), ke && (Q = t.touches.length), X = Ce, 2 == Q && (0 == q ? (k(1, t.touches[1]), 
                        q = B = P(K[0].start, K[1].start)) : (S(t.touches[1]), B = P(K[0].end, K[1].end), 
                        K[0].end, K[1].end, Y = N < 1 ? ue : ce), N = (B / q * 1).toFixed(2), V = Math.abs(q - B)), 
                        Q === y.fingers || y.fingers === be || !ke || _()) {
                            if (d = m.start, h = m.end, p = function(e, t) {
                                var i = e.x - t.x, n = t.y - e.y, s = Math.atan2(n, i), o = Math.round(180 * s / Math.PI);
                                o < 0 && (o = 360 - Math.abs(o));
                                return o;
                            }(d, h), function(e, t) {
                                if (y.allowPageScroll === de || _()) e.preventDefault(); else {
                                    var i = y.allowPageScroll === he;
                                    switch (t) {
                                      case oe:
                                        (y.swipeLeft && i || !i && y.allowPageScroll != ye) && e.preventDefault();
                                        break;

                                      case ae:
                                        (y.swipeRight && i || !i && y.allowPageScroll != ye) && e.preventDefault();
                                        break;

                                      case re:
                                        (y.swipeUp && i || !i && y.allowPageScroll != we) && e.preventDefault();
                                        break;

                                      case le:
                                        (y.swipeDown && i || !i && y.allowPageScroll != we) && e.preventDefault();
                                    }
                                }
                            }(e, F = p <= 45 && 0 <= p ? oe : p <= 360 && 315 <= p ? oe : 135 <= p && p <= 225 ? ae : 45 < p && p < 135 ? le : re), 
                            c = m.start, u = m.end, R = Math.round(Math.sqrt(Math.pow(u.x - c.x, 2) + Math.pow(u.y - c.y, 2))), 
                            W = O(), r = F, l = R, l = Math.max(l, z(r)), G[r].distance = l, (y.swipeStatus || y.pinchStatus) && (i = b(t, X)), 
                            !y.triggerOnTouchEnd || y.triggerOnTouchLeave) {
                                var g = !0;
                                if (y.triggerOnTouchLeave) {
                                    var v = {
                                        left: (a = (o = se(o = this)).offset()).left,
                                        right: a.left + o.outerWidth(),
                                        top: a.top,
                                        bottom: a.top + o.outerHeight()
                                    };
                                    n = m.end, s = v, g = n.x > s.left && n.x < s.right && n.y > s.top && n.y < s.bottom;
                                }
                                !y.triggerOnTouchEnd && g ? X = w(Ce) : y.triggerOnTouchLeave && !g && (X = w($e)), 
                                X != Te && X != $e || b(t, X);
                            }
                        } else b(t, X = Te);
                        !1 === i && b(t, X = Te);
                    }
                }
                function n(e) {
                    var t = e.originalEvent;
                    return ke && 0 < t.touches.length ? (ee = I(), te = event.touches.length + 1, !0) : ($() && (Q = te), 
                    e.preventDefault(), J = I(), W = O(), c() ? b(t, X = Te) : y.triggerOnTouchEnd || 0 == y.triggerOnTouchEnd && X === Ce ? b(t, X = $e) : !y.triggerOnTouchEnd && g() ? r(t, X = $e, me) : X === Ce && b(t, X = Te), 
                    T(!1), null);
                }
                function s() {
                    B = q = Z = J = Q = 0, N = 1, C(), T(!1);
                }
                function o(e) {
                    var t = e.originalEvent;
                    y.triggerOnTouchLeave && (X = w($e), b(t, X));
                }
                function a() {
                    U.unbind(A, t), U.unbind(j, s), U.unbind(L, i), U.unbind(D, n), H && U.unbind(H, o), 
                    T(!1);
                }
                function w(e) {
                    var t = e, i = u(), n = l(), s = c();
                    return !i || s ? t = Te : !n || e != Ce || y.triggerOnTouchEnd && !y.triggerOnTouchLeave ? !n && e == $e && y.triggerOnTouchLeave && (t = Te) : t = $e, 
                    t;
                }
                function b(e, t) {
                    var i = void 0;
                    return h() && p() || p() ? i = r(e, t, pe) : (d() && _() || _()) && !1 !== i && (i = r(e, t, fe)), 
                    x() && v() && !1 !== i ? i = r(e, t, ge) : W > y.longTapThreshold && R < _e && y.longTap && !1 !== i ? i = r(e, t, ve) : 1 !== Q && ke || !isNaN(R) && 0 !== R || !g() || !1 === i || (i = r(e, t, me)), 
                    t === Te && s(), t === $e && (ke ? 0 == e.touches.length && s() : s()), i;
                }
                function r(e, t, i) {
                    var n = void 0;
                    if (i == pe) {
                        if (U.trigger("swipeStatus", [ t, F || null, R || 0, W || 0, Q ]), y.swipeStatus && !1 === (n = y.swipeStatus.call(U, e, t, F || null, R || 0, W || 0, Q))) return !1;
                        if (t == $e && h()) {
                            if (U.trigger("swipe", [ F, R, W, Q ]), y.swipe && !1 === (n = y.swipe.call(U, e, F, R, W, Q))) return !1;
                            switch (F) {
                              case oe:
                                U.trigger("swipeLeft", [ F, R, W, Q ]), y.swipeLeft && (n = y.swipeLeft.call(U, e, F, R, W, Q));
                                break;

                              case ae:
                                U.trigger("swipeRight", [ F, R, W, Q ]), y.swipeRight && (n = y.swipeRight.call(U, e, F, R, W, Q));
                                break;

                              case re:
                                U.trigger("swipeUp", [ F, R, W, Q ]), y.swipeUp && (n = y.swipeUp.call(U, e, F, R, W, Q));
                                break;

                              case le:
                                U.trigger("swipeDown", [ F, R, W, Q ]), y.swipeDown && (n = y.swipeDown.call(U, e, F, R, W, Q));
                            }
                        }
                    }
                    if (i == fe) {
                        if (U.trigger("pinchStatus", [ t, Y || null, V || 0, W || 0, Q, N ]), y.pinchStatus && !1 === (n = y.pinchStatus.call(U, e, t, Y || null, V || 0, W || 0, Q, N))) return !1;
                        if (t == $e && d()) switch (Y) {
                          case ce:
                            U.trigger("pinchIn", [ Y || null, V || 0, W || 0, Q, N ]), y.pinchIn && (n = y.pinchIn.call(U, e, Y || null, V || 0, W || 0, Q, N));
                            break;

                          case ue:
                            U.trigger("pinchOut", [ Y || null, V || 0, W || 0, Q, N ]), y.pinchOut && (n = y.pinchOut.call(U, e, Y || null, V || 0, W || 0, Q, N));
                        }
                    }
                    return i == me ? t !== Te && t !== $e || (clearTimeout(ne), v() && !x() ? (ie = I(), 
                    ne = setTimeout(se.proxy(function() {
                        ie = null, U.trigger("tap", [ e.target ]), y.tap && (n = y.tap.call(U, e, e.target));
                    }, this), y.doubleTapThreshold)) : (ie = null, U.trigger("tap", [ e.target ]), y.tap && (n = y.tap.call(U, e, e.target)))) : i == ge ? t !== Te && t !== $e || (clearTimeout(ne), 
                    ie = null, U.trigger("doubletap", [ e.target ]), y.doubleTap && (n = y.doubleTap.call(U, e, e.target))) : i == ve && (t !== Te && t !== $e || (clearTimeout(ne), 
                    ie = null, U.trigger("longtap", [ e.target ]), y.longTap && (n = y.longTap.call(U, e, e.target)))), 
                    n;
                }
                function l() {
                    var e = !0;
                    return null !== y.threshold && (e = R >= y.threshold), e;
                }
                function c() {
                    var e = !1;
                    return null !== y.cancelThreshold && null !== F && (e = z(F) - R >= y.cancelThreshold), 
                    e;
                }
                function u() {
                    return !y.maxTimeThreshold || !(W >= y.maxTimeThreshold);
                }
                function d() {
                    var e = f(), t = m(), i = function() {
                        if (null !== y.pinchThreshold) return V >= y.pinchThreshold;
                        return !0;
                    }();
                    return e && t && i;
                }
                function _() {
                    return !!(y.pinchStatus || y.pinchIn || y.pinchOut);
                }
                function h() {
                    var e = u(), t = l(), i = f(), n = m(), s = c(), o = !s && n && i && t && e;
                    return o;
                }
                function p() {
                    return !!(y.swipe || y.swipeStatus || y.swipeLeft || y.swipeRight || y.swipeUp || y.swipeDown);
                }
                function f() {
                    return Q === y.fingers || y.fingers === be || !ke;
                }
                function m() {
                    return 0 !== K[0].end.x;
                }
                function g() {
                    return !!y.tap;
                }
                function v() {
                    return !!y.doubleTap;
                }
                function x() {
                    if (null == ie) return !1;
                    var e = I();
                    return v() && e - ie <= y.doubleTapThreshold;
                }
                function C() {
                    te = ee = 0;
                }
                function $() {
                    var e = !1;
                    if (ee) {
                        var t = I() - ee;
                        t <= y.fingerReleaseThreshold && (e = !0);
                    }
                    return e;
                }
                function T(e) {
                    !0 === e ? (U.bind(L, i), U.bind(D, n), H && U.bind(H, o)) : (U.unbind(L, i, !1), 
                    U.unbind(D, n, !1), H && U.unbind(H, o, !1)), U.data(Se + "_intouch", !0 === e);
                }
                function k(e, t) {
                    var i = void 0 !== t.identifier ? t.identifier : 0;
                    return K[e].identifier = i, K[e].start.x = K[e].end.x = t.pageX || t.clientX, K[e].start.y = K[e].end.y = t.pageY || t.clientY, 
                    K[e];
                }
                function S(e) {
                    var t = void 0 !== e.identifier ? e.identifier : 0, i = function(e) {
                        for (var t = 0; t < K.length; t++) if (K[t].identifier == e) return K[t];
                    }(t);
                    return i.end.x = e.pageX || e.clientX, i.end.y = e.pageY || e.clientY, i;
                }
                function z(e) {
                    if (G[e]) return G[e].distance;
                }
                function E(e) {
                    return {
                        direction: e,
                        distance: 0
                    };
                }
                function O() {
                    return J - Z;
                }
                function P(e, t) {
                    var i = Math.abs(e.x - t.x), n = Math.abs(e.y - t.y);
                    return Math.round(Math.sqrt(i * i + n * n));
                }
                function I() {
                    var e = new Date();
                    return e.getTime();
                }
                var M = ke || !y.fallbackToMouseEvents, A = M ? "touchstart" : "mousedown", L = M ? "touchmove" : "mousemove", D = M ? "touchend" : "mouseup", H = M ? null : "mouseleave", j = "touchcancel", R = 0, F = null, W = 0, q = 0, B = 0, N = 1, V = 0, Y = 0, G = null, U = se(e), X = "start", Q = 0, K = null, Z = 0, J = 0, ee = 0, te = 0, ie = 0, ne = null;
                try {
                    U.bind(A, t), U.bind(j, s);
                } catch (e) {
                    se.error("events not supported " + A + "," + j + " on jQuery.swipe");
                }
                this.enable = function() {
                    return U.bind(A, t), U.bind(j, s), U;
                }, this.disable = function() {
                    return a(), U;
                }, this.destroy = function() {
                    return a(), U.data(Se, null), U;
                }, this.option = function(e, t) {
                    if (void 0 !== y[e]) {
                        if (void 0 === t) return y[e];
                        y[e] = t;
                    } else se.error("Option " + e + " does not exist on jQuery.swipe.options");
                    return null;
                };
            }(this, i), e.data(Se, t));
        });
    }
    var oe = "left", ae = "right", re = "up", le = "down", ce = "in", ue = "out", de = "none", he = "auto", pe = "swipe", fe = "pinch", me = "tap", ge = "doubletap", ve = "longtap", ye = "horizontal", we = "vertical", be = "all", _e = 10, xe = "start", Ce = "move", $e = "end", Te = "cancel", ke = "ontouchstart" in window, Se = "TouchSwipe";
    se.fn.swipe = function(e) {
        var t = se(this), i = t.data(Se);
        if (i && "string" == typeof e) {
            if (i[e]) return i[e].apply(this, Array.prototype.slice.call(arguments, 1));
            se.error("Method " + e + " does not exist on jQuery.swipe");
        } else if (!(i || "object" != typeof e && e)) return n.apply(this, arguments);
        return t;
    }, se.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    }, se.fn.swipe.phases = {
        PHASE_START: xe,
        PHASE_MOVE: Ce,
        PHASE_END: $e,
        PHASE_CANCEL: Te
    }, se.fn.swipe.directions = {
        LEFT: oe,
        RIGHT: ae,
        UP: re,
        DOWN: le,
        IN: ce,
        OUT: ue
    }, se.fn.swipe.pageScroll = {
        NONE: de,
        HORIZONTAL: ye,
        VERTICAL: we,
        AUTO: he
    }, se.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: be
    };
}), function() {
    "use strict";
    function e(e) {
        e.fn.swiper = function(t) {
            var i;
            return e(this).each(function() {
                var e = new H(this, t);
                i || (i = e);
            }), i;
        };
    }
    var D, t, i, n, s, o, a, r, l, H = function(e, l) {
        function m(e) {
            return Math.floor(e);
        }
        function t() {
            var e = b.params.autoplay, t = b.slides.eq(b.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || b.params.autoplay), 
            b.autoplayTimeoutId = setTimeout(function() {
                b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? l.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), 
                b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b));
            }, e);
        }
        function a(e, i) {
            var t = D(e.target);
            if (!t.is(i)) if ("string" == typeof i) t = t.parents(i); else if (i.nodeType) {
                var n;
                return t.parents().each(function(e, t) {
                    t === i && (n = i);
                }), n ? i : void 0;
            }
            if (0 !== t.length) return t[0];
        }
        function i(e, t) {
            t = t || {};
            var i = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    b.onResize(!0), b.emit("onObserverUpdate", b, e);
                });
            });
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), b.observers.push(i);
        }
        function n(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
            if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var i = !1;
                    if (0 < b.container.parents("." + b.params.slideClass).length && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                    var n = window.pageXOffset, s = window.pageYOffset, o = window.innerWidth, a = window.innerHeight, r = b.container.offset();
                    b.rtl && (r.left = r.left - b.container[0].scrollLeft);
                    for (var l = [ [ r.left, r.top ], [ r.left + b.width, r.top ], [ r.left, r.top + b.height ], [ r.left + b.width, r.top + b.height ] ], c = 0; c < l.length; c++) {
                        var u = l[c];
                        u[0] >= n && u[0] <= n + o && u[1] >= s && u[1] <= s + a && (i = !0);
                    }
                    if (!i) return;
                }
                b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                40 === t && b.slideNext(), 38 === t && b.slidePrev());
            }
        }
        function s(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0, i = b.rtl ? -1 : 1, n = function(e) {
                var t = 0, i = 0, n = 0, s = 0;
                "detail" in e && (i = e.detail);
                "wheelDelta" in e && (i = -e.wheelDelta / 120);
                "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120);
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120);
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0);
                n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY);
                "deltaX" in e && (n = e.deltaX);
                (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, 
                s *= 800));
                n && !t && (t = n < 1 ? -1 : 1);
                s && !i && (i = s < 1 ? -1 : 1);
                return {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                };
            }(e);
            if (b.params.mousewheelForceToAxis) if (b.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                t = n.pixelX * i;
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                t = n.pixelY;
            } else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
            if (0 !== t) {
                if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
                    var s = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity, o = b.isBeginning, a = b.isEnd;
                    if (s >= b.minTranslate() && (s = b.minTranslate()), s <= b.maxTranslate() && (s = b.maxTranslate()), 
                    b.setWrapperTransition(0), b.setWrapperTranslate(s), b.updateProgress(), b.updateActiveIndex(), 
                    (!o && b.isBeginning || !a && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), 
                    b.mousewheel.timeout = setTimeout(function() {
                        b.slideReset();
                    }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), 
                    b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 
                    0 === s || s === b.maxTranslate()) return;
                } else {
                    if (60 < new window.Date().getTime() - b.mousewheel.lastScrollTime) if (t < 0) if (b.isEnd && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0;
                    } else b.slideNext(), b.emit("onScroll", b, e); else if (b.isBeginning && !b.params.loop || b.animating) {
                        if (b.params.mousewheelReleaseOnEdges) return !0;
                    } else b.slidePrev(), b.emit("onScroll", b, e);
                    b.mousewheel.lastScrollTime = new window.Date().getTime();
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
            }
        }
        function o(e, t) {
            var i, n, s;
            e = D(e);
            var o = b.rtl ? -1 : 1;
            i = e.attr("data-swiper-parallax") || "0", n = e.attr("data-swiper-parallax-x"), 
            s = e.attr("data-swiper-parallax-y"), n || s ? (n = n || "0", s = s || "0") : b.isHorizontal() ? (n = i, 
            s = "0") : (s = i, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * o + "%" : n * t * o + "px", 
            s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t + "%" : s * t + "px", e.transform("translate3d(" + n + ", " + s + ",0px)");
        }
        function r(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), 
            e;
        }
        if (!(this instanceof H)) return new H(e, l);
        var c = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, u = l && l.virtualTranslate;
        l = l || {};
        var d = {};
        for (var h in l) if ("object" != typeof l[h] || null === l[h] || (l[h].nodeType || l[h] === window || l[h] === document || void 0 !== j && l[h] instanceof j || "undefined" != typeof jQuery && l[h] instanceof jQuery)) d[h] = l[h]; else for (var p in d[h] = {}, 
        l[h]) d[h][p] = l[h][p];
        for (var f in c) if (void 0 === l[f]) l[f] = c[f]; else if ("object" == typeof l[f]) for (var g in c[f]) void 0 === l[f][g] && (l[f][g] = c[f][g]);
        var b = this;
        if (b.params = l, b.originalParams = d, b.classNames = [], void 0 !== D && void 0 !== j && (D = j), 
        (void 0 !== D || (D = void 0 === j ? window.Dom7 || window.Zepto || window.jQuery : j)) && (b.$ = D, 
        b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
            if (!b.params.breakpoints) return !1;
            var e, t = !1, i = [];
            for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && i.push(e);
            i.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
            });
            for (var n = 0; n < i.length; n++) (e = i[n]) >= window.innerWidth && !t && (t = e);
            return t || "max";
        }, b.setBreakpoint = function() {
            var e = b.getActiveBreakpoint();
            if (e && b.currentBreakpoint !== e) {
                var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams, i = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                for (var n in t) b.params[n] = t[n];
                b.currentBreakpoint = e, i && b.destroyLoop && b.reLoop(!0);
            }
        }, b.params.breakpoints && b.setBreakpoint(), b.container = D(e), 0 !== b.container.length)) {
            if (1 < b.container.length) {
                var v = [];
                return b.container.each(function() {
                    v.push(new H(this, l));
                }), v;
            }
            (b.container[0].swiper = b).container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), 
            b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), 
            b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), 
            b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), 
            (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), 
            b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), 0 <= [ "cube", "coverflow", "flip" ].indexOf(b.params.effect) && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, 
            b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), 
            "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), 
            "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, 
            b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, 
            b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), 
            "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, 
            b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, 
            b.params.spaceBetween = 0, b.params.setWrapperSize = !1, void 0 === u && (b.params.virtualTranslate = !0)), 
            b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), 
            b.params.pagination && (b.paginationContainer = D(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && 1 < b.paginationContainer.length && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), 
            "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, 
            b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), 
            (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = D(b.params.nextButton), 
            b.params.uniqueNavElements && "string" == typeof b.params.nextButton && 1 < b.nextButton.length && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), 
            b.params.prevButton && (b.prevButton = D(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && 1 < b.prevButton.length && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), 
            b.isHorizontal = function() {
                return "horizontal" === b.params.direction;
            }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), 
            b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), 
            1 < b.params.slidesPerColumn && b.classNames.push(b.params.containerModifierClass + "multirow"), 
            b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), 
            b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, 
            b.lockSwipeToNext = function() {
                (b.params.allowSwipeToNext = !1) === b.params.allowSwipeToPrev && b.params.grabCursor && b.unsetGrabCursor();
            }, b.lockSwipeToPrev = function() {
                (b.params.allowSwipeToPrev = !1) === b.params.allowSwipeToNext && b.params.grabCursor && b.unsetGrabCursor();
            }, b.lockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor();
            }, b.unlockSwipeToNext = function() {
                (b.params.allowSwipeToNext = !0) === b.params.allowSwipeToPrev && b.params.grabCursor && b.setGrabCursor();
            }, b.unlockSwipeToPrev = function() {
                (b.params.allowSwipeToPrev = !0) === b.params.allowSwipeToNext && b.params.grabCursor && b.setGrabCursor();
            }, b.unlockSwipes = function() {
                b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor();
            }, b.setGrabCursor = function(e) {
                b.container[0].style.cursor = "move", b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
                b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab";
            }, b.unsetGrabCursor = function() {
                b.container[0].style.cursor = "";
            }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, 
            b.loadImage = function(e, t, i, n, s, o) {
                function a() {
                    o && o();
                }
                var r;
                e.complete && s ? a() : t ? ((r = new window.Image()).onload = a, r.onerror = a, 
                n && (r.sizes = n), i && (r.srcset = i), t && (r.src = t)) : a();
            }, b.preloadImages = function() {
                function e() {
                    null != b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), 
                    b.emit("onImagesReady", b)));
                }
                b.imagesToLoad = b.container.find("img");
                for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), b.imagesToLoad[t].sizes || b.imagesToLoad[t].getAttribute("sizes"), !0, e);
            }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                return void 0 === b.autoplayTimeoutId && (!!b.params.autoplay && (!b.autoplaying && (b.autoplaying = !0, 
                b.emit("onAutoplayStart", b), void t())));
            }, b.stopAutoplay = function(e) {
                b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), 
                b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b));
            }, b.pauseAutoplay = function(e) {
                b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 
                0 === e ? (b.autoplayPaused = !1, t()) : b.wrapper.transitionEnd(function() {
                    b && (b.autoplayPaused = !1, b.autoplaying ? t() : b.stopAutoplay());
                }));
            }, b.minTranslate = function() {
                return -b.snapGrid[0];
            }, b.maxTranslate = function() {
                return -b.snapGrid[b.snapGrid.length - 1];
            }, b.updateAutoHeight = function() {
                var e = [], t = 0;
                if ("auto" !== b.params.slidesPerView && 1 < b.params.slidesPerView) for (R = 0; R < Math.ceil(b.params.slidesPerView); R++) {
                    var i = b.activeIndex + R;
                    if (i > b.slides.length) break;
                    e.push(b.slides.eq(i)[0]);
                } else e.push(b.slides.eq(b.activeIndex)[0]);
                for (R = 0; R < e.length; R++) if (void 0 !== e[R]) {
                    var n = e[R].offsetHeight;
                    t = t < n ? n : t;
                }
                t && b.wrapper.css("height", t + "px");
            }, b.updateContainerSize = function() {
                var e, t;
                e = void 0 !== b.params.width ? b.params.width : b.container[0].clientWidth, t = void 0 !== b.params.height ? b.params.height : b.container[0].clientHeight, 
                0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), 
                t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), 
                b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height);
            }, b.updateSlidesSize = function() {
                b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], 
                b.slidesSizesGrid = [];
                var e, t = b.params.spaceBetween, i = -b.params.slidesOffsetBefore, n = 0, s = 0;
                if (void 0 !== b.size) {
                    var o, a;
                    "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * b.size), 
                    b.virtualSize = -t, b.rtl ? b.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : b.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < b.params.slidesPerColumn && (o = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, 
                    "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (o = Math.max(o, b.params.slidesPerView * b.params.slidesPerColumn)));
                    var r, l = b.params.slidesPerColumn, c = o / l, u = c - (b.params.slidesPerColumn * c - b.slides.length);
                    for (e = 0; e < b.slides.length; e++) {
                        a = 0;
                        var d, h, p, f = b.slides.eq(e);
                        if (1 < b.params.slidesPerColumn) "column" === b.params.slidesPerColumnFill ? (p = e - (h = Math.floor(e / l)) * l, 
                        (u < h || h === u && p === l - 1) && ++p >= l && (p = 0, h++), d = h + p * o / l, 
                        f.css({
                            "-webkit-box-ordinal-group": d,
                            "-moz-box-ordinal-group": d,
                            "-ms-flex-order": d,
                            "-webkit-order": d,
                            order: d
                        })) : h = e - (p = Math.floor(e / c)) * c, f.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== p && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", p);
                        "none" !== f.css("display") && ("auto" === b.params.slidesPerView ? (a = b.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0), 
                        b.params.roundLengths && (a = m(a))) : (a = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, 
                        b.params.roundLengths && (a = m(a)), b.isHorizontal() ? b.slides[e].style.width = a + "px" : b.slides[e].style.height = a + "px"), 
                        b.slides[e].swiperSlideSize = a, b.slidesSizesGrid.push(a), b.params.centeredSlides ? (i = i + a / 2 + n / 2 + t, 
                        0 === e && (i = i - b.size / 2 - t), Math.abs(i) < .001 && (i = 0), s % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), 
                        b.slidesGrid.push(i)) : (s % b.params.slidesPerGroup == 0 && b.snapGrid.push(i), 
                        b.slidesGrid.push(i), i = i + a + t), b.virtualSize += a + t, n = a, s++);
                    }
                    if (b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter, 
                    b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }) : b.wrapper.css({
                        height: b.virtualSize + b.params.spaceBetween + "px"
                    })), 1 < b.params.slidesPerColumn && (b.virtualSize = (a + b.params.spaceBetween) * o, 
                    b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, 
                    b.isHorizontal() ? b.wrapper.css({
                        width: b.virtualSize + b.params.spaceBetween + "px"
                    }) : b.wrapper.css({
                        height: b.virtualSize + b.params.spaceBetween + "px"
                    }), b.params.centeredSlides)) {
                        for (r = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && r.push(b.snapGrid[e]);
                        b.snapGrid = r;
                    }
                    if (!b.params.centeredSlides) {
                        for (r = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && r.push(b.snapGrid[e]);
                        b.snapGrid = r, 1 < Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) && b.snapGrid.push(b.virtualSize - b.size);
                    }
                    0 === b.snapGrid.length && (b.snapGrid = [ 0 ]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                        marginLeft: t + "px"
                    }) : b.slides.css({
                        marginRight: t + "px"
                    }) : b.slides.css({
                        marginBottom: t + "px"
                    })), b.params.watchSlidesProgress && b.updateSlidesOffset();
                }
            }, b.updateSlidesOffset = function() {
                for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop;
            }, b.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = b.translate || 0), 0 !== b.slides.length) {
                    void 0 === b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                    var t = -e;
                    b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                    for (var i = 0; i < b.slides.length; i++) {
                        var n = b.slides[i], s = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + b.params.spaceBetween);
                        if (b.params.watchSlidesVisibility) {
                            var o = -(t - n.swiperSlideOffset), a = o + b.slidesSizesGrid[i];
                            (0 <= o && o < b.size || 0 < a && a <= b.size || o <= 0 && a >= b.size) && b.slides.eq(i).addClass(b.params.slideVisibleClass);
                        }
                        n.progress = b.rtl ? -s : s;
                    }
                }
            }, b.updateProgress = function(e) {
                void 0 === e && (e = b.translate || 0);
                var t = b.maxTranslate() - b.minTranslate(), i = b.isBeginning, n = b.isEnd;
                0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, 
                b.isBeginning = b.progress <= 0, b.isEnd = 1 <= b.progress), b.isBeginning && !i && b.emit("onReachBeginning", b), 
                b.isEnd && !n && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), 
                b.emit("onProgress", b, b.progress);
            }, b.updateActiveIndex = function() {
                var e, t, i, n = b.rtl ? b.translate : -b.translate;
                for (t = 0; t < b.slidesGrid.length; t++) void 0 !== b.slidesGrid[t + 1] ? n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : n >= b.slidesGrid[t] && n < b.slidesGrid[t + 1] && (e = t + 1) : n >= b.slidesGrid[t] && (e = t);
                b.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / b.params.slidesPerGroup)) >= b.snapGrid.length && (i = b.snapGrid.length - 1), 
                e !== b.activeIndex && (b.snapIndex = i, b.previousIndex = b.activeIndex, b.activeIndex = e, 
                b.updateClasses(), b.updateRealIndex());
            }, b.updateRealIndex = function() {
                b.realIndex = b.slides.eq(b.activeIndex).attr("data-swiper-slide-index") || b.activeIndex;
            }, b.updateClasses = function() {
                b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                var e = b.slides.eq(b.activeIndex);
                e.addClass(b.params.slideActiveClass), l.loop && (e.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                var t = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                b.params.loop && 0 === t.length && (t = b.slides.eq(0)).addClass(b.params.slideNextClass);
                var i = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                if (b.params.loop && 0 === i.length && (i = b.slides.eq(-1)).addClass(b.params.slidePrevClass), 
                l.loop && (t.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicateNextClass), 
                i.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), 
                b.paginationContainer && 0 < b.paginationContainer.length) {
                    var n, s = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                    if (b.params.loop ? ((n = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > b.slides.length - 1 - 2 * b.loopedSlides && (n -= b.slides.length - 2 * b.loopedSlides), 
                    s - 1 < n && (n -= s), n < 0 && "bullets" !== b.params.paginationType && (n = s + n)) : n = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, 
                    "bullets" === b.params.paginationType && b.bullets && 0 < b.bullets.length && (b.bullets.removeClass(b.params.bulletActiveClass), 
                    1 < b.paginationContainer.length ? b.bullets.each(function() {
                        D(this).index() === n && D(this).addClass(b.params.bulletActiveClass);
                    }) : b.bullets.eq(n).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(n + 1), 
                    b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
                        var o = (n + 1) / s, a = o, r = 1;
                        b.isHorizontal() || (r = o, a = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + a + ") scaleY(" + r + ")").transition(b.params.speed);
                    }
                    "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, n + 1, s)), 
                    b.emit("onPaginationRendered", b, b.paginationContainer[0]));
                }
                b.params.loop || (b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), 
                b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))));
            }, b.updatePagination = function() {
                if (b.params.pagination && b.paginationContainer && 0 < b.paginationContainer.length) {
                    var e = "";
                    if ("bullets" === b.params.paginationType) {
                        for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, i = 0; i < t; i++) b.params.paginationBulletRender ? e += b.params.paginationBulletRender(b, i, b.params.bulletClass) : e += "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                        b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), 
                        b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination();
                    }
                    "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', 
                    b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', 
                    b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0]);
                }
            }, b.update = function(e) {
                function t() {
                    b.rtl, b.translate;
                    i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(i), 
                    b.updateActiveIndex(), b.updateClasses();
                }
                var i;
                (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), 
                b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) ? (b.controller && b.controller.spline && (b.controller.spline = void 0), 
                b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || t()) : b.params.autoHeight && b.updateAutoHeight();
            }, b.onResize = function(e) {
                b.params.breakpoints && b.setBreakpoint();
                var t = b.params.allowSwipeToPrev, i = b.params.allowSwipeToNext;
                b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), 
                b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), 
                b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                var n = !1;
                if (b.params.freeMode) {
                    var s = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                    b.setWrapperTranslate(s), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight();
                } else b.updateClasses(), n = ("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                b.params.lazyLoading && !n && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, 
                b.params.allowSwipeToNext = i;
            }, b.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), b.touchEvents = {
                start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), 
            b.initEvents = function(e) {
                var t = e ? "off" : "on", i = e ? "removeEventListener" : "addEventListener", n = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0], s = b.support.touch ? n : document, o = !!b.params.nested;
                if (b.browser.ie) n[i](b.touchEvents.start, b.onTouchStart, !1), s[i](b.touchEvents.move, b.onTouchMove, o), 
                s[i](b.touchEvents.end, b.onTouchEnd, !1); else {
                    if (b.support.touch) {
                        var a = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n[i](b.touchEvents.start, b.onTouchStart, a), n[i](b.touchEvents.move, b.onTouchMove, o), 
                        n[i](b.touchEvents.end, b.onTouchEnd, a);
                    }
                    (l.simulateTouch && !b.device.ios && !b.device.android || l.simulateTouch && !b.support.touch && b.device.ios) && (n[i]("mousedown", b.onTouchStart, !1), 
                    document[i]("mousemove", b.onTouchMove, o), document[i]("mouseup", b.onTouchEnd, !1));
                }
                window[i]("resize", b.onResize), b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.nextButton[t]("click", b.onClickNext), 
                b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.prevButton[t]("click", b.onClickPrev), 
                b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), 
                b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), 
                (b.params.preventClicks || b.params.preventClicksPropagation) && n[i]("click", b.preventClicks, !0);
            }, b.attachEvents = function() {
                b.initEvents();
            }, b.detachEvents = function() {
                b.initEvents(!0);
            }, b.allowClick = !0, b.preventClicks = function(e) {
                b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), 
                e.stopImmediatePropagation()));
            }, b.onClickNext = function(e) {
                e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext();
            }, b.onClickPrev = function(e) {
                e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev();
            }, b.onClickIndex = function(e) {
                e.preventDefault();
                var t = D(this).index() * b.params.slidesPerGroup;
                b.params.loop && (t += b.loopedSlides), b.slideTo(t);
            }, b.updateClickedSlide = function(e) {
                var t = a(e, "." + b.params.slideClass), i = !1;
                if (t) for (var n = 0; n < b.slides.length; n++) b.slides[n] === t && (i = !0);
                if (!t || !i) return b.clickedSlide = void 0, void (b.clickedIndex = void 0);
                if (b.clickedSlide = t, b.clickedIndex = D(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                    var s, o = b.clickedIndex;
                    if (b.params.loop) {
                        if (b.animating) return;
                        s = D(b.clickedSlide).attr("data-swiper-slide-index"), b.params.centeredSlides ? o < b.loopedSlides - b.params.slidesPerView / 2 || o > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2 ? (b.fixLoop(), 
                        o = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            b.slideTo(o);
                        }, 0)) : b.slideTo(o) : o > b.slides.length - b.params.slidesPerView ? (b.fixLoop(), 
                        o = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            b.slideTo(o);
                        }, 0)) : b.slideTo(o);
                    } else b.slideTo(o);
                }
            };
            var _, x, C, $, y, T, k, w, S, z, E, O, P = "input, select, textarea, button, video", I = Date.now(), M = [];
            for (var A in b.animating = !1, b.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            }, b.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), (E = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) if (b.params.noSwiping && a(e, "." + b.params.noSwipingClass)) b.allowClick = !0; else if (!b.params.swipeHandler || a(e, b.params.swipeHandler)) {
                    var t = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
                        if (C = !(x = !(_ = !0)), O = y = void 0, b.touches.startX = t, b.touches.startY = i, 
                        $ = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, 
                        0 < b.params.threshold && (w = !1), "touchstart" !== e.type) {
                            var n = !0;
                            D(e.target).is(P) && (n = !1), document.activeElement && D(document.activeElement).is(P) && document.activeElement.blur(), 
                            n && e.preventDefault();
                        }
                        b.emit("onTouchStart", b, e);
                    }
                }
            }, b.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !E || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                    void (b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (b.params.onlyExternal) return b.allowClick = !1, void (_ && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                    b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                    $ = Date.now()));
                    if (E && b.params.touchReleaseOnEdges && !b.params.loop) if (b.isHorizontal()) {
                        if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return;
                    } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                    if (E && document.activeElement && e.target === document.activeElement && D(e.target).is(P)) return x = !0, 
                    void (b.allowClick = !1);
                    if (C && b.emit("onTouchMove", b, e), !(e.targetTouches && 1 < e.targetTouches.length)) {
                        var t;
                        if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                        b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                        void 0 === y) b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX !== b.touches.startX ? y = !1 : (t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, 
                        y = b.isHorizontal() ? t > b.params.touchAngle : 90 - t > b.params.touchAngle);
                        if (y && b.emit("onTouchMoveOpposite", b, e), void 0 === O && b.browser.ieTouch && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (O = !0)), 
                        _) if (y) _ = !1; else if (O || !b.browser.ieTouch) {
                            b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), 
                            x || (l.loop && b.fixLoop(), k = b.getWrapperTranslate(), b.setWrapperTransition(0), 
                            b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), 
                            b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), 
                            z = !1, !b.params.grabCursor || !0 !== b.params.allowSwipeToNext && !0 !== b.params.allowSwipeToPrev || b.setGrabCursor(!0)), 
                            x = !0;
                            var i = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                            i *= b.params.touchRatio, b.rtl && (i = -i), b.swipeDirection = 0 < i ? "prev" : "next", 
                            T = i + k;
                            var n = !0;
                            if (0 < i && T > b.minTranslate() ? (n = !1, b.params.resistance && (T = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + k + i, b.params.resistanceRatio))) : i < 0 && T < b.maxTranslate() && (n = !1, 
                            b.params.resistance && (T = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - k - i, b.params.resistanceRatio))), 
                            n && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && T < k && (T = k), 
                            !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && k < T && (T = k), 0 < b.params.threshold) {
                                if (!(Math.abs(i) > b.params.threshold || w)) return void (T = k);
                                if (!w) return w = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, 
                                T = k, void (b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY);
                            }
                            b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), 
                            b.params.freeMode && (0 === M.length && M.push({
                                position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                time: $
                            }), M.push({
                                position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                time: new window.Date().getTime()
                            })), b.updateProgress(T), b.setWrapperTranslate(T));
                        }
                    }
                }
            }, b.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), C && b.emit("onTouchEnd", b, e), C = !1, 
                _) {
                    b.params.grabCursor && x && _ && (!0 === b.params.allowSwipeToNext || !0 === b.params.allowSwipeToPrev) && b.setGrabCursor(!1);
                    var t, i = Date.now(), n = i - $;
                    if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), n < 300 && 300 < i - I && (S && clearTimeout(S), 
                    S = setTimeout(function() {
                        b && (b.params.paginationHide && 0 < b.paginationContainer.length && !D(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), 
                        b.emit("onClick", b, e));
                    }, 300)), n < 300 && i - I < 300 && (S && clearTimeout(S), b.emit("onDoubleTap", b, e))), 
                    I = Date.now(), setTimeout(function() {
                        b && (b.allowClick = !0);
                    }, 0), _ && x && b.swipeDirection && 0 !== b.touches.diff && T !== k) if (_ = x = !1, 
                    t = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -T, b.params.freeMode) {
                        if (t < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                        if (t > -b.maxTranslate()) return void (b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                        if (b.params.freeModeMomentum) {
                            if (1 < M.length) {
                                var s = M.pop(), o = M.pop(), a = s.position - o.position, r = s.time - o.time;
                                b.velocity = a / r, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), 
                                (150 < r || 300 < new window.Date().getTime() - s.time) && (b.velocity = 0);
                            } else b.velocity = 0;
                            b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, M.length = 0;
                            var l = 1e3 * b.params.freeModeMomentumRatio, c = b.velocity * l, u = b.translate + c;
                            b.rtl && (u = -u);
                            var d, h = !1, p = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                            if (u < b.maxTranslate()) b.params.freeModeMomentumBounce ? (u + b.maxTranslate() < -p && (u = b.maxTranslate() - p), 
                            d = b.maxTranslate(), z = h = !0) : u = b.maxTranslate(); else if (u > b.minTranslate()) b.params.freeModeMomentumBounce ? (u - b.minTranslate() > p && (u = b.minTranslate() + p), 
                            d = b.minTranslate(), z = h = !0) : u = b.minTranslate(); else if (b.params.freeModeSticky) {
                                var f, m = 0;
                                for (m = 0; m < b.snapGrid.length; m += 1) if (b.snapGrid[m] > -u) {
                                    f = m;
                                    break;
                                }
                                u = Math.abs(b.snapGrid[f] - u) < Math.abs(b.snapGrid[f - 1] - u) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], 
                                b.rtl || (u = -u);
                            }
                            if (0 !== b.velocity) l = b.rtl ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity); else if (b.params.freeModeSticky) return void b.slideReset();
                            b.params.freeModeMomentumBounce && h ? (b.updateProgress(d), b.setWrapperTransition(l), 
                            b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                b && z && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), 
                                b.setWrapperTranslate(d), b.wrapper.transitionEnd(function() {
                                    b && b.onTransitionEnd();
                                }));
                            })) : b.velocity ? (b.updateProgress(u), b.setWrapperTransition(l), b.setWrapperTranslate(u), 
                            b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                b && b.onTransitionEnd();
                            }))) : b.updateProgress(u), b.updateActiveIndex();
                        }
                        (!b.params.freeModeMomentum || n >= b.params.longSwipesMs) && (b.updateProgress(), 
                        b.updateActiveIndex());
                    } else {
                        var g, v = 0, y = b.slidesSizesGrid[0];
                        for (g = 0; g < b.slidesGrid.length; g += b.params.slidesPerGroup) void 0 !== b.slidesGrid[g + b.params.slidesPerGroup] ? t >= b.slidesGrid[g] && t < b.slidesGrid[g + b.params.slidesPerGroup] && (v = g, 
                        y = b.slidesGrid[g + b.params.slidesPerGroup] - b.slidesGrid[g]) : t >= b.slidesGrid[g] && (v = g, 
                        y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                        var w = (t - b.slidesGrid[v]) / y;
                        if (n > b.params.longSwipesMs) {
                            if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && (w >= b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v)), 
                            "prev" === b.swipeDirection && (w > 1 - b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v));
                        } else {
                            if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && b.slideTo(v + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(v);
                        }
                    } else _ = x = !1;
                }
            }, b._slideTo = function(e, t) {
                return b.slideTo(e, t, !0, !0);
            }, b.slideTo = function(e, t, i, n) {
                void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), 
                b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                var s = -b.snapGrid[b.snapIndex];
                if (b.params.autoplay && b.autoplaying && (n || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), 
                b.updateProgress(s), b.params.normalizeSlideIndex) for (var o = 0; o < b.slidesGrid.length; o++) -Math.floor(100 * s) >= Math.floor(100 * b.slidesGrid[o]) && (e = o);
                return !(!b.params.allowSwipeToNext && s < b.translate && s < b.minTranslate()) && (!(!b.params.allowSwipeToPrev && s > b.translate && s > b.maxTranslate() && (b.activeIndex || 0) !== e) && (void 0 === t && (t = b.params.speed), 
                b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -s === b.translate || !b.rtl && s === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), 
                b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(s), !1) : (b.updateClasses(), 
                b.onTransitionStart(i), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(s), 
                b.setWrapperTransition(0), b.onTransitionEnd(i)) : (b.setWrapperTranslate(s), b.setWrapperTransition(t), 
                b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                    b && b.onTransitionEnd(i);
                }))), !0)));
            }, b.onTransitionStart = function(e) {
                void 0 === e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), 
                e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), 
                b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)));
            }, b.onTransitionEnd = function(e) {
                b.animating = !1, b.setWrapperTransition(0), void 0 === e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), 
                e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), 
                b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), 
                b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), 
                b.params.hashnav && b.hashnav && b.hashnav.setHash();
            }, b.slideNext = function(e, t, i) {
                if (b.params.loop) {
                    if (b.animating) return !1;
                    b.fixLoop();
                    b.container[0].clientLeft;
                    return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i);
                }
                return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, i);
            }, b._slideNext = function(e) {
                return b.slideNext(!0, e, !0);
            }, b.slidePrev = function(e, t, i) {
                if (b.params.loop) {
                    if (b.animating) return !1;
                    b.fixLoop();
                    b.container[0].clientLeft;
                    return b.slideTo(b.activeIndex - 1, t, e, i);
                }
                return b.slideTo(b.activeIndex - 1, t, e, i);
            }, b._slidePrev = function(e) {
                return b.slidePrev(!0, e, !0);
            }, b.slideReset = function(e, t, i) {
                return b.slideTo(b.activeIndex, t, e);
            }, b.disableTouchControl = function() {
                return b.params.onlyExternal = !0;
            }, b.enableTouchControl = function() {
                return !(b.params.onlyExternal = !1);
            }, b.setWrapperTransition = function(e, t) {
                b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), 
                b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), 
                b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e);
            }, b.setWrapperTranslate = function(e, t, i) {
                var n = 0, s = 0;
                b.isHorizontal() ? n = b.rtl ? -e : e : s = e, b.params.roundLengths && (n = m(n), 
                s = m(s)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + n + "px, " + s + "px, 0px)") : b.wrapper.transform("translate(" + n + "px, " + s + "px)")), 
                b.translate = b.isHorizontal() ? n : s;
                var o = b.maxTranslate() - b.minTranslate();
                (0 === o ? 0 : (e - b.minTranslate()) / o) !== b.progress && b.updateProgress(e), 
                t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), 
                b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), 
                b.params.control && b.controller && b.controller.setTranslate(b.translate, i), b.emit("onSetTranslate", b, b.translate);
            }, b.getTranslate = function(e, t) {
                var i, n, s, o;
                return void 0 === t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (s = window.getComputedStyle(e, null), 
                window.WebKitCSSMatrix ? (6 < (n = s.transform || s.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".");
                }).join(", ")), o = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), 
                "x" === t && (n = window.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), 
                "y" === t && (n = window.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), 
                b.rtl && n && (n = -n), n || 0);
            }, b.getWrapperTranslate = function(e) {
                return void 0 === e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e);
            }, b.observers = [], b.initObservers = function() {
                if (b.params.observeParents) for (var e = b.container.parents(), t = 0; t < e.length; t++) i(e[t]);
                i(b.container[0], {
                    childList: !1
                }), i(b.wrapper[0], {
                    attributes: !1
                });
            }, b.disconnectObservers = function() {
                for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                b.observers = [];
            }, b.createLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                var n = b.wrapper.children("." + b.params.slideClass);
                "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = n.length), 
                b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), 
                b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > n.length && (b.loopedSlides = n.length);
                var e, s = [], o = [];
                for (n.each(function(e, t) {
                    var i = D(this);
                    e < b.loopedSlides && o.push(t), e < n.length && e >= n.length - b.loopedSlides && s.push(t), 
                    i.attr("data-swiper-slide-index", e);
                }), e = 0; e < o.length; e++) b.wrapper.append(D(o[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                for (e = s.length - 1; 0 <= e; e--) b.wrapper.prepend(D(s[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
            }, b.destroyLoop = function() {
                b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), 
                b.slides.removeAttr("data-swiper-slide-index");
            }, b.reLoop = function(e) {
                var t = b.activeIndex - b.loopedSlides;
                b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1);
            }, b.fixLoop = function() {
                var e;
                b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, 
                e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, 
                e += b.loopedSlides, b.slideTo(e, 0, !1, !0));
            }, b.appendSlide = function(e) {
                if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]); else b.wrapper.append(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0);
            }, b.prependSlide = function(e) {
                b.params.loop && b.destroyLoop();
                var t = b.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) e[i] && b.wrapper.prepend(e[i]);
                    t = b.activeIndex + e.length;
                } else b.wrapper.prepend(e);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), 
                b.slideTo(t, 0, !1);
            }, b.removeSlide = function(e) {
                b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                var t, i = b.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) t = e[n], b.slides[t] && b.slides.eq(t).remove(), 
                    t < i && i--;
                    i = Math.max(i, 0);
                } else t = e, b.slides[t] && b.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), 
                b.params.loop ? b.slideTo(i + b.loopedSlides, 0, !1) : b.slideTo(i, 0, !1);
            }, b.removeAllSlides = function() {
                for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                b.removeSlide(e);
            }, b.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < b.slides.length; e++) {
                            var t = b.slides.eq(e), i = -t[0].swiperSlideOffset;
                            b.params.virtualTranslate || (i -= b.translate);
                            var n = 0;
                            b.isHorizontal() || (n = i, i = 0);
                            var s = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: s
                            }).transform("translate3d(" + i + "px, " + n + "px, 0px)");
                        }
                    },
                    setTransition: function(e) {
                        if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                            var i = !1;
                            b.slides.transitionEnd(function() {
                                if (!i && b) {
                                    i = !0, b.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], t = 0; t < e.length; t++) b.wrapper.trigger(e[t]);
                                }
                            });
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < b.slides.length; e++) {
                            var t = b.slides.eq(e), i = t[0].progress;
                            b.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var n = -180 * i, s = 0, o = -t[0].swiperSlideOffset, a = 0;
                            if (b.isHorizontal() ? b.rtl && (n = -n) : (a = o, s = -n, n = o = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, 
                            b.params.flip.slideShadows) {
                                var r = b.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), l = b.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === r.length && (r = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                t.append(r)), 0 === l.length && (l = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                t.append(l)), r.length && (r[0].style.opacity = Math.max(-i, 0)), l.length && (l[0].style.opacity = Math.max(i, 0));
                            }
                            t.transform("translate3d(" + o + "px, " + a + "px, 0px) rotateX(" + s + "deg) rotateY(" + n + "deg)");
                        }
                    },
                    setTransition: function(e) {
                        if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        b.params.virtualTranslate && 0 !== e) {
                            var i = !1;
                            b.slides.eq(b.activeIndex).transitionEnd(function() {
                                if (!i && b && D(this).hasClass(b.params.slideActiveClass)) {
                                    i = !0, b.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], t = 0; t < e.length; t++) b.wrapper.trigger(e[t]);
                                }
                            });
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, t = 0;
                        b.params.cube.shadow && (b.isHorizontal() ? (0 === (e = b.wrapper.find(".swiper-cube-shadow")).length && (e = D('<div class="swiper-cube-shadow"></div>'), 
                        b.wrapper.append(e)), e.css({
                            height: b.width + "px"
                        })) : 0 === (e = b.container.find(".swiper-cube-shadow")).length && (e = D('<div class="swiper-cube-shadow"></div>'), 
                        b.container.append(e)));
                        for (var i = 0; i < b.slides.length; i++) {
                            var n = b.slides.eq(i), s = 90 * i, o = Math.floor(s / 360);
                            b.rtl && (s = -s, o = Math.floor(-s / 360));
                            var a = Math.max(Math.min(n[0].progress, 1), -1), r = 0, l = 0, c = 0;
                            i % 4 == 0 ? (r = 4 * -o * b.size, c = 0) : (i - 1) % 4 == 0 ? (r = 0, c = 4 * -o * b.size) : (i - 2) % 4 == 0 ? (r = b.size + 4 * o * b.size, 
                            c = b.size) : (i - 3) % 4 == 0 && (r = -b.size, c = 3 * b.size + 4 * b.size * o), 
                            b.rtl && (r = -r), b.isHorizontal() || (l = r, r = 0);
                            var u = "rotateX(" + (b.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (b.isHorizontal() ? s : 0) + "deg) translate3d(" + r + "px, " + l + "px, " + c + "px)";
                            if (a <= 1 && -1 < a && (t = 90 * i + 90 * a, b.rtl && (t = 90 * -i - 90 * a)), 
                            n.transform(u), b.params.cube.slideShadows) {
                                var d = b.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), h = b.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                n.append(d)), 0 === h.length && (h = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                n.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
                            }
                        }
                        if (b.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                            "transform-origin": "50% 50% -" + b.size / 2 + "px"
                        }), b.params.cube.shadow) if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")"); else {
                            var p = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90), f = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2), m = b.params.cube.shadowScale, g = b.params.cube.shadowScale / f, v = b.params.cube.shadowOffset;
                            e.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (b.height / 2 + v) + "px, " + -b.height / 2 / g + "px) rotateX(-90deg)");
                        }
                        var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                        b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : t) + "deg) rotateY(" + (b.isHorizontal() ? -t : 0) + "deg)");
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e);
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = b.translate, t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, n = b.params.coverflow.depth, s = 0, o = b.slides.length; s < o; s++) {
                            var a = b.slides.eq(s), r = b.slidesSizesGrid[s], l = (t - a[0].swiperSlideOffset - r / 2) / r * b.params.coverflow.modifier, c = b.isHorizontal() ? i * l : 0, u = b.isHorizontal() ? 0 : i * l, d = -n * Math.abs(l), h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * l, p = b.isHorizontal() ? b.params.coverflow.stretch * l : 0;
                            Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0), Math.abs(d) < .001 && (d = 0), 
                            Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0);
                            var f = "translate3d(" + p + "px," + h + "px," + d + "px)  rotateX(" + u + "deg) rotateY(" + c + "deg)";
                            if (a.transform(f), a[0].style.zIndex = 1 - Math.abs(Math.round(l)), b.params.coverflow.slideShadows) {
                                var m = b.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"), g = b.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), 
                                a.append(m)), 0 === g.length && (g = D('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                a.append(g)), m.length && (m[0].style.opacity = 0 < l ? l : 0), g.length && (g[0].style.opacity = 0 < -l ? -l : 0);
                            }
                        }
                        b.browser.ie && (b.wrapper[0].style.perspectiveOrigin = t + "px 50%");
                    },
                    setTransition: function(e) {
                        b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    }
                }
            }, b.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, l) {
                    if (void 0 !== e && (void 0 === l && (l = !0), 0 !== b.slides.length)) {
                        var c = b.slides.eq(e), t = c.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                        !c.hasClass(b.params.lazyLoadingClass) || c.hasClass(b.params.lazyStatusLoadedClass) || c.hasClass(b.params.lazyStatusLoadingClass) || (t = t.add(c[0])), 
                        0 !== t.length && t.each(function() {
                            var n = D(this);
                            n.addClass(b.params.lazyStatusLoadingClass);
                            var s = n.attr("data-background"), o = n.attr("data-src"), a = n.attr("data-srcset"), r = n.attr("data-sizes");
                            b.loadImage(n[0], o || s, a, r, !1, function() {
                                if (s ? (n.css("background-image", 'url("' + s + '")'), n.removeAttr("data-background")) : (a && (n.attr("srcset", a), 
                                n.removeAttr("data-srcset")), r && (n.attr("sizes", r), n.removeAttr("data-sizes")), 
                                o && (n.attr("src", o), n.removeAttr("data-src"))), n.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), 
                                c.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), 
                                b.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(b.params.slideDuplicateClass)) {
                                        var t = b.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                        b.lazy.loadImageInSlide(t.index(), !1);
                                    } else {
                                        var i = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        b.lazy.loadImageInSlide(i.index(), !1);
                                    }
                                }
                                b.emit("onLazyImageReady", b, c[0], n[0]);
                            }), b.emit("onLazyImageLoad", b, c[0], n[0]);
                        });
                    }
                },
                load: function() {
                    var e, t = b.params.slidesPerView;
                    if ("auto" === t && (t = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), 
                    b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                        b.lazy.loadImageInSlide(D(this).index());
                    }); else if (1 < t) for (e = b.activeIndex; e < b.activeIndex + t; e++) b.slides[e] && b.lazy.loadImageInSlide(e); else b.lazy.loadImageInSlide(b.activeIndex);
                    if (b.params.lazyLoadingInPrevNext) if (1 < t || b.params.lazyLoadingInPrevNextAmount && 1 < b.params.lazyLoadingInPrevNextAmount) {
                        var i = b.params.lazyLoadingInPrevNextAmount, n = t, s = Math.min(b.activeIndex + n + Math.max(i, n), b.slides.length), o = Math.max(b.activeIndex - Math.max(n, i), 0);
                        for (e = b.activeIndex + t; e < s; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                        for (e = o; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                    } else {
                        var a = b.wrapper.children("." + b.params.slideNextClass);
                        0 < a.length && b.lazy.loadImageInSlide(a.index());
                        var r = b.wrapper.children("." + b.params.slidePrevClass);
                        0 < r.length && b.lazy.loadImageInSlide(r.index());
                    }
                },
                onTransitionStart: function() {
                    b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load();
                },
                onTransitionEnd: function() {
                    b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load();
                }
            }, b.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = b.scrollbar, i = (b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2, n = -b.minTranslate() * t.moveDivider, s = -b.maxTranslate() * t.moveDivider;
                    i < n ? i = n : s < i && (i = s), i = -i / t.moveDivider, b.updateProgress(i), b.setWrapperTranslate(i, !0);
                },
                dragStart: function(e) {
                    var t = b.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), 
                    clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), 
                    b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b);
                },
                dragMove: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), 
                    b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b));
                },
                dragEnd: function(e) {
                    var t = b.scrollbar;
                    t.isTouched && (t.isTouched = !1, b.params.scrollbarHide && (clearTimeout(t.dragTimeout), 
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset());
                },
                draggableEvents: !1 !== b.params.simulateTouch || b.support.touch ? b.touchEvents : b.touchEventsDesktop,
                enableDraggable: function() {
                    var e = b.scrollbar, t = b.support.touch ? e.track : document;
                    D(e.track).on(e.draggableEvents.start, e.dragStart), D(t).on(e.draggableEvents.move, e.dragMove), 
                    D(t).on(e.draggableEvents.end, e.dragEnd);
                },
                disableDraggable: function() {
                    var e = b.scrollbar, t = b.support.touch ? e.track : document;
                    D(e.track).off(b.draggableEvents.start, e.dragStart), D(t).off(b.draggableEvents.move, e.dragMove), 
                    D(t).off(b.draggableEvents.end, e.dragEnd);
                },
                set: function() {
                    if (b.params.scrollbar) {
                        var e = b.scrollbar;
                        e.track = D(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && 1 < e.track.length && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), 
                        e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = D('<div class="swiper-scrollbar-drag"></div>'), 
                        e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", 
                        e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, 
                        e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), 
                        e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", 
                        1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "", 
                        b.params.scrollbarHide && (e.track[0].style.opacity = 0);
                    }
                },
                setTranslate: function() {
                    if (b.params.scrollbar) {
                        var e, t = b.scrollbar, i = (b.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e, 
                        e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, 
                        e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), 
                        t.drag[0].style.width = i + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), 
                        t.drag[0].style.height = i + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), 
                        t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400);
                        }, 1e3));
                    }
                },
                setTransition: function(e) {
                    b.params.scrollbar && b.scrollbar.drag.transition(e);
                }
            }, b.controller = {
                LinearSpline: function(e, t) {
                    var i, n;
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (n = r(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0;
                    };
                    var s, o, a, r = function(e, t) {
                        for (o = -1, s = e.length; 1 < s - o; ) e[a = s + o >> 1] <= t ? o = a : s = a;
                        return s;
                    };
                },
                getInterpolateFunction: function(e) {
                    b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
                },
                setTranslate: function(t, e) {
                    function i(e) {
                        t = e.rtl && "horizontal" === e.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(e), 
                        s = -b.controller.spline.interpolate(-t)), s && "container" !== b.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (b.maxTranslate() - b.minTranslate()), 
                        s = (t - b.minTranslate()) * n + e.minTranslate()), b.params.controlInverse && (s = e.maxTranslate() - s), 
                        e.updateProgress(s), e.setWrapperTranslate(s, !1, b), e.updateActiveIndex();
                    }
                    var n, s, o = b.params.control;
                    if (b.isArray(o)) for (var a = 0; a < o.length; a++) o[a] !== e && o[a] instanceof H && i(o[a]); else o instanceof H && e !== o && i(o);
                },
                setTransition: function(t, e) {
                    function i(e) {
                        e.setWrapperTransition(t, b), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function() {
                            s && (e.params.loop && "slide" === b.params.controlBy && e.fixLoop(), e.onTransitionEnd());
                        }));
                    }
                    var n, s = b.params.control;
                    if (b.isArray(s)) for (n = 0; n < s.length; n++) s[n] !== e && s[n] instanceof H && i(s[n]); else s instanceof H && e !== s && i(s);
                }
            }, b.hashnav = {
                onHashCange: function(e, t) {
                    var i = document.location.hash.replace("#", "");
                    i !== b.slides.eq(b.activeIndex).attr("data-hash") && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + i + '"]').index());
                },
                attachEvents: function(e) {
                    var t = e ? "off" : "on";
                    D(window)[t]("hashchange", b.hashnav.onHashCange);
                },
                setHash: function() {
                    if (b.hashnav.initialized && b.params.hashnav) if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || ""); else {
                        var e = b.slides.eq(b.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                        document.location.hash = t || "";
                    }
                },
                init: function() {
                    if (b.params.hashnav && !b.params.history) {
                        b.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) {
                            for (var t = 0, i = b.slides.length; t < i; t++) {
                                var n = b.slides.eq(t);
                                if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(b.params.slideDuplicateClass)) {
                                    var s = n.index();
                                    b.slideTo(s, 0, b.params.runCallbacksOnInit, !0);
                                }
                            }
                            b.params.hashnavWatchState && b.hashnav.attachEvents();
                        }
                    }
                },
                destroy: function() {
                    b.params.hashnavWatchState && b.hashnav.attachEvents(!0);
                }
            }, b.history = {
                init: function() {
                    if (b.params.history) {
                        if (!window.history || !window.history.pushState) return b.params.history = !1, 
                        void (b.params.hashnav = !0);
                        b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), 
                        b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                    }
                },
                setHistoryPopState: function() {
                    b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1);
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"), t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    };
                },
                setHistory: function(e, t) {
                    if (b.history.initialized && b.params.history) {
                        var i = b.slides.eq(t), n = this.slugify(i.attr("data-history"));
                        window.location.pathname.includes(e) || (n = e + "/" + n), b.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n);
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
                },
                scrollToSlide: function(e, t, i) {
                    if (t) for (var n = 0, s = b.slides.length; n < s; n++) {
                        var o = b.slides.eq(n);
                        if (this.slugify(o.attr("data-history")) === t && !o.hasClass(b.params.slideDuplicateClass)) {
                            var a = o.index();
                            b.slideTo(a, e, i);
                        }
                    } else b.slideTo(0, e, i);
                }
            }, b.disableKeyboardControl = function() {
                b.params.keyboardControl = !1, D(document).off("keydown", n);
            }, b.enableKeyboardControl = function() {
                b.params.keyboardControl = !0, D(document).on("keydown", n);
            }, b.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime()
            }, b.params.mousewheelControl && (b.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel", t = e in document;
                if (!t) {
                    var i = document.createElement("div");
                    i.setAttribute(e, "return;"), t = "function" == typeof i[e];
                }
                return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), 
                t;
            }() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var e = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (e = D(b.params.mousewheelEventsTarged)), 
                e.off(b.mousewheel.event, s), !0;
            }, b.enableMousewheelControl = function() {
                if (!b.mousewheel.event) return !1;
                var e = b.container;
                return "container" !== b.params.mousewheelEventsTarged && (e = D(b.params.mousewheelEventsTarged)), 
                e.on(b.mousewheel.event, s), !0;
            }, b.parallax = {
                setTranslate: function() {
                    b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        o(this, b.progress);
                    }), b.slides.each(function() {
                        var e = D(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            o(this, Math.min(Math.max(e[0].progress, -1), 1));
                        });
                    });
                },
                setTransition: function(i) {
                    void 0 === i && (i = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var e = D(this), t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || i;
                        0 === i && (t = 0), e.transition(t);
                    });
                }
            }, b.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: b.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX, s = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2));
                },
                onGestureStart: function(e) {
                    var t = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = D(this), 0 === t.gesture.slide.length && (t.gesture.slide = b.slides.eq(b.activeIndex)), 
                    t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + b.params.zoomContainerClass), 
                    t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || b.params.zoomMax, 
                    0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0) : t.gesture.image = void 0;
                },
                onGestureChange: function(e) {
                    var t = b.zoom;
                    if (!b.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, 
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), 
                    t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), 
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
                },
                onGestureEnd: function(e) {
                    var t = b.zoom;
                    !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), b.params.zoomMin), 
                    t.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), 
                    t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0));
                },
                onTouchStart: function(e, t) {
                    var i = e.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), 
                    i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                },
                onTouchMove: function(e) {
                    var t = b.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (b.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, 
                        t.image.startX = b.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = b.getTranslate(t.gesture.imageWrap[0], "y") || 0, 
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, 
                        t.gesture.imageWrap.transition(0));
                        var i = t.image.width * t.scale, n = t.image.height * t.scale;
                        if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, 
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, 
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                            !t.image.isMoved && !t.isScaling) {
                                if (b.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void (t.image.isTouched = !1);
                                if (!b.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void (t.image.isTouched = !1);
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, 
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, 
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), 
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), 
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), 
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), 
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), 
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), 
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, 
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, 
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), 
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), 
                            t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, 
                            t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var i = e.zoom;
                    if (i.gesture.image && 0 !== i.gesture.image.length) {
                        if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void (i.image.isMoved = !1);
                        i.image.isTouched = !1, i.image.isMoved = !1;
                        var n = 300, s = 300, o = i.velocity.x * n, a = i.image.currentX + o, r = i.velocity.y * s, l = i.image.currentY + r;
                        0 !== i.velocity.x && (n = Math.abs((a - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (s = Math.abs((l - i.image.currentY) / i.velocity.y));
                        var c = Math.max(n, s);
                        i.image.currentX = a, i.image.currentY = l;
                        var u = i.image.width * i.scale, d = i.image.height * i.scale;
                        i.image.minX = Math.min(i.gesture.slideWidth / 2 - u / 2, 0), i.image.maxX = -i.image.minX, 
                        i.image.minY = Math.min(i.gesture.slideHeight / 2 - d / 2, 0), i.image.maxY = -i.image.minY, 
                        i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), 
                        i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), 
                        i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), 
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, 
                    t.scale = t.currentScale = 1);
                },
                toggleZoom: function(e, t) {
                    var i, n, s, o, a, r, l, c, u, d, h, p, f, m, g, v, y = e.zoom;
                    (y.gesture.slide || (y.gesture.slide = e.clickedSlide ? D(e.clickedSlide) : e.slides.eq(e.activeIndex), 
                    y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)), 
                    y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, 
                    n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = y.image.touchesStart.x, 
                    n = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, 
                    y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), 
                    y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, 
                    t ? (g = y.gesture.slide[0].offsetWidth, v = y.gesture.slide[0].offsetHeight, s = y.gesture.slide.offset().left + g / 2 - i, 
                    o = y.gesture.slide.offset().top + v / 2 - n, l = y.gesture.image[0].offsetWidth, 
                    c = y.gesture.image[0].offsetHeight, u = l * y.scale, d = c * y.scale, f = -(h = Math.min(g / 2 - u / 2, 0)), 
                    m = -(p = Math.min(v / 2 - d / 2, 0)), (a = s * y.scale) < h && (a = h), f < a && (a = f), 
                    (r = o * y.scale) < p && (r = p), m < r && (r = m)) : r = a = 0, y.gesture.imageWrap.transition(300).transform("translate3d(" + a + "px, " + r + "px,0)"), 
                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")));
                },
                attachEvents: function(e) {
                    var i = e ? "off" : "on";
                    if (b.params.zoom) {
                        b.slides;
                        var t = !("touchstart" !== b.touchEvents.start || !b.support.passiveListener || !b.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        b.support.gestures ? (b.slides[i]("gesturestart", b.zoom.onGestureStart, t), b.slides[i]("gesturechange", b.zoom.onGestureChange, t), 
                        b.slides[i]("gestureend", b.zoom.onGestureEnd, t)) : "touchstart" === b.touchEvents.start && (b.slides[i](b.touchEvents.start, b.zoom.onGestureStart, t), 
                        b.slides[i](b.touchEvents.move, b.zoom.onGestureChange, t), b.slides[i](b.touchEvents.end, b.zoom.onGestureEnd, t)), 
                        b[i]("touchStart", b.zoom.onTouchStart), b.slides.each(function(e, t) {
                            0 < D(t).find("." + b.params.zoomContainerClass).length && D(t)[i](b.touchEvents.move, b.zoom.onTouchMove);
                        }), b[i]("touchEnd", b.zoom.onTouchEnd), b[i]("transitionEnd", b.zoom.onTransitionEnd), 
                        b.params.zoomToggle && b.on("doubleTap", b.zoom.toggleZoom);
                    }
                },
                init: function() {
                    b.zoom.attachEvents();
                },
                destroy: function() {
                    b.zoom.attachEvents(!0);
                }
            }, b._plugins = [], b.plugins) {
                var L = b.plugins[A](b, b.params[A]);
                L && b._plugins.push(L);
            }
            return b.callPlugins = function(e) {
                for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, b.emitterEventListeners = {}, b.emit = function(e) {
                var t;
                if (b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), 
                b.emitterEventListeners[e]) for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, b.on = function(e, t) {
                return e = r(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), 
                b.emitterEventListeners[e].push(t), b;
            }, b.off = function(e, t) {
                var i;
                if (e = r(e), void 0 === t) return b.emitterEventListeners[e] = [], b;
                if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                    for (i = 0; i < b.emitterEventListeners[e].length; i++) b.emitterEventListeners[e][i] === t && b.emitterEventListeners[e].splice(i, 1);
                    return b;
                }
            }, b.once = function(e, t) {
                e = r(e);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, i);
                };
                return b.on(e, i), b;
            }, b.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e;
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e;
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e;
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (D(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : D(e.target).is(b.params.prevButton) && (b.onClickPrev(e), 
                    b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), 
                    D(e.target).is("." + b.params.bulletClass) && D(e.target)[0].click());
                },
                liveRegion: D('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = b.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                init: function() {
                    b.params.nextButton && b.nextButton && 0 < b.nextButton.length && (b.a11y.makeFocusable(b.nextButton), 
                    b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), 
                    b.params.prevButton && b.prevButton && 0 < b.prevButton.length && (b.a11y.makeFocusable(b.prevButton), 
                    b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), 
                    D(b.container).append(b.a11y.liveRegion);
                },
                initPagination: function() {
                    b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                        var e = D(this);
                        b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
                    });
                },
                destroy: function() {
                    b.a11y.liveRegion && 0 < b.a11y.liveRegion.length && b.a11y.liveRegion.remove();
                }
            }, b.init = function() {
                b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), 
                b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), 
                "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), 
                b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 
                0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), 
                b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), 
                b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), 
                b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), 
                b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), 
                b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), 
                b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), 
                b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), 
                b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b);
            }, b.cleanupStyles = function() {
                b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), 
                b.slides && b.slides.length && b.slides.removeClass([ b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), 
                b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), 
                b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), 
                b.params.prevButton && D(b.params.prevButton).removeClass(b.params.buttonDisabledClass), 
                b.params.nextButton && D(b.params.nextButton).removeClass(b.params.buttonDisabledClass), 
                b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), 
                b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"));
            }, b.destroy = function(e, t) {
                b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), 
                b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), 
                b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), 
                b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), 
                b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), 
                b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), !1 !== e && (b = null);
            }, b.init(), b;
        }
    };
    H.prototype = {
        isSafari: (l = navigator.userAgent.toLowerCase(), 0 <= l.indexOf("safari") && l.indexOf("chrome") < 0 && l.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
            lteIE9: (r = document.createElement("div"), r.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 
            1 === r.getElementsByTagName("i").length)
        },
        device: (i = navigator.userAgent, n = i.match(/(Android);?[\s\/]+([\d.]+)?/), s = i.match(/(iPad).*OS\s([\d_]+)/), 
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/), a = !s && i.match(/(iPhone\sOS)\s([\d_]+)/), 
        {
            ios: s || a || o,
            android: n
        }),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (t = document.createElement("div").style, 
            "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++) if (t[i] in e) return !0;
            }(),
            observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0;
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            }(),
            gestures: "ongesturestart" in window
        },
        plugins: {}
    };
    for (var c, u, d, j = (u = function(e, t) {
        var i = [], n = 0;
        if (e && !t && e instanceof c) return e;
        if (e) if ("string" == typeof e) {
            var s, o, a = e.trim();
            if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                var r = "div";
                for (0 === a.indexOf("<li") && (r = "ul"), 0 === a.indexOf("<tr") && (r = "tbody"), 
                0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (r = "tr"), 0 === a.indexOf("<tbody") && (r = "table"), 
                0 === a.indexOf("<option") && (r = "select"), (o = document.createElement(r)).innerHTML = e, 
                n = 0; n < o.childNodes.length; n++) i.push(o.childNodes[n]);
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e) : [ document.getElementById(e.split("#")[1]) ], 
            n = 0; n < s.length; n++) s[n] && i.push(s[n]);
        } else if (e.nodeType || e === window || e === document) i.push(e); else if (0 < e.length && e[0].nodeType) for (n = 0; n < e.length; n++) i.push(e[n]);
        return new c(i);
    }, (c = function(e) {
        var t = 0;
        for (t = 0; t < e.length; t++) this[t] = e[t];
        return this.length = e.length, this;
    }).prototype = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
            return this;
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i++) for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
            return this;
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i++) if (2 === arguments.length) this[i].setAttribute(e, t); else for (var n in e) this[i][n] = e[n], 
            this[i].setAttribute(n, e[n]);
            return this;
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i++) {
                    var n = this[i];
                    n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                }
                return this;
            }
            if (this[0]) {
                var s = this[0].getAttribute("data-" + e);
                return s || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0);
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
            }
            return this;
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var i = this[t].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
            }
            return this;
        },
        on: function(e, s, o, t) {
            function i(e) {
                var t = e.target;
                if (u(t).is(s)) o.call(t, e); else for (var i = u(t).parents(), n = 0; n < i.length; n++) u(i[n]).is(s) && o.call(i[n], e);
            }
            var n, a, r = e.split(" ");
            for (n = 0; n < this.length; n++) if ("function" == typeof s || !1 === s) for ("function" == typeof s && (t = (o = s) || !1), 
            a = 0; a < r.length; a++) this[n].addEventListener(r[a], o, t); else for (a = 0; a < r.length; a++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), 
            this[n].dom7LiveListeners.push({
                listener: o,
                liveListener: i
            }), this[n].addEventListener(r[a], i, t);
            return this;
        },
        off: function(e, t, i, n) {
            for (var s = e.split(" "), o = 0; o < s.length; o++) for (var a = 0; a < this.length; a++) if ("function" == typeof t || !1 === t) "function" == typeof t && (n = (i = t) || !1), 
            this[a].removeEventListener(s[o], i, n); else if (this[a].dom7LiveListeners) for (var r = 0; r < this[a].dom7LiveListeners.length; r++) this[a].dom7LiveListeners[r].listener === i && this[a].removeEventListener(s[o], this[a].dom7LiveListeners[r].liveListener, n);
            return this;
        },
        once: function(i, n, s, o) {
            var a = this;
            "function" == typeof n && (o = s = n = !1), a.on(i, n, function e(t) {
                s(t), a.off(i, n, e, o);
            }, o);
        },
        trigger: function(t, i) {
            for (var e = 0; e < this.length; e++) {
                var n;
                try {
                    n = new window.CustomEvent(t, {
                        detail: i,
                        bubbles: !0,
                        cancelable: !0
                    });
                } catch (e) {
                    (n = document.createEvent("Event")).initEvent(t, !0, !0), n.detail = i;
                }
                this[e].dispatchEvent(n);
            }
            return this;
        },
        transitionEnd: function(t) {
            function i(e) {
                if (e.target === this) for (t.call(this, e), n = 0; n < s.length; n++) o.off(s[n], i);
            }
            var n, s = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], o = this;
            if (t) for (n = 0; n < s.length; n++) o.on(s[n], i);
            return this;
        },
        width: function() {
            return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null;
        },
        outerWidth: function(e) {
            return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
        },
        height: function() {
            return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null;
        },
        outerHeight: function(e) {
            return 0 < this.length ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), i = document.body, n = e.clientTop || i.clientTop || 0, s = e.clientLeft || i.clientLeft || 0, o = window.pageYOffset || e.scrollTop, a = window.pageXOffset || e.scrollLeft;
                return {
                    top: t.top + o - n,
                    left: t.left + a - s
                };
            }
            return null;
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i++) for (var n in e) this[i].style[n] = e[n];
                    return this;
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i++) this[i].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t++) this[t].textContent = e;
            return this;
        },
        is: function(e) {
            if (!this[0]) return !1;
            var t, i;
            if ("string" == typeof e) {
                var n = this[0];
                if (n === document) return e === document;
                if (n === window) return e === window;
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.mozMatchesSelector) return n.mozMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (t = u(e), i = 0; i < t.length; i++) if (t[i] === this[0]) return !0;
                return !1;
            }
            if (e === document) return this[0] === document;
            if (e === window) return this[0] === window;
            if (e.nodeType || e instanceof c) {
                for (t = e.nodeType ? [ e ] : e, i = 0; i < t.length; i++) if (t[i] === this[0]) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            if (this[0]) {
                for (var e = this[0], t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && t++;
                return t;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new c(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [ this[t] ] : [ this[e] ]);
        },
        append: function(e) {
            var t, i;
            for (t = 0; t < this.length; t++) if ("string" == typeof e) {
                var n = document.createElement("div");
                for (n.innerHTML = e; n.firstChild; ) this[t].appendChild(n.firstChild);
            } else if (e instanceof c) for (i = 0; i < e.length; i++) this[t].appendChild(e[i]); else this[t].appendChild(e);
            return this;
        },
        prepend: function(e) {
            var t, i;
            for (t = 0; t < this.length; t++) if ("string" == typeof e) {
                var n = document.createElement("div");
                for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i--) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof c) for (i = 0; i < e.length; i++) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
        },
        insertBefore: function(e) {
            for (var t = u(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]); else if (1 < t.length) for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n]);
        },
        insertAfter: function(e) {
            for (var t = u(e), i = 0; i < this.length; i++) if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling); else if (1 < t.length) for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n].nextSibling);
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? new c([ this[0].nextElementSibling ]) : new c([]) : this[0].nextElementSibling ? new c([ this[0].nextElementSibling ]) : new c([]) : new c([]);
        },
        nextAll: function(e) {
            var t = [], i = this[0];
            if (!i) return new c([]);
            for (;i.nextElementSibling; ) {
                var n = i.nextElementSibling;
                e ? u(n).is(e) && t.push(n) : t.push(n), i = n;
            }
            return new c(t);
        },
        prev: function(e) {
            return 0 < this.length ? e ? this[0].previousElementSibling && u(this[0].previousElementSibling).is(e) ? new c([ this[0].previousElementSibling ]) : new c([]) : this[0].previousElementSibling ? new c([ this[0].previousElementSibling ]) : new c([]) : new c([]);
        },
        prevAll: function(e) {
            var t = [], i = this[0];
            if (!i) return new c([]);
            for (;i.previousElementSibling; ) {
                var n = i.previousElementSibling;
                e ? u(n).is(e) && t.push(n) : t.push(n), i = n;
            }
            return new c(t);
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i++) e ? u(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);
            return u(u.unique(t));
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i++) for (var n = this[i].parentNode; n; ) e ? u(n).is(e) && t.push(n) : t.push(n), 
            n = n.parentNode;
            return u(u.unique(t));
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i++) for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s++) t.push(n[s]);
            return new c(t);
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i++) for (var n = this[i].childNodes, s = 0; s < n.length; s++) e ? 1 === n[s].nodeType && u(n[s]).is(e) && t.push(n[s]) : 1 === n[s].nodeType && t.push(n[s]);
            return new c(u.unique(t));
        },
        remove: function() {
            for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            var e, t;
            for (e = 0; e < arguments.length; e++) {
                var i = u(arguments[e]);
                for (t = 0; t < i.length; t++) this[this.length] = i[t], this.length++;
            }
            return this;
        }
    }, u.fn = c.prototype, u.unique = function(e) {
        for (var t = [], i = 0; i < e.length; i++) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }, u), h = [ "jQuery", "Zepto", "Dom7" ], R = 0; R < h.length; R++) window[h[R]] && e(window[h[R]]);
    (d = void 0 === j ? window.Dom7 || window.Zepto || window.jQuery : j) && ("transitionEnd" in d.fn || (d.fn.transitionEnd = function(t) {
        function i(e) {
            if (e.target === this) for (t.call(this, e), n = 0; n < s.length; n++) o.off(s[n], i);
        }
        var n, s = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], o = this;
        if (t) for (n = 0; n < s.length; n++) o.on(s[n], i);
        return this;
    }), "transform" in d.fn || (d.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e;
        }
        return this;
    }), "transition" in d.fn || (d.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e;
        }
        return this;
    }), "outerWidth" in d.fn || (d.fn.outerWidth = function(e) {
        return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = H;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper;
}), function(i) {
    "function" == typeof define && define.amd ? define([ "jquery" ], i) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), 
        i(t), t;
    } : i(jQuery);
}(function(i) {
    var e = function() {
        if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var e = i.fn.select2.amd;
        var t, s, c;
        return e && e.requirejs || (e ? s = e : e = {}, function(p) {
            function f(e, t) {
                return i.call(e, t);
            }
            function r(e, t) {
                var i, n, s, o, a, r, l, c, u, d, h, p = t && t.split("/"), f = C.map, m = f && f["*"] || {};
                if (e) {
                    for (a = (e = e.split("/")).length - 1, C.nodeIdCompat && T.test(e[a]) && (e[a] = e[a].replace(T, "")), 
                    "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), u = 0; u < e.length; u++) if ("." === (h = e[u])) e.splice(u, 1), 
                    u -= 1; else if (".." === h) {
                        if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                        0 < u && (e.splice(u - 1, 2), u -= 2);
                    }
                    e = e.join("/");
                }
                if ((p || m) && f) {
                    for (u = (i = e.split("/")).length; 0 < u; u -= 1) {
                        if (n = i.slice(0, u).join("/"), p) for (d = p.length; 0 < d; d -= 1) if ((s = f[p.slice(0, d).join("/")]) && (s = s[n])) {
                            o = s, r = u;
                            break;
                        }
                        if (o) break;
                        !l && m && m[n] && (l = m[n], c = u);
                    }
                    !o && l && (o = l, r = c), o && (i.splice(0, r, o), e = i.join("/"));
                }
                return e;
            }
            function m(t, i) {
                return function() {
                    var e = n.call(arguments, 0);
                    return "string" != typeof e[0] && 1 === e.length && e.push(null), a.apply(p, e.concat([ t, i ]));
                };
            }
            function g(t) {
                return function(e) {
                    _[t] = e;
                };
            }
            function v(e) {
                if (f(x, e)) {
                    var t = x[e];
                    delete x[e], $[e] = !0, o.apply(p, t);
                }
                if (!f(_, e) && !f($, e)) throw new Error("No " + e);
                return _[e];
            }
            function l(e) {
                var t, i = e ? e.indexOf("!") : -1;
                return -1 < i && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [ t, e ];
            }
            function y(e) {
                return e ? l(e) : [];
            }
            var o, a, w, b, _ = {}, x = {}, C = {}, $ = {}, i = Object.prototype.hasOwnProperty, n = [].slice, T = /\.js$/;
            w = function(e, t) {
                var i, n, s = l(e), o = s[0], a = t[1];
                return e = s[1], o && (i = v(o = r(o, a))), o ? e = i && i.normalize ? i.normalize(e, (n = a, 
                function(e) {
                    return r(e, n);
                })) : r(e, a) : (o = (s = l(e = r(e, a)))[0], e = s[1], o && (i = v(o))), {
                    f: o ? o + "!" + e : e,
                    n: e,
                    pr: o,
                    p: i
                };
            }, b = {
                require: function(e) {
                    return m(e);
                },
                exports: function(e) {
                    var t = _[e];
                    return void 0 !== t ? t : _[e] = {};
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: _[e],
                        config: (t = e, function() {
                            return C && C.config && C.config[t] || {};
                        })
                    };
                    var t;
                }
            }, o = function(e, t, i, n) {
                var s, o, a, r, l, c, u, d = [], h = typeof i;
                if (c = y(n = n || e), "undefined" === h || "function" === h) {
                    for (t = !t.length && i.length ? [ "require", "exports", "module" ] : t, l = 0; l < t.length; l += 1) if ("require" === (o = (r = w(t[l], c)).f)) d[l] = b.require(e); else if ("exports" === o) d[l] = b.exports(e), 
                    u = !0; else if ("module" === o) s = d[l] = b.module(e); else if (f(_, o) || f(x, o) || f($, o)) d[l] = v(o); else {
                        if (!r.p) throw new Error(e + " missing " + o);
                        r.p.load(r.n, m(n, !0), g(o), {}), d[l] = _[o];
                    }
                    a = i ? i.apply(_[e], d) : void 0, e && (s && s.exports !== p && s.exports !== _[e] ? _[e] = s.exports : a === p && u || (_[e] = a));
                } else e && (_[e] = i);
            }, t = s = a = function(e, t, i, n, s) {
                if ("string" == typeof e) return b[e] ? b[e](t) : v(w(e, y(t)).f);
                if (!e.splice) {
                    if ((C = e).deps && a(C.deps, C.callback), !t) return;
                    t.splice ? (e = t, t = i, i = null) : e = p;
                }
                return t = t || function() {}, "function" == typeof i && (i = n, n = s), n ? o(p, e, t, i) : setTimeout(function() {
                    o(p, e, t, i);
                }, 4), a;
            }, a.config = function(e) {
                return a(e);
            }, t._defined = _, (c = function(e, t, i) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (i = t, t = []), f(_, e) || f(x, e) || (x[e] = [ e, t, i ]);
            }).amd = {
                jQuery: !0
            };
        }(), e.requirejs = t, e.require = s, e.define = c), e.define("almond", function() {}), 
        e.define("jquery", [], function() {
            var e = i || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), 
            e;
        }), e.define("select2/utils", [ "jquery" ], function(o) {
            function u(e) {
                var t = e.prototype, i = [];
                for (var n in t) "function" == typeof t[n] && "constructor" !== n && i.push(n);
                return i;
            }
            var e = {
                Extend: function(e, t) {
                    function i() {
                        this.constructor = e;
                    }
                    var n = {}.hasOwnProperty;
                    for (var s in t) n.call(t, s) && (e[s] = t[s]);
                    return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, 
                    e;
                },
                Decorate: function(n, s) {
                    function o() {
                        var e = Array.prototype.unshift, t = s.prototype.constructor.length, i = n.prototype.constructor;
                        0 < t && (e.call(arguments, n.prototype.constructor), i = s.prototype.constructor), 
                        i.apply(this, arguments);
                    }
                    var e = u(s), t = u(n);
                    s.displayName = n.displayName, o.prototype = new function() {
                        this.constructor = o;
                    }();
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        o.prototype[a] = n.prototype[a];
                    }
                    for (var r = function(e) {
                        var t = function() {};
                        e in o.prototype && (t = o.prototype[e]);
                        var i = s.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, t), i.apply(this, arguments);
                        };
                    }, l = 0; l < e.length; l++) {
                        var c = e[l];
                        o.prototype[c] = r(c);
                    }
                    return o;
                }
            }, t = function() {
                this.listeners = {};
            };
            return t.prototype.on = function(e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [ t ];
            }, t.prototype.trigger = function(e) {
                var t = Array.prototype.slice, i = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), 
                (i[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), 
                "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, t.prototype.invoke = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++) e[i].apply(this, t);
            }, e.Observable = t, e.generateChars = function(e) {
                for (var t = "", i = 0; i < e; i++) t += Math.floor(36 * Math.random()).toString(36);
                return t;
            }, e.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments);
                };
            }, e._convertData = function(e) {
                for (var t in e) {
                    var i = t.split("-"), n = e;
                    if (1 !== i.length) {
                        for (var s = 0; s < i.length; s++) {
                            var o = i[s];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in n || (n[o] = {}), s == i.length - 1 && (n[o] = e[t]), 
                            n = n[o];
                        }
                        delete e[t];
                    }
                }
                return e;
            }, e.hasScroll = function(e, t) {
                var i = o(t), n = t.style.overflowX, s = t.style.overflowY;
                return (n !== s || "hidden" !== s && "visible" !== s) && ("scroll" === n || "scroll" === s || i.innerHeight() < t.scrollHeight || i.innerWidth() < t.scrollWidth);
            }, e.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                    return t[e];
                });
            }, e.appendMany = function(e, t) {
                if ("1.7" === o.fn.jquery.substr(0, 3)) {
                    var i = o();
                    o.map(t, function(e) {
                        i = i.add(e);
                    }), t = i;
                }
                e.append(t);
            }, e;
        }), e.define("select2/results", [ "jquery", "./utils" ], function(h, e) {
            function n(e, t, i) {
                this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this);
            }
            return e.Extend(n, e.Observable), n.prototype.render = function() {
                var e = h('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
            }, n.prototype.clear = function() {
                this.$results.empty();
            }, n.prototype.displayMessage = function(e) {
                var t = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), n = this.options.get("translations").get(e.message);
                i.append(t(n(e.args))), i[0].className += " select2-results__message", this.$results.append(i);
            }, n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove();
            }, n.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var i = 0; i < e.results.length; i++) {
                        var n = e.results[i], s = this.option(n);
                        t.push(s);
                    }
                    this.$results.append(t);
                } else 0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                });
            }, n.prototype.position = function(e, t) {
                t.find(".select2-results").append(e);
            }, n.prototype.sort = function(e) {
                return this.options.get("sorter")(e);
            }, n.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]"), t = e.filter("[aria-selected=true]");
                0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), 
                this.ensureHighlightVisible();
            }, n.prototype.setClasses = function() {
                var t = this;
                this.data.current(function(e) {
                    var n = h.map(e, function(e) {
                        return e.id.toString();
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function() {
                        var e = h(this), t = h.data(this, "data"), i = "" + t.id;
                        null != t.element && t.element.selected || null == t.element && -1 < h.inArray(i, n) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
                    });
                });
            }, n.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }, i = this.option(t);
                i.className += " loading-results", this.$results.prepend(i);
            }, n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove();
            }, n.prototype.option = function(e) {
                var t = document.createElement("li");
                t.className = "select2-results__option";
                var i = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                for (var n in e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), 
                null == e.id && delete i["aria-selected"], null != e._resultId && (t.id = e._resultId), 
                e.title && (t.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, 
                delete i["aria-selected"]), i) {
                    var s = i[n];
                    t.setAttribute(n, s);
                }
                if (e.children) {
                    var o = h(t), a = document.createElement("strong");
                    a.className = "select2-results__group", h(a), this.template(e, a);
                    for (var r = [], l = 0; l < e.children.length; l++) {
                        var c = e.children[l], u = this.option(c);
                        r.push(u);
                    }
                    var d = h("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    d.append(r), o.append(a), o.append(d);
                } else this.template(e, t);
                return h.data(t, "data", e), t;
            }, n.prototype.bind = function(t, e) {
                var l = this, i = t.id + "-results";
                this.$results.attr("id", i), t.on("results:all", function(e) {
                    l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }), t.on("results:append", function(e) {
                    l.append(e.data), t.isOpen() && l.setClasses();
                }), t.on("query", function(e) {
                    l.hideMessages(), l.showLoading(e);
                }), t.on("select", function() {
                    t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }), t.on("unselect", function() {
                    t.isOpen() && (l.setClasses(), l.highlightFirstItem());
                }), t.on("open", function() {
                    l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), 
                    l.setClasses(), l.ensureHighlightVisible();
                }), t.on("close", function() {
                    l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), 
                    l.$results.removeAttr("aria-activedescendant");
                }), t.on("results:toggle", function() {
                    var e = l.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                }), t.on("results:select", function() {
                    var e = l.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                            data: t
                        });
                    }
                }), t.on("results:previous", function() {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), i = t.index(e);
                    if (0 !== i) {
                        var n = i - 1;
                        0 === e.length && (n = 0);
                        var s = t.eq(n);
                        s.trigger("mouseenter");
                        var o = l.$results.offset().top, a = s.offset().top, r = l.$results.scrollTop() + (a - o);
                        0 === n ? l.$results.scrollTop(0) : a - o < 0 && l.$results.scrollTop(r);
                    }
                }), t.on("results:next", function() {
                    var e = l.getHighlightedResults(), t = l.$results.find("[aria-selected]"), i = t.index(e) + 1;
                    if (!(i >= t.length)) {
                        var n = t.eq(i);
                        n.trigger("mouseenter");
                        var s = l.$results.offset().top + l.$results.outerHeight(!1), o = n.offset().top + n.outerHeight(!1), a = l.$results.scrollTop() + o - s;
                        0 === i ? l.$results.scrollTop(0) : s < o && l.$results.scrollTop(a);
                    }
                }), t.on("results:focus", function(e) {
                    e.element.addClass("select2-results__option--highlighted");
                }), t.on("results:message", function(e) {
                    l.displayMessage(e);
                }), h.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                    var t = l.$results.scrollTop(), i = l.$results.get(0).scrollHeight - t + e.deltaY, n = 0 < e.deltaY && t - e.deltaY <= 0, s = e.deltaY < 0 && i <= l.$results.height();
                    n ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), 
                    e.preventDefault(), e.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                    var t = h(this), i = t.data("data");
                    "true" !== t.attr("aria-selected") ? l.trigger("select", {
                        originalEvent: e,
                        data: i
                    }) : l.options.get("multiple") ? l.trigger("unselect", {
                        originalEvent: e,
                        data: i
                    }) : l.trigger("close", {});
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                    var t = h(this).data("data");
                    l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                        data: t,
                        element: h(this)
                    });
                });
            }, n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted");
            }, n.prototype.destroy = function() {
                this.$results.remove();
            }, n.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e), i = this.$results.offset().top, n = e.offset().top, s = this.$results.scrollTop() + (n - i), o = n - i;
                    s -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(s);
                }
            }, n.prototype.template = function(e, t) {
                var i = this.options.get("templateResult"), n = this.options.get("escapeMarkup"), s = i(e, t);
                null == s ? t.style.display = "none" : "string" == typeof s ? t.innerHTML = n(s) : h(t).append(s);
            }, n;
        }), e.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
        }), e.define("select2/selection/base", [ "jquery", "../utils", "../keys" ], function(i, e, s) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this);
            }
            return e.Extend(n, e.Observable), n.prototype.render = function() {
                var e = i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), 
                e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), 
                this.$selection = e;
            }, n.prototype.bind = function(e, t) {
                var i = this, n = (e.id, e.id + "-results");
                this.container = e, this.$selection.on("focus", function(e) {
                    i.trigger("focus", e);
                }), this.$selection.on("blur", function(e) {
                    i._handleBlur(e);
                }), this.$selection.on("keydown", function(e) {
                    i.trigger("keypress", e), e.which === s.SPACE && e.preventDefault();
                }), e.on("results:focus", function(e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId);
                }), e.on("selection:update", function(e) {
                    i.update(e.data);
                }), e.on("open", function() {
                    i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", n), i._attachCloseHandler(e);
                }), e.on("close", function() {
                    i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), 
                    i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e);
                }), e.on("enable", function() {
                    i.$selection.attr("tabindex", i._tabindex);
                }), e.on("disable", function() {
                    i.$selection.attr("tabindex", "-1");
                });
            }, n.prototype._handleBlur = function(e) {
                var t = this;
                window.setTimeout(function() {
                    document.activeElement == t.$selection[0] || i.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
                }, 1);
            }, n.prototype._attachCloseHandler = function(e) {
                i(document.body).on("mousedown.select2." + e.id, function(e) {
                    var t = i(e.target).closest(".select2");
                    i(".select2.select2-container--open").each(function() {
                        var e = i(this);
                        this != t[0] && e.data("element").select2("close");
                    });
                });
            }, n.prototype._detachCloseHandler = function(e) {
                i(document.body).off("mousedown.select2." + e.id);
            }, n.prototype.position = function(e, t) {
                t.find(".selection").append(e);
            }, n.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
            }, n.prototype.update = function(e) {
                throw new Error("The `update` method must be defined in child classes.");
            }, n;
        }), e.define("select2/selection/single", [ "jquery", "./base", "../utils", "../keys" ], function(e, t, i, n) {
            function s() {
                s.__super__.constructor.apply(this, arguments);
            }
            return i.Extend(s, t), s.prototype.render = function() {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), 
                e;
            }, s.prototype.bind = function(t, e) {
                var i = this;
                s.__super__.bind.apply(this, arguments);
                var n = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), 
                this.$selection.on("mousedown", function(e) {
                    1 === e.which && i.trigger("toggle", {
                        originalEvent: e
                    });
                }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), 
                t.on("focus", function(e) {
                    t.isOpen() || i.$selection.focus();
                }), t.on("selection:update", function(e) {
                    i.update(e.data);
                });
            }, s.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
            }, s.prototype.display = function(e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t));
            }, s.prototype.selectionContainer = function() {
                return e("<span></span>");
            }, s.prototype.update = function(e) {
                if (0 !== e.length) {
                    var t = e[0], i = this.$selection.find(".select2-selection__rendered"), n = this.display(t, i);
                    i.empty().append(n), i.prop("title", t.title || t.text);
                } else this.clear();
            }, s;
        }), e.define("select2/selection/multiple", [ "jquery", "./base", "../utils" ], function(n, e, r) {
            function s(e, t) {
                s.__super__.constructor.apply(this, arguments);
            }
            return r.Extend(s, e), s.prototype.render = function() {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), 
                e;
            }, s.prototype.bind = function(e, t) {
                var i = this;
                s.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                    i.trigger("toggle", {
                        originalEvent: e
                    });
                }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                    if (!i.options.get("disabled")) {
                        var t = n(this).parent().data("data");
                        i.trigger("unselect", {
                            originalEvent: e,
                            data: t
                        });
                    }
                });
            }, s.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty();
            }, s.prototype.display = function(e, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(e, t));
            }, s.prototype.selectionContainer = function() {
                return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            }, s.prototype.update = function(e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var n = e[i], s = this.selectionContainer(), o = this.display(n, s);
                        s.append(o), s.prop("title", n.title || n.text), s.data("data", n), t.push(s);
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    r.appendMany(a, t);
                }
            }, s;
        }), e.define("select2/selection/placeholder", [ "../utils" ], function(e) {
            function t(e, t, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i);
            }
            return t.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t;
            }, t.prototype.createPlaceholder = function(e, t) {
                var i = this.selectionContainer();
                return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), 
                i;
            }, t.prototype.update = function(e, t) {
                var i = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || i) return e.call(this, t);
                this.clear();
                var n = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(n);
            }, t;
        }), e.define("select2/selection/allowClear", [ "jquery", "../keys" ], function(n, s) {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), 
                this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                    n._handleClear(e);
                }), t.on("keypress", function(e) {
                    n._handleKeyboardClear(e, t);
                });
            }, e.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        for (var n = i.data("data"), s = 0; s < n.length; s++) {
                            var o = {
                                data: n[s]
                            };
                            if (this.trigger("unselect", o), o.prevented) return;
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
                    }
                }
            }, e.prototype._handleKeyboardClear = function(e, t, i) {
                i.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t);
            }, e.prototype.update = function(e, t) {
                if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                    var i = n('<span class="select2-selection__clear">&times;</span>');
                    i.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(i);
                }
            }, e;
        }), e.define("select2/selection/search", [ "jquery", "../utils", "../keys" ], function(n, e, a) {
            function t(e, t, i) {
                e.call(this, t, i);
            }
            return t.prototype.render = function(e) {
                var t = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = t, this.$search = t.find("input");
                var i = e.call(this);
                return this._transferTabIndex(), i;
            }, t.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("open", function() {
                    n.$search.trigger("focus");
                }), t.on("close", function() {
                    n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus");
                }), t.on("enable", function() {
                    n.$search.prop("disabled", !1), n._transferTabIndex();
                }), t.on("disable", function() {
                    n.$search.prop("disabled", !0);
                }), t.on("focus", function(e) {
                    n.$search.trigger("focus");
                }), t.on("results:focus", function(e) {
                    n.$search.attr("aria-activedescendant", e.id);
                }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                    n.trigger("focus", e);
                }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                    n._handleBlur(e);
                }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                    if (e.stopPropagation(), n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented(), 
                    e.which === a.BACKSPACE && "" === n.$search.val()) {
                        var t = n.$searchContainer.prev(".select2-selection__choice");
                        if (0 < t.length) {
                            var i = t.data("data");
                            n.searchRemoveChoice(i), e.preventDefault();
                        }
                    }
                });
                var s = document.documentMode, o = s && s <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                    o ? n.$selection.off("input.search input.searchcheck") : n.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                    if (o && "input" === e.type) n.$selection.off("input.search input.searchcheck"); else {
                        var t = e.which;
                        t != a.SHIFT && t != a.CTRL && t != a.ALT && t != a.TAB && n.handleSearch(e);
                    }
                });
            }, t.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, t.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text);
            }, t.prototype.update = function(e, t) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), 
                this.resizeSearch(), i && this.$search.focus();
            }, t.prototype.handleSearch = function() {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    });
                }
                this._keyUpPrevented = !1;
            }, t.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }), this.$search.val(t.text), this.handleSearch();
            }, t.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", 
                this.$search.css("width", e);
            }, t;
        }), e.define("select2/selection/eventRelay", [ "jquery" ], function(a) {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this, s = [ "open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting" ], o = [ "opening", "closing", "selecting", "unselecting" ];
                e.call(this, t, i), t.on("*", function(e, t) {
                    if (-1 !== a.inArray(e, s)) {
                        t = t || {};
                        var i = a.Event("select2:" + e, {
                            params: t
                        });
                        n.$element.trigger(i), -1 !== a.inArray(e, o) && (t.prevented = i.isDefaultPrevented());
                    }
                });
            }, e;
        }), e.define("select2/translation", [ "jquery", "require" ], function(t, i) {
            function n(e) {
                this.dict = e || {};
            }
            return n.prototype.all = function() {
                return this.dict;
            }, n.prototype.get = function(e) {
                return this.dict[e];
            }, n.prototype.extend = function(e) {
                this.dict = t.extend({}, e.all(), this.dict);
            }, n._cache = {}, n.loadPath = function(e) {
                if (!(e in n._cache)) {
                    var t = i(e);
                    n._cache[e] = t;
                }
                return new n(n._cache[e]);
            }, n;
        }), e.define("select2/diacritics", [], function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
        }), e.define("select2/data/base", [ "../utils" ], function(n) {
            function i(e, t) {
                i.__super__.constructor.call(this);
            }
            return n.Extend(i, n.Observable), i.prototype.current = function(e) {
                throw new Error("The `current` method must be defined in child classes.");
            }, i.prototype.query = function(e, t) {
                throw new Error("The `query` method must be defined in child classes.");
            }, i.prototype.bind = function(e, t) {}, i.prototype.destroy = function() {}, i.prototype.generateResultId = function(e, t) {
                var i = e.id + "-result-";
                return i += n.generateChars(4), null != t.id ? i += "-" + t.id.toString() : i += "-" + n.generateChars(4), 
                i;
            }, i;
        }), e.define("select2/data/select", [ "./base", "../utils", "jquery" ], function(e, t, r) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this);
            }
            return t.Extend(i, e), i.prototype.current = function(e) {
                var i = [], n = this;
                this.$element.find(":selected").each(function() {
                    var e = r(this), t = n.item(e);
                    i.push(t);
                }), e(i);
            }, i.prototype.select = function(s) {
                var o = this;
                if (s.selected = !0, r(s.element).is("option")) return s.element.selected = !0, 
                void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function(e) {
                    var t = [];
                    (s = [ s ]).push.apply(s, e);
                    for (var i = 0; i < s.length; i++) {
                        var n = s[i].id;
                        -1 === r.inArray(n, t) && t.push(n);
                    }
                    o.$element.val(t), o.$element.trigger("change");
                }); else {
                    var e = s.id;
                    this.$element.val(e), this.$element.trigger("change");
                }
            }, i.prototype.unselect = function(s) {
                var o = this;
                if (this.$element.prop("multiple")) {
                    if (s.selected = !1, r(s.element).is("option")) return s.element.selected = !1, 
                    void this.$element.trigger("change");
                    this.current(function(e) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var n = e[i].id;
                            n !== s.id && -1 === r.inArray(n, t) && t.push(n);
                        }
                        o.$element.val(t), o.$element.trigger("change");
                    });
                }
            }, i.prototype.bind = function(e, t) {
                var i = this;
                (this.container = e).on("select", function(e) {
                    i.select(e.data);
                }), e.on("unselect", function(e) {
                    i.unselect(e.data);
                });
            }, i.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    r.removeData(this, "data");
                });
            }, i.prototype.query = function(n, e) {
                var s = [], o = this;
                this.$element.children().each(function() {
                    var e = r(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var t = o.item(e), i = o.matches(n, t);
                        null !== i && s.push(i);
                    }
                }), e({
                    results: s
                });
            }, i.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e);
            }, i.prototype.option = function(e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, 
                void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), 
                e.title && (t.title = e.title);
                var i = r(t), n = this._normalizeItem(e);
                return n.element = t, r.data(t, "data", n), i;
            }, i.prototype.item = function(e) {
                var t = {};
                if (null != (t = r.data(e[0], "data"))) return t;
                if (e.is("option")) t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var i = e.children("option"), n = [], s = 0; s < i.length; s++) {
                        var o = r(i[s]), a = this.item(o);
                        n.push(a);
                    }
                    t.children = n;
                }
                return (t = this._normalizeItem(t)).element = e[0], r.data(e[0], "data", t), t;
            }, i.prototype._normalizeItem = function(e) {
                r.isPlainObject(e) || (e = {
                    id: e,
                    text: e
                });
                return null != (e = r.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), 
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), 
                r.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e);
            }, i.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t);
            }, i;
        }), e.define("select2/data/array", [ "./select", "../utils", "jquery" ], function(e, f, m) {
            function n(e, t) {
                var i = t.get("data") || [];
                n.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(i));
            }
            return f.Extend(n, e), n.prototype.select = function(i) {
                var e = this.$element.find("option").filter(function(e, t) {
                    return t.value == i.id.toString();
                });
                0 === e.length && (e = this.option(i), this.addOptions(e)), n.__super__.select.call(this, i);
            }, n.prototype.convertToOptions = function(e) {
                function t(e) {
                    return function() {
                        return m(this).val() == e.id;
                    };
                }
                for (var i = this, n = this.$element.find("option"), s = n.map(function() {
                    return i.item(m(this)).id;
                }).get(), o = [], a = 0; a < e.length; a++) {
                    var r = this._normalizeItem(e[a]);
                    if (0 <= m.inArray(r.id, s)) {
                        var l = n.filter(t(r)), c = this.item(l), u = m.extend(!0, {}, r, c), d = this.option(u);
                        l.replaceWith(d);
                    } else {
                        var h = this.option(r);
                        if (r.children) {
                            var p = this.convertToOptions(r.children);
                            f.appendMany(h, p);
                        }
                        o.push(h);
                    }
                }
                return o;
            }, n;
        }), e.define("select2/data/ajax", [ "./array", "../utils", "jquery" ], function(e, t, o) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), 
                i.__super__.constructor.call(this, e, t);
            }
            return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return o.extend({}, e, {
                            q: e.term
                        });
                    },
                    transport: function(e, t, i) {
                        var n = o.ajax(e);
                        return n.then(t), n.fail(i), n;
                    }
                };
                return o.extend({}, t, e, !0);
            }, i.prototype.processResults = function(e) {
                return e;
            }, i.prototype.query = function(i, n) {
                function e() {
                    var e = t.transport(t, function(e) {
                        var t = s.processResults(e, i);
                        s.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), 
                        n(t);
                    }, function() {
                        e.status && "0" === e.status || s.trigger("results:message", {
                            message: "errorLoading"
                        });
                    });
                    s._request = e;
                }
                var s = this;
                null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), 
                this._request = null);
                var t = o.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof t.url && (t.url = t.url.call(this.$element, i)), "function" == typeof t.data && (t.data = t.data.call(this.$element, i)), 
                this.ajaxOptions.delay && null != i.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), 
                this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
            }, i;
        }), e.define("select2/data/tags", [ "jquery" ], function(u) {
            function e(e, t, i) {
                var n = i.get("tags"), s = i.get("createTag");
                void 0 !== s && (this.createTag = s);
                var o = i.get("insertTag");
                if (void 0 !== o && (this.insertTag = o), e.call(this, t, i), u.isArray(n)) for (var a = 0; a < n.length; a++) {
                    var r = n[a], l = this._normalizeItem(r), c = this.option(l);
                    this.$element.append(c);
                }
            }
            return e.prototype.query = function(e, c, u) {
                var d = this;
                this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, i) {
                    for (var n = t.results, s = 0; s < n.length; s++) {
                        var o = n[s], a = null != o.children && !e({
                            results: o.children
                        }, !0);
                        if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || a) return !i && (t.data = n, 
                        void u(t));
                    }
                    if (i) return !0;
                    var r = d.createTag(c);
                    if (null != r) {
                        var l = d.option(r);
                        l.attr("data-select2-tag", !0), d.addOptions([ l ]), d.insertTag(n, r);
                    }
                    t.results = n, u(t);
                }) : e.call(this, c, u);
            }, e.prototype.createTag = function(e, t) {
                var i = u.trim(t.term);
                return "" === i ? null : {
                    id: i,
                    text: i
                };
            }, e.prototype.insertTag = function(e, t, i) {
                t.unshift(i);
            }, e.prototype._removeOldTags = function(e) {
                this._lastTag, this.$element.find("option[data-select2-tag]").each(function() {
                    this.selected || u(this).remove();
                });
            }, e;
        }), e.define("select2/data/tokenizer", [ "jquery" ], function(d) {
            function e(e, t, i) {
                var n = i.get("tokenizer");
                void 0 !== n && (this.tokenizer = n), e.call(this, t, i);
            }
            return e.prototype.bind = function(e, t, i) {
                e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field");
            }, e.prototype.query = function(e, t, i) {
                var s = this;
                t.term = t.term || "";
                var n = this.tokenizer(t, this.options, function(e) {
                    var t, i = s._normalizeItem(e);
                    if (!s.$element.find("option").filter(function() {
                        return d(this).val() === i.id;
                    }).length) {
                        var n = s.option(i);
                        n.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([ n ]);
                    }
                    t = i, s.trigger("select", {
                        data: t
                    });
                });
                n.term !== t.term && (this.$search.length && (this.$search.val(n.term), this.$search.focus()), 
                t.term = n.term), e.call(this, t, i);
            }, e.prototype.tokenizer = function(e, t, i, n) {
                for (var s = i.get("tokenSeparators") || [], o = t.term, a = 0, r = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    };
                }; a < o.length; ) {
                    var l = o[a];
                    if (-1 !== d.inArray(l, s)) {
                        var c = o.substr(0, a), u = r(d.extend({}, t, {
                            term: c
                        }));
                        null != u ? (n(u), o = o.substr(a + 1) || "", a = 0) : a++;
                    } else a++;
                }
                return {
                    term: o
                };
            }, e;
        }), e.define("select2/data/minimumInputLength", [], function() {
            function e(e, t, i) {
                this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i);
            }
            return e.prototype.query = function(e, t, i) {
                t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, i);
            }, e;
        }), e.define("select2/data/maximumInputLength", [], function() {
            function e(e, t, i) {
                this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i);
            }
            return e.prototype.query = function(e, t, i) {
                t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, i);
            }, e;
        }), e.define("select2/data/maximumSelectionLength", [], function() {
            function e(e, t, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i);
            }
            return e.prototype.query = function(i, n, s) {
                var o = this;
                this.current(function(e) {
                    var t = null != e ? e.length : 0;
                    0 < o.maximumSelectionLength && t >= o.maximumSelectionLength ? o.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: o.maximumSelectionLength
                        }
                    }) : i.call(o, n, s);
                });
            }, e;
        }), e.define("select2/dropdown", [ "jquery", "./utils" ], function(t, e) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this);
            }
            return e.Extend(i, e.Observable), i.prototype.render = function() {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
            }, i.prototype.bind = function() {}, i.prototype.position = function(e, t) {}, i.prototype.destroy = function() {
                this.$dropdown.remove();
            }, i;
        }), e.define("select2/dropdown/search", [ "jquery", "../utils" ], function(s, e) {
            function t() {}
            return t.prototype.render = function(e) {
                var t = e.call(this), i = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i, this.$search = i.find("input"), t.prepend(i), 
                t;
            }, t.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), this.$search.on("keydown", function(e) {
                    n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented();
                }), this.$search.on("input", function(e) {
                    s(this).off("keyup");
                }), this.$search.on("keyup input", function(e) {
                    n.handleSearch(e);
                }), t.on("open", function() {
                    n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
                        n.$search.focus();
                    }, 0);
                }), t.on("close", function() {
                    n.$search.attr("tabindex", -1), n.$search.val("");
                }), t.on("focus", function() {
                    t.isOpen() || n.$search.focus();
                }), t.on("results:all", function(e) {
                    null != e.query.term && "" !== e.query.term || (n.showSearch(e) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"));
                });
            }, t.prototype.handleSearch = function(e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    });
                }
                this._keyUpPrevented = !1;
            }, t.prototype.showSearch = function(e, t) {
                return !0;
            }, t;
        }), e.define("select2/dropdown/hidePlaceholder", [], function() {
            function e(e, t, i, n) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, n);
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t);
            }, e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t;
            }, e.prototype.removePlaceholder = function(e, t) {
                for (var i = t.slice(0), n = t.length - 1; 0 <= n; n--) {
                    var s = t[n];
                    this.placeholder.id === s.id && i.splice(n, 1);
                }
                return i;
            }, e;
        }), e.define("select2/dropdown/infiniteScroll", [ "jquery" ], function(s) {
            function e(e, t, i, n) {
                this.lastParams = {}, e.call(this, t, i, n), this.$loadingMore = this.createLoadingMore(), 
                this.loading = !1;
            }
            return e.prototype.append = function(e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore);
            }, e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("query", function(e) {
                    n.lastParams = e, n.loading = !0;
                }), t.on("query:append", function(e) {
                    n.lastParams = e, n.loading = !0;
                }), this.$results.on("scroll", function() {
                    var e = s.contains(document.documentElement, n.$loadingMore[0]);
                    !n.loading && e && n.$results.offset().top + n.$results.outerHeight(!1) + 50 >= n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) && n.loadMore();
                });
            }, e.prototype.loadMore = function() {
                this.loading = !0;
                var e = s.extend({}, {
                    page: 1
                }, this.lastParams);
                e.page++, this.trigger("query:append", e);
            }, e.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more;
            }, e.prototype.createLoadingMore = function() {
                var e = s('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), t = this.options.get("translations").get("loadingMore");
                return e.html(t(this.lastParams)), e;
            }, e;
        }), e.define("select2/dropdown/attachBody", [ "jquery", "../utils" ], function(f, r) {
            function e(e, t, i) {
                this.$dropdownParent = i.get("dropdownParent") || f(document.body), e.call(this, t, i);
            }
            return e.prototype.bind = function(e, t, i) {
                var n = this, s = !1;
                e.call(this, t, i), t.on("open", function() {
                    n._showDropdown(), n._attachPositioningHandler(t), s || (s = !0, t.on("results:all", function() {
                        n._positionDropdown(), n._resizeDropdown();
                    }), t.on("results:append", function() {
                        n._positionDropdown(), n._resizeDropdown();
                    }));
                }), t.on("close", function() {
                    n._hideDropdown(), n._detachPositioningHandler(t);
                }), this.$dropdownContainer.on("mousedown", function(e) {
                    e.stopPropagation();
                });
            }, e.prototype.destroy = function(e) {
                e.call(this), this.$dropdownContainer.remove();
            }, e.prototype.position = function(e, t, i) {
                t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), 
                t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = i;
            }, e.prototype.render = function(e) {
                var t = f("<span></span>"), i = e.call(this);
                return t.append(i), this.$dropdownContainer = t;
            }, e.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach();
            }, e.prototype._attachPositioningHandler = function(e, t) {
                var i = this, n = "scroll.select2." + t.id, s = "resize.select2." + t.id, o = "orientationchange.select2." + t.id, a = this.$container.parents().filter(r.hasScroll);
                a.each(function() {
                    f(this).data("select2-scroll-position", {
                        x: f(this).scrollLeft(),
                        y: f(this).scrollTop()
                    });
                }), a.on(n, function(e) {
                    var t = f(this).data("select2-scroll-position");
                    f(this).scrollTop(t.y);
                }), f(window).on(n + " " + s + " " + o, function(e) {
                    i._positionDropdown(), i._resizeDropdown();
                });
            }, e.prototype._detachPositioningHandler = function(e, t) {
                var i = "scroll.select2." + t.id, n = "resize.select2." + t.id, s = "orientationchange.select2." + t.id;
                this.$container.parents().filter(r.hasScroll).off(i), f(window).off(i + " " + n + " " + s);
            }, e.prototype._positionDropdown = function() {
                var e = f(window), t = this.$dropdown.hasClass("select2-dropdown--above"), i = this.$dropdown.hasClass("select2-dropdown--below"), n = null, s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var o = {
                    height: this.$container.outerHeight(!1)
                };
                o.top = s.top, o.bottom = s.top + o.height;
                var a = this.$dropdown.outerHeight(!1), r = e.scrollTop(), l = e.scrollTop() + e.height(), c = r < s.top - a, u = l > s.bottom + a, d = {
                    left: s.left,
                    top: o.bottom
                }, h = this.$dropdownParent;
                "static" === h.css("position") && (h = h.offsetParent());
                var p = h.offset();
                d.top -= p.top, d.left -= p.left, t || i || (n = "below"), u || !c || t ? !c && u && t && (n = "below") : n = "above", 
                ("above" == n || t && "below" !== n) && (d.top = o.top - p.top - a), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), 
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), 
                this.$dropdownContainer.css(d);
            }, e.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", 
                e.width = "auto"), this.$dropdown.css(e);
            }, e.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), 
                this._resizeDropdown();
            }, e;
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function e(e, t, i, n) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), 
                e.call(this, t, i, n);
            }
            return e.prototype.showSearch = function(e, t) {
                return !(function e(t) {
                    for (var i = 0, n = 0; n < t.length; n++) {
                        var s = t[n];
                        s.children ? i += e(s.children) : i++;
                    }
                    return i;
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
            }, e;
        }), e.define("select2/dropdown/selectOnClose", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("close", function(e) {
                    n._handleSelectOnClose(e);
                });
            }, e.prototype._handleSelectOnClose = function(e, t) {
                if (t && null != t.originalSelect2Event) {
                    var i = t.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type) return;
                }
                var n = this.getHighlightedResults();
                if (!(n.length < 1)) {
                    var s = n.data("data");
                    null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {
                        data: s
                    });
                }
            }, e;
        }), e.define("select2/dropdown/closeOnSelect", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, i) {
                var n = this;
                e.call(this, t, i), t.on("select", function(e) {
                    n._selectTriggered(e);
                }), t.on("unselect", function(e) {
                    n._selectTriggered(e);
                });
            }, e.prototype._selectTriggered = function(e, t) {
                var i = t.originalEvent;
                i && i.ctrlKey || this.trigger("close", {
                    originalEvent: i,
                    originalSelect2Event: t
                });
            }, e;
        }), e.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded.";
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum, i = "Please delete " + t + " character";
                    return 1 != t && (i += "s"), i;
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                },
                loadingMore: function() {
                    return "Loading more results…";
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t;
                },
                noResults: function() {
                    return "No results found";
                },
                searching: function() {
                    return "Searching…";
                }
            };
        }), e.define("select2/defaults", [ "jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en" ], function(f, m, g, v, y, w, b, _, x, C, $, t, T, k, S, z, E, O, P, I, M, A, L, D, H, j, R, F, e) {
            function i() {
                this.reset();
            }
            return i.prototype.apply = function(t) {
                if (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter) {
                    if (null != t.ajax ? t.dataAdapter = S : null != t.data ? t.dataAdapter = k : t.dataAdapter = T, 
                    0 < t.minimumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, O)), 0 < t.maximumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, P)), 
                    0 < t.maximumSelectionLength && (t.dataAdapter = C.Decorate(t.dataAdapter, I)), 
                    t.tags && (t.dataAdapter = C.Decorate(t.dataAdapter, z)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = C.Decorate(t.dataAdapter, E)), 
                    null != t.query) {
                        var e = m(t.amdBase + "compat/query");
                        t.dataAdapter = C.Decorate(t.dataAdapter, e);
                    }
                    if (null != t.initSelection) {
                        var i = m(t.amdBase + "compat/initSelection");
                        t.dataAdapter = C.Decorate(t.dataAdapter, i);
                    }
                }
                if (null == t.resultsAdapter && (t.resultsAdapter = g, null != t.ajax && (t.resultsAdapter = C.Decorate(t.resultsAdapter, D)), 
                null != t.placeholder && (t.resultsAdapter = C.Decorate(t.resultsAdapter, L)), t.selectOnClose && (t.resultsAdapter = C.Decorate(t.resultsAdapter, R))), 
                null == t.dropdownAdapter) {
                    if (t.multiple) t.dropdownAdapter = M; else {
                        var n = C.Decorate(M, A);
                        t.dropdownAdapter = n;
                    }
                    if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, j)), 
                    t.closeOnSelect && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, F)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
                        var s = m(t.amdBase + "compat/dropdownCss");
                        t.dropdownAdapter = C.Decorate(t.dropdownAdapter, s);
                    }
                    t.dropdownAdapter = C.Decorate(t.dropdownAdapter, H);
                }
                if (null == t.selectionAdapter) {
                    if (t.multiple ? t.selectionAdapter = y : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = C.Decorate(t.selectionAdapter, w)), 
                    t.allowClear && (t.selectionAdapter = C.Decorate(t.selectionAdapter, b)), t.multiple && (t.selectionAdapter = C.Decorate(t.selectionAdapter, _)), 
                    null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
                        var o = m(t.amdBase + "compat/containerCss");
                        t.selectionAdapter = C.Decorate(t.selectionAdapter, o);
                    }
                    t.selectionAdapter = C.Decorate(t.selectionAdapter, x);
                }
                if ("string" == typeof t.language) if (0 < t.language.indexOf("-")) {
                    var a = t.language.split("-")[0];
                    t.language = [ t.language, a ];
                } else t.language = [ t.language ];
                if (f.isArray(t.language)) {
                    var r = new $();
                    t.language.push("en");
                    for (var l = t.language, c = 0; c < l.length; c++) {
                        var u = l[c], d = {};
                        try {
                            d = $.loadPath(u);
                        } catch (e) {
                            try {
                                u = this.defaults.amdLanguageBase + u, d = $.loadPath(u);
                            } catch (e) {
                                t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + u + '" could not be automatically loaded. A fallback will be used instead.');
                                continue;
                            }
                        }
                        r.extend(d);
                    }
                    t.translations = r;
                } else {
                    var h = $.loadPath(this.defaults.amdLanguageBase + "en"), p = new $(t.language);
                    p.extend(h), t.translations = p;
                }
                return t;
            }, i.prototype.reset = function() {
                function r(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function(e) {
                        return t[e] || e;
                    });
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: C.escapeMarkup,
                    language: e,
                    matcher: function e(t, i) {
                        if ("" === f.trim(t.term)) return i;
                        if (i.children && 0 < i.children.length) {
                            for (var n = f.extend(!0, {}, i), s = i.children.length - 1; 0 <= s; s--) null == e(t, i.children[s]) && n.children.splice(s, 1);
                            return 0 < n.children.length ? n : e(t, n);
                        }
                        var o = r(i.text).toUpperCase(), a = r(t.term).toUpperCase();
                        return -1 < o.indexOf(a) ? i : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(e) {
                        return e;
                    },
                    templateResult: function(e) {
                        return e.text;
                    },
                    templateSelection: function(e) {
                        return e.text;
                    },
                    theme: "default",
                    width: "resolve"
                };
            }, i.prototype.set = function(e, t) {
                var i = {};
                i[f.camelCase(e)] = t;
                var n = C._convertData(i);
                f.extend(this.defaults, n);
            }, new i();
        }), e.define("select2/options", [ "require", "jquery", "./defaults", "./utils" ], function(n, o, s, a) {
            function e(e, t) {
                if (this.options = e, null != t && this.fromElement(t), this.options = s.apply(this.options), 
                t && t.is("input")) {
                    var i = n(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = a.Decorate(this.options.dataAdapter, i);
                }
            }
            return e.prototype.fromElement = function(e) {
                var t = [ "select2" ];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), 
                null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), 
                null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), 
                e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), 
                e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), 
                e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), 
                e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var i;
                i = o.fn.jquery && "1." == o.fn.jquery.substr(0, 2) && e[0].dataset ? o.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var n = o.extend(!0, {}, i);
                for (var s in n = a._convertData(n)) -1 < o.inArray(s, t) || (o.isPlainObject(this.options[s]) ? o.extend(this.options[s], n[s]) : this.options[s] = n[s]);
                return this;
            }, e.prototype.get = function(e) {
                return this.options[e];
            }, e.prototype.set = function(e, t) {
                this.options[e] = t;
            }, e;
        }), e.define("select2/core", [ "jquery", "./options", "./utils", "./keys" ], function(s, c, i, n) {
            var u = function(e, t) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), 
                t = t || {}, this.options = new c(t, e), u.__super__.constructor.call(this);
                var i = e.attr("tabindex") || 0;
                e.data("old-tabindex", i), e.attr("tabindex", "-1");
                var n = this.options.get("dataAdapter");
                this.dataAdapter = new n(e, this.options);
                var s = this.render();
                this._placeContainer(s);
                var o = this.options.get("selectionAdapter");
                this.selection = new o(e, this.options), this.$selection = this.selection.render(), 
                this.selection.position(this.$selection, s);
                var a = this.options.get("dropdownAdapter");
                this.dropdown = new a(e, this.options), this.$dropdown = this.dropdown.render(), 
                this.dropdown.position(this.$dropdown, s);
                var r = this.options.get("resultsAdapter");
                this.results = new r(e, this.options, this.dataAdapter), this.$results = this.results.render(), 
                this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), 
                this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), 
                this.dataAdapter.current(function(e) {
                    l.trigger("selection:update", {
                        data: e
                    });
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), 
                e.data("select2", this);
            };
            return i.Extend(u, i.Observable), u.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
            }, u.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t);
            }, u.prototype._resolveWidth = function(e, t) {
                var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var n = this._resolveWidth(e, "style");
                    return null != n ? n : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                    var s = e.outerWidth(!1);
                    return s <= 0 ? "auto" : s + "px";
                }
                if ("style" == t) {
                    var o = e.attr("style");
                    if ("string" != typeof o) return null;
                    for (var a = o.split(";"), r = 0, l = a.length; r < l; r += 1) {
                        var c = a[r].replace(/\s/g, "").match(i);
                        if (null !== c && 1 <= c.length) return c[1];
                    }
                    return null;
                }
                return t;
            }, u.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), 
                this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, u.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", function() {
                    t.dataAdapter.current(function(e) {
                        t.trigger("selection:update", {
                            data: e
                        });
                    });
                }), this.$element.on("focus.select2", function(e) {
                    t.trigger("focus", e);
                }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), 
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != e ? (this._observer = new e(function(e) {
                    s.each(e, t._syncA), s.each(e, t._syncS);
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), 
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
            }, u.prototype._registerDataEvents = function() {
                var i = this;
                this.dataAdapter.on("*", function(e, t) {
                    i.trigger(e, t);
                });
            }, u.prototype._registerSelectionEvents = function() {
                var i = this, n = [ "toggle", "focus" ];
                this.selection.on("toggle", function() {
                    i.toggleDropdown();
                }), this.selection.on("focus", function(e) {
                    i.focus(e);
                }), this.selection.on("*", function(e, t) {
                    -1 === s.inArray(e, n) && i.trigger(e, t);
                });
            }, u.prototype._registerDropdownEvents = function() {
                var i = this;
                this.dropdown.on("*", function(e, t) {
                    i.trigger(e, t);
                });
            }, u.prototype._registerResultsEvents = function() {
                var i = this;
                this.results.on("*", function(e, t) {
                    i.trigger(e, t);
                });
            }, u.prototype._registerEvents = function() {
                var i = this;
                this.on("open", function() {
                    i.$container.addClass("select2-container--open");
                }), this.on("close", function() {
                    i.$container.removeClass("select2-container--open");
                }), this.on("enable", function() {
                    i.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function() {
                    i.$container.addClass("select2-container--disabled");
                }), this.on("blur", function() {
                    i.$container.removeClass("select2-container--focus");
                }), this.on("query", function(t) {
                    i.isOpen() || i.trigger("open", {}), this.dataAdapter.query(t, function(e) {
                        i.trigger("results:all", {
                            data: e,
                            query: t
                        });
                    });
                }), this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(e) {
                        i.trigger("results:append", {
                            data: e,
                            query: t
                        });
                    });
                }), this.on("keypress", function(e) {
                    var t = e.which;
                    i.isOpen() ? t === n.ESC || t === n.TAB || t === n.UP && e.altKey ? (i.close(), 
                    e.preventDefault()) : t === n.ENTER ? (i.trigger("results:select", {}), e.preventDefault()) : t === n.SPACE && e.ctrlKey ? (i.trigger("results:toggle", {}), 
                    e.preventDefault()) : t === n.UP ? (i.trigger("results:previous", {}), e.preventDefault()) : t === n.DOWN && (i.trigger("results:next", {}), 
                    e.preventDefault()) : (t === n.ENTER || t === n.SPACE || t === n.DOWN && e.altKey) && (i.open(), 
                    e.preventDefault());
                });
            }, u.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), 
                this.trigger("disable", {})) : this.trigger("enable", {});
            }, u.prototype._syncSubtree = function(e, t) {
                var i = !1, n = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) if (t.addedNodes && 0 < t.addedNodes.length) for (var s = 0; s < t.addedNodes.length; s++) {
                        t.addedNodes[s].selected && (i = !0);
                    } else t.removedNodes && 0 < t.removedNodes.length && (i = !0); else i = !0;
                    i && this.dataAdapter.current(function(e) {
                        n.trigger("selection:update", {
                            data: e
                        });
                    });
                }
            }, u.prototype.trigger = function(e, t) {
                var i = u.__super__.trigger, n = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === t && (t = {}), e in n) {
                    var s = n[e], o = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (i.call(this, s, o), o.prevented) return void (t.prevented = !0);
                }
                i.call(this, e, t);
            }, u.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, u.prototype.open = function() {
                this.isOpen() || this.trigger("query", {});
            }, u.prototype.close = function() {
                this.isOpen() && this.trigger("close", {});
            }, u.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open");
            }, u.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus");
            }, u.prototype.focus = function(e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, u.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 
                null != e && 0 !== e.length || (e = [ !0 ]);
                var t = !e[0];
                this.$element.prop("disabled", t);
            }, u.prototype.data = function() {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function(e) {
                    t = e;
                }), t;
            }, u.prototype.val = function(e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 
                null == e || 0 === e.length) return this.$element.val();
                var t = e[0];
                s.isArray(t) && (t = s.map(t, function(e) {
                    return e.toString();
                })), this.$element.val(t).trigger("change");
            }, u.prototype.destroy = function() {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), 
                null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), 
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), 
                this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), 
                this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), 
                this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), 
                this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, 
                this.dropdown = null, this.results = null;
            }, u.prototype.render = function() {
                var e = s('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), 
                e.data("element", this.$element), e;
            }, u;
        }), e.define("jquery-mousewheel", [ "jquery" ], function(e) {
            return e;
        }), e.define("jquery.select2", [ "jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults" ], function(s, e, o, t) {
            if (null == s.fn.select2) {
                var a = [ "open", "close", "destroy" ];
                s.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {})) return this.each(function() {
                        var e = s.extend(!0, {}, t);
                        new o(s(this), e);
                    }), this;
                    if ("string" == typeof t) {
                        var i, n = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var e = s(this).data("select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), 
                            i = e[t].apply(e, n);
                        }), -1 < s.inArray(t, a) ? this : i;
                    }
                    throw new Error("Invalid arguments for Select2: " + t);
                };
            }
            return null == s.fn.select2.defaults && (s.fn.select2.defaults = t), o;
        }), {
            define: e.define,
            require: e.require
        };
    }(), t = e.require("jquery.select2");
    return i.fn.select2.amd = e, t;
}), function(n, s, o) {
    "use strict";
    var l, c, i, a, r, u, t, d, h, p, f, m, g, v, y, w, b;
    p = {
        paneClass: "pane",
        sliderClass: "slider",
        contentClass: "content",
        iOSNativeScrolling: !1,
        preventPageScrolling: !1,
        disableResize: !1,
        alwaysVisible: !1,
        flashDelay: 1500,
        sliderMinHeight: 20,
        sliderMaxHeight: null,
        documentContext: null,
        windowContext: null
    }, d = "scroll", r = "mousewheel", t = "resize", i = "DOMMouseScroll", a = "down", 
    l = "Microsoft Internet Explorer" === s.navigator.appName && /msie 7./i.test(s.navigator.appVersion) && s.ActiveXObject, 
    c = null, v = s.requestAnimationFrame, h = s.cancelAnimationFrame, w = o.createElement("div").style, 
    b = function() {
        var e, t, i, n;
        for (e = i = 0, n = (t = [ "t", "webkitT", "MozT", "msT", "OT" ]).length; i < n; e = ++i) if (t[e], 
        t[e] + "ransform" in w) return t[e].substr(0, t[e].length - 1);
        return !1;
    }(), y = function(e) {
        return !1 !== b && ("" === b ? e : b + e.charAt(0).toUpperCase() + e.substr(1));
    }("transform"), m = !1 !== y, f = function() {
        var e, t, i;
        return (t = (e = o.createElement("div")).style).position = "absolute", t.width = "100px", 
        t.height = "100px", t.overflow = d, t.top = "-9999px", o.body.appendChild(e), i = e.offsetWidth - e.clientWidth, 
        o.body.removeChild(e), i;
    }, g = function() {
        var e, t, i;
        return t = s.navigator.userAgent, !!(e = /(?=.+Mac OS X)(?=.+Firefox)/.test(t)) && ((i = /Firefox\/\d{2}\./.exec(t)) && (i = i[0].replace(/\D+/g, "")), 
        e && 23 < +i);
    }, u = function() {
        function e(e, t) {
            this.el = e, this.options = t, c || (c = f()), this.$el = n(this.el), this.doc = n(this.options.documentContext || o), 
            this.win = n(this.options.windowContext || s), this.$content = this.$el.children("." + t.contentClass), 
            this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], 
            this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), 
            this.createEvents(), this.addEvents(), this.reset();
        }
        return e.prototype.preventScrolling = function(e, t) {
            if (this.isActive) if (e.type === i) (t === a && 0 < e.originalEvent.detail || "up" === t && e.originalEvent.detail < 0) && e.preventDefault(); else if (e.type === r) {
                if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
                (t === a && e.originalEvent.wheelDelta < 0 || "up" === t && 0 < e.originalEvent.wheelDelta) && e.preventDefault();
            }
        }, e.prototype.nativeScrolling = function() {
            this.$content.css({
                WebkitOverflowScrolling: "touch"
            }), this.iOSNativeScrolling = !0, this.isActive = !0;
        }, e.prototype.updateScrollValues = function() {
            var e;
            e = this.content, this.maxScrollTop = e.scrollHeight - e.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, 
            this.contentScrollTop = e.scrollTop, this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, 
            this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop);
        }, e.prototype.setOnScrollStyles = function() {
            var e, t = this;
            m ? (e = {})[y] = "translate(0, " + this.sliderTop + "px)" : e = {
                top: this.sliderTop
            }, v ? this.scrollRAF || (this.scrollRAF = v(function() {
                t.scrollRAF = null, t.slider.css(e);
            })) : this.slider.css(e);
        }, e.prototype.createEvents = function() {
            var i = this;
            this.events = {
                down: function(e) {
                    return i.isBeingDragged = !0, i.offsetY = e.pageY - i.slider.offset().top, i.pane.addClass("active"), 
                    i.doc.bind("mousemove", i.events.drag).bind("mouseup", i.events.up), !1;
                },
                drag: function(e) {
                    return i.sliderY = e.pageY - i.$el.offset().top - i.offsetY, i.scroll(), i.contentScrollTop >= i.maxScrollTop && i.prevScrollTop !== i.maxScrollTop ? i.$el.trigger("scrollend") : 0 === i.contentScrollTop && 0 !== i.prevScrollTop && i.$el.trigger("scrolltop"), 
                    !1;
                },
                up: function() {
                    return i.isBeingDragged = !1, i.pane.removeClass("active"), i.doc.unbind("mousemove", i.events.drag).unbind("mouseup", i.events.up), 
                    !1;
                },
                resize: function() {
                    i.reset();
                },
                panedown: function(e) {
                    return i.sliderY = (e.offsetY || e.originalEvent.layerY) - .5 * i.sliderHeight, 
                    i.scroll(), i.events.down(e), !1;
                },
                scroll: function(e) {
                    i.updateScrollValues(), i.isBeingDragged || (i.iOSNativeScrolling || (i.sliderY = i.sliderTop, 
                    i.setOnScrollStyles()), null != e && (i.contentScrollTop >= i.maxScrollTop ? (i.options.preventPageScrolling && i.preventScrolling(e, a), 
                    i.prevScrollTop !== i.maxScrollTop && i.$el.trigger("scrollend")) : 0 === i.contentScrollTop && (i.options.preventPageScrolling && i.preventScrolling(e, "up"), 
                    0 !== i.prevScrollTop && i.$el.trigger("scrolltop"))));
                },
                wheel: function(e) {
                    var t;
                    if (null != e) return (t = e.delta || e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail || e.originalEvent && -e.originalEvent.detail) && (i.sliderY += -t / 3), 
                    i.scroll(), !1;
                }
            };
        }, e.prototype.addEvents = function() {
            var e;
            this.removeEvents(), e = this.events, this.options.disableResize || this.win.bind(t, e[t]), 
            this.iOSNativeScrolling || (this.slider.bind("mousedown", e.down), this.pane.bind("mousedown", e.panedown).bind(r + " " + i, e.wheel)), 
            this.$content.bind(d + " " + r + " " + i + " touchmove", e[d]);
        }, e.prototype.removeEvents = function() {
            var e;
            e = this.events, this.win.unbind(t, e[t]), this.iOSNativeScrolling || (this.slider.unbind(), 
            this.pane.unbind()), this.$content.unbind(d + " " + r + " " + i + " touchmove", e[d]);
        }, e.prototype.generate = function() {
            var e, t, i, n;
            return i = (t = this.options).paneClass, n = t.sliderClass, t.contentClass, this.$el.find("." + i).length || this.$el.find("." + n).length || this.$el.append('<div class="' + i + '"><div class="' + n + '" /></div>'), 
            this.pane = this.$el.children("." + i), this.slider = this.pane.find("." + n), 0 === c && g() ? e = {
                right: -14,
                paddingRight: +s.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/\D+/g, "") + 14
            } : c && (e = {
                right: -c
            }, this.$el.addClass("has-scrollbar")), null != e && this.$content.css(e), this;
        }, e.prototype.restore = function() {
            this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents();
        }, e.prototype.reset = function() {
            var e, t, i, n, s, o, a, r;
            return this.iOSNativeScrolling ? void (this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), 
            this.stopped && this.restore(), n = (i = (e = this.content).style).overflowY, l && this.$content.css({
                height: this.$content.height()
            }), t = e.scrollHeight + c, 0 < (a = parseInt(this.$el.css("max-height"), 10)) && (this.$el.height(""), 
            this.$el.height(e.scrollHeight > a ? a : e.scrollHeight)), o = (s = this.pane.outerHeight(!1)) + parseInt(this.pane.css("top"), 10) + parseInt(this.pane.css("bottom"), 10), 
            (r = Math.round(o / t * o)) < this.options.sliderMinHeight ? r = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && r > this.options.sliderMaxHeight && (r = this.options.sliderMaxHeight), 
            n === d && i.overflowX !== d && (r += c), this.maxSliderTop = o - r, this.contentHeight = t, 
            this.paneHeight = s, this.paneOuterHeight = o, this.sliderHeight = r, this.slider.height(r), 
            this.events.scroll(), this.pane.show(), this.isActive = !0, e.scrollHeight === e.clientHeight || this.pane.outerHeight(!0) >= e.scrollHeight && n !== d ? (this.pane.hide(), 
            this.isActive = !1) : this.el.clientHeight === e.scrollHeight && n === d ? this.slider.hide() : this.slider.show(), 
            this.pane.css({
                opacity: this.options.alwaysVisible ? 1 : "",
                visibility: this.options.alwaysVisible ? "visible" : ""
            }), this);
        }, e.prototype.scroll = function() {
            return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), 
            this.$content.scrollTop((this.paneHeight - this.contentHeight + c) * this.sliderY / this.maxSliderTop * -1), 
            this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), 
            this) : void 0;
        }, e.prototype.scrollBottom = function(e) {
            return this.isActive ? (this.reset(), this.$content.scrollTop(this.contentHeight - this.$content.height() - e).trigger(r), 
            this) : void 0;
        }, e.prototype.scrollTop = function(e) {
            return this.isActive ? (this.reset(), this.$content.scrollTop(+e).trigger(r), this) : void 0;
        }, e.prototype.scrollTo = function(e) {
            return this.isActive ? (this.reset(), this.scrollTop(this.$el.find(e).get(0).offsetTop), 
            this) : void 0;
        }, e.prototype.stop = function() {
            return h && this.scrollRAF && (h(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, 
            this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this;
        }, e.prototype.destroy = function() {
            return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), 
            l && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), 
            this.$content.css({
                right: ""
            })), this;
        }, e.prototype.flash = function() {
            var e = this;
            if (!this.iOSNativeScrolling && this.isActive) return this.reset(), this.pane.addClass("flashed"), 
            setTimeout(function() {
                e.pane.removeClass("flashed");
            }, this.options.flashDelay), this;
        }, e;
    }(), n.fn.nanoScroller = function(i) {
        return this.each(function() {
            var e, t;
            if ((t = this.nanoscroller) || (e = n.extend({}, p, i), this.nanoscroller = t = new u(this, e)), 
            i && "object" == typeof i) {
                if (n.extend(t.options, i), null != i.scrollBottom) return t.scrollBottom(i.scrollBottom);
                if (null != i.scrollTop) return t.scrollTop(i.scrollTop);
                if (i.scrollTo) return t.scrollTo(i.scrollTo);
                if ("bottom" === i.scroll) return t.scrollBottom(0);
                if ("top" === i.scroll) return t.scrollTop(0);
                if (i.scroll && i.scroll instanceof n) return t.scrollTo(i.scroll);
                if (i.stop) return t.stop();
                if (i.destroy) return t.destroy();
                if (i.flash) return t.flash();
            }
            return t.reset();
        });
    }, n.fn.nanoScroller.Constructor = u;
}(jQuery, window, document), function(g, s, e, v) {
    function n(e, t) {
        this.element = e, this.options = g.extend({}, i, t), this._defaults = i, this._name = o, 
        this.init();
    }
    var o = "stellar", i = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function(e) {
            e.hide();
        },
        showElement: function(e) {
            e.show();
        }
    }, r = {
        scroll: {
            getLeft: function(e) {
                return e.scrollLeft();
            },
            setLeft: function(e, t) {
                e.scrollLeft(t);
            },
            getTop: function(e) {
                return e.scrollTop();
            },
            setTop: function(e, t) {
                e.scrollTop(t);
            }
        },
        position: {
            getLeft: function(e) {
                return -1 * parseInt(e.css("left"), 10);
            },
            getTop: function(e) {
                return -1 * parseInt(e.css("top"), 10);
            }
        },
        margin: {
            getLeft: function(e) {
                return -1 * parseInt(e.css("margin-left"), 10);
            },
            getTop: function(e) {
                return -1 * parseInt(e.css("margin-top"), 10);
            }
        },
        transform: {
            getLeft: function(e) {
                var t = getComputedStyle(e[0])[a];
                return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0;
            },
            getTop: function(e) {
                var t = getComputedStyle(e[0])[a];
                return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0;
            }
        }
    }, l = {
        position: {
            setLeft: function(e, t) {
                e.css("left", t);
            },
            setTop: function(e, t) {
                e.css("top", t);
            }
        },
        transform: {
            setPosition: function(e, t, i, n, s) {
                e[0].style[a] = "translate3d(" + (t - i) + "px, " + (n - s) + "px, 0)";
            }
        }
    }, a = function() {
        var e, t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, i = g("script")[0].style, n = "";
        for (e in i) if (t.test(e)) {
            n = e.match(t)[0];
            break;
        }
        return "WebkitOpacity" in i && (n = "Webkit"), "KhtmlOpacity" in i && (n = "Khtml"), 
        function(e) {
            return n + (0 < n.length ? e.charAt(0).toUpperCase() + e.slice(1) : e);
        };
    }()("transform"), t = g("<div />", {
        style: "background:#fff"
    }).css("background-position-x") !== v, y = t ? function(e, t, i) {
        e.css({
            "background-position-x": t,
            "background-position-y": i
        });
    } : function(e, t, i) {
        e.css("background-position", t + " " + i);
    }, w = t ? function(e) {
        return [ e.css("background-position-x"), e.css("background-position-y") ];
    } : function(e) {
        return e.css("background-position").split(" ");
    }, c = s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.oRequestAnimationFrame || s.msRequestAnimationFrame || function(e) {
        setTimeout(e, 1e3 / 60);
    };
    n.prototype = {
        init: function() {
            this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), 
            this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), 
            this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop();
        },
        _defineElements: function() {
            this.element === e.body && (this.element = s), this.$scrollElement = g(this.element), 
            this.$element = this.element === s ? g("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== v ? g(this.options.viewportElement) : this.$scrollElement[0] === s || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent();
        },
        _defineGetters: function() {
            var e = this, t = r[e.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(e.$scrollElement);
            }, this._getScrollTop = function() {
                return t.getTop(e.$scrollElement);
            };
        },
        _defineSetters: function() {
            var o = this, e = r[o.options.scrollProperty], a = l[o.options.positionProperty], t = e.setLeft, i = e.setTop;
            this._setScrollLeft = "function" == typeof t ? function(e) {
                t(o.$scrollElement, e);
            } : g.noop, this._setScrollTop = "function" == typeof i ? function(e) {
                i(o.$scrollElement, e);
            } : g.noop, this._setPosition = a.setPosition || function(e, t, i, n, s) {
                o.options.horizontalScrolling && a.setLeft(e, t, i), o.options.verticalScrolling && a.setTop(e, n, s);
            };
        },
        _handleWindowLoadAndResize: function() {
            var e = this, t = g(s);
            e.options.responsive && t.bind("load." + this.name, function() {
                e.refresh();
            }), t.bind("resize." + this.name, function() {
                e._detectViewport(), e.options.responsive && e.refresh();
            });
        },
        refresh: function(e) {
            var i = this, t = i._getScrollLeft(), n = i._getScrollTop();
            e && e.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), 
            this._setOffsets(), this._findParticles(), this._findBackgrounds(), e && e.firstLoad && /WebKit/.test(navigator.userAgent) && g(s).load(function() {
                var e = i._getScrollLeft(), t = i._getScrollTop();
                i._setScrollLeft(e + 1), i._setScrollTop(t + 1), i._setScrollLeft(e), i._setScrollTop(t);
            }), this._setScrollLeft(t), this._setScrollTop(n);
        },
        _detectViewport: function() {
            var e = this.$viewportElement.offset(), t = null !== e && e !== v;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), 
            this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0;
        },
        _findParticles: function() {
            var f = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== v) for (var e = this.particles.length - 1; 0 <= e; e--) this.particles[e].$element.data("stellar-elementIsActive", v);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var e, t, i, n, s, o, a, r, l, c = g(this), u = 0, d = 0, h = 0, p = 0;
                if (c.data("stellar-elementIsActive")) {
                    if (c.data("stellar-elementIsActive") !== this) return;
                } else c.data("stellar-elementIsActive", this);
                f.options.showElement(c), c.data("stellar-startingLeft") ? (c.css("left", c.data("stellar-startingLeft")), 
                c.css("top", c.data("stellar-startingTop"))) : (c.data("stellar-startingLeft", c.css("left")), 
                c.data("stellar-startingTop", c.css("top"))), i = c.position().left, n = c.position().top, 
                s = "auto" === c.css("margin-left") ? 0 : parseInt(c.css("margin-left"), 10), o = "auto" === c.css("margin-top") ? 0 : parseInt(c.css("margin-top"), 10), 
                r = c.offset().left - s, l = c.offset().top - o, c.parents().each(function() {
                    var e = g(this);
                    return !0 === e.data("stellar-offset-parent") ? (u = h, d = p, a = e, !1) : (h += e.position().left, 
                    void (p += e.position().top));
                }), e = c.data("stellar-horizontal-offset") !== v ? c.data("stellar-horizontal-offset") : a !== v && a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : f.horizontalOffset, 
                t = c.data("stellar-vertical-offset") !== v ? c.data("stellar-vertical-offset") : a !== v && a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : f.verticalOffset, 
                f.particles.push({
                    $element: c,
                    $offsetParent: a,
                    isFixed: "fixed" === c.css("position"),
                    horizontalOffset: e,
                    verticalOffset: t,
                    startingPositionLeft: i,
                    startingPositionTop: n,
                    startingOffsetLeft: r,
                    startingOffsetTop: l,
                    parentOffsetLeft: u,
                    parentOffsetTop: d,
                    stellarRatio: c.data("stellar-ratio") !== v ? c.data("stellar-ratio") : 1,
                    width: c.outerWidth(!0),
                    height: c.outerHeight(!0),
                    isHidden: !1
                });
            });
        },
        _findBackgrounds: function() {
            var e, p = this, f = this._getScrollLeft(), m = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), 
            this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, t, i, n, s, o, a, r = g(this), l = w(r), c = 0, u = 0, d = 0, h = 0;
                if (r.data("stellar-backgroundIsActive")) {
                    if (r.data("stellar-backgroundIsActive") !== this) return;
                } else r.data("stellar-backgroundIsActive", this);
                r.data("stellar-backgroundStartingLeft") ? y(r, r.data("stellar-backgroundStartingLeft"), r.data("stellar-backgroundStartingTop")) : (r.data("stellar-backgroundStartingLeft", l[0]), 
                r.data("stellar-backgroundStartingTop", l[1])), i = "auto" === r.css("margin-left") ? 0 : parseInt(r.css("margin-left"), 10), 
                n = "auto" === r.css("margin-top") ? 0 : parseInt(r.css("margin-top"), 10), s = r.offset().left - i - f, 
                o = r.offset().top - n - m, r.parents().each(function() {
                    var e = g(this);
                    return !0 === e.data("stellar-offset-parent") ? (c = d, u = h, a = e, !1) : (d += e.position().left, 
                    void (h += e.position().top));
                }), e = r.data("stellar-horizontal-offset") !== v ? r.data("stellar-horizontal-offset") : a !== v && a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : p.horizontalOffset, 
                t = r.data("stellar-vertical-offset") !== v ? r.data("stellar-vertical-offset") : a !== v && a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : p.verticalOffset, 
                p.backgrounds.push({
                    $element: r,
                    $offsetParent: a,
                    isFixed: "fixed" === r.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: t,
                    startingValueLeft: l[0],
                    startingValueTop: l[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(l[0], 10)) ? 0 : parseInt(l[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(l[1], 10)) ? 0 : parseInt(l[1], 10),
                    startingPositionLeft: r.position().left,
                    startingPositionTop: r.position().top,
                    startingOffsetLeft: s,
                    startingOffsetTop: o,
                    parentOffsetLeft: c,
                    parentOffsetTop: u,
                    stellarRatio: r.data("stellar-background-ratio") === v ? 1 : r.data("stellar-background-ratio")
                });
            }));
        },
        _reset: function() {
            var e, t, i, n, s;
            for (s = this.particles.length - 1; 0 <= s; s--) t = (e = this.particles[s]).$element.data("stellar-startingLeft"), 
            i = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, i, i), 
            this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (s = this.backgrounds.length - 1; 0 <= s; s--) (n = this.backgrounds[s]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), 
            y(n.$element, n.startingValueLeft, n.startingValueTop);
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), 
            this._animationLoop = g.noop, g(s).unbind("load." + this.name).unbind("resize." + this.name);
        },
        _setOffsets: function() {
            var e = this, t = g(s);
            t.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), 
            "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), 
            t.bind("resize.horizontal-" + this.name, function() {
                e.horizontalOffset = e.options.horizontalOffset();
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), 
            t.bind("resize.vertical-" + this.name, function() {
                e.verticalOffset = e.options.verticalOffset();
            })) : this.verticalOffset = this.options.verticalOffset;
        },
        _repositionElements: function() {
            var e, t, i, n, s, o, a, r, l, c, u = this._getScrollLeft(), d = this._getScrollTop(), h = !0, p = !0;
            if (this.currentScrollLeft !== u || this.currentScrollTop !== d || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = u, this.currentScrollTop = d, this.currentWidth = this.viewportWidth, 
                this.currentHeight = this.viewportHeight, c = this.particles.length - 1; 0 <= c; c--) t = (e = this.particles[c]).isFixed ? 1 : 0, 
                this.options.horizontalScrolling ? r = (o = (u + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft) - e.startingPositionLeft + e.startingOffsetLeft : (o = e.startingPositionLeft, 
                r = e.startingOffsetLeft), this.options.verticalScrolling ? l = (a = (d + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop) - e.startingPositionTop + e.startingOffsetTop : (a = e.startingPositionTop, 
                l = e.startingOffsetTop), this.options.hideDistantElements && (p = !this.options.horizontalScrolling || r + e.width > (e.isFixed ? 0 : u) && r < (e.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, 
                h = !this.options.verticalScrolling || l + e.height > (e.isFixed ? 0 : d) && l < (e.isFixed ? 0 : d) + this.viewportHeight + this.viewportOffsetTop), 
                p && h ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), 
                this._setPosition(e.$element, o, e.startingPositionLeft, a, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), 
                e.isHidden = !0);
                for (c = this.backgrounds.length - 1; 0 <= c; c--) t = (i = this.backgrounds[c]).isFixed ? 0 : 1, 
                n = this.options.horizontalScrolling ? (u + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (t - i.stellarRatio) + "px" : i.startingValueLeft, 
                s = this.options.verticalScrolling ? (d + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (t - i.stellarRatio) + "px" : i.startingValueTop, 
                y(i.$element, n, s);
            }
        },
        _handleScrollEvent: function() {
            var e = this, t = !1, i = function() {
                e._repositionElements(), t = !1;
            }, n = function() {
                t || (c(i), t = !0);
            };
            this.$scrollElement.bind("scroll." + this.name, n), n();
        },
        _startAnimationLoop: function() {
            var e = this;
            this._animationLoop = function() {
                c(e._animationLoop), e._repositionElements();
            }, this._animationLoop();
        }
    }, g.fn[o] = function(t) {
        var i = arguments;
        return t === v || "object" == typeof t ? this.each(function() {
            g.data(this, "plugin_" + o) || g.data(this, "plugin_" + o, new n(this, t));
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var e = g.data(this, "plugin_" + o);
            e instanceof n && "function" == typeof e[t] && e[t].apply(e, Array.prototype.slice.call(i, 1)), 
            "destroy" === t && g.data(this, "plugin_" + o, null);
        }) : void 0;
    }, g[o] = function() {
        var e = g(s);
        return e.stellar.apply(e, Array.prototype.slice.call(arguments, 0));
    }, g[o].scrollProperty = r, g[o].positionProperty = l, s.Stellar = n;
}(jQuery, this, document), function(t) {
    function r(e) {
        var t = e.length, i = u.type(e);
        return "function" !== i && !u.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e));
    }
    if (!t.jQuery) {
        var u = function(e, t) {
            return new u.fn.init(e, t);
        };
        u.isWindow = function(e) {
            return null != e && e == e.window;
        }, u.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[s.call(e)] || "object" : typeof e;
        }, u.isArray = Array.isArray || function(e) {
            return "array" === u.type(e);
        }, u.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== u.type(e) || e.nodeType || u.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            for (t in e) ;
            return void 0 === t || n.call(e, t);
        }, u.each = function(e, t, i) {
            var n = 0, s = e.length, o = r(e);
            if (i) {
                if (o) for (;n < s && !1 !== t.apply(e[n], i); n++) ; else for (n in e) if (!1 === t.apply(e[n], i)) break;
            } else if (o) for (;n < s && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e;
        }, u.data = function(e, t, i) {
            if (void 0 === i) {
                var n = (s = e[u.expando]) && o[s];
                if (void 0 === t) return n;
                if (n && t in n) return n[t];
            } else if (void 0 !== t) {
                var s = e[u.expando] || (e[u.expando] = ++u.uuid);
                return o[s] = o[s] || {}, o[s][t] = i;
            }
        }, u.removeData = function(e, t) {
            var i = e[u.expando], n = i && o[i];
            n && u.each(t, function(e, t) {
                delete n[t];
            });
        }, u.extend = function() {
            var e, t, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" != typeof a && "function" !== u.type(a) && (a = {}), 
            r === l && (a = this, r--); r < l; r++) if (null != (s = arguments[r])) for (n in s) e = a[n], 
            a !== (i = s[n]) && (c && i && (u.isPlainObject(i) || (t = u.isArray(i))) ? (t ? (t = !1, 
            o = e && u.isArray(e) ? e : []) : o = e && u.isPlainObject(e) ? e : {}, a[n] = u.extend(c, o, i)) : void 0 !== i && (a[n] = i));
            return a;
        }, u.queue = function(e, t, i) {
            if (e) {
                t = (t || "fx") + "queue";
                var n = u.data(e, t);
                return i ? (!n || u.isArray(i) ? n = u.data(e, t, (a = o || [], null != (s = i) && (r(Object(s)) ? function(e, t) {
                    for (var i = +t.length, n = 0, s = e.length; n < i; ) e[s++] = t[n++];
                    if (i != i) for (;void 0 !== t[n]; ) e[s++] = t[n++];
                    e.length = s;
                }(a, "string" == typeof s ? [ s ] : s) : [].push.call(a, s)), a)) : n.push(i), n) : n || [];
            }
            var s, o, a;
        }, u.dequeue = function(e, s) {
            u.each(e.nodeType ? [ e ] : e, function(e, t) {
                s = s || "fx";
                var i = u.queue(t, s), n = i.shift();
                "inprogress" === n && (n = i.shift()), n && ("fx" === s && i.unshift("inprogress"), 
                n.call(t, function() {
                    u.dequeue(t, s);
                }));
            });
        }, u.fn = u.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var e = this[0].getBoundingClientRect();
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                    return e || document;
                }
                var t = this[0], e = e.apply(t), i = this.offset(), n = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : u(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, 
                e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), 
                {
                    top: i.top - n.top,
                    left: i.left - n.left
                };
            }
        };
        var o = {};
        u.expando = "velocity" + new Date().getTime(), u.uuid = 0;
        for (var i = {}, n = i.hasOwnProperty, s = i.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), a = 0; a < e.length; a++) i["[object " + e[a] + "]"] = e[a].toLowerCase();
        u.fn.init.prototype = u.fn, t.Velocity = {
            Utilities: u
        };
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function() {
    return function(e, H, j, R) {
        function f(e) {
            return N.isWrapped(e) ? e = [].slice.call(e) : N.isNode(e) && (e = [ e ]), e;
        }
        function F(e) {
            var t = B.data(e, "velocity");
            return null === t ? R : t;
        }
        function n(a, t, r, i) {
            function n(e, t) {
                return 1 - 3 * t + 3 * e;
            }
            function s(e, t) {
                return 3 * t - 6 * e;
            }
            function o(e) {
                return 3 * e;
            }
            function l(e, t, i) {
                return ((n(t, i) * e + s(t, i)) * e + o(t)) * e;
            }
            function c(e, t, i) {
                return 3 * n(t, i) * e * e + 2 * s(t, i) * e + o(t);
            }
            function u(e) {
                for (var t = 0, i = 1, n = g - 1; i != n && w[i] <= e; ++i) t += v;
                var s = t + (e - w[--i]) / (w[i + 1] - w[i]) * v, o = c(s, a, r);
                return p <= o ? function(e, t) {
                    for (var i = 0; i < h; ++i) {
                        var n = c(t, a, r);
                        if (0 === n) return t;
                        t -= (l(t, a, r) - e) / n;
                    }
                    return t;
                }(e, s) : 0 == o ? s : function(e, t, i) {
                    for (var n, s, o = 0; 0 < (n = l(s = t + (i - t) / 2, a, r) - e) ? i = s : t = s, 
                    Math.abs(n) > f && ++o < m; ) ;
                    return s;
                }(e, t, t + v);
            }
            function d() {
                b = !0, (a != t || r != i) && function() {
                    for (var e = 0; e < g; ++e) w[e] = l(e * v, a, r);
                }();
            }
            var h = 4, p = .001, f = 1e-7, m = 10, g = 11, v = 1 / (g - 1), e = "Float32Array" in H;
            if (4 !== arguments.length) return !1;
            for (var y = 0; y < 4; ++y) if ("number" != typeof arguments[y] || isNaN(arguments[y]) || !isFinite(arguments[y])) return !1;
            a = Math.min(a, 1), r = Math.min(r, 1), a = Math.max(a, 0), r = Math.max(r, 0);
            var w = e ? new Float32Array(g) : new Array(g), b = !1, _ = function(e) {
                return b || d(), a === t && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : l(u(e), t, i);
            };
            _.getControlPoints = function() {
                return [ {
                    x: a,
                    y: t
                }, {
                    x: r,
                    y: i
                } ];
            };
            var x = "generateBezier(" + [ a, t, r, i ] + ")";
            return _.toString = function() {
                return x;
            }, _;
        }
        function W(e, t) {
            var i = e;
            return N.isString(e) ? V.Easings[e] || (i = !1) : i = N.isArray(e) && 1 === e.length ? function(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t);
                };
            }.apply(null, e) : N.isArray(e) && 2 === e.length ? a.apply(null, e.concat([ t ])) : !(!N.isArray(e) || 4 !== e.length) && n.apply(null, e), 
            !1 === i && (i = V.Easings[V.defaults.easing] ? V.defaults.easing : o), i;
        }
        function q(e) {
            if (e) for (var t = new Date().getTime(), i = 0, n = V.State.calls.length; i < n; i++) if (V.State.calls[i]) {
                var s = V.State.calls[i], o = s[0], a = s[2], r = s[3];
                r || (r = V.State.calls[i][3] = t - 16);
                for (var l = Math.min((t - r) / a.duration, 1), c = 0, u = o.length; c < u; c++) {
                    var d = o[c], h = d.element;
                    if (F(h)) {
                        var p = !1;
                        if (a.display !== R && null !== a.display && "none" !== a.display) {
                            if ("flex" === a.display) {
                                B.each([ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ], function(e, t) {
                                    Y.setPropertyValue(h, "display", t);
                                });
                            }
                            Y.setPropertyValue(h, "display", a.display);
                        }
                        for (var f in a.visibility && "hidden" !== a.visibility && Y.setPropertyValue(h, "visibility", a.visibility), 
                        d) if ("element" !== f) {
                            var m, g = d[f], v = N.isString(g.easing) ? V.Easings[g.easing] : g.easing;
                            if (m = 1 === l ? g.endValue : g.startValue + (g.endValue - g.startValue) * v(l), 
                            g.currentValue = m, Y.Hooks.registered[f]) {
                                var y = Y.Hooks.getRoot(f), w = F(h).rootPropertyValueCache[y];
                                w && (g.rootPropertyValue = w);
                            }
                            var b = Y.setPropertyValue(h, f, g.currentValue + (0 === parseFloat(m) ? "" : g.unitType), g.rootPropertyValue, g.scrollData);
                            Y.Hooks.registered[f] && (F(h).rootPropertyValueCache[y] = Y.Normalizations.registered[y] ? Y.Normalizations.registered[y]("extract", null, b[1]) : b[1]), 
                            "transform" === b[0] && (p = !0);
                        }
                        a.mobileHA && F(h).transformCache.translate3d === R && (F(h).transformCache.translate3d = "(0px, 0px, 0px)", 
                        p = !0), p && Y.flushTransformCache(h);
                    }
                }
                a.display !== R && "none" !== a.display && (V.State.calls[i][2].display = !1), a.visibility && "hidden" !== a.visibility && (V.State.calls[i][2].visibility = !1), 
                a.progress && a.progress.call(s[1], s[1], l, Math.max(0, r + a.duration - t), r), 
                1 === l && _(i);
            }
            V.State.isTicking && x(q);
        }
        function _(e, t) {
            if (!V.State.calls[e]) return !1;
            for (var i = V.State.calls[e][0], n = V.State.calls[e][1], s = V.State.calls[e][2], o = V.State.calls[e][4], a = !1, r = 0, l = i.length; r < l; r++) {
                var c = i[r].element;
                if (t || s.loop || ("none" === s.display && Y.setPropertyValue(c, "display", s.display), 
                "hidden" === s.visibility && Y.setPropertyValue(c, "visibility", s.visibility)), 
                (B.queue(c)[1] === R || !/\.velocityQueueEntryFlag/i.test(B.queue(c)[1])) && F(c)) {
                    F(c).isAnimating = !1;
                    var u = !(F(c).rootPropertyValueCache = {});
                    B.each(Y.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0, n = F(c).transformCache[t];
                        F(c).transformCache[t] !== R && new RegExp("^\\(" + i + "[^.]").test(n) && (u = !0, 
                        delete F(c).transformCache[t]);
                    }), s.mobileHA && (u = !0, delete F(c).transformCache.translate3d), u && Y.flushTransformCache(c), 
                    Y.Values.removeClass(c, "velocity-animating");
                }
                if (!t && s.complete && !s.loop && r === l - 1) try {
                    s.complete.call(n, n);
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    }, 1);
                }
                o && !0 !== s.loop && o(n), !0 !== s.loop || t || (B.each(F(c).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360);
                }), V(c, "reverse", {
                    loop: !0,
                    delay: s.delay
                })), !1 !== s.queue && B.dequeue(c, s.queue);
            }
            V.State.calls[e] = !1;
            for (var d = 0, h = V.State.calls.length; d < h; d++) if (!1 !== V.State.calls[d]) {
                a = !0;
                break;
            }
            !1 === a && (V.State.isTicking = !1, delete V.State.calls, V.State.calls = []);
        }
        var B, s, d = function() {
            if (j.documentMode) return j.documentMode;
            for (var e = 7; 4 < e; e--) {
                var t = j.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, 
                e;
            }
            return R;
        }(), t = (s = 0, H.webkitRequestAnimationFrame || H.mozRequestAnimationFrame || function(e) {
            var t, i = new Date().getTime();
            return t = Math.max(0, 16 - (i - s)), s = i + t, setTimeout(function() {
                e(i + t);
            }, t);
        }), N = {
            isString: function(e) {
                return "string" == typeof e;
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e);
            },
            isNode: function(e) {
                return e && e.nodeType;
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== R && (0 === e.length || "object" == typeof e[0] && 0 < e[0].nodeType);
            },
            isWrapped: function(e) {
                return e && (e.jquery || H.Zepto && H.Zepto.zepto.isZ(e));
            },
            isSVG: function(e) {
                return H.SVGElement && e instanceof SVGElement;
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            }
        }, i = !1;
        if (e.fn && e.fn.jquery ? (B = e, i = !0) : B = H.Velocity.Utilities, d <= 8 && !i) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(d <= 7)) {
            var m = 400, o = "swing", V = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: H.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: j.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: B,
                Sequences: {},
                Easings: {},
                Promise: H.Promise,
                defaults: {
                    queue: "",
                    duration: m,
                    easing: o,
                    begin: null,
                    complete: null,
                    progress: null,
                    display: R,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    B.data(e, "velocity", {
                        isSVG: N.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    });
                },
                animate: null,
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 0,
                    patch: 0
                },
                debug: !1
            };
            H.pageYOffset !== R ? (V.State.scrollAnchor = H, V.State.scrollPropertyLeft = "pageXOffset", 
            V.State.scrollPropertyTop = "pageYOffset") : (V.State.scrollAnchor = j.documentElement || j.body.parentNode || j.body, 
            V.State.scrollPropertyLeft = "scrollLeft", V.State.scrollPropertyTop = "scrollTop");
            var a = function() {
                function y(e) {
                    return -e.tension * e.x - e.friction * e.v;
                }
                function w(e, t, i) {
                    var n = {
                        x: e.x + i.dx * t,
                        v: e.v + i.dv * t,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: n.v,
                        dv: y(n)
                    };
                }
                return function e(t, i, n) {
                    var s, o, a, r, l, c, u, d, h, p, f, m = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, g = [ 0 ], v = 0;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, n = n || null, m.tension = t, 
                    m.friction = i, (s = null !== n) ? o = (v = e(t, i)) / n * .016 : o = .016; l = o, 
                    void 0, c = {
                        dx: (r = a || m).v,
                        dv: y(r)
                    }, u = w(r, .5 * l, c), d = w(r, .5 * l, u), h = w(r, l, d), p = 1 / 6 * (c.dx + 2 * (u.dx + d.dx) + h.dx), 
                    f = 1 / 6 * (c.dv + 2 * (u.dv + d.dv) + h.dv), r.x = r.x + p * l, r.v = r.v + f * l, 
                    a = r, g.push(1 + a.x), v += 16, 1e-4 < Math.abs(a.x) && 1e-4 < Math.abs(a.v); ) ;
                    return s ? function(e) {
                        return g[e * (g.length - 1) | 0];
                    } : v;
                };
            }();
            V.Easings = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                }
            }, B.each([ [ "ease", [ .25, .1, .25, 1 ] ], [ "ease-in", [ .42, 0, 1, 1 ] ], [ "ease-out", [ 0, 0, .58, 1 ] ], [ "ease-in-out", [ .42, 0, .58, 1 ] ], [ "easeInSine", [ .47, 0, .745, .715 ] ], [ "easeOutSine", [ .39, .575, .565, 1 ] ], [ "easeInOutSine", [ .445, .05, .55, .95 ] ], [ "easeInQuad", [ .55, .085, .68, .53 ] ], [ "easeOutQuad", [ .25, .46, .45, .94 ] ], [ "easeInOutQuad", [ .455, .03, .515, .955 ] ], [ "easeInCubic", [ .55, .055, .675, .19 ] ], [ "easeOutCubic", [ .215, .61, .355, 1 ] ], [ "easeInOutCubic", [ .645, .045, .355, 1 ] ], [ "easeInQuart", [ .895, .03, .685, .22 ] ], [ "easeOutQuart", [ .165, .84, .44, 1 ] ], [ "easeInOutQuart", [ .77, 0, .175, 1 ] ], [ "easeInQuint", [ .755, .05, .855, .06 ] ], [ "easeOutQuint", [ .23, 1, .32, 1 ] ], [ "easeInOutQuint", [ .86, 0, .07, 1 ] ], [ "easeInExpo", [ .95, .05, .795, .035 ] ], [ "easeOutExpo", [ .19, 1, .22, 1 ] ], [ "easeInOutExpo", [ 1, 0, 0, 1 ] ], [ "easeInCirc", [ .6, .04, .98, .335 ] ], [ "easeOutCirc", [ .075, .82, .165, 1 ] ], [ "easeInOutCirc", [ .785, .135, .15, .86 ] ] ], function(e, t) {
                V.Easings[t[0]] = n.apply(null, t[1]);
            });
            var Y = V.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
                    transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
                    transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
                },
                Hooks: {
                    templates: {
                        textShadow: [ "Color X Y Blur", "black 0px 0px 0px" ],
                        boxShadow: [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                        clip: [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                        backgroundPosition: [ "X Y", "0% 0%" ],
                        transformOrigin: [ "X Y Z", "50% 50% 0px" ],
                        perspectiveOrigin: [ "X Y", "50% 50%" ]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < Y.Lists.colors.length; e++) Y.Hooks.templates[Y.Lists.colors[e]] = [ "Red Green Blue Alpha", "255 255 255 1" ];
                        var t, i, n;
                        if (d) for (t in Y.Hooks.templates) {
                            n = (i = Y.Hooks.templates[t])[0].split(" ");
                            var s = i[1].match(Y.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), s.push(s.shift()), Y.Hooks.templates[t] = [ n.join(" "), s.join(" ") ]);
                        }
                        for (t in Y.Hooks.templates) for (var e in n = (i = Y.Hooks.templates[t])[0].split(" ")) {
                            var o = t + n[e], a = e;
                            Y.Hooks.registered[o] = [ t, a ];
                        }
                    },
                    getRoot: function(e) {
                        var t = Y.Hooks.registered[e];
                        return t ? t[0] : e;
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return Y.RegEx.valueUnwrap.test(t) && (t = t.match(Y.Hooks.RegEx.valueUnwrap)[1]), 
                        Y.Values.isCSSNullValue(t) && (t = Y.Hooks.templates[e][1]), t;
                    },
                    extractValue: function(e, t) {
                        var i = Y.Hooks.registered[e];
                        if (i) {
                            var n = i[0], s = i[1];
                            return (t = Y.Hooks.cleanRootPropertyValue(n, t)).toString().match(Y.RegEx.valueSplit)[s];
                        }
                        return t;
                    },
                    injectValue: function(e, t, i) {
                        var n = Y.Hooks.registered[e];
                        if (n) {
                            var s, o = n[0], a = n[1];
                            return (s = (i = Y.Hooks.cleanRootPropertyValue(o, i)).toString().match(Y.RegEx.valueSplit))[a] = t, 
                            s.join(" ");
                        }
                        return i;
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, i) {
                            switch (e) {
                              case "name":
                                return "clip";

                              case "extract":
                                var n;
                                return Y.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(Y.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, 
                                n;

                              case "inject":
                                return "rect(" + i + ")";
                            }
                        },
                        opacity: function(e, t, i) {
                            if (d <= 8) switch (e) {
                              case "name":
                                return "filter";

                              case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n ? n[1] / 100 : 1;

                              case "inject":
                                return (t.style.zoom = 1) <= parseFloat(i) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")";
                            } else switch (e) {
                              case "name":
                                return "opacity";

                              case "extract":
                              case "inject":
                                return i;
                            }
                        }
                    },
                    register: function() {
                        d <= 9 || V.State.isGingerbread || (Y.Lists.transformsBase = Y.Lists.transformsBase.concat(Y.Lists.transforms3D));
                        for (var e = 0; e < Y.Lists.transformsBase.length; e++) !function() {
                            var s = Y.Lists.transformsBase[e];
                            Y.Normalizations.registered[s] = function(e, t, i) {
                                switch (e) {
                                  case "name":
                                    return "transform";

                                  case "extract":
                                    return F(t) === R || F(t).transformCache[s] === R ? /^scale/i.test(s) ? 1 : 0 : F(t).transformCache[s].replace(/[()]/g, "");

                                  case "inject":
                                    var n = !1;
                                    switch (s.substr(0, s.length - 1)) {
                                      case "translate":
                                        n = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                        break;

                                      case "scal":
                                      case "scale":
                                        V.State.isAndroid && F(t).transformCache[s] === R && i < 1 && (i = 1), n = !/(\d)$/i.test(i);
                                        break;

                                      case "skew":
                                        n = !/(deg|\d)$/i.test(i);
                                        break;

                                      case "rotate":
                                        n = !/(deg|\d)$/i.test(i);
                                    }
                                    return n || (F(t).transformCache[s] = "(" + i + ")"), F(t).transformCache[s];
                                }
                            };
                        }();
                        for (e = 0; e < Y.Lists.colors.length; e++) !function() {
                            var a = Y.Lists.colors[e];
                            Y.Normalizations.registered[a] = function(e, t, i) {
                                switch (e) {
                                  case "name":
                                    return a;

                                  case "extract":
                                    var n;
                                    if (Y.RegEx.wrappedValueAlreadyExtracted.test(i)) n = i; else {
                                        var s, o = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(i) ? s = o[i] !== R ? o[i] : o.black : Y.RegEx.isHex.test(i) ? s = "rgb(" + Y.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (s = o.black), 
                                        n = (s || i).toString().match(Y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                    }
                                    return d <= 8 || 3 !== n.split(" ").length || (n += " 1"), n;

                                  case "inject":
                                    return d <= 8 ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), 
                                    (d <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                                }
                            };
                        }();
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase();
                        });
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || V.State.isAndroid && !V.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                    },
                    prefixCheck: function(e) {
                        if (V.State.prefixMatches[e]) return [ V.State.prefixMatches[e], !0 ];
                        for (var t = [ "", "Webkit", "Moz", "ms", "O" ], i = 0, n = t.length; i < n; i++) {
                            var s;
                            if (s = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase();
                            }), N.isString(V.State.prefixElement.style[s])) return [ V.State.prefixMatches[e] = s, !0 ];
                        }
                        return [ e, !1 ];
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                            return t + t + i + i + n + n;
                        }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ] : [ 0, 0, 0 ];
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                    },
                    getDisplayType: function(e) {
                        var t = e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block";
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    }
                },
                getPropertyValue: function(e, t, i, c) {
                    function u(e, t) {
                        function i() {
                            o && Y.setPropertyValue(e, "display", "none");
                        }
                        var n = 0;
                        if (d <= 8) n = B.css(e, t); else {
                            var s, o = !1;
                            if (/^(width|height)$/.test(t) && 0 === Y.getPropertyValue(e, "display") && (o = !0, 
                            Y.setPropertyValue(e, "display", Y.Values.getDisplayType(e))), !c) {
                                if ("height" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var a = e.offsetHeight - (parseFloat(Y.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingBottom")) || 0);
                                    return i(), a;
                                }
                                if ("width" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var r = e.offsetWidth - (parseFloat(Y.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingRight")) || 0);
                                    return i(), r;
                                }
                            }
                            s = F(e) === R ? H.getComputedStyle(e, null) : F(e).computedStyle ? F(e).computedStyle : F(e).computedStyle = H.getComputedStyle(e, null), 
                            (d || V.State.isFirefox) && "borderColor" === t && (t = "borderTopColor"), ("" === (n = 9 === d && "filter" === t ? s.getPropertyValue(t) : s[t]) || null === n) && (n = e.style[t]), 
                            i();
                        }
                        if ("auto" === n && /^(top|right|bottom|left)$/i.test(t)) {
                            var l = u(e, "position");
                            ("fixed" === l || "absolute" === l && /top|left/i.test(t)) && (n = B(e).position()[t] + "px");
                        }
                        return n;
                    }
                    var n;
                    if (Y.Hooks.registered[t]) {
                        var s = t, o = Y.Hooks.getRoot(s);
                        i === R && (i = Y.getPropertyValue(e, Y.Names.prefixCheck(o)[0])), Y.Normalizations.registered[o] && (i = Y.Normalizations.registered[o]("extract", e, i)), 
                        n = Y.Hooks.extractValue(s, i);
                    } else if (Y.Normalizations.registered[t]) {
                        var a, r;
                        "transform" !== (a = Y.Normalizations.registered[t]("name", e)) && (r = u(e, Y.Names.prefixCheck(a)[0]), 
                        Y.Values.isCSSNullValue(r) && Y.Hooks.templates[t] && (r = Y.Hooks.templates[t][1])), 
                        n = Y.Normalizations.registered[t]("extract", e, r);
                    }
                    return /^[\d-]/.test(n) || (n = F(e) && F(e).isSVG && Y.Names.SVGAttribute(t) ? /^(height|width)$/i.test(t) ? e.getBBox()[t] : e.getAttribute(t) : u(e, Y.Names.prefixCheck(t)[0])), 
                    Y.Values.isCSSNullValue(n) && (n = 0), 2 <= V.debug && console.log("Get " + t + ": " + n), 
                    n;
                },
                setPropertyValue: function(e, t, i, n, s) {
                    var o = t;
                    if ("scroll" === t) s.container ? s.container["scroll" + s.direction] = i : "Left" === s.direction ? H.scrollTo(i, s.alternateValue) : H.scrollTo(s.alternateValue, i); else if (Y.Normalizations.registered[t] && "transform" === Y.Normalizations.registered[t]("name", e)) Y.Normalizations.registered[t]("inject", e, i), 
                    o = "transform", i = F(e).transformCache[t]; else {
                        if (Y.Hooks.registered[t]) {
                            var a = t, r = Y.Hooks.getRoot(t);
                            n = n || Y.getPropertyValue(e, r), i = Y.Hooks.injectValue(a, i, n), t = r;
                        }
                        if (Y.Normalizations.registered[t] && (i = Y.Normalizations.registered[t]("inject", e, i), 
                        t = Y.Normalizations.registered[t]("name", e)), o = Y.Names.prefixCheck(t)[0], d <= 8) try {
                            e.style[o] = i;
                        } catch (e) {
                            V.debug && console.log("Browser does not support [" + i + "] for [" + o + "]");
                        } else F(e) && F(e).isSVG && Y.Names.SVGAttribute(t) ? e.setAttribute(t, i) : e.style[o] = i;
                        2 <= V.debug && console.log("Set " + t + " (" + o + "): " + i);
                    }
                    return [ o, i ];
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(Y.getPropertyValue(t, e));
                    }
                    var i = "";
                    if ((d || V.State.isAndroid && !V.State.isChrome) && F(t).isSVG) {
                        var n = {
                            translate: [ e("translateX"), e("translateY") ],
                            skewX: [ e("skewX") ],
                            skewY: [ e("skewY") ],
                            scale: 1 !== e("scale") ? [ e("scale"), e("scale") ] : [ e("scaleX"), e("scaleY") ],
                            rotate: [ e("rotateZ"), 0, 0 ]
                        };
                        B.each(F(t).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), 
                            n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e]);
                        });
                    } else {
                        var s, o;
                        B.each(F(t).transformCache, function(e) {
                            return s = F(t).transformCache[e], "transformPerspective" === e ? (o = s, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), 
                            void (i += e + s + " "));
                        }), o && (i = "perspective" + o + " " + i);
                    }
                    Y.setPropertyValue(t, "transform", i);
                }
            };
            Y.Hooks.register(), Y.Normalizations.register(), V.hook = function(e, n, s) {
                var o = R;
                return e = f(e), B.each(e, function(e, t) {
                    if (F(t) === R && V.init(t), s === R) o === R && (o = V.CSS.getPropertyValue(t, n)); else {
                        var i = V.CSS.setPropertyValue(t, n, s);
                        "transform" === i[0] && V.CSS.flushTransformCache(t), o = i;
                    }
                }), o;
            };
            var g = function() {
                function e() {
                    return t ? A.promise || null : i;
                }
                var t, i, n, z, E, O, s = arguments[0] && (B.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || N.isString(arguments[0].properties));
                if (N.isWrapped(this) ? (t = !1, n = 0, i = z = this) : (t = !0, n = 1, z = s ? arguments[0].elements : arguments[0]), 
                z = f(z)) {
                    s ? (E = arguments[0].properties, O = arguments[0].options) : (E = arguments[n], 
                    O = arguments[n + 1]);
                    var P = z.length, I = 0;
                    if ("stop" !== E && !B.isPlainObject(O)) {
                        O = {};
                        for (var o = n + 1; o < arguments.length; o++) N.isArray(arguments[o]) || !/fast|normal|slow/i.test(arguments[o].toString()) && !/^\d/.test(arguments[o]) ? N.isString(arguments[o]) || N.isArray(arguments[o]) ? O.easing = arguments[o] : N.isFunction(arguments[o]) && (O.complete = arguments[o]) : O.duration = arguments[o];
                    }
                    var M, A = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (t && V.Promise && (A.promise = new V.Promise(function(e, t) {
                        A.resolver = e, A.rejecter = t;
                    })), E) {
                      case "scroll":
                        M = "scroll";
                        break;

                      case "reverse":
                        M = "reverse";
                        break;

                      case "stop":
                        B.each(z, function(e, t) {
                            F(t) && F(t).delayTimer && (clearTimeout(F(t).delayTimer.setTimeout), F(t).delayTimer.next && F(t).delayTimer.next(), 
                            delete F(t).delayTimer);
                        });
                        var a = [];
                        return B.each(V.State.calls, function(s, t) {
                            t && B.each(t[1], function(e, i) {
                                var n = N.isString(O) ? O : "";
                                return O !== R && t[2].queue !== n || void B.each(z, function(e, t) {
                                    t === i && (O !== R && (B.each(B.queue(t, n), function(e, t) {
                                        N.isFunction(t) && t(null, !0);
                                    }), B.queue(t, n, [])), F(t) && "" === n && B.each(F(t).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue;
                                    }), a.push(s));
                                });
                            });
                        }), B.each(a, function(e, t) {
                            _(t, !0);
                        }), A.promise && A.resolver(z), e();

                      default:
                        if (!B.isPlainObject(E) || N.isEmptyObject(E)) {
                            if (N.isString(E) && V.Sequences[E]) {
                                var r = (u = B.extend({}, O)).duration, l = u.delay || 0;
                                return !0 === u.backwards && (z = z.reverse()), B.each(z, function(e, t) {
                                    parseFloat(u.stagger) ? u.delay = l + parseFloat(u.stagger) * e : N.isFunction(u.stagger) && (u.delay = l + u.stagger.call(t, e, P)), 
                                    u.drag && (u.duration = parseFloat(r) || (/^(callout|transition)/.test(E) ? 1e3 : m), 
                                    u.duration = Math.max(u.duration * (u.backwards ? 1 - e / P : (e + 1) / P), .75 * u.duration, 200)), 
                                    V.Sequences[E].call(t, t, u || {}, e, P, z, A.promise ? A : R);
                                }), e();
                            }
                            var c = "Velocity: First argument (" + E + ") was not a property map, a known action, or a registered sequence. Aborting.";
                            return A.promise ? A.rejecter(new Error(c)) : console.log(c), e();
                        }
                        M = "start";
                    }
                    var u, d, L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, D = [];
                    if (B.each(z, function(e, t) {
                        N.isNode(t) && function() {
                            function i(e) {
                                function u(e, t) {
                                    var i = R, n = R, s = R;
                                    return N.isArray(e) ? (i = e[0], !N.isArray(e[1]) && /^[\d-]/.test(e[1]) || N.isFunction(e[1]) || Y.RegEx.isHex.test(e[1]) ? s = e[1] : (N.isString(e[1]) && !Y.RegEx.isHex.test(e[1]) || N.isArray(e[1])) && (n = t ? e[1] : W(e[1], k.duration), 
                                    e[2] !== R && (s = e[2]))) : i = e, t || (n = n || k.easing), N.isFunction(i) && (i = i.call(T, I, P)), 
                                    N.isFunction(s) && (s = s.call(T, I, P)), [ i || 0, n, s ];
                                }
                                function t(e, t) {
                                    var i, n;
                                    return n = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                        return i = e, "";
                                    }), i || (i = Y.Values.getUnitType(e)), [ n, i ];
                                }
                                function i() {
                                    var e = {
                                        myParent: T.parentNode || j.body,
                                        position: Y.getPropertyValue(T, "position"),
                                        fontSize: Y.getPropertyValue(T, "fontSize")
                                    }, t = e.position === L.lastPosition && e.myParent === L.lastParent, i = e.fontSize === L.lastFontSize;
                                    L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                                    var n = {};
                                    if (i && t) n.emToPx = L.lastEmToPx, n.percentToPxWidth = L.lastPercentToPxWidth, 
                                    n.percentToPxHeight = L.lastPercentToPxHeight; else {
                                        var s = F(T).isSVG ? j.createElementNS("http://www.w3.org/2000/svg", "rect") : j.createElement("div");
                                        V.init(s), e.myParent.appendChild(s), B.each([ "overflow", "overflowX", "overflowY" ], function(e, t) {
                                            V.CSS.setPropertyValue(s, t, "hidden");
                                        }), V.CSS.setPropertyValue(s, "position", e.position), V.CSS.setPropertyValue(s, "fontSize", e.fontSize), 
                                        V.CSS.setPropertyValue(s, "boxSizing", "content-box"), B.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(e, t) {
                                            V.CSS.setPropertyValue(s, t, "100%");
                                        }), V.CSS.setPropertyValue(s, "paddingLeft", "100em"), n.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(Y.getPropertyValue(s, "width", null, !0)) || 1) / 100, 
                                        n.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(Y.getPropertyValue(s, "height", null, !0)) || 1) / 100, 
                                        n.emToPx = L.lastEmToPx = (parseFloat(Y.getPropertyValue(s, "paddingLeft")) || 1) / 100, 
                                        e.myParent.removeChild(s);
                                    }
                                    return null === L.remToPx && (L.remToPx = parseFloat(Y.getPropertyValue(j.body, "fontSize")) || 16), 
                                    null === L.vwToPx && (L.vwToPx = parseFloat(H.innerWidth) / 100, L.vhToPx = parseFloat(H.innerHeight) / 100), 
                                    n.remToPx = L.remToPx, n.vwToPx = L.vwToPx, n.vhToPx = L.vhToPx, 1 <= V.debug && console.log("Unit ratios: " + JSON.stringify(n), T), 
                                    n;
                                }
                                if (k.begin && 0 === I) try {
                                    k.begin.call(z, z);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 1);
                                }
                                if ("scroll" === M) {
                                    var n, s, o, a = /^x$/i.test(k.axis) ? "Left" : "Top", r = parseFloat(k.offset) || 0;
                                    k.container ? N.isWrapped(k.container) || N.isNode(k.container) ? (k.container = k.container[0] || k.container, 
                                    o = (n = k.container["scroll" + a]) + B(T).position()[a.toLowerCase()] + r) : k.container = null : (n = V.State.scrollAnchor[V.State["scrollProperty" + a]], 
                                    s = V.State.scrollAnchor[V.State["scrollProperty" + ("Left" === a ? "Top" : "Left")]], 
                                    o = B(T).offset()[a.toLowerCase()] + r), S = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: n,
                                            currentValue: n,
                                            endValue: o,
                                            unitType: "",
                                            easing: k.easing,
                                            scrollData: {
                                                container: k.container,
                                                direction: a,
                                                alternateValue: s
                                            }
                                        },
                                        element: T
                                    }, V.debug && console.log("tweensContainer (scroll): ", S.scroll, T);
                                } else if ("reverse" === M) {
                                    if (!F(T).tweensContainer) return void B.dequeue(T, k.queue);
                                    "none" === F(T).opts.display && (F(T).opts.display = "auto"), "hidden" === F(T).opts.visibility && (F(T).opts.visibility = "visible"), 
                                    F(T).opts.loop = !1, F(T).opts.begin = null, F(T).opts.complete = null, O.easing || delete k.easing, 
                                    O.duration || delete k.duration, k = B.extend({}, F(T).opts, k);
                                    var l = B.extend(!0, {}, F(T).tweensContainer);
                                    for (var c in l) if ("element" !== c) {
                                        var d = l[c].startValue;
                                        l[c].startValue = l[c].currentValue = l[c].endValue, l[c].endValue = d, N.isEmptyObject(O) || (l[c].easing = k.easing), 
                                        V.debug && console.log("reverse tweensContainer (" + c + "): " + JSON.stringify(l[c]), T);
                                    }
                                    S = l;
                                } else if ("start" === M) {
                                    for (var h in F(T).tweensContainer && !0 === F(T).isAnimating && (l = F(T).tweensContainer), 
                                    B.each(E, function(e, t) {
                                        if (RegExp("^" + Y.Lists.colors.join("$|^") + "$").test(e)) {
                                            var i = u(t, !0), n = i[0], s = i[1], o = i[2];
                                            if (Y.RegEx.isHex.test(n)) {
                                                for (var a = [ "Red", "Green", "Blue" ], r = Y.Values.hexToRgb(n), l = o ? Y.Values.hexToRgb(o) : R, c = 0; c < a.length; c++) E[e + a[c]] = [ r[c], s, l ? l[c] : l ];
                                                delete E[e];
                                            }
                                        }
                                    }), E) {
                                        var p = u(E[h]), f = p[0], m = p[1], g = p[2];
                                        h = Y.Names.camelCase(h);
                                        var v = Y.Hooks.getRoot(h), y = !1;
                                        if (F(T).isSVG || !1 !== Y.Names.prefixCheck(v)[1] || Y.Normalizations.registered[v] !== R) {
                                            (k.display !== R && null !== k.display && "none" !== k.display || k.visibility && "hidden" !== k.visibility) && /opacity|filter/.test(h) && !g && 0 !== f && (g = 0), 
                                            k._cacheValues && l && l[h] ? (g === R && (g = l[h].endValue + l[h].unitType), y = F(T).rootPropertyValueCache[v]) : Y.Hooks.registered[h] ? g === R ? (y = Y.getPropertyValue(T, v), 
                                            g = Y.getPropertyValue(T, h, y)) : y = Y.Hooks.templates[v][1] : g === R && (g = Y.getPropertyValue(T, h));
                                            var w, b, _, x = !1;
                                            if (g = (w = t(h, g))[0], _ = w[1], f = (w = t(h, f))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return x = t, "";
                                            }), b = w[1], g = parseFloat(g) || 0, f = parseFloat(f) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(h) ? (f /= 100, 
                                            b = "em") : /^scale/.test(h) ? (f /= 100, b = "") : /(Red|Green|Blue)$/i.test(h) && (f = f / 100 * 255, 
                                            b = "")), /[\/*]/.test(x)) b = _; else if (_ !== b && 0 !== g) if (0 === f) b = _; else {
                                                $ = $ || i();
                                                var C = /margin|padding|left|right|width|text|word|letter/i.test(h) || /X$/.test(h) || "x" === h ? "x" : "y";
                                                switch (_) {
                                                  case "%":
                                                    g *= "x" === C ? $.percentToPxWidth : $.percentToPxHeight;
                                                    break;

                                                  case "px":
                                                    break;

                                                  default:
                                                    g *= $[_ + "ToPx"];
                                                }
                                                switch (b) {
                                                  case "%":
                                                    g *= 1 / ("x" === C ? $.percentToPxWidth : $.percentToPxHeight);
                                                    break;

                                                  case "px":
                                                    break;

                                                  default:
                                                    g *= 1 / $[b + "ToPx"];
                                                }
                                            }
                                            switch (x) {
                                              case "+":
                                                f = g + f;
                                                break;

                                              case "-":
                                                f = g - f;
                                                break;

                                              case "*":
                                                f *= g;
                                                break;

                                              case "/":
                                                f = g / f;
                                            }
                                            S[h] = {
                                                rootPropertyValue: y,
                                                startValue: g,
                                                currentValue: g,
                                                endValue: f,
                                                unitType: b,
                                                easing: m
                                            }, V.debug && console.log("tweensContainer (" + h + "): " + JSON.stringify(S[h]), T);
                                        } else V.debug && console.log("Skipping [" + v + "] due to a lack of browser support.");
                                    }
                                    S.element = T;
                                }
                                S.element && (Y.Values.addClass(T, "velocity-animating"), D.push(S), "" === k.queue && (F(T).tweensContainer = S, 
                                F(T).opts = k), F(T).isAnimating = !0, I === P - 1 ? (1e4 < V.State.calls.length && (V.State.calls = function(e) {
                                    for (var t = -1, i = e ? e.length : 0, n = []; ++t < i; ) {
                                        var s = e[t];
                                        s && n.push(s);
                                    }
                                    return n;
                                }(V.State.calls)), V.State.calls.push([ D, z, k, null, A.resolver ]), !1 === V.State.isTicking && (V.State.isTicking = !0, 
                                q())) : I++);
                            }
                            var $, T = this, k = B.extend({}, V.defaults, O), S = {};
                            if (F(T) === R && V.init(T), parseFloat(k.delay) && !1 !== k.queue && B.queue(T, k.queue, function(e) {
                                V.velocityQueueEntryFlag = !0, F(T).delayTimer = {
                                    setTimeout: setTimeout(e, parseFloat(k.delay)),
                                    next: e
                                };
                            }), !0 === V.mock) k.duration = 1; else switch (k.duration.toString().toLowerCase()) {
                              case "fast":
                                k.duration = 200;
                                break;

                              case "normal":
                                k.duration = m;
                                break;

                              case "slow":
                                k.duration = 600;
                                break;

                              default:
                                k.duration = parseFloat(k.duration) || 1;
                            }
                            k.easing = W(k.easing, k.duration), k.begin && !N.isFunction(k.begin) && (k.begin = null), 
                            k.progress && !N.isFunction(k.progress) && (k.progress = null), k.complete && !N.isFunction(k.complete) && (k.complete = null), 
                            k.display !== R && null !== k.display && (k.display = k.display.toString().toLowerCase(), 
                            "auto" === k.display && (k.display = V.CSS.Values.getDisplayType(T))), k.visibility && (k.visibility = k.visibility.toString().toLowerCase()), 
                            k.mobileHA = k.mobileHA && V.State.isMobile && !V.State.isGingerbread, !1 === k.queue ? k.delay ? setTimeout(i, k.delay) : i() : B.queue(T, k.queue, function(e, t) {
                                return !0 === t ? (A.promise && A.resolver(z), !0) : (V.velocityQueueEntryFlag = !0, 
                                void i());
                            }), "" !== k.queue && "fx" !== k.queue || "inprogress" === B.queue(T)[0] || B.dequeue(T);
                        }.call(t);
                    }), (u = B.extend({}, V.defaults, O)).loop = parseInt(u.loop), d = 2 * u.loop - 1, 
                    u.loop) for (var h = 0; h < d; h++) {
                        var p = {
                            delay: u.delay
                        };
                        h === d - 1 && (p.display = u.display, p.visibility = u.visibility, p.complete = u.complete), 
                        g(z, "reverse", p);
                    }
                    return e();
                }
            };
            (V = B.extend(g, V)).animate = g;
            var x = H.requestAnimationFrame || t;
            return V.State.isMobile || j.hidden === R || j.addEventListener("visibilitychange", function() {
                j.hidden ? (x = function(e) {
                    return setTimeout(function() {
                        e(!0);
                    }, 16);
                }, q()) : x = H.requestAnimationFrame || t;
            }), e.Velocity = V, e !== H && (e.fn.velocity = g, e.fn.velocity.defaults = V.defaults), 
            B.each([ "Down", "Up" ], function(e, d) {
                V.Sequences["slide" + d] = function(i, e, t, n, s, o) {
                    var a = B.extend({}, e), r = a.begin, l = a.complete, c = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    }, u = {};
                    a.display === R && (a.display = "Down" === d ? "inline" === V.CSS.Values.getDisplayType(i) ? "inline-block" : "block" : "none"), 
                    a.begin = function() {
                        for (var e in r && r.call(s, s), u.overflow = i.style.overflow, i.style.overflow = "hidden", 
                        c) {
                            u[e] = i.style[e];
                            var t = V.CSS.getPropertyValue(i, e);
                            c[e] = "Down" === d ? [ t, 0 ] : [ 0, t ];
                        }
                    }, a.complete = function() {
                        for (var e in u) i.style[e] = u[e];
                        l && l.call(s, s), o && o.resolver(s);
                    }, V(i, c, a);
                };
            }), B.each([ "In", "Out" ], function(e, c) {
                V.Sequences["fade" + c] = function(e, t, i, n, s, o) {
                    var a = B.extend({}, t), r = {
                        opacity: "In" === c ? 1 : 0
                    }, l = a.complete;
                    a.complete = i !== n - 1 ? a.begin = null : function() {
                        l && l.call(s, s), o && o.resolver(s);
                    }, a.display === R && (a.display = "In" === c ? "auto" : "none"), V(this, r, a);
                };
            }), V;
        }
        jQuery.fn.velocity = jQuery.fn.animate;
    }(window.jQuery || window.Zepto || window, window, document);
}), function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.salvattore = t();
}(this, function() {
    return window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var i, n = document.createElement("style"), e = document.getElementsByTagName("script")[0];
            n.type = "text/css", n.id = "matchmediajs-test", e.parentNode.insertBefore(n, e), 
            i = "getComputedStyle" in window && window.getComputedStyle(n, null) || n.currentStyle, 
            t = {
                matchMedium: function(e) {
                    var t = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return n.styleSheet ? n.styleSheet.cssText = t : n.textContent = t, "1px" === i.width;
                }
            };
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            };
        };
    }()), function() {
        "use strict";
        if (window.matchMedia && window.matchMedia("all").addListener) return;
        var r = window.matchMedia, s = r("only all").matches, o = !1, t = 0, l = [], a = function(e) {
            clearTimeout(t), t = setTimeout(function() {
                for (var e = 0, t = l.length; e < t; e++) {
                    var i = l[e].mql, n = l[e].listeners || [], s = r(i.media).matches;
                    if (s !== i.matches) {
                        i.matches = s;
                        for (var o = 0, a = n.length; o < a; o++) n[o].call(window, i);
                    }
                }
            }, 30);
        };
        window.matchMedia = function(e) {
            var t = r(e), n = [], i = 0;
            return t.addListener = function(e) {
                s && (o || (o = !0, window.addEventListener("resize", a, !0)), 0 === i && (i = l.push({
                    mql: t,
                    listeners: n
                })), n.push(e));
            }, t.removeListener = function(e) {
                for (var t = 0, i = n.length; t < i; t++) n[t] === e && n.splice(t, 1);
            }, t;
        };
    }(), function() {
        "use strict";
        for (var o = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
        window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var i = new Date().getTime(), n = Math.max(0, 16 - (i - o)), s = window.setTimeout(function() {
                e(i + n);
            }, n);
            return o = i + n, s;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e);
        });
    }(), "function" != typeof window.CustomEvent && function() {
        "use strict";
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e;
    }(), function(r, c, e) {
        "use strict";
        var u = {}, n = [], s = [], o = [], d = function(e, t, i) {
            e.dataset ? e.dataset[t] = i : e.setAttribute("data-" + t, i);
        };
        return u.obtainGridSettings = function(e) {
            var t = r.getComputedStyle(e, ":before").getPropertyValue("content").slice(1, -1), i = t.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/), n = 1, s = [];
            return i ? (n = i[1], s = (s = i[2]) ? s.split(".") : [ "column" ]) : (i = t.match(/^\s*\.(.+)\s+(\d+)\s*$/)) && (s = i[1], 
            (n = i[2]) && (n = n.split("."))), {
                numberOfColumns: n,
                columnClasses: s
            };
        }, u.addColumns = function(e, t) {
            for (var i, n = u.obtainGridSettings(e), s = n.numberOfColumns, o = n.columnClasses, a = new Array(+s), r = c.createDocumentFragment(), l = s; 0 != l--; ) i = "[data-columns] > *:nth-child(" + s + "n-" + l + ")", 
            a.push(t.querySelectorAll(i));
            a.forEach(function(e) {
                var t = c.createElement("div"), i = c.createDocumentFragment();
                t.className = o.join(" "), Array.prototype.forEach.call(e, function(e) {
                    i.appendChild(e);
                }), t.appendChild(i), r.appendChild(t);
            }), e.appendChild(r), d(e, "columns", s);
        }, u.removeColumns = function(e) {
            var t = c.createRange();
            t.selectNodeContents(e);
            var i = Array.prototype.filter.call(t.extractContents().childNodes, function(e) {
                return e instanceof r.HTMLElement;
            }), n = i.length, s = i[0].childNodes.length, o = new Array(s * n);
            Array.prototype.forEach.call(i, function(e, i) {
                Array.prototype.forEach.call(e.children, function(e, t) {
                    o[t * n + i] = e;
                });
            });
            var a = c.createElement("div");
            return d(a, "columns", 0), o.filter(function(e) {
                return !!e;
            }).forEach(function(e) {
                a.appendChild(e);
            }), a;
        }, u.recreateColumns = function(t) {
            r.requestAnimationFrame(function() {
                u.addColumns(t, u.removeColumns(t));
                var e = new CustomEvent("columnsChange");
                t.dispatchEvent(e);
            });
        }, u.mediaQueryChange = function(e) {
            e.matches && Array.prototype.forEach.call(n, u.recreateColumns);
        }, u.getCSSRules = function(e) {
            var t;
            try {
                t = e.sheet.cssRules || e.sheet.rules;
            } catch (e) {
                return [];
            }
            return t || [];
        }, u.getStylesheets = function() {
            var i = Array.prototype.slice.call(c.querySelectorAll("style"));
            return i.forEach(function(e, t) {
                "text/css" !== e.type && "" !== e.type && i.splice(t, 1);
            }), Array.prototype.concat.call(i, Array.prototype.slice.call(c.querySelectorAll("link[rel='stylesheet']")));
        }, u.mediaRuleHasColumnsSelector = function(e) {
            var t, i;
            try {
                t = e.length;
            } catch (e) {
                t = 0;
            }
            for (;t--; ) if ((i = e[t]).selectorText && i.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
            return !1;
        }, u.scanMediaQueries = function() {
            var t = [];
            if (r.matchMedia) {
                u.getStylesheets().forEach(function(e) {
                    Array.prototype.forEach.call(u.getCSSRules(e), function(e) {
                        try {
                            e.media && e.cssRules && u.mediaRuleHasColumnsSelector(e.cssRules) && t.push(e);
                        } catch (e) {}
                    });
                });
                var i = s.filter(function(e) {
                    return -1 === t.indexOf(e);
                });
                o.filter(function(e) {
                    return -1 !== i.indexOf(e.rule);
                }).forEach(function(e) {
                    e.mql.removeListener(u.mediaQueryChange);
                }), o = o.filter(function(e) {
                    return -1 === i.indexOf(e.rule);
                }), t.filter(function(e) {
                    return -1 == s.indexOf(e);
                }).forEach(function(e) {
                    var t = r.matchMedia(e.media.mediaText);
                    t.addListener(u.mediaQueryChange), o.push({
                        rule: e,
                        mql: t
                    });
                }), s.length = 0, s = t;
            }
        }, u.rescanMediaQueries = function() {
            u.scanMediaQueries(), Array.prototype.forEach.call(n, u.recreateColumns);
        }, u.nextElementColumnIndex = function(e, t) {
            var i, n, s = e.children, o = s.length, a = 0, r = 0;
            for (n = 0; n < o; n++) i = s[n].children.length + (t[n].children || t[n].childNodes).length, 
            0 === a && (a = i), i < a && (r = n, a = i);
            return r;
        }, u.createFragmentsList = function(e) {
            for (var t = new Array(e), i = 0; i !== e; ) t[i] = c.createDocumentFragment(), 
            i++;
            return t;
        }, u.appendElements = function(i, e) {
            var t = i.children, n = t.length, s = u.createFragmentsList(n);
            Array.prototype.forEach.call(e, function(e) {
                var t = u.nextElementColumnIndex(i, s);
                s[t].appendChild(e);
            }), Array.prototype.forEach.call(t, function(e, t) {
                e.appendChild(s[t]);
            });
        }, u.prependElements = function(e, t) {
            var i = e.children, n = i.length, s = u.createFragmentsList(n), o = n - 1;
            t.forEach(function(e) {
                var t = s[o];
                t.insertBefore(e, t.firstChild), 0 === o ? o = n - 1 : o--;
            }), Array.prototype.forEach.call(i, function(e, t) {
                e.insertBefore(s[t], e.firstChild);
            });
            for (var a = c.createDocumentFragment(), r = t.length % n; 0 != r--; ) a.appendChild(e.lastChild);
            e.insertBefore(a, e.firstChild);
        }, u.registerGrid = function(e) {
            if ("none" !== r.getComputedStyle(e).display) {
                var t = c.createRange();
                t.selectNodeContents(e);
                var i = c.createElement("div");
                i.appendChild(t.extractContents()), d(i, "columns", 0), u.addColumns(e, i), n.push(e);
            }
        }, u.init = function() {
            var e = c.createElement("style");
            e.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}", 
            c.head.appendChild(e);
            var t = c.querySelectorAll("[data-columns]");
            Array.prototype.forEach.call(t, u.registerGrid), u.scanMediaQueries();
        }, u.init(), {
            appendElements: u.appendElements,
            prependElements: u.prependElements,
            registerGrid: u.registerGrid,
            recreateColumns: u.recreateColumns,
            rescanMediaQueries: u.rescanMediaQueries,
            init: u.init,
            append_elements: u.appendElements,
            prepend_elements: u.prependElements,
            register_grid: u.registerGrid,
            recreate_columns: u.recreateColumns,
            rescan_media_queries: u.rescanMediaQueries
        };
    }(window, window.document);
}), jQuery(document).ready(function(r) {
    function e(e) {
        var t = r(e).attr("data-src");
        r(e).one("load", function() {}).each(function() {
            r(e).attr("src", t), r(e).css("opacity", "1");
        });
    }
    function s() {
        return 1024 < r(window).innerWidth() ? (l = 3, r(".blog-isotop-container").css({
            margin: "0 -1.5%"
        })) : r(window).innerWidth() <= 640 ? (l = 1, r(".blog-isotop-container").css({
            margin: "0 -30px"
        })) : (l = 2, r(".blog-isotop-container").css({
            margin: "0 -1.5%"
        })), 0 < (a = r(".blog-isotop-container").width()) % l && (a += l - a % l), r(".blog-isotope").css("width", a), 
        l;
    }
    function o() {
        return d = 1584 < r(window).innerWidth() ? 5 : r(window).innerWidth() <= 480 ? 1 : r(window).innerWidth() <= 901 ? 2 : r(window).innerWidth() <= 1248 ? 3 : 4, 
        0 < r(".items_per_row_3").length && 1248 < r(window).innerWidth() && (d = 3), 0 < r(".items_per_row_4").length && 1584 < r(window).innerWidth() && (d = 4), 
        0 < (u = r(".portfolio-isotope-container").width()) % d && (u += d - u % d), r(".portfolio-isotope").css("width", u), 
        d;
    }
    r(window).innerWidth();
    r(".main-navigation > ul > .menu-item").mouseenter(function() {
        if (0 < r(this).children(".sub-menu").length) {
            var e = r(this).children(".sub-menu"), t = parseInt(r(window).outerWidth()) - parseInt(e.outerWidth()) - parseInt(e.offset().left);
            t < 0 && e.css("left", t - 30 + "px");
        }
    }), r(".woocommerce-tabs .panel:first-child").addClass("current"), r(".woocommerce-tabs ul.tabs li a").off("click").on("click", function() {
        var e = r(this), t = e.attr("href");
        return e.parent().siblings().removeClass("active").end().addClass("active"), r(".woocommerce-tabs").find(t).siblings(".panel").filter(":visible").fadeOut(500, function() {
            r(".woocommerce-tabs").find(t).siblings(".panel").removeClass("current"), r(".woocommerce-tabs").find(t).addClass("current").fadeIn(500);
        }), !1;
    }), r(document).on("click", ".site-search .close-button", function() {
        r(document).find("#offCanvasTop1").removeAttr("style");
    }), r(".add_to_cart_button").one("click", function() {
        var t, i, e = r(this);
        t = (t = e.attr("class")).replace("add_to_cart_button", ""), i = e.attr("style"), 
        e.parent().on("DOMNodeInserted", function(e) {
            e.stopPropagation(), r(e.target).is(".added_to_cart") && (r(e.target).addClass(t).removeClass("added_to_cart").addClass("added_to_cart_button"), 
            r(e.target).attr("style", i));
        });
    }), r.fn.visible = function(e) {
        var t = r(this), i = r(window), n = i.scrollTop(), s = n + i.height(), o = t.offset().top, a = o + t.height();
        return (!0 === e ? o : a) <= s && n <= (!0 === e ? a : o);
    }, r("section.related").each(function(e, t) {
        r(t).visible(!0) && r(t).addClass("on_screen");
    }), r(".nano").nanoScroller(), r(".mobile-navigation .menu-item-has-children .sub-menu").before('<div class="more"><span class="spk-icon-down-small"></span></div>'), 
    r(".mobile-navigation").on("click", ".more", function(e) {
        e.stopPropagation();
        var t = r(this).parent().find(".sub-menu");
        r.each(t, function(e, t) {
            r(t).find(".sub-menu").addClass("open"), r(t).find(".more").remove();
        }), r(this).parent().toggleClass("current").children(".sub-menu").toggleClass("open"), 
        r(this).parent().find(".more").html('<span class="spk-icon-down-small"></span>' == r(this).parent().find(".more").html() ? '<span class="spk-icon-up-small"></span>' : '<span class="spk-icon-down-small"></span>'), 
        r(".nano").nanoScroller();
    }), r(".mobile-navigation").on("click", "a", function(e) {
        console.log(r(this).attr("href").indexOf("#")), -1 < r(this).attr("href").indexOf("#") && r("#offCanvasRight1").foundation("close");
    }), r("#products-grid li img").each(function() {
        e(this);
    }), r(".related.products li img").each(function() {
        e(this);
    }), r(".upsells.products li img").each(function() {
        e(this);
    }), r(".add_to_cart_button").on("click", function() {
        r(this).parents("li.animate").addClass("product_added_to_cart");
    }), r(".woocommerce-review-link").off("click").on("click", function() {
        r(".tabs li a").each(function() {
            "#tab-reviews" == r(this).attr("href") && r(this).trigger("click");
        });
        var e = 0;
        0 < r("#wpadminbar").length && (e += r("#wpadminbar").outerHeight()), 0 < r(".getbowtied_theme_explorer_wrapper").length && r(".getbowtied_theme_explorer_wrapper").is("visible") && (e += r(".getbowtied_theme_explorer_wrapper").outerHeight());
        var t = r(".woocommerce-tabs").offset().top - e;
        return r("html, body").animate({
            scrollTop: t
        }, 1e3), !1;
    }), r(".add_to_wishlist").on("click", function() {
        r(this).parents(".yith-wcwl-add-button").addClass("show_overlay");
    }), r(".account-tab-list").on("click", ".account-tab-link", function() {
        if (r(".account-tab-link").hasClass("registration_disabled")) return !1;
        var e = r(this), t = e.attr("href");
        return e.parent().siblings().find(".account-tab-link").removeClass("current"), e.addClass("current"), 
        r(".account-forms").find(r(t)).siblings().stop().fadeOut(function() {
            r(".account-forms").find(r(t)).fadeIn();
        }), !1;
    }), r(".account-tab-link-register").on("click", function() {
        return r(".login-form").stop().fadeOut(function() {
            r(".register-form").fadeIn();
        }), !1;
    }), r(".account-tab-link-login").on("click", function() {
        return r(".register-form").stop().fadeOut(function() {
            r(".login-form").fadeIn();
        }), !1;
    });
    var t, i;
    r(window).width();
    if (1 != getbowtied_scripts_vars.product_lightbox && 1 != getbowtied_scripts_vars.product_gallery_zoom && r(".product_layout_classic .product-images-wrapper .product_images .swiper-slide a").css({
        cursor: "default"
    }), 1 != getbowtied_scripts_vars.product_lightbox && r(".product-images-layout .fresco, .product-images-layout-mobile .fresco, .woocommerce-product-gallery__wrapper .fresco").on("click", function() {
        return !1;
    }), r(".gallery").each(function() {
        var t = r(this);
        t.find(".gallery-item").each(function() {
            var e = r(this);
            e.find(".fresco").attr("data-fresco-group", t.attr("id")), 0 < e.find(".gallery-caption").length && e.find(".fresco").attr("data-fresco-caption", e.find(".gallery-caption").text());
        });
    }), 1023 < r(window).innerWidth() && r(".orderby, .big-select").select2({
        allowClear: !0,
        minimumResultsForSearch: 1 / 0
    }), r(".gallery-item").each(function() {
        var e = r(this);
        0 < e.find(".gallery-caption").length && e.append('<span class="gallery-caption-trigger">i</span>');
    }), r(".gallery-caption-trigger").on("mouseenter", function() {
        r(this).siblings(".gallery-caption").addClass("show");
    }), r(".gallery-caption-trigger").on("mouseleave", function() {
        r(this).siblings(".gallery-caption").removeClass("show");
    }), r(".trigger-footer-widget").on("click", function() {
        var e = r(this).parent();
        e.fadeOut("1000", function() {
            e.remove(), r(".site-footer-widget-area").fadeIn();
        });
    }), r(".blog-isotop-container").length) {
        var n, a, l;
        h = r(".filters-group .is-checked").attr("data-filter"), l = s(), s();
        var c = function() {
            setTimeout(function() {
                r(".blog-post").removeClass("hidden");
            }, 200);
        };
        (t = imagesLoaded(r(".blog-isotope"))).on("done", function() {
            n = r(".blog-isotope").isotope({
                itemSelector: ".blog-post",
                masonry: {
                    columnWidth: ".grid-sizer"
                }
            }), c();
        }), t.on("fail", function() {
            n = r(".blog-isotope").isotope({
                itemSelector: ".blog-post",
                masonry: {
                    columnWidth: ".grid-sizer"
                }
            }), c();
        }), r(".filters-group").on("click", "filter-item", function() {
            h = r(this).attr("data-filter"), n.isotope({
                filter: h
            });
        });
    }
    if (r(".hover-effect-text").each(function() {
        var e = r(this);
        e.css("bottom", -e.outerHeight()).attr("data-height", e.outerHeight());
    }), r(".hover-effect-link").mouseenter(function() {
        var e = r(this);
        if (!e.find(".hover-effect-text").is(":empty")) {
            var t = e.find(".hover-effect-text").outerHeight();
            e.find(".hover-effect-title").css("bottom", t), e.find(".hover-effect-text").css("bottom", 0);
        }
    }), r(".hover-effect-link").mouseleave(function() {
        var e = r(this);
        if (!e.find(".hover-effect-text").is(":empty")) {
            var t = e.find(".hover-effect-text").attr("data-height");
            e.find(".hover-effect-title").css("bottom", 28), e.find(".hover-effect-text").css("bottom", -t);
        }
    }), r(".portfolio-isotope-container").length) {
        var u, d, h;
        h = r(".filters-group .is-checked").attr("data-filter"), d = o(), o();
        var p = function() {
            setTimeout(function() {
                r(".portfolio-box").removeClass("hidden");
            }, 200);
        };
        (i = imagesLoaded(r(".portfolio-isotope"))).on("done", function() {
            r(".portfolio-isotope").isotope({
                itemSelector: ".portfolio-box",
                masonry: {
                    columnWidth: ".portfolio-grid-sizer"
                }
            }), p();
        }), i.on("fail", function() {
            portfolio_wrapper_inner = r(".portfolio-isotope").isotope({
                itemSelector: ".portfolio-box",
                masonry: {
                    columnWidth: ".portfolio-grid-sizer"
                }
            }), p();
        }), r(".filters-group").on("click", ".filter-item", function() {
            h = r(this).attr("data-filter"), r(this).parents(".portfolio-filters").siblings(".portfolio-isotope").isotope({
                filter: h
            });
        });
    }
    if (r(".topbar-language-switcher").change(function() {
        window.location = r(this).val();
    }), r(window).load(function() {
        setTimeout(function() {
            r(".product_thumbnail.with_second_image").css("background-size", "cover"), r(".product_thumbnail.with_second_image").addClass("second_image_loaded");
        }, 300), 1024 < r(window).outerWidth() && r.stellar({
            horizontalScrolling: !1,
            responsive: !0
        }), setTimeout(function() {
            r(".parallax, .single-post-header-bkg").addClass("loaded");
        }, 150);
    }), r(window).resize(function() {
        function e() {
            n && clearTimeout(n), n = setTimeout(function() {
                r(this).trigger("onEndResizingIsotope");
            }, 100);
        }
        var t, i;
        (r(".site-search-form-wrapper-inner, .site-search .widget_search .search-form").css("margin-left", -r(window).width() / 4), 
        r(".main-navigation > ul > .menu-item > .sub-menu").css("left", "-15px"), r(".blog-isotop-container").length) && (s(), 
        t = s(), l != t && (r(".filters-group .filter-item").each(function() {
            r(this).attr("data-filter") == h && r(this).trigger("click");
        }), l = t, e()));
        r(".portfolio-isotope-container").length && (o(), i = o(), d != i && (r(".filters-group .filter-item").each(function() {
            r(this).attr("data-filter") == h && r(this).trigger("click");
        }), d = i, e()));
        var n = this.resizeTO;
    }), r(window).bind("onEndResizingIsotope", function() {
        console.log("resizeend"), r(".filters-group .filter-item").each(function() {
            r(this).attr("data-filter") == h && (r(this).trigger("click"), console.log("trigger resize"));
        });
    }), r(window).scroll(function() {
        0 < r(this).scrollTop() ? r("#page_wrapper.sticky_header .top-headers-wrapper").addClass("on_page_scroll") : r("#page_wrapper.sticky_header .top-headers-wrapper").removeClass("on_page_scroll"), 
        640 < r(window).innerWidth() && r(".products li").each(function(e, t) {
            r(t).visible(!0) && r(t).addClass("animate");
        }), r("section.related, #site-footer").each(function(e, t) {
            r(t).visible(!0) ? r(t).addClass("on_screen") : r(t).removeClass("on_screen");
        }), 1024 < r(window).width() && r(".single-post-header-overlay").css("opacity", .3 + r(window).scrollTop() / (1.4 * r(window).height()));
    }), r("body").hasClass("woocommerce-wishlist") && r("td.wishlist-empty").length && r("h1.page-title").hide(), 
    r(".widget_layered_nav span.count, .widget_product_categories span.count").each(function() {
        var e = r(this).html();
        e = e.substring(1, e.length - 1), r(this).html(e);
    }), r(".widget_rating_filter ul li a").each(function() {
        var e = r(this).contents().filter(function() {
            return 3 == this.nodeType;
        })[0].nodeValue;
        r(this).contents().filter(function() {
            return 3 == this.nodeType;
        })[0].nodeValue = "", e = e.slice(2, -1), r(this).append('<span class="count">' + e + "</span>");
    }), 0 < "form#register".length) {
        var f = window.location.hash;
        f && (r(".account-tab-link").removeClass("current"), r('a[href="' + f + '"]').addClass("current"), 
        f = f.substring(1), r(".account-forms > form").hide(), r("form#" + f).show());
    }
    var m = r(".cd-top");
    r(window).scroll(function() {
        300 < r(this).scrollTop() ? m.addClass("cd-is-visible") : m.removeClass("cd-is-visible cd-fade-out"), 
        1200 < r(this).scrollTop() && m.addClass("cd-fade-out");
    }), m.on("click", function(e) {
        e.preventDefault(), r("body,html").animate({
            scrollTop: 0
        }, 700);
    });
}), jQuery(function(t) {
    "use strict";
    var e = t(".cd-top");
    t(window).scroll(function() {
        300 < t(this).scrollTop() ? e.addClass("cd-is-visible") : e.removeClass("cd-is-visible cd-fade-out"), 
        1200 < t(this).scrollTop() && e.addClass("cd-fade-out");
    }), e.on("click", function(e) {
        e.preventDefault(), t("body,html").animate({
            scrollTop: 0
        }, 700);
    });
}), jQuery(document).ready(function(e) {
    0 < e(".blog-sidebar").length && e(".blog-sidebar").height() > e(".blog-isotop-container").height() && e(".blog-isotop-container").height(e(".blog-sidebar").height() + 100), 
    e(window).resize(function() {
        0 < e(".blog-sidebar").length && e(".blog-sidebar").height() > e(".blog-isotop-container").height() && e(".blog-isotop-container").height(e(".blog-sidebar").height() + 100);
    }), e(document).on("focus", ".woocommerce-cart #content table.cart td.actions .coupon #coupon_code", function() {
        e(".woocommerce-cart #content table.cart td.actions .coupon").addClass("focus");
    }), e(document).on("focusout", ".woocommerce-cart #content table.cart td.actions .coupon #coupon_code", function() {
        e(".woocommerce-cart #content table.cart td.actions .coupon").removeClass("focus");
    }), e(document).on("focus", "form.checkout_coupon #coupon_code", function() {
        e("form.checkout_coupon .checkout_coupon_inner").addClass("focus");
    }), e(document).on("focusout", "form.checkout_coupon #coupon_code", function() {
        e("form.checkout_coupon .checkout_coupon_inner").removeClass("focus");
    }), 0 < e("#wpadminbar").length && e(window).width() <= 1024 && e(".st-menu").css("top", "32px");
}), jQuery(function(e) {
    e(document).on("click", "header .site-tools .search-button .spk-icon-search", function() {
        setTimeout(function() {
            document.getElementById("search-input").focus();
        }, 800);
    });
}), jQuery(function(e) {
    var t = e(window).height(), i = e(".shopkeeper-mini-cart .widget.woocommerce.widget_shopping_cart .widget_shopping_cart_content .cart_list.product_list_widget li.mini_cart_item .product-item-bg");
    768 == t ? i.addClass("smaller-vh") : i.removeClass("smaller-vh"), e("#fbmsg").length && (e(".getbowtied_get_this_theme").length ? e("#fbmsg").addClass("gbt_plugin_installed") : e("#fbmsg").removeClass("gbt_plugin_installed"));
}), jQuery(document).foundation(), jQuery(function(n) {
    "use strict";
    var s = {
        init: function() {
            if ("load_more_button" != getbowtied_scripts_vars.pagination_blog && "infinite_scroll" != getbowtied_scripts_vars.pagination_blog || (n(document).ready(function() {
                n(".posts-navigation").length && (n(".posts-navigation").before('<div class="getbowtied_blog_ajax_load_button"><a getbowtied_blog_ajax_load_more_processing="0">' + getbowtied_scripts_vars.ajax_load_more_locale + "</a></div>"), 
                "infinite_scroll" == getbowtied_scripts_vars.pagination_blog && n(".getbowtied_blog_ajax_load_button").addClass("getbowtied_blog_ajax_load_more_hidden"), 
                0 == n(".posts-navigation a.next").length && n(".getbowtied_blog_ajax_load_button").addClass("getbowtied_blog_ajax_load_more_hidden")), 
                n(".posts-navigation").hide(), n(".blog-posts > .blog-post").addClass("getbowtied_blog_ajax_load_more_item_visible");
            }), n("body").on("click", ".getbowtied_blog_ajax_load_button a", function(e) {
                if (e.preventDefault(), n(".posts-navigation a.next").length) {
                    n(".getbowtied_blog_ajax_load_button a").attr("getbowtied_blog_ajax_load_more_processing", 1);
                    var t = n(".posts-navigation a.next").attr("href");
                    s.onstart(), n(".getbowtied_blog_ajax_load_button").fadeOut(200, function() {
                        n(".posts-navigation").before('<div class="getbowtied_blog_ajax_load_more_loader"><span>' + getbowtied_scripts_vars.ajax_loading_locale + "</span></div>");
                    }), n.get(t, function(e) {
                        n(".posts-navigation").html(n(e).find(".posts-navigation").html());
                        var i = 0;
                        n(e).find(".blog-posts > .blog-post").each(function() {
                            if ("layout-1" == getbowtied_scripts_vars.layout_blog) {
                                i++, n(this).addClass("loaded delay-" + i);
                                var e = document.querySelector("#masonry_grid"), t = document.createElement("li");
                                salvattore.appendElements(e, [ t ]), t.outerHTML = n(this).prop("outerHTML");
                            } else i++, n(this).addClass("loaded delay-" + i), n(".blog-posts > .blog-post:last").after(n(this));
                        }), n(".getbowtied_blog_ajax_load_more_loader").fadeOut(200, function() {
                            n(this).remove(), n(".getbowtied_blog_ajax_load_button").show(), n(".getbowtied_blog_ajax_load_button a").attr("getbowtied_blog_ajax_load_more_processing", 0);
                        }), s.onfinish(), 0 == n(".posts-navigation a.next").length && (n(".getbowtied_blog_ajax_load_button").addClass("finished").removeClass("getbowtied_blog_ajax_load_more_hidden"), 
                        n(".getbowtied_blog_ajax_load_button a").show().html(getbowtied_scripts_vars.ajax_no_more_items_locale).addClass("disabled"));
                    });
                } else n(".getbowtied_blog_ajax_load_button").addClass("finished").removeClass("getbowtied_blog_ajax_load_more_hidden"), 
                n(".getbowtied_blog_ajax_load_button a").show().html(getbowtied_scripts_vars.ajax_no_more_items_locale).addClass("disabled");
            })), "infinite_scroll" == getbowtied_scripts_vars.pagination_blog) {
                var e = Math.abs(0);
                n(window).scroll(function() {
                    n(".blog-posts").length && (n(".blog-posts").offset().top + n(".blog-posts").outerHeight() - n(window).scrollTop() - e < n(window).height() && 0 == n(".getbowtied_blog_ajax_load_button a").attr("getbowtied_blog_ajax_load_more_processing") && n(".getbowtied_blog_ajax_load_button a").trigger("click"));
                });
            }
        },
        onstart: function() {},
        onfinish: function() {}
    };
    (function() {
        n(window).load(function() {
            n("#masonry_grid").addClass("fade-in");
        });
    })(), n("body").hasClass("search") || (s.init(), s.onfinish());
}), jQuery(function(e) {
    "use strict";
    function t(e, i) {
        e.expanded.bind(function(e) {
            if (e) {
                var t = {
                    action: "get_url",
                    page: i
                };
                jQuery.post("admin-ajax.php", t, function(e) {
                    wp.customize.previewer.previewUrl.set(e);
                });
            }
        });
    }
    var i = !1;
    "undefined" != typeof wp && void 0 !== wp.customize && (i = void 0 !== wp.customize.section), 
    i && (wp.customize.panel("panel_shop", function(e) {
        t(e, "shop");
    }), wp.customize.section("blog", function(e) {
        t(e, "blog");
    }), wp.customize.section("product", function(e) {
        t(e, "product");
    }));
}), jQuery(document).ready(function(i) {
    function n() {
        if (i(".product_layout_classic") && i(".carousel-cell.youtube")) {
            var e = i(".product_infos");
            640 < i(window).width() && i(window).width() < 1024 ? e.css({
                "margin-top": "50px"
            }) : e.css({
                "margin-top": "0"
            });
        }
    }
    var e = i(".product_layout_4 .product-image.mobile").detach();
    i(window).on("load resize", function() {
        1024 <= i(window).width() && 0 < i(".product_layout_4").length ? i(".product_layout_4 .product-image.mobile").detach() : i(".product_layout_4 .product_images .featured ").after(e);
    }), i(".easyzoom").on("click", ".easyzoom-flyout", function() {
        i(this).siblings(".fresco.zoom").trigger("click");
    }), i(window).on("resize", function() {
        n();
    }), i(window).load(function() {
        var t, e;
        !function() {
            function t(e) {
                o.slideTo(e, 300, !1);
                var t = a.find(".carousel-cell"), i = a.height(), n = t.outerHeight();
                a.find(".is-nav-selected").removeClass("is-nav-selected"), t.eq(o.activeIndex).addClass("is-nav-selected");
                var s = o.activeIndex * n - (i - n) / 2 - 10;
                a.animate({
                    scrollTop: s
                }, 300);
            }
            if (i(".product-images-carousel").length) {
                var o = new Swiper(".product-images-carousel", {
                    autoHeight: !0,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    lazyLoading: !1,
                    preventClicks: 1 != getbowtied_scripts_vars.product_lightbox ? "true" : "false",
                    preventClicksPropagation: 1 != getbowtied_scripts_vars.product_lightbox ? "true" : "false",
                    onSlideChangeEnd: function() {
                        t(o.activeIndex);
                    }
                }), a = i(".product_thumbnails");
                a.on("click", ".carousel-cell", function(e) {
                    t(i(e.currentTarget).index());
                });
                var e = i("li.carousel-cell:first-child img").attr("src");
                i(".variations_form").on("change", "select", function() {
                    i("li.carousel-cell:first-child img").attr("src") != e && (e = i("li.carousel-cell:first-child img").attr("src"), 
                    t(0)), 0 < i(".product_layout_3").length && 960 < i(window).width() && i("html,body").animate({
                        scrollTop: i("#primary").offset().top
                    });
                }), i(".variations_form").on("click", ".reset_variations", function() {
                    t(0);
                });
            }
        }(), n(), t = new Swiper(".product_content_wrapper .mobile_gallery", {
            preloadImages: !0,
            updateOnImagesReady: !0,
            autoHeight: !0,
            lazyLoading: !1
        }), e = new Swiper(".product_content_wrapper .mobile_gallery_thumbs", {
            centeredSlides: !0,
            freeMode: !0,
            slidesPerView: "auto",
            touchRatio: .5,
            slideToClickedSlide: !0,
            nested: !0,
            grabCursor: !0,
            touchMoveStopPropagation: !0,
            preventClicks: !0
        }), (t.params.control = e).params.control = t, i(document).on("change", ".single-product .variations_form", "select", function() {
            var e = i(".product_images  .product-image:first-child img").attr("src");
            i(".mobile_gallery .swiper-wrapper .swiper-slide:first-child img").attr("src", e), 
            i(".mobile_gallery_thumbs .swiper-wrapper .swiper-slide:first-child").attr("style", "background-image: url(" + e + ")"), 
            t.slideTo(0);
        }), i(document).on("click", ".product-image.mobile > a", function(e) {
            e.preventDefault(), i(".product-image.featured a.fresco").trigger("click");
        });
    });
}), jQuery(document).ready(function(p) {
    function e() {
        var e = (p(window).width() - p(".cd-quick-view").width()) / 2, t = (p(window).height() - p(".cd-quick-view").height()) / 2;
        p(".cd-quick-view").css({
            top: t,
            left: e
        });
    }
    function t(e, t) {
        p(".cd-close");
        var i, n, s, o, a, r = p(".empty-box").find("img");
        !p(".cd-quick-view").hasClass("velocity-animating") && p(".cd-quick-view").hasClass("add-content") ? l(r, e, t, "close") : (n = (i = r).parents("li"), 
        s = i.offset().top - p(window).scrollTop(), o = i.offset().left, a = i.width(), 
        p("body").removeClass("overlay-layer"), n.removeClass("empty-box"), p(".cd-quick-view").velocity("stop").removeClass("add-content animate-width is-visible").css({
            top: s,
            left: o,
            width: a
        }));
    }
    function l(e, t, i, n) {
        var s = e.parents("li"), o = e.offset().top - p(window).scrollTop(), a = e.offset().left, r = e.width(), l = (e.height(), 
        p(window).width()), c = (l - t) / 2, u = (p(window).height() - 596) / 2, d = .8 * l < i ? .8 * l : i, h = (l - d) / 2;
        "open" == n ? (p("body").addClass("overlay-layer"), s.addClass("empty-box"), p(".cd-quick-view").css({
            top: o,
            left: a,
            width: r,
            height: 596
        }).velocity({
            top: u + "px",
            left: c + "px",
            width: t + "px"
        }, 1e3, [ 400, 20 ], function() {
            p(".cd-quick-view").addClass("animate-width").velocity({
                left: h + "px",
                width: d + "px"
            }, 300, "ease", function() {
                p(".cd-quick-view").addClass("add-content");
                var e = ".swiper-button-next", t = ".swiper-button-prev";
                p("body").hasClass("rtl") && (e = ".swiper-button-prev", t = ".swiper-button-next");
                var i = new Swiper(".cd-quick-view .swiper-container", {
                    pagination: ".swiper-pagination",
                    nextButton: e,
                    prevButton: t,
                    preventClick: !0,
                    preventClicksPropagation: !0,
                    grabCursor: !0,
                    onTouchStart: function() {
                        f = !1;
                    },
                    onTouchMove: function() {
                        f = !1;
                    },
                    onTouchEnd: function() {
                        setTimeout(function() {
                            f = !0;
                        }, 300);
                    }
                }), n = p(".cd-quick-view").find(".variations_form"), s = p(".cd-quick-view").find(".variations_form .variations select");
                n.wc_variation_form(), s.change(), n.on("change", "select", function() {
                    i.slideTo(0);
                });
            });
        }).addClass("is-visible")) : p(".cd-quick-view").removeClass("add-content").velocity({
            top: u + "px",
            left: c + "px",
            width: t + "px"
        }, 300, "ease", function() {
            p("body").removeClass("overlay-layer"), p(".cd-quick-view").removeClass("animate-width").velocity({
                top: o,
                left: a,
                width: r
            }, 500, "ease", function() {
                p(".cd-quick-view").removeClass("is-visible"), s.removeClass("empty-box");
            });
        });
    }
    var f = !0;
    p(document).on("click", ".getbowtied_product_quick_view_button", function(e) {
        e.preventDefault();
        var t = p(this);
        t.parent().find(".product_thumbnail").addClass("loading");
        var i = p(this).data("product_id"), n = p(this).parents("li").find(".product_thumbnail img");
        p.ajax({
            url: shopkeeper_ajaxurl,
            data: {
                action: "getbowtied_product_quick_view",
                product_id: i
            },
            success: function(e) {
                p(".cd-quick-view").empty().html(e), l(n, 480, 960, "open"), p(".cd-quick-view .product_infos .woocommerce-product-details__short-description").outerHeight() >= p(".cd-quick-view").outerHeight() ? p(".cd-quick-view").find(".cd-close").css("right", "40px") : p(".cd-quick-view").find(".cd-close").css("right", "28px");
            },
            error: function(e) {
                console.log(e);
            }
        }).done(function() {
            t.parent().find(".product_thumbnail").removeClass("loading");
        });
    }), p("body").on("click", function(e) {
        (p(e.target).is(".cd-close") || p(e.target).is("body.overlay-layer")) && !0 === f && t(480, 960);
    }), p(document).keyup(function(e) {
        "27" == e.which && t(480, 960);
    }), p(window).on("resize", function() {
        p(".cd-quick-view").hasClass("is-visible") && window.requestAnimationFrame(e);
    });
}), jQuery(document).ready(function(i) {
    1 == getbowtied_scripts_vars.option_minicart && (i("body").on("click", ".shopping-bag-button .tools_button, .product_notification_wrapper", function(e) {
        i(".product_notification_wrapper").parent().hide(), 1024 <= i(window).width() && (e.preventDefault(), 
        i(".shopkeeper-mini-cart").toggleClass("open")), e.stopPropagation();
    }), i("body").hasClass("gbt_custom_notif") && (i("body").on("click", ".woocommerce-error", function(e) {
        i(".woocommerce-error").hide();
    }), i("body").on("click", ".woocommerce-info", function(e) {
        i(".woocommerce-info").hide();
    }), i("body").on("click", ".woocommerce-message", function(e) {
        i(".woocommerce-message").hide();
    })), i("body").on("click", function(e) {
        i(".shopkeeper-mini-cart").hasClass("open") && (i(e.target).is(".shopkeeper-mini-cart") || i(e.target).is(".shopping-bags-button .tools-button") || i(e.target).is(".woocommerce-message") || 0 !== i(".shopkeeper-mini-cart").has(e.target).length || i(".shopkeeper-mini-cart").removeClass("open"));
    }));
    var n = "";
    i("body").on("click", ".ajax_add_to_cart", function() {
        if (i(".woocommerce-message").remove(), i("body").hasClass("woocommerce-wishlist")) var e = i(this).parents("tr").find("img.attachment-shop_thumbnail").attr("src"), t = i(this).parents("tr").find(".product-name a").html(); else e = i(this).parents("li").find("img.attachment-shop_catalog").attr("src"), 
        t = i(this).parents("li").find(".product-title-link").html();
        n = !(void 0 === e || void 0 === t || !i("body").hasClass("gbt_custom_notif")) && '<div class="woocommerce-message"><div class="product_notification_wrapper"><div class="product_notification_background" style="background-image:url(' + e + ')"></div><div class="product_notification_text">&quot;' + t + "&quot;" + addedToCartMessage + "</div></div></div>";
    }), i(document).on("added_to_cart", function(e, t) {
        0 != n && i("#content").prepend(n);
    });
}), jQuery(function(i) {
    "use strict";
    var n = {
        init: function() {
            if ("load_more_button" != getbowtied_scripts_vars.shop_pagination_type && "infinite_scroll" != getbowtied_scripts_vars.shop_pagination_type || (i(document).ready(function() {
                i(".woocommerce-pagination").length && i("body").hasClass("archive") && (i(".woocommerce-pagination").before('<div class="getbowtied_ajax_load_button"><a getbowtied_ajax_load_more_processing="0">' + getbowtied_scripts_vars.ajax_load_more_locale + "</a></div>"), 
                "infinite_scroll" == getbowtied_scripts_vars.shop_pagination_type && i(".getbowtied_ajax_load_button").addClass("getbowtied_ajax_load_more_hidden"), 
                0 == i(".woocommerce-pagination a.next").length && i(".getbowtied_ajax_load_button").addClass("getbowtied_ajax_load_more_hidden"), 
                i(".woocommerce-pagination").hide());
            }), i("body").on("click", ".getbowtied_ajax_load_button a", function(e) {
                if (e.preventDefault(), i(".woocommerce-pagination a.next").length) {
                    i(".getbowtied_ajax_load_button a").attr("getbowtied_ajax_load_more_processing", 1);
                    var t = i(".woocommerce-pagination a.next").attr("href");
                    n.onstart(), i(".getbowtied_ajax_load_button").fadeOut(200, function() {
                        i(".woocommerce-pagination").before('<div class="getbowtied_ajax_load_more_loader"><span>' + getbowtied_scripts_vars.ajax_loading_locale + "</span></div>");
                    }), i.get(t, function(e) {
                        i(".woocommerce-pagination").html(i(e).find(".woocommerce-pagination").html());
                        var t = 0;
                        i(e).find(".content-area ul.products li").each(function() {
                            t++, i(this).find(".product_thumbnail.with_second_image").css("background-size", "cover"), 
                            i(this).find(".product_thumbnail.with_second_image").addClass("second_image_loaded"), 
                            i(this).addClass("ajax-loaded delay-" + t), i(".content-area ul.products li:last").after(i(this));
                        }), i(".getbowtied_ajax_load_more_loader").fadeOut(200, function() {
                            i(".getbowtied_ajax_load_button").fadeIn(200), i(".getbowtied_ajax_load_button a").attr("getbowtied_ajax_load_more_processing", 0);
                        }), n.onfinish(), setTimeout(function() {
                            i(".content-area ul.products li.hidden").removeClass("hidden").addClass("animate");
                        }, 500), 0 == i(".woocommerce-pagination a.next").length && (i(".getbowtied_ajax_load_button").addClass("finished").removeClass("getbowtied_ajax_load_more_hidden"), 
                        i(".getbowtied_ajax_load_button a").show().html(getbowtied_scripts_vars.ajax_no_more_items_locale).addClass("disabled"));
                    });
                } else i(".getbowtied_ajax_load_button").addClass("finished").removeClass("getbowtied_ajax_load_more_hidden"), 
                i(".getbowtied_ajax_load_button a").show().html(getbowtied_scripts_vars.ajax_no_more_items_locale).addClass("disabled");
            })), "infinite_scroll" == getbowtied_scripts_vars.shop_pagination_type) {
                var e = Math.abs(0);
                i(window).scroll(function() {
                    i(".content-area ul.products").length && (i(".content-area ul.products").offset().top + i(".content-area ul.products").outerHeight() - i(window).scrollTop() - e < i(window).height() && 0 == i(".getbowtied_ajax_load_button a").attr("getbowtied_ajax_load_more_processing") && i(".getbowtied_ajax_load_button a").trigger("click"));
                });
            }
        },
        onstart: function() {},
        onfinish: function() {}
    };
    n.init(), n.onfinish();
}), jQuery(document).ready(function(t) {
    "use strict";
    t(window).load(function() {
        if (t(".easyzoom").length) if (1024 < t(window).width()) {
            var e = t(".easyzoom").easyZoom({
                loadingNotice: "",
                errorNotice: "",
                preventClicks: !1,
                linkAttribute: "href"
            }).data("easyZoom");
            t(".variations").on("change", "select", function() {
                e.teardown(), e._init();
            });
        } else t(".easyzoom a").click(function(e) {
            e.preventDefault();
        });
    });
}), jQuery(document).ready(function(i) {
    "use strict";
    var n = i(".product-images-controller"), t = i(".product-images-style-2 .product_images .product-image:not(.mobile), .product-images-style-3 .product_images .product-image:not(.mobile)"), s = i(".product-images-style-2 .product-images-controller li a span.dot, .product-images-style-3 .product-images-controller li a span.dot"), e = i(".product-images-wrapper"), o = i(".site-header.sticky").outerHeight();
    0 < i(".product_layout_2").length && i(".product_layout_2 .product-images-controller").css("top", e.offset().top);
    i(window).scroll(function() {
        s.addClass("current"), t.each(function() {
            var e = i(this), t = i(' a[href="#' + e.attr("id") + '"]').data("number");
            e.offset().top + e.outerHeight() <= n.offset().top - o ? (s.removeClass("current"), 
            s.eq(t).addClass("current")) : s.eq(t).removeClass("current");
        });
        var e = i(".product_layout_2 .fluid-width-video-wrapper, .product_layout_3 .fluid-width-video-wrapper");
        0 < e.length && (e.offset().top <= n.offset().top - o ? i("li.video-icon span.dot").addClass("current") : i(".product-images-controller .video-icon .dot").removeClass("current"), 
        e.offset().top + e.outerHeight() <= n.offset().top && i(".product-images-controller .video-icon .dot").removeClass("current"));
    }), 0 < i(".single-product").length && i('a[href*="#controller-navigation-image"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = i(this.hash);
            if (e = e.length ? e : i("[name=" + this.hash.slice(1) + "]"), 0 < i("#wpadminbar").length) var t = i("#wpadminbar").outerHeight(); else t = "";
            if (e.length) return i("html, body").animate({
                scrollTop: e.offset().top - i(".site-header.sticky").outerHeight() - t
            }, 500), !1;
        }
    }), i(".product-image.video .fluid-width-video-wrapper iframe") && i(".product_layout_2 .product-images-controller .video-icon > a, .product_layout_3 .product-images-controller .video-icon > a").on("click", function(e) {
        i(".product-image.video .fluid-width-video-wrapper iframe")[0].src += "&autoplay=1", 
        e.preventDefault();
    });
}), jQuery(document).ready(function(a) {
    "use strict";
    function e() {
        if (0 < a(".product_layout_3").length) {
            a(".product_layout_3 .product-images-wrapper").width();
            var e = a(".product_layout_3 .product-images-wrapper"), t = a(".product_layout_3 .product_title"), i = a(".product_layout_3 .product-images-wrapper").width() / a(window).width() * 100;
            if (t.css({
                width: a(window).width(),
                left: "auto"
            }), 1024 <= a(window).width()) {
                t.css({
                    left: a(".product_layout_3 .product-images-controller").offset().left
                }), t.addClass("for-desktop"), t.css({
                    width: .75 * i + "%"
                });
                var n = a(".product_layout_3 .product-images-controller"), s = a(".product_layout_3 .product-badges"), o = t.outerHeight();
                n.css("top", e.offset().top + o + 40), s.css("top", o + 40);
            } else t.removeClass("for-desktop");
        }
    }
    if (0 < a(".product_layout_2").length || 0 < a(".product_layout_3").length || 0 < a(".product_layout_4").length) {
        var t = a(".product .product_content_wrapper .product_infos").outerHeight(), n = (a(".product .product_content_wrapper .product_infos").position().top, 
        a(".product .product_content_wrapper .product_infos").outerWidth(), a(".product_content_wrapper").offset().top);
        t > a(window).innerHeight() - n && 1024 <= a(window).width() ? a(".product_infos").addClass("long-description") : a(".product_infos").css({
            top: n
        }), a(window).scroll(function() {
            var e = a(window).scrollTop(), t = a("#site-footer").offset().top, i = (a(".product_infos.fixed").offset().top, 
            a(".product_infos.fixed").height());
            a("#site-footer");
            t - 40 < e + i + 200 ? a(".product_infos.fixed:not(.long-description)").css({
                top: -1 * (e + i - t + 40)
            }) : a(".product_infos.fixed:not(.long-description)").css({
                top: n
            });
        });
    }
    e(), a(window).resize(function() {
        e();
    });
}), jQuery(document).ready(function(e) {
    "use strict";
    if (1024 < e(window).width()) {
        var t = e(".product .woocommerce-product-rating .woocommerce-review-link").html(), i = (e(".product .woocommerce_review_link_hover"), 
        e(".product .woocommerce-product-rating")), n = '<div class="woocommerce_review_link_hover">' + t + "</div>";
        null != t && (i.before(n), i.hover(function() {
            e(".woocommerce_review_link_hover").addClass("hovered");
        }, function() {
            e(".woocommerce_review_link_hover").removeClass("hovered");
        }));
    }
}), jQuery(document).ready(function(n) {
    var i;
    (n(document).on("click", ".plus-btn", function(e) {
        n("body").hasClass("rtl") ? $input = n(this).next("input.custom-qty") : $input = n(this).prev("input.custom-qty");
        var t = parseInt($input.val()), i = parseInt($input.attr("max"));
        return isNaN(i) ? $input.val(t + 1).change() : t < i && $input.val(t + 1).change(), 
        !1;
    }), n(document).on("click", ".minus-btn", function(e) {
        n("body").hasClass("rtl") ? $input = n(this).prev("input.custom-qty") : $input = n(this).next("input.custom-qty");
        var t = parseInt($input.val()), i = parseInt($input.attr("min"));
        return isNaN(i) ? $input.val(t - 1).change() : i < t && $input.val(t - 1).change(), 
        !1;
    }), 1024 < n(window).width()) && (n(document).on("mousedown", ".plus-btn", function(e) {
        $input = n(this).prev("input.custom-qty");
        var t = parseInt($input.val());
        i = setInterval(function() {
            t++, $input.val(t);
        }, 250);
    }), n(document).on("mousedown", ".minus-btn", function(e) {
        $input = n(this).next("input.custom-qty");
        var t = parseInt($input.val());
        i = setInterval(function() {
            1 < t && (t--, $input.val(t));
        }, 250);
    }), document.addEventListener("mouseup", function() {
        i && clearInterval(i);
    }));
}), jQuery(function(t) {
    function e(e) {
        "number" == typeof e && isFinite(e) && Math.floor(e) === e && 0 <= e && t(".wishlist_items_number").html(e);
    }
    if (t(".wishlist_items_number").length) {
        var i = 0, n = function(e) {
            var t = document.cookie, i = e + "=", n = t.indexOf("; " + i);
            if (-1 == n) {
                if (0 != (n = t.indexOf(i))) return null;
            } else {
                n += 2;
                var s = document.cookie.indexOf(";", n);
                -1 == s && (s = t.length);
            }
            return decodeURIComponent(decodeURIComponent(t.substring(n + i.length, s)));
        }("yith_wcwl_products");
        if (null != n) {
            n = n.slice(0, n.indexOf("]") + 1);
            var s = JSON.parse(n);
            i = Object.keys(s).length;
        } else i = Number(t(".wishlist_items_number").html());
        t("body").on("added_to_wishlist", function() {
            e(++i);
        }), t("body").on("removed_from_wishlist", function() {
            e(--i);
        }), e(i);
    }
}), jQuery(document).ready(function(e) {
    "use strict";
    1 == getbowtied_scripts_vars.catalog_mode && (e("form.cart div.quantity").empty(), 
    e("form.cart button.single_add_to_cart_button").remove());
}), jQuery(function(t) {
    "use strict";
    t(".shortcode_getbowtied_slider").each(function() {
        var e = t(this).attr("data-autoplay");
        t.isNumeric(e) ? e *= 1e3 : e = 1e4;
        new Swiper(t(this), {
            direction: "horizontal",
            loop: !0,
            grabCursor: !0,
            preventClicks: !0,
            preventClicksPropagation: !0,
            autoplay: e,
            speed: 600,
            effect: "slide",
            pagination: t(this).find(".shortcode-slider-pagination"),
            paginationClickable: !0,
            nextButton: t(this).find(".swiper-button-next"),
            prevButton: t(this).find(".swiper-button-prev"),
            parallax: !0
        });
    });
}), jQuery(function(s) {
    "use strict";
    s(window).load(function() {}), s(window).resize(function() {}), s(window).scroll(function() {}), 
    s("a.has-hover-img").mousemove(function(e) {
        var t = s(this).parent().offset(), i = e.pageX - t.left + 20, n = e.pageY - t.top + 10;
        s(this).find("span.menu-hover-img").stop().css({
            left: i,
            top: n
        });
    });
});