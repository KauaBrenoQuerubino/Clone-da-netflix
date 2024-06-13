
const header = document.querySelector(".cabecalho")
let lastScrollTop = 0;

window.addEventListener('scroll', () =>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0){
        header.style.background = "linear-gradient(to top, #43434300, #000)"
            
    } else {
        
        header.style.backgroundColor = "#0f0f0f";    
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
})


const SoNaNetflixCatalogo = document.querySelector(".SoNaNetflixCatalogo");
const SoNaNetflixCatalogo2 = document.querySelector(".SoNaNetflixCatalogo2");
const Retroceder = document.querySelector(".retroceder")
const avancar = document.querySelector(".avancar")
const Retroceder2 = document.querySelector(".retroceder2")
const avancar2 = document.querySelector(".avancar2")


SoNaNetflixCatalogo.addEventListener('mouseenter',() => {

    Retroceder.style.visibility = "visible";
    avancar.style.visibility = "visible";
    
} )
SoNaNetflixCatalogo.addEventListener('mouseleave', () =>{
    Retroceder.style.visibility = "hidden";
    avancar.style.visibility = "hidden";
})

SoNaNetflixCatalogo2.addEventListener('mouseenter',() => {

    Retroceder2.style.visibility = "visible";
    avancar2.style.visibility = "visible";
    
} )
SoNaNetflixCatalogo2.addEventListener('mouseleave', () =>{
    Retroceder2.style.visibility = "hidden";
    avancar2.style.visibility = "hidden";
})

let contagem = 0

avancar.addEventListener('click', () => {
        
        SoNaNetflixCatalogo2.style.left = "1300px"
        SoNaNetflixCatalogo.style.left = "-1300px"
        SoNaNetflixCatalogo.style.visibility = "hidden"
        SoNaNetflixCatalogo2.style.visibility = "visible"
        SoNaNetflixCatalogo2.style.left = "0"
        contagem++
        
})
avancar2.addEventListener('click', () => {
        SoNaNetflixCatalogo.style.left = "1300px"
        SoNaNetflixCatalogo2.style.left = "-1300px"
        SoNaNetflixCatalogo2.style.visibility = "hidden"
        SoNaNetflixCatalogo.style.visibility = "visible"
        SoNaNetflixCatalogo.style.left = "0"
        contagem++
    
})

Retroceder.addEventListener('click', () => {
    SoNaNetflixCatalogo2.style.left = "-1300"
    SoNaNetflixCatalogo.style.left = "1300"
    SoNaNetflixCatalogo.style.visibility = "hidden"
    SoNaNetflixCatalogo2.style.visibility = "visible"
    SoNaNetflixCatalogo2.style.left = "0"
    contagem++

})
Retroceder2.addEventListener('click', () => {
    SoNaNetflixCatalogo.style.left = "1300"
    SoNaNetflixCatalogo2.style.left = "-1300px"
    SoNaNetflixCatalogo2.style.visibility = "hidden"
    SoNaNetflixCatalogo.style.visibility = "visible"
    SoNaNetflixCatalogo.style.left = "0"
    contagem++

})


