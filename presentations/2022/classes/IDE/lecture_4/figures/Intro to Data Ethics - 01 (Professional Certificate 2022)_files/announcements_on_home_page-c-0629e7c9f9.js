(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3731],{HMVb:function(n,e,t){"use strict"
t.d(e,"a",(function(){return g}))
var o=t("ODXe")
var r=t("i/8D")
var i=t("DUTp")
var a=t("IPIv")
var c={}
function l(n,e){if(!r["a"])return 16
var t=n||Object(i["a"])(n).documentElement
if(!e&&c[t])return c[t]
var o=parseInt(Object(a["a"])(t).getPropertyValue("font-size"))
c[t]=o
return o}var s=t("CyAq")
function g(n,e){var t=e||document.body
if(!n||"number"===typeof n)return n
var r=Object(s["a"])(n),i=Object(o["a"])(r,2),a=i[0],c=i[1]
return"rem"===c?a*l():"em"===c?a*l(t):a}},HRzM:function(n,e,t){"use strict"
t.r(e)
var o=t("RtDj")
var r=t("HGxv")
t("q1tI")
var i=t("i8i4")
var a=t.n(i)
var c=t("BrAc")
var l=t("msMH")
var s=t("uSnb")
var g=t("n12J")
var p=t("i1EF")
var u=t("3lLS")
var d=t.n(u)
const h=Object(r["useScope"])("announcements_on_home_page")
ENV.SHOW_ANNOUNCEMENTS&&d()(()=>{const n=document.querySelector("#announcements_on_home_page")
a.a.render(Object(o["a"])(s["a"],{renderTitle:h.t("Loading Announcements"),size:"small"}),n)
const e="/api/v1/announcements"
const t={context_codes:["course_"+ENV.COURSE.id],per_page:ENV.ANNOUNCEMENT_LIMIT||3,page:"1",start_date:"1900-01-01",end_date:(new Date).toISOString(),active_only:true,include:["sections","sections_user_count"]}
c["a"].get(e,{params:t}).then(e=>{a.a.render(Object(o["a"])(g["a"],{display:"block",margin:"0 0 medium"},void 0,Object(o["a"])(l["a"],{level:"h3",margin:"0 0 small"},void 0,h.t("Recent Announcements")),e.data.map(n=>Object(o["a"])(p["a"],{announcement:n},n.id))),n)}).catch(n=>{console.error("Error retrieving home page announcements")
console.error(n)})})},ZbFs:function(n,e,t){"use strict"
t.d(e,"a",(function(){return u}))
var o=t("VTBJ")
var r=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var g=t("hPGw")
var p=s.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return s.a.createElement(g["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconCheckSolid"
return t}(l["Component"])
u.glyphName="check"
u.variant="Solid"
u.propTypes=Object(o["a"])({},g["a"].propTypes)},ZbPE:function(n,e,t){"use strict"
t.d(e,"a",(function(){return O}))
var o=t("rePB")
var r=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var g=t("17x9")
var p=t.n(g)
var u=t("TSYQ")
var d=t.n(u)
var h=t("J2CL")
var f=t("KgFQ")
var b=t("jtGx")
var m=t("nAyT")
var v=t("VTBJ")
function _(n){var e=n.typography,t=n.colors,o=n.spacing
return Object(v["a"])({},e,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(o.medium," 0")})}_.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"],brandColor:n["ic-brand-primary"]}}
var y,R,w,k
var B={componentId:"enRcg",template:function(n){return"\n\n.enRcg_bGBk{font-family:".concat(n.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(n.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(n.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(n.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(n.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(n.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(n.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(n.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(n.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(n.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(n.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(n.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(n.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(n.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(n.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(n.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(n.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(n.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(n.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(n.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(n.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(n.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(n.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var O=(y=Object(h["j"])(_,B),y(R=(k=w=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var n
var e=this.props,r=e.wrap,i=e.weight,a=e.fontStyle,c=e.size,l=e.lineHeight,g=e.letterSpacing,p=e.transform,u=e.color,h=e.children
var m=Object(f["a"])(t,this.props)
return s.a.createElement(m,Object.assign({},Object(b["b"])(this.props),{className:d()((n={},Object(o["a"])(n,B.root,true),Object(o["a"])(n,B[c],c),Object(o["a"])(n,B["wrap-".concat(r)],r),Object(o["a"])(n,B["weight-".concat(i)],i),Object(o["a"])(n,B["style-".concat(a)],a),Object(o["a"])(n,B["transform-".concat(p)],p),Object(o["a"])(n,B["lineHeight-".concat(l)],l),Object(o["a"])(n,B["letterSpacing-".concat(g)],g),Object(o["a"])(n,B["color-".concat(u)],u),n)),ref:this.props.elementRef}),h)}}])
t.displayName="Text"
return t}(l["Component"]),w.propTypes={as:p.a.elementType,children:p.a.node,color:m["a"].deprecatePropValues(p.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:p.a.func,fontStyle:p.a.oneOf(["italic","normal"]),letterSpacing:p.a.oneOf(["normal","condensed","expanded"]),lineHeight:p.a.oneOf(["default","fit","condensed","double"]),size:p.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:p.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:p.a.oneOf(["normal","light","bold"]),wrap:p.a.oneOf(["normal","break-word"])},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||R)},bZJi:function(n,e,t){"use strict"
t.d(e,"a",(function(){return L}))
var o=t("Ff2n")
var r=t("VTBJ")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var s=t("q1tI")
var g=t.n(s)
var p=t("17x9")
var u=t.n(p)
var d=t("nAyT")
var h=t("KgFQ")
var f=t("jtGx")
var b=t("sQ3t")
var m=t("E+IV")
var v=t("UCAh")
var _=t("BTe1")
var y=t("J2CL")
var R=t("oXx0")
var w=t("jsCG")
var k=t("AdN2")
var B=function(n){var e=n.typography,t=n.spacing
return{fontFamily:e.fontFamily,fontWeight:e.fontWeightNormal,fontSize:e.fontSizeSmall,padding:t.small}}
var O,G,C,F,S,j
var x={componentId:"eZLSb",template:function(n){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(n.fontFamily||"inherit",";font-size:").concat(n.fontSize||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";padding:").concat(n.padding||"inherit","}")},root:"eZLSb_bGBk"}
var L=(O=Object(d["a"])("8.0.0",{tip:"renderTip",variant:"color"}),G=Object(R["a"])(),C=Object(y["j"])(B,x),O(F=G(F=C(F=(j=S=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){var n
Object(i["a"])(this,t)
for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a]
n=e.call.apply(e,[this].concat(r))
n._id=Object(_["a"])("Tooltip")
n.state={hasFocus:false}
n.handleFocus=function(e){n.setState({hasFocus:true})}
n.handleBlur=function(e){n.setState({hasFocus:false})}
return n}Object(a["a"])(t,[{key:"renderTrigger",value:function(){var n=this.props,e=n.children,o=n.as
var i=this.state.hasFocus
var a={"aria-describedby":this._id}
if(o){var c=Object(h["a"])(t,this.props)
var l=Object(f["a"])(this.props,t.propTypes)
return g.a.createElement(c,Object.assign({},l,a),e)}return"function"===typeof e?e({focused:i,getTriggerProps:function(n){return Object(r["a"])({},a,{},n)}}):Object(b["a"])(this.props.children,a)}},{key:"render",value:function(){var n=this
var e=this.props,t=e.renderTip,r=e.isShowingContent,i=e.defaultIsShowingContent,a=e.on,c=e.placement,l=e.mountNode,s=e.constrain,p=e.offsetX,u=e.offsetY,d=e.positionTarget,h=e.onShowContent,b=e.onHideContent,v=e.tip,_=(e.variant,Object(o["a"])(e,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return g.a.createElement(w["a"],Object.assign({},Object(f["b"])(_),{isShowingContent:r,defaultIsShowingContent:i,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===y?"primary-inverse":"primary",mountNode:l,constrain:s,shadow:"none",offsetX:p,offsetY:u,positionTarget:d,renderTrigger:function(){return n.renderTrigger()},onShowContent:h,onHideContent:b,onFocus:this.handleFocus,onBlur:this.handleBlur}),g.a.createElement("span",{id:this._id,className:x.root,role:"tooltip"},t?Object(m["a"])(t):v))}}])
t.displayName="Tooltip"
return t}(s["Component"]),S.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]).isRequired,renderTip:u.a.oneOfType([u.a.node,u.a.func]),isShowingContent:u.a.bool,defaultIsShowingContent:u.a.bool,as:u.a.elementType,on:u.a.oneOfType([u.a.oneOf(["click","hover","focus"]),u.a.arrayOf(u.a.oneOf(["click","hover","focus"]))]),color:u.a.oneOf(["primary","primary-inverse"]),placement:v["a"].placement,mountNode:v["a"].mountNode,constrain:v["a"].constrain,offsetX:u.a.oneOfType([u.a.string,u.a.number]),offsetY:u.a.oneOfType([u.a.string,u.a.number]),positionTarget:u.a.oneOfType([k["a"],u.a.func]),onShowContent:u.a.func,onHideContent:u.a.func,tip:u.a.node,variant:u.a.oneOf(["default","inverse"])},S.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(n){},onHideContent:function(n,e){e.documentClick}},j))||F)||F)||F)},cClk:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
function o(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(o,r,i){var a=n.apply(null,arguments)
if(a)return a
if(o[r]&&"function"!==typeof o[e])return new Error(["You provided a '".concat(r,"' prop without an '").concat(e,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(t,"'. Otherwise, set '").concat(e,"'.")].join(""))}}},eGSd:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
function o(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var o,r,i,a
var c=0
var l=[]
var s=false
if("function"!==typeof n)throw new TypeError("Expected a function")
var g=!!t.leading
var p="maxWait"in t
var u=!("trailing"in t)||!!t.trailing
var d=p?Math.max(+t.maxWait||0,e):0
function h(e){var t=o
var a=r
o=r=void 0
c=e
if(true!==s){i=n.apply(a,t)
return i}}function f(n){c=n
l.push(setTimeout(v,e))
return g?h(n):i}function b(n){var t=n-a
var o=n-c
var r=e-t
return p?Math.min(r,d-o):r}function m(n){var t=n-a
var o=n-c
return"undefined"===typeof a||t>=e||t<0||p&&o>=d}function v(){var n=Date.now()
if(m(n))return _(n)
l.push(setTimeout(v,b(n)))}function _(n){w()
if(u&&o)return h(n)
o=r=void 0
return i}function y(){s=true
w()
c=0
o=a=r=void 0}function R(){return 0===l.length?i:_(Date.now())}function w(){l.forEach((function(n){return clearTimeout(n)}))
l=[]}function k(){var n=Date.now()
var t=m(n)
for(var c=arguments.length,s=new Array(c),g=0;g<c;g++)s[g]=arguments[g]
o=s
r=this
a=n
if(t){if(0===l.length)return f(a)
if(p){l.push(setTimeout(v,e))
return h(a)}}0===l.length&&l.push(setTimeout(v,e))
return i}k.cancel=y
k.flush=R
return k}},gCYW:function(n,e,t){"use strict"
t.d(e,"a",(function(){return c}))
var o=t("QF4Q")
var r=t("i/8D")
var i=t("EgqM")
var a=t("DUTp")
function c(n){var e={top:0,left:0,height:0,width:0}
if(!r["a"])return e
var t=Object(o["a"])(n)
if(!t)return e
if(t===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=n===document?document:Object(a["a"])(t)
var s=l&&l.documentElement
if(!s||!Object(i["a"])(s,t))return e
var g=t.getBoundingClientRect()
var p
for(p in g)e[p]=g[p]
if(l!==document){var u=l.defaultView.frameElement
if(u){var d=c(u)
e.top+=d.top
e.bottom+=d.top
e.left+=d.left
e.right+=d.left}}return{top:e.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||0),left:e.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0),width:(null==e.width?t.offsetWidth:e.width)||0,height:(null==e.height?t.offsetHeight:e.height)||0,right:l.body.clientWidth-e.width-e.left,bottom:l.body.clientHeight-e.height-e.top}}},msMH:function(n,e,t){"use strict"
t.d(e,"a",(function(){return L}))
var o=t("rePB")
var r=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var s=t("q1tI")
var g=t.n(s)
var p=t("17x9")
var u=t.n(p)
var d=t("TSYQ")
var h=t.n(d)
var f=t("n12J")
var b=t("J2CL")
function m(n,e,t){if("input"===n.as){if("children"===e&&n.children||void 0==n.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===e&&void 0!=n.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!n.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}var v=t("nAyT")
var _=t("KgFQ")
var y=t("jtGx")
var R=t("oXx0")
function w(n){var e=n.borders,t=n.colors,o=n.spacing,r=n.typography
return{lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h1FontFamily:r.fontFamily,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h2FontFamily:r.fontFamily,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h3FontFamily:r.fontFamily,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h4FontFamily:r.fontFamily,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,h5FontFamily:r.fontFamily,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,borderPadding:o.xxxSmall,borderColor:t.borderMedium,borderWidth:e.widthSmall,borderStyle:e.style}}w.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"]}}
w["instructure"]=function(n){var e=n.typography
return{h1FontFamily:e.fontFamilyHeading,h2FontFamily:e.fontFamilyHeading,h3FontWeight:e.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:e.fontWeightBold,h4FontSize:e.fontSizeLarge,h5FontWeight:e.fontWeightBold,h5FontSize:e.fontSizeMedium}}
var k={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var B=Object(b["d"])({map:k,version:"8.0.0"})
var O,G,C,F,S,j
var x={componentId:"blnAQ",template:function(n){return"\n\n.blnAQ_bGBk{line-height:".concat(n.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(n.h1FontFamily||"inherit",";font-size:").concat(n.h1FontSize||"inherit",";font-weight:").concat(n.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(n.h2FontFamily||"inherit",";font-size:").concat(n.h2FontSize||"inherit",";font-weight:").concat(n.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(n.h3FontFamily||"inherit",";font-size:").concat(n.h3FontSize||"inherit",";font-weight:").concat(n.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(n.h4FontFamily||"inherit",";font-size:").concat(n.h4FontSize||"inherit",";font-weight:").concat(n.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(n.h5FontFamily||"inherit",";font-size:").concat(n.h5FontSize||"inherit",";font-weight:").concat(n.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-top:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-bottom:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(n.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(n.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var L=(O=Object(v["a"])("8.0.0",{ellipsis:"<TruncateText />"}),G=Object(R["a"])(),C=Object(b["j"])(w,x,B),O(F=G(F=C(F=(j=S=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){Object(i["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var n
var e=this.props,i=e.border,a=e.children,c=e.color,l=e.level,s=e.margin,p=e.elementRef,u=e.ellipsis,d=Object(r["a"])(e,["border","children","color","level","margin","elementRef","ellipsis"])
var b=Object(_["a"])(t,this.props,(function(){return"reset"===l?"span":l}))
return g.a.createElement(f["a"],Object.assign({},Object(y["b"])(d),{className:h()((n={},Object(o["a"])(n,x.root,true),Object(o["a"])(n,x["level--".concat(l)],true),Object(o["a"])(n,x["color--".concat(c)],c),Object(o["a"])(n,x["border--".concat(i)],"none"!==i),Object(o["a"])(n,x.ellipsis,u),n)),as:b,margin:s,elementRef:p}),a)}}])
t.displayName="Heading"
return t}(s["Component"]),S.propTypes={border:u.a.oneOf(["none","top","bottom"]),children:m,color:u.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:u.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:u.a.elementType,margin:b["c"].spacing,elementRef:u.a.func,ellipsis:u.a.bool},S.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},j))||F)||F)||F)},xHhu:function(n,e,t){"use strict"
t.d(e,"a",(function(){return u}))
var o=t("VTBJ")
var r=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var s=t.n(l)
var g=t("hPGw")
var p=s.a.createElement("path",{d:"M1581.17647,1750.58824 C1581.17647,1781.64706 1555.76471,1807.05882 1524.70588,1807.05882 L395.294118,1807.05882 C364.235294,1807.05882 338.823529,1781.64706 338.823529,1750.58824 L338.823529,564.705882 L225.882353,564.705882 L225.882353,1750.58824 C225.882353,1843.99059 301.891765,1920 395.294118,1920 L1524.70588,1920 C1618.10824,1920 1694.11765,1843.99059 1694.11765,1750.58824 L1694.11765,564.705882 L1581.17647,564.705882 L1581.17647,1750.58824 Z M677.647059,1581.17647 L790.588235,1581.17647 L790.588235,677.647059 L677.647059,677.647059 L677.647059,1581.17647 Z M1129.41176,1581.17647 L1242.35294,1581.17647 L1242.35294,677.647059 L1129.41176,677.647059 L1129.41176,1581.17647 Z M1340.62306,338.823529 L1217.06541,2.5243549e-29 L694.599529,2.5243549e-29 L571.267765,338.823529 L0.0112941176,338.823529 L0.0112941176,451.764706 L1920.01129,451.764706 L1920.01129,338.823529 L1340.62306,338.823529 Z M691.324235,338.823529 L773.658353,112.941176 L1138.11953,112.941176 L1220.45365,338.823529 L691.324235,338.823529 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return s.a.createElement(g["a"],Object.assign({},this.props,{name:"IconTrash",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconTrashLine"
return t}(l["Component"])
u.glyphName="trash"
u.variant="Line"
u.propTypes=Object(o["a"])({},g["a"].propTypes)}}])

//# sourceMappingURL=announcements_on_home_page-c-0629e7c9f9.js.map