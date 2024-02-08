import { BackPosition } from '../../usecase/backPosition'
import { NextPlay } from '../../usecase/nextPlay'
import { genMatrix } from '../../utils/initMatriz'

describe('what play is next?', () => {
    test('next play right', () => {
        //arrange
        const sut = new NextPlay()

        const matrix: ReadonlyArray<string[]> = [
            ['1', '1', '1', '1', '1', '1', '1', '1'],
            ['1', '1', '0', '1', '0', '1', '1', '1'],
            ['1', '1', 'X', '0', '0', '1', '1', '1'],
            ['0', '0', '0', '1', '0', '0', '0', '0'],
            ['1', '1', '1', '1', '1', '1', '1', '1'],
        ]
        let lastPositions: number[][] = [
            [3, 1],
            [3, 2],
            [2, 2],
            [1, 2],
        ]
        const currentPosition = [2, 2]

        //act
        const nextPosition = sut.execute(currentPosition, lastPositions, matrix)

        //assert
        expect(nextPosition).toBe('right')
    })
})
