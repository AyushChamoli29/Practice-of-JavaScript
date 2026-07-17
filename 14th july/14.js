// Here starts the code
async function fetching_data(){
    const data1= await fetch('https://fakestoreapi.com/products');
    const data2=await data1.json();
    const content=document.querySelector("#content");
    for (const item of data2) {
    const card=document.createElement('div');
    card.classList.add('card');
    const image_box=document.createElement('div');
    const data_box=document.createElement('div');
    const img=document.createElement('img');
    img.src=item.image;
    img.style.height='100px';
    const title=document.createElement('h2');
    title.textContent=item.title;
    const price=document.createElement('p');
    price.textContent=`Price : ${item.price}`;
    const category=document.createElement('p');
    category.textContent=`Category : ${item.category}`;
    const rating=document.createElement('p');
    rating.textContent=`Rating : ${item.rating.rate}`;
    card.dataset.id=item.id;
    card.dataset.category=item.category;
    card.dataset.title=item.title;
    card.dataset.price=item.price;
    card.dataset.rating=item.rating.rate;
    card.dataset.description=item.description;
    card.dataset.image=item.image;
    image_box.append(img);
    image_box.style.display='flex';
    image_box.style.justifyContent='center';
    card.append(image_box);
    const cart=document.createElement('button');
    cart.textContent="ADD TO CART";
    cart.id="cartButton";
    card.append(cart);
    data_box.append(title,price,category,rating);
    card.append(data_box);
    content.append(card);
    cart.addEventListener("click",(e)=>{
    e.stopPropagation();
    addToCart(card);
})
}
function addToCart(product){
    const cart=JSON.parse(localStorage.getItem('cart'))||[];
    const existingProduct=cart.find(item=>(
        item.id===product.dataset.id
    ))
    if(existingProduct){
        existingProduct.quantity++;
    }
    else{
        cart.push({
            id:product.dataset.id,
            image:product.dataset.image,
            title:product.dataset.title,
            price:product.dataset.price,
            quantity:1
        })
    }
    localStorage.setItem("cart",JSON.stringify(cart));
}

filterfull(data2);
const filter=document.querySelector('#filter');
let cards=document.querySelectorAll("#content .card");
const array=Array.from(cards);
const search=document.querySelector("#search");
function find(){
    const searchedText=search.value.toLowerCase();
    const filterApplied=filter.value.toLowerCase();
    for(const item of cards){
        if((item.dataset.category===filterApplied||filterApplied==="all categories")&&(item.dataset.title.toLowerCase().includes(searchedText))){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    }
}
filter.addEventListener("change",find);
search.addEventListener("input",find);


const sort=document.querySelector("#sort");
let sortArray=[...array];
sort.addEventListener('change',()=>{
    if(sort.value==="PRICE HIGH TO LOW"){
        sortArray.sort((a,b)=>b.dataset.price-a.dataset.price)
    }
    else if(sort.value==="PRICE LOW TO HIGH"){
        sortArray.sort((a,b)=>a.dataset.price-b.dataset.price)
    }
    else if(sort.value==="RATING HIGH TO LOW"){
        sortArray.sort((a,b)=>b.dataset.rating-a.dataset.rating)
    }
    else if(sort.value==="RATING LOW TO HIGH"){
        sortArray.sort((a,b)=>a.dataset.rating-b.dataset.rating)
    }
    else if(sort.value==="DEFAULT"){
        sortArray=[...array];
    }
    content.innerHTML="";
    for (const element of sortArray) {
    content.append(element);
}
})
const modal=document.querySelector("#modal");
const modalContent=document.querySelector("#modalContent");
const close=document.querySelector("#close");
close.style.height='50px';
close.style.width='50px';
close.addEventListener("click",()=>{
    modalContent.innerHTML="";
    modal.style.display="none";
})
sortArray.forEach(element => {
    element.addEventListener("click",()=>{
    modalContent.innerHTML="";
    const image=document.createElement('img');
    image.src=element.dataset.image;
    image.style.height='200px';
    const title=document.createElement('h3');
    title.textContent=`Title : ${element.dataset.title}`;
    const description=document.createElement('p');
    description.textContent=`Description : ${element.dataset.description}`;
    const price=document.createElement('p');
    price.textContent=`Price : ${element.dataset.price}`;
    const rating=document.createElement('p');
    rating.textContent=`Rating : ${element.dataset.rating}`;
    modalContent.append(image,title,description,price,rating,close);
    modal.style.display='flex';
});
})
}

function filterfull(data){
    const dropdown=document.querySelector("#filter");
    let categories=new Set();
    for (const item of data) {
        categories.add(item.category);
    }
    for (const element of categories) {
        const option=document.createElement('option');
        option.value=element;
        option.textContent=element;
        dropdown.append(option);
    }
}

fetching_data();

const cartButton=document.getElementById("cartButton");
cartButton.addEventListener("click",()=>{
    window.location.href="./cart.html";
})