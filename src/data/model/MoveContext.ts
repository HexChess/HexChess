import {ChessPiece} from "./ChessPiece";

export class MoveContext {
    constructor(readonly piece: ChessPiece, readonly surrounding: Array<ChessPiece>) {}
}