(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[31],{"6pHr":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var o=!!("undefined"!==typeof window&&window.document&&window.document.createElement)},"8dXX":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var o="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var i=o.length-1
function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(s("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function a(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var r=a(t)
while(0<t--)n+=o[r[t]&i]
return n}},MicT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return Z}))
var o=n("VTBJ")
var i=n("Ff2n")
var r=n("1OyB")
var a=n("vuIU")
var s=n("Ji7U")
var u=n("LK+K")
n("UZiR")
var c=n("q1tI")
var l=n.n(c)
var f=n("17x9")
var h=n.n(f)
function d(e,t,n){if(t.as&&t.as!==e.defaultProps.as)return t.as
if("function"===typeof n)return n()
if(t.href)return"a"
if(t.to){t.as,"[".concat(e.displayName,"] `as` prop should be provided when using `to`")
return"a"}if("function"===typeof t.onClick)return"button"
return e.defaultProps.as||"span"}n("9uj6")
var v=Object.prototype.hasOwnProperty
var p=function(e,t){var n={}
for(var o in e){if("theme"===o||"children"===o||"className"===o||"style"===o)continue
if(t.includes(o)||!v.call(e,o))continue
n[o]=e[o]}return n}
function m(e,t,n){var o=Object.keys(t||{})
var i=n?o.concat(n):o
return p(e,i)}var y=n("6pHr")
var b=function(){var e
if(y["a"]&&window.requestAnimationFrame&&window.cancelAnimationFrame)e=function(e){var t=window.requestAnimationFrame(e)
return{cancel:function(){return window.cancelAnimationFrame(t)}}}
else{var t=(new Date).getTime()
e=function(e){var n=(new Date).getTime()
var o=Math.max(0,16-(n-t))
var i=setTimeout(e,o)
t=n
return{cancel:function(){return clearTimeout(i)}}}}return e}()
var _=n("vJGu")
var g=n("3zPy")
var E=n.n(g)
function k(e,t){var n=Object(_["a"])(e)
var o=Object(_["a"])(t)
return!(!n||!o)&&(n.contains?n.contains(o):n.compareDocumentPosition?n===o||!!(16&n.compareDocumentPosition(o)):w(n,o))}function w(e,t){var n=t
while(n){if(n===e)return true
n=n.parentNode}return false}var O=y["a"]?k:w
function C(e){var t=e&&Object(_["a"])(e)
return t&&t.ownerDocument||document}function F(e,t,n,o){var i=e===window||e===document?e:Object(_["a"])(e)
i.addEventListener(t,n,o)
return{remove:function(){i.removeEventListener(t,n,o)}}}function R(e){try{return e.contentDocument||e.contentWindow.document}catch(e){return null}}var D=n("KQm4")
function N(e,t){var n=e&&Object(_["a"])(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}function T(e){var t=e&&Object(_["a"])(e)
var n=C(t)
return n&&(n.defaultView||n.parentWindow)}function x(e){var t={}
if(y["a"]){var n=e&&Object(_["a"])(e)
t=n?T(e).getComputedStyle(n):{}}return t}function j(e,t,n){var o=Object(_["a"])(e)
if(!o||"function"!==typeof o.querySelectorAll)return[]
var i="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var r=Array.from(o.querySelectorAll(i))
n&&N(o,i)&&(r=[].concat(Object(D["a"])(r),[o]))
return r.filter((function(e){return"function"===typeof t?t(e)&&B(e):B(e)}))}function A(e){var t=x(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function I(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(x(e).getPropertyValue("position").toLowerCase()))return true
return false}function L(e){while(e){if(e===document.body)break
if(A(e))return false
if(I(e))break
e=e.parentNode}return true}function B(e){return!e.disabled&&L(e)}function K(e,t){return j(e,(function(e){return!M(e.getAttribute("tabindex"))}),t)}function M(e){return!isNaN(e)&&e<0}var U=n("8dXX")
var P=function(){function e(t){var n=this
var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:true,liveRegion:[]}
Object(r["a"])(this,e)
this._observer=null
this._attributes=[]
this._nodes=[]
this._parents=[]
this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes)
var o=Array.from(e.removedNodes)
n.hideNodes(t)
o.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e)
var t=n.parseIframeBodies(e)
t.forEach((function(e){n.restoreNode(e)}))}))}))}
var i="function"===typeof o.liveRegion?o.liveRegion():o.liveRegion
this._liveRegion=Array.isArray(i)?i:[i]
this._contextElement=t
this._options=o}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
if(e&&"script"!==e.tagName.toLowerCase()){["role","aria-label","aria-hidden"].forEach((function(n){var o=e.getAttribute(n)
if(null!==o){t._attributes.push([e,n,o])
e.removeAttribute(n)}}))
this._observer.observe(e,{childList:true})}}},{key:"hideNodes",value:function(e){var t=this
e.forEach((function(e){if(e&&1===e.nodeType&&"script"!==e.tagName.toLowerCase()&&-1===t._parents.indexOf(e)&&-1===t._nodes.indexOf(e)&&-1===t._liveRegion.indexOf(e)&&!t._contextElement.contains(e)){"iframe"!==e.tagName.toLowerCase()&&t.hideNode(e)
var n=t.parseIframeBodies(e)
n.forEach((function(e){t.hideNode(e)}))}}))}},{key:"hideNode",value:function(e){if("true"!==e.getAttribute("aria-hidden")){e.setAttribute("aria-hidden","true")
this._nodes.push(e)}}},{key:"restoreNode",value:function(e){var t=this._nodes.indexOf(e)
if(t>=0){e.removeAttribute("aria-hidden")
this._nodes.splice(t,1)}}},{key:"parseIframeBodies",value:function(e){if(!e)return[]
var t=[]
"iframe"===e.tagName.toLowerCase()?t.push(e):e.getElementsByTagName&&(t=Array.from(e.getElementsByTagName("iframe")))
return t.map((function(e){var t=null
try{t=e.contentDocument.body}catch(e){"[ui-a11y] could not find a document for iframe: ".concat(e)}return t})).filter((function(e){return null!==e}))}},{key:"activate",value:function(){if(!this._options.shouldContainFocus)return
this._observer=new MutationObserver(this.handleDOMMutation)
var e=this._contextElement
while(e&&1===e.nodeType&&"body"!==e.tagName.toLowerCase()){var t=e.parentElement
if(t){this._parents.push(t)
this.muteNode(t)
this.hideNodes(Array.prototype.slice.call(t.childNodes))}e=e.parentNode}}},{key:"deactivate",value:function(){if(this._observer){this._observer.disconnect()
this._observer=null}this._nodes.forEach((function(e){e.removeAttribute("aria-hidden")}))
this._nodes=[]
this._attributes.forEach((function(e){e[0].setAttribute(e[1],e[2]||"")}))
this._attributes=[]
this._parents=[]}}])
return e}()
function W(e){try{return(e||document).activeElement}catch(e){}}function S(e){var t=e&&Object(_["a"])(e)
var n=W()
return t&&(n===t||O(t,n))}function q(e){var t=e&&Object(_["a"])(e)
return t&&W()===t}function J(e,t,n){var o=Object(_["a"])(e)
var i=K(o)
if(!i.length){t.preventDefault()
return}if(S(e)){var r=W();-1===i.indexOf(r)&&i.push(r)}var a=i[t.shiftKey?0:i.length-1]
var s=q(a)||q(o)||!S(e)
if(!s)return
if("function"===typeof n){n()
return}t.preventDefault()
var u=i[t.shiftKey?i.length-1:0]
u.focus()}var G=function(){function e(t,n){var o=this
Object(r["a"])(this,e)
this._contextElement=null
this._focusLaterElement=null
this._needToFocus=false
this._listeners=[]
this._raf=[]
this._active=false
this.handleDismiss=function(e){o._options.onDismiss(e)}
this.handleKeyDown=function(e){e.keyCode===E.a.codes.tab&&J(o._contextElement,e)}
this.handleClick=function(e){o._wasDocumentClick=true}
this.handleWindowBlur=function(e){if(o._wasDocumentClick){o._wasDocumentClick=false
return}o._needToFocus=true}
this.handleFocus=function(e){if(o._needToFocus){o._needToFocus=false
if(!o._contextElement)return
o._raf.push(b((function(){if(S(o._contextElement))return
o.focusDefaultElement()})))}}
this.handleFirstTabbableKeyDown=function(e){e.keyCode===E.a.codes.tab&&e.shiftKey&&o._options.onBlur(e)}
this.handleLastTabbableKeyDown=function(e){e.keyCode!==E.a.codes.tab||e.shiftKey||o._options.onBlur(e)}
this._contextElement=Object(_["a"])(t)
this._options=n||{shouldContainFocus:true,shouldReturnFocus:true,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null}
this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=Object(_["a"])(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
if(this.focused)return
this._raf.push(b((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
if(!this._active&&(e||t)){if(t)this._listeners.push(F(this.doc,"keydown",this.handleKeyDown))
else{this._listeners.push(F(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown))
this._listeners.push(F(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))}this._listeners.push(F(this.doc,"click",this.handleClick,true))
this._listeners.push(F(this.win,"blur",this.handleWindowBlur,false))
this._listeners.push(F(this.doc,"focus",this.handleFocus,true))
this._active=true}}},{key:"deactivate",value:function(){if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
this._preventCloseOnDocumentClick=false
this._active=false}}},{key:"focused",get:function(){return S(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return true===e||Array.isArray(e)&&e.includes["keyboard"]}},{key:"focusable",get:function(){return j(this._contextElement,(function(){return true}),true)||[]}},{key:"tabbable",get:function(){return K(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return C(this._contextElement)}},{key:"win",get:function(){return T(this._contextElement)}},{key:"activeElement",get:function(){return W(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement
var t=Object(_["a"])("function"===typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
if(n)return n
if(this.focusable.includes(this._contextElement))return this._contextElement
return null}}])
return e}()
var X=function(){function e(t,n){var o=this
Object(r["a"])(this,e)
this._contextElement=null
this._preventCloseOnDocumentClick=false
this._listeners=[]
this._active=false
this.handleDismiss=function(e,t){o._options.onDismiss(e,t)}
this.captureDocumentClick=function(e){var t=e.target
o._preventCloseOnDocumentClick=0!==e.button||O(o._contextElement,t)}
this.handleDocumentClick=function(e){o._options.shouldCloseOnDocumentClick&&!o._preventCloseOnDocumentClick&&o.handleDismiss(e,true)}
this.handleFrameClick=function(e,t){O(o._contextElement,t)||o.handleDismiss(e,true)}
this.handleKeyUp=function(e){o._options.shouldCloseOnEscape&&e.keyCode===E.a.codes.escape&&!e.defaultPrevented&&o.handleDismiss(e)}
this._options=n||{shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,onDismiss:function(e){}}
this._contextElement=t
this._screenReaderFocusRegion=new P(t,n)
this._keyboardFocusRegion=new G(t,n)
this._id=Object(U["a"])()}Object(a["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e
this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e)
this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=C(this._contextElement)
this._keyboardFocusRegion.activate()
this._screenReaderFocusRegion.activate()
if(this._options.shouldCloseOnDocumentClick){this._listeners.push(F(t,"click",this.captureDocumentClick,true))
this._listeners.push(F(t,"click",this.handleDocumentClick))
Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=R(t)
n&&e._listeners.push(F(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))}this._options.shouldCloseOnEscape&&this._listeners.push(F(t,"keyup",this.handleKeyUp))
this._active=true}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
n&&this._keyboardFocusRegion.deactivate()
this._screenReaderFocusRegion.deactivate()
this._active=false}}},{key:"focus",value:function(){this._active
this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active
this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(K(this._contextElement)||[]).length>0}}])
return e}()
var H=[]
var V=function e(){Object(r["a"])(this,e)}
V.focusRegion=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n
n="string"===typeof t?V.getEntry(e,t):V.addEntry(e,t)
if(n&&n.region&&"function"===typeof n.region.focus){n.region.focus()
return n.region}"[FocusRegionManager] Could not focus region with element: ".concat(e)}
V.activateRegion=function(e,t){var n=V.addEntry(e,t),o=n.region
return o}
V.getActiveEntry=function(){return H.find((function(e){var t=e.region
return t.focused}))}
V.findEntry=function(e,t){var n
n=t?H.findIndex((function(e){return e.id===t})):H.findIndex((function(t){return t.element===e}))
return n}
V.getEntry=function(e,t){return H[V.findEntry(e,t)]}
V.addEntry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n=new X(e,t)
var o=V.getActiveEntry()
var i=n.keyboardFocusable
H.forEach((function(e){var t=e.region
t&&t.deactivate(t.focused&&!i&&{keyboard:false})}))
n.activate()
t.shouldFocusOnOpen&&n.focus()
var r={id:n.id,element:e,region:n,children:[],parent:o}
H.push(r)
o&&o.children.push(r)
return r}
V.removeEntry=function(e,t){var n=V.findEntry(e,t)
var o=H[n]
n>-1&&H.splice(n,1)
return o}
V.isFocused=function(e,t){var n=V.getActiveEntry()
return t?n&&n.region&&n.id===t:n&&n.region&&n.element===e}
V.clearEntries=function(){H=[]}
V.blurRegion=function(e,t){var n=V.removeEntry(e,t)
if(n){var o=n.children,i=n.region,r=n.parent
i&&i.deactivate()
o&&o.forEach((function(e){var t=e.id,n=e.element
var o=V.removeEntry(n,t)
o&&o.region&&o.region.deactivate()}))
r&&r.region&&r.region.activate()
i&&i.blur()}}
var Z=function(e){Object(s["a"])(n,e)
var t=Object(u["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a]
e=t.call.apply(t,[this].concat(i))
e._raf=[]
e._focusRegion=null
e.getRef=function(t){e._root=t}
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(i["a"])(t,["open","contentElement"]))
this._raf.push(b((function(){setTimeout((function(){e._focusRegion=V.activateRegion(e.contentElement,Object(o["a"])({},n))}),0)})))}},{key:"close",value:function(){this._focusRegion&&V.blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&V.focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=d(n,this.props)
return this.props.open?l.a.createElement(e,Object.assign({},m(this.props,n.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(_["a"])(this.props.contentElement)
e||(e=Object(_["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&V.isFocused(this.contentElement,this._focusRegion.id)}}])
n.displayName="Dialog"
return n}(c["Component"])
Z.propTypes={children:h.a.node,as:h.a.elementType,display:h.a.oneOf(["auto","block","inline-block"]),label:h.a.string,open:h.a.bool,onBlur:h.a.func,onDismiss:h.a.func,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),contentElement:h.a.oneOfType([h.a.element,h.a.func]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),shouldContainFocus:h.a.oneOfType([h.a.bool,h.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,shouldFocusOnOpen:h.a.bool}
Z.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}},UZiR:function(e,t,n){(function(e){n("q1tI")
var o=false
function i(e,t,n,o){}function r(t,n){if(e.env.OMIT_INSTUI_DEPRECATION_WARNINGS){if(!t&&!o){o=true
i("warn",false,t,["There are Instructure UI deprecation warnings that are being hidden because the `OMIT_INSTUI_DEPRECATION_WARNINGS` environment variable is set. Remove or unset this variable to see the full list of warnings in your console.","These warnings will give you advance notice of breaking changes and upgrade guidance to keep your code up to date with the latest Instructure UI versions."].join("\n\n"))}}else{for(var r=arguments.length,a=new Array(r>2?r-2:0),s=2;s<r;s++)a[s-2]=arguments[s]
i.apply(void 0,["warn",true,t,n].concat(a))}}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,["error",true].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,["warn",true].concat(t))}
t.warnDeprecated=function(){return r.apply(void 0,arguments)}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}}).call(this,n("8oxB"))},vJGu:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var o=n("i8i4")
var i=n.n(o)
function r(e){var t="function"===typeof e?e():e
if(t===document)return document.documentElement
if(t instanceof Element||t===window||t&&"undefined"!==typeof t.nodeType)return t
if(t)return i.a.findDOMNode(t)}}}])

//# sourceMappingURL=31-c-26b86a9890.js.map