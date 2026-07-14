function intersectAll(arr){
    let count=arr.length;
    if(count==1)return arr;
    let result=[];
    let arr1=arr.flat(Infinity);
    const ans={};
    for(const element of arr1){
        if(ans[element]){
            ans[element]++;
        }
        else{
            ans[element]=1;
        }
    }
    for (let key in ans) {
        if(ans[key]==count){
            key=Number(key);
            result.push(key);
        }
    }
    return result;
}

console.log(intersectAll([[1, 2, 3, 4],
[2, 3, 4, 5],
[3, 4, 5, 6]]));

