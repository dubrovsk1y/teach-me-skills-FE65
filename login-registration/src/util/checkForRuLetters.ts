const checkForRuLetters = (string: string) => {
    let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
    let isContain = false
    string.toLowerCase().split('').forEach(item => {
        if(arr_ru.includes(item)) {
            isContain = true
        }   
    })
    return isContain
}

export default checkForRuLetters