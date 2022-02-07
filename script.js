var instNum = [0, 1, 5, 6, 1];
var instName = ["Piccolo", "Trumpet", "Trombone", "Sax", "Tuba"];

// var instList = document.querySelector(".instList");
var numDisplay = document.querySelector(".displayNums");
var nameDisplay = document.querySelector(".displayNames");

valueChange = function(item){

    instNum.push(item.value);
    instName.push(instName[item.value]);

    // instList.innerHTML = instList;
    numDisplay.innerHTML = instNum;
    nameDisplay.innerHTML = instName;
}

numDisplay.innerHTML = instNum;
nameDisplay.innerHTML = instName;