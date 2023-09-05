let resultFor = require("./hack_1_for");
let resultWhile = require("./hack_1_while");


describe("===== HACK-1 =====",()=>{
  it("Validar for",()=>{
    expect(resultFor).toEqual([1,2,3,4,5]);
  });

  it("Validar while",()=>{
    expect(resultWhile).toEqual([1,2,3,4,5]);
  });
});

