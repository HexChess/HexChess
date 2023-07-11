import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {MoveContext} from "../../data/model/MoveContext";
import {PawnChessPiece} from "../../data/model/piece/PawnChessPiece";

export class PawnPossibleMoveProvider implements PossibleMoveProvider {

    private readonly normalVector = new Coordinate(0, +1, -1)
    private readonly startVector = new Coordinate(0, +2, -2)
    private readonly diagonalRightVector = new Coordinate(+1, -1, 0)
    private readonly diagonalLeftVector = new Coordinate(-1, 0, +1)

    possibleMoves(pos: Coordinate, context: MoveContext): Array<Coordinate> {
        const options: Array<Coordinate> = []

        options.push(pos.add(this.normalVector))
        if (context.piece instanceof PawnChessPiece && context.piece.canMoveDouble)
            options.push(pos.add(this.startVector))

        const diagonalRight = pos.add(this.diagonalRightVector)
        const diagonalLeft = pos.add(this.diagonalLeftVector)

        const enPassantRight = pos.add(this.diagonalRightVector.reverseFacing())
        const enPassantLeft = pos.add(this.diagonalLeftVector.reverseFacing())

        context.surrounding.forEach(s => {
            if (s.coordinate === diagonalRight) options.push(diagonalRight)
            if (s.coordinate === diagonalLeft) options.push(diagonalLeft)
            if (s instanceof PawnChessPiece && s.lastMove != null) {
                if (s.lastMove.end === enPassantRight && s.lastMove.heightChange() === 2)
                    options.push(diagonalRight)
                if (s.lastMove.end === enPassantLeft && s.lastMove.heightChange() === 2)
                    options.push(diagonalRight)
            }
        })

        return options
    }

}