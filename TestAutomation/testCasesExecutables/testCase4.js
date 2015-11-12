exports.test = function (inputs){
    return chanceRoll(inputs[0]);
}

function chanceRoll(chance) {
    if (chance === undefined) {
        chance = 50;
    }
    return chance > 0 && (Math.random() * 100 <= chance);
}