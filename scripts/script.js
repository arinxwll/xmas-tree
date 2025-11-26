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

let nomera = [1,2,3];
let newNums = nums.map (n => n + 5);
console.log(newNums);
let nomer = [1,2,3, 4, 5, 6, 7, 8];
let even = nomer.filter (n => n % 2 === 0);
console.log(even);

let nomers = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let n = nomers.filter (n => n >= 10);
console.log(n);

let boxes = [
    {weignt: 2, label:"легкая"},
    {weignt: 5, label:"средняя"},
    {weignt: 12, label:"тяжелая"},
    {weignt: 15, label:"очень тяжелая"},
];
let havyBox = boxes.find(box => box.weight > 10);
console.log (havyBox);

let innerPlanets = ["меркурий", "венера", "земля", "марс"];
let outerPlanets = ["юпитер", "сатурн", "уран", "нептун"];

let allPlanets = innerPlanets.concat(outerPlanets);
console.log(allPlanets);
let wors = ["I", "like", "JS"];
let sentence = wors.join(" ");
console.log(sentence);

let toy = ["шар,звезда,колокольчик"];
let list = toy.join(", ");
console.log(list);

let toystring = ["шар,звезда,колокольчик"];
// let toys = toystring.split(",");
// console.log(toys);

let toyy = ["шар,звезда,колокольчик"];
toyy.forEach((toyy, i) => {
console.log(i, toyy);
}
);

let toys = [
    {
    name: "большой шар с рисунком Цветок",
    count: 2,
    year: 1960,
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false
    },

{
    name: "большой шар с рисунком Цветок",
    count: 2,
    year: 2000,
    shape: "шар",
    color: "зеленый",
    size: "большой",
    favorite: false
    },
    {
        name: "большой шар с рисунком Цветок",
        count: 6,
        year: 2005,
        shape: "шар",
        color: "красный",
        size: "большой",
        favorite: false
        },
        {
            name: "большой шар с рисунком Цветок",
            count: 5,
            year: 2000,
            shape: "шар",
            color: "синий",
            size: "юольшой",
            favorite: false
            },
            {
                name: "большой шар с рисунком Цветок",
                count: 3,
                year: 1960,
                shape: "шар",
                color: "фиолетовый",
                size: "большой",
                favorite: false
                },
        ]

        toys.forEach(toy => {
            console.log(
                toy.name + 
                " - " +
                toy.color + 
                ", форма: " +
                toy.shape +
                ", количество: " +
                toy.count
            );
        });

        let updatedToys = toys.map( toy => {
            return {
            ...toy,
            count: toy.count + 1
            };
        });
        console.log(updatedToys);
        let toyStore = {
            list: ["redball", "blueBall", "star"],

            getToy(index) {
                return this.list[index];
            }
        };

        let tree = {
        type:"snowy",
        background:"living_room",
        garland:"multi",
        toys: [
            {id: 1,x: 120, y: 240, tepe:"ball_red"},
            {id: 2,x: 160, y: 300, tepe:"ball_gold"}

        ]
        };

        let original = {a: 1, b: 2};

        let copy = Object.assign({}, original);

        copy.a = 99;
        console.log(original.a);       
        
        