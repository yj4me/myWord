! function(e) {
    var t = e.document,
        n = t.documentElement,
        i = e.devicePixelRatio || 1,
        a = "orientationchange" in e ? "orientationchange" : "resize",
        d = function() {
            var e = n.getBoundingClientRect().width || 360;
            (1 == i || e > 750) && (e = 750), n.style.fontSize = e / 37.5 + "px"
        };
    	t.addEventListener && (e.addEventListener(a, d, !1), "complete" === t.readyState || t.addEventListener("DOMContentLoaded", function() { setTimeout(d) }, !1))
}(window)