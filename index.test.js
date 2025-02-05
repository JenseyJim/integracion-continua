const helloWorld = require("./index");

test("Debe retornar 'Hola Mundo'", () => {
    expect(helloWorld()).toBe("Hola Mundo");
});

//Jensey Jimenez 2023-1800