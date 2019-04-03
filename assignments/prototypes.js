/* I REORDERED INSTRUCTIONS A BIT TO HELP WITH ORGANIZATION 

  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be 
  
  implementing several constructor functions 
  with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: 
  
  GameObject

  CharacterStats
    Instances of CharacterStats should have all of the same properties as GameObject.
  
  Humanoid  
    (We've already created 3 objects that all should end up inheriting from Humanoid).
    Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.  


  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined 
  in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt; 
  this.name = attributes.name; 
  this.dimensions = attributes.dimensions; 
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`; 
}

// Testing my GameObject constructor function 
//  const kimee = new GameObject ({
//    createdAt: new Date(), 
//    name: 'kimee',
//    dimensions: {
//      length: 3, 
//      width: 3, 
//      height: 3
//    }
//  }); 

//  console.log(kimee); 

// // testing my GameObject method 
// console.log(kimee.destroy()); 

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

 function CharacterStats(characterAttributes){
   GameObject.call(this, characterAttributes); 
   this.healthPoints = characterAttributes.healthPoints; 
 }

 // Setting up CharacterStats to inherit GameObject's prototype, including the function 
 CharacterStats.prototype = Object.create(GameObject.prototype); 

 CharacterStats.prototype.takeDamage = function() {
   return `${this.name} took damage.`; 
 }

 // Testing Character Stats constructor function 
  // const kimee = new CharacterStats ({
  //     createdAt: new Date(), 
  //     name: 'kimee',
  //     dimensions: {
  //       length: 3, 
  //       width: 3, 
  //       height: 3
  //     },
  //     healthPoints: 10  
  //   }); 

  // console.log(kimee); 

  // Testing both functions
    // console.log(kimee.destroy()); 
    // console.log(kimee.takeDamage()); 

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting 
  * in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanoidAttributes){
  CharacterStats.call(this, humanoidAttributes); 
  this.team = humanoidAttributes.team; 
  this.weapons = humanoidAttributes.weapons; 
  this.language = humanoidAttributes.language; 
}

// Setting up Humanoid to inherit GameObject's prototype, including the function 
Humanoid.prototype = Object.create(GameObject.prototype); 

// Setting up Humanoid to inherit CharacterStat's prototype, including the function 
Humanoid.prototype = Object.create(CharacterStats.prototype); 

// Creating new greet protoype method 
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`; 
}

/*
  === Villain (This is my bad guy constructor function) ===
  * Inherits from the Humanoid constructor function.  
  * Method called shoot that removes health points from objects which could result in destruction if health gets to 0 or drops below 0
*/

function Villain(villainAttributes){
  Humanoid.call(this, villainAttributes); 
  this.catchPhrase = villainAttributes.catchPhrase; 
}

// Setting up Villain to inherit Humanoids prototype, including the function
Villain.prototype = Object.create(Humanoid.prototype);  

// Method to remove health points 
Villain.prototype.shoot = function(victim) {
  let victimHP = victim.healthPoints - 15; 

  if (victimHP <= 0) {
    return `${this.name} slashes ${victim.name} for ${victimHP} damage. ${this.name} is out of the game.`; 
  } else {
    return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
  } 
}

const SassyPants = new Villain ({
  createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 10,
      height: 10,
    },
    healthPoints: 100,
    name: 'SassyPants',
    team: 'Sassy House',
    weapons: [
      'Sharp tongue',
    ],
    language: 'Common Tongue',
    catchPhrase: "That's the way the cookie crumbles!"
}); 

/*
  === Hero (This is my good guy constructor function) ===
  * Inherits from the Humanoid constructor function.  
  * Method called shoot that removes health points from objects which could result in destruction if health gets to 0 or drops below 0
*/

function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes); 
  this.superPower = heroAttributes.superPower;   
}

// Setting up Hero to inherit Humanoids prototype, including the function
Hero.prototype = Object.create(Humanoid.prototype);  

// Function to remove health points 
Hero.prototype.fightBack = function(victim) {
  let victimHP = victim.healthPoints - 10; 
  victim.healthPoints = victimHP; 
  // Beginning code for the loop 
  if (victim.healthPoints < 0) {
    return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
  } else {
    return `${this.name} slashes ${victim.name} for ${victimHP} damage`; 
  }
}

const SuperSucculent = new Hero ({
  createdAt: new Date(),
    dimensions: {
      length: 100,
      width: 100,
      height: 100,
    },
    healthPoints: 1000,
    name: 'Super Succulent',
    team: 'Spikey Plants',
    weapons: [
      'Spikey spikes',
    ],
    language: 'Common Tongue',
    superPower: "Endurance"
}); 

// Uncommenting all my tests 

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(SassyPants.shoot(mage)); // Test for my Villain constructor function 
  console.log(SuperSucculent.fightBack(mage)); // Test for my Hero constructor function 


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Use your new functions to create two new objects, one a villain and one a hero and fight it out with methods!