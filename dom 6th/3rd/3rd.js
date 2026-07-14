const para=document.getElementById("first");
const button=document.getElementById("second");
let flag=0;
button.addEventListener("click",()=>{
    if(flag==0){
    para.classList.add("boom");
    flag=1;}
    else{
        para.classList.remove("boom");
        flag=0;
    }
})
console.log(para.classList);