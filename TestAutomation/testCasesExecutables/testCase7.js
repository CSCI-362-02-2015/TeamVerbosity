exports.test = function (inputs){
    return distance(inputs[0], inputs[1], inputs[2], inputs[3]);
}

function distance (x1, y1, x2, y2) {
    
    var dx = x1 - x2;
    var dy = y1 - y2;
    
    return Math.sqrt(dx * dx + dy * dy);
    
}