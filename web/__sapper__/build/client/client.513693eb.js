function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,i){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=c(e,n,r,i);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return v(t," ")}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let x;function E(t){x=t}function w(){if(!x)throw new Error("Function called outside component initialization");return x}const S=[],R=[],N=[],P=[],A=Promise.resolve();let j=!1;function L(t){N.push(t)}let O=!1;const k=new Set;function C(){if(!O){O=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];E(e),U(e.$$)}for(E(null),S.length=0;R.length;)R.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];k.has(e)||(k.add(e),e())}N.length=0}while(S.length);for(;P.length;)P.pop()();j=!1,O=!1,k.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const q=new Set;let T;function I(){T={r:0,c:[],p:T}}function J(){T.r||o(T.c),T=T.p}function B(t,e){t&&t.i&&(q.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),T.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function D(t){t&&t.c()}function H(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,r),L((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(L)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(S.push(t),j||(j=!0,A.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,n,s,i,c,a,l=[-1]){const u=x;E(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&F(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&B(e.$$.fragment),Y(e,n.target,n.anchor),C()}E(u)}class W{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=[];function Q(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!X.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),X.push(n,e)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const Z={};function tt(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=p("main"),o&&o.c()},l(t){e=y(t,"MAIN",{});var n=$(e);o&&o.l(n),n.forEach(f)},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(B(o,t),n=!0)},o(t){K(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function et(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class nt extends W{constructor(t){super(),G(this,t,et,tt,i,{})}}function rt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var o=$(e);n=v(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function ot(e){let n,r,o,s,i,c,a,x,E,w=e[1].message+"";document.title=n=e[0];let S=e[2]&&e[1].stack&&rt(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),i=h(),c=p("p"),a=d(w),x=h(),S&&S.c(),E=m(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=b(t),o=y(t,"H1",{class:!0});var n=$(o);s=v(n,e[0]),n.forEach(f),i=b(t),c=y(t,"P",{class:!0});var l=$(c);a=v(l,w),l.forEach(f),x=b(t),S&&S.l(t),E=m(),this.h()},h(){g(o,"class","svelte-8od9u6"),g(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,i,e),u(t,c,e),l(c,a),u(t,x,e),S&&S.m(t,e),u(t,E,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&w!==(w=t[1].message+"")&&_(a,w),t[2]&&t[1].stack?S?S.p(t,e):(S=rt(t),S.c(),S.m(E.parentNode,E)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(i),t&&f(c),t&&f(x),S&&S.d(t),t&&f(E)}}}function st(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class it extends W{constructor(t){super(),G(this,t,st,ot,i,{status:0,error:1})}}function ct(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&D(n.$$.fragment),r=m()},l(t){n&&H(n.$$.fragment,t),r=m()},m(t,e){n&&Y(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?M(s,[V(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){I();const t=n;K(t.$$.fragment,1,0,(()=>{z(t,1)})),J()}i?(n=new i(c()),D(n.$$.fragment),B(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&B(n.$$.fragment,t),o=!0)},o(t){n&&K(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&z(n,t)}}}function at(t){let e,n;return e=new it({props:{error:t[0],status:t[1]}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function lt(t){let e,n,r,o;const s=[at,ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(I(),K(i[a],1,1,(()=>{i[a]=null})),J(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){o||(B(n),o=!0)},o(t){K(n),o=!1},d(t){i[e].d(t),t&&f(r)}}}function ut(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[lt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new nt({props:s}),{c(){D(n.$$.fragment)},l(t){H(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=12&e?M(o,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(B(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function ft(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,w().$$.after_update.push(u),f=Z,p=r,w().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class pt extends W{constructor(t){super(),G(this,t,ft,ut,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const dt=[/^\/apiv1\.json$/,/^\/apiv1\/?$/,/^\/apiv1\/auth\/?$/,/^\/apiv1\/([^/]+?)\.json$/],ht=[{js:()=>Promise.all([import("./index.76abcdd3.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].1f264ba6.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))}],mt=(gt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/apiv1\/([^/]+?)\/?$/,parts:[null,{i:1,params:t=>({slug:gt(t[1])})}]}]);var gt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function $t(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function yt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let vt,bt=1;const _t="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},xt={};let Et,wt;function St(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Rt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Et))return null;let e=t.pathname.slice(Et.length);if(""===e&&(e="/"),!dt.some((t=>t.test(e))))for(let n=0;n<mt.length;n+=1){const r=mt[n],o=r.pattern.exec(e);if(o){const n=St(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Nt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=yt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Rt(o);if(s){jt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),_t.pushState({id:vt},"",o.href)}}function Pt(){return{x:pageXOffset,y:pageYOffset}}function At(t){if(xt[vt]=Pt(),t.state){const e=Rt(new URL(location.href));e?jt(e,t.state.id):location.href=location.href}else bt=bt+1,function(t){vt=t}(bt),_t.replaceState({id:vt},"",location.href)}function jt(t,e,n,r){return $t(this,void 0,void 0,(function*(){const o=!!e;if(o)vt=e;else{const t=Pt();xt[vt]=t,vt=e=++bt,xt[vt]=n?t:{x:0,y:0}}if(yield wt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=xt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),xt[vt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Lt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ot,kt=null;function Ct(t){const e=yt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Rt(new URL(t,Lt(document)));if(e)kt&&t===kt.href||(kt={href:t,promise:Xt(e)}),kt.promise}(e.href)}function Ut(t){clearTimeout(Ot),Ot=setTimeout((()=>{Ct(t)}),20)}function qt(t,e={noscroll:!1,replaceState:!1}){const n=Rt(new URL(t,Lt(document)));return n?(_t[e.replaceState?"replaceState":"pushState"]({id:vt},"",t),jt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Tt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Jt,Bt,Kt=!1,Mt=[],Vt="{}";const Dt={page:function(t){const e=Q(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Q(null),session:Q(Tt&&Tt.session)};let Ht,Yt,zt;function Ft(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Gt(t){return $t(this,void 0,void 0,(function*(){It&&Dt.preloading.set(!0);const e=function(t){return kt&&kt.href===t.href?kt.promise:Xt(t)}(t),n=Jt={},r=yield e,{redirect:o}=r;if(n===Jt)if(o)yield qt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Wt(n,e,Ft(e,t.page))}}))}function Wt(t,e,n){return $t(this,void 0,void 0,(function*(){Dt.page.set(n),Dt.preloading.set(!1),It?It.$set(e):(e.stores={page:{subscribe:Dt.page.subscribe},preloading:{subscribe:Dt.preloading.subscribe},session:Dt.session},e.level0={props:yield Bt},e.notify=Dt.page.notify,It=new pt({target:zt,props:e,hydrate:!0})),Mt=t,Vt=JSON.stringify(n.query),Kt=!0,Yt=!1}))}function Xt(t){return $t(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Bt){const t=()=>({});Bt=Tt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ht)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>$t(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Vt)return!0;const o=Mt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const p=a++;if(!Yt&&!u&&Mt[c]&&Mt[c].part===e.i)return Mt[c];u=!1;const{default:d,preload:h}=yield ht[e.i].js();let m;return m=Kt||!Tt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ht):{}:Tt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Qt,Zt,te;Dt.session.subscribe((t=>$t(void 0,void 0,void 0,(function*(){if(Ht=t,!Kt)return;Yt=!0;const e=Rt(new URL(location.href)),n=Jt={},{redirect:r,props:o,branch:s}=yield Xt(e);n===Jt&&(r?yield qt(r.location,{replaceState:!0}):yield Wt(s,o,Ft(o,e.page)))})))),Qt={target:document.querySelector("#sapper")},Zt=Qt.target,zt=Zt,te=Tt.baseUrl,Et=te,wt=Gt,"scrollRestoration"in _t&&(_t.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{_t.scrollRestoration="auto"})),addEventListener("load",(()=>{_t.scrollRestoration="manual"})),addEventListener("click",Nt),addEventListener("popstate",At),addEventListener("touchstart",Ct),addEventListener("mousemove",Ut),Tt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Tt;Bt||(Bt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Bt},level1:{props:{status:s,error:i},component:it},segments:o},a=St(n);Wt([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;_t.replaceState({id:bt},"",e);const n=Rt(new URL(location.href));if(n)return jt(n,bt,!0,t)}));export{W as S,$ as a,v as b,y as c,f as d,p as e,u as f,l as g,G as i,t as n,i as s,d as t};

import __inject_styles from './inject_styles.5607aec6.js';