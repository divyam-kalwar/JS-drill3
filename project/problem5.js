//    Implement a loop to access and print the ages of all individuals in the dataset.

function individuals(arrayOfObjects){
    if (arrayOfObjects.length === 0) {
        return [];
    }
    return arrayOfObjects.reduce((acc, person) => {
        acc.push(person.age);
        return acc;
    }, []);
}

export default individuals;