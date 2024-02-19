export class BackPosition {
    constructor() {}

    execute(lastPositions: number[][], backNumber: number): any {
        
        return lastPositions[lastPositions.length - 1 - backNumber]
    }
}
    