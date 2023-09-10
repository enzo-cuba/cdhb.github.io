function calcularHidratacion() {
    const peso = parseFloat(document.getElementById('peso').value);
    let hidratacionDiaria, mantenimiento, mMasM2;
    if (peso <= 30) {
        if (peso <= 10) {
            hidratacionDiaria = peso * 100;
        } else if (peso <= 20) {
            hidratacionDiaria = 1000 + (peso - 10) * 50;
        } else {
            hidratacionDiaria = 1000 + 500 + (peso - 20) * 20;
        }
    } else {
        const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
        const volumenDiario1500 = superficieCorporal * 1500;
        const volumenDiario2000 = superficieCorporal * 2000;
        hidratacionDiaria = volumenDiario1500;
    }
    mantenimiento = hidratacionDiaria / 24;
    mMasM2 = mantenimiento * 1.5;
    document.getElementById('resultadoVolumenDiario').textContent = hidratacionDiaria.toFixed(2);
    document.getElementById('resultadoMantenimiento').textContent = mantenimiento.toFixed(2);
    document.getElementById('resultadoMMasM2').textContent = mMasM2.toFixed(2);
}
