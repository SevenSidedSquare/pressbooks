!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}({13:function(e,t,n){e.exports=n("EO+/")},"EO+/":function(e,t,n){"use strict";function a(e){m.blockUI.defaults.applyPlatformOpacityRules=!1;var t=m('[role="alert"]'),n=void 0;if("book"===e)n=PB_OrganizeToken.updating.book;else{var a=e.post_type.replace("-","");n=PB_OrganizeToken.updating[a]}t.children("p").text(n),t.addClass("loading-content").removeClass("visually-hidden"),m.blockUI({message:m(t),baseZ:1e5})}function r(e,t){var n=m('[role="alert"]'),a=void 0;if("book"===e)a=PB_OrganizeToken[t].book;else{var r=e.post_type.replace("-","");a=PB_OrganizeToken[t][r]}m.unblockUI({onUnblock:function(){n.removeClass("loading-content").addClass("visually-hidden"),n.children("p").text(a)}})}function i(e,t){return"prev"===t?m(e).prev("[id^=part]"):"next"===t?m(e).next("[id^=part]"):void 0}function o(e){return{id:(e=m(e).attr("id").split("_"))[e.length-1],post_type:e[0]}}function l(e){var t=[];return e.children("tbody").children("tr").each(function(e,n){var a=o(m(n));t.push(a.id)}),t}function s(e){e.children("tbody").children("tr").each(function(t,n){var a="",r='<button class="move-up">Move Up</button>',i='<button class="move-down">Move Down</button>';m(n).is("tr:only-of-type")?e.is("[id^=part]")&&e.prev("[id^=part]").length&&e.next("[id^=part]").length?a=" | "+r+" | "+i:e.is("[id^=part]")&&e.next("[id^=part]").length?a=" | "+i:e.is("[id^=part]")&&e.prev("[id^=part]").length&&(a=" | "+r):a=m(n).is("tr:first-of-type")?e.is("[id^=part]")&&e.prev("[id^=part]").length?" | "+r+" | "+i:" | "+i:m(n).is("tr:last-of-type")?e.is("[id^=part]")&&e.next("[id^=part]").length?" | "+r+" | "+i:" | "+r:" | "+r+" | "+i,m(n).children(".has-row-actions").children(".row-title").children(".row-actions").children(".reorder").html(a)})}function u(e){var t=o(e);m.ajax({url:ajaxurl,type:"POST",data:{action:"pb_reorder",id:t.id,old_order:m("#"+b.organize.oldParent).sortable("serialize"),new_order:m("#"+b.organize.newParent).sortable("serialize"),old_parent:b.organize.oldParent.replace(/^part_([0-9]+)$/i,"$1"),new_parent:b.organize.newParent.replace(/^part_([0-9]+)$/i,"$1"),_ajax_nonce:PB_OrganizeToken.reorderNonce},beforeSend:function(){a(t),b.organize.oldParent!==b.organize.newParent&&s(m("#"+b.organize.oldParent)),s(m("#"+b.organize.newParent))},success:function(){r(t,"success")},error:function(){r(t,"failure")}})}function c(e,t,n,i){var o={action:"pb_update_post_visibility",post_ids:e,_ajax_nonce:PB_OrganizeToken.postVisibilityNonce};m.ajax({url:ajaxurl,type:"POST",data:Object.assign(o,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,i)),beforeSend:function(){a({post_type:t})},success:function(e){r({post_type:t},"success"),function(){var e={action:"pb_update_word_count_for_export",_ajax_nonce:PB_OrganizeToken.wordCountNonce};m.post(ajaxurl,e,function(e){var t=parseInt(m("#wc-selected-for-export").text(),10);new f.a("wc-selected-for-export",t,e,0,2.5,{separator:""}).start()})}()},error:function(){r({post_type:t},"failure")}})}function p(e,t,n){m.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_post_title_visibility",post_ids:e,show_title:n,_ajax_nonce:PB_OrganizeToken.showTitleNonce},beforeSend:function(){a({post_type:t})},success:function(e){r({post_type:t},"success")},error:function(){r({post_type:t},"failure")}})}Object.defineProperty(t,"__esModule",{value:!0});var d=n("EbL4"),f=n.n(d),m=window.jQuery,b={organize:{bulkToggle:[],oldParent:null,newParent:null,oldOrder:null,newOrder:null,sortableOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(e,t){b.organize.oldParent=m(t.item).parents("table").attr("id")},stop:function(e,t){b.organize.newParent=m(t.item).parents("table").attr("id"),u(m(t.item))}}}};m(document).ready(function(){m(".allow-bulk-operations #front-matter").sortable(b.organize.sortableOptions).disableSelection(),m(".allow-bulk-operations table#back-matter").sortable(b.organize.sortableOptions).disableSelection(),m(".allow-bulk-operations table.chapters").sortable(Object.assign(b.organize.sortableOptions,{connectWith:".chapters"})).disableSelection(),m("input[name=blog_public]").change(function(e){var t=m(".publicize-alert"),n=m(".publicize-alert > span"),i=void 0;i=1===parseInt(e.currentTarget.value,10)?1:0,m.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_global_privacy_options",blog_public:i,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){a("book")},success:function(){0===i?(t.removeClass("public").addClass("private"),n.text(PB_OrganizeToken.bookPrivate)):1===i&&(t.removeClass("private").addClass("public"),n.text(PB_OrganizeToken.bookPublic)),r("book","success")},error:function(){r("book","failure")}})}),m(".web_visibility, .export_visibility").change(function(){var e=o(m(this).parents("tr")),t=void 0,n=0;m(this).is(":checked")&&(n=1),m(this).is('[id^="export_visibility"]')?t="export":m(this).is('[id^="web_visibility"]')&&(t="web"),c(e.id,e.post_type,t,n)}),m(".show_title").change(function(e){var t=o(m(e.target).parents("tr")),n="";m(e.currentTarget).is(":checked")&&(n="on"),p(t.id,t.post_type,n)}),m(document).on("click",".move-up",function(e){var t=m(e.target).parents("tr"),n=m(e.target).parents("table");if(b.organize.oldParent=n.attr("id"),t.is("tr:first-of-type")&&n.is("[id^=part]")&&n.prev("[id^=part]").length){var a=i(n,"prev");b.organize.newParent=a.attr("id"),a.append(t),u(t)}else b.organize.newParent=n.attr("id"),t.prev().before(t),u(t)}),m(document).on("click",".move-down",function(e){var t=m(e.target).parents("tr"),n=m(e.target).parents("table");if(b.organize.oldParent=n.attr("id"),t.is("tr:last-of-type")&&n.is("[id^=part]")&&n.next("[id^=part]").length){var a=i(n,"next");b.organize.newParent=a.attr("id"),a.prepend(t),u(t)}else b.organize.newParent=n.attr("id"),t.next().after(t),u(t)}),m('.allow-bulk-operations table thead th[id$="show_title"]').on("click",function(e){var t=m(e.target).attr("id");t=t.replace("-","");var n=m(e.target).parents("table"),a=n.attr("id").split("_")[0];"part"===a&&(a="chapter");var r=l(n);b.organize.bulkToggle[t]?(n.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!1),b.organize.bulkToggle[t]=!1,p(r.join(),a,"")):(n.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!0),b.organize.bulkToggle[t]=!0,p(r.join(),a,"on"))}),m('.allow-bulk-operations table thead th[id$="visibility"]').on("click",function(e){var t=m(e.target).attr("id"),n=(t=t.replace("-","")).split("_");n=n[n.length-2];var a=m(e.target).parents("table"),r=a.attr("id").split("_")[0];"part"===r&&(r="chapter");var i=l(a);b.organize.bulkToggle[t]?(a.find("tr td.column-"+n+" input[type=checkbox]").prop("checked",!1),b.organize.bulkToggle[t]=!1,c(i.join(),r,n,0)):(a.find("tr td.column-"+n+' input[type="checkbox"]').prop("checked",!0),b.organize.bulkToggle[t]=!0,c(i.join(),r,n,1))}),m(window).on("beforeunload",function(){if(m.active>0)return"Changes you made may not be saved..."})})},EbL4:function(e,t,n){var a,r;!function(i,o){void 0===(r="function"==typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r)}(0,function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,s=e<0;if(e=Math.abs(e).toFixed(l.decimals),e+="",t=e.split("."),n=t[0],a=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(r=l.options.separator+r),r=n[o-i-1]+r;n=r}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return l.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return l.options.numerals[+e]})),(s?"-":"")+l.options.prefix+n+a+l.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var s in l.options)i.hasOwnProperty(s)&&null!==i[s]&&(l.options[s]=i[s]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var u=0,c=["webkit","moz","ms","o"],p=0;p<c.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[c[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[p]+"CancelAnimationFrame"]||window[c[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-u)),r=window.setTimeout(function(){e(n+a)},a);return u=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!(!l.initialized&&(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),o(l.startVal)&&o(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(l.error="[CountUp] target is null or undefined",1)))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(e=Number(e),!o(e))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})}});