var fs=require('fs');
var table=fs.readFileSync('data/nov-dec2018.json', 'utf8');
var data=JSON.parse(table);
console.log(data);