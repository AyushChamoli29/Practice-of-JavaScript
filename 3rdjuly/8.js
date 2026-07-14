function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }
 
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
 
  for (const key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
}

function deepIncludes(arr,target){
    if(deepEqual(arr,target))return true;
    if(Array.isArray(arr)){
        for(const element of arr){
            if(deepIncludes(element,target)){
                return true;
            }
        }
    }
    else if(typeof arr=='object'){
        for(const key in arr){
            if(deepIncludes(arr[key],target)){
                return true;
            }
        }
    }
    return false;
    }

    console.log(deepIncludes([1, [2, {a:3}], 4], {a:3}));