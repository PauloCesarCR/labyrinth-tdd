export class LabirintoState {
    constructor(
        public result: string[],
        public numberOfBacks: number,
        public lastPlays: number[][],
        public exitRow: number,
        public exitCol: number,
        public currentRow: number,
        public currentCol: number
    ) {}

    public updateResult(sideLetter: string){
        this.result.push(`${sideLetter.toLocaleUpperCase()} [${this.currentRow + 1}], [${this.currentCol + 1}]`)
    }

    public resetBack(){
        this.numberOfBacks = 1;
    }

    public updateNumberOfBacks(){
        this.numberOfBacks++
    }
    
    public AddLastPlay(){
        this.lastPlays.push([this.currentRow,this.currentCol])
    }

    public updateCurrentRowAndCol(currentRow: number, currentCol: number){
        this.currentRow = currentRow;
        this.currentCol = currentCol
    }
}
