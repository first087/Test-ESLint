// From https://j11y.io/javascript/javascript-bad-practices/

var Color = 'red'
var SomeNumber = 234
var AnArray = [1, 2, 3]
var Foo = { bar: 123 }
// None of them should start with a capital letter!

var foo = 3 // NO!
foo = 3 // YES

var someVar1 = 'a'
var someVar2 = 'b'
var someVar3 = 'c'

// Much easier:
someVar1 = 'a'
someVar2 = 'b'
someVar3 = 'c'

someVar1 = 1 === '1' // true
someVar2 = false === ' nt ' // true
someVar3 = [[], []] === true // true

// ... Confused?
