const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const password=document.getElementById("pass").value;
    const arr=password.split("");
    let flag=0;
    for (const element of arr) {
     if(element>='0'&&element<='9'){
        flag=1
        break;
     }
    }
    if(!flag){
        alert("Password should contain atleast 1 digit");
    }
    else{
        form.submit();
        alert("form is submitted successfully");
    }
});

