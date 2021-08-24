import { Client } from "./client";
import { Stay } from "./stay";

export class Vehicle{
    id: number;
    model: string;
    color: string;
    licensePlate: string;
    clients: Client;
    stays: Stay;
}