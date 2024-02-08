export class NextPlay {
    constructor() {}

    execute(
        currentPosition: number[],
        lastPositions: number[][],
        matrix: ReadonlyArray<string[]>
    ): string {
        const currentRow = currentPosition[0]
        const currentCol = currentPosition[1]

        if (
            matrix[currentRow - 1][currentCol] == '0' &&
            !this.verifyPosition(lastPositions, [currentRow - 1, currentCol])
        ) {
            return 'top'
        }
        if (
            matrix[currentRow][currentCol - 1] == '0' &&
            !this.verifyPosition(lastPositions, [currentRow, currentCol - 1])
        ) {
            return 'left'
        }
        if (
            matrix[currentRow][currentCol + 1] == '0' &&
            !this.verifyPosition(lastPositions, [currentRow, currentCol + 1])
        ) {
            return 'right'
        }
        if (
            matrix[currentRow + 1][currentCol] == '0' &&
            !this.verifyPosition(lastPositions, [currentRow + 1, currentCol])
        ) {
            return 'bottom'
        }
        return 'invalid position'
    }

    private verifyPosition(lastPositions: number[][], nextPosition: number[]) {
        const nextRow = nextPosition[0]
        const nextCol = nextPosition[1]

        for (let item of lastPositions) {
            if (item[0] == nextRow && item[1] == nextCol) {
                return true
            }
        }

        return false
    }
}
