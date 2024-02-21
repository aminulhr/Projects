const btn =  document.getElementById('log-btn').addEventListener('click', function(){
 const emailFild =  document.getElementById('user-email');
 const email = emailFild.value;
 const passwordFild =  document.getElementById('user-password');
 const password = passwordFild.value;
 if(email === 'rana@gmail.com' && password === '123456'){
    window.location.href = 'http://127.0.0.1:5500/bank.html';
 }
 else{
    alert('Wrong id or password')
 }
})