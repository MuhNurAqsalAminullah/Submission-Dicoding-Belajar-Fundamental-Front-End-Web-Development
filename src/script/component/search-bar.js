class SearchBar extends HTMLElement {


    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }


    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                display: flex;
                background-color: #7f7fd5;
                max-width: 236px;
                padding: 16px;
                // box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                position: sticky;
                top: 30px;
                
            }
        
            .search-container > input {
                padding: 5px;
                width: 75%;
                font-weight: bold;
                border: 0;
                border-bottom: 1px solid white;
                background-color: #7f7fd5;
                color: white;
            }
        
            .search-container > input:focus {
                outline: 0;
                color: white;
            }
        
            .search-container >  input::placeholder {
                color: white;
                font-weight: normal;
            }
        
            .search-container > button {
                // width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 5px;
                background-color: white;
                color: #7f7fd5;
                border: 0;
                text-transform: uppercase;
            }
        
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
        
                
            }
        </style>
        
        <div id="search-container" class="search-container">
            <input placeholder="Search Anime" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);