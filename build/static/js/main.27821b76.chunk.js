(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{324:function(e,t,n){"use strict";n.r(t);n(892);var r=n(0),o=n.n(r),a=n(322),i=n.n(a),c=n(47),u=n(17),s=n.n(u),l=n(103),f=n.n(l),p=n(318),d=n(102),m=n.n(d),y=n(316);function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(c,u)}function c(e){i("next",e)}function u(e){i("throw",e)}c()})}}n(611).config();var b=Object({NODE_ENV:"production",PUBLIC_URL:""}).INFURA_KEY,v=18,g="undefined"!==typeof web3?window.web3.currentProvider:new p.providers.HttpProvider("https://mainnet.infura.io/v3/"+b),w=[],E=function(e){w.push(e)};function k(){return S.apply(this,arguments)}function S(){return(S=h(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.web3){e.next=4;break}g=new y.PortisProvider({}),e.next=11;break;case 4:if(!window.ethereum){e.next=8;break}window.ethereum.enable(),e.next=11;break;case 8:throw t="You need an Ethereum wallet to interact with this marketplace. Unlock your wallet, get MetaMask.io or Portis on desktop, or get Trust Wallet or Coinbase Wallet on mobile.",alert(t),new Error(t);case 11:w.map(function(e){return e(g)});case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,j(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.account,n=e.showImage,r=t.user?t.user.username:null,a=t.address,i=r||a.substring(2,8).toUpperCase();return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat("https://opensea.io","/accounts/").concat(a)},n&&t?o.a.createElement("div",{style:{backgroundImage:'url("'+t.image+'")'}}):null,o.a.createElement("span",null,i))}}])&&_(n.prototype,r),a&&_(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");x(e.prototype,t&&t.prototype),t&&x(e,t)}(t,e),t}(o.a.Component);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var F=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,T(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){var e=this.props.asset;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"text-center d-inline-block m-100",href:e.openseaLink},o.a.createElement("img",{alt:"Asset artwork",src:e.imageUrl})),o.a.createElement("div",{className:"card-body h-25"},o.a.createElement("h5",{className:"card-title"},e.name),o.a.createElement("p",{className:"card-text text-truncate"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.openseaLink,className:"card-link"},e.assetContract.name," #",e.tokenId))))}}])&&M(n.prototype,r),a&&M(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");B(e.prototype,t&&t.prototype),t&&B(e,t)}(t,e),t}(o.a.Component),L=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  min-height: 120px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 5px 0;\n"]);function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,I(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){var e=this.props.bundle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"text-center d-inline-block m-100",href:e.permalink},o.a.createElement(H,null,e.assets.map(function(e,t){return o.a.createElement("img",{className:"small",alt:"Asset Bundle artwork",key:t,src:e.imageUrlThumbnail||e.imageUrl})}))),o.a.createElement("div",{className:"card-body h-25"},o.a.createElement("h5",{className:"card-title"},e.name),o.a.createElement("p",{className:"card-text text-truncate"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.permalink,className:"card-link"},e.description,o.a.createElement("br",null),e.externalLink))))}}])&&R(n.prototype,r),a&&R(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");z(e.prototype,t&&t.prototype),t&&z(e,t)}(t,e),t}(o.a.Component),H=c.a.div(L),J=n(27),V=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  img {\n    height: 15px !important;\n  }\n"]);function W(e){return(W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),G(this,Q(t).apply(this,arguments))}var n,r,a;return n=t,(r=[{key:"render",value:function(){var e=this.props.order,t=e.currentPrice,n=e.paymentTokenContract,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t&&null!=t.decimals?t.decimals:v;return new m.a(e.toString()).div(new m.a(10).pow(n))}(t,n),a=parseFloat(r).toLocaleString(void 0,{minimumSignificantDigits:1}),i="ETH"===n.symbol;return o.a.createElement(Z,null,i?"\u039e":null,a," ",i?null:n.symbol)}}])&&q(n.prototype,r),a&&q(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");K(e.prototype,t&&t.prototype),t&&K(e,t)}(t,e),t}(o.a.Component),Z=c.a.span(V),$=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  min-width: 200px;\n  img {\n    height: 240px;\n    max-width: 100%;\n  }\n  img.small {\n    max-width: 50%;\n    height: 240px;\n  }\n"]);function ee(e){return(ee="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(c,u)}function c(e){i("next",e)}function u(e){i("throw",e)}c()})}}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==ee(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ie=c.a.div.attrs({className:"card mx-2 mb-4"})($),ce=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return oe(r,(n=r=oe(this,(e=ae(t)).call.apply(e,[this].concat(a))),r.state={errorMessage:null,creatingOrder:!1},n))}var n,r,a,i;return n=t,(r=[{key:"onError",value:function(e){var t=this;throw this.setState({errorMessage:e.message}),setTimeout(function(){return t.setState({errorMessage:null})},3e3),e}},{key:"fulfillOrder",value:(i=te(s.a.mark(function e(){var t,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.order,r=t.accountAddress){e.next=4;break}return e.next=4,k();case 4:return e.prev=4,this.setState({creatingOrder:!0}),e.next=8,this.props.seaport.fulfillOrder({order:n,accountAddress:r});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),this.onError(e.t0);case 13:return e.prev=13,this.setState({creatingOrder:!1}),e.finish(13);case 16:case"end":return e.stop()}},e,this,[[4,10,13,16]])})),function(){return i.apply(this,arguments)})},{key:"renderBuyButton",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.state.creatingOrder,r=this.props,a=r.accountAddress,i=r.order,c=function(){var n=te(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!a||t){n.next=3;break}return e.setState({errorMessage:"You already own this asset!"}),n.abrupt("return");case 3:e.fulfillOrder();case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();return o.a.createElement("button",{disabled:n,onClick:c,className:"btn btn-primary w-100"},"Buy",n?"ing":""," for ",o.a.createElement(X,{order:i}))}},{key:"renderAcceptOfferButton",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.state.creatingOrder,r=this.props,a=r.accountAddress,i=r.order,c=function(){var n=te(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!a||t){n.next=3;break}return e.setState({errorMessage:"You do not own this asset!"}),n.abrupt("return");case 3:e.fulfillOrder();case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();return o.a.createElement("button",{disabled:n,onClick:c,className:"btn btn-success w-100"},"Sell",n?"ing":""," for ",o.a.createElement(X,{order:i}))}},{key:"renderExpirationBadge",value:function(){var e=parseFloat(this.props.order.expirationTime);if(e<=0)return null;var t=f.a.duration(f.a.unix(e).diff(f()()));return o.a.createElement("span",{className:"badge bid-expiry-badge red"},o.a.createElement("i",{className:"tiny material-icons"},"timer"),o.a.createElement("span",{className:"expire-label"},"Expires in "),t.humanize())}},{key:"render",value:function(){var e=this.state.errorMessage,t=this.props,n=t.order,r=t.accountAddress,a=n.makerAccount,i=n.listingTime,c=n.asset,u=n.assetBundle,s=c?c.owner:u.assets[0].owner,l=1e3*i.toNumber(),p=f()(l).local().fromNow(),d=r&&r.toLowerCase()===s.address.toLowerCase();return o.a.createElement(ie,null,c?o.a.createElement(F,{asset:c}):o.a.createElement(Y,{bundle:u}),o.a.createElement("ul",{className:"list-group list-group-flush"},o.a.createElement("li",{className:"list-group-item"},"Offered by ",o.a.createElement(P,{account:a})),e?o.a.createElement("div",{className:"alert alert-warning mb-0",role:"alert"},e):o.a.createElement("li",{className:"list-group-item"},n.side===J.OrderSide.Buy?this.renderAcceptOfferButton(d):null,n.side===J.OrderSide.Sell?this.renderBuyButton(!d):null)),o.a.createElement("div",{className:"card-footer"},o.a.createElement("small",{className:"text-muted"},"Posted ",p)))}}])&&re(n.prototype,r),a&&re(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ne(e.prototype,t&&t.prototype),t&&ne(e,t)}(t,e),t}(o.a.Component);function ue(e){return(ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(c,u)}function c(e){i("next",e)}function u(e){i("throw",e)}c()})}}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){return(de=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var me=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return pe(r,(n=r=pe(this,(e=de(t)).call.apply(e,[this].concat(a))),r.state={orders:void 0,total:0,side:void 0,onlyForMe:!1,onlyByMe:!1,onlyBundles:!1,page:1},n))}var n,r,a,i,c,u;return n=t,(r=[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:(u=se(s.a.mark(function e(){var t,n,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.accountAddress,e.next=3,this.props.seaport.api.getOrders({maker:this.state.onlyByMe?t:void 0,owner:this.state.onlyForMe?t:void 0,side:this.state.side,bundled:!!this.state.onlyBundles||void 0},this.state.page);case 3:n=e.sent,r=n.orders,o=n.count,this.setState({orders:r,total:o});case 7:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},{key:"paginateTo",value:function(e){var t=this;this.setState({orders:void 0,page:e},function(){return t.fetchData()})}},{key:"toggleSide",value:function(e){var t=this;this.state.side===e&&(e=void 0),this.setState({orders:void 0,side:e,onlyForMe:void 0},function(){return t.fetchData()})}},{key:"toggleForMe",value:(c=se(s.a.mark(function e(){var t,n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.accountAddress){e.next=4;break}return e.next=4,k();case 4:t=this.state.onlyForMe,this.setState({orders:void 0,onlyForMe:!t,onlyByMe:!1,side:t?void 0:J.OrderSide.Buy},function(){return n.fetchData()});case 6:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"toggleBundles",value:function(){var e=this,t=this.state.onlyBundles;this.setState({orders:void 0,onlyBundles:!t,onlyByMe:!1,side:J.OrderSide.Sell},function(){return e.fetchData()})}},{key:"toggleByMe",value:(i=se(s.a.mark(function e(){var t,n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.accountAddress){e.next=4;break}return e.next=4,k();case 4:t=this.state.onlyByMe,this.setState({orders:void 0,onlyByMe:!t,onlyForMe:!1},function(){return n.fetchData()});case 6:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"renderPagination",value:function(){var e=this,t=this.state,n=t.page,r=t.total,a=this.props.seaport.api.pageSize,i=n*a>=r;return o.a.createElement("nav",null,o.a.createElement("ul",{className:"pagination justify-content-center"},o.a.createElement("li",{className:"page-item "+(1===n?"disabled":"")},o.a.createElement("a",{className:"page-link",href:"#Log",onClick:function(){return e.paginateTo(n-1)},tabIndex:"-1"},"Previous")),o.a.createElement("li",{className:"page-item "+(i?"disabled":"")},o.a.createElement("a",{className:"page-link",href:"#Log",onClick:function(){return e.paginateTo(n+1)}},"Next"))))}},{key:"renderFilters",value:function(){var e=this,t=this.state,n=t.onlyByMe,r=t.onlyForMe,a=t.onlyBundles,i=this.state.side===J.OrderSide.Sell,c=this.state.side===J.OrderSide.Buy;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"mb-3 ml-4"},"Filter orderbook:",o.a.createElement("div",{className:"btn-group ml-4",role:"group"},o.a.createElement("button",{type:"button",className:"btn btn-outline-primary "+(i?"active":""),"data-toggle":"button",onClick:function(){return e.toggleSide(J.OrderSide.Sell)}},"Auctions"),o.a.createElement("button",{type:"button",className:"btn btn-outline-success "+(c?"active":""),"data-toggle":"button",onClick:function(){return e.toggleSide(J.OrderSide.Buy)}},"Bids"))),o.a.createElement("div",{className:"mb-3 ml-4"},o.a.createElement("div",{className:"btn-group",role:"group"},o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary "+(r?"active":""),"data-toggle":"button",onClick:function(){return e.toggleForMe()}},"For Me"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary "+(n?"active":""),"data-toggle":"button",onClick:function(){return e.toggleByMe()}},"By Me"))),o.a.createElement("div",{className:"mb-3 ml-4"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info "+(a?"active":""),"data-toggle":"button",onClick:function(){return e.toggleBundles()}},"Bundles")))}},{key:"render",value:function(){var e=this,t=this.state.orders;return o.a.createElement("div",{className:"container py-3",id:"Log"},this.renderFilters(),null!=t?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card-deck"},t.map(function(t,n){return o.a.createElement(ce,Object.assign({},e.props,{key:n,order:t}))})),this.renderPagination()):o.a.createElement("div",{className:"text-center"},"Loading..."))}}])&&fe(n.prototype,r),a&&fe(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");le(e.prototype,t&&t.prototype),t&&le(e,t)}(t,e),t}(o.a.Component),ye=n(176),he=ve(["\n  border-bottom: 1px solid lightgrey;\n  padding: 10px;\n  text-align: center;\n  background-color: gray;\n\n  h6 img {\n    width: 24px;\n  }\n"]),be=ve(["\n  width: 150px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: 0;\n\n  @media(max-width: 600px) {\n    width: 80px;\n  }\n"]);function ve(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ge(e){return(ge="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ke(e,t){return!t||"object"!==ge(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Se(e){return(Se=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Oe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ke(this,Se(t).call(this,e))).state={accountAddress:null},n.onChangeAddress=function(){n.seaport=new ye.OpenSeaPort(g,{networkName:ye.Network.Main}),n.web3=n.seaport.web3,n.web3.eth.getAccounts(function(e,t){n.setState({accountAddress:t[0]})})},n.onChangeAddress(),E(n.onChangeAddress),n}var n,r,a;return n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a",{href:"https://adept.camp"},o.a.createElement(_e,{src:"https://adept.camp/wp-content/uploads/2020/11/cropped-comingoutofblack.png",alt:"AC Logo"})),o.a.createElement(xe,null,o.a.createElement("h1",null,"Y\u016bgen \u5e7d\u7384"),o.a.createElement("h6",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ProjectOpenSea/opensea-js"},o.a.createElement("img",{alt:"OpenSea logo",className:"mr-2",src:"https://adept.camp/wp-content/uploads/2020/11/cropped-comingoutofblack.png"})," Adept Camp & Post Vinyl Collective DAO Presents:")," Y\u016bgen \u5e7d\u7384")),o.a.createElement("main",null,o.a.createElement(me,{seaport:this.seaport,accountAddress:this.state.accountAddress})))}}])&&Ee(n.prototype,r),a&&Ee(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");we(e.prototype,t&&t.prototype),t&&we(e,t)}(t,e),t}(o.a.Component),xe=c.a.header(he),_e=c.a.img(be),Ne=(n(326),function(){window.dataLayer.push(arguments)});window.dataLayer=window.dataLayer||[],Ne("js",new Date),Ne("config","UA-111688253-4"),i.a.render(o.a.createElement(Oe,null),document.getElementById("root"))},326:function(e,t,n){},744:function(e,t){},825:function(e,t){},840:function(e,t){},842:function(e,t){},865:function(e,t){},898:function(e,t,n){n(897),e.exports=n(324)}},[[898,0,1]]]);
//# sourceMappingURL=main.27821b76.chunk.js.map