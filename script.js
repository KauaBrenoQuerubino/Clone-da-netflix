
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
const SoNaNetflixCatalogo3 = document.querySelector(".SoNaNetflixCatalogo3");
const NewStorysCatalogo = document.querySelector(".NewStorysCatalogo");
const NewStorysCatalogo2 = document.querySelector(".NewStorysCatalogo2");
const NewStorysCatalogo3 = document.querySelector(".NewStorysCatalogo3");
const ProducoesDeHollywoodCatalogo = document.querySelector(".ProducoesDeHollywoodCatalogo");
const ProducoesDeHollywoodCatalogo2 = document.querySelector(".ProducoesDeHollywoodCatalogo2");
const ProducoesDeHollywoodCatalogo3 = document.querySelector(".ProducoesDeHollywoodCatalogo3");



const top5 = document.querySelector(".top5");
const top10 = document.querySelector(".top10");
const Retroceder = document.querySelector(".retroceder")
const avancar = document.querySelector(".avancar")
const Retroceder2 = document.querySelector(".retroceder2")
const avancar2 = document.querySelector(".avancar2")
const Retroceder3 = document.querySelector(".retroceder3")
const avancar3 = document.querySelector(".avancar3")
const Retroceder4 = document.querySelector(".retroceder4")
const avancar4 = document.querySelector(".avancar4")


SoNaNetflixCatalogo.addEventListener('mouseenter',() => {

    Retroceder.style.visibility = "visible";
    avancar.style.visibility = "visible";
    
} )


SoNaNetflixCatalogo2.addEventListener('mouseenter',() => {

    Retroceder.style.visibility = "visible";
    avancar.style.visibility = "visible";
    
} )


SoNaNetflixCatalogo3.addEventListener('mouseenter',() => {

    Retroceder2.style.visibility = "visible";
    avancar2.style.visibility = "visible";
} )

NewStorysCatalogo.addEventListener('mouseenter',() => {

    Retroceder2.style.visibility = "visible";
    avancar2.style.visibility = "visible";
    
} )


NewStorysCatalogo2.addEventListener('mouseenter',() => {

    Retroceder2.style.visibility = "visible";
    avancar2.style.visibility = "visible";
    
} )


NewStorysCatalogo3.addEventListener('mouseenter',() => {

    Retroceder.style.visibility = "visible";
    avancar.style.visibility = "visible";
    
} )


let contagem = 0

avancar.addEventListener('click', () => {
     if(contagem == 0){
        SoNaNetflixCatalogo.style.left = "-1300px"
        SoNaNetflixCatalogo2.style.left = "0"
        SoNaNetflixCatalogo3.style.left = "1300px"
        SoNaNetflixCatalogo2.style.visibility = "visible"
        SoNaNetflixCatalogo.style.visibility = "hidden"
        contagem = 1
     } 
     else if(contagem == 1){
        SoNaNetflixCatalogo3.style.visibility = "visible"
        SoNaNetflixCatalogo2.style.left = "-1300px"
        SoNaNetflixCatalogo3.style.left = "0"
        SoNaNetflixCatalogo.style.left = "1300px"
        SoNaNetflixCatalogo2.style.visibility = "hidden"
        contagem++
     } 
     else{
        SoNaNetflixCatalogo.style.visibility = "visible"
        SoNaNetflixCatalogo.style.left = "0"
        SoNaNetflixCatalogo3.style.left = "-1300px"
        SoNaNetflixCatalogo2.style.left = "1300px"
        SoNaNetflixCatalogo3.style.visibility = "hidden"
        contagem = 0
     }
        
})


Retroceder.addEventListener('click', () => {
    if(contagem == 0){
        SoNaNetflixCatalogo.style.visibility = "hidden"
        SoNaNetflixCatalogo.style.left = "1300px"
        SoNaNetflixCatalogo3.style.left = "0"
        SoNaNetflixCatalogo2.style.left = "-1300px"
        SoNaNetflixCatalogo3.style.visibility = "visible"
        SoNaNetflixCatalogo.style.visibility = "hidden"
        contagem++
     } 
     else if(contagem == 1){
        SoNaNetflixCatalogo3.style.visibility = "hidden"
        SoNaNetflixCatalogo2.style.visibility = "visible"
        SoNaNetflixCatalogo3.style.left = "1300px"
        SoNaNetflixCatalogo2.style.left = "0"
        SoNaNetflixCatalogo.style.left = "-1300px"
        SoNaNetflixCatalogo2.style.visibility = "visible"
       
        contagem++
     } 
     else{
        
        SoNaNetflixCatalogo.style.visibility = "visible"
        SoNaNetflixCatalogo.style.left = "0"
        SoNaNetflixCatalogo3.style.left = "-1300px"
        SoNaNetflixCatalogo2.style.left = "1300px"
        SoNaNetflixCatalogo2.style.visibility = "hidden"
        SoNaNetflixCatalogo3.style.visibility = "hidden"
        
        contagem = 0
     }

})

let contagem2 = 0

