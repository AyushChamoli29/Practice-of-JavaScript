function setPath(obj,path,value){
    let arr=path.split(".");
    let temp=obj;
    for (let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            temp[arr[i]]=value;
        }
        else{
            temp[arr[i]]={};
            temp=temp[arr[i]];
        }
    }
    return obj;
}

console.log(setPath({}, "a.b.c", 10));

