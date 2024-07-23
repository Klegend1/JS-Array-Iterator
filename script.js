const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true, 
        antManAndTheWasp: false,
        captainMarvel: false,
        agengersFour: true, 
        spiderManFarFromHome: true,
        // stopped at Phase 3
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true,
        antManAndTheWasp: false,
        captainMarvel: false,
        agengersFour: true,
        spiderManFarFromHome: true,
        // stopped at Phase 3
    },
    jarvisAreYouThere: ()=>{
       console.log('At your service, sir')
    }
}
// Accessing Data from an object
// Log Iron Man's third ability
console.log( ironMan.abilities[2] )
// Iterating over an object's property - storing an array
// Log all of Iron Man's abilities by looping through the array
// for ( let i=0; i<ironMan.abilities.length; i++) {
//     console.log(ironMan.abilities[i])
// }
// ironMan.abilities.forEach(ability=>console.log(ability))
// accessing nested properties
// Log whether or not Iron Man appeared in spiderManHomecoming
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)
// updating (mutating) nested properties
// Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
// spiderManHomecoming = true
ironMan.marvelMovieAppearances.spiderManHomecoming = true
// invoking an object method
// Check if jarvis is there by calling on the jarvisAreYouThere function
ironMan.jarvisAreYouThere()