function fruit(...input){
        
        let money = Number(input[2]) * (Number(input[1]) / 1000)
        console.log(`I need $${money.toFixed(2)} to buy ${(Number(input[1]) / 1000).toFixed(2)} kilograms ${input[0]}.`)
}

fruit('orange', 2500, 1.80)