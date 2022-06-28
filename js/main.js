function showSection(item1, item2, class1) {
    item1.classList.add(class1)
    item2.classList.remove(class1)
}

function $(item) {
    return document.querySelector(item)
}

const popUpclose = document.getElementsByClassName('pop-up__cross')
const popUpBtn = document.getElementsByClassName('pop-up__btn')
const main = $('.main'),
      output =  $('.output'),
      logo = $('.logotype'),
      submitBtn = $('.main__submit'),
      backBtn = $('.output__back-btn')

      let currentScreen = main
      const popupLinks = document.querySelectorAll('.nav-menu__item')
      const popUps = document.querySelectorAll('.pop-up-modal')
    
 
      document.addEventListener('click', (e)=>{



    if (e.target == submitBtn)  {
        showSection(main, output,  'hidden')
        currentScreen = output

    } else if (e.target == backBtn)
         showSection(output, main,  'hidden')


})


window.addEventListener("load",()=> {

    setTimeout(()=>{
        showSection(logo, main, 'hidden')
    }, 1500)

})


for (let index = 0; index < popUpBtn.length; index++) {
    const item = popUpBtn[index];
    item.addEventListener('click', ()=>{
        popUps.forEach((popUp)=>{
            if (!popUp.classList.contains('hidden')) {
                popUp.classList.add('hidden')
            }
        })
    
    currentScreen.classList.remove('hidden')
   })
}


for (let index = 0; index < popUpclose.length; index++) {
    const item = popUpclose[index];
    item.addEventListener('click', ()=>{
        popUps.forEach((popUp)=>{
            if (!popUp.classList.contains('hidden')) {
                popUp.classList.add('hidden')
            }
        })
    
    currentScreen.classList.remove('hidden')
   })
}


popupLinks.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let currLink = item
        let popUpId = currLink.getAttribute('data-tab-link')
        let currPopUp = document.querySelector(popUpId)

        popupLinks.forEach((item)=>{
            item.classList.remove('nav-menu__item_active')
        })

        popUps.forEach((item)=>{
            item.classList.add('hidden')
        })

        console.log(item);
        currLink.classList.add('nav-menu__item_active')
        currentScreen.classList.add('hidden')
        currPopUp.classList.remove('hidden')
    })
})



