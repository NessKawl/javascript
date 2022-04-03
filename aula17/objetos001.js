let pessoa = {nome: 'João',
idade: 26, 
peso: 76, 
engordar (p=0) {
    console.log(`João engordou ${p}Kg`)
    this.peso += p
}}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)
