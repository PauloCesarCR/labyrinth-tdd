import { FoundPositionCase } from "../../usecase/FoundPosition"

describe('origin position', () => {
    test('found origin position', () => {
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
            const originPosition = sut.execute(lines)

        //assert
            expect(originPosition[0]).toBe(4)
            expect(originPosition[1]).toBe(1)

    })
})