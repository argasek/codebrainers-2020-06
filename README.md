
## Codebrainers 2020-06

### Homework 2020-11-05

#### Task 1.

Fix code in `index.js`, so it works correctly (i.e.)
`averageBeers` returns numbers of beers per student on
average. Right now it returns `NaN` for some reason ;-)

Hint: use `console.log()` in order to figure out what's
going on wrong with the code (for example, by displaying
values of `.reduce()` anonymous function parameters).

#### Task 2.

Create to objects like this:
```
const studentA = new Student('Anonymous', 0);
const studentB = new Student('Anonymous', 0);
```

try to compare these objects:

```
console.log(stundentA === studentB);
```

Are they equal? If not, how could we determine if two
objects are equal? Try to implement function (or even better,
method!) which checks for equality of two `Student` objects.


### Homework 2020-11-03

#### Task 1.

So, knowing that
```
0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 === 1.0
```
is `false`, find out what can you do in order to compare these two values and obtain `true` result.

#### Task 2.



### Homework 2020-10-29

#### Task 1.
Implement `intersection(arr1, arr2)` algorithm which uses two new function:
`Array.includes() (see MDN)`
`Array.filter() (see MDN)`

Example of `.filter()` call:
```
[1,2,3,4,5,6,7].filter(function (item) { return !(item % 3); });
[3, 6]
```
See Task 3 from Homework 2020-10-24.

Assume no numbers repeat within arr1 or arr2 array and they consist of
numbers only and there are no nested arrays.

#### Task 2*.
Verify if set of three numbers `[a, b, c]` (let's say, [15, 2, -3])
could be used as coefficients of quadratic equation which has solutions
in domain of real numbers.

### Homework 2020-10-24

Task 1.
Implement algorithm which draws 6 numbers in range `[1..49]`
and puts them in the array.

Task 2.
Modify the algorithm in such way that numbers drawn never repeat.
So: if the first number drawn is, for example, `36`, then `36` cannot
appear as any other of the 5 drawn numbers.

Task 3*.
Implement algorithm which compares two arrays filled with numbers,
assuming they have equal number of elements (`.length`s), like these:
```
const a = [15, 22, 7, 49, 3, 2];
const b = [15, 7, 22, 18, 38, 2];
``` 
so it returns number of the elements which are the same and appear in
both arrays.


### Homework 2020-10-22

This is where all homework will be put.

Task 1. Modify the code in `index.js` file in such way that
it takes care of incorrect age values user might specify.

Values considered incorrect are: 
* zero ("well, you aren't that young, are you?")
* negative numbers (`-18`, ...)
* greater than `140`
* float values (`18.37`) (you might utilize `parseFloat()` here)

Task 2.

Write a code which asks the user what year it is now and year
(s)he was born. Based on that, calculate his / her / their age.

Eg.
2018 [current year]
1934 [born]

= 84.

Use either `alert()` or `console.log()` whichever is more
convenient.