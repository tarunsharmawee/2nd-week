const fs = require("fs");
const { promises } = require("dns");

// Promise for setTimeout
function SamayKaVada(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("after 2 sec");
      res();
    }, delay);
  });
}
SamayKaVada(2000).then(() =>
  console.log("Promise for settimeout Resolved")
);
console.log("\n")

// Promise for fetch
async function LeneKaVada(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
LeneKaVada("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
  console.log("\n")
// Promise for fs.readFile

function PadhneKaVada(filePath) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, (err, data) => {
        if(err){
            rej(err)
        } else{
            res(data)
        }
    });
  });
}

PadhneKaVada("data.txt")
     .then(data => console.log(data.toString()))
    .catch(err => console.error(err))
    console.log("\n")