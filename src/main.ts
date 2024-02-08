import { readFileRepository } from './infra/repositories/readFileRepository'
import { FoundPosition } from './usecase/FoundPosition'
import { BackPosition } from './usecase/backPosition'
import { PositionNew } from './usecase/newPosition'
import { NextPlay } from './usecase/nextPlay'
import { ReadFileCase } from './usecase/readFile'

async function Main() {
    try {
        const repository = new readFileRepository()
        const labirintylines = await new ReadFileCase(repository).execute()
        let { originPosition, exitPosition, matrix } =
            new FoundPosition().execute(labirintylines)
        let result: string[] = []
        let lastPlays: number[][] = []

        let exitRow: number = exitPosition[0]
        let exitCol: number = exitPosition[1]
        let currentRow: number = originPosition[0] - 1
        let currentCol: number = originPosition[1] - 1

        result.push(`O [ ${currentRow + 1},${currentCol + 1} ]`)

        let achouSaida: boolean = currentRow == exitRow && currentCol == exitCol

        while (!achouSaida) {
            achouSaida = currentRow == exitRow && currentCol == exitCol
        }
    } catch (error) {}
}

Main()
