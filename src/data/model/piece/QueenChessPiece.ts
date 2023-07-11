import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";

export class QueenChessPiece implements ChessPiece {
    constructor(
        public coordinate: Coordinate,
        public side: Side,
    ) {}
}