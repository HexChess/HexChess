import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {MoveContext} from "../../../data/model/MoveContext";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";

export class EnPassantPawnMoveRule implements PawnMoveRule {
    possibleMoves(pos: Coordinate, context: MoveContext, vectors: PawnMoveVectors): Array<Coordinate> {
        const options: Array<Coordinate> = []
        const diagonalRight = pos.add(vectors.right)
        const diagonalLeft = pos.add(vectors.left)
        const enPassantRight = pos.add(vectors.right.reverseFacing())
        const enPassantLeft = pos.add(vectors.left.reverseFacing())

        context.surrounding.forEach(s => {
            if (s instanceof PawnChessPiece && s.lastMove != null) {
                if (s.lastMove.end === enPassantRight && s.lastMove.heightChange() === 2)
                    options.push(diagonalRight)
                if (s.lastMove.end === enPassantLeft && s.lastMove.heightChange() === 2)
                    options.push(diagonalLeft)
            }
        })

        return options
    }
}