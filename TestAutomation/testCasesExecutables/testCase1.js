exports.test = function (inputs){
    return fuzzyEquals(inputs[0], inputs[1], inputs[2]);
}

function fuzzyEquals(a, b, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }
    return Math.abs(a - b) < epsilon;
}