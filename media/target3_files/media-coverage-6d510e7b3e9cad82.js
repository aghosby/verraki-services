(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6531],{39716:function(e,n,t){"use strict";t.d(n,{w:function(){return r}});var r=(0,t(65932).I)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},71395:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/news-room/media-coverage",function(){return t(51420)}])},83316:function(e,n,t){"use strict";t.d(n,{_:function(){return d}});var r=t(52322),i=t(46760),o=t(86581),a=t(16636),u=t(11338),c=(t(2784),t(73119)),l=t(32220);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}var d=function(e){var n=e.title,t=e.subtitle,s=e.description,d=e.image,v=e.header,g=e.video,h=e.children,p=e.variant,b=c.A,y=(0,i.useMultiStyleConfig)("HeroTwoColumn",{variant:p});return(0,r.jsx)(o.xu,{sx:y.background,children:(0,r.jsxs)(a.r,{templateColumns:"repeat(7, 1fr)",gap:{base:6,xl:16},sx:y.container,children:[(0,r.jsxs)(a.P,{colSpan:{base:7,xl:3},sx:y.imageSection,children:[!g&&(0,r.jsx)(b,f({},d)),g&&(0,r.jsx)(l.y,{video:g})]}),(0,r.jsxs)(a.P,{colSpan:{base:7,xl:4},sx:y.contentSection,children:[v&&v,(0,r.jsx)(u.x,{as:"h1",className:"hero-two-column-heading",sx:y.heading,children:n}),t&&(0,r.jsx)(u.x,{sx:y.subheading,children:t}),s&&(0,r.jsx)(u.x,{sx:y.description,children:s}),(0,r.jsx)(o.xu,{sx:y.children,children:h})]})]})})}},51420:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return j},default:function(){return k}});var r=t(52322),i=t(2784),o=t(68129),a=t(72350),u=t.n(a),c=t(41900);function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function s(){var e=l(['{\n    _id,\n    ...coverageContent {\n    "title": ',',\n    "image": ',',\n    postDate,\n    "buttons": buttonGroup[]{\n      _key,\n      "label": ',',\n      "href": coalesce(link[0]->.slug.current, ',"),\n    }\n  },\n}"]);return s=function(){return e},e}function f(){var e=l(["*[_type=='coverage'\n    && ( coverageContent.postDate >= \"",'-01-01"\n        && coverageContent.postDate <= "','-12-31" )\n    && references(*[_type=="languageTag" && value.enUS == \'',"' ]._id)\n    ","]"]);return f=function(){return e},e}function d(){var e=l(['{\n      "data": ',"| order(coverageContent.postDate desc)","",',\n      "count": count(',")\n    }"]);return d=function(){return e},e}function v(){var e=l(['{\n      "data": ',"","| order(coverageContent.postDate desc) + ","","| order(coverageContent.postDate desc)",',\n      "count": count(',"| order(coverageContent.postDate desc) + ","| order(coverageContent.postDate desc))\n    }"]);return v=function(){return e},e}var g=function(e){return u()(s(),(0,c._6)("heading",e),(0,c._6)("image",e),(0,c._6)("label",e),(0,c._6)("link[0]",e))},h=function(e,n,t,r,i){var o=void 0===i?"":i,a=(0,c.Ke)(e),l=function(e){return u()(f(),n,n,e,o)};return"US"===a?u()(d(),l("US"),g(e),(0,c.cu)(t,r),l("US")):u()(v(),l(a),g(e),l("US"),g(e),(0,c.cu)(t,r),l(a),l("US"))},p=t(11338),b=t(45914),y=t(5632),w=t(68398),m=t(82459),x=t(96625),S=t(29758),O=t(83316),C=t(8440),j=!0,k=function(e){var n=e.data,t=e.initialMediaCoverages,a=(0,y.useRouter)().locale,u=(0,x.Z)({currentPage:1,perPage:12}),c=u.currentPage,l=u.perPage,s=u.setCurrentPage,f=u.containerRef,d=n.page,v=d.title,g=d.latestMediaCoverage,j=(0,i.useState)("2022"),k=j[0],P=j[1],_=(0,m.ZP)(h((0,b.Z)(a),k,c,l),S.nc,{fallbackData:t,revalidateOnFocus:!1}),R=_.data,D=_.isValidating,T=(null===t||void 0===t?void 0:t.count)?t.count:0,E={totalCount:(null===R||void 0===R?void 0:R.count)?null===R||void 0===R?void 0:R.count:T,currentPage:c,siblingCount:1,pageSize:l,onPageChange:function(e){s(e)}},V={placeholder:"Choose Year",defaultOptionId:"2022",options:[{text:"2022",value:"2022"},{text:"2021",value:"2021"},{text:"2020",value:"2020"},{text:"2019",value:"2019"},{text:"2018",value:"2018"}],onSelectChange:function(e){P(e),s(1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O._,{header:g.postDate?(0,r.jsx)(p.x,{size:"xs",textTransform:"uppercase",fontWeight:"600",letterSpacing:"wide",children:new Date("".concat(g.postDate)).toLocaleString((0,w.Z)(a),{dateStyle:"long"})}):void 0,title:null===g||void 0===g?void 0:g.title,image:{alt:null===g||void 0===g?void 0:g.title,width:560,height:560,src:g.image},children:(0,r.jsx)(o.Z,{linkProps:{href:null===g||void 0===g?void 0:g.buttons[0].href},buttonProps:{variant:"orange-button"},children:"Read More"})}),R&&(0,r.jsx)(C.A,{ref:f,variant:D?"transparent":"full-space",heading:v,paginatedTiles:R.data.map((function(e){var n,t,r=e.postDate,i=e.title,o=e.image,u=e.buttons,c=void 0===u?[]:u;return{date:new Date("".concat(r)).toLocaleString((0,w.Z)(a),{dateStyle:"long"}),title:i,image:o&&{width:800,height:450,src:o},href:null!==(t=null===(n=c[0])||void 0===n?void 0:n.href)&&void 0!==t?t:"#",variant:"media-coverage-tile"}})),filter:V,pagination:E,contain:!0})]})}},82459:function(e,n,t){"use strict";t.d(n,{ZP:function(){return q}});var r=t(2784),i=Object.prototype.hasOwnProperty;function o(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var u={}[0],c=function(e){return e===u},l=function(e){return"function"==typeof e},s=function(){},f=function(e,n){return Object.assign({},e,n)},d=!0,v="undefined"!=typeof window,g="undefined"!=typeof document,h=v&&window.addEventListener||s,p=g&&document.addEventListener||s,b={isOnline:function(){return d},isVisible:function(){var e=g&&document.visibilityState;return!!c(e)||"hidden"!==e}},y={initFocus:function(e){p("visibilitychange",e),h("focus",e)},initReconnect:function(e){h("online",(function(){d=!0,e()})),h("offline",(function(){d=!1}))}},w="undefined"==typeof window||"Deno"in window,m=w?null:window.requestAnimationFrame,x=m?function(e){return m(e)}:function(e){return setTimeout(e,1)},S=w?r.useEffect:r.useLayoutEffect,O="undefined"!=typeof navigator&&navigator.connection,C=!w&&O&&(["slow-2g","2g"].includes(O.effectiveType)||O.saveData),j=new WeakMap,k=0;function P(e){if(l(e))try{e=e()}catch(n){e=""}var n;return Array.isArray(e)?(n=e,e=function(e){if(!e.length)return"";for(var n="arg",t=0;t<e.length;++t){var r=e[t],i=u;null===r||"object"!=typeof r&&!l(r)?i=JSON.stringify(r):j.has(r)?i=j.get(r):(i=k,j.set(r,k++)),n+="$"+i}return n}(e)):n=[e=String(e||"")],[e,n,e?"$err$"+e:"",e?"$req$"+e:""]}var _=new WeakMap,R=function(e,n,t,r,i,o){void 0===o&&(o=!1);var a=_.get(e),u=a[0],c=a[1],l=u[n],s=c[n];if(s)for(var f=0;f<s.length;++f)s[f](t,r,i);return o&&l&&l[0]?l[0](2).then((function(){return e.get(n)})):e.get(n)},D=0,T=function(){return++D},E=function(e,n,t,r){return void 0===r&&(r=!0),o(void 0,void 0,void 0,(function(){var i,o,s,f,d,v,g,h,p,b,y;return a(this,(function(a){switch(a.label){case 0:if(i=P(n),o=i[0],s=i[2],!o)return[2];if(f=_.get(e),d=f[2],v=f[3],c(t))return[2,R(e,o,e.get(o),e.get(s),u,r)];if(p=d[o]=T(),v[o]=0,l(t))try{t=t(e.get(o))}catch(e){t=u,h=e}if(!t||!l(t.then))return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t];case 2:return g=a.sent(),[3,4];case 3:return b=a.sent(),h=b,[3,4];case 4:if(p!==d[o]){if(h)throw h;return[2,g]}return[3,6];case 5:g=t,a.label=6;case 6:return c(g)||e.set(o,g),e.set(s,h),v[o]=T(),[4,R(e,o,g,h,u,r)];case 7:if(y=a.sent(),h)throw h;return[2,y]}}))}))};function V(e,n){for(var t in e)e[t][0]&&e[t][0](n)}function I(e,n){if(!_.has(e)){var t=f(y,n),r={},i=E.bind(u,e);return _.set(e,[r,{},{},{},{},{},i]),w||(t.initFocus(V.bind(u,r,0)),t.initReconnect(V.bind(u,r,1))),[e,i]}}var L=I(new Map),M=L[0],N=L[1],F=f({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,n,t,r,i){if(b.isVisible()){var o=t.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!c(o)&&a>o||setTimeout(r,u,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:function e(n,t){var r,o;if(n===t)return!0;if(n&&t&&(r=n.constructor)===t.constructor){if(r===Date)return n.getTime()===t.getTime();if(r===RegExp)return n.toString()===t.toString();if(r===Array){if((o=n.length)===t.length)for(;o--&&e(n[o],t[o]););return-1===o}if(!r||"object"===typeof n){for(r in o=0,n){if(i.call(n,r)&&++o&&!i.call(t,r))return!1;if(!(r in t)||!e(n[r],t[r]))return!1}return Object.keys(t).length===o}}return n!==n&&t!==t},isPaused:function(){return!1},cache:M,mutate:N,fallback:{}},b);function Z(e,n){var t=f(e,n);if(!n)return t;var r=e.use,i=e.fallback,o=n.use,a=n.fallback;return r&&o&&(t.use=r.concat(o)),i&&a&&(t.fallback=f(i,a)),t}var A=(0,r.createContext)({});function U(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var W,z=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},$={dedupe:!0},q=(Object.defineProperty((function(e){var n=e.children,t=e.value,i=Z((0,r.useContext)(A),t),o=t&&t.provider,a=(0,r.useState)((function(){return o?I(o(i.cache||M),t):u}))[0];return a&&(i.cache=a[0],i.mutate=a[1]),(0,r.createElement)(A.Provider,{value:i},n)}),"default",{value:F}),W=function(e,n,t){var i=t.cache,l=t.compare,s=t.fallbackData,d=t.suspense,v=t.revalidateOnMount,g=t.refreshInterval,h=t.refreshWhenHidden,p=t.refreshWhenOffline,b=_.get(i),y=b[0],m=b[1],O=b[2],C=b[3],j=b[4],k=b[5],D=P(e),V=D[0],I=D[1],L=D[2],M=D[3],N=(0,r.useRef)(!1),F=(0,r.useRef)(!1),Z=(0,r.useRef)(V),A=(0,r.useRef)(t),U=function(){return A.current},W=i.get(V),q=c(s)?t.fallback[V]:s,G=c(W)?q:W,H=i.get(L);if(d&&(!V||!n))throw new Error("useSWR requires either key or fetcher with suspense mode");var X=function(){return c(v)?d?!N.current&&!c(G):c(G)||t.revalidateIfStale:v},J=!(!V||!n)&&(!!i.get(M)||!N.current&&X()),K=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),o=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,r.useCallback)((function(e){var r=!1,a=i.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],o.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return S((function(){i.current=e})),[i,o.current,a]}({data:G,error:H,isValidating:J},F),Y=K[0],B=K[1],Q=K[2],ee=(0,r.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var r,o,s,f,d,v,g,h,p;return a(this,(function(a){switch(a.label){case 0:if(!V||!n||F.current||U().isPaused())return[2,!1];s=!0,f=e||{},d=!c(j[V])&&f.dedupe,v=function(){return!F.current&&V===Z.current&&N.current},g=function(){delete j[V],delete k[V]},a.label=1;case 1:return a.trys.push([1,6,,7]),i.set(M,!0),Q({isValidating:!0}),d||R(i,V,Y.current.data,Y.current.error,!0),d?(o=k[V],[4,j[V]]):[3,3];case 2:return r=a.sent(),[3,5];case 3:return t.loadingTimeout&&!i.get(V)&&setTimeout((function(){s&&v()&&U().onLoadingSlow(V,t)}),t.loadingTimeout),k[V]=o=T(),[4,j[V]=n.apply(n,I)];case 4:r=a.sent(),setTimeout((function(){k[V]===o&&g()}),t.dedupingInterval),v()&&U().onSuccess(r,V,t),a.label=5;case 5:return k[V]!==o?[2,!1]:(i.set(L,u),i.set(M,!1),h={isValidating:!1},!c(O[V])&&(o<=O[V]||o<=C[V]||0===C[V])?(Q(h),[2,!1]):(c(Y.current.error)||(h.error=u),l(Y.current.data,r)||(h.data=r),l(i.get(V),r)||i.set(V,r),Q(h),d||R(i,V,r,h.error,!1),[3,7]));case 6:return p=a.sent(),g(),i.set(M,!1),U().isPaused()?(Q({isValidating:!1}),[2,!1]):(i.set(L,p),Y.current.error!==p&&(Q({isValidating:!1,error:p}),d||R(i,V,u,p,!1)),v()&&(U().onError(p,V,t),t.shouldRetryOnError&&U().onErrorRetry(p,V,t,ee,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return s=!1,[2,!0]}}))}))}),[V]),ne=(0,r.useCallback)((function(e,n){return E(i,Z.current,e,n)}),[]);if(S((function(){A.current=t})),S((function(){if(V){var e=N.current,n=ee.bind(u,$),t=function(){return U().isVisible()&&U().isOnline()},r=0,i=z(V,m,(function(e,n,t){Q(f({error:n,isValidating:t},l(e,Y.current.data)?null:{data:e}))})),o=z(V,y,(function(e){if(0===e){var i=Date.now();U().revalidateOnFocus&&i>r&&t()&&(r=i+U().focusThrottleInterval,n())}else if(1===e)U().revalidateOnReconnect&&t()&&n();else if(2===e)return ee()}));return F.current=!1,Z.current=V,e&&Q({data:G,error:H,isValidating:J}),X()&&(c(G)||w?n():x(n)),N.current=!0,function(){F.current=!0,i(),o()}}}),[V,ee]),S((function(){var e;function n(){g&&-1!==e&&(e=setTimeout(t,g))}function t(){Y.current.error||!h&&!U().isVisible()||!p&&!U().isOnline()?n():ee($).then((function(){return n()}))}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[g,h,p,ee]),(0,r.useDebugValue)(G),d&&c(G))throw c(H)?ee($):H;return{mutate:ne,get data(){return B.data=!0,G},get error(){return B.error=!0,H},get isValidating(){return B.isValidating=!0,J}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=U(e),i=t[0],o=t[1],a=t[2],u=f(F,(0,r.useContext)(A)),c=Z(u,a),l=W,s=c.use;if(s)for(var d=s.length;d-- >0;)l=s[d](l);return l(i,o||c.fetcher,c)})}},function(e){e.O(0,[854,9774,2888,179],(function(){return n=71395,e(e.s=n);var n}));var n=e.O();_N_E=n}]);