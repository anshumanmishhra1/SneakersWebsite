const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./imgages/air.png",
            },
            {
                code: "darkblue",
                img: "./imgages/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./imgages/jordan.png",
            },
            {
                code: "green",
                img: "./imgages/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./imgages/blazer.png",
            },
            {
                code: "green",
                img: "./imgages/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./imgages/crater.png",
            },
            {
                code: "lightgray",
                img: "./imgages/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./imgages/hippie.png",
            },
            {
                code: "black",
                img: "./imgages/hippie2.png",
            },
        ],
    },
];

let chosenProduct = products[0];
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductImg = document.querySelectorAll(".productImg");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //current slide ko change krr rahe hai yaha prr hm
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //chosen product ko change krr rahe hai hm
        chosenProduct = products[index];

        //current product k text ko change kro bacche
        currentProductTitle.textContent= chosenProduct.title;
        currentProductPrice.textContent= `₹${chosenProduct.price}`;
        currentProductImg.src= chosenProduct.colors[0].img;

        //shoe k har color ko change krne k liye maine function banaya hai yaha
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size =>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


/*📌Profile section js */

const profileIcon = document.querySelector(".profile-js");
    profileIcon.addEventListener("click",()=>{
    window.location.href="profile.html"
});
