const instruments = [
    {"name": 'Piccolo',
    "abvName": 'Picc.',
    "id": 1,
    "weight": .5,
    "common": false
    },
    {"name": 'Flute (Advanced)',
    "abvName": 'Fl. (Adv)',
    "id": 6,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Flute',
    "abvName": 'Fl.',
    "id": 11,
    "weight": .3,
    "common": true
    },
    {
    "name": 'Alto Flute in G',
    "abvName": 'Alto Fl.',
    "id": 16,
    "weight": .3,
    "common": false
    },
    {
    "name": 'Oboe',
    "abvName": 'Ob.',
    "id": 21,
    "weight": .75,
    "common": true
    },
    {
    "name": 'English Horn in F',
    "abvName": 'Eng. Hn.',
    "id": 26,
    "weight": .75,
    "common": false
    },
    {
    "name": 'Bassoon',
    "abvName": 'Bsn.',
    "id": 31,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabassoon',
    "abvName": 'Cbsn.',
    "id": 36,
    "weight": .3,
    "common": false
    },
    {
    "name": 'Clarinet in E♭',
    "abvName": 'E♭ Cl.',
    "id": 41,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Clarinet in B♭',
    "abvName": 'B♭ Cl.',
    "id": 46,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Alto Clarinet in E♭',
    "abvName": 'Alto Cl.',
    "id": 51,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Bass Clarinet in B♭',
    "abvName": 'B. Cl.',
    "id": 56,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabass Clarinet in B♭',
    "abvName": 'Cb. Cl.',
    "id": 61,
    "weight": 1,
    "common": false
    },
    {
    "name": 'Soprano Saxophone in B♭',
    "abvName": 'S. Sax.',
    "id": 66,
    "weight": .75,
    "common": false
    },
    {
    "name": 'Alto Saxophone in E♭',
    "abvName": 'A. Sax.',
    "id": 71,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Tenor Saxophone in B♭',
    "abvName": 'T. Sax.',
    "id": 76,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Baritone Saxophone in E♭',
    "abvName": 'B. Sax.',
    "id": 81,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Trumpet in B♭ (Advanced)',
    "abvName": 'Tpt. (Adv)',
    "id": 86,
    "weight": 1,
    "common": false
    },
    {
    "name": 'Trumpet in B♭',
    "abvName": 'Tpt.',
    "id": 91,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Horn in F',
    "abvName": 'Hn.',
    "id": 96,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Trombone',
    "abvName": 'Tbn.',
    "id": 101,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Bass Trombone',
    "abvName": 'B. Tbn.',
    "id": 106,
    "weight": 1,
    "common": false
    },
    {
    "name": 'Euphonium B.C.',
    "abvName": 'Euph. B.C.',
    "id": 111,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Euphonium T.C. in B♭',
    "abvName": 'Euph. T.C.',
    "id": 116,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Tuba',
    "abvName": 'Tba.',
    "id": 121,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Violin',
    "abvName": 'Vln.',
    "id": 126,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Viola',
    "abvName": 'Vla.',
    "id": 131,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Cello',
    "abvName": 'Vc.',
    "id": 136,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabass',
    "abvName": 'Cb.',
    "id": 141,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Percussion 1',
    "abvName": 'Perc. 1',
    "id": 146,
    "common": true
    },   
    {
    "name": 'Percussion 2',
    "abvName": 'Perc. 2',
    "id": 147,
    "common": true
    },
    {
    "name": 'Mallet Percussion',
    "abvName": 'Mllt.',
    "id": 148,
    "common": true
    },
    {
    "name": 'Timpani',
    "abvName": 'Timp.',
    "id": 149,
    "common": true
    }
    ]
 
const draggalbes = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const rightSection = document.querySelector('.right')
const leftSection = document.querySelector('.left')
var instArray = []

const draggablesArray = [...document.querySelectorAll('.draggable')]
for(i=0; i<draggalbes.length; i++){
    draggablesArray[i].innerHTML = instruments[i].name
    draggablesArray[i].id = instruments[i].id
}

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

   // Copy Array
