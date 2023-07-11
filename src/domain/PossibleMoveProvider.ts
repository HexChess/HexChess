import {Coordinate} from "../data/model/Coordinate";
import {MoveContext} from "../data/model/MoveContext";

export interface PossibleMoveProvider {

    possibleMoves(pos: Coordinate, context: MoveContext): Array<Coordinate>

}