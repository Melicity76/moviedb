(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],[,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/reactlogo.cd7bb6be.png"},function(e,t,a){e.exports=a.p+"static/media/titlemainblue.bd23426e.png"},function(e,t,a){e.exports=a.p+"static/media/nfchova.09f83deb.png"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){e.exports=a.p+"static/media/nfc.35ad3697.png"},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a(4),l=a(3),s=a(0),o=a.n(s),i=a(9),m=a.n(i),d=a(6),u=a.n(d),h=a(10),p=a(7);a(5);function E(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),c=Object(p.a)(r,2),l=c[0],i=c[1],m=function(){var e=Object(h.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submitting"),n="https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,console.log(c.results),i(c.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"form",onSubmit:m},o.a.createElement("label",{className:"label",htmlFor:"query"},"Title Name: "),o.a.createElement("input",{className:"input",type:"text",name:"query",required:!0,placeholder:"Enter Movie or TV Show Name Here",value:a,onChange:function(e){return n(e.target.value)}}),o.a.createElement("button",{className:"button",type:"submit",onclick:"()"},"Search")),o.a.createElement("div",{className:"card-list"},l.filter((function(e){return e.poster_path})).map((function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),o.a.createElement("div",{className:"card--content"},o.a.createElement("h3",{className:"card--title"},e.title),o.a.createElement("p",null,o.a.createElement("small",null,"RELEASE DATE: ",e.release_date)),o.a.createElement("p",null,o.a.createElement("small",null,"RATING: ",e.vote_average)),o.a.createElement("p",{className:"card--desc"},e.overview)))}))))}var f=a(11),b=a.n(f),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"footer"},o.a.createElement("p",{class:"footertext"},"\xa9 2020 | Created by ",o.a.createElement("a",{class:"footerlink",href:"https://philforster.co.uk"},"P Forster")," | Developed with React",o.a.createElement("img",{class:"reactlogo",src:b.a,alt:"React Logo"})," "))}}]),a}(o.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"watchone"},o.a.createElement("h1",{class:"whatson"},"Whats on Phils Screen"))}}]),a}(o.a.Component),w=a(12),y=a.n(w),j=(a(20),a(13)),k=a.n(j),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{class:"grid-container"},o.a.createElement("div",{class:"grid-child watchone"},o.a.createElement("img",{class:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2//hGUydvM9U9gByvH010c3dsMoPha.jpg",alt:"Trailer Park Boys poster"}),o.a.createElement("div",{class:"card--content watchonecontent"},o.a.createElement("h3",{class:"card--title"},"Trailer Park Boys",o.a.createElement("a",{href:"https://www.netflix.com/watch/70143633?trackId=14170056&tctx=6%2C0%2Cc8ca60af-2c4d-49d7-b80d-d49ec6da2863-11594273%2Caaa49da6-eef7-496a-9039-ab9927c281cf_22613271X10XX1591282850586%2Caaa49da6-eef7-496a-9039-ab9927c281cf_ROOT%2C",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{class:"nflogo",src:k.a,alt:"Netflix link"}))),o.a.createElement("p",null,o.a.createElement("small",null,"RELEASE DATE: 1999-07-15")),o.a.createElement("p",null,o.a.createElement("small",null,"RATING: 7.5")),o.a.createElement("p",{class:"card--desc watchonedesc"},"After a psychic predicts his death, a small-time hoodlum named Julian hires a cheap documentary film crew to document the last few days of his mis-spent life. This is the film that pioneered the show of the same name."))),o.a.createElement("div",{class:"grid-child watchtwo"},o.a.createElement("img",{class:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2//7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg",alt:"Star Trek Into Darkness poster"}),o.a.createElement("div",{class:"card--content watchonecontent"},o.a.createElement("h3",{class:"card--title"},"Into Darkness"),o.a.createElement("p",null,o.a.createElement("small",null,"RELEASE DATE: 2013-05-05")),o.a.createElement("p",null,o.a.createElement("small",null,"RATING: 7.3")),o.a.createElement("p",{class:"card--desc watchonedesc"},"When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis."))),o.a.createElement("div",{class:"grid-child watchthree"},o.a.createElement("img",{class:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2//h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",alt:"Birds of Prey poster"}),o.a.createElement("div",{class:"card--content watchonecontent"},o.a.createElement("h3",{class:"card--title"},"Birds of Prey"),o.a.createElement("p",null,o.a.createElement("small",null,"RELEASE DATE: 2020-02-05")),o.a.createElement("p",null,o.a.createElement("small",null,"RATING: 7.3")),o.a.createElement("p",{class:"card--desc watchonedesc"},"Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord."))))}}]),a}(o.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"title"},o.a.createElement("img",{class:"title",src:y.a,alt:"Title"})),o.a.createElement(E,null),o.a.createElement(g,null),o.a.createElement(O,null),o.a.createElement("hideMainContent",null),o.a.createElement(v,null)))}}]),a}(o.a.Component);m.a.render(o.a.createElement(_,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.f96b5e85.chunk.js.map