exports.test = function (inputs){
    return fuzzyGreaterThan(inputs[0], inputs[1], inputs[2]);
}

function fuzzyGreaterThan(a, b, epsilon) {
    
    if (epsilon === undefined)
    {
        epsilon = 0.0001;
    }
    
    return a > b - epsilon;
    
}