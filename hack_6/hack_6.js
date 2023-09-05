/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

result.name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
result.role = result.role.toUpperCase();

console.log(result);

 
//export result
module.exports = result; 
