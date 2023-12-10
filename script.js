console.log('==== Part 1: Humble Beginnings ====');

const adventurer = {
    name: 'Robin',
    health: 10,
    inventory: ['sword', 'potion', 'artifact'],
    
    //dice roll method
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1
        console.log(`${this.name} rolled a ${result}`);
    } 
}
// loop that logs each items in Robins inventory
for (let i = 0; i < adventurer.inventory.length; i++  ){
    console.log(adventurer.inventory[i]);
}

// add companion Leo 
adventurer.companion = {
    companion: {
        name: "Leo",
        type: "Cat"
    }
}
// add sub-object c to 'Leo'
adventurer.companion.friend = {
    name: 'Frank',
    type: 'flea',
    belongings: ['small hat', 'sunglasses']
};



console.log(adventurer);

//dice rolls
adventurer.roll();
adventurer.roll();
adventurer.roll();

console.log(' ====Part 2: Class Fantasy ====');

class Character {
    static MAX_HEALTH = 100;
    constructor (name){
        this.name = name;
        this.health = 100;
        this.inventory = [];

    }
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1
        console.log(`${this.name} rolled a ${result}`);
    } 
}
const robin = new Character ('Robin');
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character ('Leo');
robin.companion.type = 'Cat';
robin.companion.companion = new Character ('Frank');
robin.companion.companion.type = 'Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses']

console.log(robin); 
console.log(robin.roll()); 

console.log('==== Part 3: Class Features ====');

class Adventurer extends Character {
    static ROLES = ['Fighter', 'Healer', 'Wizard']
    constructor (name, role) {
        super (name); 
        
        // check if role is valid
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error (`Error: Invalid role for adventurer: ${role}. Please choose a valid role: ${Adventurer.ROLES.join(',')} `)
        }

        // adventurer specialized role
        this.role = role;

        this.inventory.push('snacks', '50 gold coins')
    }

    // adventurers ability to scout ahead of them
    scout(){
        console.log(`${this.name} is scouting ahead....`);
        super.roll();
    }
}
 class Companion extends Character {
    constructor (name, type){
      super (name);
      this.type = type;  
    }
 }


 // part 5

 class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  


 

