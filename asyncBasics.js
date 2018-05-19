console.log('Starting App....');

setTimeout ( () => {
    console.log('callback..1..');
},2000);

setTimeout ( () => {
    console.log('callback..2..');
},0);

console.log('Finishing App....');