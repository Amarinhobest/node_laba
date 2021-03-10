exports.abs = (value) => {
    if (typeof value === 'number'){
    console.log (`Abs: ${Math.abs(value)}`);
    }else{
    console.log('Некорректные данные');   
    }
}