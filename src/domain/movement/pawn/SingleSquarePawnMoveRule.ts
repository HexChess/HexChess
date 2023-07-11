import {Coordinate} from "../../../data/model/Coordinate";
import {MoveContext} from "../../../data/model/MoveContext";
import {PawnMoveRule, PawnMoveVectors} from "./PawnMoveRule";

export class SingleSquarePawnMoveRule implements PawnMoveRule {
    possibleMoves(pos: Coordinate, context: MoveContext, vectors: PawnMoveVectors): Array<Coordinate> {
        return [pos.add(vectors.forward)];
    }

}