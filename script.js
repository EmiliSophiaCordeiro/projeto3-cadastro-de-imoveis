let imoveis = [];

while (true) {
    let menu = `Cadastro de Imóveis\nQuantidade de imóveis cadastrados: ${imoveis.length}\n\nEscolha uma opção:\n1. Salvar um novo imóvel\n2. Listar imóveis salvos\n3. Sair`

    let escolha = prompt(menu)

    if (escolha === "1") {
        let nomeProprietario = prompt("Nome do proprietário:")
        let quantidadeQuartos = prompt("Quantidade de quartos:")
        let quantidadeBanheiros = prompt("Quantidade de banheiros:")
        let temGaragem = confirm("Tem garagem?")

        let confirmacao = confirm(`Deseja salvar este imóvel?\nProprietário: ${nomeProprietario}\nQuartos: ${quantidadeQuartos}\nBanheiros: ${quantidadeBanheiros}\nGaragem: ${temGaragem ? "Sim" : "Não"}`)

        if (confirmacao) {
            let imovel = {
                nomeProprietario,
                quantidadeQuartos,
                quantidadeBanheiros,
                temGaragem
            };
            imoveis.push(imovel);
            alert("Imóvel salvo com sucesso!")
        } else {
            alert("Imóvel não salvo.")
        }
    } 
}
