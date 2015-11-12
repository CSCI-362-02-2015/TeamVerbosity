exports.test = function (inputs){
    return getColor(inputs[0], inputs[1], inputs[2]);
}

function getColor(r, g, b) {
    return r << 16 | g << 8 | b;
}