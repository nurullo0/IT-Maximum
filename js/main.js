const corusels = document.querySelectorAll(".work-area__coursel")


function removes(arr) {

    arr.forEach(i => {
        i.classList.remove('work-area_active-next1')
        i.classList.remove('work-area_active-prev1')
        i.classList.remove('work-area_active-prev')
        i.classList.remove('work-area_active-next')

    });
}

function next(n) {

    if (n < corusels.length - 1) {
        removes(corusels)

        corusels[n].classList.add('work-area_active-prev')

        corusels[n + 1].classList.add('work-area_active-next')
    } else {
        console.log("tugadi");
    }
}


function prev(n) {

    if (n > 0) {
        removes(corusels)
        console.log(n, 'prev-1');
        corusels[n].classList.add('work-area_active-next1')
        corusels[n - 1].classList.add('work-area_active-prev1')
    } else {
        console.log(n, 'tugadi');

    }
}