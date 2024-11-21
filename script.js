let imoveis = [];

while (true) {
    let menu = `Cadastro de Imóveis
Quantidade de imóveis cadastrados: ${imoveis.length}

Escolha uma opção:
1. Salvar um novo imóvel
2. Listar imóveis salvos
3. Sair`;

    let escolha = prompt(menu);

    if (escolha === "1") {
        let nomeProprietario = prompt("Nome do proprietário:");

        let quantidadeQuartos = prompt("Quantidade de quartos:");
        while (isNaN(quantidadeQuartos) || quantidadeQuartos <= 0) {
            quantidadeQuartos = prompt("Quantidade de quartos (Digite um número válido):");
        }

        let quantidadeBanheiros = prompt("Quantidade de banheiros:");
        while (isNaN(quantidadeBanheiros) || quantidadeBanheiros <= 0) {
            quantidadeBanheiros = prompt("Quantidade de banheiros (Digite um número válido):");
        }

        let temGaragem = confirm("Tem garagem?");

        let confirmacao = confirm(`Deseja salvar este imóvel?
Proprietário: ${nomeProprietario}
Quartos: ${quantidadeQuartos}
Banheiros: ${quantidadeBanheiros}
Garagem: ${temGaragem ? "Sim" : "Não"}`);

        if (confirmacao) {
            let imovel = {
                nomeProprietario,
                quantidadeQuartos: parseInt(quantidadeQuartos),
                quantidadeBanheiros: parseInt(quantidadeBanheiros),
                temGaragem
            };
            imoveis.push(imovel);
            alert("Imóvel salvo com sucesso!");
        } else {
            alert("Imóvel não salvo.");
        }
    } 
    else if (escolha === "2") {
        if (imoveis.length === 0) {
            alert("Não há imóveis cadastrados.");
        } else {
            let listaImoveis = "Imóveis cadastrados:\n\n";
            imoveis.forEach((imovel, index) => {
                listaImoveis += `Imóvel ${index + 1}:\n`;
                listaImoveis += `Proprietário: ${imovel.nomeProprietario}\n`;
                listaImoveis += `Quartos: ${imovel.quantidadeQuartos}\n`;
                listaImoveis += `Banheiros: ${imovel.quantidadeBanheiros}\n`;
                listaImoveis += `Garagem: ${imovel.temGaragem ? "Sim" : "Não"}\n\n`;
            });
            alert(listaImoveis);
        }
    } 
    else if (escolha === "3") {
        alert("Encerrando programa. Até mais!");
        break;
    } 
    else {
        alert("Opção inválida! Tente novamente.");
    }
}
