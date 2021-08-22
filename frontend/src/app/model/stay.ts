import { Time } from "@angular/common";

export class Stay {
    id: number;
    entryDate: Date;
    departureDate: Date;
    entryTime: Time;
    exitTime: Time;
    vehicle: {
        id: number;
        model: string;
        color: string;
        licensePlate: string;
    }
}