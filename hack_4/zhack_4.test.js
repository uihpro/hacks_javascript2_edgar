let result = require("./hack_4");


describe("===== HACK-4 =====",()=>{
  it("Validar resultado [{g:7},{a:1},{b:2},{c:3},{d:4},{e:5},{f:6}]",()=>{
    expect(result).toEqual([{g:7},{a:1},{b:2},{c:3},{d:4},{e:5},{f:6}]);
  });
});

