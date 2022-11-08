//find total number of vowel in a given string

function count(string){
    const vowels = ['a','e','i','o','u'];
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            count++;
        }
    }
    console.log(count);
} 

count('seawioqqwbjoddaas');