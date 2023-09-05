let resultAdd = require("./hack_5_add");
let resultRemove = require("./hack_5_remove");


describe("===== HACK-5 =====",()=>{
  it("Validar resultAdd",()=>{
    expect(resultAdd).toEqual({
        id:100,
        name:"foo",
        role:"admin"
    });
});

it("Validar resultRemove",()=>{
    expect(resultRemove).toEqual({
        id:100,
        name:"foo",
    });
  });
});

