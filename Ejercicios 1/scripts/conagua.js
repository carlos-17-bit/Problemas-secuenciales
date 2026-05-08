function pago() {
    let m3 = parseFloat(document.getElementById("m3").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = m3 * costo
    document.getElementById("result").textContent = "El total a pagar es de: $" + result;
};