//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function nameAndEmail(arrayOfObjects, age){
    let name = [];
    let email = [];
    const nameEmail = {};
    for(const person of arrayOfObjects){
        if(person.age === age){
            name.push(person.name);
            email.push(person.email);
        }
    }
    nameEmail.name = name;
    nameEmail.email = email;

    return nameEmail;
}

export default nameAndEmail;
