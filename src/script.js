import { products1 } from '../js-product/grid1.js';
import { product2 } from '../js-product/grid2.js';
import { product3 } from '../js-product/grid3.js';
import { product4 } from '../js-product/grid4.js';
import { product5 } from '../js-product/grid5.js';
import { products6 } from '../js-product/grid6.js'; 


let grid1 = document.querySelector('.product-cont');
let grid2 = document.querySelector('.product-cont2');
let grid3 = document.querySelector('.product-cont3');
let grid4 = document.querySelector('.product-cont4');
let grid5 = document.querySelector('.product-cont5');
let grid6 = document.querySelector('.product-cont6');

gridLayout(products1 , grid1);
gridLayout(product2, grid2);
gridLayout(product3, grid3);
gridLayout(product4, grid4);
gridLayout(product5, grid5);
gridLayout(products6, grid6);


function gridLayout(products , grid){
    products.forEach(product =>{
    generateImg(grid, product);
})
}
// clicking the logo to show the nav bar
let clicked = false;
if(clicked === false){
    let logo = document.querySelector('.Logo');
    logo.addEventListener('click', () => {
        let nav = document.querySelector('nav');
        if(nav.style.display === 'flex'){
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
}


function generateImg(item, product) {
    let productItem = document.createElement('div');
    item.appendChild(productItem);
    let img = document.createElement('img');
    img.src = `${product.image}`;
    img.classList.add('h-auto');
    img.classList.add('max-w-full');
    img.classList.add('rounded-lg');
    productItem.appendChild(img);

    // creating the popUp
    productItem.addEventListener('click', () => {
        let popUp = document.querySelector('.popup');
        // let popDiv = document.createElement('div');
        popUp.style.display = 'flex';
        let img = document.createElement('img');
        img.classList.add('h-full');
        img.classList.add('w-full');
        img.classList.add('object-cover');
        img.src = `${product.image}`;
        let imageCont= document.querySelector('.img-cont')
        imageCont.appendChild(img);
        // popUp.appendChild(popDiv);
        let productName = document.querySelector('.style-name');
        productName.innerText = product.name;
        let description = document.querySelector('.description');
        description.innerText = product.description;

        // on clicking the image view
        popUp.addEventListener('click', () => {
        popUp.style.display = 'none';
        imageCont.innerHTML = '';
        description.innerText = '';
        });
        // down button section\
        // let downBtnCont = document.createElement('div');
        // let downBtn = document.createElement('button');
        // downBtnCont.appendChild(downBtn);
        // popDiv.appendChild(downBtnCont);
        // downBtn.classList.add('btn');
        // downBtn.classList.add('bg-blue-500');
        // downBtn.classList.add('text-white');
        // downBtn.classList.add('px-4');
        // downBtn.classList.add('py-2');
        // downBtn.classList.add('rounded');
        // downBtn.classList.add('mt-4');
        // downBtn.classList.add('hover:bg-blue-600');

        // downBtn.innerText = 'Download';

    
    
});
}

// export function imageGallery(){
//     let productElement = document.querySelector('.product-cont');
// product.forEach((item) => {
    
// });

