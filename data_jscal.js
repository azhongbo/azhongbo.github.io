
// chkData(`
// ##### (data_jscal.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_jscal.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_jscal.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_jscal.js) 主旨放這裡 #####
// 內容放這裡
// `)




chkData(`
##### (data_jscal.js) JSCal 日曆 #####
&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
	&lt;title&gt;JSCal2(新增样式) - 非凡前端组件(EHCJ)&lt;/title&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;meta name="description" content="EHCJ ehcj html css js"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"&gt;
	&lt;script type="text/javascript" src="http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript"&gt;
Calendar=function(){function t(e){var n,a,s
e=e||{},this.args=e=E(e,{animation:!ce,cont:null,bottomBar:!0,date:!0,fdow:_("fdow"),min:null,max:null,reverseWheel:!1,selection:[],selectionType:t.SEL_SINGLE,weekNumbers:!1,align:"Bl/ / /T/r",inputField:null,trigger:null,dateFormat:"%Y-%m-%d",multiCtrl:!0,fixed:!1,opacity:le?1:3,titleFormat:"%b %Y",showTime:!1,timePos:"right",time:!0,minuteStep:5,noScroll:!1,disabled:se,checkRange:!1,dateInfo:se,onChange:se,onSelect:se,onTimeChange:se,onFocus:se,onBlur:se,onClose:se}),this.handlers={},n=this,a=new Date,e.min=k(e.min),e.max=k(e.max),e.date===!0&&(e.date=a),e.time===!0&&(e.time=a.getHours()*100+Math.floor(a.getMinutes()/e.minuteStep)*e.minuteStep),this.date=k(e.date),this.time=e.time,this.fdow=e.fdow,q("onChange onSelect onTimeChange onFocus onBlur onClose".split(/\s+/),function(t){var a=e[t]
a instanceof Array||(a=[a]),n.handlers[t]=a}),this.selection=new t.Selection(e.selection,e.selectionType,C,this),s=l(this),e.cont&&J(e.cont).appendChild(s),e.trigger&&this.manageFields(e.trigger,e.inputField,e.dateFormat)}function e(t){var e,n=["&lt;table",Q,"&gt;&lt;tr&gt;"],a=0
for(t.args.weekNumbers&&n.push("&lt;td&gt;&lt;div class='DynarchCalendar-weekNumber'&gt;",_("wk"),"&lt;/div&gt;&lt;/td&gt;");7&gt;a;)e=(a++ +t.fdow)%7,n.push("&lt;td&gt;&lt;div",_("weekend").indexOf(e)&lt;0?"&gt;":" class='DynarchCalendar-weekend'&gt;",_("sdn")[e],"&lt;/div&gt;&lt;/td&gt;")
return n.push("&lt;/tr&gt;&lt;/table&gt;"),n.join("")}function n(t,e,n){var a,s,i,r,o,l,c,h,u,d,f,y,m,p,g,v,D
for(e=e||t.date,n=n||t.fdow,e=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0,0),a=e.getMonth(),s=[],i=0,r=t.args.weekNumbers,e.setDate(1),o=(e.getDay()-n)%7,0&gt;o&&(o+=7),e.setDate(0-o),e.setDate(e.getDate()+1),l=new Date,c=l.getDate(),h=l.getMonth(),u=l.getFullYear(),s[i++]="&lt;table class='DynarchCalendar-bodyTable'"+Q+"&gt;",d=0;6&gt;d;++d){for(s[i++]="&lt;tr class='DynarchCalendar-week",0==d&&(s[i++]=" DynarchCalendar-first-row"),5==d&&(s[i++]=" DynarchCalendar-last-row"),s[i++]="'&gt;",r&&(s[i++]="&lt;td class='DynarchCalendar-first-col'&gt;&lt;div class='DynarchCalendar-weekNumber'&gt;"+T(e)+"&lt;/div&gt;&lt;/td&gt;"),f=0;7&gt;f;++f)y=e.getDate(),m=e.getMonth(),p=e.getFullYear(),g=1e4*p+100*(m+1)+y,v=t.selection.isSelected(g),D=t.isDisabled(e),s[i++]="&lt;td class='",0!=f||r||(s[i++]=" DynarchCalendar-first-col"),0==f&&0==d&&(t._firstDateVisible=g),6==f&&(s[i++]=" DynarchCalendar-last-col",5==d&&(t._lastDateVisible=g)),v&&(s[i++]=" DynarchCalendar-td-selected"),s[i++]="'&gt;&lt;div dyc-type='date' unselectable='on' dyc-date='"+g+"' ",D&&(s[i++]="disabled='1' "),s[i++]="class='DynarchCalendar-day",_("weekend").indexOf(e.getDay())&lt;0||(s[i++]=" DynarchCalendar-weekend"),m!=a&&(s[i++]=" DynarchCalendar-day-othermonth"),y==c&&m==h&&p==u&&(s[i++]=" DynarchCalendar-day-today"),D&&(s[i++]=" DynarchCalendar-day-disabled"),v&&(s[i++]=" DynarchCalendar-day-selected"),D=t.args.dateInfo(e),D&&D.klass&&(s[i++]=" "+D.klass),s[i++]="'&gt;"+y+"&lt;/div&gt;&lt;/td&gt;",e=new Date(p,m,y+1,12,0,0,0)
s[i++]="&lt;/tr&gt;"}return s[i++]="&lt;/table&gt;",s.join("")}function a(t){var n=["&lt;table class='DynarchCalendar-topCont'",Q,"&gt;&lt;tr&gt;&lt;td&gt;","&lt;div class='DynarchCalendar'&gt;",le?"&lt;a class='DynarchCalendar-focusLink' href='#'&gt;&lt;/a&gt;":"&lt;button class='DynarchCalendar-focusLink'&gt;&lt;/button&gt;","&lt;div class='DynarchCalendar-topBar'&gt;","&lt;div dyc-type='nav' dyc-btn='-Y' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-prevYear'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;","&lt;div dyc-type='nav' dyc-btn='+Y' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-nextYear'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;","&lt;div dyc-type='nav' dyc-btn='-M' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-prevMonth'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;","&lt;div dyc-type='nav' dyc-btn='+M' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-nextMonth'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;","&lt;table class='DynarchCalendar-titleCont'",Q,"&gt;&lt;tr&gt;&lt;td&gt;","&lt;div dyc-type='title' dyc-btn='menu' dyc-cls='hover-title,pressed-title' class='DynarchCalendar-title'&gt;",s(t),"&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;","&lt;div class='DynarchCalendar-dayNames'&gt;",e(t),"&lt;/div&gt;","&lt;/div&gt;","&lt;div class='DynarchCalendar-body'&gt;&lt;/div&gt;"]
return(t.args.bottomBar||t.args.showTime)&&n.push("&lt;div class='DynarchCalendar-bottomBar'&gt;",o(t),"&lt;/div&gt;"),n.push("&lt;div class='DynarchCalendar-menu' style='display: none'&gt;",i(t),"&lt;/div&gt;","&lt;div class='DynarchCalendar-tooltip'&gt;&lt;/div&gt;","&lt;/div&gt;","&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;"),n.join("")}function s(t){return"&lt;div unselectable='on'&gt;"+S(t.date,t.args.titleFormat)+"&lt;/div&gt;"}function i(t){for(var e,n=["&lt;table height='100%'",Q,"&gt;&lt;tr&gt;&lt;td&gt;","&lt;table style='margin-top: 1.5em'",Q,"&gt;","&lt;tr&gt;&lt;td colspan='3'&gt;&lt;input dyc-btn='year' class='DynarchCalendar-menu-year' size='6' value='",t.date.getFullYear(),"' /&gt;&lt;/td&gt;&lt;/tr&gt;","&lt;tr&gt;&lt;td&gt;&lt;div dyc-type='menubtn' dyc-cls='hover-navBtn,pressed-navBtn' dyc-btn='today'&gt;",_("goToday"),"&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;","&lt;/table&gt;","&lt;p class='DynarchCalendar-menu-sep'&gt;&nbsp;&lt;/p&gt;","&lt;table class='DynarchCalendar-menu-mtable'",Q,"&gt;"],a=_("smn"),s=0,i=n.length;12&gt;s;){for(n[i++]="&lt;tr&gt;",e=4;--e&gt;0;)n[i++]="&lt;td&gt;&lt;div dyc-type='menubtn' dyc-cls='hover-navBtn,pressed-navBtn' dyc-btn='m"+s+"' class='DynarchCalendar-menu-month'&gt;"+a[s++]+"&lt;/div&gt;&lt;/td&gt;"
n[i++]="&lt;/tr&gt;"}return n[i++]="&lt;/table&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",n.join("")}function r(t,e){e.push("&lt;table class='DynarchCalendar-time'"+Q+"&gt;&lt;tr&gt;","&lt;td rowspan='2'&gt;&lt;div dyc-type='time-hour' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-hour'&gt;&lt;/div&gt;&lt;/td&gt;","&lt;td dyc-type='time-hour+' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-up'&gt;&lt;/td&gt;","&lt;td rowspan='2' class='DynarchCalendar-time-sep'&gt;&lt;/td&gt;","&lt;td rowspan='2'&gt;&lt;div dyc-type='time-min' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-minute'&gt;&lt;/div&gt;&lt;/td&gt;","&lt;td dyc-type='time-min+' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-up'&gt;&lt;/td&gt;"),t.args.showTime==12&&e.push("&lt;td rowspan='2' class='DynarchCalendar-time-sep'&gt;&lt;/td&gt;","&lt;td rowspan='2'&gt;&lt;div class='DynarchCalendar-time-am' dyc-type='time-am' dyc-cls='hover-time,pressed-time'&gt;&lt;/div&gt;&lt;/td&gt;"),e.push("&lt;/tr&gt;&lt;tr&gt;","&lt;td dyc-type='time-hour-' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-down'&gt;&lt;/td&gt;","&lt;td dyc-type='time-min-' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-down'&gt;&lt;/td&gt;","&lt;/tr&gt;&lt;/table&gt;")}function o(t){function e(){a.showTime&&(n.push("&lt;td&gt;"),r(t,n),n.push("&lt;/td&gt;"))}var n=[],a=t.args
return n.push("&lt;table",Q," style='width:100%'&gt;&lt;tr&gt;"),a.timePos=="left"&&e(),a.bottomBar&&(n.push("&lt;td&gt;"),n.push("&lt;table",Q,"&gt;&lt;tr&gt;&lt;td&gt;","&lt;div dyc-btn='today' dyc-cls='hover-bottomBar-today,pressed-bottomBar-today' dyc-type='bottomBar-today' ","class='DynarchCalendar-bottomBar-today'&gt;",_("today"),"&lt;/div&gt;","&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;"),n.push("&lt;/td&gt;")),a.timePos=="right"&&e(),n.push("&lt;/tr&gt;&lt;/table&gt;"),n.join("")}function l(t){var e=V("div"),n=t.els={},s={mousedown:O(m,t,!0),mouseup:O(m,t,!1),mouseover:O(D,t,!0),mouseout:O(D,t,!1),keypress:O(w,t)}
return t.args.noScroll||(s[he?"DOMMouseScroll":"mousewheel"]=O(b,t)),le&&(s.dblclick=s.mousedown,s.keydown=s.keypress),e.innerHTML=a(t),W(e.firstChild,function(t){var e=Z[t.className]
e&&(n[e]=t),le&&t.setAttribute("unselectable","on")}),B(n.main,s),B([n.focusLink,n.yearInput],t._focusEvents={focus:O(c,t),blur:O(u,t)}),t.moveTo(t.date,!1),t.setTime(null,!0),n.topCont}function c(){this._bluringTimeout&&clearTimeout(this._bluringTimeout),this.focused=!0,P(this.els.main,"DynarchCalendar-focused"),this.callHooks("onFocus",this)}function h(){this.focused=!1,Y(this.els.main,"DynarchCalendar-focused"),this._menuVisible&&y(this,!1),this.args.cont||this.hide(),this.callHooks("onBlur",this)}function u(){this._bluringTimeout=setTimeout(O(h,this),50)}function d(t){switch(t){case"time-hour+":this.setHours(this.getHours()+1)
break
case"time-hour-":this.setHours(this.getHours()-1)
break
case"time-min+":this.setMinutes(this.getMinutes()+this.args.minuteStep)
break
case"time-min-":this.setMinutes(this.getMinutes()-this.args.minuteStep)
break
default:return}}function f(t,e,n){this._bodyAnim&&this._bodyAnim.stop()
var a
if(0!=e)switch(a=new Date(t.date),a.setDate(1),e){case"-Y":case-2:a.setFullYear(a.getFullYear()-1)
break
case"+Y":case 2:a.setFullYear(a.getFullYear()+1)
break
case"-M":case-1:a.setMonth(a.getMonth()-1)
break
case"+M":case 1:a.setMonth(a.getMonth()+1)}else a=new Date
return t.moveTo(a,!n)}function y(t,e){var n,a
t._menuVisible=e,R(e,t.els.title,"DynarchCalendar-pressed-title"),n=t.els.menu,ce&&(n.style.height=t.els.main.offsetHeight+"px"),t.args.animation?(t._menuAnim&&t._menuAnim.stop(),a=t.els.main.offsetHeight,ce&&(n.style.width=t.els.topBar.offsetWidth+"px"),e&&(n.firstChild.style.marginTop=-a+"px",t.args.opacity&gt;0&&$(n,0),j(n,!0)),t._menuAnim=K({onUpdate:function(s,i){n.firstChild.style.marginTop=i(ae.accel_b(s),-a,0,!e)+"px",t.args.opacity&gt;0&&$(n,i(ae.accel_b(s),0,.85,!e))},onStop:function(){t.args.opacity&gt;0&&$(n,.85),n.firstChild.style.marginTop="",t._menuAnim=null,e||(j(n,!1),t.focused&&t.focus())}})):(j(n,e),t.focused&&t.focus())}function m(e,n){var a,s,i,r,o,l,c,h,u
n=n||window.event,a=g(n),a&&!a.getAttribute("disabled")&&(i=a.getAttribute("dyc-btn"),r=a.getAttribute("dyc-type"),o=a.getAttribute("dyc-date"),l=this.selection,c={mouseover:N,mousemove:N,mouseup:function(){var t=a.getAttribute("dyc-cls")
t&&Y(a,v(t,1)),clearTimeout(s),F(document,c,!0),c=null}},e?(setTimeout(O(this.focus,this),1),h=a.getAttribute("dyc-cls"),h&&P(a,v(h,1)),"menu"==i?this.toggleMenu():a&&/^[+-][MY]$/.test(i)?f(this,i)?(u=O(function(){f(this,i,!0)?s=setTimeout(u,40):(c.mouseup(),f(this,i))},this),s=setTimeout(u,350),B(document,c,!0)):c.mouseup():"year"==i?(this.els.yearInput.focus(),this.els.yearInput.select()):"time-am"==r?B(document,c,!0):/^time/.test(r)?(u=O(function(t){d.call(this,t),s=setTimeout(u,100)},this,r),d.call(this,r),s=setTimeout(u,350),B(document,c,!0)):(o&&l.type&&(l.type==t.SEL_MULTIPLE?n.shiftKey&&this._selRangeStart?l.selectRange(this._selRangeStart,o):(n.ctrlKey||l.isSelected(o)||!this.args.multiCtrl||l.clear(!0),l.set(o,!0),this._selRangeStart=o):(l.set(o),this.moveTo(A(o),2)),a=this._getDateDiv(o),D.call(this,!0,{target:a})),B(document,c,!0)),le&&c&&/dbl/i.test(n.type)&&c.mouseup(),this.args.fixed||!/^(DynarchCalendar-(topBar|bottomBar|weekend|weekNumber|menu(-sep)?))?$/.test(a.className)||this.args.cont||(c.mousemove=O(p,this),this._mouseDiff=z(n,G(this.els.topCont)),B(document,c,!0))):"today"==i?(this._menuVisible||l.type!=t.SEL_SINGLE||l.set(new Date),this.moveTo(new Date,!0),y(this,!1)):/^m([0-9]+)/.test(i)?(o=new Date(this.date),o.setDate(1),o.setMonth(RegExp.$1),o.setFullYear(this._getInputYear()),this.moveTo(o,!0),y(this,!1)):"time-am"==r&&this.setHours(this.getHours()+12),le||N(n))}function p(t){t=t||window.event
var e=this.els.topCont.style,n=z(t,this._mouseDiff)
e.left=n.x+"px",e.top=n.y+"px"}function g(t){for(var e=t.target||t.srcElement,n=e;e&&e.getAttribute&&!e.getAttribute("dyc-type");)e=e.parentNode
return e.getAttribute&&e||n}function v(t,e){return"DynarchCalendar-"+t.split(/,/)[e]}function D(t,e){var n,a,s
e=e||window.event,n=g(e),n&&(a=n.getAttribute("dyc-type"),a&&!n.getAttribute("disabled")&&(t&&this._bodyAnim&&"date"==a||(s=n.getAttribute("dyc-cls"),s=s?v(s,0):"DynarchCalendar-hover-"+a,("date"!=a||this.selection.type)&&R(t,n,s),"date"==a&&(R(t,n.parentNode.parentNode,"DynarchCalendar-hover-week"),this._showTooltip(n.getAttribute("dyc-date"))),/^time-hour/.test(a)&&R(t,this.els.timeHour,"DynarchCalendar-hover-time"),/^time-min/.test(a)&&R(t,this.els.timeMinute,"DynarchCalendar-hover-time"),Y(this._getDateDiv(this._lastHoverDate),"DynarchCalendar-hover-date"),this._lastHoverDate=null))),t||this._showTooltip()}function b(t){var e,n,a,s
if(t=t||window.event,e=g(t))if(n=e.getAttribute("dyc-btn"),a=e.getAttribute("dyc-type"),s=t.wheelDelta?t.wheelDelta/120:-t.detail/3,s=0&gt;s?-1:s&gt;0?1:0,this.args.reverseWheel&&(s=-s),/^(time-(hour|min))/.test(a)){switch(RegExp.$1){case"time-hour":this.setHours(this.getHours()+s)
break
case"time-min":this.setMinutes(this.getMinutes()+this.args.minuteStep*s)}N(t)}else/Y/i.test(n)&&(s*=2),f(this,-s),N(t)}function C(){var t,e,n
this.refresh(),t=this.inputField,e=this.selection,t&&(n=e.print(this.dateFormat),/input|textarea/i.test(t.tagName)?t.value=n:t.innerHTML=n),this.callHooks("onSelect",this,e)}function w(e){var n,a,s,i,r,o,l,c,h,u,d,m,p
if(!this._menuAnim){if(e=e||window.event,n=e.target||e.srcElement,a=n.getAttribute("dyc-btn"),s=e.keyCode,i=e.charCode||s,r=ee[s],"year"==a&&13==s)return o=new Date(this.date),o.setDate(1),o.setFullYear(this._getInputYear()),this.moveTo(o,!0),y(this,!1),N(e)
if(this._menuVisible){if(27==s)return y(this,!1),N(e)}else{if(e.ctrlKey||(r=null),null!=r||e.ctrlKey||(r=ne[s]),36==s&&(r=0),null!=r)return f(this,r),N(e)
if(i=String.fromCharCode(i).toLowerCase(),l=this.els.yearInput,c=this.selection," "==i)return y(this,!0),this.focus(),l.focus(),l.select(),N(e)
if(i&gt;="0"&&"9"&gt;=i)return y(this,!0),this.focus(),l.value=i,l.focus(),N(e)
for(u=_("mn"),d=e.shiftKey?-1:this.date.getMonth(),m=0;++m&lt;12;)if(h=u[(d+m)%12].toLowerCase(),h.indexOf(i)==0)return o=new Date(this.date),o.setDate(1),o.setMonth((d+m)%12),this.moveTo(o,!0),N(e)
if(s&gt;=37&&40&gt;=s){if(o=this._lastHoverDate,o||c.isEmpty()||(o=39&gt;s?c.getFirstDate():c.getLastDate(),(o&lt;this._firstDateVisible||o&gt;this._lastDateVisible)&&(o=null)),o){for(p=o,o=A(o),d=100;d--&gt;0;){switch(s){case 37:o.setDate(o.getDate()-1)
break
case 38:o.setDate(o.getDate()-7)
break
case 39:o.setDate(o.getDate()+1)
break
case 40:o.setDate(o.getDate()+7)}if(!this.isDisabled(o))break}o=L(o),(o&lt;this._firstDateVisible||o&gt;this._lastDateVisible)&&this.moveTo(o)}else o=39&gt;s?this._lastDateVisible:this._firstDateVisible
return Y(this._getDateDiv(p),P(this._getDateDiv(o),"DynarchCalendar-hover-date")),this._lastHoverDate=o,N(e)}if(13==s&&this._lastHoverDate)return c.type==t.SEL_MULTIPLE&&(e.shiftKey||e.ctrlKey)?(e.shiftKey&&this._selRangeStart&&(c.clear(!0),c.selectRange(this._selRangeStart,this._lastHoverDate)),e.ctrlKey&&c.set(this._selRangeStart=this._lastHoverDate,!0)):c.reset(this._selRangeStart=this._lastHoverDate),N(e)
27!=s||this.args.cont||this.hide()}}}function M(t,e){return t.replace(/\$\{([^:\}]+)(:[^\}]+)?\}/g,function(t,n,a){var s,i=e[n]
return a&&(s=a.substr(1).split(/\s*\|\s*/),i=(i&lt;s.length?s[i]:s[s.length-1]).replace(/##?/g,function(t){return t.length==2?"#":i})),i})}function _(t,e){var n=de.__.data[t]
return e&&"string"==typeof n&&(n=M(n,e)),n}function T(t){var e,n
return t=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0),e=t.getDay(),t.setDate(t.getDate()-(e+6)%7+3),n=t.valueOf(),t.setMonth(0),t.setDate(4),Math.round((n-t.valueOf())/6048e5)+1}function x(t){var e,n
return t=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0),e=new Date(t.getFullYear(),0,1,12,0,0),n=t-e,Math.floor(n/864e5)}function L(t){return t instanceof Date?1e4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate():"string"==typeof t?parseInt(t,10):t}function A(t,e,n,a,s){var i,r
return t instanceof Date||(t=parseInt(t,10),i=Math.floor(t/1e4),t%=1e4,r=Math.floor(t/100),t%=100,t=new Date(i,r-1,t,null==e?12:e,null==n?0:n,null==a?0:a,null==s?0:s)),t}function H(t,e,n){var a=t.getFullYear(),s=t.getMonth(),i=t.getDate(),r=e.getFullYear(),o=e.getMonth(),l=e.getDate()
return r&gt;a?-3:a&gt;r?3:o&gt;s?-2:s&gt;o?2:n?0:l&gt;i?-1:i&gt;l?1:0}function S(t,e){var n,a=t.getMonth(),s=t.getDate(),i=t.getFullYear(),r=T(t),o=t.getDay(),l=t.getHours(),c=l&gt;=12,h=c?l-12:l,u=x(t),d=t.getMinutes(),f=t.getSeconds(),y=/%./g
return 0===h&&(h=12),n={"%a":_("sdn")[o],"%A":_("dn")[o],"%b":_("smn")[a],"%B":_("mn")[a],"%C":1+Math.floor(i/100),"%d":10&gt;s?"0"+s:s,"%e":s,"%H":10&gt;l?"0"+l:l,"%I":10&gt;h?"0"+h:h,"%j":10&gt;u?"00"+u:100&gt;u?"0"+u:u,"%k":l,"%l":h,"%m":9&gt;a?"0"+(1+a):1+a,"%o":1+a,"%M":10&gt;d?"0"+d:d,"%n":"\n","%p":c?"PM":"AM","%P":c?"pm":"am","%s":Math.floor(t.getTime()/1e3),"%S":10&gt;f?"0"+f:f,"%t":"	","%U":10&gt;r?"0"+r:r,"%W":10&gt;r?"0"+r:r,"%V":10&gt;r?"0"+r:r,"%u":o+1,"%w":o,"%y":(""+i).substr(2,2),"%Y":i,"%%":"%"},e.replace(y,function(t){return n.hasOwnProperty(t)?n[t]:t})}function k(t){if(t){if("number"==typeof t)return A(t)
if(!(t instanceof Date)){var e=t.split(/-/)
return new Date(parseInt(e[0],10),parseInt(e[1],10)-1,parseInt(e[2],10),12,0,0,0)}}return t}function I(t){function e(e){for(var n=e.length;--n&gt;=0;)if(e[n].toLowerCase().indexOf(t)==0)return n+1}return/\S/.test(t)?(t=t.toLowerCase(),e(_("smn"))||e(_("mn"))):void 0}function E(t,e,n,a){a={}
for(n in e)e.hasOwnProperty(n)&&(a[n]=e[n])
for(n in t)t.hasOwnProperty(n)&&(a[n]=t[n])
return a}function B(t,e,n,a){var s
if(t instanceof Array)for(s=t.length;--s&gt;=0;)B(t[s],e,n,a)
else if("object"==typeof e)for(s in e)e.hasOwnProperty(s)&&B(t,s,e[s],n)
else t.addEventListener?t.addEventListener(e,n,le?!0:!!a):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function F(t,e,n,a){var s
if(t instanceof Array)for(s=t.length;--s&gt;=0;)F(t[s],e,n)
else if("object"==typeof e)for(s in e)e.hasOwnProperty(s)&&F(t,s,e[s],n)
else t.removeEventListener?t.removeEventListener(e,n,le?!0:!!a):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function N(t){return t=t||window.event,le?(t.cancelBubble=!0,t.returnValue=!1):(t.preventDefault(),t.stopPropagation()),!1}function Y(t,e,n){if(t){var a,s=t.className.replace(/^\s+|\s+$/,"").split(/\x20/),i=[]
for(a=s.length;a&gt;0;)s[--a]!=e&&i.push(s[a])
n&&i.push(n),t.className=i.join(" ")}return n}function P(t,e){return Y(t,e,e)}function R(t,e,n){if(e instanceof Array)for(var a=e.length;--a&gt;=0;)R(t,e[a],n)
else Y(e,n,t?n:null)
return t}function V(t,e,n){var a=null
return a=document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",t):document.createElement(t),e&&(a.className=e),n&&n.appendChild(a),a}function U(t,e){null==e&&(e=0)
var n,a,s
try{n=Array.prototype.slice.call(t,e)}catch(i){for(n=Array(t.length-e),a=e,s=0;a&lt;t.length;++a,++s)n[s]=t[a]}return n}function O(t,e){var n=U(arguments,2)
return void 0==e?function(){return t.apply(this,n.concat(U(arguments)))}:function(){return t.apply(e,n.concat(U(arguments)))}}function W(t,e){if(!e(t))for(var n=t.firstChild;n;n=n.nextSibling)n.nodeType==1&&W(n,e)}function K(t,e,n){function a(t,e,n,a){return a?n+t*(e-n):e+t*(n-e)}function s(){e&&i(),n=0,e=setInterval(r,1e3/t.fps)}function i(){e&&(clearInterval(e),e=null),t.onStop(n/t.len,a)}function r(){var e=t.len
t.onUpdate(n/e,a),n==e&&i(),++n}return t=E(t,{fps:50,len:15,onUpdate:se,onStop:se}),le&&(t.len=Math.round(t.len/2)),s(),{start:s,stop:i,update:r,args:t,map:a}}function $(t,e){return""===e?le?t.style.filter="":t.style.opacity="":null!=e?le?t.style.filter="alpha(opacity="+100*e+")":t.style.opacity=e:le?/alpha\(opacity=([0-9.])+\)/.test(t.style.opacity)&&(e=parseFloat(RegExp.$1)/100):e=parseFloat(t.style.opacity),e}function j(t,e){var n=t.style
return null!=e&&(n.display=e?"":"none"),n.display!="none"}function z(t,e){var n=le?t.clientX+document.body.scrollLeft:t.pageX,a=le?t.clientY+document.body.scrollTop:t.pageY
return e&&(n-=e.x,a-=e.y),{x:n,y:a}}function G(t){var e,n,a
if(t.getBoundingClientRect)return e=t.getBoundingClientRect(),{x:e.left-document.documentElement.clientLeft+document.body.scrollLeft,y:e.top-document.documentElement.clientTop+document.body.scrollTop}
n=0,a=0
do n+=t.offsetLeft-t.scrollLeft,a+=t.offsetTop-t.scrollTop
while(t=t.offsetParent)
return{x:n,x:a}}function X(){var t=document.documentElement,e=document.body
return{x:t.scrollLeft||e.scrollLeft,y:t.scrollTop||e.scrollTop,w:t.clientWidth||window.innerWidth||e.clientWidth,h:t.clientHeight||window.innerHeight||e.clientHeight}}function q(t,e,n){for(n=0;n&lt;t.length;++n)e(t[n])}function J(t){return"string"==typeof t&&(t=document.getElementById(t)),t}var Q,Z,te,ee,ne,ae,se,ie=navigator.userAgent,re=/opera/i.test(ie),oe=/Konqueror|Safari|KHTML/i.test(ie),le=/msie/i.test(ie)&&!re&&!/mac_powerpc/i.test(ie),ce=le&&/msie 6/i.test(ie),he=/gecko/i.test(ie)&&!oe&&!re&&!le,ue=t.prototype,de=t.I18N={}
return t.SEL_NONE=0,t.SEL_SINGLE=1,t.SEL_MULTIPLE=2,t.SEL_WEEK=3,t.dateToInt=L,t.intToDate=A,t.printDate=S,t.formatString=M,t.i18n=_,t.LANG=function(t,e,n){de.__=de[t]={name:e,data:n}},t.setup=function(e){return new t(e)},ue.moveTo=function(t,e){var a,s,i,r,o,l,c,h,u,d,f,y,m,p,g,v,D=this
return t=k(t),s=H(t,D.date,!0),i=D.args,r=i.min&&H(t,i.min),o=i.max&&H(t,i.max),i.animation||(e=!1),R(null!=r&&1&gt;=r,[D.els.navPrevMonth,D.els.navPrevYear],"DynarchCalendar-navDisabled"),R(null!=o&&o&gt;=-1,[D.els.navNextMonth,D.els.navNextYear],"DynarchCalendar-navDisabled"),-1&gt;r&&(t=i.min,a=1,s=0),o&gt;1&&(t=i.max,a=2,s=0),D.date=t,D.refresh(!!e),D.callHooks("onChange",D,t,e),!e||0==s&&2==e||(D._bodyAnim&&D._bodyAnim.stop(),l=D.els.body,c=V("div","DynarchCalendar-animBody-"+te[s],l),h=l.firstChild,$(h)||.7,u=a?ae.brakes:0==s?ae.shake:ae.accel_ab2,d=s*s&gt;4,f=d?h.offsetTop:h.offsetLeft,y=c.style,m=d?l.offsetHeight:l.offsetWidth,0&gt;s?m+=f:s&gt;0?m=f-m:(m=Math.round(m/7),2==a&&(m=-m)),a||0==s||(p=c.cloneNode(!0),g=p.style,v=2*m,p.appendChild(h.cloneNode(!0)),g[d?"marginTop":"marginLeft"]=m+"px",l.appendChild(p)),h.style.visibility="hidden",c.innerHTML=n(D),D._bodyAnim=K({onUpdate:function(t,e){var n,i=u(t)
p&&(n=e(i,m,v)+"px"),a?y[d?"marginTop":"marginLeft"]=e(i,m,0)+"px":((d||0==s)&&(y.marginTop=e(0==s?u(t*t):i,0,m)+"px",0!=s&&(g.marginTop=n)),d&&0!=s||(y.marginLeft=e(i,0,m)+"px",0!=s&&(g.marginLeft=n))),D.args.opacity&gt;2&&p&&($(p,1-i),$(c,i))},onStop:function(){l.innerHTML=n(D,t),D._bodyAnim=null}})),D._lastHoverDate=null,r&gt;=-1&&1&gt;=o},ue.isDisabled=function(t){var e=this.args
return e.min&&H(t,e.min)&lt;0||e.max&&H(t,e.max)&gt;0||e.disabled(t)},ue.toggleMenu=function(){y(this,!this._menuVisible)},ue.refresh=function(t){var e=this.els
t||(e.body.innerHTML=n(this)),e.title.innerHTML=s(this),e.yearInput.value=this.date.getFullYear()},ue.redraw=function(){var t=this,n=t.els
t.refresh(),n.dayNames.innerHTML=e(t),n.menu.innerHTML=i(t),n.bottomBar&&(n.bottomBar.innerHTML=o(t)),W(n.topCont,function(e){var a=Z[e.className]
a&&(n[a]=e),e.className=="DynarchCalendar-menu-year"?(B(e,t._focusEvents),n.yearInput=e):le&&e.setAttribute("unselectable","on")}),t.setTime(null,!0)},ue.setLanguage=function(e){var n=t.setLanguage(e)
n&&(this.fdow=n.data.fdow,this.redraw())},t.setLanguage=function(t){var e=de[t]
return e&&(de.__=e),e},ue.focus=function(){try{this.els[this._menuVisible?"yearInput":"focusLink"].focus()}catch(t){}c.call(this)},ue.blur=function(){this.els.focusLink.blur(),this.els.yearInput.blur(),h.call(this)},ue.showAt=function(t,e,n){this._showAnim&&this._showAnim.stop(),n=n&&this.args.animation
var a=this.els.topCont,s=this,i=this.els.body.firstChild,r=i.offsetHeight,o=a.style
o.position="absolute",o.left=t+"px",o.top=e+"px",o.zIndex=1e4,o.display="",n&&(i.style.marginTop=-r+"px",this.args.opacity&gt;1&&$(a,0),this._showAnim=K({onUpdate:function(t,e){i.style.marginTop=-e(ae.accel_b(t),r,0)+"px",s.args.opacity&gt;1&&$(a,t)},onStop:function(){s.args.opacity&gt;1&&$(a,""),s._showAnim=null}}))},ue.hide=function(){this.callHooks("onClose",this)
var t=this.els.topCont,e=this,n=this.els.body.firstChild,a=n.offsetHeight,s=G(t).y
this.args.animation?(this._showAnim&&this._showAnim.stop(),this._showAnim=K({onUpdate:function(i,r){e.args.opacity&gt;1&&$(t,1-i),n.style.marginTop=-r(ae.accel_b(i),0,a)+"px",t.style.top=r(ae.accel_ab(i),s,s-10)+"px"},onStop:function(){t.style.display="none",n.style.marginTop="",e.args.opacity&gt;1&&$(t,""),e._showAnim=null}})):t.style.display="none",this.inputField=null},ue.popup=function(t,e){function n(e){var n={x:l.x,y:l.y}
return e?(/B/.test(e)&&(n.y+=t.offsetHeight),/b/.test(e)&&(n.y+=t.offsetHeight-a.y),/T/.test(e)&&(n.y-=a.y),/l/.test(e)&&(n.x-=a.x-t.offsetWidth),/L/.test(e)&&(n.x-=a.x),/R/.test(e)&&(n.x+=t.offsetWidth),/c/i.test(e)&&(n.x+=(t.offsetWidth-a.x)/2),/m/i.test(e)&&(n.y+=(t.offsetHeight-a.y)/2),n):n}var a,s,i,r,o,l
t=J(t),e||(e=this.args.align),e=e.split(/\x2f/),s=G(t),i=this.els.topCont,r=i.style,o=X(),r.visibility="hidden",r.display="",this.showAt(0,0),document.body.appendChild(i),a={x:i.offsetWidth,y:i.offsetHeight},l=s,l=n(e[0]),l.y&lt;o.y&&(l.y=s.y,l=n(e[1])),l.x+a.x&gt;o.x+o.w&&(l.x=s.x,l=n(e[2])),l.y+a.y&gt;o.y+o.h&&(l.y=s.y,l=n(e[3])),l.x&lt;o.x&&(l.x=s.x,l=n(e[4])),this.showAt(l.x,l.y,!0),r.visibility="",this.focus()},ue.popupForField=function(e,n,a){var s,i,r,o,l=this
n=J(n),e=J(e),l.inputField=n,l.dateFormat=a,l.selection.type==t.SEL_SINGLE&&(s=/input|textarea/i.test(n.tagName)?n.value:n.innerText||n.textContent,s&&(i=/(^|[^%])%[bBmo]/.exec(a),r=/(^|[^%])%[de]/.exec(a),i&&r&&(o=i.index&lt;r.index),s=Calendar.parseDate(s,o),s&&(l.selection.set(s,!1,!0),l.args.showTime&&(l.setHours(s.getHours()),l.setMinutes(s.getMinutes())),l.moveTo(s)))),l.popup(e)},ue.manageFields=function(t,e,n){var a=this
e=J(e),t=J(t),/^button$/i.test(t.tagName)&&t.setAttribute("type","button"),B(t,"click",function(s){return a.popupForField(t,e,n),N(s)})},ue.callHooks=function(t){for(var e=U(arguments,1),n=this.handlers[t],a=0;a&lt;n.length;++a)n[a].apply(this,e)},ue.addEventListener=function(t,e){this.handlers[t].push(e)},ue.removeEventListener=function(t,e){for(var n=this.handlers[t],a=n.length;--a&gt;=0;)n[a]===e&&n.splice(a,1)},ue.getTime=function(){return this.time},ue.setTime=function(t,e){var n,a,s,i,r,o
this.args.showTime&&(t=null!=t?t:this.time,this.time=t,n=this.getHours(),a=this.getMinutes(),s=12&gt;n,this.args.showTime==12&&(0==n&&(n=12),n&gt;12&&(n-=12),this.els.timeAM.innerHTML=_(s?"AM":"PM")),10&gt;n&&(n="0"+n),10&gt;a&&(a="0"+a),this.els.timeHour.innerHTML=n,this.els.timeMinute.innerHTML=a,e||(this.callHooks("onTimeChange",this,t),i=this.inputField,r=this.selection,i&&(o=r.print(this.dateFormat),/input|textarea/i.test(i.tagName)?i.value=o:i.innerHTML=o)))},ue.getHours=function(){return Math.floor(this.time/100)},ue.getMinutes=function(){return this.time%100},ue.setHours=function(t){0&gt;t&&(t+=24),this.setTime(100*(t%24)+this.time%100)},ue.setMinutes=function(t){0&gt;t&&(t+=60),t=Math.floor(t/this.args.minuteStep)*this.args.minuteStep,this.setTime(100*this.getHours()+t%60)},ue._getInputYear=function(){var t=parseInt(this.els.yearInput.value,10)
return isNaN(t)&&(t=this.date.getFullYear()),t},ue._showTooltip=function(t){var e,n="",a=this.els.tooltip
t&&(t=A(t),e=this.args.dateInfo(t),e&&e.tooltip&&(n="&lt;div class='DynarchCalendar-tooltipCont'&gt;"+S(t,e.tooltip)+"&lt;/div&gt;")),a.innerHTML=n},Q=" align='center' cellspacing='0' cellpadding='0'",Z={"DynarchCalendar-topCont":"topCont","DynarchCalendar-focusLink":"focusLink",DynarchCalendar:"main","DynarchCalendar-topBar":"topBar","DynarchCalendar-title":"title","DynarchCalendar-dayNames":"dayNames","DynarchCalendar-body":"body","DynarchCalendar-menu":"menu","DynarchCalendar-menu-year":"yearInput","DynarchCalendar-bottomBar":"bottomBar","DynarchCalendar-tooltip":"tooltip","DynarchCalendar-time-hour":"timeHour","DynarchCalendar-time-minute":"timeMinute","DynarchCalendar-time-am":"timeAM","DynarchCalendar-navBtn DynarchCalendar-prevYear":"navPrevYear","DynarchCalendar-navBtn DynarchCalendar-nextYear":"navNextYear","DynarchCalendar-navBtn DynarchCalendar-prevMonth":"navPrevMonth","DynarchCalendar-navBtn DynarchCalendar-nextMonth":"navNextMonth"},te={"-3":"backYear","-2":"back",0:"now",2:"fwd",3:"fwdYear"},ee={37:-1,38:-2,39:1,40:2},ne={33:-1,34:1},ue._getDateDiv=function(t){var e=null
if(t)try{W(this.els.body,function(n){if(n.getAttribute("dyc-date")==t)throw e=n})}catch(n){}return e},(t.Selection=function(t,e,n,a){this.type=e,this.sel=t instanceof Array?t:[t],this.onChange=O(n,a),this.cal=a}).prototype={get:function(){return this.type==t.SEL_SINGLE?this.sel[0]:this.sel},isEmpty:function(){return this.sel.length==0},set:function(e,n,a){var s=this.type==t.SEL_SINGLE
e instanceof Array?(this.sel=e,this.normalize(),a||this.onChange(this)):(e=L(e),s||!this.isSelected(e)?(s?this.sel=[e]:this.sel.splice(this.findInsertPos(e),0,e),this.normalize(),a||this.onChange(this)):n&&this.unselect(e,a))},reset:function(){this.sel=[],this.set.apply(this,arguments)},countDays:function(){for(var t,e,n,a=0,s=this.sel,i=s.length;--i&gt;=0;)t=s[i],t instanceof Array&&(e=A(t[0]),n=A(t[1]),a+=Math.round(Math.abs(n.getTime()-e.getTime())/864e5)),++a
return a},unselect:function(t,e){var n,a,s,i,r,o,l
for(t=L(t),n=!1,s=this.sel,i=s.length;--i&gt;=0;)a=s[i],a instanceof Array?t&lt;a[0]||t&gt;a[1]||(r=A(t),o=r.getDate(),t==a[0]?(r.setDate(o+1),a[0]=L(r),n=!0):t==a[1]?(r.setDate(o-1),a[1]=L(r),n=!0):(l=new Date(r),l.setDate(o+1),r.setDate(o-1),s.splice(i+1,0,[L(l),a[1]]),a[1]=L(r),n=!0)):t==a&&(s.splice(i,1),n=!0)
n&&(this.normalize(),e||this.onChange(this))},normalize:function(){var t,e,n,a,s,i,r
for(this.sel=this.sel.sort(function(t,e){return t instanceof Array&&(t=t[0]),e instanceof Array&&(e=e[0]),t-e}),n=this.sel,a=n.length;--a&gt;=0;){if(t=n[a],t instanceof Array){if(t[0]&gt;t[1]){n.splice(a,1)
continue}t[0]==t[1]&&(t=n[a]=t[0])}e&&(s=e,i=t instanceof Array?t[1]:t,i=A(i),i.setDate(i.getDate()+1),i=L(i),s&gt;i||(r=n[a+1],t instanceof Array&&r instanceof Array?(t[1]=r[1],n.splice(a+1,1)):t instanceof Array?(t[1]=e,n.splice(a+1,1)):r instanceof Array?(r[0]=t,n.splice(a,1)):(n[a]=[t,r],n.splice(a+1,1)))),e=t instanceof Array?t[0]:t}},findInsertPos:function(t){for(var e,n=this.sel,a=n.length;--a&gt;=0&&(e=n[a],e instanceof Array&&(e=e[0]),t&lt;e););return a+1},clear:function(t){this.sel=[],t||this.onChange(this)},selectRange:function(e,n){var a,s
if(e=L(e),n=L(n),e&gt;n&&(a=e,e=n,n=a),s=this.cal.args.checkRange,!s)return this._do_selectRange(e,n)
try{q(new t.Selection([[e,n]],t.SEL_MULTIPLE,se).getDates(),O(function(t){if(this.isDisabled(t))throw s instanceof Function&&s(t,this),"OUT"},this.cal)),this._do_selectRange(e,n)}catch(i){}},_do_selectRange:function(t,e){this.sel.push([t,e]),this.normalize(),this.onChange(this)},isSelected:function(t){for(var e,n=this.sel.length;--n&gt;=0;)if(e=this.sel[n],e instanceof Array&&t&gt;=e[0]&&t&lt;=e[1]||t==e)return!0
return!1},getFirstDate:function(){var t=this.sel[0]
return t&&t instanceof Array&&(t=t[0]),t},getLastDate:function(){if(this.sel.length&gt;0){var t=this.sel[this.sel.length-1]
return t&&t instanceof Array&&(t=t[1]),t}},print:function(t,e){var n,a=[],s=0,i=this.cal.getHours(),r=this.cal.getMinutes()
for(e||(e=" -&gt; ");s&lt;this.sel.length;)n=this.sel[s++],n instanceof Array?a.push(S(A(n[0],i,r),t)+e+S(A(n[1],i,r),t)):a.push(S(A(n,i,r),t))
return a},getDates:function(t){for(var e,n,a=[],s=0;s&lt;this.sel.length;){if(n=this.sel[s++],n instanceof Array)for(e=A(n[0]),n=n[1];L(e)&lt;n;)a.push(t?S(e,t):new Date(e)),e.setDate(e.getDate()+1)
else e=A(n)
a.push(t?S(e,t):e)}return a}},t.isUnicodeLetter=function(t){return t.toUpperCase()!=t.toLowerCase()},t.parseDate=function(e,n,a){var s,i,r,o,l,c,h,u,d,f,y
if(!/\S/.test(e))return""
for(e=e.replace(/^\s+/,"").replace(/\s+$/,""),a=a||new Date,s=null,i=null,r=null,o=null,l=null,c=null,h=e.match(/([0-9]{1,2}):([0-9]{1,2})(:[0-9]{1,2})?\s*(am|pm)?/i),h&&(o=parseInt(h[1],10),l=parseInt(h[2],10),c=h[3]?parseInt(h[3].substr(1),10):0,e=e.substring(0,h.index)+e.substr(h.index+h[0].length),h[4]&&(h[4].toLowerCase()=="pm"&&12&gt;o?o+=12:h[4].toLowerCase()!="am"||12&gt;o||(o-=12))),u=function(){function n(){return e.charAt(l++)}function a(){return e.charAt(l)}function s(t){for(;a()&&h(a());)t+=n()
return t}function i(){for(var t="";a()&&/[0-9]/.test(a());)t+=n()
return h(a())?s(t):parseInt(t,10)}function r(t){c.push(t)}for(var o,l=0,c=[],h=t.isUnicodeLetter;l&lt;e.length;)o=a(),h(o)?r(s("")):/[0-9]/.test(o)?r(i()):n()
return c}(),d=[],f=0;f&lt;u.length;++f)y=u[f],/^[0-9]{4}$/.test(y)?(s=parseInt(y,10),null==i&&null==r&&null==n&&(n=!0)):/^[0-9]{1,2}$/.test(y)?(y=parseInt(y,10),60&gt;y?0&gt;y||y&gt;12?1&gt;y||y&gt;31||(r=y):d.push(y):s=y):null==i&&(i=I(y))
return d.length&lt;2?d.length==1&&(null==r?r=d.shift():null==i&&(i=d.shift())):n?(null==i&&(i=d.shift()),null==r&&(r=d.shift())):(null==r&&(r=d.shift()),null==i&&(i=d.shift())),null==s&&(s=d.length&gt;0?d.shift():a.getFullYear()),30&gt;s?s+=2e3:99&gt;s&&(s+=1900),null==i&&(i=a.getMonth()+1),null!=s&&null!=i&&null!=r?new Date(s,i-1,r,o,l,c):null},ae={elastic_b:function(t){return 1-Math.cos(5.5*-t*Math.PI)/Math.pow(2,7*t)},magnetic:function(t){return 1-Math.cos(10.5*t*t*t*Math.PI)/Math.exp(4*t)},accel_b:function(t){return t=1-t,1-t*t*t*t},accel_a:function(t){return t*t*t},accel_ab:function(t){return t=1-t,1-Math.sin(t*t*Math.PI/2)},accel_ab2:function(t){return(t/=.5)&lt;1?.5*t*t:-0.5*(--t*(t-2)-1)},brakes:function(t){return t=1-t,1-Math.sin(t*t*Math.PI)},shake:function(t){return.5&gt;t?-Math.cos(11*t*Math.PI)*t*t:(t=1-t,Math.cos(11*t*Math.PI)*t*t)}},se=Function(),t}()
&lt;/script&gt;


&lt;script type="text/javascript"&gt;
Calendar.LANG("cn", "中文", {
fdow: 1,                // first day of week for this locale; 0 = Sunday, 1 = Monday, etc.
goToday: "今天",
today: "今天",         // appears in bottom bar
wk: "周",
weekend: "0,6",         // 0 = Sunday, 1 = Monday, etc.
AM: "AM",
PM: "PM",
mn : [ "一月",
	   "二月",
	   "三月",
	   "四月",
	   "五月",
	   "六月",
	   "七月",
	   "八月",
	   "九月",
	   "十月",
	   "十一月",
	   "十二月"],

smn : [ "一月",
	  "二月",
	  "三月",
	  "四月",
	  "五月",
	  "六月",
	  "七月",
	  "八月",
	  "九月",
	  "十月",
	  "十一月",
	  "十二月"],
dn : [ "日",
	   "一",
	   "二",
	   "三",
	   "四",
	   "五",
	   "六",
	   "日" ],

sdn : [ "日",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"日" ]
});
&lt;/script&gt;


&lt;style&gt;
/* CSS */
.DynarchCalendar {
  border: 1px solid #aaa;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  background: #e8e8e8;
  font: 11px "lucida grande",tahoma,verdana,sans-serif;
  line-height: 14px;
  position: relative;
  cursor: default;
}

.DynarchCalendar table {
  border-collapse: collapse;
  font: 11px "lucida grande",tahoma,verdana,sans-serif;
  line-height: 14px;
}

.DynarchCalendar-topBar {
  border-bottom: 1px solid #aaa;
  background: #ddd;
  padding: 5px 0 0 0;
}

table.DynarchCalendar-titleCont {
  font-size: 130%; font-weight: bold;
  color: #444;
  text-align: center;
  z-index: 9;
  position: relative;
  margin-top: -6px;
}

.DynarchCalendar-title div {
  padding: 5px 17px;
  text-shadow: 1px 1px 1px #777;
}
.DynarchCalendar-hover-title div {
  background-color: #fff;
  border: 1px solid #000;
  padding: 4px 16px;
  background-image: url("img/drop-down.gif");
  background-repeat: no-repeat;
  background-position: 100% 50%;
}
.DynarchCalendar-pressed-title div {
  border: 1px solid #000;
  padding: 4px 16px;
  background-color: #777;
  color: #fff;
  background-image: url("img/drop-up.gif");
  background-repeat: no-repeat;
  background-position: 100% 50%;
}






.DynarchCalendar-bottomBar {
  border-top: 1px solid #aaa;
  background: #ddd;
  padding: 2px;
  position: relative;
  text-align: center;
}

.DynarchCalendar-bottomBar-today {
  padding: 2px 15px;
}

.DynarchCalendar-hover-bottomBar-today {
  border: 1px solid #000;
  background-color: #fff;
  padding: 1px 14px;
}
.DynarchCalendar-pressed-bottomBar-today {
  border: 1px solid #000;
  background-color: #777;
  color: #fff;
  padding: 1px 14px;
}

.DynarchCalendar-body {
  position: relative;
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
}

.DynarchCalendar-first-col { padding-left: 5px; }
.DynarchCalendar-last-col { padding-right: 5px; }

.DynarchCalendar-animBody-backYear {
  position: absolute;
  top: -100%;
  left: 0;
}
.DynarchCalendar-animBody-back {
  position: absolute;
  top: 5px;
  left: -100%;
}
.DynarchCalendar-animBody-fwd {
  position: absolute;
  top: 5px;
  left: 100%;
}
.DynarchCalendar-animBody-now {
  position: absolute;
  top: 5px;
  left: 0;
}
.DynarchCalendar-animBody-fwdYear {
  position: absolute;
  top: 100%;
  left: 0;
}

.DynarchCalendar-dayNames {
  padding-left: 5px;
  padding-right: 5px;
}

.DynarchCalendar-dayNames div { font-weight: bold; color: #444; text-shadow: 1px 1px 1px #777; }

.DynarchCalendar-navBtn {
  position: absolute;
  top: 5px;
  z-index: 10;
}

.DynarchCalendar-navBtn div {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 15px;
  width: 16px;
  padding: 1px;
}
.DynarchCalendar-hover-navBtn div {
  border: 1px solid #000;
  padding: 0;
  background-color: #fff;
}
.DynarchCalendar-navDisabled {
  opacity: 0.3;
  filter: alpha(opacity=30);
}
.DynarchCalendar-pressed-navBtn div {
  border: 1px solid #000;
  padding: 0;
  background-color: #777;
  color: #fff;
}

.DynarchCalendar-prevMonth {
  left: 25px;
}

.DynarchCalendar-nextMonth {
  left: 100%;
  margin-left: -43px;
}

.DynarchCalendar-prevYear {
  left: 5px;
}

.DynarchCalendar-nextYear {
  left: 100%;
  margin-left: -23px;
}

.DynarchCalendar-prevMonth div {
  background-image: url("img/nav-left.gif");
}

.DynarchCalendar-nextMonth div {
  background-image: url("img/nav-right.gif");
}

.DynarchCalendar-prevYear div {
  background-image: url("img/nav-left-x2.gif");
}

.DynarchCalendar-nextYear div {
  background-image: url("img/nav-right-x2.gif");
}

.DynarchCalendar-menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  overflow: hidden;
  opacity: 0.85;
  filter: alpha(opacity=85);
}

.DynarchCalendar-menu table td div {
  text-align: center;
  font-weight: bold;
  padding: 3px 5px;
}
.DynarchCalendar-menu table td div.DynarchCalendar-menu-month {
  width: 4em;
  text-align: center;
}
.DynarchCalendar-menu table td div.DynarchCalendar-hover-navBtn {
  border: 1px solid #000;
  padding: 2px 4px;
  background-color: #fff;
  color: #000;
}
.DynarchCalendar-menu table td div.DynarchCalendar-pressed-navBtn {
  border: 1px solid #000;
  padding: 2px 4px;
  background-color: #777;
  color: #fff !important;
}

.DynarchCalendar-menu-year {
  text-align: center;
  font: 16px "lucida grande",tahoma,verdana,sans-serif;
  font-weight: bold;
}

.DynarchCalendar-menu-sep {
  height: 1px; font-size: 1px; line-height: 1px;
  overflow: hidden;
  border-top: 1px solid #888;
  background: #fff;
  margin-top: 4px; margin-bottom: 3px;
}

.DynarchCalendar-time td { font-weight: bold; font-size: 120%; }
.DynarchCalendar-time-hour, .DynarchCalendar-time-minute { padding: 1px 3px; }
.DynarchCalendar-time-down { background: url("img/time-down.png") no-repeat 50% 50%; width: 11px; height: 8px; opacity: 0.5; }
.DynarchCalendar-time-up { background: url("img/time-up.png") no-repeat 50% 50%; width: 11px; height: 8px; opacity: 0.5; }
.DynarchCalendar-time-sep { padding: 0 2px; }
.DynarchCalendar-hover-time { background-color: #444; color: #fff; opacity: 1; }
.DynarchCalendar-pressed-time { background-color: #000; color: #fff; opacity: 1; }
.DynarchCalendar-time-am { padding: 1px; width: 2.5em; text-align: center; }

/* body */

.DynarchCalendar-hover-week { background-color: #ddd; }

.DynarchCalendar-dayNames div, .DynarchCalendar-day, .DynarchCalendar-weekNumber {
  width: 1.7em;
  padding: 3px 4px;
  text-align: center;
}
.DynarchCalendar-weekNumber {
  border-right: 1px solid #aaa;
  margin-right: 4px;
  width: 2em !important;
  padding-right: 8px !important;
}

.DynarchCalendar-day {
  text-align: right; color: #222;
}
.DynarchCalendar-day-othermonth { color: #888; }
.DynarchCalendar-weekend { color: #c22; }
.DynarchCalendar-day-today { color: #00f; font-weight: bold; }

.DynarchCalendar-day-disabled {
  opacity: 0.5;
  text-shadow: 2px 1px 1px #fff;
}

.DynarchCalendar-hover-date {
  padding: 2px 3px;
  background-color: #eef;
  border: 1px solid #88c;
  margin: 0 !important;
  color: #000;
}

.DynarchCalendar-day-othermonth.DynarchCalendar-hover-date { border-color: #aaa; color: #888; }

.DynarchCalendar-dayNames .DynarchCalendar-weekend { color: #c22; }
.DynarchCalendar-day-othermonth.DynarchCalendar-weekend { color: #d88; }

.DynarchCalendar-day-selected {
  padding: 2px 3px;
  margin: 1px;
  background-color: #aaa;
  color: #000 !important;
}
.DynarchCalendar-day-today.DynarchCalendar-day-selected { background-color: #999; }

/* focus */

.DynarchCalendar-focusLink {
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
}

.DynarchCalendar-focused {
  border-color: #000;
}

.DynarchCalendar-focused .DynarchCalendar-topBar, .DynarchCalendar-focused .DynarchCalendar-bottomBar {
  background-color: #ccc;
  border-color: #336;
}

.DynarchCalendar-focused .DynarchCalendar-hover-week {
  background-color: #ccc;
}

.DynarchCalendar-tooltip {
  position: absolute;
  top: 100%;
  width: 100%;
}

.DynarchCalendar-tooltipCont {
  margin: 0 5px 0 5px;
  border: 1px solid #aaa;
  border-top: 0;
  padding: 3px 6px;
  background: #ddd;
}

.DynarchCalendar-focused .DynarchCalendar-tooltipCont {
  background: #ccc;
  border-color: #000;
}

@media print {
  .DynarchCalendar-day-selected {
    padding: 2px 3px;
    border: 1px solid #000;
    margin: 0 !important;
  }
}
&lt;/style&gt;




&lt;style&gt;
/* This is for Gecko-based browsers */
.DynarchCalendar {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.DynarchCalendar-title, .DynarchCalendar-title div {
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}

.DynarchCalendar-topBar {
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px;
  border-radius: 4px 4px 0 0;
}

.DynarchCalendar-bottomBar {
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}

.DynarchCalendar-bottomBar-today {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.DynarchCalendar-navBtn, .DynarchCalendar-navBtn div {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.DynarchCalendar-menu {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.DynarchCalendar-menu table td div {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.DynarchCalendar-weekNumber {
  -moz-border-radius: 4px 0 0 4px;
  -webkit-border-radius: 4px 0 0 4px;
  border-radius: 4px 0 0 4px;
}

.DynarchCalendar-day {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.DynarchCalendar-day-disabled {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}

.DynarchCalendar-tooltipCont {
  -moz-border-radius: 0 0 5px 5px;
  -webkit-border-radius: 5px;
}

.DynarchCalendar-time-hour, .DynarchCalendar-time-minute {
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px;
}

.DynarchCalendar-time-am {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
&lt;/style&gt;



&lt;style&gt;
/*
* http://www.feifan.xyz/
*/

/*日历控件：深蓝色*/
.DynarchCalendar-topCont {
    border: 1px solid #73b0e4 !important;
}
.DynarchCalendar, .DynarchCalendar-focused {
	border-color: #fff !important;
}
.DynarchCalendar {
    background-color: #ecf5ff !important;
	-moz-border-radius: 0 !important;
    -webkit-border-radius: 0 !important;
    border-radius: 0 !important;
}
.DynarchCalendar-topBar, .DynarchCalendar-bottomBar, .DynarchCalendar-focused .DynarchCalendar-topBar, .DynarchCalendar-focused .DynarchCalendar-bottomBar {
	background-color: #73b0e4 !important;
}
.DynarchCalendar-focused .DynarchCalendar-hover-week {
	background-color: #d2e9ff !important;
}
.DynarchCalendar-day-selected {
    background-color: #73b0e4 !important;
}
.DynarchCalendar-menu-year  {
    font-weight: normal !important;
}
.DynarchCalendar-title div {
    text-shadow: none !important;
}
.DynarchCalendar-pressed-title div {
	background-color: #003d79 !important;
}
.DynarchCalendar-dayNames div {
    text-shadow: none !important;
}
.DynarchCalendar-menu {
    background-color: #ddeeff !important;
}
.DynarchCalendar-menu table td div {
    font-weight: normal !important;
}
.DynarchCalendar-time td {
	font-weight: normal !important;
}
.DynarchCalendar-hover-bottomBar-today {
	border: 1px solid #003d79 !important;
}
.DynarchCalendar-pressed-bottomBar-today {
	background-color: #003d79 !important;
}
.DynarchCalendar-day-today {
    color: #003d79 !important;
}
&lt;/style&gt;




&lt;p&gt;JSCal2是一个日历控件，这里为他新增4个样式！&lt;/p&gt;
&lt;p&gt;问题反馈：coderui@qq.com&lt;/p&gt;

&lt;span&gt;新样式：&lt;/span&gt;&lt;br /&gt;
&lt;input size="20" id="f_date1" /&gt;&lt;button id="f_btn1"&gt;深蓝色&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date2" /&gt;&lt;button id="f_btn2"&gt;浅蓝色&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date3" /&gt;&lt;button id="f_btn3"&gt;灰色&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date4" /&gt;&lt;button id="f_btn4"&gt;绿色&lt;/button&gt;&lt;br /&gt;
&lt;br /&gt;

&lt;span&gt;原样式：&lt;/span&gt;&lt;br /&gt;
&lt;input size="20" id="f_date11" /&gt;&lt;button id="f_btn11"&gt;Win2K&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date12" /&gt;&lt;button id="f_btn12"&gt;Steel&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date13" /&gt;&lt;button id="f_btn13"&gt;Gold&lt;/button&gt;&lt;br /&gt;
&lt;input size="20" id="f_date14" /&gt;&lt;button id="f_btn14"&gt;Matrix&lt;/button&gt;&lt;br /&gt;

&lt;script type="text/javascript"&gt;
	var oLink = document.getElementById('css');
    
    var cal1 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/blue/dark_blue.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
	cal1.manageFields("f_btn1", "f_date1", "%Y-%m-%d");
    
    var cal2 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/blue/light_blue.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal2.manageFields("f_btn2", "f_date2", "%Y-%m-%d");
    
    var cal3 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/gray/gray.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal3.manageFields("f_btn3", "f_date3", "%Y-%m-%d");
    
    var cal4 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/green/green.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal4.manageFields("f_btn4", "f_date4", "%Y-%m-%d");
    
    var cal11 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/win2k/win2k.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
	cal11.manageFields("f_btn11", "f_date11", "%Y-%m-%d");
    
    var cal12 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/steel/steel.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal12.manageFields("f_btn12", "f_date12", "%Y-%m-%d");
    
    var cal13 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/gold/gold.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal13.manageFields("f_btn13", "f_date13", "%Y-%m-%d");
    
    var cal14 = Calendar.setup({
		onFocus: function() {
            oLink.href = 'css/matrix/matrix.css';
		},
        onSelect: function() {
            this.hide();
		},
		showTime: false,
		weekNumbers: true,
		min: '2018-01-01'
	});
    cal14.manageFields("f_btn14", "f_date14", "%Y-%m-%d");
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
`)

