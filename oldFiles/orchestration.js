var ensembles = [];

function loadEnsembles(){
    ensembles.push({name: "7th Grade band", 
    Piccolo: 5,
    Flute: 2,
    Clarinet: 2,
    Trumpet: 1});
    console.log(ensembles);
    document.write(JSON.stringify(ensembles));

    var instTotal = ensembles[1] + ensembles[2];
}