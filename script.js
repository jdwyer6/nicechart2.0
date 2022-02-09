var instNum = [0, 1, 5, 6, 1];
var instName = ["Piccolo", "Trumpet", "Trombone", "Sax", "Tuba"];

// var instList = document.querySelector(".instList");
var numDisplay = document.querySelector(".displayNums");
var nameDisplay = document.querySelector(".displayNames");

// valueChange = function(item){

//     instNum.push(item.value);
//     instName.push(instName[item.value]);

//     // instList.innerHTML = instList;
//     numDisplay.innerHTML = instNum;
//     nameDisplay.innerHTML = instName;
// }

numDisplay.innerHTML = instNum;
nameDisplay.innerHTML = instName;


valueChange = function(item){
    instNum.push(item.value);
    instName.push(instName[item.value]);
    
    numDisplay.innerHTML = instNum;
    nameDisplay.innerHTML = instName;
}

function saveInstChoice(inst){
instName.push(inst.name);
instNum.push(inst.value);
nameDisplay.innerHTML = instName;
numDisplay.innerHTML = instNum;
return false;
}

function update(item) {
var instAmount = item.value;

document.querySelector(".instrument-amount").innerHTML = instAmount + " Piccolos";
}
