//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function studentName(arrayOfObjects, location){
    let names = [];
    for(const person of arrayOfObjects){
        if(person.isStudent && person.country === location){
            names.push(person.name);
        }
    }
    return names;
}

export default studentName;