function transpose(matrix){
    let result=[];
    let row=matrix.length;
    let column=matrix[0].length;
    for(let i=0;i<column;i++){
        result[i]=[];
        for(let j=0;j<row;j++){
            result[i][j]=matrix[j][i];
        }
    }
    return result;
}

console.log(transpose([
[1, 2, 3],
[4, 6, 7]
]));

