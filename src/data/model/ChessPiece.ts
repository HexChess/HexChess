import {Coordinate} from "./Coordinate";
import {Side} from "./Side";

export abstract class ChessPiece {

    abstract coordinate: Coordinate
    abstract side: Side


    abstract pieceIcon(): String

}