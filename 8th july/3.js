function keyBy(arr,key){
    let result={};
    for (const element of arr) {
        result[element[key]]=element;
    }
    return result;
}

const users = [
{ id: 'u1', name: 'Alice' },
{ id: 'u2', name: 'Bob' }
];
console.log(keyBy(users, 'name'));
