#! /usr/bin/env node
import inquirer from "inquirer";

let to_Do = ["Morning shower, Breakfast, Reading news paper"];

console.log(to_Do);

let condition = true;

while(condition) {

let app_Q = await inquirer.prompt([{
    name : "addTodos",
    type : "input",
    message: "which work you want to add in your list ??"},

{
    name: "addMore",
    type: "confirm",
    message: "want to add more ToDos?",
    default: "false"
}

]);

console.log(app_Q.addTodos);
to_Do.push(app_Q.addTodos)
condition = app_Q.addMore;
}
console.log(to_Do);
console.log("Remember!! it is a routine of Weekends");

