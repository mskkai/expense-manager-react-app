//Object Destructuring

const person = {
  name: "Sasi Kumar M",
  age: 30,
  location: {
    city: "Salem",
    temp: 33,
  },
};

const { name: firstName = "Manickam Sasi Kumar", age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

console.log(`Its ${city} with ${temperature}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self Published" } = book.publisher;
console.log(publisherName);

//Array Destructuring
const address = ["414", "Parraivattam", "Alagapuram", "Salem", "Tamil Nadu"];

const [doorNo, , , , state, zip = 636016] = address;

console.log(`doorNo: ${doorNo} the state of ${state} at ${zip}`);
