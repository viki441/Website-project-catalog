
function renderPage(page) {
    containerMain.innerHTML = "";

    const start = (page - 1) * pageLimit;
    const end = start + pageLimit;

    const currentProperties = data.slice(start, end);

    const pageCount = Math.ceil(data.length / pageLimit);

    document.getElementById("page-info").textContent =
        `Страница (${page} от ${pageCount})`;


//-----------------------------------------------------------------------------
    const products = data[category];
    const filteredProducts =
        query === category
            ? products
            : products.filter(product => product.type === query);

    filteredProducts.forEach(product => {
        makeCard(containerMain, product);
    });

    renderPagination(page);
    sessionStorage.clear();
}

function renderPagination(currentPage) {

    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const pageCount = Math.ceil(data.length / pageLimit);

    for (let i = 1; i <= pageCount; i++) {

        const pageButton = document.createElement("a");

        pageButton.href = "#";
        pageButton.textContent = i;

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.addEventListener("click", function (e) {
            e.preventDefault();
            renderPage(i);
        });

        pagination.appendChild(pageButton);
    }
}

