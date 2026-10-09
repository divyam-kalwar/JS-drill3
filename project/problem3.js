//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function studentName(arrayOfObjects, location){
    return arrayOfObjects.reduce((acc, person) => {
        if(person.isStudent && person.country === location){
            acc.push(person.name);
        }
        return acc;
    }, []);
}

export default studentName;