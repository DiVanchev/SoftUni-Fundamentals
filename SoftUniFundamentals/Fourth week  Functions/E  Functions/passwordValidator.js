function passwordValidator (password){
    
    function checkValidLength (pass){
        if (pass.length >= 6 && pass.length <= 10){
            return true;
        }
        else{
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }
        function checkIfAlphanumeric (pass){
            const pattern = /^[A-Za-z0-9]+$/;

            if (pattern.test(pass)){
                return true;
            }
            else{
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        function checkIfatLeastTwoNums (pass){
            const pattern = /[0-9]{2,}/;

            if (pattern.test(pass)){
                return true;
            }
            else{
                console.log(`Password must have at least 2 digits`);
                return false;
            }
        }

    const isValidLength = checkValidLength(password);
    const isAlphanumeric = checkIfAlphanumeric(password);
    const isAtLeastTwoNUms = checkIfatLeastTwoNums(password);
    
    if (isValidLength && isAlphanumeric && isAtLeastTwoNUms){
        console.log('Password is valid ');
    }
    
}
//passwordValidator('logIn');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');
passwordValidator('Pa$s$s');