let fruits = ["яблоко", "киви", "груша"];
let students = [
{name: "анна", age: 15},
{name: "игорь", age: 16}
]
let films = ["осд", "дв", "астрал", "оно", "крик"];
console.log(films);

let numbers = [10, 20, 30];
 for (let i = 0; i < numbers.length; i++)
 {
    console.log(numbers[i]);
 } 
 let fruit = ["яблоко", "киви", "груша"];
for (let fruit of fruits) {
    console.log(fruit);
}
let student = [
    {name: "анна", age: 15},
    {name: "игорь", age: 16}
    ];
    for (let student of students) {
        console.log(student.name);
    }
    let nums = [1, 2, 3];
    nums.push(4);

    let pets = ["кот", "собака"];
    pets.push("хомяк");
    console.log(pets);

    let number = [1, 2, 3];
    let removed = number.pop();
    console.log(number+"--"+removed);

    let word = ["мир"];
    word.unshift("привет")
console.log(word);

let colors = ["green", "white", "red"]
console.log(colors.includes("green"))
console.log(colors.includes("black"))

let num = [10, 20, 30, 40 ];
let part = num.slice(1, 3);
console.log(part);
    console.log(num);

    let numb = [10, 20, 30, 40 ];
let removedd = numb.splice(1, 3);
console.log(numb);
    console.log(removedd);

    let words = ["hi", "word"];
    let message = words.join(" ");
    console.log(message);

let numbe = [1, 2, 3];
numbe.reverse();
console.log(number);
