let inputEmail = document.getElementById('email'); 
let btnSubmit = document.getElementById('btnsubmit');
let error = document.getElementById('error');

btnSubmit.addEventListener('click' , (event)=>{
    
    event.preventDefault();
    
    formValidate(inputEmail.value);
});

function formValidate(email){

    let regExp= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; 
    if(regExp.test(email) ===true){
        inputEmail.style.border= '1px solid hsl(223, 100%, 88%)';
        error.style.visibility= 'hidden';
        inputEmail.value='';
    }else{
        inputEmail.style.border= '1px solid red';
        error.style.visibility = 'visible';
        inputEmail.value='';
    }
}