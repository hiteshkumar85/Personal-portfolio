let mode = document.querySelector('.mode');
let body = document.querySelector('body');
mode.onclick = ()=>{
    body.classList.toggle('darkMode');
    if (body.getAttribute('class') == "darkMode"){
        mode.innerHTML = "light mode";
    }
    else{
        mode.innerHTML = "dark mode"
    }
}
