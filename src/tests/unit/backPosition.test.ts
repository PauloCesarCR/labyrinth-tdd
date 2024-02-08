import { BackPosition } from '../../usecase/backPosition'

describe('back position if necessary', () => {
    test('should return each position back to the start', () => {
        const sut = new BackPosition()

        let lastPositions: number[][] = [
            [4, 2],
            [4, 3],
            [3, 4],
            [3, 3],
            [3, 2],
            [3, 1],
        ]

        let positionsToTest = [...lastPositions]

        while (positionsToTest.length > 0) {
            const expectedPosition = positionsToTest[positionsToTest.length - 1]
            const backPosition = sut.execute(positionsToTest)

            expect(backPosition[0]).toBe(expectedPosition[0])
            expect(backPosition[1]).toBe(expectedPosition[1])

            positionsToTest.pop()
        }
    })
})
