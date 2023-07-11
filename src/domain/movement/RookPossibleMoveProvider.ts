import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {RookChessPiece} from "../../data/model/piece/RookChessPiece";

export class RookPossibleMoveProvider implements PossibleMoveProvider<RookChessPiece> {

    private readonly vectors = [
        new Coordinate(+1, 0, -1),
        new Coordinate(+1, -1, 0),
        new Coordinate(0, -1, +1),
        new Coordinate(-1, 0, +1),
        new Coordinate(-1, +1, 0),
        new Coordinate(0, +1, -1),
    ];

    possibleMoves(piece: RookChessPiece): Array<Coordinate> {
        return MovementStrategy.extrapolate(piece.coordinate, this.vectors);
    }

}