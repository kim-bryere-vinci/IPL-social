function isValidEmail(email: string): boolean{
    if(email.split("@").length !== 2) return false;
    const pointRegex = /\.[a-z]{2,3}$/;

    if(!pointRegex.test(email)) return false;

    if(email.includes(" ")) return false;

    const spaceRegex = /^.+@.+$/;

    if(!spaceRegex.test(email)) return false;

    return true;
}


export {isValidEmail}