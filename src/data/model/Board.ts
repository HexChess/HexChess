import {ChessPiece} from "./ChessPiece";
import {Coordinate} from "./Coordinate";

type GridItem = ChessPiece | Empty | null
type BoardItem = ChessPiece | Empty

class Empty {}

export class Board {

    grid: Array<Array<GridItem>>;

    constructor() {

        this.grid = Array()

        for (let r = -5; r < 5; r++) {

            this.grid[r] = []

            for (let q = -5; q < 5; q++) {
                let s = -r - q;

                if (q + r <= 5) {
                    this.grid[r][q] = null
                } else if (q + r >= 11) {
                    this.grid[r][q] = null
                } else {
                    this.grid[r][q] = Empty
                }
            }
        }
    }

    private cubeToGridCoordinate(coordinate: Coordinate) : [number, number] {
        return [coordinate.r + 5, coordinate.q + 5]
    }

    getPiece(coordinate: Coordinate) : BoardItem {

        let gridCoord : [number, number] = this.cubeToGridCoordinate(coordinate)
        let y = gridCoord[0]
        let x = gridCoord[1]

        return <BoardItem> this.grid[y][x]
    }

    setPiece(coordinate: Coordinate, piece: BoardItem) {

        let gridCoord : [number, number] = this.cubeToGridCoordinate(coordinate)
        let y = gridCoord[0]
        let x = gridCoord[1]

        this.grid[y][x] = piece
    }

    printGrid() {
        for (let row in this.grid) {
            for (let column in this.grid) {
                if (this.grid[row][column] == null) {
                    console.log(' ')
                }
                
                if (this.grid[row][column] instanceof ChessPiece) {
                    console.log((<ChessPiece>this.grid[row][column]).pieceIcon)
                }

                if (this.grid[row][column] instanceof Empty) {
                    console.log("⬡")
                }
            }
        }
    }

}