import IPizza from "./IPizza"

export default class PizzaDecorator extends IPizza{
    pizza= new IPizza();

    constructor(pizza=IPizza){
        this.pizza=pizza;
    }
    getPrice(){
        return this.pizza.getPrice();
    }
    getName(){
        return this.pizza.getName();
    }
    getDescription(){
        return this.pizza.getDescription();
    }
}
