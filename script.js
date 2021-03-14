const cra = document.querySelector("#profilcra")
const eca = document.querySelector("#profileca")
const eni = document.querySelector("#profileni")
const enu = document.querySelector("#profilenu")
const feca = document.querySelector("#profilfeca")
const iop = document.querySelector("#profiliop")
const sadi = document.querySelector("#profilsadi")
const body = document.querySelector("body")
const titre = document.querySelector("h2")
const description = document.querySelector("#description")
const accueil = document.querySelector(".accueil")
const accueil2 = document.querySelector(".accueil2")
const personnage = document.querySelector("#personnage")
const fleche = document.querySelector("#fleche")
const fichePerso = document.querySelector("#details")
const avatar = document.querySelector("#avatar")

var craImageIndex = 1
var ecaImageIndex = 1
var eniImageIndex = 1

const craArray = ['./ressources/personnages/cra/cra1.png','./ressources/personnages/cra/cra2.png','./ressources/personnages/cra/cra3.png','./ressources/personnages/cra/cra4.png','./ressources/personnages/cra/cra5.png','./ressources/personnages/cra/cra6.png','./ressources/personnages/cra/cra7.png','./ressources/personnages/cra/cra8.png']

const ecaArray = ['./ressources/personnages/eca/eca1.png','./ressources/personnages/eca/eca2.png','./ressources/personnages/eca/eca3.png','./ressources/personnages/eca/eca4.png','./ressources/personnages/eca/eca5.png','./ressources/personnages/eca/eca6.png','./ressources/personnages/eca/eca7.png','./ressources/personnages/eca/eca8.png']

const eniArray = ['./ressources/personnages/eni/eni1.png','./ressources/personnages/eni/eni2.png','./ressources/personnages/eni/eni3.png','./ressources/personnages/eni/eni4.png','./ressources/personnages/eni/eni5.png','./ressources/personnages/eni/eni6.png','./ressources/personnages/eni/eni7.png','./ressources/personnages/eni/eni8.png']


// fleche.addEventListener("click", function(){
//     avatar.src= craArray[craImageIndex];
//     craImageIndex = (craImageIndex + 1)
//     if (craImageIndex == 8){
//         craImageIndex = 0
//     } else {
//         console.log("nothing")
//     }
// })




cra.addEventListener("click", function() {
    body.className = "fondcra"
    titre.innerHTML = "CRÂ"
    description.className = "descricra"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Crâs sont des archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennées dans le moindre orifice laissé sans surveillance, ils ne laissent aucun répit à leurs adversaires !"
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/cra/cra1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= craArray[craImageIndex];
        craImageIndex = (craImageIndex + 1)
        if (craImageIndex == 8){
            craImageIndex = 0 + 1
        } else {
            
        }
    })
})


eca.addEventListener("click", function() {
    body.className = "fondeca"
    titre.innerHTML = "ECAFLIP"
    description.className = "descrieca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Ecaflips sont des guerriers joueurs qui se fourrent dans les endroits où l'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau parie sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu'à risquer sa vie sur un jet de dés pour tenter de remporter la mise... "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/eca/eca1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= ecaArray[ecaImageIndex];
        ecaImageIndex = (ecaImageIndex + 1)
        if (ecaImageIndex == 8){
            ecaImageIndex = 0
        } else {
            
        }
    })
    
    
    
})

eni.addEventListener("click", function() {
    body.className = "fondeni"
    titre.innerHTML = "ENIRIPSA"
    description.className = "descrieni"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Eniripsas sont des guérisseurs qui soignent d'un simple mot. Ils utilisent le pouvoir de la parole pour soulager les souffrances de leurs alliés, mais parfois aussi pour blesser leurs ennemis. Certains Eniripsas sont même devenus de véritables arpenteurs du verbe, des rôdeurs des langues oubliées. "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/eni/eni1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
    avatar.src= eniArray[eniImageIndex];
    eniImageIndex = (eniImageIndex + 1)
    if (eniImageIndex == 8){
        eniImageIndex = 0
    } else {
        
    }
})
})

enu.addEventListener("click", function() {
    body.className = "fondenu"
    titre.innerHTML = "ENUTROF"
    description.className = "descrienu"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Enutrofs sont des chasseurs de trésor avides de kamas, qui malgré leur grand âge courent comme des dragodindes à la vue d'un coffre bien rempli. Ils sont experts dans l'art de ralentir leurs ennemis : ils peuvent ainsi les harceler avant de les assommer à grands coups de pelle le moment venu ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/enu/enu1.png'
    fleche.src = "./ressources/fleche.png"
})

feca.addEventListener("click", function() {
    body.className = "fondfeca"
    titre.innerHTML = "FÉCA"
    description.className = "descrifeca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = " Les Fécas sont de loyaux protecteurs toujours sur la défensive. Ils sont appréciés dans les groupes d'aventuriers pour leurs armures élémentaires et leur capacité à encaisser les coups durs. Ils sont également maîtres dans l'art des signes magiques : quand il va y avoir du grabuge, les Fécas sortent leurs glyphes ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/feca/feca1.png'
    fleche.src = "./ressources/fleche.png"
})

iop.addEventListener("click", function() {
    body.className = "fondiop"
    titre.innerHTML = "IOP"
    description.className = "descriiop"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est sûre : les Iops savent faire parler les armes. D'ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l'extrême, capables du meilleur... comme du pire ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/iop/iop1.png'
    fleche.src = "./ressources/fleche.png"
})

sadi.addEventListener("click", function() {
    body.className = "fondsadi"
    titre.innerHTML = "SADIDA"
    description.className = "descrisadi"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Sadidas sont des invocateurs qui empoisonnent la vie de leurs ennemis ! Apprivoiser les ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom. "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/sadi/sadi1.png'
    fleche.src = "./ressources/fleche.png"
})






