// alert("hi")

const sunBtn =document.querySelector('#sun');
const moonBtn =document.querySelector('#moon');
// const body= document.querySelector('body');
const linkId= document.querySelector('#dark');

moonBtn.onclick = ()=>{
    // body.classList.toggle('theme');
    linkId.href = "css/darkmode.css"
    moonBtn.style.display = "none";
    sunBtn.style.display = "block";

    // alert(this)
};

sunBtn.onclick = ()=>{
    // body.classList.toggle('theme');
    linkId.href = "css/light.css"
    sunBtn.style.display = "none";
    moonBtn.style.display = "block";

    // alert(this)
};
 