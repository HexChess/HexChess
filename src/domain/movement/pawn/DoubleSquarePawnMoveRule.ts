import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {MoveContext} from "../../../data/model/MoveContext";
import {PawnPossibleMoveProvider} from "./PawnPossibleMoveProvider";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";

export class DoubleSquarePawnMoveRule implements PawnMoveRule {
    possibleMoves(pos: Coordinate, context: MoveContext, vectors: PawnMoveVectors): Array<Coordinate> {
        if (!(context.piece instanceof PawnChessPiece) || !context.piece.canMoveDouble)
            return []

        return [pos.add(vectors.double)];
    }
}