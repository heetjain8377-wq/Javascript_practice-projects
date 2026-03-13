// -------------------- CUSTOMER PRODUCTS --------------------
async function loadProductsForCustomer() {
    const container = document.getElementById("products");
    if (!container) return;

    try {
        const res = await fetch("http://localhost:8000/get-products");
        const data = await res.json();

        container.innerHTML = ""; 
        data.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="http://localhost:8000/uploads/${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p class="price">Price: ${p.price}</p>
                <button onclick="goToOrder('${p.name}', '${p.price}')">Order Now</button>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error("Error loading products:", err);
    }
}

// -------------------- ADMIN PRODUCTS --------------------
async function loadProductsForAdmin() {
    const container = document.getElementById("products");
    if (!container) return;

    try {
        const res = await fetch("http://localhost:8000/get-products");
        const data = await res.json();

        container.innerHTML = "";
        data.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="http://localhost:8000/uploads/${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p class="price">Price: ${p.price}</p>
                <button onclick="deleteProduct('${p._id}')">Delete</button>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error("Error loading admin products:", err);
    }
}

// -------------------- ADD PRODUCT (ADMIN) --------------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("productForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("name", document.getElementById("name").value);
            formData.append("price", document.getElementById("price").value);
            formData.append("description", document.getElementById("description").value);
            formData.append("image", document.getElementById("image").files[0]);

            await fetch("http://localhost:8000/add-product", {
                method: "POST",
                body: formData
            });

            alert("Product Added Successfully");
            form.reset();
            loadProductsForAdmin();
        });
    }

    if (document.getElementById("orders")) loadOrders();
    if (document.getElementById("products") && window.location.href.includes("admin.html")) loadProductsForAdmin();
    if (document.getElementById("products") && !window.location.href.includes("admin.html")) loadProductsForCustomer();
});

// -------------------- DELETE PRODUCT --------------------
async function deleteProduct(id) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    await fetch(`http://localhost:8000/delete-product/${id}`, { method: "DELETE" });
    alert("Product Deleted Successfully");
    loadProductsForAdmin();
}

// -------------------- PLACE ORDER --------------------
function goToOrder(product, price) {
    localStorage.setItem("selectedproduct", product);
    localStorage.setItem("selectedprice", price);
    window.location.href = "contact.html";
}

function populateOrderFields() {
    const product = localStorage.getItem("selectedproduct");
    const price = localStorage.getItem("selectedprice");
    if (product) document.getElementById("product").value = product;
    if (price) document.getElementById("price").value = price;
}

window.onload = populateOrderFields;

async function placeOrder() {
    const name = document.getElementById("customer").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;

    if (!name || !phone || !address || !product) return alert("Please fill all fields");

    await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address, product, price })
    });

    alert("Order Placed Successfully");
    window.location.href = "index.html";
}

// -------------------- ORDERS MANAGEMENT --------------------
async function loadOrders() {
    const res = await fetch("http://localhost:8000/get-orders");
    const data = await res.json();

    const tbody = document.getElementById("orders");
    tbody.innerHTML = "";
    data.forEach(o => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${o.name}</td>
            <td>${o.phone}</td>
            <td>${o.address}</td>
            <td>${o.product}</td>
            <td>${o.price}</td>
            <td>${new Date(o.date).toLocaleDateString()}</td>
            <td>${o.status || "Pending"}</td>
            <td>
                <button onclick="deliverOrder('${o._id}')">Deliver</button>
                <button onclick="deleteOrder('${o._id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

async function deliverOrder(id) {
    await fetch(`http://localhost:8000/update-order/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Delivered" })
    });
    loadOrders();
}

async function deleteOrder(id) {
    if (!confirm("Are you sure you want to delete this order?")) return;
    await fetch(`http://localhost:8000/delete-order/${id}`, { method: "DELETE" });
    loadOrders();
}

// -------------------- ADMIN LOGIN --------------------
async function adminLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.message === "Login Successful") {
        alert("Login Successful");
        window.location.href = "admin.html";
    } else alert("Invalid Credentials");
}

