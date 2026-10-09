//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function emailId(arrayOfObjects){
    if (arrayOfObjects.length === 0) {
        return [];
    }
    return arrayOfObjects.reduce((acc, person) => {
        acc.push(person.email);
        return acc;
    }, []);
}

export default emailId;