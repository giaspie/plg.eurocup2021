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

fetch("https://api-football-beta.p.rapidapi.com/players/topscorers?season=2020&league=4", requestOptions)
    .then(response => {
        APIcalls = 100 - response.headers.get('x-ratelimit-requests-remaining')
        maxAPIcalls = response.headers.get('x-ratelimit-requests-limit')
        document.getElementById("APIcalls").textContent = "API calls : " + APIcalls + "/" + maxAPIcalls;
        return response.json()
    })
    .then(result => {
        result.response.forEach(players => {

        });
        result.response.forEach(statistics => {
            
        });
        return console.log(result)
    })
    .catch(error => console.log('error', error));
