import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";
import {Move} from "../Move";

export class PawnChessPiece implements ChessPiece {

    static readonly LEFT = 0x1
    static readonly RIGHT = 0x2

    constructor(
        public coordinate: Coordinate,
        public side: Side,
        public canMoveDouble: boolean,
        public diagonal: number,
        public lastMove: Move | null
    ) {}

    isCapturable(side: number): boolean {
        return (side & this.diagonal) === side
    }

}