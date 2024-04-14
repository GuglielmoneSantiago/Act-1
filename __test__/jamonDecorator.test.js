const pizza = require ('../objetos/JamonDecorator')

test("JamonDecorator",()=> {
    const pizza= new JamonDecorator();
    expect(pizza.getName()).toBe("Pizza de jamon")
    expect(pizza.getPrice()).toBe(12)
    expect(pizza.getDescription()).toBe("Masa Casera-Salsa-Queso-Jamon")
})