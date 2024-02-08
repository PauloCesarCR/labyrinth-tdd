export function genMatrix(rows: number, cols: number) {
    let matrix = new Array(rows)
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols)
    }

    return matrix
}
