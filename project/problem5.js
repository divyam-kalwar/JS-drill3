//    Implement a loop to access and print the ages of all individuals in the dataset.

function individuals(arrayOfObjects){
    let ages = [];
    for(const person of arrayOfObjects){
        ages.push(person.age);
    }
    return ages;
}

export default individuals;