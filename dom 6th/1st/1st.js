const temp=document.querySelectorAll(".card");
const but=document.getElementById("first");
but.addEventListener("click",()=>{
    temp.forEach(element => {
    element.style.backgroundColor="yellow";
});
})
