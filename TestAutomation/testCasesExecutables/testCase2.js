exports.test = function (inputs){
    return angleBetween(inputs[0], inputs[1], inputs[2], inputs[3]);
}

function angleBetween (x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}