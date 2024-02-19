import { BackPosition } from '../../usecase/backPosition'

describe('back position if necessary', () => {
    test('position back', () => {
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
        
        const backPosition = sut.execute(positionsToTest, 2)

        expect(backPosition[0]).toBe(3)
        expect(backPosition[1]).toBe(3)

    })
})
