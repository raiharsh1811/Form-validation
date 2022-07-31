const username=document.getElementById("name");
const mobile=document.getElementById("phone");
const email = document.getElementById('email');
let certifiedemail=false;
let certifiedname=false;
let certifiedusername=false;


username.addEventListener("blur",function(){
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        username.classList.remove('is-invalid');

    }
    else{
        console.log('Your name is not valid');
        username.classList.add('is-invalid');
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
    
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        
    }
})
mobile.addEventListener('blur', function(){
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = mobile.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        mobile.classList.remove('is-invalid');
    
    }
    else{
        console.log('Your phone is not valid');
        mobile.classList.add('is-invalid');
        
        
    }
})