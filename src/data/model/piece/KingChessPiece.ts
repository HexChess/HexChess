import {ChessPiece} from "../ChessPiece";
import {Coordinate} from "../Coordinate";
import {Side} from "../Side";

export class KingChessPiece implements ChessPiece {
    constructor(
        public coordinate: Coordinate,
        public side: Side,
    ) {}
}