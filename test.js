const {deepCopy} = require('./index');
const a = {b: 10, c: {d:20}};
const b = deepCopy(a);
b.c.d = 10;
console.log(a,b);
