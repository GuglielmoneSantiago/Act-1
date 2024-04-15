const pizza = require ('../src/JamonDecorator')

test("JamonDecorator",()=> {
    const pizza= new JamonDecorator();
    expect(pizza.getName()).toBe("Pizza con jamon")
    expect(pizza.getPrice()).toBe(12)
    expect(pizza.getDescription()).toBe("Masa -Salsa-Queso-Jamon")
})