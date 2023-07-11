import {Coordinate} from "../../../data/model/Coordinate";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";

export class SingleSquarePawnMoveRule implements PawnMoveRule {
    possibleMoves(piece: PawnChessPiece, vectors: PawnMoveVectors): Array<Coordinate> {
        return [piece.coordinate.add(vectors.forward)];
    }

}