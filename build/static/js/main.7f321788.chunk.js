(this.webpackJsonphappybirthday=this.webpackJsonphappybirthday||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var A=n(10),i=n.n(A),a=n(18),o=n.n(a),c=(n(25),n(26),n(0)),g=n(19),r=n(17),s=n(20),B=(n(30),n.p,n.p,n.p,n.p+"static/media/heart.064749ff.png");var w=n.p+"static/media/posx.9cfed161.jpg",d=n.p+"static/media/negx.850c4be1.jpg",l=n.p+"static/media/posy.4f3cc068.jpg",u=n.p+"static/media/negy.b1f4b8f3.jpg",E=n.p+"static/media/posz.2e2c5db0.jpg",f=n.p+"static/media/negz.8fcf1638.jpg";var I=n.p+"static/media/heart.190fd532.glb";var p=n(1),m=n(2),v=function(){function e(){Object(p.a)(this,e),this.map=new Map,this.updatePosition()}return Object(m.a)(e,[{key:"updatePosition",value:function(){}},{key:"down",value:function(e){}},{key:"up",value:function(e){}}]),e}();n.p,n.p;var C=function(e){document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},b=n.p+"static/media/happyBirthday.fc028d6d.mp3",M=document.getElementById("startButton"),y=document.querySelector("#canvas");M.addEventListener("click",(function(){new Audio(b).play().then((function(e){C(y)})).catch((function(e){console.log(e)}))}));var Q=n(8),h=n.n(Q),R=n(9);function k(){return(k=Object(R.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.share({title:"Example Page",url:""});case 2:console.log("Data was shared successfully");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.getElementById("shareButton").addEventListener("click",(function(){!function(){k.apply(this,arguments)}()}));var D=n(12);var G=function(){return new g.a,Object(A.useEffect)((function(){window.innerWidth,window.innerHeight;var e,t,n=document.querySelector("#canvas"),A=new c.WebGLRenderer({canvas:n});A.outputEncoding=c.sRGBEncoding;var i=new c.PerspectiveCamera(80,2,1,1e3);i.position.set(20,2,0),i.rotateY=100;var a=new c.Scene,o=new c.LightProbe;a.add(o);var g=new r.a(i,A.domElement);g.enableDamping=!0,g.minDistance=5,g.maxDistance=15,g.enablePan=!1,g.maxPolarAngle=Math.PI/2-.05,g.update();var p=new c.AmbientLight(16777215,.8);a.add(p);var m=new c.DirectionalLight(16777215,5);a.add(m),function(e,t){var n=new e.PlaneGeometry(1e3,1e3),A=new e.MeshStandardMaterial({opacity:.25,transparent:!0,depthWrite:!1}),i=new e.Mesh(n,A);i.rotation.x=-Math.PI/2,i.position.y=-100,i.receiveShodow=!0,t.add(i)}(c,a),function(e,t,n,A){for(var i=new e.BufferGeometry,a=new e.TextureLoader,o=a.load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJFNTEwNDE5NDNDQzExRTJBMjBCRjUzNkYyQjA3Njg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJFNTEwNDFBNDNDQzExRTJBMjBCRjUzNkYyQjA3Njg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkU1MTA0MTc0M0NDMTFFMkEyMEJGNTM2RjJCMDc2ODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkU1MTA0MTg0M0NDMTFFMkEyMEJGNTM2RjJCMDc2ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4p8HPFAAASOElEQVR42txdi5LbOA4E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"),c=new Float32Array(9e3),g=0;g<9e3;g++)c[g]=150*(Math.random()-.5);var r=new e.PointsMaterial({size:.5,map:o,transperent:!0,color:16777215});r.alphaTest=.5,i.setAttribute("position",new e.BufferAttribute(c,3));for(var s=new e.Points(i,r),w=new e.BufferGeometry,d=a.load(B),l=new Float32Array(1500),u=0;u<1500;u++)l[u]=150*(Math.random()-.5);var E=new e.PointsMaterial({size:1,map:d,transperent:!0,color:16777215});E.alphaTest=.5,w.setAttribute("position",new e.BufferAttribute(l,3));var f=new e.Points(w,E),I=new e.PointsMaterial({size:.005}),p=new e.TorusGeometry(.7,.2,16,100);new e.Points(p,I),t.add(s,f);var m=new e.Clock;!function e(){var i=m.getElapsedTime();s.position.y=-i,f.position.y=-i,n.render(t,A),window.requestAnimationFrame(e)}()}(c,a,A,i),function(e,t){var n=(new e.CubeTextureLoader).load([w,d,l,u,E,f]);t.background=n}(c,a);var C=new s.a;C.load(I,(function(e){var n=e.scene;n.position.set(0,-5,0),A.outputEncoding=!0,e.scene.scale.set(100,100,100),a.add(n),(t=new c.AnimationMixer(n)).clipAction(e.animations[0]).play(),h()}),(function(e){}),(function(e){console.log("error")}));var b=new c.PointLight(16711680,1,100);b.position.set(5,5,0),a.add(b);var M={},y=new v;document.addEventListener("keydown",(function(e){y.down(e.key),e.shiftKey,M[e.key.toLowerCase()]=!0}),!1),document.addEventListener("keyup",(function(e){y.up(e.key),M[e.key.toLowerCase()]=!1}),!1);var Q=new c.Clock,h=function n(){A.setPixelRatio(Math.min(window.devicePixelRatio,2));var o=Q.getDelta();if(e&&e.update(o),t&&t.update(.25*o),g.update(),A.render(a,i),window.requestAnimationFrame(n),function(e){var t=e.domElement,n=t.clientWidth,A=t.clientHeight,i=t.width!==n||t.height!==A;i&&e.setSize(n,A,!1);return i}(A)){var c=A.domElement;i.aspect=c.clientWidth/c.clientHeight,i.updateProjectionMatrix()}};h()}),[]),Object(D.jsx)("div",{className:"App"})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,A=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),A(e),i(e),a(e),o(e)}))};o.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(G,{})}),document.getElementById("root")),F()}},[[29,1,2]]]);
//# sourceMappingURL=main.7f321788.chunk.js.map