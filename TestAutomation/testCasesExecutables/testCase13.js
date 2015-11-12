exports.test = function (inputs){
    return snapTo(inputs[0], inputs[1], inputs[2]);
}

function snapTo (input, gap, start) {
    
    if (start === undefined) { start = 0; }
    
    if (gap === 0) {
        return input;
    }
    
    input -= start;
    input = gap * Math.round(input / gap);
    
    return start + input;
    
}