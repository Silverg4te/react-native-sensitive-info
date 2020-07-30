(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(114)),a={id:"how_it_works",title:"How it works",sidebar_label:"How it works"},c={unversionedId:"how_it_works",id:"version-6.x/how_it_works",isDocsHomePage:!1,title:"How it works",description:"Supposing you need to save an authentication token in user's device using RNSInfo.setItem:",source:"@site/versioned_docs/version-6.x/how_it_works.md",permalink:"/react-native-sensitive-info/docs/how_it_works",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-6.x/how_it_works.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"How it works",sidebar:"version-6.x/someSidebar",previous:{title:"Overview",permalink:"/react-native-sensitive-info/docs/"},next:{title:"Installation",permalink:"/react-native-sensitive-info/docs/installation"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Supposing you need to save an authentication token in user's device using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"setItem"}),"RNSInfo.setItem"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Android: RNSInfo will automatically encrypt the token using keystore and save it into shared preferences. If you want you will be able to add an extra layer of security by requesting user's fingerprint to unlock the encrypted data. Check out our recipe ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"protectingWithFingerprint"}),"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iOS: RNSInfo will automatically save your data into user's keychain which is handled by OS. You can also add an extra layer of security by requesting user's fingerprint or faceID to unlock the encrypted data. Check out our recipe ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"protectingWithFingerprint"}),"here")))))}p.isMDXComponent=!0}}]);