exports.min = (arr) => {
    const minNumber = Math.min(...arr);
    if(!minNumber){
        console.log('Некорректные данные')
    } else {
        console.log(`Min: ${minNumber}`);
    }
}