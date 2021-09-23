function getPlanetToDestroy(planets) {
    for(let i = 0; i < planets.length; i++) {
        if(checkPlanet(planets.slice(0, i).concat(planets.slice(i + 1)))) return i + 1;
    }
    return -1;
}
function checkPlanet(planets) {
    let odds = 0;
    let evens = 0;
    for(let i = 0; i < planets.length; i++) {
        i % 2 === 0 ? evens += planets[i] : odds += planets[i];
    }
    return odds === evens;
}