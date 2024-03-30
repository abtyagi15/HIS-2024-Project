const AccountVerificationEmail = (otp) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Verification</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    
        <div style="background-color: #f4f4f4; padding: 20px;">
            <h2 style="color: #333333;">Account Verification</h2>
            <p style="color: #666666;">Thank you for signing up with us! To complete your account verification, please use the OTP below:</p>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);">
                <p style="font-size: 20px; color: #333333; margin: 0; padding: 0;">Your OTP: <strong style="color: #007bff;">${OTP}</strong></p>
            </div>
            <p style="color: #666666;">Please enter this OTP in the appropriate field to verify your account.</p>
            <p style="color: #666666;">If you didn't request this verification, you can safely ignore this email.</p>
            <p style="color: #666666;">Thanks,<br>Your Company Name</p>
        </div>
    
    </body>
    </html>
    `
};

module.exports = AccountVerificationEmail;
