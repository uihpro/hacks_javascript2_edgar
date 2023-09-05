/**
* agregar al objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
    role:"admin"
};
*/
let result = {
    id:100,
    name:"foo",
};
let role = "admin";

result.role=role;
console.log(result);

 
//export result
module.exports = result; 