import {Coordinate} from "./Coordinate";
import {Side} from "./Side";
import {Move} from "./Move";

export abstract class ChessPiece {

    abstract coordinate: Coordinate
    abstract side: Side
    abstract lastMove: Move | null

    abstract pieceIcon(): String

}