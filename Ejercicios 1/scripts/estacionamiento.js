function horas() {
    let horas = parseFloat(document.getElementById("horas").value);
    let precio = parseFloat(document.getElementById("precio").value);
    let horastotales = Math.ceil(horas)
    const result = horastotales * precio
    document.getElementById("result").textContent = "El total a pagar seria de: $" + result;
};