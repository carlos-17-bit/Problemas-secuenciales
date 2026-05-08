function anio() {
    let act = parseFloat(document.getElementById("act").value);
    let na = parseFloat(document.getElementById("na").value);
    const result = (act - na)
    document.getElementById("result").textContent = "La edad de la persona seria: " + result;
};