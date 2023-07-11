import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {PawnPossibleMoveProvider} from "./PawnPossibleMoveProvider";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";

export class DoubleSquarePawnMoveRule implements PawnMoveRule {
    possibleMoves(piece: PawnChessPiece, vectors: PawnMoveVectors): Array<Coordinate> {
        if (!piece.canMoveDouble)
            return []

        return [piece.coordinate.add(vectors.double)];
    }
}