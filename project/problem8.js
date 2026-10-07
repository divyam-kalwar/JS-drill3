//    Implement a loop to access and log the city and country of each individual in the dataset.

function cityCountry(arrayOfObjects){
    const cityAndCountry = {}
    for(const person of arrayOfObjects){
        if(!cityAndCountry.city) {
            cityAndCountry.city = [];
        }

        if (!cityAndCountry.country) {
            cityAndCountry.country = [];
        }

        cityAndCountry.city.push(person.city);
        cityAndCountry.country.push(person.country);    
    }
    return cityAndCountry;
}

export default cityCountry;