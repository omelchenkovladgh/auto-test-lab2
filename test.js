const expect = require('chai').expect;
const mtrxLib = require('./matrixLib');

describe('Matrix library', () => {
    it('Summ of two matrices', () => {
        const m1 = [[1, 6], [2, 3]];
        const m2 = [[1, 3], [1, 1]];
        const res = mtrxLib.addMatrices(m1, m2);
        expect(res).to.deep.equal([[2, 9], [3, 4]]);
    });

    it('Subtractiin of two matrices', () => {
        const m1 = [[1, 6], [2, 3]];
        const m2 = [[1, 3], [1, 1]];
        const res = mtrxLib.subtractMatrices(m1, m2);
        expect(res).to.deep.equal([[0, 3], [1, 2]]);
    });

    it('Multiplication of two matrices', () => {
        const m1 = [[1, 6], [2, 3]];
        const m2 = [[1, 3], [1, 1]];
        const res = mtrxLib.mulMatrices(m1, m2);
        expect(res).to.deep.equal([[7, 9], [5, 9]]);
    });

    it('Cofactoring of matrix', () => {
        const m = [[1, 6, 2], [2, 3, 8], [5, 3, 6]];
        const res = mtrxLib.cofactor(m, 0, 2);
        expect(res).to.deep.equal([[2, 3], [5, 3]]);
    });
});