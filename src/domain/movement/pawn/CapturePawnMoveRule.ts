import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {MoveContext} from "../../../data/model/MoveContext";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";

export class CapturePawnMoveRule implements PawnMoveRule {
    possibleMoves(pos: Coordinate, context: MoveContext, vectors: PawnMoveVectors): Array<Coordinate> {
        const options: Array<Coordinate> = []
        const diagonalRight = pos.add(vectors.right)
        const diagonalLeft = pos.add(vectors.left)

        context.surrounding.forEach(s => {
            if (s.coordinate === diagonalRight) options.push(diagonalRight)
            if (s.coordinate === diagonalLeft) options.push(diagonalLeft)
        })

        return options
    }
}