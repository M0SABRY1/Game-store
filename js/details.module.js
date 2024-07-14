import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        document.getElementById("btn-close").addEventListener("click", () => {
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none");
        });


        this.loading = document.querySelector(".loading");
        this.getDetails(id);
    };


    async getDetails(id) {

        this.loading.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1c180fb425mshd1ee0a14c89ef89p1ed1c2jsnbf9b0d872f2a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();

        this.loading.classList.add('d-none');

        new Ui().displayDetails(response);
    }
}