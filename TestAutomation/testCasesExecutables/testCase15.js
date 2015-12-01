exports.test = function (inputs){
    return snapToCeil(inputs[0], inputs[1], inputs[2]);
}

function snapToCeil(input, gap, start) {
    
    if (start === undefined) { start = 0; }
    
    if (gap === 0) {
        return input;
    }
    
    input = start;
    input = gap * Math.ceil(input / gap);
    
    return start + input;
    
}