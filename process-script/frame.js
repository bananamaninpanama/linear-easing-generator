const PROCESS_SCRIPTJS = `const t = /^\\s*at .*(\\S+:\\d+|\\(native\\))/m,
    n = /^(eval@)?(\\[native code])?$/;

function e(e) {
    if (e.stack && e.stack.match(t)) return function(n) {
        let e = n.stack.split(\"\
\").find((n => n.match(t)));
        e.indexOf(\"(eval \") > -1 && (e = e.replace(/eval code/g, \"eval\").replace(/(\\(eval at [^()]*)|(,.*$)/g, \"\"));
        let r = e.replace(/^\\s+/, \"\").replace(/\\(eval code/g, \"(\").replace(/^.*?\\s+/, \"\");
        const h = r.match(/ (\\(.+\\)$)/);
        r = h ? r.replace(h[0], \"\") : r;
        const s = i(h ? h[1] : r),
            a = h && r || void 0;
        return {
            fileName: s[0],
            functionName: a,
            lineNumber: Number(s[1]),
            columnNumber: Number(s[2])
        }
    }(e);
    if (e.stack) return function(t) {
        let e = t.stack.split(\"\
\").find((t => !t.match(n)));
        e.indexOf(\" > eval\") > -1 && (e = e.replace(/ line (\\d+)(?: > eval line \\d+)* > eval:\\d+:\\d+/g, \":$1\"));
        if (-1 === e.indexOf(\"@\") && -1 === e.indexOf(\":\")) return {
            functionName: e
        };
        {
            const t = /((.*\".+\"[^@]*)?[^@]*)(?:@)/,
                n = e.match(t),
                r = n && n[1] ? n[1] : void 0,
                h = i(e.replace(t, \"\"));
            return {
                fileName: h[0],
                functionName: r,
                lineNumber: Number(h[1]),
                columnNumber: Number(h[2])
            }
        }
    }(e);
    throw new Error(\"Cannot parse given Error object\")
}

function i(t) {
    if (-1 === t.indexOf(\":\")) return [t];
    const n = /(.+?)(?::(\\d+))?(?::(\\d+))?$/.exec(t.replace(/[()]/g, \"\"));
    return [n[1], n[2] || void 0, n[3] || void 0]
}

function r(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = e, t
}

function h(t) {
    return function(t) {
        if (Array.isArray(t)) return s(t)
    }(t) || function(t) {
        if (\"undefined\" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || function(t, n) {
        if (t) {
            if (\"string\" == typeof t) return s(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return \"Object\" === e && t.constructor && (e = t.constructor.name), \"Map\" === e || \"Set\" === e ? Array.from(t) : \"Arguments\" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(t, n) : void 0
        }
    }(t) || function() {
        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")
    }()
}

function s(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, i = new Array(n); e < n; e++) i[e] = t[e];
    return i
}
var a = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
    },
    o = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
    g = /-?[0-9]*\\.?[0-9]+(?:e[-+]?\\d+)?/gi,
    c = function(t) {
        var n = t.match(g);
        return n ? n.map(Number) : []
    },
    u = function(t, n, e, i) {
        var h = this;
        r(this, \"x0\", void 0), r(this, \"x1\", void 0), r(this, \"y0\", void 0), r(this, \"y1\", void 0), r(this, \"getTotalLength\", (function() {
            return Math.sqrt(Math.pow(h.x0 - h.x1, 2) + Math.pow(h.y0 - h.y1, 2))
        })), r(this, \"getPointAtLength\", (function(t) {
            var n = t / Math.sqrt(Math.pow(h.x0 - h.x1, 2) + Math.pow(h.y0 - h.y1, 2));
            n = Number.isNaN(n) ? 1 : n;
            var e = (h.x1 - h.x0) * n,
                i = (h.y1 - h.y0) * n;
            return {
                x: h.x0 + e,
                y: h.y0 + i
            }
        })), r(this, \"getTangentAtLength\", (function(t) {
            var n = Math.sqrt((h.x1 - h.x0) * (h.x1 - h.x0) + (h.y1 - h.y0) * (h.y1 - h.y0));
            return {
                x: -(h.x1 - h.x0) / n,
                y: -(h.y1 - h.y0) / n
            }
        })), r(this, \"getPropertiesAtLength\", (function(t) {
            var n = h.getPointAtLength(t),
                e = h.getTangentAtLength(t);
            return {
                x: n.x,
                y: n.y,
                tangentX: e.x,
                tangentY: e.y
            }
        })), this.x0 = t, this.x1 = n, this.y0 = e, this.y1 = i
    },
    l = function(t, n, e, i, h, s, a, o, g) {
        var c = this;
        r(this, \"x0\", void 0), r(this, \"y0\", void 0), r(this, \"rx\", void 0), r(this, \"ry\", void 0), r(this, \"xAxisRotate\", void 0), r(this, \"LargeArcFlag\", void 0), r(this, \"SweepFlag\", void 0), r(this, \"x1\", void 0), r(this, \"y1\", void 0), r(this, \"length\", void 0), r(this, \"getTotalLength\", (function() {
            return c.length
        })), r(this, \"getPointAtLength\", (function(t) {
            t < 0 ? t = 0 : t > c.length && (t = c.length);
            var n = f({
                x: c.x0,
                y: c.y0
            }, c.rx, c.ry, c.xAxisRotate, c.LargeArcFlag, c.SweepFlag, {
                x: c.x1,
                y: c.y1
            }, t / c.length);
            return {
                x: n.x,
                y: n.y
            }
        })), r(this, \"getTangentAtLength\", (function(t) {
            t < 0 ? t = 0 : t > c.length && (t = c.length);
            var n, e = .05,
                i = c.getPointAtLength(t);
            t < 0 ? t = 0 : t > c.length && (t = c.length);
            var r = (n = t < c.length - e ? c.getPointAtLength(t + e) : c.getPointAtLength(t - e)).x - i.x,
                h = n.y - i.y,
                s = Math.sqrt(r * r + h * h);
            return t < c.length - e ? {
                x: -r / s,
                y: -h / s
            } : {
                x: r / s,
                y: h / s
            }
        })), r(this, \"getPropertiesAtLength\", (function(t) {
            var n = c.getTangentAtLength(t),
                e = c.getPointAtLength(t);
            return {
                x: e.x,
                y: e.y,
                tangentX: n.x,
                tangentY: n.y
            }
        })), this.x0 = t, this.y0 = n, this.rx = e, this.ry = i, this.xAxisRotate = h, this.LargeArcFlag = s, this.SweepFlag = a, this.x1 = o, this.y1 = g;
        var u = p(300, (function(r) {
            return f({
                x: t,
                y: n
            }, e, i, h, s, a, {
                x: o,
                y: g
            }, r)
        }));
        this.length = u.arcLength
    },
    f = function(t, n, e, i, r, h, s, a) {
        n = Math.abs(n), e = Math.abs(e), i = y(i, 360);
        var o = x(i);
        if (t.x === s.x && t.y === s.y) return {
            x: t.x,
            y: t.y,
            ellipticalArcAngle: 0
        };
        if (0 === n || 0 === e) return {
            x: 0,
            y: 0,
            ellipticalArcAngle: 0
        };
        var g = (t.x - s.x) / 2,
            c = (t.y - s.y) / 2,
            u = {
                x: Math.cos(o) * g + Math.sin(o) * c,
                y: -Math.sin(o) * g + Math.cos(o) * c
            },
            l = Math.pow(u.x, 2) / Math.pow(n, 2) + Math.pow(u.y, 2) / Math.pow(e, 2);
        l > 1 && (n = Math.sqrt(l) * n, e = Math.sqrt(l) * e);
        var f = (Math.pow(n, 2) * Math.pow(e, 2) - Math.pow(n, 2) * Math.pow(u.y, 2) - Math.pow(e, 2) * Math.pow(u.x, 2)) / (Math.pow(n, 2) * Math.pow(u.y, 2) + Math.pow(e, 2) * Math.pow(u.x, 2));
        f = f < 0 ? 0 : f;
        var p = (r !== h ? 1 : -1) * Math.sqrt(f),
            v = p * (n * u.y / e),
            d = p * (-e * u.x / n),
            w = {
                x: Math.cos(o) * v - Math.sin(o) * d + (t.x + s.x) / 2,
                y: Math.sin(o) * v + Math.cos(o) * d + (t.y + s.y) / 2
            },
            L = {
                x: (u.x - v) / n,
                y: (u.y - d) / e
            },
            A = M({
                x: 1,
                y: 0
            }, L),
            m = M(L, {
                x: (-u.x - v) / n,
                y: (-u.y - d) / e
            });
        !h && m > 0 ? m -= 2 * Math.PI : h && m < 0 && (m += 2 * Math.PI);
        var b = A + (m %= 2 * Math.PI) * a,
            P = n * Math.cos(b),
            T = e * Math.sin(b);
        return {
            x: Math.cos(o) * P - Math.sin(o) * T + w.x,
            y: Math.sin(o) * P + Math.cos(o) * T + w.y,
            ellipticalArcStartAngle: A,
            ellipticalArcEndAngle: A + m,
            ellipticalArcAngle: b,
            ellipticalArcCenter: w,
            resultantRx: n,
            resultantRy: e
        }
    },
    p = function(t, n) {
        t = t || 500;
        for (var e, i = 0, r = [], h = [], s = n(0), a = 0; a < t; a++) {
            var o = d(a * (1 / t), 0, 1);
            e = n(o), i += v(s, e), h.push([s, e]), r.push({
                t: o,
                arcLength: i
            }), s = e
        }
        return e = n(1), h.push([s, e]), i += v(s, e), r.push({
            t: 1,
            arcLength: i
        }), {
            arcLength: i,
            arcLengthMap: r,
            approximationLines: h
        }
    },
    y = function(t, n) {
        return (t % n + n) % n
    },
    x = function(t) {
        return t * (Math.PI / 180)
    },
    v = function(t, n) {
        return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
    },
    d = function(t, n, e) {
        return Math.min(Math.max(t, n), e)
    },
    M = function(t, n) {
        var e = t.x * n.x + t.y * n.y,
            i = Math.sqrt((Math.pow(t.x, 2) + Math.pow(t.y, 2)) * (Math.pow(n.x, 2) + Math.pow(n.y, 2)));
        return (t.x * n.y - t.y * n.x < 0 ? -1 : 1) * Math.acos(e / i)
    },
    w = [
        [],
        [],
        [-.5773502691896257, .5773502691896257],
        [0, -.7745966692414834, .7745966692414834],
        [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526],
        [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664],
        [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152],
        [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585],
        [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363],
        [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904],
        [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717],
        [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057],
        [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192],
        [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881],
        [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123],
        [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854],
        [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499],
        [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174],
        [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309],
        [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844],
        [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949],
        [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895],
        [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992],
        [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522],
        [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]
    ],
    L = [
        [],
        [],
        [1, 1],
        [.8888888888888888, .5555555555555556, .5555555555555556],
        [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385],
        [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908],
        [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036],
        [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697],
        [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626],
        [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544],
        [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814],
        [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366],
        [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183],
        [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588],
        [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186],
        [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727],
        [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096],
        [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793],
        [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331],
        [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478],
        [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118],
        [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335],
        [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722],
        [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771],
        [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]
    ],
    A = [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1]
    ],
    m = function(t, n, e) {
        return {
            x: (1 - e) * (1 - e) * (1 - e) * t[0] + 3 * (1 - e) * (1 - e) * e * t[1] + 3 * (1 - e) * e * e * t[2] + e * e * e * t[3],
            y: (1 - e) * (1 - e) * (1 - e) * n[0] + 3 * (1 - e) * (1 - e) * e * n[1] + 3 * (1 - e) * e * e * n[2] + e * e * e * n[3]
        }
    },
    b = function(t, n, e) {
        return T([3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], [3 * (n[1] - n[0]), 3 * (n[2] - n[1]), 3 * (n[3] - n[2])], e)
    },
    P = function(t, n, e) {
        var i, r, h;
        i = e / 2, r = 0;
        for (var s = 0; s < 20; s++) h = i * w[20][s] + i, r += L[20][s] * _(t, n, h);
        return i * r
    },
    T = function(t, n, e) {
        return {
            x: (1 - e) * (1 - e) * t[0] + 2 * (1 - e) * e * t[1] + e * e * t[2],
            y: (1 - e) * (1 - e) * n[0] + 2 * (1 - e) * e * n[1] + e * e * n[2]
        }
    },
    q = function(t, n, e) {
        void 0 === e && (e = 1);
        var i = t[0] - 2 * t[1] + t[2],
            r = n[0] - 2 * n[1] + n[2],
            h = 2 * t[1] - 2 * t[0],
            s = 2 * n[1] - 2 * n[0],
            a = 4 * (i * i + r * r),
            o = 4 * (i * h + r * s),
            g = h * h + s * s;
        if (0 === a) return e * Math.sqrt(Math.pow(t[2] - t[0], 2) + Math.pow(n[2] - n[0], 2));
        var c = o / (2 * a),
            u = e + c,
            l = g / a - c * c,
            f = u * u + l > 0 ? Math.sqrt(u * u + l) : 0,
            p = c * c + l > 0 ? Math.sqrt(c * c + l) : 0,
            y = c + Math.sqrt(c * c + l) !== 0 ? l * Math.log(Math.abs((u + f) / (c + p))) : 0;
        return Math.sqrt(a) / 2 * (u * f - c * p + y)
    },
    N = function(t, n, e) {
        return {
            x: 2 * (1 - e) * (t[1] - t[0]) + 2 * e * (t[2] - t[1]),
            y: 2 * (1 - e) * (n[1] - n[0]) + 2 * e * (n[2] - n[1])
        }
    };

function _(t, n, e) {
    var i = O(1, e, t),
        r = O(1, e, n),
        h = i * i + r * r;
    return Math.sqrt(h)
}
var O = function t(n, e, i) {
        var r, h, s = i.length - 1;
        if (0 === s) return 0;
        if (0 === n) {
            h = 0;
            for (var a = 0; a <= s; a++) h += A[s][a] * Math.pow(1 - e, s - a) * Math.pow(e, a) * i[a];
            return h
        }
        r = new Array(s);
        for (var o = 0; o < s; o++) r[o] = s * (i[o + 1] - i[o]);
        return t(n - 1, e, r)
    },
    S = function(t, n, e) {
        for (var i = 1, r = t / n, h = (t - e(r)) / n, s = 0; i > .001;) {
            var a = e(r + h),
                o = Math.abs(t - a) / n;
            if (o < i) i = o, r += h;
            else {
                var g = e(r - h),
                    c = Math.abs(t - g) / n;
                c < i ? (i = c, r -= h) : h /= 2
            }
            if (++s > 500) break
        }
        return r
    },
    C = function(t, n, e, i, h, s, a, o) {
        var g = this;
        r(this, \"a\", void 0), r(this, \"b\", void 0), r(this, \"c\", void 0), r(this, \"d\", void 0), r(this, \"length\", void 0), r(this, \"getArcLength\", void 0), r(this, \"getPoint\", void 0), r(this, \"getDerivative\", void 0), r(this, \"getTotalLength\", (function() {
            return g.length
        })), r(this, \"getPointAtLength\", (function(t) {
            var n = [g.a.x, g.b.x, g.c.x, g.d.x],
                e = [g.a.y, g.b.y, g.c.y, g.d.y],
                i = S(t, g.length, (function(t) {
                    return g.getArcLength(n, e, t)
                }));
            return g.getPoint(n, e, i)
        })), r(this, \"getTangentAtLength\", (function(t) {
            var n = [g.a.x, g.b.x, g.c.x, g.d.x],
                e = [g.a.y, g.b.y, g.c.y, g.d.y],
                i = S(t, g.length, (function(t) {
                    return g.getArcLength(n, e, t)
                })),
                r = g.getDerivative(n, e, i),
                h = Math.sqrt(r.x * r.x + r.y * r.y);
            return h > 0 ? {
                x: r.x / h,
                y: r.y / h
            } : {
                x: 0,
                y: 0
            }
        })), r(this, \"getPropertiesAtLength\", (function(t) {
            var n, e = [g.a.x, g.b.x, g.c.x, g.d.x],
                i = [g.a.y, g.b.y, g.c.y, g.d.y],
                r = S(t, g.length, (function(t) {
                    return g.getArcLength(e, i, t)
                })),
                h = g.getDerivative(e, i, r),
                s = Math.sqrt(h.x * h.x + h.y * h.y);
            n = s > 0 ? {
                x: h.x / s,
                y: h.y / s
            } : {
                x: 0,
                y: 0
            };
            var a = g.getPoint(e, i, r);
            return {
                x: a.x,
                y: a.y,
                tangentX: n.x,
                tangentY: n.y
            }
        })), r(this, \"getC\", (function() {
            return g.c
        })), r(this, \"getD\", (function() {
            return g.d
        })), this.a = {
            x: t,
            y: n
        }, this.b = {
            x: e,
            y: i
        }, this.c = {
            x: h,
            y: s
        }, void 0 !== a && void 0 !== o ? (this.getArcLength = P, this.getPoint = m, this.getDerivative = b, this.d = {
            x: a,
            y: o
        }) : (this.getArcLength = q, this.getPoint = T, this.getDerivative = N, this.d = {
            x: 0,
            y: 0
        }), this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], 1)
    },
    E = function(t) {
        var n = this;
        r(this, \"length\", 0), r(this, \"partial_lengths\", []), r(this, \"functions\", []), r(this, \"initial_point\", null), r(this, \"getPartAtLength\", (function(t) {
            t < 0 ? t = 0 : t > n.length && (t = n.length);
            for (var e = n.partial_lengths.length - 1; n.partial_lengths[e] >= t && e > 0;) e--;
            return e++, {
                fraction: t - n.partial_lengths[e - 1],
                i: e
            }
        })), r(this, \"getTotalLength\", (function() {
            return n.length
        })), r(this, \"getPointAtLength\", (function(t) {
            var e = n.getPartAtLength(t),
                i = n.functions[e.i];
            if (i) return i.getPointAtLength(e.fraction);
            if (n.initial_point) return n.initial_point;
            throw new Error(\"Wrong function at this part.\")
        })), r(this, \"getTangentAtLength\", (function(t) {
            var e = n.getPartAtLength(t),
                i = n.functions[e.i];
            if (i) return i.getTangentAtLength(e.fraction);
            if (n.initial_point) return {
                x: 0,
                y: 0
            };
            throw new Error(\"Wrong function at this part.\")
        })), r(this, \"getPropertiesAtLength\", (function(t) {
            var e = n.getPartAtLength(t),
                i = n.functions[e.i];
            if (i) return i.getPropertiesAtLength(e.fraction);
            if (n.initial_point) return {
                x: n.initial_point.x,
                y: n.initial_point.y,
                tangentX: 0,
                tangentY: 0
            };
            throw new Error(\"Wrong function at this part.\")
        })), r(this, \"getParts\", (function() {
            for (var t = [], e = 0; e < n.functions.length; e++)
                if (null !== n.functions[e]) {
                    n.functions[e] = n.functions[e];
                    var i = {
                        start: n.functions[e].getPointAtLength(0),
                        end: n.functions[e].getPointAtLength(n.partial_lengths[e] - n.partial_lengths[e - 1]),
                        length: n.partial_lengths[e] - n.partial_lengths[e - 1],
                        getPointAtLength: n.functions[e].getPointAtLength,
                        getTangentAtLength: n.functions[e].getTangentAtLength,
                        getPropertiesAtLength: n.functions[e].getPropertiesAtLength
                    };
                    t.push(i)
                } return t
        }));
        for (var e, i = Array.isArray(t) ? t : function(t) {
                var n = (t && t.length > 0 ? t : \"M0,0\").match(o);
                if (!n) throw new Error(\"No path elements found in string \".concat(t));
                return n.reduce((function(t, n) {
                    var e = n.charAt(0),
                        i = e.toLowerCase(),
                        r = c(n.substr(1));
                    for (\"m\" === i && r.length > 2 && (t.push([e].concat(h(r.splice(0, 2)))), i = \"l\", e = \"m\" === e ? \"l\" : \"L\"); r.length >= 0;) {
                        if (r.length === a[i]) {
                            t.push([e].concat(h(r.splice(0, a[i]))));
                            break
                        }
                        if (r.length < a[i]) throw new Error(\'Malformed path data: \"\'.concat(e, \'\" must have \').concat(a[i], \" elements and has \").concat(r.length, \": \").concat(n));
                        t.push([e].concat(h(r.splice(0, a[i]))))
                    }
                    return t
                }), [])
            }(t), s = [0, 0], g = [0, 0], f = [0, 0], p = 0; p < i.length; p++) {
            if (\"M\" === i[p][0]) f = [(s = [i[p][1], i[p][2]])[0], s[1]], this.functions.push(null), 0 === p && (this.initial_point = {
                x: i[p][1],
                y: i[p][2]
            });
            else if (\"m\" === i[p][0]) f = [(s = [i[p][1] + s[0], i[p][2] + s[1]])[0], s[1]], this.functions.push(null);
            else if (\"L\" === i[p][0]) this.length += Math.sqrt(Math.pow(s[0] - i[p][1], 2) + Math.pow(s[1] - i[p][2], 2)), this.functions.push(new u(s[0], i[p][1], s[1], i[p][2])), s = [i[p][1], i[p][2]];
            else if (\"l\" === i[p][0]) this.length += Math.sqrt(Math.pow(i[p][1], 2) + Math.pow(i[p][2], 2)), this.functions.push(new u(s[0], i[p][1] + s[0], s[1], i[p][2] + s[1])), s = [i[p][1] + s[0], i[p][2] + s[1]];
            else if (\"H\" === i[p][0]) this.length += Math.abs(s[0] - i[p][1]), this.functions.push(new u(s[0], i[p][1], s[1], s[1])), s[0] = i[p][1];
            else if (\"h\" === i[p][0]) this.length += Math.abs(i[p][1]), this.functions.push(new u(s[0], s[0] + i[p][1], s[1], s[1])), s[0] = i[p][1] + s[0];
            else if (\"V\" === i[p][0]) this.length += Math.abs(s[1] - i[p][1]), this.functions.push(new u(s[0], s[0], s[1], i[p][1])), s[1] = i[p][1];
            else if (\"v\" === i[p][0]) this.length += Math.abs(i[p][1]), this.functions.push(new u(s[0], s[0], s[1], s[1] + i[p][1])), s[1] = i[p][1] + s[1];
            else if (\"z\" === i[p][0] || \"Z\" === i[p][0]) this.length += Math.sqrt(Math.pow(f[0] - s[0], 2) + Math.pow(f[1] - s[1], 2)), this.functions.push(new u(s[0], f[0], s[1], f[1])), s = [f[0], f[1]];
            else if (\"C\" === i[p][0]) e = new C(s[0], s[1], i[p][1], i[p][2], i[p][3], i[p][4], i[p][5], i[p][6]), this.length += e.getTotalLength(), s = [i[p][5], i[p][6]], this.functions.push(e);
            else if (\"c\" === i[p][0])(e = new C(s[0], s[1], s[0] + i[p][1], s[1] + i[p][2], s[0] + i[p][3], s[1] + i[p][4], s[0] + i[p][5], s[1] + i[p][6])).getTotalLength() > 0 ? (this.length += e.getTotalLength(), this.functions.push(e), s = [i[p][5] + s[0], i[p][6] + s[1]]) : this.functions.push(new u(s[0], s[0], s[1], s[1]));
            else if (\"S\" === i[p][0]) {
                if (p > 0 && [\"C\", \"c\", \"S\", \"s\"].indexOf(i[p - 1][0]) > -1) {
                    if (e) {
                        var y = e.getC();
                        e = new C(s[0], s[1], 2 * s[0] - y.x, 2 * s[1] - y.y, i[p][1], i[p][2], i[p][3], i[p][4])
                    }
                } else e = new C(s[0], s[1], s[0], s[1], i[p][1], i[p][2], i[p][3], i[p][4]);
                e && (this.length += e.getTotalLength(), s = [i[p][3], i[p][4]], this.functions.push(e))
            } else if (\"s\" === i[p][0]) {
                if (p > 0 && [\"C\", \"c\", \"S\", \"s\"].indexOf(i[p - 1][0]) > -1) {
                    if (e) {
                        var x = e.getC(),
                            v = e.getD();
                        e = new C(s[0], s[1], s[0] + v.x - x.x, s[1] + v.y - x.y, s[0] + i[p][1], s[1] + i[p][2], s[0] + i[p][3], s[1] + i[p][4])
                    }
                } else e = new C(s[0], s[1], s[0], s[1], s[0] + i[p][1], s[1] + i[p][2], s[0] + i[p][3], s[1] + i[p][4]);
                e && (this.length += e.getTotalLength(), s = [i[p][3] + s[0], i[p][4] + s[1]], this.functions.push(e))
            } else if (\"Q\" === i[p][0]) {
                if (s[0] == i[p][1] && s[1] == i[p][2]) {
                    var d = new u(i[p][1], i[p][3], i[p][2], i[p][4]);
                    this.length += d.getTotalLength(), this.functions.push(d)
                } else e = new C(s[0], s[1], i[p][1], i[p][2], i[p][3], i[p][4], void 0, void 0), this.length += e.getTotalLength(), this.functions.push(e);
                s = [i[p][3], i[p][4]], g = [i[p][1], i[p][2]]
            } else if (\"q\" === i[p][0]) {
                if (0 != i[p][1] || 0 != i[p][2]) e = new C(s[0], s[1], s[0] + i[p][1], s[1] + i[p][2], s[0] + i[p][3], s[1] + i[p][4], void 0, void 0), this.length += e.getTotalLength(), this.functions.push(e);
                else {
                    var M = new u(s[0] + i[p][1], s[0] + i[p][3], s[1] + i[p][2], s[1] + i[p][4]);
                    this.length += M.getTotalLength(), this.functions.push(M)
                }
                g = [s[0] + i[p][1], s[1] + i[p][2]], s = [i[p][3] + s[0], i[p][4] + s[1]]
            } else if (\"T\" === i[p][0]) {
                if (p > 0 && [\"Q\", \"q\", \"T\", \"t\"].indexOf(i[p - 1][0]) > -1) e = new C(s[0], s[1], 2 * s[0] - g[0], 2 * s[1] - g[1], i[p][1], i[p][2], void 0, void 0), this.functions.push(e), this.length += e.getTotalLength();
                else {
                    var w = new u(s[0], i[p][1], s[1], i[p][2]);
                    this.functions.push(w), this.length += w.getTotalLength()
                }
                g = [2 * s[0] - g[0], 2 * s[1] - g[1]], s = [i[p][1], i[p][2]]
            } else if (\"t\" === i[p][0]) {
                if (p > 0 && [\"Q\", \"q\", \"T\", \"t\"].indexOf(i[p - 1][0]) > -1) e = new C(s[0], s[1], 2 * s[0] - g[0], 2 * s[1] - g[1], s[0] + i[p][1], s[1] + i[p][2], void 0, void 0), this.length += e.getTotalLength(), this.functions.push(e);
                else {
                    var L = new u(s[0], s[0] + i[p][1], s[1], s[1] + i[p][2]);
                    this.length += L.getTotalLength(), this.functions.push(L)
                }
                g = [2 * s[0] - g[0], 2 * s[1] - g[1]], s = [i[p][1] + s[0], i[p][2] + s[1]]
            } else if (\"A\" === i[p][0]) {
                var A = new l(s[0], s[1], i[p][1], i[p][2], i[p][3], 1 === i[p][4], 1 === i[p][5], i[p][6], i[p][7]);
                this.length += A.getTotalLength(), s = [i[p][6], i[p][7]], this.functions.push(A)
            } else if (\"a\" === i[p][0]) {
                var m = new l(s[0], s[1], i[p][1], i[p][2], i[p][3], 1 === i[p][4], 1 === i[p][5], s[0] + i[p][6], s[1] + i[p][7]);
                this.length += m.getTotalLength(), s = [s[0] + i[p][6], s[1] + i[p][7]], this.functions.push(m)
            }
            this.partial_lengths.push(this.length)
        }
    },
    j = function(t) {
        var n = this;
        if (r(this, \"inst\", void 0), r(this, \"getTotalLength\", (function() {
                return n.inst.getTotalLength()
            })), r(this, \"getPointAtLength\", (function(t) {
                return n.inst.getPointAtLength(t)
            })), r(this, \"getTangentAtLength\", (function(t) {
                return n.inst.getTangentAtLength(t)
            })), r(this, \"getPropertiesAtLength\", (function(t) {
                return n.inst.getPropertiesAtLength(t)
            })), r(this, \"getParts\", (function() {
                return n.inst.getParts()
            })), this.inst = new E(t), !(this instanceof j)) return new j(t)
    };
const k = 1e4;
let I = !1;
onmessage = ({
    data: t
}) => {
    if (\"null\" === origin && \"object\" == typeof t && null !== t && (function(t) {
            return \"process-script\" === t.action
        }(t) || function(t) {
            return \"process-svg\" === t.action
        }(t))) {
        const {
            port: n,
            script: i
        } = t;
        if (I) {
            const t = {
                message: \"Worker already used\"
            };
            return void n.postMessage({
                error: t
            })
        }
        I = !0;
        try {
            const e = \"process-svg\" === t.action ? function(t) {
                const n = new j(t),
                    e = n.getTotalLength();
                if (0 === e) throw new TypeError(\"Path is zero length\");
                let i = -1 / 0;
                const r = Array.from({
                    length: k
                }, ((t, r) => {
                    const h = r / (k - 1) * e,
                        s = n.getPointAtLength(h);
                    return i = Math.max(i, s.x), [i, s.y]
                }));
                return {
                    name: \"custom\",
                    points: r,
                    duration: 0
                }
            }(i) : function(t) {
                const n = Object.keys(self);
                let e;
                importScripts(`data:text/javascript,${encodeURIComponent(`(() => {${t};})()`)}`);
                const i = new Set(Object.keys(self));
                for (const t of n) i.delete(t);
                for (const t of i) \"function\" != typeof self[t] && i.delete(t);
                if (i.size > 1) throw Error(\"Too many global functions. Found: \" + [...i].join(\", \"));
                if (0 === i.size) throw Error(\"No global function found.\");
                const [r] = i;
                return e = self[r], {
                    name: r.replace(/[A-Z]/g, (t => \"-\" + t.toLowerCase())),
                    points: Array.from({
                        length: k
                    }, ((t, n) => {
                        const i = n / (k - 1);
                        return [i, Number(e(i))]
                    })),
                    duration: \"duration\" in self && \"number\" == typeof self.duration && self.duration || 0
                }
            }(i);
            n.postMessage({
                result: e
            })
        } catch (t) {
            const i = {
                ...e(t),
                message: t.message
            };
            throw n.postMessage({
                error: i
            }), t
        }
    }
};`;



