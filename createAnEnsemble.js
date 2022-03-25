const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const plusMinusContainers = [...document.querySelectorAll('.plusMinusContainer')]
const plusMinusButtons = [...document.querySelectorAll('.plusMinusButton')]

plusMinusButtons.forEach(pmb => {
    pmb.addEventListener('click', (e) => {
        var currentParent = e.target.parentElement
        var currentParentID = e.target.parentElement.id
        var currentCount = currentParent.querySelector('.counter')
        var count = parseInt(currentCount.value)
        if(e.target.classList.contains('plus')){
            count += 1
            currentCount.value = count
        }else{
            if(count > 0){
                count -= 1
                currentCount.value = count
            }else{
                currentCount.value = 0
            }
           
        }
   
    })
})


//     // for(i=0; i<plusMinusContainers.length; i++){
    
//     //     console.log(plusMinusContainers[i])
//     // }



// $(document).ready(function() {
//     $('.minus').click(function () {
//         var $input = $(this).parent().find('input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 1 ? 1 : count;
//         $input.val(count);
//         $input.change();
//         return false;
//     });
//     $('.plus').click(function () {
//         var $input = $(this).parent().find('input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });
// });