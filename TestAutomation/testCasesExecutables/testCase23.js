exports.test = function (inputs){
    
    var val = inputs[0]
    
    var array = [inputs[1], inputs[2], inputs[3], inputs[4], inputs[5], inputs[6]]    
    return findClosest(val, array);
}

function findClosest(value, arr) {
    if (!arr.length)
    {
        return NaN;
    }
    else if (arr.length === 1 || value < arr[0])
    {
        return arr[0];
    }
    
    var i = 1;
    while (arr[i] < value) {
        i++;
    }
    
    var low = arr[i - 1];
    var high = (i < arr.length) ? arr[i] : Number.POSITIVE_INFINITY;
    
    return ((high - value) <= (value - low)) ? high : low;
}
