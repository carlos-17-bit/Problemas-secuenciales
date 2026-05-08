function costo() {
    let kilometros = parseFloat(document.getElementById("kilometros").value);
    let boleto = parseFloat(document.getElementById("boleto").value);
    const result = kilometros * boleto
    document.getElementById("result").textContent = "El costo del boleto seria de: $" + result;
};