import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";
import {MoveContext} from "../../../data/model/MoveContext";
import {CapturePawnMoveRule} from "./CapturePawnMoveRule";
import {DoubleSquarePawnMoveRule} from "./DoubleSquarePawnMoveRule";
import {SingleSquarePawnMoveRule} from "./SingleSquarePawnMoveRule";
import {Side} from "../../../data/model/Side";
import {EnPassantPawnMoveRule} from "./EnPassantPawnMoveRule";

export class PawnPossibleMoveProvider implements PossibleMoveProvider {

    constructor(readonly rules: Array<PawnMoveRule> = [
        new CapturePawnMoveRule(),
        new DoubleSquarePawnMoveRule(),
        new SingleSquarePawnMoveRule(),
        new EnPassantPawnMoveRule()
    ]) {}

    public readonly white = new PawnMoveVectors(
        new Coordinate(0, +1, -1),
        new Coordinate(0, +2, -2),
        new Coordinate(+1, -1, 0),
        new Coordinate(-1, 0, +1)
    )
    public readonly black = new PawnMoveVectors(
        this.white.forward.reverseFacing(),
        this.white.double.reverseFacing(),
        this.white.left.reverseFacing(),
        this.white.right.reverseFacing(),
    )

    possibleMoves(pos: Coordinate, context: MoveContext): Array<Coordinate> {
        const options: Array<Coordinate> = []

        this.rules.forEach(r => {
            options.push(
                ...r.possibleMoves(
                    pos,
                    context,
                    context.piece.side === Side.WHITE ? this.white : this.black
                )
            )
        })

        return options;
    }



}