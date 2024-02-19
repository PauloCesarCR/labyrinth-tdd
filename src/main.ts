import { readFileRepository } from './infra/repositories/readFileRepository'
import { readFileInterface } from './interfaces/readFileInterface'
import { FoundPosition } from './usecase/FoundPosition'
import { BackPosition } from './usecase/backPosition'
import { PositionNew } from './usecase/newPosition'
import { NextPlay } from './usecase/nextPlay'
import { LabirintoState } from './labirintyState'
class Main {

    constructor(
        readonly repository: readFileInterface
    ){}

    public async runApp(){

        try {
            const labirintylines = await this.repository.readFile()
            let { originPosition, exitPosition, matrix } = new FoundPosition().execute(labirintylines)
            let state = new LabirintoState([], 1, [], exitPosition[0], exitPosition[1], originPosition[0], originPosition[1]);
            
            state.updateResult("O")
            
            let achouSaida: boolean = state.currentRow == state.exitRow && state.currentCol == state.exitCol
            
            while (!achouSaida) {
                
                const nextPlayString = new NextPlay().execute([state.currentRow,state.currentCol], state.lastPlays, matrix);
                
                if(nextPlayString != "invalid position"){
                    const newPosition = new PositionNew().execute(nextPlayString, state.currentRow, state.currentCol);
                    state.updateCurrentRowAndCol(newPosition[0], newPosition[1])
                    state.AddLastPlay()
                    state.resetBack()
                } else {                    
                    const backPosition = new BackPosition().execute(state.lastPlays, state.numberOfBacks)
                    state.updateCurrentRowAndCol(backPosition[0], backPosition[1])
                    state.updateNumberOfBacks()
                }
                
                state.updateResult(nextPlayString[0])
              
                achouSaida = state.currentRow == state.exitRow && state.currentCol == state.exitCol
            }

            return state.result;
            
        } catch (error) {
            return error.message
        }
    }
}

(async () => {
    try {
        const repositoryFile = new readFileRepository();
        const mainInstance = new Main(repositoryFile);
        const result = await mainInstance.runApp();
        console.log(result);
    } catch (error) {
        console.error('Erro ao executar runApp:', error);
    }
})();