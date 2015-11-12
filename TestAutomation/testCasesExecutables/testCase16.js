exports.test = function (inputs){
    return sign(inputs[0]);
}

function sign(x) {
    return ( x < 0 ) ? -1 : ( ( x > 0 ) ? 1 : 0 );
}