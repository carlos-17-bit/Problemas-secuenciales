function area() {
    let bas = parseFloat(document.getElementById("bas").value);
    let alt = parseFloat(document.getElementById("alt").value);
    const result = (bas * alt)/2;
    document.getElementById("result").textContent = "El resultado es: " + result;
};
