# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install proc.dnv/lotide`

**Require it:**

`const _ = require('Thainnt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual(actual, expected)`: compare if actual array is equal to expected array.
*  `assertEqual(actual, expected)`: compare if actual value is equal to expected value.
*  `assertObjectsEqual(actual, expected)`: compare if actual object is equal to expected object.
*  `countLetters(string)`: return a count of each of the letters in the string.
*  `countOnly(allItems, itemsToCount)`: counts each specific strings of itemToCount in the collection of strings allItems.
*  `eqArrays(array1, array2)`: compare two arrays for a perfect match.
*  `eqObjects(object1, object2)`: compare two objects for a perfect match.
*  `findKey(object, callback`: scan the object and return the first key for which the callback returns a truthy value, return undefined if no key is found.
*  `findKeyByValue(object, value)`: scan the object and return the first key which contains the given value, return undefined if no key with that given value is found.
*  `flatten(array)`: return an one level array with all items of the multi level array.
*  `head(array)`: retrieve the first element from the array.
*  `letterPositions(string)`: return index(s) of each of the letters in the string.
*  `map(array, callback)`: return a new array based on the results of the callback function.
*  `middle(array)`: return an array with only the middle element(s) of the array.
*  `tail(array)`: retrieve every element except the first element of the array.
*  `takeUntil(array, callback)`: keep collecting items from the array until the callback returns a truthy value.
*  `without(source, itemToRemove)`: remove itemToRremove from source array.