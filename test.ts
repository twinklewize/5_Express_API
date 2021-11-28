// в js enum превращается либо в функцию, либо используется как значения только там где он нужен

type direction = 'left | right'

enum Direction1 {
    Left = "left",
    Right = "right"
}



enum Direction2 {
    Left = 1,
    Right // тогда Right 2
}

enum Direction3 { // гетерогенный enum
    Left = 1,
    Right = "right"
}

enum Direction4 { // расчетный enum
    Left = 'dfgd'.length,
    Right = 1
}

enum Direction {
    Left, // 0
    Right // 1
}

Direction.Left

function move(direction: Direction) {
    switch (direction) {
        case Direction.Left:
            return -1
        case Direction.Right:
            return 1
    }
}

function objMod(obj: { Left: number }) {

}

objMod(Direction)

const enum Dir {
    Up,
    Down
}

let myDirection = Dir.Up