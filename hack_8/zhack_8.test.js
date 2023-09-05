let result = require("./hack_8");


describe("===== HACK-8 =====",()=>{
  it("Validar result ",()=>{
    expect(result).toEqual([["id",100], ["name","foo"], ["role","admin"]]);
  });
});

