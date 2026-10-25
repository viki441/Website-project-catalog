window.addEventListener("load", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
        const res = await fetch(`json/${id}.json`);

        if (!res.ok) {
            throw new Error(`Failed to load json/${id}.json`);
        }

        const data = await res.json();

        editProduct(data[id]);

    } catch (error) {
        console.error("Error loading products:", error);
    }
});

function editProduct(data) {
    const containerMain = document.getElementById("product-container");

    containerMain.innerHTML = "";

    data.forEach((product, index) => {
        makeCard(containerMain, product, product.type, index);
    });
}