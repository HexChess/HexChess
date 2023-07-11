import {Coordinate} from "../../../data/model/Coordinate";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";

export class PawnMoveVectors {
    constructor(
        readonly forward: Coordinate,
        readonly double: Coordinate,
        readonly left: Coordinate,
        readonly right: Coordinate
    ) {}
}

export interface PawnMoveRule {

    possibleMoves(
        piece: PawnChessPiece,
        vectors: PawnMoveVectors
    ): Array<Coordinate>

}