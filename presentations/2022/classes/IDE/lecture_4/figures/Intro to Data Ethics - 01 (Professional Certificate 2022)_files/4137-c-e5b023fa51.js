(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4137,4279],{"2mql":function(e,t,r){"use strict"
var n=r("TOwV")
var o={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true}
var s={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var i={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true}
var a={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true}
var l={}
l[n.ForwardRef]=i
l[n.Memo]=a
function c(e){if(n.isMemo(e))return a
return l[e["$$typeof"]]||o}var u=Object.defineProperty
var d=Object.getOwnPropertyNames
var p=Object.getOwnPropertySymbols
var h=Object.getOwnPropertyDescriptor
var m=Object.getPrototypeOf
var f=Object.prototype
function g(e,t,r){if("string"!==typeof t){if(f){var n=m(t)
n&&n!==f&&g(e,n,r)}var o=d(t)
p&&(o=o.concat(p(t)))
var i=c(e)
var a=c(t)
for(var l=0;l<o.length;++l){var v=o[l]
if(!s[v]&&!(r&&r[v])&&!(a&&a[v])&&!(i&&i[v])){var b=h(t,v)
try{u(e,v,b)}catch(e){}}}}return e}e.exports=g},"4uX5":function(e,t,r){"use strict"
r.d(t,"a",(function(){return m}))
var n=r("RtDj")
var o=r("q1tI")
var s=r.n(o)
var i=r("mrSG")
var a=r("gtzJ")
var l=r("3CEA")
var c=r("9/Zf")
var u=r("8LbN")
r("2mql")
var d=Object(c["f"])(o["version"])
var p={componentStack:null,error:null,eventId:null}
var h=function(e){Object(i["__extends"])(t,e)
function t(){var t=null!==e&&e.apply(this,arguments)||this
t.state=p
t.resetErrorBoundary=function(){var e=t.props.onReset
var r=t.state,n=r.error,o=r.componentStack,s=r.eventId
e&&e(n,o,s)
t.setState(p)}
return t}t.prototype.componentDidCatch=function(e,t){var r=this
var n=t.componentStack
var o=this.props,s=o.beforeCapture,c=o.onError,u=o.showDialog,p=o.dialogOptions
Object(a["c"])((function(t){if(d.major&&d.major>=17){var o=new Error(e.message)
o.name="React ErrorBoundary "+o.name
o.stack=n
e.cause=o}s&&s(t,e,n)
var h=Object(a["a"])(e,{contexts:{react:{componentStack:n}}})
c&&c(e,n,h)
u&&Object(l["b"])(Object(i["__assign"])(Object(i["__assign"])({},p),{eventId:h}))
r.setState({error:e,componentStack:n,eventId:h})}))}
t.prototype.componentDidMount=function(){var e=this.props.onMount
e&&e()}
t.prototype.componentWillUnmount=function(){var e=this.state,t=e.error,r=e.componentStack,n=e.eventId
var o=this.props.onUnmount
o&&o(t,r,n)}
t.prototype.render=function(){var e=this.props,t=e.fallback,r=e.children
var n=this.state,s=n.error,i=n.componentStack,a=n.eventId
if(s){var l=void 0
l="function"===typeof t?t({error:s,componentStack:i,resetError:this.resetErrorBoundary,eventId:a}):t
if(o["isValidElement"](l))return l
t&&u["b"].warn("fallback did not produce a valid ReactElement")
return null}if("function"===typeof r)return r()
return r}
return t}(o["Component"])
class m extends s.a.Component{constructor(...e){super(...e)
this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error(e,t)}render(){if(this.state.error)return"function"===typeof this.props.errorComponent?this.props.errorComponent({error:this.state.error,componentStack:null,eventId:null,resetError:()=>this.setState({error:null})}):this.props.errorComponent
return Object(n["a"])(h,{fallback:this.props.errorComponent},void 0,this.props.children)}}},B9hN:function(e,t,r){"use strict"
var n=r("ouhR")
var o=r.n(n)
var s=r("jFoo")
var i=r("dDTa")
const a=["application/vnd.ims.lti.v1.ltilink","application/vnd.ims.lti.v1.launch+json"]
function l(e,t){t=t||Object.keys
function r(t){return{configurable:true,get:()=>e[t]}}let n,o=t(e),s=o.length
while(s--){n=o[s]
Object.defineProperty(this,n,r(n))}}function c(e){l.call(this,e)}function u(e){const t=window.tinyMCE&&window.tinyMCE.activeEditor.selection
const r=t&&t.getContent()
return r||e.text&&e.text.trim()||e.title&&e.title.trim()}c.fromJSON=function(e){return new c(e)}
const d={iframe:e=>o()("<div/>").append(o()("<iframe/>",{src:e.url,title:e.title,allowfullscreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true",allow:Object(i["a"])()}).addClass(e.class).css({width:e.placementAdvice.displayWidth,height:e.placementAdvice.displayHeight}).attr({width:e.placementAdvice.displayWidth,height:e.placementAdvice.displayHeight})).html(),embed:e=>o()("<div/>").append(o()("<img/>",{src:e.url,alt:e.text}).css({width:e.placementAdvice.displayWidth,height:e.placementAdvice.displayHeight})).html(),text:e=>e.text,link(e){var t
const r=o()("<div/>"),n=o()("<a/>",{href:e.url,title:e.title,target:e.linkTarget})
e.linkClassName&&n.addClass(e.linkClassName)
r.append(n)
e.thumbnail?n.append(o()("<img />",{src:e.thumbnail["@id"],height:e.thumbnail.height||48,width:e.thumbnail.width||48,alt:e.text})):null!==(t=window.tinyMCE.activeEditor)&&void 0!==t&&t.selection.getContent()?n[0].innerHTML=u(e):n.text(u(e))
return r.html()}}
function p(e){this.contentItem=e
const t=(e,t)=>{Object.defineProperty(this,e,{get:t.bind(this)})}
l.call(this,e,Object.getOwnPropertyNames)
t("isLTI",(function(){return!!~a.indexOf(this.mediaType)}))
t("isOverriddenForThumbnail",(function(){return this.isLTI&&this.thumbnail&&"iframe"===this.placementAdvice.presentationDocumentTarget}))
t("isImage",(function(){return this.mediaType&&0==this.mediaType.indexOf("image")}))
t("linkClassName",(function(){return this.isOverriddenForThumbnail?"lti-thumbnail-launch":""}))
t("url",(function(){return(this.isLTI?this.canvasURL:this.contentItem.url).replace(/^(data:text\/html|javascript:)/,"#$1")}))
t("linkTarget",(function(){if(this.isOverriddenForThumbnail)return JSON.stringify(this.placementAdvice)
return"window"==this.placementAdvice.presentationDocumentTarget.toLowerCase()?"_blank":null}))
t("docTarget",(function(){if("embed"==this.placementAdvice.presentationDocumentTarget&&!this.isImage)return"text"
if(this.isOverriddenForThumbnail)return"link"
return this.placementAdvice.presentationDocumentTarget.toLowerCase()}))
t("codePayload",(function(){switch(this.docTarget){case"iframe":return d.iframe(this)
case"embed":return d.embed(this)
case"text":return d.text(this)
default:return d.link(this)}}))}p.ContentItem=c
p.fromJSON=function(e){const t=c.fromJSON(e)
return new p(t)}
Object(s["c"])()
t["a"]=p},G4i8:function(e,t,r){var n={"./__tests__/lti.resourceImported.test.js":["LFe7",4205],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4206],"./__tests__/lti.showAlert.test.js":["+y7l",4207],"./__tests__/org.imsglobal.lti.get_data.test.js":["CXUv",4192],"./__tests__/org.imsglobal.lti.put_data.test.js":["mElt",4193],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4208],"./lti.enableScrollEvents.js":["HVU3",4267],"./lti.fetchWindowSize.js":["OANa",4268],"./lti.frameResize.js":["bSyB",4194],"./lti.removeUnloadMessage.js":["tjuu",4209],"./lti.resourceImported.js":["FC2N",4269],"./lti.screenReaderAlert.js":["YYEg",4270],"./lti.scrollToTop.js":["W/R1",4271],"./lti.setUnloadMessage.js":["6fDN",4210],"./lti.showAlert.js":["onLg",4272],"./lti.showModuleNavigation.js":["NSTA",4273],"./org.imsglobal.lti.capabilities.js":["zPPZ",4274],"./org.imsglobal.lti.get_data.js":["lH2A",4203],"./org.imsglobal.lti.put_data.js":["hugc",4204],"./requestFullWindowLaunch.js":["8IHO",4275],"./toggleCourseNavigationMenu.js":["ECMy",4202]}
function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=n[e],o=t[0]
return r.e(t[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)}
o.id="G4i8"
e.exports=o},HeaX:function(e,t,r){"use strict"
r.d(t,"a",(function(){return v}))
var n=r("RtDj")
var o=r("HGxv")
var s=r("q1tI")
var i=r.n(s)
r("17x9")
var a=r("Mmr1")
var l=r("n12J")
var c=r("TstA")
var u=r("msMH")
var d=r("Dibh")
var p=r("4uX5")
var h=r("qwzJ")
var m=r("1sWr")
var f=r.n(m)
const g=Object(o["useScope"])("canvas_modal")
v.defaultProps={padding:"small",errorImageUrl:f.a,footer:null,title:null,closeButtonSize:"small"}
function v({padding:e,errorSubject:t,errorCategory:r,errorImageUrl:o,label:s,title:m,onDismiss:f,children:v,footer:b,closeButtonSize:y,...j}){null==m&&(m=s)
return i.a.createElement(d["a"],Object.assign({label:s,onDismiss:f},j),Object(n["a"])(d["a"].Header,{},void 0,Object(n["a"])(c["a"],{},void 0,Object(n["a"])(c["a"].Item,{grow:true},void 0,Object(n["a"])(u["a"],{},void 0,m)),Object(n["a"])(c["a"].Item,{},void 0,Object(n["a"])(a["a"],{onClick:f,size:y,screenReaderLabel:g.t("Close")})))),Object(n["a"])(d["a"].Body,{padding:e},void 0,Object(n["a"])(l["a"],{as:"div",height:"100%"},void 0,Object(n["a"])(p["a"],{errorComponent:Object(n["a"])(h["a"],{imageUrl:o,errorSubject:t,errorCategory:r})},void 0,v))),b&&Object(n["a"])(d["a"].Footer,{},void 0,"function"===typeof b?b():b))}},PrO8:function(e,t,r){"use strict"
r.r(t)
r.d(t,"default",(function(){return T}))
var n=r("RtDj")
function o(e,t,r){if(!e)return e
const n=(t||"").toString()
const o=(r||"").toString().replace(/\s/g,"+")
const s=new RegExp(`(%7B|{){2}[\\s|%20|+]*${n}[\\s|%20|+]*(%7D|}){2}`,"g")
return e.replace(s,o)}function s(e,t,r){if("object"===typeof t){Object.keys(t).forEach(r=>{e=o(e,r,t[r])})
return e}return o(e,t,r)}var i=r("q1tI")
var a=r.n(i)
r("17x9")
var l=r("HeaX")
function c(e){const{open:t,label:r,onOpen:o,onClose:s,onCloseButton:i,name:a,children:c}=e
return Object(n["a"])(l["a"],{padding:"0",open:t,label:r,title:a,onOpen:o,onClose:s,onDismiss:i},void 0,c)}var u=r("bJGz")
function d(e){const{open:t,label:r,onOpen:o,onClose:s,onCloseButton:i,name:a,children:l}=e
return Object(n["a"])(u["a"],{open:t,label:r,title:a,onOpen:o,onClose:s,onDismiss:i,placement:"end",size:"regular",padding:"0",headerPadding:"small"},void 0,l)}var p=r("L+/K")
var h=r("uSnb")
var m=r("HGxv")
var f=r("eodz")
var g=r("B9hN")
var v=r("ouhR")
var b=r.n(v)
var y=r("hK1/")
const j=Object(m["useScope"])("external_content.success")
function O(e,t,r){const n=y["a"].fromEvent(e,w)
if(!n)return
n.process(t).finally(()=>{r.close()}).catch(e=>{console.error(e)
b.a.flashError(j.t("Error retrieving content"))})}async function w(e){this.contentItems.forEach(t=>{if(Object.keys(this.typeMap).includes(t.type)){const r=e.selection&&e.selection.getContent()
const n=new this.typeMap[t.type](t,this.ltiEndpoint,r)
Object(f["d"])(b()("#"+e.id),"insert_code",n.toHtmlString())}})}var E=r("TstA")
var S
const _=Object(m["useScope"])("ExternalToolDialog")
const x={height:300,width:400,name:" "}
const C={url:"",selection:"",contents:""}
class T extends a.a.Component{constructor(...e){super(...e)
this.state={open:false,button:x,infoAlert:null,form:C,iframeLoaded:false}
this.handleBeforeUnload=e=>e.returnValue=_.t("Changes you made may not be saved.")
this.handleExternalContentReady=(e,t)=>{const{editor:r,win:n}=this.props
const o=t.contentItems
if(1===o.length&&"lti_replace"===o[0]["@type"]){const e=o[0].text
Object(f["d"])(n.$("#"+r.id),"set_code",e)}else for(let e=0,t=o.length;e<t;++e){const t=o[e]
t.class="lti-embed"
const s=g["a"].fromJSON(t).codePayload
Object(f["d"])(n.$("#"+r.id),"insert_code",s)}this.close()}
this.handleDeepLinking=e=>{const{editor:t,deepLinkingOrigin:r}=this.props
e.origin===r&&e.data&&"LtiDeepLinkingResponse"===e.data.subject&&O(e,t,this)}
this.handleClose=()=>{const{win:e}=this.props
const t=_.t("Are you sure you want to cancel? Changes you made may not be saved.")
e.confirm(t)&&this.close()}
this.handleOpen=()=>{this.state.open&&this.formRef.submit()}
this.handleRemove=()=>{this.setState({button:x})
this.props.editor.focus()
this.props.win.dispatchEvent(new Event("resize"))}
this.handleInfoAlertFocus=e=>this.setState({infoAlert:e.target})
this.handleInfoAlertBlur=()=>this.setState({infoAlert:null})}open(e){const{win:t,editor:r,contextAssetString:n,resourceSelectionUrl:o}=this.props
let i=s(o,"id",e.id)
const a=r.selection.getContent()||""
const l=r.getContent()||""
if(null==i){const t=n.split("_")
i=`/${t[0]}s/${t[1]}/external_tools/${e.id}/resource_selection`}this.setState({open:true,button:e,form:{url:i,selection:a,contents:l}})
t.addEventListener("beforeunload",this.handleBeforeUnload)
t.addEventListener("message",this.handleDeepLinking)
t.$(t).bind("externalContentReady",this.handleExternalContentReady)}close(){const{win:e}=this.props
e.removeEventListener("beforeunload",this.handleBeforeUnload)
e.removeEventListener("message",this.handleDeepLinking)
e.$(e).unbind("externalContentReady")
this.setState({open:false,form:C})}render(){const{open:e,button:t,form:r,infoAlert:o,iframeLoaded:s}=this.state
const{iframeAllowances:i,win:l}=this.props
const u=_.t("embed_from_external_tool","Embed content from External Tool")
const m=Math.max(Math.min(l.innerHeight-100,550),100)
const f=t.use_tray?d:c
return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{ref:e=>this.formRef=e,method:"POST",action:r.url,target:"external_tool_launch",style:{margin:0}},S||(S=Object(n["a"])("input",{type:"hidden",name:"editor",value:"1"})),Object(n["a"])("input",{type:"hidden",name:"selection",value:r.selection}),Object(n["a"])("input",{type:"hidden",name:"editor_contents",value:r.contents})),Object(n["a"])(f,{open:e,label:u,onOpen:this.handleOpen,onClose:this.handleRemove,onCloseButton:this.handleClose,name:t.name},void 0,a.a.createElement("div",{ref:e=>this.beforeInfoAlertRef=e,tabIndex:"0",onFocus:this.handleInfoAlertFocus,onBlur:this.handleInfoAlertBlur,className:o&&o===this.beforeInfoAlertRef?"":"screenreader-only"},Object(n["a"])(p["a"],{margin:"small"},void 0,_.t("The following content is partner provided"))),!s&&Object(n["a"])(E["a"],{alignItems:"center",justifyItems:"center"},void 0,Object(n["a"])(E["a"].Item,{},void 0,Object(n["a"])(h["a"],{renderTitle:_.t("Loading External Tool"),size:"large",margin:"0 0 0 medium"}))),a.a.createElement("iframe",{title:u,ref:e=>this.iframeRef=e,name:"external_tool_launch",src:"",id:"external_tool_button_frame",style:{width:t.use_tray?"100%":t.width||800,height:t.use_tray?"100%":t.height||m,border:"0",display:"block",visibility:s?"visible":"hidden"},allow:i,borderstyle:"0","data-lti-launch":"true",onLoad:()=>this.setState({iframeLoaded:true})}),a.a.createElement("div",{ref:e=>this.afterInfoAlertRef=e,tabIndex:"0",onFocus:this.handleInfoAlertFocus,onBlur:this.handleInfoAlertBlur,className:o&&o===this.afterInfoAlertRef?"":"screenreader-only"},Object(n["a"])(p["a"],{margin:"small"},void 0,_.t("The preceding content is partner provided")))))}}T.defaultProps={resourceSelectionUrl:null,deepLinkingOrigin:""}},TOwV:function(e,t,r){"use strict"
e.exports=r("qT12")},bJGz:function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r("RtDj")
var o=r("HGxv")
var s=r("q1tI")
var i=r.n(s)
r("17x9")
var a=r("Mmr1")
var l=r("n12J")
var c=r("TstA")
var u=r("msMH")
var d=r("Ci/e")
var p=r("4uX5")
var h=r("qwzJ")
var m=r("1sWr")
var f=r.n(m)
var g=r("/656")
const v=Object(o["useScope"])("tray")
b.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:f.a}
function b({padding:e,headerPadding:t,contentPadding:r,errorSubject:o,errorCategory:s,errorImageUrl:m,label:f,title:b,onDismiss:y,children:j,...O}){var w,E
null==t&&(t=`0 0 ${e} 0`)
null==b&&(b=f)
function S(){return Object(n["a"])(c["a"],{as:"div",padding:t},void 0,Object(n["a"])(c["a"].Item,{grow:true},void 0,Object(n["a"])(u["a"],{},void 0,Object(n["a"])(g["a"],{},void 0,b))),Object(n["a"])(c["a"].Item,{},void 0,Object(n["a"])(a["a"],{onClick:y,size:"small",screenReaderLabel:v.t("Close")})))}function _(){return Object(n["a"])(p["a"],{errorComponent:w||(w=Object(n["a"])(h["a"],{imageUrl:m,errorSubject:o,errorCategory:s}))},void 0,E||(E=Object(n["a"])(l["a"],{as:"div",padding:r,width:"100%",height:"100%"},void 0,j)))}return i.a.createElement(d["a"],Object.assign({label:f,onDismiss:y},O),Object(n["a"])(l["a"],{as:"div",padding:e,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(n["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,S(),Object(n["a"])("div",{style:{position:"relative",flex:1}},void 0,_()))))}},dKDz:function(e,t,r){"use strict"
var n=/["'&<>]/
e.exports=o
function o(e){var t=""+e
var r=n.exec(t)
if(!r)return t
var o
var s=""
var i=0
var a=0
for(i=r.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:o="&quot;"
break
case 38:o="&amp;"
break
case 39:o="&#39;"
break
case 60:o="&lt;"
break
case 62:o="&gt;"
break
default:continue}a!==i&&(s+=t.substring(a,i))
a=i+1
s+=o}return a!==i?s+t.substring(a,i):s}},fhP7:function(e,t,r){"use strict"
r.d(t,"k",(function(){return n}))
r.d(t,"e",(function(){return o}))
r.d(t,"f",(function(){return s}))
r.d(t,"g",(function(){return i}))
r.d(t,"h",(function(){return a}))
r.d(t,"l",(function(){return l}))
r.d(t,"i",(function(){return c}))
r.d(t,"b",(function(){return u}))
r.d(t,"j",(function(){return d}))
r.d(t,"c",(function(){return p}))
r.d(t,"d",(function(){return h}))
r.d(t,"a",(function(){return m}))
const n="@"
const o="mentions-marker"
const s="span#"+o
const i="mention-menu"
const a="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const c="mentions.NavigationEvent"
const u="mentions.InputChangeEvent"
const d="mentions.SelectionEvent"
const p={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const h={[p.up]:"UpArrow",[p.down]:"DownArrow",[p.enter]:"Enter"}
const m={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},"hK1/":function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r("ouhR")
var o=r.n(n)
var s=r("dDTa")
class i{constructor(e){this.assignProperties(e)}toHtmlString(){}assignProperties(e){this.properties.forEach(t=>{this[t]=e[t]})}linkThumbnail(){return this.imageTag(this.thumbnail)}iframeTag(){const{iframe:e}=this
if(e){const t=document.createElement("iframe")
t.setAttribute("src",e.src)
t.setAttribute("title",this.title||"")
t.setAttribute("allowfullscreen","true")
t.setAttribute("allow",Object(s["a"])())
e.width&&(t.style.width=e.width+"px")
e.height&&(t.style.height=e.height+"px")
return t.outerHTML}}imageTag(e,t,r){const n=document.createElement("img")
n.setAttribute("src",e)
this.text&&n.setAttribute("alt",this.text)
t&&n.setAttribute("width",t)
r&&n.setAttribute("height",r)
return n.outerHTML}anchorTag(e){const t=document.createElement("a")
t.setAttribute("href",this.safeUrl())
t.setAttribute("title",this.title)
t.setAttribute("target","_blank")
t.innerHTML=e
return t.outerHTML}safeUrl(){return this.url.replace(/^(data:text\/html|javascript:)/,"#$1")}}class a extends i{constructor(e,t,r){super(e)
this.type=a.type
r&&""!==r&&(this.text=r)}get properties(){return Object.freeze(["url","title","text","icon","thumbnail","iframe","custom","lookup_uuid"])}toHtmlString(){if(this.iframe&&this.iframe.src)return this.iframeTag()
return this.anchorTag(this.linkBody())}linkText(){return this.text&&this.text.trim()||this.title&&this.title.trim()}linkBody(){if(this.thumbnail)return this.linkThumbnail()
return this.linkText()}}a.type="link"
class l extends a{constructor(e,t,r){super(e,t,r)
this.url=`${t}?${this.ltiEndpointParams(e.url,e.lookup_uuid)}`}ltiEndpointParams(e,t){let r="display=borderless"
null!==t&&void 0!==t&&(r+="&resource_link_lookup_uuid="+t)
return`${r}&url=${encodeURIComponent(e)}`}toHtmlString(){if(this.iframe){this.iframe.src=this.safeUrl()
return this.iframeTag()}return this.anchorTag(this.linkBody())}}class c extends i{constructor(e){super(e)
this.type=c.type}get properties(){return Object.freeze(["url","title","thumbnail","text","width","height"])}toHtmlString(){if(this.thumbnail)return this.anchorTag(this.linkThumbnail())
return this.imageTag(this.safeUrl(),this.width,this.height)}}c.type="image"
class u extends i{constructor(e){super(e)
this.type=u.type}get properties(){return Object.freeze(["html","title","text"])}toHtmlString(){return this.html}}u.type="html"
var d=r("jFoo")
class p{constructor(e,t,r,n,o){this.contentItems=e
this.messages=t
this.logs=r
this.ltiEndpoint=n
this.processHandler=o
this.showMessages()
this.showLogs()}get loggingEnabled(){return ENV&&ENV.DEEP_LINKING_LOGGING}get typeMap(){return{link:a,ltiResourceLink:l,image:c,html:u}}static fromEvent(e,t){const{content_items:r,msg:n,log:o,errormsg:s,errorlog:i,ltiEndpoint:a,subject:l}=e.data
if("LtiDeepLinkingResponse"!==l)return
return new this(r,{msg:n,errormsg:s},{log:o,errorlog:i},a,t)}process(){null!==d["b"]&&void 0!==d["b"]&&d["b"].fullWindowProxy&&d["b"].fullWindowProxy.close()
return this.processHandler(...arguments)}showMessages(){this.messages.errormsg&&o.a.flashError(this.messages.errormsg)
this.messages.msg&&o.a.flashMessage(this.messages.msg)}showLogs(){if(this.loggingEnabled){this.logs.errorlog&&console.error(this.logs.errorlog)
this.logs.log&&console.log(this.logs.log)}}}},jFoo:function(e,t,r){"use strict"
r.d(t,"b",(function(){return u}))
r.d(t,"a",(function(){return d}))
r.d(t,"c",(function(){return m}))
var n=r("fhP7")
const o="error"
const s="unsupported_subject"
const i="wrong_origin"
const a="bad_request"
const l=({targetWindow:e,origin:t,subject:r,message_id:n})=>{const l=(o={})=>{const s={subject:r+".response"}
n&&(s.message_id=n)
e?e.postMessage({...s,...o},t):console.error("Error sending response postMessage: target window does not exist")}
const c=()=>{l({})}
const u=(e,t)=>{const r={code:e}
t&&(r.message=t)
l({error:r})}
const d=e=>{u(o,e)}
const p=e=>{u(a,e)}
const h=()=>{u(i)}
const m=()=>{u(s)}
return{sendResponse:l,sendSuccess:c,sendError:u,sendGenericError:d,sendBadRequestError:p,sendWrongOriginError:h,sendUnsupportedSubjectError:m}}
var c=l
const u={}
const d=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const p=["A2ExternalContentReady","LtiDeepLinkingResponse",n["i"],n["b"],n["j"]]
async function h(e,t=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let n
try{n="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const o=n.subject||n.messageType
const s=c({targetWindow:e.source,origin:e.origin,subject:o,message_id:n.message_id})
if(p.includes(o))return false
if(!d.includes(o)){t&&s.sendUnsupportedSubjectError()
return false}if(!t&&o.includes("org.imsglobal.lti"))return false
try{const i=await r("G4i8")(`./${o}.js`)
const a=i.default({message:n,event:e,responseMessages:s})
!a&&t&&s.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${o}": ${e}`)
t&&s.sendGenericError(e.message)
return false}}function m(){var e,t
const r=null===(e=ENV)||void 0===e||null===(t=e.FEATURES)||void 0===t?void 0:t.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&h(e,r)})}},qT12:function(e,t,r){"use strict"
var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,s=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,j=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119
function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof
switch(t){case o:switch(e=e.type,e){case d:case p:case i:case l:case a:case m:return e
default:switch(e=e&&e.$$typeof,e){case u:case h:case v:case g:case c:return e
default:return t}}case s:return t}}}function E(e){return w(e)===p}t.AsyncMode=d
t.ConcurrentMode=p
t.ContextConsumer=u
t.ContextProvider=c
t.Element=o
t.ForwardRef=h
t.Fragment=i
t.Lazy=v
t.Memo=g
t.Portal=s
t.Profiler=l
t.StrictMode=a
t.Suspense=m
t.isAsyncMode=function(e){return E(e)||w(e)===d}
t.isConcurrentMode=E
t.isContextConsumer=function(e){return w(e)===u}
t.isContextProvider=function(e){return w(e)===c}
t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}
t.isForwardRef=function(e){return w(e)===h}
t.isFragment=function(e){return w(e)===i}
t.isLazy=function(e){return w(e)===v}
t.isMemo=function(e){return w(e)===g}
t.isPortal=function(e){return w(e)===s}
t.isProfiler=function(e){return w(e)===l}
t.isStrictMode=function(e){return w(e)===a}
t.isSuspense=function(e){return w(e)===m}
t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===l||e===a||e===m||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===g||e.$$typeof===c||e.$$typeof===u||e.$$typeof===h||e.$$typeof===y||e.$$typeof===j||e.$$typeof===O||e.$$typeof===b)}
t.typeOf=w}}])

//# sourceMappingURL=4137-c-e5b023fa51.js.map