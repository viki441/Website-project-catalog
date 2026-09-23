let data = [];
let containerMain;
const pageLimit = 10;
let id = 0;


function getQuery() {
    const query = new URLSearchParams(window.location.search).get("query") || "rolls";

    console.log("query:", query);

    return query;
}

async function loadData(query) {

    const category = query.split('-')[0];

    const response = await fetch(`json/${category}.json`);

    data = await response.json();

    containerMain = document.getElementById('product-container');

    console.log("container:", containerMain);

    containerMain.innerHTML = '';
    
    const products = data[category];

    const filteredProducts =
        query === category
            ? products
            : products.filter(product => product.type === query);


    filteredProducts.forEach(product => {

        makeCard(containerMain, product, category, id++);

    });
    id = 0;
}


// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadData(getQuery());
    //console.log("testing 1");
});