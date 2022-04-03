let num = [5, 4, 8, 6, 9]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O último elemento é ${num[4]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}