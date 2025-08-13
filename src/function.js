export function gridLayout(products , grid){
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

let downloadBtn = document.querySelector('.download-btn');
export function downloadImage(products) {
    downloadBtn.addEventListener('click', () => {
        products.forEach(product => {
            const link = document.createElement('a');
            link.href = product.image;
            link.download = product.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
}
// generating the image in the grid
// and creating the popUp
// and downloading the images



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
        popUp.style.display = 'flex';
        let imageCont = document.querySelector('.img-cont');
        imageCont.innerHTML = '';
        let img = document.createElement('img');
        img.classList.add('h-full', 'w-full', 'object-cover');
        img.src = `${product.image}`;
        imageCont.appendChild(img);

        let productName = document.querySelector('.style-name');
        productName.innerText = product.name;
        let description = document.querySelector('.description');
        description.innerText = product.description;

        // Attach download event each time popup is shown
        let downloadBtn = document.querySelector('.download-btn');
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.href = product.image;
            link.download = product.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        popUp.addEventListener('click', () => {
            popUp.style.display = 'none';
            imageCont.innerHTML = '';
            description.innerText = '';
        });
    });
}