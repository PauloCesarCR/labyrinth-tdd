import { Play } from "../../usecase/play"
import { genMatrix } from "../../utils/initMatriz";

describe('what play is next?', () => {
    test('next play right', () => {
        //arrange
        const sut = new Play();

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "1 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
            ]


        const matrix: ReadonlyArray<string[]> = [
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '1', '0', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '0', '0', '1',
              '1', '1'
            ],
            [
              'X', '0', '0',
              '1', '0', '0',
              '0', '0'
            ],
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ]
          ]
        const originPosition = [4,1]
        //act
        
        const nextPosition = sut.execute(originPosition,matrix);
        //assert

        expect(nextPosition).toBe("right")
    })

    test('next play top', () => {
        //arrange
        const sut = new Play();

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "0 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
            ]


        const matrix: ReadonlyArray<string[]> = [
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '1', '0', '1',
              '1', '1'
            ],
            [
              '0', '1', '0',
              '0', '0', '1',
              '1', '1'
            ],
            [
              'X', '0', '0',
              '1', '0', '0',
              '0', '0'
            ],
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ]
          ]
        const originPosition = [4,1]
        //act
        
        const nextPosition = sut.execute(originPosition,matrix);
        //assert

        expect(nextPosition).toBe("top")
    })


    test('next play left', () => {
        //arrange
        const sut = new Play();

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "0 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
            ]


        const matrix: ReadonlyArray<string[]> = [
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '1', '0', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '0', '0', '1',
              '1', '1'
            ],
            [
              '0', 'X', '0',
              '1', '0', '0',
              '0', '0'
            ],
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ]
          ]
        const originPosition = [4,2]
        //act
        
        const nextPosition = sut.execute(originPosition,matrix);
        //assert

        expect(nextPosition).toBe("left")
    })


    test('next play bottom', () => {
        //arrange
        const sut = new Play();

        const lines: ReadonlyArray<string> = [
            "5 8",
            "1 1 1 1 1 1 1 1",
            "1 1 0 1 0 1 1 1",
            "0 1 0 0 0 1 1 1",
            "X 0 0 1 0 0 0 0",
            "1 1 1 1 1 1 1 1"
            ]


        const matrix: ReadonlyArray<string[]> = [
            [
              '1', '1', '1',
              '1', '1', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '1', '0', '1',
              '1', '1'
            ],
            [
              '1', '1', '0',
              '0', '0', '1',
              '1', '1'
            ],
            [
              '1', 'X', '1',
              '1', '0', '0',
              '0', '0'
            ],
            [
              '1', '0', '1',
              '1', '1', '1',
              '1', '1'
            ]
          ]
        const originPosition = [4,2]
        //act
        
        const nextPosition = sut.execute(originPosition,matrix);
        //assert

        expect(nextPosition).toBe("bottom")
    })


    test("verify if position was played", () => {
  
      const sut = new Play() 
      const lines: ReadonlyArray<string> = [
          "5 8",
          "1 1 1 1 1 1 1 1",
          "1 1 0 1 0 1 1 1",
          "1 1 0 0 0 1 1 1",
          "0 X 0 1 0 0 0 0",
          "1 0 1 1 1 1 1 1"
      ]
      const lastPositions: number[][] = [[4,2], [4,3], [3,4], [3,3], [3,2]];
      const nextPosition: number[] = [3,3];

      const played: boolean= sut.verifyPosition(lastPositions,nextPosition);

      expect(played).toBe(true);

  })
  
})