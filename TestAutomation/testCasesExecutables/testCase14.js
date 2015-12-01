exports.test = function (inputs){
    return snapToFloor(inputs[0], inputs[1], inputs[2]);
}

function snapToFloor (input, gap, start) {
    
    if (start === undefined) { start = 0; }
    
    if (gap === 0) {
        return input;
    }
    
    input = start;
    input = gap * Math.floor(input / gap);
    
    return start + input;
    
}