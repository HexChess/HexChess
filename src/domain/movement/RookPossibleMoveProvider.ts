import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";

export class RookPossibleMoveProvider implements PossibleMoveProvider {

    private readonly vectors = [
        new Coordinate(+1, 0, -1),
        new Coordinate(+1, -1, 0),
        new Coordinate(0, -1, +1),
        new Coordinate(-1, 0, +1),
        new Coordinate(-1, +1, 0),
        new Coordinate(0, +1, -1),
    ];

    possibleMoves(pos: Coordinate): Array<Coordinate> {
        return MovementStrategy.extrapolate(pos, this.vectors);
    }

}