let result = require("./hack_10");


describe("===== HACK-10 =====",()=>{
  it("Validar result ",()=>{
    expect(result).toEqual({
        id:100,
        name:"Foo",
        roles:["ADMIN","SUPER_USER","USER"],
        skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
        levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
    });
  });
});

