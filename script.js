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
var enuImageIndex = 1
var fecaImageIndex = 1
var iopImageIndex = 1
var sadiImageIndex = 1


const craArray = ['./ressources/personnages/cra/cra1.png','./ressources/personnages/cra/cra2.png','./ressources/personnages/cra/cra3.png','./ressources/personnages/cra/cra4.png','./ressources/personnages/cra/cra5.png','./ressources/personnages/cra/cra6.png','./ressources/personnages/cra/cra7.png','./ressources/personnages/cra/cra8.png']

const ecaArray = ['./ressources/personnages/eca/eca1.png','./ressources/personnages/eca/eca2.png','./ressources/personnages/eca/eca3.png','./ressources/personnages/eca/eca4.png','./ressources/personnages/eca/eca5.png','./ressources/personnages/eca/eca6.png','./ressources/personnages/eca/eca7.png','./ressources/personnages/eca/eca8.png']

const eniArray = ['./ressources/personnages/eni/eni1.png','./ressources/personnages/eni/eni2.png','./ressources/personnages/eni/eni3.png','./ressources/personnages/eni/eni4.png','./ressources/personnages/eni/eni5.png','./ressources/personnages/eni/eni6.png','./ressources/personnages/eni/eni7.png','./ressources/personnages/eni/eni8.png']

const enuArray = ['./ressources/personnages/enu/enu1.png','./ressources/personnages/enu/enu2.png','./ressources/personnages/enu/enu3.png','./ressources/personnages/enu/enu4.png','./ressources/personnages/enu/enu5.png','./ressources/personnages/enu/enu6.png','./ressources/personnages/enu/enu7.png','./ressources/personnages/enu/enu8.png']

const fecaArray = ['./ressources/personnages/feca/feca1.png','./ressources/personnages/feca/feca2.png','./ressources/personnages/feca/feca3.png','./ressources/personnages/feca/feca4.png','./ressources/personnages/feca/feca5.png','./ressources/personnages/feca/feca6.png','./ressources/personnages/feca/feca7.png','./ressources/personnages/feca/feca8.png']

const iopArray = ['./ressources/personnages/iop/iop1.png','./ressources/personnages/iop/iop2.png','./ressources/personnages/iop/iop3.png','./ressources/personnages/iop/iop4.png','./ressources/personnages/iop/iop5.png','./ressources/personnages/iop/iop6.png','./ressources/personnages/iop/iop7.png','./ressources/personnages/iop/iop8.png']

const sadiArray = ['./ressources/personnages/sadi/sadi1.png','./ressources/personnages/sadi/sadi2.png','./ressources/personnages/sadi/sadi3.png','./ressources/personnages/sadi/sadi4.png','./ressources/personnages/sadi/sadi5.png','./ressources/personnages/sadi/sadi6.png','./ressources/personnages/sadi/sadi7.png','./ressources/personnages/sadi/sadi8.png']


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
    titre.innerHTML = "CR??"
    description.className = "descricra"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Cr??s sont des archers aussi fiers que pr??cis ! Ils font des alli??s pr??cieux contre les adeptes de la m??l??e franche. Restant ?? distance, d??cochant leurs traits empenn??es dans le moindre orifice laiss?? sans surveillance, ils ne laissent aucun r??pit ?? leurs adversaires !"
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/cra/cra1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= craArray[craImageIndex];
        craImageIndex = (craImageIndex + 1)
        if (craImageIndex == 8){
            craImageIndex = 0
        } 
        else {
            
        }
    })
    
})



eca.addEventListener("click", function() {
    body.className = "fondeca"
    titre.innerHTML = "ECAFLIP"
    description.className = "descrieca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Ecaflips sont des guerriers joueurs qui se fourrent dans les endroits o?? l'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau parie sans arr??t, pour tout et pour rien. Mais attention, il prend le jeu tr??s au s??rieux et ira m??me jusqu'?? risquer sa vie sur un jet de d??s pour tenter de remporter la mise... "
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
    fichePerso.innerHTML = "Les Eniripsas sont des gu??risseurs qui soignent d'un simple mot. Ils utilisent le pouvoir de la parole pour soulager les souffrances de leurs alli??s, mais parfois aussi pour blesser leurs ennemis. Certains Eniripsas sont m??me devenus de v??ritables arpenteurs du verbe, des r??deurs des langues oubli??es. "
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
    fichePerso.innerHTML = "Les Enutrofs sont des chasseurs de tr??sor avides de kamas, qui malgr?? leur grand ??ge courent comme des dragodindes ?? la vue d'un coffre bien rempli. Ils sont experts dans l'art de ralentir leurs ennemis : ils peuvent ainsi les harceler avant de les assommer ?? grands coups de pelle le moment venu ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/enu/enu1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= enuArray[enuImageIndex];
        enuImageIndex = (enuImageIndex + 1)
        if (enuImageIndex == 8){
            enuImageIndex = 0
        } else {
            console.log("nothing")
        }
    })
    
})

feca.addEventListener("click", function() {
    body.className = "fondfeca"
    titre.innerHTML = "F??CA"
    description.className = "descrifeca"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = " Les F??cas sont de loyaux protecteurs toujours sur la d??fensive. Ils sont appr??ci??s dans les groupes d'aventuriers pour leurs armures ??l??mentaires et leur capacit?? ?? encaisser les coups durs. Ils sont ??galement ma??tres dans l'art des signes magiques : quand il va y avoir du grabuge, les F??cas sortent leurs glyphes ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/feca/feca1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= fecaArray[fecaImageIndex];
        fecaImageIndex = (fecaImageIndex + 1)
        if (fecaImageIndex == 8){
            fecaImageIndex = 0
        } else {
            console.log("nothing")
        }
    })
    
})

iop.addEventListener("click", function() {
    body.className = "fondiop"
    titre.innerHTML = "IOP"
    description.className = "descriiop"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est s??re : les Iops savent faire parler les armes. D'ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne sant??. Leur temp??rament imp??tueux fait des Iops des paladins de l'extr??me, capables du meilleur... comme du pire ! "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/iop/iop1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= iopArray[iopImageIndex];
        iopImageIndex = (iopImageIndex + 1)
        if (iopImageIndex == 8){
            iopImageIndex = 0
        } else {
            console.log("nothing")
        }
    })
    
})

sadi.addEventListener("click", function() {
    body.className = "fondsadi"
    titre.innerHTML = "SADIDA"
    description.className = "descrisadi"
    accueil.className = "cacher"
    accueil2.className = "cacher"
    fichePerso.innerHTML = "Les Sadidas sont des invocateurs qui empoisonnent la vie de leurs ennemis ! Apprivoiser les ronces pour en faire des armes terrifiantes, confectionner des poup??es de guerre et de soins, voil?? qui satisfait tout disciple Sadida digne de ce nom. "
    fichePerso.classList.add("characterDescription")
    avatar.src = './ressources/personnages/sadi/sadi1.png'
    fleche.src = "./ressources/fleche.png"
    fleche.addEventListener("click", function(){
        avatar.src= sadiArray[sadiImageIndex];
        sadiImageIndex = (sadiImageIndex + 1)
        if (sadiImageIndex == 8){
            sadiImageIndex = 0
        } else {
            console.log("nothing")
        }
    })
    
})






