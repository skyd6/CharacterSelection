var cra = document.querySelector("#profilcra")
var eca = document.querySelector("#profileca")
var eni = document.querySelector("#profileni")
var enu = document.querySelector("#profilenu")
var feca = document.querySelector("#profilfeca")
var iop = document.querySelector("#profiliop")
var sadi = document.querySelector("#profilsadi")
var body = document.querySelector("body")
var titre = document.querySelector("h2")
var description = document.querySelector("#description")
var accueil = document.querySelector(".accueil")
var accueil2 = document.querySelector(".accueil2")


cra.addEventListener("click", function() {
    body.className = "fondcra"
    titre.innerHTML = "CRÂ"
    description.className = "descricra"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

eca.addEventListener("click", function() {
    body.className = "fondeca"
    titre.innerHTML = "ECAFLIP"
    description.className = "descrieca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

eni.addEventListener("click", function() {
    body.className = "fondeni"
    titre.innerHTML = "ENIRIPSA"
    description.className = "descrieni"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

enu.addEventListener("click", function() {
    body.className = "fondenu"
    titre.innerHTML = "ENUTROF"
    description.className = "descrienu"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

feca.addEventListener("click", function() {
    body.className = "fondfeca"
    titre.innerHTML = "FÉCA"
    description.className = "descrifeca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

iop.addEventListener("click", function() {
    body.className = "fondiop"
    titre.innerHTML = "IOP"
    description.className = "descriiop"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})

sadi.addEventListener("click", function() {
    body.className = "fondsadi"
    titre.innerHTML = "SADIDA"
    description.className = "descrisadi"
    accueil.className = "cacher"
    accueil2.className = "cacher"
})