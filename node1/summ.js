const reducer = (accumulator, currentValue) => (+accumulator) + (+currentValue);

module.exports.summ = (...number) => {
    
    const summArr = number.reduce(reducer);
    if (summArr){
        console.log(`Sum: ${summArr} `);
    }else{
        console.log('Некорректные данные');
    }

}