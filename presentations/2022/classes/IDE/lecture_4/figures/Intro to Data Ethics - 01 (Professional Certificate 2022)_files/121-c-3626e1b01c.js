(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[121],{"/5Zp":function(e,t,a){"use strict"
a.d(t,"a",(function(){return x}))
var n=a("1OyB")
var o=a("vuIU")
var r=a("Ji7U")
var i=a("LK+K")
var s=a("q1tI")
var l=a.n(s)
var c=a("17x9")
var u=a.n(c)
var d=a("cClk")
var h=a("sTNg")
var p=a("BTe1")
var b=a("oXx0")
var m=a("4Awi")
var f=a("II2N")
var g=a("jtGx")
var v=a("GTSS")
var y,_,w,O
var x=(y=Object(b["a"])(),y(_=(O=w=function(e){Object(r["a"])(a,e)
var t=Object(i["a"])(a)
function a(e){var o
Object(n["a"])(this,a)
o=t.call(this)
o.handleChange=function(e){var t=e.target.value
if(o.props.disabled||o.props.readOnly){e.preventDefault()
return}"undefined"===typeof o.props.value&&o.setState({value:t})
"function"===typeof o.props.onChange&&o.props.onChange(e,t)}
"undefined"===typeof e.value&&(o.state={value:e.defaultValue})
o._messagesId=Object(p["a"])("RadioInputGroup-messages")
return o}Object(o["a"])(a,[{key:"renderChildren",value:function(){var e=this
var t=this.props,a=t.children,n=t.name,o=t.variant,r=t.size,i=t.disabled,l=t.readOnly
return s["Children"].map(a,(function(t,a){if(Object(m["a"])(t,[v["a"]])){var s=e.value===t.props.value
var c=!e.value&&0===a
return Object(f["a"])(t,{name:n,disabled:i||t.props.disabled,variant:o,size:r,checked:s,onChange:e.handleChange,readOnly:l||t.props.readOnly,width:t.props.width||"auto","aria-describedby":e.hasMessages&&e._messagesId,tabIndex:s||c?"0":"-1"})}return t}))}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.layout
return l.a.createElement(h["b"],Object.assign({},Object(g["a"])(this.props,a.propTypes),Object(g["c"])(this.props,h["b"].propTypes),{layout:"columns"===n&&"toggle"===t?"stacked":n,vAlign:"toggle"===t?"middle":"top",rowSpacing:"small",colSpacing:"toggle"===t?"none":"small",startAt:"toggle"===t?"small":void 0,messagesId:this._messagesId}),this.renderChildren())}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"value",get:function(){return"undefined"===typeof this.props.value?this.state.value:this.props.value}}])
a.displayName="RadioInputGroup"
return a}(s["Component"]),w.propTypes={name:u.a.string.isRequired,description:u.a.node.isRequired,defaultValue:u.a.oneOfType([u.a.string,u.a.number]),value:Object(d["a"])(u.a.oneOfType([u.a.string,u.a.number])),onChange:u.a.func,disabled:u.a.bool,readOnly:u.a.bool,messages:u.a.arrayOf(h["d"].message),children:u.a.node,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","columns","inline"])},w.defaultProps={disabled:false,variant:"simple",size:"medium",layout:"stacked",readOnly:false,defaultValue:void 0,value:void 0,children:null,messages:void 0,onChange:void 0},O))||_)},FumF:function(e,t,a){"use strict"
var n=a("RtDj")
var o=a("q1tI")
var r=a.n(o)
a("17x9")
var i=a("NQuj")
var s=a("HGxv")
var l=a("ouhR")
var c=a.n(l)
a("r2Yr")
const u=Object(s["useScope"])("home_page_prompt")
class d extends r.a.Component{constructor(...e){super(...e)
this.state={dialogOpen:true}
this.onClose=()=>{this.setState({dialogOpen:false})}}componentDidMount(){this.flashScreenReaderAlert()}componentWillReceiveProps(e){if(e.forceOpen){this.setState({dialogOpen:true})
this.flashScreenReaderAlert()}}flashScreenReaderAlert(){c.a.screenReaderFlashMessage(u.t("Before publishing your course, you must either publish a module or choose a different home page."))}render(){return this.state.dialogOpen?Object(n["a"])(i["a"],{store:this.props.store,open:this.state.dialogOpen,onRequestClose:this.onClose,courseId:this.props.courseId,wikiFrontPageTitle:this.props.wikiFrontPageTitle,wikiUrl:this.props.wikiUrl,onSubmit:this.props.onSubmit,returnFocusTo:this.props.returnFocusTo,isPublishing:true}):r.a.createElement(r.a.Fragment,null)}}t["a"]=d},HMVb:function(e,t,a){"use strict"
a.d(t,"a",(function(){return u}))
var n=a("ODXe")
var o=a("i/8D")
var r=a("DUTp")
var i=a("IPIv")
var s={}
function l(e,t){if(!o["a"])return 16
var a=e||Object(r["a"])(e).documentElement
if(!t&&s[a])return s[a]
var n=parseInt(Object(i["a"])(a).getPropertyValue("font-size"))
s[a]=n
return n}var c=a("CyAq")
function u(e,t){var a=t||document.body
if(!e||"number"===typeof e)return e
var o=Object(c["a"])(e),r=Object(n["a"])(o,2),i=r[0],s=r[1]
return"rem"===s?i*l():"em"===s?i*l(a):i}},"M8//":function(e,t,a){"use strict"
a.d(t,"a",(function(){return I}))
var n=a("rePB")
var o=a("1OyB")
var r=a("vuIU")
var i=a("Ji7U")
var s=a("LK+K")
var l=a("q1tI")
var c=a.n(l)
var u=a("17x9")
var d=a.n(u)
var h=a("TSYQ")
var p=a.n(h)
var b=a("cClk")
var m=a("sTNg")
var f=a("yfCu")
var g=a("8o96")
var v=a("ISHz")
var y=a("/UXv")
var _=a("eGSd")
var w=a("BTe1")
var O=a("HMVb")
var x=a("J2CL")
var j=a("oXx0")
var H=a("jtGx")
function S(e){var t=e.colors,a=e.borders,n=e.spacing,o=e.typography,r=e.forms
return{fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:a.widthSmall,borderStyle:a.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:a.radiusMedium,padding:n.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:a.widthMedium,focusOutlineStyle:a.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:o.fontSizeSmall,smallHeight:r.inputHeightSmall,mediumFontSize:o.fontSizeMedium,mediumHeight:r.inputHeightMedium,largeFontSize:o.fontSizeLarge,largeHeight:r.inputHeightLarge}}S.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var M,q,k,C,B
var z={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var I=(M=Object(j["a"])(),q=Object(x["j"])(S,z),M(k=q(k=(B=C=function(e){Object(i["a"])(a,e)
var t=Object(s["a"])(a)
function a(){var e
Object(o["a"])(this,a)
e=t.call(this)
e._textareaResize=function(t){var a=e._textarea.style.height
if(a!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=a}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var a=e._textarea.offsetHeight-e._textarea.clientHeight
var n=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
n=e._textarea.scrollHeight+a+"px"
var o=Object(O["a"])(e.props.maxHeight,e._container)
if(e.props.maxHeight&&e._textarea.scrollHeight>o)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)n=e.props.height
else if(Object(O["a"])(e.props.height,e._container)>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
n=e.props.height}var r=Object(O["a"])(n)>o
r||(e._container.style.minHeight=n)
e._height=n
e._textarea.style.height=n}
e.handleChange=function(t){var a=e.props,n=a.onChange,o=a.value,r=a.disabled,i=a.readOnly
if(r||i){t.preventDefault()
return}"undefined"===typeof o&&e.autoGrow()
"function"===typeof n&&n(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=Object(w["a"])("TextArea")
return e}Object(r["a"])(a,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentDidUpdate",value:function(){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=Object(_["a"])(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=Object(f["a"])(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=Object(g["a"])(this._textarea,this._textareaResize,["height"]))
this._request=Object(v["a"])(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,t=this
var o=this.props,r=o.autoGrow,i=o.placeholder,s=o.value,l=o.defaultValue,u=o.disabled,d=o.readOnly,h=o.required,b=o.width,f=o.height,g=o.maxHeight,v=o.textareaRef,y=o.resize,_=o.size
var w=Object(H["a"])(this.props,a.propTypes)
var O=(e={},Object(n["a"])(e,z.textarea,true),Object(n["a"])(e,z[_],true),Object(n["a"])(e,z.disabled,u),e)
var x={width:b,resize:y,height:r?null:f,maxHeight:g}
var j=c.a.createElement("textarea",Object.assign({},w,{value:s,defaultValue:l,placeholder:i,ref:function(e){t._textarea=e
for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o]
v.apply(t,[e].concat(n))},style:x,id:this.id,required:h,"aria-required":h,"aria-invalid":this.invalid?"true":null,disabled:u||d,className:p()(O),onChange:this.handleChange}))
return c.a.createElement(m["a"],Object.assign({},Object(H["c"])(this.props,m["a"].propTypes),{vAlign:"top",id:this.id,ref:function(e){t._node=e}}),c.a.createElement("div",{className:z.layout,style:{width:b,maxHeight:g},ref:this.handleContainerRef},j,u||d?null:c.a.createElement("span",{className:z.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(y["a"])(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
a.displayName="TextArea"
return a}(l["Component"]),C.propTypes={label:d.a.node.isRequired,id:d.a.string,size:d.a.oneOf(["small","medium","large"]),layout:d.a.oneOf(["stacked","inline"]),autoGrow:d.a.bool,resize:d.a.oneOf(["none","both","horizontal","vertical"]),width:d.a.string,height:d.a.string,maxHeight:d.a.oneOfType([d.a.number,d.a.string]),messages:d.a.arrayOf(m["d"].message),inline:d.a.bool,placeholder:d.a.string,disabled:d.a.bool,readOnly:d.a.bool,required:d.a.bool,textareaRef:d.a.func,defaultValue:d.a.string,value:Object(b["a"])(d.a.string),onChange:d.a.func},C.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},B))||k)||k)},NQuj:function(e,t,a){"use strict"
var n=a("RtDj")
var o=a("q1tI")
var r=a.n(o)
a("17x9")
var i=a("BrAc")
var s=a("6ohZ")
var l=a("/5Zp")
var c=a("GTSS")
var u=a("Xx/m")
var d=a("8t0o")
var h=a("ZbPE")
var p=a("l9BP")
var b=a("6SzX")
var m=a("HGxv")
a("rJZq")
var f
const g=Object(m["useScope"])("course_home_dialog")
class v extends r.a.Component{constructor(e){super(e)
this.onClose=()=>{window.setTimeout(()=>{const e=this.props.returnFocusTo
e&&e.focus()})}
this.onStoreChange=()=>{this.setState(this.props.store.getState())}
this.onSubmit=()=>{const{selectedDefaultView:e,savedDefaultView:t}=this.state
let a
a=e!==t?i["a"].put("/api/v1/courses/"+this.props.courseId,{course:{default_view:this.state.selectedDefaultView}}).then(({data:e})=>e.default_view):Promise.resolve(t)
a.then(e=>{this.props.store.setState({savedDefaultView:e})
this.props.onSubmit()})}
this.onChange=e=>{this.props.store.setState({selectedDefaultView:e})}
this.state=e.store.getState()}renderWikiLabelContent(){var e
const{wikiUrl:t,wikiFrontPageTitle:a}=this.props
if(a)return Object(n["a"])("span",{},void 0,Object(n["a"])(h["a"],{size:"small",color:"secondary"},void 0,"  ",e||(e=Object(n["a"])("i",{},void 0,a)),"  [",Object(n["a"])(d["a"],{href:t},void 0,g.t("Change")),"]"))
return Object(n["a"])("span",{},void 0,f||(f=Object(n["a"])(p["a"],{},void 0,"*")),Object(n["a"])(b["a"],{},void 0,Object(n["a"])(d["a"],{href:t},void 0,g.t("Front Page must be set first"))))}renderWikiLabel(){return Object(n["a"])("span",{},void 0,g.t("Pages Front Page"),this.renderWikiLabelContent())}render(){const{selectedDefaultView:e}=this.state
const{wikiFrontPageTitle:t,wikiUrl:a}=this.props
const o=[{value:"feed",get label(){return g.t("Course Activity Stream")},checked:"feed"===e},{value:"wiki",label:this.renderWikiLabel(),checked:"wiki"===e,disabled:!t},{value:"modules",get label(){return g.t("Course Modules")},checked:"modules"===e},{value:"assignments",get label(){return g.t("Assignments List")},checked:"assignments"===e},{value:"syllabus",get label(){return g.t("Syllabus")},checked:"syllabus"===e}]
const r=this.props.isPublishing?g.t("Before publishing your course, you must either publish a module in the Modules page, or choose a different home page."):g.t("Select what you'd like to display on the home page.")
return Object(n["a"])(s["a"],{open:this.props.open,transition:"fade",label:g.t("Choose Course Home Page"),onDismiss:this.props.onRequestClose,onClose:this.onClose},void 0,Object(n["a"])(s["a"].Body,{},void 0,Object(n["a"])("div",{className:"content-box-mini",style:{marginTop:"0"}},void 0,Object(n["a"])(p["a"],{},void 0,Object(n["a"])(h["a"],{weight:"bold",size:"small"},void 0,r))),Object(n["a"])(l["a"],{description:Object(n["a"])(b["a"],{},void 0,r),name:"course[default_view]",onChange:(e,t)=>this.onChange(t),defaultValue:e},void 0,o.map(e=>Object(n["a"])(c["a"],{checked:e.checked,value:e.value,label:e.label,disabled:e.disabled},e.value))),t?null:Object(n["a"])("div",{className:"content-box-mini"},void 0,"*",Object(n["a"])(d["a"],{href:a,isWithinText:false,theme:{mediumPaddingHorizontal:"0",mediumHeight:"1.5rem"}},void 0,g.t("Front Page must be set first")))),Object(n["a"])(s["a"].Footer,{},void 0,Object(n["a"])(u["a"],{onClick:this.props.onRequestClose,margin:"0 x-small"},void 0,g.t("Cancel")),Object(n["a"])(u["a"],{onClick:this.onSubmit,disabled:this.props.isPublishing&&"modules"===this.state.selectedDefaultView,color:"primary"},void 0,this.props.isPublishing?g.t("Choose and Publish"):g.t("Save"))))}componentDidMount(){this.props.store.addChangeListener(this.onStoreChange)}componentWillUnmount(){this.props.store.removeChangeListener(this.onStoreChange)}}v.defaultProps={onSubmit:()=>{window.location.reload()},wikiFrontPageTitle:null}
t["a"]=v},WEeK:function(e,t,a){"use strict"
a.d(t,"a",(function(){return z}))
var n=a("rePB")
var o=a("Ff2n")
var r=a("1OyB")
var i=a("vuIU")
var s=a("Ji7U")
var l=a("LK+K")
var c=a("q1tI")
var u=a.n(c)
var d=a("17x9")
var h=a.n(d)
var p=a("TSYQ")
var b=a.n(p)
var m=a("cClk")
var f=a("nAyT")
var g=a("jtGx")
var v=a("E+IV")
var y=a("tCl5")
var _=a("/UXv")
var w=a("sTNg")
var O=a("TstA")
var x=a("BTe1")
var j=a("J2CL")
function H(e){var t=e.colors,a=e.typography,n=e.borders,o=e.spacing,r=e.forms
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,borderWidth:n.widthSmall,borderStyle:n.style,borderColor:t.borderMedium,borderRadius:n.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:o.small,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:a.fontSizeSmall,smallHeight:r.inputHeightSmall,mediumFontSize:a.fontSizeMedium,mediumHeight:r.inputHeightMedium,largeFontSize:a.fontSizeLarge,largeHeight:r.inputHeightLarge}}H.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var S,M,q,k,C
var B={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var z=(S=Object(f["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),M=Object(j["j"])(H,B),S(q=M(q=(C=k=function(e){Object(s["a"])(a,e)
var t=Object(l["a"])(a)
function a(e){var n
Object(r["a"])(this,a)
n=t.call(this)
n.handleInputRef=function(e){n._input=e
n.props.inputRef(e)}
n.handleChange=function(e){n.props.onChange(e,e.target.value)}
n.handleBlur=function(e){n.props.onBlur(e)
n.setState({hasFocus:false})}
n.handleFocus=function(e){n.props.onFocus(e)
n.setState({hasFocus:true})}
n.state={hasFocus:false}
n._defaultId=Object(x["a"])("TextInput")
n._messagesId=Object(x["a"])("TextInput-messages")
return n}Object(i["a"])(a,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,a=t.type,r=t.size,i=t.htmlSize,s=(t.display,t.textAlign),l=t.placeholder,c=t.value,d=t.defaultValue,h=t.required,p=t.isRequired,m=Object(o["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var f=Object(g["b"])(m)
var v=this.interaction
var y=(e={},Object(n["a"])(e,B.input,true),Object(n["a"])(e,B[r],r),Object(n["a"])(e,B["textAlign--".concat(s)],s),e)
var _=""
f["aria-describedby"]&&(_="".concat(f["aria-describedby"]))
this.hasMessages&&(_=""!==_?"".concat(_," ").concat(this._messagesId):this._messagesId)
return u.a.createElement("input",Object.assign({},f,{className:b()(y),defaultValue:d,value:c,placeholder:l,ref:this.handleInputRef,type:a,id:this.id,required:p||h,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===v,readOnly:"readonly"===v,"aria-describedby":""!==_?_:null,size:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,a=t.width,o=t.inline,r=t.display,i=t.label,s=t.renderLabel,l=t.renderBeforeInput,c=t.renderAfterInput,d=t.messages,h=t.inputContainerRef,p=t.icon,m=t.shouldNotWrap
var f=this.interaction
var g=l||c||p
var y=(e={},Object(n["a"])(e,B.facade,true),Object(n["a"])(e,B.disabled,"disabled"===f),Object(n["a"])(e,B.invalid,this.invalid),Object(n["a"])(e,B.focused,this.state.hasFocus),e)
return u.a.createElement(w["a"],{id:this.id,label:Object(v["a"])(s||i),messagesId:this._messagesId,messages:d,inline:"inline-block"===r||o,width:a,inputContainerRef:h,layout:this.props.layout},u.a.createElement("span",{className:b()(y)},g?u.a.createElement(O["a"],{wrap:m?"no-wrap":"wrap"},l&&u.a.createElement(O["a"].Item,{padding:"0 0 0 small"},Object(v["a"])(l)),u.a.createElement(O["a"].Item,{shouldGrow:true,shouldShrink:true},u.a.createElement(O["a"],null,u.a.createElement(O["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(c||p)&&u.a.createElement(O["a"].Item,{padding:"0 small 0 0"},c?Object(v["a"])(c):Object(v["a"])(p))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(y["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(_["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
a.displayName="TextInput"
return a}(c["Component"]),k.propTypes={renderLabel:h.a.oneOfType([h.a.node,h.a.func]),type:h.a.oneOf(["text","email","url","tel","search","password"]),id:h.a.string,value:Object(m["a"])(h.a.string),defaultValue:h.a.string,interaction:h.a.oneOf(["enabled","disabled","readonly"]),messages:h.a.arrayOf(w["d"].message),size:h.a.oneOf(["small","medium","large"]),textAlign:h.a.oneOf(["start","center"]),width:h.a.string,htmlSize:h.a.oneOfType([h.a.string,h.a.number]),display:h.a.oneOf(["inline-block","block"]),shouldNotWrap:h.a.bool,placeholder:h.a.string,isRequired:h.a.bool,inputRef:h.a.func,inputContainerRef:h.a.func,renderBeforeInput:h.a.oneOfType([h.a.node,h.a.func]),renderAfterInput:h.a.oneOfType([h.a.node,h.a.func]),onChange:h.a.func,onBlur:h.a.func,onFocus:h.a.func,icon:h.a.func,label:h.a.oneOfType([h.a.node,h.a.func]),required:h.a.bool,inline:h.a.bool},k.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},C))||q)||q)},ZoFV:function(e,t,a){"use strict"
a.d(t,"b",(function(){return l}))
a.d(t,"a",(function(){return c}))
var n=a("BrAc")
var o=a("HGxv")
var r=a("ouhR")
var i=a.n(r)
const s=Object(o["useScope"])("modules_home_page")
const l=({courseId:e})=>{n["a"].put("/api/v1/courses/"+e,{course:{event:"offer"}}).then(()=>{window.location.reload()}).catch(e=>{401===e.response.status&&"unverified"===e.response.data.status?i.a.flashWarning(s.t("Complete registration by clicking the “finish the registration process” link sent to your email.")):i.a.flashError(s.t("An error ocurred while publishing course"))})}
const c=({courseId:e})=>n["a"].get(`/api/v1/courses/${e}/modules`)},cClk:function(e,t,a){"use strict"
a.d(t,"a",(function(){return n}))
function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(n,o,r){var i=e.apply(null,arguments)
if(i)return i
if(n[o]&&"function"!==typeof n[t])return new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(r,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(a,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},msTH:function(e,t,a){"use strict"
var n=a("ouhR")
var o=a.n(n)
var r=a("Y/W1")
var i=a.n(r)
var s=a("gI0r")
var l=a("HGxv")
const c=Object(l["useScope"])("user_content")
const u={translateMathmlForScreenreaders(e){var t,a
if(!(null!==(t=ENV)&&void 0!==t&&null!==(a=t.FEATURES)&&void 0!==a&&a.new_math_equation_handling)){const t=o()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=o()('<span class="hidden-readable"></span>')
a.html(t)
return a}},toMediaCommentLink(e){const t=o()(`<a\n        id='media_comment_${Object(s["a"])(o()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(o()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(o()(e).attr("data-alt"))}'\n      />`)
t.html(o()(e).html())
return t},convert(e,t={}){const a=o()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=o()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=i.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a=`//${ENV.files_domain}${a}`)
const n=o()(`<form\n            action='${Object(s["a"])(a)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
n.append(o()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(o()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
o()("body").append(n)
setTimeout(()=>n.submit(),0)
return o()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(c.t("User Content"))}'\n          />`)}))
a.find("img.equation_image").each((e,t)=>{const a=o()(t)
const n=u.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(n)})}return a.html()}}
t["a"]=u}}])

//# sourceMappingURL=121-c-3626e1b01c.js.map