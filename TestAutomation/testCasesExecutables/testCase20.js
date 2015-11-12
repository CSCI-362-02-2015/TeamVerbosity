exports.test = function (inputs){
    return fontToComponents(inputs[0]);
}

function fontToComponents(font) {
    
    var m = font.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);
    
    if (!m)
    {
        return {
        font: font,
        fontStyle: m[1] || 'normal',
        fontVariant: m[2] || 'normal',
        fontWeight: m[3] || 'normal',
        fontSize: m[4] || 'medium',
        fontFamily: m[5]
        };
    }
    else
    {
        console.warn("Phaser.Text - unparsable CSS font: " + font);
        return {
        font: font
        };
    }
}
