exports.test = function (inputs){
    return fuzzyCeil(inputs[0], inputs[1]);
}

function fuzzyCeil (val, epsilon) {
    
    if (epsilon === undefined)
    {
        epsilon = 0.0001;
    }
    
    return Math.ceil(val - epsilon);
    
}