import PizzaDecorator from "./PizzaDecorator"

export default class JamonDecorator extends PizzaDecorator{
    getPrice(){
        return this.pizza.getPrice()+2;
    }
    getName(){
        return this.pizza.getName()+" con jamon";
    }
    getDescription(){
        return this.pizza.getDescription()+"-Jamon";
    }
}