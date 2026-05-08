function tiempo() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let velocidad = parseFloat(document.getElementById("velocidad").value);
    let resultado = document.getElementById("result");
    const result = distancia / velocidad;

    if (result >= 1) {
        resultado.textContent = "El tiempo que se tardará será de: " + result.toFixed(1) + " horas";
    
    } else {
        let minutos = Math.round(result * 60);
        resultado.textContent = "El tiempo que se tardará será de: " + minutos + " minutos";
    }
}