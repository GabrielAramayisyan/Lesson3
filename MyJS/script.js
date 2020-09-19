let Text = prompt("Enter your text");
let number = 0;

if (Text. length < 5) {
    alert ("You can write min 5 symbols");
}

switch (Text. charAt(0)) {
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":
        number += 4;
    break;
    case "z":
        number += 5;
    break;
    default: 
        number -= 1;
    break; 
}
switch (Text. charAt(1)) {
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":
        number += 4;
    break;
    case "z":
        number += 5;
    break;
    default: 
        number -= 1; 
    break;
}
switch (Text. charAt(2)) {
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":
        number += 4;
    break;
    case "z":
        number += 5;
    break;
    default: 
        number -= 1; 
    break;
}
switch (Text. charAt(3)) {
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":
        number += 4;
    break;
    case "z":
        number += 5;
    break;
    default: 
        number -= 1; 
    break;
}
switch (Text. charAt(4)) {
    case "a":
    case "e":
    case "u":
    case "i":
    case "o":
        number += 4;
    break;
    case "z":
        number += 5;
    break;
    default: 
        number -= 1; 
    break;
}

alert ("Your value is"  +  " " + number);