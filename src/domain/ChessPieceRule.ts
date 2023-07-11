import {Board} from "../data/model/Board";
import {ChessPiece} from "../data/model/ChessPiece";
import {Coordinate} from "../data/model/Coordinate";

export interface ChessPieceRule<T extends ChessPiece> {

    possibleMoves(board: Board, piece: T): Array<Coordinate>
    updateState(board: Board): void

}