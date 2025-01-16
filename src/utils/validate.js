

export const checkValidData =(email,password)=>{
    const isEmailValid = (email) => /^[^@]+@(yahoo|ymail|rocketmail)\.com$/i.test(email);
    const isPasswordValid = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password);
    if(!isEmailValid) return 'Email is invalid';
    if(!isPasswordValid) return 'password is Invalid';
    return null;
}

