// 100-evcar.js
import Car from './10-car.js';

class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(); // Call the constructor of the parent class
        this._brand = brand;
        this._motor = motor;
        this._color = color;
        this._range = range;
    }

    cloneCar() {
        // Create an instance of Car instead of EVCar
        return new Car();
    }
}

export default EVCar;

