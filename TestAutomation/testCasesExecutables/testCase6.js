exports.test = function (inputs){
    return difference(inputs[0], inputs[1]);
}

function difference (a, b) {
    return Math.abs(a - b);
}
