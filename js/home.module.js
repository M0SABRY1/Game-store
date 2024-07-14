import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor() {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {

                document.querySelector(".nav-item .active").classList.remove("active");
                link.classList.add("active");

                const category = link.dataset.category;

                this.getGames(category);
            })
        });

        this.ui = new Ui();

        this.detailsSection = new Details();

        this.games = document.getElementById("games");
        this.details = document.getElementById("details");

        this.loading = document.querySelector(".loading");

        this.getGames("mmorpg");
    };

    async getGames(cat) {


        this.loading.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1c180fb425mshd1ee0a14c89ef89p1ed1c2jsnbf9b0d872f2a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const response = await api.json();

        this.loading.classList.add('d-none');

        this.ui.displayGames(response);

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                this.games.classList.add("d-none");
                this.details.classList.remove("d-none");
                new Details(card.dataset.id);
            })
        });

    }




}