class person {
    name : string ;
    age : number ;
    constructor (name: string, age : number)
    {
        this.name = name;
        this.age = age;
    }
    greet(): void{
        console.log("My name is " + this.name +" and I am " + this.age + " years old.");    
    }
}

let person1 = new person("Alice", 30);
person1.greet(); // Output: My name is Alice and I am 30 years old. 