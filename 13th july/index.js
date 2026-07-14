async function ayush() {
const data1= await fetch('https://fakestoreapi.com/products');
const data2=await data1.json();
// console.log(data2);
const content=document.querySelector("#content");
for (const item of data2) {
    const card=document.createElement('div');
    card.classList.add('card');
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
    card.dataset.category=item.category;
    card.dataset.title=item.title;
    card.dataset.price=item.price;
    card.dataset.rating=item.rating.rate;
    card.dataset.description=item.description;
    card.dataset.image=item.image;
    card.append(img);
    card.append(title,price,category,rating);
    content.append(card);
}

// TILL HERE WAS CARDS DISPLAY

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

// TILL HERE WAS SEARCH AND FILTER

const sort=document.querySelector("#sort");
sort.addEventListener('change',()=>{
    if(sort.value==="PRICE HIGH TO LOW"){
        array.sort((a,b)=>b.dataset.price-a.dataset.price)
    }
    else if(sort.value==="PRICE LOW TO HIGH"){
        array.sort((a,b)=>a.dataset.price-b.dataset.price)
    }
    else if(sort.value==="RATING HIGH TO LOW"){
        array.sort((a,b)=>b.dataset.rating-a.dataset.rating)
    }
    else if(sort.value==="RATING LOW TO HIGH"){
        array.sort((a,b)=>a.dataset.rating-b.dataset.rating)
    }
    content.innerHTML="";
    for (const element of array) {
    content.append(element);
}
})

// TILL HERE WAS SORTING

const modal=document.querySelector("#modal");
const modalContent=document.querySelector("#modalContent");
const close=document.querySelector("#close");
close.style.height='50px';
close.style.width='50px';
close.addEventListener("click",()=>{
    modalContent.innerHTML="";
    modal.style.display="none";
})
cards.forEach(element => {
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
    modalContent.append(image,title,description,price,rating);
    modal.style.display='flex';
});
})
}

// THIS DOWN IS THE FILTER DROPDOWN FUNCTION

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
ayush();