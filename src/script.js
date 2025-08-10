const products =[
    {
        image : "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",
        id : "1234",
        price : 100,
        name : "Product 1",
        description : "This is a great product that you will love.",
        category : "clothing",
        rating : 4.5,
        stock : 50,
        brand : "Brand A",
        discount : 10,
        color : "red",
        size : [
            "XSM","SM","M","L","XL"
        ],
        material : "cotton",
        images : [
            "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",  
            "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
            "https://i.pinimg.com/736x/3f/5b/65/3f5b65e46882990a40074fa34ca0452e.jpg"]
            
    },
    {
        image : "https://i.pinimg.com/1200x/00/af/b6/00afb634594f0389741ba0714e14f608.jpg",
        id : "1234",
        price : 100,
        name : "Product 2",
        description : "This is a great product that you will love.",
        category : "clothing",
        rating : 4.5,
        stock : 50,
        brand : "Brand A",
        discount : 10,
        color : "red",
        size : [
            "XSM","SM","M","L","XL"
        ],
        material : "cotton",
        images : [
            "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",  
            "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
            "https://i.pinimg.com/736x/3f/5b/65/3f5b65e46882990a40074fa34ca0452e.jpg"]
            
    },
    {
        image : "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
        id : "1234",
        price : 100,
        name : "Product 3",
        description : "This is a great product that you will love.",
        category : "clothing",
        rating : 4.5,
        stock : 50,
        brand : "Brand A",
        discount : 10,
        color : "red",
        size : [
            "XSM","SM","M","L","XL"
        ],
        material : "cotton",
        images : [
            "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",  
            "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
            "https://i.pinimg.com/736x/3f/5b/65/3f5b65e46882990a40074fa34ca0452e.jpg"]
            
    },
    {
        image : "https://i.pinimg.com/736x/8a/41/c8/8a41c8f7d5b68c9563d9f5f879d6bd98.jpg",
        id : "1234",
        price : 100,
        name : "Product 4",
        description : "This is a great product that you will love.",
        category : "clothing",
        rating : 4.5,
        stock : 50,
        brand : "Brand A",
        discount : 10,
        color : "red",
        size : [
            "XSM","SM","M","L","XL"
        ],
        material : "cotton",
        images : [
            "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",  
            "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
            "https://i.pinimg.com/736x/3f/5b/65/3f5b65e46882990a40074fa34ca0452e.jpg"]
            
    },
    {
        image : "https://i.pinimg.com/1200x/67/c1/64/67c164966e8260fa31a2abe8d10db3d1.jpg",
        id : "1234",
        price : 100,
        name : "Product 5",
        description : "This is a great product that you will love.",
        category : "clothing",
        rating : 4.5,
        stock : 50,
        brand : "Brand A",
        discount : 10,
        color : "red",
        size : [
            "XSM","SM","M","L","XL"
        ],
        material : "cotton",
        images : [
            "https://i.pinimg.com/736x/71/9b/b1/719bb1cd7923ca259c7d7abac2602e55.jpg",  
            "https://i.pinimg.com/736x/1d/56/9a/1d569a37b31105d2961d29b32fc56c74.jpg",
            "https://i.pinimg.com/736x/3f/5b/65/3f5b65e46882990a40074fa34ca0452e.jpg"]
            
    },
    {
        image:"https://i.pinimg.com/736x/0b/37/7e/0b377e13ec172f28136460f422213276.jpg"
    },
    {
        image:"https://i.pinimg.com/1200x/b2/f3/df/b2f3dfc31b9cf4b357bcd33bace04a22.jpg"
    },
    {
        image:"https://i.pinimg.com/736x/64/d0/9d/64d09da6e29d52387ccf3b57b2dca207.jpg"
    },
    {image:"https://i.pinimg.com/736x/b4/7f/5b/b47f5b9ab40907b1d3678860bd46a737.jpg"},
    {image:"https://i.pinimg.com/736x/56/6c/2e/566c2eeb51ea766598fccc604ead2da0.jpg"},
    {image:"https://i.pinimg.com/736x/d4/2d/bb/d42dbbf11033dfd72c3934dbb5905c36.jpg"},
];
function renderProduct(product){
    console.log('normal');

}
function generateImg(productElement,product){
        let productItem = document.createElement('div');
        productElement.appendChild(productItem)
        let img = document.createElement('img');
        img.src=`${product.image}`;
        img.classList.add('h-auto');
        img.classList.add('max-w-full');
        img.classList.add('rounded-lg');
        productItem.appendChild(img);

        productItem.addEventListener('click', ()=>{
        let popUp = document.querySelector('.popup');
        popUp.style.display = 'block';
        let img = document.createElement('img');
        img.classList.add('w-full');
        img.src=`${product.image}`;
        popUp.appendChild(img);

        // onclicking the image view
        popUp.addEventListener('click',()=>{
        popUp.style.display = 'none';
        popUp.innerHTML = '';})
    })
    }



let productIndex= 0;
products.forEach(product =>{
    
    let productElement = document.querySelector('.product-cont');
    let productElement2 = document.querySelector('.product-cont2');
    
    generateImg(productElement,product);
    generateImg(productElement2,product)
    // img.classList.add('products');

    // onclicking the image
    


    });

