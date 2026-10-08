
let otpCode = document.querySelector("#otpCode");
let generateBtn = document.querySelector("#generateBtn");

function generateOTP() {
    let randomNumber = Math.floor(Math.random() * 10000);
    let otp = String(randomNumber).padStart(4, "0");
    otpCode.textContent = otp;
}
generateBtn.addEventListener("click", generateOTP);

generateOTP();
