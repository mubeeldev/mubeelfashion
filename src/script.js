import { products1 } from '../js-product/first-grade.js';
import { product2 } from '../js-product/two-grade.js';

let grid1 = document.querySelector('.product-cont');
let grid2 = document.querySelector('.product-cont2');

gridLayout(products1 , grid1);
gridLayout(product2, grid2)

function gridLayout(products , grid){
    products.forEach(product =>{
    generateImg(grid, product);
})
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
        let popDiv = document.createElement('div');
        popUp.style.display = 'block';
        let img = document.createElement('img');
        img.classList.add('h-auto');
        img.classList.add('max-w-full');
        img.classList.add('rounded-lg');
        img.src = `${product.image}`;
        popDiv.appendChild(img);
        popUp.appendChild(popDiv);

        // down button section\
        let downBtnCont = document.createElement('div');
        let downBtn = document.createElement('button');
        downBtnCont.appendChild(downBtn);
        popDiv.appendChild(downBtnCont);
        downBtn.classList.add('btn');
        downBtn.classList.add('bg-blue-500');
        downBtn.classList.add('text-white');
        downBtn.classList.add('px-4');
        downBtn.classList.add('py-2');
        downBtn.classList.add('rounded');
        downBtn.classList.add('mt-4');
        downBtn.classList.add('hover:bg-blue-600');

        downBtn.innerText = 'Download';

    // on clicking the image view
        popUp.addEventListener('click', () => {
        popUp.style.display = 'none';
        popUp.innerHTML = '';
    });
});
}

// export function imageGallery(){
//     let productElement = document.querySelector('.product-cont');
// product.forEach((item) => {
    
// });

