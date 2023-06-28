//This is how I did it
// const nbYear = (p0,percent,aug,p) => {
//     let yearCount = 0
//     let popCount = p0
//     for (let i = 1; i < p; i++){
//         if (popCount < p){
//             popCount = parseInt(popCount) + parseInt(popCount) * (parseFloat(percent) / 100) + parseInt(aug)
//             yearCount = i
//         }
//     }
//     return `It will take ${yearCount} years to reach ${p} in population`
// }


//This is how Lukas did it. 
const nbYear = (p0,percent,aug,p) => {
    let years = 0
    percent = percent / 100

    while(p0 < p){
        p0 = (p0 *(1 + percent)) + aug
        years++
    }
    return years
}



console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))