window.addEventListener("load", async () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("Product ID:", id);

    const cat = id.split(':')[0];
    const index = Number(id.split(':')[1]);
    
    const res = await fetch(`json/${cat}.json`);


    if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
    }

    const data = await res.json();
    const filteredProduct = data[cat][index];
    console.log(filteredProduct);
    editProduct(filteredProduct);


});

function editProduct(data) {

    //images
    const images = document.getElementById("product-image");
    images.setAttribute("src", data.image);

    

    //heading
    const heading = document.getElementById("product-heading");
    heading.textContent = data.heading;
    //description
    const descriptions = data.description.split(" | ");

    const descr = document.getElementById("product-descr");
    descr.innerHTML = descriptions.join("<br>");
 
    //price
    const price = document.getElementById("product-price");
    price.textContent = "Цена: " + data.price;

}
