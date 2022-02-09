var instNum = [0, 1, 5, 6, 1];
var instName = ["Piccolo", "Trumpet", "Trombone", "Sax", "Tuba"];

// var instList = document.querySelector(".instList");
var numDisplay = document.querySelector(".displayNums");
var nameDisplay = document.querySelector(".displayNames");

var instruments = [
{
    name: "piccolo", 
    voice: "soprano",
    sort: 1
},
{
    name: "flute",
    voice: "soprano",
    sort: 2
},
{
    name: "clarinet",
    voice: "soprano",
    sort: 1
}
];
 
let object = {}; 
        
for(i=0; i< instruments.length; i++){
   document.write(instruments[i].name + " ");
}

function addPicc(){
object.name = "piccolo";
object.voice = "soprano";
object.sort = 1;
instruments.push(object);
}

// nameDisplay.innerHTML = instruments.[i].name);


// numDisplay.innerHTML = instNum;
// nameDisplay.innerHTML = instName;


// valueChange = function(item){
//     instNum.push(item.value);
//     instName.push(instName[item.value]);
    
//     numDisplay.innerHTML = instNum;
//     nameDisplay.innerHTML = instName;
// }

// function saveInstChoice(inst){
// instName.push(inst.name);
// instNum.push(inst.value);
// nameDisplay.innerHTML = instName;
// numDisplay.innerHTML = instNum;
// return false;
// }

function update(item) {
var instAmount = item.value;

document.querySelector(".instrument-amount").innerHTML = instAmount + " Piccolos";
}


