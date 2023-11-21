function calcularJuros() {
    const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    const tempoMeses = parseInt(document.getElementById('tempoMeses').value);
    const resultadoElement = document.getElementById('resultado');
  
    if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
      const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
      const quantiaFinal = capitalInicial + jurosSimples;
  
      resultadoElement.textContent = `R$ ${capitalInicial.toFixed(2)} com taxa de juros de ${taxaJuros}% e duração de ${tempoMeses} meses, o valor final é: R$ ${quantiaFinal.toFixed(2)}`;
    } else {
      resultadoElement.textContent = 'Por favor, insira valores válidos e um período de tempo adequado.';
    }
  }
