
const instruments = [
    {"name": 'Piccolo',
    "abvName": 'Picc.',
    "id": 1,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Flute',
    "abvName": 'Fl.',
    "id": 6,
    "weight": .3,
    "common": true
    },
    {
    "name": 'Alto Flute in G',
    "abvName": 'Alto Fl.',
    "id": 11,
    "weight": .3,
    "common": false
    },
    {
    "name": 'Oboe',
    "abvName": 'Ob.',
    "id": 16,
    "weight": .75,
    "common": true
    },
    {
    "name": 'English Horn in F',
    "abvName": 'Eng. Hn.',
    "id": 21,
    "weight": .75,
    "common": false
    },
    {
    "name": 'Bassoon',
    "abvName": 'Bsn.',
    "id": 26,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabassoon',
    "abvName": 'Cbsn.',
    "id": 31,
    "weight": .3,
    "common": false
    },
    {
    "name": 'Clarinet in E♭',
    "abvName": 'E♭ Cl.',
    "id": 36,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Clarinet in B♭',
    "abvName": 'B♭ Cl.',
    "id": 41,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Alto Clarinet in E♭',
    "abvName": 'Alto Cl.',
    "id": 46,
    "weight": .5,
    "common": false
    },
    {
    "name": 'Bass Clarinet in B♭',
    "abvName": 'B. Cl.',
    "id": 51,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabass Clarinet in B♭',
    "abvName": 'Cb. Cl.',
    "id": 56,
    "weight": 1,
    "common": false
    },
    {
    "name": 'Soprano Saxophone in B♭',
    "abvName": 'S. Sax.',
    "id": 61,
    "weight": .75,
    "common": false
    },
    {
    "name": 'Alto Saxophone in E♭',
    "abvName": 'A. Sax.',
    "id": 66,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Tenor Saxophone in B♭',
    "abvName": 'T. Sax.',
    "id": 71,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Baritone Saxophone in E♭',
    "abvName": 'B. Sax.',
    "id": 76,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Trumpet in B♭',
    "abvName": 'Tpt.',
    "id": 81,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Horn in F',
    "abvName": 'Hn.',
    "id": 86,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Trombone',
    "abvName": 'Tbn.',
    "id": 91,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Bass Trombone',
    "abvName": 'B. Tbn.',
    "id": 96,
    "weight": 1,
    "common": false
    },
    {
    "name": 'Euphonium B.C.',
    "abvName": 'Euph. B.C.',
    "id": 101,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Euphonium T.C. in B♭',
    "abvName": 'Euph. T.C.',
    "id": 106,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Tuba',
    "abvName": 'Tba.',
    "id": 111,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Violin',
    "abvName": 'Vln.',
    "id": 116,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Viola',
    "abvName": 'Vla.',
    "id": 121,
    "weight": .5,
    "common": true
    },
    {
    "name": 'Cello',
    "abvName": 'Vc.',
    "id": 126,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Contrabass',
    "abvName": 'Cb.',
    "id": 131,
    "weight": 1,
    "common": true
    },
    {
    "name": 'Percussion 1',
    "abvName": 'Perc. 1',
    "id": 136,
    "common": true
    },   
    {
    "name": 'Percussion 2',
    "abvName": 'Perc. 2',
    "id": 137,
    "common": true
    },
    {
    "name": 'Mallet Percussion',
    "abvName": 'Mllt.',
    "id": 138,
    "common": true
    },
    {
    "name": 'Timpani',
    "abvName": 'Timp.',
    "id": 139,
    "common": true
    }
    ]
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const plusMinusContainers = [...document.querySelectorAll('.plusMinusContainer')]
const plusMinusButtons = [...document.querySelectorAll('.plusMinusButton')]
var currentEnsemble = []
const ensembleTitle = document.querySelector('.ensembleTitle')
const rightContainer = document.querySelector('.chosenEnsembleContainer')

ensembleTitle.innerHTML = localStorage.getItem('ensembleName')


plusMinusButtons.forEach(pmb => {
    pmb.addEventListener('click', (e) => {
        var currentParent = e.target.parentElement
        var currentParentID = parseInt(e.target.parentElement.id)
        var currentCount = currentParent.querySelector('.counter')
        var count = parseInt(currentCount.value)
        // var family = currentParent.parentElement.parentElement
        var currentInst = instruments.find(obj => {
            return obj.id === currentParentID
        })
        var elementToAdd = document.createElement("p")
        elementToAdd.innerHTML = currentInst.name



        if(e.target.classList.contains('plus')){
            count += 1
            currentCount.value = count
            currentEnsemble.push(currentInst)

            
            var newElement = document.createElement("p")
            newElement.innerHTML = currentInst.name
            newElement.classList.add('chosenInst')
            var chosenInstruments = [...document.querySelectorAll(".chosenInst")]
            rightContainer.append(newElement)
            
            // if(chosenInstruments.length === 0){
            //     rightContainer.appendChild(newElement)
            //     console.log("chosen inst length")
            // }

            // chosenInstruments.forEach(inst => {
            //     if(inst.innerHTML === newElement.innerHTML){
            //         console.log('same')

            //     }else{
            //         rightContainer.append(newElement)
            //     }
            // })
         

         
        }else{
            if(count > 0){
                count -= 1
                currentCount.value = count
                var objToRemove = currentEnsemble.find(obj => {
                    return obj.id === currentParentID
                })
                currentEnsemble.pop(objToRemove)

             
              
            }else{
                currentCount.value = 0
            }
           
        }
  
     
       console.log(currentEnsemble)


    })
})


function saveName(){
    var ensembleName = document.getElementById('ensembleName').value
    localStorage.setItem('ensembleName', ensembleName)
    currentName = localStorage.getItem('ensembleName')
    console.log(localStorage)
}

// function saveEnsemble(){
//     localStorage.setItem('currentEnsemble', currentEnsemble)
// }





// Next: unAppend elements when pressing minus button
