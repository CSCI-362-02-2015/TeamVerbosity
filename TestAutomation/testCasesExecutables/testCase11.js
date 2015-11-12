exports.test = function (inputs){
    return isOdd(inputs[0]);
}

function   isOdd (n) {
    // Does not work with extremely large values
    return !!(n & 1);
}