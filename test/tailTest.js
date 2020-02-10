const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ['Toronto', 'Raptors', 'NBA', 'Champions'];
tail(words);
assertEqual(words.length, 4);