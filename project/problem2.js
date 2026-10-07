//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function hobbies(arrayOfObjects, age){
    for(const person of arrayOfObjects){
        if(person.age === age){
            return person.hobbies;
        }
    }
    return;
}

export default hobbies;