
export class FoundPositionCase{
 constructor(){}

    execute(lines: string[]): number[] {

          // Read the first line and split it
         let firstLine = lines[0].split(' ');
         // Get rows and columns count
         let rows = parseInt(firstLine[0], 10);
         let cols = parseInt(firstLine[1], 10);

         // Initialize the maze matrix
         let matrix = new Array(rows);
         for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(cols);
         }

         let currentRow = -1;
         let currentCol = -1; // Current position
         let exitRow = -1;
         let exitCol = -1; // Exit position
     
         // Iterate over the matrix to fill it and find positions
         for (let r = 1; r < lines.length; r++) {
             let elements = lines[r].trim().split(' ');
             for (let c = 0; c < elements.length; c++) {
                 matrix[r - 1][c] = elements[c];
     
                 if (elements[c] === 'X') {
                     // Current position
                     currentRow = r - 1;
                     currentCol = c;
                 } else if (elements[c] === '0' && (r === 1 || c === 0 || r === lines.length - 1 || c === elements.length - 1)) {
                     // Exit position
                     exitRow = r - 1;
                     exitCol = c;
                 }
             }
         }
         
         return [currentRow + 1, currentCol + 1];
     }

}