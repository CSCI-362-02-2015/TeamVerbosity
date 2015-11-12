exports.test = function (inputs){
    return pad(inputs[0], inputs[1], inputs[2], inputs[3]);
}

function pad(str, len, pad, dir) {
    
    if (len === undefined) { var len = 0; }
    if (pad === undefined) { var pad = ' '; }
    if (dir === undefined) { var dir = 3; }
    
    var padlen = 0;
    
    if (len + 1 >= str.length)
    {
        switch (dir)
        {
            case 1:
                str = new Array(len + 1 - str.length).join(pad) + str;
                break;
                
            case 3:
                var right = Math.ceil((padlen = len - str.length) / 2);
                var left = padlen - right;
                str = new Array(left+1).join(pad) + str + new Array(right+1).join(pad);
                break;
                
            default:
                str = str + new Array(len + 1 - str.length).join(pad);
                break;
        }
    }
    
    return str;
}
