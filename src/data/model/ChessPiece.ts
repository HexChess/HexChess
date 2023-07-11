import {Coordinate} from "./Coordinate";
import {Side} from "./Side";
import {Move} from "./Move";

export interface ChessPiece {

    coordinate: Coordinate
    side: Side
    lastMove: Move | null

}