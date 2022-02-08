// N: 1~1000000
// ele: -1000000 ~ 1000000
function solution(A: number[]) {
    const length = A.length;
    let positiveNum = 1;

    if (length) {
        const newArr = Array.from(new Set(A));
        newArr.sort((a, b) => a-b);
        for(let i =0;i<length;i++) {
            const plusNum = newArr[i] + 1;

            if (i > 0 && newArr[i] > 1 && newArr[i-1] <= 0) {
                positiveNum  = 1;
                break;
            }

            if (plusNum > 1 && newArr[i] + 1 !== newArr[i + 1]) {
                positiveNum  = plusNum;
                break;
            }
        }
    }

    return positiveNum;
}