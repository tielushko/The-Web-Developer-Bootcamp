function isEven(number) { 
    if (Number(number) % 2 === 0)
        return true;
    else
        return false; 
}

function factorial(number) {
    if (number == 0) 
        return 1;
    else 
        return number * factorial(number - 1); 
}

function kebabToSnake(str) {
    var ret = str.replace(/-/g, "_");
    return ret;
}