var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
var result = add(2, 5);
console.log(result);
function f1(array, value) {
    var newArr = __spreadArray([value], array, true);
    return newArr;
}
var demo = [1, 2, 3];
var arr2 = f1(demo, -1);
console.log("--arr->", arr2);
function f2(value) {
    console.log("f22->", f2);
}
