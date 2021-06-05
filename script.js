const requestOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '',
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
    },
    redirect: 'follow',
};

fetch("https://api-football-beta.p.rapidapi.com/teams?league=4&season=2020", requestOptions)
    .then(response => response.json())
    .then(result => {
        result.response.forEach(element => {

            let groupStageElt = document.getElementById("groupStage");

            let teamElt = document.createElement("div");
            let flagElt = document.createElement("img");
            let countryElt = document.createElement("div");

            teamElt.classList.add("team");
            flagElt.classList.add("flag");
            countryElt.classList.add("country");

            flagElt.setAttribute("src", element.team.logo)
            flagElt.setAttribute("alt", element.team.country+"'s Flag")
            countryElt.textContent = element.team.country;

            teamElt.appendChild(flagElt);
            teamElt.appendChild(countryElt);
            groupStageElt.appendChild(teamElt);
        });

        return console.log(result)
    })
    .catch(error => console.log('error', error));

// let groupStageElt = document.getElementById("groupStage");

// let teamElt = document.createElement("div");
// let flagElt = document.createElement("img");
// let countryElt = document.createElement("div");

// teamElt.classList.add("team");
// flagElt.classList.add("flag");
// countryElt.classList.add("country");

// flagElt.setAttribute("src", "https://media.api-sports.io/football/teams/2.png")
// flagElt.setAttribute("alt", "France's Flag")
// countryElt.textContent = "France";

// teamElt.appendChild(flagElt);
// teamElt.appendChild(countryElt);
// groupStageElt.appendChild(teamElt);





// document
//     .getElementById("ask-hello")
//     .addEventListener("click", askHello);