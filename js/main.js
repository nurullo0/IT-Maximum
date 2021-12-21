// const btnScrollToTop = document.querySelector('#back-to-top');

// btnScrollToTop.addEventListener('click' , function (){
//     $("html , body").animate({scrollTop: 100 }, "slow");

// })

// $(document).ready(function () {
//     $(window).on('scroll', function () {
//         if ($(this).scrollTop() > 100) {
//             $('#back-to-top').fadeIn();
//         } else {
//             $('#back-to-top').fadeOut();
//         }
//     });
//     $('#back-to-top').click(function () {
//         $("html, body").animate({
//             scrollTop: 0
//         }, 600);
//         return true;
//     });
// });

window.addEventListener('scroll', function() {
    let toUp = document.querySelector('#back-to-top');

    // toUp.addEventListener('click', () => {
    //     $("html , body").animate({
    //         scrollTop: 0 
    //     }, 100);
    //     console.log('ss');
    // } )

    toUp.classList.toggle('to-up', window.scrollY > 100)
})


const menuOpen = document.querySelector('.menu-open'),
    menuClose = document.querySelector('.menu-close'),
    menuBtn = document.querySelector('.menu__icon'),
    navMenu = document.querySelector('.nav-media');


menuBtn.addEventListener('click', () => {
    menuOpen.classList.toggle('menu__icon_active')
    menuClose.classList.toggle('menu__icon_active')
    navMenu.classList.toggle('nav-media_active')
})



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



const coursesMenuBtns = document.querySelectorAll('.menu__link'),
    kampCourseCards = document.querySelectorAll('#kamp-course'),
    tilCourseCards = document.querySelectorAll('#til-course'),
    plusCourseCards = document.querySelectorAll('#plus-course')

function delAllcards() {
    kampCourseCards.forEach(item => {
        item.classList.remove('card-none')
    })
    tilCourseCards.forEach(item => {
        item.classList.remove('card-none')
    })
    plusCourseCards.forEach(item => {
        item.classList.remove('card-none')
    })
}
function delKampCards() {
    kampCourseCards.forEach(item => {
        item.classList.add('card-none')
    })
}

function delTilCards() {
    tilCourseCards.forEach(item => {
        item.classList.add('card-none')
    })
}

function delPlusCards() {

    plusCourseCards.forEach(item => {
        item.classList.add('card-none')
    })
}

coursesMenuBtns.forEach((item, i) => {
    item.addEventListener('click', () => {

        delAllcards()

        if (i === 0) {


        } else if (i === 1) {
           delPlusCards()
           delTilCards()
           
        } else if (i === 2) {
            delPlusCards()
            delKampCards()
            
        } else if (i === 3) {
            delKampCards()
            delTilCards()
            
        } else if (i === 4) {
            delKampCards()
           
        }

    })
})
