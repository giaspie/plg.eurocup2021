const groups = {
    groupA: ["Italy", "Switzerland", "Wales", "Turkey"],
    groupB: ["Belgium", "Denmark", "Finland", "Russia"],
    groupC: ["Austria", "Netherlands", "Macedonia FYR", "Ukraine"],
    groupD: ["Croatia", "Czech-Republic", "England", "Scotland"],
    groupE: ["Slovakia", "Poland", "Spain", "Sweden"],
    groupF: ["France", "Germany", "Hungary", "Portugal"]
}
let APIcalls = 0;
let maxAPIcalls = 0;
const requestOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '',
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
    },
    redirect: 'follow',
};

fetch("https://api-football-beta.p.rapidapi.com/teams?league=4&season=2020", requestOptions)
    .then(response => {
        APIcalls = 100 - response.headers.get('x-ratelimit-requests-remaining')
        maxAPIcalls = response.headers.get('x-ratelimit-requests-limit')
        document.getElementById("APIcalls").textContent = "API calls : " + APIcalls + "/" + maxAPIcalls;
        return response.json()
    })
    .then(result => {
        result.response.forEach(element => {
            let groupNAme = Object.keys(groups).find(key => groups[key].includes(element.team.country));
            if (groupNAme) {
                let groupStageElt = document.getElementById(groupNAme);

                let teamElt = document.createElement("div");
                let flagElt = document.createElement("img");
                let countryElt = document.createElement("div");

                teamElt.classList.add("team");
                flagElt.classList.add("flag");
                countryElt.classList.add("country");

                flagElt.setAttribute("src", element.team.logo)
                flagElt.setAttribute("alt", element.team.country + "'s Flag")
                countryElt.textContent = element.team.country;

                teamElt.appendChild(flagElt);
                teamElt.appendChild(countryElt);
                groupStageElt.appendChild(teamElt);
            }
        });

        return console.log(result)
    })
    .catch(error => console.log('error', error));

