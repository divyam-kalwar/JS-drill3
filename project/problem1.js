//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function emailId(arrayOfObjects){
    let email = [];
    for(const person of arrayOfObjects){
        email.push(person.email);
    }
    return email;
}

export default emailId;