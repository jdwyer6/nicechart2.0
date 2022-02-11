var instrumentation = []; 
var instruments = [
  {
  name: "Piccolo",
  instCode: 0,
  sort: 0
  },
  {  
  name: "flute",
  instCode: 1,
  sort: 1 
  }
];


let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
  button.addEventListener('click', (e) => {
    instrumentation.push(button.value);
    document.getElementById("demo").innerHTML = instrumentation;
    var instName = instruments[button.value].name;
    document.getElementById("names").innerHTML = instName;
  })
})




