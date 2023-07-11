import {PossibleMoveProvider} from "../../PossibleMoveProvider";
import {Coordinate} from "../../../data/model/Coordinate";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";
import {CapturePawnMoveRule} from "./CapturePawnMoveRule";
import {DoubleSquarePawnMoveRule} from "./DoubleSquarePawnMoveRule";
import {SingleSquarePawnMoveRule} from "./SingleSquarePawnMoveRule";
import {Side} from "../../../data/model/Side";
import {PawnChessPiece} from "../../../data/model/piece/PawnChessPiece";

export class PawnPossibleMoveProvider implements PossibleMoveProvider<PawnChessPiece> {

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

    constructor(readonly rules: Array<PawnMoveRule> = [
        new CapturePawnMoveRule(),
        new DoubleSquarePawnMoveRule(),
        new SingleSquarePawnMoveRule()
    ]) {}

    possibleMoves(piece: PawnChessPiece): Array<Coordinate> {
        const options: Array<Coordinate> = []

        this.rules.forEach(r => {
            options.push(
                ...r.possibleMoves(
                    piece,
                    piece.side === Side.WHITE ? this.white : this.black
                )
            )
        })

        return options;
    }



}