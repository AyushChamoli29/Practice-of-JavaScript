const search=document.getElementById('search');
const msg=document.getElementById('message');
search.addEventListener('input',()=>{
    const find=search.value.toLowerCase();
    const list=document.getElementById('list').children;
    let found=0;
    for (const item of list) {
        const thing=item.textContent.toLowerCase();
        if(thing.includes(find)){
            item.style.display='list-item';
            found++;
        }
        else{
            item.style.display='none';
        }
    }
    if(found==0){
        msg.style.display='block';
    }
    else{
        msg.style.display='none';
    }
})