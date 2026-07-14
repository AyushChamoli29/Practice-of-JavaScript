function deepDiff(obj1,obj2){
    const key1=Object.keys(obj1);
    const key2=Object.keys(obj2);
    let obj={};
    for(const key in obj1){
        if(!obj1[key]===obj2[key]){
            obj[key]=obj1[key];
        }
    }
}