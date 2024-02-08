export class BackPosition {
    constructor() {}

    execute(lastPositions: number[][]): any {
        return lastPositions[lastPositions.length - 1]
    }
}
