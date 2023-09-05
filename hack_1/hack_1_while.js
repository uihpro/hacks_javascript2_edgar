/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,2,3,4,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let i = 0;

while(i<arr.length) {
    result.push(...Object.values(arr[i]));
    i++;
}
console.log(result);

 
 
//export result
module.exports = result;