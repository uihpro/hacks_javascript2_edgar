let result = require("./hack_9");


describe("===== HACK-9 =====",()=>{
  it("Validar result ",()=>{
    expect(result).toEqual({
        id:100,
        name:"foo",
        role:"admin",
        skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
        alias:"Super Alias"
    });
  });
});

