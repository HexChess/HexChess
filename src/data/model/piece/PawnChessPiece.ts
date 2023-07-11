import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";
import {Move} from "../Move";

export class PawnChessPiece implements ChessPiece {
    constructor(
        public coordinate: Coordinate,
        public side: Side,
        public canMoveDouble: boolean,
        public lastMove: Move | null
    ) {}
}