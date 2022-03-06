/* para dificultar, diferente do que o exercicio
pede, eu fiz com que o primeiro elemento de um vetor
seja o ultimo do outro 
(Na verdade eu li o problema errado e fiz assim kkk*/
function switchVector(vector1, vector2){
    for(i in vector1){
        [vector1[i], vector2[vector2.length - i - 1]] = [vector2[vector2.length - i - 1], vector1[i]]
    }
    console.log(vector1, vector2)
    
}
switchVector([1, 2, 3], [4,5,6])