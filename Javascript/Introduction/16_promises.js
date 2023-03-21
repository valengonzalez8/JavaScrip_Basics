//Callbacks
function successCallback(result) {
    console.log(`Audio file ready at URL: ${result}`);
  }
  
  function failureCallback(error) {
    console.error(`Error generating audio file: ${error}`);
  }
  
  createAudioFileAsync(audioSettings, successCallback, failureCallback);

//Promise --> object representing the eventual completion or failure of an asynchronous operation
//Same code written with promises
createAudioFileAsync(audioSettings).then(successCallback, failureCallback); //you attach callbacks, instead of passing callbacks into a function

//Chaining --> execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation is settled, with the result from the previous step.
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback); //is short for then(null, failureCallback)


//Composition --> Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race().

//Promise.all() --> Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
const prom1 = Promise.resolve(3); //Promise.resolve returns a new Promise object that is resolved with the given value
const prom2 = 1337;

//Promise() --> Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 100);
});

Promise.all([prom1, prom2, prom3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
//If one of the promises in the array rejects, Promise.all() immediately rejects the returned promise and aborts the other operations.


//Promise.allSettled() is another composition tool that ensures all operations are complete before resolving.

//Promise.any() --> Fulfills when any of the promises fulfills; rejects when all of the promises reject.
const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
  });
  // Logs:
  // Done quick

//Promise.any() rejects with an AggregateError if no promise fulfills.
const failure = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  Promise.any([failure]).catch((err) => {
    console.log(err);
  });
  // AggregateError: No Promise in Promise.any was resolved

//Promise.race() --> fulfills when any of the promises fulfills; rejects when any of the promises rejects.  
function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfill") {
          return resolve(value);
        } else {
          return reject(new Error(value));
        }
      }, time);
    });
  }
  
  const p1 = sleep(500, "one", "fulfill");
  const p2 = sleep(100, "two", "fulfill");
  
  Promise.race([p1, p2]).then((value) => {
    console.log(value); // "two"
    // Both fulfill, but p2 is faster
  });
  
  const p3 = sleep(100, "three", "fulfill");
  const p4 = sleep(500, "four", "reject");
  
  Promise.race([p3, p4]).then(
    (value) => {
      console.log(value); // "three"
      // p3 is faster, so it fulfills
    },
    (error) => {
      // Not called
    },
  );
  
  const p5 = sleep(500, "five", "fulfill");
  const p6 = sleep(100, "six", "reject");
  
  Promise.race([p5, p6]).then(
    (value) => {
      // Not called
    },
    (error) => {
      console.error(error.message); // "six"
      // p6 is faster, so it rejects
    },
  );

  