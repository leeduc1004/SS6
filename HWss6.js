//Bai1:
// 1 - C
// 4 - B
// 2 - D
// 3 - A

//Bai2:
// function goialert() {
//     alert('Tao noi lan nay la lan cuoi nha');
// }
// function callbackFunction() {
//      console.log('Ok');
// }

// function functionMe(callback) {
//          setInterval(function() {
//              console.log('Ko');
//              callback()
//              100;
//          })
// }

//BAI3:
//3.1 : Biến được khai bởi let không tồn tại bên ngoài nếu được 
//      khai báo bên trong function, vì let bị giới hạn bởi scope
//3.2 : Biến được khai báo bởi var có tồn tại bên ngoài function vì
//      var không bị giới hạn bởi scope

//BAI4:

// function myFunction () {
//      let x = document.getElementsByTagName("LI");
//      document.getElementById("demo").innerHTML = x[1].innerHTML
  
//     }


// let y = document.getElementsByTagName("List");

// for(let i = 0, max = y.length; i < max; i++) {
//      console.log(y[i]);
// }

//Bai5:


// let getname = document.getElementsByClassName("singer");
// console.log(getname);

// function myFunction() {
// let x = document.getElementsByClassName("singer");
// // console.log(x[1].innerHTML);    
// for( let i = 0; i <= x.length; i++) {
//      console.log(x[i])
// }
// }


//BAI 7:
// function myFunction() {
//      let x = document.getElementById("button1");
//      x.addEventListener('click', function(event) {
//            console.log('e.targer')
//            console.log(event)
//      } 
     
//      )};

// function myfunction() {
//      let y =document.getElementById("input");
//      y.addEventListener('keydown', function(event) {
//             console.log('e.key')
         
//      })
// }


//Bai 8 :

// function mywish() {
//      alert('My name is Duc');
//      alert('I wish i could have more friends this year');
// }

// mywish();

//BAI 9 :
// const x = prompt('Enter your name');
// const y = prompt('Your wish?');
// function user(x, y) {

    
//      alert(`Your name is ${x}`);
//      alert(`Your wish is ${y}`);
// }

// user(x, y)



