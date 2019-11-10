const btn = document.getElementById("butn");
const social_panel= document.querySelector(".social-container");
btn.addEventListener("click",()=>{
    social_panel.classList.toggle('visible');
})