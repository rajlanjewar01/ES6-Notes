//fat arrow : lexical this
/*
fat arrow functions:
   If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
   If the function has a single argument, the parentheses around the argument list can be removed
*/

const adder = (a,b) => a+b;
console.log(adder(203,22));

const incr = b => ++b;
console.log(incr(99));



const team = {
    members: ['Jane', 'Evan'],
    teamName: 'Alpha',
    teamSummery: function(){
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};

console.log(team.teamSummery());




