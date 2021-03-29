import Vehicle from './Vehicle';

export interface Bike extends Vehicle {
    
}

export function createBike(brand:string): Bike {
    return ({
        NumberOfWheeels: 2,
        Brand: brand
    });
}

