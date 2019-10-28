(this["webpackJsonpmegaman-clicky"]=this["webpackJsonpmegaman-clicky"]||[]).push([[0],[,function(e,a,n){e.exports={scoreIntructionsContainer:"Title_scoreIntructionsContainer__3VN8q",instructions:"Title_instructions__2pdUq",scores:"Title_scores__2nmTf"}},function(e,a,n){e.exports={card:"GameCard_card__FP-Ao",imgContainer:"GameCard_imgContainer__37K0A"}},function(e){e.exports=JSON.parse('[{"id":1,"name":"Mega Man","image":"../images/Megaman.png","clicked":false},{"id":2,"name":"Fire Man","image":"../images/Fireman.png","clicked":false},{"id":3,"name":"Quick Man","image":"../images/Quickman.jpeg","clicked":false},{"id":4,"name":"Bright Man","image":"../images/Brightman.png","clicked":false},{"id":5,"name":"Skull Man","image":"../images/Skullman.png","clicked":false},{"id":6,"name":"Gravity Man","image":"../images/Gravityman.png","clicked":false},{"id":7,"name":"Bubble Man","image":"../images/Bubbleman.png","clicked":false},{"id":8,"name":"Spark Man","image":"../images/Sparkman.png","clicked":false},{"id":9,"name":"Heat Man","image":"../images/Heatman.png","clicked":false},{"id":10,"name":"Shadow Man","image":"../images/Shadowman.png","clicked":false},{"id":11,"name":"Magnet Man","image":"../images/Magnetman.png","clicked":false},{"id":12,"name":"Elec Man","image":"../images/Elecman.png","clicked":false},{"id":13,"name":"Snake Man","image":"../images/Snakeman.png","clicked":false},{"id":14,"name":"Tomahawk Man","image":"../images/Tomahawkman.png","clicked":false},{"id":15,"name":"Top Man","image":"../images/Topman.png","clicked":false},{"id":16,"name":"Crash Man","image":"../images/Crashman.png","clicked":false},{"id":17,"name":"Needle Man","image":"../images/Needleman.png","clicked":false},{"id":18,"name":"Ring Man","image":"../images/Ringman.png","clicked":false},{"id":19,"name":"Gyro Man","image":"../images/Gyroman.png","clicked":false},{"id":20,"name":"Dive Man","image":"../images/Diveman.png","clicked":false},{"id":21,"name":"Blizzard Man","image":"../images/Blizzardman.png","clicked":false},{"id":22,"name":"Plant Man","image":"../images/Plantman.png","clicked":false},{"id":23,"name":"Stone Man","image":"../images/Stoneman.png","clicked":false},{"id":24,"name":"Astro Man","image":"../images/Astroman.png","clicked":false},{"id":25,"name":"Knight Man","image":"../images/Knightman.png","clicked":false},{"id":26,"name":"Star Man","image":"../images/Starman.png","clicked":false},{"id":27,"name":"Toad Man","image":"../images/Toadman.png","clicked":false},{"id":28,"name":"Centaur Man","image":"../images/Centaurman.png","clicked":false}]')},,,,,,function(e,a,n){e.exports={navbar:"Navbar_navbar__CLYHD"}},function(e,a,n){e.exports={wrapper:"Wrapper_wrapper__acrmz"}},,,function(e,a,n){e.exports=n(20)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(5),i=n.n(r),m=n(6),s=n(7),l=n(11),o=n(8),g=n(12),d=n(9),u=n.n(d),f=function(){return c.a.createElement("nav",{className:u.a.navbar},c.a.createElement("h2",null,"Mega Man Memory Game"))},p=n(10),k=n.n(p),h=function(e){return c.a.createElement("div",{className:k.a.wrapper},e.children)},M=n(1),S=n.n(M),C=function(e){return c.a.createElement("div",{className:S.a.scoreIntructionsContainer},c.a.createElement("div",{className:S.a.instructions},0===e.score?c.a.createElement("p",null,"Click an image to start the game.",c.a.createElement("br",null),"Be careful not to click the same image twice!"):c.a.createElement("p",null,e.correctOrIncorrect)),c.a.createElement("div",{className:S.a.scores},c.a.createElement("p",null,"Current Score: ",e.score),c.a.createElement("p",null,"High Score: ",e.highScore)))},v=n(2),E=n.n(v),_=function(e){return c.a.createElement("div",{className:E.a.card,value:e.id,onClick:function(){return e.cardClickEvent(e.id)}},c.a.createElement("div",{className:E.a.imgContainer},c.a.createElement("img",{alt:e.name,src:e.image})))},y=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return c.a.createElement("div",{className:a},e.children)},b=function(e){return c.a.createElement("div",{className:"container"},e.children)},N=function(e){return c.a.createElement("div",{className:"row d-flex justify-content-center"},e.children)},O=n(3);n(18);var w=function(e){function a(){var e,n;Object(m.a)(this,a);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={megaManCards:O,currentScore:0,highScore:0,correctOrIncorrect:"",clicked:[]},n.cardClickEvent=function(e){-1===n.state.clicked.indexOf(e)?(n.incrementScore(),n.setState({clicked:n.state.clicked.concat(e)})):n.resetCards()},n.incrementScore=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,correctOrIncorrect:"You Guessed Correctly!"}),e>=n.state.highScore?n.setState({highScore:e}):20===e&&n.setState({correctOrIncorrect:"You Guessed All Cards Correctly! You Win!"}),n.shuffleCards()},n.shuffleCards=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e}(O);n.setState({megaManCards:e})},n.resetCards=function(){n.setState({currentScore:0,highScore:n.state.highScore,correctOrIncorrect:"You Guessed Incorrectly!",clicked:[]})},n}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(f,{title:"Mega Man Memory Game"}),c.a.createElement(C,{score:this.state.currentScore,highScore:this.state.highScore,correctOrIncorrect:this.state.correctOrIncorrect}),c.a.createElement(b,null,c.a.createElement(N,null,this.state.megaManCards.map((function(a){return c.a.createElement(y,{size:""},c.a.createElement(_,{key:a.id,cardClickEvent:e.cardClickEvent,incrementScore:e.incrementScore,shuffleCards:e.shuffleCards,resetCards:e.resetCards,id:a.id,image:a.image}))})))))}}]),a}(t.Component);n(19);i.a.render(c.a.createElement(w,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.5b8745c9.chunk.js.map