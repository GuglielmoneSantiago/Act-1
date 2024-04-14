import PizzaDecorator from "./PizzaDecorator"

export default class JamonDecorator extends PizzaDecorator{
    getPrice(){
        return this.pizza.getPrice()+1;
    }
    getName(){
        return this.pizza.getName()+" con aceitunas";
    }
    getDescription(){
        return this.pizza.getDescription()+", aceitunas";
    }
}