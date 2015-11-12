exports.test = function (inputs){
    var components = new Object()
    components["fontStyle"] = inputs[0]
    components["fontVariant"] = inputs[1]
    components["fontWeight"] = inputs[2]
    components["fontSize"] = inputs[3]
    components["fontFamily"] = inputs[4]
    return componentsToFont(components);
}

function componentsToFont(components) {
    var parts = [];
    var v;
    
    v = components.fontStyle;
    if (v && v !== 'normal') { parts.push(v); }
    
    v = components.fontVariant;
    if (v && v !== 'normal') { parts.push(v); }
    
    v = components.fontWeight;
    if (v && v !== 'normal') { parts.push(v); }
    
    v = components.fontSize;
    if (v && v !== 'medium') { parts.push(v); }
    
    v = components.fontFamily;
    if (v) { parts.push(v); }
    
    if (!parts.length)
    {
        // Fallback to whatever value the 'font' was
        parts.push(components.font);
    }
    
    return parts.join(" ");
}
