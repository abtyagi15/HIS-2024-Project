const otpGenerator = require('otp-generator');

const generatedOtp = () => {
    try {
        return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    } catch (error) {
        console.error("Error in generating OTP:", error);
        return null; 
}};


module.exports = generatedOtp;
