import { Time } from "@angular/common";

export class Stay {
    id: number;
    entryDate: string;
    departureDate: string;
    entryTime: string;
    exitTime: string;
    vehicle: {
        id: number;
        model: string;
        color: string;
        licensePlate: string;
    }
}