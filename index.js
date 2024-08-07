const products = [];
let editingIndex = -1;

document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const rating = document.getElementById('rating').value;
    const image = document.getElementById('image').value;

    if (editingIndex === -1) {
        products.push({ name, price, description, rating, image });
    } else {
        products[editingIndex] = { name, price, description, rating, image };
        editingIndex = -1;
    }
    this.reset();
    displayProducts();
});

function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
            <p>Rating: ${product.rating}</p>
            <div class="actions">
                <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
                <button class="view-btn" onclick="viewProduct(${index})">View</button>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function editProduct(index) {
    const product = products[index];
    document.getElementById('name').value = product.name;
    document.getElementById('price').value = product.price;
    document.getElementById('description').value = product.description;
    document.getElementById('rating').value = product.rating;
    document.getElementById('image').value = product.image;
    editingIndex = index;
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function viewProduct(index) {
    const product = products[index];
    alert(`Name: ${product.name}\nPrice: $${product.price}\nDescription: ${product.description}\nRating: ${product.rating}\nImage: ${product.image}`);
}

displayProducts();
