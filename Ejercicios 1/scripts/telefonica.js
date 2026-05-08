function calcular() {
    let tiempo = parseFloat(document.getElementById("tiempo").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const result = costo * tiempo
    document.getElementById("result").textContent = "El costo de la llamada sera de: $" + result;
};