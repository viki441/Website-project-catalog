function makeCategory(containerMain, data, nameProd, id) {

    const idProd = `${nameProd}:${id}`;
    //create main container for individal item
    const container = document.createElement("div");
    container.classList.add("s-12", "m-6", "l-4", "xl-4", "xxl-3", "card", "h-100");

    containerMain.appendChild(container);



    //image part
    const image = document.createElement("img");
    image.classList.add("full-img");
    //image.src = data.images;
    image.setAttribute("src", data.image);
    container.appendChild(image);



    // //price
    // const price = document.createElement("h5");
    // price.classList.add("query-price");
    // price.innerHTML = "EUR " + data.price + " с ДДС";
    // container.appendChild(price);



    //heading
    const headingLink = document.createElement("a");
    const headingTag = document.createElement("h4");
    headingTag.classList.add("margin-bottom");
    const text = document.createElement("strong");
    text.innerHTML = data.heading;
    headingTag.appendChild(text);
    headingLink.appendChild(headingTag);
    container.appendChild(headingLink);

    //description
    const descr = document.createElement("p");
    descr.classList.add("margin-bottom");
    descr.innerHTML = data.description;
    container.appendChild(descr);

    //see product

    // const topLink = document.createElement("a");
    // topLink.href = `property-single.html?id=${item.PROPERTYID}`;
    // topLink.classList.add("img");

    const seeContainer = document.createElement("div");
    seeContainer.classList.add("customform", "s-12", "margin-bottom2x");
    const seeBtn = document.createElement("button");

    seeBtn.classList.add("button", "rounded-btn", "submit-btn", "s-12");
    //to make id for new page
    seeBtn.dataset.productId = idProd;
    seeBtn.innerHTML = 'Виж категория';
    seeBtn.onclick = () => {
        window.location.href = `category.html?id=${(data.type)}`;
    };

    seeContainer.appendChild(seeBtn);
    container.appendChild(seeContainer);

}