const t = (async () => {
    const t = await fetch('./process-script.js'),
        e = await t.text();
    const TESTBASE64 = atob("Y29uc3QgdCA9IC9eXHMqYXQgLiooXFMrOlxkK3xcKG5hdGl2ZVwpKS9tLA0KICAgIG4gPSAvXihldmFsQCk/KFxbbmF0aXZlIGNvZGVdKT8kLzsNCg0KZnVuY3Rpb24gZShlKSB7DQogICAgaWYgKGUuc3RhY2sgJiYgZS5zdGFjay5tYXRjaCh0KSkgcmV0dXJuIGZ1bmN0aW9uKG4pIHsNCiAgICAgICAgbGV0IGUgPSBuLnN0YWNrLnNwbGl0KCJcbiIpLmZpbmQoKG4gPT4gbi5tYXRjaCh0KSkpOw0KICAgICAgICBlLmluZGV4T2YoIihldmFsICIpID4gLTEgJiYgKGUgPSBlLnJlcGxhY2UoL2V2YWwgY29kZS9nLCAiZXZhbCIpLnJlcGxhY2UoLyhcKGV2YWwgYXQgW14oKV0qKXwoLC4qJCkvZywgIiIpKTsNCiAgICAgICAgbGV0IHIgPSBlLnJlcGxhY2UoL15ccysvLCAiIikucmVwbGFjZSgvXChldmFsIGNvZGUvZywgIigiKS5yZXBsYWNlKC9eLio/XHMrLywgIiIpOw0KICAgICAgICBjb25zdCBoID0gci5tYXRjaCgvIChcKC4rXCkkKS8pOw0KICAgICAgICByID0gaCA/IHIucmVwbGFjZShoWzBdLCAiIikgOiByOw0KICAgICAgICBjb25zdCBzID0gaShoID8gaFsxXSA6IHIpLA0KICAgICAgICAgICAgYSA9IGggJiYgciB8fCB2b2lkIDA7DQogICAgICAgIHJldHVybiB7DQogICAgICAgICAgICBmaWxlTmFtZTogc1swXSwNCiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYSwNCiAgICAgICAgICAgIGxpbmVOdW1iZXI6IE51bWJlcihzWzFdKSwNCiAgICAgICAgICAgIGNvbHVtbk51bWJlcjogTnVtYmVyKHNbMl0pDQogICAgICAgIH0NCiAgICB9KGUpOw0KICAgIGlmIChlLnN0YWNrKSByZXR1cm4gZnVuY3Rpb24odCkgew0KICAgICAgICBsZXQgZSA9IHQuc3RhY2suc3BsaXQoIlxuIikuZmluZCgodCA9PiAhdC5tYXRjaChuKSkpOw0KICAgICAgICBlLmluZGV4T2YoIiA+IGV2YWwiKSA+IC0xICYmIChlID0gZS5yZXBsYWNlKC8gbGluZSAoXGQrKSg/OiA+IGV2YWwgbGluZSBcZCspKiA+IGV2YWw6XGQrOlxkKy9nLCAiOiQxIikpOw0KICAgICAgICBpZiAoLTEgPT09IGUuaW5kZXhPZigiQCIpICYmIC0xID09PSBlLmluZGV4T2YoIjoiKSkgcmV0dXJuIHsNCiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZQ0KICAgICAgICB9Ow0KICAgICAgICB7DQogICAgICAgICAgICBjb25zdCB0ID0gLygoLioiLisiW15AXSopP1teQF0qKSg/OkApLywNCiAgICAgICAgICAgICAgICBuID0gZS5tYXRjaCh0KSwNCiAgICAgICAgICAgICAgICByID0gbiAmJiBuWzFdID8gblsxXSA6IHZvaWQgMCwNCiAgICAgICAgICAgICAgICBoID0gaShlLnJlcGxhY2UodCwgIiIpKTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhbMF0sDQogICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiByLA0KICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IE51bWJlcihoWzFdKSwNCiAgICAgICAgICAgICAgICBjb2x1bW5OdW1iZXI6IE51bWJlcihoWzJdKQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfShlKTsNCiAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBwYXJzZSBnaXZlbiBFcnJvciBvYmplY3QiKQ0KfQ0KDQpmdW5jdGlvbiBpKHQpIHsNCiAgICBpZiAoLTEgPT09IHQuaW5kZXhPZigiOiIpKSByZXR1cm4gW3RdOw0KICAgIGNvbnN0IG4gPSAvKC4rPykoPzo6KFxkKykpPyg/OjooXGQrKSk/JC8uZXhlYyh0LnJlcGxhY2UoL1soKV0vZywgIiIpKTsNCiAgICByZXR1cm4gW25bMV0sIG5bMl0gfHwgdm9pZCAwLCBuWzNdIHx8IHZvaWQgMF0NCn0NCg0KZnVuY3Rpb24gcih0LCBuLCBlKSB7DQogICAgcmV0dXJuIG4gaW4gdCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBuLCB7DQogICAgICAgIHZhbHVlOiBlLA0KICAgICAgICBlbnVtZXJhYmxlOiAhMCwNCiAgICAgICAgY29uZmlndXJhYmxlOiAhMCwNCiAgICAgICAgd3JpdGFibGU6ICEwDQogICAgfSkgOiB0W25dID0gZSwgdA0KfQ0KDQpmdW5jdGlvbiBoKHQpIHsNCiAgICByZXR1cm4gZnVuY3Rpb24odCkgew0KICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkgcmV0dXJuIHModCkNCiAgICB9KHQpIHx8IGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgaWYgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkgcmV0dXJuIEFycmF5LmZyb20odCkNCiAgICB9KHQpIHx8IGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgaWYgKHQpIHsNCiAgICAgICAgICAgIGlmICgic3RyaW5nIiA9PSB0eXBlb2YgdCkgcmV0dXJuIHModCwgbik7DQogICAgICAgICAgICB2YXIgZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LCAtMSk7DQogICAgICAgICAgICByZXR1cm4gIk9iamVjdCIgPT09IGUgJiYgdC5jb25zdHJ1Y3RvciAmJiAoZSA9IHQuY29uc3RydWN0b3IubmFtZSksICJNYXAiID09PSBlIHx8ICJTZXQiID09PSBlID8gQXJyYXkuZnJvbSh0KSA6ICJBcmd1bWVudHMiID09PSBlIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGUpID8gcyh0LCBuKSA6IHZvaWQgMA0KICAgICAgICB9DQogICAgfSh0KSB8fCBmdW5jdGlvbigpIHsNCiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIikNCiAgICB9KCkNCn0NCg0KZnVuY3Rpb24gcyh0LCBuKSB7DQogICAgKG51bGwgPT0gbiB8fCBuID4gdC5sZW5ndGgpICYmIChuID0gdC5sZW5ndGgpOw0KICAgIGZvciAodmFyIGUgPSAwLCBpID0gbmV3IEFycmF5KG4pOyBlIDwgbjsgZSsrKSBpW2VdID0gdFtlXTsNCiAgICByZXR1cm4gaQ0KfQ0KdmFyIGEgPSB7DQogICAgICAgIGE6IDcsDQogICAgICAgIGM6IDYsDQogICAgICAgIGg6IDEsDQogICAgICAgIGw6IDIsDQogICAgICAgIG06IDIsDQogICAgICAgIHE6IDQsDQogICAgICAgIHM6IDQsDQogICAgICAgIHQ6IDIsDQogICAgICAgIHY6IDEsDQogICAgICAgIHo6IDANCiAgICB9LA0KICAgIG8gPSAvKFthc3R2enFtaGxjXSkoW15hc3R2enFtaGxjXSopL2dpLA0KICAgIGcgPSAvLT9bMC05XSpcLj9bMC05XSsoPzplWy0rXT9cZCspPy9naSwNCiAgICBjID0gZnVuY3Rpb24odCkgew0KICAgICAgICB2YXIgbiA9IHQubWF0Y2goZyk7DQogICAgICAgIHJldHVybiBuID8gbi5tYXAoTnVtYmVyKSA6IFtdDQogICAgfSwNCiAgICB1ID0gZnVuY3Rpb24odCwgbiwgZSwgaSkgew0KICAgICAgICB2YXIgaCA9IHRoaXM7DQogICAgICAgIHIodGhpcywgIngwIiwgdm9pZCAwKSwgcih0aGlzLCAieDEiLCB2b2lkIDApLCByKHRoaXMsICJ5MCIsIHZvaWQgMCksIHIodGhpcywgInkxIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0VG90YWxMZW5ndGgiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGgueDAgLSBoLngxLCAyKSArIE1hdGgucG93KGgueTAgLSBoLnkxLCAyKSkNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQb2ludEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gdCAvIE1hdGguc3FydChNYXRoLnBvdyhoLngwIC0gaC54MSwgMikgKyBNYXRoLnBvdyhoLnkwIC0gaC55MSwgMikpOw0KICAgICAgICAgICAgbiA9IE51bWJlci5pc05hTihuKSA/IDEgOiBuOw0KICAgICAgICAgICAgdmFyIGUgPSAoaC54MSAtIGgueDApICogbiwNCiAgICAgICAgICAgICAgICBpID0gKGgueTEgLSBoLnkwKSAqIG47DQogICAgICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgICAgIHg6IGgueDAgKyBlLA0KICAgICAgICAgICAgICAgIHk6IGgueTAgKyBpDQogICAgICAgICAgICB9DQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gTWF0aC5zcXJ0KChoLngxIC0gaC54MCkgKiAoaC54MSAtIGgueDApICsgKGgueTEgLSBoLnkwKSAqIChoLnkxIC0gaC55MCkpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiAtKGgueDEgLSBoLngwKSAvIG4sDQogICAgICAgICAgICAgICAgeTogLShoLnkxIC0gaC55MCkgLyBuDQogICAgICAgICAgICB9DQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UHJvcGVydGllc0F0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gaC5nZXRQb2ludEF0TGVuZ3RoKHQpLA0KICAgICAgICAgICAgICAgIGUgPSBoLmdldFRhbmdlbnRBdExlbmd0aCh0KTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi54LA0KICAgICAgICAgICAgICAgIHk6IG4ueSwNCiAgICAgICAgICAgICAgICB0YW5nZW50WDogZS54LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRZOiBlLnkNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCB0aGlzLngwID0gdCwgdGhpcy54MSA9IG4sIHRoaXMueTAgPSBlLCB0aGlzLnkxID0gaQ0KICAgIH0sDQogICAgbCA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIGgsIHMsIGEsIG8sIGcpIHsNCiAgICAgICAgdmFyIGMgPSB0aGlzOw0KICAgICAgICByKHRoaXMsICJ4MCIsIHZvaWQgMCksIHIodGhpcywgInkwIiwgdm9pZCAwKSwgcih0aGlzLCAicngiLCB2b2lkIDApLCByKHRoaXMsICJyeSIsIHZvaWQgMCksIHIodGhpcywgInhBeGlzUm90YXRlIiwgdm9pZCAwKSwgcih0aGlzLCAiTGFyZ2VBcmNGbGFnIiwgdm9pZCAwKSwgcih0aGlzLCAiU3dlZXBGbGFnIiwgdm9pZCAwKSwgcih0aGlzLCAieDEiLCB2b2lkIDApLCByKHRoaXMsICJ5MSIsIHZvaWQgMCksIHIodGhpcywgImxlbmd0aCIsIHZvaWQgMCksIHIodGhpcywgImdldFRvdGFsTGVuZ3RoIiwgKGZ1bmN0aW9uKCkgew0KICAgICAgICAgICAgcmV0dXJuIGMubGVuZ3RoDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UG9pbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB0IDwgMCA/IHQgPSAwIDogdCA+IGMubGVuZ3RoICYmICh0ID0gYy5sZW5ndGgpOw0KICAgICAgICAgICAgdmFyIG4gPSBmKHsNCiAgICAgICAgICAgICAgICB4OiBjLngwLA0KICAgICAgICAgICAgICAgIHk6IGMueTANCiAgICAgICAgICAgIH0sIGMucngsIGMucnksIGMueEF4aXNSb3RhdGUsIGMuTGFyZ2VBcmNGbGFnLCBjLlN3ZWVwRmxhZywgew0KICAgICAgICAgICAgICAgIHg6IGMueDEsDQogICAgICAgICAgICAgICAgeTogYy55MQ0KICAgICAgICAgICAgfSwgdCAvIGMubGVuZ3RoKTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi54LA0KICAgICAgICAgICAgICAgIHk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFRhbmdlbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB0IDwgMCA/IHQgPSAwIDogdCA+IGMubGVuZ3RoICYmICh0ID0gYy5sZW5ndGgpOw0KICAgICAgICAgICAgdmFyIG4sIGUgPSAuMDUsDQogICAgICAgICAgICAgICAgaSA9IGMuZ2V0UG9pbnRBdExlbmd0aCh0KTsNCiAgICAgICAgICAgIHQgPCAwID8gdCA9IDAgOiB0ID4gYy5sZW5ndGggJiYgKHQgPSBjLmxlbmd0aCk7DQogICAgICAgICAgICB2YXIgciA9IChuID0gdCA8IGMubGVuZ3RoIC0gZSA/IGMuZ2V0UG9pbnRBdExlbmd0aCh0ICsgZSkgOiBjLmdldFBvaW50QXRMZW5ndGgodCAtIGUpKS54IC0gaS54LA0KICAgICAgICAgICAgICAgIGggPSBuLnkgLSBpLnksDQogICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChyICogciArIGggKiBoKTsNCiAgICAgICAgICAgIHJldHVybiB0IDwgYy5sZW5ndGggLSBlID8gew0KICAgICAgICAgICAgICAgIHg6IC1yIC8gcywNCiAgICAgICAgICAgICAgICB5OiAtaCAvIHMNCiAgICAgICAgICAgIH0gOiB7DQogICAgICAgICAgICAgICAgeDogciAvIHMsDQogICAgICAgICAgICAgICAgeTogaCAvIHMNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQcm9wZXJ0aWVzQXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIG4gPSBjLmdldFRhbmdlbnRBdExlbmd0aCh0KSwNCiAgICAgICAgICAgICAgICBlID0gYy5nZXRQb2ludEF0TGVuZ3RoKHQpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiBlLngsDQogICAgICAgICAgICAgICAgeTogZS55LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRYOiBuLngsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHRoaXMueDAgPSB0LCB0aGlzLnkwID0gbiwgdGhpcy5yeCA9IGUsIHRoaXMucnkgPSBpLCB0aGlzLnhBeGlzUm90YXRlID0gaCwgdGhpcy5MYXJnZUFyY0ZsYWcgPSBzLCB0aGlzLlN3ZWVwRmxhZyA9IGEsIHRoaXMueDEgPSBvLCB0aGlzLnkxID0gZzsNCiAgICAgICAgdmFyIHUgPSBwKDMwMCwgKGZ1bmN0aW9uKHIpIHsNCiAgICAgICAgICAgIHJldHVybiBmKHsNCiAgICAgICAgICAgICAgICB4OiB0LA0KICAgICAgICAgICAgICAgIHk6IG4NCiAgICAgICAgICAgIH0sIGUsIGksIGgsIHMsIGEsIHsNCiAgICAgICAgICAgICAgICB4OiBvLA0KICAgICAgICAgICAgICAgIHk6IGcNCiAgICAgICAgICAgIH0sIHIpDQogICAgICAgIH0pKTsNCiAgICAgICAgdGhpcy5sZW5ndGggPSB1LmFyY0xlbmd0aA0KICAgIH0sDQogICAgZiA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIHIsIGgsIHMsIGEpIHsNCiAgICAgICAgbiA9IE1hdGguYWJzKG4pLCBlID0gTWF0aC5hYnMoZSksIGkgPSB5KGksIDM2MCk7DQogICAgICAgIHZhciBvID0geChpKTsNCiAgICAgICAgaWYgKHQueCA9PT0gcy54ICYmIHQueSA9PT0gcy55KSByZXR1cm4gew0KICAgICAgICAgICAgeDogdC54LA0KICAgICAgICAgICAgeTogdC55LA0KICAgICAgICAgICAgZWxsaXB0aWNhbEFyY0FuZ2xlOiAwDQogICAgICAgIH07DQogICAgICAgIGlmICgwID09PSBuIHx8IDAgPT09IGUpIHJldHVybiB7DQogICAgICAgICAgICB4OiAwLA0KICAgICAgICAgICAgeTogMCwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNBbmdsZTogMA0KICAgICAgICB9Ow0KICAgICAgICB2YXIgZyA9ICh0LnggLSBzLngpIC8gMiwNCiAgICAgICAgICAgIGMgPSAodC55IC0gcy55KSAvIDIsDQogICAgICAgICAgICB1ID0gew0KICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogZyArIE1hdGguc2luKG8pICogYywNCiAgICAgICAgICAgICAgICB5OiAtTWF0aC5zaW4obykgKiBnICsgTWF0aC5jb3MobykgKiBjDQogICAgICAgICAgICB9LA0KICAgICAgICAgICAgbCA9IE1hdGgucG93KHUueCwgMikgLyBNYXRoLnBvdyhuLCAyKSArIE1hdGgucG93KHUueSwgMikgLyBNYXRoLnBvdyhlLCAyKTsNCiAgICAgICAgbCA+IDEgJiYgKG4gPSBNYXRoLnNxcnQobCkgKiBuLCBlID0gTWF0aC5zcXJ0KGwpICogZSk7DQogICAgICAgIHZhciBmID0gKE1hdGgucG93KG4sIDIpICogTWF0aC5wb3coZSwgMikgLSBNYXRoLnBvdyhuLCAyKSAqIE1hdGgucG93KHUueSwgMikgLSBNYXRoLnBvdyhlLCAyKSAqIE1hdGgucG93KHUueCwgMikpIC8gKE1hdGgucG93KG4sIDIpICogTWF0aC5wb3codS55LCAyKSArIE1hdGgucG93KGUsIDIpICogTWF0aC5wb3codS54LCAyKSk7DQogICAgICAgIGYgPSBmIDwgMCA/IDAgOiBmOw0KICAgICAgICB2YXIgcCA9IChyICE9PSBoID8gMSA6IC0xKSAqIE1hdGguc3FydChmKSwNCiAgICAgICAgICAgIHYgPSBwICogKG4gKiB1LnkgLyBlKSwNCiAgICAgICAgICAgIGQgPSBwICogKC1lICogdS54IC8gbiksDQogICAgICAgICAgICB3ID0gew0KICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogdiAtIE1hdGguc2luKG8pICogZCArICh0LnggKyBzLngpIC8gMiwNCiAgICAgICAgICAgICAgICB5OiBNYXRoLnNpbihvKSAqIHYgKyBNYXRoLmNvcyhvKSAqIGQgKyAodC55ICsgcy55KSAvIDINCiAgICAgICAgICAgIH0sDQogICAgICAgICAgICBMID0gew0KICAgICAgICAgICAgICAgIHg6ICh1LnggLSB2KSAvIG4sDQogICAgICAgICAgICAgICAgeTogKHUueSAtIGQpIC8gZQ0KICAgICAgICAgICAgfSwNCiAgICAgICAgICAgIEEgPSBNKHsNCiAgICAgICAgICAgICAgICB4OiAxLA0KICAgICAgICAgICAgICAgIHk6IDANCiAgICAgICAgICAgIH0sIEwpLA0KICAgICAgICAgICAgbSA9IE0oTCwgew0KICAgICAgICAgICAgICAgIHg6ICgtdS54IC0gdikgLyBuLA0KICAgICAgICAgICAgICAgIHk6ICgtdS55IC0gZCkgLyBlDQogICAgICAgICAgICB9KTsNCiAgICAgICAgIWggJiYgbSA+IDAgPyBtIC09IDIgKiBNYXRoLlBJIDogaCAmJiBtIDwgMCAmJiAobSArPSAyICogTWF0aC5QSSk7DQogICAgICAgIHZhciBiID0gQSArIChtICU9IDIgKiBNYXRoLlBJKSAqIGEsDQogICAgICAgICAgICBQID0gbiAqIE1hdGguY29zKGIpLA0KICAgICAgICAgICAgVCA9IGUgKiBNYXRoLnNpbihiKTsNCiAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogUCAtIE1hdGguc2luKG8pICogVCArIHcueCwNCiAgICAgICAgICAgIHk6IE1hdGguc2luKG8pICogUCArIE1hdGguY29zKG8pICogVCArIHcueSwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNTdGFydEFuZ2xlOiBBLA0KICAgICAgICAgICAgZWxsaXB0aWNhbEFyY0VuZEFuZ2xlOiBBICsgbSwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNBbmdsZTogYiwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNDZW50ZXI6IHcsDQogICAgICAgICAgICByZXN1bHRhbnRSeDogbiwNCiAgICAgICAgICAgIHJlc3VsdGFudFJ5OiBlDQogICAgICAgIH0NCiAgICB9LA0KICAgIHAgPSBmdW5jdGlvbih0LCBuKSB7DQogICAgICAgIHQgPSB0IHx8IDUwMDsNCiAgICAgICAgZm9yICh2YXIgZSwgaSA9IDAsIHIgPSBbXSwgaCA9IFtdLCBzID0gbigwKSwgYSA9IDA7IGEgPCB0OyBhKyspIHsNCiAgICAgICAgICAgIHZhciBvID0gZChhICogKDEgLyB0KSwgMCwgMSk7DQogICAgICAgICAgICBlID0gbihvKSwgaSArPSB2KHMsIGUpLCBoLnB1c2goW3MsIGVdKSwgci5wdXNoKHsNCiAgICAgICAgICAgICAgICB0OiBvLA0KICAgICAgICAgICAgICAgIGFyY0xlbmd0aDogaQ0KICAgICAgICAgICAgfSksIHMgPSBlDQogICAgICAgIH0NCiAgICAgICAgcmV0dXJuIGUgPSBuKDEpLCBoLnB1c2goW3MsIGVdKSwgaSArPSB2KHMsIGUpLCByLnB1c2goew0KICAgICAgICAgICAgdDogMSwNCiAgICAgICAgICAgIGFyY0xlbmd0aDogaQ0KICAgICAgICB9KSwgew0KICAgICAgICAgICAgYXJjTGVuZ3RoOiBpLA0KICAgICAgICAgICAgYXJjTGVuZ3RoTWFwOiByLA0KICAgICAgICAgICAgYXBwcm94aW1hdGlvbkxpbmVzOiBoDQogICAgICAgIH0NCiAgICB9LA0KICAgIHkgPSBmdW5jdGlvbih0LCBuKSB7DQogICAgICAgIHJldHVybiAodCAlIG4gKyBuKSAlIG4NCiAgICB9LA0KICAgIHggPSBmdW5jdGlvbih0KSB7DQogICAgICAgIHJldHVybiB0ICogKE1hdGguUEkgLyAxODApDQogICAgfSwNCiAgICB2ID0gZnVuY3Rpb24odCwgbikgew0KICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KG4ueCAtIHQueCwgMikgKyBNYXRoLnBvdyhuLnkgLSB0LnksIDIpKQ0KICAgIH0sDQogICAgZCA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHQsIG4pLCBlKQ0KICAgIH0sDQogICAgTSA9IGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgdmFyIGUgPSB0LnggKiBuLnggKyB0LnkgKiBuLnksDQogICAgICAgICAgICBpID0gTWF0aC5zcXJ0KChNYXRoLnBvdyh0LngsIDIpICsgTWF0aC5wb3codC55LCAyKSkgKiAoTWF0aC5wb3cobi54LCAyKSArIE1hdGgucG93KG4ueSwgMikpKTsNCiAgICAgICAgcmV0dXJuICh0LnggKiBuLnkgLSB0LnkgKiBuLnggPCAwID8gLTEgOiAxKSAqIE1hdGguYWNvcyhlIC8gaSkNCiAgICB9LA0KICAgIHcgPSBbDQogICAgICAgIFtdLA0KICAgICAgICBbXSwNCiAgICAgICAgWy0uNTc3MzUwMjY5MTg5NjI1NywgLjU3NzM1MDI2OTE4OTYyNTddLA0KICAgICAgICBbMCwgLS43NzQ1OTY2NjkyNDE0ODM0LCAuNzc0NTk2NjY5MjQxNDgzNF0sDQogICAgICAgIFstLjMzOTk4MTA0MzU4NDg1NjI2LCAuMzM5OTgxMDQzNTg0ODU2MjYsIC0uODYxMTM2MzExNTk0MDUyNiwgLjg2MTEzNjMxMTU5NDA1MjZdLA0KICAgICAgICBbMCwgLS41Mzg0NjkzMTAxMDU2ODMxLCAuNTM4NDY5MzEwMTA1NjgzMSwgLS45MDYxNzk4NDU5Mzg2NjQsIC45MDYxNzk4NDU5Mzg2NjRdLA0KICAgICAgICBbLjY2MTIwOTM4NjQ2NjI2NDUsIC0uNjYxMjA5Mzg2NDY2MjY0NSwgLS4yMzg2MTkxODYwODMxOTY5LCAuMjM4NjE5MTg2MDgzMTk2OSwgLS45MzI0Njk1MTQyMDMxNTIsIC45MzI0Njk1MTQyMDMxNTJdLA0KICAgICAgICBbMCwgLjQwNTg0NTE1MTM3NzM5NzIsIC0uNDA1ODQ1MTUxMzc3Mzk3MiwgLS43NDE1MzExODU1OTkzOTQ1LCAuNzQxNTMxMTg1NTk5Mzk0NSwgLS45NDkxMDc5MTIzNDI3NTg1LCAuOTQ5MTA3OTEyMzQyNzU4NV0sDQogICAgICAgIFstLjE4MzQzNDY0MjQ5NTY0OTgsIC4xODM0MzQ2NDI0OTU2NDk4LCAtLjUyNTUzMjQwOTkxNjMyOSwgLjUyNTUzMjQwOTkxNjMyOSwgLS43OTY2NjY0Nzc0MTM2MjY3LCAuNzk2NjY2NDc3NDEzNjI2NywgLS45NjAyODk4NTY0OTc1MzYzLCAuOTYwMjg5ODU2NDk3NTM2M10sDQogICAgICAgIFswLCAtLjgzNjAzMTEwNzMyNjYzNTgsIC44MzYwMzExMDczMjY2MzU4LCAtLjk2ODE2MDIzOTUwNzYyNjEsIC45NjgxNjAyMzk1MDc2MjYxLCAtLjMyNDI1MzQyMzQwMzgwODksIC4zMjQyNTM0MjM0MDM4MDg5LCAtLjYxMzM3MTQzMjcwMDU5MDQsIC42MTMzNzE0MzI3MDA1OTA0XSwNCiAgICAgICAgWy0uMTQ4ODc0MzM4OTgxNjMxMjIsIC4xNDg4NzQzMzg5ODE2MzEyMiwgLS40MzMzOTUzOTQxMjkyNDcyLCAuNDMzMzk1Mzk0MTI5MjQ3MiwgLS42Nzk0MDk1NjgyOTkwMjQ0LCAuNjc5NDA5NTY4Mjk5MDI0NCwgLS44NjUwNjMzNjY2ODg5ODQ1LCAuODY1MDYzMzY2Njg4OTg0NSwgLS45NzM5MDY1Mjg1MTcxNzE3LCAuOTczOTA2NTI4NTE3MTcxN10sDQogICAgICAgIFswLCAtLjI2OTU0MzE1NTk1MjM0NDk2LCAuMjY5NTQzMTU1OTUyMzQ0OTYsIC0uNTE5MDk2MTI5MjA2ODExOCwgLjUxOTA5NjEyOTIwNjgxMTgsIC0uNzMwMTUyMDA1NTc0MDQ5NCwgLjczMDE1MjAwNTU3NDA0OTQsIC0uODg3MDYyNTk5NzY4MDk1MywgLjg4NzA2MjU5OTc2ODA5NTMsIC0uOTc4MjI4NjU4MTQ2MDU3LCAuOTc4MjI4NjU4MTQ2MDU3XSwNCiAgICAgICAgWy0uMTI1MjMzNDA4NTExNDY4OSwgLjEyNTIzMzQwODUxMTQ2ODksIC0uMzY3ODMxNDk4OTk4MTgwMiwgLjM2NzgzMTQ5ODk5ODE4MDIsIC0uNTg3MzE3OTU0Mjg2NjE3NSwgLjU4NzMxNzk1NDI4NjYxNzUsIC0uNzY5OTAyNjc0MTk0MzA0NywgLjc2OTkwMjY3NDE5NDMwNDcsIC0uOTA0MTE3MjU2MzcwNDc0OSwgLjkwNDExNzI1NjM3MDQ3NDksIC0uOTgxNTYwNjM0MjQ2NzE5MiwgLjk4MTU2MDYzNDI0NjcxOTJdLA0KICAgICAgICBbMCwgLS4yMzA0NTgzMTU5NTUxMzQ4LCAuMjMwNDU4MzE1OTU1MTM0OCwgLS40NDg0OTI3NTEwMzY0NDY4NywgLjQ0ODQ5Mjc1MTAzNjQ0Njg3LCAtLjY0MjM0OTMzOTQ0MDM0MDIsIC42NDIzNDkzMzk0NDAzNDAyLCAtLjgwMTU3ODA5MDczMzMwOTksIC44MDE1NzgwOTA3MzMzMDk5LCAtLjkxNzU5ODM5OTIyMjk3NzksIC45MTc1OTgzOTkyMjI5Nzc5LCAtLjk4NDE4MzA1NDcxODU4ODEsIC45ODQxODMwNTQ3MTg1ODgxXSwNCiAgICAgICAgWy0uMTA4MDU0OTQ4NzA3MzQzNjcsIC4xMDgwNTQ5NDg3MDczNDM2NywgLS4zMTkxMTIzNjg5Mjc4ODk3NCwgLjMxOTExMjM2ODkyNzg4OTc0LCAtLjUxNTI0ODYzNjM1ODE1NDEsIC41MTUyNDg2MzYzNTgxNTQxLCAtLjY4NzI5MjkwNDgxMTY4NTUsIC42ODcyOTI5MDQ4MTE2ODU1LCAtLjgyNzIwMTMxNTA2OTc2NSwgLjgyNzIwMTMxNTA2OTc2NSwgLS45Mjg0MzQ4ODM2NjM1NzM1LCAuOTI4NDM0ODgzNjYzNTczNSwgLS45ODYyODM4MDg2OTY4MTIzLCAuOTg2MjgzODA4Njk2ODEyM10sDQogICAgICAgIFswLCAtLjIwMTE5NDA5Mzk5NzQzNDUxLCAuMjAxMTk0MDkzOTk3NDM0NTEsIC0uMzk0MTUxMzQ3MDc3NTYzNCwgLjM5NDE1MTM0NzA3NzU2MzQsIC0uNTcwOTcyMTcyNjA4NTM4OCwgLjU3MDk3MjE3MjYwODUzODgsIC0uNzI0NDE3NzMxMzYwMTcwMSwgLjcyNDQxNzczMTM2MDE3MDEsIC0uODQ4MjA2NTgzNDEwNDI3MiwgLjg0ODIwNjU4MzQxMDQyNzIsIC0uOTM3MjczMzkyNDAwNzA2LCAuOTM3MjczMzkyNDAwNzA2LCAtLjk4Nzk5MjUxODAyMDQ4NTQsIC45ODc5OTI1MTgwMjA0ODU0XSwNCiAgICAgICAgWy0uMDk1MDEyNTA5ODM3NjM3NDQsIC4wOTUwMTI1MDk4Mzc2Mzc0NCwgLS4yODE2MDM1NTA3NzkyNTg5LCAuMjgxNjAzNTUwNzc5MjU4OSwgLS40NTgwMTY3Nzc2NTcyMjczNywgLjQ1ODAxNjc3NzY1NzIyNzM3LCAtLjYxNzg3NjI0NDQwMjY0MzgsIC42MTc4NzYyNDQ0MDI2NDM4LCAtLjc1NTQwNDQwODM1NTAwMywgLjc1NTQwNDQwODM1NTAwMywgLS44NjU2MzEyMDIzODc4MzE4LCAuODY1NjMxMjAyMzg3ODMxOCwgLS45NDQ1NzUwMjMwNzMyMzI2LCAuOTQ0NTc1MDIzMDczMjMyNiwgLS45ODk0MDA5MzQ5OTE2NDk5LCAuOTg5NDAwOTM0OTkxNjQ5OV0sDQogICAgICAgIFswLCAtLjE3ODQ4NDE4MTQ5NTg0Nzg1LCAuMTc4NDg0MTgxNDk1ODQ3ODUsIC0uMzUxMjMxNzYzNDUzODc2MywgLjM1MTIzMTc2MzQ1Mzg3NjMsIC0uNTEyNjkwNTM3MDg2NDc2OSwgLjUxMjY5MDUzNzA4NjQ3NjksIC0uNjU3NjcxMTU5MjE2NjkwNywgLjY1NzY3MTE1OTIxNjY5MDcsIC0uNzgxNTE0MDAzODk2ODAxNCwgLjc4MTUxNDAwMzg5NjgwMTQsIC0uODgwMjM5MTUzNzI2OTg1OSwgLjg4MDIzOTE1MzcyNjk4NTksIC0uOTUwNjc1NTIxNzY4NzY3OCwgLjk1MDY3NTUyMTc2ODc2NzgsIC0uOTkwNTc1NDc1MzE0NDE3NCwgLjk5MDU3NTQ3NTMxNDQxNzRdLA0KICAgICAgICBbLS4wODQ3NzUwMTMwNDE3MzUzLCAuMDg0Nzc1MDEzMDQxNzM1MywgLS4yNTE4ODYyMjU2OTE1MDU1LCAuMjUxODg2MjI1NjkxNTA1NSwgLS40MTE3NTExNjE0NjI4NDI2MywgLjQxMTc1MTE2MTQ2Mjg0MjYzLCAtLjU1OTc3MDgzMTA3Mzk0NzUsIC41NTk3NzA4MzEwNzM5NDc1LCAtLjY5MTY4NzA0MzA2MDM1MzIsIC42OTE2ODcwNDMwNjAzNTMyLCAtLjgwMzcwNDk1ODk3MjUyMzEsIC44MDM3MDQ5NTg5NzI1MjMxLCAtLjg5MjYwMjQ2NjQ5NzU1NTcsIC44OTI2MDI0NjY0OTc1NTU3LCAtLjk1NTgyMzk0OTU3MTM5NzcsIC45NTU4MjM5NDk1NzEzOTc3LCAtLjk5MTU2NTE2ODQyMDkzMDksIC45OTE1NjUxNjg0MjA5MzA5XSwNCiAgICAgICAgWzAsIC0uMTYwMzU4NjQ1NjQwMjI1MzcsIC4xNjAzNTg2NDU2NDAyMjUzNywgLS4zMTY1NjQwOTk5NjM2Mjk4MywgLjMxNjU2NDA5OTk2MzYyOTgzLCAtLjQ2NDU3MDc0MTM3NTk2MDk0LCAuNDY0NTcwNzQxMzc1OTYwOTQsIC0uNjAwNTQ1MzA0NjYxNjgxLCAuNjAwNTQ1MzA0NjYxNjgxLCAtLjcyMDk2NjE3NzMzNTIyOTQsIC43MjA5NjYxNzczMzUyMjk0LCAtLjgyMjcxNDY1NjUzNzE0MjgsIC44MjI3MTQ2NTY1MzcxNDI4LCAtLjkwMzE1NTkwMzYxNDgxNzksIC45MDMxNTU5MDM2MTQ4MTc5LCAtLjk2MDIwODE1MjEzNDgzLCAuOTYwMjA4MTUyMTM0ODMsIC0uOTkyNDA2ODQzODQzNTg0NCwgLjk5MjQwNjg0Mzg0MzU4NDRdLA0KICAgICAgICBbLS4wNzY1MjY1MjExMzM0OTczNCwgLjA3NjUyNjUyMTEzMzQ5NzM0LCAtLjIyNzc4NTg1MTE0MTY0NTA3LCAuMjI3Nzg1ODUxMTQxNjQ1MDcsIC0uMzczNzA2MDg4NzE1NDE5NTUsIC4zNzM3MDYwODg3MTU0MTk1NSwgLS41MTA4NjcwMDE5NTA4MjcxLCAuNTEwODY3MDAxOTUwODI3MSwgLS42MzYwNTM2ODA3MjY1MTUsIC42MzYwNTM2ODA3MjY1MTUsIC0uNzQ2MzMxOTA2NDYwMTUwOCwgLjc0NjMzMTkwNjQ2MDE1MDgsIC0uODM5MTE2OTcxODIyMjE4OCwgLjgzOTExNjk3MTgyMjIxODgsIC0uOTEyMjM0NDI4MjUxMzI2LCAuOTEyMjM0NDI4MjUxMzI2LCAtLjk2Mzk3MTkyNzI3NzkxMzgsIC45NjM5NzE5MjcyNzc5MTM4LCAtLjk5MzEyODU5OTE4NTA5NDksIC45OTMxMjg1OTkxODUwOTQ5XSwNCiAgICAgICAgWzAsIC0uMTQ1NTYxODU0MTYwODk1MSwgLjE0NTU2MTg1NDE2MDg5NTEsIC0uMjg4MDIxMzE2ODAyNDAxMSwgLjI4ODAyMTMxNjgwMjQwMTEsIC0uNDI0MzQyMTIwMjA3NDM4OCwgLjQyNDM0MjEyMDIwNzQzODgsIC0uNTUxNjE4ODM1ODg3MjE5OCwgLjU1MTYxODgzNTg4NzIxOTgsIC0uNjY3MTM4ODA0MTk3NDEyMywgLjY2NzEzODgwNDE5NzQxMjMsIC0uNzY4NDM5OTYzNDc1Njc3OSwgLjc2ODQzOTk2MzQ3NTY3NzksIC0uODUzMzYzMzY0NTgzMzE3MywgLjg1MzM2MzM2NDU4MzMxNzMsIC0uOTIwMDk5MzM0MTUwNDAwOCwgLjkyMDA5OTMzNDE1MDQwMDgsIC0uOTY3MjI2ODM4NTY2MzA2MywgLjk2NzIyNjgzODU2NjMwNjMsIC0uOTkzNzUyMTcwNjIwMzg5NSwgLjk5Mzc1MjE3MDYyMDM4OTVdLA0KICAgICAgICBbLS4wNjk3MzkyNzMzMTk3MjIyMywgLjA2OTczOTI3MzMxOTcyMjIzLCAtLjIwNzg2MDQyNjY4ODIyMTI3LCAuMjA3ODYwNDI2Njg4MjIxMjcsIC0uMzQxOTM1ODIwODkyMDg0MjQsIC4zNDE5MzU4MjA4OTIwODQyNCwgLS40NjkzNTU4Mzc5ODY3NTcsIC40NjkzNTU4Mzc5ODY3NTcsIC0uNTg3NjQwNDAzNTA2OTExNiwgLjU4NzY0MDQwMzUwNjkxMTYsIC0uNjk0NDg3MjYzMTg2NjgyNywgLjY5NDQ4NzI2MzE4NjY4MjcsIC0uNzg3ODE2ODA1OTc5MjA4MSwgLjc4NzgxNjgwNTk3OTIwODEsIC0uODY1ODEyNTc3NzIwMzAwMiwgLjg2NTgxMjU3NzcyMDMwMDIsIC0uOTI2OTU2NzcyMTg3MTc0LCAuOTI2OTU2NzcyMTg3MTc0LCAtLjk3MDA2MDQ5NzgzNTQyODcsIC45NzAwNjA0OTc4MzU0Mjg3LCAtLjk5NDI5NDU4NTQ4MjM5OTIsIC45OTQyOTQ1ODU0ODIzOTkyXSwNCiAgICAgICAgWzAsIC0uMTMzMjU2ODI0Mjk4NDY2MSwgLjEzMzI1NjgyNDI5ODQ2NjEsIC0uMjY0MTM1NjgwOTcwMzQ0OTUsIC4yNjQxMzU2ODA5NzAzNDQ5NSwgLS4zOTAzMDEwMzgwMzAyOTA4LCAuMzkwMzAxMDM4MDMwMjkwOCwgLS41MDk1MDE0Nzc4NDYwMDc1LCAuNTA5NTAxNDc3ODQ2MDA3NSwgLS42MTk2MDk4NzU3NjM2NDYxLCAuNjE5NjA5ODc1NzYzNjQ2MSwgLS43MTg2NjEzNjMxMzE5NTAyLCAuNzE4NjYxMzYzMTMxOTUwMiwgLS44MDQ4ODg0MDE2MTg4Mzk5LCAuODA0ODg4NDAxNjE4ODM5OSwgLS44NzY3NTIzNTgyNzA0NDE2LCAuODc2NzUyMzU4MjcwNDQxNiwgLS45MzI5NzEwODY4MjYwMTYxLCAuOTMyOTcxMDg2ODI2MDE2MSwgLS45NzI1NDI0NzEyMTgxMTUyLCAuOTcyNTQyNDcxMjE4MTE1MiwgLS45OTQ3NjkzMzQ5OTc1NTIyLCAuOTk0NzY5MzM0OTk3NTUyMl0sDQogICAgICAgIFstLjA2NDA1Njg5Mjg2MjYwNTYzLCAuMDY0MDU2ODkyODYyNjA1NjMsIC0uMTkxMTE4ODY3NDczNjE2MywgLjE5MTExODg2NzQ3MzYxNjMsIC0uMzE1MDQyNjc5Njk2MTYzNCwgLjMxNTA0MjY3OTY5NjE2MzQsIC0uNDMzNzkzNTA3NjI2MDQ1MSwgLjQzMzc5MzUwNzYyNjA0NTEsIC0uNTQ1NDIxNDcxMzg4ODM5NiwgLjU0NTQyMTQ3MTM4ODgzOTYsIC0uNjQ4MDkzNjUxOTM2OTc1NSwgLjY0ODA5MzY1MTkzNjk3NTUsIC0uNzQwMTI0MTkxNTc4NTU0NCwgLjc0MDEyNDE5MTU3ODU1NDQsIC0uODIwMDAxOTg1OTczOTAzLCAuODIwMDAxOTg1OTczOTAzLCAtLjg4NjQxNTUyNzAwNDQwMTEsIC44ODY0MTU1MjcwMDQ0MDExLCAtLjkzODI3NDU1MjAwMjczMjgsIC45MzgyNzQ1NTIwMDI3MzI4LCAtLjk3NDcyODU1NTk3MTMwOTUsIC45NzQ3Mjg1NTU5NzEzMDk1LCAtLjk5NTE4NzIxOTk5NzAyMTMsIC45OTUxODcyMTk5OTcwMjEzXQ0KICAgIF0sDQogICAgTCA9IFsNCiAgICAgICAgW10sDQogICAgICAgIFtdLA0KICAgICAgICBbMSwgMV0sDQogICAgICAgIFsuODg4ODg4ODg4ODg4ODg4OCwgLjU1NTU1NTU1NTU1NTU1NTYsIC41NTU1NTU1NTU1NTU1NTU2XSwNCiAgICAgICAgWy42NTIxNDUxNTQ4NjI1NDYxLCAuNjUyMTQ1MTU0ODYyNTQ2MSwgLjM0Nzg1NDg0NTEzNzQ1Mzg1LCAuMzQ3ODU0ODQ1MTM3NDUzODVdLA0KICAgICAgICBbLjU2ODg4ODg4ODg4ODg4ODksIC40Nzg2Mjg2NzA0OTkzNjY0NywgLjQ3ODYyODY3MDQ5OTM2NjQ3LCAuMjM2OTI2ODg1MDU2MTg5MDgsIC4yMzY5MjY4ODUwNTYxODkwOF0sDQogICAgICAgIFsuMzYwNzYxNTczMDQ4MTM4NiwgLjM2MDc2MTU3MzA0ODEzODYsIC40Njc5MTM5MzQ1NzI2OTEwNCwgLjQ2NzkxMzkzNDU3MjY5MTA0LCAuMTcxMzI0NDkyMzc5MTcwMzYsIC4xNzEzMjQ0OTIzNzkxNzAzNl0sDQogICAgICAgIFsuNDE3OTU5MTgzNjczNDY5NCwgLjM4MTgzMDA1MDUwNTExODksIC4zODE4MzAwNTA1MDUxMTg5LCAuMjc5NzA1MzkxNDg5Mjc2NjQsIC4yNzk3MDUzOTE0ODkyNzY2NCwgLjEyOTQ4NDk2NjE2ODg2OTcsIC4xMjk0ODQ5NjYxNjg4Njk3XSwNCiAgICAgICAgWy4zNjI2ODM3ODMzNzgzNjIsIC4zNjI2ODM3ODMzNzgzNjIsIC4zMTM3MDY2NDU4Nzc4ODcyNywgLjMxMzcwNjY0NTg3Nzg4NzI3LCAuMjIyMzgxMDM0NDUzMzc0NDgsIC4yMjIzODEwMzQ0NTMzNzQ0OCwgLjEwMTIyODUzNjI5MDM3NjI2LCAuMTAxMjI4NTM2MjkwMzc2MjZdLA0KICAgICAgICBbLjMzMDIzOTM1NTAwMTI1OTgsIC4xODA2NDgxNjA2OTQ4NTc0LCAuMTgwNjQ4MTYwNjk0ODU3NCwgLjA4MTI3NDM4ODM2MTU3NDQxLCAuMDgxMjc0Mzg4MzYxNTc0NDEsIC4zMTIzNDcwNzcwNDAwMDI4NiwgLjMxMjM0NzA3NzA0MDAwMjg2LCAuMjYwNjEwNjk2NDAyOTM1NDQsIC4yNjA2MTA2OTY0MDI5MzU0NF0sDQogICAgICAgIFsuMjk1NTI0MjI0NzE0NzUyODcsIC4yOTU1MjQyMjQ3MTQ3NTI4NywgLjI2OTI2NjcxOTMwOTk5NjM1LCAuMjY5MjY2NzE5MzA5OTk2MzUsIC4yMTkwODYzNjI1MTU5ODIwNCwgLjIxOTA4NjM2MjUxNTk4MjA0LCAuMTQ5NDUxMzQ5MTUwNTgwNiwgLjE0OTQ1MTM0OTE1MDU4MDYsIC4wNjY2NzEzNDQzMDg2ODgxNCwgLjA2NjY3MTM0NDMwODY4ODE0XSwNCiAgICAgICAgWy4yNzI5MjUwODY3Nzc5MDA2LCAuMjYyODA0NTQ0NTEwMjQ2NjUsIC4yNjI4MDQ1NDQ1MTAyNDY2NSwgLjIzMzE5Mzc2NDU5MTk5MDQ4LCAuMjMzMTkzNzY0NTkxOTkwNDgsIC4xODYyOTAyMTA5Mjc3MzQyNiwgLjE4NjI5MDIxMDkyNzczNDI2LCAuMTI1NTgwMzY5NDY0OTA0NiwgLjEyNTU4MDM2OTQ2NDkwNDYsIC4wNTU2Njg1NjcxMTYxNzM2NiwgLjA1NTY2ODU2NzExNjE3MzY2XSwNCiAgICAgICAgWy4yNDkxNDcwNDU4MTM0MDI3NywgLjI0OTE0NzA0NTgxMzQwMjc3LCAuMjMzNDkyNTM2NTM4MzU0OCwgLjIzMzQ5MjUzNjUzODM1NDgsIC4yMDMxNjc0MjY3MjMwNjU5MiwgLjIwMzE2NzQyNjcyMzA2NTkyLCAuMTYwMDc4MzI4NTQzMzQ2MjIsIC4xNjAwNzgzMjg1NDMzNDYyMiwgLjEwNjkzOTMyNTk5NTMxODQzLCAuMTA2OTM5MzI1OTk1MzE4NDMsIC4wNDcxNzUzMzYzODY1MTE4MywgLjA0NzE3NTMzNjM4NjUxMTgzXSwNCiAgICAgICAgWy4yMzI1NTE1NTMyMzA4NzM5LCAuMjI2MjgzMTgwMjYyODk3MjMsIC4yMjYyODMxODAyNjI4OTcyMywgLjIwNzgxNjA0NzUzNjg4ODUsIC4yMDc4MTYwNDc1MzY4ODg1LCAuMTc4MTQ1OTgwNzYxOTQ1NzQsIC4xNzgxNDU5ODA3NjE5NDU3NCwgLjEzODg3MzUxMDIxOTc4NzI1LCAuMTM4ODczNTEwMjE5Nzg3MjUsIC4wOTIxMjE0OTk4Mzc3Mjg0NSwgLjA5MjEyMTQ5OTgzNzcyODQ1LCAuMDQwNDg0MDA0NzY1MzE1ODgsIC4wNDA0ODQwMDQ3NjUzMTU4OF0sDQogICAgICAgIFsuMjE1MjYzODUzNDYzMTU3OCwgLjIxNTI2Mzg1MzQ2MzE1NzgsIC4yMDUxOTg0NjM3MjEyOTU2LCAuMjA1MTk4NDYzNzIxMjk1NiwgLjE4NTUzODM5NzQ3NzkzNzgyLCAuMTg1NTM4Mzk3NDc3OTM3ODIsIC4xNTcyMDMxNjcxNTgxOTM1NSwgLjE1NzIwMzE2NzE1ODE5MzU1LCAuMTIxNTE4NTcwNjg3OTAzMTksIC4xMjE1MTg1NzA2ODc5MDMxOSwgLjA4MDE1ODA4NzE1OTc2MDIxLCAuMDgwMTU4MDg3MTU5NzYwMjEsIC4wMzUxMTk0NjAzMzE3NTE4NiwgLjAzNTExOTQ2MDMzMTc1MTg2XSwNCiAgICAgICAgWy4yMDI1NzgyNDE5MjU1NjEzLCAuMTk4NDMxNDg1MzI3MTExNTgsIC4xOTg0MzE0ODUzMjcxMTE1OCwgLjE4NjE2MTAwMDAxNTU2MjIsIC4xODYxNjEwMDAwMTU1NjIyLCAuMTY2MjY5MjA1ODE2OTkzOTIsIC4xNjYyNjkyMDU4MTY5OTM5MiwgLjEzOTU3MDY3NzkyNjE1NDMyLCAuMTM5NTcwNjc3OTI2MTU0MzIsIC4xMDcxNTkyMjA0NjcxNzE5NCwgLjEwNzE1OTIyMDQ2NzE3MTk0LCAuMDcwMzY2MDQ3NDg4MTA4MTIsIC4wNzAzNjYwNDc0ODgxMDgxMiwgLjAzMDc1MzI0MTk5NjExNzI3LCAuMDMwNzUzMjQxOTk2MTE3MjddLA0KICAgICAgICBbLjE4OTQ1MDYxMDQ1NTA2ODUsIC4xODk0NTA2MTA0NTUwNjg1LCAuMTgyNjAzNDE1MDQ0OTIzNTgsIC4xODI2MDM0MTUwNDQ5MjM1OCwgLjE2OTE1NjUxOTM5NTAwMjU0LCAuMTY5MTU2NTE5Mzk1MDAyNTQsIC4xNDk1OTU5ODg4MTY1NzY3NCwgLjE0OTU5NTk4ODgxNjU3Njc0LCAuMTI0NjI4OTcxMjU1NTMzODgsIC4xMjQ2Mjg5NzEyNTU1MzM4OCwgLjA5NTE1ODUxMTY4MjQ5Mjc5LCAuMDk1MTU4NTExNjgyNDkyNzksIC4wNjIyNTM1MjM5Mzg2NDc4OTQsIC4wNjIyNTM1MjM5Mzg2NDc4OTQsIC4wMjcxNTI0NTk0MTE3NTQwOTYsIC4wMjcxNTI0NTk0MTE3NTQwOTZdLA0KICAgICAgICBbLjE3OTQ0NjQ3MDM1NjIwNjUzLCAuMTc2NTYyNzA1MzY2OTkyNjQsIC4xNzY1NjI3MDUzNjY5OTI2NCwgLjE2ODAwNDEwMjE1NjQ1MDA0LCAuMTY4MDA0MTAyMTU2NDUwMDQsIC4xNTQwNDU3NjEwNzY4MTAyOCwgLjE1NDA0NTc2MTA3NjgxMDI4LCAuMTM1MTM2MzY4NDY4NTI1NDgsIC4xMzUxMzYzNjg0Njg1MjU0OCwgLjExMTg4Mzg0NzE5MzQwMzk3LCAuMTExODgzODQ3MTkzNDAzOTcsIC4wODUwMzYxNDgzMTcxNzkxOCwgLjA4NTAzNjE0ODMxNzE3OTE4LCAuMDU1NDU5NTI5MzczOTg3MiwgLjA1NTQ1OTUyOTM3Mzk4NzIsIC4wMjQxNDgzMDI4Njg1NDc5MywgLjAyNDE0ODMwMjg2ODU0NzkzXSwNCiAgICAgICAgWy4xNjkxNDIzODI5NjMxNDM2LCAuMTY5MTQyMzgyOTYzMTQzNiwgLjE2NDI3NjQ4Mzc0NTgzMjczLCAuMTY0Mjc2NDgzNzQ1ODMyNzMsIC4xNTQ2ODQ2NzUxMjYyNjUyNCwgLjE1NDY4NDY3NTEyNjI2NTI0LCAuMTQwNjQyOTE0NjcwNjUwNjUsIC4xNDA2NDI5MTQ2NzA2NTA2NSwgLjEyMjU1NTIwNjcxMTQ3ODQ2LCAuMTIyNTU1MjA2NzExNDc4NDYsIC4xMDA5NDIwNDQxMDYyODcxNywgLjEwMDk0MjA0NDEwNjI4NzE3LCAuMDc2NDI1NzMwMjU0ODg5MDUsIC4wNzY0MjU3MzAyNTQ4ODkwNSwgLjA0OTcxNDU0ODg5NDk2OTgsIC4wNDk3MTQ1NDg4OTQ5Njk4LCAuMDIxNjE2MDEzNTI2NDgzMzEsIC4wMjE2MTYwMTM1MjY0ODMzMV0sDQogICAgICAgIFsuMTYxMDU0NDQ5ODQ4NzgzNywgLjE1ODk2ODg0MzM5Mzk1NDM0LCAuMTU4OTY4ODQzMzkzOTU0MzQsIC4xNTI3NjYwNDIwNjU4NTk2NywgLjE1Mjc2NjA0MjA2NTg1OTY3LCAuMTQyNjA2NzAyMTczNjA2NiwgLjE0MjYwNjcwMjE3MzYwNjYsIC4xMjg3NTM5NjI1MzkzMzYyMSwgLjEyODc1Mzk2MjUzOTMzNjIxLCAuMTExNTY2NjQ1NTQ3MzMzOTksIC4xMTE1NjY2NDU1NDczMzM5OSwgLjA5MTQ5MDAyMTYyMjQ1LCAuMDkxNDkwMDIxNjIyNDUsIC4wNjkwNDQ1NDI3Mzc2NDEyMywgLjA2OTA0NDU0MjczNzY0MTIzLCAuMDQ0ODE0MjI2NzY1Njk5NiwgLjA0NDgxNDIyNjc2NTY5OTYsIC4wMTk0NjE3ODgyMjk3MjY0NzgsIC4wMTk0NjE3ODgyMjk3MjY0NzhdLA0KICAgICAgICBbLjE1Mjc1MzM4NzEzMDcyNTg0LCAuMTUyNzUzMzg3MTMwNzI1ODQsIC4xNDkxNzI5ODY0NzI2MDM3NCwgLjE0OTE3Mjk4NjQ3MjYwMzc0LCAuMTQyMDk2MTA5MzE4MzgyMDQsIC4xNDIwOTYxMDkzMTgzODIwNCwgLjEzMTY4ODYzODQ0OTE3NjY0LCAuMTMxNjg4NjM4NDQ5MTc2NjQsIC4xMTgxOTQ1MzE5NjE1MTg0MSwgLjExODE5NDUzMTk2MTUxODQxLCAuMTAxOTMwMTE5ODE3MjQwNDQsIC4xMDE5MzAxMTk4MTcyNDA0NCwgLjA4MzI3Njc0MTU3NjcwNDc1LCAuMDgzMjc2NzQxNTc2NzA0NzUsIC4wNjI2NzIwNDgzMzQxMDkwNywgLjA2MjY3MjA0ODMzNDEwOTA3LCAuMDQwNjAxNDI5ODAwMzg2OTQsIC4wNDA2MDE0Mjk4MDAzODY5NCwgLjAxNzYxNDAwNzEzOTE1MjExOCwgLjAxNzYxNDAwNzEzOTE1MjExOF0sDQogICAgICAgIFsuMTQ2MDgxMTMzNjQ5NjkwNDEsIC4xNDQ1MjQ0MDM5ODk5NzAwNSwgLjE0NDUyNDQwMzk4OTk3MDA1LCAuMTM5ODg3Mzk0NzkxMDczMTUsIC4xMzk4ODczOTQ3OTEwNzMxNSwgLjEzMjI2ODkzODYzMzMzNzQ3LCAuMTMyMjY4OTM4NjMzMzM3NDcsIC4xMjE4MzE0MTYwNTM3Mjg1MywgLjEyMTgzMTQxNjA1MzcyODUzLCAuMTA4Nzk3Mjk5MTY3MTQ4MzgsIC4xMDg3OTcyOTkxNjcxNDgzOCwgLjA5MzQ0NDQyMzQ1NjAzMzg2LCAuMDkzNDQ0NDIzNDU2MDMzODYsIC4wNzYxMDAxMTM2MjgzNzkzLCAuMDc2MTAwMTEzNjI4Mzc5MywgLjA1NzEzNDQyNTQyNjg1NzIwNSwgLjA1NzEzNDQyNTQyNjg1NzIwNSwgLjAzNjk1Mzc4OTc3MDg1MjQ5NCwgLjAzNjk1Mzc4OTc3MDg1MjQ5NCwgLjAxNjAxNzIyODI1Nzc3NDMzNSwgLjAxNjAxNzIyODI1Nzc3NDMzNV0sDQogICAgICAgIFsuMTM5MjUxODcyODU1NjMxOTgsIC4xMzkyNTE4NzI4NTU2MzE5OCwgLjEzNjU0MTQ5ODM0NjAxNTE3LCAuMTM2NTQxNDk4MzQ2MDE1MTcsIC4xMzExNzM1MDQ3ODcwNjIzOCwgLjEzMTE3MzUwNDc4NzA2MjM4LCAuMTIzMjUyMzc2ODEwNTEyNDIsIC4xMjMyNTIzNzY4MTA1MTI0MiwgLjExMjkzMjI5NjA4MDUzOTIyLCAuMTEyOTMyMjk2MDgwNTM5MjIsIC4xMDA0MTQxNDQ0NDI4ODA5NiwgLjEwMDQxNDE0NDQ0Mjg4MDk2LCAuMDg1OTQxNjA2MjE3MDY3NzMsIC4wODU5NDE2MDYyMTcwNjc3MywgLjA2OTc5NjQ2ODQyNDUyMDQ5LCAuMDY5Nzk2NDY4NDI0NTIwNDksIC4wNTIyOTMzMzUxNTI2ODMyODYsIC4wNTIyOTMzMzUxNTI2ODMyODYsIC4wMzM3NzQ5MDE1ODQ4MTQxNSwgLjAzMzc3NDkwMTU4NDgxNDE1LCAuMDE0NjI3OTk1Mjk4MjcyMiwgLjAxNDYyNzk5NTI5ODI3MjJdLA0KICAgICAgICBbLjEzMzY1NDU3MjE4NjEwNjE5LCAuMTMyNDYyMDM5NDA0Njk2NiwgLjEzMjQ2MjAzOTQwNDY5NjYsIC4xMjg5MDU3MjIxODgwODIxNiwgLjEyODkwNTcyMjE4ODA4MjE2LCAuMTIzMDQ5MDg0MzA2NzI5NTMsIC4xMjMwNDkwODQzMDY3Mjk1MywgLjExNDk5NjY0MDIyMjQxMTM2LCAuMTE0OTk2NjQwMjIyNDExMzYsIC4xMDQ4OTIwOTE0NjQ1NDE0MSwgLjEwNDg5MjA5MTQ2NDU0MTQxLCAuMDkyOTE1NzY2MDYwMDM1MTUsIC4wOTI5MTU3NjYwNjAwMzUxNSwgLjA3OTI4MTQxMTc3NjcxODk1LCAuMDc5MjgxNDExNzc2NzE4OTUsIC4wNjQyMzI0MjE0MDg1MjU4NSwgLjA2NDIzMjQyMTQwODUyNTg1LCAuMDQ4MDM3NjcxNzMxMDg0NjcsIC4wNDgwMzc2NzE3MzEwODQ2NywgLjAzMDk4ODAwNTg1Njk3OTQ0NSwgLjAzMDk4ODAwNTg1Njk3OTQ0NSwgLjAxMzQxMTg1OTQ4NzE0MTc3MSwgLjAxMzQxMTg1OTQ4NzE0MTc3MV0sDQogICAgICAgIFsuMTI3OTM4MTk1MzQ2NzUyMTYsIC4xMjc5MzgxOTUzNDY3NTIxNiwgLjEyNTgzNzQ1NjM0NjgyODMsIC4xMjU4Mzc0NTYzNDY4MjgzLCAuMTIxNjcwNDcyOTI3ODAzMzksIC4xMjE2NzA0NzI5Mjc4MDMzOSwgLjExNTUwNTY2ODA1MzcyNTYsIC4xMTU1MDU2NjgwNTM3MjU2LCAuMTA3NDQ0MjcwMTE1OTY1NjMsIC4xMDc0NDQyNzAxMTU5NjU2MywgLjA5NzYxODY1MjEwNDExMzg4LCAuMDk3NjE4NjUyMTA0MTEzODgsIC4wODYxOTAxNjE1MzE5NTMyNywgLjA4NjE5MDE2MTUzMTk1MzI3LCAuMDczMzQ2NDgxNDExMDgwMywgLjA3MzM0NjQ4MTQxMTA4MDMsIC4wNTkyOTg1ODQ5MTU0MzY3OCwgLjA1OTI5ODU4NDkxNTQzNjc4LCAuMDQ0Mjc3NDM4ODE3NDE5ODEsIC4wNDQyNzc0Mzg4MTc0MTk4MSwgLjAyODUzMTM4ODYyODkzMzY2MywgLjAyODUzMTM4ODYyODkzMzY2MywgLjAxMjM0MTIyOTc5OTk4NzIsIC4wMTIzNDEyMjk3OTk5ODcyXQ0KICAgIF0sDQogICAgQSA9IFsNCiAgICAgICAgWzFdLA0KICAgICAgICBbMSwgMV0sDQogICAgICAgIFsxLCAyLCAxXSwNCiAgICAgICAgWzEsIDMsIDMsIDFdDQogICAgXSwNCiAgICBtID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgeDogKDEgLSBlKSAqICgxIC0gZSkgKiAoMSAtIGUpICogdFswXSArIDMgKiAoMSAtIGUpICogKDEgLSBlKSAqIGUgKiB0WzFdICsgMyAqICgxIC0gZSkgKiBlICogZSAqIHRbMl0gKyBlICogZSAqIGUgKiB0WzNdLA0KICAgICAgICAgICAgeTogKDEgLSBlKSAqICgxIC0gZSkgKiAoMSAtIGUpICogblswXSArIDMgKiAoMSAtIGUpICogKDEgLSBlKSAqIGUgKiBuWzFdICsgMyAqICgxIC0gZSkgKiBlICogZSAqIG5bMl0gKyBlICogZSAqIGUgKiBuWzNdDQogICAgICAgIH0NCiAgICB9LA0KICAgIGIgPSBmdW5jdGlvbih0LCBuLCBlKSB7DQogICAgICAgIHJldHVybiBUKFszICogKHRbMV0gLSB0WzBdKSwgMyAqICh0WzJdIC0gdFsxXSksIDMgKiAodFszXSAtIHRbMl0pXSwgWzMgKiAoblsxXSAtIG5bMF0pLCAzICogKG5bMl0gLSBuWzFdKSwgMyAqIChuWzNdIC0gblsyXSldLCBlKQ0KICAgIH0sDQogICAgUCA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgdmFyIGksIHIsIGg7DQogICAgICAgIGkgPSBlIC8gMiwgciA9IDA7DQogICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgMjA7IHMrKykgaCA9IGkgKiB3WzIwXVtzXSArIGksIHIgKz0gTFsyMF1bc10gKiBfKHQsIG4sIGgpOw0KICAgICAgICByZXR1cm4gaSAqIHINCiAgICB9LA0KICAgIFQgPSBmdW5jdGlvbih0LCBuLCBlKSB7DQogICAgICAgIHJldHVybiB7DQogICAgICAgICAgICB4OiAoMSAtIGUpICogKDEgLSBlKSAqIHRbMF0gKyAyICogKDEgLSBlKSAqIGUgKiB0WzFdICsgZSAqIGUgKiB0WzJdLA0KICAgICAgICAgICAgeTogKDEgLSBlKSAqICgxIC0gZSkgKiBuWzBdICsgMiAqICgxIC0gZSkgKiBlICogblsxXSArIGUgKiBlICogblsyXQ0KICAgICAgICB9DQogICAgfSwNCiAgICBxID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAxKTsNCiAgICAgICAgdmFyIGkgPSB0WzBdIC0gMiAqIHRbMV0gKyB0WzJdLA0KICAgICAgICAgICAgciA9IG5bMF0gLSAyICogblsxXSArIG5bMl0sDQogICAgICAgICAgICBoID0gMiAqIHRbMV0gLSAyICogdFswXSwNCiAgICAgICAgICAgIHMgPSAyICogblsxXSAtIDIgKiBuWzBdLA0KICAgICAgICAgICAgYSA9IDQgKiAoaSAqIGkgKyByICogciksDQogICAgICAgICAgICBvID0gNCAqIChpICogaCArIHIgKiBzKSwNCiAgICAgICAgICAgIGcgPSBoICogaCArIHMgKiBzOw0KICAgICAgICBpZiAoMCA9PT0gYSkgcmV0dXJuIGUgKiBNYXRoLnNxcnQoTWF0aC5wb3codFsyXSAtIHRbMF0sIDIpICsgTWF0aC5wb3coblsyXSAtIG5bMF0sIDIpKTsNCiAgICAgICAgdmFyIGMgPSBvIC8gKDIgKiBhKSwNCiAgICAgICAgICAgIHUgPSBlICsgYywNCiAgICAgICAgICAgIGwgPSBnIC8gYSAtIGMgKiBjLA0KICAgICAgICAgICAgZiA9IHUgKiB1ICsgbCA+IDAgPyBNYXRoLnNxcnQodSAqIHUgKyBsKSA6IDAsDQogICAgICAgICAgICBwID0gYyAqIGMgKyBsID4gMCA/IE1hdGguc3FydChjICogYyArIGwpIDogMCwNCiAgICAgICAgICAgIHkgPSBjICsgTWF0aC5zcXJ0KGMgKiBjICsgbCkgIT09IDAgPyBsICogTWF0aC5sb2coTWF0aC5hYnMoKHUgKyBmKSAvIChjICsgcCkpKSA6IDA7DQogICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSkgLyAyICogKHUgKiBmIC0gYyAqIHAgKyB5KQ0KICAgIH0sDQogICAgTiA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgIHg6IDIgKiAoMSAtIGUpICogKHRbMV0gLSB0WzBdKSArIDIgKiBlICogKHRbMl0gLSB0WzFdKSwNCiAgICAgICAgICAgIHk6IDIgKiAoMSAtIGUpICogKG5bMV0gLSBuWzBdKSArIDIgKiBlICogKG5bMl0gLSBuWzFdKQ0KICAgICAgICB9DQogICAgfTsNCg0KZnVuY3Rpb24gXyh0LCBuLCBlKSB7DQogICAgdmFyIGkgPSBPKDEsIGUsIHQpLA0KICAgICAgICByID0gTygxLCBlLCBuKSwNCiAgICAgICAgaCA9IGkgKiBpICsgciAqIHI7DQogICAgcmV0dXJuIE1hdGguc3FydChoKQ0KfQ0KdmFyIE8gPSBmdW5jdGlvbiB0KG4sIGUsIGkpIHsNCiAgICAgICAgdmFyIHIsIGgsIHMgPSBpLmxlbmd0aCAtIDE7DQogICAgICAgIGlmICgwID09PSBzKSByZXR1cm4gMDsNCiAgICAgICAgaWYgKDAgPT09IG4pIHsNCiAgICAgICAgICAgIGggPSAwOw0KICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPD0gczsgYSsrKSBoICs9IEFbc11bYV0gKiBNYXRoLnBvdygxIC0gZSwgcyAtIGEpICogTWF0aC5wb3coZSwgYSkgKiBpW2FdOw0KICAgICAgICAgICAgcmV0dXJuIGgNCiAgICAgICAgfQ0KICAgICAgICByID0gbmV3IEFycmF5KHMpOw0KICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHM7IG8rKykgcltvXSA9IHMgKiAoaVtvICsgMV0gLSBpW29dKTsNCiAgICAgICAgcmV0dXJuIHQobiAtIDEsIGUsIHIpDQogICAgfSwNCiAgICBTID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICBmb3IgKHZhciBpID0gMSwgciA9IHQgLyBuLCBoID0gKHQgLSBlKHIpKSAvIG4sIHMgPSAwOyBpID4gLjAwMTspIHsNCiAgICAgICAgICAgIHZhciBhID0gZShyICsgaCksDQogICAgICAgICAgICAgICAgbyA9IE1hdGguYWJzKHQgLSBhKSAvIG47DQogICAgICAgICAgICBpZiAobyA8IGkpIGkgPSBvLCByICs9IGg7DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICB2YXIgZyA9IGUociAtIGgpLA0KICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5hYnModCAtIGcpIC8gbjsNCiAgICAgICAgICAgICAgICBjIDwgaSA/IChpID0gYywgciAtPSBoKSA6IGggLz0gMg0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgaWYgKCsrcyA+IDUwMCkgYnJlYWsNCiAgICAgICAgfQ0KICAgICAgICByZXR1cm4gcg0KICAgIH0sDQogICAgQyA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIGgsIHMsIGEsIG8pIHsNCiAgICAgICAgdmFyIGcgPSB0aGlzOw0KICAgICAgICByKHRoaXMsICJhIiwgdm9pZCAwKSwgcih0aGlzLCAiYiIsIHZvaWQgMCksIHIodGhpcywgImMiLCB2b2lkIDApLCByKHRoaXMsICJkIiwgdm9pZCAwKSwgcih0aGlzLCAibGVuZ3RoIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0QXJjTGVuZ3RoIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0UG9pbnQiLCB2b2lkIDApLCByKHRoaXMsICJnZXREZXJpdmF0aXZlIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0VG90YWxMZW5ndGgiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gZy5sZW5ndGgNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQb2ludEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gW2cuYS54LCBnLmIueCwgZy5jLngsIGcuZC54XSwNCiAgICAgICAgICAgICAgICBlID0gW2cuYS55LCBnLmIueSwgZy5jLnksIGcuZC55XSwNCiAgICAgICAgICAgICAgICBpID0gUyh0LCBnLmxlbmd0aCwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcuZ2V0QXJjTGVuZ3RoKG4sIGUsIHQpDQogICAgICAgICAgICAgICAgfSkpOw0KICAgICAgICAgICAgcmV0dXJuIGcuZ2V0UG9pbnQobiwgZSwgaSkNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRUYW5nZW50QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIG4gPSBbZy5hLngsIGcuYi54LCBnLmMueCwgZy5kLnhdLA0KICAgICAgICAgICAgICAgIGUgPSBbZy5hLnksIGcuYi55LCBnLmMueSwgZy5kLnldLA0KICAgICAgICAgICAgICAgIGkgPSBTKHQsIGcubGVuZ3RoLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gZy5nZXRBcmNMZW5ndGgobiwgZSwgdCkNCiAgICAgICAgICAgICAgICB9KSksDQogICAgICAgICAgICAgICAgciA9IGcuZ2V0RGVyaXZhdGl2ZShuLCBlLCBpKSwNCiAgICAgICAgICAgICAgICBoID0gTWF0aC5zcXJ0KHIueCAqIHIueCArIHIueSAqIHIueSk7DQogICAgICAgICAgICByZXR1cm4gaCA+IDAgPyB7DQogICAgICAgICAgICAgICAgeDogci54IC8gaCwNCiAgICAgICAgICAgICAgICB5OiByLnkgLyBoDQogICAgICAgICAgICB9IDogew0KICAgICAgICAgICAgICAgIHg6IDAsDQogICAgICAgICAgICAgICAgeTogMA0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFByb3BlcnRpZXNBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB2YXIgbiwgZSA9IFtnLmEueCwgZy5iLngsIGcuYy54LCBnLmQueF0sDQogICAgICAgICAgICAgICAgaSA9IFtnLmEueSwgZy5iLnksIGcuYy55LCBnLmQueV0sDQogICAgICAgICAgICAgICAgciA9IFModCwgZy5sZW5ndGgsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgICAgIHJldHVybiBnLmdldEFyY0xlbmd0aChlLCBpLCB0KQ0KICAgICAgICAgICAgICAgIH0pKSwNCiAgICAgICAgICAgICAgICBoID0gZy5nZXREZXJpdmF0aXZlKGUsIGksIHIpLA0KICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoaC54ICogaC54ICsgaC55ICogaC55KTsNCiAgICAgICAgICAgIG4gPSBzID4gMCA/IHsNCiAgICAgICAgICAgICAgICB4OiBoLnggLyBzLA0KICAgICAgICAgICAgICAgIHk6IGgueSAvIHMNCiAgICAgICAgICAgIH0gOiB7DQogICAgICAgICAgICAgICAgeDogMCwNCiAgICAgICAgICAgICAgICB5OiAwDQogICAgICAgICAgICB9Ow0KICAgICAgICAgICAgdmFyIGEgPSBnLmdldFBvaW50KGUsIGksIHIpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiBhLngsDQogICAgICAgICAgICAgICAgeTogYS55LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRYOiBuLngsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldEMiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gZy5jDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0RCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgIHJldHVybiBnLmQNCiAgICAgICAgfSkpLCB0aGlzLmEgPSB7DQogICAgICAgICAgICB4OiB0LA0KICAgICAgICAgICAgeTogbg0KICAgICAgICB9LCB0aGlzLmIgPSB7DQogICAgICAgICAgICB4OiBlLA0KICAgICAgICAgICAgeTogaQ0KICAgICAgICB9LCB0aGlzLmMgPSB7DQogICAgICAgICAgICB4OiBoLA0KICAgICAgICAgICAgeTogcw0KICAgICAgICB9LCB2b2lkIDAgIT09IGEgJiYgdm9pZCAwICE9PSBvID8gKHRoaXMuZ2V0QXJjTGVuZ3RoID0gUCwgdGhpcy5nZXRQb2ludCA9IG0sIHRoaXMuZ2V0RGVyaXZhdGl2ZSA9IGIsIHRoaXMuZCA9IHsNCiAgICAgICAgICAgIHg6IGEsDQogICAgICAgICAgICB5OiBvDQogICAgICAgIH0pIDogKHRoaXMuZ2V0QXJjTGVuZ3RoID0gcSwgdGhpcy5nZXRQb2ludCA9IFQsIHRoaXMuZ2V0RGVyaXZhdGl2ZSA9IE4sIHRoaXMuZCA9IHsNCiAgICAgICAgICAgIHg6IDAsDQogICAgICAgICAgICB5OiAwDQogICAgICAgIH0pLCB0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0QXJjTGVuZ3RoKFt0aGlzLmEueCwgdGhpcy5iLngsIHRoaXMuYy54LCB0aGlzLmQueF0sIFt0aGlzLmEueSwgdGhpcy5iLnksIHRoaXMuYy55LCB0aGlzLmQueV0sIDEpDQogICAgfSwNCiAgICBFID0gZnVuY3Rpb24odCkgew0KICAgICAgICB2YXIgbiA9IHRoaXM7DQogICAgICAgIHIodGhpcywgImxlbmd0aCIsIDApLCByKHRoaXMsICJwYXJ0aWFsX2xlbmd0aHMiLCBbXSksIHIodGhpcywgImZ1bmN0aW9ucyIsIFtdKSwgcih0aGlzLCAiaW5pdGlhbF9wb2ludCIsIG51bGwpLCByKHRoaXMsICJnZXRQYXJ0QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdCA8IDAgPyB0ID0gMCA6IHQgPiBuLmxlbmd0aCAmJiAodCA9IG4ubGVuZ3RoKTsNCiAgICAgICAgICAgIGZvciAodmFyIGUgPSBuLnBhcnRpYWxfbGVuZ3Rocy5sZW5ndGggLSAxOyBuLnBhcnRpYWxfbGVuZ3Roc1tlXSA+PSB0ICYmIGUgPiAwOykgZS0tOw0KICAgICAgICAgICAgcmV0dXJuIGUrKywgew0KICAgICAgICAgICAgICAgIGZyYWN0aW9uOiB0IC0gbi5wYXJ0aWFsX2xlbmd0aHNbZSAtIDFdLA0KICAgICAgICAgICAgICAgIGk6IGUNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRUb3RhbExlbmd0aCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgIHJldHVybiBuLmxlbmd0aA0KICAgICAgICB9KSksIHIodGhpcywgImdldFBvaW50QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIGUgPSBuLmdldFBhcnRBdExlbmd0aCh0KSwNCiAgICAgICAgICAgICAgICBpID0gbi5mdW5jdGlvbnNbZS5pXTsNCiAgICAgICAgICAgIGlmIChpKSByZXR1cm4gaS5nZXRQb2ludEF0TGVuZ3RoKGUuZnJhY3Rpb24pOw0KICAgICAgICAgICAgaWYgKG4uaW5pdGlhbF9wb2ludCkgcmV0dXJuIG4uaW5pdGlhbF9wb2ludDsNCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiV3JvbmcgZnVuY3Rpb24gYXQgdGhpcyBwYXJ0LiIpDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBlID0gbi5nZXRQYXJ0QXRMZW5ndGgodCksDQogICAgICAgICAgICAgICAgaSA9IG4uZnVuY3Rpb25zW2UuaV07DQogICAgICAgICAgICBpZiAoaSkgcmV0dXJuIGkuZ2V0VGFuZ2VudEF0TGVuZ3RoKGUuZnJhY3Rpb24pOw0KICAgICAgICAgICAgaWYgKG4uaW5pdGlhbF9wb2ludCkgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiAwLA0KICAgICAgICAgICAgICAgIHk6IDANCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIldyb25nIGZ1bmN0aW9uIGF0IHRoaXMgcGFydC4iKQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFByb3BlcnRpZXNBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB2YXIgZSA9IG4uZ2V0UGFydEF0TGVuZ3RoKHQpLA0KICAgICAgICAgICAgICAgIGkgPSBuLmZ1bmN0aW9uc1tlLmldOw0KICAgICAgICAgICAgaWYgKGkpIHJldHVybiBpLmdldFByb3BlcnRpZXNBdExlbmd0aChlLmZyYWN0aW9uKTsNCiAgICAgICAgICAgIGlmIChuLmluaXRpYWxfcG9pbnQpIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi5pbml0aWFsX3BvaW50LngsDQogICAgICAgICAgICAgICAgeTogbi5pbml0aWFsX3BvaW50LnksDQogICAgICAgICAgICAgICAgdGFuZ2VudFg6IDAsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IDANCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIldyb25nIGZ1bmN0aW9uIGF0IHRoaXMgcGFydC4iKQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFBhcnRzIiwgKGZ1bmN0aW9uKCkgew0KICAgICAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBlID0gMDsgZSA8IG4uZnVuY3Rpb25zLmxlbmd0aDsgZSsrKQ0KICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBuLmZ1bmN0aW9uc1tlXSkgew0KICAgICAgICAgICAgICAgICAgICBuLmZ1bmN0aW9uc1tlXSA9IG4uZnVuY3Rpb25zW2VdOw0KICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKDApLA0KICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKG4ucGFydGlhbF9sZW5ndGhzW2VdIC0gbi5wYXJ0aWFsX2xlbmd0aHNbZSAtIDFdKSwNCiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbi5wYXJ0aWFsX2xlbmd0aHNbZV0gLSBuLnBhcnRpYWxfbGVuZ3Roc1tlIC0gMV0sDQogICAgICAgICAgICAgICAgICAgICAgICBnZXRQb2ludEF0TGVuZ3RoOiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoLA0KICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGFuZ2VudEF0TGVuZ3RoOiBuLmZ1bmN0aW9uc1tlXS5nZXRUYW5nZW50QXRMZW5ndGgsDQogICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0aWVzQXRMZW5ndGg6IG4uZnVuY3Rpb25zW2VdLmdldFByb3BlcnRpZXNBdExlbmd0aA0KICAgICAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgICAgICB0LnB1c2goaSkNCiAgICAgICAgICAgICAgICB9IHJldHVybiB0DQogICAgICAgIH0pKTsNCiAgICAgICAgZm9yICh2YXIgZSwgaSA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgICAgIHZhciBuID0gKHQgJiYgdC5sZW5ndGggPiAwID8gdCA6ICJNMCwwIikubWF0Y2gobyk7DQogICAgICAgICAgICAgICAgaWYgKCFuKSB0aHJvdyBuZXcgRXJyb3IoIk5vIHBhdGggZWxlbWVudHMgZm91bmQgaW4gc3RyaW5nICIuY29uY2F0KHQpKTsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5yZWR1Y2UoKGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuLmNoYXJBdCgwKSwNCiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlLnRvTG93ZXJDYXNlKCksDQogICAgICAgICAgICAgICAgICAgICAgICByID0gYyhuLnN1YnN0cigxKSk7DQogICAgICAgICAgICAgICAgICAgIGZvciAoIm0iID09PSBpICYmIHIubGVuZ3RoID4gMiAmJiAodC5wdXNoKFtlXS5jb25jYXQoaChyLnNwbGljZSgwLCAyKSkpKSwgaSA9ICJsIiwgZSA9ICJtIiA9PT0gZSA/ICJsIiA6ICJMIik7IHIubGVuZ3RoID49IDA7KSB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPT09IGFbaV0pIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goW2VdLmNvbmNhdChoKHIuc3BsaWNlKDAsIGFbaV0pKSkpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPCBhW2ldKSB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBwYXRoIGRhdGE6ICInLmNvbmNhdChlLCAnIiBtdXN0IGhhdmUgJykuY29uY2F0KGFbaV0sICIgZWxlbWVudHMgYW5kIGhhcyAiKS5jb25jYXQoci5sZW5ndGgsICI6ICIpLmNvbmNhdChuKSk7DQogICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goW2VdLmNvbmNhdChoKHIuc3BsaWNlKDAsIGFbaV0pKSkpDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQNCiAgICAgICAgICAgICAgICB9KSwgW10pDQogICAgICAgICAgICB9KHQpLCBzID0gWzAsIDBdLCBnID0gWzAsIDBdLCBmID0gWzAsIDBdLCBwID0gMDsgcCA8IGkubGVuZ3RoOyBwKyspIHsNCiAgICAgICAgICAgIGlmICgiTSIgPT09IGlbcF1bMF0pIGYgPSBbKHMgPSBbaVtwXVsxXSwgaVtwXVsyXV0pWzBdLCBzWzFdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChudWxsKSwgMCA9PT0gcCAmJiAodGhpcy5pbml0aWFsX3BvaW50ID0gew0KICAgICAgICAgICAgICAgIHg6IGlbcF1bMV0sDQogICAgICAgICAgICAgICAgeTogaVtwXVsyXQ0KICAgICAgICAgICAgfSk7DQogICAgICAgICAgICBlbHNlIGlmICgibSIgPT09IGlbcF1bMF0pIGYgPSBbKHMgPSBbaVtwXVsxXSArIHNbMF0sIGlbcF1bMl0gKyBzWzFdXSlbMF0sIHNbMV1dLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKG51bGwpOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkwiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLnNxcnQoTWF0aC5wb3coc1swXSAtIGlbcF1bMV0sIDIpICsgTWF0aC5wb3coc1sxXSAtIGlbcF1bMl0sIDIpKSwgdGhpcy5mdW5jdGlvbnMucHVzaChuZXcgdShzWzBdLCBpW3BdWzFdLCBzWzFdLCBpW3BdWzJdKSksIHMgPSBbaVtwXVsxXSwgaVtwXVsyXV07DQogICAgICAgICAgICBlbHNlIGlmICgibCIgPT09IGlbcF1bMF0pIHRoaXMubGVuZ3RoICs9IE1hdGguc3FydChNYXRoLnBvdyhpW3BdWzFdLCAyKSArIE1hdGgucG93KGlbcF1bMl0sIDIpKSwgdGhpcy5mdW5jdGlvbnMucHVzaChuZXcgdShzWzBdLCBpW3BdWzFdICsgc1swXSwgc1sxXSwgaVtwXVsyXSArIHNbMV0pKSwgcyA9IFtpW3BdWzFdICsgc1swXSwgaVtwXVsyXSArIHNbMV1dOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkgiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLmFicyhzWzBdIC0gaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgaVtwXVsxXSwgc1sxXSwgc1sxXSkpLCBzWzBdID0gaVtwXVsxXTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJoIiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5hYnMoaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSArIGlbcF1bMV0sIHNbMV0sIHNbMV0pKSwgc1swXSA9IGlbcF1bMV0gKyBzWzBdOw0KICAgICAgICAgICAgZWxzZSBpZiAoIlYiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLmFicyhzWzFdIC0gaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSwgc1sxXSwgaVtwXVsxXSkpLCBzWzFdID0gaVtwXVsxXTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJ2IiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5hYnMoaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSwgc1sxXSwgc1sxXSArIGlbcF1bMV0pKSwgc1sxXSA9IGlbcF1bMV0gKyBzWzFdOw0KICAgICAgICAgICAgZWxzZSBpZiAoInoiID09PSBpW3BdWzBdIHx8ICJaIiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5zcXJ0KE1hdGgucG93KGZbMF0gLSBzWzBdLCAyKSArIE1hdGgucG93KGZbMV0gLSBzWzFdLCAyKSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgZlswXSwgc1sxXSwgZlsxXSkpLCBzID0gW2ZbMF0sIGZbMV1dOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkMiID09PSBpW3BdWzBdKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSwgaVtwXVs1XSwgaVtwXVs2XSksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgcyA9IFtpW3BdWzVdLCBpW3BdWzZdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJjIiA9PT0gaVtwXVswXSkoZSA9IG5ldyBDKHNbMF0sIHNbMV0sIHNbMF0gKyBpW3BdWzFdLCBzWzFdICsgaVtwXVsyXSwgc1swXSArIGlbcF1bM10sIHNbMV0gKyBpW3BdWzRdLCBzWzBdICsgaVtwXVs1XSwgc1sxXSArIGlbcF1bNl0pKS5nZXRUb3RhbExlbmd0aCgpID4gMCA/ICh0aGlzLmxlbmd0aCArPSBlLmdldFRvdGFsTGVuZ3RoKCksIHRoaXMuZnVuY3Rpb25zLnB1c2goZSksIHMgPSBbaVtwXVs1XSArIHNbMF0sIGlbcF1bNl0gKyBzWzFdXSkgOiB0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0sIHNbMF0sIHNbMV0sIHNbMV0pKTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJTIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmIChwID4gMCAmJiBbIkMiLCAiYyIsICJTIiwgInMiXS5pbmRleE9mKGlbcCAtIDFdWzBdKSA+IC0xKSB7DQogICAgICAgICAgICAgICAgICAgIGlmIChlKSB7DQogICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGUuZ2V0QygpOw0KICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG5ldyBDKHNbMF0sIHNbMV0sIDIgKiBzWzBdIC0geS54LCAyICogc1sxXSAtIHkueSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSkNCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIH0gZWxzZSBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSwgc1sxXSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSk7DQogICAgICAgICAgICAgICAgZSAmJiAodGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpLCBzID0gW2lbcF1bM10sIGlbcF1bNF1dLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpKQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgicyIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICBpZiAocCA+IDAgJiYgWyJDIiwgImMiLCAiUyIsICJzIl0uaW5kZXhPZihpW3AgLSAxXVswXSkgPiAtMSkgew0KICAgICAgICAgICAgICAgICAgICBpZiAoZSkgew0KICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBlLmdldEMoKSwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gZS5nZXREKCk7DQogICAgICAgICAgICAgICAgICAgICAgICBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSArIHYueCAtIHgueCwgc1sxXSArIHYueSAtIHgueSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bNF0pDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9IGVsc2UgZSA9IG5ldyBDKHNbMF0sIHNbMV0sIHNbMF0sIHNbMV0sIHNbMF0gKyBpW3BdWzFdLCBzWzFdICsgaVtwXVsyXSwgc1swXSArIGlbcF1bM10sIHNbMV0gKyBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICBlICYmICh0aGlzLmxlbmd0aCArPSBlLmdldFRvdGFsTGVuZ3RoKCksIHMgPSBbaVtwXVszXSArIHNbMF0sIGlbcF1bNF0gKyBzWzFdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKSkNCiAgICAgICAgICAgIH0gZWxzZSBpZiAoIlEiID09PSBpW3BdWzBdKSB7DQogICAgICAgICAgICAgICAgaWYgKHNbMF0gPT0gaVtwXVsxXSAmJiBzWzFdID09IGlbcF1bMl0pIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgdShpW3BdWzFdLCBpW3BdWzNdLCBpW3BdWzJdLCBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gZC5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGQpDQogICAgICAgICAgICAgICAgfSBlbHNlIGUgPSBuZXcgQyhzWzBdLCBzWzFdLCBpW3BdWzFdLCBpW3BdWzJdLCBpW3BdWzNdLCBpW3BdWzRdLCB2b2lkIDAsIHZvaWQgMCksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgICAgICBzID0gW2lbcF1bM10sIGlbcF1bNF1dLCBnID0gW2lbcF1bMV0sIGlbcF1bMl1dDQogICAgICAgICAgICB9IGVsc2UgaWYgKCJxIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmICgwICE9IGlbcF1bMV0gfHwgMCAhPSBpW3BdWzJdKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bNF0sIHZvaWQgMCwgdm9pZCAwKSwgdGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpOw0KICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IG5ldyB1KHNbMF0gKyBpW3BdWzFdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bMl0sIHNbMV0gKyBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gTS5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKE0pDQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGcgPSBbc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdXSwgcyA9IFtpW3BdWzNdICsgc1swXSwgaVtwXVs0XSArIHNbMV1dDQogICAgICAgICAgICB9IGVsc2UgaWYgKCJUIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmIChwID4gMCAmJiBbIlEiLCAicSIsICJUIiwgInQiXS5pbmRleE9mKGlbcCAtIDFdWzBdKSA+IC0xKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgMiAqIHNbMF0gLSBnWzBdLCAyICogc1sxXSAtIGdbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIHZvaWQgMCwgdm9pZCAwKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKSwgdGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpOw0KICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IG5ldyB1KHNbMF0sIGlbcF1bMV0sIHNbMV0sIGlbcF1bMl0pOw0KICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmN0aW9ucy5wdXNoKHcpLCB0aGlzLmxlbmd0aCArPSB3LmdldFRvdGFsTGVuZ3RoKCkNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgZyA9IFsyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXV0sIHMgPSBbaVtwXVsxXSwgaVtwXVsyXV0NCiAgICAgICAgICAgIH0gZWxzZSBpZiAoInQiID09PSBpW3BdWzBdKSB7DQogICAgICAgICAgICAgICAgaWYgKHAgPiAwICYmIFsiUSIsICJxIiwgIlQiLCAidCJdLmluZGV4T2YoaVtwIC0gMV1bMF0pID4gLTEpIGUgPSBuZXcgQyhzWzBdLCBzWzFdLCAyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCB2b2lkIDAsIHZvaWQgMCksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIEwgPSBuZXcgdShzWzBdLCBzWzBdICsgaVtwXVsxXSwgc1sxXSwgc1sxXSArIGlbcF1bMl0pOw0KICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCArPSBMLmdldFRvdGFsTGVuZ3RoKCksIHRoaXMuZnVuY3Rpb25zLnB1c2goTCkNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgZyA9IFsyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXV0sIHMgPSBbaVtwXVsxXSArIHNbMF0sIGlbcF1bMl0gKyBzWzFdXQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgiQSIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICB2YXIgQSA9IG5ldyBsKHNbMF0sIHNbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIGlbcF1bM10sIDEgPT09IGlbcF1bNF0sIDEgPT09IGlbcF1bNV0sIGlbcF1bNl0sIGlbcF1bN10pOw0KICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoICs9IEEuZ2V0VG90YWxMZW5ndGgoKSwgcyA9IFtpW3BdWzZdLCBpW3BdWzddXSwgdGhpcy5mdW5jdGlvbnMucHVzaChBKQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgiYSIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBsKHNbMF0sIHNbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIGlbcF1bM10sIDEgPT09IGlbcF1bNF0sIDEgPT09IGlbcF1bNV0sIHNbMF0gKyBpW3BdWzZdLCBzWzFdICsgaVtwXVs3XSk7DQogICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gbS5nZXRUb3RhbExlbmd0aCgpLCBzID0gW3NbMF0gKyBpW3BdWzZdLCBzWzFdICsgaVtwXVs3XV0sIHRoaXMuZnVuY3Rpb25zLnB1c2gobSkNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIHRoaXMucGFydGlhbF9sZW5ndGhzLnB1c2godGhpcy5sZW5ndGgpDQogICAgICAgIH0NCiAgICB9LA0KICAgIGogPSBmdW5jdGlvbih0KSB7DQogICAgICAgIHZhciBuID0gdGhpczsNCiAgICAgICAgaWYgKHIodGhpcywgImluc3QiLCB2b2lkIDApLCByKHRoaXMsICJnZXRUb3RhbExlbmd0aCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFRvdGFsTGVuZ3RoKCkNCiAgICAgICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UG9pbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgcmV0dXJuIG4uaW5zdC5nZXRQb2ludEF0TGVuZ3RoKHQpDQogICAgICAgICAgICB9KSksIHIodGhpcywgImdldFRhbmdlbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgcmV0dXJuIG4uaW5zdC5nZXRUYW5nZW50QXRMZW5ndGgodCkNCiAgICAgICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UHJvcGVydGllc0F0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFByb3BlcnRpZXNBdExlbmd0aCh0KQ0KICAgICAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQYXJ0cyIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFBhcnRzKCkNCiAgICAgICAgICAgIH0pKSwgdGhpcy5pbnN0ID0gbmV3IEUodCksICEodGhpcyBpbnN0YW5jZW9mIGopKSByZXR1cm4gbmV3IGoodCkNCiAgICB9Ow0KY29uc3QgayA9IDFlNDsNCmxldCBJID0gITE7DQpvbm1lc3NhZ2UgPSAoew0KICAgIGRhdGE6IHQNCn0pID0+IHsNCiAgICBpZiAoIm51bGwiID09PSBvcmlnaW4gJiYgIm9iamVjdCIgPT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCAmJiAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgcmV0dXJuICJwcm9jZXNzLXNjcmlwdCIgPT09IHQuYWN0aW9uDQogICAgICAgIH0odCkgfHwgZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgcmV0dXJuICJwcm9jZXNzLXN2ZyIgPT09IHQuYWN0aW9uDQogICAgICAgIH0odCkpKSB7DQogICAgICAgIGNvbnN0IHsNCiAgICAgICAgICAgIHBvcnQ6IG4sDQogICAgICAgICAgICBzY3JpcHQ6IGkNCiAgICAgICAgfSA9IHQ7DQogICAgICAgIGlmIChJKSB7DQogICAgICAgICAgICBjb25zdCB0ID0gew0KICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICJXb3JrZXIgYWxyZWFkeSB1c2VkIg0KICAgICAgICAgICAgfTsNCiAgICAgICAgICAgIHJldHVybiB2b2lkIG4ucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgIGVycm9yOiB0DQogICAgICAgICAgICB9KQ0KICAgICAgICB9DQogICAgICAgIEkgPSAhMDsNCiAgICAgICAgdHJ5IHsNCiAgICAgICAgICAgIGNvbnN0IGUgPSAicHJvY2Vzcy1zdmciID09PSB0LmFjdGlvbiA/IGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICBjb25zdCBuID0gbmV3IGoodCksDQogICAgICAgICAgICAgICAgICAgIGUgPSBuLmdldFRvdGFsTGVuZ3RoKCk7DQogICAgICAgICAgICAgICAgaWYgKDAgPT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoIlBhdGggaXMgemVybyBsZW5ndGgiKTsNCiAgICAgICAgICAgICAgICBsZXQgaSA9IC0xIC8gMDsNCiAgICAgICAgICAgICAgICBjb25zdCByID0gQXJyYXkuZnJvbSh7DQogICAgICAgICAgICAgICAgICAgIGxlbmd0aDogaw0KICAgICAgICAgICAgICAgIH0sICgodCwgcikgPT4gew0KICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gciAvIChrIC0gMSkgKiBlLA0KICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG4uZ2V0UG9pbnRBdExlbmd0aChoKTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSBNYXRoLm1heChpLCBzLngpLCBbaSwgcy55XQ0KICAgICAgICAgICAgICAgIH0pKTsNCiAgICAgICAgICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgICAgICAgICBuYW1lOiAiY3VzdG9tIiwNCiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiByLA0KICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMA0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0oaSkgOiBmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgY29uc3QgbiA9IE9iamVjdC5rZXlzKHNlbGYpOw0KICAgICAgICAgICAgICAgIGxldCBlOw0KICAgICAgICAgICAgICAgIGltcG9ydFNjcmlwdHMoYGRhdGE6dGV4dC9qYXZhc2NyaXB0LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGAoKCkgPT4geyR7dH07fSkoKWApfWApOw0KICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHNlbGYpKTsNCiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgbikgaS5kZWxldGUodCk7DQogICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIGkpICJmdW5jdGlvbiIgIT0gdHlwZW9mIHNlbGZbdF0gJiYgaS5kZWxldGUodCk7DQogICAgICAgICAgICAgICAgaWYgKGkuc2l6ZSA+IDEpIHRocm93IEVycm9yKCJUb28gbWFueSBnbG9iYWwgZnVuY3Rpb25zLiBGb3VuZDogIiArIFsuLi5pXS5qb2luKCIsICIpKTsNCiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gaS5zaXplKSB0aHJvdyBFcnJvcigiTm8gZ2xvYmFsIGZ1bmN0aW9uIGZvdW5kLiIpOw0KICAgICAgICAgICAgICAgIGNvbnN0IFtyXSA9IGk7DQogICAgICAgICAgICAgICAgcmV0dXJuIGUgPSBzZWxmW3JdLCB7DQogICAgICAgICAgICAgICAgICAgIG5hbWU6IHIucmVwbGFjZSgvW0EtWl0vZywgKHQgPT4gIi0iICsgdC50b0xvd2VyQ2FzZSgpKSksDQogICAgICAgICAgICAgICAgICAgIHBvaW50czogQXJyYXkuZnJvbSh7DQogICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IGsNCiAgICAgICAgICAgICAgICAgICAgfSwgKCh0LCBuKSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gbiAvIChrIC0gMSk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ksIE51bWJlcihlKGkpKV0NCiAgICAgICAgICAgICAgICAgICAgfSkpLA0KICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogImR1cmF0aW9uIiBpbiBzZWxmICYmICJudW1iZXIiID09IHR5cGVvZiBzZWxmLmR1cmF0aW9uICYmIHNlbGYuZHVyYXRpb24gfHwgMA0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0oaSk7DQogICAgICAgICAgICBuLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICByZXN1bHQ6IGUNCiAgICAgICAgICAgIH0pDQogICAgICAgIH0gY2F0Y2ggKHQpIHsNCiAgICAgICAgICAgIGNvbnN0IGkgPSB7DQogICAgICAgICAgICAgICAgLi4uZSh0KSwNCiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0Lm1lc3NhZ2UNCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICBlcnJvcjogaQ0KICAgICAgICAgICAgfSksIHQNCiAgICAgICAgfQ0KICAgIH0NCn07")
    return URL.createObjectURL(new Blob([PROCESS_SCRIPTJS], {
        type: "text/javascript"
    }))
})();
let e = null;
onmessage = async ({
    data: r
}) => {
    if ("object" == typeof r && null !== r)
        if (function(t) {
                return "process-script" === t.action
            }(r) || function(t) {
                return "process-svg" === t.action
            }(r)) {
            try {
                ! function() {
                    if (e) throw Error("Worker already running");
                    e = t.then((t => new Worker(t)))
                }()
            } catch (t) {
                const e = {
                    message: t.message
                };
                throw r.port.postMessage({
                    error: e
                }), t
            }(await e).postMessage(r, [r.port])
        } else(function(t) {
            return "terminate-worker" === t.action
        })(r) && async function() {
            if (!e) return;
            const t = e;
            e = null, (await t).terminate()
        }()
};
