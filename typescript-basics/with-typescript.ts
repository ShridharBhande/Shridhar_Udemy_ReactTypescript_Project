function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

console.log(result);


function f1<T>(array: T[], value: T) {
    const newArr = [value, ...array];
    return newArr;
}

const demo = [1,2,3];
const arr2 = f1(demo, -1);
console.log("--arr->", arr2);

function f2(value: any) {
    console.log("f22->", f2);
}