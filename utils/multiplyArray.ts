export const multiplyArray = (arr: number[]): number => {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => acc * val, 1);
};
