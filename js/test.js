

// add eventlistener and money add section start
document.getElementById('add-money-btn')
    .addEventListener('click',function(event ){
        //add default loading
        event.preventDefault();

        //add money section 
        const addNewMoney = document.getElementById('add-new-money').value ;
        // console.log(addNewMoney);

        //add pin section 
        const addPin = document.getElementById('add-pin').value;
        // console.log(addPin)

        if(addPin === '4405'){
            // console.log('added money');
            const accountBalance = document.getElementById(  'balance').innerText;
            // console.log(accountBalance)
            const addMoney = parseFloat(addNewMoney);
            const newBalance = parseFloat(accountBalance);
            let updateAmount = addMoney + newBalance;
            console.log(updateAmount);

            // new balance add 
            document.getElementById('balance').innerText = updateAmount;
            
        }
        else{
            alert('Please Try again leter')
        }
})