import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";

export class BishopPossibleMoveProvider implements PossibleMoveProvider {

    private readonly vectors = [
        new Coordinate(+1, -2, +1),
        new Coordinate(+2, -1, -1),
        new Coordinate(+1, +1, -2),
        new Coordinate(-1, +2, -1),
        new Coordinate(-2, +1, +1),
        new Coordinate(-1, -1, +2),
    ];

    possibleMoves(pos: Coordinate): Array<Coordinate> {
        return MovementStrategy.extrapolate(pos, this.vectors);
    }

}