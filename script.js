// Part 1: Humble Beginnings

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