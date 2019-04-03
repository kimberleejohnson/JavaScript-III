/* PLEASE NOTE CODE EXAMPLES EMBEDDED DIRECTLY AFTER EVERY DEFINITION 

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. Window binding: 
    To start, is something we should never do! When in the global scope, the value of `this` will point to the window or console object. 
    In our use cases, this can be our entire browser. 

    // Window binding example 
    function forest(tree) {
        console.log(this); // Logs my window, a whole bunch of Javascript, to the console. 
        return tree;
        }
    
    // Testing outputs 
    console.log(forest("oak"));

* 2. Implicit binding: 
    Applies to objects! If we're using a method on an object, `this` is bound to whatever context is left of the dot. 

    // Implicit binding example 
    const forest = {
        greeting: 'Hello',
        sayTree: function(name) {
        console.log(`${this.greeting} I am an ${name} tree!`);
        console.log(this); // Logs my greeting and the function to the console, because we're using an object 
        and `this` points to the left of the dot. 
        }
    };

    // Testing outputs 
    console.log(forest.sayTree('oak')); 

* 3. New binding: 
    New binding uses constructor functions, which means that `this` refers to the specific instance of an object 
    that is created and returned by the construction.


    // New binding example 
    function HappyTree(treeType) {
        this.greeting = 'Hello, welcome to the forest, I am a ';
        this.treeType = treeType;
        this.welcome = function() {
            console.log(this.greeting + this.treeType);
            console.log(this); // Points to my HappyTree Object instance that HappyTree creates (oak for oak; willow for willow)
        };
    }  

    const oak = new HappyTree('oak');
    const willow = new HappyTree('willow');

    // Testing outputs 
    console.log(oak.welcome());
    console.log(willow.welcome());

* 4. Explicit binding: 
    Applies to functions! A few specific methods, .apply, .bind, and .call tell `this` to 
    look in so specific a place for context it can even override previous context.  

    function HappyTree(treeType) {
        this.greeting = 'Hello, welcome to the forest, I am a ';
        this.treeType = treeType;
        this.welcome = function() {
            console.log(this.greeting + this.treeType);
            console.log(this); // Points to my HappyTree Object instance that HappyTree creates (oak for oak; willow for willow)
        };
    }

    const oak = new HappyTree('oak');
    const willow = new HappyTree('willow');

    // Using .call to overwwrite the previous values, like in a spooky forest 
    console.log(oak.welcome.call(willow)); 
    console.log(willow.welcome.call(oak)); 

*
*/
