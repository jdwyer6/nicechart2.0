const draggalbes = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const rightSection = document.querySelector('.right')
const leftSection = document.querySelector('.left')
const instArray = []

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
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        const clone = draggable.cloneNode(true)
        if (afterElement == null){
                container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

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
}
   
function copy(){
    addToInstArray()
    const textToCopy = instArray.toString();
  navigator.clipboard.writeText(textToCopy);
 
  const button = document.querySelector('.button')
  button.classList.add('animateButton')
    showWindow();
    const copiedText = document.querySelector('.copiedText')
    copiedText.innerHTML=textToCopy
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
