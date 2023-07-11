import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";
import {Move} from "../Move";

export class BishopChessPiece implements ChessPiece {
    constructor(
        public coordinate: Coordinate,
        public side: Side,
        public lastMove: Move | null
    ) {}
}