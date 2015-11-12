exports.test = function (inputs){
    return getAlpha(inputs[0]);
}

function  getAlpha(color) {
    return color >>> 24;
}