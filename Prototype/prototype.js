const draggalbes = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const rightSection = document.querySelector('.right')
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



function doStuff(){
const draggableArray = [...document.querySelectorAll('.draggable')]
const partNum = [...document.querySelectorAll('.selection')]

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

console.log(instArray)
document.write(instArray)

}
   
function copy(){
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(instArray.value);

  /* Alert the copied text */
  alert("Copied the text: ");
}
   
    
