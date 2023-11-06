function addMatrices(m1, m2) {
    if(m1.length==m2.length)
    {
        const res = [];
        for (let i = 0; i < m1.length; i++) {
            const row = [];
            for (let j = 0; j < m1[i].length; j++) {
                row.push(m1[i][j] + m2[i][j]);
            }
            res.push(row);
        }

        return res;
    }
    else
        return false;
}

function mulMatrices(m1, m2) {
    var m1Rows = m1.length,
        m1Cols = m1[0].length,
        m2Rows = m2.length,
        m2Cols = m2[0].length;

    if(m1Cols==m2Rows){
        const res = new Array(m1Rows);
        for (let i = 0; i < m1Rows; ++i) {
            res[i] = new Array(m2Cols);
            for (let j = 0; j < m2Cols; ++j) {
                res[i][j] = 0;        
                for (let k = 0; k < m1Cols; ++k) {
                    res[i][j] += m1[i][k] * m2[k][j];
                }
            }
        }
        return res;
    }
    else{
        return false;
    }
    
}

function subtractMatrices(m1, m2) {
    if(m1.length==m2.length)
    {
        const res = [];
        for (let i = 0; i < m1.length; i++) {
            const row = [];
            for (let j = 0; j < m1[i].length; j++) {
                row.push(m1[i][j] - m2[i][j]);
            }
            res.push(row);
        }

        return res;
    }
    else
        return false;
}

function cofactor(m, p, q) {
    const res = [];
    for(let i = 0; i < m.length; i++){
        const row = [];
        if(i != p){
            for(let j = 0; j < m[0].length; j++){
                if(j != q){
                    row.push(m[i][j])
                }
            }
            res.push(row);
        }
    }
    return res;
}

module.exports = {
    addMatrices,
    subtractMatrices,
    mulMatrices,
    cofactor
};