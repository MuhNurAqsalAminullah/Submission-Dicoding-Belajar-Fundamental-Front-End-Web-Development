import './anime-item.js';
 
class AnimeList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
   set clubs(animes) {
       this._animes = animes;
       this.render();
   }
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
   render() {
       this.shadowDOM.innerHTML = "";
       this._animes.forEach(club => {
           const animeItemElement = document.createElement("anime-item");
           animeItemElement.club = club
           this.shadowDOM.appendChild(animeItemElement);
       })
   }
}
customElements.define("anime-list", AnimeList);