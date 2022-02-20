var instrumentation = []; 
var instNamesDisplay = [];

let buttons = Array.from(document.getElementsByClassName("instButton"));
buttons.map(button => {
  button.addEventListener('click', (e) => {

    var table = document.getElementById("table");
    for (var i=0, row; row=table.rows[i]; i++) {
      for(var j=0, col; col=row.cells[j]; j++){
        var inst = col.innerHTML;
        var btn = button.name;
      } 
    }




      if(e.target.id === "add"){
        var obj = {name: button.name, sort: button.value};
        instrumentation.push(obj);
        console.log(instrumentation);
        displayArray();

        //Update User Display

        if(inst = btn){
          var nameToUpdate = document.getElementById(inst);
          var quantity = parseInt(nameToUpdate.innerHTML) + 1;
          nameToUpdate.innerHTML = quantity;
        }

        //Update User Display

      } else if (e.target.id === "remove"){
        console.log("remove");
        //Remove Inst Value

        if(inst = btn){
          var nameToUpdate = document.getElementById(inst);
          var quantity = 0;
          nameToUpdate.innerHTML = quantity;
        }


        for( var i = 0; i < instrumentation.length; i++){ 
    
          if ( instrumentation[i].sort === button.value) { 
      
              instrumentation.splice(i, 1); 
              i--;
          }
      
      }
      displayArray();
       console.log(instrumentation);
      }else{
        console.log("no inst found");
      }

  })
})


function compare(a, b) {
  return a.sort - b.sort;
}

function sortInstruments() {
instrumentation.sort(compare);
displayArray()
console.log(instrumentation);

}


function displayArray(){
  // console.log(instrumentation[0].name);
  for (let index = 0; index < instrumentation.length; index++) {
    var element = instrumentation[index].name;
    document.getElementById("names").innerHTML = JSON.stringify(instrumentation);
  }
  
  // document.getElementById("names").innerHTML = instNamesDisplay;
};




function createEnsemble(){
  var ensembleTitle = document.getElementById("nameEnsemble");
  var createEnsembleLink = document.getElementById("createEnsembleLink");
  if(ensembleTitle.value.length === 0){
    alert("Please enter a name for your ensemble");
    createEnsembleLink.href = "";
  }else{
    localStorage.setItem("ensembleSize", instrumentation.length);
    var ensembleName = document.getElementById("nameEnsemble").value;
    localStorage.setItem("name", ensembleName);
    createEnsembleLink.href = "loading.html";
  }
}


function noEnsembles(){
  if("ensembleSize" in localStorage){
    document.getElementById("ensembleCard").className = "ensembleCard";
    document.getElementById("numberOfMembers").append(localStorage.getItem("ensembleSize"));
    document.getElementById("ensembleName").innerHTML = localStorage.getItem("name");
    document.getElementById("noEnsemblesText").innerHTML = "My ensembles:";
  }else{
    document.getElementById("noEnsemblesText").innerHTML = "Hmm...It looks like you haven't created an ensemble yet. Click the + to get started!";
    document.getElementById("ensembleCard").className = "ensembleCardHide";
  }
}

function clearLocalStorage(){
  localStorage.clear();
}

var groups = [];

function createEnsemble2(){
  
    var ensembleTitle = document.getElementById("nameEnsemble").value;
    var ensembleSize = instrumentation.length;
    groups.push({name: ensembleTitle, size: ensembleSize});

    var groupsSerialized = JSON.stringify(groups);
    localStorage.setItem("storedGroups", groupsSerialized);
    console.log(groupsSerialized);
    
}

var instIcons = ["images/instIcon1.png", "images/instIcon2.png", "images/instIcon3.png", "images/instIcon4.png", "images/instIcon5.png", "images/instIcon6.png", "images/instIcon7.png"];

function checkForGroups(){
  var groupsUnserialized = JSON.parse(localStorage.getItem("storedGroups"));
  console.log(groupsUnserialized);

  for(i=0; i<groupsUnserialized.length; i++){
    

    var container = document.getElementById("myEnsemblesContainer");
    var ensembleContainer = document.createElement("div");
    var groupTitle = document.createElement("h3");
    var groupAmount = document.createElement("p");
    var image = document.createElement("img");
    
    container.appendChild(ensembleContainer);
    ensembleContainer.appendChild(groupTitle);
    ensembleContainer.className = "ensembleCard";
    ensembleContainer.appendChild(groupAmount);
    ensembleContainer.appendChild(image);

    ensembleContainer.id = ("ensembleContainer");
    groupTitle.id = ("groupTitle" + [i]);
    groupAmount.id = ("groupAmount" + [i] );
    // imageIndex = Math.floor(Math.random(instIcons.length) * 10);
    // icon = instIcons[imageIndex];
    image.src = "images/instIcon7.png";
   

  

    document.getElementById("groupTitle" + [i]).innerHTML = groupsUnserialized[i].name;
    document.getElementById("groupAmount" + [i]).innerHTML = "Members: " + groupsUnserialized[i].size;
  }
}

function showStorage(){
  console.log(localStorage);
}