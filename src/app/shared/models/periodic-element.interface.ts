import { ElementType } from "./periodic-element-type.interface";

export interface PeriodicElement {
    selected: boolean;
    name: string;
    position: number;
    weight: number;
    symbol: string;
    type: ElementType;
}