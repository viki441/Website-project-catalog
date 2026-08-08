function getQuery() {
    const query = new URLSearchParams(window.location.search).get("query") || "rolls";

    console.log("query:", query);

    return query;
}

async function loadData(query) {

    console.log("loadData:", query);

    const category = query.split('-')[0];

    console.log("category:", category);

    const response = await fetch(`json/${category}.json`);

    console.log("response:", response);

    const data = await response.json();

    console.log("data:", data);

    const containerMain = document.getElementById('product-container');

    console.log("container:", containerMain);

    containerMain.innerHTML = '';

    const products = data[category];

    console.log("products:", products);

    const filteredProducts =
        query === category
            ? products
            : products.filter(product => product.type === query);

    console.log("filtered:", filteredProducts);

    filteredProducts.forEach(product => {
        makeCard(containerMain, product);
    });
}


// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadData(getQuery());
});