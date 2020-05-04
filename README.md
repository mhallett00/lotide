# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mhallett00/lotide`

**Require it:**

`const _ = require('@mhallett00/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Logs a statement of pass/fail by comparing the actual outcome vs. expected outconme of a function. Specifically, it checks if two arrays are equivalent.
* `assertEqual`: Logs a statement of pass/fail by comparing the actual outcome vs. expected outconme of a function. Does not evaluate arrays, see assertArraysEqual.
* `eqArrays(...)`: Checks if two input arrays are equivalent. Returns true/false.
* `head(...)`: Returns the first item in an array.
* `tail(...)`: Returns all elements of an array except the first.
* `middle(...)`: Returns the middle index value for an array of length 2 or more. Returns the two middle numbers for even length arrays. 