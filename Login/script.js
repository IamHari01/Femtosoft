document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('.login-form');
    const usernameInput = document.querySelector('.uname-input');
    const passwordInput = document.querySelector('.pass-input');

    form.addEventListener('submit',function(event){
        event.preventDefault();

        const uname = usernameInput.value.trim();
        const pwd = passwordInput.value.trim();

        if (!uname || !pwd){
            alert('Please enter both username and password.');
            return;
        }
        if(uname == 'admin' && pwd == 'password123'){
            
            alert('Login successful!');
        }else{
            alert('invalid credentials');
        }
    });
});