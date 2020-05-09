window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log("start");
    var form = document.querySelector("div#form");
    var orders = document.querySelector("div#orders");
    form.addEventListener("change", handleChange);
    orders.addEventListener("change", handleChange);
}
function handleChange(_event) {
    var order = document.querySelector("div#orders");
    order.innerHTML = "";
    var formData = new FormData(document.forms[0]);
    console.log(formData.get("Grocery"));
    for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
        var entry = formData_1[_i];
        console.log(entry);
        var item = document.querySelector("[value='" + entry[1] + "'");
        console.log(item);
        var price = Number(item.getAttribute("price"));
        console.log(price);
        order.innerHTML += item.value + " " + price + "  € ";
    }
}
//# sourceMappingURL=Haushaltshilfe.js.map