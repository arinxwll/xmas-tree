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

const toysGrid = document.querySelector(".toys-grid");
const treeArea = document.querySelector(".tree-area");

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";

      // сохраняем id в DOM
      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      // сохраняем в объект текущей ёлки
      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});
toys.forEach((toy, index) => {
const toyBox = document.createElement("div");


const img = document.createElement ("div");
img.src = toy.image;
img.classList.add("toy");
img.draggable= true;
img.dataset.index = index;

const countBox= document.createElement ("div");

countBox.textContent = toy.count;
countBox.style.color = "white";
countBox.style.textAlign = "center";
countBox.style.fontSize = "14px";

toyBox.appendChild(img);
toyBox.appendChild(countBox);

toysGrid.appendChild(toyBox);

img.addEventListener("dragstar", e => {
    if (toy.count === 0) {
        e.preventDefault()
return    
}
e.dataTransfer.setdata("toy", index);
})



});
let toys = [
    { 
        name: "Желтая игрушка с цветком",
         color: "red", 
         count: 5, 
         year: 2023, 
         shape: "ball", 
         favorite: true,
         image: "./images/5294.png" 
        },
    { 
        name: "Красная игрушка с цветком", 
        color: "red", 
        count: 5, 
        year: 2023 ,
        shape: "ball", 
        favorite: true, 
        image: "./images/5295.png" 
    },
    { 
        name: "Синяя игрушка с цветком", 
        color: "blue", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5296.png" 
    },
    { 
        name: "Черная игрушка с цветком", 
        color: "black", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5297.png" 
    }
];
let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
};
/*let toys = [
    {
    name: "большой шар",
    count: 5,
    year: 1960,
    shape: "шар",
    color: "красный",
    size: "большой",
    favorite: false,
    image:"./images/5294.png"
    },

{
    name: "большой шар",
    count: 3,
    year: 2000,
    shape: "шар",
    color: "белокрасный",
    size: "большой",
    favorite: false,
    image:"./images/5295.png"
    },
    {
        name: "большой шар с рисунком",
        count: 6,
        year: 2005,
        shape: "шар",
        color: "желтый",
        size: "большой",
        favorite: false,
        image:"./images/5296.png"
        },
        {
            name: "большой шар с рисунком",
            count: 5,
            year: 2000,
            shape: "шар",
            color: "зеленый",
            size: "большой",
            favorite: false,
            image:"./images/5297.png"
            },
            {
                name: "маленький шар",
                count: 3,
                year: 1960,
                shape: "шар",
                color: "красный",
                size: "маленький",
                favorite: false,
                image:"./images/5298.png"
                },
                {
                    name: "большое кольцо",
                    count: 5,
                    year: 1960,
                    shape: "кольцо",
                    color: "серое",
                    size: "большое",
                    favorite: false,
                    image:"./images/5299.png"
                    },
                    {
                        name: "большой мягкий шар",
                        count: 3,
                        year: 1960,
                        shape: "шар",
                        color: "красный",
                        size: "большой",
                        favorite: false,
                        image:"./images/5300.png"
                        },
                        {
                            name: "большой колокольчик",
                            count: 3,
                            year: 1960,
                            shape: "шар",
                            color: "красный",
                            size: "большой",
                            favorite: false,
                            image:"./images/53001.png"
                            
                            }, <img src="./images/5294.png" alt="1">
                <img src="./images/5295.png" alt="2"> 
                <img src="./images/5296.png" alt="3"> 
                <img src="./images/5297.png" alt="4">
                <img src="./images/5298.png" alt="5">
                <img src="./images/5299.png" alt="6">
                <img src="./images/5300.png" alt="7">
                <img src="./images/5301.png" alt="8">
                <img src="./images/5302.png" alt="9">
                <img src="./images/5303.png" alt="10">
                <img src="./images/5304.png" alt="11">
                <img src="./images/5305.png" alt="12">
                <img src="./images/5306.png" alt="13">
                <img src="./images/5307.png" alt="14">
                <img src="./images/5308.png" alt="15">
                <img src="./images/5309.png" alt="16">
              </div>
            </aside>
        </div>
                            

        ]*/
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
      
        // const treeArea= document.querySelector(".tree-area");
        // treeArea.addEventListener("dragover", e => e.preventDefault())

        // treeArea.addEventListener("drop", e => {
        //     e.preventDefault();

        //     const rect = treeArea.getBoundingClientRect();

        //     const x = e.clientX - rect.left;
        //     const y = e.clientY - rect.top;

        //     if (e.dataTransfer.getData("toy") !== "") {
        //         const toyIndex = e.dataTransfer.getData("toy");
        //         const toy = toys[toyIndex];

        //         if (toy.count > 0) {
        //             toy.count -= 1;
        //         const xPos = x - 40;
        //         const yPos = y - 40;

        //         const img = document.createElement("img");
        //         img.src= toy.image;
        //         img.classList.add("toy-on-tree");
        //         img.style.left = xPos = "px";
        //         img.style.top = yPos = "px";
        //         treeArea.appendChild(img);
        //         currentTree.addToy(toy, xPos, yPos);

        //         toysGrid.cildren[toyIndex].children[1].textContent = toy.count;

        //         img.addEventListener("click", () => {
        //             img.remove();

        //             toy.count += 1;
        //             toysGrid.children[toyIndex].children[1],textContent = toy.count;

        //             currentTree.toys = currentTree.toys.filter ( t => t.id !== toy.id);
        //         });
        //     }
        //     }
        // })
<audio id="xmas-audio" loop>
        <source src="./audio/jingle-bells.mp3" type="audio/mpeg">
      </audio>
      const speakerBtn = document.getElementById("speaker-btn");
const audio = document.getElementById("xmas-audio");

let musicOn = false;

speakerBtn.addEventListener("click", () => {
  if (!musicOn) {
    audio.play();
    musicOn = true;
    speakerBtn.classList.add("sound-on");
  } else {
    audio.pause();
    musicOn = false;
    speakerBtn.classList.remove("sound-on");
  }
});