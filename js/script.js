const navMenu = document.getElementsByClassName('header-menu')


navMenu[0].addEventListener("click", ()=> {
        navMenu[0].classList.add("active")
        navMenu[1].classList.remove('active')
        navMenu[2].classList.remove('active')
        navMenu[3].classList.remove('active')
})

navMenu[1].addEventListener("click", ()=> {
        navMenu[1].classList.add("active")
        navMenu[0].classList.remove('active')
        navMenu[2].classList.remove('active')
        navMenu[3].classList.remove('active')
})

navMenu[2].addEventListener("click", ()=> {
        navMenu[2].classList.add("active")
        navMenu[0].classList.remove('active')
        navMenu[1].classList.remove('active')
        navMenu[3].classList.remove('active')
})

navMenu[3].addEventListener("click", ()=> {
        navMenu[3].classList.add("active")
        navMenu[0].classList.remove('active')
        navMenu[1].classList.remove('active')
        navMenu[2].classList.remove('active')
})

