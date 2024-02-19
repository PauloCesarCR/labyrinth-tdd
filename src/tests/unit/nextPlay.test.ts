import { NextPlay } from '../../usecase/nextPlay'

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

    test('next play left', () => {
        //arrange
        const sut = new NextPlay()

        const matrix: ReadonlyArray<string[]> = [
            ['1', '1', '1', '1', '1', '1', '1', '1'],
            ['1', '1', '0', '1', '0', '1', '1', '1'],
            ['1', '0', 'X', '0', '0', '1', '1', '1'],
            ['0', '0', '0', '1', '0', '0', '0', '0'],
            ['1', '1', '1', '1', '1', '1', '1', '1'],
        ]
        let lastPositions: number[][] = [
            [3, 1],
            [3, 2],
            [2, 2],
            [1, 2],
            [2, 3]
        ]
        const currentPosition = [2, 2]

        //act
        const nextPosition = sut.execute(currentPosition, lastPositions, matrix)

        //assert
        expect(nextPosition).toBe('left')
    })

    test('next play top', () => {
        //arrange
        const sut = new NextPlay()

        const matrix: ReadonlyArray<string[]> = [
            ['1', '1', '1', '1', '1', '1', '1', '1'],
            ['1', '1', '0', '1', '0', '1', '1', '1'],
            ['1', '1', '0', '0', '0', '1', '1', '1'],
            ['0', '0', 'X', '1', '0', '0', '0', '0'],
            ['1', '1', '1', '1', '1', '1', '1', '1'],
        ]
        let lastPositions: number[][] = [
            [3, 0],
            [3, 1],
        ]
        const currentPosition = [3, 2]

        //act
        const nextPosition = sut.execute(currentPosition, lastPositions, matrix)

        //assert
        expect(nextPosition).toBe('top')
    })

    test('next play bottom', () => {
        //arrange
        const sut = new NextPlay()

        const matrix: ReadonlyArray<string[]> = [
            ['1', '1', '1', '1', '1', '1', '1', '1'],
            ['1', '1', '0', '1', '0', '1', '1', '1'],
            ['1', '1', '0', '0', '0', '1', '1', '1'],
            ['0', '0', 'X', '1', '0', '0', '0', '0'],
            ['1', '1', '0', '1', '1', '1', '1', '1'],
        ]
        let lastPositions: number[][] = [
            [3, 0],
            [3, 1],
            [2, 2]
        ]
        const currentPosition = [3, 2]

        //act
        const nextPosition = sut.execute(currentPosition, lastPositions, matrix)

        //assert
        expect(nextPosition).toBe('bottom')
    })
})
