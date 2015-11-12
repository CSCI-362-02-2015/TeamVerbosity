exports.test = function (inputs){
    return blendAdd(inputs[0], inputs[1]);
}

function blendAdd(a, b) {
    return Math.min(255, a + b);
}