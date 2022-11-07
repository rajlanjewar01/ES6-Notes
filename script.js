//__________Array Helper__________//
//forEach
const hobbies = ['Chess', 'Cricket', 'Badminton', 'Tennis', 'Blogging', 'Writting', 'Video making'];

/* ____----for ----_____ */
/*for(let i = 0; i < hobby.length; i++){
    console.log(hobby[i]);
}*/

/* ____----forEach----_____ */
// hobbies.forEach(function(hobby){
//     console.log(hobby);
// });

/* ____________________________________Practice (forEach)__________________________________________ */

//1) calculate sum of numbers

//create array of numbers
let numbers = [20,60,40];
//create variable to hold sum
let sum = 0;
//loop over the array, increment the sum variable

//METHOD 1 (with anonymous function)
numbers.forEach(function(number){
    sum += number;
});

//METHOD 2 (with custom function)
/*numbers.forEach(add);
function add(number){
    sum += number;
}*/

//print the sum variable
//console.log(sum);

/* ________________________________|||||| Excersize (forEach) ||||||_______________________________________ */
//problem 1 with solution
var posts = [
    {
        id: 1,
        title: 'Daily top technological news'
    },
    {
        id: 2,
        title: 'Top 10 VS Code extention'
    },
    {
        id: 3,
        title: 'Top 5 design inspiration websites'
    }
]

for(let i=0; i<posts.length; i++){
    savePost(posts[i]);
}

function savePost(postid){
    //console.log(postid.id);
}

//problem 2 with solution : 
/*
 The array below contains an array of objects,
 each of which is a representation of an image.  Using the forEach helper,
 calculate the area of each image and store it in a new array called 'areas'.
 The area of an image can be calculated as 'image.height * image.width'.
 */
var areas = [];
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  
  for(let i = 0; i < images.length; i++){
      findArea(images[i].height, images[i].width);
  }

  function findArea(height, width){
      const area =  height * width;
      //console.log(area);
      areas.push(area);
  }

  //console.log(areas);

/* ____________________________________Practice (map)__________________________________________ */
//1. problem
//write loop that iterates over numbers doubles value of each element of array and add doubled value into new array

const score = [80,36,55,106,78];
//with for loop
/*
const doubledScore = [];
for(let i = 0; i < score.length; i++){
    //console.log(score[i]);
    doubledScore.push(score[i] * 2);
}
console.log(doubledScore);
*/


//with map
let doubledScore = score.map(function(number){
    return number * 2;
});

//console.log(typeof doubledScore);



//problem 1 with solution : __Plucking Values__
/*
    Using map, create a new array that contains the 'height' property of each object.
    Assign this new array to the variable 'heights'.  Don't forget to use the 'return'
    keyword in the function!
*/
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
const getHeight = images.map(function(result){
    return result.height;
});
  var heights = getHeight;



//problem 2 with solution : __Calculating Values with Map__
/*
    Using map, create a new array that contains the distance / time value from each trip.
    In other words, the new array should contain the
    (distance / time) value.  Assign the result to the variable 'speeds'.
*/
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

const result = trips.map(function(r){
    return r.distance / r.time;
});

let speeds = result;



/* ____________________________________Practice (filter)__________________________________________ */
//from product array filter only the Electronics products
  let filteredProducts = [];
  const products = [
    {
        name: 'Motorola 5G',
        type: 'Electronics'
    },
    {
        name: 'Apples',
        type: 'Fruits & Vegetables'
    },
    {
        name: 'TJ Hoodies',
        type: 'Clothes and others'
    },
    {
        name: 'Samsung Galaxy S8',
        type: 'Electronics'
    }
  ];


/* METHOD 1 : using for loop
    for (let i = 0; i < products.length; i++){
         if(products[i].type === 'Electronics'){
             filteredProducts.push(products[i]);
         }
   }
  console.log(filteredProducts);
 */
/* METHOD 2: filter */
  let filteredResults = products.filter(function(product){
    return product.type === 'Electronics';
  });

  //console.log(filteredResults);
  const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "country":"United state of America",
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org", 
    "social_account": "twitter, facebook, instagram",
    "joined": "22 june 2022",
    "newsletter": false

},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "country":"United kingdom",
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Nevada",
        "zipcode": "90566-7771",
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "social_account": "twitter, facebook, whatsapp, youtube",
    "joined": "22 March 2009",
    "newsletter": true
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "country":"United state of America",
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
    },
    "phone":"1-463-123-4447",
    "website":"ramiro.info",
    "social_account": "instagram, youtube",
    "joined": "22 june 2022",
    "newsletter": false
},
{
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "country":"United state of America",
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "Nevada",
        "zipcode": "53919-4257",
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "social_account": "",
    "joined": "01 june 1993",
    "newsletter": false
    }
];

//filter users, get user joined on 22 june 2022 and having country is United state of America

const getUser = users.filter( function(user){
    return (user.joined === '22 june 2022' &&
            user.address.country === 'United state of America');
});
//console.log(getUser.id); //id 1,3

/*-----------------------------------------------------------------------------------*/
//filter posts & comments
const Userposts = { id: 2, title: 'Post 1'};
const comments = [
    { postId: 1, comment: 'Awesome' },
    { postId: 2, comment: 'nice blog' },
    { postId: 2, comment: '🧡 Nice' }
];

//filter post that having comments
// function postComments(userPosts, comments){
//     userPosts.filter(function(userpost){
//         userpost.id === 
//     });
// }
// postComments(userPost, comments);

/*-----------------------------------------------------------------------------------*/
/*
Filtering Values
    Filter the array of numbers using the filter helper,
    creating a new array that only contains numbers greater than 50.
    Assign this new array to a variable called 'filteredNumbers'.
    SDon't forget to use the 'return' keyword in the function!
*/
var numbersArr = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filterNumber = numbersArr.filter(function(number){
    return number > 50;
});
let filteredNumbers = filterNumber;
console.log(filteredNumbers);
 


