function solution(a) {
    let result = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a.length; j++) {
            sum += Math.abs(a[j] - a[i]);
        }
        if (sum < min) {
            min = sum;
            result = a[i];
        }
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test absoluteValuesSumMinimization

// alternative solution
// function solution(A) {
//     return A[Math.ceil(A.length / 2) - 1];
// }

// alternative solution
// function solution(a) {
//     return a[Math.floor((a.length - 1) / 2)];
// }

// alternative solution
// const solution = (a) => {
//     let distances = a.map((e) => a.reduce((acc, cur) => acc + Math.abs(cur - e), 0));
//     return a[distances.indexOf(Math.min(...distances))];
// };
