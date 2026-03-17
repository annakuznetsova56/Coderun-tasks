/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
module.exports = function (N, staff, K) {
    let x = 0;
    const count = new Array(26).fill(0);

    for(let i = 0; i < N; i++) {
        count[staff[i]]++;
    }

    let grade = 25;
    for(let i = 0; i < K; i++) {
        while(count[grade] === 0) grade--;

        x = x + grade;
        count[grade]--;
    }

    return x // x - максимальный уровень Яндексформера
}