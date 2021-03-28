(function(g){var window=this;'use strict';var X3=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().ea("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",Ba:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.Na("click",this.onClick,this);this.Oa("title",g.EM(a,e,"i"));g.wi(this,g.bN(b.fc(),this.element))},Y3=function(a){g.V.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.hj=!1;this.player=a;this.N(a,"minimized",this.Qh);this.N(a,"onStateChange",this.nT)},Z3=function(a){g.hM.call(this,a);
this.i=new Y3(this.player);this.i.hide();g.YL(this.player,this.i.element,4);a.hf()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(X3,g.V);X3.prototype.onClick=function(){this.G.La("onExpandMiniplayer")};g.u(Y3,g.V);g.k=Y3.prototype;
g.k.show=function(){this.Ke=new g.Zm(this.uu,null,this);this.Ke.start();if(!this.hj){this.tooltip=new g.BP(this.player,this);g.H(this,this.tooltip);g.YL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.tc=new g.XM(this.player);g.H(this,this.tc);this.Qk=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Qk);this.Qk.xa(this.element);this.N(this.Qk.element,"click",this.OI);var a=new g.V({D:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.hK()]});
g.H(this,a);a.xa(this.Qk.element);this.N(a.element,"click",this.Ai);a=new X3(this.player,this);g.H(this,a);a.xa(this.Qk.element);g.P(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.nP(this.player,this),g.H(this,a),a.xa(this.Qk.element),a=new g.tO(this.player,this),g.H(this,a),a.xa(this.Qk.element));this.Jo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Jo);this.Jo.xa(this.Qk.element);this.N(this.Jo.element,"click",this.OI);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});
g.H(this,b);b.xa(this.Jo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.xa(this.Jo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.xa(this.Jo.element);this.iJ=new g.yO(this.player,this,!1);g.H(this,this.iJ);this.iJ.xa(b.element);b=new g.vO(this.player,this);g.H(this,b);b.xa(a.element);this.nextButton=new g.yO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.xa(c.element);this.Ij=new g.oP(this.player,this);g.H(this,
this.Ij);this.Ij.xa(this.Qk.element);this.yd=new g.DO(this.player,this);g.H(this,this.yd);g.YL(this.player,this.yd.element,4);this.kx=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.kx);g.YL(this.player,this.kx.element,4);a=new g.V({D:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.hK()]});g.H(this,a);a.xa(this.kx.element);this.N(a.element,"click",this.Ai);a=new g.V({D:"button",Ba:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},
S:[g.mK()]});g.H(this,a);a.xa(this.kx.element);this.N(a.element,"click",this.BR);this.N(this.player,"presentingplayerstatechange",this.yc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb();this.hj=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.yd.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ke&&(this.Ke.dispose(),this.Ke=void 0);g.V.prototype.hide.call(this);this.player.hf()||(this.hj&&this.yd.hide(),this.player.loadModule("annotations_module"))};
g.k.oa=function(){this.Ke&&(this.Ke.dispose(),this.Ke=void 0);g.V.prototype.oa.call(this)};
g.k.Ai=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.k.BR=function(){this.player.playVideo()};
g.k.OI=function(a){if(a.target===this.Qk.element||a.target===this.Jo.element)g.P(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.kJ(this.player.rb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.k.Qh=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.hf())};
g.k.Ve=function(){this.yd.Ub();this.Ij.Ub()};
g.k.uu=function(){this.Ve();this.Ke&&this.Ke.start()};
g.k.yc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.OO(this.yd,0,this.player.Xa().getPlayerSize().width,!1);g.FO(this.yd)};
g.k.nT=function(a){this.player.hf()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.df=function(){return!1};
g.k.yf=function(){return!1};
g.k.jj=function(){return!1};
g.k.HC=function(){};
g.k.No=function(){};
g.k.jt=function(){};
g.k.Xo=function(){return null};
g.k.Ck=function(){return new g.Uf(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Er=function(a,b,c,d,e){var f=0,h=d=0,l=g.tg(a);if(b){c=g.gn(b,"ytp-prev-button")||g.gn(b,"ytp-next-button");var m=g.gn(b,"ytp-play-button"),n=g.gn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.rg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.gn(b,"ytp-miniplayer-button-top-left"),f=g.rg(b,this.element),b=g.tg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.Zd(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.dm=function(){};
g.k.Cl=function(){return!1};g.u(Z3,g.hM);Z3.prototype.create=function(){};
Z3.prototype.Ej=function(){return!1};
Z3.prototype.load=function(){this.player.hideControls();this.i.show()};
Z3.prototype.unload=function(){this.player.showControls();this.i.hide()};g.nM.miniplayer=Z3;})(_yt_player);
