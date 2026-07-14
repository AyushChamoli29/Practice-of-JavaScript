function sortByKeys(arr,keys){
    arr.sort((a,b)=>{
        for (const element of keys) {
            if(a[element]<b[element])return -1;
            else if(a[element]>b[element])return 1;
        }
        return 0;
    });
    return arr;
};

const employees = [
{ dept: 'IT', name: 'Charlie', age: 25 },
{ dept: 'HR', name: 'Alice', age: 30 },
{ dept: 'IT', name: 'Bob', age: 22 }
];
console.log(sortByKeys(employees,['dept','name']));