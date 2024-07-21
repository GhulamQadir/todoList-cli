#! /usr/bin/env node
import inquirer from "inquirer";
let addTodosCondition = true;
let todos = [];
const askForTodo = await inquirer.prompt({
    name: "question1",
    message: "Do you want to add todo in your list",
    type: "list",
    choices: ["Yes", "No"],
});
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let fullDate = `${day}/${month + 1}/${year}`;
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let fullTime = `${hour}:${minutes}:${seconds}`;
setInterval(() => {
    date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    fullDate = `${day}/${month + 1}/${year}`;
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    fullTime = `${hour}:${minutes}:${seconds}`;
}, 1000);
if (askForTodo.question1 === "Yes" || addTodosCondition === true) {
    while (addTodosCondition) {
        const addTodo = await inquirer.prompt({
            name: "todo",
            message: "Write todo which you want to add in your list ",
            type: "input",
        });
        todos.push({ todo: addTodo.todo, date: fullDate, time: fullTime });
        console.log(todos);
        const addMoreTodos = await inquirer.prompt({
            name: "addMore",
            message: "Do you want to add more todos?",
            type: "list",
            choices: ["Yes", "No"],
        });
        if (addMoreTodos.addMore == "Yes") {
            addTodosCondition = true;
        }
        else if (addMoreTodos.addMore == "No") {
            addTodosCondition = false;
            console.log("Your todo list is: ", todos);
        }
    }
}
