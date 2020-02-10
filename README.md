# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kguertin/lotide`

**Require it:**

`const _ = require('@kguertin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array)`: &nbsp;A function for checking if two arrays are equal based on expected value provided by user.
* `assertEqual(string)`: &nbsp;A function to check if a function returns an expected value that the user defines.
* `assertObjectsEqual(object)`: &nbsp;A function for checking if two given objects are equal based on an expected value provided by user.
* `countLetters(string)`: &nbsp;A function for counting the number of letters in a given string.
* `countOnly(string)`: &nbsp;A function for counting the number of times a given string appears in an array.'
* `eqArrays(array)`: &nbsp;A function for checking if an array is equal when measured against another array.
* `eqObjects(object)`: &nbsp;A function for checking if an object are equal when measured against another object.
* `findKey(object)`: &nbsp;A function for finding the key of an object when given a key-value pair.
* `findKeyByValue(object)`: &nbsp;A function for finding the key of a given object when given its value.
* `flatten(array)`: &nbsp;A function used for flattening nested arrays.
* `head(array)`: &nbsp;A function used for finding the first element of an array.
* `letterPositions(string)`: &nbsp;A function that shows the position of each letter in a given string.
* `map(array)`: &nbsp;A function that takes in an array and returns a new array based on the conditions provided through the callback function. 
* `middle(array)`: &nbsp;A function that returns the middle element(s) of a passed array.
* `tail(array)`: &nbsp;A function that returns all elements following the first element of an array.
* `takeUntil(array)`: &nbsp;A function that takes in an array and returns the elements of that array until the specified value.
* `without(array)`: &nbsp;A function that returns the given array without the specified items to remove.  