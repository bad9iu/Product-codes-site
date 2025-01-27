function redirectToProduct() {
    const code = document.getElementById("productCode").value.trim();
    const productLinks = {
        "ABC123": "https://www.aliexpress.com/item/1005001234567890.html",
        "XYZ789": "https://www.aliexpress.com/item/1005009876543210.html"
    };

    if (productLinks[code]) {
        window.location.href = productLinks[code];
    } else {
        alert("Invalid code. Please try again.");
    }
}
