import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {QueenPossibleMoveProvider} from "./QueenPossibleMoveProvider";

// Horsie
export class KingPossibleMoveProvider implements PossibleMoveProvider {

    private readonly vectors = [
        new Coordinate(-1, -2, +3),
        new Coordinate(+1, -3, +2),
        new Coordinate(+2, -3, +1),
        new Coordinate(+3, -2, -1),
        new Coordinate(+3, -1, -2),
        new Coordinate(+2, +1, -3),
        new Coordinate(+1, +2, -3),
        new Coordinate(-1, +3, -2),
        new Coordinate(-2, +3, -1),
        new Coordinate(-3, +2, +1),
        new Coordinate(-3, +1, +2),
        new Coordinate(-2, -1, +3),
    ]

    possibleMoves(pos: Coordinate): Array<Coordinate> {
        return MovementStrategy.transform(pos, this.vectors);
    }

}