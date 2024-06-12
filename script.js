
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