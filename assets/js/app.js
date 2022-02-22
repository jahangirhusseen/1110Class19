let product_list = document.querySelector('.product-list');

fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data =>{

    let products = '';
    data.map(product => {
        products += `
        <div class="col-md-3 my-3">
            <div class="card shadow product-item">
            <img class ="img-fluid" src="${product.image}" alt="">
                <div class="card-body">
                    <h2>${product.title}</h2>
                    <p>Price : $${product.price}</p>
                </div>
            </div>
        </div>
        `;
        
    });

    product_list.innerHTML = products;

});