import { readFileInterface } from "../interfaces/readFileInterface";
import { readFileRepository } from "../infra/repositories/readFileRepository";

export class ReadFileCase{
 constructor(readonly readFileRepository: readFileInterface){}

async execute(): Promise<string[]> {
     const lines = await this.readFileRepository.readFile();
     return lines;
 }

}