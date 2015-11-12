exports.test = function (inputs){
    return degToRad(inputs[0]);
}

function degToRad (degrees) {
    var degreeToRadiansFactor = Math.PI / 180;
    return degrees * degreeToRadiansFactor;
}