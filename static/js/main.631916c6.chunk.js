(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),m=a(6),i=(a(22),a(1)),s=a.p+"static/media/no-image.d8fafb4f.jpg";var o=function(e){var t=e.movie;return l.a.createElement("div",{className:"item-min",key:t.id},t.poster_path?l.a.createElement("img",{className:"item--image-min",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}):l.a.createElement("img",{className:"item--image-min",src:s,alt:"no image"}),l.a.createElement("h4",{className:"title-min"},l.a.createElement(m.b,{to:"/".concat(t.id),className:"link"},t.title)),l.a.createElement("p",{className:"small"},"RATING: ",t.vote_average))},u=a(8),p=l.a.createContext();function E(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(""),i=Object(u.a)(m,2),s=i[0],o=i[1],E=Object(n.useState)(""),v=Object(u.a)(E,2),h=(v[0],v[1]),b={handleSubmit:function(e){e.preventDefault();var t="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("328d760d9b2414d4f502638b62cf579c","&language=en-US&query=").concat(s,"&page=1&include_adult=false");fetch(t).then((function(e){if(e.ok)return e.json();throw Error("Something went wrong")})).then((function(e){return r(e.results)})).catch((function(e){return h(e)})),o(""),console.log(c)},movies:c,setMovies:r,inputValue:s,setInputValue:o};return l.a.createElement(p.Provider,{value:b},e.children)}var v=function(){var e=Object(n.useContext)(p),t=e.handleSubmit,a=e.movies,c=e.inputValue,r=e.setInputValue;return l.a.createElement("div",null,l.a.createElement("form",{className:"form",onSubmit:t},l.a.createElement("label",{htmlFor:"query",className:"label"},"Movie Name"),l.a.createElement("input",{required:!0,value:c,type:"text",className:"input",name:"query",placeholder:"e.g. Titanic",onChange:function(e){r(e.target.value)}}),l.a.createElement("button",{className:"btn",type:"submit"},"Search")),l.a.createElement("div",{className:"search-result-list"},a&&a.map((function(e){return l.a.createElement(o,{movie:e,key:e.id})}))))};var h=function(){var e=Object(i.g)().movieId,t=Object(n.useContext)(p).movies.filter((function(t){return t.id===Number(e)})),a=Object(u.a)(t,1)[0],c=Object(i.f)();return a?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"go-back",onClick:function(){return c.goBack()}},"\u25c0 Back"),l.a.createElement("div",{className:"item"},l.a.createElement("h2",{className:"title"},a.title),a.poster_path?l.a.createElement("img",{className:"item--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(a.poster_path),alt:a.title+" poster"}):l.a.createElement("img",{className:"item--image no-img",src:s,alt:"no image"}),l.a.createElement("p",{className:"small"},"RELEASE DATE: ",l.a.createElement("span",null,a.release_date)),l.a.createElement("p",{className:"small"},"RATING: ",l.a.createElement("span",null,a.vote_average)),l.a.createElement("p",{className:"description"},a.overview))):null};var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement(m.b,{to:"/",className:"link"},"Search Movies")),l.a.createElement("h1",null,"MOVIE SEARCH"),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/:movieId"},l.a.createElement(h,null))))};r.a.render(l.a.createElement(E,null,l.a.createElement(m.a,null,l.a.createElement(b,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.631916c6.chunk.js.map