//require the csvtojson converter class 
const csv = require("csvtojson");
const fs = require("fs");

const file = "./csv/fev-mars2018.csv";
// call the fromFile function which takes in the path to your 

csv().fromFile(file)
.then((jsonArray)=>{
     fs.writeFileSync("./data/fev-mars2018.json",JSON.stringify(jsonArray), "UTF-8");
})
.catch((error)=> console.log(error));