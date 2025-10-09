
function calcularLitrosNecessarios(distancia, consumo) {
    return distancia / consumo;
}

function calcularCustoTotalCombustivel(litros, precoCombustivel) {
    return litros * precoCombustivel;
}

function calcularCustoPorPessoa(custoTotal, numViajantes) {
    return custoTotal / numViajantes;
}

function atualizarResultados() {
    const distancia = parseFloat(document.querySelector('#distancia').value);
    const consumo = parseFloat(document.querySelector('#consumo').value);
    const precoCombustivel = parseFloat(document.querySelector('#precoCombustivel').value);
    const numViajantes = parseInt(document.querySelector('#numViajantes').value);

    if ( (distancia) && (consumo) && (precoCombustivel) && (numViajantes) && numViajantes > 0){
        const litros = calcularLitrosNecessarios(distancia, consumo);
        const custoTotal = calcularCustoTotalCombustivel(litros, precoCombustivel);
        const custoPessoa = calcularCustoPorPessoa(custoTotal, numViajantes);

        // Atualizando os resultados na tela
        document.getElementById('resultadoCustoTotal').textContent = `Custo Total com Combustível: R$ ${custoTotal.toFixed(2)}`;
        document.getElementById('resultadoCustoPessoa').textContent = `Custo por Pessoa: R$ ${custoPessoa.toFixed(2)}`;
    } else {
        // Exibindo resultados padrão quando os campos não estão preenchidos corretamente
        document.getElementById('resultadoCustoTotal').textContent = 'Custo Total com Combustível: R$ 0,00';
        document.getElementById('resultadoCustoPessoa').textContent = 'Custo por Pessoa: R$ 0,00';
    }
}

document.getElementById('distancia').addEventListener('input', atualizarResultados);
document.getElementById('consumo').addEventListener('input', atualizarResultados);
document.getElementById('precoCombustivel').addEventListener('input', atualizarResultados);
document.getElementById('numViajantes').addEventListener('input', atualizarResultados);
