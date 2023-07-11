import {Coordinate} from "./Coordinate";

export class Move {

    constructor(readonly start: Coordinate, readonly end: Coordinate) {}

    heightChange(): number {
        return Math.abs(this.start.r - this.end.r)
    }

}