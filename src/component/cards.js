class CardsMovies extends HTMLElement {
  constructor() {
    super();
    this.urlMovies = "http://www.omdbapi.com/?apikey=41d03a10&s=avengers";
  }
  connectedCallback() {
    this.render();
  }

  render() {
    fetch(this.urlMovies)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        responseJson.Search.forEach((e) => {
          this.innerHTML += this.cardsMovies(e);
        });
      });
  }

  cardsMovies(movies) {
    return `
    <div class="col-md-4 my-3">
              <div class="card">
                  <img src="${movies.Poster}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title">${movies.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${movies.Year}</h6>
                    <h6>${movies.Type}
                </div>
            </div>
        </div>`;
  }
}

customElements.define("cards-movies-avengers", CardsMovies);
