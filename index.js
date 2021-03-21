let idades = [21, 33, 12, 18, 22, 59, 78, 1, 17]

// Filter
function maiorDeIdade(idades) {
    let a = idades.filter(function (idade) {
        if(idade >= 18) {
            return idade
        }
    })

    let b = idades.filter(idade => idade >= 18)
    return a
}

//console.log(maiorDeIdade(idades))

// Map
function adicionaUmAno(idades) {
    return idades.map(idade => idade + 1)
}

//console.log("ANTES", idades)
//novaIdade = adicionaUmAno(idades)
//console.log("NOVA IDADE", novaIdade)
//console.log("DEPOIS", idades)

// Reduce
function somaDasIdades(idades) {
    let valorInicial = 10000
    return idades.reduce((soma, idade) => soma + idade, valorInicial)
}


//console.log(somaDasIdades(idades))
/*

Passar em todos -> MAP
Reduzi para 1 element -> REDUCE
Pegar alguns elementos -> FILTER

*/


