let body = document.body

let header = document.createElement("header")
let right_header = document.createElement("div")
let left_header = document.createElement("button")
let img = document.createElement("img")
let nav = document.createElement("nav")
let a_one = document.createElement("a")
let a_two = document.createElement("a")
let a_three = document.createElement("a")
let a_four = document.createElement("a")

right_header.classList.add("first_header")
left_header.classList.add("button")
nav.classList.add("menu")

img.classList.add("image")
img.src = "	https://www.wepro.uz/_nuxt/img/logo-mobile.25aa695.svg"
img.alt = "wepro"
a_one.classList.add("main")
a_one.href = "#"
a_two.classList.add("courses")
a_two.href = "#"
a_three.classList.add("contacts")
a_three.href = "#"
a_four.classList.add("enter")
a_four.href = "#"

a_one.innerHTML = "Главная"
a_two.innerHTML = "Курсы"
a_three.innerHTML = "Контакты"
a_four.innerHTML = "Войти"
left_header.innerHTML = "Бесплатная консультация"

body.append(header)
header.append(right_header,left_header)
right_header.append(img,nav)
nav.append(a_one,a_two,a_three,a_four)

