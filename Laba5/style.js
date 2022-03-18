let captcha = new Array();
function createCaptcha () {
    const activeCaptcha = document.getElementById("captcha");
    for (q =0; q < 6; q++){
        if (q % 2 == 0){
            captcha [q] = String.fromCharCode(Math.floor(Math.random()* 26 + 65 ));
        }else {
            captcha[q] =Math.floor(Math.random()* 10 + 0);
        }
        }
        theCaptcha = captcha.join("");
        activeCaptcha.innerHTML = `${theCaptcha}`;
    }
function validateCaptcha (){
    const errCaptcha = document.getElementById("errCaptcha");
    const reCaptcha = document.getElementByld("reCaptcha");
    reCaptcha = reCaptcha.value;
    let validateCaptcha =0;
    for (var z = 0; z < 6; z++) {
        if ( reCaptcha.charAt(z) != captcha[z]) {
            validateCaptcha++;
        }
    }
    if (reCaptcha == ""){
        errCaptcha.innerHTML = "Re-Captcha must be filled";
    } else if (validateCaptcha > 0 || reCaptcha.length > 6) {
        errCaptcha.innerHTML = "Wrong captcha";
    } else {
        errCaptcha.innerHTML = "Done";
    } 
    }
    

