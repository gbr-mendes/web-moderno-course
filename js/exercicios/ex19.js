const calcOrder = function(code, quantity){
    switch(code){
        case 100:
            return 3 * quantity
        case 200:
            return 4 * quantity
        case 300:
            return 5.5 * quantity
        case 400:
            return 7.5 * quantity
        case 500:
            return 3.5 * quantity
        case 600:
            return 2.8 * quantity
        default:
            return "Product not found"
    }
}

console.log(calcOrder(200, 5))