let result = require("./hack_7");


describe("===== HACK-7 =====",()=>{
  it("Validar result ",()=>{
    expect(result).toEqual(["javascript", "html", "css", "python", "flask", "react", "redux"]);
  });
});

