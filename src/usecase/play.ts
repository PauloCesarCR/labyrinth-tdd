export class Play {
    constructor(){}

    execute(originPosition: number[], matrix: ReadonlyArray<string[]>): string{
        const currentRow = originPosition[0] - 1;
        const currentCol = originPosition[1] - 1;

        if(matrix[currentRow -1][currentCol] == "0"){
            return "top"
        }
        if(matrix[currentRow][currentCol - 1] == "0"){
            return "left"
        }
        if(matrix[currentRow][currentCol + 1] == "0"){
            return "right"
        }
        if(matrix[currentRow + 1][currentCol] == "0"){
            return "bottom"
        }
        return "invalid position"
    }

    verifyPosition(lastPositions: number[][], nextPostion: number[]){

        for(let item of lastPositions){
            if(item[0] == nextPostion[0] && item[1] == nextPostion[1]){
                return true;
            }
        }

        return false;
    }   
}