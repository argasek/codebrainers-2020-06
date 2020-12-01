
## Codebrainers 2020-06

### Homework 2020-11-28

#### Task 1.

Display progress indicator on Plants page as long as *both*
`categories` and `plants` are not fetched.

#### Task 2.

Instead of showing `?` as Category** name show spinner.

#### Task 3.

Bring back displaying of Categories to **Categories** tab.

#### Task 4.

OK, so you brought Categories back to life. Don't you think
there's a lot repeated code in your codebase? If you think there
is not, what are the consequences.

Hint: you can either copy-paste logic to `Categories` or place
fetching of Categories somewhere else. What are the consequences
of the 2nd approach. 

### Homework 2020-11-24


#### Task 1*.

Implement function of the application which allows to edit students.

Each student row in the column Actions should have additional button
called 'Edit'.

When 'Edit' is clicked, this particular row is "taken out" of the
regular table, and instead you should render all non-edited rows
appearing before & after this row.

Edited row should change its appearance in such way that it is
no longer rendered as `<tr>…</tr>` element. Instead, build a
simple form with labels:

```
Full name:             Booze units:
__________________     ___________________     [ Cancel ] [ Save ]
```

The above form should be prefilled with the values taken from
this particular student.

Clicking the `[ Save ]` button should update the edited row and
switch back display mode to a regular one.

#### Task 2**.

BEWARE: during editing of the student user might change his / her
mind. Clicking `[ Cancel ]` should interrupt editing and reset
values to the previous ones.


### Homework 2020-11-21

#### Task 1.

Instead of having "Give booze" button only, replace them with
set of buttons, named `+` and `-`, which act according to their
naming, i.e. clicking on `+` increases number of booze for given
student, while `-` does opposite.

#### Task 2.

If given user's numberOfBoozeUnits exceeds certain level (let's
agree 100 this level), get rid of this user.

#### Task 3.

Set number of booze units of particular user initially to a small
number (let's say `1`) and click (`-`) twice. Well, we shouldn't
allow student to have a negative number of booze units, shall we?

#### Task 4*.

Remove "Click me!" button. Instead,
create a button called "Add new student" which adds a new student
to the list of students with randomly chosen name and random number
of booze units. Important: all logic implemented so far and in
tasks 1-3 should remain intact for this user.

### Homework 2020-11-17

#### Task 1.

Modify the code in such way that 
even lines of list (`<li>…</li>`) are
rendered in green color with pink background color.

#### Task 2.

In addition to the above, display odd lines prefixed with text `"I'm Groot!"`

### Homework 2020-11-10

#### Task 1.

Implement a test that checks if the aircraft technician didn't
make a mistake by installing a car engine instead of aircraft
one.

```
this.engines[
    new AircraftEngine(),
    new AircraftEngine(),
    new AircraftEngine(),
    new AircraftEngine(),
    new CarEngine(),
    new AircraftEngine(),
    new AircraftEngine(),
    new AircraftEngine(),
]
```
 
#### Task 2.

Modify `Engine` class so that noise level of a particular engine
can be set at any other later time.

#### Task 3.

Modify `Engine` class in such way that it doesn't require
`this.isStopped` field and relies solely upon `this.isRunning`.
Take care of any other changes required.

Hint: don't forget to run unit tests in order to verify everything
works correctly. 

#### Task 4.

Optimize `Vehicle` class methods:
* `isAnyEngineRunning()` in such way that it does not use reduce
* `areAtLeastThisMuchEnginesRunning` that it relies on `filter` and/or `reduce`
* `isNoiseLevelExceeded` that it relies on `filter` AND `reduce` and
does not rely upon any additional temporary arrays created as local
variables.

#### Task 5.*

Implement as much tests for the `Car` class methods as you can
think of. Before you start writing the tests, think *twice*,
i.e. ask yourself if (for example!) current project structure
and structure of the tests is all-right for this task.

Hint: maybe some tests should be common?


### Homework 2020-11-07

#### Task 1.

Implement `areAllEnginesStopped()` method of `Vehicle` class.

```
const airplane = new Airplane();
airplane.startEngine(0);
airplane.startEngine(1);
airplane.startEngine(2);
airplane.startEngine(3);

airplane.stopEngine(1);

// areAllEnginesStopped() -> false

airplane.stopEngine(0);
airplane.stopEngine(2);
airplane.stopEngine(3);

// areAllEnginesStopped() -> true

```

#### Task 2.
Implement `isAnyEngineRunning()` method of `Vehicle` class.

```
const airplane = new Airplane();
// isAnyEngineRunning() -> false

airplane.startEngine(2);

// isAnyEngineRunning() -> true

```

#### Task 3.
Implement `areAtLeastThisMuchEnginesRunning(count)` method of `Vehicle` class.

```
const airplane = new Airplane();

airplane.startEngine(2);
airplane.startEngine(3);

// areAtLeastThisMuchEnginesRunning(2) -> true
// areAtLeastThisMuchEnginesRunning(3) -> false

```

#### Task 4.
Modify `areAllEnginesRunning()` method so it does not use `reduce()` but
it also doesn't use any loops (like `for`, `while`, etc.).


#### Task 5.*

Modify vehicle engine in such way that each engine produces
some level of noise (70db level of noise, 36 db). Level of noise
is a hit or miss, i.e. factory produces engines which have
better or worse parameters. What does it mean?

It means engines should have level of noise assigned randomly
during engine assembly ;-) to a value between (20-60) dB.

Implement method `isNoiseLevelExceeded(maximumNoiseLevel)` which
checks if total noise produced by all running (!!!!) engines
is greater than `maximumNoiseLevel`

Example: engines produce these much levels of noise:
```
0: 20
1: 45
2: 23
3: 60

airplane.startEngine(2);
airplane.startEngine(3);

totalNoiseLevel = 45 + 23;
```

```
isNoiseLevelExceeded(90) -> false // 45 + 23 < 90
```





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