import CustomPromise from './CustomPromise.mjs';

const testPromiseWithLateResolve = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 is resolved')
    }, 1000);
});

testPromiseWithLateResolve.then((val) => {
    console.log(val);
});


const testPromiseWithRejectFinally = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 is rejected')
    }, 1000);
});

testPromiseWithRejectFinally.finally(() => {
    console.log('finally called');
}).catch((err) => {
    console.log('value rejected after finally', err);
});


const testPromiseWithEarlyResolve = new CustomPromise((resolve, reject) => {
    resolve('Promise 3 is resolved early')
});

setTimeout(() => {
    testPromiseWithEarlyResolve.then((val) => {
        console.log(val);
    });
}, 3000);

