exports.test = function (inputs){
    return average(inputs);
}

function average(arguments){
    var sum = 0;
    var len = arguments.length;
    
    for (var i = 0; i < len; i++){
        sum += (+arguments[i]);
    }
    return sum / len;
    
}