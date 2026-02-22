module.exports = function (mapString) {
    //преобразуем строчки в массив
    const map = mapString.split(/\n/);
    const R = map.length;
    const C = map[0].length;

    //ищем дырки
    const holes = [];
    for(let i = 0; i < C; i++) {
        if(/\d/.test(map[0][i])) holes.push({row: 0, col: i});
        if(/\d/.test(map[R-1][i])) holes.push({row: R-1, col: i});
    }
    for(let i = 1; i < R-1; i++) {
        if(/\d/.test(map[i][0])) holes.push({row: i, col: 0});
        if(/\d/.test(map[i][C-1])) holes.push({row: i, col: C-1});
    }

    //проходим по всей кастрюле и находим самую дальнюю букву от дырок
    let maxDistance = 0;
    for(let i = 1; i < R-1; i++) {
        for(let j = 1; j < C-1; j++) {
            if(/[A-Z]/.test(map[i][j])) {
                let distance = R + C;
                holes.forEach((hole) => {
                    const holeDistance = Math.abs(i - hole.row) + Math.abs(j - hole.col);
                    if(holeDistance < distance) distance = holeDistance;
                })
                if(distance > maxDistance) maxDistance = distance;
            }
        }
    }

    const timeInSec = maxDistance + 1;

    return timeInSec; // Время в секундах, за которое все буквы вытекли
}