var getUser = (id,callback) =>
{
    var user = {
        id:id,
        name:'sree'
    };

    
setTimeout ( () => {
    callback(user);
},3000);

};
getUser(31,(ub) => {
    console.log(ub);
});