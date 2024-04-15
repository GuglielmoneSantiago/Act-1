import IPizza from "./IPizza"
export default class PizzaBase extends IPizza{
    getPrice(){
        return "10"
    }
    getName(){
        "Pizza"
    }
    getDescription(){
        "Masa-Salsa-Queso"
    }
}