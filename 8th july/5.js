function flattenObject(obj,prefix='',result={}){
    for(const key in obj){
        let newPrefix="";
        if(prefix){
            newPrefix=`${prefix}.${key}`;
        }
        else{
            newPrefix=key;
        }
        if(obj[key]&&typeof obj[key]==='object'&&!Array.isArray(obj[key])){
             flattenObject(obj[key],newPrefix,result);
        }
        else{
            result[newPrefix]=obj[key];
        }
    }
    return result;
}
const object={
user: {
name: 'Adil',
address: { city: 'Dehradun', zip: '248001' }
},
active: true
}
console.log(flattenObject(object));