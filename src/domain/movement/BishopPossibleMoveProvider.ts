import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {BishopChessPiece} from "../../data/model/piece/BishopChessPiece";

export class BishopPossibleMoveProvider implements PossibleMoveProvider<BishopChessPiece> {

    private readonly vectors = [
        new Coordinate(+1, -2, +1),
        new Coordinate(+2, -1, -1),
        new Coordinate(+1, +1, -2),
        new Coordinate(-1, +2, -1),
        new Coordinate(-2, +1, +1),
        new Coordinate(-1, -1, +2),
    ];

    possibleMoves(piece: BishopChessPiece): Array<Coordinate> {
        return MovementStrategy.extrapolate(piece.coordinate, this.vectors);
    }

}