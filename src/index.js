exports.min = function min(array) {
    let result = Number.MAX_SAFE_INTEGER;
    if (typeof array == "object" && array.constructor == Array && array.lenght != 0) {
        array.forEach((v) => {
            if (v != undefined && result > v) result = v;
        });
    }
    return result == Number.MAX_SAFE_INTEGER ? 0 : result;
}

exports.max = function max(array) {
    let result = Number.MIN_SAFE_INTEGER;
    if (array != undefined && array.lenght != 0) {
        array.forEach((v, i) => {
            if (v != undefined && result < v) result = v;
        });
    }
    return result == Number.MIN_SAFE_INTEGER ? 0 : result;
}

exports.avg = function avg(array) {
    let total = 0,
        sum = 0;

    function calcSum() {
        array.forEach((v) => {
            if (v != undefined) {
                total++;
                sum += v;
            }
        });
    }
    if (array != undefined && array.lenght != 0) calcSum();
    return (sum == 0) ? 0 : (sum / total);

}