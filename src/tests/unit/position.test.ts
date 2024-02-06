import { FoundPositionCase } from "../../usecase/FoundPosition"
import { PositionNew } from "../../usecase/newPosition";

describe('position', () => {

    
    test('found start position', () => {
        //arrange
            const sut = new FoundPositionCase();
            const lines = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
            ]

        //act
            const {originPosition} = sut.execute(lines)

        //assert
            expect(originPosition[0]).toBe(4)
            expect(originPosition[1]).toBe(1)

    })

    test("move top position", () => {

        //arrange
        const sut = new PositionNew()
        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
        ]
        const originPosition = [4,1];
        let currentRow = originPosition[0] - 1;
        let currentCol = originPosition[1] - 1;

        // act 
        const newPosition = sut.execute("top", currentRow, currentCol);
        
        //expect 

        expect(newPosition[0]).toBe(2)
        expect(newPosition[1]).toBe(currentCol)


    })

    test("move left position", () => {

        const sut = new PositionNew()

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "0 X 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
        ]
        const originPosition = [4,2];
        let currentRow = originPosition[0] - 1;
        let currentCol = originPosition[1] - 1;

        // act 
        const newPosition = sut.execute("left", currentRow, currentCol);

        expect(newPosition[0]).toBe(3)
        expect(newPosition[1]).toBe(0)
    })

    test("move right position", () => {
        const sut = new PositionNew()

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "0 X 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
        ]
        const originPosition = [4,2];
        let currentRow = originPosition[0] - 1;
        let currentCol = originPosition[1] - 1;

        // act 
        const newPosition = sut.execute("right", currentRow, currentCol);

        expect(newPosition[0]).toBe(3)
        expect(newPosition[1]).toBe(2)
    })

    test("move bottom position", () => {
        const sut = new PositionNew()

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "0 X 0 1 0 0 0 0",
            "1 0 1 1 1 1 1 1"
        ]
        const originPosition = [4,2];
        let currentRow = originPosition[0] - 1;
        let currentCol = originPosition[1] - 1;

        // act 
        const newPosition = sut.execute("bottom", currentRow, currentCol);

        expect(newPosition[0]).toBe(4)
        expect(newPosition[1]).toBe(1)
    })
        
})