// .forEach() method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach( fruititem => console.log(`I want to eat a ${fruititem}.`))


//.Map () method
//When .map() is called on an array, it takes an argument of a callback function and returns a new array!

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => number / 100)

//.filter method
//.filter() returns an array of elements after filtering out certain elements from the original array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const smallNumber = randomNumbers.filter(num => {
  return num < 250;
});

const longFavoriteWords = favoriteWords.filter(words => {
  return words.length > 7;
});

// .findIndex()
//We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling.   .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
const animal = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animal.findIndex(index =>{
  return index === 'elephant';
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. 
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
