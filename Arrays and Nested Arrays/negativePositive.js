function negPos(input){
    let result = []
    for (let el of input){
        if (el < 0){
            result.unshift(el)
        }else{
            result.push(el)
        }
    }
    console.log(result.join("\n"));
    
}