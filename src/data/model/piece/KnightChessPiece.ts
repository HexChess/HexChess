import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";

export class KnightChessPiece implements ChessPiece {
    constructor(
        public coordinate: Coordinate,
        public side: Side,
    ) {}
}