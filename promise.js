
var asyncAdd = (a,b) => {
return new Promise((resolve,reject) => {
setTimeout(() => {

if(typeof a === 'number' && typeof b === 'number'){
    resolve(a+b);
}
else
{
reject('arguments must be numbers');
}

},1500);
});
};

asyncAdd(55,20).then((res) => {
    console.log('Result : ',res);
    return asyncAdd(res,25);
}).then((res) => {
        console.log('should be : ',res);
}).catch((error) => {
    console.log('Error : ',error);
});

// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//        resolve('resolved...');
//       reject('rejected');
//     },2500);
// });

// somePromise.then((message) => {
//     console.log('Success : ',message);
// },(error) => {
//     console.log('Error : ',error);
// });