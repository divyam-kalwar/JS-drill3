//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function hobby(arrayOfObjects){
    if (arrayOfObjects.length === 0) {
        return [];
    }
    return arrayOfObjects.reduce((acc, person) => {
        acc.push(person.hobbies[0]);
        return acc;
    }, []);
}

export default hobby;