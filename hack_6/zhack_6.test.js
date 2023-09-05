let result = require("./hack_6");


describe("===== HACK-6 =====",()=>{
  it("Validar result ",()=>{
    expect(result).toEqual( {
        id:100,
        name:"Foo",
        role:"ADMIN"
    });
  });
});

