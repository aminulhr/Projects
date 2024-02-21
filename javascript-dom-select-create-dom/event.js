// Event 2 type:
//  1).addEventListener,
//  2)Add an Event Handler.



// 1).addEventListener
// const makeRed = document.getElementById('btn1');
// makeRed.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'brown';
// });

const makeBlue = document.getElementById('btn2');
makeBlue.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});

const makeGreen = document.getElementById('btn3');
makeGreen.addEventListener('click', function(){
    document.body.style.backgroundColor='Green';
});




// 2)Add an Event Handler

function mRed(){
    document.body.style.backgroundColor='red';
    document.getElementById('btn1').innerText="Dont Sleep"
}







