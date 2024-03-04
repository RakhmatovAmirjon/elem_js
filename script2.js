let box = document.createElement("div")
let picture = document.createElement("img")
let second = document.createElement("div")
let second_in = document.createElement("div")
let men = document.createElement("div")
let perfect = document.createElement("div")
let rates = document.createElement("div")
let money = document.createElement("div")
let star = document.createElement("div")
let boks = document.createElement("div")
let money1 = document.createElement("img")
let star1 = document.createElement("img")
let boks1 = document.createElement("img")
let amount_money = document.createElement("div")
let number_star = document.createElement("div")
let boks_number = document.createElement("div")
let button2 = document.createElement("div")

box.classList.add("box")
picture.classList.add("picture")
second.classList.add("second")
second_in.classList.add("second_in")
men.classList.add("men")
perfect.classList.add("perfect")
rates.classList.add("rates")
money.classList.add("money")
star.classList.add("star")
boks.classList.add("boks")
money1.classList.add("money1")
star1.classList.add("star1")
boks1.classList.add("boks1")
amount_money.classList.add("amount_money")
number_star.classList.add("number_star")
boks_number.classList.add("boks_number")
button2.classList.add("button2")

body.append(box)
box.append(picture,second)
picture.src = "img/backpack.svg"
second.append(second_in)
second_in.append(men,perfect,rates,button2)
men.innerHTML = "MEN'S CLOTHING (120)"
perfect.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 <br/> inches) in the padded sleeve, your everyday"
rates.append(money,star,boks)
money.append(money1,amount_money)
money1.src = "img/s.svg"
amount_money.innerHTML = "109"
star.append(star1,number_star)
star1.src = "img/star.svg"
number_star.innerHTML = "3,9"
boks.append(boks1,boks_number)
boks1.src = "img/box.svg"
boks_number.innerHTML = "120"
button2.innerHTML = "В избранное"