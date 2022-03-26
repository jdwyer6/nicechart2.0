
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
        var elementToAdd = document.createElement("p").innerHTML = currentInst.name



        if(e.target.classList.contains('plus')){
            count += 1
            currentCount.value = count
            currentEnsemble.push(currentInst)


            if(family.classList.contains('woodwinds')){

                woodwinds.append(elementToAdd)
            
            }else if(family.classList.contains('brass')){

                brass.append(elementToAdd)

            }else if(family.classList.contains('strings')){

                strings.append(elementToAdd)

            }
         
        }else{
            if(count > 0){
                count -= 1
                currentCount.value = count
                var objToRemove = currentEnsemble.find(obj => {
                    return obj.id === currentParentID
                })
                currentEnsemble.pop(objToRemove)
                console.log(currentEnsemble)
            }else{
                currentCount.value = 0
            }
           
        }

       
    })
})


// Next: unAppend elements when pressing minus button
