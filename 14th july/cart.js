const cart=JSON.parse(localStorage.getItem("cart"))||[];
let totalBill=0;
const cartContainer=document.getElementById('cartContent');
cart.forEach((element,index) => {
    const card=document.createElement('div');
    const image=document.createElement('img');
    const title=document.createElement('h3');
    const price=document.createElement('p');
    const quantity=document.createElement('p');
    const upButton=document.createElement('button');
    upButton.textContent="+";
    upButton.style.width='20px';
    const downButton=document.createElement('button');
    downButton.textContent="-";
    downButton.style.width='20px';
    const totalPrice=document.createElement('p');
    const remove=document.createElement('button');
    remove.textContent="Remove";
    remove.style.height="30px"
    remove.style.padding='5px';
    remove.addEventListener("click",()=>{
        cart.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
    })
    upButton.addEventListener('click',()=>{
        element.quantity++;
        localStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
    });
    downButton.addEventListener('click',()=>{
        if(element.quantity>=1){
        element.quantity--;
        localStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
        }
    });
    if(element.quantity==0){
        cart.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
    }
    card.classList.add('cartCard');
    image.src=element.image;
    image.style.height='100px';
    title.textContent=element.title;
    price.textContent=`Price : ${element.price}`;
    quantity.textContent=`Quantity : ${element.quantity}`;
    quantity.append(" ",upButton," ",downButton);
    totalPrice.textContent=`Total price of this item is ${Number(element.price)*Number(element.quantity)}`;
    card.append(image,title,price,quantity,totalPrice,remove);
    cartContainer.append(card);
    totalBill+=(element.quantity*Number(element.price));
});
const bill=document.querySelector("#billing");
bill.textContent=`Total bill is ${totalBill.toFixed(2)}`;

const backToShopButton=document.getElementById("backToShop");
backToShopButton.addEventListener("click",()=>{
    window.location.href="./14.html";
})