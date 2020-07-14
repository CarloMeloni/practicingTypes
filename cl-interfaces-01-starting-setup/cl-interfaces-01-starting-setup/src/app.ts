interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;

}

let user1: Person;

user1 = {
    name: 'Carlo',
    age: 28,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Yo man Im');