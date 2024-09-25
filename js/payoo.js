// console.log('raihan mahmud test')

// step 1. set event handler
document.getElementById('login-btn')
.addEventListener('click',function(event){
    // step 2. preventdefault behavour 
    event.preventDefault();
    // console.log('click login button');

    // Step 3. get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)
    
    // step 4. validation check but this is the wrong way
    if(phoneNumber === '01705' && pinNumber === '4405'){
        console.log('you are loged ');
    // akoy file ar moddhe login korar somoy onno jaigai niye jabe
        window.location.href = '/test.html'
    }

    //jodi password or pin vul hoy tahole alert dibe
    else{
        alert('Please Set the correct Number or Pin')
    }
})