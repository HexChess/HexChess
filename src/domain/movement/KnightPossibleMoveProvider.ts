import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {QueenPossibleMoveProvider} from "./QueenPossibleMoveProvider";
import {KingChessPiece} from "../../data/model/piece/KingChessPiece";
import {KnightChessPiece} from "../../data/model/piece/KnightChessPiece";

// Horsie
export class KingPossibleMoveProvider implements PossibleMoveProvider<KingChessPiece> {

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

    possibleMoves(piece: KnightChessPiece): Array<Coordinate> {
        return MovementStrategy.transform(piece.coordinate, this.vectors);
    }

}