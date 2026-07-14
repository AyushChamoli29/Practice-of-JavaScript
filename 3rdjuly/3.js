
// this not an optimized solution

// function newPath(arr){
//     arr.shift();
//     const newPath=arr.join(".");
//     return newPath;
// }
//  function getPath(obj,path){
//     if(!path.length)return obj;
//     let arr=path.split(".");
//     for (const element of arr) {
//         if(obj[element]===undefined)return "no key exist";
//         else if(obj[element]){
//             return getPath(obj[element],newPath(arr));
//         }
//         else return obj;
//     }
//  }

// this is optimized solution

function getPath(obj,path){
    if(!path.length)return obj;
    const arr=path.split(".");
    let result=obj;
    for (const element of arr) {
        if(result[element]===undefined)return "no key exist"
            result=result[element];
        }
        return result;
    }

console.log(getPath({a:{b:{c:5}}},'a.b.c'));

