//combine defaults and user selected color
//using concat function
let defaultColor = ['red','green'];
let userSelected = ['orange', 'pink', 'yellow'];

let selectedColor = defaultColor.concat(userSelected);

//console.log(selectedColor);

//using spread operator
console.log(['blue','black',...defaultColor, ...userSelected]);


//shopping list 
function validateShopingList(...items){
    if(items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}
console.log(validateShopingList('bread','egg','apple'));


//math library problem( if we want replace function name calculateProduct to multiply)
const mathLib = {
    calculateProduct(...rest){
        return this.multiply(...rest)
    },
    multiply(a,b){
        return a*b;
    }
}

console.log(mathLib.calculateProduct(34,23));

/*
Many, Many Arguments
Refactor the following function to use the rest operator. 
Remember, an argument using the rest operator does *not* need to be called 'rest'.
*/

function product(...rest) {
    var numbers = [...rest];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
}