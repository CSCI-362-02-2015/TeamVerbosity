exports.test = function (inputs){
    return fuzzyFloor(inputs[0], inputs[1]);
}

function fuzzyFloor (val, epsilon) {
    
    if (epsilon === undefined)
    {
        epsilon = 0.0001;
    }
    
    return Math.floor(val + epsilon);
    
}