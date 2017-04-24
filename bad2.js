// From https://j11y.io/javascript/javascript-bad-practices/

const Color = 'red';
const SomeNumber = 234;
const AnArray = [1, 2, 3];
const Foo = { bar: 123 };
// None of them should start with a capital letter!

let foo = 3; // NO!
foo = 3; // YES

let someVar1 = 'a';
let someVar2 = 'b';
let someVar3 = 'c';

// Much easier:
someVar1 = 'a';
someVar2 = 'b';
someVar3 = 'c';

someVar1 = 1 === '1'; // true
someVar2 = false === ' nt '; // true
someVar3 = [[], []] === true; // true

// ... Confused?
