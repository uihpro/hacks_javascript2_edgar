/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};

let result= [];

for(i in foo){
    let x = [i,foo[i]];
    result.push(x);
}

console.log(result);


//export result
module.exports = result; 