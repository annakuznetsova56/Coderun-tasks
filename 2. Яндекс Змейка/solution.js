/**
* @param {string[]} field - описание поля в виде массива строк
* @param {string} moves - строка со всеми движениями змейки
* @returns {[number[], number]}
*/
module.exports = function (field, moves) {
    let x = 0;
    let y = 2;
    let N = 3;

    const items = moves.trim().split(/\s+/);
    const steps = [];

    for(let i = 0; i < items.length; i += 2) {
        steps.push({
            direction: items[i],
            number: parseInt(items[i+1])
        })
    }

    steps.forEach((step) => {
        for(let i = 0; i < step.number; i++) {
            switch(step.direction) {
                case 'U': x--; break;

                case 'D':
                    x++;
                    break;

                case 'R':
                    y++;
                    break;

                case 'L':
                    y--;
                    break;
            }


            if(field[x][y] !== '-' && field[x][y] !== 'o') {
                N++;
                const row = field[x];
                field[x] = row.substring(0, y) + '-' + row.substring(y + 1);
            }
        }
    })

    

    return [[x, y], N]; // [x, y] - координаты головы змейки, N - размер змейки
}