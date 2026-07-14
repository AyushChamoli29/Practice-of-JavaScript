// VERY IMPORTANT...THIS IS THE REVERSE OF 5.JS
function unflattenObject(obj) {
  const result = {};
  for (const [path, value] of Object.entries(obj)) {
    const keys = path.split(".");
    let current = result;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
    current[keys[keys.length - 1]] = value;
  }
  return result;
}

const object={
'user.name': 'Adil',
'user.address.city': 'Dehradun',
'user.address.zip': '248001',
'active': true
}

console.log(unflattenObject(object));