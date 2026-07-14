function pick(user,keys){
    let result={};
    if(!keys.length){
        return user;
    }
    for(const element of keys){
        result[element]=user[element];
    }
    return result;
}
function omit(user,keys){
    let result={};
    for (const element of Object.keys(user)) {
        if(!keys.includes(element)){
            result[element]=user[element];
        }
    }
    return result;
}
const user = { id: 1, name: 'Adil', email: 'a@x.com', password: 'secret' };
console.log(pick(user,['id','name']));
console.log(omit(user, ['id','name']));

