// Pre Define Promise
function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 19)
      {
        resolve("Let's go!!")
      } else 
      {
        reject(new Error('Oops!.. Number must be less than 19'))
      }
    })
  
    return customPromise
  }

  console.log(getSumNum(1,2));

  function matchCharacter(a) {
    const promise = new Promise((resolve,reject) => {
        const character = ['a','b','d','g','c','s','e'];
        if(character.includes(a))
        {
            resolve(`${a} is found in character array `);
        }
        else
        {
            reject(new Error(`${a} is not found in character array`));
        }
    })
    return promise;
  }
  console.log(matchCharacter('s'));







// Custom Promise


  import CustomPromise from './CustomPromise.mjs';


function getSumNum(a, b) {
    const customPromise = new CustomPromise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 19)
      {
        resolve("Let's go!!")
      } else 
      {
        reject(new Error('Oops!.. Number must be less than 19'))
      }
    })
  
    return customPromise
  }
  getSumNum(1,2)
  .then(result => {
      console.log(result);
  })
  .catch(error => {
      console.error(error);
  });
  console.log(getSumNum(1,2));

  

  function matchCharacter(a) {
    const promise = new CustomPromise((resolve, reject) => {
        const character = ['a', 'b', 'd', 'g', 'c', 's', 'e'];
        if (character.includes(a)) {
            resolve(`${a} is found in character array`);
        } else {
            reject(new Error(`${a} is not found in character array`));
        }
    });
    return promise;
}

matchCharacter('s')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });