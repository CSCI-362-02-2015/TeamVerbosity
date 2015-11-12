

exports.test = function (inputs){
    return parseDimension(inputs[0], inputs[1]);
}

function parseDimension(size, dimension) {
    var f = 0;
    var px = 0;
    if (typeof size === 'string'){
        if (size.substr(-1) === '%'){
            f = parseInt(size, 10) / 100;
            if (dimension === 0){
                px = window.innerWidth * f;
            }
            else{
                px = window.innerHeight * f;
            }
        }
        else{
            px = parseInt(size, 10);
        }
    }
    else{
        px = size;
    }
    return px;
}