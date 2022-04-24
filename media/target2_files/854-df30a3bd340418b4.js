"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{8440:function(e,n,t){t.d(n,{A:function(){return S}});var r=t(52322),a=t(46760),i=t(86581),o=t(16636),c=t(11338),s=t(28085),l=t(2784),u=t(69836),f=t(47663),d=function(e){var n=e.label,t=e.placeholder,o=e.defaultOptionId,c=e.options,s=e.variant,l=e.onSelectChange,u=(0,a.useMultiStyleConfig)("SelectFilter",{variant:s});return(0,r.jsxs)(i.xu,{"data-testid":"select-filter",children:[n&&(0,r.jsx)("label",{children:n}),(0,r.jsx)(f.Ph,{sx:u.select,defaultValue:o,placeholder:t,onChange:function(e){l(e.target.value)},children:c.map((function(e,n){return(0,r.jsx)("option",{value:e.value,children:e.text},n)}))})]})},g=t(27592),p=t(11314),x=t(90536),b=t(4535),h=t(39716),j=t(40422);function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v="...",m=function(e,n){var t=n-e+1;return Array.from({length:t},(function(n,t){return t+e}))};function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=function(e){var n=e.currentPage,t=void 0===n?1:n,o=e.totalCount,s=e.pageSize,u=e.siblingCount,f=void 0===u?1:u,d=e.onPageChange,O=function(e){var n=e.totalCount,t=e.pageSize,r=e.siblingCount,a=void 0===r?1:r,i=e.currentPage;return(0,l.useMemo)((function(){var e=Math.ceil(n/t);if(a+5>=e)return m(1,e);var r=Math.max(i-a,1),o=Math.min(i+a,e),c=r>2,s=o<e-2,l=1,u=e;if(!c&&s)return y(m(1,3+2*a)).concat([v,e]);if(c&&!s){var f=m(e-(3+2*a)+1,e);return[l,v].concat(y(f))}if(c&&s){var d=m(r,o);return[l,v].concat(y(d),[v,u])}return[]}),[n,t,a,i])}({currentPage:t,totalCount:o,pageSize:s,siblingCount:f}),C=(0,a.useMultiStyleConfig)("Pagination",{});return(0,r.jsx)(g.k,{"data-testid":"pagination",sx:C.paginationContainer,children:(0,r.jsx)(i.xu,{as:"nav","aria-label":"Pagination",sx:C.paginationContent,children:(0,r.jsxs)(p.Ug,{sx:C.section,children:[(0,r.jsxs)(x.r,{onClick:function(){d(t>1?t-1:t)},"data-testid":"previousLink",children:[(0,r.jsx)(b.TX,{children:"Previous page"}),(0,r.jsx)(h.w,{sx:C.leftIcon,as:"a"})]}),O.map((function(e,n){if(e===v)return(0,r.jsx)(c.x,{"data-testid":"separator",children:"\u2026"},n);var a=e===t?{"aria-current":"page"}:{};return(0,r.jsxs)(c.x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){P(e,n,t[n])}))}return e}({"data-testid":"pageItems",fontWeight:"".concat(e===t?"600":"normal"),sx:C.item,className:"".concat(e===t?"selected":""),as:"a"},a,{onClick:function(){return d(+e)},children:[(0,r.jsx)(b.TX,{children:"Page"}),e]}),n)})),(0,r.jsxs)(x.r,{onClick:function(){var e,n;t<(e=o,n=s,Math.ceil(e/n))?d(t+1):d(t)},"data-testid":"nextLink",children:[(0,r.jsx)(b.TX,{children:"Next page"}),(0,r.jsx)(j.X,{sx:C.rightIcon})]})]})})})};function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}var S=(0,a.forwardRef)((function(e,n){var t=e.heading,l=e.subheading,f=e.paginatedTiles,g=e.backgroundColour,p=e.filter,x=e.pagination,b=e.variant,h=e.contain,j=void 0!==h&&h,y=(0,a.useMultiStyleConfig)("PaginatedTileSection",{variant:b});return(0,r.jsxs)(i.xu,{bg:g||"neutral.white",as:"section",className:"paginated-tile-section",sx:y.section,children:[(0,r.jsxs)(i.xu,{ref:n,className:"paginated-tile-section-container",sx:y.container,children:[(0,r.jsxs)(o.r,{className:"paginated-tile-section-top-grid",sx:y.topGrid,children:[(0,r.jsxs)(o.P,{colSpan:{base:1,lg:10,xl:11},className:"paginated-tile-section-heading-container",sx:y.headingContainer,children:[(0,r.jsx)(c.x,{className:"paginated-tile-section-heading",sx:y.heading,children:t}),l&&(0,r.jsx)(c.x,{sx:y.subheading,children:l})," "]}),p&&(0,r.jsx)(o.P,{colSpan:{base:1,lg:2,xl:1},className:"paginated-tile-section-filter-container",sx:y.filterContainer,children:(0,r.jsx)(d,w({},p))})]}),(0,r.jsx)(s.M,{columns:{base:1,md:2,lg:3},spacing:"6",className:"paginated-tile-section-content-grid",sx:y.contentGrid,children:f.map((function(e,n){return e.contain=j,(0,r.jsx)(u.n,w({noOfLines:5},e),n)}))})]}),f.length>0&&(0,r.jsx)(i.xu,{className:"paginated-tile-section-pagination-container",sx:y.paginationContainer,children:(0,r.jsx)(O,w({},x))})]})}));S.displayName="PaginatedTileSection"},69836:function(e,n,t){t.d(n,{n:function(){return d}});var r=t(52322),a=t(46760),i=t(86581),o=t(11338),c=(t(2784),t(39097)),s=t(73119),l=t(97238);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}var d=function(e){var n=e.href,t=void 0===n?"#":n,u=e.title,d=e.tags,g=e.description,p=e.image,x=e.buttons,b=e.subTags,h=e.time,j=e.provider,y=e.languages,v=e.variant,m=e.date,P=e.noOfLines,O=void 0===P?4:P,C=e.contain,w=void 0!==C&&C,S=s.A,k=(0,a.useMultiStyleConfig)("Tile",v);return(0,r.jsx)(c.default,{href:t,passHref:!0,children:(0,r.jsxs)(i.xu,{"data-testid":"tile",as:"a",className:"group",children:[p&&(0,r.jsx)(S,f({sx:k.imageContainer,objectFit:!0===w?"contain":"cover"},p,{src:null===p||void 0===p?void 0:p.src}),u&&"id-".concat(u)),(0,r.jsxs)(i.xu,{sx:k.infoTagsContainer,children:[d&&(0,r.jsx)(l.$,{tags:d}),(0,r.jsxs)(i.xu,{sx:k.infoContainer,children:[m&&(0,r.jsx)(o.x,{sx:k.date,children:m}),u&&(0,r.jsx)(o.x,{sx:k.title,children:u}),g&&(0,r.jsx)(o.x,{sx:k.description,noOfLines:O,children:g}),b&&(0,r.jsx)(o.x,{sx:k.subTags,children:b.map((function(e,n){return(0,r.jsx)(o.x,{as:"span",children:e},n)}))}),(j||h||y)&&(0,r.jsxs)(o.x,{sx:k.tileMetaInfo,children:[j&&(0,r.jsx)(o.x,{as:"span",children:j}),h&&(0,r.jsxs)(o.x,{as:"span",children:[" | ",h,"mins"," | "]}),y&&!h&&(0,r.jsx)(o.x,{as:"span",children:" | "}),y&&(0,r.jsx)(o.x,{as:"span",children:y.join(", ")})]}),x]})]})]})})}},96625:function(e,n,t){t.d(n,{Z:function(){return u}});var r,a,i=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}(a=r||(r={})).setCurrentPage="setCurrentPage",a.setPerPage="setPerPage",a.setTotalCount="setTotalCount";function s(e){var n=e.reducer,t=e.initialState,a=(0,i.useReducer)((function(e,t){var a=function(e,n){switch(n.type){case r.setCurrentPage:return c({},e,{currentPage:n.payload});case r.setPerPage:return c({},e,{perPage:n.payload});case r.setTotalCount:return c({},e,{totalCount:n.payload});default:return e}}(e,t);return n?n(a,t):a}),t),o=a[0],s=a[1],l=(0,i.useCallback)((function(e){s({type:r.setCurrentPage,payload:e})}),[s]),u=(0,i.useCallback)((function(e){s({type:r.setPerPage,payload:e})}),[s]),f=(0,i.useCallback)((function(e){s({type:r.setPerPage,payload:e})}),[s]);return c({dispatch:s},o,{setCurrentPage:l,setPerPage:u,setTotalCount:f})}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=(0,i.useRef)(null);return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({},s({reducer:function(e){return n.current&&window.scrollTo({top:n.current.getBoundingClientRect().top+window.pageYOffset-70,behavior:"smooth"}),e},initialState:e}),{containerRef:n})}}}]);