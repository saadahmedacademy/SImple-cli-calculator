#! /use/bin/node

import inquirer from 'inquirer'

let answers = await inquirer.prompt(
    [
        {
            message:"Enter Your Fisst Number : ",
            type:"number",
            name:'input1'
        },
        
        {
            message:"Enter Your Second Number : ",
            type:"number",
            name:'input2'
        },
        {
            message:"Enter Your Fisst Number : ",
            type:"list",
            name:'operation',
            choices:["Addition","Subtraction","Multiplication","Division"],

        }
    ]
);

if (answers.operation === "Addition") {
    console.log(answers.input1 + answers.input2)
} else if (answers.operation === "Subtraction") {
    console.log(answers.input1 - answers.input2)

} else if (answers.operation === "Multiplication") {
    console.log(answers.input1 * answers.input2)

} else if (answers.operation === "Division") {
    console.log(answers.input1 / answers.input2)

} else {
    console.log("Please Select Valid Operator");
}
console.log(answers)