function copy(){
    if(instArray.length === 0){
        addToInstArray()
    }else{
        instArray = []
        addToInstArray()
    }
    const textToCopy = instArray.toString();
    const copiedText = document.querySelector('.copiedText')
    navigator.clipboard.writeText(textToCopy);
    // copiedText.innerHTML = textToCopy
    const button = document.querySelector('.button')
    calculateStaffSize()
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

//Plotly.js and Calculate Part distribution
function calculateDistribution(){
    var xArray = ["Part 1", "Part 2", "Part 3", "Part 4", "Part 5"];
    var part1Weight = 0;
    var part2Weight = 0;
    var part3Weight = 0;
    var part4Weight = 0;
    var part5Weight = 0;

    const chartContainer = document.getElementById('chartContainer')
    var rightPartContainers = [...rightSection.querySelectorAll('.container')]
    var droppedElements = [...document.querySelectorAll('.dropped')]
    const part1Children = document.querySelector('.selection-0').children
    const part1ChildrenArray = Array(part1Children)

    // Part 1
    for(let i=0; i < droppedElements.length; i++){
        if(droppedElements[i].parentElement?.classList.contains('selection-0')){
            var currentElementId = parseInt(droppedElements[i].id)
            var result = instruments.find(obj => {
                return obj.id === currentElementId
            })
            part1Weight = part1Weight + result.weight
        }
    }

    // Part 2
    for(let i=0; i < droppedElements.length; i++){
        if(droppedElements[i].parentElement?.classList.contains('selection-1')){
            var currentElementId = parseInt(droppedElements[i].id)
            var result = instruments.find(obj => {
                return obj.id === currentElementId
            })
            part2Weight = part2Weight + result.weight
        }
    }

      // Part 3
    for(let i=0; i < droppedElements.length; i++){
        if(droppedElements[i].parentElement?.classList.contains('selection-2')){
            var currentElementId = parseInt(droppedElements[i].id)
            var result = instruments.find(obj => {
                return obj.id === currentElementId
            })
            part3Weight = part3Weight + result.weight
        }
    }

       // Part 4
    for(let i=0; i < droppedElements.length; i++){
        if(droppedElements[i].parentElement?.classList.contains('selection-3')){
            var currentElementId = parseInt(droppedElements[i].id)
            var result = instruments.find(obj => {
                return obj.id === currentElementId
            })
            part4Weight = part4Weight + result.weight
        }
    }

       // Part 5
    for(let i=0; i < droppedElements.length; i++){
        if(droppedElements[i].parentElement?.classList.contains('selection-4')){
            var currentElementId = parseInt(droppedElements[i].id)
            var result = instruments.find(obj => {
                return obj.id === currentElementId
            })
            part5Weight = part5Weight + result.weight
        }
      }
    

    // for(let i=0; i<rightPartContainers.length; i++){
    //     var part1 = (rightPartContainers[0].childElementCount - 1)
    //     var part2 = (rightPartContainers[1].childElementCount - 1)
    //     var part3 = (rightPartContainers[2].childElementCount - 1)
    //     var part4 = (rightPartContainers[3].childElementCount - 1)
    //     var part5 = (rightPartContainers[4].childElementCount - 1)
    // }

    var yArray = [part1Weight, part2Weight, part3Weight, part4Weight, part5Weight];
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

// Unique Parts and Score Size
function calculateStaffSize(){
    let uniqueCharsSet = [...new Set(instArray)]
    let uniqueCharsArray = Array.from(uniqueCharsSet)
    var ensembleSize = uniqueCharsArray.length
    var staffSize = 0
    switch (ensembleSize) {
        case 0:
           staffSize = 69;
          break;
        case 1:
          staffSize = 2;
          break;
        case 2:
           staffSize = 2;
          break;
        case 3:
            staffSize = 2;
          break;
        case 4:
            staffSize = 2;
          break;
        case 5:
            staffSize = 5.2;
          break;
        case 6:
            staffSize = 6.0;
          break;
        case 7:
           staffSize = 5.0;
          break;
        case 8:
          staffSize = 4.5;
          break;
        case 9:
           staffSize = 4.0;
          break;
        case 10:
            staffSize = 6.7;
          break;
        case 11:
            staffSize = 6.4;
          break;
        case 12:
            staffSize = 6.1;
          break;
        case 13:
            staffSize = 5.8;
          break;
        case 14:
           staffSize = 5.5;
          break;
        case 15:
            staffSize = 5.2;
          break;
        case 16:
            staffSize = 4.9;
          break;
        case 17:
            staffSize = 4.6;
          break;
        case 18:
            staffSize = 4.3;
          break;
        case 19:
           staffSize = 4.1;
          break;
        case 20:
          staffSize = 3.9;
          break;
        case 21:
           staffSize = 3.7;
          break;
        case 22:
            staffSize = 3.6;
          break;
        case 23:
            staffSize = 3.5;
          break;
        case 24:
            staffSize = 3.4;
          break;
        case 25:
            staffSize = 3.3;
          break;
        case 26:
            staffSize = 3.2;
          break;
        case 27:
            staffSize = 3.1;
          break;
        case 28:
            staffSize = 3.0;
          break;
        case 29:
            staffSize = 2.9;
          break;
        case 30:
           staffSize = 2.8;
          break;
        case 31:
            staffSize = 2.7;
          break;
        case 32:
            staffSize = 2.6;
          break;
        case 33:
            staffSize = 2.5;
          break;
        case 34:
            staffSize = 2.4;
          break;
        case 35:
           staffSize = 2.4;
          break;
        case 36:
          staffSize = 2.3;
          break;
        case 37:
           staffSize = 2.3;
          break;
        case 38:
            staffSize = 2.2;
          break;
        case 39:
            staffSize = 2.2;
          break;
        case 40:
            staffSize = 2.2;
          break;
        case (ensembleSize > 40):
            staffSize = 2.0;
          break;
      }

      const staffText = document.querySelector('.staffSize')
      staffText.innerHTML = 'Staff Size: ' + staffSize;
}

function filterCommonInstruments(){
    const toggle = document.getElementById('commonInst')
    var common = instruments.filter(obj => {
        return obj.common === true
    })
    const commonIDArray = []
   for (let i = 0; i < common.length; i++) {
        const commonIDs = common[i].id;
        commonIDArray.push(commonIDs)
    }

    if(toggle.checked === true){
        draggalbes.forEach(draggable => {
            if(commonIDArray.includes(parseInt(draggable.id))){
                draggable.classList.add('common')
            }else{
                draggable.classList.add('hidden')
            }
        })
    }else{
        draggalbes.forEach(draggable => {
            draggable.classList.remove('hidden')
            draggable.classList.remove('common')
        })
    }
 
    
}





 function instTest(){
     for(let i=0; i<instruments.length; i++){
         console.log(instruments[12].id)
     }
 }

instTest()


