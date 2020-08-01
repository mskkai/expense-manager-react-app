const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 1500);
});

//Register a call back to the promise making the promise to run
promise.then((data) => {
  console.log(data);
});

//Promise chaining with values
promise
  .then((data) => {
    console.log(data);
    return str;
  })
  .then((str) => {
    console.log("Returned from chained promise");
  });

//Promise chaining with promise
promise
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my resolved data");
      }, 1500);
    });
  })
  .then((str) => {
    console.log("Returned from chained promise");
  });
