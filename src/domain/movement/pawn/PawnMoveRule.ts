import {Coordinate} from "../../../data/model/Coordinate";
import {MoveContext} from "../../../data/model/MoveContext";

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
        pos: Coordinate,
        context: MoveContext,
        vectors: PawnMoveVectors
    ): Array<Coordinate>

}