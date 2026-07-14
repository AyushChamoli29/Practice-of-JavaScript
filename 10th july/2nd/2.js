const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=document.querySelector('input');
    const list=document.querySelector('#list');
    const item=document.createElement('li');
    item.textContent=data.value;
    list.append(item);
    const button=document.createElement('button');
    button.id="delete_button";
    button.textContent="delete";
    button.addEventListener('click',()=>{
        item.remove();
    })
    item.append(button);
    data.value="";
}) 