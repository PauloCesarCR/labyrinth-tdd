export class PositionNew {
    constructor() {}

    execute(
        moveDirection: string,
        currentRow: number,
        currentCol: number
    ): number[] {
        if (moveDirection == 'top') {
            return [currentRow - 1, currentCol]
        }

        if (moveDirection == 'left') {
            return [currentRow, currentCol - 1]
        }

        if (moveDirection == 'right') {
            return [currentRow, currentCol + 1]
        }

        if (moveDirection == 'bottom') {
            return [currentRow + 1, currentCol]
        }

        return [currentRow, currentCol]
    }
}
