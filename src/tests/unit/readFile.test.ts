import { readFileRepository } from "../../infra/repositories/readFileRepository";
import { ReadFileCase } from "../../usecase/readFile";

describe('file', () => {

    test('readFile test', async () => {
        //arrange
        const repository = new readFileRepository()
        const sut = new ReadFileCase(repository)

        //act
        const lines = await sut.execute()

        //Assert
        expect(lines.length).toBeGreaterThan(3);

    });
});
