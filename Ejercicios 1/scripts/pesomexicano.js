function dolar() {
    let MX = parseFloat(document.getElementById("MX").value);
    const result = MX * 0.058
    document.getElementById("result").textContent = "El resultado es: $" + result +  "Dolares";
};
