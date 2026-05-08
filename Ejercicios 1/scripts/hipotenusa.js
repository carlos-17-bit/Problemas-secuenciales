function calcular() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    const result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("result").textContent = "La hipotenusa es de: " + result;
};