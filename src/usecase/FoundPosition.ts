import { genMatrix } from '../utils/initMatriz'

interface Output {
    originPosition: number[]
    exitPosition: number[]
    matrix: string[][]
}

export class FoundPosition {
    constructor() {}

    execute(lines: string[]): Output {
        let firstLine = lines[0].split(' ')

        let rows = parseInt(firstLine[0], 10)
        let cols = parseInt(firstLine[1], 10)

        let matrix = genMatrix(rows, cols)

        let currentRow = -1
        let currentCol = -1
        let exitRow = -1
        let exitCol = -1

        for (let r = 1; r < lines.length; r++) {
            let elements = lines[r].trim().split(' ')
            for (let c = 0; c < elements.length; c++) {
                matrix[r - 1][c] = elements[c]

                if (elements[c] === 'X') {
                    currentRow = r - 1
                    currentCol = c
                } else if (
                    elements[c] === '0' &&
                    (r === 1 ||
                        c === 0 ||
                        r === lines.length - 1 ||
                        c === elements.length - 1)
                ) {
                    exitRow = r - 1
                    exitCol = c
                }
            }
        }

        return {
            originPosition: [currentRow + 1, currentCol + 1],
            exitPosition: [exitRow, exitCol],
            matrix,
        }
    }
}
