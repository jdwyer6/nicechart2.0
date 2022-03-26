
import { instruments } from './instrumentData.js';
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const plusMinusContainers = [...document.querySelectorAll('.plusMinusContainer')]
const plusMinusButtons = [...document.querySelectorAll('.plusMinusButton')]
var currentEnsemble = []
const woodwinds = document.querySelector('.selection-0')
const brass = document.querySelector('.selection-1')
const strings = document.querySelector('.selection-2')


plusMinusButtons.forEach(pmb => {
    pmb.addEventListener('click', (e) => {
        var currentParent = e.target.parentElement
        var currentParentID = parseInt(e.target.parentElement.id)
        var currentCount = currentParent.querySelector('.counter')
        var count = parseInt(currentCount.value)
        var family = currentParent.parentElement.parentElement
        var currentInst = instruments.find(obj => {
            return obj.id === currentParentID
        })
        var elementToAdd = document.createElement("p")
        elementToAdd.innerHTML = currentInst.name



        if(e.target.classList.contains('plus')){
            count += 1
            currentCount.value = count
            currentEnsemble.push(currentInst)


            if(family.classList.contains('woodwinds')){
                woodwinds.appendChild(elementToAdd)
            }else if(family.classList.contains('brass')){
                brass.appendChild(elementToAdd)
            }else if(family.classList.contains('strings')){
                strings.appendChild(elementToAdd)
            }
         
        }else{
            if(count > 0){
                count -= 1
                currentCount.value = count
                var objToRemove = currentEnsemble.find(obj => {
                    return obj.id === currentParentID
                })
                currentEnsemble.pop(objToRemove)

                
                if(family.classList.contains('woodwinds')){
                    var elementsInSection = [...woodwinds.querySelectorAll('p')]
                    for(let i=0; i<elementsInSection.length; i++){
                        if(elementsInSection[i].innerHTML === objToRemove.name){
                            woodwinds.removeChild(elementsInSection[i])
                            break
                        }
                    }
                    
                }else if(family.classList.contains('brass')){
                    
                    var elementsInSection = [...brass.querySelectorAll('p')]
                    for(let i=0; i<elementsInSection.length; i++){
                        if(elementsInSection[i].innerHTML === objToRemove.name){
                            brass.removeChild(elementsInSection[i])
                            break
                        }
                    }

                }else if(family.classList.contains('strings')){

                    var elementsInSection = [...strings.querySelectorAll('p')]
                    for(let i=0; i<elementsInSection.length; i++){
                        if(elementsInSection[i].innerHTML === objToRemove.name){
                            strings.removeChild(elementsInSection[i])
                            break
                        }
                    }

                }
             
              
            }else{
                currentCount.value = 0
            }
           
        }

       
    })
})


// Next: unAppend elements when pressing minus button
