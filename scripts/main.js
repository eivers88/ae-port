!function(){function e(c){var d=(new Date).getTime();if(d-c>=t){o=a.currentTime;var l=1/t;!n&&i+l>o&&!a.paused&&(a.dispatchEvent(s),n=!0),n&&o>i+l&&!a.paused&&(a.dispatchEvent(r),n=!1),i=o,window.requestAnimationFrame(e.bind(null,d))}else window.requestAnimationFrame(e.bind(null,c))}var t=50,i=0,o=0,n=!1,a=document.getElementById("video-player"),s=document.createEvent("Event");s.initEvent("IsBuffering",!0,!0);var r=document.createEvent("Event");r.initEvent("NoBuffering",!0,!0),e((new Date).getTime())}(),$(function(){"use strict";function e(){var e=new TimelineLite;e.to(this,0,{scale:.9}),e.to(this,.75,{scale:1,ease:Elastic.easeOut.config(1,.4)})}function t(e){C=e;var t=new TimelineLite;o[e]&&(n.hasClass("is-playing")?(g=o[e].height/500*100,t.to(h,0,{y:50,opacity:0}),t.to(u,0,{y:50,opacity:0}),t.call(function(){h.html(o[e].title),u.html(o[e].desc),T=!0,d[0].pause()}),t.to(l,.3,{opacity:1}),t.to(p,.3,{opacity:1},"-=0.3"),t.call(function(){c.attr("src","videos/"+o[e].src),d[0].load()}),t.to(r,.3,{padding:g.toPrecision(4)+"% 0 0 0"}),(window.innerWidth<768||window.innerHeight<693)&&t.to(window,1,{scrollTo:{y:n.offset().top},ease:Power2.easeOut}),t.to(h,.8,{y:0,opacity:1,ease:Power2.easeOut}),t.to(u,.8,{y:0,opacity:1,ease:Power2.easeOut},"-=0.6"),t.play()):(g=o[e].height/500*100,t.to(h,.2,{opacity:0,scale:.9}),t.to(u,.2,{opacity:0,scale:.9},"-=0.2"),t.to(h,0,{y:50,scale:1}),t.to(u,0,{y:50,scale:1}),t.call(function(){h.html(o[e].title),u.html(o[e].desc),c.attr("src","videos/"+o[e].src),d[0].load()}),t.to(r,.3,{padding:g.toPrecision(4)+"% 0 0 0"}),(window.innerWidth<768||window.innerHeight<693)&&t.to(window,1,{scrollTo:{y:n.offset().top},ease:Power2.easeOut}),t.to(h,.8,{y:0,opacity:1,ease:Power2.easeOut}),t.to(u,.8,{y:0,opacity:1,ease:Power2.easeOut},"-=0.6"),t.play()))}function i(e,t,i){var o;return function(){var n=this,a=arguments,s=function(){o=null,i||e.apply(n,a)},r=i&&!o;clearTimeout(o),o=setTimeout(s,t),r&&e.apply(n,a)}}var o={MyLittlestPetShop:{height:316,src:"lps-cap-1.mp4",title:"My Littlest Pet Shop",desc:"My Littlest Pet Shop is an HTML5 platformer where you jump around four different levels in search of your friends. I developed this project using the 2D game framework Phaser."},TransformersComicCreator:{height:338,src:"tf-cap-1.mp4",title:"Transformers Comic Creator",desc:"The Transformers comic creator enables kids to create their own original Transformers comic in which they can either download or print. I developed this experience using the HTML5 2D rendering engine pixi.js."},GenetecPresentation:{height:282,src:"genetec-cap-1.mp4",title:"Genetec Presentation",desc:"This Genetec HTML5 presentation was developed for an 80 inch touch screen using EaselJS. The presentation portrays the different services offered by Genetec through sprite sheet animations tied to user interaction, video, and interactive info panels."},ProformConstruction:{height:668,src:"pf-cap-1.mp4",title:"Proform Construction",desc:"Proform Construction's website was designed and developed to emulate the feel of an interactive magazine. The site uses GreenSock-JS for high performance animations."},EntertheStudio:{height:376,src:"ets-cap-1.mp4",title:"Enter the Studio",desc:"ETS needed a new site to bring them out of the flash era. In order to maintain their creativity through high performance animations, I developed the site using CSS3 transform transitions to take advantage of GPU hardware acceleration."},WindowsDemo:{height:314,src:"ms-cap-4.mp4",title:"Windows 10 Interactive Demo",desc:"Prior to the release of Windows 10, Microsoft needed an interactive demo of their operating system for a presentation. I developed an indistinguishable HTML5 demo using CSS3 animations to mimic the UI transitions and functionality of Windows 10."}},n=$("#project"),a=$("header"),s=a.find(".header-content"),r=n.find(".spacer"),c=n.find("source"),d=n.find("video"),l=n.find(".info"),p=n.find(".play-btn"),f=n.find(".pause-btn"),h=n.find("h4"),u=n.find("p"),y=$("nav"),v=y.find("div"),m=$("#up"),w=$("#down"),g=n.find("video").attr("height")/500*100,T=!1,C="TransformersComicCreator";setTimeout(function(){var e=new TimelineLite;e.to(a,0,{opacity:1}),e.to(a,.2,{width:230}),e.to(a,.2,{height:263}),e.call(function(){var e=new TimelineLite;e.to(m,0,{opacity:1},"+=0.05"),e.to(m,0,{opacity:0},"+=0.05"),e.to(m,0,{opacity:1},"+=0.05"),e.to(m,0,{opacity:0},"+=0.05"),e.to(m,0,{opacity:1},"+=0.05"),e.to(m,0,{opacity:0},"+=0.05"),e.to(m,0,{opacity:1},"+=0.05"),e.to(w,0,{opacity:1},"+=0.05"),e.to(w,0,{opacity:0},"+=0.05"),e.to(w,0,{opacity:1},"+=0.05"),e.to(w,0,{opacity:0},"+=0.05"),e.to(w,0,{opacity:1},"+=0.05"),e.to(w,0,{opacity:0},"+=0.05"),e.to(w,0,{opacity:1},"+=0.05")}),e.to(s,0,{scale:1}),e.to(s,.3,{opacity:1}),e.to(n,.5,{scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.35"),e.to(d,0,{scale:1}),e.to(h,0,{y:50,opacity:0}),e.to(u,0,{y:50,opacity:0}),e.to(h,.8,{y:0,opacity:1,ease:Power2.easeOut}),e.call(function(){charGenerator.stop()}),e.to(u,.8,{y:0,opacity:1,ease:Power2.easeOut},"-=0.6"),e.to(p,.8,{opacity:1,ease:Power2.easeOut},"-=0.6"),e.play()},1e3),d.on("IsBuffering",function(){n.addClass("is-buffering")}),d.on("NoBuffering",function(){n.removeClass("is-buffering")}),d.on("pause",function(){n.removeClass("is-playing"),T?T=!1:(TweenLite.to(l,.3,{opacity:1}),TweenLite.to(p,.3,{opacity:1}))}),l.on("click",function(e){var t=new TimelineLite;n.hasClass("is-playing")?(d[0].pause(),ga("send",{hitType:"event",eventCategory:"Videos",eventAction:"pause",eventLabel:C})):(n.addClass("is-playing"),t.to(f,0,{opacity:.75}),t.to(l,.3,{opacity:0}),t.to(p,.3,{opacity:0},"-=0.3"),t.to(f,1,{opacity:0},"+=1"),d[0].play(),ga("send",{hitType:"event",eventCategory:"Videos",eventAction:"play",eventLabel:C}))}),l.on("mouseenter",function(){n.hasClass("is-playing")&&(TweenLite.killTweensOf(f),TweenLite.to(f,.3,{opacity:.75}))}),l.on("mouseleave",function(){n.hasClass("is-playing")&&TweenLite.to(f,1,{opacity:0})}),y.delegate("div","click",function(){var e,i=$(this);i.hasClass("is-active")||(e=y.find(".is-active").removeClass(),i.addClass("is-active"),TweenLite.to(e.find(".arrow")[0],.3,{width:0}),TweenLite.to(i.find(".arrow")[0],.3,{width:14}),t(i.attr("data-project")),ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"click",eventLabel:"Text Button"}))}),w.on("click",i(function(){var e=y.find(".is-active").index(),i=e+1<v.length?e+1:0,o=y.find(".is-active"),n=v.eq(i);o.removeClass(),n.addClass("is-active"),TweenLite.to(o.find(".arrow")[0],.3,{width:0}),TweenLite.to(n.find(".arrow")[0],.3,{width:14}),t(n.attr("data-project")),ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"click",eventLabel:"Down Button"})},500,!0)),m.on("click",i(function(){var e=y.find(".is-active").index(),i=e-1>-1?e-1:v.length-1,o=y.find(".is-active"),n=v.eq(i);o.removeClass(),n.addClass("is-active"),TweenLite.to(o.find(".arrow")[0],.3,{width:0}),TweenLite.to(n.find(".arrow")[0],.3,{width:14}),t(v.eq(i).attr("data-project")),ga("send",{hitType:"event",eventCategory:"Navigation",eventAction:"click",eventLabel:"Up Button"})},500,!0)),w.on("mouseover",i(e,250,!0)),m.on("mouseover",i(e,250,!0)),p.on("mouseover",i(e,250,!0))});