avancar2.addEventListener('click', () => {
    if(contagem2 == 0){
        NewStorysCatalogo.style.left = "-1300px"
        NewStorysCatalogo2.style.left = "0"
        NewStorysCatalogo3.style.left = "1300px"
        NewStorysCatalogo2.style.visibility = "visible"
        NewStorysCatalogo.style.visibility = "hidden"
        contagem2++ 
    } 
    else if(contagem2  == 1){
        NewStorysCatalogo3.style.visibility = "visible"
        NewStorysCatalogo2.style.left = "-1300px"
        NewStorysCatalogo3.style.left = "0"
        NewStorysCatalogo.style.left = "1300px"
        NewStorysCatalogo2.style.visibility = "hidden"
        contagem2++
    } 
    else{
        NewStorysCatalogo.style.visibility = "visible"
        NewStorysCatalogo.style.left = "0"
        NewStorysCatalogo3.style.left = "-1300px"
        NewStorysCatalogo2.style.left = "1300px"
        NewStorysCatalogo3.style.visibility = "hidden"
       contagem2 = 0
    }
       
})


Retroceder2.addEventListener('click', () => {
   if(contagem2 == 0){
       NewStorysCatalogo.style.visibility = "hidden"
       NewStorysCatalogo.style.left = "1300px"
       NewStorysCatalogo3.style.left = "0"
       NewStorysCatalogo2.style.left = "-1300px"
       NewStorysCatalogo3.style.visibility = "visible"
       NewStorysCatalogo.style.visibility = "hidden"
       contagem2++
    } 
    else if(contagem2 == 1){
        NewStorysCatalogo3.style.visibility = "hidden"
        NewStorysCatalogo2.style.visibility = "visible"
        NewStorysCatalogo3.style.left = "1300px"
        NewStorysCatalogo2.style.left = "0"
        NewStorysCatalogo.style.left = "-1300px"
        NewStorysCatalogo2.style.visibility = "visible"
       
        contagem2++
      
       
    } 
    else{
       
        NewStorysCatalogo.style.visibility = "visible"
        NewStorysCatalogo.style.left = "0"
        NewStorysCatalogo3.style.left = "-1300px"
        NewStorysCatalogo2.style.left = "1300px"
        NewStorysCatalogo2.style.visibility = "hidden"
        NewStorysCatalogo3.style.visibility = "hidden"
       
       contagem2 = 0
    }

})


avancar3.addEventListener('click', () => {
        top10.style.visibility = "visible"
        top5.style.visibility = "hidden"
        top5.style.left = "-1300px"
        top10.style.left = "0"
        avancar3.style.visibility = "hidden"
        Retroceder3.style.visibility = "visible"
        top++ 
})

Retroceder3.addEventListener('click', () => {
    top5.style.visibility = "visible"
    top10.style.visibility = "hidden"
    top5.style.left = "0"
    top10.style.left = "1300px"
    avancar3.style.visibility = "visible"
    Retroceder3.style.visibility = "hidden"
    top++ 
})

let contagem3 = 0

avancar4.addEventListener('click', () => {
    if(contagem3 == 0){
        ProducoesDeHollywoodCatalogo.style.left = "-1300px"
        ProducoesDeHollywoodCatalogo2.style.left = "0"
        ProducoesDeHollywoodCatalogo3.style.left = "1300px"
        ProducoesDeHollywoodCatalogo2.style.visibility = "visible"
        ProducoesDeHollywoodCatalogo.style.visibility = "hidden"
        contagem3++ 
    } 
    else if(contagem3  == 1){
        ProducoesDeHollywoodCatalogo3.style.visibility = "visible"
        ProducoesDeHollywoodCatalogo2.style.left = "-1300px"
        ProducoesDeHollywoodCatalogo3.style.left = "0"
        ProducoesDeHollywoodCatalogo.style.left = "1300px"
        ProducoesDeHollywoodCatalogo2.style.visibility = "hidden"
        contagem3++
    } 
    else{
        ProducoesDeHollywoodCatalogo.style.visibility = "visible"
        ProducoesDeHollywoodCatalogo.style.left = "0"
        ProducoesDeHollywoodCatalogo3.style.left = "-1300px"
        ProducoesDeHollywoodCatalogo2.style.left = "1300px"
        ProducoesDeHollywoodCatalogo3.style.visibility = "hidden"
       contagem3 = 0
    }
       
})


Retroceder4.addEventListener('click', () => {
   if(contagem3 == 0){
    ProducoesDeHollywoodCatalogo.style.visibility = "hidden"
    ProducoesDeHollywoodCatalogo.style.left = "1300px"
    ProducoesDeHollywoodCatalogo3.style.left = "0"
    ProducoesDeHollywoodCatalogo2.style.left = "-1300px"
    ProducoesDeHollywoodCatalogo3.style.visibility = "visible"
    ProducoesDeHollywoodCatalogo.style.visibility = "hidden"
       contagem3++
    } 
    else if(contagem3 == 1){
        ProducoesDeHollywoodCatalogo3.style.visibility = "hidden"
        ProducoesDeHollywoodCatalogo2.style.visibility = "visible"
        ProducoesDeHollywoodCatalogo3.style.left = "1300px"
        ProducoesDeHollywoodCatalogo2.style.left = "0"
        ProducoesDeHollywoodCatalogo.style.left = "-1300px"
        ProducoesDeHollywoodCatalogo2.style.visibility = "visible"
       
        contagem3++
      
       
    } 
    else{
        ProducoesDeHollywoodCatalogo.style.visibility = "visible"
        ProducoesDeHollywoodCatalogo.style.left = "0"
        ProducoesDeHollywoodCatalogo3.style.left = "-1300px"
        ProducoesDeHollywoodCatalogo2.style.left = "1300px"
        ProducoesDeHollywoodCatalogo2.style.visibility = "hidden"
        ProducoesDeHollywoodCatalogo3.style.visibility = "hidden"
       
       contagem3 = 0
    }

})
