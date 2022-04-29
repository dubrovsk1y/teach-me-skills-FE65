const checkForNumbers = (string: string) => {
    const numbersToString: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let isContain = false
    string.split('').forEach(item => {
        if(numbersToString.includes(item)) {
            isContain = true
        }  
    })
    return isContain
}

export default checkForNumbers