/**
* eliminar del objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
};
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

delete result.role;
console.log(result);

 
//export result
module.exports = result; 