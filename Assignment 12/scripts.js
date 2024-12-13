document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", loginUser);
    }
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", signupUser);
    }
    if (document.getElementById("productList")) {
        loadProducts();
    }
});

function loginUser(event) {
    event.preventDefault();
    // Implement login functionality here
    alert("Login functionality not implemented yet.");
}

function signupUser(event) {
    event.preventDefault();
    // Implement signup functionality here
    alert("Signup functionality not implemented yet.");
}

function loadProducts() {
    fetch('products.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const products = xml.getElementsByTagName("product");
            const productList = document.getElementById("productList");

            for (let i = 0; i < products.length; i++) {
                const name = products[i].getElementsByTagName("name")[0].textContent;
                const price = products[i].getElementsByTagName("price")[0].textContent;
                const description = products[i].getElementsByTagName("description")[0].textContent;
                const image = products[i].getElementsByTagName("image")[0].textContent;

                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <h3>${name}</h3>
                    <img src="${image}" alt="${name}" width="200">
                    <p>Price: ₹${price}</p>
                    <p>${description}</p>
                `;
                productList.appendChild(productDiv);
            }
        })
        .catch(error => console.log('Error loading products:', error));
}
