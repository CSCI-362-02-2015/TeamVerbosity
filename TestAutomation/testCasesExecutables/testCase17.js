exports.test = function (inputs){
    return roundTo(inputs[0], inputs[1], inputs[2]);
}

function roundTo (value, place, base) {
    
    if (place === undefined) {
        place = 0;
    }
    if (base === undefined) {
        base = 10;
    }
    
    var p = Math.pow(base, -place);
    
    return Math.round(value * p) / p;
    
}