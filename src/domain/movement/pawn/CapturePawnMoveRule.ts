import {Coordinate} from "../../../data/model/Coordinate";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";

export class CapturePawnMoveRule implements PawnMoveRule {
    possibleMoves(piece: PawnChessPiece, vectors: PawnMoveVectors): Array<Coordinate> {
        const options: Array<Coordinate> = []
        if (piece.isCapturable(PawnChessPiece.LEFT))
            options.push(piece.coordinate.add(vectors.left))
        if (piece.isCapturable(PawnChessPiece.RIGHT))
            options.push(piece.coordinate.add(vectors.left))

        return options
    }
}