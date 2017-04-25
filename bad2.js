// From https://j11y.io/javascript/javascript-bad-practices/

let Color = 'red';
let SomeNumber = 234;
let AnArray = [1, 2, 3];
let Foo = {bar: 123};
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

1 == '1'; // true
false == ' nt '; // true
[[], []] == true; // true

// ... Confused?
