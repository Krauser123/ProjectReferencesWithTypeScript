import Vehicle from './Vehicle';

export interface Car extends Vehicle {
    
}

export function createCar(brand:string): Car {
    return ({
        NumberOfWheeels: 4,
        Brand: brand
    });
}

