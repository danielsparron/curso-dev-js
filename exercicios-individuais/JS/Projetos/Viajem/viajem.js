
document.querySelector(".seu-nome").textContent = "NickDev_";

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
        document.querySelector('#resultadoCustoTotal').textContent = `Custo Total com Combustível: R$ ${custoTotal.toFixed(2)}`;
        document.querySelector('#resultadoCustoPessoa').textContent = `Custo por Pessoa: R$ ${custoPessoa.toFixed(2)}`;
    } else {
        // Exibindo resultados padrão quando os campos não estão preenchidos corretamente
        document.querySelector('#resultadoCustoTotal').textContent = 'Custo Total com Combustível: R$ 0,00';
        document.querySelector('#resultadoCustoPessoa').textContent = 'Custo por Pessoa: R$ 0,00';
    }
}

document.querySelector('#distancia').addEventListener('input', atualizarResultados);
document.querySelector('#consumo').addEventListener('input', atualizarResultados);
document.querySelector('#precoCombustivel').addEventListener('input', atualizarResultados);
document.querySelector('#numViajantes').addEventListener('input', atualizarResultados);
