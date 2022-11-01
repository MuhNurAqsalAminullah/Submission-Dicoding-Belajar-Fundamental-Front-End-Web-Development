class AnimeItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }


    set club(anime) {
        this._anime = anime;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                background-color: #7f7fd5;
                font-weight: 500;
                padding : 16px;
                color: white;
                button: 10px;
            }
       
            .fan-art-anime {
                float: left;
                padding: 10px;
                border-radius: 10px;
            }

            .anime-info > h1 {
                font-weight: 500;
            }
        </style>
        <div class="anime-info">
            <img class="fan-art-anime" src="${this._anime.image_url}" alt="Fan Art">
            <h1>${this._anime.title}</h1>
            <p>Id : (${this._anime.mal_id})</p>
            <p>Type : ${this._anime.type}</p>
            <p>Score : ${this._anime.score}</p>
            <p>Episodes : ${this._anime.episodes}</p>
            <p>Rate : ${this._anime.rated}</p>
            <p>Sinopsis :</p>
            <p>${this._anime.synopsis}</p>
        </div>`;
    }
 }
  
 customElements.define("anime-item", AnimeItem);