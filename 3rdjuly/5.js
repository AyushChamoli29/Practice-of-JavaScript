function deepCount(obj) {
  let count = 0;
  count += Object.keys(obj).length;
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      count += deepCount(obj[key]);
    }
  }
  return count;
}

console.log(deepCount({}));
