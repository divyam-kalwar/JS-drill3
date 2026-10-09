//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function hobbies(arrayOfObjects, age){
    return arrayOfObjects.reduce((acc, person) => {
        if(person.age === age){
            acc.push(person.hobbies);
        }
        return acc;
    }, []);
}

export default hobbies;