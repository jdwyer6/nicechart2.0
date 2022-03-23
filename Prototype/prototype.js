const draggalbes = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const rightSection = document.querySelector('.right')
const leftSection = document.querySelector('.left')
var instArray = []
// var afterElement;
// var clone;
// var container;



draggalbes.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

})


containers.forEach(container => {

    container.addEventListener('dragover', e => {
        e.preventDefault()
        afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        clone = draggable.cloneNode(true)
        // if (afterElement == null){
        //     container.appendChild(draggable)
        // } else {
        // container.insertBefore(draggable, afterElement)
        // }

        draggable.addEventListener('dragend', () => {
            if (afterElement == null && container.classList.contains('droppable')){
            container.appendChild(clone)
            } else if(afterElement != null && container.classList.contains('droppable')){
            container.insertBefore(draggable, afterElement)
            }else{
                clone.remove()
            }
            clone.addEventListener('click', remove)
            clone.draggable = false;
            clone.classList.add('dropped')
        })
        
    })

})

function remove(){
    this.remove()
}

// const droppableContainers = document.querySelectorAll('.droppable')

// droppableContainers.forEach(dc => {
//     dc.addEventListener('dragenter', e => {
//         e.preventDefault()
//         dc.classList.add('hovering')
//         console.log('enter')
//     });
//     dc.addEventListener('dragleave', () => {
//         dc.classList.remove('hovering')
//         console.log('exit')
//     });

// })




function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

   return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if(offset < 0 && offset > closest.offset){
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}



function addToInstArray(){
    const draggableArray = [...document.querySelectorAll('.draggable')]

    for(let i=0; i<draggableArray.length; i++){
        if (draggableArray[i].closest('.selection-0') !==null){
            var num = parseInt(draggableArray[i].id)
            instArray.push(num)

        }else if(draggableArray[i].closest('.selection-1') !==null){
            var amountToAdd = parseInt(draggableArray[i].id) + 1
            instArray.push(amountToAdd)
        }else if(draggableArray[i].closest('.selection-2') !==null){
            var amountToAdd = parseInt(draggableArray[i].id) + 2
            instArray.push(amountToAdd)
        }else if(draggableArray[i].closest('.selection-3') !==null){
            var amountToAdd = parseInt(draggableArray[i].id) + 3
            instArray.push(amountToAdd)
        }else if(draggableArray[i].closest('.selection-4') !==null){
            var amountToAdd = parseInt(draggableArray[i].id) + 4
            instArray.push(amountToAdd)
        }
    }

    const percussion1 = document.getElementById('146')
    const percussion2 = document.getElementById('147')
    const malletPercussion = document.getElementById('148')
    const timpani = document.getElementById('149')
    if(percussion1.checked === true){
        instArray.push(146)
    }
    if(percussion2.checked === true){
        instArray.push(147)
    }
    if(malletPercussion.checked === true){
        instArray.push(148)
    }
    if(timpani.checked === true){
        instArray.push(149)
    }
}
   
function copy(){
    if(instArray.length === 0){
        addToInstArray()
    }else{
        instArray = []
        addToInstArray()
    }
    console.log(instArray)
    const textToCopy = instArray.toString();
    const copiedText = document.querySelector('.copiedText')
    navigator.clipboard.writeText(textToCopy);
    copiedText.innerHTML=textToCopy
    const button = document.querySelector('.button')
    // showWindow();
    progressBar()
    // var timeout = 1100
    // setTimeout(closeWindow, timeout)
}

    
function progressBar() {
    var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}



function showWindow(){
    const alertContainer = document.querySelector('.alertContainer')
    alertContainer.classList.remove('hideWindow')
}

function closeWindow(){
    const alertContainer = document.querySelector('.alertContainer')
    alertContainer.classList.add('hideWindow')
}

function saveEnsemble(){
    localStorage.setItem('currentEnsemble', instArray)
}

function loadPreviousEnsemble(){
    localStorage.getItem("currentEnsemble")
}


function calculateDistribution(){
    var xArray = ["Part 1", "Part 2", "Part 3", "Part 4", "Part 5"];

    const chartContainer = document.getElementById('chartContainer')
    rightPartContainers = [...rightSection.querySelectorAll('.container')]
    for(let i=0; i<rightPartContainers.length; i++){
        var part1 = (rightPartContainers[0].childElementCount - 1)
        var part2 = (rightPartContainers[1].childElementCount - 1)
        var part3 = (rightPartContainers[2].childElementCount - 1)
        var part4 = (rightPartContainers[3].childElementCount - 1)
        var part5 = (rightPartContainers[4].childElementCount - 1)
    }

    var yArray = [part1, part2, part3, part4, part5];
    var layout = {title:"Part Distribution", 
        colorway : ['#568FA6', '#C4EEF2', '#BAD9BF', '#E9F1F2', '#4a4e4e']
      };
    var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];
    Plotly.newPlot("myPlot", data, layout);

    setTimeout(calculateDistribution, 1000);
}

calculateDistribution();


// Copy Button
let button = document.querySelector('.buttonCheck');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"27\" height=\"23\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#4a4e4e\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Copy";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Copy") {
    buttonText.innerHTML = "Copy";
  } else if (buttonText.innerHTML === "Copy") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('buttonCheck__circle');
});



const instruments = [
    {"name": 'Flute (Advanced)',
    "abvName": 'Fl.(Adv)',
    "id": 6,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Flute',
    "abvName": 'Fl.',
    "id": 11,
    "weight": 1,
    "common": true
    }
]

 function instTest(){
     for(let i=0; i<instruments.length; i++){
         console.log(instruments[0].common)
     }
 }

instTest()
