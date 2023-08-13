const user = {fname:"gowtham", lname:"Suresh", age:20};
let text = "";
for (let x in user) {
  text += user[x] + " ";
}
console.log(text);
