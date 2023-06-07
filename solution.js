export function solution(field, moves) {
    moves = moves.replace(/\s/g, '');
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == "U") {
            for (let x = 0; x < field[0].length; x++) {
                for (let y = 0; y < field.length; y++) {
                    for (let k = 1; k < field.length-y; k++) {
                        if (field[y][x] != field[y+k][x] && field[y+k][x] != 0 && field[y][x] != 0) {
                            break
                        } else if (field[y][x] == field[y+k][x] && field[y][x] != 0) {
                            field[y][x] += field[y+k][x];
                            field[y+k][x] = 0;
                            break
                        } else if (field[y][x] == 0) {
                            field[y][x] += field[y+k][x];
                            field[y+k][x] = 0;
                        }
                    }
                }
            }
        };
        if (moves[i] == "D") {
            for (let x = 0; x < field[0].length; x++) {
                for (let y = field.length-1; y > 0; y--) {
                    for (let k = 1; k <= y; k++) {
                        if (field[y][x] != field[y-k][x] && field[y-k][x] != 0 && field[y][x] != 0) {
                            break
                        } else if (field[y][x] == field[y-k][x] && field[y][x] != 0) {
                            field[y][x] += field[y-k][x];
                            field[y-k][x] = 0;
                            break
                        } else if (field[y][x] == 0) {
                            field[y][x] += field[y-k][x];
                            field[y-k][x] = 0;
                        }
                    }
                }
            } 
        };
        if (moves[i] == "R") {
            for (let y = 0; y < field[0].length; y++) {
                for (let x = field.length-1; x > 0; x--) {
                    for (let k = 1; k <= x; k++) {
                        if (field[y][x] != field[y][x-k] && field[y][x-k] != 0 && field[y][x] != 0) {
                            break
                        } else if (field[y][x] == field[y][x-k] && field[y][x] != 0) {
                            field[y][x] += field[y][x-k];
                            field[y][x-k] = 0;
                            break
                        } else if (field[y][x] == 0) {
                            field[y][x] += field[y][x-k];
                            field[y][x-k] = 0;
                        }
                    }
                }
            }
        };
        if (moves[i] == "L") {
            for (let y = 0; y < field[0].length; y++) {
                for (let x = 0; x < field.length; x++) {
                    for (let k = 1; k < field.length-x; k++) {
                        if (field[y][x] != field[y][x+k] && field[y][x+k] != 0 && field[y][x] != 0) {
                            break
                        } else if (field[y][x] == field[y][x+k] && field[y][x] != 0) {
                            field[y][x] += field[y][x+k];
                            field[y][x+k] = 0;
                            break
                        } else if (field[y][x] == 0) {
                            field[y][x] += field[y][x+k];
                            field[y][x+k] = 0;
                        }
                    }
                }
            }
        };
    }
    return field
};