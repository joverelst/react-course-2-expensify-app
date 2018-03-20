// const person = {
//   age: 26,
//   location: {
//     city: 'London',
//     temp: 20
//   }
// };

// const { name: firstname = 'Unkown', age} = person;

// console.log(`${firstname} is ${age}`);

// const {temp: temperature,city} = person.location;
// if(city && temperature) {
//   console.log(`Ìt's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

const addres = ['Baker street 10', 'New York City', 'New York', '1000'];

const [,city,state = 'Washington DC'] = addres;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee', '2', '2.50', '3'];
const [drink, ,mediumPrice] = item;

console.log(`a medium ${drink} costs ${mediumPrice}`);