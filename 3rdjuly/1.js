function deepMerge(target,source){
    for (const key of Object.keys(source)) {
        if(Object.keys(target).includes(key)&&typeof source[key]=='object'&&typeof target[key]=='object'){
            deepMerge(target[key],source[key]);
        }
        else{
            target[key]=source[key];
        }
  
    }
    return target;
}

console.log(deepMerge({a:{b:1,c:2}}, {a:{c:3,d:2}}));