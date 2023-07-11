import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {QueenChessPiece} from "../../data/model/piece/QueenChessPiece";

export class QueenPossibleMoveProvider implements PossibleMoveProvider<QueenChessPiece> {

    public static readonly vectors = [
        new Coordinate(+1, -2, +1),
        new Coordinate(+2, -1, -1),
        new Coordinate(+1, +1, -2),
        new Coordinate(-1, +2, -1),
        new Coordinate(-2, +1, +1),
        new Coordinate(-1, -1, +2),
        new Coordinate(+1, 0, -1),
        new Coordinate(+1, -1, 0),
        new Coordinate(0, -1, +1),
        new Coordinate(-1, 0, +1),
        new Coordinate(-1, +1, 0),
        new Coordinate(0, +1, -1),
    ];

    possibleMoves(piece: QueenChessPiece): Array<Coordinate> {
        return MovementStrategy.extrapolate(piece.coordinate, QueenPossibleMoveProvider.vectors);
    }

}