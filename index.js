const heroName = 'Stark'
const xpAmount = 29004
let heroLevel = ''

if (xpAmount < 1000){
    heroLevel = 'Ferro'
} else if (xpAmount >= 1001 && xpAmount <= 2000){
    heroLevel = 'Bronze'
} else if (xpAmount >= 2001 && xpAmount <= 5000){
    heroLevel = 'Prata'
} else if (xpAmount >= 5001 && xpAmount <= 7000){
    heroLevel = 'Ouro'
} else if (xpAmount >= 7001 && xpAmount <= 8000){
    heroLevel = 'Platina'
} else if (xpAmount >= 8001 && xpAmount <= 9000){
    heroLevel = 'Ascendente'
} else if (xpAmount >= 9001 && xpAmount <= 10000){
    heroLevel = 'Imortal'
} else {
    heroLevel = 'Radiante'
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)
