//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function hobby(arrayOfObjects){
    let hobbies = [];
    for(const person of arrayOfObjects){
        hobbies.push(person.hobbies[0]);
    }
    return hobbies;
}

export default hobby;