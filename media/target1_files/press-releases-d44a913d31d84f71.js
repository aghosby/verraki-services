(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4954],{39716:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r=(0,n(65932).I)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},96956:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company/news-room/press-releases",function(){return n(16282)}])},83316:function(e,t,n){"use strict";n.d(t,{_:function(){return d}});var r=n(52322),i=n(46760),a=n(86581),u=n(16636),o=n(11338),c=(n(2784),n(73119)),s=n(32220);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}var d=function(e){var t=e.title,n=e.subtitle,l=e.description,d=e.image,v=e.header,h=e.video,g=e.children,p=e.variant,b=c.A,y=(0,i.useMultiStyleConfig)("HeroTwoColumn",{variant:p});return(0,r.jsx)(a.xu,{sx:y.background,children:(0,r.jsxs)(u.r,{templateColumns:"repeat(7, 1fr)",gap:{base:6,xl:16},sx:y.container,children:[(0,r.jsxs)(u.P,{colSpan:{base:7,xl:3},sx:y.imageSection,children:[!h&&(0,r.jsx)(b,f({},d)),h&&(0,r.jsx)(s.y,{video:h})]}),(0,r.jsxs)(u.P,{colSpan:{base:7,xl:4},sx:y.contentSection,children:[v&&v,(0,r.jsx)(o.x,{as:"h1",className:"hero-two-column-heading",sx:y.heading,children:t}),n&&(0,r.jsx)(o.x,{sx:y.subheading,children:n}),l&&(0,r.jsx)(o.x,{sx:y.description,children:l}),(0,r.jsx)(a.xu,{sx:y.children,children:g})]})]})})}},16282:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return j},default:function(){return P}});var r=n(52322),i=n(2784),a=n(72350),u=n.n(a),o=n(41900);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=c(['{\n    "title": ',',\n    postDate,\n    "metaData": metaData',",\n     slug,\n}"]);return s=function(){return e},e}function l(){var e=c(['{\n      "data": ',"\n          | order(postDate desc)","",',\n      "count": count(',")\n    }"]);return l=function(){return e},e}function f(){var e=c(['{\n      "data": (\n          '," | order(postDate desc)\n          +\n          "," | order(postDate desc)\n          )","",',\n      "count": count(\n          '," | order(postDate desc)\n          +\n          "," | order(postDate desc)\n      )\n    }"]);return f=function(){return e},e}var d=function(e){return u()(s(),(0,o._6)("title",e),(0,o.pw)(e))},v=function(e,t,n,r,i){var a=void 0===i?"":i,c=(0,o.Ke)(e),s=function(e){return"*[_type=='pressReleasePageSchema'\n        && ( postDate >= \"".concat(t,'-01-01" && postDate <= "').concat(t,'-12-31" )\n        && references(*[_type=="languageTag" && value.enUS == \'').concat(e,"' ]._id)\n        ").concat(a,"]")};return"US"===c?u()(l(),s("US"),d(e),(0,o.cu)(n,r),s("US")):u()(f(),s(c),s("US"),d(e),(0,o.cu)(n,r),s(c),s("US"))},h=n(11338),g=n(68129),p=n(45914),b=n(5632),y=n(68398),w=n(82459),x=n(96625),m=n(29758),S=n(83316),O=n(8440),j=!0,P=function(e){var t,n=e.data,a=e.initialPressReleases,u=(0,b.useRouter)().locale,o=(0,i.useState)("2022"),c=o[0],s=o[1],l=(0,x.Z)({currentPage:1,perPage:12}),f=l.currentPage,d=l.perPage,j=l.setCurrentPage,P=l.containerRef,k=(0,w.ZP)(v((0,p.Z)(u),c,f,d),m.nc,{fallbackData:a,revalidateOnFocus:!1}),D=k.data,R=k.isValidating,T=n.page,C=T.latestPressRelease,_=T.title,E={totalCount:(null===D||void 0===D?void 0:D.count)?null===D||void 0===D?void 0:D.count:a.count,currentPage:f,siblingCount:1,pageSize:d,onPageChange:j},V={placeholder:"Choose Year",defaultOptionId:"2022",options:[{text:"2022",value:"2022"},{text:"2021",value:"2021"},{text:"2020",value:"2020"},{text:"2019",value:"2019"},{text:"2018",value:"2018"}],onSelectChange:function(e){j(1),s(e)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S._,{header:C.postDate?(0,r.jsx)(h.x,{size:"xs",textTransform:"uppercase",fontWeight:"600",letterSpacing:"wide",children:new Date("".concat(C.postDate)).toLocaleString((0,y.Z)(u),{dateStyle:"long"})}):void 0,title:null===C||void 0===C?void 0:C.title,image:{alt:null===C||void 0===C?void 0:C.title,src:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",width:560,height:560},children:(0,r.jsx)(g.Z,{linkProps:{href:null===C||void 0===C||null===(t=C.slug)||void 0===t?void 0:t.current},buttonProps:{variant:"orange-button"},children:"Read More"})}),D&&(0,r.jsx)(O.A,{ref:P,variant:R?"transparent":"",heading:_,paginatedTiles:D.data.map((function(e){var t=e.postDate,n=e.title,r=e.slug;return{date:new Date("".concat(t)).toLocaleString((0,y.Z)(u),{dateStyle:"long"}),title:n,href:null===r||void 0===r?void 0:r.current}})),filter:V,pagination:E})]})}},82459:function(e,t,n){"use strict";n.d(t,{ZP:function(){return $}});var r=n(2784),i=Object.prototype.hasOwnProperty;function a(e,t,n,r){return new(n||(n=Promise))((function(i,a){function u(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}var o={}[0],c=function(e){return e===o},s=function(e){return"function"==typeof e},l=function(){},f=function(e,t){return Object.assign({},e,t)},d=!0,v="undefined"!=typeof window,h="undefined"!=typeof document,g=v&&window.addEventListener||l,p=h&&document.addEventListener||l,b={isOnline:function(){return d},isVisible:function(){var e=h&&document.visibilityState;return!!c(e)||"hidden"!==e}},y={initFocus:function(e){p("visibilitychange",e),g("focus",e)},initReconnect:function(e){g("online",(function(){d=!0,e()})),g("offline",(function(){d=!1}))}},w="undefined"==typeof window||"Deno"in window,x=w?null:window.requestAnimationFrame,m=x?function(e){return x(e)}:function(e){return setTimeout(e,1)},S=w?r.useEffect:r.useLayoutEffect,O="undefined"!=typeof navigator&&navigator.connection,j=!w&&O&&(["slow-2g","2g"].includes(O.effectiveType)||O.saveData),P=new WeakMap,k=0;function D(e){if(s(e))try{e=e()}catch(t){e=""}var t;return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=e[n],i=o;null===r||"object"!=typeof r&&!s(r)?i=JSON.stringify(r):P.has(r)?i=P.get(r):(i=k,P.set(r,k++)),t+="$"+i}return t}(e)):t=[e=String(e||"")],[e,t,e?"$err$"+e:"",e?"$req$"+e:""]}var R=new WeakMap,T=function(e,t,n,r,i,a){void 0===a&&(a=!1);var u=R.get(e),o=u[0],c=u[1],s=o[t],l=c[t];if(l)for(var f=0;f<l.length;++f)l[f](n,r,i);return a&&s&&s[0]?s[0](2).then((function(){return e.get(t)})):e.get(t)},C=0,_=function(){return++C},E=function(e,t,n,r){return void 0===r&&(r=!0),a(void 0,void 0,void 0,(function(){var i,a,l,f,d,v,h,g,p,b,y;return u(this,(function(u){switch(u.label){case 0:if(i=D(t),a=i[0],l=i[2],!a)return[2];if(f=R.get(e),d=f[2],v=f[3],c(n))return[2,T(e,a,e.get(a),e.get(l),o,r)];if(p=d[a]=_(),v[a]=0,s(n))try{n=n(e.get(a))}catch(e){n=o,g=e}if(!n||!s(n.then))return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,n];case 2:return h=u.sent(),[3,4];case 3:return b=u.sent(),g=b,[3,4];case 4:if(p!==d[a]){if(g)throw g;return[2,h]}return[3,6];case 5:h=n,u.label=6;case 6:return c(h)||e.set(a,h),e.set(l,g),v[a]=_(),[4,T(e,a,h,g,o,r)];case 7:if(y=u.sent(),g)throw g;return[2,y]}}))}))};function V(e,t){for(var n in e)e[n][0]&&e[n][0](t)}function I(e,t){if(!R.has(e)){var n=f(y,t),r={},i=E.bind(o,e);return R.set(e,[r,{},{},{},{},{},i]),w||(n.initFocus(V.bind(o,r,0)),n.initReconnect(V.bind(o,r,1))),[e,i]}}var M=I(new Map),L=M[0],F=M[1],N=f({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:function(e,t,n,r,i){if(b.isVisible()){var a=n.errorRetryCount,u=i.retryCount,o=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!c(a)&&u>a||setTimeout(r,o,i)}},revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:j?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:j?5e3:3e3,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(i.call(t,r)&&++a&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},isPaused:function(){return!1},cache:L,mutate:F,fallback:{}},b);function Z(e,t){var n=f(e,t);if(!t)return n;var r=e.use,i=e.fallback,a=t.use,u=t.fallback;return r&&a&&(n.use=r.concat(a)),i&&u&&(n.fallback=f(i,u)),n}var A=(0,r.createContext)({});function W(e){return s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]}var z,U=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},G={dedupe:!0},$=(Object.defineProperty((function(e){var t=e.children,n=e.value,i=Z((0,r.useContext)(A),n),a=n&&n.provider,u=(0,r.useState)((function(){return a?I(a(i.cache||L),n):o}))[0];return u&&(i.cache=u[0],i.mutate=u[1]),(0,r.createElement)(A.Provider,{value:i},t)}),"default",{value:N}),z=function(e,t,n){var i=n.cache,s=n.compare,l=n.fallbackData,d=n.suspense,v=n.revalidateOnMount,h=n.refreshInterval,g=n.refreshWhenHidden,p=n.refreshWhenOffline,b=R.get(i),y=b[0],x=b[1],O=b[2],j=b[3],P=b[4],k=b[5],C=D(e),V=C[0],I=C[1],M=C[2],L=C[3],F=(0,r.useRef)(!1),N=(0,r.useRef)(!1),Z=(0,r.useRef)(V),A=(0,r.useRef)(n),W=function(){return A.current},z=i.get(V),$=c(l)?n.fallback[V]:l,q=c(z)?$:z,B=i.get(M);if(d&&(!V||!t))throw new Error("useSWR requires either key or fetcher with suspense mode");var H=function(){return c(v)?d?!F.current&&!c(q):c(q)||n.revalidateIfStale:v},X=!(!V||!t)&&(!!i.get(L)||!F.current&&H()),J=function(e,t){var n=(0,r.useState)({})[1],i=(0,r.useRef)(e),a=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)((function(e){var r=!1,u=i.current;for(var o in e){var c=o;u[c]!==e[c]&&(u[c]=e[c],a.current[c]&&(r=!0))}r&&!t.current&&n({})}),[]);return S((function(){i.current=e})),[i,a.current,u]}({data:q,error:B,isValidating:X},N),Y=J[0],K=J[1],Q=J[2],ee=(0,r.useCallback)((function(e){return a(void 0,void 0,void 0,(function(){var r,a,l,f,d,v,h,g,p;return u(this,(function(u){switch(u.label){case 0:if(!V||!t||N.current||W().isPaused())return[2,!1];l=!0,f=e||{},d=!c(P[V])&&f.dedupe,v=function(){return!N.current&&V===Z.current&&F.current},h=function(){delete P[V],delete k[V]},u.label=1;case 1:return u.trys.push([1,6,,7]),i.set(L,!0),Q({isValidating:!0}),d||T(i,V,Y.current.data,Y.current.error,!0),d?(a=k[V],[4,P[V]]):[3,3];case 2:return r=u.sent(),[3,5];case 3:return n.loadingTimeout&&!i.get(V)&&setTimeout((function(){l&&v()&&W().onLoadingSlow(V,n)}),n.loadingTimeout),k[V]=a=_(),[4,P[V]=t.apply(t,I)];case 4:r=u.sent(),setTimeout((function(){k[V]===a&&h()}),n.dedupingInterval),v()&&W().onSuccess(r,V,n),u.label=5;case 5:return k[V]!==a?[2,!1]:(i.set(M,o),i.set(L,!1),g={isValidating:!1},!c(O[V])&&(a<=O[V]||a<=j[V]||0===j[V])?(Q(g),[2,!1]):(c(Y.current.error)||(g.error=o),s(Y.current.data,r)||(g.data=r),s(i.get(V),r)||i.set(V,r),Q(g),d||T(i,V,r,g.error,!1),[3,7]));case 6:return p=u.sent(),h(),i.set(L,!1),W().isPaused()?(Q({isValidating:!1}),[2,!1]):(i.set(M,p),Y.current.error!==p&&(Q({isValidating:!1,error:p}),d||T(i,V,o,p,!1)),v()&&(W().onError(p,V,n),n.shouldRetryOnError&&W().onErrorRetry(p,V,n,ee,{retryCount:(f.retryCount||0)+1,dedupe:!0})),[3,7]);case 7:return l=!1,[2,!0]}}))}))}),[V]),te=(0,r.useCallback)((function(e,t){return E(i,Z.current,e,t)}),[]);if(S((function(){A.current=n})),S((function(){if(V){var e=F.current,t=ee.bind(o,G),n=function(){return W().isVisible()&&W().isOnline()},r=0,i=U(V,x,(function(e,t,n){Q(f({error:t,isValidating:n},s(e,Y.current.data)?null:{data:e}))})),a=U(V,y,(function(e){if(0===e){var i=Date.now();W().revalidateOnFocus&&i>r&&n()&&(r=i+W().focusThrottleInterval,t())}else if(1===e)W().revalidateOnReconnect&&n()&&t();else if(2===e)return ee()}));return N.current=!1,Z.current=V,e&&Q({data:q,error:B,isValidating:X}),H()&&(c(q)||w?t():m(t)),F.current=!0,function(){N.current=!0,i(),a()}}}),[V,ee]),S((function(){var e;function t(){h&&-1!==e&&(e=setTimeout(n,h))}function n(){Y.current.error||!g&&!W().isVisible()||!p&&!W().isOnline()?t():ee(G).then((function(){return t()}))}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,g,p,ee]),(0,r.useDebugValue)(q),d&&c(q))throw c(B)?ee(G):B;return{mutate:te,get data(){return K.data=!0,q},get error(){return K.error=!0,B},get isValidating(){return K.isValidating=!0,X}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=W(e),i=n[0],a=n[1],u=n[2],o=f(N,(0,r.useContext)(A)),c=Z(o,u),s=z,l=c.use;if(l)for(var d=l.length;d-- >0;)s=l[d](s);return s(i,a||c.fetcher,c)})}},function(e){e.O(0,[854,9774,2888,179],(function(){return t=96956,e(e.s=t);var t}));var t=e.O();_N_E=t}]);