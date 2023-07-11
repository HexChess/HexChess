
export class Coordinate {

    constructor(readonly q: number, readonly r: number, readonly s: number) {}

    add(other: Coordinate): Coordinate {
        return new Coordinate(
            this.q + other.q,
            this.r + other.r,
            this.s + other.s
        )
    }

    reverseFacing(): Coordinate {
        return new Coordinate(
            this.q,
            this.s,
            this.r
        )
    }

    asArray(): Array<Number> {
        return [this.q, this.r, this.s]
    }

}