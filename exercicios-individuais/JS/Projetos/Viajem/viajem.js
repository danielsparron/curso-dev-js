// Função para calcular os litros necessários
function calcularLitrosNecessarios(distancia, consumo) {
    return distancia / consumo;
}

// Função para calcular o custo total do combustível
function calcularCustoTotalCombustivel(litros, precoCombustivel) {
    return litros * precoCombustivel;
}

// Função para calcular o custo por pessoa
function calcularCustoPorPessoa(custoTotal, numViajantes) {
    return custoTotal / numViajantes;
}

// Função principal para atualizar os resultados
function atualizarResultados() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    const numViajantes = parseInt(document.getElementById('numViajantes').value);

    if (!isNaN(distancia) && !isNaN(consumo) && !isNaN(precoCombustivel) && !isNaN(numViajantes) && numViajantes > 0) {
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

// Adicionando eventos para recalcular quando algum campo mudar
document.getElementById('distancia').addEventListener('input', atualizarResultados);
document.getElementById('consumo').addEventListener('input', atualizarResultados);
document.getElementById('precoCombustivel').addEventListener('input', atualizarResultados);
document.getElementById('numViajantes').addEventListener('input', atualizarResultados);
