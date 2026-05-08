function calcular() {
    let costo = parseFloat(document.getElementById("costo").value);
    let presupuesto = parseFloat(document.getElementById("presupuesto").value);
    const result = costo * presupuesto
    document.getElementById("result").textContent = "La cotizacion seria de: $" + result;
};