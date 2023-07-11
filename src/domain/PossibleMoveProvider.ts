import {Coordinate} from "../data/model/Coordinate";
import {ChessPiece} from "../data/model/ChessPiece";

export interface PossibleMoveProvider<T extends ChessPiece> {

    possibleMoves(piece: T): Array<Coordinate>

}