(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[49],{"+/gd":function(e,t,n){var r={"./ar.json":["xddP",3732],"./ca.json":["PHVx",3745],"./cy.json":["PwY6",3781],"./da-x-k12.json":["pQJv",3783],"./da.json":["tlvh",3782],"./de.json":["j5e4",3785],"./el.json":["+++G",3797],"./en-AU-x-unimelb.json":["NbFC",3798],"./en-GB-x-ukhe.json":["k/nl",3799],"./en.json":["ZfiP",3800],"./en_AU.json":["fb6b",3801],"./en_CA.json":["hqmS",3802],"./en_CY.json":["t+6G",3803],"./en_GB.json":["lk7d",3804],"./es.json":["RIKZ",3809],"./es_ES.json":["NOht",3810],"./fa_IR.json":["cfpB",3816],"./fi.json":["Ox4J",3817],"./fr.json":["XFP0",3823],"./fr_CA.json":["GuGJ",3824],"./he.json":["Qy3X",3832],"./ht.json":["Zw44",3833],"./hu.json":["6ZhF",3834],"./hy.json":["8B8r",3835],"./is.json":["yEBF",3840],"./it.json":["zCJu",3841],"./ja.json":["dmIv",3842],"./ko.json":["GCD2",3848],"./mi.json":["cN8Q",3864],"./nb-x-k12.json":["hewU",4022],"./nb.json":["MTRM",4021],"./nl.json":["QAOc",4023],"./nn.json":["3g0Q",4024],"./pl.json":["yWea",4035],"./pt.json":["jJkS",4041],"./pt_BR.json":["DVSf",4042],"./ru.json":["iSlJ",4060],"./se.json":["flHM",4065],"./sl.json":["MI1x",4070],"./sv-x-k12.json":["Rjfu",4082],"./sv.json":["MH7q",4081],"./th.json":["RCBN",4090],"./tr.json":["ajcJ",4093],"./uk_UA.json":["W9UN",4094],"./vi.json":["ARjN",4105],"./zh-Hans.json":["z+mB",4112],"./zh-Hant.json":["vyJE",4113],"./zh.json":["Fh4z",4114],"./zh_HK.json":["YKwf",4115]}
function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=r[e],i=t[0]
return n.e(t[1]).then((function(){return n.t(i,3)}))}i.keys=function(){return Object.keys(r)}
i.id="+/gd"
e.exports=i},"+Gzo":function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M1468.2354,1807.0586 L112.9414,1807.0586 L112.9414,112.9406 L1016.4714,112.9406 L1016.4714,564.7056 L1468.2354,564.7056 L1468.2354,1807.0586 Z M1129.4124,136.3196 L1444.8554,451.7656 L1129.4124,451.7656 L1129.4124,136.3196 Z M1531.5944,378.8056 L1202.3724,49.5806 C1170.2964,17.6196 1127.7174,-0.0004 1082.5414,-0.0004 L0.0004,-0.0004 L0.0004,1919.9996 L1581.1754,1919.9996 L1581.1754,498.6346 C1581.1754,453.4586 1563.5574,410.8796 1531.5944,378.8056 L1531.5944,378.8056 Z M338.823,1242.353 L1129.412,1242.353 L1129.412,1129.413 L338.823,1129.413 L338.823,1242.353 Z M338.823,790.588 L1242.353,790.588 L1242.353,677.647 L338.823,677.647 L338.823,790.588 Z M338.823,1468.235 L790.588,1468.235 L790.588,1355.294 L338.823,1355.294 L338.823,1468.235 Z M338.823,1016.471 L1016.471,1016.471 L1016.471,903.53 L338.823,903.53 L338.823,1016.471 Z M338.823,564.706 L790.588,564.706 L790.588,451.765 L338.823,451.765 L338.823,564.706 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"translate(238)"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconDocumentLine"
return n}(u["Component"])
f.glyphName="document"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},"0ptP":function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n("q1tI")
var i=n.n(r)
var o=n("17x9")
var a=n.n(o)
var s=n("J2CL")
var u=n("L+/K")
class l extends r["Component"]{renderDetail(){return this.props.error?i.a.createElement("span",{style:{display:"none"}},this.props.error.message||this.props.error.toString()):null}render(){return i.a.createElement(u["a"],{variant:"error",margin:this.props.margin||"small"},this.props.children,this.renderDetail())}}l.propTypes={error:a.a.oneOfType([a.a.string,a.a.instanceOf(Error)]),children:a.a.node.isRequired,margin:s["c"].spacing}
l.defaultProps={error:null}},"1KsK":function(e,t,n){"use strict"
var r=Object.prototype.toString
e.exports=function(e){var t=r.call(e)
var n="[object Arguments]"===t
n||(n="[object Array]"!==t&&null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee))
return n}},"1seS":function(e,t,n){"use strict"
var r=Array.prototype.slice
var i=n("1KsK")
var o=Object.keys
var a=o?function(e){return o(e)}:n("sYn3")
var s=Object.keys
a.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments)
return e&&e.length===arguments.length}(1,2)
e||(Object.keys=function(e){if(i(e))return s(r.call(e))
return s(e)})}else Object.keys=a
return Object.keys||a}
e.exports=a},"1u+m":function(e,t,n){"use strict"
var r=function(e){return e!==e}
e.exports=function(e,t){if(0===e&&0===t)return 1/e===1/t
if(e===t)return true
if(r(e)&&r(t))return true
return false}},"2Nju":function(e,t,n){"use strict"
var r=n("VF6F")
var i=n("FpZJ")()
var o=i&&!!Symbol.toStringTag
var a
var s
var u
var l
if(o){a=r("Object.prototype.hasOwnProperty")
s=r("RegExp.prototype.exec")
u={}
var c=function(){throw u}
l={toString:c,valueOf:c}
"symbol"===typeof Symbol.toPrimitive&&(l[Symbol.toPrimitive]=c)}var d=r("Object.prototype.toString")
var f=Object.getOwnPropertyDescriptor
var p="[object RegExp]"
e.exports=o?function(e){if(!e||"object"!==typeof e)return false
var t=f(e,"lastIndex")
var n=t&&a(t,"value")
if(!n)return false
try{s(e,l)}catch(e){return e===u}}:function(e){if(!e||"object"!==typeof e&&"function"!==typeof e)return false
return d(e)===p}},"2QeP":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var r=o(n("JlUD"))
var i=n("bEIN")
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
var r=Object.keys(n)
"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))))
r.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n
return e}function u(e){var t=e.dispatch
return function(e){return function(n){if(!(0,i.isFSA)(n))return(0,r.default)(n)?n.then(t):e(n)
return(0,r.default)(n.payload)?n.payload.then((function(e){return t(a({},n,{payload:e}))})).catch((function(e){t(a({},n,{payload:e,error:true}))
return Promise.reject(e)})):e(n)}}}},"45zb":function(e,t,n){"use strict"
var r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag
var i=n("VF6F")
var o=i("Object.prototype.toString")
var a=function(e){if(r&&e&&"object"===typeof e&&Symbol.toStringTag in e)return false
return"[object Arguments]"===o(e)}
var s=function(e){if(a(e))return true
return null!==e&&"object"===typeof e&&"number"===typeof e.length&&e.length>=0&&"[object Array]"!==o(e)&&"[object Function]"===o(e.callee)}
var u=function(){return a(arguments)}()
a.isLegacyArguments=s
e.exports=u?a:s},"4dvy":function(e,t,n){"use strict"
n.r(t)
n.d(t,"WEEKLY_PLANNER_ACTIVE_BTN_ID",(function(){return B}))
n.d(t,"processFocusTarget",(function(){return F}))
n.d(t,"WeeklyPlannerHeader",(function(){return P}))
n.d(t,"ThemedWeeklyPlannerHeader",(function(){return L}))
var r=n("q1tI")
var i=n.n(r)
var o=n("17x9")
var a=n.n(o)
var s=n("XGBb")
var u=n("/MKj")
var l=n("3zPy")
var c=n.n(l)
var d=n("Qyje")
var f=n.n(d)
var p=n("l9BP")
var h=n("J2CL")
var m=n("Zgll")
var g=n("Xx/m")
var b=n("Kdve")
var v=n("o77e")
var y=n("n12J")
var _=n("mgUk")
var E=n("0ptP")
var C=n("ukBn")
var O=n("q7ZJ")
var A=n("Mmr1")
var w=n("Dibh")
var k=n("msMH")
var x=n("fvBP")
var D=n("4lI+")
function j({locale:e,timeZone:t,todoItem:n,courses:o,onEdit:a,onClose:s,savePlannerItem:u,deletePlannerItem:l}){Object(r["useEffect"])(()=>{n&&a()},[a,n])
const c=e=>{u(e).then(s).catch(()=>Object(D["a"])(Object(C["a"])("Failed saving changes on {name}.",{name:null===n||void 0===n?void 0:n.title}),true))}
const d=e=>{l(e).then(s).catch(()=>Object(D["a"])(Object(C["a"])("Failed to delete {name}.",{name:null===n||void 0===n?void 0:n.title}),true))}
const f=()=>{if(null!==n&&void 0!==n&&n.title)return Object(C["a"])("Edit {title}",{title:n.title})
return Object(C["a"])("To Do")}
return i.a.createElement(w["a"],{"data-testid":"todo-editor-modal",label:f(),size:"auto",theme:{autoMinWidth:"25em"},open:!!n,onDismiss:s,shouldCloseOnDocumentClick:false},i.a.createElement(w["a"].Header,null,i.a.createElement(k["a"],null,f()),i.a.createElement(A["a"],{"data-testid":"close-editor-modal",placement:"end",onClick:s},Object(C["a"])("Close"))),i.a.createElement(w["a"].Body,{padding:"none"},i.a.createElement(x["a"],{locale:e,timeZone:t,noteItem:n,onSavePlannerItem:c,onDeletePlannerItem:d,courses:o||[]})))}j.propTypes={locale:a.a.string.isRequired,timeZone:a.a.string.isRequired,todoItem:a.a.object,courses:a.a.arrayOf(a.a.object).isRequired,onEdit:a.a.func.isRequired,onClose:a.a.func.isRequired,savePlannerItem:a.a.func.isRequired,deletePlannerItem:a.a.func.isRequired}
function S({colors:e}){return{backgroundPrimary:e.backgroundLightest}}const I={componentId:"cJPXN",template:function(e){return`\n\n\n\n.WeeklyPlannerHeader-styles__root {\n  position: sticky;\n  z-index: 2;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.WeeklyPlannerHeader-styles__root::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #fafafa);\n}\n\n.WeeklyPlannerHeader-styles__errorbox {\n  background: ${e.backgroundPrimary||"inherit"};\n  z-index: 2;\n  flex-grow: 1;\n}\n`},root:"WeeklyPlannerHeader-styles__root",errorbox:"WeeklyPlannerHeader-styles__errorbox"}
const B="weekly-header-active-button"
function T(){const e=document.querySelector(".ic-Dashboard-tabs")
return(null===e||void 0===e?void 0:e.getBoundingClientRect().bottom)||0}const F=()=>{const e=window.location,t=e.protocol,n=e.host,r=e.pathname,i=e.search,o=e.hash
const a=f.a.parse(i.substring(1))
const s=a.focusTarget
a.focusTarget=void 0
let u=f.a.stringify(a)
u=u?"?"+u:""
const l=`${t}//${n}${r}${u}${o}`
window.history.replaceState({},null,l)
return s}
class P extends r["Component"]{constructor(...e){super(...e)
this.prevButtonRef=Object(r["createRef"])()
this.todayButtonRef=Object(r["createRef"])()
this.nextButtonRef=Object(r["createRef"])()
this.state={stickyOffset:T(),prevEnabled:true,nextEnabled:true,focusedButtonIndex:1,buttons:[this.prevButtonRef,this.todayButtonRef,this.nextButtonRef]}
this.handleStickyOffset=()=>{this.setState({stickyOffset:T()})}
this.handlePrev=()=>{this.prevButtonRef.current.focus()
this.props.loadPastWeekItems()
this.setState({focusedButtonIndex:0})}
this.handleToday=()=>{this.todayButtonRef.current.focus()
this.props.loadThisWeekItems()
this.setState((e,t)=>({focusedButtonIndex:e.prevEnabled?1:0}))}
this.handleNext=()=>{this.nextButtonRef.current.focus()
this.props.loadNextWeekItems({loadMoreButtonClicked:true})
this.setState((e,t)=>({focusedButtonIndex:e.prevEnabled?2:1}))}
this.handleKey=e=>{var t
let n
if(e.keyCode===c.a.codes.right)n=(this.state.focusedButtonIndex+1)%this.state.buttons.length
else{if(e.keyCode!==c.a.codes.left)return
n=(this.state.focusedButtonIndex+this.state.buttons.length-1)%this.state.buttons.length}null===(t=this.state.buttons[n].current)||void 0===t||t.focus()
this.setState({focusedButtonIndex:n})}}updateButtons(){const e=[]
this.setState((t,n)=>{const r=n.wayPastItemDate<n.weekStartMoment.format()||n.weekStartMoment.isAfter(n.todayMoment)
const i=n.wayFutureItemDate>n.weekEndMoment.format()||n.weekEndMoment.isBefore(n.todayMoment)
let o=t.focusedButtonIndex
r&&e.push(this.prevButtonRef)
e.push(this.todayButtonRef)
i&&e.push(this.nextButtonRef)
i||t.focusedButtonIndex!==t.buttons.length-1||(o=e.length-1)
r&&!t.prevEnabled&&0===t.focusedButtonIndex?o=1:!r&&t.prevEnabled&&t.focusedButtonIndex>0&&(o-=1)
return{prevEnabled:r,nextEnabled:i,buttons:e,focusedButtonIndex:o}})
return e}handleFocusTarget(){const e=F()
Object(O["n"])(this.props.todayMoment,this.props.weekStartMoment,this.props.weekEndMoment)&&window.setTimeout(()=>{"missing-items"===e&&this.props.toggleMissing({forceExpanded:true})
this.props.scrollToToday({focusTarget:e,isWeekly:true})},0)}componentChangedVisibility(e){if(this.props.visible){this.handleStickyOffset()
document.addEventListener("scroll",this.handleStickyOffset)
window.addEventListener("resize",this.handleStickyOffset)
e&&this.handleFocusTarget()}else{document.removeEventListener("scroll",this.handleStickyOffset)
window.removeEventListener("resize",this.handleStickyOffset)}}componentDidMount(){this.props.visible&&this.componentChangedVisibility(this.props.weekLoaded)
this.updateButtons()}componentDidUpdate(e,t){this.props.visible!==e.visible&&this.componentChangedVisibility(this.props.weekLoaded)
!e.weekLoaded&&this.props.weekLoaded&&this.props.visible&&this.handleFocusTarget()
if(this.props.wayPastItemDate!==e.wayPastItemDate||!this.props.weekStartMoment.isSame(e.weekStartMoment)||this.props.wayFutureItemDate!==e.wayFutureItemDate||!this.props.weekEndMoment.isSame(e.weekEndMoment)){const e=this.updateButtons()
3===t.buttons.length&&2===e.length&&this.todayButtonRef.current.focus()}}getButtonTabIndex(e){switch(e){case"prev":return this.state.prevEnabled&&0===this.state.focusedButtonIndex?0:-1
case"today":{const e=this.state.prevEnabled?1:0
return this.state.focusedButtonIndex===e?0:-1}case"next":{const e=this.state.prevEnabled?2:1
return this.state.nextEnabled&&this.state.focusedButtonIndex===e?0:-1}}}getButtonId(e){return 0===this.getButtonTabIndex(e)?B:void 0}render(){var e
return i.a.createElement("div",{id:"weekly_planner_header","data-testid":"WeeklyPlannerHeader",className:I.root+" WeeklyPlannerHeader",style:{top:this.state.stickyOffset+"px"},role:"toolbar","aria-label":Object(C["a"])("Weekly schedule navigation")},this.props.loading.loadingError&&i.a.createElement("div",{className:I.errorbox},i.a.createElement(E["a"],{error:this.props.loading.loadingError,margin:"xx-small"},Object(C["a"])("Error loading items"))),i.a.createElement(y["a"],{as:"div",textAlign:"end",padding:"xx-small 0 xx-small xx-small",background:"primary",onKeyDown:this.handleKey},i.a.createElement(m["a"],{id:this.getButtonId("prev"),onClick:this.handlePrev,screenReaderLabel:Object(C["a"])("View previous week"),interaction:this.state.prevEnabled?"enabled":"disabled",ref:this.prevButtonRef,tabIndex:this.getButtonTabIndex("prev")},i.a.createElement(b["a"],null)),i.a.createElement(g["a"],{id:this.getButtonId("today"),margin:"0 xx-small",onClick:this.handleToday,ref:this.todayButtonRef,tabIndex:this.getButtonTabIndex("today")},i.a.createElement(p["a"],{alt:Object(C["a"])("Jump to Today")},Object(C["a"])("Today"))),i.a.createElement(m["a"],{id:this.getButtonId("next"),onClick:this.handleNext,screenReaderLabel:Object(C["a"])("View next week"),interaction:this.state.nextEnabled?"enabled":"disabled",ref:this.nextButtonRef,tabIndex:this.getButtonTabIndex("next")},i.a.createElement(v["a"],null)),i.a.createElement(j,{locale:this.props.locale,timeZone:this.props.timeZone,todoItem:null===(e=this.props.todo)||void 0===e?void 0:e.updateTodoItem,courses:this.props.courses,onEdit:this.props.openEditingPlannerItem,onClose:this.props.cancelEditingPlannerItem,savePlannerItem:this.props.savePlannerItem,deletePlannerItem:this.props.deletePlannerItem})))}}P.propTypes={loadNextWeekItems:a.a.func.isRequired,loadPastWeekItems:a.a.func.isRequired,loadThisWeekItems:a.a.func.isRequired,scrollToToday:a.a.func.isRequired,toggleMissing:a.a.func.isRequired,loading:a.a.shape({isLoading:a.a.bool,loadingWeek:a.a.bool,loadingError:a.a.string}).isRequired,visible:a.a.bool,todayMoment:s["momentObj"],weekStartMoment:s["momentObj"],weekEndMoment:s["momentObj"],wayPastItemDate:a.a.string,wayFutureItemDate:a.a.string,weekLoaded:a.a.bool,locale:a.a.string.isRequired,timeZone:a.a.string.isRequired,todo:a.a.shape({updateTodoItem:a.a.shape({title:a.a.string})}),savePlannerItem:a.a.func.isRequired,deletePlannerItem:a.a.func.isRequired,cancelEditingPlannerItem:a.a.func.isRequired,openEditingPlannerItem:a.a.func.isRequired,courses:a.a.arrayOf(a.a.object).isRequired}
const L=Object(h["j"])(S,I)(P)
const M=e=>{var t
const n=null===(t=e.weeklyDashboard)||void 0===t?void 0:t.weeks
return{loading:e.loading,locale:e.locale,todayMoment:e.today,weekStartMoment:e.weeklyDashboard.weekStart,weekEndMoment:e.weeklyDashboard.weekEnd,wayPastItemDate:e.weeklyDashboard.wayPastItemDate,wayFutureItemDate:e.weeklyDashboard.wayFutureItemDate,weekLoaded:!!n&&!!n[e.weeklyDashboard.weekStart.format()],timeZone:e.timeZone,todo:e.todo,courses:e.courses}}
const N={loadNextWeekItems:_["n"],loadPastWeekItems:_["p"],loadThisWeekItems:_["q"],scrollToToday:_["x"],savePlannerItem:_["u"],deletePlannerItem:_["f"],cancelEditingPlannerItem:_["c"],openEditingPlannerItem:_["r"],toggleMissing:_["D"]}
t["default"]=Object(u["b"])(M,N)(L)},"4lI+":function(e,t,n){"use strict"
n.d(t,"b",(function(){return a}))
n.d(t,"a",(function(){return s}))
n.d(t,"c",(function(){return u}))
let r=null
let i=null
let o=null
function a({visualSuccessCallback:e=r,visualErrorCallback:t=i,srAlertCallback:n=o}){r=e
i=t
o=n}function s(e,t=false){t?i(e):r(e)}function u(e){o(e)}},"5UzU":function(e,t,n){var r=n("hZA9")
var i=n("Wg0N")
e.exports=function(e,t,n){return i(r(e,t,n),t)}},"5xAX":function(e,t,n){"use strict"
var r=n("82c2")
var i=n("PrET")
var o=n("VwiP")
var a=n("V+xs")
var s=n("HH6Z")
var u=i(o)
r(u,{getPolyfill:a,implementation:o,shim:s})
e.exports=u},"6QM+":function(e,t,n){"use strict"
n.d(t,"c",(function(){return s}))
n.d(t,"d",(function(){return u}))
n.d(t,"a",(function(){return z}))
n.d(t,"e",(function(){return U}))
n.d(t,"b",(function(){return G}))
n.d(t,"f",(function(){return j["b"]}))
var r=n("q1tI")
var i=n.n(r)
var o=n("17x9")
function a(e){return`Animatable(${e.displayName})`}function s(e){var t,n
return n=t=class extends i.a.Component{constructor(...e){super(...e)
this.registerAnimatable=(e,t,n,r)=>{if(!this.context.dynamicUiManager)return
this.context.dynamicUiManager.registerAnimatable(e,t,n,r)}
this.deregisterAnimatable=(e,t,n)=>{if(!this.context.dynamicUiManager)return
this.context.dynamicUiManager.deregisterAnimatable(e,t,n)}}render(){return i.a.createElement(e,Object.assign({},this.props,{registerAnimatable:this.registerAnimatable,deregisterAnimatable:this.deregisterAnimatable}))}},t.displayName=a(e),t.contextTypes={dynamicUiManager:Object(o["shape"])({registerAnimatable:o["func"],deregisterAnimatable:o["func"]})},n}function u(e){return t=>{e.setStore(t)
return n=>r=>{const i=t.getState()
e.handleAction(r)
const o=n(r)
const a=t.getState()
i===a&&e.uiStateUnchanged(r)
return o}}}var l=n("VTBJ")
var c=n("ZK5y")
var d=n.n(c)
var f=n("LvDl")
var p=n.n(f)
class h{constructor(){this.registries={day:{},group:{},item:{},opportunity:{},"new-activity-indicator":{}}}validateType(e){const t=Object.keys(this.registries)
if(!t.find(t=>t===e))throw new Error("invalid registry type "+e)}register(e,t,n,r){this.validateType(e)
const i=this.registries[e]
r.forEach(e=>i[e]={component:t,index:n,componentIds:r})}deregister(e,t,n){this.validateType(e)
const r=this.registries[e]
n.forEach(e=>{r[e].component===t&&delete r[e]})}getComponent(e,t){this.validateType(e)
return this.registries[e][t]}getFirstComponent(e,t){this.validateType(e)
const n=this.registries[e]
const r=p.a.minBy(t,e=>n[e].index)
return n[r]}getLastComponent(e,t){this.validateType(e)
const n=this.registries[e]
const r=p.a.maxBy(t,e=>n[e].index)
return n[r]}getUniqSortedComponents(e,t){this.validateType(e)
const n=t.map(t=>this.registries[e][t])
return p.a.chain(n).sortBy("index").sortedUniqBy("index").value()}getSortedComponents(e){this.validateType(e)
return p.a.chain(this.registries[e]).values().sortBy("index").sortedUniqBy("index").filter(e=>e.index>=0).value()}getAllGroupsSorted(){const e=this.getSortedComponents("day")
const t=p.a.flatMap(e,e=>this.getUniqSortedComponents("group",e.componentIds))
return t}getAllItemsSorted(){const e=this.getAllGroupsSorted()
const t=p.a.flatMap(e,e=>this.getUniqSortedComponents("item",e.componentIds))
return t}getAllOpportunitiesSorted(){return this.getSortedComponents("opportunity")}getAllNewActivityIndicatorsSorted(){const e=this.getAllGroupsSorted()
const t=p.a.chain(e).flatMap(e=>this.getUniqSortedComponents("new-activity-indicator",e.componentIds)).filter(e=>null!=e).value()
return t}}var m=n("hmVm")
class g{constructor(e,t){this.acceptedActions={}
this.expectedActions=[]
this.executing=false
if(0===e.length)throw new Error("There must be at least one expected action")
this.expectedActions=e
this._manager=t}isReady(){return this.acceptedActionsLength()===this.expectedActions.length}uiWillUpdate(){}uiDidUpdate(){}fixedElement(){return null}maintainViewportPositionOfFixedElement(){const e=this.fixedElement()
if(e&&this.fixedElementPositionMemo){this.animator().maintainViewportPositionFromMemo(e,this.fixedElementPositionMemo)
this.fixedElementPositionMemo=null}}acceptAction(e){const t=this.expectedActions.indexOf(e.type)
if(-1===t)return false
if(t>this.acceptedActionsLength())return false
const n="shouldAccept"+d.a.pascal(e.type)
const r=!this[n]||this[n](e)
if(r){this.removeAcceptedActionsAfter(t)
this.acceptedActions[e.type]=e}return r}invokeUiWillUpdate(){if(this.executing)return
this.executing=true
const e=this.fixedElement()
e&&(this.fixedElementPositionMemo=this.animator().elementPositionMemo(e))
this.uiWillUpdate()
this.executing=false}invokeUiDidUpdate(){if(this.executing)return
this.executing=true
this.uiDidUpdate()
this.reset()
this.executing=false}acceptedAction(e){if(!this.isExpectedAction(e))throw new Error(`ERROR: ${this.constructor.name} tried to access unexpected action '${e}'`)
const t=this.acceptedActions[e]
if(!t)throw new Error(`ERROR: ${this.constructor.name} tried to retrieve action '${e}' before it was accepted`)
return t}reset(){this.acceptedActions={}
this.fixedElementPositionMemo=null}manager(){return this._manager}registry(){return this.manager().getRegistry()}animator(){return this.manager().getAnimator()}store(){return this.manager().getStore()}app(){return this.manager().getApp()}document(){return this.manager().getDocument()}window(){return this.animator().getWindow()}stickyOffset(){return this.manager().getStickyOffset()}totalOffset(){return this.manager().totalOffset()}isExpectedAction(e){return this.expectedActions.includes(e)}removeAcceptedActionsAfter(e){for(let t=e;t<this.expectedActions.length;++t)delete this.acceptedActions[this.expectedActions[t]]}acceptedActionsLength(){return Object.keys(this.acceptedActions).length}}var b=n("QxcF")
var v=n("OOhq")
class y extends g{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){const e=this.acceptedAction("GOT_DAYS_SUCCESS")
const t=e.payload.internalDays
const n=Object(b["b"])(t)
const r=n.filter(e=>Object(v["f"])(e))
const i=r.map(e=>e.uniqueId)
if(0===i.length)return
let o=this.registry().getLastComponent("day",i),a=o.componentIds
a=p.a.intersection(a,i)
const s=this.registry().getLastComponent("new-activity-indicator",a),u=s.component
this.maintainViewportPositionOfFixedElement()
this.animator().focusElement(u.getFocusable())
this.animator().scrollTo(u.getScrollable(),this.manager().totalOffset())}}var _=n("stE2")
class E extends g{fixedElement(){return this.app().fixedElementForItemScrolling()}findNaiAboveScreen(){const e=this.registry().getAllNewActivityIndicatorsSorted()
return e.reverse().find(e=>this.animator().isAboveScreen(e.component.getScrollable(),this.manager().totalOffset()))}uiDidUpdate(){const e=this.findNaiAboveScreen()
if(e){this.maintainViewportPositionOfFixedElement()
this.animator().focusElement(e.component.getFocusable())
this.animator().scrollTo(e.component.getScrollable(),this.manager().totalOffset())}else{this.animator().scrollToTop()
this.store().dispatch(Object(_["p"])())}}}class C extends g{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){this.maintainViewportPositionOfFixedElement()}}var O=n("mgUk")
class A extends g{uiDidUpdate(){const e=!this.store().getState().loading.allFutureItemsLoaded
const t=e&&this.animator().isOnScreen(this.app().fixedElementForItemScrolling(),this.stickyOffset())
t&&this.window().setTimeout(()=>{this.store().dispatch(Object(O["e"])())
this.store().dispatch(Object(O["m"])())},0)}}var w=n("ukBn")
var k=n("4lI+")
class x extends g{fixedElement(){return this.app().fixedElementForItemScrolling()}uiDidUpdate(){const e=this.acceptedAction("SAVED_PLANNER_ITEM")
const t=e.payload.item.uniqueId
const n=this.registry().getComponent("item",t)
if(null!=n){e.payload.wasToggled||this.animator().focusElement(n.component.getFocusable("update"))
this.maintainViewportPositionOfFixedElement()
this.animator().scrollTo(n.component.getScrollable(),this.stickyOffset())}else Object(k["a"])(Object(w["a"])("Success: To Do created"))}}class D extends g{shouldAcceptGettingFutureItems(e){return e.payload.loadMoreButtonClicked}uiDidUpdate(){const e=this.acceptedAction("GOT_DAYS_SUCCESS").payload.internalDays
const t=e[0][1][0]
const n=this.registry().getAllItemsSorted()
const r=n.findIndex(e=>e.componentIds[0]===t.uniqueId)
const i=r-1
if(i<0){console.error("FocusPriorItemOnLoadMore could not find the item that should receive focus")
return}const o=n[i]
this.animator().focusElement(o.component.getFocusable())}}var j=n("T2fG")
class S extends g{constructor(...e){super(...e)
this.setItemFocusUniqueId=null}uiWillUpdate(){const e=this.acceptedAction("DELETED_PLANNER_ITEM")
const t=e.payload.uniqueId
const n=this.registry().getAllItemsSorted()
const r=n.findIndex(e=>e.componentIds[0]===t)
const i=r-1
this.setItemFocusUniqueId=i>=0?n[i].componentIds[0]:Object(j["b"])("item")}uiDidUpdate(){const e=this.setItemFocusUniqueId
this.setItemFocusUniqueId=null
const t=this.registry().getComponent("item",e)
if(null==t)return
this.window().setTimeout(()=>{this.animator().focusElement(t.component.getFocusable("delete"))
this.animator().scrollTo(t.component.getScrollable(),this.stickyOffset())},250)}}var I=n("f0Wu")
var B=n.n(I)
var T=n("q7ZJ")
class F extends g{uiDidUpdate(){var e,t
const n=this.acceptedAction("SCROLL_TO_TODAY")
const r=null===(e=n.payload)||void 0===e?void 0:e.focusTarget
const i=!!(null!==(t=n.payload)&&void 0!==t&&t.isWeekly)
const o=this.document().querySelector(".planner-today h2")
i&&"missing-items"===r?Object(j["a"])(this.manager(),o,r):L(this.manager(),o,i,r)}}class P extends g{uiDidUpdate(){const e=true
const t=this.document().querySelector(".planner-today h2")
L(this.manager(),t,e)}}function L(e,t,n,r){if(t){const i=M(e.getRegistry(),e.getStore().getState().timeZone),o=i.component,a=i.when
o&&(Object(T["p"])(o.props.date)||!n)?o.getScrollable()&&e.getAnimator().forceScrollTo(t,e.totalOffset(),()=>{e.getAnimator().scrollTo(o.getScrollable(),e.totalOffset(),()=>{"after"===a?Object(k["a"])(Object(w["a"])("Nothing planned today. Selecting next item.")):"before"===a&&Object(k["a"])(Object(w["a"])("Nothing planned today. Selecting most recent item."))
!o.getFocusable()||n&&"today"!==r||e.getAnimator().focusElement(o.getFocusable())})}):Object(j["a"])(e,t)}else{e.getAnimator().scrollToTop()
n||e.getStore().dispatch(Object(_["q"])())}}function M(e,t){const n=B()().tz(t).startOf("day")
const r=e.getAllItemsSorted()
let i=null
let o=null
for(let e=0;e<r.length;++e){const t=r[e]
if(t.component&&t.component.props.date){const e=t.component.props.date
if(e.isBefore(n,"day"))i=t.component
else if(e.isSame(n,"day")||e.isAfter(n,"day")){o=t.component
break}}}const a=o||i
let s="never"
a&&(a===o?s=a.props.date.isSame(n,"day")?"today":"after":a===i&&(s="before"))
return{component:a,when:s}}class N extends g{uiDidUpdate(){const e=this.document().querySelector(".planner-today")
L(this.manager(),e,false)}}class R extends g{constructor(...e){super(...e)
this.savedActiveElement=null}fixedElement(){return this.app().fixedElementForItemScrolling()}shouldAcceptOpenEditingPlannerItem(e){this.savedActiveElement=this.document().activeElement
this.savedActiveElement===this.document().body&&(this.savedActiveElement=null)
return true}uiDidUpdate(){this.maintainViewportPositionOfFixedElement()
if(null!=this.savedActiveElement){this.animator().focusElement(this.savedActiveElement)
const e=this.document().querySelector("#dashboard_header_container")
const t=e&&e.contains(this.savedActiveElement)
t||this.animator().scrollTo(this.savedActiveElement,this.stickyOffset())}}}class q{constructor(e,t){this.animations=[]
t.forEach(({expected:t,animation:n})=>{this.animations.push(new n(t,e))})}static expectedActionsFor(e){const t=q.actionsToAnimations.find(t=>t.animation===e)
return t.expected}acceptAction(e){this.animations.forEach(t=>{t.acceptAction(e)})}uiWillUpdate(){this.animations.forEach(e=>{e.isReady()&&e.invokeUiWillUpdate()})}uiDidUpdate(){this.animations.forEach(e=>{e.isReady()&&e.invokeUiDidUpdate()})}}q.actionsToAnimations=[{expected:["CONTINUE_LOADING_INITIAL_ITEMS","START_LOADING_FUTURE_SAGA","GOT_DAYS_SUCCESS"],animation:A},{expected:["SCROLL_TO_NEW_ACTIVITY"],animation:E},{expected:["START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA","GOT_DAYS_SUCCESS"],animation:y},{expected:["SCROLL_INTO_PAST","START_LOADING_PAST_SAGA","GOT_DAYS_SUCCESS"],animation:C},{expected:["GETTING_FUTURE_ITEMS","GOT_DAYS_SUCCESS"],animation:D},{expected:["SAVED_PLANNER_ITEM"],animation:x},{expected:["OPEN_EDITING_PLANNER_ITEM","CANCELED_EDITING_PLANNER_ITEM"],animation:R},{expected:["DELETED_PLANNER_ITEM"],animation:S},{expected:["SCROLL_TO_TODAY"],animation:F},{expected:["START_LOADING_PAST_UNTIL_TODAY_SAGA","GOT_DAYS_SUCCESS"],animation:N},{expected:["JUMP_TO_THIS_WEEK"],animation:P}]
class z{constructor(e={}){this.registerAnimatable=(e,t,n,r)=>{this.animatableRegistry.register(e,t,n,r)}
this.deregisterAnimatable=(e,t,n)=>{this.animatableRegistry.deregister(e,t,n)}
this.preTriggerUpdates=()=>{this.plannerActive()&&this.animationCollection.uiWillUpdate()}
this.triggerUpdates=()=>{this.plannerActive()&&this.animationCollection.uiDidUpdate()
const e=this.animationPlan
if(!e.ready)return
this.animationPlan.focusOpportunity&&this.triggerFocusOpportunity()
this.clearAnimationPlan()}
this.handleAction=e=>{this.plannerActive()&&this.animationCollection.acceptAction(e)
const t=d.a.pascal(e.type)
const n="handle"+t
const r=this[n]
r&&r(e)}
this.alertLoading=()=>{Object(k["c"])(Object(w["a"])("loading"))}
this.handleStartLoadingItems=this.alertLoading
this.handleGettingFutureItems=this.alertLoading
this.handleGettingPastItems=this.alertLoading
this.handleGotDaysSuccess=e=>{const t=e.payload.internalDays
const n=Object(b["b"])(t)
Object(k["c"])(Object(w["a"])("Loaded { count, plural,\n        =0 {# items}\n        one {# item}\n        other {# items}\n      }",{count:n.length}))}
this.handleStartLoadingGradesSaga=e=>{Object(k["c"])(Object(w["a"])("Loading Grades"))}
this.handleGotGradesSuccess=e=>{Object(k["c"])(Object(w["a"])("Grades Loaded"))}
this.handleDismissedOpportunity=e=>{const t=e.payload.assignment_id||e.payload.plannable_id
this.planDeletedComponent("opportunity",t)}
const t=Object(l["a"])(Object(l["a"])({},z.defaultOptions),e)
this.plannerActive=t.plannerActive
this.animator=t.animator
this.document=t.document
this.animatableRegistry=new h
this.animationCollection=new q(this,t.actionsToAnimations)
this.animationPlan={}
this.plannerHeaderId=""
this.newActivityButtonId=""}setOffsetElementIds(e,t){this.plannerHeaderId=e
this.newActivityButtonId=t}getStickyOffset(){let e=0
if(this.plannerHeaderId){const t=this.getDocument().getElementById(this.plannerHeaderId)
if(t){const n=t.getBoundingClientRect()
e=n.bottom}}return e}getAdditionalOffset(){let e=0
if(this.newActivityButtonId){const t=this.getDocument().getElementById(this.newActivityButtonId)
if(t){const n=t.getBoundingClientRect()
e=n.height}}return e}setStore(e){this.store=e}setApp(e){this.app=e}totalOffset(){return this.getStickyOffset()+this.getAdditionalOffset()}focusFallback(e){const t=this.animatableRegistry.getComponent(e,Object(j["b"])(e))
t&&this.animator.focusElement(t.component.getFocusable())}getRegistry(){return this.animatableRegistry}getAnimator(){return this.animator}getStore(){return this.store}getApp(){return this.app}getDocument(){return this.document}static expectedActionsFor(e){return q.expectedActionsFor(e)}clearAnimationPlan(){this.animationPlan=this.animationPlan.nextAnimationPlan||{}}uiStateUnchanged(e){if(this.plannerActive()){this.animationCollection.uiWillUpdate()
this.animationCollection.uiDidUpdate()}}triggerFocusOpportunity(){const e=this.animatableRegistry.getComponent("opportunity",this.animationPlan.focusOpportunity)
if(null==e)return
this.animator.focusElement(e.component.getFocusable(this.animationPlan.trigger))}handleScrollPositionChange(){let e=this.getStickyOffset()
this.store.getState().ui.naiAboveScreen||(e=0)
const t=this.animatableRegistry.getAllNewActivityIndicatorsSorted()
let n=false
if(t.length>0){const r=t[0].component.getScrollable()
n=r.getBoundingClientRect().top<e}this.store.getState().ui.naiAboveScreen!==n&&this.store.dispatch(Object(O["y"])(n))}planDeletedComponent(e,t){const n=this.sortedComponentsFor(e)
const r=n.findIndex(e=>e.componentIds[0]===t)
const i=this.findFocusIndexAfterDelete(n,r)
const o=d.a.camelCase("focus-"+e)
this.animationPlan[o]=null!=i?n[i].componentIds[0]:Object(j["b"])(e)
this.animationPlan.trigger="delete"
this.animationPlan.ready=true}sortedComponentsFor(e){switch(e){case"item":return this.animatableRegistry.getAllItemsSorted()
case"opportunity":return this.animatableRegistry.getAllOpportunitiesSorted()
default:throw new Error("unrecognized deleted component type: "+e)}}findFocusIndexAfterDelete(e,t){const n=t-1
if(n<0)return null
return n}}z.defaultOptions={plannerActive:()=>false,animator:new m["a"],document:document,actionsToAnimations:q.actionsToAnimations}
function K(e){return`Notifier(${e.displayName})`}function U(e){var t,n
return n=t=class extends i.a.Component{constructor(...e){super(...e)
this.preTriggerUpdates=(...e)=>{this.context.dynamicUiManager&&this.context.dynamicUiManager.preTriggerUpdates(...e)}
this.triggerUpdates=(...e)=>{this.context.dynamicUiManager&&this.context.dynamicUiManager.triggerUpdates(...e)}}render(){return i.a.createElement(e,Object.assign({},this.props,{triggerDynamicUiUpdates:this.triggerUpdates,preTriggerDynamicUiUpdates:this.preTriggerUpdates}))}},t.displayName=K(e),t.contextTypes={dynamicUiManager:Object(o["shape"])({triggerUpdates:o["func"],preTriggerUpdates:o["func"]})},n}const W=Object(o["shape"])({handleAction:o["func"].isRequired,registerAnimatable:o["func"].isRequired,deregisterAnimatable:o["func"].isRequired,preTriggerUpdates:o["func"].isRequired,triggerUpdates:o["func"].isRequired})
class G extends r["Component"]{constructor(e,t){super(e,t)
this.manager=e.manager}getChildContext(){return{dynamicUiManager:this.manager}}render(){return r["Children"].only(this.props.children)}}G.propTypes={manager:W.isRequired,children:o["element"].isRequired}
G.childContextTypes={dynamicUiManager:W}},"7NKU":function(e,t){var n={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{"İ":"i",I:"ı","İ":"i"}},az:{regexp:/[\u0130]/g,map:{"İ":"i",I:"ı","İ":"i"}},lt:{regexp:/[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,map:{I:"i̇",J:"j̇","Į":"į̇","Ì":"i̇̀","Í":"i̇́","Ĩ":"i̇̃"}}}
e.exports=function(e,t){var r=n[t]
e=null==e?"":String(e)
r&&(e=e.replace(r.regexp,(function(e){return r.map[e]})))
return e.toLowerCase()}},"82c2":function(e,t,n){"use strict"
var r=n("1seS")
var i="function"===typeof Symbol&&"symbol"===typeof Symbol("foo")
var o=Object.prototype.toString
var a=Array.prototype.concat
var s=Object.defineProperty
var u=function(e){return"function"===typeof e&&"[object Function]"===o.call(e)}
var l=function(){var e={}
try{s(e,"x",{enumerable:false,value:e})
for(var t in e)return false
return e.x===e}catch(e){return false}}
var c=s&&l()
var d=function(e,t,n,r){if(t in e&&(!u(r)||!r()))return
c?s(e,t,{configurable:true,enumerable:false,value:n,writable:true}):e[t]=n}
var f=function(e,t){var n=arguments.length>2?arguments[2]:{}
var o=r(t)
i&&(o=a.call(o,Object.getOwnPropertySymbols(t)))
for(var s=0;s<o.length;s+=1)d(e,o[s],t[o[s]],n[o[s]])}
f.supportsDescriptors=!!c
e.exports=f},"9ZSq":function(e,t,n){var r;(function(i){var o=/^\s+/,a=/\s+$/,s=0,u=i.round,l=i.min,c=i.max,d=i.random
function f(e,t){e=e||""
t=t||{}
if(e instanceof f)return e
if(!(this instanceof f))return new f(e,t)
var n=p(e)
this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=u(100*this._a)/100,this._format=t.format||n.format
this._gradientType=t.gradientType
this._r<1&&(this._r=u(this._r))
this._g<1&&(this._g=u(this._g))
this._b<1&&(this._b=u(this._b))
this._ok=n.ok
this._tc_id=s++}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb()
return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e=this.toRgb()
var t,n,r,o,a,s
t=e.r/255
n=e.g/255
r=e.b/255
o=t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4)
a=n<=.03928?n/12.92:i.pow((n+.055)/1.055,2.4)
s=r<=.03928?r/12.92:i.pow((r+.055)/1.055,2.4)
return.2126*o+.7152*a+.0722*s},setAlpha:function(e){this._a=N(e)
this._roundA=u(100*this._a)/100
return this},toHsv:function(){var e=b(this._r,this._g,this._b)
return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=b(this._r,this._g,this._b)
var t=u(360*e.h),n=u(100*e.s),r=u(100*e.v)
return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=m(this._r,this._g,this._b)
return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=m(this._r,this._g,this._b)
var t=u(360*e.h),n=u(100*e.s),r=u(100*e.l)
return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return y(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return _(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:u(this._r),g:u(this._g),b:u(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+u(this._r)+", "+u(this._g)+", "+u(this._b)+")":"rgba("+u(this._r)+", "+u(this._g)+", "+u(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:u(100*R(this._r,255))+"%",g:u(100*R(this._g,255))+"%",b:u(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+u(100*R(this._r,255))+"%, "+u(100*R(this._g,255))+"%, "+u(100*R(this._b,255))+"%)":"rgba("+u(100*R(this._r,255))+"%, "+u(100*R(this._g,255))+"%, "+u(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){if(0===this._a)return"transparent"
if(this._a<1)return false
return L[y(this._r,this._g,this._b,true)]||false},toFilter:function(e){var t="#"+E(this._r,this._g,this._b,this._a)
var n=t
var r=this._gradientType?"GradientType = 1, ":""
if(e){var i=f(e)
n="#"+E(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e
e=e||this._format
var n=false
var r=this._a<1&&this._a>=0
var i=!t&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)
if(i){if("name"===e&&0===this._a)return this.toName()
return this.toRgbString()}"rgb"===e&&(n=this.toRgbString())
"prgb"===e&&(n=this.toPercentageRgbString())
"hex"!==e&&"hex6"!==e||(n=this.toHexString())
"hex3"===e&&(n=this.toHexString(true))
"hex4"===e&&(n=this.toHex8String(true))
"hex8"===e&&(n=this.toHex8String())
"name"===e&&(n=this.toName())
"hsl"===e&&(n=this.toHslString())
"hsv"===e&&(n=this.toHsvString())
return n||this.toHexString()},clone:function(){return f(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)))
this._r=n._r
this._g=n._g
this._b=n._b
this.setAlpha(n._a)
return this},lighten:function(){return this._applyModification(w,arguments)},brighten:function(){return this._applyModification(k,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(C,arguments)},saturate:function(){return this._applyModification(O,arguments)},greyscale:function(){return this._applyModification(A,arguments)},spin:function(){return this._applyModification(D,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(T,arguments)},complement:function(){return this._applyCombination(j,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(B,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(I,arguments)}}
f.fromRatio=function(e,t){if("object"==typeof e){var n={}
for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:G(e[r]))
e=n}return f(e,t)}
function p(e){var t={r:0,g:0,b:0}
var n=1
var r=null
var i=null
var o=null
var a=false
var s=false
"string"==typeof e&&(e=te(e))
if("object"==typeof e){if(ee(e.r)&&ee(e.g)&&ee(e.b)){t=h(e.r,e.g,e.b)
a=true
s="%"===String(e.r).substr(-1)?"prgb":"rgb"}else if(ee(e.h)&&ee(e.s)&&ee(e.v)){r=G(e.s)
i=G(e.v)
t=v(e.h,r,i)
a=true
s="hsv"}else if(ee(e.h)&&ee(e.s)&&ee(e.l)){r=G(e.s)
o=G(e.l)
t=g(e.h,r,o)
a=true
s="hsl"}e.hasOwnProperty("a")&&(n=e.a)}n=N(n)
return{ok:a,format:e.format||s,r:l(255,c(t.r,0)),g:l(255,c(t.g,0)),b:l(255,c(t.b,0)),a:n}}function h(e,t,n){return{r:255*R(e,255),g:255*R(t,255),b:255*R(n,255)}}function m(e,t,n){e=R(e,255)
t=R(t,255)
n=R(n,255)
var r=c(e,t,n),i=l(e,t,n)
var o,a,s=(r+i)/2
if(r==i)o=a=0
else{var u=r-i
a=s>.5?u/(2-r-i):u/(r+i)
switch(r){case e:o=(t-n)/u+(t<n?6:0)
break
case t:o=(n-e)/u+2
break
case n:o=(e-t)/u+4}o/=6}return{h:o,s:a,l:s}}function g(e,t,n){var r,i,o
e=R(e,360)
t=R(t,100)
n=R(n,100)
function a(e,t,n){n<0&&(n+=1)
n>1&&(n-=1)
if(n<1/6)return e+6*(t-e)*n
if(n<.5)return t
if(n<2/3)return e+(t-e)*(2/3-n)*6
return e}if(0===t)r=i=o=n
else{var s=n<.5?n*(1+t):n+t-n*t
var u=2*n-s
r=a(u,s,e+1/3)
i=a(u,s,e)
o=a(u,s,e-1/3)}return{r:255*r,g:255*i,b:255*o}}function b(e,t,n){e=R(e,255)
t=R(t,255)
n=R(n,255)
var r=c(e,t,n),i=l(e,t,n)
var o,a,s=r
var u=r-i
a=0===r?0:u/r
if(r==i)o=0
else{switch(r){case e:o=(t-n)/u+(t<n?6:0)
break
case t:o=(n-e)/u+2
break
case n:o=(e-t)/u+4}o/=6}return{h:o,s:a,v:s}}function v(e,t,n){e=6*R(e,360)
t=R(t,100)
n=R(n,100)
var r=i.floor(e),o=e-r,a=n*(1-t),s=n*(1-o*t),u=n*(1-(1-o)*t),l=r%6,c=[n,s,a,a,u,n][l],d=[u,n,n,s,a,a][l],f=[a,a,u,n,n,s][l]
return{r:255*c,g:255*d,b:255*f}}function y(e,t,n,r){var i=[W(u(e).toString(16)),W(u(t).toString(16)),W(u(n).toString(16))]
if(r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)
return i.join("")}function _(e,t,n,r,i){var o=[W(u(e).toString(16)),W(u(t).toString(16)),W(u(n).toString(16)),W(H(r))]
if(i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0)
return o.join("")}function E(e,t,n,r){var i=[W(H(r)),W(u(e).toString(16)),W(u(t).toString(16)),W(u(n).toString(16))]
return i.join("")}f.equals=function(e,t){if(!e||!t)return false
return f(e).toRgbString()==f(t).toRgbString()}
f.random=function(){return f.fromRatio({r:d(),g:d(),b:d()})}
function C(e,t){t=0===t?0:t||10
var n=f(e).toHsl()
n.s-=t/100
n.s=q(n.s)
return f(n)}function O(e,t){t=0===t?0:t||10
var n=f(e).toHsl()
n.s+=t/100
n.s=q(n.s)
return f(n)}function A(e){return f(e).desaturate(100)}function w(e,t){t=0===t?0:t||10
var n=f(e).toHsl()
n.l+=t/100
n.l=q(n.l)
return f(n)}function k(e,t){t=0===t?0:t||10
var n=f(e).toRgb()
n.r=c(0,l(255,n.r-u(-t/100*255)))
n.g=c(0,l(255,n.g-u(-t/100*255)))
n.b=c(0,l(255,n.b-u(-t/100*255)))
return f(n)}function x(e,t){t=0===t?0:t||10
var n=f(e).toHsl()
n.l-=t/100
n.l=q(n.l)
return f(n)}function D(e,t){var n=f(e).toHsl()
var r=(n.h+t)%360
n.h=r<0?360+r:r
return f(n)}function j(e){var t=f(e).toHsl()
t.h=(t.h+180)%360
return f(t)}function S(e){var t=f(e).toHsl()
var n=t.h
return[f(e),f({h:(n+120)%360,s:t.s,l:t.l}),f({h:(n+240)%360,s:t.s,l:t.l})]}function I(e){var t=f(e).toHsl()
var n=t.h
return[f(e),f({h:(n+90)%360,s:t.s,l:t.l}),f({h:(n+180)%360,s:t.s,l:t.l}),f({h:(n+270)%360,s:t.s,l:t.l})]}function B(e){var t=f(e).toHsl()
var n=t.h
return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]}function T(e,t,n){t=t||6
n=n||30
var r=f(e).toHsl()
var i=360/n
var o=[f(e)]
for(r.h=(r.h-(i*t>>1)+720)%360;--t;){r.h=(r.h+i)%360
o.push(f(r))}return o}function F(e,t){t=t||6
var n=f(e).toHsv()
var r=n.h,i=n.s,o=n.v
var a=[]
var s=1/t
while(t--){a.push(f({h:r,s:i,v:o}))
o=(o+s)%1}return a}f.mix=function(e,t,n){n=0===n?0:n||50
var r=f(e).toRgb()
var i=f(t).toRgb()
var o=n/100
var a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a}
return f(a)}
f.readability=function(e,t){var n=f(e)
var r=f(t)
return(i.max(n.getLuminance(),r.getLuminance())+.05)/(i.min(n.getLuminance(),r.getLuminance())+.05)}
f.isReadable=function(e,t,n){var r=f.readability(e,t)
var i,o
o=false
i=ne(n)
switch(i.level+i.size){case"AAsmall":case"AAAlarge":o=r>=4.5
break
case"AAlarge":o=r>=3
break
case"AAAsmall":o=r>=7}return o}
f.mostReadable=function(e,t,n){var r=null
var i=0
var o
var a,s,u
n=n||{}
a=n.includeFallbackColors
s=n.level
u=n.size
for(var l=0;l<t.length;l++){o=f.readability(e,t[l])
if(o>i){i=o
r=f(t[l])}}if(f.isReadable(e,r,{level:s,size:u})||!a)return r
n.includeFallbackColors=false
return f.mostReadable(e,["#fff","#000"],n)}
var P=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}
var L=f.hexNames=M(P)
function M(e){var t={}
for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n)
return t}function N(e){e=parseFloat(e);(isNaN(e)||e<0||e>1)&&(e=1)
return e}function R(e,t){K(e)&&(e="100%")
var n=U(e)
e=l(t,c(0,parseFloat(e)))
n&&(e=parseInt(e*t,10)/100)
if(i.abs(e-t)<1e-6)return 1
return e%t/parseFloat(t)}function q(e){return l(1,c(0,e))}function z(e){return parseInt(e,16)}function K(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function U(e){return"string"===typeof e&&-1!=e.indexOf("%")}function W(e){return 1==e.length?"0"+e:""+e}function G(e){e<=1&&(e=100*e+"%")
return e}function H(e){return i.round(255*parseFloat(e)).toString(16)}function Y(e){return z(e)/255}var V=(Q="[-\\+]?\\d+%?",Z="[-\\+]?\\d*\\.\\d+%?",X="(?:"+Z+")|(?:"+Q+")",$="[\\s|\\(]+("+X+")[,|\\s]+("+X+")[,|\\s]+("+X+")\\s*\\)?",J="[\\s|\\(]+("+X+")[,|\\s]+("+X+")[,|\\s]+("+X+")[,|\\s]+("+X+")\\s*\\)?",{CSS_UNIT:new RegExp(X),rgb:new RegExp("rgb"+$),rgba:new RegExp("rgba"+J),hsl:new RegExp("hsl"+$),hsla:new RegExp("hsla"+J),hsv:new RegExp("hsv"+$),hsva:new RegExp("hsva"+J),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/})
var Q,Z,X,$,J
function ee(e){return!!V.CSS_UNIT.exec(e)}function te(e){e=e.replace(o,"").replace(a,"").toLowerCase()
var t=false
if(P[e]){e=P[e]
t=true}else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"}
var n
if(n=V.rgb.exec(e))return{r:n[1],g:n[2],b:n[3]}
if(n=V.rgba.exec(e))return{r:n[1],g:n[2],b:n[3],a:n[4]}
if(n=V.hsl.exec(e))return{h:n[1],s:n[2],l:n[3]}
if(n=V.hsla.exec(e))return{h:n[1],s:n[2],l:n[3],a:n[4]}
if(n=V.hsv.exec(e))return{h:n[1],s:n[2],v:n[3]}
if(n=V.hsva.exec(e))return{h:n[1],s:n[2],v:n[3],a:n[4]}
if(n=V.hex8.exec(e))return{r:z(n[1]),g:z(n[2]),b:z(n[3]),a:Y(n[4]),format:t?"name":"hex8"}
if(n=V.hex6.exec(e))return{r:z(n[1]),g:z(n[2]),b:z(n[3]),format:t?"name":"hex"}
if(n=V.hex4.exec(e))return{r:z(n[1]+""+n[1]),g:z(n[2]+""+n[2]),b:z(n[3]+""+n[3]),a:Y(n[4]+""+n[4]),format:t?"name":"hex8"}
if(n=V.hex3.exec(e))return{r:z(n[1]+""+n[1]),g:z(n[2]+""+n[2]),b:z(n[3]+""+n[3]),format:t?"name":"hex"}
return false}function ne(e){var t,n
e=e||{level:"AA",size:"small"}
t=(e.level||"AA").toUpperCase()
n=(e.size||"small").toLowerCase()
"AA"!==t&&"AAA"!==t&&(t="AA")
"small"!==n&&"large"!==n&&(n="small")
return{level:t,size:n}}if(e.exports)e.exports=f
else{r=function(){return f}.call(t,n,t,e),void 0!==r&&(e.exports=r)}})(Math)},"9wFd":function(e,t,n){var r=n("7NKU")
e.exports=function(e,t){return r(e,t)===e}},At6d:function(e,t,n){"use strict"
var r=n("q1tI")
var i=n.n(r)
var o=n("TSYQ")
var a=n.n(o)
var s=n("f0Wu")
var u=n.n(s)
var l=n("J2CL")
var c=n("msMH")
var d=n("ZbPE")
var f=n("n12J")
var p=n("17x9")
var h=n("efQU")
function m({colors:e,typography:t,spacing:n}){return{fontSize:t.fontSizeMedium,fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,lineHeight:t.lineHeightCondensed,secondaryFontSize:t.fontSizeMedium,secondaryFontWeight:t.fontWeightBold,secondaryLineHeight:t.lineHeightCondensed,color:e.oxford,background:e.white,marginTop:n.large}}var g=n("q7ZJ")
var b=n("/MKj")
var v=n("+ayY")
var y=n("CO+y")
var _=n("KIj7")
var E=n("mgUk")
var C=n("ukBn")
var O=n("zXJ3")
function A({spacing:e}){return{toggleMarginTop:e.small,toggleButtonMarginTop:e.small,toggleButtonMarginStart:e.large,moreButtonMarginStart:e.medium,moreButtonMarginVertical:e.small}}const w={componentId:"bCuTz",template:function(e){return`\n\n.MissingAssignments-styles__root {\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-top: ${e.toggleMarginTop||"inherit"};\n}\n\n  .MissingAssignments-styles__root > :last-child {\n    width: 100%;\n  }\n\n  .MissingAssignments-styles__root > div > button {\n    margin: ${e.toggleButtonMarginTop||"inherit"} 0;\n  }\n\n  .MissingAssignments-styles__root > div > button svg {\n      margin-inline-start: ${e.toggleButtonMarginStart||"inherit"};\n    }\n\n  [dir="ltr"] .MissingAssignments-styles__root > div > button svg {\n      margin-left: ${e.toggleButtonMarginStart||"inherit"};\n    }\n\n  [dir="rtl"] .MissingAssignments-styles__root > div > button svg {\n      margin-right: ${e.toggleButtonMarginStart||"inherit"};\n    }\n\n.MissingAssignments-styles__icon {\n  position: absolute;\n  top: calc(${e.toggleMarginTop||"inherit"} - 2px);\n  left: 0;\n}\n\n.MissingAssignments-styles__medium.MissingAssignments-styles__root, .MissingAssignments-styles__small.MissingAssignments-styles__root {\n    margin-inline-start: 0;\n  }\n\n[dir="ltr"] .MissingAssignments-styles__medium.MissingAssignments-styles__root,\n[dir="ltr"] .MissingAssignments-styles__small.MissingAssignments-styles__root {\n    margin-left: 0;\n  }\n\n[dir="rtl"] .MissingAssignments-styles__medium.MissingAssignments-styles__root,\n[dir="rtl"] .MissingAssignments-styles__small.MissingAssignments-styles__root {\n    margin-right: 0;\n  }\n`},root:"MissingAssignments-styles__root",icon:"MissingAssignments-styles__icon",medium:"MissingAssignments-styles__medium",small:"MissingAssignments-styles__small"}
const k=e=>{if((null===e||void 0===e?void 0:e.length)>0)switch(e[0]){case"discussion_topic":return"Discussion"
case"online_quiz":return"Quiz"}return"Assignment"}
const x=(e,t)=>e?Object(C["a"])("{\n                  count, plural,\n                  one {Hide # missing item}\n                  other {Hide # missing items}\n               }",{count:t}):Object(C["a"])("{\n                  count, plural,\n                  one {Show # missing item}\n                  other {Show # missing items}\n               }",{count:t})
function D({id:e,name:t,points_possible:n,html_url:r,due_at:o,submission_types:a,timeZone:s,course:l={},responsiveSize:c="large"}){return i.a.createElement(O["a"],{id:e,uniqueId:e,title:t,courseName:l.originalName,color:l.color,points:n,html_url:r,date:o&&u()(o).tz(s),timeZone:s,associated_item:k(a),simplifiedControls:true,isMissingItem:true,responsiveSize:c})}D.propTypes={id:p["string"].isRequired,name:p["string"].isRequired,points_possible:p["number"].isRequired,html_url:p["string"].isRequired,due_at:p["string"],submission_types:Object(p["arrayOf"])(p["string"]).isRequired,timeZone:p["string"].isRequired,course:Object(p["shape"])(h["b"]),responsiveSize:h["f"]}
class j extends r["Component"]{render(){const e=this.props,t=e.courses,n=e.opportunities,r=e.timeZone,o=e.toggleMissing,s=e.responsiveSize,u=void 0===s?"large":s
const l=n.items,c=void 0===l?[]:l,d=n.missingItemsExpanded
if(0===c.length)return null
return i.a.createElement("section",{className:a()(w.root,w[u])},!d&&i.a.createElement("div",{className:w.icon,"data-testid":"warning-icon"},i.a.createElement(f["a"],{margin:"0 small 0 0"},i.a.createElement(y["a"],null,i.a.createElement(v["a"],{color:"error"})))),i.a.createElement(_["a"],{id:"MissingAssignments",expanded:d,"data-testid":"missing-item-info",fluidWidth:true,onToggle:()=>o(),summary:i.a.createElement(f["a"],{"data-testid":"missing-data",margin:"0 0 0 small"},x(d,c.length))},i.a.createElement(f["a"],{as:"div",borderWidth:"small none none none"},c.map(e=>i.a.createElement(D,Object.assign({key:e.id},e,{course:t.find(t=>t.id===e.course_id),timeZone:r,responsiveSize:u}))))))}}j.propTypes={courses:Object(p["arrayOf"])(Object(p["shape"])(h["b"])).isRequired,opportunities:Object(p["shape"])(h["e"]).isRequired,timeZone:p["string"].isRequired,toggleMissing:p["func"].isRequired,responsiveSize:p["string"]}
const S=({courses:e,opportunities:t})=>({courses:e,opportunities:t})
const I={toggleMissing:E["D"]}
const B=Object(l["j"])(A,w)(j)
const T=Object(b["b"])(S,I)(B)
T.theme=B.theme
var F=T
var P=n("TAnY")
var L=n("6QM+")
const M={componentId:"pFBbo",template:function(e){return`\n\n\n\n.Day-styles__root {\n  font-size: ${e.fontSize||"inherit"};\n  font-family: ${e.fontFamily||"inherit"};\n  font-weight: ${e.fontWeight||"inherit"};\n  line-height: ${e.lineHeight||"inherit"};\n\n  color: ${e.color||"inherit"};\n  background: ${e.background||"inherit"};\n\n  margin-top: ${e.marginTop||"inherit"};\n}\n\n.Day-styles__secondary {\n  font-size: ${e.secondaryFontSize||"inherit"};\n  font-weight: ${e.secondaryFontWeight||"inherit"};\n  line-height: ${e.lineHeight||"inherit"};\n}\n`},root:"Day-styles__root",secondary:"Day-styles__secondary"}
class N extends r["Component"]{constructor(e){super(e)
const t=u.a.tz(e.day,e.timeZone)
this.friendlyName=Object(g["h"])(t)
this.date=Object(g["e"])(t,e.timeZone)}componentDidMount(){this.props.registerAnimatable("day",this,this.props.animatableIndex,this.itemUniqueIds())}UNSAFE_componentWillReceiveProps(e){this.props.deregisterAnimatable("day",this,this.itemUniqueIds())
this.props.registerAnimatable("day",this,e.animatableIndex,this.itemUniqueIds(e))}componentWillUnmount(){this.props.deregisterAnimatable("day",this,this.itemUniqueIds())}itemUniqueIds(e){e=e||this.props
return(e.itemsForDay||[]).map(e=>e.uniqueId)}hasItems(){return this.props.itemsForDay&&this.props.itemsForDay.length>0}renderGrouping(e,t,n){const r=t[0].context||{}
const o=(r.color?r.color:this.props.currentUser.color)||null
return i.a.createElement(P["a"],{title:r.title,image_url:r.image_url,color:o,timeZone:this.props.timeZone,updateTodo:this.props.updateTodo,items:t,animatableIndex:100*this.props.animatableIndex+n+1,url:r.url,key:e,theme:{titleColor:o},toggleCompletion:this.props.toggleCompletion,currentUser:this.props.currentUser,simplifiedControls:this.props.simplifiedControls,singleCourseView:this.props.singleCourseView,responsiveSize:this.props.responsiveSize,isObserving:this.props.isObserving})}renderGroupings(){const e=[]
let t
let n
const r=this.props.itemsForDay.length
for(let i=0;i<r;++i){const r=this.props.itemsForDay[i]
const o=r.context&&r.context.id?`${r.context.type}${r.context.id}`:"Notes"
if(o!==n){n&&e.push(this.renderGrouping(n,t,e.length))
n=o
t=[r]}else t.push(r)}e.push(this.renderGrouping(n,t,e.length))
return e}render(){const e=Object(g["p"])(this.props.day)
return i.a.createElement("div",{className:a()(M.root,"planner-day",{"planner-today":e})},i.a.createElement(c["a"],{border:this.hasItems()?"none":"bottom"},e?i.a.createElement(i.a.Fragment,null,i.a.createElement(d["a"],{as:"div",size:"large",weight:"bold"},this.friendlyName),i.a.createElement("div",{className:M.secondary},this.date)):i.a.createElement("div",{className:M.secondary},this.friendlyName,", ",this.date)),i.a.createElement("div",null,this.hasItems()?this.renderGroupings():i.a.createElement(f["a"],{textAlign:"center",display:"block",margin:"small 0 0 0"},Object(C["a"])("Nothing Planned Yet"))),e&&this.props.showMissingAssignments&&i.a.createElement(F,{timeZone:this.props.timeZone,responsiveSize:this.props.responsiveSize}))}}N.propTypes={day:p["string"].isRequired,itemsForDay:Object(p["arrayOf"])(Object(p["shape"])(h["d"])),animatableIndex:p["number"],timeZone:p["string"].isRequired,toggleCompletion:p["func"],updateTodo:p["func"],registerAnimatable:p["func"].isRequired,deregisterAnimatable:p["func"].isRequired,currentUser:Object(p["shape"])(h["h"]),simplifiedControls:p["bool"],singleCourseView:p["bool"],showMissingAssignments:p["bool"],responsiveSize:h["f"],isObserving:p["bool"]}
N.defaultProps={animatableIndex:0,simplifiedControls:false,singleCourseView:false,showMissingAssignments:false,responsiveSize:"large",isObserving:false}
const R=Object(l["j"])(m,M)(N)
const q=Object(L["c"])(R)
q.theme=R.theme
t["a"]=q},CCpZ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M277.974095,49.0764867 C343.241473,-16.3028415 449.706783,-16.4147924 515.421964,49.0764867 L515.421964,49.0764867 L747.608139,281.262662 L1803.30517,1337.07164 L1919.95801,1920 L1337.02965,1803.34716 L386.902325,853.331783 L466.051615,774.182494 L1267.84399,1575.86292 L1575.82093,1267.88598 L668.45885,360.411952 L281.220672,747.65013 L49.0344961,515.463954 C-16.344832,449.860724 -16.344832,343.395414 49.0344961,278.016086 L49.0344961,278.016086 Z M1654.97022,1347.03527 L1346.99328,1655.01221 L1392.1095,1700.12842 L1777.10866,1777.15065 L1700.08643,1392.15149 L1654.97022,1347.03527 Z M675.355026,596.258922 L1367.65942,1288.56331 L1288.51013,1367.7126 L596.205736,675.408211 L675.355026,596.258922 Z M396.642054,111.880944 C382.312338,111.880944 368.094573,117.254587 357.123385,128.225776 L357.123385,128.225776 L128.183785,357.165375 C106.46531,378.883851 106.46531,414.484238 128.183785,436.314665 L128.183785,436.314665 L281.220672,589.351551 L589.30956,281.262662 L436.272674,128.225776 C425.301486,117.254587 410.97177,111.880944 396.642054,111.880944 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconEdit",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconEditLine"
return n}(u["Component"])
f.glyphName="edit"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},CpOe:function(e,t,n){"use strict"
var r=/[{}#]+/g
var i=/[{}\s]+/
var o=/[{}]+/g
var a="'"
var s="''"
var u="#"
e.exports=function(e){return l(e,null)}
function l(e,t){return e.map((function(e){if("string"===typeof e)return c(e,t)
return d(e,t)})).join("")}function c(e,t){var n="plural"===t?r:o
return e.replace(/'/g,s).replace(n,"'$&'")}function d(e,t){if(e[0]===u)return u
if("number"===typeof e[2])return h(e)
return f(e)}function f(e){var t=e[0]
var n=e[1]
var r=e[2]
var i="object"===typeof r?","+m(r,n)+"\n":r?", "+p(r)+" ":" "
return"{ "+t+(n?", "+n:"")+i+"}"}function p(e){if(!i.test(e))return e.replace(/'/g,s)
return a+e.replace(/'/g,s)+a}function h(e){var t=e[0]
var n=e[1]
var r=e[2]
var i=e[3]
return"{ "+t+", "+n+","+(r?" offset:"+r:"")+m(i,n)+"\n}"}function m(e,t){var n=Object.keys(e)
var r=n.reduce((function(e,t){return Math.max(e,t.length)}),0)
return n.map((function(n){return"\n  "+g(n,r)+" {"+l(e[n],t)+"}"})).join("")}function g(e,t){var n=""
for(var r=e.length;r<t;++r)n+=" "
return n+e}},DmXP:function(e,t,n){"use strict"
var r=Date.prototype.getDay
var i=function(e){try{r.call(e)
return true}catch(e){return false}}
var o=Object.prototype.toString
var a="[object Date]"
var s="function"===typeof Symbol&&!!Symbol.toStringTag
e.exports=function(e){if("object"!==typeof e||null===e)return false
return s?i(e):o.call(e)===a}},GNz4:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M0,240 L0,1680 L1500.53647,1680 L1500.53647,1241.11059 L1920,1574.06118 L1920,346.051765 L1500.53647,678.889412 L1500.53647,240 L0,240 Z M109.778824,349.778824 L1390.75765,349.778824 L1390.75765,678.889412 L1390.75765,906.127059 L1568.75294,764.837647 L1810.22118,573.176471 L1810.22118,960 L1810.22118,1346.82353 L1568.75294,1155.27529 L1390.75765,1013.98588 L1390.75765,1241.11059 L1390.75765,1570.22118 L109.778824,1570.22118 L109.778824,349.778824 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconVideoCamera",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconVideoCameraLine"
return n}(u["Component"])
f.glyphName="video-camera"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},HH6Z:function(e,t,n){"use strict"
var r=n("82c2").supportsDescriptors
var i=n("V+xs")
var o=Object.getOwnPropertyDescriptor
var a=Object.defineProperty
var s=TypeError
var u=Object.getPrototypeOf
var l=/a/
e.exports=function(){if(!r||!u)throw new s("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
var e=i()
var t=u(l)
var n=o(t,"flags")
n&&n.get===e||a(t,"flags",{configurable:true,enumerable:false,get:e})
return e}},"I/Ap":function(e,t){e.exports=/[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g},IyvR:function(e,t,n){var r=n("jDM7")
var i=n("oCWi")
e.exports=function(e,t){return r(i(e,t),t)}},JlUD:function(e,t){e.exports=n
e.exports.default=n
function n(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}},KUkU:function(e,t,n){var r=n("Pwfc")
e.exports=function(e,t){return r(e,t,"/")}},Kdve:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M526.298905 0L434 92.1683552 1301.63582 959.934725 434 1827.57054 526.298905 1920 1486.23363 959.934725z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(-1 0 0 1 1920.305 0)"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconArrowOpenStart",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconArrowOpenStartLine"
return n}(u["Component"])
f.glyphName="arrow-open-start"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},Kimu:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M1411.8238,9.99999997e-05 C1442.9948,9.99999997e-05 1468.2938,25.2991 1468.2938,56.4711 L1468.2938,56.4711 L1468.2938,112.9411 L1637.7058,112.9411 C1731.1088,112.9411 1807.1178,188.9511 1807.1178,282.3531 L1807.1178,282.3531 L1807.1178,1920.0001 L112.9998,1920.0001 L112.9998,282.3531 C112.9998,188.9511 189.0088,112.9411 282.4118,112.9411 L282.4118,112.9411 L451.8228,112.9411 L451.8228,56.4711 C451.8228,25.2991 477.1228,9.99999997e-05 508.2938,9.99999997e-05 C539.4658,9.99999997e-05 564.7648,25.2991 564.7648,56.4711 L564.7648,56.4711 L564.7648,112.9411 L1355.3528,112.9411 L1355.3528,56.4711 C1355.3528,25.2991 1380.6518,9.99999997e-05 1411.8238,9.99999997e-05 Z M1694.1758,564.7051 L225.9418,564.7051 L225.9418,1807.0581 L1694.1758,1807.0581 L1694.1758,564.7051 Z M677.706,1242.353 L677.706,1581.177 L338.882,1581.177 L338.882,1242.353 L677.706,1242.353 Z M1129.471,1242.353 L1129.471,1581.177 L790.647,1581.177 L790.647,1242.353 L1129.471,1242.353 Z M1581.235,1242.353 L1581.235,1581.177 L1242.412,1581.177 L1242.412,1242.353 L1581.235,1242.353 Z M564.765,1355.294 L451.824,1355.294 L451.824,1468.235 L564.765,1468.235 L564.765,1355.294 Z M1016.529,1355.294 L903.588,1355.294 L903.588,1468.235 L1016.529,1468.235 L1016.529,1355.294 Z M1468.294,1355.294 L1355.353,1355.294 L1355.353,1468.235 L1468.294,1468.235 L1468.294,1355.294 Z M677.706,790.588 L677.706,1129.412 L338.882,1129.412 L338.882,790.588 L677.706,790.588 Z M1129.471,790.588 L1129.471,1129.412 L790.647,1129.412 L790.647,790.588 L1129.471,790.588 Z M1581.235,790.588 L1581.235,1129.412 L1242.412,1129.412 L1242.412,790.588 L1581.235,790.588 Z M564.765,903.53 L451.824,903.53 L451.824,1016.471 L564.765,1016.471 L564.765,903.53 Z M1016.529,903.53 L903.588,903.53 L903.588,1016.471 L1016.529,1016.471 L1016.529,903.53 Z M1468.294,903.53 L1355.353,903.53 L1355.353,1016.471 L1468.294,1016.471 L1468.294,903.53 Z M451.8228,225.8821 L282.4118,225.8821 C251.3528,225.8821 225.9418,251.1811 225.9418,282.3531 L225.9418,282.3531 L225.9418,451.7651 L1694.1758,451.7651 L1694.1758,282.3531 C1694.1758,251.1811 1668.7648,225.8821 1637.7058,225.8821 L1637.7058,225.8821 L1468.2938,225.8821 L1468.2938,282.3531 C1468.2938,313.5251 1442.9948,338.8241 1411.8238,338.8241 C1380.6518,338.8241 1355.3528,313.5251 1355.3528,282.3531 L1355.3528,282.3531 L1355.3528,225.8821 L564.7648,225.8821 L564.7648,282.3531 C564.7648,313.5251 539.4658,338.8241 508.2938,338.8241 C477.1228,338.8241 451.8228,313.5251 451.8228,282.3531 L451.8228,282.3531 L451.8228,225.8821 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconCalendarMonth",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconCalendarMonthLine"
return n}(u["Component"])
f.glyphName="calendar-month"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},NOPk:function(e,t,n){"use strict"
var r=n("ZoNA")
var i="AAAAAAACEEEEIIIIDNOOOOO.OUUUUY..aaaaaaaceeeeiiiidnooooo.ouuuuy.yAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgHhHhIiIiIiIiIiIiJjKkkLlLlLlLlJlNnNnNnnNnOoOoOoOoRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwYyYZzZzZz."
function o(e){var t=""
var n=e.length
var r=i.length
for(var o=0;o<n;++o){var a=e[o]
var s=a.charCodeAt(0)-192
if(s>=0&&s<r){var u=i[s]
"."!==u&&(a=u)}t+=a}return t}function a(e){return o(e).toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,50)}e.exports=function(e){return a(r(e))}
e.exports.underscore=a},OOhq:function(e,t,n){"use strict"
n.d(t,"f",(function(){return a}))
n.d(t,"a",(function(){return u}))
n.d(t,"b",(function(){return l}))
n.d(t,"c",(function(){return c}))
n.d(t,"g",(function(){return d}))
n.d(t,"d",(function(){return f}))
n.d(t,"e",(function(){return p}))
var r=n("ukBn")
var i=n("q7ZJ")
const o={missing:()=>({id:"missing",text:Object(r["a"])("Missing"),variant:"danger"}),late:()=>({id:"late",text:Object(r["a"])("Late"),variant:"danger"}),graded:()=>({id:"graded",text:Object(r["a"])("Graded")}),excused:()=>({id:"excused",text:Object(r["a"])("Excused")}),submitted:()=>({id:"submitted",text:Object(r["a"])("Submitted")}),new_grades:()=>({id:"new_grades",text:Object(r["a"])("Graded")}),new_feedback:()=>({id:"new_feedback",text:Object(r["a"])("Feedback")}),new_replies:()=>({id:"new_replies",text:Object(r["a"])("Replies")}),redo_request:()=>({id:"redo",text:Object(r["a"])("Redo"),variant:"danger"})}
function a(e){return e.newActivity}function s(e){return e&&e.some(a)}function u(e){return e.some(e=>s(e[1]))}function l(e){return e.some(e=>Object(i["q"])(e[0]))}function c(e,t){return e.some(e=>Object(i["m"])(e,t))}function d(e,t){if(!["late","missing"].includes(e))throw new Error("Expected status to be 'late' or 'missing', but it was "+e)
return!!t.status&&t.status[e]}function f(e){let t=[]
if(e.status){t=Object.keys(e.status).filter((t,n,r)=>!(!e.status.posted_at&&"graded"===t)).filter((t,n,r)=>!(e.status.excused&&"graded"===t)).filter((t,n,r)=>!(e.status.graded&&"submitted"===t)).filter((t,n,r)=>!(e.status.redo_request&&"submitted"===t)).filter(t=>{const n=e.status[t]&&o.hasOwnProperty(t)
if(!n)return false
if(["late","missing"].includes(t))return d(t,e)
return true}).map(e=>o[e]())
e.status.unread_count&&t.push(o.new_replies())
e.newActivity&&e.status.has_feedback&&t.push(o.new_feedback())}return t}function p(e){const t=[]
e.some(e=>e.status&&e.newActivity&&e.status.graded&&!e.status.excused)&&t.push(o.new_grades())
e.some(e=>e.status&&e.status.submitted&&!e.status.graded&&!e.status.excused)&&t.push(o.submitted())
e.some(d.bind(this,"missing"))?t.push(o.missing()):e.some(d.bind(this,"late"))&&t.push(o.late())
e.some(e=>e.status&&e.newActivity&&e.status.has_feedback)&&t.push(o.new_feedback())
e.some(e=>e.status&&e.status.unread_count)&&t.push(o.new_replies())
e.some(e=>e.status&&e.status.redo_request)&&t.push(o.redo_request())
return t}},Oak0:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M1281.53605,1465.48716 C1162.78038,1548.03944 941.288229,1667.32908 647.389295,1653.23219 C409.557563,1642.01875 225.123166,1548.35982 106.794671,1465.59395 L106.794671,1314.69308 C106.794671,1186.64627 188.599389,1076.43417 301.267767,1052.72575 C414.683707,1028.91054 530.769514,1015.24082 646.214554,1012.35737 C792.736842,1008.51276 942.142587,1022.18248 1087.38334,1052.83255 C1199.83813,1076.54096 1281.53605,1186.64627 1281.53605,1314.79988 L1281.53605,1465.48716 Z M427.178684,638.576019 L427.178684,631.634365 C472.993597,619.246184 502.255337,592.440721 525.216191,571.188582 C551.914859,546.625807 568.040855,531.781348 605.525784,531.781348 C642.263151,531.781348 658.175557,546.519013 684.55384,570.974992 C715.63109,599.489169 758.135369,638.576019 837.27022,638.576019 C895.046137,638.576019 932.744656,617.32388 961.152038,594.790204 L961.152038,638.576019 C961.152038,785.84587 841.435212,905.562696 694.165361,905.562696 C546.89551,905.562696 427.178684,785.84587 427.178684,638.576019 L427.178684,638.576019 Z M694.165361,264.794671 C817.406411,264.794671 920.356474,349.162461 951.006544,462.898785 C937.764005,472.6171 926.336975,483.082978 915.657508,492.908088 C889.386019,517.150478 873.687203,531.781348 837.27022,531.781348 C799.78529,531.781348 783.659295,516.936889 756.960627,492.374115 C726.203762,463.966732 683.913072,424.986677 605.525784,424.986677 C526.390933,424.986677 483.886654,464.180321 452.809405,492.694499 C444.159036,500.704099 436.576615,507.218574 429.100988,512.985486 C438.926097,374.686387 553.409985,264.794671 694.165361,264.794671 L694.165361,264.794671 Z M1109.38304,948.387359 C1052.35469,936.319562 994.57877,927.562398 936.802853,920.51395 C1016.47168,851.951771 1067.94671,751.671576 1067.94671,638.576019 L1067.94671,531.781348 C1067.94671,325.774428 900.279076,158 694.165361,158 C488.051646,158 320.384013,325.774428 320.384013,531.781348 L320.384013,638.576019 C320.384013,751.457986 371.645455,851.524593 451.10069,920.193566 C393.431568,927.13522 335.976035,936.319562 279.268064,948.280565 C117.474138,982.24127 0,1136.34598 0,1314.69308 L0,1519.95244 L21.6793182,1535.97164 C150.473691,1630.9121 362.674702,1746.78432 642.369945,1759.92006 C659.563887,1760.66763 676.54424,1761.0948 693.311003,1761.0948 C1010.81156,1761.0948 1249.39085,1621.94135 1366.54461,1535.97164 L1388.33072,1520.05923 L1388.33072,1314.79988 C1388.33072,1136.45277 1270.96338,982.348065 1109.38304,948.387359 L1109.38304,948.387359 Z M1509.20093,692.016072 L1388.30936,692.016072 L1388.30936,571.2313 L1614.0733,345.467365 L1734.85807,466.252138 L1509.20093,692.016072 Z M1898.68109,350.166331 L1730.1591,181.751135 C1702.71287,154.19811 1654.86886,153.877726 1626.88866,181.64434 L1302.55324,505.872961 C1288.99032,519.649474 1281.51469,537.911362 1281.51469,557.241198 L1281.51469,798.810743 L1523.08424,798.810743 C1542.30728,798.810743 1560.35558,791.441911 1574.77286,777.451809 L1898.78789,453.436778 C1927.08848,425.029395 1927.08848,378.680508 1898.68109,350.166331 L1898.68109,350.166331 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconPeerReview",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconPeerReviewLine"
return n}(u["Component"])
f.glyphName="peer-review"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},Pwfc:function(e,t,n){var r=n("7NKU")
var i=n("I/Ap")
var o=n("Tsvt")
var a=n("Wklf")
e.exports=function(e,t,n){if(null==e)return""
n="string"!==typeof n?" ":n
function s(e,t,r){if(0===t||t===r.length-e.length)return""
return n}e=String(e).replace(o,"$1 $2").replace(a,"$1 $2").replace(i,s)
return r(e,t)}},QxcF:function(e,t,n){"use strict"
n.d(t,"h",(function(){return s}))
n.d(t,"g",(function(){return l}))
n.d(t,"a",(function(){return f}))
n.d(t,"f",(function(){return h}))
n.d(t,"b",(function(){return m}))
n.d(t,"e",(function(){return b}))
n.d(t,"d",(function(){return v}))
n.d(t,"c",(function(){return y}))
n.d(t,"j",(function(){return _}))
n.d(t,"i",(function(){return k}))
var r=n("VTBJ")
var i=n("LvDl")
var o=n.n(i)
var a=n("q7ZJ")
function s(e,t){const n=f(e)
const r=u(n,t)
return p(r)}function u(e,t){const n=d(t)
const r=c(e,n)
return r}function l(e,t){const n=f(e)
const r=f(t)
const i=c(n,r)
return p(i)}function c(e,t){e=Object(r["a"])({},e)
const n=o.a.mergeWith(e,t,(e,t)=>{null==e&&(e=[])
return g(e,t)})
return n}function d(e){return o.a.groupBy(e,e=>Object(a["d"])(e.dateBucketMoment))}function f(e){return o.a.fromPairs(e)}function p(e){return o.a.chain(e).toPairs().filter(e=>e[1]&&e[1].length).sortBy(o.a.head).value()}function h(e){return p(d(e))}function m(e){return e.reduce((e,t)=>[...e,...t[1]],[])}function g(e,t){const n=new Map(t.map(e=>[e.uniqueId,e]))
const r=e.map(e=>{const t=n.get(e.uniqueId)
if(t){n.delete(t.uniqueId)
return t}return e})
const i=r.concat([...n.values()])
return E(i)}function b(e,t){let n=-1
let r=-1
void 0!==t&&(n=e.findIndex(e=>{const n=e[1]
r=n.findIndex(e=>e.uniqueId===t)
return-1!==r}))
const i=-1!==n?e[n][1][r]:void 0
return{dayIndex:n,itemIndex:r,item:i}}function v(e,t,n){const r=e[t][1]
const i=r.filter((e,t)=>t!==n)
if(0===i.length)return e.filter((e,n)=>n!==t)
{const n=e[t].slice(0)
n[1]=i
const r=e.slice(0)
r[t]=n
return r}}function y(e,t){const n=b(e,t.uniqueId),r=n.dayIndex,i=n.itemIndex
if(-1===r||-1===i)return e
return v(e,r,i)}function _(e,t){const n=f(e)
t.forEach(e=>{delete n[e[0]]})
return p(n)}function E(e){return e.sort(x)}const C={numeric:true}
const O=window.ENV&&window.ENV.MOMENT_LOCALE||"en"
function A(e){if(e.context&&e.context.id)return e.context.title||`${e.context.type}${e.context.id}`
return"Notes"}function w(e,t){const n=A(e)
const r=A(t)
if(0===n.localeCompare(r,O,C))return 0
if("Notes"===n)return 1
if("Notes"===r)return-1
return n.localeCompare(r,O,C)}function k(e,t){if(e.originallyCompleted&&!t.originallyCompleted)return 1
if(!e.originallyCompleted&&t.originallyCompleted)return-1
if(e.date.isSame(t.date,"day")){if(e.allDay&&!t.allDay)return-1
if(!e.allDay&&t.allDay)return 1}if(e.date.valueOf()===t.date.valueOf())return e.title.localeCompare(t.title,O,C)
return e.date<t.date?-1:1}function x(e,t){let n=w(e,t)
0===n&&(n=k(e,t))
return n}},"R49/":function(e,t,n){"use strict"
n.d(t,"b",(function(){return h}))
n.d(t,"h",(function(){return m}))
n.d(t,"k",(function(){return g}))
n.d(t,"i",(function(){return b}))
n.d(t,"j",(function(){return v}))
n.d(t,"g",(function(){return y}))
n.d(t,"c",(function(){return _}))
n.d(t,"f",(function(){return A}))
n.d(t,"e",(function(){return w}))
n.d(t,"d",(function(){return k}))
n.d(t,"a",(function(){return D}))
var r=n("VTBJ")
var i=n("f0Wu")
var o=n.n(i)
var a=n("LvDl")
var s=n.n(a)
var u=n("08kA")
var l=n.n(u)
const c=e=>{const t=e.plannable,n=e.plannable_type,r=e.planner_override
const i=t.id||t.page_id
const a={course_id:t.course_id||e.course_id,title:t.title,completed:O(e),points:t.points_possible,html_url:e.html_url||t.html_url,overrideId:r&&r.id,overrideAssignId:t.assignment_id,id:i,uniqueId:`${n}-${i}`,location:t.location_name||null,address:t.location_address||null,dateStyle:t.todo_date?"todo":"due"}
a.originallyCompleted=a.completed
a.feedback=e.submissions?e.submissions.feedback:void 0
"discussion_topic"!==n&&"announcement"!==n||(a.unread_count=t.unread_count)
"planner_note"===n&&(a.details=t.details)
if("calendar_event"===n){a.details=t.description
a.allDay=t.all_day
!a.allDay&&t.end_at&&t.end_at!==e.plannable_date&&(a.endTime=o()(t.end_at))
a.onlineMeetingURL=t.online_meeting_url}return a}
const d={quiz:"Quiz",discussion_topic:"Discussion",assignment:"Assignment",wiki_page:"Page",announcement:"Announcement",planner_note:"To Do",calendar_event:"Calendar Event",assessment_request:"Peer Review"}
const f=e=>d[e]
const p=e=>s.a.findKey(d,s.a.partial(s.a.isEqual,e))
function h(e){const t=k(e,"link")
if(null==t)return null
const n=l()(t)
if(null==n)return null
if(null==n.next)return null
return n.next.url}function m(e,t,n,i){if(null==i)throw new Error("timezone is required when interpreting api data in transformApiToInternalItem")
const a={}
const s=e.context_type+""
const u=e[s.toLowerCase()+"_id"]
if("Course"===s){const e=t.find(e=>e.id===u)
a.context=E(e)}else if("Group"===s){const t=n.find(e=>e.id===u)||{name:"Unknown Group",color:"#666666",url:void 0}
a.context=C(e,t)}const l=c(e,i)
const d=o.a.tz(e.plannable_date,i)
if(!a.context&&"planner_note"===e.plannable_type&&l.course_id){const e=t.find(e=>e.id===l.course_id)
a.context=E(e)}if(l.unread_count){e.submissions=e.submissions||{}
e.submissions.unread_count=l.unread_count}return Object(r["a"])(Object(r["a"])({},a),{},{id:e.plannable_id,dateBucketMoment:o.a.tz(d,i).startOf("day"),type:f(e.plannable_type),status:e.submissions,newActivity:e.new_activity&&("discussion_topic"!==e.plannable_type||l.unread_count>0),toggleAPIPending:false,date:d},l)}function g(e,t,n){const r=e
let i={}
if(r.course_id){const e=t.find(e=>e.id===r.course_id)
i=E(e)}return{id:r.id,uniqueId:"planner_note-"+r.id,dateBucketMoment:o.a.tz(r.todo_date,n),type:"To Do",status:false,course_id:r.course_id,context:i,title:r.title,date:o.a.tz(r.todo_date,n),details:r.details,completed:false}}function b(e){const t={}
if(e.context){t.context_type=e.context.type||"Course"
t[t.context_type.toLowerCase()+"_id"]=e.context.id}return Object(r["a"])(Object(r["a"])({id:e.id},t),{},{todo_date:e.date,title:e.title,details:e.details})}function v(e,t){let n=p(e.type)
let r=e.id
if(e.overrideAssignId){n="assignment"
r=e.overrideAssignId}return{id:e.overrideId,plannable_id:r,plannable_type:n,user_id:t,marked_complete:e.completed}}function y(e){const t=e.id
const n=e.has_grading_periods
const r=e.enrollments[0]
let i=r.computed_current_score
let o=r.computed_current_grade
if(n){i=r.current_period_computed_current_score
o=r.current_period_computed_current_grade}return{courseId:t,hasGradingPeriods:n,grade:o,score:i}}function _({courses:e=[]}){return null!==e&&void 0!==e&&e.length?e.map(({id:e})=>"course_"+e).sort((e,t)=>e.localeCompare(t,"en",{numeric:true})):void 0}function E(e){if(!e)return
return{type:"Course",id:e.id,title:e.shortName||e.name,image_url:e.image||e.image_url,color:e.color,url:e.href}}function C(e,t){if(!t)return
return{type:e.context_type,id:t.id,title:t.name,image_url:void 0,color:t.color,url:t.url}}function O(e){const t=e.plannable,n=e.plannable_type,r=e.planner_override,i=e.submissions
let o=false
r?o=r.marked_complete:"assessment_request"===n?o="completed"===t.workflow_state:i&&(o=i.submitted&&!i.redo_request)
return o}function A(e){if(e.selectedObservee&&e.selectedObservee!==e.currentUser.id)return e.selectedObservee
return null}function w(e){if(e.selectedObservee&&e.selectedObservee!==e.currentUser.id)return _(e)
return}function k(e,t){var n,r
return(null===(n=(r=e.headers).get)||void 0===n?void 0:n.call(r,t))||e.headers[t]}const x=["start_date","end_date","include","filter","order","per_page","observed_user_id","context_codes","course_ids"]
function D(e,t={}){const n=new URL(e,"http://localhost/")
const i=Object(r["a"])({},t)
x.forEach(e=>{if(e in i){j(e,i[e],n)
delete i[e]}})
Object.keys(i).forEach(e=>{j(e,i[e],n)})
return`${n.pathname}${n.search}`}function j(e,t,n){if(null===t||"undefined"===typeof t)return
Array.isArray(t)?t.sort((e,t)=>e.localeCompare(t,"en",{numeric:true})).forEach(t=>{if(null===t||"undefined"===typeof t)return
n.searchParams.append(e+"[]",t)}):n.searchParams.append(e,t)}},T2fG:function(e,t,n){"use strict"
n.d(t,"b",(function(){return o}))
n.d(t,"a",(function(){return a}))
var r=n("ukBn")
var i=n("4lI+")
function o(e){return`~~~${e}-fallback-focus~~~`}function a(e,t,n){n||Object(i["c"])(Object(r["a"])("There is nothing planned for today."))
const o=e.getDocument().getElementById("MissingAssignments")
"missing-items"===n&&o&&e.getAnimator().focusElement(o)
t?e.getAnimator().forceScrollTo(t,e.totalOffset()):e.getAnimator().scrollToTop()}},TAnY:function(e,t,n){"use strict"
var r=n("ODXe")
var i=n("q1tI")
var o=n.n(i)
var a=n("J2CL")
var s=n("TSYQ")
var u=n.n(s)
var l=n("LvDl")
var c=n("17x9")
var d=n("f0Wu")
var f=n.n(d)
var p=n("efQU")
var h=n("VTBJ")
function m({borders:e,colors:t,media:n,spacing:r,typography:i}){return Object(h["a"])({fontFamily:i.fontFamily,lineHeight:i.lineHeightCondensed,margin:r.medium+" 0 0 0",groupColor:t.brand,borderTopWidth:e.widthSmall,borderTopWidthTablet:e.widthMedium,heroMinHeight:"7rem",heroWidth:"12rem",heroWidthLarge:"14rem",heroPadding:"0.0625rem",heroColor:t.brand,heroBorderRadius:e.radiusMedium,overlayOpacity:.75,titleFontSize:i.fontSizeXSmall,titleFontSizeTablet:"0.875rem",titleFontWeight:i.fontWeightBold,titleLetterSpacing:"0.0625rem",titleBackground:t.white,titleTextTransform:"uppercase",titlePadding:`${r.xxSmall} ${r.xSmall}`,titleOverflowGradientHeight:r.xxSmall,titleTextDecoration:"none",titleTextDecorationHover:"underline",titleColor:t.brand},n)}m["canvas-a11y"]=m["modern-a11y"]=function({colors:e}){return{heroTextDecoration:"underline",heroTextDecorationHover:"none",titleColor:e.licorice}}
m.canvas=function(e){return{groupColor:e["ic-brand-primary"],titleColor:e["ic-brand-primary"]}}
var g=n("zXJ3")
var b=n("XGBb")
var v=n("KIj7")
var y=n("thi/")
var _=n("xGf/")
var E=n("weGe")
var C=n("6QM+")
function O({borders:e,colors:t,spacing:n,typography:r}){return{fontFamily:r.fontFamily,color:t.licorice,padding:n.small,paddingMedium:n.small,paddingLarge:`${n.small} ${n.medium}`,borderWidth:e.widthSmall,borderColor:t.tiara,bottomMarginPhoneUp:n.xSmall,gutterWidth:n.medium,buttonPadding:n.small,labelColor:t.brand}}var A=n("ukBn")
const w={componentId:"doxeE",template:function(e){return`\n\n.CompletedItemsFacade-styles__root {\n  display: flex;\n  flex:1;\n  align-items: center;\n  font-family: ${e.fontFamily||"inherit"};\n  color: ${e.color||"inherit"};\n  box-sizing: border-box;\n  padding: ${e.padding||"inherit"};\n  border-bottom: ${e.borderWidth||"inherit"} solid ${e.borderColor||"inherit"};\n}\n  .CompletedItemsFacade-styles__root.CompletedItemsFacade-styles__small.CompletedItemsFacade-styles__k5Layout >.CompletedItemsFacade-styles__contentPrimary {\n        margin-inline-start: 25px;\n      }\n  [dir="ltr"] .CompletedItemsFacade-styles__root.CompletedItemsFacade-styles__small.CompletedItemsFacade-styles__k5Layout >.CompletedItemsFacade-styles__contentPrimary {\n        margin-left: 25px;\n      }\n  [dir="rtl"] .CompletedItemsFacade-styles__root.CompletedItemsFacade-styles__small.CompletedItemsFacade-styles__k5Layout >.CompletedItemsFacade-styles__contentPrimary {\n        margin-right: 25px;\n      }\n\n.CompletedItemsFacade-styles__activityIndicator {\n  padding-inline-end: 0;\n  padding-inline-start: 0;\n}\n\n[dir="ltr"] .CompletedItemsFacade-styles__activityIndicator {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n[dir="rtl"] .CompletedItemsFacade-styles__activityIndicator {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.CompletedItemsFacade-styles__showLabel {\n  margin-inline-start: ${e.gutterWidth||"inherit"};\n}\n\n[dir="ltr"] .CompletedItemsFacade-styles__showLabel {\n  margin-left: ${e.gutterWidth||"inherit"};\n}\n\n[dir="rtl"] .CompletedItemsFacade-styles__showLabel {\n  margin-right: ${e.gutterWidth||"inherit"};\n}\n\n.CompletedItemsFacade-styles__contentPrimary {\n  flex: 0 0 50%;\n  margin-bottom: 0;\n  margin-inline-start: ${e.gutterWidth||"inherit"};\n  box-sizing: border-box;\n  min-width: 1px;\n}\n\n[dir="ltr"] .CompletedItemsFacade-styles__contentPrimary {\n  margin-left: ${e.gutterWidth||"inherit"};\n}\n\n[dir="rtl"] .CompletedItemsFacade-styles__contentPrimary {\n  margin-right: ${e.gutterWidth||"inherit"};\n}\n\n.CompletedItemsFacade-styles__contentSecondary {\n  flex: 1 0;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  min-width: 1px;\n  text-align: end;\n}\n\n[dir="ltr"] .CompletedItemsFacade-styles__contentSecondary {\n  text-align: right;\n}\n\n[dir="rtl"] .CompletedItemsFacade-styles__contentSecondary {\n  text-align: left;\n}\n\n.CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {\n  margin-inline-start: calc(${e.gutterWidth||"inherit"} - ${e.buttonPadding||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n[dir="ltr"] .CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {\n  margin-left: calc(${e.gutterWidth||"inherit"} - ${e.buttonPadding||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n[dir="rtl"] .CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {\n  margin-right: calc(${e.gutterWidth||"inherit"} - ${e.buttonPadding||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n.CompletedItemsFacade-styles__small {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {\n    margin-inline-start: 10px;\n    flex-basis: auto;\n  }\n\n[dir="ltr"] .CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {\n    margin-left: 10px;\n  }\n\n[dir="rtl"] .CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {\n    margin-right: 10px;\n  }\n\n.CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentSecondary {\n    display: none;\n  }\n`},root:"CompletedItemsFacade-styles__root",small:"CompletedItemsFacade-styles__small",k5Layout:"CompletedItemsFacade-styles__k5Layout",contentPrimary:"CompletedItemsFacade-styles__contentPrimary",activityIndicator:"CompletedItemsFacade-styles__activityIndicator",showLabel:"CompletedItemsFacade-styles__showLabel",contentSecondary:"CompletedItemsFacade-styles__contentSecondary"}
class k extends i["Component"]{constructor(...e){super(...e)
this.getFocusable=()=>this.buttonRef}componentDidMount(){this.props.registerAnimatable("item",this,this.props.animatableIndex,this.props.animatableItemIds)}UNSAFE_componentWillReceiveProps(e){this.props.deregisterAnimatable("item",this,this.props.animatableItemIds)
this.props.registerAnimatable("item",this,e.animatableIndex,e.animatableItemIds)}componentWillUnmount(){this.props.deregisterAnimatable("item",this,this.props.animatableItemIds)}getScrollable(){return this.rootDiv}renderBadges(){if(this.props.badges.length)return o.a.createElement(_["a"],null,this.props.badges.map(e=>o.a.createElement(y["a"],{key:e.id,text:e.text,variant:e.variant})))
return null}renderNotificationBadge(){if("none"===this.props.notificationBadge)return o.a.createElement(E["c"],{responsiveSize:this.props.responsiveSize})
const e="newActivity"===this.props.notificationBadge
const t=e?E["b"]:E["a"]
const n=Object(A["a"])("{items} completed {items, plural,=1 {item} other {items}}",{items:this.props.itemCount})
return o.a.createElement(E["c"],{responsiveSize:this.props.responsiveSize},o.a.createElement("div",{className:w.activityIndicator},o.a.createElement(t,{title:n,itemIds:this.props.animatableItemIds,animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable})))}render(){const e=this.theme?{textColor:this.theme.labelColor,iconColor:this.theme.labelColor,iconMargin:this.theme.gutterWidth}:null
return o.a.createElement("div",{className:u()(w.root,w[this.props.responsiveSize],"planner-completed-items",this.props.simplifiedControls?w.k5Layout:""),ref:e=>this.rootDiv=e},this.renderNotificationBadge(),o.a.createElement("div",{className:w.contentPrimary},o.a.createElement(v["a"],{ref:e=>this.buttonRef=e,onToggle:this.props.onClick,summary:Object(A["a"])("{\n                  count, plural,\n                  one {Show # completed item}\n                  other {Show # completed items}\n                }",{count:this.props.itemCount}),theme:e},"ToggleDetails requires a child")),o.a.createElement("div",{className:w.contentSecondary},this.renderBadges()))}}k.propTypes={onClick:c["func"].isRequired,itemCount:c["number"].isRequired,badges:Object(c["arrayOf"])(Object(c["shape"])(p["a"])),animatableIndex:c["number"],animatableItemIds:Object(c["arrayOf"])(c["string"]),registerAnimatable:c["func"],deregisterAnimatable:c["func"],notificationBadge:Object(c["oneOf"])(["none","newActivity","missing"]),date:b["momentObj"],responsiveSize:p["f"],simplifiedControls:c["bool"]}
k.defaultProps={badges:[],registerAnimatable:()=>{},deregisterAnimatable:()=>{},notificationBadge:"none",responsiveSize:"large"}
var x=Object(C["c"])(Object(a["j"])(O,w)(k))
var D=n("OOhq")
const j={componentId:"bDBte",template:function(e){return`\n\n\n\n.Grouping-styles__root {\n  font-family: ${e.fontFamily||"inherit"};\n  margin: ${e.margin||"inherit"};\n  border-color: ${e.groupColor||"inherit"};\n  color: ${e.groupColor||"inherit"};\n  line-height: ${e.lineHeight||"inherit"};\n  position: relative;\n  display: flex;\n}\n\n.Grouping-styles__title {\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  box-sizing: border-box;\n  text-align: center;\n  padding: ${e.titlePadding||"inherit"};\n  background-color: ${e.titleBackground||"inherit"};\n  text-transform: ${e.titleTextTransform||"inherit"};\n  -webkit-text-decoration: ${e.titleTextDecoration||"inherit"};\n          text-decoration: ${e.titleTextDecoration||"inherit"};\n  font-size: ${e.titleFontSize||"inherit"};\n  font-weight: ${e.titleFontWeight||"inherit"};\n  color: ${e.titleColor||"inherit"};\n  border-top-left-radius: 0.125rem;\n\n  \n  min-width: 1px;\n  overflow: hidden;\n  max-height: 3rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n}\n\n[dir="ltr"] .Grouping-styles__title {\n  text-align: center;\n}\n\n[dir="rtl"] .Grouping-styles__title {\n  text-align: center;\n}\n\n.Grouping-styles__title::after {\n    content: "";\n    width: 100%;\n    height: ${e.titleOverflowGradientHeight||"inherit"};\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${e.titleBackground||"inherit"} 100%);\n  }\n\n.Grouping-styles__hero {\n  position: relative;\n  display: flex;\n  flex: 0 0 ${e.heroWidth||"inherit"};\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  align-items: flex-start;\n  justify-content: center;\n  box-sizing: border-box;\n  outline: none;\n  padding: ${e.heroPadding||"inherit"};\n  text-decoration: none;\n\n  \n  min-width: 1px;\n}\n\n.Grouping-styles__hero .Grouping-styles__groupingName {\n    -webkit-text-decoration: ${e.heroLinkTextDecoration||"inherit"};\n            text-decoration: ${e.heroLinkTextDecoration||"inherit"};\n  }\n\n.Grouping-styles__hero,\n.Grouping-styles__overlay {\n  border-bottom-inline-start-radius: ${e.heroBorderRadius||"inherit"};\n  border-top-inline-start-radius: ${e.heroBorderRadius||"inherit"};\n}\n\n[dir="ltr"] .Grouping-styles__hero,\n[dir="ltr"] .Grouping-styles__overlay {\n  border-bottom-left-radius: ${e.heroBorderRadius||"inherit"};\n  border-top-left-radius: ${e.heroBorderRadius||"inherit"};\n}\n\n[dir="rtl"] .Grouping-styles__hero,\n[dir="rtl"] .Grouping-styles__overlay {\n  border-bottom-right-radius: ${e.heroBorderRadius||"inherit"};\n  border-top-right-radius: ${e.heroBorderRadius||"inherit"};\n}\n\n.Grouping-styles__heroHover:focus,\n  .Grouping-styles__heroHover:hover {\n    text-decoration: none;\n  }\n\n.Grouping-styles__heroHover:focus .Grouping-styles__title, .Grouping-styles__heroHover:hover .Grouping-styles__title {\n      -webkit-text-decoration: ${e.titleTextDecorationHover||"inherit"};\n              text-decoration: ${e.titleTextDecorationHover||"inherit"};\n    }\n\n.Grouping-styles__overlay {\n  background-color: ${e.groupColor||"inherit"};\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.Grouping-styles__overlay.Grouping-styles__withImage {\n    opacity: ${e.overlayOpacity||"inherit"};\n  }\n\n\n.Grouping-styles__items {\n  flex: 1;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border-top: ${e.borderTopWidth||"inherit"} solid;\n  border-color: ${e.groupColor||"inherit"};\n  color: ${e.groupColor||"inherit"};\n  min-width: 1px;\n}\n\n.Grouping-styles__medium.Grouping-styles__root, .Grouping-styles__small.Grouping-styles__root {\n    display: block;\n    margin: 0;\n  }\n\n.Grouping-styles__medium .Grouping-styles__hero, .Grouping-styles__medium .Grouping-styles__overlay, .Grouping-styles__small .Grouping-styles__hero, .Grouping-styles__small .Grouping-styles__overlay {\n    border-radius: 0;\n    background-color: transparent;\n  }\n\n.Grouping-styles__medium .Grouping-styles__hero, .Grouping-styles__small .Grouping-styles__hero {\n    display: block;\n    flex: none;\n    min-height: unset;\n    line-height: 2rem;\n  }\n\n.Grouping-styles__medium .Grouping-styles__title, .Grouping-styles__small .Grouping-styles__title {\n    font-size: ${e.titleFontSizeTablet||"inherit"};\n    padding-inline-start: 0;\n  }\n\n[dir="ltr"] .Grouping-styles__medium .Grouping-styles__title,\n[dir="ltr"] .Grouping-styles__small .Grouping-styles__title {\n    padding-left: 0;\n  }\n\n[dir="rtl"] .Grouping-styles__medium .Grouping-styles__title,\n[dir="rtl"] .Grouping-styles__small .Grouping-styles__title {\n    padding-right: 0;\n  }\n\n.Grouping-styles__medium .Grouping-styles__items, .Grouping-styles__small .Grouping-styles__items {\n    border-top-width: ${e.borderTopWidthTablet||"inherit"};\n  }\n`},root:"Grouping-styles__root",title:"Grouping-styles__title",hero:"Grouping-styles__hero",groupingName:"Grouping-styles__groupingName",overlay:"Grouping-styles__overlay",heroHover:"Grouping-styles__heroHover",withImage:"Grouping-styles__withImage",items:"Grouping-styles__items",medium:"Grouping-styles__medium",small:"Grouping-styles__small"}
class S extends i["Component"]{constructor(e){super(e)
this.groupingLinkRef=e=>{this.groupingLink=e}
this.getFocusable=()=>this.groupingLink
this.handleFacadeClick=e=>{e&&e.preventDefault()
this.setState(()=>({showCompletedItems:true}),()=>{this.groupingLink&&this.groupingLink.focus()})}
this.state={showCompletedItems:false,badgeMap:this.setupItemBadgeMap(e.items)}}componentDidMount(){this.props.registerAnimatable("group",this,this.props.animatableIndex,this.itemUniqueIds())}UNSAFE_componentWillReceiveProps(e){this.props.deregisterAnimatable("group",this,this.itemUniqueIds())
this.props.registerAnimatable("group",this,e.animatableIndex,this.itemUniqueIds(e))}componentWillUnmount(){this.props.deregisterAnimatable("group",this,this.itemUniqueIds())}itemUniqueIds(e=this.props){return e.items.map(e=>e.uniqueId)}setupItemBadgeMap(e){const t={}
e.forEach(e=>{const n=Object(D["d"])(e)
n.length&&(t[e.id]=n)})
return t}getScrollable(){return this.groupingLink||this.plannerNoteHero}getLayout(){return this.props.responsiveSize}showNotificationBadgeOnItem(){return"large"!==this.getLayout()&&!this.props.simplifiedControls}renderItemsAndFacade(e){const t=Object(l["partition"])(e,e=>e.completed&&!e.show),n=Object(r["a"])(t,2),i=n[0],o=n[1]
let a=o
this.state.showCompletedItems&&(a=e)
const s=this.renderItems(a)
s.push(this.renderFacade(i,100*this.props.animatableIndex+a.length+1))
return s}renderItems(e){return e.map((e,t)=>o.a.createElement("li",{className:j.item,key:e.uniqueId},o.a.createElement(g["a"],{color:this.props.color,completed:e.completed,overrideId:e.overrideId,id:e.id,uniqueId:e.uniqueId,animatableIndex:100*this.props.animatableIndex+t+1,courseName:this.props.title,context:e.context||{},date:f()(e.date).tz(this.props.timeZone),associated_item:e.type,title:e.title,points:e.points,updateTodo:this.props.updateTodo,html_url:e.html_url,toggleCompletion:()=>this.props.toggleCompletion(e),badges:this.state.badgeMap[e.id],details:e.details,toggleAPIPending:e.toggleAPIPending,status:e.status,newActivity:e.newActivity,allDay:e.allDay,showNotificationBadge:this.showNotificationBadgeOnItem(),currentUser:this.props.currentUser,feedback:e.feedback,location:e.location,address:e.address,endTime:e.endTime,dateStyle:e.dateStyle,timeZone:this.props.timeZone,simplifiedControls:this.props.simplifiedControls,readOnly:e.readOnly,responsiveSize:this.props.responsiveSize,onlineMeetingURL:e.onlineMeetingURL,isObserving:this.props.isObserving})))}renderFacade(e,t){if(!this.state.showCompletedItems&&e.length>0){const n=e[0].date.clone()
n.startOf("day")
let r=false
let i=false
const a=e.map(e=>{Object(D["g"])("missing",e)&&(r=true)
e.newActivity&&(i=true)
return e.uniqueId})
let s="none"
this.showNotificationBadgeOnItem()&&(i?s="newActivity":r&&(s="missing"))
return o.a.createElement("li",{className:j.item,key:"completed"},o.a.createElement(x,{onClick:this.handleFacadeClick,itemCount:e.length,badges:Object(D["e"])(e),animatableIndex:t,animatableItemIds:a,notificationBadge:s,theme:{labelColor:this.props.simplifiedControls?void 0:this.props.color},date:n,responsiveSize:this.props.responsiveSize,simplifiedControls:this.props.simplifiedControls}))}return null}renderToDoText(){return Object(A["a"])("To Do")}renderNotificationBadge(){if("large"!==this.getLayout()||this.props.simplifiedControls)return null
let e=false
const t=this.props.items.find(t=>{Object(D["g"])("missing",t)&&(e=true)
return t.newActivity})
if(t||e){const e=t?E["b"]:E["a"]
const n=this.props.title?this.props.title:this.renderToDoText()
return o.a.createElement(E["c"],null,o.a.createElement(e,{title:n,itemIds:this.itemUniqueIds(),animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable}))}return o.a.createElement(E["c"],null)}renderGroupLinkBackground(){const e=u()({[j.overlay]:true,[j.withImage]:this.props.image_url})
const t="large"===this.getLayout()?{backgroundColor:this.props.color}:null
return o.a.createElement("span",{className:e,style:t})}renderGroupLinkTitle(){return o.a.createElement("span",{className:j.title},this.props.title||this.renderToDoText())}renderGroupLink(){if(this.props.singleCourseView)return null
if(!this.props.title||this.props.items[0].readOnly)return o.a.createElement("span",{className:j.hero,ref:e=>this.plannerNoteHero=e},this.renderGroupLinkBackground(),this.renderGroupLinkTitle())
const e="large"===this.getLayout()?{backgroundImage:`url(${this.props.image_url||""})`}:null
return o.a.createElement("a",{href:this.props.url||"#",ref:this.groupingLinkRef,className:`${j.hero} ${j.heroHover}`,style:e},this.renderGroupLinkBackground(),this.renderGroupLinkTitle())}render(){return o.a.createElement("div",{className:u()(j.root,j[this.getLayout()],"planner-grouping")},this.renderNotificationBadge(),this.renderGroupLink(),o.a.createElement("ol",{className:j.items,style:{borderColor:this.props.color}},this.renderItemsAndFacade(this.props.items)))}}S.propTypes={items:Object(c["arrayOf"])(Object(c["shape"])(p["d"])).isRequired,animatableIndex:c["number"],title:c["string"],color:c["string"],image_url:c["string"],timeZone:c["string"].isRequired,url:c["string"],toggleCompletion:c["func"],updateTodo:c["func"],registerAnimatable:c["func"],deregisterAnimatable:c["func"],currentUser:Object(c["shape"])(p["h"]),responsiveSize:p["f"],simplifiedControls:c["bool"],singleCourseView:c["bool"],isObserving:c["bool"]}
S.defaultProps={registerAnimatable:()=>{},deregisterAnimatable:()=>{},responsiveSize:"large",simplifiedControls:false,singleCourseView:false,isObserving:false}
const I=Object(a["j"])(m,j)(S)
const B=Object(C["c"])(I)
B.theme=I.theme
t["a"]=B},Tsvt:function(e,t){e.exports=/([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g},UmkF:function(e,t,n){var r=n("jDM7")
var i=n("7NKU")
e.exports=function(e,t){if(null==e)return""
var n=""
for(var o=0;o<e.length;o++){var a=e[o]
var s=r(a,t)
n+=s===a?i(a,t):s}return n}},"V+xs":function(e,t,n){"use strict"
var r=n("VwiP")
var i=n("82c2").supportsDescriptors
var o=Object.getOwnPropertyDescriptor
var a=TypeError
e.exports=function(){if(!i)throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
if("gim"===/a/gim.flags){var e=o(RegExp.prototype,"flags")
if(e&&"function"===typeof e.get&&"boolean"===typeof/a/.dotAll)return e.get}return r}},VwiP:function(e,t,n){"use strict"
var r=Object
var i=TypeError
e.exports=function(){if(null!=this&&this!==r(this))throw new i("RegExp.prototype.flags getter called on non-object")
var e=""
this.global&&(e+="g")
this.ignoreCase&&(e+="i")
this.multiline&&(e+="m")
this.dotAll&&(e+="s")
this.unicode&&(e+="u")
this.sticky&&(e+="y")
return e}},WDQk:function(e,t,n){"use strict"
var r=n("1u+m")
e.exports=function(){return"function"===typeof Object.is?Object.is:r}},WJ2Z:function(e,t,n){var r,i;(function(e){"use strict"
if(e.jQuery)return
var t=function(e,n){return new t.fn.init(e,n)}
t.isWindow=function(e){return e&&e===e.window}
t.type=function(e){if(!e)return e+""
return"object"===typeof e||"function"===typeof e?i[a.call(e)]||"object":typeof e}
t.isArray=Array.isArray||function(e){return"array"===t.type(e)}
function n(e){var n=e.length,r=t.type(e)
if("function"===r||t.isWindow(e))return false
if(1===e.nodeType&&n)return true
return"array"===r||0===n||"number"===typeof n&&n>0&&n-1 in e}t.isPlainObject=function(e){var n
if(!e||"object"!==t.type(e)||e.nodeType||t.isWindow(e))return false
try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return false}catch(e){return false}for(n in e);return void 0===n||o.call(e,n)}
t.each=function(e,t,r){var i,o=0,a=e.length,s=n(e)
if(r)if(s)for(;o<a;o++){i=t.apply(e[o],r)
if(false===i)break}else for(o in e){if(!e.hasOwnProperty(o))continue
i=t.apply(e[o],r)
if(false===i)break}else if(s)for(;o<a;o++){i=t.call(e[o],o,e[o])
if(false===i)break}else for(o in e){if(!e.hasOwnProperty(o))continue
i=t.call(e[o],o,e[o])
if(false===i)break}return e}
t.data=function(e,n,i){if(void 0===i){var o=e[t.expando],a=o&&r[o]
if(void 0===n)return a
if(a&&n in a)return a[n]}else if(void 0!==n){var s=e[t.expando]||(e[t.expando]=++t.uuid)
r[s]=r[s]||{}
r[s][n]=i
return i}}
t.removeData=function(e,n){var i=e[t.expando],o=i&&r[i]
o&&(n?t.each(n,(function(e,t){delete o[t]})):delete r[i])}
t.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=false
if("boolean"===typeof s){c=s
s=arguments[u]||{}
u++}"object"!==typeof s&&"function"!==t.type(s)&&(s={})
if(u===l){s=this
u--}for(;u<l;u++)if(o=arguments[u])for(i in o){if(!o.hasOwnProperty(i))continue
e=s[i]
r=o[i]
if(s===r)continue
if(c&&r&&(t.isPlainObject(r)||(n=t.isArray(r)))){if(n){n=false
a=e&&t.isArray(e)?e:[]}else a=e&&t.isPlainObject(e)?e:{}
s[i]=t.extend(c,a,r)}else void 0!==r&&(s[i]=r)}return s}
t.queue=function(e,r,i){function o(e,t){var r=t||[]
e&&(n(Object(e))?function(e,t){var n=+t.length,r=0,i=e.length
while(r<n)e[i++]=t[r++]
if(n!==n)while(void 0!==t[r])e[i++]=t[r++]
e.length=i}(r,"string"===typeof e?[e]:e):[].push.call(r,e))
return r}if(!e)return
r=(r||"fx")+"queue"
var a=t.data(e,r)
if(!i)return a||[]
!a||t.isArray(i)?a=t.data(e,r,o(i)):a.push(i)
return a}
t.dequeue=function(e,n){t.each(e.nodeType?[e]:e,(function(e,r){n=n||"fx"
var i=t.queue(r,n),o=i.shift()
"inprogress"===o&&(o=i.shift())
if(o){"fx"===n&&i.unshift("inprogress")
o.call(r,(function(){t.dequeue(r,n)}))}}))}
t.fn=t.prototype={init:function(e){if(e.nodeType){this[0]=e
return this}throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0}
return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(e){var t=e.offsetParent
while(t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position.toLowerCase())t=t.offsetParent
return t||document}var n=this[0],r=e(n),i=this.offset(),o=/^(?:body|html)$/i.test(r.nodeName)?{top:0,left:0}:t(r).offset()
i.top-=parseFloat(n.style.marginTop)||0
i.left-=parseFloat(n.style.marginLeft)||0
if(r.style){o.top+=parseFloat(r.style.borderTopWidth)||0
o.left+=parseFloat(r.style.borderLeftWidth)||0}return{top:i.top-o.top,left:i.left-o.left}}}
var r={}
t.expando="velocity"+(new Date).getTime()
t.uuid=0
var i={},o=i.hasOwnProperty,a=i.toString
var s="Boolean Number String Function Array Date RegExp Object Error".split(" ")
for(var u=0;u<s.length;u++)i["[object "+s[u]+"]"]=s[u].toLowerCase()
t.fn.init.prototype=t.fn
e.Velocity={Utilities:t}})(window);(function(o){"use strict"
if("object"===typeof e.exports)e.exports=o()
else{r=o,i="function"===typeof r?r.call(t,n,t,e):r,void 0!==i&&(e.exports=i)}})((function(){"use strict"
return function(e,t,n,r){var i=function(){if(n.documentMode)return n.documentMode
for(var e=7;e>4;e--){var t=n.createElement("div")
t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e"
if(t.getElementsByTagName("span").length){t=null
return e}}return r}()
var o=(a=0,t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){var t,n=(new Date).getTime()
t=Math.max(0,16-(n-a))
a=n+t
return setTimeout((function(){e(n+t)}),t)})
var a
var s=function(){var e=t.performance||{}
if("function"!==typeof e.now){var n=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime()
e.now=function(){return(new Date).getTime()-n}}return e}()
function u(e){var t=-1,n=e?e.length:0,r=[]
while(++t<n){var i=e[t]
i&&r.push(i)}return r}var l=function(){var e=Array.prototype.slice
try{e.call(n.documentElement)
return e}catch(t){return function(t,n){var r=this.length
"number"!==typeof t&&(t=0)
"number"!==typeof n&&(n=r)
if(this.slice)return e.call(this,t,n)
var i,o=[],a=t>=0?t:Math.max(0,r+t),s=n<0?r+n:Math.min(n,r),u=s-a
if(u>0){o=new Array(u)
if(this.charAt)for(i=0;i<u;i++)o[i]=this.charAt(a+i)
else for(i=0;i<u;i++)o[i]=this[a+i]}return o}}}()
var c=function(){if(Array.prototype.includes)return function(e,t){return e.includes(t)}
if(Array.prototype.indexOf)return function(e,t){return e.indexOf(t)>=0}
return function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return true
return false}}
function d(e){f.isWrapped(e)?e=l.call(e):f.isNode(e)&&(e=[e])
return e}var f={isNumber:function(e){return"number"===typeof e},isString:function(e){return"string"===typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&f.isNumber(e.length)&&!f.isString(e)&&!f.isFunction(e)&&!f.isNode(e)&&(0===e.length||f.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return false
return true}}
var p,h=false
if(e.fn&&e.fn.jquery){p=e
h=true}else p=t.Velocity.Utilities
if(i<=8&&!h)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
if(i<=7){jQuery.fn.velocity=jQuery.fn.animate
return}var m=400,g="swing"
var b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),isAndroid:/Android/i.test(t.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(t.navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:false,calls:[],delayedElements:{count:0}},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:m,easing:g,begin:r,complete:r,progress:r,display:r,visibility:r,loop:false,delay:false,mobileHA:true,_cacheValues:true,promiseRejectEmpty:true},init:function(e){p.data(e,"velocity",{isSVG:f.isSVG(e),isAnimating:false,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:false,version:{major:1,minor:5,patch:2},debug:false,timestamp:true,pauseAll:function(e){var t=(new Date).getTime()
p.each(b.State.calls,(function(t,n){if(n){if(e!==r&&(n[2].queue!==e||false===n[2].queue))return true
n[5]={resume:false}}}))
p.each(b.State.delayedElements,(function(e,n){if(!n)return
y(n,t)}))},resumeAll:function(e){var t=(new Date).getTime()
p.each(b.State.calls,(function(t,n){if(n){if(e!==r&&(n[2].queue!==e||false===n[2].queue))return true
n[5]&&(n[5].resume=true)}}))
p.each(b.State.delayedElements,(function(e,n){if(!n)return
_(n,t)}))}}
if(t.pageYOffset!==r){b.State.scrollAnchor=t
b.State.scrollPropertyLeft="pageXOffset"
b.State.scrollPropertyTop="pageYOffset"}else{b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body
b.State.scrollPropertyLeft="scrollLeft"
b.State.scrollPropertyTop="scrollTop"}function v(e){var t=p.data(e,"velocity")
return null===t?r:t}function y(e,t){var n=v(e)
if(n&&n.delayTimer&&!n.delayPaused){n.delayRemaining=n.delay-t+n.delayBegin
n.delayPaused=true
clearTimeout(n.delayTimer.setTimeout)}}function _(e,t){var n=v(e)
if(n&&n.delayTimer&&n.delayPaused){n.delayPaused=false
n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining)}}function E(e){return function(t){return Math.round(t*e)*(1/e)}}function C(e,n,r,i){var o=4,a=.001,s=1e-7,u=10,l=11,c=1/(l-1),d="Float32Array"in t
if(4!==arguments.length)return false
for(var f=0;f<4;++f)if("number"!==typeof arguments[f]||isNaN(arguments[f])||!isFinite(arguments[f]))return false
e=Math.min(e,1)
r=Math.min(r,1)
e=Math.max(e,0)
r=Math.max(r,0)
var p=d?new Float32Array(l):new Array(l)
function h(e,t){return 1-3*t+3*e}function m(e,t){return 3*t-6*e}function g(e){return 3*e}function b(e,t,n){return((h(t,n)*e+m(t,n))*e+g(t))*e}function v(e,t,n){return 3*h(t,n)*e*e+2*m(t,n)*e+g(t)}function y(t,n){for(var i=0;i<o;++i){var a=v(n,e,r)
if(0===a)return n
var s=b(n,e,r)-t
n-=s/a}return n}function _(){for(var t=0;t<l;++t)p[t]=b(t*c,e,r)}function E(t,n,i){var o,a,l=0
do{a=n+(i-n)/2
o=b(a,e,r)-t
o>0?i=a:n=a}while(Math.abs(o)>s&&++l<u)
return a}function C(t){var n=0,i=1,o=l-1
for(;i!==o&&p[i]<=t;++i)n+=c;--i
var s=(t-p[i])/(p[i+1]-p[i]),u=n+s*c,d=v(u,e,r)
return d>=a?y(t,u):0===d?u:E(t,n,n+c)}var O=false
function A(){O=true
e===n&&r===i||_()}var w=function(t){O||A()
if(e===n&&r===i)return t
if(0===t)return 0
if(1===t)return 1
return b(C(t),n,i)}
w.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]}
var k="generateBezier("+[e,n,r,i]+")"
w.toString=function(){return k}
return w}var O=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction}
return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),a=t(n,.5*r,o),s=t(n,r,a),u=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),l=1/6*(i.dv+2*(o.dv+a.dv)+s.dv)
n.x=n.x+u*r
n.v=n.v+l*r
return n}return function e(t,r,i){var o,a,s,u={x:-1,v:0,tension:null,friction:null},l=[0],c=0,d=1e-4,f=.016
t=parseFloat(t)||500
r=parseFloat(r)||20
i=i||null
u.tension=t
u.friction=r
o=null!==i
if(o){c=e(t,r)
a=c/i*f}else a=f
while(true){s=n(s||u,a)
l.push(1+s.x)
c+=16
if(!(Math.abs(s.x)>d&&Math.abs(s.v)>d))break}return o?function(e){return l[e*(l.length-1)|0]}:c}}()
b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}
p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(e,t){b.Easings[t[0]]=C.apply(null,t[1])}))
function A(e,t){var n=e
f.isString(e)?b.Easings[e]||(n=false):n=f.isArray(e)&&1===e.length?E.apply(null,e):f.isArray(e)&&2===e.length?O.apply(null,e.concat([t])):!(!f.isArray(e)||4!==e.length)&&C.apply(null,e)
false===n&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:g)
return n}var w=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<w.Lists.colors.length;e++){var t="color"===w.Lists.colors[e]?"0 0 0 1":"255 255 255 1"
w.Hooks.templates[w.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,o
if(i)for(n in w.Hooks.templates){if(!w.Hooks.templates.hasOwnProperty(n))continue
r=w.Hooks.templates[n]
o=r[0].split(" ")
var a=r[1].match(w.RegEx.valueSplit)
if("Color"===o[0]){o.push(o.shift())
a.push(a.shift())
w.Hooks.templates[n]=[o.join(" "),a.join(" ")]}}for(n in w.Hooks.templates){if(!w.Hooks.templates.hasOwnProperty(n))continue
r=w.Hooks.templates[n]
o=r[0].split(" ")
for(var s in o){if(!o.hasOwnProperty(s))continue
var u=n+o[s],l=s
w.Hooks.registered[u]=[n,l]}}},getRoot:function(e){var t=w.Hooks.registered[e]
return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||""
if(n&&c(w.Lists.units,n))return n
return""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,(function(e,t,n){if(w.Lists.colorNames.hasOwnProperty(n))return(t||"rgba(")+w.Lists.colorNames[n]+(t?"":",1)")
return t+n}))},cleanRootPropertyValue:function(e,t){w.RegEx.valueUnwrap.test(t)&&(t=t.match(w.RegEx.valueUnwrap)[1])
w.Values.isCSSNullValue(t)&&(t=w.Hooks.templates[e][1])
return t},extractValue:function(e,t){var n=w.Hooks.registered[e]
if(n){var r=n[0],i=n[1]
t=w.Hooks.cleanRootPropertyValue(r,t)
return t.toString().match(w.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=w.Hooks.registered[e]
if(r){var i,o,a=r[0],s=r[1]
n=w.Hooks.cleanRootPropertyValue(a,n)
i=n.toString().match(w.RegEx.valueSplit)
i[s]=t
o=i.join(" ")
return o}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip"
case"extract":var r
if(w.RegEx.wrappedValueAlreadyExtracted.test(n))r=n
else{r=n.toString().match(w.RegEx.valueUnwrap)
r=r?r[1].replace(/,(\s+)?/g," "):n}return r
case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter"
case"extract":var r=parseFloat(n)
if(!(r||0===r)){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i)
r=i?i[1]:0}return r
case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(i<=8)switch(e){case"name":return"filter"
case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i)
n=r?r[1]/100:1
return n
case"inject":t.style.zoom=1
return parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity"
case"extract":case"inject":return n}}},register:function(){i&&!(i>9)||b.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D))
for(var e=0;e<w.Lists.transformsBase.length;e++)(function(){var t=w.Lists.transformsBase[e]
w.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform"
case"extract":if(v(n)===r||v(n).transformCache[t]===r)return/^scale/i.test(t)?1:0
return v(n).transformCache[t].replace(/[()]/g,"")
case"inject":var o=false
switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i)
break
case"scal":case"scale":b.State.isAndroid&&v(n).transformCache[t]===r&&i<1&&(i=1)
o=!/(\d)$/i.test(i)
break
case"skew":case"rotate":o=!/(deg|\d)$/i.test(i)}o||(v(n).transformCache[t]="("+i+")")
return v(n).transformCache[t]}}})()
for(var t=0;t<w.Lists.colors.length;t++)(function(){var e=w.Lists.colors[t]
w.Normalizations.registered[e]=function(t,n,o){switch(t){case"name":return e
case"extract":var a
if(w.RegEx.wrappedValueAlreadyExtracted.test(o))a=o
else{var s,u={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?s=u[o]!==r?u[o]:u.black:w.RegEx.isHex.test(o)?s="rgb("+w.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(s=u.black)
a=(s||o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}(!i||i>8)&&3===a.split(" ").length&&(a+=" 1")
return a
case"inject":if(/^rgb/.test(o))return o
i<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1")
return(i<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}})()
function n(e,t,n){var r="border-box"===w.getPropertyValue(t,"boxSizing").toString().toLowerCase()
if(r===(n||false)){var i,o,a=0,s="width"===e?["Left","Right"]:["Top","Bottom"],u=["padding"+s[0],"padding"+s[1],"border"+s[0]+"Width","border"+s[1]+"Width"]
for(i=0;i<u.length;i++){o=parseFloat(w.getPropertyValue(t,u[i]))
isNaN(o)||(a+=o)}return n?-a:a}return 0}function o(e,t){return function(r,i,o){switch(r){case"name":return e
case"extract":return parseFloat(o)+n(e,i,t)
case"inject":return parseFloat(o)-n(e,i,t)+"px"}}}w.Normalizations.registered.innerWidth=o("width",true)
w.Normalizations.registered.innerHeight=o("height",true)
w.Normalizations.registered.outerWidth=o("width")
w.Normalizations.registered.outerHeight=o("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";(i||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform")
return new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],true]
var t=["","Webkit","Moz","ms","O"]
for(var n=0,r=t.length;n<r;n++){var i
i=0===n?e:t[n]+e.replace(/^\w/,(function(e){return e.toUpperCase()}))
if(f.isString(b.State.prefixElement.style[i])){b.State.prefixMatches[e]=i
return[i,true]}}return[e,false]}},Values:{hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
e=e.replace(n,(function(e,t,n,r){return t+t+n+n+r+r}))
t=r.exec(e)
return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase()
return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t)
else if(f.isString(e.className))e.className+=(e.className.length?" ":"")+t
else{var n=e.getAttribute(i<=7?"className":"class")||""
e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t)
else if(f.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")
else{var n=e.getAttribute(i<=7?"className":"class")||""
e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,n,o,a){function s(e,n){var o=0
if(i<=8)o=p.css(e,n)
else{var u=false
if(/^(width|height)$/.test(n)&&0===w.getPropertyValue(e,"display")){u=true
w.setPropertyValue(e,"display",w.Values.getDisplayType(e))}var l=function(){u&&w.setPropertyValue(e,"display","none")}
if(!a){if("height"===n&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(w.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(e,"paddingBottom"))||0)
l()
return c}if("width"===n&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var d=e.offsetWidth-(parseFloat(w.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(e,"paddingRight"))||0)
l()
return d}}var f
f=v(e)===r?t.getComputedStyle(e,null):v(e).computedStyle?v(e).computedStyle:v(e).computedStyle=t.getComputedStyle(e,null)
"borderColor"===n&&(n="borderTopColor")
o=9===i&&"filter"===n?f.getPropertyValue(n):f[n]
""!==o&&null!==o||(o=e.style[n])
l()}if("auto"===o&&/^(top|right|bottom|left)$/i.test(n)){var h=s(e,"position");("fixed"===h||"absolute"===h&&/top|left/i.test(n))&&(o=p(e).position()[n]+"px")}return o}var u
if(w.Hooks.registered[n]){var l=n,c=w.Hooks.getRoot(l)
o===r&&(o=w.getPropertyValue(e,w.Names.prefixCheck(c)[0]))
w.Normalizations.registered[c]&&(o=w.Normalizations.registered[c]("extract",e,o))
u=w.Hooks.extractValue(l,o)}else if(w.Normalizations.registered[n]){var d,f
d=w.Normalizations.registered[n]("name",e)
if("transform"!==d){f=s(e,w.Names.prefixCheck(d)[0])
w.Values.isCSSNullValue(f)&&w.Hooks.templates[n]&&(f=w.Hooks.templates[n][1])}u=w.Normalizations.registered[n]("extract",e,f)}if(!/^[\d-]/.test(u)){var h=v(e)
if(h&&h.isSVG&&w.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{u=e.getBBox()[n]}catch(e){u=0}else u=e.getAttribute(n)
else u=s(e,w.Names.prefixCheck(n)[0])}w.Values.isCSSNullValue(u)&&(u=0)
b.debug>=2&&console.log("Get "+n+": "+u)
return u},setPropertyValue:function(e,n,r,o,a){var s=n
if("scroll"===n)a.container?a.container["scroll"+a.direction]=r:"Left"===a.direction?t.scrollTo(r,a.alternateValue):t.scrollTo(a.alternateValue,r)
else if(w.Normalizations.registered[n]&&"transform"===w.Normalizations.registered[n]("name",e)){w.Normalizations.registered[n]("inject",e,r)
s="transform"
r=v(e).transformCache[n]}else{if(w.Hooks.registered[n]){var u=n,l=w.Hooks.getRoot(n)
o=o||w.getPropertyValue(e,l)
r=w.Hooks.injectValue(u,r,o)
n=l}if(w.Normalizations.registered[n]){r=w.Normalizations.registered[n]("inject",e,r)
n=w.Normalizations.registered[n]("name",e)}s=w.Names.prefixCheck(n)[0]
if(i<=8)try{e.style[s]=r}catch(e){b.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else{var c=v(e)
c&&c.isSVG&&w.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[s]=r}b.debug>=2&&console.log("Set "+n+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(e){var t="",n=v(e)
if((i||b.State.isAndroid&&!b.State.isChrome)&&n&&n.isSVG){var r=function(t){return parseFloat(w.getPropertyValue(e,t))}
var o={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],rotate:[r("rotateZ"),0,0]}
p.each(v(e).transformCache,(function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate")
if(o[e]){t+=e+"("+o[e].join(" ")+") "
delete o[e]}}))}else{var a,s
p.each(v(e).transformCache,(function(n){a=v(e).transformCache[n]
if("transformPerspective"===n){s=a
return true}9===i&&"rotateZ"===n&&(n="rotate")
t+=n+a+" "}))
s&&(t="perspective"+s+" "+t)}w.setPropertyValue(e,"transform",t)}}
w.Hooks.register()
w.Normalizations.register()
b.hook=function(e,t,n){var i
e=d(e)
p.each(e,(function(e,o){v(o)===r&&b.init(o)
if(n===r)i===r&&(i=w.getPropertyValue(o,t))
else{var a=w.setPropertyValue(o,t,n)
"transform"===a[0]&&b.CSS.flushTransformCache(o)
i=a}}))
return i}
var k=function(){var e
function i(){return o?E.promise||null:a}var o,a,s,u=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||f.isString(arguments[0].properties))
var l,h,g
if(f.isWrapped(this)){o=false
s=0
l=this
a=this}else{o=true
s=1
l=u?arguments[0].elements||arguments[0].e:arguments[0]}var E={promise:null,resolver:null,rejecter:null}
o&&b.Promise&&(E.promise=new b.Promise((function(e,t){E.resolver=e
E.rejecter=t})))
if(u){h=arguments[0].properties||arguments[0].p
g=arguments[0].options||arguments[0].o}else{h=arguments[s]
g=arguments[s+1]}l=d(l)
if(!l){E.promise&&(h&&g&&false===g.promiseRejectEmpty?E.resolver():E.rejecter())
return}var C=l.length,O=0
if(!/^(stop|finish|finishAll|pause|resume)$/i.test(h)&&!p.isPlainObject(g)){var x=s+1
g={}
for(var D=x;D<arguments.length;D++)f.isArray(arguments[D])||!/^(fast|normal|slow)$/i.test(arguments[D])&&!/^\d/.test(arguments[D])?f.isString(arguments[D])||f.isArray(arguments[D])?g.easing=arguments[D]:f.isFunction(arguments[D])&&(g.complete=arguments[D]):g.duration=arguments[D]}var I
switch(h){case"scroll":I="scroll"
break
case"reverse":I="reverse"
break
case"pause":var B=(new Date).getTime()
p.each(l,(function(e,t){y(t,B)}))
p.each(b.State.calls,(function(e,t){var n=false
t&&p.each(t[1],(function(e,i){var o=g===r?"":g
if(true!==o&&t[2].queue!==o&&!(g===r&&false===t[2].queue))return true
p.each(l,(function(e,r){if(r===i){t[5]={resume:false}
n=true
return false}}))
if(n)return false}))}))
return i()
case"resume":p.each(l,(function(e,t){_(t,B)}))
p.each(b.State.calls,(function(e,t){var n=false
t&&p.each(t[1],(function(e,i){var o=g===r?"":g
if(true!==o&&t[2].queue!==o&&!(g===r&&false===t[2].queue))return true
if(!t[5])return true
p.each(l,(function(e,r){if(r===i){t[5].resume=true
n=true
return false}}))
if(n)return false}))}))
return i()
case"finish":case"finishAll":case"stop":p.each(l,(function(e,t){if(v(t)&&v(t).delayTimer){clearTimeout(v(t).delayTimer.setTimeout)
v(t).delayTimer.next&&v(t).delayTimer.next()
delete v(t).delayTimer}if("finishAll"===h&&(true===g||f.isString(g))){p.each(p.queue(t,f.isString(g)?g:""),(function(e,t){f.isFunction(t)&&t()}))
p.queue(t,f.isString(g)?g:"",[])}}))
var T=[]
p.each(b.State.calls,(function(e,t){t&&p.each(t[1],(function(n,i){var o=g===r?"":g
if(true!==o&&t[2].queue!==o&&!(g===r&&false===t[2].queue))return true
p.each(l,(function(n,r){if(r===i){if(true===g||f.isString(g)){p.each(p.queue(r,f.isString(g)?g:""),(function(e,t){f.isFunction(t)&&t(null,true)}))
p.queue(r,f.isString(g)?g:"",[])}if("stop"===h){var a=v(r)
a&&a.tweensContainer&&(true===o||""===o)&&p.each(a.tweensContainer,(function(e,t){t.endValue=t.currentValue}))
T.push(e)}else"finish"!==h&&"finishAll"!==h||(t[2].duration=1)}}))}))}))
if("stop"===h){p.each(T,(function(e,t){S(t,true)}))
E.promise&&E.resolver(l)}return i()
default:if(!p.isPlainObject(h)||f.isEmptyObject(h)){if(f.isString(h)&&b.Redirects[h]){e=p.extend({},g)
var F=e.duration,P=e.delay||0
true===e.backwards&&(l=p.extend(true,[],l).reverse())
p.each(l,(function(t,n){parseFloat(e.stagger)?e.delay=P+parseFloat(e.stagger)*t:f.isFunction(e.stagger)&&(e.delay=P+e.stagger.call(n,t,C))
if(e.drag){e.duration=parseFloat(F)||(/^(callout|transition)/.test(h)?1e3:m)
e.duration=Math.max(e.duration*(e.backwards?1-t/C:(t+1)/C),.75*e.duration,200)}b.Redirects[h].call(n,n,e||{},t,C,l,E.promise?E:r)}))
return i()}var L="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting."
E.promise?E.rejecter(new Error(L)):t.console&&console.log(L)
return i()}I="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null}
var N=[]
function R(e,i){var o,a=p.extend({},b.defaults,g),s={}
v(e)===r&&b.init(e)
parseFloat(a.delay)&&false!==a.queue&&p.queue(e,a.queue,(function(t,n){if(true===n)return true
b.velocityQueueEntryFlag=true
var r=b.State.delayedElements.count++
b.State.delayedElements[r]=e
var i=(o=r,function(){b.State.delayedElements[o]=false
t()})
var o
v(e).delayBegin=(new Date).getTime()
v(e).delay=parseFloat(a.delay)
v(e).delayTimer={setTimeout:setTimeout(t,parseFloat(a.delay)),next:i}}))
switch(a.duration.toString().toLowerCase()){case"fast":a.duration=200
break
case"normal":a.duration=m
break
case"slow":a.duration=600
break
default:a.duration=parseFloat(a.duration)||1}if(false!==b.mock)if(true===b.mock)a.duration=a.delay=1
else{a.duration*=parseFloat(b.mock)||1
a.delay*=parseFloat(b.mock)||1}a.easing=A(a.easing,a.duration)
a.begin&&!f.isFunction(a.begin)&&(a.begin=null)
a.progress&&!f.isFunction(a.progress)&&(a.progress=null)
a.complete&&!f.isFunction(a.complete)&&(a.complete=null)
if(a.display!==r&&null!==a.display){a.display=a.display.toString().toLowerCase()
"auto"===a.display&&(a.display=b.CSS.Values.getDisplayType(e))}a.visibility!==r&&null!==a.visibility&&(a.visibility=a.visibility.toString().toLowerCase())
a.mobileHA=a.mobileHA&&b.State.isMobile&&!b.State.isGingerbread
function u(u){var d,m
if(a.begin&&0===O)try{a.begin.call(l,l)}catch(e){setTimeout((function(){throw e}),1)}if("scroll"===I){var y,_,k,x=/^x$/i.test(a.axis)?"Left":"Top",D=parseFloat(a.offset)||0
if(a.container)if(f.isWrapped(a.container)||f.isNode(a.container)){a.container=a.container[0]||a.container
y=a.container["scroll"+x]
k=y+p(e).position()[x.toLowerCase()]+D}else a.container=null
else{y=b.State.scrollAnchor[b.State["scrollProperty"+x]]
_=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===x?"Top":"Left")]]
k=p(e).offset()[x.toLowerCase()]+D}s={scroll:{rootPropertyValue:false,startValue:y,currentValue:y,endValue:k,unitType:"",easing:a.easing,scrollData:{container:a.container,direction:x,alternateValue:_}},element:e}
b.debug&&console.log("tweensContainer (scroll): ",s.scroll,e)}else if("reverse"===I){d=v(e)
if(!d)return
if(!d.tweensContainer){p.dequeue(e,a.queue)
return}"none"===d.opts.display&&(d.opts.display="auto")
"hidden"===d.opts.visibility&&(d.opts.visibility="visible")
d.opts.loop=false
d.opts.begin=null
d.opts.complete=null
g.easing||delete a.easing
g.duration||delete a.duration
a=p.extend({},d.opts,a)
m=p.extend(true,{},d?d.tweensContainer:null)
for(var S in m)if(m.hasOwnProperty(S)&&"element"!==S){var B=m[S].startValue
m[S].startValue=m[S].currentValue=m[S].endValue
m[S].endValue=B
f.isEmptyObject(g)||(m[S].easing=a.easing)
b.debug&&console.log("reverse tweensContainer ("+S+"): "+JSON.stringify(m[S]),e)}s=m}else if("start"===I){d=v(e)
d&&d.tweensContainer&&true===d.isAnimating&&(m=d.tweensContainer)
var T=function(t,n){var r,o,s
f.isFunction(t)&&(t=t.call(e,i,C))
if(f.isArray(t)){r=t[0]
if(!f.isArray(t[1])&&/^[\d-]/.test(t[1])||f.isFunction(t[1])||w.RegEx.isHex.test(t[1]))s=t[1]
else if(f.isString(t[1])&&!w.RegEx.isHex.test(t[1])&&b.Easings[t[1]]||f.isArray(t[1])){o=n?t[1]:A(t[1],a.duration)
s=t[2]}else s=t[1]||t[2]}else r=t
n||(o=o||a.easing)
f.isFunction(r)&&(r=r.call(e,i,C))
f.isFunction(s)&&(s=s.call(e,i,C))
return[r||0,o,s]}
var F=function(i,u){var l,c=w.Hooks.getRoot(i),h=false,g=u[0],v=u[1],y=u[2]
if((!d||!d.isSVG)&&"tween"!==c&&false===w.Names.prefixCheck(c)[1]&&w.Normalizations.registered[c]===r){b.debug&&console.log("Skipping ["+c+"] due to a lack of browser support.")
return}(a.display!==r&&null!==a.display&&"none"!==a.display||a.visibility!==r&&"hidden"!==a.visibility)&&/opacity|filter/.test(i)&&!y&&0!==g&&(y=0)
if(a._cacheValues&&m&&m[i]){y===r&&(y=m[i].endValue+m[i].unitType)
h=d.rootPropertyValueCache[c]}else if(w.Hooks.registered[i])if(y===r){h=w.getPropertyValue(e,c)
y=w.getPropertyValue(e,i,h)}else h=w.Hooks.templates[c][1]
else y===r&&(y=w.getPropertyValue(e,i))
var _,E,C,O=false
var A=function(e,t){var n,r
r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(e){n=e
return""}))
n||(n=w.Values.getUnitType(e))
return[r,n]}
if(y!==g&&f.isString(y)&&f.isString(g)){l=""
var k=0,x=0,D=[],j=[],S=0,I=0,B=0
y=w.Hooks.fixColors(y)
g=w.Hooks.fixColors(g)
while(k<y.length&&x<g.length){var T=y[k],F=g[x]
if(/[\d\.-]/.test(T)&&/[\d\.-]/.test(F)){var P=T,L=F,N=".",R="."
while(++k<y.length){T=y[k]
if(T===N)N=".."
else if(!/\d/.test(T))break
P+=T}while(++x<g.length){F=g[x]
if(F===R)R=".."
else if(!/\d/.test(F))break
L+=F}var q=w.Hooks.getUnit(y,k),z=w.Hooks.getUnit(g,x)
k+=q.length
x+=z.length
if(q===z)if(P===L)l+=P+q
else{l+="{"+D.length+(I?"!":"")+"}"+q
D.push(parseFloat(P))
j.push(parseFloat(L))}else{var K=parseFloat(P),U=parseFloat(L)
l+=(S<5?"calc":"")+"("+(K?"{"+D.length+(I?"!":"")+"}":"0")+q+" + "+(U?"{"+(D.length+(K?1:0))+(I?"!":"")+"}":"0")+z+")"
if(K){D.push(K)
j.push(0)}if(U){D.push(0)
j.push(U)}}}else{if(T!==F){S=0
break}l+=T
k++
x++
0===S&&"c"===T||1===S&&"a"===T||2===S&&"l"===T||3===S&&"c"===T||S>=4&&"("===T?S++:(S&&S<5||S>=4&&")"===T&&--S<5)&&(S=0)
if(0===I&&"r"===T||1===I&&"g"===T||2===I&&"b"===T||3===I&&"a"===T||I>=3&&"("===T){3===I&&"a"===T&&(B=1)
I++}else B&&","===T?++B>3&&(I=B=0):(B&&I<(B?5:4)||I>=(B?4:3)&&")"===T&&--I<(B?5:4))&&(I=B=0)}}if(k!==y.length||x!==g.length){b.debug&&console.error('Trying to pattern match mis-matched strings ["'+g+'", "'+y+'"]')
l=r}if(l)if(D.length){b.debug&&console.log('Pattern found "'+l+'" -> ',D,j,"["+y+","+g+"]")
y=D
g=j
E=C=""}else l=r}if(!l){_=A(i,y)
y=_[0]
C=_[1]
_=A(i,g)
g=_[0].replace(/^([+-\/*])=/,(function(e,t){O=t
return""}))
E=_[1]
y=parseFloat(y)||0
g=parseFloat(g)||0
if("%"===E)if(/^(fontSize|lineHeight)$/.test(i)){g/=100
E="em"}else if(/^scale/.test(i)){g/=100
E=""}else if(/(Red|Green|Blue)$/i.test(i)){g=g/100*255
E=""}}var W=function(){var r={myParent:e.parentNode||n.body,position:w.getPropertyValue(e,"position"),fontSize:w.getPropertyValue(e,"fontSize")},i=r.position===M.lastPosition&&r.myParent===M.lastParent,o=r.fontSize===M.lastFontSize
M.lastParent=r.myParent
M.lastPosition=r.position
M.lastFontSize=r.fontSize
var a=100,s={}
if(o&&i){s.emToPx=M.lastEmToPx
s.percentToPxWidth=M.lastPercentToPxWidth
s.percentToPxHeight=M.lastPercentToPxHeight}else{var u=d&&d.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div")
b.init(u)
r.myParent.appendChild(u)
p.each(["overflow","overflowX","overflowY"],(function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}))
b.CSS.setPropertyValue(u,"position",r.position)
b.CSS.setPropertyValue(u,"fontSize",r.fontSize)
b.CSS.setPropertyValue(u,"boxSizing","content-box")
p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(e,t){b.CSS.setPropertyValue(u,t,a+"%")}))
b.CSS.setPropertyValue(u,"paddingLeft",a+"em")
s.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(u,"width",null,true))||1)/a
s.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(u,"height",null,true))||1)/a
s.emToPx=M.lastEmToPx=(parseFloat(w.getPropertyValue(u,"paddingLeft"))||1)/a
r.myParent.removeChild(u)}null===M.remToPx&&(M.remToPx=parseFloat(w.getPropertyValue(n.body,"fontSize"))||16)
if(null===M.vwToPx){M.vwToPx=parseFloat(t.innerWidth)/100
M.vhToPx=parseFloat(t.innerHeight)/100}s.remToPx=M.remToPx
s.vwToPx=M.vwToPx
s.vhToPx=M.vhToPx
b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),e)
return s}
if(/[\/*]/.test(O))E=C
else if(C!==E&&0!==y)if(0===g)E=C
else{o=o||W()
var G=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y"
switch(C){case"%":y*="x"===G?o.percentToPxWidth:o.percentToPxHeight
break
case"px":break
default:y*=o[C+"ToPx"]}switch(E){case"%":y*=1/("x"===G?o.percentToPxWidth:o.percentToPxHeight)
break
case"px":break
default:y*=1/o[E+"ToPx"]}}switch(O){case"+":g=y+g
break
case"-":g=y-g
break
case"*":g*=y
break
case"/":g=y/g}s[i]={rootPropertyValue:h,startValue:y,currentValue:y,endValue:g,unitType:E,easing:v}
l&&(s[i].pattern=l)
b.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(s[i]),e)}
for(var P in h){if(!h.hasOwnProperty(P))continue
var L=w.Names.camelCase(P),R=T(h[P])
if(c(w.Lists.colors,L)){var q=R[0],z=R[1],K=R[2]
if(w.RegEx.isHex.test(q)){var U=["Red","Green","Blue"],W=w.Values.hexToRgb(q),G=K?w.Values.hexToRgb(K):r
for(var H=0;H<U.length;H++){var Y=[W[H]]
z&&Y.push(z)
G!==r&&Y.push(G[H])
F(L+U[H],Y)}continue}}F(L,R)}s.element=e}if(s.element){w.Values.addClass(e,"velocity-animating")
N.push(s)
d=v(e)
if(d){if(""===a.queue){d.tweensContainer=s
d.opts=a}d.isAnimating=true}if(O===C-1){b.State.calls.push([N,l,a,null,E.resolver,null,0])
if(false===b.State.isTicking){b.State.isTicking=true
j()}}else O++}}if(false===a.queue)if(a.delay){var d=b.State.delayedElements.count++
b.State.delayedElements[d]=e
var y=(_=d,function(){b.State.delayedElements[_]=false
u()})
v(e).delayBegin=(new Date).getTime()
v(e).delay=parseFloat(a.delay)
v(e).delayTimer={setTimeout:setTimeout(u,parseFloat(a.delay)),next:y}}else u()
else p.queue(e,a.queue,(function(e,t){if(true===t){E.promise&&E.resolver(l)
return true}b.velocityQueueEntryFlag=true
u(e)}))
var _
""!==a.queue&&"fx"!==a.queue||"inprogress"===p.queue(e)[0]||p.dequeue(e)}p.each(l,(function(e,t){f.isNode(t)&&R(t,e)}))
e=p.extend({},b.defaults,g)
e.loop=parseInt(e.loop,10)
var q=2*e.loop-1
if(e.loop)for(var z=0;z<q;z++){var K={delay:e.delay,progress:e.progress}
if(z===q-1){K.display=e.display
K.visibility=e.visibility
K.complete=e.complete}k(l,"reverse",K)}return i()}
b=p.extend(k,b)
b.animate=k
var x=t.requestAnimationFrame||o
if(!b.State.isMobile&&n.hidden!==r){var D=function(){if(n.hidden){x=function(e){return setTimeout((function(){e(true)}),16)}
j()}else x=t.requestAnimationFrame||o}
D()
n.addEventListener("visibilitychange",D)}function j(e){if(e){var t=b.timestamp&&true!==e?e:s.now()
var n=b.State.calls.length
if(n>1e4){b.State.calls=u(b.State.calls)
n=b.State.calls.length}for(var o=0;o<n;o++){if(!b.State.calls[o])continue
var a=b.State.calls[o],l=a[0],c=a[2],d=a[3],h=!d,m=null,g=a[5],y=a[6]
d||(d=b.State.calls[o][3]=t-16)
if(g){if(true!==g.resume)continue
d=a[3]=Math.round(t-y-16)
a[5]=null}y=a[6]=t-d
var _=Math.min(y/c.duration,1)
for(var E=0,C=l.length;E<C;E++){var O=l[E],A=O.element
if(!v(A))continue
var k=false
if(c.display!==r&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var D=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"]
p.each(D,(function(e,t){w.setPropertyValue(A,"display",t)}))}w.setPropertyValue(A,"display",c.display)}c.visibility!==r&&"hidden"!==c.visibility&&w.setPropertyValue(A,"visibility",c.visibility)
for(var I in O)if(O.hasOwnProperty(I)&&"element"!==I){var B,T=O[I],F=f.isString(T.easing)?b.Easings[T.easing]:T.easing
if(f.isString(T.pattern)){var P=1===_?function(e,t,n){var r=T.endValue[t]
return n?Math.round(r):r}:function(e,t,n){var r=T.startValue[t],i=T.endValue[t]-r,o=r+i*F(_,c,i)
return n?Math.round(o):o}
B=T.pattern.replace(/{(\d+)(!)?}/g,P)}else if(1===_)B=T.endValue
else{var L=T.endValue-T.startValue
B=T.startValue+L*F(_,c,L)}if(!h&&B===T.currentValue)continue
T.currentValue=B
if("tween"===I)m=B
else{var M
if(w.Hooks.registered[I]){M=w.Hooks.getRoot(I)
var N=v(A).rootPropertyValueCache[M]
N&&(T.rootPropertyValue=N)}var R=w.setPropertyValue(A,I,T.currentValue+(i<9&&0===parseFloat(B)?"":T.unitType),T.rootPropertyValue,T.scrollData)
w.Hooks.registered[I]&&(w.Normalizations.registered[M]?v(A).rootPropertyValueCache[M]=w.Normalizations.registered[M]("extract",null,R[1]):v(A).rootPropertyValueCache[M]=R[1])
"transform"===R[0]&&(k=true)}}if(c.mobileHA&&v(A).transformCache.translate3d===r){v(A).transformCache.translate3d="(0px, 0px, 0px)"
k=true}k&&w.flushTransformCache(A)}c.display!==r&&"none"!==c.display&&(b.State.calls[o][2].display=false)
c.visibility!==r&&"hidden"!==c.visibility&&(b.State.calls[o][2].visibility=false)
c.progress&&c.progress.call(a[1],a[1],_,Math.max(0,d+c.duration-t),d,m)
1===_&&S(o)}}b.State.isTicking&&x(j)}function S(e,t){if(!b.State.calls[e])return false
var n=b.State.calls[e][0],i=b.State.calls[e][1],o=b.State.calls[e][2],a=b.State.calls[e][4]
var s=false
for(var u=0,l=n.length;u<l;u++){var c=n[u].element
if(!t&&!o.loop){"none"===o.display&&w.setPropertyValue(c,"display",o.display)
"hidden"===o.visibility&&w.setPropertyValue(c,"visibility",o.visibility)}var d=v(c)
if(true!==o.loop&&(p.queue(c)[1]===r||!/\.velocityQueueEntryFlag/i.test(p.queue(c)[1]))&&d){d.isAnimating=false
d.rootPropertyValueCache={}
var f=false
p.each(w.Lists.transforms3D,(function(e,t){var n=/^scale/.test(t)?1:0,i=d.transformCache[t]
if(d.transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)){f=true
delete d.transformCache[t]}}))
if(o.mobileHA){f=true
delete d.transformCache.translate3d}f&&w.flushTransformCache(c)
w.Values.removeClass(c,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===l-1)try{o.complete.call(i,i)}catch(e){setTimeout((function(){throw e}),1)}a&&true!==o.loop&&a(i)
if(d&&true===o.loop&&!t){p.each(d.tweensContainer,(function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360===0){var n=t.startValue
t.startValue=t.endValue
t.endValue=n}if(/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType){t.endValue=0
t.startValue=100}}))
b(c,"reverse",{loop:true,delay:o.delay})}false!==o.queue&&p.dequeue(c,o.queue)}b.State.calls[e]=false
for(var h=0,m=b.State.calls.length;h<m;h++)if(false!==b.State.calls[h]){s=true
break}if(false===s){b.State.isTicking=false
delete b.State.calls
b.State.calls=[]}}e.Velocity=b
if(e!==t){e.fn.velocity=k
e.fn.velocity.defaults=b.defaults}p.each(["Down","Up"],(function(e,t){b.Redirects["slide"+t]=function(e,n,i,o,a,s){var u=p.extend({},n),l=u.begin,c=u.complete,d={},f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""}
u.display===r&&(u.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none")
u.begin=function(){0===i&&l&&l.call(a,a)
for(var n in f){if(!f.hasOwnProperty(n))continue
d[n]=e.style[n]
var r=w.getPropertyValue(e,n)
f[n]="Down"===t?[r,0]:[0,r]}d.overflow=e.style.overflow
e.style.overflow="hidden"}
u.complete=function(){for(var t in d)d.hasOwnProperty(t)&&(e.style[t]=d[t])
if(i===o-1){c&&c.call(a,a)
s&&s.resolver(a)}}
b(e,f,u)}}))
p.each(["In","Out"],(function(e,t){b.Redirects["fade"+t]=function(e,n,i,o,a,s){var u=p.extend({},n),l=u.complete,c={opacity:"In"===t?1:0}
0!==i&&(u.begin=null)
u.complete=i!==o-1?null:function(){l&&l.call(a,a)
s&&s.resolver(a)}
u.display===r&&(u.display="In"===t?"auto":"none")
b(this,c,u)}}))
return b}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}))},Wg0N:function(e,t,n){var r=n("jDM7")
e.exports=function(e,t){if(null==e)return""
e=String(e)
return r(e.charAt(0),t)+e.substr(1)}},Wklf:function(e,t){e.exports=/([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g},XGBb:function(e,t,n){var r=n("wd/R")
var i=n("c6aN")
var o=n("iNdV")
e.exports={momentObj:o.createMomentChecker("object",(function(e){return"object"===typeof e}),(function(e){return i.isValidMoment(e)}),"Moment"),momentString:o.createMomentChecker("string",(function(e){return"string"===typeof e}),(function(e){return i.isValidMoment(r(e))}),"Moment"),momentDurationObj:o.createMomentChecker("object",(function(e){return"object"===typeof e}),(function(e){return r.isDuration(e)}),"Duration")}},ZK5y:function(e,t,n){t.no=t.noCase=n("Pwfc")
t.dot=t.dotCase=n("hfBz")
t.swap=t.swapCase=n("UmkF")
t.path=t.pathCase=n("KUkU")
t.upper=t.upperCase=n("jDM7")
t.lower=t.lowerCase=n("7NKU")
t.camel=t.camelCase=n("hZA9")
t.snake=t.snakeCase=n("oCWi")
t.title=t.titleCase=n("zYwU")
t.param=t.paramCase=n("rJZp")
t.kebab=t.kebabCase=t.paramCase
t.hyphen=t.hyphenCase=t.paramCase
t.header=t.headerCase=n("r544")
t.pascal=t.pascalCase=n("5UzU")
t.constant=t.constantCase=n("IyvR")
t.sentence=t.sentenceCase=n("qJ69")
t.isUpper=t.isUpperCase=n("hctw")
t.isLower=t.isLowerCase=n("9wFd")
t.ucFirst=t.upperCaseFirst=n("Wg0N")
t.lcFirst=t.lowerCaseFirst=n("caQ9")},ZoNA:function(e,t,n){"use strict"
var r=n("O92E")
var i=n("CpOe")
e.exports=function(e){return i(r(e)).replace(/\s+/g," ")}},bEIN:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.isFSA=i
t.isError=o
var r=n("LvDl")
function i(e){return(0,r.isPlainObject)(e)&&(0,r.isString)(e.type)&&Object.keys(e).every(a)}function o(e){return i(e)&&true===e.error}function a(e){return["type","payload","error","meta"].indexOf(e)>-1}},bbcx:function(e,t,n){"use strict"
var r=n("82c2")
var i=n("PrET")
var o=n("1u+m")
var a=n("WDQk")
var s=n("wVpn")
var u=i(a(),Object)
r(u,{getPolyfill:a,implementation:o,shim:s})
e.exports=u},c6aN:function(e,t,n){var r=n("wd/R")
function i(e){if("function"===typeof r.isMoment&&!r.isMoment(e))return false
if("function"===typeof e.isValid)return e.isValid()
return!isNaN(e)}e.exports={isValidMoment:i}},caQ9:function(e,t,n){var r=n("7NKU")
e.exports=function(e,t){if(null==e)return""
e=String(e)
return r(e.charAt(0),t)+e.substr(1)}},dEKx:function(e,t,n){"use strict"
n.d(t,"c",(function(){return o}))
n.d(t,"b",(function(){return a}))
n.d(t,"a",(function(){return s}))
var r=n("ukBn")
let i
function o(e){i=e.convertApiUserContent}function a(e){false
return i(e)}function s(e){switch(e){case"Quiz":return Object(r["a"])("Quiz")
case"Discussion":return Object(r["a"])("Discussion")
case"Assignment":return Object(r["a"])("Assignment")
case"Page":return Object(r["a"])("Page")
case"Announcement":return Object(r["a"])("Announcement")
case"To Do":return Object(r["a"])("To Do")
case"Calendar Event":return Object(r["a"])("Calendar Event")
case"Peer Review":return Object(r["a"])("Peer Review")
default:return Object(r["a"])("Task")}}},dOsU:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M1587.16235,31.2784941 C1598.68235,7.78672942 1624.43294,-4.41091764 1650.63529,1.46202354 C1676.16,7.56084707 1694.11765,30.2620235 1694.11765,56.4643765 L1694.11765,56.4643765 L1694.11765,570.459671 C1822.87059,596.662024 1920,710.732612 1920,847.052612 C1920,983.372612 1822.87059,1097.55614 1694.11765,1123.75849 L1694.11765,1123.75849 L1694.11765,1637.64085 C1694.11765,1663.8432 1676.16,1686.65732 1650.63529,1692.6432 C1646.23059,1693.65967 1641.93882,1694.11144 1637.64706,1694.11144 C1616.52706,1694.11144 1596.87529,1682.36555 1587.16235,1662.93967 C1379.23765,1247.2032 964.178824,1242.34673 960,1242.34673 L960,1242.34673 L564.705882,1242.34673 L564.705882,1807.05261 L652.461176,1807.05261 C640.602353,1716.92555 634.955294,1560.05026 715.934118,1456.37026 C768.338824,1389.2832 845.590588,1355.28791 945.882353,1355.28791 L945.882353,1355.28791 L945.882353,1468.22908 C881.392941,1468.22908 835.312941,1487.09026 805.044706,1525.71614 C736.263529,1613.58438 759.981176,1789.54673 774.776471,1849.97026 C778.955294,1866.79849 775.115294,1884.6432 764.498824,1898.30908 C753.769412,1911.97496 737.28,1919.99379 720,1919.99379 L720,1919.99379 L508.235294,1919.99379 C477.063529,1919.99379 451.764706,1894.80791 451.764706,1863.5232 L451.764706,1863.5232 L451.764706,1242.34673 L395.294118,1242.34673 C239.548235,1242.34673 112.941176,1115.73967 112.941176,959.993788 L112.941176,959.993788 L112.941176,903.5232 L56.4705882,903.5232 C25.2988235,903.5232 0,878.337318 0,847.052612 C0,815.880847 25.2988235,790.582024 56.4705882,790.582024 L56.4705882,790.582024 L112.941176,790.582024 L112.941176,734.111435 C112.941176,578.478494 239.548235,451.758494 395.294118,451.758494 L395.294118,451.758494 L959.887059,451.758494 C976.828235,451.645553 1380.36706,444.756141 1587.16235,31.2784941 Z M1581.17647,249.706729 C1386.46588,492.078494 1128.96,547.871435 1016.47059,560.746729 L1016.47059,560.746729 L1016.47059,1133.47144 C1128.96,1146.34673 1386.46588,1202.02673 1581.17647,1444.51144 L1581.17647,1444.51144 Z M903.529412,564.699671 L395.294118,564.699671 C301.891765,564.699671 225.882353,640.709082 225.882353,734.111435 L225.882353,734.111435 L225.882353,959.993788 C225.882353,1053.39614 301.891765,1129.40555 395.294118,1129.40555 L395.294118,1129.40555 L903.529412,1129.40555 L903.529412,564.699671 Z M1694.11765,688.144376 L1694.11765,1006.07379 C1759.73647,982.694965 1807.05882,920.577318 1807.05882,847.052612 C1807.05882,773.527906 1759.73647,711.5232 1694.11765,688.144376 L1694.11765,688.144376 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconAnnouncement",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconAnnouncementLine"
return n}(u["Component"])
f.glyphName="announcement"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},efQU:function(e,t,n){"use strict"
n.d(t,"h",(function(){return o}))
n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return s}))
n.d(t,"d",(function(){return u}))
n.d(t,"e",(function(){return l}))
n.d(t,"f",(function(){return c}))
n.d(t,"g",(function(){return d}))
n.d(t,"c",(function(){return f}))
var r=n("17x9")
var i=n.n(r)
const o={id:i.a.string,displayName:i.a.string,avatarUrl:i.a.string,color:i.a.string}
const a={text:i.a.string,variant:i.a.string}
const s={id:i.a.string,longName:i.a.string,enrollmentType:i.a.string}
const u={context:i.a.shape({})}
const l={items:i.a.arrayOf(i.a.object),missingItemsExpanded:i.a.bool,nextUrl:i.a.string}
const c=i.a.oneOf(["small","medium","large"])
const d=i.a.oneOfType([i.a.bool,i.a.shape({excused:i.a.bool,graded:i.a.bool,has_feedback:i.a.bool,late:i.a.bool,missing:i.a.bool,needs_grading:i.a.bool,submitted:i.a.bool})])
const f={author_avatar_url:i.a.string,author_name:i.a.string,comment:i.a.string,is_media:i.a.bool}},f66B:function(e,t,n){var r=n("1seS")
var i=n("45zb")
var o=n("bbcx")
var a=n("2Nju")
var s=n("5xAX")
var u=n("DmXP")
var l=Date.prototype.getTime
function c(e,t,n){var r=n||{}
if(r.strict?o(e,t):e===t)return true
if(!e||!t||"object"!==typeof e&&"object"!==typeof t)return r.strict?o(e,t):e==t
return p(e,t,r)}function d(e){return null===e||void 0===e}function f(e){if(!e||"object"!==typeof e||"number"!==typeof e.length)return false
if("function"!==typeof e.copy||"function"!==typeof e.slice)return false
if(e.length>0&&"number"!==typeof e[0])return false
return true}function p(e,t,n){var o,p
if(typeof e!==typeof t)return false
if(d(e)||d(t))return false
if(e.prototype!==t.prototype)return false
if(i(e)!==i(t))return false
var h=a(e)
var m=a(t)
if(h!==m)return false
if(h||m)return e.source===t.source&&s(e)===s(t)
if(u(e)&&u(t))return l.call(e)===l.call(t)
var g=f(e)
var b=f(t)
if(g!==b)return false
if(g||b){if(e.length!==t.length)return false
for(o=0;o<e.length;o++)if(e[o]!==t[o])return false
return true}if(typeof e!==typeof t)return false
try{var v=r(e)
var y=r(t)}catch(e){return false}if(v.length!==y.length)return false
v.sort()
y.sort()
for(o=v.length-1;o>=0;o--)if(v[o]!=y[o])return false
for(o=v.length-1;o>=0;o--){p=v[o]
if(!c(e[p],t[p],n))return false}return true}e.exports=c},fWdU:function(e,t,n){"use strict"
n.d(t,"c",(function(){return l}))
n.d(t,"b",(function(){return a}))
n.d(t,"a",(function(){return s}))
var r=n("VTBJ")
var i=n("q1tI")
var o=n.n(i)
const a="(max-width: 37em)"
const s="(max-width: 56em)"
class u{constructor(){this.size="large"
this.interestedParties=[]
this.mediaQueries={}
this.onChangeLayout=e=>{let t="large"
e.target===this.mediaQueries.small?t=e.matches?"small":"medium":e.target===this.mediaQueries.medium&&(t=e.matches?"medium":"large")
if(t!==this.size){this.size=t
this.notifyAll()}}}setup(){if(!window.matchMedia)return
this.mediaQueries.small=window.matchMedia(a)
this.mediaQueries.medium=window.matchMedia(s)
this.mediaQueries.small.matches?this.size="small":this.mediaQueries.medium.matches?this.size="medium":this.size="large"
if("onchange"in this.mediaQueries.medium){this.mediaQueries.medium.onchange=this.onChangeLayout
this.mediaQueries.small.onchange=this.onChangeLayout}else{this.handleResize=()=>{window.clearTimeout(this.resizeTimer)
this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=0
this.onChangeSize()},100)}
window.addEventListener("resize",this.handleResize)}}teardown(){if("onchange"in this.mediaQueries.medium){this.mediaQueries.medium.onchange=null
this.mediaQueries.small.onchange=null}else{window.clearTimeout(this.resizeTimer)
window.removeEventListener("resize",this.handleResize)}}add(e){this.mediaQueries.medium||this.setup()
this.interestedParties.push(e)
return this.size}remove(e){const t=this.interestedParties.indexOf(e)
this.interestedParties.splice(t,1)
if(this.mediaQueries.medium&&0===this.interestedParties.length){this.teardown()
this.mediaQueries.medium=null}}notifyAll(){this.interestedParties.forEach(e=>{e.onChangeSize({size:this.size})})}onChangeSize(){let e="large"
this.mediaQueries.small.matches?e="small":this.mediaQueries.medium.matches&&(e="medium")
if(e!==this.size){this.size=e
this.notifyAll()}}}function l(){return function(e){class t extends o.a.Component{constructor(e){super(e)
const t=l.mqwatcher.add(this)
this.state={size:t}}componentWillUnmount(){l.mqwatcher.remove(this)}onChangeSize(e){this.setState({size:e.size})}render(){return o.a.createElement(e,Object.assign({},this.props,{responsiveSize:this.state.size}))}}t.propTypes=Object(r["a"])({},e.propTypes)
t.defaultProps=e.defaultProps?Object(r["a"])({},e.defaultProps):null
t.displayName="Responsive"+e.displayName
return t}}l.mqwatcher=new u},fvBP:function(e,t,n){"use strict"
n.d(t,"a",(function(){return hu}))
var r=n("VTBJ")
var i=n("q1tI")
var o=n.n(i)
var a=n("LvDl")
var s=n.n(a)
var u=n("J2CL")
var l=n("n12J")
var c=n("sTNg")
var d=n("6SzX")
var f=n("Xx/m")
var p=n("17x9")
var h=n.n(p)
var m=n("KQm4")
var g=n("1OyB")
var b=n("vuIU")
var v=n("Ji7U")
var y=n("LK+K")
var _=n("+ghn")
var E=n("f0Wu")
var C=n.n(E)
function O(e,t){D(e,t)
return C()().locale(e).tz(t)}function A(e,t,n){D(t,n)
return C.a.tz(e,[C.a.ISO_8601,"llll","LLLL","lll","LLL","ll","LL","l","L"],t,n)}function w(e){return C()(e,[C.a.ISO_8601]).isValid()}function k(){return C.a.tz.guess()}function x(e,t,n,r){var i=A(e,t,n)
var o="YYYY-MM-DDTHH:mm:ss.SSSZ"
return r?i.format(r):i.format(o)}function D(e,t){if(null==e)throw Error("locale must be specified")
if(null==t)throw Error("timezone must be specified")}var j={now:O,parse:A,browserTimeZone:k,isValid:w,toLocaleString:x}
var S=n("ZpMJ")
var I="en-US"
var B={defaultLocale:I,browserLocale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S["a"]
if(e)return e.language
if(!t)return I
var n=window.document.documentElement.lang
if(n)return n
var r=window.navigator&&window.navigator.languages&&window.navigator.languages.length
var i=window.navigator&&window.navigator.language
if(r)return window.navigator.languages[0]
if(i)return window.navigator.language||window.navigator.browserLanguage
return I}}
var T=n("gLvR")
var F={iso8601:function(e,t,n,r){var i=e[t]
if("undefined"===typeof i||""===i)return
var o=typeof i
if("string"!==typeof o)return new Error("Invalid ".concat(r," `").concat(t,"` of type `").concat(o,"` supplied to `").concat(n,"`, expected ")+"an ISO 8601 formatted string.")
var a=/^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
if("string"===typeof i&&!i.match(a))return new Error("Invalid ".concat(r," `").concat(t,"` `").concat(i,"` supplied to `").concat(n,"`, expected ")+"an ISO 8601 formatted string.")}}
F.iso8601.isRequired=Object(T["a"])(F.iso8601)
var P=n("xr/Z")
var L=n("GLQS")
var M=n("Yq1M")
n("OAow")
var N=n("3zPy")
var R=n.n(N)
var q=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var z=q?h.a.oneOfType([h.a.element,h.a.instanceOf(Element)]):h.a.element
var K=n("ODXe")
var U=n("mEkE")
var W=n("D7aC")
var G=n("1pJJ")
var H={}
function Y(e,t){if(!U["a"])return 16
var n=e||Object(W["a"])(e).documentElement
if(!t&&H[n])return H[n]
var r=parseInt(Object(G["a"])(n).getPropertyValue("font-size"))
H[n]=r
return r}function V(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}function Q(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var r=V(e),i=Object(K["a"])(r,2),o=i[0],a=i[1]
return"rem"===a?o*Y():"em"===a?o*Y(n):o}function Z(e,t){var n=Object.keys(e)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var r=n[0]
var i=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===i.indexOf(r))throw new Error("Invalid key `".concat(r,"` in query object. Valid keys should consist of one of the following: ")+"".concat(i.join(", ")," (case sensitive)"))
var o=e[r]
if("string"!==typeof o&&"number"!==typeof o)throw new Error("The value of the query object must be a string or number.")
if(!o)throw new Error("No value supplied for query object")
return"(".concat(X(r.toLowerCase()),": ").concat(Q(o,t),"px)")}function X(e){return e.slice(0,3)+"-"+e.slice(3)}var $={validQuery:function(e,t,n){try{Z(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(e.message))}},placement:h.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:h.a.oneOfType([z,h.a.func]),constrain:h.a.oneOfType([z,h.a.func,h.a.oneOf(["window","scroll-parent","parent","none"])])}
var J=n("Ff2n")
var ee=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var te=ee?h.a.oneOfType([h.a.element,h.a.instanceOf(Element)]):h.a.element
var ne={placement:h.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:h.a.oneOfType([te,h.a.func]),constrain:h.a.oneOfType([te,h.a.func,h.a.oneOf(["window","scroll-parent","parent","none"])])}
var re=n("qqFd")
function ie(e,t){var n=Object(re["a"])(e)
var r=Object(re["a"])(t)
return!(!n||!r)&&(n.contains?n.contains(r):n.compareDocumentPosition?n===r||!!(16&n.compareDocumentPosition(r)):oe(n,r))}function oe(e,t){var n=t
while(n){if(n===e)return true
n=n.parentNode}return false}var ae=S["a"]?ie:oe
function se(e){var t=e&&Object(re["a"])(e)
return t&&t.ownerDocument||document}function ue(e){var t={top:0,left:0,height:0,width:0}
if(!S["a"])return t
var n=Object(re["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var r=e===document?document:se(n)
var i=r&&r.documentElement
if(!i||!ae(i,n))return t
var o=n.getBoundingClientRect()
var a
for(a in o)t[a]=o[a]
if(r!==document){var s=r.defaultView.frameElement
if(s){var u=ue(s)
t.top+=u.top
t.bottom+=u.top
t.left+=u.left
t.right+=u.left}}return{top:t.top+(window.pageYOffset||i.scrollTop)-(i.clientTop||0),left:t.left+(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:r.body.clientWidth-t.width-t.left,bottom:r.body.clientHeight-t.height-t.top}}function le(e){var t=e&&Object(re["a"])(e)
var n=se(t)
return n&&(n.defaultView||n.parentWindow)}function ce(e){var t={}
if(S["a"]){var n=e&&Object(re["a"])(e)
t=n?le(e).getComputedStyle(n):{}}return t}function de(e){var t=[]
if(!S["a"])return t
var n=Object(re["a"])(e)
if(n){var r=ce(n)||{}
var i=r.position
if("fixed"===i)return[n.ownerDocument]
var o=n
while(o&&1===o.nodeType&&(o=o.parentNode)){var a=void 0
try{a=ce(o)}catch(e){}if("undefined"===typeof a||null===a){t.push(o)
return t}var s=a,u=s.overflow,l=s.overflowX,c=s.overflowY;/(auto|scroll|overlay)/.test(u+c+l)&&("absolute"!==i||["relative","absolute","fixed"].indexOf(a.position)>=0)&&t.push(o)}t.push(n.ownerDocument.body)
n.ownerDocument!==document&&t.push(n.ownerDocument.defaultView)}return t}function fe(e){var t=[]
if(!S["a"])return t
var n=Object(re["a"])(e)
if(n){var r=n
while((r=r.parentNode)&&r&&1===r.nodeType&&"BODY"!==r.tagName){var i=ce(r)
var o=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("-moz-transform")||i.getPropertyValue("-ms-transform")||i.getPropertyValue("-o-transform")||i.getPropertyValue("transform")||"none"
var a="none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o
"static"===i.position&&a||t.push(r)}t.push(se(n).body)}return t}var pe={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function he(e,t){return ge(e,(function(e,t){return[pe[e],t]}),t)}function me(e,t){return ge(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?pe[e]:e}))}),t)}function ge(e,t,n){var r=Array.isArray(e)?e:e.split(" "),i=Object(K["a"])(r,2),o=i[0],a=i[1]
var s=t(o,a).filter((function(e){return e}))
return n?s.join(n):s}function be(e,t,n){if(!e||"offscreen"===n.placement){var r=!n.container&&e
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:r?"none":null}}}var i=new ye(e,t,n)
return{placement:i.placement,style:i.style}}var ve=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(g["a"])(this,e)
this.node=Object(re["a"])(t)
"string"===typeof n?this.placement=Ae(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=ue(this.node)
this._offset=Ce(r,this.size)}Object(b["a"])(e,[{key:"calculateOffset",value:function(e){var t={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(K["a"])(e,2),r=n[0],i=n[1]
if(["start","end"].indexOf(r)>=0){var o=[i,r]
r=o[0]
i=o[1]}var a=0
var s=0
"undefined"!==typeof t[r]&&(a=t[r])
"undefined"!==typeof t[i]&&(s=t[i])
return _e([Ce({top:a,left:s},this.size),Ee(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(e){return se(this.node).body===e?0:e.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return he(this.placement)}},{key:"scrollParentsOffset",get:function(){var e=de(this.node)
var t=0
var n=0
for(var r=1;r<e.length;r++){var i=e[r]
var o=e[r-1]
t+=this.normalizeScrollTop(i)-this.normalizeScrollTop(o)
n+=i.scrollLeft-o.scrollLeft}return{top:t,left:n}}},{key:"positionedParentsOffset",get:function(){var e=fe(this.node)
var t=se(this.node)
var n=e.length>1?0:ue(t.documentElement).top
var r=0
var i=0
for(var o=1;o<e.length;o++){var a=ue(e[o])
var s=ue(e[o-1])
n+=s.top-a.top
r+=s.left-a.left
if(e[o]===t.body){n+=a.top
r+=a.left}i+=this.normalizeScrollTop(e[o])}n+=i
return{top:n,left:r}}}])
return e}()
var ye=function(){function e(t,n,r){Object(g["a"])(this,e)
this.options=r||{}
var i=this.options,o=i.container,a=i.constrain,s=i.placement,u=i.over
if(!t||"offscreen"===s)return
this.container=o||se(t).body
this.element=new ve(t,s,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new ve(n||this.container,u?this.element.placement:this.element.mirroredPlacement)
"window"===a?this.constrainTo(le(t)):"scroll-parent"===a?this.constrainTo(de(this.target.node)[0]):"parent"===a?this.constrainTo(this.container):"function"===typeof a?this.constrainTo(Object(re["a"])(a.call(null))):"object"===typeof a&&this.constrainTo(Object(re["a"])(a))}Object(b["a"])(e,[{key:"overflow",value:function(e){var t=le(e)
var n=ue(e)
var r=ue(t)
var i=_e([this.target.position,this.offset])
var o={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=i.left+o.left
var s=i.left+this.element.width+o.left
var u=i.top+o.top
var l=i.top+this.element.height+o.top
"bottom"===this.element.placement[0]?u-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(l+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(s+=this.element.width-this.target.width)
"top"===this.element.placement[1]?u-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(l+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(s+=this.element.width+this.target.width)
var c=e===t?n:{top:r.top+n.top,bottom:n.top+n.height,left:r.left+n.left,right:n.left+n.width}
return{top:u<c.top?c.top-u:0,bottom:l>c.bottom?l-c.bottom:0,left:a<c.left?c.left-a:0,right:s>c.right?s-c.right:0}}},{key:"constrainTo",value:function(e){if(!e)return
var t=this.overflow(e)
var n={top:t.top>0,bottom:t.bottom>0,left:t.left>0,right:t.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(t.bottom<t.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(t.bottom>t.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(t.left>t.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(t.left<t.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var e=this.target.calculateOffset(this.element.placement),t=e.top,n=e.left
var r=_e([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:t-r.top,left:n-r.left}}},{key:"placement",get:function(){return we(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var e=le(this.target.node)
var t=_e([this.target.position,this.offset]),n=t.left,r=t.top
if(S["a"]&&e.matchMedia){var i=e.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||e.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!i){n=Math.round(n)
r=Math.round(r)}}return{left:n,top:r}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return e}()
function _e(e){return e.reduce((function(e,t){return{top:e.top+t.top,left:e.left+t.left}}),{top:0,left:0})}function Ee(e,t){var n=e.top,r=e.left
"bottom"===t[0]&&(n=0-parseFloat(n,10))
"end"===t[0]&&(r=0-parseFloat(r,10))
return{top:n,left:r}}function Ce(e,t){var n=e.left,r=e.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*t.width:parseFloat(n,10)
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*t.height:parseFloat(r,10)
return{top:r,left:n}}function Oe(e){var t=Object(K["a"])(e,2),n=t[0],r=t[1]
if("center"===n||"stretch"===n){var i=[r,n]
n=i[0]
r=i[1]}return[n,r]}function Ae(e){var t=e.split(" ")
1===t.length&&(t=[e,"center"])
return Oe(t)}function we(e){return e.join(" ")}var ke=n("rePB")
var xe=n("TSYQ")
var De=n.n(xe)
var je=n("Ok0q")
var Se=n("FzsH")
var Ie=n("D7px")
var Be=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(J["a"])(e,["children"])
return Object(Ie["a"])(t,n)}}])
n.displayName="ComponentIdentifier"
return n}(i["Component"])
Be.propTypes={children:h.a.node}
Be.defaultProps={children:null}
Be.pick=function(e,t){var n
o.a.Children.forEach(t,(function(t){Object(Se["a"])(t,[e])&&(n=t)}))
return n}
var Te=n("2AoT")
function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof e){if(!(e.prototype&&e.prototype.isReactComponent))return e(t)
return o.a.createElement(e,t)}return e}var Pe=function(){var e
if(S["a"]&&window.requestAnimationFrame&&window.cancelAnimationFrame)e=function(e){var t=window.requestAnimationFrame(e)
return{cancel:function(){return window.cancelAnimationFrame(t)}}}
else{var t=(new Date).getTime()
e=function(e){var n=(new Date).getTime()
var r=Math.max(0,16-(n-t))
var i=setTimeout(e,r)
t=n
return{cancel:function(){return clearTimeout(i)}}}}return e}()
function Le(e,t){var n=Object(re["a"])(e)
var r=[]
var i=ue(n)||{}
var o=false
function a(){if(false===o){var e=ue(n)||{}
var s=e.top!==i.top||e.left!==i.left||e.right!==i.right||e.bottom!==i.bottom||e.width!==i.width||e.height!==i.height
s&&"function"===typeof t&&t(e)
i=e
r.push(Pe(a))}}a()
return{remove:function(){o=true
r.forEach((function(e){return e.cancel()}))}}}var Me=n("Irhw")
var Ne=n("YRbC")
var Re=n.n(Ne)
var qe=n("vUIO")
function ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,i,o,a
var s=0
var u=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var c=!!n.leading
var d="maxWait"in n
var f=!("trailing"in n)||!!n.trailing
var p=d?Math.max(+n.maxWait||0,t):0
function h(t){var n=r
var a=i
r=i=void 0
s=t
if(true!==l){o=e.apply(a,n)
return o}}function m(e){s=e
u.push(setTimeout(v,t))
return c?h(e):o}function g(e){var n=e-a
var r=e-s
var i=t-n
return d?Math.min(i,p-r):i}function b(e){var n=e-a
var r=e-s
return"undefined"===typeof a||n>=t||n<0||d&&r>=p}function v(){var e=Date.now()
if(b(e))return y(e)
u.push(setTimeout(v,g(e)))}function y(e){C()
if(f&&r)return h(e)
r=i=void 0
return o}function _(){l=true
C()
s=0
r=a=i=void 0}function E(){return 0===u.length?o:y(Date.now())}function C(){u.forEach((function(e){return clearTimeout(e)}))
u=[]}function O(){var e=Date.now()
var n=b(e)
for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c]
r=l
i=this
a=e
if(n){if(0===u.length)return m(a)
if(d){u.push(setTimeout(v,t))
return h(a)}}0===u.length&&u.push(setTimeout(v,t))
return o}O.cancel=_
O.flush=E
return O}var Ke=n("i8i4")
var Ue=n.n(Ke)
var We=n("ELJd")
var Ge=n("qZX/")
var He="@@bidirectional"
var Ye={ltr:"ltr",rtl:"rtl"}
var Ve={CONTEXT_KEY:He,DIRECTION:Ye,types:Object(ke["a"])({},He,h.a.shape({dir:h.a.oneOf(Object.values(Ye))})),makeTextDirectionContext:function(e){return Object(ke["a"])({},He,{dir:e})},getTextDirectionContext:function(e){if(e)return e[He]}}
var Qe,Ze,Xe
var $e=function(){if(Qe)return Qe
if(S["a"]){var e=document.documentElement
Ze=e.getAttribute("dir")
Qe=Ze||ce(e).direction
if(!Xe){Xe=new MutationObserver((function(){var t=e.getAttribute("dir")
t&&t!==Ze&&(Ze=Qe=t)}))
Xe.observe(e,{attributes:true})}return Qe}}
function Je(e){if(S["a"]){if("undefined"===typeof e||e===document.documentElement)return $e()
return e.getAttribute("dir")||ce(e).direction}}var et=Ve.DIRECTION,tt=Ve.getTextDirectionContext
var nt=Object(Ge["a"])((function(e){var t,n
return n=t=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"dir",get:function(){var e=tt(this.context)||{}
return e.dir||this.props.dir||Je()}},{key:"rtl",get:function(){return this.dir===et.rtl}},{key:"ltr",get:function(){return this.dir===et.ltr}}])
return n}(e),t.propTypes=Object(r["a"])({},e.propTypes,{dir:h.a.oneOf(Object.values(Ve.DIRECTION))}),t.contextTypes=Object(r["a"])({},e.contextTypes,{},Ve.types),n}))
nt.DIRECTION=et
var rt,it,ot,at
var st=(rt=nt(),rt(it=(at=ot=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r.state={mountNode:r.findMountNode(e)}
return r}Object(b["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)}},{key:"componentDidUpdate",value:function(e){var t=this.findMountNode(this.props)
t!==this.state.mountNode&&this.setState({mountNode:t})
this.props.open&&!e.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)
!this.props.open&&e.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"componentWillUnmount",value:function(){this.removeNode()
this.props.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"render",value:function(){var e=this.props.children
return this.props.open&&o.a.Children.count(e)>0?Ue.a.createPortal(e,this.insertNode()):null}},{key:"removeNode",value:function(){if(this.DOMNode&&this.DOMNode.parentNode&&"function"===typeof this.DOMNode.parentNode.removeChild){this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}}},{key:"insertNode",value:function(){var e=this.props,t=(e.open,e.insertAt),n=(e.onOpen,e.onClose,e.mountNode,e.children,e.elementRef),i=Object(J["a"])(e,["open","insertAt","onOpen","onClose","mountNode","children","elementRef"])
if(!this.DOMNode){var o=document.createElement("span")
var a=Object(r["a"])({},Object(We["b"])(i),{dir:this.dir})
Object.keys(a).forEach((function(e){o.setAttribute(e,a[e])}))
n(o)
this.DOMNode=o}this.DOMNode.parentNode!==this.state.mountNode&&("bottom"===t?this.state.mountNode.appendChild(this.DOMNode):this.state.mountNode.insertBefore(this.DOMNode,this.state.mountNode.firstChild))
return this.DOMNode}},{key:"findMountNode",value:function(e){var t
"function"===typeof e.mountNode?t=e.mountNode():e.mountNode&&(t=e.mountNode)
t&&t.nodeName||(t=document.body)
return t}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="ReactPortal"
return n}(o.a.Component),ot.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([te,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func},ot.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:void 0,children:null,elementRef:function(e){}},at))||it)
var ut,lt,ct,dt
var ft=(ut=nt(),ut(lt=(dt=ct=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"componentDidMount",value:function(){this.renderPortal(this.props)}},{key:"shouldComponentUpdate",value:function(e,t){return!(Object(qe["a"])(this.props,e)&&Object(qe["a"])(this.state,t))}},{key:"componentWillReceiveProps",value:function(e){this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.removePortal(this.props)}},{key:"render",value:function(){return null}},{key:"renderPortal",value:function(e){var t=this
var n=e.open,i=e.insertAt,a=e.onOpen,s=(e.onClose,e.elementRef),u=e.children,l=Object(J["a"])(e,["open","insertAt","onOpen","onClose","elementRef","children"])
var c=!this.DOMNode
var d=this.mountNode
var f=u
"string"===typeof f&&f.length>0&&(f=o.a.createElement("span",null,f))
if(n&&o.a.Children.count(f)>0){if(!this.DOMNode){var p=document.createElement("span")
var h=Object(r["a"])({},Object(We["b"])(l),{dir:this.dir})
Object.keys(h).forEach((function(e){p.setAttribute(e,h[e])}))
s(p)
this.DOMNode=p}this.DOMNode.parentNode!==d&&("bottom"===i?d.appendChild(this.DOMNode):d.insertBefore(this.DOMNode,d.firstChild))
var m=function(){(c||!t.props.open&&n)&&"function"===typeof a&&a(t.DOMNode)}
Ue.a.unstable_renderSubtreeIntoContainer(this,f,this.DOMNode,m)}else this.removePortal(e)}},{key:"removePortal",value:function(e){var t
if(this.DOMNode){t=Ue.a.unmountComponentAtNode(this.DOMNode)
this.DOMNode.parentNode&&this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}t&&"function"===typeof e.onClose&&e.onClose()}},{key:"mountNode",get:function(){var e
"function"===typeof this.props.mountNode?e=this.props.mountNode():this.props.mountNode&&(e=this.props.mountNode)
e&&e.nodeName||(e=document.body)
return e}},{key:"DOMNode",get:function(){return this._node},set:function(e){this._node=e}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="SubtreePortal"
return n}(i["Component"]),ct.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([te,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func},ct.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}},dt))||lt)
var pt="function"===typeof Ue.a.createPortal
var ht=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handleElementRef=function(t){if(t){e.DOMNode=t
"function"===typeof e.props.elementRef&&e.props.elementRef(t)}}
return e}Object(b["a"])(n,[{key:"render",value:function(){return pt?o.a.createElement(st,Object.assign({},this.props,{elementRef:this.handleElementRef})):o.a.createElement(ft,Object.assign({},this.props,{elementRef:this.handleElementRef}))}}])
n.displayName="Portal"
return n}(i["Component"])
ht.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([te,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func}
ht.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}}
var mt=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var gt,bt,vt,yt,_t,Et,Ct,Ot,At,wt,kt,xt,Dt,jt,St,It
var Bt={componentId:"eGKPI",template:function(e){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var Tt=(gt=Object(L["a"])("8.0.0",null,"Use Position's `renderTarget` prop instead."),bt=Object(M["a"])(),gt(vt=bt(vt=(_t=yt=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),yt.displayName="PositionTarget",yt.locatorAttribute="data-position-target",_t))||vt)||vt)
var Ft=(Et=Object(L["a"])("8.0.0",null,"Use Posiition's `children` instead."),Ct=Object(M["a"])(),Et(Ot=Ct(Ot=(wt=At=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),At.displayName="PositionContent",At.propTypes={children:h.a.node,placement:ne.placement},At.locatorAttribute="data-position-content",wt))||Ot)||Ot)
var Pt=(kt=Object(L["a"])("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),xt=Object(M["a"])(),Dt=Object(je["g"])(mt,Bt),kt(jt=xt(jt=Dt(jt=(It=St=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var i
Object(g["a"])(this,n)
i=t.call(this,e)
i._timeouts=[]
i.handlePortalOpen=function(){i.position();(i.props.shouldTrackPosition||i.props.trackPosition)&&i.startTracking()
i._timeouts.push(setTimeout((function(){i.state.positioned&&"function"===typeof i.props.onPositioned&&i.props.onPositioned({top:i.state.style.top,left:i.state.style.left,placement:i.state.placement})}),0))}
i.position=function(){i.setState(Object(r["a"])({positioned:true},i.calculatePosition(i.props)))}
i.state=Object(r["a"])({positioned:false},i.calculatePosition(e))
i.position=ze(i.position,0,{leading:false,trailing:true})
i._id=i.props.id||Object(Me["a"])("Position")
return i}Object(b["a"])(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!Re()(this.state,t)||!Object(qe["a"])(this.props,e)||!Object(qe["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(e,t){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==e.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==e.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,r=n.style,i=n.placement
r&&t.style&&(i!==t.placement||r.top!==t.style.top||r.left!==t.style.left)&&this.props.onPositionChanged({top:r.top,left:r.left,placement:i})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(e){return clearTimeout(e)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(e){this.toggleLocatorAttribute(Object(re["a"])(this._content),n.contentLocatorAttribute,e)
this.toggleLocatorAttribute(Object(re["a"])(this._target),n.targetLocatorAttribute,e)}},{key:"toggleLocatorAttribute",value:function(e,t,n){if(e&&e.hasAttribute){n&&!e.hasAttribute(t)&&e.setAttribute(t,this._id)
!n&&e.hasAttribute(t)&&e.removeAttribute(t)}}},{key:"calculatePosition",value:function(e){return be(this._content,this._target,{placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY,constrain:e.constrain,container:e.mountNode,over:e.shouldPositionOverTarget||e.over})}},{key:"startTracking",value:function(){this._listener=this._listener||Le(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var e=this
var t=Be.pick(n.Content,this.props.children)
t||(t=Object(Ie["a"])(this.props.children))
if(t){var i
t=Object(Te["a"])(t,Object(ke["a"])({ref:function(t){e._content=t},style:Object(r["a"])({},t.props.style,{},this.state.style),className:De()((i={},Object(ke["a"])(i,Bt.root,true),Object(ke["a"])(i,t.props.className,t.props.className),i))},n.contentLocatorAttribute,this._id))
t=o.a.createElement(ht,{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},t)}return t}},{key:"renderTarget",value:function(){var e=this
var t=Be.pick(n.Target,this.props.children)
t||(t=Fe(this.props.renderTarget))
if(t)return Object(Te["a"])(t,Object(ke["a"])({ref:function(t){e._target=t}},n.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Fe(this.props.target)}},{key:"render",value:function(){var e=Object(ke["a"])({},n.locatorAttribute,this._id)
return o.a.createElement("span",e,this.renderTarget(),this.renderContent())}}])
n.displayName="Position"
return n}(i["Component"]),St.Target=Tt,St.Content=Ft,St.locatorAttribute="data-position",St.targetLocatorAttribute="data-position-target",St.contentLocatorAttribute="data-position-content",St.propTypes={renderTarget:h.a.oneOfType([h.a.node,h.a.func]),target:h.a.oneOfType([te,h.a.func]),placement:ne.placement,mountNode:ne.mountNode,insertAt:h.a.oneOf(["bottom","top"]),constrain:ne.constrain,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),id:h.a.string,shouldTrackPosition:h.a.bool,shouldPositionOverTarget:h.a.bool,onPositionChanged:h.a.func,onPositioned:h.a.func,children:h.a.node,trackPosition:h.a.bool,over:h.a.bool},St.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(e){},onPositionChanged:function(e){},children:null},It))||jt)||jt)||jt)
var Lt=h.a.oneOf(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out"])
var Mt=n("v+dX")
function Nt(e){var t=e.typography,n=e.colors,i=e.borders,o=e.spacing,a=e.shadows,s=e.stacking,u=e.breakpoints
e.transitions
return Object(r["a"])({fontFamily:t.fontFamily,color:n.textDarkest,colorPrimaryInverse:n.textLightest,borderStyle:i.style,borderColorPrimary:n.borderMedium,borderColorSecondary:n.borderDark,borderColorSuccess:n.borderSuccess,borderColorBrand:n.borderBrand,borderColorInfo:n.borderInfo,borderColorAlert:n.borderAlert,borderColorWarning:n.borderWarning,borderColorDanger:n.borderDanger,borderColorTransparent:"transparent",borderRadiusSmall:i.radiusSmall,borderRadiusMedium:i.radiusMedium,borderRadiusLarge:i.radiusLarge,debugOutlineColor:n.borderDebug,backgroundPrimary:n.backgroundLightest,backgroundSecondary:n.backgroundLight,backgroundPrimaryInverse:n.backgroundDarkest,backgroundBrand:n.backgroundBrand,backgroundInfo:n.backgroundInfo,backgroundAlert:n.backgroundAlert,backgroundSuccess:n.backgroundSuccess,backgroundDanger:n.backgroundDanger,backgroundWarning:n.backgroundWarning,arrowSize:"0.5rem",focusOutlineStyle:i.style,focusOutlineWidth:i.widthMedium,focusOutlineOffset:"0.3125rem",focusOutlineInset:"0rem",focusColorInfo:n.borderInfo,focusColorDanger:n.borderDanger,focusColorSuccess:n.borderSuccess,focusColorInverse:n.borderLightest,xSmallMaxWidth:u.xSmall,smallMaxWidth:u.small,mediumMaxWidth:u.medium,largeMaxWidth:u.large},Object(je["d"])("margin",o),{},Object(je["d"])("padding",o),{},Object(je["d"])("shadow",a),{},Object(je["d"])("stacking",s),{},Object(je["d"])("border",i))}Nt.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusColorInfo:e["ic-brand-primary"],backgroundBrand:e["ic-brand-primary"],backgroundInfo:e["ic-brand-primary"],borderColorBrand:e["ic-brand-primary"],borderColorInfo:e["ic-brand-primary"]}}
Nt["canvas-ams"]=function(e){var t=e.colors
return{focusColorInfo:t.borderBrand}}
var Rt={borderColorDefault:"borderColorPrimary",borderColorInverse:"borderColorTransparent",colorInverse:"colorPrimaryInverse",background:"backgroundPrimary",backgroundLight:"backgroundSecondary",backgroundInverse:"backgroundPrimaryInverse"}
var qt=Object(je["b"])({map:Rt,version:"8.0.0"})
var zt,Kt,Ut,Wt,Gt,Ht
var Yt={componentId:"fOyUs",template:function(e){return"\n\n.fOyUs_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%;overflow:visible}\n\n.fOyUs_bMes{display:inline}\n\n.fOyUs_UeJS{display:block}\n\n.fOyUs_cuDs{display:inline-block;vertical-align:middle}\n\n.fOyUs_desw{display:flex}\n\n.fOyUs_cKQL{display:inline-flex;vertical-align:middle}\n\n.fOyUs_EMjX{text-align:start}\n\n[dir=ltr] .fOyUs_EMjX{text-align:left}\n\n[dir=rtl] .fOyUs_EMjX{text-align:right}\n\n.fOyUs_ImeN,[dir=ltr] .fOyUs_ImeN,[dir=rtl] .fOyUs_ImeN{text-align:center}\n\n.fOyUs_dBtH{text-align:end}\n\n[dir=ltr] .fOyUs_dBtH{text-align:right}\n\n[dir=rtl] .fOyUs_dBtH{text-align:left}\n\n.fOyUs_fFew{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.fOyUs_dnJm{border-style:").concat(e.borderStyle||"inherit","}\n\n.fOyUs_eiMX,.fOyUs_dzKA{border-color:").concat(e.borderColorTransparent||"inherit","}\n\n.fOyUs_dsNY,.fOyUs_tIxX{border-color:").concat(e.borderColorPrimary||"inherit","}\n\n.fOyUs_fuLg{border-color:").concat(e.borderColorSecondary||"inherit","}\n\n.fOyUs_cLjf{border-color:").concat(e.borderColorBrand||"inherit","}\n\n.fOyUs_cXDj{border-color:").concat(e.borderColorInfo||"inherit","}\n\n.fOyUs_fjbA{border-color:").concat(e.borderColorSuccess||"inherit","}\n\n.fOyUs_fBpf{border-color:").concat(e.borderColorWarning||"inherit","}\n\n.fOyUs_bMrG{border-color:").concat(e.borderColorAlert||"inherit","}\n\n.fOyUs_fdvn{border-color:").concat(e.borderColorDanger||"inherit","}\n\n.fOyUs_fKyb{background:none;color:").concat(e.color||"inherit","}\n\n.fOyUs_fZwI,.fOyUs_kXoP{background:").concat(e.backgroundPrimary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_dUgE,.fOyUs_bvKN{background:").concat(e.backgroundSecondary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_fzxW,.fOyUs_elGp{background:").concat(e.backgroundPrimaryInverse||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_NGNZ{background:").concat(e.backgroundBrand||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fYBY{background:").concat(e.backgroundInfo||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_feZy{background:").concat(e.backgroundAlert||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_qidh{background:").concat(e.backgroundSuccess||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fKOP{background:").concat(e.backgroundDanger||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_eOYc{background:").concat(e.backgroundWarning||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.fOyUs_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.fOyUs_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.fOyUs_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.fOyUs_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.fOyUs_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.fOyUs_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.fOyUs_fhgP{overflow-x:hidden}\n\n.fOyUs_dzYG{overflow-x:auto}\n\n.fOyUs_divt{overflow-y:hidden}\n\n.fOyUs_fKlg{overflow-y:auto}\n\n.fOyUs_cBHs{position:relative}\n\n.fOyUs_cSap{position:fixed}\n\n.fOyUs_fuLp{position:absolute}\n\n.fOyUs_bZzT{position:-webkit-sticky;position:sticky}\n\n.fOyUs_eWbJ.fOyUs_cBHs:before{border-color:").concat(e.focusOutlineColorDefault||"inherit",";border-style:").concat(e.focusOutlineStyle||"inherit",";border-width:").concat(e.focusOutlineWidth||"inherit",';content:"";opacity:0;pointer-events:none;position:absolute}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cnfU:before{transform:scale(0.95);transition:all 0.2s}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr:before{bottom:calc(').concat(e.focusOutlineOffset||"inherit","*-1);left:calc(").concat(e.focusOutlineOffset||"inherit","*-1);right:calc(").concat(e.focusOutlineOffset||"inherit","*-1);top:calc(").concat(e.focusOutlineOffset||"inherit","*-1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB:before{bottom:").concat(e.focusOutlineInset||"inherit",";left:").concat(e.focusOutlineInset||"inherit",";right:").concat(e.focusOutlineInset||"inherit",";top:").concat(e.focusOutlineInset||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_beQo:before{border-radius:inherit}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bnCe:before{border-radius:0}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs:focus{outline:none}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fmDy:focus:before,.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dvYc:before{opacity:1;transform:scale(1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fuTR:before{border-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dwHj:before{border-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_NhxI:before{border-color:").concat(e.focusColorSuccess||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fsVi:before{border-color:").concat(e.focusColorDanger||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes{outline-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes:before{border-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_fmDy:focus,.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_dvYc{outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fuTR{outline-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_dwHj{outline-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fsVi{outline-color:").concat(e.focusColorDanger||"inherit","}")},root:"fOyUs_bGBk","display--inline":"fOyUs_bMes","display--block":"fOyUs_UeJS","display--inline-block":"fOyUs_cuDs","display--flex":"fOyUs_desw","display--inline-flex":"fOyUs_cKQL","textAlign--start":"fOyUs_EMjX","textAlign--center":"fOyUs_ImeN","textAlign--end":"fOyUs_dBtH",withVisualDebug:"fOyUs_fFew",withBorder:"fOyUs_dnJm","borderColor--inverse":"fOyUs_eiMX","borderColor--transparent":"fOyUs_dzKA","borderColor--default":"fOyUs_dsNY","borderColor--primary":"fOyUs_tIxX","borderColor--secondary":"fOyUs_fuLg","borderColor--brand":"fOyUs_cLjf","borderColor--info":"fOyUs_cXDj","borderColor--success":"fOyUs_fjbA","borderColor--warning":"fOyUs_fBpf","borderColor--alert":"fOyUs_bMrG","borderColor--danger":"fOyUs_fdvn","background--transparent":"fOyUs_fKyb","background--default":"fOyUs_fZwI","background--primary":"fOyUs_kXoP","background--light":"fOyUs_dUgE","background--secondary":"fOyUs_bvKN","background--inverse":"fOyUs_fzxW","background--primary-inverse":"fOyUs_elGp","background--brand":"fOyUs_NGNZ","background--info":"fOyUs_fYBY","background--alert":"fOyUs_feZy","background--success":"fOyUs_qidh","background--danger":"fOyUs_fKOP","background--warning":"fOyUs_eOYc","stacking--topmost":"fOyUs_fQrx","stacking--above":"fOyUs_dtZX","stacking--below":"fOyUs_fCiV","stacking--deepest":"fOyUs_dJEE","shadow--topmost":"fOyUs_fxuY","shadow--resting":"fOyUs_bxuL","shadow--above":"fOyUs_bIta","overflowX--hidden":"fOyUs_fhgP","overflowX--auto":"fOyUs_dzYG","overflowY--hidden":"fOyUs_divt","overflowY--auto":"fOyUs_fKlg","position--relative":"fOyUs_cBHs","position--fixed":"fOyUs_cSap","position--absolute":"fOyUs_fuLp","position--sticky":"fOyUs_bZzT",focus:"fOyUs_eWbJ",focusAnimation:"fOyUs_cnfU","focusPosition--offset":"fOyUs_cBtr","focusPosition--inset":"fOyUs_bFwB","focusRing--radiusInherit":"fOyUs_beQo","focusRing--radiusNone":"fOyUs_bnCe","focusRing--radiusSmall":"fOyUs_cmRt","focusRing--radiusMedium":"fOyUs_eeJl","focusRing--radiusLarge":"fOyUs_TYCL",shouldUseBrowserFocus:"fOyUs_fmDy",withFocusOutline:"fOyUs_dvYc","focusColor--info":"fOyUs_fuTR","focusColor--inverse":"fOyUs_dwHj","focusColor--success":"fOyUs_NhxI","focusColor--danger":"fOyUs_fsVi"}
var Vt=(zt=Object(L["a"])("8.0.0",{focused:"withFocusOutline",visualDebug:"withVisualDebug"}),Kt=nt(),Ut=Object(je["g"])(Nt,Yt,qt),zt(Wt=Kt(Wt=Ut(Wt=(Ht=Gt=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handleElementRef=function(t){"function"===typeof e.props.elementRef&&e.props.elementRef(t)
e._element=t}
e.verifyUniformValues=function(e,t){if("string"!==typeof t)return false
return t.trim().split(" ").every((function(t){return e===t}))}
return e}Object(b["a"])(n,[{key:"componentDidMount",value:function(){false}},{key:"render",value:function(){var e,t
var i=this.props,a=i.children,s=i.textAlign,u=i.background,l=i.display,c=i.withVisualDebug,d=i.width,f=i.height,p=i.minWidth,h=i.minHeight,m=i.maxWidth,g=i.maxHeight,b=i.overflowX,v=i.overflowY,y=i.stacking,_=i.shadow,E=i.position,C=i.focusPosition,O=i.focusColor,A=i.shouldAnimateFocus,w=i.borderColor,k=i.className,x=Object(J["a"])(i,["children","textAlign","background","display","withVisualDebug","width","height","minWidth","minHeight","maxWidth","maxHeight","overflowX","overflowY","stacking","shadow","position","focusPosition","focusColor","shouldAnimateFocus","borderColor","className"])
var D=Object(Mt["a"])(n,this.props)
var j=this.withFocusOutline
var S="relative"===E||"inline"===l&&"inset"===C?(e={},Object(ke["a"])(e,Yt.focus,true),Object(ke["a"])(e,Yt.withFocusOutline,j),Object(ke["a"])(e,Yt.shouldUseBrowserFocus,"undefined"===typeof j),Object(ke["a"])(e,Yt[this.focusRingRadius],true),Object(ke["a"])(e,Yt["focusPosition--".concat(C)],true),Object(ke["a"])(e,Yt["focusColor--".concat(O)],true),Object(ke["a"])(e,Yt.focusAnimation,A),e):{}
var I=De()(Object(r["a"])((t={},Object(ke["a"])(t,Yt.root,true),Object(ke["a"])(t,Yt.withVisualDebug,c||this.props.visualDebug),Object(ke["a"])(t,Yt.withBorder,this.withBorder),Object(ke["a"])(t,Yt["borderColor--".concat(w)],this.withBorder),Object(ke["a"])(t,Yt["textAlign--".concat(s)],s),Object(ke["a"])(t,Yt["background--".concat(u)],u),Object(ke["a"])(t,Yt["display--".concat(l)],l&&"auto"!==l),Object(ke["a"])(t,Yt["overflowX--".concat(b)],b&&"visible"!==b),Object(ke["a"])(t,Yt["overflowY--".concat(v)],v&&"visible"!==v),Object(ke["a"])(t,Yt["stacking--".concat(y)],y),Object(ke["a"])(t,Yt["shadow--".concat(_)],_&&"none"!==_),Object(ke["a"])(t,Yt["position--".concat(E)],"static"!==E),t),S,Object(ke["a"])({},k,k)))
return o.a.createElement(D,Object.assign({},Object(We["b"])(x),{className:I,style:Object(r["a"])({},this.spacingStyle,{},this.borderStyle,{},this.offsetStyle,{width:d,height:f,minWidth:p,minHeight:h,maxWidth:m,maxHeight:g},this.styleProps),ref:this.handleElementRef}),a)}},{key:"withFocusOutline",get:function(){if("undefined"===typeof this.props.withFocusOutline&&"undefined"===typeof this.props.focused)return
var e=this.props
e.position,e.display,e.focusPosition
var t=this.props.focused||this.props.withFocusOutline
return t}},{key:"focusRingRadius",get:function(){var e=this.props.borderRadius,t=void 0===e?"":e
var n="focusRing--radius"
var r=t.trim().split(" ")[0]
if(this.verifyUniformValues(r,t)){var i=function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}
if(["small","medium","large"].includes(r))return"".concat(n).concat(i(r))
if(["circle","pill"].includes(r))return"".concat(n,"Inherit")}return"".concat(n,"None")}},{key:"withBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,n=e.borderWidth
if(this.dir===nt.DIRECTION.rtl){t=Object(je["e"])(t)
n=Object(je["f"])(n)}return{borderRadius:Object(je["c"])("View",this.theme,t,"borderRadius"),borderWidth:Object(je["c"])("View",this.theme,n,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,n=e.padding
if("rtl"===this.dir){t=Object(je["f"])(t)
n=Object(je["f"])(n)}return{margin:Object(je["c"])("View",this.theme,t,"margin"),padding:Object(je["c"])("View",this.theme,n,"padding")}}},{key:"offsetStyle",get:function(){var e=this.props,t=e.insetBlockStart,n=e.insetBlockEnd,i=e.insetInlineStart,o=e.insetInlineEnd
var a="rtl"===this.dir
var s={top:t,insetBlockStart:t}
var u={bottom:n,insetBlockEnd:n}
var l={left:a?o:i,right:a?i:o,insetInlineStart:i,insetInlineEnd:o}
return Object(r["a"])({},s,{},u,{},l)}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,n=e.style
var r=Object(We["c"])(n||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage","pointerEvents"])
t&&(r.cursor=t)
return r}}])
n.displayName="View"
return n}(i["Component"]),Gt.propTypes={as:h.a.elementType,elementRef:h.a.func,display:h.a.oneOf(["auto","inline","block","inline-block","flex","inline-flex"]),overflowX:h.a.oneOf(["auto","hidden","visible"]),overflowY:h.a.oneOf(["auto","hidden","visible"]),margin:je["a"].spacing,padding:je["a"].spacing,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxHeight:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minHeight:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,textAlign:h.a.oneOf(["start","center","end"]),borderWidth:je["a"].borderWidth,borderRadius:je["a"].borderRadius,borderColor:L["a"].deprecatePropValues(h.a.oneOf(["transparent","primary","secondary","brand","info","success","warning","alert","danger","default","inverse"]),["default","inverse"],(function(e){var t=e.propName,n=e.propValue
return"In version 8.0.0, the value '".concat(n,"' for `").concat(t,"` will be changed to ").concat(function(){if("default"===n)return"'primary'"
if("inverse"===n)return"'transparent'"}(),". Use that value instead.")})),background:L["a"].deprecatePropValues(h.a.oneOf(["transparent","primary","secondary","primary-inverse","brand","info","alert","success","danger","warning","default","light","inverse"]),["default","inverse","light"],(function(e){var t=e.propName,n=e.propValue
return"In version 8.0.0, the value '".concat(n,"' for `").concat(t,"` will be changed to ").concat(function(){if("default"===n)return"'primary'"
if("light"===n)return"'secondary'"
if("inverse"===n)return"'primary-inverse'"}(),". Use that value instead.")})),shadow:je["a"].shadow,stacking:je["a"].stacking,cursor:Lt,position:h.a.oneOf(["static","absolute","relative","sticky","fixed"]),insetInlineStart:h.a.string,insetInlineEnd:h.a.string,insetBlockStart:h.a.string,insetBlockEnd:h.a.string,withFocusOutline:h.a.bool,focusPosition:h.a.oneOf(["offset","inset"]),focusColor:h.a.oneOf(["info","inverse","success","danger"]),shouldAnimateFocus:h.a.bool,withVisualDebug:h.a.bool,focused:h.a.bool,visualDebug:h.a.bool},Gt.defaultProps={display:"auto",as:void 0,textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,withVisualDebug:false,cursor:void 0,borderWidth:void 0,borderRadius:void 0,borderColor:"primary",margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,position:"static",withFocusOutline:void 0,focusPosition:"offset",focusColor:"info",insetInlineStart:void 0,insetInlineEnd:void 0,insetBlockStart:void 0,insetBlockEnd:void 0,shouldAnimateFocus:true},Ht))||Wt)||Wt)||Wt)
Vt.omitViewProps=function(e,t){false
return Object(We["a"])(e,Vt.propTypes)}
function Qt(e){var t=e.colors,n=e.borders
return{arrowSize:"0.5rem",arrowBorderWidth:n.widthSmall,arrowBackgroundColor:t.white,arrowBorderColor:t.tiara,arrowBackgroundColorInverse:t.licorice,arrowBorderColorInverse:"transparent"}}var Zt,Xt,$t,Jt
var en={componentId:"dqmEK",template:function(e){return"\n\n.dqmEK_ftAV{box-sizing:border-box;min-height:calc(".concat(e.arrowSize||"inherit","*2)}\n\n.dqmEK_caGd{position:relative}\n\n.dqmEK_eBFr,.dqmEK_bQpq,.dqmEK_cLEU,.dqmEK_bcHE,.dqmEK_dRPE{-webkit-padding-end:0;-webkit-padding-start:").concat(e.arrowSize||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.arrowSize||"inherit","}\n\n[dir=ltr] .dqmEK_eBFr,[dir=ltr] .dqmEK_bQpq,[dir=ltr] .dqmEK_cLEU,[dir=ltr] .dqmEK_bcHE,[dir=ltr] .dqmEK_dRPE{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n[dir=rtl] .dqmEK_eBFr,[dir=rtl] .dqmEK_bQpq,[dir=rtl] .dqmEK_cLEU,[dir=rtl] .dqmEK_bcHE,[dir=rtl] .dqmEK_dRPE{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_bhzm,.dqmEK_bxia,.dqmEK_buog,.dqmEK_ctrk,.dqmEK_dHQY{-webkit-padding-end:").concat(e.arrowSize||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.arrowSize||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .dqmEK_bhzm,[dir=ltr] .dqmEK_bxia,[dir=ltr] .dqmEK_buog,[dir=ltr] .dqmEK_ctrk,[dir=ltr] .dqmEK_dHQY{padding-left:0;padding-right:").concat(e.arrowSize||"inherit","}\n\n[dir=rtl] .dqmEK_bhzm,[dir=rtl] .dqmEK_bxia,[dir=rtl] .dqmEK_buog,[dir=rtl] .dqmEK_ctrk,[dir=rtl] .dqmEK_dHQY{padding-left:").concat(e.arrowSize||"inherit",";padding-right:0}\n\n.dqmEK_bgun,.dqmEK_cOtA,.dqmEK_cFhg,.dqmEK_fjSW{padding-top:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_dLYh,.dqmEK_dqZD,.dqmEK_dNlp,.dqmEK_svmP{padding-bottom:").concat(e.arrowSize||"inherit",'}\n\n.dqmEK_bFHc{left:-999em;position:absolute}\n\n.dqmEK_fAVq,.dqmEK_fAVq:after{border-style:solid;box-sizing:border-box;content:"";display:block;height:0;pointer-events:none;position:absolute;width:0}\n\n.dqmEK_fAVq{border-width:calc(').concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",");display:block}\n\n.dqmEK_fAVq:after{border-width:").concat(e.arrowSize||"inherit","}\n\n.dqmEK_fBgc,.dqmEK_fBgc:after{border-color:").concat(e.arrowBorderColor||"inherit","}\n\n.dqmEK_ejeM,.dqmEK_ejeM:after{border-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV,.dqmEK_tpPI,.dqmEK_dOuW,.dqmEK_borX,.dqmEK_igtb{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBorderColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:100%;inset-inline-start:auto;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_cLQV,[dir=ltr] .dqmEK_tpPI,[dir=ltr] .dqmEK_dOuW,[dir=ltr] .dqmEK_borX,[dir=ltr] .dqmEK_igtb{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n[dir=rtl] .dqmEK_cLQV,[dir=rtl] .dqmEK_tpPI,[dir=rtl] .dqmEK_dOuW,[dir=rtl] .dqmEK_borX,[dir=rtl] .dqmEK_igtb{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n.dqmEK_cLQV:after,.dqmEK_dOuW:after,.dqmEK_borX:after,.dqmEK_igtb:after,.dqmEK_tpPI:after{border-bottom-color:transparent;border-inline-end-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-width:").concat(e.arrowSize||"inherit",";border-inline-start-color:transparent;border-inline-start-width:0;border-top-color:transparent;inset-inline-end:auto;inset-inline-start:").concat(e.arrowBorderWidth||"inherit",";margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_cLQV:after,[dir=ltr] .dqmEK_dOuW:after,[dir=ltr] .dqmEK_borX:after,[dir=ltr] .dqmEK_igtb:after,[dir=ltr] .dqmEK_tpPI:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n[dir=rtl] .dqmEK_cLQV:after,[dir=rtl] .dqmEK_dOuW:after,[dir=rtl] .dqmEK_borX:after,[dir=rtl] .dqmEK_igtb:after,[dir=rtl] .dqmEK_tpPI:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM,.dqmEK_dOuW.dqmEK_ejeM,.dqmEK_borX.dqmEK_ejeM,.dqmEK_igtb.dqmEK_ejeM,.dqmEK_tpPI.dqmEK_ejeM{border-inline-end-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM,[dir=ltr] .dqmEK_borX.dqmEK_ejeM,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM,[dir=rtl] .dqmEK_borX.dqmEK_ejeM,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_cLQV.dqmEK_ejeM:after,.dqmEK_dOuW.dqmEK_ejeM:after,.dqmEK_borX.dqmEK_ejeM:after,.dqmEK_igtb.dqmEK_ejeM:after,.dqmEK_tpPI.dqmEK_ejeM:after{border-inline-end-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=ltr] .dqmEK_borX.dqmEK_ejeM:after,[dir=ltr] .dqmEK_igtb.dqmEK_ejeM:after,[dir=ltr] .dqmEK_tpPI.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_cLQV.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOuW.dqmEK_ejeM:after,[dir=rtl] .dqmEK_borX.dqmEK_ejeM:after,[dir=rtl] .dqmEK_igtb.dqmEK_ejeM:after,[dir=rtl] .dqmEK_tpPI.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_eiYi,.dqmEK_evPF,.dqmEK_fzfv,.dqmEK_fnqe,.dqmEK_dOsT{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBorderColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:auto;inset-inline-start:100%;margin-top:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:50%}\n\n[dir=ltr] .dqmEK_eiYi,[dir=ltr] .dqmEK_evPF,[dir=ltr] .dqmEK_fzfv,[dir=ltr] .dqmEK_fnqe,[dir=ltr] .dqmEK_dOsT{border-left-color:").concat(e.arrowBorderColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:100%;right:auto}\n\n[dir=rtl] .dqmEK_eiYi,[dir=rtl] .dqmEK_evPF,[dir=rtl] .dqmEK_fzfv,[dir=rtl] .dqmEK_fnqe,[dir=rtl] .dqmEK_dOsT{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBorderColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:auto;right:100%}\n\n.dqmEK_eiYi:after,.dqmEK_fzfv:after,.dqmEK_fnqe:after,.dqmEK_dOsT:after,.dqmEK_evPF:after{border-bottom-color:transparent;border-inline-end-color:transparent;border-inline-end-width:0;border-inline-start-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-start-width:").concat(e.arrowSize||"inherit",";border-top-color:transparent;inset-inline-end:").concat(e.arrowBorderWidth||"inherit",";inset-inline-start:auto;margin-top:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_eiYi:after,[dir=ltr] .dqmEK_fzfv:after,[dir=ltr] .dqmEK_fnqe:after,[dir=ltr] .dqmEK_dOsT:after,[dir=ltr] .dqmEK_evPF:after{border-left-color:").concat(e.arrowBackgroundColor||"inherit",";border-left-width:").concat(e.arrowSize||"inherit",";border-right-color:transparent;border-right-width:0;left:auto;right:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi:after,[dir=rtl] .dqmEK_fzfv:after,[dir=rtl] .dqmEK_fnqe:after,[dir=rtl] .dqmEK_dOsT:after,[dir=rtl] .dqmEK_evPF:after{border-left-color:transparent;border-left-width:0;border-right-color:").concat(e.arrowBackgroundColor||"inherit",";border-right-width:").concat(e.arrowSize||"inherit",";left:").concat(e.arrowBorderWidth||"inherit",";right:auto}\n\n.dqmEK_eiYi.dqmEK_ejeM,.dqmEK_fzfv.dqmEK_ejeM,.dqmEK_fnqe.dqmEK_ejeM,.dqmEK_dOsT.dqmEK_ejeM,.dqmEK_evPF.dqmEK_ejeM{border-inline-start-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM{border-left-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM{border-right-color:").concat(e.arrowBorderColorInverse||"inherit","}\n\n.dqmEK_eiYi.dqmEK_ejeM:after,.dqmEK_fzfv.dqmEK_ejeM:after,.dqmEK_fnqe.dqmEK_ejeM:after,.dqmEK_dOsT.dqmEK_ejeM:after,.dqmEK_evPF.dqmEK_ejeM:after{border-inline-start-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=ltr] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=ltr] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=ltr] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=ltr] .dqmEK_evPF.dqmEK_ejeM:after{border-left-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n[dir=rtl] .dqmEK_eiYi.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fzfv.dqmEK_ejeM:after,[dir=rtl] .dqmEK_fnqe.dqmEK_ejeM:after,[dir=rtl] .dqmEK_dOsT.dqmEK_ejeM:after,[dir=rtl] .dqmEK_evPF.dqmEK_ejeM:after{border-right-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_dHiK,.dqmEK_dBdm,.dqmEK_ePhw,.dqmEK_bDBw{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;bottom:100%;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm,[dir=ltr] .dqmEK_ePhw,[dir=ltr] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm,[dir=rtl] .dqmEK_ePhw,[dir=rtl] .dqmEK_bDBw{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_dBdm:after,.dqmEK_ePhw:after,.dqmEK_bDBw:after,.dqmEK_dHiK:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:").concat(e.arrowBackgroundColor||"inherit",";border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:transparent;border-top-width:0;margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",");top:").concat(e.arrowBorderWidth||"inherit","}\n\n[dir=ltr] .dqmEK_dBdm:after,[dir=ltr] .dqmEK_ePhw:after,[dir=ltr] .dqmEK_bDBw:after,[dir=ltr] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_dBdm:after,[dir=rtl] .dqmEK_ePhw:after,[dir=rtl] .dqmEK_bDBw:after,[dir=rtl] .dqmEK_dHiK:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_dBdm.dqmEK_ejeM:after,.dqmEK_ePhw.dqmEK_ejeM:after,.dqmEK_bDBw.dqmEK_ejeM:after,.dqmEK_dHiK.dqmEK_ejeM:after{border-bottom-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_ZLAk,.dqmEK_ftdy{-webkit-margin-end:0;-webkit-margin-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;margin-inline-end:0;margin-inline-start:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));top:100%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","));margin-right:0}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ftdy{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*(").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit","))}\n\n.dqmEK_edfl:after,.dqmEK_ZLAk:after,.dqmEK_ftdy:after,.dqmEK_cjte:after{-webkit-margin-end:0;-webkit-margin-start:calc(-1*").concat(e.arrowSize||"inherit",");border-bottom-color:transparent;border-bottom-width:0;border-inline-end-color:transparent;border-inline-start-color:transparent;border-top-color:").concat(e.arrowBackgroundColor||"inherit",";bottom:").concat(e.arrowBorderWidth||"inherit",";margin-inline-end:0;margin-inline-start:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n[dir=ltr] .dqmEK_edfl:after,[dir=ltr] .dqmEK_ZLAk:after,[dir=ltr] .dqmEK_ftdy:after,[dir=ltr] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:calc(-1*").concat(e.arrowSize||"inherit",");margin-right:0}\n\n[dir=rtl] .dqmEK_edfl:after,[dir=rtl] .dqmEK_ZLAk:after,[dir=rtl] .dqmEK_ftdy:after,[dir=rtl] .dqmEK_cjte:after{border-left-color:transparent;border-right-color:transparent;margin-left:0;margin-right:calc(-1*").concat(e.arrowSize||"inherit",")}\n\n.dqmEK_edfl.dqmEK_ejeM:after,.dqmEK_ZLAk.dqmEK_ejeM:after,.dqmEK_ftdy.dqmEK_ejeM:after,.dqmEK_cjte.dqmEK_ejeM:after{border-top-color:").concat(e.arrowBackgroundColorInverse||"inherit","}\n\n.dqmEK_cjte,.dqmEK_edfl,.dqmEK_dHiK,.dqmEK_dBdm{inset-inline-start:50%}\n\n[dir=ltr] .dqmEK_cjte,[dir=ltr] .dqmEK_edfl,[dir=ltr] .dqmEK_dHiK,[dir=ltr] .dqmEK_dBdm{left:50%}\n\n[dir=rtl] .dqmEK_cjte,[dir=rtl] .dqmEK_edfl,[dir=rtl] .dqmEK_dHiK,[dir=rtl] .dqmEK_dBdm{right:50%}\n\n.dqmEK_ftdy,.dqmEK_bDBw{inset-inline-end:auto;inset-inline-start:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ftdy,[dir=ltr] .dqmEK_bDBw{left:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ftdy,[dir=rtl] .dqmEK_bDBw{left:auto;right:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_ZLAk,.dqmEK_ePhw{inset-inline-end:auto;inset-inline-start:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n[dir=ltr] .dqmEK_ZLAk,[dir=ltr] .dqmEK_ePhw{left:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2);right:auto}\n\n[dir=rtl] .dqmEK_ZLAk,[dir=rtl] .dqmEK_ePhw{left:auto;right:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_dOsT,.dqmEK_igtb{top:calc((").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}\n\n.dqmEK_fzfv,.dqmEK_dOuW{top:calc(100% - (").concat(e.arrowSize||"inherit"," + ").concat(e.arrowBorderWidth||"inherit",")*2)}")},contextViewRoot:"dqmEK_ftAV",content:"dqmEK_caGd","placement--center-end":"dqmEK_eBFr","placement--end":"dqmEK_bQpq","placement--end-bottom":"dqmEK_cLEU","placement--end-center":"dqmEK_bcHE","placement--end-top":"dqmEK_dRPE","placement--center-start":"dqmEK_bhzm","placement--start":"dqmEK_bxia","placement--start-bottom":"dqmEK_buog","placement--start-center":"dqmEK_ctrk","placement--start-top":"dqmEK_dHQY","placement--bottom":"dqmEK_bgun","placement--bottom-center":"dqmEK_cOtA","placement--bottom-end":"dqmEK_cFhg","placement--bottom-start":"dqmEK_fjSW","placement--top":"dqmEK_dLYh","placement--top-center":"dqmEK_dqZD","placement--top-end":"dqmEK_dNlp","placement--top-start":"dqmEK_svmP","placement--offscreen":"dqmEK_bFHc",arrow:"dqmEK_fAVq","arrow--default":"dqmEK_fBgc","arrow--inverse":"dqmEK_ejeM","arrow--center-start":"dqmEK_cLQV","arrow--start":"dqmEK_tpPI","arrow--start-bottom":"dqmEK_dOuW","arrow--start-center":"dqmEK_borX","arrow--start-top":"dqmEK_igtb","arrow--center-end":"dqmEK_eiYi","arrow--end":"dqmEK_evPF","arrow--end-bottom":"dqmEK_fzfv","arrow--end-center":"dqmEK_fnqe","arrow--end-top":"dqmEK_dOsT","arrow--top":"dqmEK_dHiK","arrow--top-center":"dqmEK_dBdm","arrow--top-end":"dqmEK_ePhw","arrow--top-start":"dqmEK_bDBw","arrow--bottom":"dqmEK_cjte","arrow--bottom-center":"dqmEK_edfl","arrow--bottom-end":"dqmEK_ZLAk","arrow--bottom-start":"dqmEK_ftdy"}
var tn=(Zt=Object(je["g"])(Qt,en),Zt(Xt=(Jt=$t=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e,t
var r=this.props,i=r.as,a=r.background,s=r.children,u=r.debug,l=r.elementRef,c=r.height,d=r.width,f=r.maxHeight,p=r.maxWidth,h=r.minHeight,m=r.minWidth,g=r.margin,b=r.padding,v=r.placement,y=r.shadow,_=r.stacking,E=r.style,C=r.textAlign
var O=(e={},Object(ke["a"])(e,en.contextViewRoot,true),Object(ke["a"])(e,en["placement--".concat(v.replace(" ","-"))],true),e)
return o.a.createElement(Vt,Object.assign({},Object(We["a"])(this.props,n.propTypes),{style:E,className:De()(O),borderWidth:"none",display:"inline-block",as:i,withVisualDebug:u,elementRef:l,margin:g,stacking:_}),o.a.createElement(Vt,{className:en.content,display:"block",borderRadius:"medium",borderWidth:"small",borderColor:"default"===a?"primary":"transparent",background:"default"===a?"primary":"primary-inverse",withVisualDebug:u,height:c,width:d,maxHeight:f,maxWidth:p,minHeight:h,minWidth:m,padding:b,shadow:y,textAlign:C},o.a.createElement("span",{className:De()((t={},Object(ke["a"])(t,en.arrow,true),Object(ke["a"])(t,en["arrow--".concat(a)],a),Object(ke["a"])(t,en["arrow--".concat(this.mirroredPlacement)],true),t))}),s))}},{key:"mirroredPlacement",get:function(){return he(this.props.placement,"-")}}])
n.displayName="ContextView"
return n}(i["Component"]),$t.propTypes={as:h.a.elementType,elementRef:h.a.func,margin:je["a"].spacing,padding:je["a"].spacing,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxHeight:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minHeight:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,textAlign:h.a.oneOf(["start","center","end"]),shadow:je["a"].shadow,stacking:je["a"].stacking,background:h.a.oneOf(["default","inverse"]),placement:ne.placement,debug:h.a.bool},$t.defaultProps={as:"span",elementRef:function(e){},debug:false,width:"auto",height:"auto",children:null,textAlign:"start",background:"default",shadow:"resting",placement:"center end",margin:void 0,padding:void 0,stacking:void 0,maxWidth:void 0,minWidth:void 0,maxHeight:void 0,minHeight:void 0},Jt))||Xt)
var nn=n("MicT")
var rn=n("1Hvx")
function on(e){var t=e&&Object(re["a"])(e)
var n=Object(rn["a"])()
return t&&(n===t||ae(t,n))}function an(e,t){var n=t.currentTarget
var r=t.relatedTarget||t.nativeEvent.toElement
r&&(r===n||ae(n,r))||e(t)}var sn={}
function un(e,t){if(!S["a"])return 16
var n=e||se(e).documentElement
if(!t&&sn[n])return sn[n]
var r=parseInt(ce(n).getPropertyValue("font-size"))
sn[n]=r
return r}function ln(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}function cn(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var r=ln(e),i=Object(K["a"])(r,2),o=i[0],a=i[1]
return"rem"===a?o*un():"em"===a?o*un(n):o}var dn=n("xhsM")
function fn(e,t,n,r){var i=e===window||e===document?e:Object(re["a"])(e)
i.addEventListener(t,n,r)
return{remove:function(){i.removeEventListener(t,n,r)}}}function pn(e){try{return e.contentDocument||e.contentWindow.document}catch(e){return null}}function hn(e,t){var n=e&&Object(re["a"])(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}function mn(e,t,n){var r=Object(re["a"])(e)
if(!r||"function"!==typeof r.querySelectorAll)return[]
var i="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var o=Array.from(r.querySelectorAll(i))
n&&hn(r,i)&&(o=[].concat(Object(m["a"])(o),[r]))
return o.filter((function(e){return"function"===typeof t?t(e)&&yn(e):yn(e)}))}function gn(e){var t=ce(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function bn(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(ce(e).getPropertyValue("position").toLowerCase()))return true
return false}function vn(e){while(e){if(e===document.body)break
if(gn(e))return false
if(bn(e))break
e=e.parentNode}return true}function yn(e){return!e.disabled&&vn(e)}function _n(e,t){return mn(e,(function(e){return!En(e.getAttribute("tabindex"))}),t)}function En(e){return!isNaN(e)&&e<0}var Cn=function(){function e(t){var n=this
var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:true,liveRegion:[]}
Object(g["a"])(this,e)
this._observer=null
this._attributes=[]
this._nodes=[]
this._parents=[]
this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes)
var r=Array.from(e.removedNodes)
n.hideNodes(t)
r.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e)
var t=n.parseIframeBodies(e)
t.forEach((function(e){n.restoreNode(e)}))}))}))}
var i="function"===typeof r.liveRegion?r.liveRegion():r.liveRegion
this._liveRegion=Array.isArray(i)?i:[i]
this._contextElement=t
this._options=r}Object(b["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
if(e&&"script"!==e.tagName.toLowerCase()){["role","aria-label","aria-hidden"].forEach((function(n){var r=e.getAttribute(n)
if(null!==r){t._attributes.push([e,n,r])
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
var On=n("UMGM")
function An(e,t,n){var r=Object(re["a"])(e)
var i=_n(r)
if(!i.length){t.preventDefault()
return}if(on(e)){var o=Object(rn["a"])();-1===i.indexOf(o)&&i.push(o)}var a=i[t.shiftKey?0:i.length-1]
var s=Object(On["a"])(a)||Object(On["a"])(r)||!on(e)
if(!s)return
if("function"===typeof n){n()
return}t.preventDefault()
var u=i[t.shiftKey?i.length-1:0]
u.focus()}var wn=function(){function e(t,n){var r=this
Object(g["a"])(this,e)
this._contextElement=null
this._focusLaterElement=null
this._needToFocus=false
this._listeners=[]
this._raf=[]
this._active=false
this.handleDismiss=function(e){r._options.onDismiss(e)}
this.handleKeyDown=function(e){e.keyCode===R.a.codes.tab&&An(r._contextElement,e)}
this.handleClick=function(e){r._wasDocumentClick=true}
this.handleWindowBlur=function(e){if(r._wasDocumentClick){r._wasDocumentClick=false
return}r._needToFocus=true}
this.handleFocus=function(e){if(r._needToFocus){r._needToFocus=false
if(!r._contextElement)return
r._raf.push(Pe((function(){if(on(r._contextElement))return
r.focusDefaultElement()})))}}
this.handleFirstTabbableKeyDown=function(e){e.keyCode===R.a.codes.tab&&e.shiftKey&&r._options.onBlur(e)}
this.handleLastTabbableKeyDown=function(e){e.keyCode!==R.a.codes.tab||e.shiftKey||r._options.onBlur(e)}
this._contextElement=Object(re["a"])(t)
this._options=n||{shouldContainFocus:true,shouldReturnFocus:true,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null}
this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}Object(b["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=Object(re["a"])(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
if(this.focused)return
this._raf.push(Pe((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
if(!this._active&&(e||t)){if(t)this._listeners.push(fn(this.doc,"keydown",this.handleKeyDown))
else{this._listeners.push(fn(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown))
this._listeners.push(fn(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))}this._listeners.push(fn(this.doc,"click",this.handleClick,true))
this._listeners.push(fn(this.win,"blur",this.handleWindowBlur,false))
this._listeners.push(fn(this.doc,"focus",this.handleFocus,true))
this._active=true}}},{key:"deactivate",value:function(){if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
this._preventCloseOnDocumentClick=false
this._active=false}}},{key:"focused",get:function(){return on(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return true===e||Array.isArray(e)&&e.includes["keyboard"]}},{key:"focusable",get:function(){return mn(this._contextElement,(function(){return true}),true)||[]}},{key:"tabbable",get:function(){return _n(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return se(this._contextElement)}},{key:"win",get:function(){return le(this._contextElement)}},{key:"activeElement",get:function(){return Object(rn["a"])(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement
var t=Object(re["a"])("function"===typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
if(n)return n
if(this.focusable.includes(this._contextElement))return this._contextElement
return null}}])
return e}()
var kn=function(){function e(t,n){var r=this
Object(g["a"])(this,e)
this._contextElement=null
this._preventCloseOnDocumentClick=false
this._listeners=[]
this._active=false
this.handleDismiss=function(e,t){r._options.onDismiss(e,t)}
this.captureDocumentClick=function(e){var t=e.target
r._preventCloseOnDocumentClick=0!==e.button||ae(r._contextElement,t)}
this.handleDocumentClick=function(e){r._options.shouldCloseOnDocumentClick&&!r._preventCloseOnDocumentClick&&r.handleDismiss(e,true)}
this.handleFrameClick=function(e,t){ae(r._contextElement,t)||r.handleDismiss(e,true)}
this.handleKeyUp=function(e){r._options.shouldCloseOnEscape&&e.keyCode===R.a.codes.escape&&!e.defaultPrevented&&r.handleDismiss(e)}
this._options=n||{shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,onDismiss:function(e){}}
this._contextElement=t
this._screenReaderFocusRegion=new Cn(t,n)
this._keyboardFocusRegion=new wn(t,n)
this._id=Object(Me["a"])()}Object(b["a"])(e,[{key:"updateElement",value:function(e){this._contextElement=e
this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e)
this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=se(this._contextElement)
this._keyboardFocusRegion.activate()
this._screenReaderFocusRegion.activate()
if(this._options.shouldCloseOnDocumentClick){this._listeners.push(fn(t,"click",this.captureDocumentClick,true))
this._listeners.push(fn(t,"click",this.handleDocumentClick))
Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=pn(t)
n&&e._listeners.push(fn(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))}this._options.shouldCloseOnEscape&&this._listeners.push(fn(t,"keyup",this.handleKeyUp))
this._active=true}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
if(this._active){this._listeners.forEach((function(e){e.remove()}))
this._listeners=[]
n&&this._keyboardFocusRegion.deactivate()
this._screenReaderFocusRegion.deactivate()
this._active=false}}},{key:"focus",value:function(){this._active
this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active
this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(_n(this._contextElement)||[]).length>0}}])
return e}()
var xn,Dn,jn,Sn,In,Bn,Tn,Fn,Pn,Ln,Mn,Nn,Rn,qn,zn,Kn
var Un=(xn=Object(L["a"])("8.0.0",null,"Use Popover's `renderTrigger` prop instead."),Dn=Object(M["a"])(),xn(jn=Dn(jn=(In=Sn=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),Sn.displayName="PopoverTrigger",In))||jn)||jn)
var Wn=(Bn=Object(L["a"])("8.0.0",null,"Use Popover's `children` instead."),Tn=Object(M["a"])(),Bn(Fn=Tn(Fn=(Ln=Pn=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),Pn.displayName="PopoverContent",Ln))||Fn)||Fn)
var Gn=(Mn=Object(L["a"])("8.0.0",{show:"isShowingContent",defaultShow:"defaultIsShowingContent",variant:"color",label:"screenReaderLabel",trackPosition:"shouldTrackPosition",alignArrow:"shouldAlignArrow",onShow:"onShowContent",onDismiss:"onHideContent",onToggle:"onShowContent/onHideContent"}),Nn=Object(M["a"])(),Rn=nt(),Mn(qn=Nn(qn=Rn(qn=(Kn=zn=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var i
Object(g["a"])(this,n)
i=t.call(this,e)
i.show=function(e){"undefined"===typeof i.props.isShowingContent&&"undefined"===typeof i.props.show&&i.setState({isShowingContent:true})
i.props.onShowContent(e)
"function"===typeof i.props.onToggle&&i.props.onToggle(true)}
i.hide=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
var n=i.props,r=n.onHideContent,o=n.isShowingContent,a=n.show,s=n.onToggle,u=n.onDismiss
if("undefined"===typeof o&&"undefined"===typeof a)i.setState((function(n){var i=n.isShowingContent
if(i){r(e,{documentClick:t})
"function"===typeof u&&u(e,t)}return{isShowingContent:false}}))
else if(o||a){r(e,{documentClick:t})
"function"===typeof u&&u(e,t)}"function"===typeof s&&s(false)}
i.toggle=function(e){i.shown?i.hide(e):i.show(e)}
i.handleDialogDismiss=function(){var e
if(!i.props.shouldReturnFocus&&i.props.shouldFocusContentOnTriggerBlur){var t=Object(re["a"])(i._trigger)
t&&"function"===typeof t.focus&&t.focus()}(e=i).hide.apply(e,arguments)}
i.handleDialogBlur=function(e){if(e.keyCode===R.a.codes.tab&&e.shiftKey&&i.props.shouldFocusContentOnTriggerBlur)return
i.hide(e)}
i.handleTriggerKeyDown=function(e){if(!i.props.shouldFocusContentOnTriggerBlur)return
if(e.keyCode===R.a.codes.tab&&!e.shiftKey){e.preventDefault()
i._raf.push(Pe((function(){i._dialog&&i._dialog.focus()})))}}
i.handleTriggerKeyUp=function(e){if(e.keyCode===R.a.codes.esc&&i.shown&&i.isTooltip){e.preventDefault()
i.hide(e)}}
i.handleTriggerBlur=function(e){i.props.on.indexOf("focus")>-1&&i._raf.push(Pe((function(){on(i._view)||i.hide(e)})))}
i.handlePositioned=function(e){var t=e.placement
i.setState(Object(r["a"])({placement:t},i.computeOffsets(t)))
i.props.onPositioned(e)
"function"===typeof i.props.onShow&&i.props.onShow(e)}
i.handlePositionChanged=function(e){var t=e.placement
i.setState(Object(r["a"])({placement:t},i.computeOffsets(t)))
i.props.onPositionChanged(e)}
i.state={placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY}
"undefined"===typeof e.isShowingContent&&"undefined"===typeof e.show&&(i.state.isShowingContent=e.defaultIsShowingContent||e.defaultShow)
i._id=i.props.id||Object(Me["a"])("Popover")
i._raf=[]
i._handleMouseOver=an.bind(null,(function(e){i.show(e)}))
i._handleMouseOut=an.bind(null,(function(e){i.hide(e)}))
return i}Object(b["a"])(n,[{key:"componentDidMount",value:function(){if(this.isTooltip){this._focusRegion=new kn(this._contentElement,{shouldCloseOnEscape:false,shouldCloseOnDocumentClick:true,onDismiss:this.hide})
this.shown&&this._focusRegion.activate()}}},{key:"componentWillUnmount",value:function(){this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]
if(this._focusRegion){this._focusRegion.deactivate()
this._focusRegion.blur()}}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(qe["a"])(this.props,e)||!Object(qe["a"])(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){if(this._focusRegion&&this.isTooltip){if(!e.isShowingContent&&this.props.isShowingContent||!t.isShowingContent&&this.state.isShowingContent){this._focusRegion.activate()
this._focusRegion.focus()}(e.isShowingContent&&!this.props.isShowingContent||t.isShowingContent&&!this.state.isShowingContent)&&this._focusRegion.deactivate()}}},{key:"computeOffsets",value:function(e){var t=this.props,n=t.offsetX,r=t.offsetY
if((this.props.shouldAlignArrow||this.props.alignArrow)&&this._view){var i=Ae(e)[1]
var o=this._view.theme,a=o.arrowSize,s=o.arrowBorderWidth
var u=2*(cn(a)+cn(s))
"start"===i?n=u:"end"===i?n=-u:"top"===i?r=u:"bottom"===i&&(r=-u)}return{offsetX:n,offsetY:r}}},{key:"renderTrigger",value:function(){var e=this
var t=Be.pick(n.Trigger,this.props.children)
t||(t=Fe(this.props.renderTrigger))
if(t){var r=this.props,i=r.on,o=r.shouldContainFocus
var a
var s
var u
var l
var c
i.indexOf("click")>-1&&(a=function(t){e.toggle(t)})
if(i.indexOf("hover")>-1){l=this._handleMouseOver
u=this._handleMouseOut}i.indexOf("focus")>-1&&(s=function(t){e.show(t)})
c=o?this.shown?"true":"false":null
t=Object(Te["a"])(t,{ref:function(t){return e._trigger=t},"aria-expanded":c,"data-popover-trigger":true,onKeyDown:Object(dn["a"])(this.handleTriggerKeyDown,this.props.onKeyDown),onKeyUp:Object(dn["a"])(this.handleTriggerKeyUp,this.props.onKeyUp),onClick:Object(dn["a"])(a,this.props.onClick),onBlur:Object(dn["a"])(this.handleTriggerBlur,this.props.onBlur),onFocus:Object(dn["a"])(s,this.props.onFocus),onMouseOut:Object(dn["a"])(u,this.props.onMouseOut),onMouseOver:Object(dn["a"])(l,this.props.onMouseOver)})}return t}},{key:"renderContent",value:function(){var e=this
var t=Be.pick(n.Content,this.props.children)
t||(t=Fe(this.props.children))
this.shown&&!this.isTooltip&&(t=o.a.createElement(nn["a"],{open:this.shown,label:this.props.screenReaderLabel||this.props.label,ref:function(t){return e._dialog=t},display:"block",onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,liveRegion:this.props.liveRegion,defaultFocusElement:this.props.defaultFocusElement,shouldContainFocus:this.props.shouldContainFocus,shouldReturnFocus:this.props.shouldReturnFocus,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur,shouldCloseOnDocumentClick:this.props.shouldCloseOnDocumentClick,shouldCloseOnEscape:this.props.shouldCloseOnEscape},t))
if(this.shown||this.props.shouldRenderOffscreen){var i
var a=this.props.variant
a=a?"inverse"===a?"primary-inverse":"primary":this.props.color
var s={ref:function(t){return e._view=t},elementRef:function(t){e._contentElement=t
e.props.contentRef(t)},background:a,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var u=this.state.placement
if(this.props.withArrow){i=tn
s=Object(r["a"])({},s,{background:"primary"===a?"default":"inverse",placement:this.rtl?me(u," "):u})}else{i=Vt
s=Object(r["a"])({},s,{borderWidth:"small",borderRadius:"medium"})}this.isTooltip&&(s=Object(r["a"])({},s,{style:{pointerEvents:"none"}}))
return o.a.createElement(i,s,t)}return null}},{key:"render",value:function(){var e=this.positionProps
return this.props.positionTarget?o.a.createElement("span",null,this.renderTrigger(),o.a.createElement(Pt,e,this.renderContent())):o.a.createElement(Pt,Object.assign({},e,{renderTarget:this.renderTrigger()}),this.renderContent())}},{key:"isTooltip",get:function(){return this.props.shouldRenderOffscreen&&!this.props.shouldReturnFocus&&!this.props.shouldContainFocus&&!this.props.shouldFocusContentOnTriggerBlur}},{key:"placement",get:function(){var e=this.props.placement
this.rtl&&(e=me(e," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":e}},{key:"positionProps",get:function(){return{offsetX:this.state.offsetX,offsetY:this.state.offsetY,shouldTrackPosition:(this.props.shouldTrackPosition||this.props.trackPosition)&&this.shown,insertAt:this.props.insertAt,placement:this.placement,constrain:this.props.constrain,onPositioned:this.handlePositioned,onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,mountNode:this.props.mountNode,id:this._id}}},{key:"shown",get:function(){return"undefined"===typeof this.props.isShowingContent&&"undefined"===typeof this.props.show?this.state.isShowingContent:this.props.isShowingContent||this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}}])
n.displayName="Popover"
return n}(i["Component"]),zn.Trigger=Un,zn.Content=Wn,zn.propTypes={isShowingContent:h.a.bool,defaultIsShowingContent:h.a.bool,on:h.a.oneOfType([h.a.oneOf(["click","hover","focus"]),h.a.arrayOf(h.a.oneOf(["click","hover","focus"]))]),withArrow:h.a.bool,color:h.a.oneOf(["primary","primary-inverse"]),placement:ne.placement,shadow:je["a"].shadow,stacking:je["a"].stacking,contentRef:h.a.func,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),screenReaderLabel:h.a.string,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),constrain:ne.constrain,positionTarget:h.a.oneOfType([te,h.a.func]),mountNode:ne.mountNode,insertAt:h.a.oneOf(["bottom","top"]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),id:h.a.string,shouldAlignArrow:h.a.bool,shouldTrackPosition:h.a.bool,shouldRenderOffscreen:h.a.bool,shouldContainFocus:h.a.bool,shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,shouldFocusContentOnTriggerBlur:h.a.bool,onShowContent:h.a.func,onHideContent:h.a.func,onPositioned:h.a.func,onPositionChanged:h.a.func,onClick:h.a.func,onFocus:h.a.func,onBlur:h.a.func,onKeyDown:h.a.func,onKeyUp:h.a.func,onMouseOver:h.a.func,onMouseOut:h.a.func,renderTrigger:h.a.oneOfType([h.a.node,h.a.func]),children:h.a.oneOfType([h.a.node,h.a.func]),show:h.a.bool,defaultShow:h.a.bool,variant:h.a.oneOf(["default","inverse"]),alignArrow:h.a.bool,label:h.a.string,trackPosition:h.a.bool,onShow:h.a.func,onDismiss:h.a.func,onToggle:h.a.func},zn.defaultProps={isShowingContent:void 0,defaultIsShowingContent:false,placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,color:"primary",on:["hover","focus"],contentRef:function(e){},withArrow:true,constrain:"window",defaultFocusElement:void 0,screenReaderLabel:void 0,mountNode:void 0,insertAt:"bottom",liveRegion:void 0,positionTarget:void 0,id:void 0,shouldAlignArrow:false,shouldTrackPosition:true,shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onPositioned:function(e){},onPositionChanged:function(e){},renderTrigger:null,children:null},Kn))||qn)||qn)||qn)
var Hn=n("jO1G")
var Yn,Vn,Qn,Zn,Xn,$n,Jn,er,tr,nr,rr,ir,or,ar
var sr=(Yn=Object(M["a"])(),Yn(Vn=(Zn=Qn=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),Qn.displayName="PopoverTrigger",Zn))||Vn)
var ur=(Xn=Object(M["a"])(),Xn($n=(er=Jn=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(Be),Jn.displayName="PopoverContent",er))||$n)
var lr=(tr=Object(L["a"])("7.0.0",null,"Use Popover from ui-popover instead."),nr=Object(M["a"])(),rr=nt(),tr(ir=nr(ir=rr(ir=(ar=or=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.show=function(t){e._popover&&e._popover.show(t)}
e.hide=function(t,n){e._popover&&e._popover.hide(t,n)}
e.toggle=function(t){e._popover&&e._popover.toggle(t)}
return e}Object(b["a"])(n,[{key:"render",value:function(){var e=this
var t=this.props,r=t.show,i=t.defaultShow,a=t.label,s=t.variant,u=t.alignArrow,l=t.trackPosition,c=t.onShow,d=t.onDismiss,f=t.onToggle,p=t.children,h=Object(J["a"])(t,["show","defaultShow","label","variant","alignArrow","trackPosition","onShow","onDismiss","onToggle","children"])
var m=Be.pick(n.Trigger,p)
var g=Be.pick(n.Content,p)
return o.a.createElement(Gn,Object.assign({},h,{isShowingContent:r,defaultIsShowingContent:i,screenReaderLabel:a,color:"inverse"===s?"primary-inverse":"primary",shouldAlignArrow:u,shouldTrackPosition:l,onShowContent:function(){f(true)},onHideContent:function(e,t){var n=t.documentClick
d(e,n)
f(false)},onPositioned:c,ref:function(t){return e._popover=t},renderTrigger:m,__dangerouslyIgnoreExperimentalWarnings:true}),g)}},{key:"placement",get:function(){return this._popover&&this._popover.placement}},{key:"shown",get:function(){return this._popover&&this._popover.shown}},{key:"defaultFocusElement",get:function(){return this._popover&&this._popover.defaultFocusElement}}])
n.displayName="Popover"
return n}(i["Component"]),or.Trigger=sr,or.Content=ur,or.propTypes={children:Hn["a"].oneOf([sr,ur]),placement:ne.placement,on:h.a.oneOfType([h.a.oneOf(["click","hover","focus"]),h.a.arrayOf(h.a.oneOf(["click","hover","focus"]))]),variant:h.a.oneOf(["default","inverse"]),shadow:je["a"].shadow,stacking:je["a"].stacking,defaultShow:h.a.bool,show:Object(_["a"])(h.a.bool,"onToggle","defaultShow"),contentRef:h.a.func,onToggle:h.a.func,onClick:h.a.func,onFocus:h.a.func,onBlur:h.a.func,onKeyDown:h.a.func,onShow:h.a.func,onMouseOver:h.a.func,onMouseOut:h.a.func,onDismiss:h.a.func,withArrow:h.a.bool,label:h.a.string,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),shouldRenderOffscreen:h.a.bool,shouldContainFocus:h.a.bool,shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,shouldCloseOnEscape:h.a.bool,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),onPositionChanged:h.a.func,onPositioned:h.a.func,trackPosition:h.a.bool,constrain:ne.constrain,mountNode:ne.mountNode,insertAt:h.a.oneOf(["bottom","top"]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),positionTarget:h.a.oneOfType([te,h.a.func]),alignArrow:h.a.bool,id:h.a.string,shouldFocusContentOnTriggerBlur:h.a.bool},or.defaultProps={children:null,onToggle:function(e){},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onShow:function(e){},onDismiss:function(e,t){},placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,variant:"default",on:["hover","focus"],contentRef:function(e){},defaultShow:false,withArrow:true,trackPosition:true,constrain:"window",onPositioned:function(e){},onPositionChanged:function(e){},shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,defaultFocusElement:null,label:null,mountNode:null,insertAt:"bottom",liveRegion:null,positionTarget:null,alignArrow:false,id:void 0,show:void 0,closeButtonRef:void 0,closeButtonLabel:void 0,onKeyDown:void 0},ar))||ir)||ir)||ir)
function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.props,n=void 0===t?{}:t,r=e.interactionTypes,i=void 0===r?["disabled","readOnly"]:r
var o=n.interaction,a=n.disabled,s=n.readOnly
if(o)return o
if(i.includes("disabled")&&a)return"disabled"
if(i.includes("readOnly")&&s)return"readonly"
return"enabled"}var dr,fr,pr,hr,mr
var gr={componentId:"dJCgj",template:function(e){return"\n\n.dJCgj_bGBk{box-sizing:border-box;flex-shrink:0;min-width:0.0625rem}\n\n.dJCgj_ffgL{align-self:flex-start}\n\n.dJCgj_fjOx{align-self:flex-end}\n\n.dJCgj_bJAR{align-self:center}\n\n.dJCgj_eFer{align-self:stretch}\n\n.dJCgj_zczv{flex-grow:1}\n\n.dJCgj_dfFp{flex-shrink:1}"},root:"dJCgj_bGBk","align--start":"dJCgj_ffgL","align--end":"dJCgj_fjOx","align--center":"dJCgj_bJAR","align--stretch":"dJCgj_eFer",shouldGrow:"dJCgj_zczv",shouldShrink:"dJCgj_dfFp"}
var br=(dr=Object(L["a"])("8.0.0",{grow:"shouldGrow",shrink:"shouldShrink",visualDeug:"withVisualDebug"}),fr=Object(je["g"])(null,gr),dr(pr=fr(pr=(mr=hr=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e
var t=Object(We["a"])(this.props,n.propTypes)
var r=this.props,i=r.align,a=r.as,s=r.elementRef,u=r.children,l=r.direction,c=r.shouldGrow,d=r.margin,f=r.overflowX,p=r.overflowY,h=r.padding,m=r.shouldShrink,g=r.size,b=r.textAlign,v=r.withVisualDebug,y=r.shrink,_=r.grow,E=r.visualDebug
var C="column"===l
var O={flexBasis:g}
var A=(e={},Object(ke["a"])(e,gr.root,true),Object(ke["a"])(e,gr.shouldGrow,_||c),Object(ke["a"])(e,gr.shouldShrink,y||m),Object(ke["a"])(e,gr["align--".concat(i)],i),e)
return o.a.createElement(Vt,Object.assign({},t,{className:De()(A),style:O,elementRef:s,as:a,minHeight:C?g:void 0,minWidth:"row"===l?g:void 0,textAlign:b,margin:d,padding:h,overflowX:f,overflowY:p||(C?"auto":"visible"),withVisualDebug:v||E}),u)}}])
n.displayName="Item"
return n}(i["Component"]),hr.propTypes={children:h.a.node,as:h.a.elementType,elementRef:h.a.func,margin:je["a"].spacing,padding:je["a"].spacing,align:h.a.oneOf(["center","start","end","stretch"]),direction:h.a.oneOf(["row","column"]),textAlign:h.a.oneOf(["start","center","end"]),overflowX:h.a.oneOf(["auto","hidden","visible"]),overflowY:h.a.oneOf(["auto","hidden","visible"]),shouldGrow:h.a.bool,shouldShrink:h.a.bool,size:h.a.string,withVisualDebug:h.a.bool,grow:h.a.bool,shrink:h.a.bool,visualDebug:h.a.bool},hr.defaultProps={as:"span",elementRef:function(e){},shouldGrow:false,shouldShrink:false},mr))||pr)||pr)
function vr(e){var t=e.typography
return{fontFamily:t.fontFamily}}var yr,_r,Er,Cr,Or
var Ar={componentId:"bDzpk",template:function(e){return"\n\n.bDzpk_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit","}\n\n.bDzpk_bZNM{flex-direction:column}\n\n.bDzpk_eUXf{flex-direction:column-reverse}\n\n.bDzpk_qOas{flex-direction:row}\n\n.bDzpk_sGoV{flex-direction:row-reverse}\n\n.bDzpk_dyGy{flex-wrap:wrap}\n\n.bDzpk_cdHk{flex-wrap:wrap-reverse}\n\n.bDzpk_ePRQ{flex-wrap:wrap}\n\n.bDzpk_busO{justify-content:flex-start}\n\n.bDzpk_crdn{justify-content:flex-end}\n\n.bDzpk_eRIA{justify-content:center}\n\n.bDzpk_flTs{justify-content:space-around}\n\n.bDzpk_oDLF{justify-content:space-between}\n\n.bDzpk_fZWR{align-items:center}\n\n.bDzpk_cCxO{align-items:flex-start}\n\n.bDzpk_fncw{align-items:flex-end}\n\n.bDzpk_cQFX{align-items:stretch}")},root:"bDzpk_bGBk",column:"bDzpk_bZNM","column-reverse":"bDzpk_eUXf",row:"bDzpk_qOas","row-reverse":"bDzpk_sGoV","wrap--wrap":"bDzpk_dyGy","wrap--wrap-reverse":"bDzpk_cdHk",wrapItems:"bDzpk_ePRQ","justifyItems--start":"bDzpk_busO","justifyItems--end":"bDzpk_crdn","justifyItems--center":"bDzpk_eRIA","justifyItems--space-around":"bDzpk_flTs","justifyItems--space-between":"bDzpk_oDLF","alignItems--center":"bDzpk_fZWR","alignItems--start":"bDzpk_cCxO","alignItems--end":"bDzpk_fncw","alignItems--stretch":"bDzpk_cQFX"}
var wr=(yr=Object(L["a"])("8.0.0",{inline:"display",wrapItems:"wrap",visualDeug:"withVisualDebug"}),_r=Object(je["g"])(vr,Ar),yr(Er=_r(Er=(Or=Cr=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"renderChildren",value:function(e){var t=this
return i["Children"].map(e,(function(e){return e?Object(Se["a"])(e,["Item"])?Object(Te["a"])(e,Object(r["a"])({withVisualDebug:t.props.withVisualDebug||t.props.visualDebug},e.props,{direction:t.props.direction.replace(/-reverse/,"")})):e:null}))}},{key:"render",value:function(){var e
var t=this.props,n=t.as,r=t.elementRef,i=t.direction,a=t.height,s=t.display,u=t.margin,l=t.padding,c=t.justifyItems,d=t.textAlign,f=t.withVisualDebug,p=t.width,h=t.wrap,m=t.visualDebug,g=t.wrapItems,b=t.inline
var v=Fe(this.props.children)
var y=this.props.alignItems||("column"===i||"column-reverse"===i?"stretch":"center")
var _=b?"inline-flex":null
var E=(e={},Object(ke["a"])(e,Ar.root,true),Object(ke["a"])(e,Ar["justifyItems--".concat(c)],true),Object(ke["a"])(e,Ar["alignItems--".concat(y)],true),Object(ke["a"])(e,Ar["wrap--".concat(h)],"no-wrap"!==h),Object(ke["a"])(e,Ar.wrapItems,g),e)
return v&&o.a.Children.count(v)>0?o.a.createElement(Vt,Object.assign({},Object(We["b"])(this.props),{className:De()(E,Ar[i]),elementRef:r,as:n,display:_||s,width:p,height:a,margin:u,padding:l,textAlign:d,withVisualDebug:f||m}),this.renderChildren(v)):null}}])
n.displayName="Flex"
return n}(i["Component"]),Cr.Item=br,Cr.propTypes={children:h.a.oneOfType([h.a.node,h.a.func]),as:h.a.elementType,elementRef:h.a.func,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),margin:je["a"].spacing,padding:je["a"].spacing,display:h.a.oneOf(["flex","inline-flex"]),textAlign:h.a.oneOf(["start","center","end"]),direction:h.a.oneOf(["row","column","row-reverse","column-reverse"]),alignItems:h.a.oneOf(["center","start","end","stretch"]),justifyItems:h.a.oneOf(["center","start","end","space-around","space-between"]),wrap:h.a.oneOf(["wrap","no-wrap","wrap-reverse"]),withVisualDebug:h.a.bool,inline:h.a.bool,wrapItems:h.a.bool,visualDebug:h.a.bool},Cr.defaultProps={children:null,as:"span",elementRef:function(e){},direction:"row",justifyItems:"start",display:"flex",withVisualDebug:false,wrap:"no-wrap",width:void 0,height:void 0,padding:void 0,margin:void 0,alignItems:void 0,textAlign:void 0},Or))||Er)||Er)
function kr(e){var t=e.colors,n=e.typography,r=e.borders,i=e.spacing,o=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:i.small,focusOutlineWidth:r.widthMedium,focusOutlineStyle:r.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:o.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:o.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:o.inputHeightLarge}}kr.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var xr,Dr,jr,Sr,Ir
var Br={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var Tr=(xr=Object(L["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),Dr=Object(je["g"])(kr,Br),xr(jr=Dr(jr=(Ir=Sr=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this)
r.handleInputRef=function(e){r._input=e
r.props.inputRef(e)}
r.handleChange=function(e){r.props.onChange(e,e.target.value)}
r.handleBlur=function(e){r.props.onBlur(e)
r.setState({hasFocus:false})}
r.handleFocus=function(e){r.props.onFocus(e)
r.setState({hasFocus:true})}
r.state={hasFocus:false}
r._defaultId=Object(Me["a"])("TextInput")
r._messagesId=Object(Me["a"])("TextInput-messages")
return r}Object(b["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,r=t.size,i=t.htmlSize,a=(t.display,t.textAlign),s=t.placeholder,u=t.value,l=t.defaultValue,c=t.required,d=t.isRequired,f=Object(J["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var p=Object(We["b"])(f)
var h=this.interaction
var m=(e={},Object(ke["a"])(e,Br.input,true),Object(ke["a"])(e,Br[r],r),Object(ke["a"])(e,Br["textAlign--".concat(a)],a),e)
var g=""
p["aria-describedby"]&&(g="".concat(p["aria-describedby"]))
this.hasMessages&&(g=""!==g?"".concat(g," ").concat(this._messagesId):this._messagesId)
return o.a.createElement("input",Object.assign({},p,{className:De()(m),defaultValue:l,value:u,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:d||c,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===h,readOnly:"readonly"===h,"aria-describedby":""!==g?g:null,size:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.width,r=t.inline,i=t.display,a=t.label,s=t.renderLabel,u=t.renderBeforeInput,l=t.renderAfterInput,c=t.messages,d=t.inputContainerRef,f=t.icon,p=t.shouldNotWrap
var h=this.interaction
var m=u||l||f
var g=(e={},Object(ke["a"])(e,Br.facade,true),Object(ke["a"])(e,Br.disabled,"disabled"===h),Object(ke["a"])(e,Br.invalid,this.invalid),Object(ke["a"])(e,Br.focused,this.state.hasFocus),e)
return o.a.createElement(P["a"],{id:this.id,label:Fe(s||a),messagesId:this._messagesId,messages:c,inline:"inline-block"===i||r,width:n,inputContainerRef:d,layout:this.props.layout},o.a.createElement("span",{className:De()(g)},m?o.a.createElement(wr,{wrap:p?"no-wrap":"wrap"},u&&o.a.createElement(wr.Item,{padding:"0 0 0 small"},Fe(u)),o.a.createElement(wr.Item,{shouldGrow:true,shouldShrink:true},o.a.createElement(wr,{__dangerouslyIgnoreExperimentalWarnings:true},o.a.createElement(wr.Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(l||f)&&o.a.createElement(wr.Item,{padding:"0 small 0 0"},Fe(l||f))))):this.renderInput()))}},{key:"interaction",get:function(){return cr({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(On["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
n.displayName="TextInput"
return n}(i["Component"]),Sr.propTypes={renderLabel:h.a.oneOfType([h.a.node,h.a.func]),type:h.a.oneOf(["text","email","url","tel","search","password"]),id:h.a.string,value:Object(_["a"])(h.a.string),defaultValue:h.a.string,interaction:h.a.oneOf(["enabled","disabled","readonly"]),messages:h.a.arrayOf(P["d"].message),size:h.a.oneOf(["small","medium","large"]),textAlign:h.a.oneOf(["start","center"]),width:h.a.string,htmlSize:h.a.oneOfType([h.a.string,h.a.number]),display:h.a.oneOf(["inline-block","block"]),shouldNotWrap:h.a.bool,placeholder:h.a.string,isRequired:h.a.bool,inputRef:h.a.func,inputContainerRef:h.a.func,renderBeforeInput:h.a.oneOfType([h.a.node,h.a.func]),renderAfterInput:h.a.oneOfType([h.a.node,h.a.func]),onChange:h.a.func,onBlur:h.a.func,onFocus:h.a.func,icon:h.a.func,label:h.a.oneOfType([h.a.node,h.a.func]),required:h.a.bool,inline:h.a.bool},Sr.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},Ir))||jr)||jr)
var Fr=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,r=Object(J["a"])(e,["children"])
var i=Object(Mt["a"])(n,this.props)
return o.a.createElement(i,Object.assign({},Object(We["b"])(r),{"aria-hidden":"true"}),t)}}])
n.displayName="PresentationContent"
return n}(i["Component"])
Fr.propTypes={as:h.a.elementType,children:h.a.node}
Fr.defaultProps={as:"span",children:null}
var Pr=n("fYLI")
var Lr=n("JX7q")
var Mr=n("LT0p")
var Nr=n("9ZSq")
var Rr=n.n(Nr)
function qr(e,t){return Rr()(e).darken(t).toRgbString()}function zr(e,t){return Rr()(e).setAlpha(t/100).toRgbString()}var Kr="inset 0 0 0.1875rem 0.0625rem"
var Ur=function(e){var t
var n=e.style,r=e.textColor,i=e.ghostTextColor,o=e.backgroundColor,a=e.borderColor,s=e.ghostBorderColor,u=void 0===s?a:s
return t={},Object(ke["a"])(t,"".concat(n,"Color"),r),Object(ke["a"])(t,"".concat(n,"BorderColor"),qr(a,10)),Object(ke["a"])(t,"".concat(n,"Background"),o),Object(ke["a"])(t,"".concat(n,"HoverBackground"),qr(o,10)),Object(ke["a"])(t,"".concat(n,"ActiveBackground"),qr(o,10)),Object(ke["a"])(t,"".concat(n,"ActiveBoxShadow"),"".concat(Kr," ").concat(qr(a,20,.45))),Object(ke["a"])(t,"".concat(n,"GhostColor"),i),Object(ke["a"])(t,"".concat(n,"GhostBorderColor"),u),Object(ke["a"])(t,"".concat(n,"GhostBackground"),"transparent"),Object(ke["a"])(t,"".concat(n,"GhostHoverBackground"),zr(i,10)),Object(ke["a"])(t,"".concat(n,"GhostActiveBackground"),"transparent"),Object(ke["a"])(t,"".concat(n,"GhostActiveBoxShadow"),"".concat(Kr," ").concat(zr(u,28))),t}
function Wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.borders,n=void 0===t?{}:t,i=e.colors,o=void 0===i?{}:i,a=e.forms,s=void 0===a?{}:a,u=e.spacing,l=void 0===u?{}:u,c=e.typography,d=void 0===c?{}:c
return Object(r["a"])({transform:"none",hoverTransform:"none",fontFamily:d.fontFamily,fontWeight:d.fontWeightNormal,textTransform:"none",letterSpacing:"normal",borderRadius:n.radiusMedium,borderStyle:n.style,borderWidth:n.widthSmall,smallHeight:s.inputHeightSmall,smallFontSize:d.fontSizeSmall,smallPaddingHorizontal:l.xSmall,smallPaddingTop:"0.375rem",smallPaddingBottom:"0.3125rem",mediumHeight:s.inputHeightMedium,mediumFontSize:d.fontSizeMedium,mediumPaddingHorizontal:l.small,mediumPaddingTop:"0.5625rem",mediumPaddingBottom:"0.5625rem",largeHeight:s.inputHeightLarge,largeFontSize:d.fontSizeLarge,largePaddingHorizontal:l.medium,largePaddingTop:"0.6875rem",largePaddingBottom:"0.6875rem",lineHeight:d.lineHeightFit,iconSizeSmall:"1rem",iconSizeMedium:"1.25rem",iconSizeLarge:"1.625rem"},Ur({style:"primary",backgroundColor:o.backgroundBrand,borderColor:o.borderBrand,textColor:o.textLightest,ghostTextColor:o.textBrand}),{},Ur({style:"secondary",backgroundColor:o.backgroundLight,borderColor:o.borderLight,ghostBorderColor:o.borderDarkest,textColor:o.textDarkest,ghostTextColor:o.textDarkest}),{},Ur({style:"success",backgroundColor:o.backgroundSuccess,borderColor:o.borderSuccess,textColor:o.textLightest,ghostTextColor:o.textSuccess}),{},Ur({style:"danger",backgroundColor:o.backgroundDanger,borderColor:o.borderDanger,textColor:o.textLightest,ghostTextColor:o.textDanger}),{},Ur({style:"primaryInverse",backgroundColor:o.backgroundLightest,borderColor:o.borderLightest,textColor:o.textDarkest,ghostTextColor:o.textLightest}),{primaryInverseBorderColor:qr(o.borderLight,10),primaryInverseHoverBackground:qr(o.backgroundLightest,5),primaryInverseActiveBackground:o.backgroundLightest,primaryInverseActiveBoxShadow:"".concat(Kr," ").concat(qr(o.borderLightest,25)),successGhostHoverBackground:zr(o.textSuccess,1)})}Wr["canvas"]=function(e){e.colors
var t=Object(J["a"])(e,["colors"])
return Object(r["a"])({},Ur({style:"primary",backgroundColor:t["ic-brand-button--primary-bgd"],borderColor:t["ic-brand-button--primary-bgd"],textColor:t["ic-brand-button--primary-text"],ghostTextColor:t["ic-brand-button--primary-bgd"]}),{primaryGhostHoverBackground:zr(t["ic-brand-button--primary-bgd"],10)})}
Wr["canvas-a11y"]=Wr["canvas-high-contrast"]=function(e){var t=e.colors
return{secondaryBorderColor:t.borderMedium,primaryInverseBorderColor:t.borderMedium}}
Wr["instructure"]=function(){return{borderRadius:"999em",smallPaddingTop:"0.5rem",smallPaddingBottom:"0.4375rem",mediumPaddingTop:"0.75rem",mediumPaddingBottom:"0.75rem",largePaddingTop:"1rem",largePaddingBottom:"1rem",largeFontSize:"1.125rem"}}
var Gr,Hr,Yr,Vr,Qr
var Zr={componentId:"fQfxa",template:function(e){return"\n\n.fQfxa_caGd{-ms-user-select:none;-webkit-user-select:none;border-radius:".concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-sizing:border-box;direction:inherit;display:block;font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";letter-spacing:").concat(e.letterSpacing||"inherit",";line-height:").concat(e.lineHeight||"inherit",";text-transform:").concat(e.textTransform||"inherit",";transform:").concat(e.transform||"inherit",";transition:background 0.2s,transform 0.2s;user-select:none;width:100%}\n\n.fQfxa_caGd:hover{transform:").concat(e.hoverTransform||"inherit","}\n\n.fQfxa_caGd.fQfxa_EMjX{text-align:start}\n\n[dir=ltr] .fQfxa_caGd.fQfxa_EMjX{text-align:left}\n\n[dir=rtl] .fQfxa_caGd.fQfxa_EMjX{text-align:right}\n\n.fQfxa_caGd.fQfxa_ImeN,[dir=ltr] .fQfxa_caGd.fQfxa_ImeN,[dir=rtl] .fQfxa_caGd.fQfxa_ImeN{text-align:center}\n\n.fQfxa_caGd.fQfxa_nWmp{padding-left:0;padding-right:0}\n\n.fQfxa_caGd.fQfxa_nWmp .fQfxa_biBD{padding-bottom:0;padding-top:0}\n\n.fQfxa_bZuE{opacity:0.5}\n\n.fQfxa_VCXp{font-size:").concat(e.smallFontSize||"inherit",";padding-left:").concat(e.smallPaddingHorizontal||"inherit",";padding-right:").concat(e.smallPaddingHorizontal||"inherit","}\n\n.fQfxa_VCXp .fQfxa_biBD{padding-bottom:").concat(e.smallPaddingBottom||"inherit",";padding-top:").concat(e.smallPaddingTop||"inherit","}\n\n.fQfxa_VCXp .fQfxa_eoCh{font-size:").concat(e.iconSizeSmall||"inherit","}\n\n.fQfxa_VCXp.fQfxa_bIHL{height:").concat(e.smallHeight||"inherit",";padding-left:0;padding-right:0;width:").concat(e.smallHeight||"inherit","}\n\n.fQfxa_VCXp.fQfxa_nWmp .fQfxa_eoCh{font-size:").concat(e.smallFontSize||"inherit","}\n\n.fQfxa_fKcQ{font-size:").concat(e.mediumFontSize||"inherit",";padding-left:").concat(e.mediumPaddingHorizontal||"inherit",";padding-right:").concat(e.mediumPaddingHorizontal||"inherit","}\n\n.fQfxa_fKcQ .fQfxa_biBD{padding-bottom:").concat(e.mediumPaddingBottom||"inherit",";padding-top:").concat(e.mediumPaddingTop||"inherit","}\n\n.fQfxa_fKcQ .fQfxa_eoCh{font-size:").concat(e.iconSizeMedium||"inherit","}\n\n.fQfxa_fKcQ.fQfxa_bIHL{height:").concat(e.mediumHeight||"inherit",";padding-left:0;padding-right:0;width:").concat(e.mediumHeight||"inherit","}\n\n.fQfxa_fKcQ.fQfxa_nWmp .fQfxa_eoCh{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.fQfxa_cnhd{font-size:").concat(e.largeFontSize||"inherit",";padding-left:").concat(e.largePaddingHorizontal||"inherit",";padding-right:").concat(e.largePaddingHorizontal||"inherit","}\n\n.fQfxa_cnhd .fQfxa_biBD{padding-bottom:").concat(e.largePaddingBottom||"inherit",";padding-top:").concat(e.largePaddingTop||"inherit","}\n\n.fQfxa_cnhd .fQfxa_eoCh{font-size:").concat(e.iconSizeLarge||"inherit","}\n\n.fQfxa_cnhd.fQfxa_bIHL{height:").concat(e.largeHeight||"inherit",";padding-left:0;padding-right:0;width:").concat(e.largeHeight||"inherit","}\n\n.fQfxa_cnhd.fQfxa_nWmp .fQfxa_eoCh{font-size:").concat(e.largeFontSize||"inherit","}\n\n.fQfxa_eoCh{align-items:center;display:flex}\n\n.fQfxa_biBD{display:block}\n\n.fQfxa_bIHL{line-height:1}\n\n.fQfxa_FJpd{border-radius:50%}\n\n.fQfxa_dqAF.fQfxa_eCSh{background:").concat(e.primaryBackground||"inherit",";border-color:").concat(e.primaryBorderColor||"inherit",";color:").concat(e.primaryColor||"inherit","}\n\n.fQfxa_dqAF.fQfxa_buuG{background:").concat(e.secondaryBackground||"inherit",";border-color:").concat(e.secondaryBorderColor||"inherit",";color:").concat(e.secondaryColor||"inherit","}\n\n.fQfxa_dqAF.fQfxa_bFtJ{background:").concat(e.primaryInverseBackground||"inherit",";border-color:").concat(e.primaryInverseBorderColor||"inherit",";color:").concat(e.primaryInverseColor||"inherit","}\n\n.fQfxa_dqAF.fQfxa_eZal{background:").concat(e.successBackground||"inherit",";border-color:").concat(e.successBorderColor||"inherit",";color:").concat(e.successColor||"inherit","}\n\n.fQfxa_dqAF.fQfxa_dRSL{background:").concat(e.dangerBackground||"inherit",";border-color:").concat(e.dangerBorderColor||"inherit",";color:").concat(e.dangerColor||"inherit","}\n\n.fQfxa_bCUx.fQfxa_eCSh{background:").concat(e.primaryGhostBackground||"inherit",";border-color:").concat(e.primaryGhostBorderColor||"inherit",";color:").concat(e.primaryGhostColor||"inherit","}\n\n.fQfxa_bCUx.fQfxa_buuG{background:").concat(e.secondaryGhostBackground||"inherit",";border-color:").concat(e.secondaryGhostBorderColor||"inherit",";color:").concat(e.secondaryGhostColor||"inherit","}\n\n.fQfxa_bCUx.fQfxa_bFtJ{background:").concat(e.primaryInverseGhostBackground||"inherit",";border-color:").concat(e.primaryInverseGhostBorderColor||"inherit",";color:").concat(e.primaryInverseGhostColor||"inherit","}\n\n.fQfxa_bCUx.fQfxa_eZal{background:").concat(e.successGhostBackground||"inherit",";border-color:").concat(e.successGhostBorderColor||"inherit",";color:").concat(e.successGhostColor||"inherit","}\n\n.fQfxa_bCUx.fQfxa_dRSL{background:").concat(e.dangerGhostBackground||"inherit",";border-color:").concat(e.dangerGhostBorderColor||"inherit",";color:").concat(e.dangerGhostColor||"inherit","}\n\n.fQfxa_bVmg{border-style:none}\n\n.fQfxa_bGBk{-moz-appearance:none;-webkit-appearance:none;appearance:none;text-decoration:none;touch-action:manipulation}\n\n.fQfxa_bGBk::-moz-focus-inner{border:0}\n\n.fQfxa_bGBk *{pointer-events:none}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_dqAF.fQfxa_eCSh{background:").concat(e.primaryActiveBackground||"inherit",";box-shadow:").concat(e.primaryActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_dqAF.fQfxa_buuG{background:").concat(e.secondaryActiveBackground||"inherit",";box-shadow:").concat(e.secondaryActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_dqAF.fQfxa_bFtJ{background:").concat(e.primaryInverseActiveBackground||"inherit",";box-shadow:").concat(e.primaryInverseActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_dqAF.fQfxa_eZal{background:").concat(e.successActiveBackground||"inherit",";box-shadow:").concat(e.successActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_dqAF.fQfxa_dRSL{background:").concat(e.dangerActiveBackground||"inherit",";box-shadow:").concat(e.dangerActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_bCUx.fQfxa_eCSh{background:").concat(e.primaryGhostActiveBackground||"inherit",";box-shadow:").concat(e.primaryGhostActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_bCUx.fQfxa_buuG{background:").concat(e.secondaryGhostActiveBackground||"inherit",";box-shadow:").concat(e.secondaryGhostActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_bCUx.fQfxa_bFtJ{background:").concat(e.primaryInverseGhostActiveBackground||"inherit",";box-shadow:").concat(e.primaryInverseGhostActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_bCUx.fQfxa_eZal{background:").concat(e.successGhostActiveBackground||"inherit",";box-shadow:").concat(e.successGhostActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:active .fQfxa_caGd.fQfxa_bCUx.fQfxa_dRSL{background:").concat(e.dangerGhostActiveBackground||"inherit",";box-shadow:").concat(e.dangerGhostActiveBoxShadow||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_dqAF.fQfxa_eCSh{background:").concat(e.primaryHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_dqAF.fQfxa_buuG{background:").concat(e.secondaryHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_dqAF.fQfxa_bFtJ{background:").concat(e.primaryInverseHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_dqAF.fQfxa_eZal{background:").concat(e.successHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_dqAF.fQfxa_dRSL{background:").concat(e.dangerHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_bCUx.fQfxa_eCSh{background:").concat(e.primaryGhostHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_bCUx.fQfxa_buuG{background:").concat(e.secondaryGhostHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_bCUx.fQfxa_bFtJ{background:").concat(e.primaryInverseGhostHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_bCUx.fQfxa_eZal{background:").concat(e.successGhostHoverBackground||"inherit","}\n\n.fQfxa_bGBk:hover .fQfxa_bCUx.fQfxa_dRSL{background:").concat(e.dangerGhostHoverBackground||"inherit","}")},content:"fQfxa_caGd","textAlign--start":"fQfxa_EMjX","textAlign--center":"fQfxa_ImeN",isCondensed:"fQfxa_nWmp",children:"fQfxa_biBD",isDisabled:"fQfxa_bZuE","size--small":"fQfxa_VCXp",iconSVG:"fQfxa_eoCh",hasOnlyIconVisible:"fQfxa_bIHL","size--medium":"fQfxa_fKcQ","size--large":"fQfxa_cnhd","shape--circle":"fQfxa_FJpd",withBackground:"fQfxa_dqAF","color--primary":"fQfxa_eCSh","color--secondary":"fQfxa_buuG","color--primary-inverse":"fQfxa_bFtJ","color--success":"fQfxa_eZal","color--danger":"fQfxa_dRSL",withoutBackground:"fQfxa_bCUx",withoutBorder:"fQfxa_bVmg",root:"fQfxa_bGBk"}
var Xr=(Gr=Object(M["a"])(),Hr=Object(je["g"])(Wr,Zr),Gr(Yr=Hr(Yr=(Qr=Vr=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._rootElement=null
e.handleElementRef=function(t){e._rootElement=t
e.props.elementRef(t)}
e.handleClick=function(t){var n=e.props.onClick
var r=Object(Lr["a"])(e),i=r.interaction
if("enabled"!==i){t.preventDefault()
t.stopPropagation()
return}"function"===typeof n&&n(t)}
e.handleKeyDown=function(t){var n=e.props,r=n.onClick,i=n.onKeyDown,o=n.href
var a=Object(Lr["a"])(e),s=a.interaction
i(t)
var u=R.a.codes,l=u.space,c=u.enter
if("button"!==e.elementType&&[l,c].includes(t.keyCode)){t.preventDefault()
t.stopPropagation()
"function"===typeof r&&"enabled"===s&&r(t)
o&&e._rootElement&&e._rootElement.click()}}
return e}Object(b["a"])(n,[{key:"focus",value:function(){this._rootElement&&this._rootElement.focus()}},{key:"renderChildren",value:function(){var e=this.props,t=e.renderIcon,n=e.children,r=e.textAlign,i=e.isCondensed
var a=o.a.createElement("span",{className:Zr.children},n)
if(!t)return a
var s=this.hasOnlyIconVisible
var u=o.a.createElement("span",{className:Zr.iconSVG},Fe(t))
var l=s?o.a.createElement(wr.Item,null,u,n):[o.a.createElement(wr.Item,{key:"icon",padding:"0 ".concat(i?"xx-small":"x-small"," 0 0")},u),o.a.createElement(wr.Item,{key:"children",shouldShrink:true},a)]
var c={shouldShrink:true,height:"100%",width:"100%",justifyItems:s||"center"===r?"center":"start"}
return o.a.createElement(wr,c,l)}},{key:"render",value:function(){var e
var t=this.props,n=t.type,r=t.size,i=(t.elementRef,t.as),a=t.href,s=t.color,u=(t.focusColor,t.textAlign),l=t.shape,c=t.display,d=t.withBackground,f=t.withBorder,p=t.isCondensed,h=t.margin,m=t.cursor,g=t.onClick,b=(t.renderIcon,t.tabIndex),v=Object(J["a"])(t,["type","size","elementRef","as","href","color","focusColor","textAlign","shape","display","withBackground","withBorder","isCondensed","margin","cursor","onClick","renderIcon","tabIndex"])
var y=this.interaction
var _="disabled"===y
var E="readonly"===y
var C="enabled"===y
var O=this.hasOnlyIconVisible
var A=De()((e={},Object(ke["a"])(e,Zr.content,true),Object(ke["a"])(e,Zr["size--".concat(r)],true),Object(ke["a"])(e,Zr["color--".concat(s)],true),Object(ke["a"])(e,Zr["textAlign--".concat(u)],true),Object(ke["a"])(e,Zr["shape--".concat(l)],true),Object(ke["a"])(e,Zr.withBackground,d),Object(ke["a"])(e,Zr.withoutBackground,!d),Object(ke["a"])(e,Zr.isCondensed,p),Object(ke["a"])(e,Zr.withBorder,f),Object(ke["a"])(e,Zr.withoutBorder,!f),Object(ke["a"])(e,Zr.hasOnlyIconVisible,O),Object(ke["a"])(e,Zr.isDisabled,_),e))
return o.a.createElement(Vt,Object.assign({},Object(We["b"])(v),{as:this.elementType,focusColor:this.focusColor,position:"relative",display:c,width:"block"===c?"100%":"auto",borderRadius:"circle"===l?"circle":"medium",background:"transparent",padding:"none",borderWidth:"none",margin:h,cursor:_?"not-allowed":m,href:a,type:a?null:n,elementRef:this.handleElementRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,role:g&&"button"!==i?"button":null,tabIndex:g&&i?b||"0":b,disabled:_||E,className:C?Zr.root:null}),o.a.createElement("span",{className:A},this.renderChildren()))}},{key:"hasOnlyIconVisible",get:function(){var e=this.props,t=e.children,n=e.renderIcon
return n&&!Object(Mr["a"])(t)}},{key:"elementType",get:function(){return Object(Mt["a"])(n,this.props)}},{key:"interaction",get:function(){return cr({props:this.props})}},{key:"focusColor",get:function(){var e=this.props,t=e.color,n=e.focusColor,r=e.withBackground
if(n)return n
if("primary-inverse"===t&&r)return"info"
return t.includes("inverse")?"inverse":"info"}},{key:"focused",get:function(){return Object(On["a"])(this._rootElement)}}])
n.displayName="BaseButton"
return n}(i["Component"]),Vr.propTypes={children:h.a.node,type:h.a.oneOf(["button","submit","reset"]),size:h.a.oneOf(["small","medium","large"]),elementRef:h.a.func,as:h.a.elementType,interaction:h.a.oneOf(["enabled","disabled","readonly"]),color:h.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:h.a.oneOf(["info","inverse"]),display:h.a.oneOf(["inline-block","block"]),textAlign:h.a.oneOf(["start","center"]),shape:h.a.oneOf(["rectangle","circle"]),withBackground:h.a.bool,withBorder:h.a.bool,isCondensed:h.a.bool,margin:je["a"].spacing,cursor:h.a.string,href:h.a.string,onClick:h.a.func,onKeyDown:h.a.func,renderIcon:h.a.oneOfType([h.a.node,h.a.func]),tabIndex:h.a.oneOfType([h.a.number,h.a.string])},Vr.defaultProps={children:null,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",display:"inline-block",textAlign:"start",withBackground:true,withBorder:true,isCondensed:false,margin:"0",cursor:"pointer",href:void 0,onClick:void 0,onKeyDown:function(e){},renderIcon:void 0,tabIndex:void 0},Qr))||Yr)||Yr)
var $r,Jr,ei,ti,ni
var ri=($r=Object(M["a"])(),Jr=Object(je["g"])(Wr),$r(ei=Jr(ei=(ni=ti=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._baseButton=null
return e}Object(b["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,r=t.renderIcon,i=t.screenReaderLabel,a=t.type,s=t.size,u=t.elementRef,l=t.as,c=t.interaction,d=t.color,f=t.focusColor,p=t.shape,h=t.withBackground,m=t.withBorder,g=t.margin,b=t.cursor,v=t.href,y=Object(J["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var _=this.theme
return o.a.createElement(Xr,Object.assign({},Object(We["b"])(y),{type:a,size:s,elementRef:u,as:l,interaction:c,color:d,focusColor:f,shape:p,withBackground:h,withBorder:m,margin:g,cursor:b,href:v,renderIcon:n||r,theme:_,ref:function(t){e._baseButton=t},__dangerouslyIgnoreExperimentalWarnings:true}),o.a.createElement(Pr["a"],null,i))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(i["Component"]),ti.propTypes={children:h.a.oneOfType([h.a.node,h.a.func]),renderIcon:h.a.oneOfType([h.a.node,h.a.func]),screenReaderLabel:h.a.string.isRequired,type:h.a.oneOf(["button","submit","reset"]),size:h.a.oneOf(["small","medium","large"]),elementRef:h.a.func,as:h.a.elementType,interaction:h.a.oneOf(["enabled","disabled","readonly"]),color:h.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:h.a.oneOf(["info","inverse"]),shape:h.a.oneOf(["rectangle","circle"]),withBackground:h.a.bool,withBorder:h.a.bool,margin:je["a"].spacing,cursor:h.a.string,href:h.a.string},ti.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},ni))||ei)||ei)
function ii(e){var t=e.colors
return{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,alertColor:t.textAlert,successColor:t.textSuccess}}ii.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var oi,ai,si,ui,li
var ci={componentId:"esvoZ",template:function(e){return"\n\n.esvoZ_bGBk{fill:currentColor}\n\n.esvoZ_eXrk{display:inline-block}\n\n.esvoZ_cRbP{display:block}\n\n.esvoZ_drOs{color:inherit}\n\n.esvoZ_eCSh{color:".concat(e.primaryColor||"inherit","}\n\n.esvoZ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.esvoZ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.esvoZ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.esvoZ_eZal{color:").concat(e.successColor||"inherit","}\n\n.esvoZ_cVUo{color:").concat(e.brandColor||"inherit","}\n\n.esvoZ_eScd{color:").concat(e.warningColor||"inherit","}\n\n.esvoZ_cpQl{color:").concat(e.errorColor||"inherit","}\n\n.esvoZ_cUGG{color:").concat(e.alertColor||"inherit","}")},root:"esvoZ_bGBk",inline:"esvoZ_eXrk",block:"esvoZ_cRbP","color--inherit":"esvoZ_drOs","color--primary":"esvoZ_eCSh","color--secondary":"esvoZ_buuG","color--primary-inverse":"esvoZ_bFtJ","color--secondary-inverse":"esvoZ_dsSB","color--success":"esvoZ_eZal","color--brand":"esvoZ_cVUo","color--warning":"esvoZ_eScd","color--error":"esvoZ_cpQl","color--alert":"esvoZ_cUGG"}
var di=(oi=Object(M["a"])(),ai=Object(je["g"])(ii,ci),oi(si=ai(si=(li=ui=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
e=t.call(this)
e.titleId=Object(Me["a"])("InlineSVG-title")
e.descId=Object(Me["a"])("InlineSVG-desc")
return e}Object(b["a"])(n,[{key:"renderTitle",value:function(){var e=this.props.title
return e?o.a.createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(e){return e?o.a.createElement("desc",{id:this.descId},e):null}},{key:"renderContent",value:function(){if(this.props.src){var e=n.prepareSrc(this.props.src)
return o.a.createElement("g",{role:"presentation",dangerouslySetInnerHTML:{__html:e}})}return o.a.createElement("g",{role:"presentation"},this.props.children)}},{key:"render",value:function(){var e
var t=this.props,i=t.style,a=t.title,s=t.description,u=t.focusable,l=(t.children,t.src,t.color),c=Object(J["a"])(t,["style","title","description","focusable","children","src","color"])
var d="auto"===this.props.width?null:this.props.width
var f="auto"===this.props.height?null:this.props.height
return o.a.createElement("svg",Object.assign({},fi(this.props.src),Object(We["a"])(this.props,n.propTypes,["inline"]),{style:Object(r["a"])({},i,{width:d,height:f}),width:d,height:f,"aria-hidden":a?null:"true","aria-labelledby":this.labelledBy,role:this.role,focusable:u?"true":"false",className:De()((e={},Object(ke["a"])(e,ci.root,true),Object(ke["a"])(e,ci["color--".concat(l)],"auto"!==l),Object(ke["a"])(e,ci.inline,this.props.inline),Object(ke["a"])(e,ci.block,!this.props.inline),Object(ke["a"])(e,c.className,c.className),e))}),this.renderTitle(),this.renderDesc(s),this.renderContent())}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[]
this.props.title&&e.push(this.titleId)
this.props.description&&e.push(this.descId)
return e.length>0?e.join(" "):null}}])
n.displayName="InlineSVG"
return n}(i["Component"]),ui.propTypes={children:h.a.node,src:h.a.string,title:h.a.string,description:h.a.string,focusable:h.a.bool,width:h.a.oneOfType([h.a.string,h.a.number]),height:h.a.oneOfType([h.a.string,h.a.number]),inline:h.a.bool,color:h.a.oneOf(["inherit","primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand","auto"])},ui.defaultProps={focusable:false,src:"",title:"",description:"",inline:true,children:null,width:"1em",height:"1em",color:"inherit"},ui.prepareSrc=function(e){var t=/<svg[^>]*>((.|[\n\r])*)<\/svg>/
var n=t.exec(e)
return n?n[1]:e},li))||si)||si)
function fi(e){var t={}
var n=/<svg\s+([^>]*)\s*>/
var r=/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g
if("string"===typeof e){var i=n.exec(e)
var o=i?i[1]:""
var a=["xmlns","xmlns:xlink","version"]
var s=r.exec(o)
while(null!=s){-1===a.indexOf(s[1])&&(t[s[1]]=s[2]||(s[3]?s[3]:s[4]?s[4]:s[5])||s[1])
s=r.exec(o)}}return t}function pi(){return{sizeXSmall:"1.125rem",sizeSmall:"2rem",sizeMedium:"3rem",sizeLarge:"5rem",sizeXLarge:"10rem"}}var hi,mi,gi,bi,vi
var yi={componentId:"cGqzL",template:function(e){return"\n\n.cGqzL_bGBk{height:1em;line-height:1;vertical-align:middle;width:1em}\n\n.cGqzL_cwgF{transform:rotate(90deg)}\n\n.cGqzL_exaY{transform:rotate(180deg)}\n\n.cGqzL_dTDN{transform:rotate(270deg)}\n\n[dir=rtl] .cGqzL_owrh{transform:scaleX(-1)}\n\n[dir=rtl] .cGqzL_owrh.cGqzL_cwgF{transform:scaleX(-1) rotate(90deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_exaY{transform:scaleX(-1) rotate(180deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_dTDN{transform:scaleX(-1) rotate(270deg)}\n\n.cGqzL_dIzR{font-size:".concat(e.sizeXSmall||"inherit","}\n\n.cGqzL_VCXp{font-size:").concat(e.sizeSmall||"inherit","}\n\n.cGqzL_fKcQ{font-size:").concat(e.sizeMedium||"inherit","}\n\n.cGqzL_cnhd{font-size:").concat(e.sizeLarge||"inherit","}\n\n.cGqzL_fWMB{font-size:").concat(e.sizeXLarge||"inherit","}")},root:"cGqzL_bGBk","rotate--90":"cGqzL_cwgF","rotate--180":"cGqzL_exaY","rotate--270":"cGqzL_dTDN",bidirectional:"cGqzL_owrh","size--x-small":"cGqzL_dIzR","size--small":"cGqzL_VCXp","size--medium":"cGqzL_fKcQ","size--large":"cGqzL_cnhd","size--x-large":"cGqzL_fWMB"}
var _i=(hi=Object(M["a"])(),mi=Object(je["g"])(pi,yi),hi(gi=mi(gi=(vi=bi=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e
var t=this.props,n=t.rotate,r=t.className,i=t.size,a=t.bidirectional,s=Object(J["a"])(t,["rotate","className","size","bidirectional"])
return o.a.createElement(di,Object.assign({},s,{rotate:n,className:De()((e={},Object(ke["a"])(e,yi.root,true),Object(ke["a"])(e,yi["rotate--".concat(n)],n&&"0"!==n),Object(ke["a"])(e,yi["size--".concat(i)],i),Object(ke["a"])(e,yi.bidirectional,a),Object(ke["a"])(e,r,r),e))}))}}])
n.displayName="SVGIcon"
return n}(i["Component"]),bi.propTypes=Object(r["a"])({},di.propTypes,{rotate:h.a.oneOf(["0","90","180","270"]),size:h.a.oneOf(["x-small","small","medium","large","x-large"]),bidirectional:h.a.bool}),bi.defaultProps={rotate:"0",bidirectional:false,size:void 0},vi))||gi)||gi)
var Ei=o.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(-1 0 0 1 1920.135 0)"})
var Ci=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){return o.a.createElement(_i,Object.assign({},this.props,{name:"IconArrowOpenStart",viewBox:"0 0 1920 1920",bidirectional:true}),Ei)}}])
n.displayName="IconArrowOpenStartSolid"
return n}(i["Component"])
Ci.glyphName="arrow-open-start"
Ci.variant="Solid"
Ci.propTypes=Object(r["a"])({},_i.propTypes)
var Oi=o.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var Ai=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){return o.a.createElement(_i,Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),Oi)}}])
n.displayName="IconArrowOpenEndSolid"
return n}(i["Component"])
Ai.glyphName="arrow-open-end"
Ai.variant="Solid"
Ai.propTypes=Object(r["a"])({},_i.propTypes)
function wi(e){var t=e.colors,n=e.typography
e.borders,e.spacing
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,buttonIconSize:n.fontSizeMedium}}wi.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var ki,xi,Di,ji
var Si={componentId:"dfDow",template:function(e){return"\n\n.dfDow_bGBk{align-items:center;box-sizing:border-box;color:".concat(e.color||"inherit",";display:flex;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";justify-content:space-between;padding:0 0.125rem}\n\n.dfDow_eCxz{font-size:").concat(e.buttonIconSize||"inherit","}")},root:"dfDow_bGBk",arrowIcon:"dfDow_eCxz"}
var Ii=(ki=Object(je["g"])(wi,Si),ki(xi=(ji=Di=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handlePrevClick=function(t){e.props.onPrev(t)}
e.handleNextClick=function(t){e.props.onNext(t)}
return e}Object(b["a"])(n,[{key:"render",value:function(){return o.a.createElement("div",{className:Si.root},o.a.createElement(ri,{withBackground:false,withBorder:false,onClick:this.handlePrevClick,renderIcon:o.a.createElement(Ci,{className:Si.arrowIcon}),screenReaderLabel:this.props.previousLabel}),this.props.children,o.a.createElement(ri,{withBackground:false,withBorder:false,onClick:this.handleNextClick,renderIcon:o.a.createElement(Ai,{className:Si.arrowIcon}),screenReaderLabel:this.props.nextLabel}))}}])
n.displayName="DatePickerPagination"
return n}(i["Component"]),Di.propTypes={previousLabel:h.a.string.isRequired,nextLabel:h.a.string.isRequired,onPrev:h.a.func.isRequired,onNext:h.a.func.isRequired,children:h.a.node},Di.defaultProps={children:null},ji))||xi)
function Bi(e){var t=e.colors,n=e.typography,r=e.borders,i=e.spacing,o=e.stacking
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderRadius:r.radiusMedium,labelMargin:"0",labelPadding:i.xSmall,headerFontWeight:n.fontWeightBold,cellPadding:i.xSmall,cellMinWidth:i.large,cellMinHeight:i.large,cellBorderWidth:r.widthSmall,cellBorderStyle:r.style,todayBackground:t.backgroundBrand,todayBorderRadius:i.large,todayColor:t.textLightest,selectedBackground:t.backgroundSuccess,selectedColor:t.textLightest,otherMonthColor:t.textDark,focusOutline:t.borderBrand,zIndex:o.above}}Bi.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutline:e["ic-brand-primary"]}}
var Ti=function(e,t){return e.isSame(t,"year")&&e.isSame(t,"month")}
var Fi=function(e,t){return Ti(e,t)&&e.isSame(t,"day")}
var Pi=function(e,t,n){var r=t.indexOf(e.weekday())>=0
var i
i=n&&"function"===typeof n?n(e):n.some((function(t){return Fi(e,t)}))
return r||i}
var Li,Mi,Ni,Ri,qi
var zi={componentId:"dfDow",template:function(e){return"\n\n.dyUpz_bGBk{align-items:stretch;background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";display:inline-flex;flex-direction:column;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}\n\n.dyUpz_xKLf,[dir=ltr] .dyUpz_xKLf,[dir=rtl] .dyUpz_xKLf{text-align:center}\n\n.dyUpz_drdB{border-collapse:collapse}\n\n.dyUpz_fsuY{font-weight:").concat(e.headerFontWeight||"inherit","}\n\n.dyUpz_bPWd{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background-color:").concat(e.background||"inherit",";border:none;border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;font-size:").concat(e.fontSize||"inherit",";min-height:").concat(e.cellMinHeight||"inherit",";min-width:").concat(e.cellMinWidth||"inherit",";outline:none;overflow:visible;padding:").concat(e.cellPadding||"inherit",";position:relative;text-align:center;touch-action:manipulation;user-select:none}\n\n[dir=ltr] .dyUpz_bPWd,[dir=rtl] .dyUpz_bPWd{text-align:center}\n\n.dyUpz_bPWd:focus{box-shadow:inset 0 0 0 0.125rem ").concat(e.background||"inherit",",0 0 0 0.0625rem ").concat(e.focusOutline||"inherit","}\n\n.dyUpz_bPWd.dyUpz_bCDV{color:").concat(e.otherMonthColor||"inherit","}\n\n.dyUpz_bPWd.dyUpz_fxYf{background-color:").concat(e.todayBackground||"inherit",";border-radius:").concat(e.todayBorderRadius||"inherit",";color:").concat(e.todayColor||"inherit","}\n\n.dyUpz_bPWd.dyUpz_fGhm{background-color:").concat(e.selectedBackground||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";color:").concat(e.selectedColor||"inherit","}\n\n.dyUpz_blJt{margin:").concat(e.labelMargin||"inherit",";padding:").concat(e.labelPadding||"inherit",";text-align:center}\n\n[dir=ltr] .dyUpz_blJt,[dir=rtl] .dyUpz_blJt{text-align:center}\n\n.dyUpz_ywdX{cursor:not-allowed;opacity:0.5}")},root:"dyUpz_bGBk",calendar:"dyUpz_xKLf",table:"dyUpz_drdB",header:"dyUpz_fsuY",cell:"dyUpz_bPWd",outside:"dyUpz_bCDV",today:"dyUpz_fxYf",selected:"dyUpz_fGhm",label:"dyUpz_blJt",disabled:"dyUpz_ywdX"}
var Ki=(Li=Object(M["a"])(),Mi=Object(je["g"])(Bi,zi),Li(Ni=Mi(Ni=(qi=Ri=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e,r){var i
Object(g["a"])(this,n)
i=t.call(this,e,r)
i.findNextEnabledDay=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60
switch(t){case R.a.codes.left:e.subtract(1,"days")
break
case R.a.codes.right:e.add(1,"days")
break
case R.a.codes.up:e.subtract(7,"days")
break
case R.a.codes.down:e.add(7,"days")}return n>=r?null:Pi(e,i.props.disabledDaysOfWeek,i.props.disabledDays)?i.findNextEnabledDay(e,t,n+1):e}
i.handleCalendarKeyDown=function(e){var t=R.a.codes,n=t.up,r=t.down,o=t.left,a=t.right
if(!(e.keyCode===n||e.keyCode===r||e.keyCode===o||e.keyCode===a))return
var s=i.parseDate(i.state.focusedValue)
var u=i.findNextEnabledDay(s,e.keyCode)
if(!u)return
e.preventDefault()
e.stopPropagation()
var l=u.format()
i.updatePagination(l)
i.setState({focusedValue:l})}
i.handlePaginationPrev=function(e){var t=i.parseDate(i.state.renderedValue)
var n=t.subtract(1,"months").format()
i.setState({renderedValue:n})
i.fireRenderedChange(e,n)}
i.handlePaginationNext=function(e){var t=i.parseDate(i.state.renderedValue)
var n=t.add(1,"months").format()
i.setState({renderedValue:n})
i.fireRenderedChange(e,n)}
i.handleDateClick=function(e,t){i.updatePagination(t)
i.setState({selectedValue:t})
i.fireSelectedChange(e,t)}
i.handleDateFocus=function(e){i.setState({focusedValue:e})}
var o=i._locale(e,r)
var a=i._timezone(e,r)
var s=j.now(o,a).hour(0).minute(0).second(0).millisecond(0).format()
var u=i._validateDateProp(e.todayValue,s,"todayValue",o,a)
var l=i._validateDateProp(e.selectedValue||e.defaultSelectedValue,u,"selectedValue",o,a)
var c=i._validateDateProp(e.renderedValue||e.defaultRenderedValue,l,"renderedValue",o,a)
var d=l
i.state={selectedValue:l,renderedValue:c,todayValue:u,focusedValue:d}
return i}Object(b["a"])(n,[{key:"componentWillReceiveProps",value:function(e){var t=this
e.selectedValue===this.props.selectedValue&&e.renderedValue===this.props.renderedValue&&e.todayValue===this.props.todayValue||this.setState((function(n){return{selectedValue:t.validateDateProp(e.selectedValue,n.selectedValue,"selectedValue"),renderedValue:t.validateDateProp(e.renderedValue,n.renderedValue,"renderedValue"),todayValue:t.validateDateProp(e.todayValue,n.todayValue,"todayValue")}}))}},{key:"componentDidUpdate",value:function(e,t){this.state.focusedValue!==t.focusedValue&&this._focusedDay&&this._focusedDay.focus()}},{key:"_validateDateProp",value:function(e,t,n,r,i){var o=this._parseDate(e,r,i)
var a=!e
var s=o.isValid()
"[DatePicker] Unexpected date format received for '".concat(n,"' prop: '").concat(e,"'.")
return a||!s?t:e}},{key:"validateDateProp",value:function(e,t,n){return this._validateDateProp(e,t,n,this.locale,this.timezone)}},{key:"_locale",value:function(e,t){return e.locale||t.locale||B.browserLocale()}},{key:"_timezone",value:function(e,t){return e.timezone||t.timezone||j.browserTimeZone()}},{key:"_parseDate",value:function(e,t,n){return j.parse(e,t,n)}},{key:"parseDate",value:function(e){return this._parseDate(e,this.locale,this.timezone)}},{key:"updatePagination",value:function(e){var t=this.parseDate(e)
var n=t.month()
var r=t.year()
var i=this.parseDate(this.state.renderedValue)
var o=i.month()
var a=i.year()
if(r<a){this.handlePaginationPrev()
return}if(r>a){this.handlePaginationNext()
return}n<o&&this.handlePaginationPrev()
n>o&&this.handlePaginationNext()}},{key:"fireRenderedChange",value:function(e,t){"function"===typeof this.props.onRenderedChange&&this.props.onRenderedChange(e,t)}},{key:"fireSelectedChange",value:function(e,t){"function"===typeof this.props.onSelectedChange&&this.props.onSelectedChange(e,t)}},{key:"renderHeaderCell",value:function(e){return o.a.createElement("th",{className:zi.header,key:e.dayOfYear()},o.a.createElement(Fr,null,e.format("dd")),o.a.createElement(Pr["a"],null,e.format("dddd")))}},{key:"renderHeader",value:function(e){var t=this
var n=e.clone().startOf("week")
var r=[0,1,2,3,4,5,6].map((function(e){return n.clone().add(e,"d")}))
return o.a.createElement("tr",null,r.map((function(e){return t.renderHeaderCell(e)})))}},{key:"renderDayCell",value:function(e,t,n,r,i){var a,s=this
var u=Pi(e,this.props.disabledDaysOfWeek,this.props.disabledDays)
var l=(a={},Object(ke["a"])(a,zi.cell,true),Object(ke["a"])(a,zi.today,Fi(e,t)),Object(ke["a"])(a,zi.selected,Fi(e,n)),Object(ke["a"])(a,zi.outside,!Ti(e,r)),Object(ke["a"])(a,zi.disabled,u),a)
var c=u?function(e){return null}:function(t){return s.handleDateClick(t,e.format())}
var d=function(){return s.handleDateFocus(e.format())}
return o.a.createElement("td",{key:e.dayOfYear()},o.a.createElement("button",{type:"button",className:De()(l),tabIndex:Ti(e,r)?"0":"-1",ref:function(t){Fi(e,i)&&(s._focusedDay=t)},onClick:c,onFocus:d,disabled:u,"aria-current":Fi(e,t)?"date":"false"},e.format("D")))}},{key:"renderWeekRow",value:function(e,t,n,r,i){var a=this
return o.a.createElement("tr",{key:e.week()},[0,1,2,3,4,5,6].map((function(o){return a.renderDayCell(e.clone().add(o,"d"),t,n,r,i)})))}},{key:"renderCalendar",value:function(e,t,n,r){var i=this
var o=n.clone().startOf("month").startOf("week")
t&&o.hour(t.hour()).minute(t.minute()).second(t.second()).millisecond(t.millisecond())
return[0,7,14,21,28,35].map((function(a){var s=o.clone().add(a,"d")
return i.renderWeekRow(s,e,t,n,r)}))}},{key:"render",value:function(){var e=this
var t=this.parseDate(this.state.todayValue)
var n=this.parseDate(this.state.selectedValue)
var r=this.parseDate(this.state.renderedValue)
var i=this.parseDate(this.state.focusedValue)
return o.a.createElement("div",{className:zi.root},o.a.createElement(Ii,{previousLabel:this.props.previousLabel,nextLabel:this.props.nextLabel,onPrev:this.handlePaginationPrev,onNext:this.handlePaginationNext},o.a.createElement("div",{className:zi.label},o.a.createElement("div",null,r.format("MMMM")),o.a.createElement("div",null,r.format("YYYY")))),o.a.createElement("div",{ref:function(t){e._calendar=t},className:zi.calendar,onKeyDown:this.handleCalendarKeyDown},o.a.createElement("table",{className:zi.table},o.a.createElement("thead",null,this.renderHeader(r)),o.a.createElement("tbody",null,this.renderCalendar(t,n,r,i)))))}},{key:"locale",get:function(){return this._locale(this.props,this.context)}},{key:"timezone",get:function(){return this._timezone(this.props,this.context)}},{key:"todayValue",get:function(){return this.state.todayValue}},{key:"selectedValue",get:function(){return this.state.selectedValue}},{key:"renderedValue",get:function(){return this.state.renderedValue}},{key:"focusedValue",get:function(){return this.state.focusedValue}}])
n.displayName="DatePicker"
return n}(i["Component"]),Ri.propTypes={previousLabel:h.a.string.isRequired,nextLabel:h.a.string.isRequired,defaultSelectedValue:F.iso8601,selectedValue:Object(_["a"])(F.iso8601,"onSelectedChange","defaultSelectedValue"),defaultRenderedValue:F.iso8601,renderedValue:Object(_["a"])(F.iso8601,"onRenderedChange","defaultRenderedValue"),todayValue:F.iso8601,locale:h.a.string,timezone:h.a.string,onSelectedChange:h.a.func,onRenderedChange:h.a.func,disabledDaysOfWeek:h.a.array,disabledDays:h.a.oneOfType([h.a.array,h.a.func])},Ri.defaultProps={disabledDaysOfWeek:[],disabledDays:[],onRenderedChange:void 0,onSelectedChange:void 0,locale:void 0,timezone:void 0,todayValue:void 0,renderedValue:void 0,defaultRenderedValue:void 0,selectedValue:void 0,defaultSelectedValue:void 0},Ri.contextTypes={locale:h.a.string,timezone:h.a.string},qi))||Ni)||Ni)
function Ui(e){var t=e.colors,n=e.typography
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest}}Ui.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var Wi,Gi,Hi,Yi,Vi,Qi
var Zi={componentId:"fabZw",template:function(e){return"\n\n.fabZw_bGBk{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}")},root:"fabZw_bGBk"}
var Xi=(Wi=Object(M["a"])(),Gi=Object(L["a"])("7.0.0",null,"Use DateInput from ui-date-input instead."),Hi=Object(je["g"])(Ui,Zi),Wi(Yi=Gi(Yi=Hi(Yi=(Qi=Vi=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e,i){var o
Object(g["a"])(this,n)
o=t.call(this,e,i)
o.textInputRef=function(e){o._input=e
e&&o.props.inputRef(e)}
o.handleTextInputChange=function(e){o.setState({textInputValue:e.target.value,showCalendar:false})}
o.handleTextInputKeyDown=function(e){if(e.keyCode===R.a.codes.enter){e.preventDefault()
o.acceptValue(e)}}
o.handleTextInputClick=function(e){o.acceptValue(e)
o.showCalendar()}
o.handleTextInputBlur=function(e){o.acceptValue(e)}
o.handleCalendarSelect=function(e,t){var n=o.parseDate(t)
n.isValid(),"[DateInput] Unexpected date format received from DatePicker: '".concat(t,"'.")
o.acceptValue(e,t)
n.isValid()&&o.hideCalendar()}
o.handleCalendarDismiss=function(){o.hideCalendar()}
var a=e.dateValue||e.defaultDateValue||void 0
var s=o._locale(e,i)
var u=o._timezone(e,i)
var l=o._parseDate(a,s,u)
!a||l.isValid(),"[DateInput] Unexpected date format received: '".concat(a,"'.")
o.state=Object(r["a"])({showCalendar:false},o.computeState(a,l,e))
delete o._input
return o}Object(b["a"])(n,[{key:"componentWillReceiveProps",value:function(e){var t=this
var n=e.dateValue!==this.props.dateValue||e.defaultDateValue!==this.props.defaultDateValue
var r=n||e.locale!==this.props.locale||e.timezone!==this.props.timezone
r&&this.setState((function(r){var i=n?null!=e.dateValue?e.dateValue:e.defaultDateValue||void 0:r.acceptedValue
var o=e.locale||t.locale
var a=e.timezone||t.timezone
var s=t._parseDate(i,o,a)
!i||s.isValid(),"[DateInput] Unexpected date format received: '".concat(i,"'.")
return t.computeState(i,s,e,r)}))}},{key:"focus",value:function(){this._input.focus()}},{key:"toggleCalendar",value:function(e){this.setState({showCalendar:e})}},{key:"showCalendar",value:function(){this.toggleCalendar(true)}},{key:"hideCalendar",value:function(){this.toggleCalendar(false)}},{key:"acceptValue",value:function(e,t){var n=this
var r=t||e.target.value
this.setState((function(t,i){var o=n.parseDate(r).hour(t.hour).minute(t.minute).second(t.second).millisecond(t.millisecond)
var a=n.computeState(r,o,i,t)
var s=a.acceptedValue!==t.acceptedValue
var u=a.isValidOrEmpty!==t.isValidOrEmpty
var l=!!o.isValid()&&Pi(o,n.props.disabledDaysOfWeek,n.props.disabledDays);(s||u)&&"function"===typeof n.props.onDateChange&&n.props.onDateChange(e,a.acceptedValue,a.textInputValue,!a.isValidOrEmpty,l)
return a}))}},{key:"_parseDate",value:function(e,t,n){return j.parse(e,t,n)}},{key:"_timezone",value:function(e,t){return e.timezone||t.timezone||j.browserTimeZone()}},{key:"_locale",value:function(e,t){return e.locale||t.locale||B.browserLocale()}},{key:"parseDate",value:function(e){return this._parseDate(e,this.locale,this.timezone)}},{key:"computeState",value:function(e,t,n,r){if(t.isValid())return{isValidOrEmpty:true,acceptedValue:t.toISOString(true),textInputValue:t.format(n.format),hour:t.hour(),minute:t.minute(),second:t.second(),millisecond:t.millisecond()}
var i=r?r.textInputValue:""
""===e&&(i="")
return{isValidOrEmpty:!e,acceptedValue:void 0,textInputValue:i||"",hour:0,minute:0,second:0,millisecond:0}}},{key:"render",value:function(){var e=["type","messages","defaultValue","value"]
var t=Object(We["c"])(this.props,Object(We["a"])(Tr.propTypes,{},e))
var n=this.props,r=n.onChange,i=n.onKeyDown,a=n.onClick,s=n.onBlur
return o.a.createElement("span",null,o.a.createElement(Tr,Object.assign({},t,{value:this.state.textInputValue,messages:this.messages,onChange:Object(dn["a"])(r,this.handleTextInputChange),onKeyDown:Object(dn["a"])(i,this.handleTextInputKeyDown),onClick:Object(dn["a"])(a,this.handleTextInputClick),onBlur:Object(dn["a"])(s,this.handleTextInputBlur),inputRef:this.textInputRef})),o.a.createElement(lr,{placement:this.props.placement,show:this.state.showCalendar,onDismiss:this.handleCalendarDismiss,positionTarget:this._input},o.a.createElement(lr.Content,null,o.a.createElement(Ki,{todayValue:this.props.todayValue,previousLabel:this.props.previousLabel,nextLabel:this.props.nextLabel,selectedValue:this.calendarSelectedValue,locale:this.locale,timezone:this.timezone,onSelectedChange:this.handleCalendarSelect,disabledDaysOfWeek:this.props.disabledDaysOfWeek,disabledDays:this.props.disabledDays,ref:this.props.datePickerRef}))))}},{key:"hasMessages",get:function(){return this.messages&&this.messages.length>0}},{key:"invalid",get:function(){return this.messages&&this.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(On["a"])(this._input)||this.state.showCalendar}},{key:"value",get:function(){return this._input.value}},{key:"calendarSelectedValue",get:function(){var e=this.state.acceptedValue
var t=e?this.parseDate(e):void 0
t&&t.isValid()||(t=j.now(this.locale,this.timezone))
return t.toISOString(true)}},{key:"locale",get:function(){return this._locale(this.props,this.context)}},{key:"timezone",get:function(){return this._timezone(this.props,this.context)}},{key:"messages",get:function(){if(!this.props.validationFeedback||!this.state.textInputValue)return this.props.messages
var e=[]
var t=this.parseDate(this.state.textInputValue)
var n=t.isValid()
if(n&&Pi(t,this.props.disabledDaysOfWeek,this.props.disabledDays)){var r=this.props.disabledDateMessage
"function"===typeof r&&(r=r(this.state.textInputValue))
e.push({text:r||"".concat(t.format(this.props.format)," is disabled"),type:"error"})}else if(n)e.push({text:t.format(this.props.format),type:"success"})
else{var i=this.props.invalidDateMessage
"function"===typeof i&&(i=i(this.state.textInputValue))
e.push({text:i||t.format(this.props.format),type:"error"})}return e.concat(this.props.messages)}}])
n.displayName="DateInput"
return n}(i["Component"]),Vi.propTypes={previousLabel:h.a.string.isRequired,nextLabel:h.a.string.isRequired,invalidDateMessage:h.a.oneOfType([h.a.string,h.a.func]).isRequired,disabledDateMessage:h.a.oneOfType([h.a.string,h.a.func]),placement:$.placement,format:h.a.string,messages:h.a.arrayOf(P["d"].message),locale:h.a.string,timezone:h.a.string,defaultDateValue:F.iso8601,onDateChange:h.a.func,dateValue:Object(_["a"])(F.iso8601,"onDateChange","defaultDateValue"),validationFeedback:h.a.bool,datePickerRef:h.a.func,inputRef:h.a.func,todayValue:F.iso8601,size:h.a.oneOf(["small","medium","large"]),layout:h.a.oneOf(["stacked","inline"]),width:h.a.string,inline:h.a.bool,placeholder:h.a.string,disabled:h.a.bool,readOnly:h.a.bool,required:h.a.bool,disabledDaysOfWeek:h.a.array,disabledDays:h.a.oneOfType([h.a.array,h.a.func])},Vi.defaultProps={disabledDateMessage:void 0,placement:"bottom center",messages:[],format:"LL",validationFeedback:true,onDateChange:function(e,t,n,r,i){},datePickerRef:function(e){},inputRef:function(e){},invalidDateMessage:function(e){},required:false,inline:false,size:"medium",disabled:false,readOnly:false,layout:"stacked",disabledDaysOfWeek:[],disabledDays:[],placeholder:void 0,width:void 0,todayValue:void 0,dateValue:void 0,defaultDateValue:void 0,timezone:void 0,locale:void 0},Vi.contextTypes={locale:h.a.string,timezone:h.a.string},Qi))||Yi)||Yi)||Yi)
var $i=n("f66B")
var Ji=n.n($i)
var eo=n("tV2z")
function to(e){return"string"===typeof e?e:e.displayName||e.name}function no(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e&&e.type){var n=t.map((function(e){return to(e)}))
return n.indexOf(to(e.type))>=0}return false}var ro=n("AQYv")
var io=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(J["a"])(e,["children"])
return Object(ro["a"])(t,n)}}])
n.displayName="ComponentIdentifier"
return n}(i["Component"])
io.propTypes={children:h.a.node}
io.defaultProps={children:null}
io.pick=function(e,t){var n
o.a.Children.forEach(t,(function(t){no(t,[e])&&(n=t)}))
return n}
n("V/Za")
n("Apj0")
var oo=function(){var e=function(){return function(e){return e}}
e.deprecatePropValues=function(){}
e.warnDeprecatedProps=function(){}
e.warnDeprecatedComponent=function(){}
e.changedPackageWarning=function(){}
return e}()
n("foSv")
n("ReuC")
var ao=function(){return function(e){return e}}
var so={placement:h.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:h.a.oneOfType([z,h.a.func]),constrain:h.a.oneOfType([z,h.a.func,h.a.oneOf(["window","scroll-parent","parent","none"])])}
var uo=n("P5Q5")
function lo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof e){if(!(e.prototype&&e.prototype.isReactComponent))return e(t)
return o.a.createElement(e,t)}return e}var co=n("ljRp")
function fo(e,t){var n=Object(co["a"])(e)
var r=Object(co["a"])(t)
return!(!n||!r)&&(n.contains?n.contains(r):n.compareDocumentPosition?n===r||!!(16&n.compareDocumentPosition(r)):po(n,r))}function po(e,t){var n=t
while(n){if(n===e)return true
n=n.parentNode}return false}var ho=U["a"]?fo:po
function mo(e){var t={top:0,left:0,height:0,width:0}
if(!U["a"])return t
var n=Object(co["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var r=e===document?document:Object(W["a"])(n)
var i=r&&r.documentElement
if(!i||!ho(i,n))return t
var o=n.getBoundingClientRect()
var a
for(a in o)t[a]=o[a]
if(r!==document){var s=r.defaultView.frameElement
if(s){var u=mo(s)
t.top+=u.top
t.bottom+=u.top
t.left+=u.left
t.right+=u.left}}return{top:t.top+(window.pageYOffset||i.scrollTop)-(i.clientTop||0),left:t.left+(window.pageXOffset||i.scrollLeft)-(i.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:r.body.clientWidth-t.width-t.left,bottom:r.body.clientHeight-t.height-t.top}}var go=function(){var e
if(U["a"]&&window.requestAnimationFrame&&window.cancelAnimationFrame)e=function(e){var t=window.requestAnimationFrame(e)
return{cancel:function(){return window.cancelAnimationFrame(t)}}}
else{var t=(new Date).getTime()
e=function(e){var n=(new Date).getTime()
var r=Math.max(0,16-(n-t))
var i=setTimeout(e,r)
t=n
return{cancel:function(){return clearTimeout(i)}}}}return e}()
function bo(e,t){var n=Object(co["a"])(e)
var r=[]
var i=mo(n)||{}
var o=false
function a(){if(false===o){var e=mo(n)||{}
var s=e.top!==i.top||e.left!==i.left||e.right!==i.right||e.bottom!==i.bottom||e.width!==i.width||e.height!==i.height
s&&"function"===typeof t&&t(e)
i=e
r.push(go(a))}}a()
return{remove:function(){o=true
r.forEach((function(e){return e.cancel()}))}}}var vo=n("0Ta6")
var yo=n("kPO3Y")
var _o=n.n(yo)
var Eo=n("NQUh")
function Co(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,i,o,a
var s=0
var u=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var c=!!n.leading
var d="maxWait"in n
var f=!("trailing"in n)||!!n.trailing
var p=d?Math.max(+n.maxWait||0,t):0
function h(t){var n=r
var a=i
r=i=void 0
s=t
if(true!==l){o=e.apply(a,n)
return o}}function m(e){s=e
u.push(setTimeout(v,t))
return c?h(e):o}function g(e){var n=e-a
var r=e-s
var i=t-n
return d?Math.min(i,p-r):i}function b(e){var n=e-a
var r=e-s
return"undefined"===typeof a||n>=t||n<0||d&&r>=p}function v(){var e=Date.now()
if(b(e))return y(e)
u.push(setTimeout(v,g(e)))}function y(e){C()
if(f&&r)return h(e)
r=i=void 0
return o}function _(){l=true
C()
s=0
r=a=i=void 0}function E(){return 0===u.length?o:y(Date.now())}function C(){u.forEach((function(e){return clearTimeout(e)}))
u=[]}function O(){var e=Date.now()
var n=b(e)
for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c]
r=l
i=this
a=e
if(n){if(0===u.length)return m(a)
if(d){u.push(setTimeout(v,t))
return h(a)}}0===u.length&&u.push(setTimeout(v,t))
return o}O.cancel=_
O.flush=E
return O}var Oo=n("YdL0")
var Ao=n("lQkV")
var wo,ko,xo,Do
var jo=(wo=Object(Ao["a"])(),wo(ko=(Do=xo=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r.state={mountNode:r.findMountNode(e)}
return r}Object(b["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)}},{key:"componentDidUpdate",value:function(e){var t=this.findMountNode(this.props)
t!==this.state.mountNode&&this.setState({mountNode:t})
this.props.open&&!e.open&&"function"===typeof this.props.onOpen&&this.props.onOpen(this.DOMNode)
!this.props.open&&e.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"componentWillUnmount",value:function(){this.removeNode()
this.props.open&&"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"render",value:function(){var e=this.props.children
return this.props.open&&o.a.Children.count(e)>0?Ue.a.createPortal(e,this.insertNode()):null}},{key:"removeNode",value:function(){if(this.DOMNode&&this.DOMNode.parentNode&&"function"===typeof this.DOMNode.parentNode.removeChild){this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}}},{key:"insertNode",value:function(){var e=this.props,t=(e.open,e.insertAt),n=(e.onOpen,e.onClose,e.mountNode,e.children,e.elementRef),i=Object(J["a"])(e,["open","insertAt","onOpen","onClose","mountNode","children","elementRef"])
if(!this.DOMNode){var o=document.createElement("span")
var a=Object(r["a"])({},Object(Oo["b"])(i),{dir:this.dir})
Object.keys(a).forEach((function(e){o.setAttribute(e,a[e])}))
n(o)
this.DOMNode=o}this.DOMNode.parentNode!==this.state.mountNode&&("bottom"===t?this.state.mountNode.appendChild(this.DOMNode):this.state.mountNode.insertBefore(this.DOMNode,this.state.mountNode.firstChild))
return this.DOMNode}},{key:"findMountNode",value:function(e){var t
"function"===typeof e.mountNode?t=e.mountNode():e.mountNode&&(t=e.mountNode)
t&&t.nodeName||(t=document.body)
return t}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="ReactPortal"
return n}(o.a.Component),xo.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([z,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func},xo.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:void 0,children:null,elementRef:function(e){}},Do))||ko)
var So,Io,Bo,To
var Fo=(So=Object(Ao["a"])(),So(Io=(To=Bo=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"componentDidMount",value:function(){this.renderPortal(this.props)}},{key:"shouldComponentUpdate",value:function(e,t){return!(Object(Eo["a"])(this.props,e)&&Object(Eo["a"])(this.state,t))}},{key:"componentWillReceiveProps",value:function(e){this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.removePortal(this.props)}},{key:"render",value:function(){return null}},{key:"renderPortal",value:function(e){var t=this
var n=e.open,i=e.insertAt,a=e.onOpen,s=(e.onClose,e.elementRef),u=e.children,l=Object(J["a"])(e,["open","insertAt","onOpen","onClose","elementRef","children"])
var c=!this.DOMNode
var d=this.mountNode
var f=u
"string"===typeof f&&f.length>0&&(f=o.a.createElement("span",null,f))
if(n&&o.a.Children.count(f)>0){if(!this.DOMNode){var p=document.createElement("span")
var h=Object(r["a"])({},Object(Oo["b"])(l),{dir:this.dir})
Object.keys(h).forEach((function(e){p.setAttribute(e,h[e])}))
s(p)
this.DOMNode=p}this.DOMNode.parentNode!==d&&("bottom"===i?d.appendChild(this.DOMNode):d.insertBefore(this.DOMNode,d.firstChild))
var m=function(){(c||!t.props.open&&n)&&"function"===typeof a&&a(t.DOMNode)}
Ue.a.unstable_renderSubtreeIntoContainer(this,f,this.DOMNode,m)}else this.removePortal(e)}},{key:"removePortal",value:function(e){var t
if(this.DOMNode){t=Ue.a.unmountComponentAtNode(this.DOMNode)
this.DOMNode.parentNode&&this.DOMNode.parentNode.removeChild(this.DOMNode)
this.DOMNode=null
this.props.elementRef(this.DOMNode)}t&&"function"===typeof e.onClose&&e.onClose()}},{key:"mountNode",get:function(){var e
"function"===typeof this.props.mountNode?e=this.props.mountNode():this.props.mountNode&&(e=this.props.mountNode)
e&&e.nodeName||(e=document.body)
return e}},{key:"DOMNode",get:function(){return this._node},set:function(e){this._node=e}},{key:"node",get:function(){return this.DOMNode}}])
n.displayName="SubtreePortal"
return n}(i["Component"]),Bo.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([z,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func},Bo.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}},To))||Io)
var Po="function"===typeof Ue.a.createPortal
var Lo=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handleElementRef=function(t){if(t){e.DOMNode=t
"function"===typeof e.props.elementRef&&e.props.elementRef(t)}}
return e}Object(b["a"])(n,[{key:"render",value:function(){return Po?o.a.createElement(jo,Object.assign({},this.props,{elementRef:this.handleElementRef})):o.a.createElement(Fo,Object.assign({},this.props,{elementRef:this.handleElementRef}))}}])
n.displayName="Portal"
return n}(i["Component"])
Lo.propTypes={open:h.a.bool,onOpen:h.a.func,onClose:h.a.func,mountNode:h.a.oneOfType([z,h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),children:h.a.node,elementRef:h.a.func}
Lo.defaultProps={open:false,insertAt:"bottom",onOpen:function(e){},onClose:function(){},mountNode:null,children:null,elementRef:function(e){}}
function Mo(e){var t=[]
if(!U["a"])return t
var n=Object(co["a"])(e)
if(n){var r=Object(G["a"])(n)||{}
var i=r.position
if("fixed"===i)return[n.ownerDocument]
var o=n
while(o&&1===o.nodeType&&(o=o.parentNode)){var a=void 0
try{a=Object(G["a"])(o)}catch(e){}if("undefined"===typeof a||null===a){t.push(o)
return t}var s=a,u=s.overflow,l=s.overflowX,c=s.overflowY;/(auto|scroll|overlay)/.test(u+c+l)&&("absolute"!==i||["relative","absolute","fixed"].indexOf(a.position)>=0)&&t.push(o)}t.push(n.ownerDocument.body)
n.ownerDocument!==document&&t.push(n.ownerDocument.defaultView)}return t}function No(e){var t=[]
if(!U["a"])return t
var n=Object(co["a"])(e)
if(n){var r=n
while((r=r.parentNode)&&r&&1===r.nodeType&&"BODY"!==r.tagName){var i=Object(G["a"])(r)
var o=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("-moz-transform")||i.getPropertyValue("-ms-transform")||i.getPropertyValue("-o-transform")||i.getPropertyValue("transform")||"none"
var a="none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o
"static"===i.position&&a||t.push(r)}t.push(Object(W["a"])(n).body)}return t}var Ro=n("DYpU")
var qo={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function zo(e,t){return Ko(e,(function(e,t){return[qo[e],t]}),t)}function Ko(e,t,n){var r=Array.isArray(e)?e:e.split(" "),i=Object(K["a"])(r,2),o=i[0],a=i[1]
var s=t(o,a).filter((function(e){return e}))
return n?s.join(n):s}function Uo(e,t,n){if(!e||"offscreen"===n.placement){var r=!n.container&&e
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:r?"none":null}}}var i=new Go(e,t,n)
return{placement:i.placement,style:i.style}}var Wo=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(g["a"])(this,e)
this.node=Object(co["a"])(t)
"string"===typeof n?this.placement=Zo(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=mo(this.node)
this._offset=Vo(r,this.size)}Object(b["a"])(e,[{key:"calculateOffset",value:function(e){var t={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(K["a"])(e,2),r=n[0],i=n[1]
if(["start","end"].indexOf(r)>=0){var o=[i,r]
r=o[0]
i=o[1]}var a=0
var s=0
"undefined"!==typeof t[r]&&(a=t[r])
"undefined"!==typeof t[i]&&(s=t[i])
return Ho([Vo({top:a,left:s},this.size),Yo(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(e){return Object(W["a"])(this.node).body===e?0:e.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return zo(this.placement)}},{key:"scrollParentsOffset",get:function(){var e=Mo(this.node)
var t=0
var n=0
for(var r=1;r<e.length;r++){var i=e[r]
var o=e[r-1]
t+=this.normalizeScrollTop(i)-this.normalizeScrollTop(o)
n+=i.scrollLeft-o.scrollLeft}return{top:t,left:n}}},{key:"positionedParentsOffset",get:function(){var e=No(this.node)
var t=Object(W["a"])(this.node)
var n=e.length>1?0:mo(t.documentElement).top
var r=0
var i=0
for(var o=1;o<e.length;o++){var a=mo(e[o])
var s=mo(e[o-1])
n+=s.top-a.top
r+=s.left-a.left
if(e[o]===t.body){n+=a.top
r+=a.left}i+=this.normalizeScrollTop(e[o])}n+=i
return{top:n,left:r}}}])
return e}()
var Go=function(){function e(t,n,r){Object(g["a"])(this,e)
this.options=r||{}
var i=this.options,o=i.container,a=i.constrain,s=i.placement,u=i.over
if(!t||"offscreen"===s)return
this.container=o||Object(W["a"])(t).body
this.element=new Wo(t,s,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new Wo(n||this.container,u?this.element.placement:this.element.mirroredPlacement)
"window"===a?this.constrainTo(Object(Ro["a"])(t)):"scroll-parent"===a?this.constrainTo(Mo(this.target.node)[0]):"parent"===a?this.constrainTo(this.container):"function"===typeof a?this.constrainTo(Object(co["a"])(a.call(null))):"object"===typeof a&&this.constrainTo(Object(co["a"])(a))}Object(b["a"])(e,[{key:"overflow",value:function(e){var t=Object(Ro["a"])(e)
var n=mo(e)
var r=mo(t)
var i=Ho([this.target.position,this.offset])
var o={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=i.left+o.left
var s=i.left+this.element.width+o.left
var u=i.top+o.top
var l=i.top+this.element.height+o.top
"bottom"===this.element.placement[0]?u-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(l+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(s+=this.element.width-this.target.width)
"top"===this.element.placement[1]?u-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(l+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(s+=this.element.width+this.target.width)
var c=e===t?n:{top:r.top+n.top,bottom:n.top+n.height,left:r.left+n.left,right:n.left+n.width}
return{top:u<c.top?c.top-u:0,bottom:l>c.bottom?l-c.bottom:0,left:a<c.left?c.left-a:0,right:s>c.right?s-c.right:0}}},{key:"constrainTo",value:function(e){if(!e)return
var t=this.overflow(e)
var n={top:t.top>0,bottom:t.bottom>0,left:t.left>0,right:t.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(t.bottom<t.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(t.bottom>t.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(t.left>t.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(t.left<t.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var e=this.target.calculateOffset(this.element.placement),t=e.top,n=e.left
var r=Ho([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:t-r.top,left:n-r.left}}},{key:"placement",get:function(){return Xo(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var e=Object(Ro["a"])(this.target.node)
var t=Ho([this.target.position,this.offset]),n=t.left,r=t.top
if(U["a"]&&e.matchMedia){var i=e.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||e.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!i){n=Math.round(n)
r=Math.round(r)}}return{left:n,top:r}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return e}()
function Ho(e){return e.reduce((function(e,t){return{top:e.top+t.top,left:e.left+t.left}}),{top:0,left:0})}function Yo(e,t){var n=e.top,r=e.left
"bottom"===t[0]&&(n=0-parseFloat(n,10))
"end"===t[0]&&(r=0-parseFloat(r,10))
return{top:n,left:r}}function Vo(e,t){var n=e.left,r=e.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*t.width:parseFloat(n,10)
r="string"===typeof r&&-1!==r.indexOf("%")?parseFloat(r,10)/100*t.height:parseFloat(r,10)
return{top:r,left:n}}function Qo(e){var t=Object(K["a"])(e,2),n=t[0],r=t[1]
if("center"===n||"stretch"===n){var i=[r,n]
n=i[0]
r=i[1]}return[n,r]}function Zo(e){var t=e.split(" ")
1===t.length&&(t=[e,"center"])
return Qo(t)}function Xo(e){return e.join(" ")}var $o=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var Jo,ea,ta,na,ra,ia,oa,aa,sa,ua,la,ca,da,fa,pa,ha
var ma={componentId:"eGKPI",template:function(e){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var ga=(Jo=oo("8.0.0",null,"Use Position's `renderTarget` prop instead."),ea=ao(),Jo(ta=ea(ta=(ra=na=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(io),na.displayName="PositionTarget",na.locatorAttribute="data-position-target",ra))||ta)||ta)
var ba=(ia=oo("8.0.0",null,"Use Posiition's `children` instead."),oa=ao(),ia(aa=oa(aa=(ua=sa=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(io),sa.displayName="PositionContent",sa.propTypes={children:h.a.node,placement:so.placement},sa.locatorAttribute="data-position-content",ua))||aa)||aa)
var va=(la=oo("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),ca=ao(),da=Object(eo["f"])($o,ma),la(fa=ca(fa=da(fa=(ha=pa=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var i
Object(g["a"])(this,n)
i=t.call(this,e)
i._timeouts=[]
i.handlePortalOpen=function(){i.position();(i.props.shouldTrackPosition||i.props.trackPosition)&&i.startTracking()
i._timeouts.push(setTimeout((function(){i.state.positioned&&"function"===typeof i.props.onPositioned&&i.props.onPositioned({top:i.state.style.top,left:i.state.style.left,placement:i.state.placement})}),0))}
i.position=function(){i.setState(Object(r["a"])({positioned:true},i.calculatePosition(i.props)))}
i.state=Object(r["a"])({positioned:false},i.calculatePosition(e))
i.position=Co(i.position,0,{leading:false,trailing:true})
i._id=i.props.id||Object(vo["a"])("Position")
return i}Object(b["a"])(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!_o()(this.state,t)||!Object(Eo["a"])(this.props,e)||!Object(Eo["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(e,t){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==e.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==e.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,r=n.style,i=n.placement
r&&t.style&&(i!==t.placement||r.top!==t.style.top||r.left!==t.style.left)&&this.props.onPositionChanged({top:r.top,left:r.left,placement:i})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(e){return clearTimeout(e)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(e){this.toggleLocatorAttribute(Object(co["a"])(this._content),n.contentLocatorAttribute,e)
this.toggleLocatorAttribute(Object(co["a"])(this._target),n.targetLocatorAttribute,e)}},{key:"toggleLocatorAttribute",value:function(e,t,n){if(e&&e.hasAttribute){n&&!e.hasAttribute(t)&&e.setAttribute(t,this._id)
!n&&e.hasAttribute(t)&&e.removeAttribute(t)}}},{key:"calculatePosition",value:function(e){return Uo(this._content,this._target,{placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY,constrain:e.constrain,container:e.mountNode,over:e.shouldPositionOverTarget||e.over})}},{key:"startTracking",value:function(){this._listener=this._listener||bo(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var e=this
var t=io.pick(n.Content,this.props.children)
t||(t=Object(ro["a"])(this.props.children))
if(t){var i
t=Object(uo["a"])(t,Object(ke["a"])({ref:function(t){e._content=t},style:Object(r["a"])({},t.props.style,{},this.state.style),className:De()((i={},Object(ke["a"])(i,ma.root,true),Object(ke["a"])(i,t.props.className,t.props.className),i))},n.contentLocatorAttribute,this._id))
t=o.a.createElement(Lo,{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},t)}return t}},{key:"renderTarget",value:function(){var e=this
var t=io.pick(n.Target,this.props.children)
t||(t=lo(this.props.renderTarget))
if(t)return Object(uo["a"])(t,Object(ke["a"])({ref:function(t){e._target=t}},n.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=lo(this.props.target)}},{key:"render",value:function(){var e=Object(ke["a"])({},n.locatorAttribute,this._id)
return o.a.createElement("span",e,this.renderTarget(),this.renderContent())}}])
n.displayName="Position"
return n}(i["Component"]),pa.Target=ga,pa.Content=ba,pa.locatorAttribute="data-position",pa.targetLocatorAttribute="data-position-target",pa.contentLocatorAttribute="data-position-content",pa.propTypes={renderTarget:h.a.oneOfType([h.a.node,h.a.func]),target:h.a.oneOfType([z,h.a.func]),placement:so.placement,mountNode:so.mountNode,insertAt:h.a.oneOf(["bottom","top"]),constrain:so.constrain,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),id:h.a.string,shouldTrackPosition:h.a.bool,shouldPositionOverTarget:h.a.bool,onPositionChanged:h.a.func,onPositioned:h.a.func,children:h.a.node,trackPosition:h.a.bool,over:h.a.bool},pa.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(e){},onPositionChanged:function(e){},children:null},ha))||fa)||fa)||fa)
var ya=function(e){var t=e.stacking
return{zIndex:t.topmost}}
var _a,Ea,Ca,Oa,Aa,wa,ka,xa,Da,ja,Sa,Ia,Ba,Ta
var Fa={componentId:"bgLNT",template:function(e){return"\n\n.bgLNT_bGBk{box-sizing:border-box;z-index:".concat(e.zIndex||"inherit","}")},root:"bgLNT_bGBk"}
var Pa=(_a=ao(),_a(Ea=(Oa=Ca=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(io),Ca.displayName="PositionTarget",Ca.locatorAttribute="data-position-target",Oa))||Ea)
var La=(Aa=ao(),Aa(wa=(xa=ka=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}return n}(io),ka.displayName="PositionContent",ka.propTypes={children:h.a.node,placement:so.placement},ka.locatorAttribute="data-position-content",xa))||wa)
var Ma=(Da=oo("7.0.0",null,"Use @instructure/ui-position instead"),ja=ao(),Sa=Object(eo["f"])(ya,Fa),Da(Ia=ja(Ia=Sa(Ia=(Ta=Ba=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.id,i=e.trackPosition,a=e.placement,s=e.offsetX,u=e.offsetY,l=e.mountNode,c=e.target,d=e.insertAt,f=e.over,p=e.onPositioned,h=e.onPositionChanged,m=e.constrain,g=Object(J["a"])(e,["children","id","trackPosition","placement","offsetX","offsetY","mountNode","target","insertAt","over","onPositioned","onPositionChanged","constrain"])
var b=io.pick(n.Target,t)
var v=io.pick(n.Content,t)
return o.a.createElement(va,Object.assign({},g,{target:c,renderTarget:b,id:r,shouldTrackPosition:i,placement:a,offsetX:s,offsetY:u,mountNode:l,insertAt:d,constrain:m,shouldPositionOverTarget:f,onPositioned:p,onPositionChanged:h}),v)}}])
n.displayName="Position"
return n}(i["Component"]),Ba.Target=Pa,Ba.Content=La,Ba.locatorAttribute="data-position",Ba.propTypes={children:h.a.node,target:h.a.oneOfType([z,h.a.func]),over:h.a.bool,placement:so.placement,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),onPositionChanged:h.a.func,onPositioned:h.a.func,trackPosition:h.a.bool,mountNode:so.mountNode,insertAt:h.a.oneOf(["bottom","top"]),constrain:so.constrain,id:h.a.string},Ba.defaultProps={trackPosition:true,placement:"bottom center",offsetX:0,offsetY:0,mountNode:null,target:null,insertAt:"bottom",over:false,onPositioned:function(e){},onPositionChanged:function(e){},constrain:"window",children:null,id:void 0},Ta))||Ia)||Ia)||Ia)
var Na=o.a.createElement("path",{d:"M526.298905 0L434 92.1683552 1301.63582 959.934725 434 1827.57054 526.298905 1920 1486.23363 959.934725z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 .153 -.153)"})
var Ra=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){return o.a.createElement(_i,Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),Na)}}])
n.displayName="IconArrowOpenDownLine"
return n}(i["Component"])
Ra.glyphName="arrow-open-down"
Ra.variant="Line"
Ra.propTypes=Object(r["a"])({},_i.propTypes)
var qa="undefined"!==typeof navigator&&navigator.userAgent||""
var za=/msie|trident/i.test(qa)
function Ka(e){var t=e.colors
return{trackColor:t.backgroundLight,color:t.backgroundBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseColor:t.backgroundBrand}}Ka["canvas-a11y"]=Ka["canvas-high-contrast"]=function(e){var t=e.colors
return{inverseColor:t.backgroundLightest}}
Ka.canvas=function(e){return{color:e["ic-brand-primary"]}}
var Ua,Wa,Ga,Ha,Ya,Va
var Qa={componentId:"eHQDY",template:function(e){return"\n\n@keyframes eHQDY_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes eHQDY_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.eHQDY_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.eHQDY_dTxv{stroke:".concat(e.trackColor||"inherit","}\n\n.eHQDY_dfBC,.eHQDY_dfBC .eHQDY_cJVF{height:").concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY,.eHQDY_dfBC .eHQDY_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.eHQDY_doqw,.eHQDY_doqw .eHQDY_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY,.eHQDY_doqw .eHQDY_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.eHQDY_ycrn,.eHQDY_ycrn .eHQDY_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.eHQDY_ycrn .eHQDY_cJVF,.eHQDY_ycrn .eHQDY_eWAY,.eHQDY_ycrn .eHQDY_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.eHQDY_ycrn .eHQDY_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.eHQDY_cMDj,.eHQDY_cMDj .eHQDY_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.eHQDY_cMDj .eHQDY_cJVF,.eHQDY_cMDj .eHQDY_eWAY,.eHQDY_cMDj .eHQDY_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.eHQDY_cMDj .eHQDY_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.eHQDY_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:eHQDY_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.eHQDY_eWAY,.eHQDY_dTxv{fill:none}\n\n.eHQDY_eWAY{stroke-linecap:round}\n\n.eHQDY_bGBk:not(.eHQDY_eoSs) .eHQDY_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:eHQDY_buIf;animation-timing-function:ease}\n\n.eHQDY_bGBk.eHQDY_eoSs .eHQDY_eWAY{stroke-dashoffset:100%}\n\n.eHQDY_ddES .eHQDY_eWAY{stroke:").concat(e.color||"inherit","}\n\n.eHQDY_enfx .eHQDY_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"eHQDY_bGBk",circleTrack:"eHQDY_dTxv","x-small":"eHQDY_dfBC",circle:"eHQDY_cJVF",circleSpin:"eHQDY_eWAY",small:"eHQDY_doqw",medium:"eHQDY_ycrn",large:"eHQDY_cMDj",rotate:"eHQDY_dpDr",ie11:"eHQDY_eoSs",morph:"eHQDY_buIf",default:"eHQDY_ddES",inverse:"eHQDY_enfx"}
var Za=(Ua=Object(L["a"])("8.0.0",{title:"renderTitle"}),Wa=Object(M["a"])(),Ga=Object(je["g"])(Ka,Qa),Ua(Ha=Wa(Ha=Ga(Ha=(Va=Ya=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this)
r.titleId=Object(Me["a"])("Spinner")
return r}Object(b["a"])(n,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var t=(e={},Object(ke["a"])(e,Qa.root,true),Object(ke["a"])(e,Qa[this.props.size],true),Object(ke["a"])(e,Qa[this.props.variant],true),Object(ke["a"])(e,Qa.ie11,za),e)
var r=Vt.omitViewProps(Object(We["a"])(this.props,n.propTypes),n)
this.props.renderTitle||this.props.title
return o.a.createElement(Vt,Object.assign({},r,{as:this.props.as,elementRef:this.props.elementRef,className:De()(t),margin:this.props.margin}),o.a.createElement("svg",{className:Qa.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},o.a.createElement("title",{id:this.titleId},Fe(this.props.renderTitle)),o.a.createElement("g",{role:"presentation"},"inverse"!==this.props.variant&&o.a.createElement("circle",{className:Qa.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),o.a.createElement("circle",{className:Qa.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
n.displayName="Spinner"
return n}(i["Component"]),Ya.propTypes={renderTitle:h.a.oneOfType([h.a.func,h.a.node]),size:h.a.oneOf(["x-small","small","medium","large"]),variant:h.a.oneOf(["default","inverse"]),margin:je["a"].spacing,elementRef:h.a.func,as:h.a.elementType,title:h.a.string},Ya.defaultProps={renderTitle:void 0,as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0},Va))||Ha)||Ha)||Ha)
function Xa(e){if("string"===typeof e)return e
if(!e||"object"!==typeof e)return null
if("undefined"!==typeof e.id&&null!==e.id)return e.id
if("undefined"!==typeof e.value&&null!==e.value)return e.value
return null}function $a(e){var t=e.colors,n=e.typography,r=(e.borders,e.spacing),i=e.stacking
e.forms
return{zIndex:i.topmost,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,groupFontWeight:n.fontWeightBold,lineHeight:n.lineHeightCondensed,labelColor:t.textDarkest,background:t.backgroundLightest,highlightedBackground:t.backgroundBrand,activeBackground:t.backgroundDark,activeLabelColor:t.textLightest,padding:"".concat(r.xSmall," ").concat(r.small),iconPaddingEnd:r.small,groupPadding:r.medium,smallFontSize:n.fontSizeSmall,mediumFontSize:n.fontSizeMedium,largeFontSize:n.fontSizeLarge}}$a.canvas=function(e){return{labelColor:e["ic-brand-font-color-dark"],highlightedBackground:e["ic-brand-primary"]}}
var Ja,es,ts,ns,rs
var is={componentId:"eZsEe",template:function(e){return"\n\n.eZsEe_dKpE{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:0}\n\n.eZsEe_ecYO{-ms-user-select:none;-webkit-user-select:none;align-items:center;background:".concat(e.background||"inherit",";cursor:pointer;display:flex;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.mediumFontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";outline:none;padding:").concat(e.padding||"inherit",";transition:background 0.2s;user-select:none}\n\n.eZsEe_ecYO.eZsEe_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.eZsEe_ecYO.eZsEe_cNcI:not(.eZsEe_fckf){background:").concat(e.highlightedBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_fGhm:not(.eZsEe_fckf){background:").concat(e.activeBackground||"inherit","}\n\n.eZsEe_ecYO.eZsEe_ywdX:not(.eZsEe_fckf){cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_fckf{cursor:not-allowed;font-weight:").concat(e.groupFontWeight||"inherit",";pointer-events:none}\n\n.eZsEe_ecYO.eZsEe_dXHE{-webkit-padding-start:").concat(e.groupPadding||"inherit",";padding-inline-start:").concat(e.groupPadding||"inherit","}\n\n[dir=ltr] .eZsEe_ecYO.eZsEe_dXHE{padding-left:").concat(e.groupPadding||"inherit","}\n\n[dir=rtl] .eZsEe_ecYO.eZsEe_dXHE{padding-right:").concat(e.groupPadding||"inherit","}\n\n.eZsEe_blJt{color:").concat(e.labelColor||"inherit","}\n\n.eZsEe_cNcI:not(.eZsEe_fckf) .eZsEe_blJt,.eZsEe_fGhm:not(.eZsEe_fckf) .eZsEe_blJt{color:").concat(e.activeLabelColor||"inherit","}\n\n.eZsEe_dnnz{-webkit-margin-end:").concat(e.iconPaddingEnd||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconPaddingEnd||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .eZsEe_dnnz{margin-left:0;margin-right:").concat(e.iconPaddingEnd||"inherit","}\n\n[dir=rtl] .eZsEe_dnnz{margin-left:").concat(e.iconPaddingEnd||"inherit",";margin-right:0}\n\n.eZsEe_crZr{z-index:").concat(e.zIndex||"inherit","}")},optionsList:"eZsEe_dKpE",option:"eZsEe_ecYO",small:"eZsEe_doqw",medium:"eZsEe_ycrn",large:"eZsEe_cMDj",highlighted:"eZsEe_cNcI",groupLabel:"eZsEe_fckf",selected:"eZsEe_fGhm",disabled:"eZsEe_ywdX",groupItem:"eZsEe_dXHE",label:"eZsEe_blJt",icon:"eZsEe_dnnz",container:"eZsEe_crZr"}
var os=(Ja=Object(M["a"])(),es=Object(je["g"])($a,is),Ja(ts=es(ts=(rs=ns=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.optionHeight=5
e.handleClick=function(t,n){if(n.disabled||n.groupLabel){t.preventDefault()
return}e.props.onSelect(t,n)}
return e}Object(b["a"])(n,[{key:"renderStaticOption",value:function(e){var t=this.props,n=t.size,r=t.onStaticClick
return o.a.createElement("li",{tabIndex:"-1",role:"option","aria-disabled":"true","aria-selected":"false",className:De()(is.option,Object(ke["a"])({},is[n],n)),onClick:r},o.a.createElement("span",{className:is.label},e))}},{key:"renderIcon",value:function(e){if("undefined"!==typeof e&&null!==e){var t=e
return o.a.createElement("span",{className:is.icon},o.a.createElement(t,null))}}},{key:"renderOptions",value:function(){var e=this
var t=this.props,n=t.options,r=t.optionsId,i=t.loadingText,a=t.emptyOption,s=t.selectedOption,u=t.onHighlightOption,l=t.size,c=t.highlightedIndex
if(i)return this.renderStaticOption(o.a.createElement(Za,{size:"x-small",renderTitle:i}))
if(0===n.length)return this.renderStaticOption(a)
return n.map((function(t,n){var i
var a=t.children,d=t.id,f=t.icon,p=t.groupLabel,h=t.groupItem
var m=Xa(s)===d
var g=t.disabled||p
var b={onMouseEnter:function(){return u(n)},onClick:function(n){return e.handleClick(n,t)}}
return o.a.createElement("li",Object.assign({},b,{role:"option",key:d,id:"".concat(r,"_").concat(d),className:De()(is.option,(i={},Object(ke["a"])(i,is.selected,m),Object(ke["a"])(i,is[l],l),Object(ke["a"])(i,is.highlighted,n===c),Object(ke["a"])(i,is.disabled,g),Object(ke["a"])(i,is.groupLabel,p),Object(ke["a"])(i,is.groupItem,h),i)),tabIndex:"-1","aria-selected":m?"true":"false","aria-disabled":g?"true":null}),o.a.createElement("span",{className:is.label},f&&e.renderIcon(f),a))}))}},{key:"render",value:function(){var e=this
var t=this.props,n=t.optionsId,r=t.menuRef,i=t.visibleOptionsCount,a=t.maxWidth,s=Object(J["a"])(t,["optionsId","menuRef","visibleOptionsCount","maxWidth"])
return o.a.createElement(Vt,{style:s.style,className:is.container,maxWidth:a||0,borderWidth:"small",borderRadius:"medium",shadow:"resting",background:"primary"},!!this.props.expanded&&o.a.createElement("ul",{className:is.optionsList,id:n,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onBlur:this.props.onBlur,onClick:function(e){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()},tabIndex:"-1",ref:function(t){r(t)
t&&(e.optionHeight=t.querySelector("li").clientHeight)},role:"listbox",style:{maxHeight:"".concat(i*this.optionHeight,"px")}},this.renderOptions()))}}])
n.displayName="SelectOptionsList"
return n}(i["Component"]),ns.propTypes={selectedOption:h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})]),options:h.a.arrayOf(h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})),optionsId:h.a.string,menuRef:h.a.func,visibleOptionsCount:h.a.oneOfType([h.a.string,h.a.number]),loadingText:h.a.string,emptyOption:h.a.node,onHighlightOption:h.a.func,onSelect:h.a.func,onKeyDown:h.a.func,onKeyUp:h.a.func,size:h.a.oneOf(["small","medium","large"]),maxWidth:h.a.string,onStaticClick:h.a.func,onBlur:h.a.func,highlightedIndex:h.a.number,expanded:h.a.bool,disabled:h.a.bool},ns.defaultProps={selectedOption:null,options:[],visibleOptionsCount:8,loadingText:null,emptyOption:"---",size:"medium",expanded:false,menuRef:function(e){},onHighlightOption:function(e){},onSelect:function(e,t){},onStaticClick:function(e){},disabled:false,optionsId:void 0,highlightedIndex:void 0,maxWidth:void 0,onKeyDown:void 0,onKeyUp:void 0,onBlur:void 0},rs))||ts)||ts)
function as(e){var t=e.colors,n=e.typography,r=e.borders,i=e.spacing,o=(e.stacking,e.forms)
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,color:t.textDarkest,iconColor:t.textDarkest,background:t.backgroundLightest,inputPadding:i.small,focusOutlineWidth:r.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:r.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:o.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:o.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:o.inputHeightLarge}}as.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
var ss,us,ls,cs,ds
var fs={componentId:"bgKsu",template:function(e){return"\n\n.bgKsu_engK{display:block;position:relative}\n\n.bgKsu_engK:before{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bgKsu_engK.bgKsu_eWbJ:before{opacity:1;transform:scale(1)}\n\n.bgKsu_engK.bgKsu_eWbJ.bgKsu_fszt:before{border-color:').concat(e.errorOutlineColor||"inherit","}\n\n.bgKsu_dtDb{background:").concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;display:flex;flex-wrap:wrap;font-family:").concat(e.fontFamily||"inherit",";margin:0;min-width:0.0625rem;overflow:hidden}\n\n.bgKsu_dtDb.bgKsu_fszt,.bgKsu_dtDb.bgKsu_fszt.bgKsu_eWbJ{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bgKsu_dtDb.bgKsu_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.bgKsu_dtDb.bgKsu_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.bgKsu_ccod{display:flex;flex:1 1 auto;position:relative}\n\n.bgKsu_cwos,input[type].bgKsu_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;cursor:default;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.inputPadding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_cwos,[dir=ltr] input[type].bgKsu_cwos{text-align:left}\n\n[dir=rtl] .bgKsu_cwos,[dir=rtl] input[type].bgKsu_cwos{text-align:right}\n\n.bgKsu_cwos::-ms-clear,input[type].bgKsu_cwos::-ms-clear{display:none}\n\n.bgKsu_cwos.bgKsu_bfxl,input[type].bgKsu_cwos.bgKsu_bfxl{cursor:text}\n\n.bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].bgKsu_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.bgKsu_cwos:-ms-input-placeholder,input[type].bgKsu_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_cwos::placeholder,input[type].bgKsu_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bgKsu_doqw .bgKsu_cwos,.bgKsu_doqw input[type].bgKsu_cwos{min-height:calc(").concat(e.smallHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ycrn .bgKsu_cwos,.bgKsu_ycrn input[type].bgKsu_cwos{min-height:calc(").concat(e.mediumHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_cMDj .bgKsu_cwos,.bgKsu_cMDj input[type].bgKsu_cwos{min-height:calc(").concat(e.largeHeight||"inherit"," - 0.125rem)}\n\n.bgKsu_ewVP{-webkit-margin-end:0;-webkit-margin-start:").concat(e.inputPadding||"inherit",";align-items:center;display:flex;height:100%;margin-inline-end:0;margin-inline-start:").concat(e.inputPadding||"inherit","}\n\n[dir=ltr] .bgKsu_ewVP{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n[dir=rtl] .bgKsu_ewVP{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n.bgKsu_dnnz{-webkit-margin-end:").concat(e.inputPadding||"inherit",";-webkit-margin-start:0;align-self:center;display:flex;fill:").concat(e.iconColor||"inherit",";flex-shrink:0;margin-inline-end:").concat(e.inputPadding||"inherit",";margin-inline-start:0;pointer-events:none}\n\n[dir=ltr] .bgKsu_dnnz{margin-left:0;margin-right:").concat(e.inputPadding||"inherit","}\n\n[dir=rtl] .bgKsu_dnnz{margin-left:").concat(e.inputPadding||"inherit",";margin-right:0}\n\n.bgKsu_blJt{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:inherit;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:inherit;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:inherit;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bgKsu_blJt,[dir=rtl] .bgKsu_blJt{text-align:inherit}")},inputWidth:"bgKsu_engK",focus:"bgKsu_eWbJ",invalid:"bgKsu_fszt",inputContainer:"bgKsu_dtDb",disabled:"bgKsu_ywdX",small:"bgKsu_doqw",medium:"bgKsu_ycrn",large:"bgKsu_cMDj",inputLayout:"bgKsu_ccod",input:"bgKsu_cwos",editable:"bgKsu_bfxl",inputIcon:"bgKsu_ewVP",icon:"bgKsu_dnnz",label:"bgKsu_blJt"}
var ps=(ss=Object(M["a"])(),us=Object(je["g"])(as,fs),ss(ls=us(ls=(ds=cs=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r._menu=null
r._input=null
r._inputContainer=null
r._timeouts=[]
r.timeoutId=null
r.open=function(){r.setState((function(){return{expanded:true}}),(function(){r.highlightSelectedOption()
r.props.onOpen()}))}
r.close=function(e,t){r.setState((function(n){n.expanded&&r.props.onClose(e,t)
return{expanded:false}}))}
r.select=function(e,t){r.props.onSelect(e,t)
if(r.props.closeOnSelect){e.preventDefault()
r.close(e,t)}}
r.highlightSelectedOption=function(){var e=0
r.selectedIndex>0&&(e=r.selectedIndex)
r._timeouts.push(setTimeout((function(){r.highlightOption(e)}),0))}
r.highlightOption=function(e){var t=r.props.options[e]
if(!r.props.loadingText&&t){if(t.disabled||t.groupLabel){e>r.state.highlightedIndex&&e+1<r.props.options.length?r.highlightOption(e+1):e<r.state.highlightedIndex&&e-1>=0&&r.highlightOption(e-1)
return}r.setState({highlightedIndex:e})
r.props.onHighlight(e)
var n=Object(re["a"])(r._menu)
if(n){var i=n.querySelectorAll("li")[e]
var o=n.scrollTop
var a=i.offsetTop
var s=o+n.clientHeight
var u=a+i.clientHeight
u>s?n.scrollTop=u-n.clientHeight:a<o&&(n.scrollTop=a)}}}
r.handleHomeKey=function(e){r.props.options.length>0&&r.highlightOption(0)}
r.handleEndKey=function(e){r.props.options.length>0&&r.highlightOption(r.props.options.length-1)}
r.handleEnterKey=function(e){r.expanded&&!r.props.loadingText&&r.props.options.length&&r.select(e,r.props.options[r.state.highlightedIndex])}
r.handleUpArrowKey=function(e){if(r.expanded){var t=Math.max(0,r.state.highlightedIndex-1)
var n=r.props.options[t]
var i=r._menu.querySelectorAll("li")[t]
r.highlightOption(t)
i&&n&&!n.disabled&&!n.groupLabel&&i.focus()}else r.open()}
r.handleDownArrowKey=function(e){if(r.expanded){var t=Math.min(r.props.options.length-1,r.state.highlightedIndex+1)
var n=r.props.options[t]
var i=r._menu.querySelectorAll("li")[t]
r.highlightOption(t)
i&&n&&!n.disabled&&!n.groupLabel&&i.focus()}else r.open()}
r.handleSpaceKey=function(e){if(!r.expanded){e.preventDefault()
r.open()}}
r.keyMap={up:r.handleUpArrowKey,down:r.handleDownArrowKey,home:r.handleHomeKey,end:r.handleEndKey,enter:r.handleEnterKey,space:r.handleSpaceKey}
r.handlePositioned=function(){r.setState({positioned:true},(function(){return r.props.onPositioned()}))}
r.handleKeyDown=function(e){var t=R.a.names[e.keyCode]
if(r.keyMap.hasOwnProperty(t)){"enter"===t&&!r.expanded||"space"===t||e.preventDefault()
r.keyMap[t](e)}else r._input&&r.props.editable&&r._input.focus()
"tab"===t&&r._input.focus()
r.props.onKeyDown(e)}
r.handleKeyUp=function(e){var t=R.a.names[e.keyCode]
if("esc"===t&&r.expanded){e.preventDefault()
r._input&&r._input.focus()
r.close(e)}r.props.onKeyUp(e)}
r.handleMouseDown=function(e){e.preventDefault()}
r.handleFocus=function(e){r.setState((function(){return{focus:true}}))
r.props.onFocus(e)}
r.handleBlur=function(e){e.persist()
var t=r._inputContainer.contains(e.relatedTarget)
!t&&r.expanded&&(t=r._menu.contains(e.relatedTarget))
r.setState((function(){return{focus:t}}),(function(){r.expanded&&!t&&r._timeouts.push(setTimeout((function(){on(r._menu)||r.close(e)}),0))
t||r.props.onBlur(e)}))}
r.handleClick=function(e){e.preventDefault()
if(r.props.disabled||r.props.readOnly)return
if(r.expanded)r.close()
else{r._input&&!Object(On["a"])(r._input)&&r._input.focus()
r.open()}r.props.onClick(e)}
r.handleChange=function(e){r.expanded||r.open()
r.props.onInputChange(e,e.target.value)}
r.handleMenuRef=function(e){r._menu=e}
r.handleInputRef=function(e){r._input=e}
r.handleInputContainerRef=function(e){r._inputContainer=e}
r.state={focus:false,highlightedIndex:r.getSelectedIndex(e),expanded:false,positioned:false}
r._defaultId=Object(Me["a"])("Select")
r._optionsId=Object(Me["a"])("Select-Options")
r._assistId=Object(Me["a"])("Select-assistiveText")
return r}Object(b["a"])(n,[{key:"getSelectedIndex",value:function(e){if(e.selectedOption){var t=e.options.findIndex((function(t){return Xa(t)===Xa(e.selectedOption)}))
return Math.max(t,0)}return-1}},{key:"componentWillReceiveProps",value:function(e){this.props.options!==e.options&&this.highlightSelectedOption()}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))}},{key:"renderIcon",value:function(){if("function"===typeof this.props.selectedOption.icon){var e=this.props.selectedOption.icon
return o.a.createElement("span",{className:fs.inputIcon},o.a.createElement(e,null))}}},{key:"render",value:function(){var e,t
var r=this.props,i=r.size,a=r.disabled,s=r.readOnly,u=r.editable,l=r.required,c=r.width,d=r.options,f=r.selectedOption,p=r.loadingText,h=r.emptyOption,g=r.visibleOptionsCount,b=r.children,v=r.onStaticClick,y=r.assistiveText,_=r.layout,E=r.announcement,C=r.constrain
var O=Object(We["a"])(this.props,n.propTypes,["allowEmpty","assistiveText","value"].concat(Object(m["a"])(Object.keys(P["a"].propTypes))))
var A=d[this.state.highlightedIndex]
A&&this.expanded?O["aria-activedescendant"]="".concat(this._optionsId,"_").concat(A.id):O["aria-activedescendant"]=null
var w=o.a.createElement("label",{htmlFor:this.id,className:fs.label},this.props.label)
Object(Mr["a"])(this.props.label)||(w=o.a.createElement(Pr["a"],null,w))
return o.a.createElement(P["c"],Object.assign({},Object(We["c"])(this.props,P["c"].propTypes),{as:"span",label:w,id:this.id,vAlign:"inline"===_?"middle":null,onMouseDown:this.handleMouseDown}),o.a.createElement("span",{style:{width:c||"auto"},className:De()(fs.inputWidth,(e={},Object(ke["a"])(e,fs.invalid,this.invalid),Object(ke["a"])(e,fs.focus,this.state.focus),e))},o.a.createElement("span",{ref:this.handleInputContainerRef,className:De()(fs.inputContainer,(t={},Object(ke["a"])(t,fs.invalid,this.invalid),Object(ke["a"])(t,fs.disabled,a),Object(ke["a"])(t,fs[i],i),Object(ke["a"])(t,fs.focus,this.state.focus),t))},b,o.a.createElement("span",{className:fs.inputLayout,onClick:this.handleClick},f&&this.renderIcon(),o.a.createElement("input",Object.assign({},O,{id:this.id,className:De()(fs.input,Object(ke["a"])({},fs.editable,u)),onFocus:this.handleFocus,onChange:u?this.handleChange:null,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"text",ref:Object(dn["a"])(this.props.inputRef,this.handleInputRef),role:"combobox","aria-expanded":this.expanded,"aria-owns":this.expanded?this._optionsId:null,"aria-describedby":this._assistId,"aria-controls":this.expanded?this._optionsId:null,"aria-autocomplete":u?"list":null,"aria-haspopup":"true",autoComplete:u?"off":null,required:l,"aria-required":l,"aria-invalid":this.invalid?"true":null,readOnly:!u,disabled:a||s})),o.a.createElement(Ra,{width:"0.875rem",height:"0.875rem",className:fs.icon})))),o.a.createElement(nn["a"],{open:this.state.expanded},o.a.createElement(Ma,{trackPosition:this.expanded,placement:this.placement,onPositioned:this.handlePositioned,target:this._inputContainer,constrain:C},o.a.createElement(Ma.Content,null,o.a.createElement(os,{options:d,selectedOption:f,optionsId:this._optionsId,menuRef:this.handleMenuRef,visibleOptionsCount:g,loadingText:p,emptyOption:h,onStaticClick:v,onHighlightOption:this.highlightOption,onSelect:this.select,expanded:this.state.expanded,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,highlightedIndex:this.state.highlightedIndex,maxWidth:this.props.optionsMaxWidth})))),o.a.createElement("span",{id:this._assistId,style:{display:"none"}},y),o.a.createElement(Pr["a"],null,o.a.createElement("span",{role:"log","aria-live":"polite","aria-atomic":"true"},E)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"expanded",get:function(){return this.state.positioned&&this.state.expanded}},{key:"placement",get:function(){return this.state.expanded?this.props.placement||"bottom stretch":"offscreen"}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"selectedIndex",get:function(){return this.getSelectedIndex(this.props)}}])
n.displayName="SelectField"
return n}(i["Component"]),cs.propTypes={selectedOption:h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})]),options:h.a.arrayOf(h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})),placement:$.placement,label:h.a.node.isRequired,messages:h.a.arrayOf(P["d"].message),size:h.a.oneOf(["small","medium","large"]),layout:h.a.oneOf(["stacked","inline"]),optionsMaxWidth:h.a.string,loadingText:h.a.string,editable:h.a.bool,emptyOption:h.a.node,visibleOptionsCount:h.a.oneOfType([h.a.string,h.a.number]),assistiveText:h.a.string,announcement:h.a.string,onPositioned:h.a.func,onSelect:h.a.func,onStaticClick:h.a.func,onHighlight:h.a.func,width:h.a.string,inline:h.a.bool,children:h.a.node,onFocus:h.a.func,onBlur:h.a.func,onKeyDown:h.a.func,onKeyUp:h.a.func,onClick:h.a.func,onInputChange:h.a.func,onOpen:h.a.func,onClose:h.a.func,id:h.a.string,inputRef:h.a.func,closeOnSelect:h.a.bool,constrain:$.constrain,disabled:h.a.bool,readOnly:h.a.bool,required:h.a.bool},cs.defaultProps={emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,announcement:null,options:[],visibleOptionsCount:8,closeOnSelect:true,editable:false,inline:false,constrain:"window",onPositioned:function(){},onSelect:function(e,t){},onStaticClick:function(e){},onHighlight:function(e){},onClick:function(e){},onInputChange:function(e){},onFocus:function(e){},onBlur:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},onOpen:function(e){},onClose:function(e){},disabled:false,readOnly:false,required:false,inputRef:void 0,id:void 0,children:null,width:void 0,assistiveText:void 0,optionsMaxWidth:void 0,layout:void 0,messages:void 0,placement:void 0},ds))||ls)||ls)
var hs,ms,gs,bs
var vs=h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node})
var ys=(hs=Object(M["a"])(),hs(ms=(bs=gs=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._input&&r._input.focus()}
r.matchSelectedOption=function(e,t){var n=r._input.value
var i
i=t?e.filteredOptions.find((function(e){return e.value===t.value})):e.filteredOptions.find((function(e){return e.label.toLowerCase()===n.toLowerCase()}))
return i}
r.handleClose=function(e,t){return r.setState((function(n,i){var o=r._input.value
var a=r.matchSelectedOption(n,t)
var s=t||n.selectedOption
if(a){r._input.value=a.label
s&&Xa(a)===Xa(s)||i.onChange(e,a)}else if(s){if(i.allowEmpty&&""===r._input.value){i.onChange(e,null)
return{filterText:null,filteredOptions:i.options,selectedOption:null}}r.props.allowCustom||(r._input.value=s.label)}else r.props.allowCustom||(r._input.value="")
r._input.value!==o&&r.props.onInputChange(null,r._input.value)
return{filterText:r.props.allowCustom?r._input.value:null,filteredOptions:i.options,selectedOption:a||s}}),r.props.onClose)}
r.handleInputChange=function(e,t){r.props.onInputChange(e,t)
var n=t.toLowerCase()
r.state.filterText!==n&&r.setState((function(e,t){var i=t.filter(r.props.options,n||"")
var o=e.selectedOption
t.allowCustom&&0===i.length&&(o=void 0)
return{filterText:n,filteredOptions:i,selectedOption:o}}))}
r.handleSelect=function(e,t){if(r._input.value!==t.label){r._input.value=t.label
r.props.onInputChange(null,r._input.value)}r.setState({filterText:null,filteredOptions:r.props.options,selectedOption:t},(function(){return r.focus()}))
r.props.onChange(e,t)}
r.handleInputRef=function(e){r._input=e
for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
r.props.inputRef.apply(Object(Lr["a"])(r),[e].concat(n))}
r.state={filterText:null,filteredOptions:e.options,selectedOption:r.getSelectedOptionFromProps(e)}
return r}Object(b["a"])(n,[{key:"findSelectedOption",value:function(e,t){var n=Xa(t)
var r=e.find((function(e){return Xa(e)===n}))
return r||t}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOption(e.options,t):this.findSelectedOption(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"componentDidMount",value:function(){this.state.selectedOption&&(this._input.value=this.state.selectedOption.label||"")}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!Ji()(this.props.options,e.options)
var r=this.props.selectedOption!=e.selectedOption&&!Ji()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly
var i=this.props.value!==e.value;(n||r||i)&&this.setState((function(i){var o=r?null:i.selectedOption
var a=t.getSelectedOptionFromProps(e,o)
var s=i.filterText||""
e.allowCustom&&r&&!t.props.selectedOption&&(s=a&&a.label||"")
var u=e.filter(e.options,s)
var l=a&&a.label||e.value||""
if((e.allowCustom||null===i.filterText)&&t._input.value!==l){t._input.value=l
e.onInputChange(null,t._input.value)}n&&e.onOptionsChange(u)
return{selectedOption:a,filteredOptions:u}}))}},{key:"render",value:function(){return o.a.createElement(ps,Object.assign({},Object(We["a"])(this.props,n.propTypes),{editable:this.props.allowCustom||this.props.editable,inputRef:this.handleInputRef,options:this.state.filteredOptions,selectedOption:this.state.selectedOption,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return Object(On["a"])(this._input)}},{key:"value",get:function(){var e=this.state.selectedOption
if(e)return e.value
if(this.props.allowCustom)return this._input.value
return null}}])
n.displayName="SelectSingle"
return n}(i["Component"]),gs.propTypes={options:h.a.arrayOf(vs),inputRef:h.a.func,selectedOption:Object(_["a"])(h.a.oneOfType([h.a.string,vs]),"onChange","defaultSelectedOption"),optionsMaxWidth:h.a.string,defaultSelectedOption:h.a.oneOfType([h.a.string,vs]),editable:h.a.bool,allowEmpty:h.a.bool,allowCustom:h.a.bool,disabled:h.a.bool,readOnly:h.a.bool,filter:h.a.func,onClose:h.a.func,onChange:h.a.func,onInputChange:h.a.func,onOptionsChange:h.a.func,closeOnSelect:h.a.bool,value:h.a.string},gs.defaultProps={options:void 0,selectedOption:void 0,defaultSelectedOption:void 0,value:void 0,filter:void 0,readOnly:false,disabled:false,allowCustom:false,allowEmpty:false,editable:false,optionsMaxWidth:void 0,inputRef:function(e){},onClose:function(){},onChange:function(e,t){},onInputChange:function(e,t){},onOptionsChange:function(e){},closeOnSelect:true},bs))||ms)
var _s=o.a.createElement("path",{d:"M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var Es=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"render",value:function(){return o.a.createElement(_i,Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),_s)}}])
n.displayName="IconXSolid"
return n}(i["Component"])
Es.glyphName="x"
Es.variant="Solid"
Es.propTypes=Object(r["a"])({},_i.propTypes)
function Cs(e){var t=e.borders,n=e.colors,i=e.forms,o=e.spacing,a=e.typography
var s=function(e,n){var r
var i=n.borderColor,o=n.borderRadius,a=n.borderStyle,s=n.borderWidth,u=n.hoverColor,l=n.iconColor,c=n.iconHoverColor,d=n.mainColor,f=n.textColor
return r={},Object(ke["a"])(r,"".concat(e,"BackgroundHover"),u||qr(d,5)),Object(ke["a"])(r,"".concat(e,"Background"),d),Object(ke["a"])(r,"".concat(e,"BorderColor"),i),Object(ke["a"])(r,"".concat(e,"BorderRadius"),o||"999rem"),Object(ke["a"])(r,"".concat(e,"BorderStyle"),a||t.style),Object(ke["a"])(r,"".concat(e,"BorderWidth"),s||t.widthSmall),Object(ke["a"])(r,"".concat(e,"Color"),f),Object(ke["a"])(r,"".concat(e,"IconColor"),l||f),Object(ke["a"])(r,"".concat(e,"IconHoverColor"),c||l||f),r}
return Object(r["a"])({fontFamily:a.fontFamily,heightSmall:"1.3125rem",heightMedium:i.inputHeightSmall,heightLarge:i.inputHeightMedium,fontSizeSmall:a.fontSizeXSmall,fontSizeMedium:a.fontSizeSmall,fontSizeLarge:a.fontSizeMedium,padding:"0 ".concat(o.xSmall),paddingSmall:"0 ".concat(o.xSmall),focusOutlineColor:n.borderBrand,focusOutlineWidth:t.widthMedium,focusOutlineStyle:t.style,maxWidth:"10rem",iconMargin:o.small,transitionTiming:"0.2s"},s("default",{borderColor:n.borderMedium,iconColor:n.textDarkest,iconHoverColor:n.textBrand,mainColor:n.textLight,textColor:n.textDarkest}),{},s("inline",{borderColor:n.borderDark,borderRadius:t.radiusMedium,iconColor:n.textDark,iconHoverColor:n.textDark,mainColor:n.textLightest,textColor:n.textDarkest}))}Cs["canvas-a11y"]=Cs["canvas-high-contrast"]=function(e){var t=e.colors
return{defaultBackground:t.backgroundLightest,defaultBorderColor:t.borderDarkest}}
Cs.canvas=function(e){return{focusOutlineColor:e["ic-brand-primary"],textColor:e["ic-brand-font-color-dark"],defaultIconColor:e["ic-brand-font-color-dark"],defaultIconHoverColor:e["ic-brand-primary"],defaultColor:e["ic-brand-font-color-dark"]}}
var Os,As,ws,ks,xs
var Ds={componentId:"DyQTK",template:function(e){return"\n\n.DyQTK_eAEM{-ms-user-select:none;-webkit-user-select:none;align-items:center;box-sizing:border-box;display:inline-flex;font-family:".concat(e.fontFamily||"inherit",";text-align:center;user-select:none;vertical-align:middle}\n\n[dir=ltr] .DyQTK_eAEM,[dir=rtl] .DyQTK_eAEM{text-align:center}\n\n.DyQTK_doqw{font-size:").concat(e.fontSizeSmall||"inherit",";padding:").concat(e.paddingSmall||"inherit","}\n\n.DyQTK_doqw .DyQTK_eWKC{line-height:calc(").concat(e.heightSmall||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_doqw .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_ycrn{font-size:calc(").concat(e.fontSizeMedium||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_ycrn .DyQTK_eWKC{line-height:calc(").concat(e.heightMedium||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_ycrn .DyQTK_dnnz{font-size:0.75rem}\n\n.DyQTK_cMDj{font-size:calc(").concat(e.fontSizeLarge||"inherit"," - 0.0625rem);padding:").concat(e.padding||"inherit","}\n\n.DyQTK_cMDj .DyQTK_eWKC{line-height:calc(").concat(e.heightLarge||"inherit"," - ").concat(e.defaultBorderWidth||"inherit","*2)}\n\n.DyQTK_cMDj .DyQTK_dnnz{font-size:0.875rem}\n\n.DyQTK_EwaR{outline:none;overflow:visible;position:relative;touch-action:manipulation;transition:background-color ").concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",';bottom:-0.3125rem;box-sizing:border-box;content:"";left:-0.3125rem;opacity:0;pointer-events:none;position:absolute;right:-0.3125rem;top:-0.3125rem;transform:scale(0.9);transition:all ').concat(e.transitionTiming||"inherit","}\n\n.DyQTK_EwaR:not(.DyQTK_erdA){cursor:pointer}\n\n.DyQTK_EwaR:focus:before{opacity:1;transform:scale(1)}\n\n.DyQTK_EwaR.DyQTK_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.DyQTK_dnnz{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";cursor:pointer;margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit",";transform:translateY(0.0625rem);transition:all ").concat(e.transitionTiming||"inherit","}\n\n[dir=ltr] .DyQTK_dnnz{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .DyQTK_dnnz{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.DyQTK_eWKC{max-width:").concat(e.maxWidth||"inherit",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.DyQTK_ddES{background-color:").concat(e.defaultBackground||"inherit",";border:").concat(e.defaultBorderWidth||"inherit"," ").concat(e.defaultBorderStyle||"inherit"," ").concat(e.defaultBorderColor||"inherit",";border-radius:").concat(e.defaultBorderRadius||"inherit",";color:").concat(e.defaultColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:before{border-radius:").concat(e.defaultBorderRadius||"inherit","}\n\n.DyQTK_ddES.DyQTK_EwaR:hover{background-color:").concat(e.defaultBackgroundHover||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA .DyQTK_dnnz{color:").concat(e.defaultIconColor||"inherit","}\n\n.DyQTK_ddES.DyQTK_erdA:hover .DyQTK_dnnz{color:").concat(e.defaultIconHoverColor||"inherit","}\n\n.DyQTK_eXrk{background-color:").concat(e.inlineBackground||"inherit",";border:").concat(e.inlineBorderWidth||"inherit"," ").concat(e.inlineBorderStyle||"inherit"," ").concat(e.inlineBorderColor||"inherit",";border-radius:").concat(e.inlineBorderRadius||"inherit",";color:").concat(e.inlineColor||"inherit",";cursor:text;margin:0 0.1875rem 0.1875rem}\n\n.DyQTK_eXrk.DyQTK_EwaR:before{border-radius:calc(").concat(e.inlineBorderRadius||"inherit","*1.5)}\n\n.DyQTK_eXrk.DyQTK_EwaR:hover{background-color:").concat(e.inlineBackgroundHover||"inherit","}\n\n.DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{background-color:").concat(e.inlineIconColor||"inherit",";border-radius:50%;color:").concat(e.inlineBackground||"inherit",";font-size:0.75rem;inset-inline-end:0;inset-inline-start:auto;padding:0.25rem;position:absolute;top:0;transform:translate(40%,-40%)}\n\n[dir=ltr] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:auto;right:0}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{left:0;right:auto}\n\n.DyQTK_eXrk.DyQTK_erdA:hover .DyQTK_dnnz{background-color:").concat(e.inlineIconHoverColor||"inherit","}\n\n[dir=rtl] .DyQTK_eXrk.DyQTK_erdA .DyQTK_dnnz{transform:translate(-40%,-40%)}")},tagRoot:"DyQTK_eAEM",small:"DyQTK_doqw",text:"DyQTK_eWKC",icon:"DyQTK_dnnz",medium:"DyQTK_ycrn",large:"DyQTK_cMDj",button:"DyQTK_EwaR",dismissible:"DyQTK_erdA",disabled:"DyQTK_ywdX",default:"DyQTK_ddES",inline:"DyQTK_eXrk"}
var js=(Os=Object(M["a"])(),As=Object(je["g"])(Cs,Ds),Os(ws=As(ws=(xs=ks=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){var e
Object(g["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.focus=function(){e._container&&e._container.focus()}
e.handleClick=function(t){var n=e.props,r=n.disabled,i=n.readOnly,o=n.onClick
if(r||i){t.preventDefault()
t.stopPropagation()}else"function"===typeof o&&o(t)}
e.handleRef=function(t){e._container=t}
return e}Object(b["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.className,i=t.dismissible,a=t.disabled,s=t.readOnly,u=t.size,l=t.text,c=t.title,d=t.onClick,f=t.margin,p=t.variant
var h=(e={},Object(ke["a"])(e,Ds.tagRoot,true),Object(ke["a"])(e,Ds[p],true),Object(ke["a"])(e,Ds[u],u),Object(ke["a"])(e,Ds.dismissible,i),Object(ke["a"])(e,Ds.button,d),Object(ke["a"])(e,Ds.disabled,a),e)
var m=Vt.omitViewProps(Object(We["a"])(this.props,n.propTypes),n)
return o.a.createElement(Vt,Object.assign({},m,{ref:this.handleRef,elementRef:this.props.elementRef,className:De()(r,h),as:d?"button":"span",margin:f,type:d?"button":null,onClick:d?this.handleClick:null,disabled:a||s,display:null,title:c||("string"===typeof l?l:null)}),o.a.createElement("span",{className:Ds.text},l),d&&i?o.a.createElement(Es,{className:Ds.icon}):null)}},{key:"focused",get:function(){return Object(On["a"])(this._container)}}])
n.displayName="Tag"
return n}(i["Component"]),ks.propTypes={className:h.a.string,text:h.a.oneOfType([h.a.string,h.a.node]).isRequired,title:h.a.string,disabled:h.a.bool,readOnly:h.a.bool,dismissible:h.a.bool,margin:je["a"].spacing,onClick:h.a.func,elementRef:h.a.func,size:h.a.oneOf(["small","medium","large"]),variant:h.a.oneOf(["default","inline"])},ks.defaultProps={size:"medium",dismissible:false,variant:"default",elementRef:void 0,className:void 0,title:void 0,disabled:false,readOnly:false,margin:void 0,onClick:void 0},xs))||ws)||ws)
function Ss(e){var t=e.spacing
return{tagTopMargin:t.xxxSmall,tagStartMargin:t.xxSmall}}Ss.canvas=function(e){return{}}
var Is,Bs,Ts,Fs,Ps
var Ls={componentId:"bknox",template:function(e){return"\n\n.bknox_dTVD{-webkit-margin-end:0;-webkit-margin-start:".concat(e.tagStartMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.tagStartMargin||"inherit",";margin-top:calc(").concat(e.tagTopMargin||"inherit"," + 0.125rem)}\n\n[dir=ltr] .bknox_dTVD{margin-left:").concat(e.tagStartMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .bknox_dTVD{margin-left:0;margin-right:").concat(e.tagStartMargin||"inherit","}\n\n.bknox_dTVD:last-of-type{margin-bottom:").concat(e.tagTopMargin||"inherit","}")},tag:"bknox_dTVD"}
var Ms=h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),dismissible:h.a.bool,children:h.a.node})
var Ns=(Is=Object(M["a"])(),Bs=Object(je["g"])(Ss,Ls),Is(Ts=Bs(Ts=(Ps=Fs=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._input&&r._input.focus()}
r.cleanInput=function(){if(""!==r._input.value){r._input.value=""
r.props.onInputChange(null,"")}}
r.matchSelectedOptions=function(e,t){return t?e.filteredOptions.filter((function(e){return t.find((function(t){return t.value===e.value}))})):[e.filteredOptions.find((function(e){return e.label.toLowerCase()===r._input.value.toLowerCase()}))].filter((function(e){return e}))}
r.amendMatchesToState=function(e,t,n,i){if(n&&n.length>0){var o=[].concat(Object(m["a"])(e.selectedOption),Object(m["a"])(n))
"function"===typeof i&&i(o)
return{filteredOptions:r.getFilteredOptions(t,"",o),selectedOption:o}}return{filteredOptions:r.getFilteredOptions(t,"",e.selectedOption)}}
r.handleClose=function(e){return r.setState((function(t,n){var i=r.matchSelectedOptions(t)
r.cleanInput()
return r.amendMatchesToState(t,n,i,(function(t){n.onChange(e,t)}))}),r.props.onClose)}
r.handleInputChange=function(e,t){r.props.onInputChange(e,t)
var n=t.toLowerCase()
r.state.filterText!==n&&r.setState((function(e,t){return{filterText:n,filteredOptions:r.getFilteredOptions(t,n,e.selectedOption)}}))}
r.handleKeyDown=function(e){var t=r.state,n=t.filterText,i=t.selectedOption,o=t.selectedOption.length;("Backspace"===e.key||"Delete"===e.key)&&o>0&&""===n&&Object(On["a"])(r._input)&&r.dismiss(e,i[o-1])
r.props.onKeyDown(e)}
r.handleSelect=function(e,t){r.cleanInput()
var n=[].concat(Object(m["a"])(r.state.selectedOption),[t])
r.setState((function(e,t){var i=r.isControlled?e.selectedOption:n
return{filterText:"",filteredOptions:r.getFilteredOptions(t,"",i),selectedOption:i}}),r.focus)
r.props.onChange(e,n)}
r.dismiss=function(e,t){e.preventDefault()
e.stopPropagation()
var n=Xa(t)
var i=r.state.selectedOption.filter((function(e){return Xa(e)!==n}))
r.setState((function(e,t){var n=r.isControlled?e.selectedOption:i
return{filteredOptions:r.getFilteredOptions(t,e.filterText,n),selectedOption:n}}),r.focus)
r.props.onChange(e,i)}
r.handleInputRef=function(e){r._input=e
for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
r.props.inputRef.apply(Object(Lr["a"])(r),[e].concat(n))}
var i=r.getSelectedOptionFromProps(e)
var o=r.getFilteredOptions(e,"",i)
r.state={filterText:"",selectedOption:i,filteredOptions:o}
return r}Object(b["a"])(n,[{key:"getOptionMap",value:function(e){return e.reduce((function(e,t){e[Xa(t)]=t
return e}),{})}},{key:"findSelectedOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var n=this.getOptionMap(e)
return t.map((function(e){var t=Xa(e)
var i=n[t]
if("object"===typeof e)return Object(r["a"])({},e,{},i)
return i||e}))}},{key:"getSelectedOptionFromProps",value:function(e,t){return t?this.findSelectedOptions(e.options,t):this.findSelectedOptions(e.options,e.selectedOption||e.defaultSelectedOption)}},{key:"getFilteredOptions",value:function(e,t){var n=e.filter,r=e.options
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
var o=n(r,t)
var a=this.getOptionMap(i)
return o.filter((function(e){return!a[Xa(e)]}))}},{key:"componentWillReceiveProps",value:function(e){var t=this
var n=!Ji()(this.props.options,e.options)
var r=!Ji()(this.props.selectedOption,e.selectedOption)&&!this.props.disabled&&!this.props.readOnly;(n||r)&&this.setState((function(i){var o=r?null:i.selectedOption
var a=t.getSelectedOptionFromProps(e,o)
var s=t.getFilteredOptions(e,i.filterText,a)
n&&t.props.onOptionsChange(s)
return{selectedOption:a,filteredOptions:s}}))}},{key:"renderTags",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){var r=false!==t.dismissible
var i={}
r&&(i={dismissible:true,onClick:function(n){return e.dismiss(n,t)},onMouseDown:function(e){e.stopPropagation()}})
return o.a.createElement(js,Object.assign({className:Ls.tag,key:Xa(t)+t.label,title:t.label,text:e.props.formatSelectedOption(t,n),size:e.props.size,disabled:e.props.disabled,readOnly:e.props.readOnly},i))}))}},{key:"renderInputs",value:function(){var e=this
return this.state.selectedOption.filter((function(e){return e&&e.label})).map((function(t,n){return o.a.createElement("input",{type:"hidden",key:Xa(t)+t.label,name:e.props.name,value:t.value})}))}},{key:"render",value:function(){var e=this
return o.a.createElement(ps,Object.assign({},Object(We["a"])(this.props,n.propTypes),{ref:function(t){e._field=t},inputRef:this.handleInputRef,editable:this.props.editable,options:this.state.filteredOptions,size:this.props.size,disabled:this.props.disabled,readOnly:this.props.readOnly,onSelect:this.handleSelect,onStaticClick:this.focus,onClose:this.handleClose,onInputChange:this.handleInputChange,onKeyDown:this.handleKeyDown,optionsMaxWidth:this.props.optionsMaxWidth,closeOnSelect:this.props.closeOnSelect}),this.renderTags(),this.renderInputs())}},{key:"focused",get:function(){return on(this._field)}},{key:"value",get:function(){return this.state.selectedOption.map((function(e){return e&&e.value}))}},{key:"isControlled",get:function(){return!!this.props.selectedOption}}])
n.displayName="SelectMultiple"
return n}(i["Component"]),Fs.propTypes={options:h.a.arrayOf(Ms),inputRef:h.a.func,selectedOption:Object(_["a"])(h.a.arrayOf(h.a.oneOfType([h.a.string,Ms])),"onChange","defaultSelectedOption"),defaultSelectedOption:h.a.arrayOf(h.a.oneOfType([h.a.string,Ms])),editable:h.a.bool,name:h.a.string,size:h.a.oneOf(["small","medium","large"]),optionsMaxWidth:h.a.string,filter:h.a.func,formatSelectedOption:h.a.func,disabled:h.a.bool,readOnly:h.a.bool,onClose:h.a.func,onChange:h.a.func,onInputChange:h.a.func,onOptionsChange:h.a.func,onKeyDown:h.a.func,closeOnSelect:h.a.bool,allowCustom:h.a.oneOf([false])},Fs.defaultProps={inputRef:function(){},formatSelectedOption:function(e){return e.children||e.label},onClose:function(){},onChange:function(e,t){},onInputChange:function(e){},onOptionsChange:function(e){},onKeyDown:function(e){},closeOnSelect:true,allowCustom:false,readOnly:false,disabled:false,filter:void 0,optionsMaxWidth:void 0,size:void 0,name:void 0,editable:false,selectedOption:void 0,defaultSelectedOption:void 0,options:void 0},Ps))||Ts)||Ts)
function Rs(e){var t=i["Children"].map(e,(function(e){var t=e.props,n=t.label,r=t.value,a=t.children
if("optgroup"===e.type){var s=[]
var u=r||n
s.push(o.a.createElement("option",Object.assign({},e.props,{value:u,group:u,groupLabel:true,disabled:true}),n))
i["Children"].forEach(a,(function(e,t){s.push(o.a.createElement("option",Object.assign({},e.props,{group:u,groupItem:true}),e.props.children))}))
return s}return e}))
return i["Children"].map(t,(function(e){var t=e.props,n=t.label,r=t.id,i=t.value,o=t.children,a=t.disabled,s=t.icon,u=t.group,l=t.groupLabel,c=t.groupItem
return{id:r||i,label:n||o,children:o||n,disabled:a||false,value:i,icon:s||null,group:u||null,groupLabel:l||false,groupItem:c||false}}))||[]}var qs,zs,Ks,Us,Ws
var Gs=(qs=Object(M["a"])(),zs=Object(L["a"])("7.0.0",null,"Use SimpleSelect from ui-simple-select for basic configurations or Select from ui-select for more complex configuations."),qs(Ks=zs(Ks=(Ws=Us=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e){var r
Object(g["a"])(this,n)
r=t.call(this,e)
r._input=null
r.focus=function(){r._subComponent&&r._subComponent.focus()}
r.handleRef=function(e){r._subComponent=e}
var i=Rs(e.children)
e.allowCustom&&e.multiple
r.state={options:i}
return r}Object(b["a"])(n,[{key:"componentWillReceiveProps",value:function(e){var t=Rs(e.children)
Ji()(this.state.options,t)||this.setState({options:t})}},{key:"render",value:function(){var e=this.props.multiple?Ns:ys
var t=this.props.defaultOption
t||this.props.allowCustom||(t=this.props.value)
if(!this.props.editable&&!this.props.allowCustom&&!this.props.multiple&&"undefined"===typeof t)for(var n=0;this.state.options.length;n++){var r=this.state.options[n]
if(!r.disabled){t=r
break}}return o.a.createElement(e,Object.assign({ref:this.handleRef},Object(We["a"])(this.props,{},["multiple","defaultOption",this.props.multiple?"":"formatSelectedOption"]),{options:this.state.options,defaultSelectedOption:t,closeOnSelect:this.props.closeOnSelect}))}},{key:"focused",get:function(){return this._subComponent&&this._subComponent.focused}},{key:"invalid",get:function(){return!!this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"value",get:function(){return this._subComponent&&this._subComponent.value}}])
n.displayName="Select"
return n}(i["Component"]),Us.propTypes={multiple:h.a.bool,editable:h.a.bool,children:Hn["a"].oneOf(["option","optgroup"]),inputRef:h.a.func,value:h.a.string,selectedOption:Object(_["a"])(h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool}),h.a.arrayOf(h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})]))]),"onChange","defaultOption"),defaultOption:h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool}),h.a.arrayOf(h.a.oneOfType([h.a.string,h.a.shape({label:h.a.string.isRequired,value:h.a.string.isRequired,id:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.node,disabled:h.a.bool,icon:h.a.func,groupLabel:h.a.bool})]))]),allowEmpty:h.a.bool,allowCustom:h.a.bool,id:h.a.string,placement:$.placement,messages:h.a.arrayOf(P["d"].message),size:h.a.oneOf(["small","medium","large"]),layout:h.a.oneOf(["stacked","inline"]),optionsMaxWidth:h.a.string,loadingText:h.a.string,emptyOption:h.a.node,visibleOptionsCount:h.a.oneOfType([h.a.string,h.a.number]),assistiveText:h.a.string,announcement:h.a.string,filter:h.a.func,formatSelectedOption:h.a.func,disabled:h.a.bool,readOnly:h.a.bool,onPositioned:h.a.func,onOpen:h.a.func,onClose:h.a.func,onChange:h.a.func,onInputChange:h.a.func,onOptionsChange:h.a.func,onBlur:h.a.func,onClick:h.a.func,closeOnSelect:h.a.bool,constrain:$.constrain},Us.defaultProps={multiple:false,editable:false,allowEmpty:true,allowCustom:false,emptyOption:"---",selectedOption:null,size:"medium",loadingText:null,visibleOptionsCount:8,optionsMaxWidth:null,inputRef:function(e){},filter:function(e,t){return e.filter((function(e){return e.label.toLowerCase().startsWith(t.toLowerCase())}))},formatSelectedOption:function(e){return e.label||e.children},closeOnSelect:true,constrain:"window",onBlur:void 0,onClick:void 0,onOptionsChange:void 0,onInputChange:void 0,onChange:void 0,onClose:void 0,onOpen:void 0,onPositioned:void 0,readOnly:false,disabled:false,announcement:void 0,assistiveText:void 0,layout:void 0,messages:void 0,placement:void 0,id:void 0,defaultOption:void 0,value:void 0,children:null},Ws))||Ks)||Ks)
function Hs(e){var t=e.colors,n=e.typography
return{fontSize:n.fontSizeMedium,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest}}Hs.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var Ys,Vs,Qs,Zs,Xs,$s
var Js={componentId:"fabZw",template:function(e){return"\n\n.fabZw_bGBk{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}")},root:"fabZw_bGBk"}
var eu=(Ys=Object(M["a"])(),Vs=Object(je["g"])(Hs,Js),Qs=Object(L["a"])("7.0.0",null,"Use @instructure/ui-time-select instead"),Ys(Zs=Vs(Zs=Qs(Zs=($s=Xs=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(){Object(g["a"])(this,n)
return t.apply(this,arguments)}Object(b["a"])(n,[{key:"locale",value:function(){return this.props.locale||this.context.locale||B.browserLocale()}},{key:"timezone",value:function(){return this.props.timezone||this.context.timezone||j.browserTimeZone()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.defaultToFirstOption,r=t.defaultValue,i=t.format,a=t.label,s=t.onChange,u=t.step,l=t.value,c=t.disabled,d=t.readOnly
var f=this.locale()
var p=this.timezone()
var h=["defaultOption","selectedOption"]
var m=Object(We["c"])(this.props,Object(We["a"])(Gs.propTypes,{},h))
var g=this.renderOptions(r,i,f,u,p,l)
var b=this.getDefaultOption(n,r,g)
var v=this.getSelectedOption(i,f,p,l)
return o.a.createElement(Gs,Object.assign({ref:function(t){e._select=t},editable:true,label:a,defaultOption:b,selectedOption:v,onChange:s,disabled:c,readOnly:d},m),g)}},{key:"renderOptions",value:function(e,t,n,r,i,a){var s=this.getBaseDateForRendering(e,n,i,a)
var u=[]
for(var l=0;l<24;l++)for(var c=0;c<60/r;c++){var d=c*r
s.hour(l).minute(d)
u.push(o.a.createElement("option",{key:"".concat(l,":").concat(d),value:s.toISOString()},s.format(t)))}return u}},{key:"getBaseDateForRendering",value:function(e,t,n,r){var i
var o=r||e
i=o?j.parse(o,t,n):j.now(t,n)
return i.second(0).millisecond(0)}},{key:"getSelectedOption",value:function(e,t,n,r){if(!r)return
var i=j.parse(r,t,n)
return{value:i.toISOString(),label:i.format(e)}}},{key:"getDefaultOption",value:function(e,t,n){return t||(e?n[0].props.value:void 0)}},{key:"focused",get:function(){return this._select&&this._select.focused}}])
n.displayName="TimeInput"
return n}(i["Component"]),Xs.propTypes={defaultToFirstOption:h.a.bool,defaultValue:F.iso8601,format:h.a.string,label:h.a.node.isRequired,locale:h.a.string,onChange:h.a.func,step:h.a.oneOf([5,10,15,20,30,60]),timezone:h.a.string,value:Object(_["a"])(F.iso8601),disabled:h.a.bool,readOnly:h.a.bool},Xs.defaultProps={defaultToFirstOption:false,format:"LT",step:30},Xs.contextTypes={locale:h.a.string,timezone:h.a.string},$s))||Zs)||Zs)||Zs)
var tu,nu,ru,iu,ou
var au=(tu=Object(M["a"])(),nu=Object(L["a"])("7.0.0",null,"Use @instructure/ui-date-input and @instructure/ui-select instead"),tu(ru=nu(ru=(ou=iu=function(e){Object(v["a"])(n,e)
var t=Object(y["a"])(n)
function n(e,i){var o
Object(g["a"])(this,n)
o=t.call(this,e,i)
o.handleChange=function(e,t){var n=o.parseISO(t),r=n.iso,i=n.message
if(r&&r!==o.state.iso||!i){o.props.onChange&&o.props.onChange(e,r)
return o.setState({iso:r,message:i})}return o.setState({message:i})}
o.handleDateChange=function(e,t,n,r,i){var a=r?n:t
var s=o.combineDateAndTime(a,o.state.iso)
o.handleChange(e,s)}
o.handleTimeChange=function(e,t){var n=o.state.iso
if(n){var r=t&&t.value||""
o.handleChange(e,r)}else{var i=t&&t.label||""
o.setState({message:o.getErrorMessage("",i)})}}
o.handleBlur=function(e){o.props.required&&!o.state.iso&&o.setState({message:o.getErrorMessage()})
"function"===typeof o.props.onBlur&&window.setTimeout((function(){o.focused||o.props.onBlur(e)}),0)}
o.dateInputComponentRef=function(e){o._dateInput=e}
o.timeInputComponentRef=function(e){o._timeInput=e}
o.state=Object(r["a"])({},o.parseISO(e.value||e.defaultValue))
o._dateInput=null
o._timeInput=null
return o}Object(b["a"])(n,[{key:"componentWillReceiveProps",value:function(e){var t=this
var n=e.value!==this.props.value||e.defaultValue!==this.props.defaultValue
var i=n||e.locale!==this.props.locale||e.timezone!==this.props.timezone
i&&this.setState((function(i){var o=n?e.value||e.defaultValue:i.iso
return Object(r["a"])({},t.parseISO(o,e.locale,e.timezone))}))}},{key:"getErrorMessage",value:function(e,t){var n=this.props.invalidDateTimeMessage
var r="function"===typeof n?n(e,t):n
return r?{text:r,type:"error"}:null}},{key:"parseISO",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.locale
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timezone
var r=j.parse(e,t,n)
if(r.isValid())return{iso:r.toISOString(true),message:{type:"success",text:r.format(this.props.messageFormat)}}
return{iso:void 0,message:e?this.getErrorMessage.apply(this,Object(m["a"])(e.split("T"))):null}}},{key:"combineDateAndTime",value:function(e,t){if(!e)return""
if(!t)return e
var n=e.replace(/T.*/,"")
var r=t.replace(/.*T/,"")
return"".concat(n,"T").concat(r)}},{key:"focus",value:function(){this._dateInput&&this._dateInput.focus()}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.datePlaceholder,r=e.dateLabel,i=e.dateNextLabel,a=e.datePreviousLabel,s=e.dateFormat,u=e.dateInputRef,l=e.timeLabel,c=e.timeFormat,d=e.timeStep,f=e.timeInputRef,p=e.locale,h=e.timezone,g=e.messages,b=e.layout,v=e.required,y=e.disabled,_=e.readOnly
var E=this.state,C=E.iso,O=E.message
return o.a.createElement(P["b"],{description:t,colSpacing:"medium",rowSpacing:"small",layout:b,vAlign:"top",messages:[].concat(Object(m["a"])(O?[O]:[]),Object(m["a"])(g||[]))},o.a.createElement(Xi,{dateValue:C,onDateChange:this.handleDateChange,onBlur:this.handleBlur,ref:this.dateInputComponentRef,inputRef:u,placeholder:n,label:r,locale:p,format:s,nextLabel:i,previousLabel:a,timezone:h,validationFeedback:false,required:v,disabled:y,readOnly:_}),o.a.createElement(eu,{value:C,onChange:this.handleTimeChange,onBlur:this.handleBlur,ref:this.timeInputComponentRef,label:l,locale:p,format:c,step:d,timezone:h,inputRef:f,disabled:y,readOnly:_}))}},{key:"locale",get:function(){return this.props.locale||this.context.locale||B.browserLocale()}},{key:"timezone",get:function(){return this.props.timezone||this.context.timezone||j.browserTimeZone()}},{key:"focused",get:function(){return this._dateInput&&this._dateInput.focused||this._timeInput&&this._timeInput.focused}}])
n.displayName="DateTimeInput"
return n}(i["Component"]),iu.propTypes={description:h.a.node.isRequired,dateLabel:h.a.string.isRequired,datePreviousLabel:h.a.string.isRequired,dateNextLabel:h.a.string.isRequired,datePlaceholder:h.a.string,dateFormat:h.a.string,timeLabel:h.a.string.isRequired,timeStep:h.a.oneOf([5,10,15,20,30,60]),timeFormat:h.a.string,locale:h.a.string,timezone:h.a.string,invalidDateTimeMessage:h.a.oneOfType([h.a.string,h.a.func]).isRequired,messages:h.a.arrayOf(P["d"].message),messageFormat:h.a.string,layout:h.a.oneOf(["stacked","columns","inline"]),value:Object(_["a"])(F.iso8601,"onChange"),defaultValue:F.iso8601,required:h.a.bool,disabled:h.a.bool,readOnly:h.a.bool,onChange:h.a.func,dateInputRef:h.a.func,timeInputRef:h.a.func,onBlur:h.a.func},iu.defaultProps={layout:"inline",timeStep:30,messageFormat:"LLL",required:false,disabled:false,readOnly:false,onBlur:void 0,timeInputRef:void 0,dateInputRef:void 0,onChange:void 0,defaultValue:void 0,value:void 0,messages:void 0,timezone:void 0,locale:void 0,timeFormat:void 0,datePlaceholder:void 0,dateFormat:void 0},iu.contextTypes={locale:h.a.string,timezone:h.a.string},ou))||ru)||ru)
var su=n("M8//")
var uu=n("WEeK")
var lu=n("2zZe")
var cu=n("ukBn")
var du=n("efQU")
function fu({colors:e,typography:t}){const n={background:e.white}
return n}const pu={componentId:"brMfX",template:function(e){return`\n\n.UpdateItemTray-styles__root {\n  background: ${e.background||"inherit"};\n  width: 19rem;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n`},root:"UpdateItemTray-styles__root"}
class hu extends i["Component"]{constructor(e){super(e)
this.updateMessages=()=>{this.state.updates.date?this.setState({dateMessages:[]}):this.setState({dateMessages:[{type:"error",text:Object(cu["a"])("Date is required")}]})}
this.handleSave=()=>{const e=Object(r["a"])({},this.state.updates)
e.courseId?e.context={id:e.courseId}:e.context={id:null}
e.date=e.date.toISOString()
delete e.courseId
this.props.onSavePlannerItem(e)}
this.handleChange=(e,t)=>{this.setState(n=>({updates:Object(r["a"])(Object(r["a"])({},n.updates),{},{[e]:t})}),this.updateMessages)}
this.handleCourseIdChange=(e,{value:t})=>{if(!t)return
"none"===t&&(t=void 0)
this.handleChange("courseId",t)}
this.handleTitleChange=e=>{const t=e.target.value
""===t?this.setState({titleMessages:[{type:"error",text:Object(cu["a"])("title is required")}]}):this.setState({titleMessages:[]})
this.handleChange("title",t)}
this.handleDateChange=(e,t)=>{const n=t||""
this.handleChange("date",C.a.tz(n,this.props.timeZone))}
this.onInvalidDateTimeMessage=this.invalidDateTimeMessage.bind(this)
this.handleDeleteClick=()=>{confirm(Object(cu["a"])("Are you sure you want to delete this planner item?"))&&this.props.onDeletePlannerItem(this.props.noteItem)}
const t=this.getNoteUpdates(e)
this.state={updates:t,titleMessages:[],dateMessages:[]}}UNSAFE_componentWillReceiveProps(e){if(!s.a.isEqual(this.props.noteItem,e.noteItem)){const t=this.getNoteUpdates(e)
this.setState({updates:t},this.updateMessages)}}editingExistingNote(){return this.props.noteItem&&this.props.noteItem.uniqueId}getNoteUpdates(e){const t=s.a.cloneDeep(e.noteItem)||{}
if(t.context){t.courseId=t.context.id
delete t.context}t.date||(t.date=C.a.tz(e.timeZone).endOf("day"))
return t}invalidDateTimeMessage(e,t){let n
n=e?Object(cu["a"])("#{date} is not a valid date.",{date:e}):Object(cu["a"])("You must provide a date and time.")
return n}findCurrentValue(e){return this.state.updates[e]||""}isValid(){if(this.state.updates.title&&this.state.updates.date&&this.state.updates.date.isValid())return this.state.updates.title.replace(/\s/g,"").length>0
return false}renderDeleteButton(){if(!this.editingExistingNote())return
return o.a.createElement(f["a"],{variant:"light",margin:"0 x-small 0 0",onClick:this.handleDeleteClick},Object(cu["a"])("Delete"))}renderSaveButton(){return o.a.createElement(f["a"],{variant:"primary",margin:"0 0 0 x-small",disabled:!this.isValid(),onClick:this.handleSave},Object(cu["a"])("Save"))}renderTitleInput(){const e=this.findCurrentValue("title")
return o.a.createElement(uu["a"],{renderLabel:()=>Object(cu["a"])("Title"),value:e,messages:this.state.titleMessages,onChange:this.handleTitleChange})}renderDateInput(){const e=this.state.updates.date&&this.state.updates.date.isValid()?this.state.updates.date.toISOString():void 0
return o.a.createElement(au,{required:true,description:o.a.createElement(d["a"],null,Object(cu["a"])("The date and time this to do is due")),messages:this.state.dateMessages,dateLabel:Object(cu["a"])("Date"),dateNextLabel:Object(cu["a"])("Next Month"),datePreviousLabel:Object(cu["a"])("Previous Month"),timeLabel:Object(cu["a"])("Time"),timeStep:30,locale:this.props.locale,timezone:this.props.timeZone,value:e,layout:"stacked",onChange:this.handleDateChange,invalidDateTimeMessage:this.onInvalidDateTimeMessage})}renderCourseSelect(){const e={value:"none",label:Object(cu["a"])("Optional: Add Course")}
const t=(this.props.courses||[]).filter(e=>"StudentEnrollment"===e.enrollmentType||e.is_student).map(e=>({value:e.id,label:e.longName||e.long_name}))
const n=this.findCurrentValue("courseId")
const r=n?t.find(e=>e.value===n):e
return o.a.createElement(lu["a"],{renderLabel:Object(cu["a"])("Course"),assistiveText:Object(cu["a"])("Use arrow keys to navigate options."),id:"to-do-item-course-select",value:r.value,onChange:this.handleCourseIdChange},[e,...t].map(e=>o.a.createElement(lu["a"].Option,{key:e.value,id:e.value,value:e.value},e.label)))}renderDetailsInput(){const e=this.findCurrentValue("details")
return o.a.createElement(su["a"],{label:Object(cu["a"])("Details"),height:"10rem",autoGrow:false,value:e,onChange:e=>this.handleChange("details",e.target.value)})}renderTrayHeader(){return this.editingExistingNote()?o.a.createElement("h2",null,Object(cu["a"])("Edit {title}",{title:this.props.noteItem.title})):o.a.createElement("h2",null,Object(cu["a"])("Add To Do"))}render(){return o.a.createElement("div",{className:pu.root},o.a.createElement(l["a"],{as:"div",padding:"large medium medium"},o.a.createElement(c["b"],{rowSpacing:"small",description:o.a.createElement(d["a"],null,this.renderTrayHeader())},this.renderTitleInput(),this.renderDateInput(),this.renderCourseSelect(),this.renderDetailsInput()),o.a.createElement(l["a"],{as:"div",margin:"small 0 0",textAlign:"end"},this.renderDeleteButton(),this.renderSaveButton())))}}hu.propTypes={courses:h.a.arrayOf(h.a.shape(du["b"])).isRequired,noteItem:h.a.object,onSavePlannerItem:h.a.func.isRequired,onDeletePlannerItem:h.a.func.isRequired,locale:h.a.string.isRequired,timeZone:h.a.string.isRequired}
t["b"]=Object(u["j"])(fu,pu)(hu)},hZA9:function(e,t,n){var r=n("jDM7")
var i=n("Pwfc")
e.exports=function(e,t,n){var o=i(e,t)
n||(o=o.replace(/ (?=\d)/g,"_"))
return o.replace(/ (.)/g,(function(e,n){return r(n,t)}))}},hctw:function(e,t,n){var r=n("jDM7")
e.exports=function(e,t){return r(e,t)===e}},hfBz:function(e,t,n){var r=n("Pwfc")
e.exports=function(e,t){return r(e,t,".")}},hmVm:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("WJ2Z")
var i=n.n(r)
class o{constructor(e={}){this.animationQueue=[]
this.fixedElement=null
this.fixedElementsInitialPositionInViewport=null
this.runAnimationQueue=()=>{while(this.animationQueue.length){const e=this.animationQueue.shift()
e()}}
Object.assign(this,{velocity:i.a,document:document,window:window},e)}getWindow(){return this.window}focusElement(e){e?this.queueAnimation(()=>{"function"===typeof e.focus&&e.focus()},"unshift"):console.error(e+" passed to Animator#focusElement")}elementPositionMemo(e){return{element:e,rect:e.getBoundingClientRect()}}maintainViewportPositionFromMemo(e,t){this.queueAnimation(()=>{const n=t.rect.top
const r=e.getBoundingClientRect().top
const i=this.document.documentElement.getBoundingClientRect().top
const o=r-i
const a=o-n
this.window.scroll(0,a)},"push")}forceScrollTo(e,t,n){this.queueAnimation(()=>{this.velocity(e,"scroll",{offset:-t,duration:1e3,easing:"ease-in-out",complete:n})})}scrollTo(e,t,n){this.queueAnimation(()=>{this.isOffScreen(e,t)?this.velocity(e,"scroll",{offset:-t,duration:1e3,easing:"ease-in-out",complete:n}):n&&n()})}scrollToTop(e){this.forceScrollTo(document.documentElement,0,e)}queueAnimation(e,t="push"){this.animationQueue[t](e)
this.window.requestAnimationFrame(this.runAnimationQueue)}isAboveScreen(e,t){return(null===e||void 0===e?void 0:e.getBoundingClientRect().top)<t}isBelowScreen(e){const t=this.window.document.documentElement
return(null===e||void 0===e?void 0:e.getBoundingClientRect().bottom)+2>t.clientHeight}isOnScreen(e,t){return!this.isOffScreen(e,t)}isOffScreen(e,t){return this.isAboveScreen(e,t)||this.isBelowScreen(e)}}},iNdV:function(e,t){var n={invalidPredicate:"`predicate` must be a function",invalidPropValidator:"`propValidator` must be a function",requiredCore:"is marked as required",invalidTypeCore:"Invalid input type",predicateFailureCore:"Failed to succeed with predicate",anonymousMessage:"<<anonymous>>",baseInvalidMessage:"Invalid "}
function r(e){if("function"!==typeof e)throw new Error(n.invalidPropValidator)
var t=e.bind(null,false,null)
t.isRequired=e.bind(null,true,null)
t.withPredicate=function(t){if("function"!==typeof t)throw new Error(n.invalidPredicate)
var r=e.bind(null,false,t)
r.isRequired=e.bind(null,true,t)
return r}
return t}function i(e,t,r){return new Error("The prop `"+e+"` "+n.requiredCore+" in `"+t+"`, but its value is `"+r+"`.")}var o=-1
function a(e,t,n,r){var a="undefined"===typeof r
var s=null===r
if(e){if(a)return i(n,t,"undefined")
if(s)return i(n,t,"null")}if(a||s)return null
return o}function s(e,t,i,s){function u(r,u,l,c,d,f,p){var h=l[c]
var m=typeof h
d=d||n.anonymousMessage
p=p||c
var g=a(r,d,p,h)
if(g!==o)return g
if(t&&!t(h))return new Error(n.invalidTypeCore+": `"+c+"` of type `"+m+"` supplied to `"+d+"`, expected `"+e+"`.")
if(!i(h))return new Error(n.baseInvalidMessage+f+" `"+c+"` of type `"+m+"` supplied to `"+d+"`, expected `"+s+"`.")
if(u&&!u(h)){var b=u.name||n.anonymousMessage
return new Error(n.baseInvalidMessage+f+" `"+c+"` of type `"+m+"` supplied to `"+d+"`. "+n.predicateFailureCore+" `"+b+"`.")}return null}return r(u)}e.exports={constructPropValidatorVariations:r,createMomentChecker:s,messages:n}},jDM7:function(e,t){var n={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}}
e.exports=function(e,t){var r=n[t]
e=null==e?"":String(e)
r&&(e=e.replace(r.regexp,(function(e){return r.map[e]})))
return e.toUpperCase()}},l9BP:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var r=n("Ff2n")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("17x9")
var d=n.n(c)
var f=n("KgFQ")
var p=n("jtGx")
var h=n("CO+y")
var m=n("6SzX")
var g=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.alt,i=e.children,o=Object(r["a"])(e,["alt","children"])
var a=Object(f["a"])(n,this.props)
return l.a.createElement(a,Object(p["b"])(o),l.a.createElement(m["a"],null,t),l.a.createElement(h["a"],null,i))}}])
n.displayName="AccessibleContent"
return n}(u["Component"])
g.propTypes={alt:d.a.string,as:d.a.elementType,children:d.a.node}
g.defaultProps={alt:void 0,as:"span",children:null}},mgUk:function(e,t,n){"use strict"
n.d(t,"l",(function(){return B}))
n.d(t,"a",(function(){return T}))
n.d(t,"B",(function(){return P}))
n.d(t,"b",(function(){return M}))
n.d(t,"F",(function(){return U}))
n.d(t,"d",(function(){return W}))
n.d(t,"r",(function(){return G}))
n.d(t,"y",(function(){return H}))
n.d(t,"w",(function(){return Y}))
n.d(t,"x",(function(){return V}))
n.d(t,"D",(function(){return Q}))
n.d(t,"e",(function(){return g["a"]}))
n.d(t,"C",(function(){return g["y"]}))
n.d(t,"j",(function(){return g["c"]}))
n.d(t,"m",(function(){return g["m"]}))
n.d(t,"v",(function(){return g["v"]}))
n.d(t,"o",(function(){return g["o"]}))
n.d(t,"k",(function(){return g["d"]}))
n.d(t,"s",(function(){return g["u"]}))
n.d(t,"p",(function(){return g["r"]}))
n.d(t,"n",(function(){return g["n"]}))
n.d(t,"q",(function(){return g["s"]}))
n.d(t,"A",(function(){return j}))
n.d(t,"i",(function(){return ie}))
n.d(t,"h",(function(){return oe}))
n.d(t,"g",(function(){return ae}))
n.d(t,"u",(function(){return se}))
n.d(t,"f",(function(){return ue}))
n.d(t,"c",(function(){return ce}))
n.d(t,"E",(function(){return pe}))
n.d(t,"z",(function(){return he}))
n.d(t,"t",(function(){return ve}))
var r=n("VTBJ")
var i=n("FH7K")
var o=n("aWKK")
var a=n("vDqi")
var s=n.n(a)
var u=n("etQE")
var l=n("08kA")
var c=n.n(l)
var d=function(e){e.defaults.xsrfCookieName="_csrf_token"
e.defaults.xsrfHeaderName="X-CSRF-Token"
const t=e.defaults.headers.common.Accept
e.defaults.headers.common.Accept="application/json+canvas-string-ids, "+t
e.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
return e}
var f=n("4lI+")
var p=n("ukBn")
var h=n("R49/")
function m(e){let t
let n
const r=(...i)=>{if("function"===typeof i[0]){if(void 0===t)throw new Error("identifiableThunk was called as a thunk before it was called as a normal function. The action's first parameter must not be a function.")
const e=t
r.reset()
return e(...i)}if(void 0!==t)throw new Error("identifiableThunk was called as a normal function twice in a row. If testing, You may need to add `action.resetArgs()` to your beforeEach or afterEach.")
t=e(...i)
n=i
return r}
r.reset=()=>{t=void 0
n=void 0}
r.args=()=>n
r.fn=()=>e
return r}var g=n("stE2")
const b=Object(i["a"])("SIDEBAR_ITEMS_LOADING","SIDEBAR_ITEMS_LOADED","SIDEBAR_ITEMS_LOADING_FAILED","SIDEBAR_ENOUGH_ITEMS_LOADED"),v=b.sidebarItemsLoading,y=b.sidebarItemsLoaded,_=b.sidebarItemsLoadingFailed,E=b.sidebarEnoughItemsLoaded
const C=7
const O=14
function A(e){return e.sidebar.items.filter(e=>!e.completed)}function w(e){return A(e).length>=C}function k(e){return A(e).length>=O}function x(e,t,n){const r=Object(h["b"])(e)
const i=e.data.map(e=>Object(h["h"])(e,n().courses,n().groups,n().timeZone))
t(y({items:i,nextUrl:r}))
r&&!w(n())||t(E())
if(r&&!k(n()))return t(D())}const D=m(()=>(e,t)=>{if(!t().sidebar.loading&&t().sidebar.nextUrl){e(v())
const n={order:"asc"}
t().sidebar.course_id&&(n.context_codes=["course_"+t().sidebar.course_id,"user_"+ENV.current_user_id])
return s.a.get(t().sidebar.nextUrl,{params:n}).then(n=>x(n,e,t)).catch(t=>e(_(t)))}})
const j=(e,t)=>(n,r)=>{const i=e.clone().subtract(2,"weeks")
n(v({firstMoment:i,course_id:t}))
return n(Object(g["b"])()).then(e=>{n(Object(g["e"])(e.data))
const o={start_date:i.toISOString(),order:"asc"}
t&&(o.context_codes=["course_"+t,"user_"+ENV.current_user_id])
const a=r().selectedObservee
if(a){o.observed_user_id=a
t||(o.context_codes=r().courses.map(e=>e.assetString))}const l=Object(h["a"])("/api/v1/planner/items",o)
return(Object(u["a"])(Object(u["f"])(l))||s()(l)).then(e=>x(e,n,r))}).catch(e=>{n(_(e))})}
const S=m(e=>(t,n)=>{if(null==n().sidebar.nextUrl)return e
return e.then(e=>{k(n())||t(D())
return e})})
d(s.a)
const I=Object(i["a"])("INITIAL_OPTIONS","ADD_OPPORTUNITIES","START_LOADING_OPPORTUNITIES","START_LOADING_ALL_OPPORTUNITIES","START_DISMISSING_OPPORTUNITY","ALL_OPPORTUNITIES_LOADED","SAVING_PLANNER_ITEM","SAVED_PLANNER_ITEM","DISMISSED_OPPORTUNITY","DELETING_PLANNER_ITEM","DELETED_PLANNER_ITEM","UPDATE_TODO","CLEAR_UPDATE_TODO","OPEN_EDITING_PLANNER_ITEM","SET_NAI_ABOVE_SCREEN","SCROLL_TO_NEW_ACTIVITY","SCROLL_TO_TODAY","TOGGLE_MISSING_ITEMS","SELECTED_OBSERVEE","CLEAR_WEEKLY_ITEMS","CLEAR_OPPORTUNITIES","CLEAR_DAYS","CLEAR_COURSES","CLEAR_SIDEBAR"),B=I.initialOptions,T=I.addOpportunities,F=I.startLoadingOpportunities,P=I.startLoadingAllOpportunities,L=I.startDismissingOpportunity,M=I.allOpportunitiesLoaded,N=I.savingPlannerItem,R=I.savedPlannerItem,q=I.dismissedOpportunity,z=I.deletingPlannerItem,K=I.deletedPlannerItem,U=I.updateTodo,W=I.clearUpdateTodo,G=I.openEditingPlannerItem,H=I.setNaiAboveScreen,Y=I.scrollToNewActivity,V=I.scrollToToday,Q=I.toggleMissingItems,Z=I.selectedObservee,X=I.clearWeeklyItems,$=I.clearOpportunities,J=I.clearDays,ee=I.clearCourses,te=I.clearSidebar
function ne(e){return s()({method:"put",url:"/api/v1/planner_notes/"+e.id,data:e})}function re(e){return s()({method:"post",url:"/api/v1/planner_notes",data:e})}const ie=()=>(e,t)=>{e(F())
t().opportunities.nextUrl?s()({method:"get",url:t().opportunities.nextUrl}).then(t=>{c()(Object(h["d"])(t,"link")).next?e(T({items:t.data,nextUrl:c()(Object(h["d"])(t,"link")).next.url})):e(T({items:t.data,nextUrl:null}))}).catch(e=>{Object(f["a"])(Object(p["a"])("Failed to load opportunities"),true)}):e(M())}
const oe=()=>(e,t)=>{e(F())
const n=t(),r=n.courses,i=n.selectedObservee
const o=t().opportunities.nextUrl||Object(h["a"])("/api/v1/users/self/missing_submissions",{include:["planner_overrides"],filter:["submittable","current_grading_period"],observed_user_id:i,course_ids:i?r.map(e=>e.id).sort((e,t)=>e.localeCompare(t,"en",{numeric:true})):void 0})
const a=Object(u["a"])(Object(u["f"])(o))||s()({method:"get",url:o})
a.then(t=>{const n=c()(Object(h["d"])(t,"link")).next
e(T({items:t.data,nextUrl:n?n.url:null}))}).catch(e=>{Object(f["a"])(Object(p["a"])("Failed to load opportunities"),true)})}
const ae=(e,t)=>n=>{n(L(e))
const i=Object(r["a"])({},t)
i.dismissed=true
i.plannable_id=e
i.plannable_type="assignment"
let o=i.id?de(i):fe(i)
o=o.then(e=>{n(q(e.data))}).catch(()=>{Object(f["a"])(Object(p["a"])("An error occurred attempting to dismiss the opportunity."),true)})
return o}
const se=e=>(t,n)=>{const r=!e.id
const i=ge(e)
t(N({item:e,isNewItem:r}))
let o=Object(h["i"])(e)
let a=r?re(o):ne(o)
a=a.then(e=>{o=Object(h["k"])(e.data,n().courses,n().timeZone)
return{item:me(o,i),isNewItem:r}}).catch(()=>Object(f["a"])(Object(p["a"])("Failed to save to do"),true))
t(W())
t(R(a))
return a}
const ue=e=>(t,n)=>{t(z(e))
const r=s()({method:"delete",url:"/api/v1/planner_notes/"+e.id}).then(e=>Object(h["k"])(e.data,n().courses,n().timeZone)).catch(()=>Object(f["a"])(Object(p["a"])("Failed to delete to do"),true))
t(W())
t(K(r))
t(S(r))
return r}
const le=Object(o["a"])("CANCELED_EDITING_PLANNER_ITEM")
const ce=()=>e=>{e(W())
e(le())}
function de(e){return s()({method:"put",url:"/api/v1/planner/overrides/"+e.id,data:e})}function fe(e){return s()({method:"post",url:"/api/v1/planner/overrides",data:e})}const pe=e=>(t,n)=>{const i=Object(r["a"])(Object(r["a"])({},e),{},{toggleAPIPending:true,show:true})
t(N({item:i,isNewItem:false,wasToggled:true}))
const o=Object(h["j"])(e,n().currentUser.id)
o.marked_complete=!o.marked_complete
let a=o.id?de(o):fe(o)
a=a.then(t=>({item:me(e,t.data),isNewItem:false,wasToggled:true})).catch(()=>{Object(f["a"])(Object(p["a"])("Unable to mark as complete."),true)
return{item:e,isNewItem:false,wasToggled:true}})
t(R(a))
t(S(a))
return a}
const he=e=>pe(e)
function me(e,t){const n=Object(r["a"])({},e)
n.overrideId=t.id
n.completed=t.marked_complete
n.show=true
return n}function ge(e){return{id:e.overrideId,marked_complete:e.completed}}const be=()=>(e,t)=>{t().weeklyDashboard&&e(X())
e(ee(t().singleCourse))
e($())
e(J())
e(te())}
const ve=e=>(t,n)=>{if(n().selectedObservee!==e){t(Z(e))
t(be())
return n().weeklyDashboard?t(Object(g["d"])(n().today)).then(()=>{t(P())}):t(Object(g["c"])(n().today)).then(()=>{t(P())})}}},o77e:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var r=n("VTBJ")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("hPGw")
var d=l.a.createElement("path",{d:"M526.298905 0L434 92.1683552 1301.63582 959.934725 434 1827.57054 526.298905 1920 1486.23363 959.934725z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){return l.a.createElement(c["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconArrowOpenEndLine"
return n}(u["Component"])
f.glyphName="arrow-open-end"
f.variant="Line"
f.propTypes=Object(r["a"])({},c["a"].propTypes)},oCWi:function(e,t,n){var r=n("Pwfc")
e.exports=function(e,t){return r(e,t,"_")}},q7ZJ:function(e,t,n){"use strict"
n.d(t,"l",(function(){return s}))
n.d(t,"p",(function(){return l}))
n.d(t,"q",(function(){return c}))
n.d(t,"m",(function(){return d}))
n.d(t,"o",(function(){return f}))
n.d(t,"n",(function(){return p}))
n.d(t,"h",(function(){return h}))
n.d(t,"e",(function(){return m}))
n.d(t,"k",(function(){return g}))
n.d(t,"f",(function(){return b}))
n.d(t,"i",(function(){return v}))
n.d(t,"b",(function(){return y}))
n.d(t,"c",(function(){return E}))
n.d(t,"a",(function(){return C}))
n.d(t,"d",(function(){return O}))
n.d(t,"g",(function(){return A}))
n.d(t,"j",(function(){return w}))
var r=n("f0Wu")
var i=n.n(r)
var o=n("ukBn")
let a={}
function s(e){a=e}function u(){const e=i()()
const t=e.clone().subtract(1,"days")
const n=e.clone().add(1,"days")
return{today:e,yesterday:t,tomorrow:n}}function l(e,t=i()()){const n=new i.a(e)
return t.isSame(n,"day")}function c(e,t=i()()){const n=new i.a(e)
return n.isBefore(t,"day")||n.isSame(t,"day")}function d(e,t){const n=new i.a(e)
const r=new i.a(t)
return n.isSame(r,"day")}function f(e){const t=(new i.a).startOf("week")
const n=(new i.a).endOf("week")
return p(new i.a(e),t,n)}function p(e,t,n){const r=e.isAfter(t)||e.isSame(t)
const i=e.isBefore(n)||e.isSame(n)
return r&&i}function h(e){const t=u(),n=t.today,r=t.yesterday,a=t.tomorrow
const s=new i.a(e)
return l(e,n)?Object(o["a"])("Today"):r.isSame(s,"day")?Object(o["a"])("Yesterday"):a.isSame(s,"day")?Object(o["a"])("Tomorrow"):s.format("dddd")}function m(e,t){const n=i()().tz(t)
const r=i()(e)
return new Intl.DateTimeFormat(i.a.locale(),{year:e.isSame(n,"year")?void 0:"numeric",month:"long",day:"numeric",timeZone:t}).format(r.toDate())}function g(e){return i()(e).format("MMMM D")}function b(e,t){const n=i()().tz(t)
const r=i()(e)
const a=new Intl.DateTimeFormat(i.a.locale(),{year:e.isSame(n,"year")?void 0:"numeric",month:"short",day:"numeric",timeZone:t})
return Object(o["a"])("{date} at {time}",{date:a.format(r.toDate()),time:r.format("LT")})}function v(e){const t=u(),n=t.today,r=t.yesterday,a=t.tomorrow
const s=i()(e)
return l(e,n)?Object(o["a"])("Today at {date}",{date:s.format("LT")}):r.isSame(s,"day")?Object(o["a"])("Yesterday at {date}",{date:s.format("LT")}):a.isSame(s,"day")?Object(o["a"])("Tomorrow at {date}",{date:s.format("LT")}):Object(o["a"])("{date} at {time}",{date:s.format("LL"),time:s.format("LT")})}function y(e,t){return a.dateString?a.dateString(e.toISOString(),{timezone:t}):e.format("ll")}function _(e,t){return a.timeString?a.timeString(e.toISOString(),{timezone:t}):e.format("LT")}function E(e,t){return a.datetimeString?a.datetimeString(e.toISOString(),{timezone:t}):e.format("lll")}function C(e,t,n){return e.isSame(t)?E(e,n):e.dayOfYear()===t.dayOfYear()?Object(o["a"])("{startDateTime} - {endTime}",{startDateTime:E(e,n),endTime:_(t,n)}):Object(o["a"])("{startDateTime} - {endDateTime}",{startDateTime:E(e,n),endDateTime:E(t,n)})}function O(e){return i()(e,i.a.ISO_8601).format("YYYY-MM-DD")}function A(e,t){if(!e.length)return i()().tz(t).startOf("day")
const n=e[0]
const r=n[1][0]
if(r)return r.dateBucketMoment.clone()
return i.a.tz(n[0],t).startOf("day")}function w(e,t){if(!e.length)return i()().tz(t).startOf("day")
const n=e[e.length-1]
const r=n[1][0]
if(r)return r.dateBucketMoment.clone()
return i.a.tz(n[0],t).startOf("day")}},qJ69:function(e,t,n){var r=n("Pwfc")
var i=n("Wg0N")
e.exports=function(e,t){return i(r(e,t),t)}},r544:function(e,t,n){var r=n("Pwfc")
var i=n("jDM7")
e.exports=function(e,t){return r(e,t,"-").replace(/^.|-./g,(function(e){return i(e,t)}))}},rJZp:function(e,t,n){var r=n("Pwfc")
e.exports=function(e,t){return r(e,t,"-")}},sULQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var u=n("q1tI")
var l=n.n(u)
var c=n("17x9")
var d=n.n(c)
var f=n("TSYQ")
var p=n.n(f)
var h=n("UCAh")
var m=n("n12J")
var g=n("J2CL")
var b=n("II2N")
var v=n("BTe1")
var y=n("oXx0")
function _(e){var t=e.borders,n=e.colors,r=e.spacing,i=e.typography,o=e.stacking
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,color:n.textLightest,fontSize:i.fontSizeXSmall,colorDanger:n.textDanger,colorSuccess:n.textSuccess,colorPrimary:n.textBrand,colorInverse:n.textDarkest,size:"1.25rem",countOffset:"0.5rem",notificationOffset:"0.125rem",notificationZIndex:o.above,sizeNotification:r.small,borderRadius:"999rem",padding:r.xxSmall,pulseBorderThickness:t.widthMedium}}_["canvas"]=function(e){return{colorPrimary:e["ic-brand-primary"]}}
var E,C,O,A,w
var k={componentId:"cECYn",template:function(e){return"\n\n.cECYn_bGBk{border-radius:".concat(e.borderRadius||"inherit",";box-sizing:border-box;color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";pointer-events:none;text-align:center;white-space:nowrap}\n\n[dir=ltr] .cECYn_bGBk,[dir=rtl] .cECYn_bGBk{text-align:center}\n\n.cECYn_bGBk:not(.cECYn_bBTa){position:absolute;z-index:").concat(e.notificationZIndex||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_dDWY.cECYn_bXWC{top:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_dDWY.cECYn_KksD{top:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bPSM.cECYn_bXWC{bottom:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bPSM.cECYn_KksD{bottom:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(e.countOffset||"inherit",")}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{left:calc(-1*").concat(e.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{left:auto;right:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{inset-inline-end:auto;inset-inline-start:").concat(e.notificationOffset||"inherit","}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{left:").concat(e.notificationOffset||"inherit",";right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{left:auto;right:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{inset-inline-end:calc(-1*").concat(e.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{left:auto;right:calc(-1*").concat(e.countOffset||"inherit",")}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{left:calc(-1*").concat(e.countOffset||"inherit",");right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{inset-inline-end:").concat(e.notificationOffset||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{left:auto;right:").concat(e.notificationOffset||"inherit","}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{left:").concat(e.notificationOffset||"inherit",";right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC,.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{top:calc(50% - ").concat(e.size||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD,.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{top:calc(50% - ").concat(e.sizeNotification||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{inset-inline-end:calc(100% - ").concat(e.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{left:auto;right:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{left:calc(100% - ").concat(e.countOffset||"inherit",");right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{left:calc(-1*").concat(e.sizeNotification||"inherit","/2);right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{left:auto;right:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{inset-inline-end:auto;inset-inline-start:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{left:calc(100% - ").concat(e.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{left:auto;right:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{inset-inline-end:calc(-1*").concat(e.sizeNotification||"inherit","/2);inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{left:auto;right:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{left:calc(-1*").concat(e.sizeNotification||"inherit","/2);right:auto}\n\n.cECYn_bGBk.cECYn_bXWC{-webkit-padding-end:").concat(e.padding||"inherit",";-webkit-padding-start:").concat(e.padding||"inherit",";line-height:").concat(e.size||"inherit",";min-width:").concat(e.size||"inherit",";padding-inline-end:").concat(e.padding||"inherit",";padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .cECYn_bGBk.cECYn_bXWC{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .cECYn_bGBk.cECYn_bXWC{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n.cECYn_bGBk.cECYn_KksD{height:").concat(e.sizeNotification||"inherit",";width:").concat(e.sizeNotification||"inherit","}\n\n.cECYn_zGXc{background-color:").concat(e.colorDanger||"inherit","}\n\n.cECYn_zGXc.cECYn_fdSp:before{border-color:").concat(e.colorDanger||"inherit","}\n\n.cECYn_cOXX{background-color:").concat(e.colorSuccess||"inherit","}\n\n.cECYn_cOXX.cECYn_fdSp:before{border-color:").concat(e.colorSuccess||"inherit","}\n\n.cECYn_bXiG{background-color:").concat(e.colorPrimary||"inherit","}\n\n.cECYn_bXiG.cECYn_fdSp:before{border-color:").concat(e.colorPrimary||"inherit","}\n\n.cECYn_enfx{background-color:").concat(e.color||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.cECYn_enfx.cECYn_fdSp:before{border-color:").concat(e.color||"inherit","}\n\n@keyframes cECYn_fdSp{to{opacity:0.9;transform:scale(1)}}\n\n.cECYn_fdSp{position:relative}\n\n.cECYn_fdSp:before{animation-direction:alternate;animation-duration:1s;animation-iteration-count:4;animation-name:cECYn_fdSp;border:").concat(e.pulseBorderThickness||"inherit"," solid;border-radius:").concat(e.borderRadius||"inherit",';box-sizing:border-box;content:"";height:calc(100% + 0.5rem);inset-inline-end:auto;inset-inline-start:-0.25rem;opacity:0;position:absolute;top:-0.25rem;transform:scale(0.75);width:calc(100% + 0.5rem)}\n\n[dir=ltr] .cECYn_fdSp:before{left:-0.25rem;right:auto}\n\n[dir=rtl] .cECYn_fdSp:before{left:auto;right:-0.25rem}\n\n.cECYn_gasz{box-sizing:border-box;position:relative}\n\n.cECYn_gasz svg{display:block}')},root:"cECYn_bGBk",standalone:"cECYn_bBTa","positioned--top":"cECYn_dDWY",count:"cECYn_bXWC",notification:"cECYn_KksD","positioned--bottom":"cECYn_bPSM","positioned--start":"cECYn_fcMK","positioned--end":"cECYn_bXgF","positioned--center":"cECYn_eCdq",danger:"cECYn_zGXc",pulse:"cECYn_fdSp",success:"cECYn_cOXX",primary:"cECYn_bXiG",inverse:"cECYn_enfx",wrapper:"cECYn_gasz"}
var x=(E=Object(y["a"])(),C=Object(g["j"])(_,k),E(O=C(O=(w=A=function(e){Object(a["a"])(n,e)
var t=Object(s["a"])(n)
function n(e){var r
Object(i["a"])(this,n)
r=t.call(this,e)
r._defaultId=Object(v["a"])("Badge")
return r}Object(o["a"])(n,[{key:"countOverflow",value:function(){var e=this.props,t=e.count,n=e.countUntil
return n>1&&t>=n}},{key:"renderOutput",value:function(){var e=this.props,t=e.count,n=e.countUntil,r=e.formatOverflowText,i=e.formatOutput,o=e.type
var a="count"===o&&this.countOverflow()?r(t,n):t
return"function"===typeof i?i(a):"count"===o?a:null}},{key:"renderBadge",value:function(){var e
var t=this.props,n=t.count,i=t.margin,o=t.pulse,a=t.placement,s=t.standalone,u=t.type,c=t.variant
return l.a.createElement(m["a"],{margin:s?i:"none",className:p()((e={},Object(r["a"])(e,k.root,true),Object(r["a"])(e,k[u],u),Object(r["a"])(e,k[c],c),Object(r["a"])(e,k["positioned--top"],a.indexOf("top")>-1),Object(r["a"])(e,k["positioned--bottom"],a.indexOf("bottom")>-1),Object(r["a"])(e,k["positioned--start"],a.indexOf("start")>-1),Object(r["a"])(e,k["positioned--end"],a.indexOf("end")>-1),Object(r["a"])(e,k["positioned--center"],a.indexOf("center")>-1),Object(r["a"])(e,k.standalone,s),Object(r["a"])(e,k.pulse,o),e)),title:"count"===u&&this.countOverflow()?n:null,id:s?null:this._defaultId,display:s?"inline-block":"block"},this.renderOutput())}},{key:"renderChildren",value:function(){var e=this
return u["Children"].map(this.props.children,(function(t){return Object(b["a"])(t,{"aria-describedby":e._defaultId})}))}},{key:"render",value:function(){var e=this.props,t=e.margin,n=e.elementRef,r=e.standalone,i=e.as
return r?this.renderBadge():l.a.createElement(m["a"],{as:i,margin:t,elementRef:n,className:k.wrapper,display:"inline-block"},this.renderChildren(),this.renderBadge())}}])
n.displayName="Badge"
return n}(u["Component"]),A.propTypes={count:d.a.number,countUntil:d.a.number,children:d.a.element,type:d.a.oneOf(["count","notification"]),standalone:d.a.bool,pulse:d.a.bool,variant:d.a.oneOf(["primary","success","danger","inverse"]),placement:h["a"].placement,margin:g["c"].spacing,elementRef:d.a.func,formatOverflowText:d.a.func,formatOutput:d.a.func,as:d.a.elementType},A.defaultProps={count:void 0,children:null,countUntil:void 0,margin:void 0,formatOutput:void 0,standalone:false,type:"count",variant:"primary",pulse:false,placement:"top end",elementRef:function(e){},formatOverflowText:function(e,t){return"".concat(t-1," +")}},w))||O)||O)},sYn3:function(e,t,n){"use strict"
var r
if(!Object.keys){var i=Object.prototype.hasOwnProperty
var o=Object.prototype.toString
var a=n("1KsK")
var s=Object.prototype.propertyIsEnumerable
var u=!s.call({toString:null},"toString")
var l=s.call((function(){}),"prototype")
var c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
var d=function(e){var t=e.constructor
return t&&t.prototype===e}
var f={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$onmozfullscreenchange:true,$onmozfullscreenerror:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true}
var p=function(){if("undefined"===typeof window)return false
for(var e in window)try{if(!f["$"+e]&&i.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{d(window[e])}catch(e){return true}}catch(e){return true}return false}()
var h=function(e){if("undefined"===typeof window||!p)return d(e)
try{return d(e)}catch(e){return false}}
r=function(e){var t=null!==e&&"object"===typeof e
var n="[object Function]"===o.call(e)
var r=a(e)
var s=t&&"[object String]"===o.call(e)
var d=[]
if(!t&&!n&&!r)throw new TypeError("Object.keys called on a non-object")
var f=l&&n
if(s&&e.length>0&&!i.call(e,0))for(var p=0;p<e.length;++p)d.push(String(p))
if(r&&e.length>0)for(var m=0;m<e.length;++m)d.push(String(m))
else for(var g in e)f&&"prototype"===g||!i.call(e,g)||d.push(String(g))
if(u){var b=h(e)
for(var v=0;v<c.length;++v)b&&"constructor"===c[v]||!i.call(e,c[v])||d.push(c[v])}return d}}e.exports=r},"snU/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return hr["a"]}))
n.d(t,"b",(function(){return mr["a"]}))
n.d(t,"c",(function(){return yr}))
n.d(t,"d",(function(){return _r["a"]}))
n.d(t,"m",(function(){return pr["c"]}))
n.d(t,"f",(function(){return kr}))
n.d(t,"n",(function(){return Sr}))
n.d(t,"g",(function(){return Ur}))
n.d(t,"e",(function(){return Gr}))
n.d(t,"k",(function(){return Vr}))
n.d(t,"l",(function(){return Qr}))
n.d(t,"h",(function(){return Zr}))
n.d(t,"i",(function(){return Xr}))
n.d(t,"j",(function(){return $r}))
var r=n("VTBJ")
var i=n("q1tI")
var o=n.n(i)
var a=n("i8i4")
var s=n.n(a)
var u=n("/MKj")
var l=n("f0Wu")
var c=n.n(l)
var d=n("uSnb")
var f=n("ukBn")
function p(e){if(!e||"en"===e)return Promise.resolve(null)
const t=e.replace(/-/g,"_")+".json"
const r=new Promise((r,i)=>{n("+/gd")("./"+t).then(e=>r(e)).catch(t=>{const o=e+".json"
n("+/gd")("./"+o).then(e=>r(e)).catch(e=>i(e))})})
return r}const h=n("syYy")
var m={init:function(e){f["a"].setup({missingTranslation:"ignore",generateId:h})
return p(e).then(t=>{document.documentElement.lang=e
f["a"].addLocale({locale:e,translations:{[e]:t}})}).catch(t=>{console.error(t)
console.warn('Failed loading locale "%s". Falling back to English',e)
f["a"].addLocale({locale:"en"})})}}
var g=n("ANjH")
var b=n("sINF")
var v=n("2QeP")
var y=n.n(v)
var _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
var E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var C=function(e){return"@@redux-saga/"+e}
var O=C("TASK")
var A=C("HELPER")
var w=C("MATCH")
var k=C("CANCEL_PROMISE")
var x=C("SAGA_ACTION")
var D=C("SELF_CANCELLATION")
var j=function(e){return function(){return e}}
var S=j(true)
var I=function(){}
var B=function(e){return e}
function T(e,t,n){if(!t(e)){H("error","uncaught at check",n)
throw new Error(n)}}var F=Object.prototype.hasOwnProperty
function P(e,t){return L.notUndef(e)&&F.call(e,t)}var L={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"===typeof e},number:function(e){return"number"===typeof e},string:function(e){return"string"===typeof e},array:Array.isArray,object:function(e){return e&&!L.array(e)&&"object"===("undefined"===typeof e?"undefined":E(e))},promise:function(e){return e&&L.func(e.then)},iterator:function(e){return e&&L.func(e.next)&&L.func(e.throw)},iterable:function(e){return e&&L.func(Symbol)?L.func(e[Symbol.iterator]):L.array(e)},task:function(e){return e&&e[O]},observable:function(e){return e&&L.func(e.subscribe)},buffer:function(e){return e&&L.func(e.isEmpty)&&L.func(e.take)&&L.func(e.put)},pattern:function(e){return e&&(L.string(e)||"symbol"===("undefined"===typeof e?"undefined":E(e))||L.func(e)||L.array(e))},channel:function(e){return e&&L.func(e.take)&&L.func(e.close)},helper:function(e){return e&&e[A]},stringableFunc:function(e){return L.func(e)&&P(e,"toString")}}
var M={assign:function(e,t){for(var n in t)P(t,n)&&(e[n]=t[n])}}
function N(e,t){var n=e.indexOf(t)
n>=0&&e.splice(n,1)}var R={from:function(e){var t=Array(e.length)
for(var n in e)P(e,n)&&(t[n]=e[n])
return t}}
function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=_({},e)
var n=new Promise((function(e,n){t.resolve=e
t.reject=n}))
t.promise=n
return t}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return function(){return++e}}var K=z()
var U=function(e){throw e}
var W=function(e){return{value:e,done:true}}
function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
var r=arguments[3]
var i={name:n,next:e,throw:t,return:W}
r&&(i[A]=true)
"undefined"!==typeof Symbol&&(i[Symbol.iterator]=function(){return i})
return i}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
"undefined"===typeof window?console.log("redux-saga "+e+": "+t+"\n"+(n&&n.stack||n)):console[e](t,n)}function Y(e,t){return function(){false
return e.apply(void 0,arguments)}}var V=function(e,t){return e+" has been deprecated in favor of "+t+", please update your code"}
var Q=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}
var Z=function(e,t){return(e?e+".":"")+"setContext(props): argument "+t+" is not a plain object"}
var X=function(e){return function(t){return e(Object.defineProperty(t,x,{value:true}))}}
var $="Channel's Buffer overflow!"
var J=1
var ee=2
var te=3
var ne=4
var re={isEmpty:S,put:I,take:I}
function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10
var t=arguments[1]
var n=new Array(e)
var r=0
var i=0
var o=0
var a=function(t){n[i]=t
i=(i+1)%e
r++}
var s=function(){if(0!=r){var t=n[o]
n[o]=null
r--
o=(o+1)%e
return t}}
var u=function(){var e=[]
while(r)e.push(s())
return e}
return{isEmpty:function(){return 0==r},put:function(s){if(r<e)a(s)
else{var l=void 0
switch(t){case J:throw new Error($)
case te:n[i]=s
i=(i+1)%e
o=i
break
case ne:l=2*e
n=u()
r=n.length
i=n.length
o=0
n.length=l
e=l
a(s)}}},take:s,flush:u}}var oe={none:function(){return re},fixed:function(e){return ie(e,J)},dropping:function(e){return ie(e,ee)},sliding:function(e){return ie(e,te)},expanding:function(e){return ie(e,ne)}}
var ae=[]
var se=0
function ue(e){try{ce()
e()}finally{de()}}function le(e){ae.push(e)
if(!se){ce()
fe()}}function ce(){se++}function de(){se--}function fe(){de()
var e=void 0
while(!se&&void 0!==(e=ae.shift()))ue(e)}var pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
var he="@@redux-saga/CHANNEL_END"
var me={type:he}
var ge=function(e){return e&&e.type===he}
function be(){var e=[]
function t(t){e.push(t)
return function(){return N(e,t)}}function n(t){var n=e.slice()
for(var r=0,i=n.length;r<i;r++)n[r](t)}return{subscribe:t,emit:n}}var ve="invalid buffer passed to channel factory function"
var ye="Saga was provided with an undefined action"
false
function _e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe.fixed()
var t=false
var n=[]
T(e,L.buffer,ve)
function r(){if(t&&n.length)throw Q("Cannot have a closed channel with pending takers")
if(n.length&&!e.isEmpty())throw Q("Cannot have pending takers with non empty buffer")}function i(i){r()
T(i,L.notUndef,ye)
if(t)return
if(!n.length)return e.put(i)
for(var o=0;o<n.length;o++){var a=n[o]
if(!a[w]||a[w](i)){n.splice(o,1)
return a(i)}}}function o(i){r()
T(i,L.func,"channel.take's callback must be a function")
if(t&&e.isEmpty())i(me)
else if(e.isEmpty()){n.push(i)
i.cancel=function(){return N(n,i)}}else i(e.take())}function a(n){r()
T(n,L.func,"channel.flush' callback must be a function")
if(t&&e.isEmpty()){n(me)
return}n(e.flush())}function s(){r()
if(!t){t=true
if(n.length){var e=n
n=[]
for(var i=0,o=e.length;i<o;i++)e[i](me)}}}return{take:o,put:i,flush:a,close:s,get __takers__(){return n},get __closed__(){return t}}}function Ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe.none()
var n=arguments[2]
arguments.length>2&&T(n,L.func,"Invalid match function passed to eventChannel")
var r=_e(t)
var i=function(){if(!r.__closed__){o&&o()
r.close()}}
var o=e((function(e){if(ge(e)){i()
return}if(n&&!n(e))return
r.put(e)}))
r.__closed__&&o()
if(!L.func(o))throw new Error("in eventChannel: subscribe should return a function to unsubscribe")
return{take:r.take,flush:r.flush,close:i}}function Ce(e){var t=Ee((function(t){return e((function(e){if(e[x]){t(e)
return}le((function(){return t(e)}))}))}))
return pe({},t,{take:function(e,n){if(arguments.length>1){T(n,L.func,"channel.take's matcher argument must be a function")
e[w]=n}t.take(e)}})}var Oe=C("IO")
var Ae="TAKE"
var we="PUT"
var ke="ALL"
var xe="RACE"
var De="CALL"
var je="CPS"
var Se="FORK"
var Ie="JOIN"
var Be="CANCEL"
var Te="SELECT"
var Fe="ACTION_CHANNEL"
var Pe="CANCELLED"
var Le="FLUSH"
var Me="GET_CONTEXT"
var Ne="SET_CONTEXT"
var Re=function(e,t){var n
return n={},n[Oe]=true,n[e]=t,n}
function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*"
arguments.length&&T(arguments[0],L.notUndef,"take(patternOrChannel): patternOrChannel is undefined")
if(L.pattern(e))return Re(Ae,{pattern:e})
if(L.channel(e))return Re(Ae,{channel:e})
throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}qe.maybe=function(){var e=qe.apply(void 0,arguments)
e[Ae].maybe=true
return e}
qe.maybe
function ze(e,t){if(arguments.length>1){T(e,L.notUndef,"put(channel, action): argument channel is undefined")
T(e,L.channel,"put(channel, action): argument "+e+" is not a valid channel")
T(t,L.notUndef,"put(channel, action): argument action is undefined")}else{T(e,L.notUndef,"put(action): argument action is undefined")
t=e
e=null}return Re(we,{channel:e,action:t})}ze.resolve=function(){var e=ze.apply(void 0,arguments)
e[we].resolve=true
return e}
ze.sync=Y(ze.resolve,V("put.sync","put.resolve"))
function Ke(e){return Re(ke,e)}function Ue(e,t,n){T(t,L.notUndef,e+": argument fn is undefined")
var r=null
if(L.array(t)){var i=t
r=i[0]
t=i[1]}else if(t.fn){var o=t
r=o.context
t=o.fn}r&&L.string(t)&&L.func(r[t])&&(t=r[t])
T(t,L.func,e+": argument "+t+" is not a function")
return{context:r,fn:t,args:n}}function We(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Re(De,Ue("call",e,n))}function Ge(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Re(Se,Ue("fork",e,n))}function He(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
if(0===arguments.length)e=B
else{T(e,L.notUndef,"select(selector,[...]): argument selector is undefined")
T(e,L.func,"select(selector,[...]): argument "+e+" is not a function")}return Re(Te,{selector:e,args:n})}var Ye=function(e){return function(t){return t&&t[Oe]&&t[e]}}
var Ve={take:Ye(Ae),put:Ye(we),all:Ye(ke),race:Ye(xe),call:Ye(De),cps:Ye(je),fork:Ye(Se),join:Ye(Ie),cancel:Ye(Be),select:Ye(Te),actionChannel:Ye(Fe),cancelled:Ye(Pe),flush:Ye(Le),getContext:Ye(Me),setContext:Ye(Ne)}
var Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
var Ze="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
function Xe(e,t){for(var n in t){var r=t[n]
r.configurable=r.enumerable=true
"value"in r&&(r.writable=true)
Object.defineProperty(e,n,r)}return e}var $e="proc first argument (Saga function result) must be an iterator"
var Je={toString:function(){return"@@redux-saga/CHANNEL_END"}}
var et={toString:function(){return"@@redux-saga/TASK_CANCEL"}}
var tt={wildcard:function(){return S},default:function(e){return"symbol"===("undefined"===typeof e?"undefined":Ze(e))?function(t){return t.type===e}:function(t){return t.type===String(e)}},array:function(e){return function(t){return e.some((function(e){return nt(e)(t)}))}},predicate:function(e){return function(t){return e(t)}}}
function nt(e){return("*"===e?tt.wildcard:L.array(e)?tt.array:L.stringableFunc(e)?tt.default:L.func(e)?tt.predicate:tt.default)(e)}function rt(e,t,n){var r=[],i=void 0,o=false
s(t)
function a(e){u()
n(e,true)}function s(e){r.push(e)
e.cont=function(s,u){if(o)return
N(r,e)
e.cont=I
if(u)a(s)
else{e===t&&(i=s)
if(!r.length){o=true
n(i)}}}}function u(){if(o)return
o=true
r.forEach((function(e){e.cont=I
e.cancel()}))
r=[]}return{addTask:s,cancelAll:u,abort:a,getTasks:function(){return r},taskNames:function(){return r.map((function(e){return e.name}))}}}function it(e){var t=e.context,n=e.fn,r=e.args
if(L.iterator(n))return n
var i=void 0,o=void 0
try{i=n.apply(t,r)}catch(e){o=e}if(L.iterator(i))return i
return G(o?function(){throw o}:(a=void 0,s={done:false,value:i},u=function(e){return{done:true,value:e}},function(e){if(a)return u(e)
a=true
return s}))
var a,s,u}var ot=function(e){return{fn:e}}
function at(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return I}
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I
var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:I
var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{}
var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0
var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"anonymous"
var u=arguments[8]
T(e,L.iterator,$e)
var l="[...effects]"
var c=Y(Q,V(l,"all("+l+")"))
var d=o.sagaMonitor,f=o.logger,p=o.onError
var h=f||H
var m=function(e){var t=e.sagaStack
!t&&e.stack&&(t=-1!==e.stack.split("\n")[0].indexOf(e.message)?e.stack:"Error: "+e.message+"\n"+e.stack)
h("error","uncaught at "+s,t||e.message||e)}
var g=Ce(t)
var b=Object.create(i)
A.cancel=I
var v=ie(a,s,e,u)
var y={name:s,cancel:E,isRunning:true}
var _=rt(s,y,w)
function E(){if(y.isRunning&&!y.isCancelled){y.isCancelled=true
A(et)}}function C(){if(e._isRunning&&!e._isCancelled){e._isCancelled=true
_.cancelAll()
w(et)}}u&&(u.cancel=C)
e._isRunning=true
A()
return v
function A(t,n){if(!y.isRunning)throw new Error("Trying to resume an already finished generator")
try{var r=void 0
if(n)r=e.throw(t)
else if(t===et){y.isCancelled=true
A.cancel()
r=L.func(e.return)?e.return(et):{done:true,value:et}}else r=t===Je?L.func(e.return)?e.return():{done:true}:e.next(t)
if(r.done){y.isMainRunning=false
y.cont&&y.cont(r.value)}else x(r.value,a,"",A)}catch(e){y.isCancelled&&m(e)
y.isMainRunning=false
y.cont(e,true)}}function w(t,n){e._isRunning=false
g.close()
if(n){t instanceof Error&&Object.defineProperty(t,"sagaStack",{value:"at "+s+" \n "+(t.sagaStack||t.stack),configurable:true})
v.cont||(t instanceof Error&&p?p(t):m(t))
e._error=t
e._isAborted=true
e._deferredEnd&&e._deferredEnd.reject(t)}else{e._result=t
e._deferredEnd&&e._deferredEnd.resolve(t)}v.cont&&v.cont(t,n)
v.joiners.forEach((function(e){return e.cb(t,n)}))
v.joiners=null}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
var r=arguments[3]
var i=K()
d&&d.effectTriggered({effectId:i,parentEffectId:t,label:n,effect:e})
var o=void 0
function a(e,t){if(o)return
o=true
r.cancel=I
d&&(t?d.effectRejected(i,e):d.effectResolved(i,e))
r(e,t)}a.cancel=I
r.cancel=function(){if(o)return
o=true
try{a.cancel()}catch(e){m(e)}a.cancel=I
d&&d.effectCancelled(i)}
var u=void 0
return L.promise(e)?j(e,a):L.helper(e)?U(ot(e),i,a):L.iterator(e)?S(e,i,s,a):L.array(e)?c(e,i,a):(u=Ve.take(e))?B(u,a):(u=Ve.put(e))?F(u,a):(u=Ve.all(e))?Q(u,i,a):(u=Ve.race(e))?X(u,i,a):(u=Ve.call(e))?P(u,i,a):(u=Ve.cps(e))?z(u,a):(u=Ve.fork(e))?U(u,i,a):(u=Ve.join(e))?W(u,a):(u=Ve.cancel(e))?G(u,a):(u=Ve.select(e))?$(u,a):(u=Ve.actionChannel(e))?J(u,a):(u=Ve.flush(e))?te(u,a):(u=Ve.cancelled(e))?ee(u,a):(u=Ve.getContext(e))?ne(u,a):(u=Ve.setContext(e))?re(u,a):a(e)}function j(e,t){var n=e[k]
L.func(n)?t.cancel=n:L.func(e.abort)&&(t.cancel=function(){return e.abort()})
e.then(t,(function(e){return t(e,true)}))}function S(e,i,a,s){at(e,t,n,r,b,o,i,a,s)}function B(e,t){var n=e.channel,r=e.pattern,i=e.maybe
n=n||g
var o=function(e){return e instanceof Error?t(e,true):ge(e)&&!i?t(Je):t(e)}
try{n.take(o,nt(r))}catch(e){return t(e,true)}t.cancel=o.cancel}function F(e,t){var r=e.channel,i=e.action,o=e.resolve
le((function(){var e=void 0
try{e=(r?r.put:n)(i)}catch(e){if(r||o)return t(e,true)
m(e)}if(!o||!L.promise(e))return t(e)
j(e,t)}))}function P(e,t,n){var r=e.context,i=e.fn,o=e.args
var a=void 0
try{a=i.apply(r,o)}catch(e){return n(e,true)}return L.promise(a)?j(a,n):L.iterator(a)?S(a,t,i.name,n):n(a)}function z(e,t){var n=e.context,r=e.fn,i=e.args
try{var o=function(e,n){return L.undef(e)?t(n):t(e,true)}
r.apply(n,i.concat(o))
o.cancel&&(t.cancel=function(){return o.cancel()})}catch(e){return t(e,true)}}function U(e,i,a){var s=e.context,u=e.fn,l=e.args,c=e.detached
var d=it({context:s,fn:u,args:l})
try{ce()
var f=at(d,t,n,r,b,o,i,u.name,c?null:I)
if(c)a(f)
else if(d._isRunning){_.addTask(f)
a(f)}else d._error?_.abort(d._error):a(f)}finally{fe()}}function W(e,t){if(e.isRunning()){var n={task:v,cb:t}
t.cancel=function(){return N(e.joiners,n)}
e.joiners.push(n)}else e.isAborted()?t(e.error(),true):t(e.result())}function G(e,t){e===D&&(e=v)
e.isRunning()&&e.cancel()
t()}function Q(e,t,n){var r=Object.keys(e)
if(!r.length)return n(L.array(e)?[]:{})
var i=0
var o=void 0
var a={}
var s={}
function u(){if(i===r.length){o=true
n(L.array(e)?R.from(Qe({},a,{length:r.length})):a)}}r.forEach((function(e){var t=function(t,r){if(o)return
if(r||ge(t)||t===Je||t===et){n.cancel()
n(t,r)}else{a[e]=t
i++
u()}}
t.cancel=I
s[e]=t}))
n.cancel=function(){if(!o){o=true
r.forEach((function(e){return s[e].cancel()}))}}
r.forEach((function(n){return x(e[n],t,n,s[n])}))}function X(e,t,n){var r=void 0
var i=Object.keys(e)
var o={}
i.forEach((function(t){var a=function(o,a){if(r)return
if(a){n.cancel()
n(o,true)}else if(!ge(o)&&o!==Je&&o!==et){var s
n.cancel()
r=true
var u=(s={},s[t]=o,s)
n(L.array(e)?[].slice.call(Qe({},u,{length:i.length})):u)}}
a.cancel=I
o[t]=a}))
n.cancel=function(){if(!r){r=true
i.forEach((function(e){return o[e].cancel()}))}}
i.forEach((function(n){if(r)return
x(e[n],t,n,o[n])}))}function $(e,t){var n=e.selector,i=e.args
try{var o=n.apply(void 0,[r()].concat(i))
t(o)}catch(e){t(e,true)}}function J(e,n){var r=e.pattern,i=e.buffer
var o=nt(r)
o.pattern=r
n(Ee(t,i||oe.fixed(),o))}function ee(e,t){t(!!y.isCancelled)}function te(e,t){e.flush(t)}function ne(e,t){t(b[e])}function re(e,t){M.assign(b,e)
t()}function ie(e,t,n,r){var i,o,a
n._deferredEnd=null
return o={},o[O]=true,o.id=e,o.name=t,i="done",a={},a[i]=a[i]||{},a[i].get=function(){if(n._deferredEnd)return n._deferredEnd.promise
var e=q()
n._deferredEnd=e
n._isRunning||(n._error?e.reject(n._error):e.resolve(n._result))
return e.promise},o.cont=r,o.joiners=[],o.cancel=C,o.isRunning=function(){return n._isRunning},o.isCancelled=function(){return n._isCancelled},o.isAborted=function(){return n._isAborted},o.result=function(){return n._result},o.error=function(){return n._error},o.setContext=function(e){T(e,L.object,Z("task",e))
M.assign(b,e)},Xe(o,a),o}}var st="runSaga(storeInterface, saga, ...args)"
var ut=st+": saga argument must be a Generator function!"
function lt(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
var o=void 0
if(L.iterator(e)){false
o=e
e=t}else{T(t,L.func,ut)
o=t.apply(void 0,r)
T(o,L.iterator,ut)}var a=e,s=a.subscribe,u=a.dispatch,l=a.getState,c=a.context,d=a.sagaMonitor,f=a.logger,p=a.onError
var h=K()
if(d){d.effectTriggered=d.effectTriggered||I
d.effectResolved=d.effectResolved||I
d.effectRejected=d.effectRejected||I
d.effectCancelled=d.effectCancelled||I
d.actionDispatched=d.actionDispatched||I
d.effectTriggered({effectId:h,root:true,parentEffectId:0,effect:{root:true,saga:t,args:r}})}var m=at(o,s,X(u),l,c,{sagaMonitor:d,logger:f,onError:p},h,t.name)
d&&d.effectResolved(h,m)
return m}function ct(e,t){var n={}
for(var r in e){if(t.indexOf(r)>=0)continue
if(!Object.prototype.hasOwnProperty.call(e,r))continue
n[r]=e[r]}return n}function dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=e.context,n=void 0===t?{}:t,r=ct(e,["context"])
var i=r.sagaMonitor,o=r.logger,a=r.onError
if(L.func(r))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead")
if(o&&!L.func(o))throw new Error("`options.logger` passed to the Saga middleware is not a function!")
false
if(a&&!L.func(a))throw new Error("`options.onError` passed to the Saga middleware is not a function!")
if(r.emitter&&!L.func(r.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!")
function s(e){var t=e.getState,u=e.dispatch
var l=be()
l.emit=(r.emitter||B)(l.emit)
s.run=lt.bind(null,{context:n,subscribe:l.subscribe,dispatch:u,getState:t,sagaMonitor:i,logger:o,onError:a})
return function(e){return function(t){i&&i.actionDispatched&&i.actionDispatched(t)
var n=e(t)
l.emit(t)
return n}}}s.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")}
s.setContext=function(e){T(e,L.object,Z("sagaMiddleware",e))
M.assign(n,e)}
return s}var ft={done:true,value:void 0}
var pt={}
function ht(e){return L.channel(e)?"channel":Array.isArray(e)?String(e.map((function(e){return String(e)}))):String(e)}function mt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator"
var r=void 0,i=t
function o(t,n){if(i===pt)return ft
if(n){i=pt
throw n}r&&r(t)
var o=e[i](),a=o[0],s=o[1],u=o[2]
i=a
r=u
return i===pt?ft:s}return G(o,(function(e){return o(null,e)}),n,true)}function gt(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
var o={done:false,value:qe(e)}
var a=function(e){return{done:false,value:Ge.apply(void 0,[t].concat(r,[e]))}}
var s=void 0,u=function(e){return s=e}
return mt({q1:function(){return["q2",o,u]},q2:function(){return s===me?[pt]:["q1",a(s)]}},"q1","takeEvery("+ht(e)+", "+t.name+")")}function bt(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
return Ge.apply(void 0,[gt,e,t].concat(r))}var vt=dt
var yt=n("/TnQ")
var _t=n("M/8B")
var Et=n("e7SQ")
var Ct=n("QxcF")
const Ot=[]
function At(e,t){if(t.error)return e
return Object(Ct["c"])(e,t.payload)}var wt=Object(Et["a"])({GOT_DAYS_SUCCESS:(e,t)=>Object(Ct["g"])(e,t.payload.internalDays),DELETED_PLANNER_ITEM:At,WEEK_LOADED:(e,t)=>t.payload.isPreload?e:t.payload.weekDays,JUMP_TO_WEEK:(e,t)=>t.payload.weekDays,JUMP_TO_THIS_WEEK:(e,t)=>t.payload.weekDays,CLEAR_DAYS:()=>Ot},Ot)
var kt=n("R49/")
function xt(e,t){return Object(r["a"])(Object(r["a"])({},e),{},{isLoading:false,loadingPast:false,loadingFuture:false,loadingError:void 0},t)}function Dt(e){const t=e.payload.response
if(null==t)return null
return Object(kt["b"])(t)}function jt(e,t){const n={}
const r=Dt(t)
if(e.isLoading||e.loadingFuture){n.futureNextUrl=r
null==r&&(n.allFutureItemsLoaded=true)}if(e.loadingPast){n.pastNextUrl=r
null==r&&(n.allPastItemsLoaded=true)}(e.isLoading||e.loadingWeek)&&(n.weekNextUrl=r)
null==r&&(n.allWeekItemsLoaded=true)
return n}function St(e,t){const n={seekingNewActivity:false,plannerLoaded:true}
n.partialPastDays=Object(Ct["j"])(e.partialPastDays,t.payload.internalDays)
n.partialFutureDays=Object(Ct["j"])(e.partialFutureDays,t.payload.internalDays)
n.partialWeekDays=Object(Ct["j"])(e.partialWeekDays,t.payload.internalDays)
return xt(e,n)}function It(e,t){const n=jt(e,t)
return Object(r["a"])(Object(r["a"])(Object(r["a"])({},e),n),{},{partialPastDays:Object(Ct["g"])(e.partialPastDays,t.payload.internalDays)})}function Bt(e,t){const n=jt(e,t)
return Object(r["a"])(Object(r["a"])(Object(r["a"])({},e),n),{},{partialFutureDays:Object(Ct["g"])(e.partialFutureDays,t.payload.internalDays)})}function Tt(e,t){const n=jt(e,t)
const i=Object(Ct["g"])(e.partialWeekDays,t.payload.internalDays)
return Object(r["a"])(Object(r["a"])(Object(r["a"])({},e),n),{},{partialWeekDays:i})}function Ft(e,t){const n=t.payload.message||t.payload
return xt(e,{loadingError:n})}var Pt=Object(Et["a"])({GOT_DAYS_SUCCESS:St,GOT_ITEMS_ERROR:Ft,GOT_PARTIAL_PAST_DAYS:It,GOT_PARTIAL_FUTURE_DAYS:Bt,GOT_PARTIAL_WEEK_DAYS:Tt,START_LOADING_OPPORTUNITIES:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingOpportunities:true}),START_LOADING_ALL_OPPORTUNITIES:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingOpportunities:true,allOpportunitiesLoaded:false}),START_LOADING_ITEMS:(e,t)=>xt(e,{isLoading:true}),GETTING_PAST_ITEMS:(e,t)=>xt(e,{loadingError:e.loadingError,loadingPast:true,seekingNewActivity:t.payload.seekingNewActivity}),PEEKED_INTO_PAST:(e,t)=>xt(e,{hasSomeItems:t.payload.hasSomeItems,allPastItemsLoaded:!t.payload.hasSomeItems,isLoading:e.isLoading}),GETTING_FUTURE_ITEMS:(e,t)=>xt(e,{loadingError:e.loadingError,loadingFuture:true}),DELETED_PLANNER_ITEM:(e,t)=>xt(e,{hasSomeItems:false}),SAVED_PLANNER_ITEM:(e,t)=>xt(e,{hasSomeItems:true}),ALL_FUTURE_ITEMS_LOADED:(e,t)=>xt(e,{allFutureItemsLoaded:true}),ALL_WEEK_ITEMS_LOADED:(e,t)=>xt(e,{allWeekItemsLoaded:true}),ALL_OPPORTUNITIES_LOADED:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingOpportunities:false,allOpportunitiesLoaded:true}),ALL_PAST_ITEMS_LOADED:(e,t)=>xt(e,{allPastItemsLoaded:true}),ADD_OPPORTUNITIES:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingOpportunities:false}),START_LOADING_GRADES_SAGA:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingGrades:true,gradesLoadingError:null}),GOT_GRADES_SUCCESS:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingGrades:false,gradesLoaded:true,gradesLoadingError:null}),GOT_GRADES_ERROR:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{loadingGrades:false,gradesLoaded:false,gradesLoadingError:t.payload.message}),GETTING_INIT_WEEK_ITEMS:(e,t)=>xt(e,{loadingError:e.loadingError,isLoading:true,loadingWeek:true,allWeekItemsLoaded:false}),GETTING_WEEK_ITEMS:(e,t)=>xt(e,{loadingError:e.loadingError,loadingWeek:true,allWeekItemsLoaded:false}),WEEK_LOADED:(e,t)=>xt(e,{loadingError:null,isLoading:false,hasSomeItems:true,loadingWeek:false}),JUMP_TO_WEEK:(e,t)=>xt(e,{loadingWeek:false}),JUMP_TO_THIS_WEEK:(e,t)=>xt(e,{loadingWeek:false})},xt({},{isLoading:false,loadingPast:false,loadingFuture:false,loadingWeek:false,plannerLoaded:false,allPastItemsLoaded:false,allFutureItemsLoaded:false,allWeekItemsLoaded:false,allOpportunitiesLoaded:false,loadingOpportunities:false,futureNextUrl:null,pastNextUrl:null,seekingNewActivity:false,partialPastDays:[],partialFutureDays:[],partialWeekDays:[],hasSomeItems:null,loadingGrades:false,gradesLoaded:false,gradesLoadingError:null}))
const Lt=[]
function Mt(e,t){const n=t.payload
return e.map(e=>{const t=Object(r["a"])(Object(r["a"])({},e),n[e.id])
delete t.courseId
return t})}var Nt=Object(Et["a"])({INITIAL_OPTIONS:(e,t)=>{if(t.payload.singleCourse)return[t.payload.env.COURSE]
return[]},GOT_COURSE_LIST:(e,t)=>t.payload,GOT_GRADES_SUCCESS:Mt,CLEAR_COURSES:(e,t)=>{if(t.payload)return e
return Lt}},Lt)
var Rt=Object(Et["a"])({INITIAL_OPTIONS:(e,t)=>t.payload.env.STUDENT_PLANNER_GROUPS},[])
var qt=n("LvDl")
const zt={items:[],missingItemsExpanded:false,nextUrl:null}
function Kt(e,t){const n=[...e.items].concat(t.payload.items.filter(t=>e.items.findIndex(e=>e.id===t.id)<0))
return{items:n,nextUrl:t.payload.nextUrl}}var Ut=Object(Et["a"])({ADD_OPPORTUNITIES:Kt,DISMISSED_OPPORTUNITY:(e,t)=>{const n=Object(qt["cloneDeep"])(e)
const r=n.items.find(e=>e.id===t.payload.assignment_id)
r.planner_override?r.planner_override.dismissed=t.payload.dismissed:r.planner_override=t.payload
return n},TOGGLE_MISSING_ITEMS:(e,t)=>{var n
const r=Object(qt["cloneDeep"])(e)
r.missingItemsExpanded=!(null===(n=t.payload)||void 0===n||!n.forceExpanded)||!e.missingItemsExpanded
return r},CLEAR_OPPORTUNITIES:()=>zt},zt)
var Wt=Object(Et["a"])({UPDATE_TODO:(e,t)=>Object(qt["cloneDeep"])(t.payload),CLEAR_UPDATE_TODO:(e,t)=>({})},{})
function Gt(e,t){return Object(r["a"])(Object(r["a"])({},e),{},{naiAboveScreen:t.payload})}var Ht=Object(Et["a"])({SET_NAI_ABOVE_SCREEN:Gt},{naiAboveScreen:false})
var Yt=n("q7ZJ")
function Vt(e,t,n){n<0&&(n=t.length+n)
const r=t[n]
if(void 0===r)return c.a.invalid()
return c.a.tz(r[0],e.timeZone)}function Qt(e,t,n){return Object(Yt["n"])(n.date,e,t)}function Zt(e,t){let n,r
const i=t.dateBucketMoment.clone().startOf("day")
const o=c.a.tz(e.timeZone).startOf("day")
if(0===e.days.length)n=r=o
else{n=Vt(e,e.days,0)
r=Vt(e,e.days,-1)
o.isBefore(n)&&(n=o)}const a=e.loading.allPastItemsLoaded||i.isSame(n)||i.isAfter(n)
const s=e.loading.allFutureItemsLoaded||i.isSame(r)||i.isBefore(r)
return a&&s}function Xt(e,t){const n=Vt(e,e.loading.partialPastDays,0)
const r=Vt(e,e.days,0)
return Qt(n,r,t)}function $t(e,t){const n=Vt(e,e.days,-1)
const r=Vt(e,e.loading.partialFutureDays,-1)
return Qt(n,r,t)}function Jt(e,t){if(!e)return
if("SAVED_PLANNER_ITEM"!==t.type)return e
if(t.error)return e
if(!e.loading.plannerLoaded)return e
const n=t.payload.item
if(Zt(e,n)){const t=Object(Ct["e"])(e.days,n.uniqueId),i=t.dayIndex,o=t.itemIndex,a=t.item
let s=e.days
a&&!a.dateBucketMoment.isSame(n.dateBucketMoment)&&(s=Object(Ct["d"])(e.days,i,o))
return Object(r["a"])(Object(r["a"])({},e),{},{days:Object(Ct["h"])(s,[n])})}if(Xt(e,n)){const t=Object(Ct["c"])(e.days,n)
const i=Object(Ct["h"])(e.loading.partialPastDays,[n])
return Object(r["a"])(Object(r["a"])({},e),{},{days:t,loading:Object(r["a"])(Object(r["a"])({},e.loading),{},{partialPastDays:i})})}if($t(e,n)){const t=Object(Ct["c"])(e.days,n)
const i=Object(Ct["h"])(e.loading.partialFutureDays,[n])
return Object(r["a"])(Object(r["a"])({},e),{},{days:t,loading:Object(r["a"])(Object(r["a"])({},e.loading),{},{partialFutureDays:i})})}{const t=Object(Ct["c"])(e.days,n)
if(t===e.days)return e
return Object(r["a"])(Object(r["a"])({},e),{},{days:t})}}const en=Object(Et["a"])({SIDEBAR_ITEMS_LOADED:(e,t)=>{const n=e.concat(t.payload.items)
un(n)
return n},DELETED_PLANNER_ITEM:tn,CLEAR_SIDEBAR:()=>[]},[])
function tn(e,t){const n=e.findIndex(e=>e.uniqueId===t.payload.uniqueId)
if(n>-1){const t=e.slice()
t.splice(n,1)
return t}return e}const nn=Object(Et["a"])({SIDEBAR_ITEMS_LOADED:(e,t)=>t.payload.nextUrl,CLEAR_SIDEBAR:()=>null},null)
const rn=Object(Et["a"])({SIDEBAR_ITEMS_LOADING:()=>true,SIDEBAR_ITEMS_LOADED:()=>false,SIDEBAR_ENOUGH_ITEMS_LOADED:()=>false,SIDEBAR_ITEMS_LOADING_FAILED:()=>false,CLEAR_SIDEBAR:()=>false},false)
const on=Object(Et["a"])({SIDEBAR_ENOUGH_ITEMS_LOADED:()=>true,CLEAR_SIDEBAR:()=>false},false)
const an=Object(Et["a"])({SIDEBAR_ITEMS_LOADING:(e,t)=>t.payload?Object(r["a"])(Object(r["a"])({},e),t.payload):e,CLEAR_SIDEBAR:()=>({})},{})
const sn=Object(g["combineReducers"])({items:en,loading:rn,nextUrl:nn,loaded:on,range:an})
function un(e){return e.sort(Ct["i"])}function ln(e,t){if(!e)return
if(!e.loaded||"SAVED_PLANNER_ITEM"!==t.type)return e
if(!t.payload.item||!t.payload.item.uniqueId)return e
const n=t.payload.item
const i=e.items.slice()
let o=false
const a=e.items.findIndex(e=>e.uniqueId===n.uniqueId)
if(a>-1){i.splice(a,1)
o=true}if(Object(Yt["n"])(n.date,e.range.firstMoment,e.range.lastMoment)){i.push(n)
un(i)
o=true}return o?Object(r["a"])(Object(r["a"])({},e),{},{items:i}):e}function cn(e,t){let n=ln(e,t)
n=sn(n,t)
return n}var dn=Object(Et["a"])({GETTING_WEEK_ITEMS:(e,t)=>Object(r["a"])(Object(r["a"])({},e),{},{weekStart:t.payload.weekStart,weekEnd:t.payload.weekEnd}),INITIAL_OPTIONS:(e,t)=>{const n=t.payload.env
e=null
if(n.K5_USER||n.K5_SUBJECT_COURSE){const t=c.a.tz(n.TIMEZONE).startOf("week")
e={weekStart:t,weekEnd:c.a.tz(n.TIMEZONE).endOf("week"),thisWeek:t,weeks:{}}}return e},WEEK_LOADED:(e,t)=>{const n=Object(r["a"])({},e)
n.weeks=Object(r["a"])({},e.weeks)
n.weeks[t.payload.weekStart.format()]=t.payload.weekDays
return n},GOT_WAY_PAST_ITEM_DATE:(e,t)=>{const n=Object(r["a"])({},e)
n.wayPastItemDate=t.payload
return n},GOT_WAY_FUTURE_ITEM_DATE:(e,t)=>{const n=Object(r["a"])({},e)
n.wayFutureItemDate=t.payload
return n},CLEAR_WEEKLY_ITEMS:e=>{const t=Object(r["a"])({},e)
t.weeks={}
return t}},null)
var fn=Object(Et["a"])({INITIAL_OPTIONS:(e,t)=>{var n
return t.payload.observedUserId||(null===(n=t.payload.observedUser)||void 0===n?void 0:n.id)||null},SELECTED_OBSERVEE:(e,t)=>t.payload||null},null)
const pn=Object(_t["a"])("INITIAL_OPTIONS",(e,t)=>t.payload.env.MOMENT_LOCALE,"en")
const hn=Object(_t["a"])("INITIAL_OPTIONS",(e,t)=>t.payload.env.TIMEZONE,"UTC")
const mn=Object(_t["a"])("INITIAL_OPTIONS",(e,t)=>c.a.tz(t.payload.env.TIMEZONE).startOf("day"),c()().startOf("day"))
const gn=Object(_t["a"])("INITIAL_OPTIONS",(e,t)=>{const n=t.payload.env
const r=n.current_user
const i=n.PREFERENCES&&n.PREFERENCES.custom_colors&&n.PREFERENCES.custom_colors["user_"+r.id]
return{id:r.id,displayName:r.display_name,avatarUrl:n.current_user.avatar_is_fallback?null:n.current_user.avatar_image_url,color:i}},{})
const bn=Object(_t["a"])("INITIAL_OPTIONS",(e,t)=>t.payload.singleCourse||false,false)
const vn=Object(_t["a"])("FOUND_FIRST_NEW_ACTIVITY_DATE",(e,t)=>t.payload.clone(),null)
const yn=Object(g["combineReducers"])({courses:Nt,groups:Rt,locale:pn,timeZone:hn,today:mn,currentUser:gn,days:wt,loading:Pt,firstNewActivityDate:vn,opportunities:Ut,singleCourse:bn,todo:Wt,ui:Ht,sidebar:cn,weeklyDashboard:dn,selectedObservee:fn})
function _n(e,t){const n=Jt(e,t)
return yn(n,t)}var En=n("6QM+")
var Cn=n("vDqi")
var On=n.n(Cn)
var An=n("08kA")
var wn=n.n(An)
var kn=n("4lI+")
var xn=n("stE2")
var Dn=n("mgUk")
var jn=n("OOhq")
const Sn=(e,t)=>(n,r)=>{n(xn["j"](Object(Ct["f"])(e),t))
const i=r()
const o=Nn(i.loading.partialFutureDays,i.loading.allFutureItemsLoaded,"asc")
return Mn(o,n,i.loading.allFutureItemsLoaded,t)}
const In=(e,t)=>(n,r)=>{n(xn["k"](Object(Ct["f"])(e),t))
const i=r()
const o=Nn(i.loading.partialPastDays,i.loading.allPastItemsLoaded,"desc")
return Mn(o,n,i.loading.allPastItemsLoaded,t)}
function Bn(e,t,n,r,i){r(xn["k"](Object(Ct["f"])(t),n))
const o=i()
const a=Nn(o.loading.partialPastDays,o.loading.allPastItemsLoaded,"desc")
if(e(a)||o.loading.allPastItemsLoaded)return Mn(a,r,o.loading.allPastItemsLoaded,n)
return false}const Tn=(e,t)=>(n,r)=>Bn(jn["a"],e,t,n,r)
const Fn=(e,t)=>(n,r)=>Bn(jn["b"],e,t,n,r)
const Pn=(e,t=false)=>(n,r)=>(i,o)=>{i(xn["l"](Object(Ct["f"])(n),r))
const a=o()
e=e||a.weeklyDashboard.weekStart
const s=Nn(a.loading.partialWeekDays,a.loading.allWeekItemsLoaded,"asc")
const u=a.loading.isLoading
if(a.loading.allWeekItemsLoaded||Object(jn["c"])(s,a.weeklyDashboard.weekEnd)){const n=Mn(s,i,a.loading.allWeekItemsLoaded,r)
n&&i(xn["z"]({weekDays:s,weekStart:e,initialWeeklyLoad:u,isPreload:t}))
return n}return false}
const Ln=(e,t)=>(t,n)=>{const r=e.length>0
t(xn["t"]({hasSomeItems:r}))
return true}
function Mn(e,t,n,r){if(e.length||n){t(xn["f"](e,r))
return true}return false}function Nn(e,t,n){const r=e.slice()
"desc"===n&&r.reverse()
if(t)return r
const i=r.slice(0,-1)
return i}const Rn=100
function*qn(){yield Ke([We(zn)])}function*zn(){yield bt("START_LOADING_PAST_SAGA",Un)
yield bt("START_LOADING_FUTURE_SAGA",Wn)
yield bt("START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA",Gn)
yield bt("START_LOADING_GRADES_SAGA",Yn)
yield bt("START_LOADING_PAST_UNTIL_TODAY_SAGA",Qn)
yield bt("PEEK_INTO_PAST_SAGA",Hn)
yield bt("START_LOADING_WEEK_SAGA",Zn)
yield bt("START_LOADING_ALL_OPPORTUNITIES",Vn)}function*Kn(e,t,n={}){try{let i=null
const o=()=>i
let a=true
while(a){i=yield He()
if(i.singleCourse){const e=Object(kt["c"])(i)
e&&(n.extraParams=Object(r["a"])(Object(r["a"])({},n.extraParams||{}),{},{context_codes:e}))}const s=e(i)
const u=Object(r["a"])({fromMoment:s,getState:o},n)
const l=yield We(xn["x"],u),c=l.transformedItems,d=l.response
const f=yield We(t,c,d)
const p=yield ze(f)
if("boolean"!==typeof p)throw new Error(`saga error invoking action ${t.name}. It returned a non-boolean: ${p}`)
a=!p}}catch(e){yield ze(Object(xn["i"])(e))}}function*Un(){yield*Kn(Xn,In,{mode:"past"})}function*Wn(){yield*Kn($n,Sn,{mode:"future"})}function*Gn(){yield*Kn(Xn,Tn,{mode:"past"})}function*Hn(){yield*Kn(Xn,Ln,{mode:"past",perPage:1})}function*Yn(){const e={params:{include:["total_scores","current_grading_period_scores"],enrollment_type:"student",enrollment_state:"active"}}
try{let t="/api/v1/users/self/courses"
const n={}
while(null!=t){const r=yield We(On.a.get,t,e)
r.data.forEach(e=>{const t=Object(kt["g"])(e)
n[t.courseId]=t})
const i=wn()(Object(kt["d"])(r,"link"))
t=i&&i.next?i.next.url:null}yield ze(Object(xn["h"])(n))}catch(e){yield ze(Object(xn["g"])(e))
throw e}}function*Vn(){try{let e="/api/v1/users/self/missing_submissions"
const t=[]
const n=yield He(),r=n.courses,i=n.singleCourse,o=n.selectedObservee,a=n.currentUser,s=n.weeklyDashboard
const u=Object(kt["f"])({selectedObservee:o,currentUser:a})
let l
l=u||i?r.map(e=>e.id):void 0
while(null!=e){const n=["submittable"]
s&&n.push("current_grading_period")
const r=yield We(xn["w"],e,{observed_user_id:u,course_ids:l,include:["planner_overrides"],filter:n,per_page:Rn})
t.push(...r.data)
const i=wn()(Object(kt["d"])(r,"link"))
e=null!==i&&void 0!==i&&i.next?i.next.url:null}yield ze(Object(Dn["a"])({items:t,nextUrl:null}))
yield ze(Object(Dn["b"])())}catch(e){Object(kn["a"])(Object(f["a"])("Failed to load opportunities"),true)}}function*Qn(){yield*Kn(Xn,Fn,{mode:"past"})}function*Zn({payload:{weekStart:e,weekEnd:t,isPreload:n}}){yield*Kn(()=>e,Pn(e,n),{mode:"week",extraParams:{end_date:t.toISOString(),per_page:Rn}})}function Xn(e){return Object(Yt["g"])(e.days,e.timeZone)}function $n(e){const t=Object(Yt["j"])(e.days,e.timeZone)
e.days.length&&t.add(1,"days")
return t}function Jn(e,t){const n=vt()
const r=[b["a"],y.a,n,Object(En["d"])(e)]
const i=Object(g["createStore"])(_n,t,Object(yt["composeWithDevTools"])(Object(g["applyMiddleware"])(...r)))
n.run(qn)
return i}function er(e){return 0===e.pageYOffset}function tr(e){const t=e.document.documentElement
const n=t.getBoundingClientRect().bottom
const r=t.clientHeight
return n<=r+2}function nr(e){return e.deltaY<0}function rr(e){return e.deltaY>0}function ir(e,t){t.preventDefault()
e()}function or(e,t,n,r){er(n)&&nr(r)?ir(e,r):tr(n)&&rr(r)&&ir(t,r)}let ar=null
function sr(e){null===ar&&(ar=e.changedTouches[0])}function ur(e,t,n,r){if(!ar)return
const i=r.changedTouches[ar.identifier]
if(!i)return
er(n)&&i.screenY-ar.screenY>3?e():tr(n)&&i.screenY-ar.screenY<-3&&t()}function lr(e){ar=null}class cr{constructor(e,t){this.mostRecentScrollPosition=0
this.callbackThrottle=false
this.throttledScrollEvent=()=>{try{this.scrollCb(this.mostRecentScrollPosition)}finally{this.callbackThrottle=false}}
this.handleScrollEvent=()=>{this.mostRecentScrollPosition=this.wind.pageYOffset
if(!this.callbackThrottle){this.callbackThrottle=true
this.wind.setTimeout(this.throttledScrollEvent,0)}}
this.scrollCb=e
this.wind=t
t.addEventListener("scroll",this.handleScrollEvent)}}function dr({scrollIntoPast:e,scrollIntoFuture:t,scrollPositionChange:n,window:r}){r=r||window
const i=or.bind(void 0,e,t,r)
r.addEventListener("wheel",i)
r.addEventListener("touchstart",sr)
r.addEventListener("touchend",lr)
const o=ur.bind(void 0,e,t,r)
r.addEventListener("touchmove",o)
new cr(n,r)}var fr=n("dEKx")
var pr=n("fWdU")
var hr=n("At6d")
var mr=n("TAnY")
var gr=n("Xx/m")
var br=n("4dvy")
const vr="jump-to-weekly-nav-button"
class yr extends i["PureComponent"]{constructor(...e){super(...e)
this.buttonRef=null
this.state={focused:false}
this.setFocused=e=>()=>{this.setState({focused:e},()=>this.buttonRef.scrollIntoView(false))}
this.focusHeader=()=>{var e
null===(e=document.getElementById(br["WEEKLY_PLANNER_ACTIVE_BTN_ID"]))||void 0===e||e.focus()}
this.render=()=>o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",opacity:this.state.focused?"1":"0",position:this.state.focused?"static":"absolute"}},o.a.createElement(gr["a"],{id:vr,"data-testid":vr,onClick:this.focusHeader,onBlur:this.setFocused(false),onFocus:this.setFocused(true),elementRef:e=>{this.buttonRef=e}},Object(f["a"])("Jump to navigation toolbar")))}}var _r=n("zXJ3")
const Er=o.a.lazy(()=>n.e(4329).then(n.bind(null,"41Gq")))
const Cr=o.a.lazy(()=>n.e(4330).then(n.bind(null,"kfGi")))
const Or=o.a.lazy(()=>n.e(4196).then(n.bind(null,"xC8g")))
const Ar=o.a.lazy(()=>Promise.all([n.e(25),n.e(4170)]).then(n.bind(null,"HjPr")))
const wr=o.a.lazy(()=>Promise.resolve().then(n.bind(null,"4dvy")))
function kr(e,t){return o.a.createElement(i["Suspense"],{fallback:Wr()},o.a.createElement(Er,{timeZone:e,singleCourse:t}))}let xr
const Dr=()=>!!xr&&xr()
const jr=new En["a"]({plannerActive:Dr})
const Sr=Jn(jr)
function Ir(){if(!Dr())return
Sr.getState().loading.loadingPast||Sr.getState().loading.loadingFuture||Sr.getState().loading.allPastItemsLoaded||Sr.dispatch(Object(Dn["v"])())}function Br(){if(!Dr())return
Sr.getState().loading.loadingPast||Sr.getState().loading.loadingFuture||Sr.getState().loading.allFutureItemsLoaded||Sr.dispatch(Object(Dn["m"])())}function Tr(e){return{getFocusable:()=>e,getScrollable:()=>e}}const Fr={getActiveApp:()=>"",stickyZIndex:3}
const Pr={}
const Lr="dashboard_header_container"
const Mr="new_activity_button"
const Nr="weekly_planner_header"
function Rr(e){const t=Object(r["a"])(Object(r["a"])({},Fr),e)
t.env=Object(r["a"])(Object(r["a"])({},Pr),e.env)
t.env.STUDENT_PLANNER_COURSES||(t.env.STUDENT_PLANNER_COURSES=[])
t.env.STUDENT_PLANNER_GROUPS||(t.env.STUDENT_PLANNER_GROUPS=[])
return t}function qr({assetString:e,color:t},{K5_USER:n,K5_SUBJECT_COURSE:r,PREFERENCES:{custom_colors:i={}}}){return n||r?t||"#394B58":i[e]}function zr(e){if(!e.env.PREFERENCES)return
e.env.STUDENT_PLANNER_COURSES=e.env.STUDENT_PLANNER_COURSES.map(t=>Object(r["a"])(Object(r["a"])({},t),{},{color:qr(t,e.env)}))
e.env.STUDENT_PLANNER_GROUPS=e.env.STUDENT_PLANNER_GROUPS.map(t=>Object(r["a"])(Object(r["a"])({},t),{},{color:e.env.PREFERENCES.custom_colors[t.assetString]||"#666666"}))}let Kr=null
async function Ur(e){await m.init(e.env.LOCALE)
return new Promise((t,n)=>{try{if(Kr)throw new Error("initializePlanner may not be called more than once")
e=Rr(e)
if(!(e.env.MOMENT_LOCALE&&e.env.TIMEZONE))throw new Error("env.MOMENT_LOCALE and env.TIMEZONE are required options for initializePlanner")
const n=e,r=n.flashError,i=n.flashMessage,o=n.srFlashMessage
if(!(r&&i&&o))throw new Error("flash message callbacks are required options for initializePlanner")
if(!e.convertApiUserContent)throw new Error("convertApiUserContent is a required option for initializePlanner")
xr=()=>"planner"===e.getActiveApp()
c.a.locale(e.env.MOMENT_LOCALE)
c.a.tz.setDefault(e.env.TIMEZONE)
Object(kn["b"])({visualSuccessCallback:i,visualErrorCallback:r,srAlertCallback:o})
Object(fr["c"])(e)
Object(Yt["l"])(e.dateTimeFormatters)
e.plannerNewActivityButtonId=Mr
e.env.K5_USER||e.env.K5_SUBJECT_COURSE?jr.setOffsetElementIds(Nr,null):jr.setOffsetElementIds(Lr,Mr)
e.externalFallbackFocusable&&jr.registerAnimatable("item",Tr(e.externalFallbackFocusable),-1,[Object(En["f"])("item")])
zr(e)
Kr=e
Sr.dispatch(Object(Dn["l"])(e))
t(Kr)}catch(e){n(e)}})}function Wr(){return o.a.createElement(d["a"],{renderTitle:"Loading...",size:"small"})}function Gr(){if(Sr.getState().weeklyDashboard)Sr.dispatch(Object(Dn["k"])(c.a.tz(Kr.env.timeZone).startOf("day"))).then(()=>{Sr.dispatch(Object(Dn["B"])())})
else{if(!Gr.scrollEventsRegistered){dr({scrollIntoPast:Ir,scrollIntoFuture:Br,scrollPositionChange:e=>jr.handleScrollPositionChange(e)})
Gr.scrollEventsRegistered=true}Sr.dispatch(Object(Dn["j"])(c.a.tz(Kr.env.timeZone).startOf("day")))}return o.a.createElement(En["b"],{manager:jr},o.a.createElement(u["a"],{store:Sr},o.a.createElement(i["Suspense"],{fallback:Wr()},o.a.createElement(Or,{appRef:e=>jr.setApp(e),changeDashboardView:Kr.changeDashboardView,plannerActive:Dr,currentUser:Sr.getState().currentUser,focusFallback:()=>jr.focusFallback("item"),k5Mode:Kr.env.K5_USER||Kr.env.K5_SUBJECT_COURSE,isWeekly:Kr.env.K5_USER||Kr.env.K5_SUBJECT_COURSE}))))}Gr.scrollEventsRegistered=false
function Hr(e){s.a.render(Gr(),e)}function Yr(e,t){const n=document.getElementById("application")
s.a.render(o.a.createElement(En["b"],{manager:jr},o.a.createElement(u["a"],{store:Sr},o.a.createElement(i["Suspense"],{fallback:Wr()},o.a.createElement(Ar,{stickyZIndex:Kr.stickyZIndex,stickyButtonId:Kr.plannerNewActivityButtonId,timeZone:Kr.env.TIMEZONE,locale:Kr.env.MOMENT_LOCALE,ariaHideElement:n,auxElement:t})))),e)}function Vr(e){if(!Kr)throw new Error("initializePlanner must be called before renderToDoSidebar")
const t=Kr.env
s.a.render(o.a.createElement(u["a"],{store:Sr},o.a.createElement(i["Suspense"],{fallback:Wr()},o.a.createElement(Cr,{courses:Sr.getState().courses,timeZone:t.TIMEZONE,locale:t.MOMENT_LOCALE,changeDashboardView:Kr.changeDashboardView,forCourse:Kr.forCourse}))),e)}function Qr(e){return o.a.createElement(En["b"],{manager:jr},o.a.createElement(u["a"],{store:Sr},o.a.createElement(i["Suspense"],{fallback:Wr()},o.a.createElement(wr,e))))}function Zr(){if(!Kr)throw new Error("initializePlanner must be called before loadPlannerDashboard")
const e=document.getElementById("dashboard-planner")
const t=document.getElementById("dashboard-planner-header")
const n=document.getElementById("dashboard-planner-header-aux")
e&&Hr(e)
t&&Yr(t,n)}function Xr(){if(!Kr)throw new Error("initializePlanner must be called before preloadInitialItems")
Sr.getState().weeklyDashboard&&Sr.dispatch(Object(Dn["s"])())}function $r(e){if(!Kr)throw new Error("initializePlanner must be called before reloadPlannerForObserver")
const t=e&&e!==Sr.getState().currentUser.id?e:null
t!==Sr.getState().selectedObservee&&(Sr.getState().weeklyDashboard||ENV.FEATURES.observer_picker)&&Sr.dispatch(Object(Dn["t"])(t))}},stE2:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
n.d(t,"i",(function(){return b}))
n.d(t,"y",(function(){return E}))
n.d(t,"h",(function(){return C}))
n.d(t,"g",(function(){return O}))
n.d(t,"t",(function(){return k}))
n.d(t,"z",(function(){return S}))
n.d(t,"e",(function(){return P}))
n.d(t,"f",(function(){return M}))
n.d(t,"j",(function(){return N}))
n.d(t,"k",(function(){return R}))
n.d(t,"c",(function(){return z}))
n.d(t,"b",(function(){return K}))
n.d(t,"m",(function(){return U}))
n.d(t,"v",(function(){return H}))
n.d(t,"o",(function(){return Y}))
n.d(t,"p",(function(){return V}))
n.d(t,"q",(function(){return Q}))
n.d(t,"d",(function(){return Z}))
n.d(t,"u",(function(){return X}))
n.d(t,"l",(function(){return $}))
n.d(t,"r",(function(){return J}))
n.d(t,"n",(function(){return ee}))
n.d(t,"s",(function(){return te}))
n.d(t,"w",(function(){return oe}))
n.d(t,"x",(function(){return ae}))
var r=n("ODXe")
var i=n("FH7K")
var o=n("aWKK")
var a=n("vDqi")
var s=n.n(a)
var u=n("etQE")
var l=n("R49/")
var c=n("4lI+")
var d=n("ukBn")
n("QxcF")
const f=Object(i["a"])("START_LOADING_ITEMS","CONTINUE_LOADING_INITIAL_ITEMS","FOUND_FIRST_NEW_ACTIVITY_DATE","GETTING_FUTURE_ITEMS","ALL_FUTURE_ITEMS_LOADED","ALL_PAST_ITEMS_LOADED","GOT_ITEMS_ERROR","START_LOADING_PAST_SAGA","START_LOADING_FUTURE_SAGA","START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA","START_LOADING_GRADES_SAGA","GOT_GRADES_SUCCESS","GOT_GRADES_ERROR","START_LOADING_PAST_UNTIL_TODAY_SAGA","PEEK_INTO_PAST_SAGA","PEEKED_INTO_PAST","GETTING_INIT_WEEK_ITEMS","GETTING_WEEK_ITEMS","START_LOADING_WEEK_SAGA","WEEK_LOADED","ALL_WEEK_ITEMS_LOADED","JUMP_TO_WEEK","JUMP_TO_THIS_WEEK","GOT_WAY_FUTURE_ITEM_DATE","GOT_WAY_PAST_ITEM_DATE","GOT_COURSE_LIST"),p=f.startLoadingItems,h=f.continueLoadingInitialItems,m=f.foundFirstNewActivityDate,g=f.gettingFutureItems,b=(f.allFutureItemsLoaded,f.allPastItemsLoaded,f.gotItemsError),v=f.startLoadingPastSaga,y=f.startLoadingFutureSaga,_=f.startLoadingPastUntilNewActivitySaga,E=f.startLoadingGradesSaga,C=f.gotGradesSuccess,O=f.gotGradesError,A=f.startLoadingPastUntilTodaySaga,w=f.peekIntoPastSaga,k=f.peekedIntoPast,x=f.gettingInitWeekItems,D=f.gettingWeekItems,j=f.startLoadingWeekSaga,S=f.weekLoaded,I=(f.allWeekItemsLoaded,f.jumpToWeek),B=f.jumpToThisWeek,T=f.gotWayPastItemDate,F=f.gotWayFutureItemDate,P=f.gotCourseList
const L=Object(o["a"])("GETTING_PAST_ITEMS",(e={seekingNewActivity:false})=>e)
const M=Object(o["a"])("GOT_DAYS_SUCCESS",(e,t)=>({internalDays:e,response:t}))
const N=Object(o["a"])("GOT_PARTIAL_FUTURE_DAYS",(e,t)=>({internalDays:e,response:t}))
const R=Object(o["a"])("GOT_PARTIAL_PAST_DAYS",(e,t)=>({internalDays:e,response:t}))
function q(e){return(t,n)=>{e=e.clone().subtract(6,"months")
const r=Object(l["f"])(n())
const i=Object(l["e"])(n())
const o=Object(l["a"])("/api/v1/planner/items",{start_date:e.toISOString(),filter:"new_activity",order:"asc",observed_user_id:r,context_codes:i})
const a=Object(u["a"])(Object(u["f"])(o))||s.a.get(o)
return a.then(e=>{if(e.data.length){const r=Object(l["h"])(e.data[0],n().courses,n().groups,n().timeZone)
t(m(r.dateBucketMoment))}}).catch(e=>Object(c["a"])(Object(d["a"])("Failed to get new activity"),true))}}function z(e){return t=>{t(p())
return t(K()).then(n=>{n.data.forEach(e=>{var t
e.color=(null===(t=ENV.PREFERENCES)||void 0===t?void 0:t.custom_colors[e.assetString])||"#666666"})
t(P(n.data))
t(h())
t(q(e))
t(w())
t(y())}).catch(e=>{Object(c["a"])(Object(d["a"])("Failed getting course list"))})}}function K(){return(e,t)=>{if(t().singleCourse)return Promise.resolve({data:t().courses})
const n=Object(l["f"])(t())
const r=n?"?observed_user_id="+n:""
const i="/api/v1/dashboard/dashboard_cards"+r
const o=Object(u["a"])(Object(u["f"])(i))||s.a.get(i)
return o}}function U(e={loadMoreButtonClicked:false}){return(t,n)=>{if(n().loading.allFutureItemsLoaded)return
t(g(e))
t(y())}}const W=Object(o["a"])("SCROLL_INTO_PAST")
function G(e){return(t,n)=>{if(n().loading.allPastItemsLoaded)return
e&&t(W())
t(L({seekingNewActivity:false}))
t(v())}}function H(){return G(true)}function Y(){return G(false)}const V=()=>e=>{e(L({seekingNewActivity:true}))
e(_())
return"loadPastUntilNewActivity"}
const Q=()=>e=>{e(L({seekingNewActivity:false}))
e(A())
return"loadPastUntilToday"}
function Z(e){return(t,n)=>{t(p())
const r=n().singleCourse?Promise.resolve({data:n().courses}):t(K())
return r.then(r=>{t(P(r.data))
const i=n().weeklyDashboard
t(x(i))
t(re(e))
t(ie(e))
ne(t,n)}).catch(e=>{Object(c["a"])(Object(d["a"])("Failed getting course list"))})}}function X(){return(e,t)=>{ne(e,t,-7)
ne(e,t,7)}}const $=Object(o["a"])("GOT_PARTIAL_WEEK_DAYS",(e,t)=>({internalDays:e,response:t}))
function J(){return(e,t)=>{const n=t().weeklyDashboard
const r=n.weekStart.clone().add(-7,"days")
const i=n.weekEnd.clone().add(-7,"days")
e(D({weekStart:r,weekEnd:i}))
r.format()in n.weeks?e(I({weekDays:n.weeks[r.format()]})):ne(e,t)
const o=n.weekStart.clone().add(-14,"days")
o.format()in n.weeks||ne(e,t,-7)}}function ee(){return(e,t)=>{const n=t().weeklyDashboard
const r=n.weekStart.clone().add(7,"days")
const i=n.weekEnd.clone().add(7,"days")
e(D({weekStart:r,weekEnd:i}))
r.format()in n.weeks?e(I({weekDays:n.weeks[r.format()]})):ne(e,t)
const o=n.weekStart.clone().add(14,"days")
o.format()in n.weeks||ne(e,t,7)}}function te(){return(e,t)=>{const n=t().weeklyDashboard
const r=n.thisWeek.clone()
const i=r.clone().add(6,"days").endOf("day")
e(D({weekStart:r,weekEnd:i}))
r.format()in n.weeks?e(B({weekDays:n.weeks[r.format()]})):ne(e,t)}}function ne(e,t,n=0){const r=t().weeklyDashboard
const i=r.weekStart.clone().add(n,"days")
const o=r.weekEnd.clone().add(n,"days")
e(j({weekStart:i,weekEnd:o,isPreload:!!n}))}function re(e){return(t,n)=>{const r=n()
const i=Object(l["f"])(r)
let o
o=i||r.singleCourse?Object(l["c"])(r):void 0
const a=e.clone().tz("UTC").startOf("day").add(1,"year")
const f=Object(l["a"])("/api/v1/planner/items",{observed_user_id:i,context_codes:o,end_date:a.toISOString(),order:"desc",per_page:1})
const p=Object(u["a"])(Object(u["f"])(f))||s.a.get(f)
return p.then(e=>{if(e.data.length){const n=e.data[0].plannable_date
t(F(n))}}).catch(e=>Object(c["a"])(Object(d["a"])("Failed peeking into your future"),true))}}function ie(e){return(t,n)=>{const r=n()
const i=Object(l["f"])(r)
let o
o=i||r.singleCourse?Object(l["c"])(r):void 0
const a=e.clone().tz("UTC").startOf("day").add(-1,"year")
const f=Object(l["a"])("/api/v1/planner/items",{observed_user_id:i,context_codes:o,start_date:a.toISOString(),order:"asc",per_page:1})
const p=Object(u["a"])(Object(u["f"])(f))||s.a.get(f)
return p.then(e=>{if(e.data.length){const n=e.data[0].plannable_date
t(T(n))}}).catch(e=>{Object(c["a"])(Object(d["a"])("Failed peeking into your past"),true)})}}function oe(e,t={}){const n=Object(l["a"])(e,t)
return Object(u["a"])(Object(u["f"])(n))||s.a.get(n)}function ae(e){const t=se(e),n=Object(r["a"])(t,2),i=n[0],o=n[1].params
const a=Object(l["a"])(i,o)
const c=Object(u["a"])(Object(u["f"])(a))||s.a.get(a)
return c.then(t=>ue(e,t))}function se(e){let t="start_date"
let n="futureNextUrl"
if("past"===e.mode){t="end_date"
n="pastNextUrl"}else"week"===e.mode&&(n="weekNextUrl")
const r=e.getState().loading[n]
if(r)return[r,{}]
{const n={[t]:e.fromMoment.toISOString()}
"past"===e.mode&&(n.order="desc")
e.perPage&&(n.per_page=e.perPage)
e.extraParams&&Object.assign(n,e.extraParams)
const r=Object(l["f"])(e.getState())
if(r){n.observed_user_id=r
n.context_codes=Object(l["e"])(e.getState())}return["/api/v1/planner/items",{params:n}]}}function ue(e,t){const n=le(e,t.data)
return{response:t,transformedItems:n}}function le(e,t){return t.map(t=>Object(l["h"])(t,e.getState().courses,e.getState().groups,e.getState().timeZone))}},syYy:function(e,t,n){"use strict"
var r=n("vAQ1")
var i=n("ZoNA")
var o=n("NOPk").underscore
e.exports=function(e){e=i(e)
var t=o(e)
var n=r(e.length+":"+e).toString(16)
return t+"_"+n}},"thi/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return S}))
var r=n("rePB")
var i=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var s=n("Ji7U")
var u=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("17x9")
var f=n.n(d)
var p=n("TSYQ")
var h=n.n(p)
var m=n("n12J")
var g=n("bZJi")
var b=n("/656")
var v=n("J2CL")
var y=n("nAyT")
var _=n("jtGx")
var E=n("oXx0")
function C(e){var t=e.borders,n=e.colors,r=e.spacing,i=e.typography
return{fontFamily:i.fontFamily,padding:"0 ".concat(r.xSmall),height:"1.3125rem",background:n.backgroundLightest,textTransformStyle:"uppercase",textFontSize:i.fontSizeXSmall,textFontWeight:i.fontWeightBold,maxWidth:"15rem",color:n.textDark,primaryColor:n.textDark,infoColor:n.textInfo,dangerColor:n.textDanger,successColor:n.textSuccess,warningColor:n.textWarning,alertColor:n.textAlert,messageColor:n.textAlert,borderWidth:t.widthSmall,borderStyle:t.style,borderRadius:"999rem"}}C["instructure"]=function(){return{height:"1.5rem"}}
var O,A,w,k,x,D
var j={componentId:"dLyYq",template:function(e){return"\n\n.dLyYq_bGBk{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";display:block;font-family:").concat(e.fontFamily||"inherit",";line-height:calc(").concat(e.height||"inherit"," - ").concat(e.borderWidth||"inherit","*2);padding:").concat(e.padding||"inherit","}\n\n.dLyYq_bGBk,.dLyYq_eWKC{box-sizing:border-box}\n\n.dLyYq_eWKC{font-size:").concat(e.textFontSize||"inherit",";font-weight:").concat(e.textFontWeight||"inherit",";letter-spacing:0.0625rem;text-transform:").concat(e.textTransformStyle||"inherit","}\n\n.dLyYq_ddES{border-color:").concat(e.color||"inherit",";color:").concat(e.color||"inherit","}\n\n.dLyYq_bXiG{border-color:").concat(e.primaryColor||"inherit",";color:").concat(e.primaryColor||"inherit","}\n\n.dLyYq_pypk,.dLyYq_ecos{border-color:").concat(e.infoColor||"inherit",";color:").concat(e.infoColor||"inherit","}\n\n.dLyYq_cOXX{border-color:").concat(e.successColor||"inherit",";color:").concat(e.successColor||"inherit","}\n\n.dLyYq_zGXc{border-color:").concat(e.dangerColor||"inherit",";color:").concat(e.dangerColor||"inherit","}\n\n.dLyYq_eRqw{border-color:").concat(e.warningColor||"inherit",";color:").concat(e.warningColor||"inherit","}\n\n.dLyYq_elxg{border-color:").concat(e.messageColor||"inherit",";color:").concat(e.messageColor||"inherit","}\n\n.dLyYq_bgqc{border-color:").concat(e.alertColor||"inherit",";color:").concat(e.alertColor||"inherit","}")},root:"dLyYq_bGBk",text:"dLyYq_eWKC",default:"dLyYq_ddES",primary:"dLyYq_bXiG",info:"dLyYq_pypk",oldPrimary:"dLyYq_ecos",success:"dLyYq_cOXX",danger:"dLyYq_zGXc",warning:"dLyYq_eRqw",message:"dLyYq_elxg",alert:"dLyYq_bgqc"}
var S=(O=Object(E["a"])(),A=Object(y["a"])("8.0.0",{text:"children",variant:"color"}),w=Object(v["j"])(C,j),O(k=A(k=w(k=(D=x=function(e){Object(s["a"])(n,e)
var t=Object(u["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r.state={truncated:false}
return r}Object(a["a"])(n,[{key:"handleTruncation",value:function(e){this.setState({truncated:e})}},{key:"renderPill",value:function(e,t){var n,o=this
var a=this.props,s=a.margin,u=a.children,l=a.variant,d=a.color,f=a.as,p=a.elementRef,g=a.text,v=Object(i["a"])(a,["margin","children","variant","color","as","elementRef","text"])
var y=Object(_["b"])(v)
var E="function"===typeof t?t(y):y
var C=l
C?"primary"===l&&(C="oldPrimary"):C=d
var O=h()((n={},Object(r["a"])(n,j.root,true),Object(r["a"])(n,j.truncated,this.state.truncated),Object(r["a"])(n,j[C],true),n))
return c.a.createElement(m["a"],Object.assign({},E,{as:f,elementRef:p,margin:s,padding:"0",maxWidth:this.theme.maxWidth,background:"transparent",borderRadius:"pill",borderWidth:"0",display:"inline-block",position:"relative",withFocusOutline:e,focusColor:"info"}),c.a.createElement("span",{className:O},c.a.createElement("span",{className:j.text},c.a.createElement(b["a"],{onUpdate:function(e){o.handleTruncation(e)}},u||g))))}},{key:"render",value:function(){var e=this
return this.state.truncated?c.a.createElement(g["a"],{renderTip:this.props.children||this.props.text},(function(t){var n=t.focused,r=t.getTriggerProps
return e.renderPill(n,r)})):this.renderPill()}}])
n.displayName="Pill"
return n}(l["Component"]),x.propTypes={as:f.a.elementType,children:f.a.node,color:f.a.oneOf(["primary","success","danger","info","warning","alert"]),elementRef:f.a.func,margin:v["c"].spacing,text:f.a.node,variant:f.a.oneOf(["default","success","danger","primary","warning","message"])},x.defaultProps={children:void 0,margin:void 0,elementRef:void 0,color:"primary"},D))||k)||k)||k)},uNh2:function(e,t,n){"use strict"
n.d(t,"a",(function(){return S}))
var r=n("rePB")
var i=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var s=n("Ji7U")
var u=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("17x9")
var f=n.n(d)
var p=n("TSYQ")
var h=n.n(p)
var m=n("n12J")
var g=n("J2CL")
var b=n("nAyT")
var v=n("E+IV")
var y=n("jtGx")
var _=n("oXx0")
var E=n("6RTY")
function C(e){var t=e.colors,n=e.borders,r=e.typography
return{background:t.backgroundLightest,borderWidthSmall:n.widthSmall,borderWidthMedium:n.widthMedium,borderColor:t.borderMedium,boxShadowColor:Object(E["a"])(t.backgroundDarkest,12),boxShadowBlur:"1rem",fontFamily:r.fontFamily,fontWeight:r.fontWeightBold,color:t.brand,colorShamrock:t.shamrock,colorBarney:t.barney,colorCrimson:t.crimson,colorFire:t.fire,colorLicorice:t.licorice,colorAsh:t.ash}}var O,A,w,k,x,D
var j={componentId:"elMgC",template:function(e){return"\n\n.elMgC_bGBk{background-clip:content-box;background-color:".concat(e.background||"inherit",";background-position:50%;background-repeat:no-repeat;background-size:cover;box-sizing:border-box;height:2.5em;line-height:0;overflow:hidden;text-align:center}\n\n[dir=ltr] .elMgC_bGBk,[dir=rtl] .elMgC_bGBk{text-align:center}\n\n.elMgC_bGBk.elMgC_uUeq{font-size:inherit}\n\n.elMgC_bGBk.elMgC_uUeq,.elMgC_bGBk.elMgC_UKsG{border-width:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk.elMgC_UKsG{font-size:0.5rem}\n\n.elMgC_bGBk.elMgC_dfBC{font-size:0.75rem}\n\n.elMgC_bGBk.elMgC_doqw,.elMgC_bGBk.elMgC_dfBC{border-width:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk.elMgC_doqw{font-size:1rem}\n\n.elMgC_bGBk.elMgC_ycrn{font-size:1.25rem}\n\n.elMgC_bGBk.elMgC_cMDj,.elMgC_bGBk.elMgC_ycrn{border-width:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_bGBk.elMgC_cMDj{font-size:1.5rem}\n\n.elMgC_bGBk.elMgC_eoMd{font-size:1.75rem}\n\n.elMgC_bGBk.elMgC_eoMd,.elMgC_bGBk.elMgC_fdca{border-width:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_bGBk.elMgC_fdca{font-size:2rem}\n\n.elMgC_bGBk.elMgC_cHTY{border:0;box-shadow:inset 0 0 ").concat(e.boxShadowBlur||"inherit"," 0 ").concat(e.boxShadowColor||"inherit","}\n\n.elMgC_bGBk:not(.elMgC_cHTY){border-color:").concat(e.borderColor||"inherit",";border-style:solid}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA{background-clip:border-box;border:0;padding:0}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_uUeq,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_doqw,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_dfBC,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_UKsG{padding:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_cMDj,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_ycrn,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_eoMd,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_fdca{padding:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_eYKj{font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";letter-spacing:0.0313em;line-height:2.375em}\n\n.elMgC_ddES{color:").concat(e.color||"inherit","}\n\n.elMgC_ekuM{color:").concat(e.colorShamrock||"inherit","}\n\n.elMgC_bXnN{color:").concat(e.colorBarney||"inherit","}\n\n.elMgC_byip{color:").concat(e.colorCrimson||"inherit","}\n\n.elMgC_dKVo{color:").concat(e.colorFire||"inherit","}\n\n.elMgC_eaOe{color:").concat(e.colorLicorice||"inherit","}\n\n.elMgC_fuVp{color:").concat(e.colorAsh||"inherit","}\n\n.elMgC_fKgA{color:").concat(e.background||"inherit","}\n\n.elMgC_fKgA.elMgC_ddES{background-color:").concat(e.color||"inherit","}\n\n.elMgC_fKgA.elMgC_ekuM{background-color:").concat(e.colorShamrock||"inherit","}\n\n.elMgC_fKgA.elMgC_bXnN{background-color:").concat(e.colorBarney||"inherit","}\n\n.elMgC_fKgA.elMgC_byip{background-color:").concat(e.colorCrimson||"inherit","}\n\n.elMgC_fKgA.elMgC_dKVo{background-color:").concat(e.colorFire||"inherit","}\n\n.elMgC_fKgA.elMgC_eaOe{background-color:").concat(e.colorLicorice||"inherit","}\n\n.elMgC_fKgA.elMgC_fuVp{background-color:").concat(e.colorAsh||"inherit","}\n\n.elMgC_MrJH{display:none}\n\n.elMgC_cJVF{border-radius:100%;overflow:hidden;position:relative;width:2.5em}\n\n.elMgC_bRWf{width:3em}\n\n.elMgC_eoCh{align-items:center;display:flex;height:100%;justify-content:center;width:100%}\n\n.elMgC_eoCh svg{fill:currentColor;height:1em;width:1em}")},root:"elMgC_bGBk",auto:"elMgC_uUeq","xx-small":"elMgC_UKsG","x-small":"elMgC_dfBC",small:"elMgC_doqw",medium:"elMgC_ycrn",large:"elMgC_cMDj","x-large":"elMgC_eoMd","xx-large":"elMgC_fdca",loaded:"elMgC_cHTY",hasInverseColor:"elMgC_fKgA",initials:"elMgC_eYKj",default:"elMgC_ddES",shamrock:"elMgC_ekuM",barney:"elMgC_bXnN",crimson:"elMgC_byip",fire:"elMgC_dKVo",licorice:"elMgC_eaOe",ash:"elMgC_fuVp",loadImage:"elMgC_MrJH",circle:"elMgC_cJVF",rectangle:"elMgC_bRWf",iconSVG:"elMgC_eoCh"}
var S=(O=Object(_["a"])(),A=Object(b["a"])("8.0.0",{inline:"display",variant:"shape"}),w=Object(g["j"])(C,j),O(k=A(k=w(k=(D=x=function(e){Object(s["a"])(n,e)
var t=Object(u["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
e=t.call.apply(t,[this].concat(i))
e.state={loaded:false}
e.handleImageLoaded=function(t){e.setState({loaded:true})
e.props.onImageLoaded(t)}
return e}Object(a["a"])(n,[{key:"componentDidUpdate",value:function(){this.state.loaded&&!this.props.src&&this.setState({loaded:false})}},{key:"makeInitialsFromName",value:function(){var e=this.props.name
if(!e||"string"!==typeof e)return
e=e.trim()
if(0===e.length)return
if(e.match(/\s+/)){var t=e.split(/\s+/)
return(t[0][0]+t[t.length-1][0]).toUpperCase()}return e[0].toUpperCase()}},{key:"renderLoadImage",value:function(){return c.a.createElement("img",{src:this.props.src,className:j.loadImage,alt:this.props.alt,onLoad:this.handleImageLoaded,"aria-hidden":"true"})}},{key:"renderInitials",value:function(){return c.a.createElement("span",{className:j.initials,"aria-hidden":"true"},this.makeInitialsFromName())}},{key:"renderContent",value:function(){var e=this.props.renderIcon
if(!e)return this.renderInitials()
return c.a.createElement("span",{className:j.iconSVG},Object(v["a"])(e))}},{key:"render",value:function(){var e
var t=this.props,n=(t.onImageLoaded,Object(i["a"])(t,["onImageLoaded"]))
var o=this.state.loaded
return c.a.createElement(m["a"],Object.assign({},Object(y["b"])(n),{style:{backgroundImage:o?"url('".concat(this.props.src,"')"):void 0},className:h()((e={},Object(r["a"])(e,j.root,true),Object(r["a"])(e,j[this.props.size],true),Object(r["a"])(e,j[this.props.variant||this.props.shape],true),Object(r["a"])(e,j[this.props.color],true),Object(r["a"])(e,j.loaded,o),Object(r["a"])(e,j.hasInverseColor,this.props.hasInverseColor),e)),"aria-label":this.props.alt?this.props.alt:null,role:this.props.alt?"img":null,as:this.props.as,elementRef:this.props.elementRef,margin:this.props.margin,display:"block"===this.props.display||false===this.props.inline?"block":"inline-block"}),this.renderLoadImage(),!o&&this.renderContent())}}])
n.displayName="Avatar"
return n}(l["Component"]),x.propTypes={name:f.a.string.isRequired,src:f.a.string,alt:f.a.string,size:f.a.oneOf(["auto","xx-small","x-small","small","medium","large","x-large","xx-large"]),color:f.a.oneOf(["default","shamrock","barney","crimson","fire","licorice","ash"]),hasInverseColor:f.a.bool,shape:f.a.oneOf(["circle","rectangle"]),margin:g["c"].spacing,display:f.a.oneOf(["inline-block","block"]),onImageLoaded:f.a.func,as:f.a.elementType,elementRef:f.a.func,renderIcon:f.a.oneOfType([f.a.node,f.a.func]),inline:f.a.bool,variant:f.a.oneOf(["circle","rectangle"])},x.defaultProps={src:void 0,alt:void 0,margin:void 0,elementRef:void 0,size:"medium",color:"default",hasInverseColor:false,shape:"circle",display:"inline-block",onImageLoaded:function(e){},renderIcon:null},D))||k)||k)||k)},ukBn:function(e,t,n){"use strict"
var r=n("VTBJ")
var i=n("/HcR")
var o=n.n(i)
const a=o.a.namespace()
a.addLocale=({locale:e,translations:t})=>{a.setup({locale:e,translations:Object(r["a"])(Object(r["a"])({},a.setup().translations),t)})}
t["a"]=a},wVpn:function(e,t,n){"use strict"
var r=n("WDQk")
var i=n("82c2")
e.exports=function(){var e=r()
i(Object,{is:e},{is:function(){return Object.is!==e}})
return e}},weGe:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
n.d(t,"b",(function(){return b}))
var r=n("q1tI")
var i=n.n(r)
var o=n("17x9")
var a=n.n(o)
var s=n("TSYQ")
var u=n.n(s)
var l=n("J2CL")
var c=n("ukBn")
var d=n("sULQ")
var f=n("6SzX")
class p extends r["Component"]{render(){return i.a.createElement("div",{ref:this.props.indicatorRef},i.a.createElement(d["a"],{standalone:true,type:"notification",variant:this.props.variant}),i.a.createElement(f["a"],null,this.props.title))}}p.propTypes={title:o["string"].isRequired,variant:o["string"].isRequired,indicatorRef:o["func"]}
p.defaultProps={indicatorRef:()=>{}}
function h(e){const t=Object(c["a"])("Missing items for {title}",{title:e.title})
return i.a.createElement(p,{title:t,variant:"danger"})}h.propTypes={title:o["string"].isRequired}
var m=n("6QM+")
class g extends r["Component"]{UNSAFE_componentWillMount(){this.props.registerAnimatable("new-activity-indicator",this,this.props.animatableIndex,this.props.itemIds)}UNSAFE_componentWillReceiveProps(e){this.props.deregisterAnimatable("new-activity-indicator",this,this.props.itemIds)
this.props.registerAnimatable("new-activity-indicator",this,e.animatableIndex,e.itemIds)}componentWillUnmount(){this.props.deregisterAnimatable("new-activity-indicator",this,this.props.itemIds)}getFocusable(){return this.props.getFocusable?this.props.getFocusable():void 0}getScrollable(){return this.indicatorElt}render(){const e=Object(c["a"])("New activity for {title}",{title:this.props.title})
return i.a.createElement(p,{indicatorRef:e=>this.indicatorElt=e,title:e,variant:"primary"})}}g.propTypes={title:o["string"].isRequired,itemIds:Object(o["arrayOf"])(o["string"]).isRequired,registerAnimatable:o["func"],deregisterAnimatable:o["func"],animatableIndex:o["number"],getFocusable:o["func"]}
g.defaultProps={registerAnimatable:()=>{},deregisterAnimatable:()=>{}}
var b=Object(m["c"])(g)
var v=n("efQU")
function y({colors:e,spacing:t}){return{activityIndicatorPadding:t.small,activityIndicatorWidth:t.small,activityIndicatorBorderSize:"1rem",activityIndicatorBackground:e.white}}const _={componentId:"NrWuo",template:function(e){return`\n\n.NotificationBadge-styles__root {\n \n}\n\n.NotificationBadge-styles__activityIndicator {\n  width: ${e.activityIndicatorWidth||"inherit"};\n  padding: ${e.activityIndicatorPadding||"inherit"};\n}\n\n.NotificationBadge-styles__activityIndicator.NotificationBadge-styles__hasBadge {\n    background: transparent;\n    width: auto;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n    position: static;\n    display: flex;\n    top: auto;\n    right: auto;\n    z-index: 1;\n    border-radius: 0;\n  };\n\n.NotificationBadge-styles__small.NotificationBadge-styles__activityIndicator {\n    padding: 0;\n  }\n`},root:"NotificationBadge-styles__root",activityIndicator:"NotificationBadge-styles__activityIndicator",hasBadge:"NotificationBadge-styles__hasBadge",small:"NotificationBadge-styles__small"}
class E extends i.a.Component{render(){const e=this.props.children?i.a.Children.only(this.props.children):null
const t=u()(_.activityIndicator,null!=e&&_.hasBadge,_[this.props.responsiveSize])
return i.a.createElement("div",{className:t},e)}}E.propTypes={responsiveSize:v["f"],children:a.a.element}
E.defaultProps={responsiveSize:"large"}
const C=Object(l["j"])(y,_)(E)
t["c"]=C},"xGf/":function(e,t,n){"use strict"
var r=n("q1tI")
var i=n.n(r)
var o=n("J2CL")
var a=n("dpqJ")
var s=n("thi/")
function u(e){return{lineHeight:e.lineHeightCondensed,itemMargin:"0.0625rem"}}const l={componentId:"WWGvl",template:function(e){return`\n\n.BadgeList-styles__root {\n  line-height: ${e.lineHeight||"inherit"};\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  text-align: inherit;\n}\n\n[dir="ltr"] .BadgeList-styles__root {\n  text-align: inherit;\n}\n\n[dir="rtl"] .BadgeList-styles__root {\n  text-align: inherit;\n}\n\n.BadgeList-styles__item {\n  display: inline-block;\n  vertical-align: middle;\n  margin: ${e.itemMargin||"inherit"};\n}\n`},root:"BadgeList-styles__root",item:"BadgeList-styles__item"}
class c extends r["Component"]{renderChildren(){return r["Children"].map(this.props.children,e=>i.a.createElement("li",{key:e.key,className:l.item},e))}render(){return i.a.createElement("ul",{className:l.root},this.renderChildren())}}c.propTypes={children:a["a"].oneOf([s["a"]])}
t["a"]=Object(o["j"])(u,l)(c)},zXJ3:function(e,t,n){"use strict"
var r=n("VTBJ")
var i=n("q1tI")
var o=n.n(i)
var a=n("TSYQ")
var s=n.n(a)
var u=n("f0Wu")
var l=n.n(u)
var c=n("7np9")
var d=n("J2CL")
var f=n("6SzX")
var p=n("CO+y")
var h=n("l9BP")
var m=n("ZbPE")
var g=n("thi/")
var b=n("uNh2")
var v=n("Qthb")
var y=n("9lnB")
var _=n("Xx/m")
var E=n("8ruJ")
var C=n("Q0Ww")
var O=n("Un/D")
var A=n("dOsU")
var w=n("Kimu")
var k=n("+Gzo")
var x=n("Oak0")
var D=n("CCpZ")
var j=n("+ayY")
var S=n("1OyB")
var I=n("vuIU")
var B=n("Ji7U")
var T=n("LK+K")
var F=n("hPGw")
var P=o.a.createElement("path",{d:"M0 240L0 1680 1500.53647 1680 1500.53647 1128.16941 1920 1574.06118 1920 346.051765 1500.53647 791.830588 1500.53647 240z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var L=function(e){Object(B["a"])(n,e)
var t=Object(T["a"])(n)
function n(){Object(S["a"])(this,n)
return t.apply(this,arguments)}Object(I["a"])(n,[{key:"render",value:function(){return o.a.createElement(F["a"],Object.assign({},this.props,{name:"IconVideoCamera",viewBox:"0 0 1920 1920"}),P)}}])
n.displayName="IconVideoCameraSolid"
return n}(i["Component"])
L.glyphName="video-camera"
L.variant="Solid"
L.propTypes=Object(r["a"])({},F["a"].propTypes)
var M=n("GNz4")
var N=n("17x9")
var R=n("XGBb")
var q=n("weGe")
var z=n("xGf/")
var K=n("Mmr1")
var U=n("msMH")
var W=n("lxh4")
var G=n("Dibh")
var H=n("n12J")
var Y=n("ukBn")
var V=n("q7ZJ")
var Q=n("dEKx")
var Z=n("efQU")
class X extends o.a.Component{renderRow(e,t){return o.a.createElement(W["a"].Item,null,o.a.createElement(m["a"],{weight:"bold"},e),o.a.createElement(H["a"],{margin:"0 0 0 x-small"},o.a.createElement(m["a"],null,t)))}renderTimeString(){const e=this.props,t=e.startTime,n=e.endTime,r=e.timeZone
return this.props.allDay?Object(V["b"])(t,r):n&&!t.isSame(n)?Object(V["a"])(t,n,r):Object(V["c"])(t,r)}renderDateTimeRow(){return this.renderRow(Object(Y["a"])("Date & Time:"),this.renderTimeString())}renderCalendarRow(){const e=this.props.courseName||this.props.currentUser.displayName
return this.renderRow(Object(Y["a"])("Calendar:"),e)}renderLocationRow(){if(this.props.location)return this.renderRow(Object(Y["a"])("Location:"),this.props.location)}renderAddressRow(){if(this.props.address)return this.renderRow(Object(Y["a"])("Address:"),this.props.address)}renderDetails(){if(this.props.details){const e=Object(Q["b"])(this.props.details)
return o.a.createElement(W["a"].Item,{margin:"large 0 0 0"},o.a.createElement(m["a"],{weight:"bold"},Object(Y["a"])("Details:")),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}}render(){return o.a.createElement(G["a"],{label:"Calendar Event Details",size:"small",open:this.props.open,onDismiss:this.props.requestClose,shouldCloseOnDocumentClick:true},o.a.createElement(G["a"].Header,null,o.a.createElement(U["a"],null,o.a.createElement(_["a"],{variant:"link",size:"large",theme:{largePadding:"0",largeHeight:"normal"},href:this.props.html_url},this.props.title)),o.a.createElement(K["a"],{placement:"end",onClick:this.props.requestClose},Object(Y["a"])("Close"))),o.a.createElement(G["a"].Body,{padding:"medium"},o.a.createElement(W["a"],{variant:"unstyled",itemSpacing:"small"},this.renderCalendarRow(),this.renderDateTimeRow(),this.renderLocationRow(),this.renderAddressRow(),this.renderDetails())))}}X.propTypes={open:N["bool"].isRequired,requestClose:N["func"].isRequired,title:N["string"].isRequired,html_url:N["string"].isRequired,courseName:N["string"],currentUser:Object(N["shape"])(Z["h"]),location:N["string"],address:N["string"],details:N["string"],startTime:R["momentObj"].isRequired,endTime:R["momentObj"],allDay:N["bool"].isRequired,timeZone:N["string"].isRequired}
function $({borders:e,colors:t,spacing:n,typography:r}){return{fontFamily:r.fontFamily,lineHeight:r.lineHeightCondensed,color:t.licorice,secondaryColor:t.ash,padding:`${n.small} ${n.xSmall}`,paddingMedium:""+n.small,paddingLarge:`${n.small} ${n.medium}`,gutterWidth:n.medium,gutterWidthXLarge:n.medium,bottomMargin:n.xSmall,borderWidth:e.widthSmall,borderColor:t.tiara,iconFontSize:n.medium,iconColor:t.brand,badgeMargin:"0.0625rem",metricsPadding:n.xxSmall,typeMargin:n.xxSmall,titleLineHeight:r.lineHeightFit}}$.canvas=function(e){return{iconColor:e["ic-brand-primary"]}}
var J=n("OOhq")
var ee=n("6QM+")
const te={componentId:"cCGLM",template:function(e){return`\n\n.PlannerItem-styles__root {\n  font-family: ${e.fontFamily||"inherit"};\n  box-sizing: border-box;\n  padding: ${e.padding||"inherit"};\n  border-bottom: ${e.borderWidth||"inherit"} solid ${e.borderColor||"inherit"};\n  flex: 1;\n  display: flex;\n  align-items: center;\n  color: ${e.color||"inherit"};\n  line-height: ${e.lineHeight||"inherit"};\n}\n  .PlannerItem-styles__root.PlannerItem-styles__small {\n    align-items: flex-start;\n  }\n  .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__k5Layout {\n      align-items: center;\n    }\n  .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__k5Layout >.PlannerItem-styles__icon {\n        display: block;\n        margin: 0 0 0 0.5rem;\n      }\n  .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__k5Layout >.PlannerItem-styles__layout .PlannerItem-styles__details {\n        margin-bottom: 0;\n      }\n  .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {\n      padding-inline-start: 0;\n    }\n  [dir="ltr"] .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {\n      padding-left: 0;\n    }\n  [dir="rtl"] .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {\n      padding-right: 0;\n    }\n  .PlannerItem-styles__root.PlannerItem-styles__missingItem {\n    padding-inline-start: 0.5rem;\n    padding-inline-end: 0;\n  }\n  [dir="ltr"] .PlannerItem-styles__root.PlannerItem-styles__missingItem {\n    padding-left: 0.5rem;\n    padding-right: 0;\n  }\n  [dir="rtl"] .PlannerItem-styles__root.PlannerItem-styles__missingItem {\n    padding-right: 0.5rem;\n    padding-left: 0;\n  }\n\n.PlannerItem-styles__completed,\n.PlannerItem-styles__avatar,\n.PlannerItem-styles__icon,\n.PlannerItem-styles__layout {\n  box-sizing: border-box;\n}\n\n.PlannerItem-styles__completed {\n  width: 1.375rem;\n  margin-inline-start: ${e.gutterWidth||"inherit"};\n}\n\n[dir="ltr"] .PlannerItem-styles__completed {\n  margin-left: ${e.gutterWidth||"inherit"};\n}\n\n[dir="rtl"] .PlannerItem-styles__completed {\n  margin-right: ${e.gutterWidth||"inherit"};\n}\n\n.PlannerItem-styles__activityIndicator {\n  padding-inline-end: 0;\n  padding-inline-start: 0;\n}\n\n[dir="ltr"] .PlannerItem-styles__activityIndicator {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n[dir="rtl"] .PlannerItem-styles__activityIndicator {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {\n  margin-inline-start: calc(${e.gutterWidth||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n[dir="ltr"] .PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {\n  margin-left: calc(${e.gutterWidth||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n[dir="rtl"] .PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {\n  margin-right: calc(${e.gutterWidth||"inherit"} - ${e.activityIndicatorWidth||"inherit"});\n}\n\n.PlannerItem-styles__icon {\n  color: ${e.iconColor||"inherit"};\n  margin: 0 ${e.gutterWidth||"inherit"};\n}\n\n.PlannerItem-styles__icon > svg {\n    \n    display: block;\n  }\n\n.PlannerItem-styles__avatar {\n  \n  margin: 0 calc(${e.gutterWidth||"inherit"} - ((1em * 2.5) - ${e.iconFontSize||"inherit"}) / 2);\n}\n\n.PlannerItem-styles__layout {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n  min-width: 1px;\n}\n.PlannerItem-styles__innerLayout {\n  display: flex;\n  flex: 1 0;\n  align-items: center;\n  min-width: 1px;\n  min-height: 2.5rem; \n}\n\n.PlannerItem-styles__details {\n  flex: 0 0 50%;\n  margin-bottom: 0;\n  box-sizing: border-box;\n  min-width: 1px;\n}\n\n.PlannerItem-styles__details.PlannerItem-styles__details_no_badges {\n    flex: 0 0 75%;\n  }\n\n.PlannerItem-styles__secondary {\n  flex: 0 0 50%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 1px;\n}\n\n.PlannerItem-styles__secondary.PlannerItem-styles__secondary_no_badges {\n    flex: 0 0 25%;\n  }\n\n.PlannerItem-styles__type {\n  box-sizing: border-box;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  margin-bottom: ${e.typeMargin||"inherit"};\n}\n\n.PlannerItem-styles__title {\n  box-sizing: border-box;\n  line-height: ${e.titleLineHeight||"inherit"};\n}\n\n.PlannerItem-styles__metrics {\n  box-sizing: border-box;\n  text-align: end;\n  flex: 0 0 10rem;\n  min-width: 1px;\n  padding-inline-start: ${e.metricsPadding||"inherit"};\n}\n\n[dir="ltr"] .PlannerItem-styles__metrics {\n  text-align: right;\n  padding-left: ${e.metricsPadding||"inherit"};\n}\n\n[dir="rtl"] .PlannerItem-styles__metrics {\n  text-align: left;\n  padding-right: ${e.metricsPadding||"inherit"};\n}\n\n.PlannerItem-styles__metrics.PlannerItem-styles__with_end_time {\n    flex-basis: 14rem;\n  }\n\n.PlannerItem-styles__metrics.PlannerItem-styles__with_end_time .PlannerItem-styles__due {\n      text-transform: none;\n    }\n\n.PlannerItem-styles__missingItem .PlannerItem-styles__metrics {\n    flex-basis: 16rem;\n  }\n\n.PlannerItem-styles__missingItem .PlannerItem-styles__metrics.PlannerItem-styles__with_end_time {\n      flex-basis: 20rem;\n    }\n\n.PlannerItem-styles__due,\n.PlannerItem-styles__score {\n  color: ${e.secondaryColor||"inherit"};\n  box-sizing: border-box;\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  line-height: 1;\n  white-space: nowrap;\n}\n\n.PlannerItem-styles__badges {\n  flex: 1;\n  text-align: end;\n  min-width: 1px;\n}\n\n[dir="ltr"] .PlannerItem-styles__badges {\n  text-align: right;\n}\n\n[dir="rtl"] .PlannerItem-styles__badges {\n  text-align: left;\n}\n\n.PlannerItem-styles__feedback {\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n}\n\n\n\n.PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {\n    flex-shrink: 0;\n    margin-inline-end: ${e.gutterWidth||"inherit"};\n  }\n\n[dir="ltr"] .PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {\n    margin-right: ${e.gutterWidth||"inherit"};\n  }\n\n[dir="rtl"] .PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {\n    margin-left: ${e.gutterWidth||"inherit"};\n  }\n\n.PlannerItem-styles__feedback .PlannerItem-styles__feedbackComment {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n.PlannerItem-styles__location {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.PlannerItem-styles__small .PlannerItem-styles__title, .PlannerItem-styles__medium .PlannerItem-styles__title {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding-inline-end: 0.5rem;\n  }\n\n[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__title,\n[dir="ltr"] .PlannerItem-styles__medium .PlannerItem-styles__title {\n    padding-right: 0.5rem;\n  }\n\n[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__title,\n[dir="rtl"] .PlannerItem-styles__medium .PlannerItem-styles__title {\n    padding-left: 0.5rem;\n  }\n\n.PlannerItem-styles__small {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.PlannerItem-styles__small .PlannerItem-styles__completed {\n    margin-inline-start: 6px;\n  }\n\n[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__completed {\n    margin-left: 6px;\n  }\n\n[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__completed {\n    margin-right: 6px;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__innerLayout {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-inline-start: 1rem;\n  }\n\n[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__innerLayout {\n    margin-left: 1rem;\n  }\n\n[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__innerLayout {\n    margin-right: 1rem;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__details {\n    margin-bottom: 1rem;\n    flex: 1 0 auto;\n    width: 100%;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__moreDetails {\n    display: flex;\n    justify-content: space-between;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__secondary {\n    flex: 1 0 auto;\n    width: 100%;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__metrics {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-end;\n    flex: 1 0 auto;\n    text-align: unset;\n    padding-inline-start: 0;\n  }\n\n[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__metrics {\n    text-align: unset;\n    padding-left: 0;\n  }\n\n[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__metrics {\n    text-align: unset;\n    padding-right: 0;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__due {\n    width: 100%;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__icon,\n  .PlannerItem-styles__small .PlannerItem-styles__avatar,\n  .PlannerItem-styles__small .PlannerItem-styles__badges,\n  .PlannerItem-styles__small .PlannerItem-styles__feedback,\n  .PlannerItem-styles__small .PlannerItem-styles__editButton {\n    display: none;\n  }\n\n.PlannerItem-styles__small .PlannerItem-styles__location {\n    color: ${e.secondaryColor||"inherit"};\n    margin-inline-start: 1rem;\n  }\n\n[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__location {\n    margin-left: 1rem;\n  }\n\n[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__location {\n    margin-right: 1rem;\n  }\n\n.k5 .PlannerItem-styles__type {\n  display: none;\n}\n`},root:"PlannerItem-styles__root",small:"PlannerItem-styles__small",k5Layout:"PlannerItem-styles__k5Layout",icon:"PlannerItem-styles__icon",layout:"PlannerItem-styles__layout",details:"PlannerItem-styles__details",missingItem:"PlannerItem-styles__missingItem",completed:"PlannerItem-styles__completed",avatar:"PlannerItem-styles__avatar",activityIndicator:"PlannerItem-styles__activityIndicator",innerLayout:"PlannerItem-styles__innerLayout",details_no_badges:"PlannerItem-styles__details_no_badges",secondary:"PlannerItem-styles__secondary",secondary_no_badges:"PlannerItem-styles__secondary_no_badges",type:"PlannerItem-styles__type",title:"PlannerItem-styles__title",metrics:"PlannerItem-styles__metrics",with_end_time:"PlannerItem-styles__with_end_time",due:"PlannerItem-styles__due",score:"PlannerItem-styles__score",badges:"PlannerItem-styles__badges",feedback:"PlannerItem-styles__feedback",feedbackAvatar:"PlannerItem-styles__feedbackAvatar",feedbackComment:"PlannerItem-styles__feedbackComment",location:"PlannerItem-styles__location",medium:"PlannerItem-styles__medium",moreDetails:"PlannerItem-styles__moreDetails",editButton:"PlannerItem-styles__editButton"}
class ne extends i["Component"]{constructor(e){super(e)
this.toDoLinkClick=e=>{e.preventDefault()
this.props.updateTodo&&this.props.updateTodo({updateTodoItem:Object(r["a"])({},this.props)})}
this.registerRootDivRef=e=>{this.rootDivRef=e}
this.registerFocusElementRef=e=>{this.checkboxRef=e}
this.getFocusable=e=>"update"===e||"delete"===e?this.itemLink:this.checkboxRef
this.formatDate=e=>this.props.isMissingItem?Object(V["f"])(e,this.props.timeZone):e.format("LT")
this.renderDateField=()=>{if(this.props.date&&this.props.date.isValid()){if(this.props.allDay)return Object(Y["a"])("All Day")
if("Calendar Event"===this.props.associated_item)return this.showEndTime()?Object(Y["a"])("{startTime} to {endTime}",{startTime:this.formatDate(this.props.date),endTime:this.formatDate(this.props.endTime)}):this.formatDate(this.props.date)
if(this.hasDueTime())return"Peer Review"===this.props.associated_item?Object(Y["a"])("Reminder: {date}",{date:this.formatDate(this.props.date)}):"todo"===this.props.dateStyle?Object(Y["a"])("To Do: {date}",{date:this.formatDate(this.props.date)}):Object(Y["a"])("Due: {date}",{date:this.formatDate(this.props.date)})
return this.formatDate(this.props.date)}return null}
this.openCalendarEventModal=()=>{this.setState({calendarEventModalOpen:true})}
this.closeCalendarEventModal=()=>{this.setState({calendarEventModalOpen:false})}
this.renderIcon=()=>{const e=this.props.currentUser||{}
switch(this.props.associated_item){case"Assignment":return o.a.createElement(E["a"],null)
case"Quiz":return o.a.createElement(C["a"],null)
case"Discussion":return o.a.createElement(O["a"],null)
case"Announcement":return o.a.createElement(A["a"],null)
case"Calendar Event":return o.a.createElement(w["a"],null)
case"Page":return o.a.createElement(k["a"],null)
case"Peer Review":return o.a.createElement(x["a"],null)
default:return o.a.createElement(b["a"],{name:e.displayName||"?",src:e.avatarUrl,size:"small","data-fs-exclude":true})}}
this.renderBadges=()=>{if(this.props.badges.length)return o.a.createElement(z["a"],null,this.props.badges.map(e=>o.a.createElement(g["a"],{key:e.id,text:e.text,variant:e.variant})))
return null}
this.renderItemSubMetric=()=>{if(this.props.points)return o.a.createElement("div",{className:te.score},o.a.createElement(m["a"],{size:"large"},this.props.points),o.a.createElement(m["a"],{size:"x-small"}," ",Object(Y["a"])("pts")))
if("To Do"===this.props.associated_item)return o.a.createElement("div",{className:te.editButton},o.a.createElement(d["a"],{theme:{[_["a"].theme]:{iconColor:this.props.simplifiedControls?void 0:this.props.color}}},o.a.createElement(_["a"],{variant:"icon",icon:D["a"],onClick:this.toDoLinkClick},o.a.createElement(f["a"],null,Object(Y["a"])("Edit")))))
return null}
this.renderItemMetrics=()=>{const e=s()(te.secondary,this.hasBadges()?"":te.secondary_no_badges)
const t=s()(te.metrics,{[te.with_end_time]:this.showEndTime()})
return o.a.createElement("div",{className:e},o.a.createElement("div",{className:te.badges},this.renderBadges()),o.a.createElement("div",{className:t},this.renderItemSubMetric(),o.a.createElement("div",{className:te.due},o.a.createElement(m["a"],{size:"x-small"},o.a.createElement(p["a"],null,this.renderDateField())))),"small"!==this.props.responsiveSize&&this.renderOnlineMeeting())}
this.renderType=()=>this.props.associated_item?`${this.props.courseName||""} ${this.assignmentType()}`:Object(Y["a"])("{course} TO DO",{course:this.props.courseName||""})
this.renderCourseName=()=>{if(!this.props.isMissingItem||!this.props.courseName)return null
return o.a.createElement(m["a"],{size:"x-small",weight:"bold",color:"primary",letterSpacing:"expanded",transform:"uppercase",theme:{primaryColor:this.props.color},"data-testid":"MissingAssignments-CourseName"},this.props.courseName)}
this.renderItemDetails=()=>o.a.createElement("div",{className:s()(te.details,this.hasBadges()?"":te.details_no_badges)},!this.props.simplifiedControls&&o.a.createElement("div",{className:te.type},o.a.createElement(m["a"],{size:"x-small",color:"secondary"},this.renderType())),this.renderMoreDetails())
this.getCheckboxTheme=()=>this.props.simplifiedControls?{}:{checkedBackground:this.props.color,checkedBorderColor:this.props.color,borderColor:this.props.color,hoverBorderColor:this.props.color}
this.state={calendarEventModalOpen:false,completed:e.completed}}componentDidMount(){this.props.registerAnimatable("item",this,this.props.animatableIndex,[this.props.uniqueId])}UNSAFE_componentWillReceiveProps(e){this.props.deregisterAnimatable("item",this,[this.props.uniqueId])
this.props.registerAnimatable("item",this,e.animatableIndex,[e.uniqueId])
this.setState({completed:e.completed})}componentWillUnmount(){this.props.deregisterAnimatable("item",this,[this.props.uniqueId])}getScrollable(){return this.rootDivRef}getLayout(){return this.props.responsiveSize}hasDueTime(){return this.props.date&&!("Announcement"===this.props.associated_item||"Calendar Event"===this.props.associated_item)}showEndTime(){return this.props.date&&!this.props.allDay&&this.props.endTime&&!this.props.endTime.isSame(this.props.date)}hasBadges(){return this.props.badges&&this.props.badges.length&&this.props.badges.length>0}assignmentType(){return Object(Q["a"])(this.props.associated_item)}linkLabel(){const e=this.assignmentType()
const t=true===this.props.allDay?"LL":"LLLL"
const n={assignmentType:e,title:this.props.title,datetime:this.props.date?this.props.date.format(t):null}
if(this.props.date){if(this.props.allDay)return Object(Y["a"])("{assignmentType} {title}, all day on {datetime}.",n)
if("Calendar Event"===this.props.associated_item){if(this.showEndTime()){n.endTime=this.props.endTime.format("LT")
return Object(Y["a"])("{assignmentType} {title}, at {datetime} until {endTime}",n)}return Object(Y["a"])("{assignmentType} {title}, at {datetime}.",n)}if(this.hasDueTime())return"todo"===this.props.dateStyle?Object(Y["a"])("{assignmentType} {title} has a to do time at {datetime}.",n):"Peer Review"===this.props.associated_item?Object(Y["a"])("{assignmentType} {title}, reminder {datetime}.",n):Object(Y["a"])("{assignmentType} {title}, due {datetime}.",n)
if("Announcement"===this.props.associated_item)return Object(Y["a"])("{assignmentType} {title} posted {datetime}.",n)}return Object(Y["a"])("{assignmentType} {title}.",n)}renderCalendarEventModal(){if("Calendar Event"!==this.props.associated_item)return null
return o.a.createElement(X,{open:this.state.calendarEventModalOpen,requestClose:this.closeCalendarEventModal,title:this.props.title,html_url:this.props.html_url,courseName:this.props.courseName,currentUser:this.props.currentUser,location:this.props.location,address:this.props.address,details:this.props.details,startTime:this.props.date,endTime:this.props.endTime,allDay:!!this.props.allDay,timeZone:this.props.timeZone})}renderTitle(){const e={}
"To Do"===this.props.associated_item&&(e.onClick=this.toDoLinkClick)
"Calendar Event"===this.props.associated_item?e.onClick=this.openCalendarEventModal:e.href=this.props.html_url
return o.a.createElement("div",{className:te.title,style:{position:"relative"}},o.a.createElement(_["a"],Object.assign({variant:"link",theme:{mediumPadding:this.props.simplifiedControls&&"small"===this.props.responsiveSize?"0":void 0,mediumPaddingHorizontal:"0",mediumHeight:"normal",linkColor:this.props.simplifiedControls?c["a"].licorice:void 0,linkHoverColor:this.props.simplifiedControls?c["a"].licorice:void 0},buttonRef:e=>{this.itemLink=e}},e,{readOnly:this.props.readOnly}),o.a.createElement(f["a"],null,this.linkLabel()),o.a.createElement(p["a"],null,this.props.title)),this.renderCalendarEventModal())}renderMoreDetails(){if("small"===this.props.responsiveSize)return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:te.moreDetails},this.renderTitle(),this.renderOnlineMeeting()),this.renderCourseName())
return o.a.createElement(o.a.Fragment,null,this.renderTitle(),this.renderCourseName())}renderNotificationBadge(){if(!this.props.showNotificationBadge)return null
const e=this.props.newActivity
let t=false
Object(J["g"])("missing",{status:this.props.status,context:this.props.context})&&(t=true)
if(e||t){const t=e?q["b"]:q["a"]
return o.a.createElement(q["c"],{responsiveSize:this.props.responsiveSize},o.a.createElement("div",{className:te.activityIndicator},o.a.createElement(t,{title:this.props.title,itemIds:[this.props.uniqueId],animatableIndex:this.props.animatableIndex,getFocusable:this.getFocusable})))}return o.a.createElement(q["c"],{responsiveSize:this.props.responsiveSize})}renderExtraInfo(){const e=this.props.feedback
if(e){const t=e.is_media?Object(Y["a"])("You have media feedback."):e.comment
return o.a.createElement("div",{className:te.feedback},o.a.createElement("span",{className:te.feedbackAvatar},o.a.createElement(b["a"],{name:e.author_name||"?",src:e.author_avatar_url,size:"small","data-fs-exclude":true})),o.a.createElement("span",{className:te.feedbackComment},o.a.createElement(m["a"],{fontStyle:"italic"},t)))}const t=this.props.location
if(t)return o.a.createElement("div",{className:te.location},o.a.createElement(m["a"],null,t))
return null}renderCompletedCheckbox(){if(this.props.isMissingItem)return o.a.createElement("div",{className:te.completed},o.a.createElement(j["a"],{color:"error"}))
const e=this.assignmentType()
const t=this.state.completed?Object(Y["a"])("{assignmentType} {title} is marked as done.",{assignmentType:e,title:this.props.title}):Object(Y["a"])("{assignmentType} {title} is not marked as done.",{assignmentType:e,title:this.props.title})
return o.a.createElement("div",{className:te.completed},o.a.createElement(d["a"],{theme:{[v["a"].theme]:this.getCheckboxTheme()}},o.a.createElement(y["a"],{ref:this.registerFocusElementRef,label:o.a.createElement(f["a"],null,t),checked:this.props.toggleAPIPending?!this.state.completed:this.state.completed,onChange:this.props.toggleCompletion,disabled:this.props.toggleAPIPending||this.props.isObserving,readOnly:this.props.readOnly})))}renderOnlineMeeting(){var e
if((this.props.simplifiedControls||null!==(e=window.ENV)&&void 0!==e&&e.FEATURES.conferencing_in_planner)&&this.props.onlineMeetingURL){const e=l()()
const t=this.props.allDay&&e.isSame(this.props.date,"day")||this.props.endTime&&e.isBetween(this.props.date,this.props.endTime)||!this.props.endTime&&e.isSame(this.props.date,"day")&&e>this.props.date
const n=t?Object(Y["a"])("join active online meeting"):Object(Y["a"])("join online meeting")
return o.a.createElement("div",{className:te.onlineMeeting},o.a.createElement(_["a"],{"data-testid":t?"join-button-hot":"join-button",size:"small",color:t?"success":"secondary",margin:"small"===this.props.responsiveSize?"0":"0 0 0 x-small",renderIcon:t?L:M["a"],onClick:()=>{window.open(this.props.onlineMeetingURL)}},o.a.createElement(h["a"],{alt:n},Object(Y["a"])("Join"))))}}render(){return o.a.createElement("div",{className:s()(te.root,te[this.getLayout()],"planner-item",{[te.missingItem]:this.props.isMissingItem},this.props.simplifiedControls?te.k5Layout:""),ref:this.registerRootDivRef},this.renderNotificationBadge(),this.renderCompletedCheckbox(),o.a.createElement("div",{className:"To Do"===this.props.associated_item?te.avatar:te.icon,style:{color:this.props.simplifiedControls?void 0:this.props.color},"aria-hidden":"true"},this.renderIcon()),o.a.createElement("div",{className:te.layout},o.a.createElement("div",{className:te.innerLayout},this.renderItemDetails(),this.renderItemMetrics()),this.renderExtraInfo()))}}ne.propTypes={color:N["string"],id:N["string"].isRequired,uniqueId:N["string"].isRequired,animatableIndex:N["number"],title:N["string"].isRequired,points:N["number"],date:R["momentObj"],address:N["string"],dateStyle:N["string"],details:N["string"],courseName:N["string"],completed:N["bool"],overrideId:N["string"],associated_item:N["string"],context:N["object"],html_url:N["string"],toggleCompletion:N["func"],updateTodo:N["func"],badges:Object(N["arrayOf"])(Object(N["shape"])(Z["a"])),registerAnimatable:N["func"],deregisterAnimatable:N["func"],toggleAPIPending:N["bool"],status:Z["g"],newActivity:N["bool"],showNotificationBadge:N["bool"],currentUser:Object(N["shape"])(Z["h"]),responsiveSize:Z["f"],allDay:N["bool"],feedback:Object(N["shape"])(Z["c"]),location:N["string"],endTime:R["momentObj"],timeZone:N["string"].isRequired,simplifiedControls:N["bool"],isMissingItem:N["bool"],readOnly:N["bool"],onlineMeetingURL:N["string"],isObserving:N["bool"]}
ne.defaultProps={badges:[],responsiveSize:"large",allDay:false,simplifiedControls:false,isMissingItem:false,isObserving:false}
const re=Object(d["j"])($,te)(ne)
const ie=Object(ee["c"])(re)
ie.theme=re.theme
t["a"]=ie},zYwU:function(e,t,n){var r=n("Pwfc")
var i=n("jDM7")
e.exports=function(e,t){return r(e,t).replace(/^.| ./g,(function(e){return i(e,t)}))}}}])

//# sourceMappingURL=49-c-2fc134b8e6.js.map