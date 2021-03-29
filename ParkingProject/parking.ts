import { Car, createCar, Bike, createBike, Vehicle } from  "../VehiclesProject/src/index"

export class Parking {
    public parkedObj: Vehicle[];

    constructor() {
        this.parkedObj = [];
        this.parkVehicle();
    }

    private parkVehicle() 
    {
        let myVehicle: Car = createCar("SEAT");
        let myVehicle2: Bike = createBike("Yamaha");

        this.parkedObj.push(myVehicle);
        this.parkedObj.push(myVehicle2);
    }
}
