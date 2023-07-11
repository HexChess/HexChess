import {Coordinate} from "../data/model/Coordinate";
import {MoveContext} from "../data/model/MoveContext";
import {ChessPiece} from "../data/model/ChessPiece";

export interface PossibleMoveProvider<T extends ChessPiece> {

    possibleMoves(piece: T): Array<Coordinate>

}