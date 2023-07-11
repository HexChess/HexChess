import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {QueenPossibleMoveProvider} from "./QueenPossibleMoveProvider";

export class KingPossibleMoveProvider implements PossibleMoveProvider {

    possibleMoves(pos: Coordinate): Array<Coordinate> {
        return MovementStrategy.transform(pos, QueenPossibleMoveProvider.vectors);
    }

}