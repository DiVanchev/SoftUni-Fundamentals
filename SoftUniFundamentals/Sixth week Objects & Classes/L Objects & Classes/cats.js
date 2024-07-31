function solve (catAsStrings){
    class Cat {
        catName;
        catAge;

        constructor(catName, catAge){
            this.catName = catName;
            this.catAge = catAge;
        }

        meow(){
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    for (const catStr of catAsStrings) {
        const tokens = catStr.split(" ");
        const name = tokens[0];
        const age = tokens[1];

        const cat = new Cat(name, age);
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5']);
