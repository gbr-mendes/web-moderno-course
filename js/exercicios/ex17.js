const increseSalary = (plan, salary) =>{
    switch(plan){
        case 'A':
            return salary * 1.1
        case 'B':
            return salary * 1.15
        case 'C':
            return salary * 1.2
        default:
            return 'Invalid Plan'
    }
}

console.log(increseSalary('C', 2000))