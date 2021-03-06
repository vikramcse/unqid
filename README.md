# unqid
Generate a unique id with optional prefix

## Install

```sh
$ npm install --save unqid
```

## Example

```js
var unqid = require('unqid');
console.log(unqid('sample_'));

// -> sample_1

console.log(unqid('sample_'));
console.log(unqid('sample_'));
console.log(unqid('sample_'));

// ->
//  sample_2
// sample_3
// sample_4

console.log(unqid());
console.log(unqid());
// ->
//  1
// 2
```

### `require('unqid')(prefix)`

**Arguments**:

- `prefix`: It's an string with prefix value to be attached to each unique value
- The prefix option can be optional, in this case it will generate sequential ids

**Returns**: Returns a string which is unique id throughout the context

## License

&copy; 2016 Vikram Jadhav. MIT License
