// const user ={
//     name: 'John Doe',
//     price: 999,
//     welcome: function(){
//         console.log(`${this.name} , Welcome to my profile`);
//         console.log(this);
        
//     }
// }
// user.welcome()
// user.name = "sam"
// user.welcome()

// console.log(this);

// function chai (){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let  username = "Tushar"
//     console.log(this);
// }

// const chai = () => {
//     let  username = "Tushar"
//     console.log(this);
// }
// chai()

// const addto = (num1, num2) => {
//     return num1+num2
   
// }
// ----------------we can also use this ---------------
//const addtwo = (num1 , num2 ) => (num1+num2)

 //console.log(addtwo(3,4));

//  ++++++++++++++++++++++Immediately Invoked Function Expressions++++++++++++++++++++++

(function chai(){
    // named iife
    console.log(`DB Connected`);
    
})();

( () => {
    console.log(`DB Connected two`)
})()