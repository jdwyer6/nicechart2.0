var pieces = [
{
    name: "The Boys of the Old Brigade",
    composer: "William Paris Chambers"
},
{
    name: "Cenotaph",
    composer: "Jack Stamp"
},
{
    name: "First Suite in E-flat",
    composer: "Gustav Holst"
},
{
    name: "Concertino for Flute",
    composer: "Cécile Chaminade"
},
{
    name: "Concerto for Alto Saxophone and Wind Orchestra",
    composer: "Ingolf Dahl"
},
{
    name: "Country Band March",
    composer: "Charles Ives/Sinclair"
},
{
    name: "The Courtly Dances from Gloriana",
    composer: "Benjamin Britten/Bach"
},
{
    name: "Dionysiaques",
    composer: "Florent Schmitt"
},
{
    name: "Elsa’s Procession to the Cathedral from Lohengrin",
    composer: "Richard Wagner/Cailliet"
},
{
    name: "The Good Soldier Schweik",
    composer: "Robert Kurka"
},
{
    name: "Masquerade for Band",
    composer: "Vincent Persichetti"
},
{
    name: "Millennium Canons",
    composer: "Kevin Putts/Spede"
},
{
    name: "New England Triptych",
    composer: "William Schuman"
},
{
    name: "Overture to Candide",
    composer: "Leonard Bernstein/Beeler"
},
{
    name: "Passacaglia on BACH",
    composer: "Ron Nelson"
},
{
    name: "Prelude in the Dorian Mode",
    composer: "Antonio de Cabezón/Grainger"
},
{
    name: "Sokol Fanfare",
    composer: "Leoš Janáček"
},
{
    name: "Spin Cycle",
    composer: "Scott Lindroth"
},
{
    name: "Suite française",
    composer: "Darius Milhaud"
},
{
    name: "The Sussex Mummers’ Christmas Carol",
    composer: "Percy Grainger"
},
{
    name: "Symphony No. 3",
    composer: "Vittorio Giannini"
},
{
    name: "Three Miniatures",
    composer: "Anthony Plog"
},
{
    name: "Canzona",
    composer: "Peter Mennin"
},
{
    name: "Chaconne",
    composer: "Ron Nelson"
},
{
    name: "Chorale and Alleluia",
    composer: "Howard Hanson"
},
{
    name: "Commando March",
    composer: "Samuel Barber"
},
{
    name: "Divertimento for Band",
    composer: "Vincent Persichetti"
},
{
    name: "Fantasia in G",
    composer: "J.S. Bach//Goldman & Leist"
},
{
    name: "Fiesta del Pacifico",
    composer: "Roger Nixon"
},
{
    name: "Huldigungsmarsch",
    composer: "Richard Wagner"
},
{
    name: "Incantation and Dance",
    composer: "John Barnes Chance"
},
{
    name: "Irish Tune from County Derry",
    composer: "Percy Grainger"
},
{
    name: "Mock Morris",
    composer: "Percy Grainger/Kreines"
},
{
    name: "O welt, ich muss dich lassen",
    composer: "Johannes Brahms/Boyd"
},
{
    name: "An Original Suite",
    composer: "Gordon Jacob"
},
{
    name: "The Pathfinder of Panama",
    composer: "John Philip Sousa"
},
{
    name: "Postcard",
    composer: "Frank Ticheli"
},
{
    name: "Praetorius Suite",
    composer: "Jan Bach"
},
{
    name: "Prelude on Three Welsh Hymn Tunes",
    composer: "Ralph Vaughan Williams/Curnow"
},
{
    name: "Refracted Moonlight",
    composer: "Zachary Cairns"
},
{
    name: "A Somerset Rhapsody",
    composer: "Gustav Holst/Grundman"
},
{
    name: "Variants on a Medieval Tune",
    composer: "Norman Dello Joio"
}
];

for(i=0; i<pieces.length; i++){
    var card = document.createElement("div");
    card.className = "pieceCard";
    card.id = pieces[i].name;
    var container = document.getElementById("browseContainer");
    container.appendChild(card);

    var cardTitle = document.createElement("h1");
    var cardComposer = document.createElement("p");
    card.appendChild(cardTitle);
    card.appendChild(cardComposer);

    cardTitle.id = "cardTitleID" + [i];
    cardTitle.className = "cardTitle";
    cardComposer.id = "cardComposerID" + [i];

    document.getElementById("cardTitleID" + [i]).innerHTML = pieces[i].name;
    document.getElementById("cardComposerID" + [i]).innerHTML = pieces[i].composer;
}

function filterTitle(){
    var input = document.getElementById("titleSearchInput");
    var term = input.value.toUpperCase();
    var cards =  document.querySelectorAll(".pieceCard");
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].id.toUpperCase();
        if(title.includes(term)){
            cards[i].style.display = "flex";

        }else{
            cards[i].style.display = "none";
        }
    }

}


// document.getElementById("browseTitle").innerHTML = pieces[0].name;
// document.getElementById("browseComposer").innerHTML = pieces[0].composer;


// {
//     name: "",
//     composer: ""
// },

// Repertoire https://music.psu.edu/bands/repertoire
