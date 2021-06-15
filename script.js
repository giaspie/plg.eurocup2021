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
        'x-rapidapi-key': '7419190554msh0d56e38a9c9d86fp1a73dejsn16e82ee03bb2',
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
    },
    redirect: 'follow',
};

fetch("https://api-football-beta.p.rapidapi.com/standings?league=4&season=2020", requestOptions)
    .then(response => {
        APIcalls = 100 - response.headers.get('x-ratelimit-requests-remaining')
        maxAPIcalls = response.headers.get('x-ratelimit-requests-limit')
        document.getElementById("APIcalls").textContent = "API calls : " + APIcalls + "/" + maxAPIcalls;
        return response.json()
    })
    .then(result => {
            result.response[0].league.standings.forEach(groups => {
            groups.forEach(teams => {
                let groupStageElt = document.getElementById(teams.group.replace(/ /g, ''));
                if (groupStageElt != null) {
                    document.querySelector("#" + teams.group.replace(/ /g, '') + " .loader").style.display = "none";
                    //main element
                    let dataElt = document.createElement("div");
                    //left side
                    let teamElt = document.createElement("div");
                    let flagElt = document.createElement("img");
                    let countryElt = document.createElement("div");
                    //right side
                    let tableElt = document.createElement("div");
                    let pointsElt = document.createElement("div");
                    let playedElt = document.createElement("div");
                    let winElt = document.createElement("div");
                    let drawElt = document.createElement("div");
                    let loseElt = document.createElement("div");
                    let diffElt = document.createElement("div");

                    //main element
                    dataElt.classList.add("data");
                    dataElt.classList.add(teams.rank);
                    //left side
                    teamElt.classList.add("team");
                    flagElt.classList.add("flag");
                    countryElt.classList.add("country");
                    tableElt.classList.add("table");
                    flagElt.setAttribute("src", teams.team.logo)
                    flagElt.setAttribute("alt", teams.team.name + "'s Flag")
                    countryElt.textContent = teams.team.name;
                    //right side
                    pointsElt.textContent = teams.points;
                    playedElt.textContent = teams.all.played;
                    winElt.textContent = teams.all.win;
                    drawElt.textContent = teams.all.draw;
                    loseElt.textContent = teams.all.lose;
                    diffElt.textContent = teams.goalsDiff;

                    //left side
                    teamElt.appendChild(flagElt);
                    teamElt.appendChild(countryElt);
                    dataElt.appendChild(teamElt);
                    //right side
                    tableElt.appendChild(pointsElt);
                    tableElt.appendChild(playedElt);
                    tableElt.appendChild(winElt);
                    tableElt.appendChild(drawElt);
                    tableElt.appendChild(loseElt);
                    tableElt.appendChild(diffElt);
                    
                    groupStageElt.appendChild(dataElt);
                    //main div
                    dataElt.appendChild(tableElt);
                }
            })
        });
        return console.log(result)
    })
    .catch(error => console.log('error', error));
