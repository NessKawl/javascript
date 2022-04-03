let valores = [3, 2, 5, 6, 8, 78, 99]
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}