const pizza = require('../src/PizzaBase')
test("Pizza",()=> {
    const Pizza= new Pizza();
    expect(pizza.getName()).toBe("Pizza")
    expect(pizza.getPrice()).toBe(10)
    expect(pizza.getDescription()).toBe("Masa-Salsa-Queso")
})