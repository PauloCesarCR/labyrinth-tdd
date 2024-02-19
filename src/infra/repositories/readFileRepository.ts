import { readFileInterface } from '../../interfaces/readFileInterface'
import { open } from 'fs/promises'

export class readFileRepository implements readFileInterface {
    async readFile(): Promise<string[]> {
        try {
            const file = await open(
                'C:\\Users\\paulo\\Downloads\\entrada-labirinto (desafio 1).txt'
            )
            const lines = []
            for await (const line of file.readLines()) {
                lines.push(line)
            }
            return lines
        } catch (error) {
            throw new Error(error)
        }
    }
}
