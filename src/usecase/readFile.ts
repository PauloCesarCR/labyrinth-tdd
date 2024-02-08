import { readFileInterface } from '../interfaces/readFileInterface'

export class ReadFileCase {
    constructor(readonly readFileRepository: readFileInterface) {}

    async execute(): Promise<string[]> {
        const lines = await this.readFileRepository.readFile()
        return lines
    }
}
