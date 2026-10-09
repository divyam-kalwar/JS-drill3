//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function individual(arrayOfObjects) {
    const person = arrayOfObjects[3];

    if (!person) {
        console.log("No individual found at index 3");
        return;
    }

    console.log(`name: ${person.name}\ncity: ${person.city}`);
}

export default individual;