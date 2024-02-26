import { readFileRepository } from "../../infra/repositories/readFileRepository";
import { Main } from "../../main";

describe('Main application tests', () => {
    it('should correctly solve a predefined labyrinth', async () => {

        const exitRowPosition = '4';
        const exitColPosition = '8'
     
        const fakeRepository = new readFileRepository();
        const mainApp = new Main(fakeRepository);

        const result = await mainApp.runApp();

        // verify last position if
        expect(result[result.length - 1]).toContain(exitRowPosition)
        expect(result[result.length - 1]).toContain(exitColPosition)// Verificação básica, ajuste conforme a necessidade do seu teste

    });
});