export class Ui {
    constructor() { };


    displayGames(data) {
        let gamesBox = ``;
        for (let i = 0; i < data.length; i++) {
            gamesBox += `
            <div class="col">
                <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                    <div class="card-body">
                        <figure>
                            <img src="${data[i].thumbnail}" alt="game-photo" class="card-img-top object-fit-cover h-100">
                        </figure>

                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h2 class="h6 small text-white">${data[i].title}</h2>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>

                            <p class="card-text small text-center text-white-50 opacity-50">${data[i].short_description.split(" ", 8)}</p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge bg-secondary">${data[i].genre}</span>
                        <span class="badge bg-secondary">${data[i].platform}</span>
                    </footer>
                </div>
            </div>
            `
        }
        document.getElementById("gameData").innerHTML = gamesBox;
    }

    displayDetails(data) {
        let detailsBox = `
          <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="details image" />
          </div>
          <div class="col-md-8">
            <h2>title: ${data.title}</h2>
            <p>
              Category: <span class="badge text-bg-info"> ${data.genre}</span>
            </p>
            <p>
              Platform:
              <span class="badge text-bg-info"> ${data.platform}</span>
            </p>
            <p>
              Status: <span class="badge text-bg-info"> ${data.status}</span>
            </p>
            <p class="small">${data.description}</p>
            <a
              class="btn btn-outline-warning text-white"
              target="_blank"
              href="${data.game_url}"
              >Show Game</a
            >
          </div>
        `
        document.getElementById("detailsContent").innerHTML = detailsBox;
    }
}