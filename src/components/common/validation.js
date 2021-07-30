
export const handleNameError = (text) => {

    for (let i = 0; i < text.length; i++) {
        if (!text[i].match(/^[a-zA-Z]+$/) && text[i] !== ' ') {
            return false;
        }
    }
    return true;
}

export const handleEmailError = (email) => {
    if(!email)
    return true;
    let pos1 = email.search('@');
    let ct = 0;
    let i;
    for (i = 0; i < email.length; i++) {
        if (email[i] === '@') ct++;
    }
    if (ct > 1 || pos1 === -1 || pos1 === 0 || pos1 === email.length)
        return false;
    else {
        if (email[pos1 + 1] === '.') {
            return false;
        }
        let ct2 = 0;
        let pos2;
        for (i = pos1 + 1; i < email.length; i++) {
            if (email[i] === '.') {
                pos2 = i;
                ct2++;
            }
        }
        if (ct2 !== 1)
            return false;
        if ((email.length - 1) - pos2 < 2)
            return false;
        for (i = pos2; i < email.length; i++) {
            if (!email[i].match(/^[a-zA-Z]+$/) && email[i]===' ') {
                // console.log((email[i]))
                return false;
            }
        }
        return true;

    }
}

export const handlePasswordError = (password) => {
    console.log(password);
    if(!password)
    return true;
    // let flag = false;
    // const special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-'];
    // let i, j;
    // for (i = 0; i < password.length; i++) {
    //     for (j = 0; j < special.length; j++) {
    //         if (password[i] === special[j]) {
    //             flag = true;
    //             break;
    //         }
    //     }
    //     if (flag == true) break;
    // }
    if (password.match(/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/) && password.length >= 8) return true;
    return false;

}

export const handlePhoneError = (phone) => {

    let tphone = phone.substring(4, 10);
    if ((phone.length === 14 && tphone.match(/^[0-9]+$/)) || (phone.length === 10 && phone.match(/^[0-9]+$/))) return true;
    return false;
}


export const handleConfirmPasswordError = (confirmPassword,password) => {
    if(confirmPassword!==password) return false;
    return true;

}