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



function saveToStorage(){
localStorage.setItem("ensembleSize", instrumentation.length);
var ensembleName = document.getElementById("nameEnsemble").value;
localStorage.setItem("name", ensembleName);
}

function getFromStorage(){
  document.getElementById("numberOfMembers").append(localStorage.getItem("ensembleSize"));
  document.getElementById("ensembleName").innerHTML = localStorage.getItem("name");
}







