// Question 4

let a = parseInt(prompt('Enter the value of a', ""));
let b = parseInt(prompt('Enter the value of b', ""));
let c = parseInt(prompt('Enter the value of c', ""));
if ((a < b && a > c) || (a > b && a < c)) {
    console.log(a);
} else if ((b < a && b > c) || (b > a && b < c)) {
    console.log(b);
} else {
    console.log(c);
}