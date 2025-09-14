let cities = ["New York","Kansas","St Louis","Chicago","Ballwin"];
for (let index = 0; index < cities.length; index++) {
    console.log(cities[index].toUpperCase());    
}

/* // OUTPUT
NEW YORK
KANSAS
ST LOUIS
CHICAGO
BALLWIN
*/

let numbers = [1,2,3,4,5];
let squares = numbers.map(num => num * num);
console.log(squares);
/* // OUTPUT
[ 1, 4, 9, 16, 25 ]
*/

let scores = [85, 42, 90, 75, 30,100];
let highScores = scores.filter( score => score >= 80);
console.log(highScores);

/* // OUTPUT
[ 85, 90, 100 ]
*/

let favoriteFood = ["Pizza","Chicken","Pasta","Salad","Soup","wings"];
let firstFood = favoriteFood.find(food => food.length>4);
console.log(firstFood);
let foodIndex = favoriteFood.indexOf(firstFood);
console.log(foodIndex);
/* // OUTPUT
Pizza
0
*/
