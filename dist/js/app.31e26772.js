(function (t) { function e (e) { for (var r, c, u = e[0], i = e[1], l = e[2], s = 0, f = []; s < u.length; s++)c = u[s], Object.prototype.hasOwnProperty.call(o, c) && o[c] && f.push(o[c][0]), o[c] = 0; for (r in i)Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]); p && p(e); while (f.length)f.shift()(); return a.push.apply(a, l || []), n() } function n () { for (var t, e = 0; e < a.length; e++) { for (var n = a[e], r = !0, c = 1; c < n.length; c++) { var i = n[c]; o[i] !== 0 && (r = !1) }r && (a.splice(e--, 1), t = u(u.s = n[0])) } return t } var r = {}; var o = { app: 0 }; var a = []; function c (t) { return u.p + 'js/' + ({ about: 'about' }[t] || t) + '.' + { about: '6af2fc6a' }[t] + '.js' } function u (e) { if (r[e]) return r[e].exports; var n = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, u), n.l = !0, n.exports }u.e = function (t) { var e = []; var n = o[t]; if (n !== 0) if (n)e.push(n[2]); else { var r = new Promise(function (e, r) { n = o[t] = [e, r] }); e.push(n[2] = r); var a; var i = document.createElement('script'); i.charset = 'utf-8', i.timeout = 120, u.nc && i.setAttribute('nonce', u.nc), i.src = c(t); var l = new Error(); a = function (e) { i.onerror = i.onload = null, clearTimeout(s); var n = o[t]; if (n !== 0) { if (n) { var r = e && (e.type === 'load' ? 'missing' : e.type); var a = e && e.target && e.target.src; l.message = 'Loading chunk ' + t + ' failed.\n(' + r + ': ' + a + ')', l.name = 'ChunkLoadError', l.type = r, l.request = a, n[1](l) }o[t] = void 0 } }; var s = setTimeout(function () { a({ type: 'timeout', target: i }) }, 12e4); i.onerror = i.onload = a, document.head.appendChild(i) } return Promise.all(e) }, u.m = t, u.c = r, u.d = function (t, e, n) { u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, u.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, u.t = function (t, e) { if (1 & e && (t = u(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (u.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var r in t)u.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, u.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return u.d(e, 'a', e), e }, u.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, u.p = '/work/', u.oe = function (t) { throw console.error(t), t }; var i = window.webpackJsonp = window.webpackJsonp || []; var l = i.push.bind(i); i.push = e, i = i.slice(); for (var s = 0; s < i.length; s++)e(i[s]); var p = l; a.push([0, 'chunk-vendors']), n() })({ 0: function (t, e, n) { t.exports = n('56d7') }, '56d7': function (t, e, n) { 'use strict'; n.r(e); n('e260'), n('e6cf'), n('cca6'), n('a79d'); var r = n('7a23'); function o (t, e) { var n = Object(r.u)('router-view'); return Object(r.p)(), Object(r.e)(n) } const a = {}; a.render = o; var c = a; var u = (n('d3b7'), n('3ca3'), n('ddb0'), n('6c02')); var i = Object(r.g)('h3', null, '旅程導覽', -1); var l = Object(r.f)('開始 '); var s = Object(r.f)('結束 '); var p = Object(r.g)('h1', { style: { 'font-size': '30px' } }, '標籤', -1); var f = Object(r.g)('h2', { style: { 'font-size': '20px' } }, '當會員觸發標籤時，開始旅程', -1); var b = { ref: 'tagWrap', class: 'wrap' }; var d = { id: 'data' }; var O = { key: 0, value: '請選擇' }; var j = { key: 1, value: '沒有選項囉' }; function v (t, e, n, o, a, c) { return Object(r.p)(), Object(r.e)(r.a, null, [Object(r.g)('nav', null, [i, l, Object(r.g)(r.b, { name: 'flip-list', tag: 'div' }, { default: Object(r.A)(function () { return [(Object(r.p)(!0), Object(r.e)(r.a, null, Object(r.t)(t.testData, function (n, o) { return Object(r.p)(), Object(r.e)('div', { onClick: function (e) { return t.toOffest(n) }, onDragstart: function (e) { return t.dragStart(e, o) }, onDrop: function (e) { return t.drop(e, o) }, onDragover: e[1] || (e[1] = function () { return t.allowDrop && t.allowDrop.apply(t, arguments) }), draggable: 'true', key: n, class: 'fixbox' }, Object(r.w)(n), 41, ['onClick', 'onDragstart', 'onDrop']) }), 128))] }), _: 1 }), s]), Object(r.g)('main', null, [p, f, Object(r.g)('div', { ref: 'tagInput', onClick: e[4] || (e[4] = function (e) { return t.inputDiv.focus() }), class: 'tagInput' }, [Object(r.g)('div', b, [(Object(r.p)(!0), Object(r.e)(r.a, null, Object(r.t)(t.testData, function (e, n) { return Object(r.p)(), Object(r.e)('div', { class: 'tags', key: n }, [Object(r.f)(Object(r.w)(e) + ' ', 1), Object(r.g)('span', { onClick: function (e) { return t.delTag(n) } }, 'X', 8, ['onClick'])]) }), 128))], 512), Object(r.B)(Object(r.g)('input', { placeholder: '請開始安排', ref: 'inputDiv', 'onUpdate:modelValue': e[2] || (e[2] = function (e) { return t.selectOption = e }), onInput: e[3] || (e[3] = function (e) { return t.addArray(t.selectOption) }), type: 'text', list: 'data' }, null, 544), [[r.y, t.selectOption]]), Object(r.g)('datalist', d, [t.data.length !== 0 ? (Object(r.p)(), Object(r.e)('option', O)) : (Object(r.p)(), Object(r.e)('option', j)), (Object(r.p)(!0), Object(r.e)(r.a, null, Object(r.t)(t.data, function (t) { return Object(r.p)(), Object(r.e)('option', { key: t, value: t }, null, 8, ['value']) }), 128))])], 512)]), Object(r.g)(r.b, { name: 'flip-list', tag: 'div' }, { default: Object(r.A)(function () { return [(Object(r.p)(!0), Object(r.e)(r.a, null, Object(r.t)(t.testData, function (e) { return Object(r.p)(), Object(r.e)('div', { ref: t.setItemRef, id: e, class: 'test', key: e }, Object(r.w)(e), 9, ['id']) }), 128))] }), _: 1 })], 64) }n('a434'); var g = Object(r.h)({ name: 'Home', setup: function () { var t = Object(r.s)(); var e = Object(r.s)(); var n = Object(r.s)(); var o = Object(r.r)([]); var a = Object(r.s)(); var c = Object(r.s)(); var u = Object(r.s)([]); var i = Object(r.r)(['tom', 'good', 'blue', 'red']); var l = function (t) { var e = o.splice(t, 1); i.push(e[0]) }; var s = function (t) { if (t) for (var e = 0; e < i.length; e++) if (i[e] === t) return o.push(t), void i.splice(e, 1) }; var p = function (t) { u.value.push(t) }; var f = function (t, e) { t.dataTransfer.setData('Text', e) }; var b = function (t) { t.preventDefault() }; var d = function (t, e) { b(t); var n = t.dataTransfer.getData('Text'); var r = o.splice(n, 1); o.splice(e, 0, r[0]) }; var O = function (t) { for (var e = 0; e <= u.value.length; e++)u.value[e].id === t && window.scrollTo({ top: u.value[e].offsetTop, behavior: 'smooth' }) }; return { allowDrop: b, selectOption: n, box: t, data: i, addArray: s, testData: o, inputDiv: e, delTag: l, tagWrap: a, tagInput: c, dragStart: f, drop: d, setItemRef: p, toOffest: O } } }); n('7878'); g.render = v; var h = g; var m = [{ path: '/', name: 'Home', component: h }, { path: '/about', name: 'About', component: function () { return n.e('about').then(n.bind(null, 'f820')) } }]; var y = Object(u.a)({ history: Object(u.b)('/work/'), routes: m }); var w = y; var k = n('5502'); var D = Object(k.a)({ state: {}, mutations: {}, actions: {}, modules: {} }); Object(r.d)(c).use(D).use(w).mount('#app') }, 7878: function (t, e, n) { 'use strict'; n('ef78') }, ef78: function (t, e, n) {} })
// # sourceMappingURL=app.31e26772.js.map
