import {Coordinate} from "../data/model/Coordinate";
import {MAX_COORD} from "../data/Consts";

export class MovementStrategy {

    public static transform(coordinate: Coordinate, vectors: Array<Coordinate>): Array<Coordinate> {
        return vectors.map(v =>
            coordinate.add(v)
        ).filter(c => !this.isOOB(c))
    }

    public static extrapolate(coordinate: Coordinate, vectors: Array<Coordinate>): Array<Coordinate> {
        const options: Array<Coordinate> = [];
        vectors.forEach(v => {
            let running = coordinate
            while (true) {
                running = running.add(v)
                if (this.isOOB(running)) {
                    break
                }
                options.push(running)
            }
        })
        return options;
    }

    public static isOOB(coordinate: Coordinate): boolean {
        return coordinate.asArray().some(v => v > MAX_COORD || v < -MAX_COORD)
    }

}