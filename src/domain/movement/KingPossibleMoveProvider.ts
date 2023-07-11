import {PossibleMoveProvider} from "../PossibleMoveProvider";
import {Coordinate} from "../../data/model/Coordinate";
import {MovementStrategy} from "../MovementStrategy";
import {QueenPossibleMoveProvider} from "./QueenPossibleMoveProvider";
import {KingChessPiece} from "../../data/model/piece/KingChessPiece";

export class KingPossibleMoveProvider implements PossibleMoveProvider<KingChessPiece> {

    possibleMoves(piece: KingChessPiece): Array<Coordinate> {
        return MovementStrategy.transform(piece.coordinate, QueenPossibleMoveProvider.vectors);
    }

}