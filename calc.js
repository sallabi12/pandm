function updateForm() {
    const location = document.getElementById("location").value;
    const categoryContainer = document.getElementById("category-container");

    if (location === "shein") {
        if (!document.getElementById("category")) {
            const categoryLabel = document.createElement("label");
            categoryLabel.setAttribute("for", "category");
            categoryLabel.textContent = "الصنف";

            const categorySelect = document.createElement("select");
            categorySelect.setAttribute("id", "category");
            categorySelect.setAttribute("onchange", "updateTotalPrice()");

            const options = [
                "جاكيت شتوي / احذية غير شامل الاطفال",
                "ملابس اطفال / تيشرت/قميص/اكسسوار/لانجري/ميكاج",
                "بنطلون/جينز/توب كم/فساتين/حقائب/شيب/شيبس/صندل",
                "بجامه، طقم قطعتين، بليزر، فساتين افراح",
            ];

            options.forEach((optionText) => {
                const option = document.createElement("option");
                option.value = optionText;
                option.textContent = optionText;
                categorySelect.appendChild(option);
            });

            categoryContainer.appendChild(categoryLabel);
            categoryContainer.appendChild(categorySelect);
        }
    } else {
        categoryContainer.innerHTML = "";
    }

    updateTotalPrice();
}



function updateTotalPrice() {
    const location = document.getElementById("location").value;
    const priceInput = document.getElementById("price");
    const categorySelect = document.getElementById("category");
    let price = parseFloat(priceInput.value);

    if (location === "turkey") {
        price *= 0.26;
        price += 15;
    } else if (location === "shein" && categorySelect) {
        const category = categorySelect.value;
        switch (category) {
            case "جاكيت شتوي / احذية غير شامل الاطفال":
                price *= 8;
                price += 15;
                break;
            case "ملابس اطفال / تيشرت/قميص/اكسسوار/لانجري/ميكاج":
                price *= 8;
                price += 30;
                break;
            case "بنطلون/جينز/توب كم/فساتين/حقائب/شيب/شيبس/صندل":
                price *= 8;
                price += 40;
                break;
            case "بجامه، طقم قطعتين، بليزر، فساتين افراح":
                price *= 8;
                price += 60;
                break;
        }
    }

    document.getElementById("total-price").textContent = Math.round(price);
}