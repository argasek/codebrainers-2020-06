
## Codebrainers 2020-06

### Homework 2020-06-24

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


### Homework 2020-06-22

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