const Pizza = require('../src/IPizza')
test("Pizza",()=> {
    const Pizza= new Pizza();
    expect(pizza.getName()).toBe("Pizza")
    expect(pizza.getPrice()).toBe(10)
    expect(pizza.getDescription()).toBe("Masa Casera-Salsa-Queso")
})